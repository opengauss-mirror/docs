# SELECT<a name="ZH-CN_TOPIC_0289900232"></a>

## 功能描述<a name="zh-cn_topic_0283136463_zh-cn_topic_0237122184_zh-cn_topic_0059777449_s65596fb5f1d44a428e41dd508d2044a7"></a>

SELECT用于从表或视图中取出数据。

SELECT语句就像叠加在数据库表上的过滤器，利用SQL关键字从数据表中过滤出用户需要的数据。

## 注意事项<a name="zh-cn_topic_0283136463_zh-cn_topic_0237122184_zh-cn_topic_0059777449_s42c37979749545719ac9114594f45d93"></a>

-   对比原openGauss的SELECT语法，新增了WHERE子句下的sounds like语法。

-   新增join不带on/using,效果与cross join一致。

-   新增PARTITION子句可指定多个分区。

-   新增UNION子句列如果没有相似的数据类型，会采取转换为text类型的方式进行处理。

-   新增FROM DUAL 语法，含义等同于不写FROM子句，是为了满足那些要求所有SELECT语句都应该包含FROM的情况。

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
-   其中指定查询源from\_item为：

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

    >![](public_sys-resources/icon-note.png) **说明：** 
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

    where 子句可以包含兼容MySQL全文索引的查询语法。match(column_name [, ...]) against ('匹配字符')也是condition的一种语法。
    ```sql
    where match(column_name [, ...]) against ('匹配字符');
    ```
    column_name可以是多列，列名之间用逗号分隔。
    against()的匹配字符只能是字符内容(即全文索引支持字段类型只能是这三种char, varchar, text)，不包含int, bool, 特殊字符(!,#,空格等)与正规功能。
    注意：
        mysql的全文索引查询语法match(column_name)允许无序，但该功能底层用的是opengauss的to_tsvector(),他的要求是字段顺序必须有序(与表的字段顺序一致)。

    用于安装了dolphin插件，处于MySQL兼容性场景下的全文索引查询。其语法结构相当于
    ```sql
    to_tsvector('ngram', col_name [|| col_name]) @@ to_tsquery('字符串')
    ```

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

> ![](public_sys-resources/icon-note.png) **说明：** 
> 
> 涉及的其它参数说明可见[SELECT](../SQLReference/SELECT.md)。

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

- UNION子句非相似数据类型按 TEXT 类型进行转换示例：
```sql
-- 首先创建兼容模式为B的数据库
CREATE DATABASE mydb WITH DBCOMPATIBILITY 'B';
\c mydb

-- 创建两个表并插入测试数据
CREATE TABLE tbl_date(col DATE);
INSERT INTO tbl_date VALUES('2000-02-16');
CREATE TABLE tbl_json(col JSON);
INSERT INTO tbl_json VALUES('{"id":1,"dbname":"openGauss","language":"C++"}');

-- UNION 查询，将会使用TEXT类型进行转换
SELECT * FROM tbl_date UNION SELECT * FROM tbl_json;
```

- 兼容MySQL兼容性全文索引语法查询，前提是兼容模式为B的数据库。
```sql
openGauss=# CREATE SCHEMA fulltext_test;
CREATE SCHEMA
openGauss=# set current_schema to 'fulltext_test';
SET
openGauss=# CREATE TABLE test (
openGauss(# id int unsigned auto_increment not null primary key,
openGauss(# title varchar,
openGauss(# boby text,
openGauss(# name name,
openGauss(# FULLTEXT (title, boby) WITH PARSER ngram
openGauss(# );
NOTICE:  CREATE TABLE will create implicit sequence "test_id_seq" for serial column "test.id"
NOTICE:  CREATE TABLE / PRIMARY KEY will create implicit index "test_pkey" for table "test"
CREATE TABLE
openGauss=# \d test
              Table "fulltext_test.test"
 Column |       Type        |        Modifiers
--------+-------------------+-------------------------
 id     | uint4             | not null AUTO_INCREMENT
 title  | character varying |
 boby   | text              |
 name   | name              |
Indexes:
    "test_pkey" PRIMARY KEY, btree (id) TABLESPACE pg_default
    "test_to_tsvector_to_tsvector1_idx" gin (to_tsvector('ngram'::regconfig, title::text), to_tsvector('ngram'::regconfig, boby)) TABLESPACE pg_default

openGauss=# \d test_to_tsvector_to_tsvector1_idx
      Index "fulltext_test.test_to_tsvector_to_tsvector1_idx"
    Column    | Type |                  Definition
--------------+------+----------------------------------------------
 to_tsvector  | text | to_tsvector('ngram'::regconfig, title::text)
 to_tsvector1 | text | to_tsvector('ngram'::regconfig, boby)
gin, for table "fulltext_test.test"

openGauss=# DROP INDEX test_to_tsvector_to_tsvector1_idx;
DROP INDEX
openGauss=# ALTER TABLE test ADD FULLTEXT INDEX test_index_1 (title, boby) WITH PARSER ngram;
ALTER TABLE
openGauss=# DROP INDEX test_index_1;
DROP INDEX
openGauss=# CREATE FULLTEXT INDEX test_index_1 ON test (title, boby) WITH PARSER ngram;
CREATE INDEX
openGauss=# \d test_index_1
                 Index "fulltext_test.test_index_1"
    Column    | Type |                  Definition
--------------+------+----------------------------------------------
 to_tsvector  | text | to_tsvector('ngram'::regconfig, title::text)
 to_tsvector1 | text | to_tsvector('ngram'::regconfig, boby)
gin, for table "fulltext_test.test"

openGauss=# INSERT INTO test(title, boby, name) VALUES('test', '&67575@gauss', 'opengauss');
INSERT 0 1
openGauss=# INSERT INTO test(title, boby, name) VALUES('test1', 'gauss', 'opengauss');
INSERT 0 1
openGauss=# INSERT INTO test(title, boby, name) VALUES('test2', 'gauss2', 'opengauss');
INSERT 0 1
openGauss=# INSERT INTO test(title, boby, name) VALUES('test3', 'test', 'opengauss');
INSERT 0 1
openGauss=# INSERT INTO test(title, boby, name) VALUES('gauss_123_@', 'test', 'opengauss');
INSERT 0 1
openGauss=# INSERT INTO test(title, boby, name) VALUES('', '', 'opengauss');
INSERT 0 1
openGauss=# INSERT INTO test(title, boby, name) VALUES(' ', ' ', ' ');
INSERT 0 1
openGauss=# SELECT * FROM TEST;
 id |    title    |     boby     |   name
----+-------------+--------------+-----------
 1  | test        | &67575@gauss | opengauss
 2  | test1       | gauss        | opengauss
 3  | test2       | gauss2       | opengauss
 4  | test3       | test         | opengauss
 5  | gauss_123_@ | test         | opengauss
 6  |             |              | opengauss
 7  |             |              |
(7 rows)

openGauss=# SELECT * FROM TEST WHERE MATCH (title, boby) AGAINST ('test');
 id |    title    |     boby     |   name
----+-------------+--------------+-----------
 1  | test        | &67575@gauss | opengauss
 2  | test1       | gauss        | opengauss
 3  | test2       | gauss2       | opengauss
 4  | test3       | test         | opengauss
 5  | gauss_123_@ | test         | opengauss
(5 rows)

openGauss=# SELECT * FROM TEST WHERE MATCH (title, boby) AGAINST ('gauss');
 id |    title    |     boby     |   name
----+-------------+--------------+-----------
 1  | test        | &67575@gauss | opengauss
 2  | test1       | gauss        | opengauss
 3  | test2       | gauss2       | opengauss
 5  | gauss_123_@ | test         | opengauss
(4 rows)

openGauss=# DROP INDEX test_index_1;
DROP INDEX
openGauss=# CREATE FULLTEXT INDEX test_index_1 ON test (boby) WITH PARSER ngram;
CREATE INDEX
openGauss=# \d test_index_1
             Index "fulltext_test.test_index_1"
   Column    | Type |              Definition
-------------+------+---------------------------------------
 to_tsvector | text | to_tsvector('ngram'::regconfig, boby)
gin, for table "fulltext_test.test"

openGauss=# SELECT * FROM test WHERE MATCH (boby) AGAINST ('test');
 id |    title    | boby |   name
----+-------------+------+-----------
 4  | test3       | test | opengauss
 5  | gauss_123_@ | test | opengauss
(2 rows)

openGauss=# SELECT * FROM test WHERE MATCH (boby) AGAINST ('gauss');
 id | title |     boby     |   name
----+-------+--------------+-----------
 1  | test  | &67575@gauss | opengauss
 2  | test1 | gauss        | opengauss
 3  | test2 | gauss2       | opengauss
(3 rows)

openGauss=# DROP INDEX test_index_1;
DROP INDEX
openGauss=# CREATE FULLTEXT INDEX test_index_1 ON test (title, boby, name) WITH PARSER ngram;
CREATE INDEX
openGauss=# \d test_index_1
                 Index "fulltext_test.test_index_1"
    Column    | Type |                  Definition
--------------+------+----------------------------------------------
 to_tsvector  | text | to_tsvector('ngram'::regconfig, title::text)
 to_tsvector1 | text | to_tsvector('ngram'::regconfig, boby)
 to_tsvector2 | text | to_tsvector('ngram'::regconfig, name::text)
gin, for table "fulltext_test.test"

openGauss=# SELECT * FROM test WHERE MATCH (title, boby, name) AGAINST ('test');
 id |    title    |     boby     |   name
----+-------------+--------------+-----------
 1  | test        | &67575@gauss | opengauss
 2  | test1       | gauss        | opengauss
 3  | test2       | gauss2       | opengauss
 4  | test3       | test         | opengauss
 5  | gauss_123_@ | test         | opengauss
(5 rows)

openGauss=# SELECT * FROM test WHERE MATCH (title, boby, name) AGAINST ('gauss');
 id |    title    |     boby     |   name
----+-------------+--------------+-----------
 1  | test        | &67575@gauss | opengauss
 2  | test1       | gauss        | opengauss
 3  | test2       | gauss2       | opengauss
 4  | test3       | test         | opengauss
 5  | gauss_123_@ | test         | opengauss
 6  |             |              | opengauss
(6 rows)

openGauss=# SELECT * FROM test WHERE MATCH (title, boby, name) AGAINST ('opengauss');
 id |    title    |     boby     |   name
----+-------------+--------------+-----------
 1  | test        | &67575@gauss | opengauss
 2  | test1       | gauss        | opengauss
 3  | test2       | gauss2       | opengauss
 4  | test3       | test         | opengauss
 5  | gauss_123_@ | test         | opengauss
 6  |             |              | opengauss
(6 rows)

openGauss=# drop table if exists articles;
NOTICE:  table "articles" does not exist, skipping
DROP TABLE
openGauss=# CREATE TABLE articles (
openGauss(# ID int,
openGauss(# title VARCHAR(100),
openGauss(# FULLTEXT INDEX ngram_idx(title)WITH PARSER ngram
openGauss(# );
CREATE TABLE
openGauss=# \d articles
       Table "fulltext_test.articles"
 Column |          Type          | Modifiers
--------+------------------------+-----------
 ID     | integer                |
 title  | character varying(100) |
Indexes:
    "ngram_idx" gin (to_tsvector('ngram'::regconfig, title::text)) TABLESPACE pg_default

openGauss=# drop table if exists articles;
DROP TABLE
openGauss=# CREATE TABLE articles (
openGauss(# ID int,
openGauss(# title VARCHAR(100),
openGauss(# FULLTEXT INDEX (title)WITH PARSER ngram
openGauss(# );
CREATE TABLE
openGauss=# \d articles
       Table "fulltext_test.articles"
 Column |          Type          | Modifiers
--------+------------------------+-----------
 ID     | integer                |
 title  | character varying(100) |
Indexes:
    "articles_to_tsvector_idx" gin (to_tsvector('ngram'::regconfig, title::text)) TABLESPACE pg_default

openGauss=# drop table if exists articles;
DROP TABLE
openGauss=# CREATE TABLE articles (
openGauss(# ID int,
openGauss(# title VARCHAR(100),
openGauss(# FULLTEXT KEY keyngram_idx(title)WITH PARSER ngram
openGauss(# );
CREATE TABLE
openGauss=# \d articles
       Table "fulltext_test.articles"
 Column |          Type          | Modifiers
--------+------------------------+-----------
 ID     | integer                |
 title  | character varying(100) |
Indexes:
    "keyngram_idx" gin (to_tsvector('ngram'::regconfig, title::text)) TABLESPACE pg_default

openGauss=# drop table if exists articles;
DROP TABLE
openGauss=# CREATE TABLE articles (
openGauss(# ID int,
openGauss(# title VARCHAR(100),
openGauss(# FULLTEXT KEY (title)WITH PARSER ngram
openGauss(# );
CREATE TABLE
openGauss=# \d articles
       Table "fulltext_test.articles"
 Column |          Type          | Modifiers
--------+------------------------+-----------
 ID     | integer                |
 title  | character varying(100) |
Indexes:
    "articles_to_tsvector_idx" gin (to_tsvector('ngram'::regconfig, title::text)) TABLESPACE pg_default

openGauss=# create table table_ddl_0154(col1 int,col2 varchar(64), FULLTEXT idx_ddl_0154(col2));
CREATE TABLE
openGauss=# create table table_ddl_0085(
openGauss(# id int(11) not null,
openGauss(# username varchar(50) default null,
openGauss(# sex varchar(5) default null,
openGauss(# address varchar(100) default null,
openGauss(# score_num int(11));
CREATE TABLE
openGauss=# create fulltext index idx_ddl_0085_02 on table_ddl_0085(username);
CREATE INDEX
openGauss=# insert into table_ddl_0085 values (1,'test','m','xi''an changanqu', 10001), (2,'tst','w','xi''an beilingqu', 10002),
(3,'es','w','xi''an yangtaqu', 10003),(4,'s','m','beijingchaoyangqu', 10004);
INSERT 0 4
openGauss=# SELECT * FROM table_ddl_0085 WHERE MATCH (username) AGAINST ('te' IN NATURAL LANGUAGE MODE);
 id | username | sex |     address     | score_num
----+----------+-----+-----------------+-----------
  1 | test     | m   | xi'an changanqu |     10001
(1 row)

openGauss=# SELECT * FROM table_ddl_0085 WHERE MATCH (username) AGAINST ('ts' IN NATURAL LANGUAGE MODE WITH QUERY EXPANSION);
 id | username | sex |     address     | score_num
----+----------+-----+-----------------+-----------
  2 | tst      | w   | xi'an beilingqu |     10002
(1 row)

openGauss=# SELECT * FROM table_ddl_0085 WHERE MATCH (username) AGAINST ('test' IN BOOLEAN MODE);
 id | username | sex |     address     | score_num
----+----------+-----+-----------------+-----------
  1 | test     | m   | xi'an changanqu |     10001
(1 row)

openGauss=# SELECT * FROM table_ddl_0085 WHERE MATCH (username) AGAINST ('es' WITH QUERY EXPANSION);
 id | username | sex |     address     | score_num
----+----------+-----+-----------------+-----------
  1 | test     | m   | xi'an changanqu |     10001
  3 | es       | w   | xi'an yangtaqu  |     10003
(2 rows)

openGauss=# SELECT * FROM table_ddl_0085 WHERE MATCH (username) AGAINST ('s');
 id | username | sex |      address      | score_num
----+----------+-----+-------------------+-----------
  4 | s        | m   | beijingchaoyangqu |     10004
(1 row)

openGauss=# insert into table_ddl_0085 select * from table_ddl_0085 where match (username) against ('te' IN NATURAL LANGUAGE MODE);
INSERT 0 1
openGauss=# select * from table_ddl_0085;
 id | username | sex |      address      | score_num
----+----------+-----+-------------------+-----------
  1 | test     | m   | xi'an changanqu   |     10001
  2 | tst      | w   | xi'an beilingqu   |     10002
  3 | es       | w   | xi'an yangtaqu    |     10003
  4 | s        | m   | beijingchaoyangqu |     10004
  1 | test     | m   | xi'an changanqu   |     10001
(5 rows)

openGauss=# create fulltext index idx_ddl_0085_03 on table_ddl_0085(username) with parser ngram visible;
CREATE INDEX
openGauss=# create fulltext index idx_ddl_0085_04 on table_ddl_0085(username) visible with parser ngram;
CREATE INDEX
openGauss=# create fulltext index idx_ddl_0085_05 on table_ddl_0085(username) visible;
CREATE INDEX
openGauss=# create fulltext index idx_ddl_0085_06 on table_ddl_0085(username) with parser ngram comment 'TEST FULLTEXT INDEX COMMENT';
CREATE INDEX
openGauss=# create fulltext index idx_ddl_0085_07 on table_ddl_0085(username) comment 'TEST FULLTEXT INDEX COMMENT' with parser ngram;
CREATE INDEX
openGauss=# create fulltext index idx_ddl_0085_08 on table_ddl_0085(username) comment 'TEST FULLTEXT INDEX COMMENT';
CREATE INDEX
openGauss=# drop schema fulltext_test cascade;
NOTICE:  drop cascades to 4 other objects
DETAIL:  drop cascades to table test
drop cascades to table articles
drop cascades to table table_ddl_0154
drop cascades to table table_ddl_0085
DROP SCHEMA
openGauss=# reset current_schema;
RESET
```

## 相关链接<a name="section156744489391"></a>

[SELECT](../SQLReference/SELECT.md)