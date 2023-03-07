# SELECT<a name="ZH-CN_TOPIC_0289900232"></a>

## 功能描述<a name="zh-cn_topic_0283136463_zh-cn_topic_0237122184_zh-cn_topic_0059777449_s65596fb5f1d44a428e41dd508d2044a7"></a>

SELECT用于从表或视图中取出数据。

SELECT语句就像叠加在数据库表上的过滤器，利用SQL关键字从数据表中过滤出用户需要的数据。

## 注意事项<a name="zh-cn_topic_0283136463_zh-cn_topic_0237122184_zh-cn_topic_0059777449_s42c37979749545719ac9114594f45d93"></a>

-   对比原openGauss的SELECT语法，新增了WHERE子句下的sounds like语法。
-   新增join不带on/using,效果与cross join一致。
-   新增PARTITION子句可指定多个分区。
-   新增FROM DUAL 语法，含义等同于不写FROM子句，是为了满足那些要求所有SELECT语句都应该包含FROM的情况。

-   新增UNION子句列如果没有相似的数据类型，会采取转换为text类型的方式进行处理。

## 语法格式<a name="zh-cn_topic_0283136463_zh-cn_topic_0237122184_zh-cn_topic_0059777449_sb7329222602d46fe944bf6c300931dd2"></a>

-   查询数据

```
[ WITH [ RECURSIVE ] with_query [, ...] ]
SELECT [/*+ plan_hint */] [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
{ * | {expression [ [ AS ] output_name ]} [, ...] }
[ FROM from_item [, ...] ]
[ WHERE condition ]
[ [ START WITH condition ] CONNECT BY [NOCYCLE] condition [ ORDER SIBLINGS BY expression ] ]
[ GROUP BY grouping_element [, ...] ]
[ HAVING condition [, ...] ]
[ WINDOW {window_name AS ( window_definition )} [, ...] ]
[ { UNION | INTERSECT | EXCEPT | MINUS } [ ALL | DISTINCT ] select ]
[ ORDER BY {expression [ [ ASC | DESC | USING operator ] | nlssort_expression_clause ] [ NULLS { FIRST | LAST } ]} [, ...] ]
[ LIMIT { [offset,] count | ALL } ]
[ OFFSET start [ ROW | ROWS ] ]
[ FETCH { FIRST | NEXT } [ count ] { ROW | ROWS } ONLY ]
[ {FOR { UPDATE | NO KEY UPDATE | SHARE | KEY SHARE } [ OF table_name [, ...] ] [ NOWAIT ]} [...] ];
```
- 其中指定查询源from\_item为：

  ```
  {[ ONLY ] table_name [ * ] [ partition_clause ] [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
  [ TABLESAMPLE sampling_method ( argument [, ...] ) [ REPEATABLE ( seed ) ] ]
  [TIMECAPSULE {TIMESTAMP|CSN} expression]
  |( select ) [ AS ] alias [ ( column_alias [, ...] ) ]
  |with_query_name [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
  |function_name ( [ argument [, ...] ] ) [ AS ] alias [ ( column_alias [, ...] | column_definition [, ...] ) ]
  |function_name ( [ argument [, ...] ] ) AS ( column_definition [, ...] )
  |from_item [ NATURAL ] join_type from_item [ ON join_condition | USING ( join_column [, ...] ) ]}
  ```

- 其中不写FROM 子句的情况等价于：

  ```
  FROM DUAL
  ```

-   其中group子句为：

    ```
    ( )
    | expression
    | ( expression [, ...] )
    | rollup_clause
    | CUBE ( { expression | ( expression [, ...] ) } [, ...] )
    | GROUPING SETS ( grouping_element [, ...] )
    ```

