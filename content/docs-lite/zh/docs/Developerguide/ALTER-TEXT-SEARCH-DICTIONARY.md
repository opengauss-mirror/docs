# ALTER TEXT SEARCH DICTIONARY<a name="ZH-CN_TOPIC_0289900782"></a>

## 功能描述<a name="zh-cn_topic_0283136970_zh-cn_topic_0237122080_zh-cn_topic_0059777936_sb9efc89be09141c3b113326dd8c2b35d"></a>

修改全文检索词典的相关定义，包括参数、名称、所有者、以及模式等。

## 注意事项<a name="zh-cn_topic_0283136970_zh-cn_topic_0237122080_zh-cn_topic_0059777936_s1cdad938760340bbbbd8251750b59176"></a>

-   预定义词典不支持ALTER操作。
-   只有词典的所有者可以执行ALTER操作，系统管理员默认拥有此权限。
-   创建或修改词典之后，任何对于filepath路径下用户自定义的词典定义文件的修改，将不会影响到数据库中的词典。如果需要在数据库中使用这些修改，需使用ALTER TEXT SEARCH DICTIONARY语句更新对应词典的定义文件。

## 语法格式<a name="zh-cn_topic_0283136970_zh-cn_topic_0237122080_zh-cn_topic_0059777936_sf623225ad89841f9a333d738aa22a6ed"></a>

-   修改词典定义。

    ```
    ALTER TEXT SEARCH DICTIONARY name (
        option [ = value ] [, ... ]
    );
    ```


-   重命名词典。

    ```
    ALTER TEXT SEARCH DICTIONARY name RENAME TO new_name;
    ```

-   设置词典的所属模式。

    ```
    ALTER TEXT SEARCH DICTIONARY name SET SCHEMA new_schema;
    ```

-   修改词典的所属者。

    ```
    ALTER TEXT SEARCH DICTIONARY name OWNER TO new_owner;
    ```


## 参数说明<a name="zh-cn_topic_0283136970_zh-cn_topic_0237122080_zh-cn_topic_0059777895_se717dd5fd464489bb0235495c62d3a9e"></a>

-   **name**

    已存在的词典名（可指定模式名，否则默认在当前模式下）。

    取值范围：已存在的词典名。

-   **option**

    要修改的参数名。与template对应，不同的词典类型具有不同的参数列表，且与指定顺序无关。详细参数说明请见[option](CREATE-TEXT-SEARCH-DICTIONARY.md#zh-cn_topic_0283137272_zh-cn_topic_0237122122_li1286812455448)。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >-   不支持修改词典的TEMPLATE参数值。
    >-   不支持仅修改FILEPATH参数而不修改对应的词典定义文件参数。
    >-   词典定义文件的文件名仅支持小写字母、数据、下划线混合。

-   **value**

    要修改的参数值。如果省略等号（=）和value，则表示删除该option的先前设置，使用默认值。

    取值范围：对应option定义。

-   **new\_name**

    词典的新名称。

    取值范围：符合标识符命名规范的字符串，且最大长度不超过63个字符。

-   **new\_owner**

    词典新的所有者。

    取值范围：已存在的用户。

-   **new\_schema**

    词典的新模式。

    取值范围：已存在的模式。


## 示例<a name="zh-cn_topic_0283136970_zh-cn_topic_0237122080_zh-cn_topic_0059777895_s7f55076bb56940b7920a431c0c344669"></a>

```
--更改Snowball类型字典的停用词定义，其他参数保持不变。
openGauss=# ALTER TEXT SEARCH DICTIONARY my_dict ( StopWords = newrussian, FilePath = 'file:///home/dicts' );

--更改Snowball类型字典的Language参数，并删除停用词定义。
openGauss=# ALTER TEXT SEARCH DICTIONARY my_dict ( Language = dutch, StopWords );

--更新词典定义，不实际更改任何内容。
openGauss=# ALTER TEXT SEARCH DICTIONARY my_dict ( dummy );
```

## 相关链接<a name="zh-cn_topic_0283136970_zh-cn_topic_0237122080_zh-cn_topic_0059777895_see210f0a4a344c6d8e1bc34d85b3ec05"></a>

[CREATE TEXT SEARCH DICTIONARY](CREATE-TEXT-SEARCH-DICTIONARY.md)，[DROP TEXT SEARCH DICTIONARY](DROP-TEXT-SEARCH-DICTIONARY.md)

