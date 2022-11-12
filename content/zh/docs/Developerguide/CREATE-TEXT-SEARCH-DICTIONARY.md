# CREATE TEXT SEARCH DICTIONARY<a name="ZH-CN_TOPIC_0289899995"></a>

## 功能描述<a name="zh-cn_topic_0283137272_zh-cn_topic_0237122122_zh-cn_topic_0059777936_sb9efc89be09141c3b113326dd8c2b35d"></a>

创建一个新的全文检索词典。词典是一种指定在全文检索时识别特定词并处理的方法。

词典的创建依赖于预定义模板（在系统表[PG\_TS\_TEMPLATE](PG_TS_TEMPLATE.md)中定义），支持创建五种类型的词典，分别是Simple、Ispell、Synonym、Thesaurus以及Snowball，每种类型的词典可以完成不同的任务。

## 注意事项<a name="zh-cn_topic_0283137272_zh-cn_topic_0237122122_zh-cn_topic_0059777936_s1cdad938760340bbbbd8251750b59176"></a>

-   具有SYSADMIN权限的用户可以执行创建词典操作，创建该词典的用户自动成为其所有者。
-   临时模式（pg\_temp）下不允许创建词典。
-   创建或修改词典之后，任何对于用户自定义的词典定义文件的修改，将不会影响到数据库中的词典。如果需要在数据库中使用这些修改，需使用ALTER语句更新对应词典的定义文件。

## 语法格式<a name="zh-cn_topic_0283137272_zh-cn_topic_0237122122_zh-cn_topic_0059777936_sf623225ad89841f9a333d738aa22a6ed"></a>

```
CREATE TEXT SEARCH DICTIONARY name (
    TEMPLATE = template
    [, option = value [, ... ]]
);
```

## 参数说明<a name="zh-cn_topic_0283137272_zh-cn_topic_0237122122_zh-cn_topic_0059777895_se717dd5fd464489bb0235495c62d3a9e"></a>

-   **name**

    要创建的词典的名称（可指定模式名，否则在当前模式下创建）。

    取值范围：符合标识符命名规范的字符串，且最大长度不超过63个字符。

-   **template**

    模板名。

    取值范围：系统表[PG\_TS\_TEMPLATE](PG_TS_TEMPLATE.md)中定义的模板：Simple/Synonym/Thesaurus/Ispell/Snowball。