-   其中指定分区partition\_clause为：

    ```
    PARTITION { ( partition_name [, ...] ) | 
            FOR (  partition_value [, ...] ) }
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >指定分区只适合分区表。

    rollup_clause子句为：

    ```
    ROLLUP ( { expression | ( expression [, ...] ) } [, ...] )
    | { expression | ( expression [, ...] ) } WITH ROLLUP
    ```

-   JOIN语法

```
[JOIN | INNER JOIN] {ON join_condition | USING ( join_column [, ...] ) }
```

## 参数说明<a name="zh-cn_topic_0283136463_zh-cn_topic_0237122184_zh-cn_topic_0059777449_sa812f65b8e8c4c638ec7840697222ddc"></a>

-   **WHERE子句**

    sounds like是condition的一种语法，用法如：column_name sounds like '字符'; 相当于soundex(column_name) = soundex('字符')的对比结果，是一个boolean的值。用于通过soundex处理来查询满足条件的数据。

-   **UNION子句**

    UNION计算多个SELECT语句返回行集合的并集。UNION内部的SELECT语句必须拥有相同数量的列，列如果没有相似的数据类型或者为UNKNOWN类型，会采取转换为text类型的方式进行处理。

    UNION子句有如下约束条件：

    -   除非声明了ALL子句，否则缺省的UNION结果不包含重复的行。
    -   同一个SELECT语句中的多个UNION操作符是从左向右计算的，除非用圆括弧进行了标识。
    -   FOR UPDATE，FOR NO KEY UPDATE，FOR SHARE和FOR KEY SHARE不能在UNION的结果或输入中声明。

    一般表达式：

    select\_statement UNION \[ALL\] select\_statement

    -   select\_statement可以是任何没有ORDER BY、LIMIT、FOR UPDATE，FOR NO KEY UPDATE，FOR SHARE或FOR KEY SHARE子句的SELECT语句。
    -   如果用圆括弧包围，ORDER BY和LIMIT可以附着在子表达式里。

> ![](public_sys-resources/icon-note.gif) **说明：** 
> 
> 涉及的其它参数说明可见[SELECT](SELECT.md)。

## 示例<a name="zh-cn_topic_0283136463_zh-cn_topic_0237122184_zh-cn_topic_0059777449_sc1b5e63c90c946b89430696c38fc86c0"></a>

- SOUNDS LIKE子句示例：同音字段查询

```
openGauss=# CREATE TABLE TEST(id int, name varchar);
openGauss=# INSERT INTO TEST VALUES(1, 'too');
openGauss=# SELECT * FROM TEST WHERE name SOUNDS LIKE 'two';
 id | name
----+------
  1 | too
(1 row)
```

- SELECT 语句中使用FROM DUAL 示例

```
openGauss=# select 1 as col;
 col
-----
   1
(1 row)
openGauss=# select 1 as col FROM DUAL;
 col
-----
   1
(1 row)
```

- SELECT GROUP BY子句中使用ROLLUP
```
openGauss=# CREATE TABLESPACE t_tbspace ADD DATAFILE 'my_tablespace' ENGINE = test_engine;
CREATE TABLESPACE
openGauss=# CREATE TABLE t_with_rollup(id int, name varchar(20), area varchar(50), count int);
CREATE TABLE
openGauss=# INSERT INTO t_with_rollup values(1, 'a', 'A', 10);
INSERT 0 1
openGauss=# INSERT INTO t_with_rollup values(2, 'b', 'B', 15);
INSERT 0 1
openGauss=# INSERT INTO t_with_rollup values(2, 'b', 'B', 20);
INSERT 0 1
openGauss=# INSERT INTO t_with_rollup values(3, 'c', 'C', 50);
INSERT 0 1
openGauss=# INSERT INTO t_with_rollup values(3, 'c', 'C', 15);
INSERT 0 1
openGauss=# SELECT name, sum(count) FROM t_with_rollup GROUP BY ROLLUP(name);
 name | sum
------+-----
 a    |  10
 b    |  35
 c    |  65
      | 110
(4 rows)

openGauss=# SELECT name, sum(count) FROM t_with_rollup GROUP BY (name) WITH ROLLUP;
 name | sum
------+-----
 a    |  10
 b    |  35
 c    |  65
      | 110
(4 rows)
```

```
openGauss=# create table join_1(col1 int4, col2 int8);

openGauss=# create table join_2(col1 int4, col2 int8);

openGauss=# insert into join_1 values(1, 2), (3, 3);

openGauss=# insert into join_2 values(1, 1), (2, 3), (4, 4);

openGauss=# select join_1 join join_2;

 col1 | col2 | col1 | col2
------+------+------+------
    1 |    2 |    1 |    1
    1 |    2 |    2 |    3
    1 |    2 |    4 |    4
    3 |    3 |    1 |    1
    3 |    3 |    2 |    3
    3 |    3 |    4 |    4

openGauss=# select join_1 inner join join_2;

 col1 | col2 | col1 | col2
------+------+------+------
    1 |    2 |    1 |    1
    1 |    2 |    2 |    3
    1 |    2 |    4 |    4
    3 |    3 |    1 |    1
    3 |    3 |    2 |    3
    3 |    3 |    4 |    4

```

- SELECT FROM PARTITION子句指定多个分区
```
openGauss=# create table multi_partition_select_test(C_INT INTEGER) partition by range(C_INT)
openGauss-# (
openGauss(#     partition test_part1 values less than (400),
openGauss(#     partition test_part2 values less than (700),
openGauss(#     partition test_part3 values less than (1000)
openGauss(# );
CREATE TABLE
openGauss=# insert into multi_partition_select_test values(111);
INSERT 0 1
openGauss=# insert into multi_partition_select_test values(555);
INSERT 0 1
openGauss=# insert into multi_partition_select_test values(888);
INSERT 0 1

openGauss=# select a.* from multi_partition_select_test partition (test_part1, test_part2) a;
 c_int
-------
   111
   555
(2 rows)

```

## 相关链接<a name="section156744489391"></a>

[SELECT](SELECT.md)