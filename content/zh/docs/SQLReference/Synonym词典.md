# Synonym词典<a name="ZH-CN_TOPIC_0289900265"></a>

Synonym词典用于定义、识别token的同义词并转化，不支持词组（词组形式的同义词可用Thesaurus词典定义，详细请参见[Thesaurus词典](Thesaurus词典.md)）。

## 示例<a name="zh-cn_topic_0283137688_zh-cn_topic_0237122037_section10442451826"></a>

-   Synonym词典可用于解决语言学相关问题，例如，为避免使单词“Paris”变成“pari”，可在Synonym词典文件中定义一行“Paris paris”，并将该词典放置在预定义的english\_stem词典之前。

    ```
    openGauss=# SELECT * FROM ts_debug('english', 'Paris');
       alias   |   AboutopenGauss   | token |  dictionaries  |  dictionary  | lexemes 
    -----------+-----------------+-------+----------------+--------------+---------
     asciiword | Word, all ASCII | Paris | {english_stem} | english_stem | {pari}
    (1 row)
    
    openGauss=# CREATE TEXT SEARCH DICTIONARY my_synonym (
        TEMPLATE = synonym,
        SYNONYMS = my_synonyms,
        FILEPATH = 'file:///home/dicts/' 
    );
    
    openGauss=# ALTER TEXT SEARCH CONFIGURATION english
        ALTER MAPPING FOR asciiword
        WITH my_synonym, english_stem;
    
    openGauss=# SELECT * FROM ts_debug('english', 'Paris');
       alias   |   AboutopenGauss   | token |       dictionaries        | dictionary | lexemes 
    -----------+-----------------+-------+---------------------------+------------+---------
     asciiword | Word, all ASCII | Paris | {my_synonym,english_stem} | my_synonym | {paris}
    (1 row)
    
    openGauss=# SELECT * FROM ts_debug('english', 'paris');
       alias   |   AboutopenGauss   | token |       dictionaries        | dictionary | lexemes 
    -----------+-----------------+-------+---------------------------+------------+---------
     asciiword | Word, all ASCII | Paris | {my_synonym,english_stem} | my_synonym | {paris}
    (1 row)
    
    openGauss=# ALTER TEXT SEARCH DICTIONARY my_synonym ( CASESENSITIVE=true);
    
    openGauss=# SELECT * FROM ts_debug('english', 'Paris');
       alias   |   AboutopenGauss   | token |       dictionaries        | dictionary | lexemes 
    -----------+-----------------+-------+---------------------------+------------+---------
     asciiword | Word, all ASCII | Paris | {my_synonym,english_stem} | my_synonym | {paris}
    (1 row)
    
    openGauss=# SELECT * FROM ts_debug('english', 'paris');
       alias   |   AboutopenGauss   | token |       dictionaries        | dictionary | lexemes 
    -----------+-----------------+-------+---------------------------+------------+---------
     asciiword | Word, all ASCII | Paris | {my_synonym,english_stem} | my_synonym | {pari}
    (1 row)
    
    ```

    其中，同义词词典文件全名为my\_synonyms.syn，所在目录为当前连接数据库主节点的/home/dicts/下。关于创建词典的语法和更多参数，请参见[ALTER TEXT SEARCH DICTIONARY](ALTER-TEXT-SEARCH-DICTIONARY.md)。

-   星号（\*）可用于词典文件中的同义词结尾，表示该同义词是一个前缀。在to\_tsvector\(\)中该星号将被忽略，但在to\_tsquery\(\)中会匹配该前缀并对应输出结果（参照[处理查询](处理查询.md)一节）。

    假设词典文件synonym\_sample.syn内容如下：

    ```
    postgres        pgsql
    postgresql      pgsql 
    postgre pgsql 
    gogle   googl 
    indices index*
    ```

    创建并使用词典：

    ```
    openGauss=# CREATE TEXT SEARCH DICTIONARY syn (
        TEMPLATE = synonym,
        SYNONYMS = synonym_sample
    );
    
    openGauss=# SELECT ts_lexize('syn','indices');
     ts_lexize 
    -----------
     {index}
    (1 row)
    
    openGauss=# CREATE TEXT SEARCH CONFIGURATION tst (copy=simple);
    
    openGauss=# ALTER TEXT SEARCH CONFIGURATION tst ALTER MAPPING FOR asciiword WITH syn;
    
    openGauss=# SELECT to_tsvector('tst','indices');
     to_tsvector 
    -------------
     'index':1
    (1 row)
    
    openGauss=# SELECT to_tsquery('tst','indices');
     to_tsquery 
    ------------
     'index':*
    (1 row)
    
    openGauss=# SELECT 'indexes are very useful'::tsvector;
                tsvector             
    ---------------------------------
     'are' 'indexes' 'useful' 'very'
    (1 row)
    
    openGauss=# SELECT 'indexes are very useful'::tsvector @@ to_tsquery('tst','indices');
     ?column? 
    ----------
     t
    (1 row)
    ```


