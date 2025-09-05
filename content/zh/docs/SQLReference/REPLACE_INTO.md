# REPLACE INTO

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

**REPLACE INTO** 向表中插入新数据或删除表中原来的数据并插入新的数据

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-   使用REPLACE INTO语句必须同时具有表的DELETE权限和INSERT权限.
-   REPLACE INTO语句和INSERT语句一样都是向表中插入数据，区别在于当要插入的数据与表中原有数据唯一性约束冲突时，REPLACE INTO语句会删除原有的冲突数据，然后再插入新的数据. 

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
[ WITH [ RECURSIVE ] with_query [, ...] ]
REPLACE [/*+ plan_hint */] INTO table_name [partition_clause] [ AS alias ] [ ( column_name [, ...] ) ]
    { DEFAULT VALUES
    | VALUES {( { expression | DEFAULT } [, ...] ) }[, ...] 
    | query }
    [ ON DUPLICATE KEY UPDATE { NOTHING | { column_name = { expression | DEFAULT } } [, ...] [ WHERE condition ] }]
    [ RETURNING {* | {output_expression [ [ AS ] output_name ] }[, ...]} ];
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

-   **WITH \[ RECURSIVE \] with\_query \[, ...\]**

  用于声明一个或多个可以在主查询中通过名称引用的子查询，相当于临时表。

  如果声明了RECURSIVE，那么允许SELECT子查询通过名称引用它自己。

  - 其中with\_query的详细格式为：

    ```
    with_query_name [ ( column_name [, ...] ) ] AS [ [ NOT ] MATERIALIZED ]
    ( {select | values | insert | update | delete} )
    ```

    - with\_query\_name指定子查询生成的结果集名称，在查询中可使用该名称访问子查询的结果集。

    - column\_name指定子查询结果集中显示的列名。

    - 每个子查询可以是SELECT，VALUES，INSERT，UPDATE或DELETE语句。

-   **table\_name**

    要插入数据的目标表名。

    取值范围：已存在的表名。

-   **partition\_clause**

    指定分区插入操作.

    ```
    PARTITION { ( partition_name ) | FOR ( partition_value [, ...] ) } |
    SUBPARTITION { ( subpartition_name ) | FOR ( subpartition_value [, ...] ) }
    ```

   关键字详见[SELECT](SELECT.md)一节介绍

   如果value子句的值和指定分区不一致，会抛出异常。

   示例详见[CREATE TABLE SUBPARTITION](CREATE-TABLE-SUBPARTITION.md)

-   **column\_name**

    目标表中的字段名：

    -   字段名可以有子字段名或者数组下标修饰。
    -   没有在字段列表中出现的每个字段，将由系统默认值，或者声明时的默认值填充，
若都没有则用NULL填充。例如，向一个复合类型中的某些字段插入数据的话，其他字段将是
NULL。
    -   目标字段（column\_name）可以按顺序排列。如果没有列出任何字段，则默认全部
字段，且顺序为表声明时的顺序。
    -   如果value子句和query中只提供了N个字段，则目标字段为前N个字段。
    -   value子句和query提供的值在表中从左到右关联到对应列。

    取值范围：已存在的字段名。

-   **expression**

    赋予对应column的一个有效表达式或值。

    -   向表中字段插入单引号 " ' "时需要使用单引号自身进行转义。
    -   如果插入行的表达式不是正确的数据类型，系统试图进行类型转换，若转换不
成功，则插入数据失败，系统返回错误信息。

-   **DEFAULT**

    对应字段名的缺省值。如果没有缺省值，则为NULL。

-   **query**

    一个查询语句（SELECT语句），将查询结果作为插入的数据。

-   **RETURNING**

    返回实际插入的行，RETURNING列表的语法与SELECT的输出列表一致。注意：INSERT ON DUPLICATE KEY UPDATE不支持RETURNING子句。

    ```
    [ RETURNING {* | {output_expression [ [ AS ] output_name ] }[, ...]} ]
    ```

-   **output\_expression**

    INSERT命令在每一行都被插入之后用于计算输出结果的表达式。

    取值范围：该表达式可以使用table的任意字段。可以使用\*返回被插入行的所有字段>。

-   **output\_name**

    字段的输出名称。

    取值范围：字符串，符合标识符命名规范。

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
-- 创建表test.
openGauss=# CREATE TABLE test (col1 int PRIMARY KEY, col2 INT);

-- REPLACE向表中插入多条记录。
openGauss=# REPLACE INTO test values(1,2);
openGauss=# REPLACE INTO test values(2,3);
openGauss=# REPLACE INTO test values(3,4);
openGauss=# REPLACE INTO test values(4,5);

-- 查看表中的数据。
openGauss=# select * from test;
 col1 | col2
------+------
    1 |    2
    2 |    3
    3 |    4
    4 |    5
(4 rows)

-- 插入与主键冲突的数据。
openGauss=# REPLACE INTO test values(1,5);
openGauss=# REPLACE INTO test values(2,6);

-- 查看表中的数据。
openGauss=# select * from test;
 col1 | col2
------+------
    3 |    4
    4 |    5
    1 |    5
    2 |    6
(4 rows)

