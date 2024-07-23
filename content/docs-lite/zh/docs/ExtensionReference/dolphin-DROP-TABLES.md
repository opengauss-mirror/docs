# DROP TABLES

## 功能描述<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_s2baab5c876044795a12b5949f22d2144"></a>

删除一个或若干个表。

## 注意事项<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_s8ea536d5b8ff459e9e3614e35f53bc2a"></a>

-   DROP TABLES会强制删除指定的表，删除表后，依赖该表的索引会被删除，而使用到该表的函数和存储过程将无法执行。删除分区表，会同时删除分区表中的所有分区。
-   该语句执行必须拥有每一个指定删除表的删除权限。
-   如果指定删除的表中包含不存在的表，则使用IF EXISTS时，该语句会删除其他所有存在的表并产生所有不存在表的警告信息，未使用IF EXISTS时，该语句将执行失败，不会做任何数据变更，并产生错误信息提示遇到的不存在的表。

## 语法格式<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_s58bdce220c9f4292ba9af919b04ad25c"></a>

```
DROP TABLES [ IF EXISTS ] 
    { [schema.]table_name } [, ...] [ CASCADE | RESTRICT ] [ PURGE ];
```

## 参数说明<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_sf4962205ddf84312a5fd888bc662e5cf"></a>

-   **IF EXISTS**

    如果指定的表不存在，则发出一个notice而不是抛出一个错误。

-   **schema**

    模式名称。

-   **table\_name**

    表名称。

-   **CASCADE | RESTRICT**
    -   CASCADE：级联删除依赖于表的对象（比如视图）。
    -   RESTRICT（缺省项）：如果存在依赖对象（比如视图），允许删除该表，查询视图时提示相应依赖错误；新建表如果表名和列名与视图依赖相匹配，在查询视图时会重新建立与新表的依赖，恢复视图。
    
-   **PURGE**

    该参数表示即使开启回收站功能，DROP表时，也会直接物理删除表，而不是将其放入回收站中。

>涉及的参数表现与[DROP TABLE]相同(../SQLReference/DROP-TABLE.md)。

## 示例<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_se4f9dc97861c410bb51554bb58bcd76d"></a>

```
openGauss=# CREATE TABLE table_to_drop1(a int);
openGauss=# CREATE TABLE table_to_drop2(a int);
openGauss=# CREATE TABLE table_to_drop3(a int);
openGauss=# DROP TABLES table_to_drop1,table_to_drop2;
openGauss=# DROP TABLES table_to_drop3;
```

## 相关链接<a name="section156744489391"></a>

[DROP TABLE](../SQLReference/DROP-TABLE.md)
