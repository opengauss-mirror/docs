# DROP TEXT SEARCH DICTIONARY<a name="ZH-CN_TOPIC_0289900800"></a>

## 功能描述<a name="zh-cn_topic_0283137105_zh-cn_topic_0237122155_zh-cn_topic_0059777936_sb9efc89be09141c3b113326dd8c2b35d"></a>

删除全文检索词典。

## 注意事项<a name="zh-cn_topic_0283137105_zh-cn_topic_0237122155_zh-cn_topic_0059777936_s1cdad938760340bbbbd8251750b59176"></a>

-   预定义词典不支持DROP操作。
-   只有词典的所有者可以执行DROP操作，系统管理员默认拥有此权限。
-   谨慎执行DROP...CASCADE操作，该操作将级联删除使用该词典的文本搜索配置（TEXT SEARCH CONFIGURATION）。

## 语法格式<a name="zh-cn_topic_0283137105_zh-cn_topic_0237122155_zh-cn_topic_0059777936_sf623225ad89841f9a333d738aa22a6ed"></a>

```
DROP TEXT SEARCH DICTIONARY [ IF EXISTS ] name [ CASCADE | RESTRICT ]
```

## 参数说明<a name="zh-cn_topic_0283137105_zh-cn_topic_0237122155_zh-cn_topic_0059777895_se717dd5fd464489bb0235495c62d3a9e"></a>

-   **IF EXISTS**

    如果指定的全文检索词典不存在，那么发出一个Notice而不是报错。

-   **name**

    要删除的词典名称（可指定模式名，否则默认在当前模式下）。

    取值范围：已存在的词典名。

-   **CASCADE**

    自动删除依赖于该词典的对象，并依次删除依赖于这些对象的所有对象。

    如果存在任何一个使用该词典的文本搜索配置，此DROP命令将不会成功。可添加CASCADE以删除引用该词典的所有文本搜索配置以及词典。

-   **RESTRICT**

    如果任何对象依赖词典，则拒绝删除该词典。这是缺省值。


## 示例<a name="zh-cn_topic_0283137105_zh-cn_topic_0237122155_zh-cn_topic_0059777895_s7f55076bb56940b7920a431c0c344669"></a>

```
--删除词典english
openGauss=# DROP TEXT SEARCH DICTIONARY english;
```

## 相关链接<a name="zh-cn_topic_0283137105_zh-cn_topic_0237122155_zh-cn_topic_0059777895_see210f0a4a344c6d8e1bc34d85b3ec05"></a>

[ALTER TEXT SEARCH DICTIONARY](ALTER-TEXT-SEARCH-DICTIONARY.md)，[CREATE TEXT SEARCH DICTIONARY](CREATE-TEXT-SEARCH-DICTIONARY.md)
