# INSERT

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

向表中添加一行或多行数据。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-   本章节只包含dolphin新增的语法，原openGauss的语法未做删除和修改。
-   增加values()空值插入操作，根据sql_mode的不同会有不一样的插入效果。
-   新增set_clause_values子句。

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
[ WITH [ RECURSIVE ] with_query [, ...] ]
INSERT [/*+ plan_hint */] [IGNORE] [INTO] table_name [partition_clause] [ AS alias ] [ ( column_name [, ...] ) ]
    { DEFAULT VALUES
    | [ VALUES | VALUE ] [{( { expression | DEFAULT } [, ...] ) }][, ...]
    | query
    | set_clause_values }
    [ ON DUPLICATE KEY UPDATE { NOTHING | { column_name = { expression | DEFAULT } } [, ...] [ WHERE condition ] }]
    [ RETURNING {* | {output_expression [ [ AS ] output_name ] }[, ...]} ];
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **IGNORE**
  
  若带有IGNORE关键字的INSERT语句执行时在指定场景引发了Error，则会将Error降级为Warning，且继续语句的执行，不会影响其他数据的操作。能使Error降级的场景有：

  1.违反非空约束时：

  若执行的SQL语句违反了表的非空约束，使用此hint可将Error降级为Warning，并根据GUC参数sql_ignore_strategy的值采用以下策略的一种继续执行：

    -   sql_ignore_strategy为ignore_null时，忽略违反非空约束的行的INSERT操作，并继续执行剩余数据操作。

    -   sql_ignore_strategy为overwrite_null时，将违反约束的null值覆写为目标类型的默认值，并继续执行剩余数据操作。

    >![](public_sys-resources/icon-note.png) **说明：**
    >
    >GUC参数sql_ignore_strategy为枚举类型，可选值有：ignore_null, overwrite_null

  2.违反唯一约束时：

  若执行的SQL语句违反了表的唯一约束，使用此hint可将Error降级为Warning，忽略违反约束的行的INSERT操作，并继续执行剩余数据操作。

  3.分区表无法匹配到合法分区时：

  在对分区表进行INSERT操作时，若某行数据无法匹配到表格的合法分区，使用此hint可将Error降级为Warning，忽略该行操作，并继续执行剩余数据操作。

  4.插入值向目标列类型转换失败时：

  执行INSERT语句时，若发现新值与目标列类型不匹配，使用此hint可将Error降级为Warning，并根据新值与目标列的具体类型采取以下策略的一种继续执行：

    -   当新值类型与列类型同为数值类型时：

        若新值在列类型的范围内，则直接进行插入；若新值在列类型范围外，则以列类型的最大/最小值替代。

    -   当新值类型与列类型同为字符串类型时：

        若新值长度在列类型限定范围内，则以直接进行插入；若新值长度在列类型的限定范围外，则保留列类型长度限制的前n个字符。

    -   若遇到新值类型与列类型不可转换时：

        插入列类型的默认值。

  IGNORE关键字不支持列存，无法在列存表中生效。

-   **VALUES()**

    当GUC参数sql_mode为stric_all_tables时，为所有列插入NULL，否则如果对应字段名有缺省值，插入缺省值，如果没有缺省值，判断对应字段是否有not_null约束，没有插入NULL，有则插入类型基础值，具体基础值参考视图pg_type_basic_value。

-   **set_clause_values**

    一种insert into table_name set column_name = value, column_name = value, ...依次类推。set_clause_values是指set column_name = value，多个列插入值用逗号分隔。
    该是insert into 的一种扩展语法。为防止insert into 时字段顺序与值顺序混乱造成写入错误。

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

### IGNORE关键字

为使用ignore_error hint，需要创建B兼容模式的数据库，名称为db_ignore。
```
create database db_ignore dbcompatibility 'B';
\c db_ignore
```

- **忽略非空约束**

