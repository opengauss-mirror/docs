# DROP TABLE

## 功能描述<a name="zh-cn_topic_0283136462_zh-cn_topic_0237122152_zh-cn_topic_0059778107_s74e2e8764aa64af1b093f8f68069bce6"></a>

删除指定的表。

## 注意事项<a name="zh-cn_topic_0283136462_zh-cn_topic_0237122152_zh-cn_topic_0059778107_sdcf8f26a27a64e52b7099ca3ce0256b6"></a>

-   DROP TABLE会强制删除指定的表，删除表后，依赖该表的索引会被删除，而使用到该表的函数和存储过程将无法执行。删除分区表，会同时删除分区表中的所有分区。
-   表的所有者、被授予了表的DROP权限的用户或被授予DROP ANY TABLE权限的用户，有权删除指定表 ，系统管理员默认拥有该权限。

## 语法格式<a name="zh-cn_topic_0283136462_zh-cn_topic_0237122152_zh-cn_topic_0059778107_s6fa866d73d5c4158836c9fdd0ad5b3ac"></a>

```
DROP TABLE [ IF EXISTS ] 
    { [schema.]table_name } [, ...] [ CASCADE | RESTRICT ] [ PURGE ];
```

## 参数说明<a name="zh-cn_topic_0283136462_zh-cn_topic_0237122152_zh-cn_topic_0059778107_sa6ea557919e84c0db8ed5cbb227fa983"></a>

-   **IF EXISTS**

    如果指定的表不存在，则发出一个notice而不是抛出一个错误。

-   **schema**

    模式名称。

-   **table\_name**

    表名称。

-   **CASCADE | RESTRICT**
    -   CASCADE：级联删除依赖于表的对象（比如视图）。
    -   RESTRICT（缺省项）：如果存在依赖对象，则拒绝删除该表。这个是缺省。
    
- **PURGE**

  该参数表示即使开启回收站功能，DROP表时，也会直接物理删除表，而不是将其放入回收站中。


## 示例<a name="zh-cn_topic_0283136462_zh-cn_topic_0237122152_zh-cn_topic_0059778107_s1af12a7c6e4e456f9fc72da9c90358ff"></a>

请参考CREATE TABLE的[示例](CREATE-TABLE.md#zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_s86758dcf05d442d2a9ebd272e76ed1b8)。

## 相关链接<a name="zh-cn_topic_0283136462_zh-cn_topic_0237122152_zh-cn_topic_0059778107_s08580f38742d47efa6a955c9385d6ae2"></a>

[ALTER TABLE](ALTER-TABLE.md)，[CREATE TABLE](CREATE-TABLE.md)

