# Simple词典<a name="ZH-CN_TOPIC_0289900949"></a>

Simple词典首先将输入标记转换为小写字母，然后检查停用词表。如果识别为停用词则返回空数组，即表示该标记会被丢弃。否则，输入标记的小写形式作为规范化后的lexeme返回。此外，Simple词典可通过设置参数Accept为false（默认值true），将非停用词报告为未识别，传递给后继词典继续处理。

## 注意事项<a name="zh-cn_topic_0283137253_zh-cn_topic_0237122036_section1750055382816"></a>

-   大多数词典的功能依赖于词典定义文件，词典定义文件名仅支持小写字母、数字、下划线组合。
-   临时模式pg\_temp下不允许创建词典。
-   词典定义文件的字符集编码必须为UTF-8格式。实际应用时，如果与数据库的字符编码格式不一致，在读入词典定义文件时会进行编码转换。
-   通常情况下，每个session仅读取词典定义文件一次，当且仅当在第一次使用该词典时。需要修改词典文件时，可通过ALTER TEXT SEARCH DICTIONARY命令进行词典定义文件的更新和重新加载。

## 操作步骤<a name="zh-cn_topic_0283137253_zh-cn_topic_0237122036_section75460100182"></a>

1.  创建Simple词典。

    ```
    openGauss=# CREATE TEXT SEARCH DICTIONARY public.simple_dict (
         TEMPLATE = pg_catalog.simple,
         STOPWORDS = english
    );
    ```

    其中，停用词表文件全名为english.stop。关于创建simple词典的语法和更多参数，请参见[CREATE TEXT SEARCH DICTIONARY](CREATE-TEXT-SEARCH-DICTIONARY.md)。

2.  使用Simple词典。

    ```
    openGauss=# SELECT ts_lexize('public.simple_dict','YeS');
     ts_lexize
    -----------
     {yes}
    (1 row)

    openGauss=# SELECT ts_lexize('public.simple_dict','The');
     ts_lexize
    -----------
     {}
    (1 row)
    ```

3.  设置参数ACCEPT=false，使Simple词典返回NULL，而不是返回非停用词的小写形式。

    ```
    openGauss=# ALTER TEXT SEARCH DICTIONARY public.simple_dict ( Accept = false );
    ALTER TEXT SEARCH DICTIONARY
    openGauss=# SELECT ts_lexize('public.simple_dict','YeS');
     ts_lexize
    -----------

    (1 row)

    openGauss=# SELECT ts_lexize('public.simple_dict','The');
     ts_lexize
    -----------
     {}
    (1 row)
    ```