```
db_ignore=# create table t_not_null(num int not null);
CREATE TABLE
-- 采用忽略策略
db_ignore=# set sql_ignore_strategy = 'ignore_null';
SET
db_ignore=# insert /*+ ignore_error */ into t_not_null values(null), (1);
WARNING:  null value in column "num" violates not-null constraint
DETAIL:  Failing row contains (null).
INSERT 0 1
db_ignore=# select * from t_not_null ;
 num 
-----
   1
(1 row)

-- 采用覆写策略
db_ignore=# delete from t_not_null;
db_ignore=# set sql_ignore_strategy = 'overwrite_null';
SET
db_ignore=# insert /*+ ignore_error */ into t_not_null values(null), (1);
WARNING:  null value in column "num" violates not-null constraint
DETAIL:  Failing row contains (null).
INSERT 0 2
db_ignore=# select * from t_not_null ;
 num 
-----
   0
   1
(2 rows)
```

- **忽略唯一约束**

```
db_ignore=# create table t_unique(num int unique);
NOTICE:  CREATE TABLE / UNIQUE will create implicit index "t_unique_num_key" for table "t_unique"
CREATE TABLE
db_ignore=# insert into t_unique values(1);
INSERT 0 1
db_ignore=# insert /*+ ignore_error */ into t_unique values(1),(2);
WARNING:  duplicate key value violates unique constraint in table "t_unique"
INSERT 0 1
db_ignore=# select * from t_unique;
 num 
-----
   1
   2
(2 rows
```

- **忽略分区表无法匹配到合法分区**

```
db_ignore=# CREATE TABLE t_ignore
db_ignore-# (
db_ignore(#     col1 integer NOT NULL,
db_ignore(#     col2 character varying(60)
db_ignore(# ) WITH(segment = on) PARTITION BY RANGE (col1)
db_ignore-# (
db_ignore(#     PARTITION P1 VALUES LESS THAN(5000),
db_ignore(#     PARTITION P2 VALUES LESS THAN(10000),
db_ignore(#     PARTITION P3 VALUES LESS THAN(15000)
db_ignore(# );
CREATE TABLE
db_ignore=# insert /*+ ignore_error */ into t_ignore values(20000);
WARNING:  inserted partition key does not map to any table partition
INSERT 0 0
db_ignore=# select * from t_ignore ;
 col1 | col2 
------+------
(0 rows)
```

- **插入值向目标列类型转换失败**

```
-- 当新值类型与列类型同为数值类型
db_ignore=# create table t_tinyint(num tinyint);
CREATE TABLE
db_ignore=# insert /*+ ignore_error */ into t_tinyint values(10000);
WARNING:  tinyint out of range
CONTEXT:  referenced column: num
INSERT 0 1
db_ignore=# select * from t_tinyint;
 num 
-----
 127
(1 row)

-- 当新值类型与列类型同为字符类型时
db_ignore=# create table t_varchar5(content varchar(5));
CREATE TABLE
db_ignore=# insert /*+ ignore_error */ into t_varchar5 values('abcdefghi');
WARNING:  value too long for type character varying(5)
CONTEXT:  referenced column: content
INSERT 0 1
db_ignore=# select * from t_varchar5 ;
 content 
---------
 abcde
(1 row)
```

```
--创建表value_test。
openGauss=# create table value_test(a int not null, b int default 3);

--向表中插入VALUES()。
openGauss=# insert into value_test values();

ERROR:  null value in column "a" violates not-null constraint

--关闭sql_mode,向表中插入VALUES()。
openGauss=# set dolphin.sql_mode = '';
openGauss=# insert into value_test values();

--查看表数据
openGauss=# select * from value_test;

 a | b
---+---
 0 | 3
(1 row)

--删除表value_test。
openGauss=# DROP TABLE 删除表value_test。;
```

## 相关链接<a name="section156744489391"></a>

[INSERT](../SQLReference/INSERT.md)