-   **option**

    参数名。与template值对应，不同的词典模板具有不同的参数列表，且与指定顺序无关。

    -   Simple词典对应的option
        -   **STOPWORDS**

            停用词表文件名，默认后缀名为stop。停用词文件格式为一组word列表，每行定义一个停用词。词典处理时，文件中的空行和空格会被忽略，并将stopword词组转换为小写形式。

        -   **ACCEPT**

            是否将非停用词设置为已识别。默认值为true。

            当Simple词典设置参数ACCEPT=true时，将不会传递任何token给后继词典，此时建议将其放置在词典列表的最后。反之，当ACCEPT=false时，建议将该Simple词典放置在列表中的至少一个词典之前。

        -   **FILEPATH**

            词典文件所在目录。目录可以指定为本地目录和OBS目录（只能在安全模式下指定OBS目录，通过启动时添加securitymode选项进入安全模式）。其中，本地目录格式为“file://absolute\_path”，OBS目录格式为“obs://bucket\_name/path accesskey=ak secretkey=sk region=rg”。默认值为预定义词典文件所在目录。FILEPATH参数必须和STOPWORDS参数同时指定，不允许单独指定。

    -   Synonym词典对应的option
        -   **SYNONYM**

            同义词词典的定义文件名，默认后缀名为syn。

            文件格式为一组同义词列表，每行格式为“token synonym”，即token和其对应的synonym，中间以空格相连。

        -   **CASESENSITIVE**

            设置是否大小写敏感，默认值为false，此时词典文件中的token和synonym均会转为小写形式处理。如果设置为true，则不会进行小写转换。

        -   **FILEPATH**

            同义词词典文件所在目录。目录可以指定为本地目录和OBS目录两种形式（只能在安全模式下指定OBS目录，通过启动时添加securitymode选项进入安全模式）。其中，本地目录格式为“file://absolute\_path”，OBS目录格式为“obs://bucket\_name/path accesskey=ak secretkey=sk region=rg”。默认值为预定义词典文件所在目录。

    -   Thesaurus词典对应的option
        -   **DICTFILE**

            词典定义文件名，默认后缀名为ths。

            文件格式为一组同义词列表，每行格式为“sample words : indexed words”，中间冒号（:）作为短语和其替换词间的分隔符。TZ词典处理时，如果有多个匹配的sample words，将选择最长匹配输出。

        -   **DICTIONARY**

            用于词规范化的子词典名，必须且仅能定义一个。该词典必须是已经存在的，在检查短语匹配之前使用，用于识别和规范输入文本。

            如果子词典无法识别输入词，将会报错。此时，需要移除该词或者更新子词典使其识别。此外，可在indexed words的开头放上一个星号（\*）来跳过在其上应用子词典，但是所有sample words必须可以被子词典识别。

            如果词典文件定义的sample words中，含有子词典中定义的停用词，需要用问号（？）替代停用词。假设a和the是子词典中所定义的停用词，如下：

            ```
            ? one ? two : swsw
            ```

            上述同义词组定义会匹配“a one the two”以及“the one a two”，这两个短语均会被swsw替代输出。

        -   **FILEPATH**

            词典定义文件所在目录。目录可以指定为本地目录和OBS目录两种形式（只能在安全模式下指定OBS目录，通过启动时添加securitymode选项进入安全模式）。其中，本地目录格式为“file://absolute\_path”，OBS目录格式为“obs://bucket\_name/path accesskey=ak secretkey=sk region=rg”。默认值为预定义词典文件所在目录。

    -   Ispell词典
        -   **DICTFILE**

            词典定义文件名，默认后缀名为dict。

        -   **AFFFILE**

            词缀文件名，默认后缀名为affix。

        -   **STOPWORDS**

            停用词文件名，默认后缀名为stop，文件格式要求与Simple类型词典的停用词文件相同。

        -   **FILEPATH**

            词典文件所在目录。可以指定为本地目录和OBS目录两种形式（只能在安全模式下指定OBS目录，通过启动时添加securitymode选项进入安全模式）。其中，本地目录格式为“file://absolute\_path”，OBS目录格式为“obs://bucket\_name/path accesskey=ak secretkey=sk region=rg”。默认值为预定义词典文件所在目录。

    -   Snowball词典
        -   **LANGUAGE**

            语言名，标识使用哪种语言的词干分析算法。算法按照对应语言中的拼写规则，缩减输入词的常见变体形式为一个基础词或词干。

        -   **STOPWORDS**

            停用词表文件名，默认后缀名为stop，文件格式要求与Simple类型词典的停用词文件相同。

        -   **FILEPATH**

            词典定义文件所在目录。可以指定为本地目录或者OBS目录（只能在安全模式下指定OBS目录，通过启动时添加securitymode选项进入安全模式）。其中，本地目录格式为“file://absolute\_path”，OBS目录格式为“obs://bucket\_name/path accesskey=ak secretkey=sk region=rg”。默认值为预定义词典文件所在目录。FILEPATH参数必须和STOPWORDS参数同时指定，不允许单独指定。


    >![](public_sys-resources/icon-note.png) **说明：** 
    >词典定义文件的文件名仅支持小写字母、数据、下划线混合。

-   **value**

    参数值。如果不是简单的标识符或数字，则参数值必须加单引号（标示符和数字同样可以加上单引号）。


## 示例<a name="zh-cn_topic_0283137272_zh-cn_topic_0237122122_zh-cn_topic_0059777895_s7f55076bb56940b7920a431c0c344669"></a>

请参见[配置示例](配置示例.md)一节的示例。

## 相关链接<a name="zh-cn_topic_0283137272_zh-cn_topic_0237122122_zh-cn_topic_0059777895_see210f0a4a344c6d8e1bc34d85b3ec05"></a>

[ALTER TEXT SEARCH DICTIONARY](ALTER-TEXT-SEARCH-DICTIONARY.md)，[CREATE TEXT SEARCH DICTIONARY](CREATE-TEXT-SEARCH-DICTIONARY.md)

