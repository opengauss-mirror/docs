# Thesaurus词典<a name="ZH-CN_TOPIC_0289900582"></a>

Thesaurus词典，也叫做分类词典（缩写为TZ），是一组定义了词以及词组间关系的集合，包括广义词（BT）、狭义词（NT）、首选词、非首选词、相关词等。根据词典文件中的定义，TZ词典用一个指定的短语替换对应匹配的所有短语，并且可选择保留原始短语进行索引。TZ词典实际上是Synonym词典的一个扩展，增加了短语支持。

## 注意事项<a name="zh-cn_topic_0283137504_zh-cn_topic_0237122038_section62562319454"></a>

-   由于TZ词典需要识别短语，所以在处理过程中必须保存当前状态并与解析器进行交互，以决定是否处理下一个token或是结束当前识别。此外，TZ词典配置时需谨慎，如果设置TZ词典仅处理asciiword类型的token，则类似one 7的分类词典定义将不会生效，因为uint类型的token不会传给TZ词典处理。
-   在索引期间要用到分类词典，因此分类词典参数中的任何变化都要求重新索引。对于其他大多数类型的词典来说，类似添加或删除停用词这种修改并不需要强制重新索引。

## 操作步骤<a name="zh-cn_topic_0283137504_zh-cn_topic_0237122038_section1031795115131"></a>

1.  创建一个名为thesaurus\_astro的TZ词典。

    以一个简单的天文学词典thesaurus\_astro为例，其中定义了两组天文短语及其同义词如下：

    ```
    supernovae stars : sn
    crab nebulae : crab
    ```

    执行如下语句创建TZ词典：

    ```
    openGauss=# CREATE TEXT SEARCH DICTIONARY thesaurus_astro (
        TEMPLATE = thesaurus,
        DictFile = thesaurus_astro,
        Dictionary = pg_catalog.english_stem,
        FILEPATH = 'file:///home/dicts/'
    );
    ```

    其中，词典定义文件全名为thesaurus\_astro.ths，所在目录为当前连接数据库主节点的/home/dicts/下 。子词典pg\_catalog.english\_stem是预定义的Snowball类型的英语词干词典，用于规范化输入词，子词典自身相关配置（例如停用词等）不在此处显示。关于创建词典的语法和更多参数，请参见[CREATE TEXT SEARCH DICTIONARY](CREATE-TEXT-SEARCH-DICTIONARY.md)。

2.  创建词典后，将其绑定到对应文本搜索配置中需要处理的token类型上：

    ```
    openGauss=# ALTER TEXT SEARCH CONFIGURATION russian
        ALTER MAPPING FOR asciiword, asciihword, hword_asciipart
        WITH thesaurus_astro, english_stem;
    ```

3.  使用TZ词典。
    -   测试TZ词典。

        ts\_lexize函数对于测试TZ词典作用不大，因为该函数是按照单个token处理输入。可以使用plainto\_tsquery、to\_tsvector、to\_tsquery函数测试TZ词典，这些函数能够将输入分解成多个token（to\_tsquery函数需要将输入加上引号）。

        ```
        openGauss=# SELECT plainto_tsquery('russian','supernova star');
         plainto_tsquery
        -----------------
         'sn'
        (1 row)

        openGauss=# SELECT to_tsvector('russian','supernova star');
         to_tsvector
        -------------
         'sn':1
        (1 row)

        openGauss=# SELECT to_tsquery('russian','''supernova star''');
         to_tsquery
        ------------
         'sn'
        (1 row)

        ```

        其中，supernova star匹配了词典thesaurus\_astro定义中的supernovae stars，这是因为在thesaurus\_astro词典定义中指定了Snowball类型的子词典english\_stem，该词典移除了e和s。

    -   如果同时需要索引原始短语，只要将其同时放置在词典定义文件中对应定义的右侧即可，如下：

        ```
        supernovae stars : sn supernovae stars

        openGauss=# ALTER TEXT SEARCH DICTIONARY thesaurus_astro (
            DictFile = thesaurus_astro,
            FILEPATH = 'file:///home/dicts/');

        openGauss=# SELECT plainto_tsquery('russian','supernova star');
               plainto_tsquery
        -----------------------------
         'sn' & 'supernova' & 'star'
        (1 row)
        ```
