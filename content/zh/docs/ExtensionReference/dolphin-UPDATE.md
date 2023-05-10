# UPDATE

## 功能描述<a name="zh-cn_topic_0283137651_zh-cn_topic_0237122194_zh-cn_topic_0059778969_s85747c5f88e64562a8ff9ddacda19929"></a>

更新表中的数据。UPDATE修改满足条件的所有行中指定的字段值，WHERE子句声明条件，SET子句指定的字段会被修改，没有出现的字段则保持它们的原值。

## 注意事项<a name="zh-cn_topic_0283137651_zh-cn_topic_0237122194_zh-cn_topic_0059778969_s7e9e912f472543cbb190edb83e5f22d2"></a>

   本章节仅包含dolphin新增语法，原openGauss的UPDATE语法未作修改。原openGauss的UPDATE语法请参考章节[UPDATE](../SQLReference/UPDATE.md)

## 语法格式<a name="zh-cn_topic_0283137651_zh-cn_topic_0237122194_zh-cn_topic_0059778969_sd8d9ff15ff6c45c9aebd16c861936c06"></a>


单表更新：
```

[ WITH [ RECURSIVE ] with_query [, ...] ]
UPDATE [/*+ plan_hint */] [IGNORE] [ ONLY ] table_name [ partition_clause ] [ * ] [ [ AS ] alias ]
SET {column_name = { expression | DEFAULT } 
    |( column_name [, ...] ) = {( { expression | DEFAULT } [, ...] ) |sub_query }}[, ...]
    [ FROM from_list] [ WHERE condition ]
    [ ORDER BY {expression [ [ ASC | DESC | USING operator ]
    [ LIMIT { count } ]
    [ RETURNING {* 
                | {output_expression [ [ AS ] output_name ]} [, ...] }];

```
多表更新：
```
[ WITH [ RECURSIVE ] with_query [, ...] ]
UPDATE [/*+ plan_hint */] [IGNORE] table_list
SET {column_name = { expression | DEFAULT } 
    |( column_name [, ...] ) = {( { expression | DEFAULT } [, ...] ) |sub_query }}[, ...]
    [ FROM from_list] [ WHERE condition ];

where sub_query can be:

SELECT [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
{ * | {expression [ [ AS ] output_name ]} [, ...] }
[ FROM from_item [, ...] ]
[ WHERE condition ]
[ GROUP BY grouping_element [, ...] ]
[ HAVING condition [, ...] ]
[ ORDER BY {expression [ [ ASC | DESC | USING operator ] | nlssort_expression_clause ] [ NULLS { FIRST | LAST } ]} [, ...] ]
[ LIMIT { [offset,] count | ALL } ]
```

## 参数说明<a name="zh-cn_topic_0283137651_zh-cn_topic_0237122194_zh-cn_topic_0059778969_sf3e3262b89854b3d829a94054116838c"></a>

- **IGNORE**
  
  若带有IGNORE关键字的UPDATE语句执行时在指定场景引发了Error，则会将Error降级为Warning，且继续语句的执行，不会影响其他数据的操作。能使Error降级的场景有：

  1.违反非空约束时：

  若执行的SQL语句违反了表的非空约束，使用此hint可将Error降级为Warning，并根据GUC参数sql_ignore_strategy的值采用以下策略的一种继续执行：

     
 -   sql_ignore_startegy为ignore_null时，忽略违反非空约束的行的UPDATE操作，并继续执行剩余数据操作。

 -   sql_ignore_startegy为overwrite_null时，将违反约束的null值覆写为目标类型的默认值，并继续执行剩余数据操作。

   >![](public_sys-resources/icon-note.png) **说明：**
   >
   >GUC参数sql_ignore_strategy为枚举类型，可选值有：ignore_null, overwrite_null

  2.违反唯一约束时：

  若执行的SQL语句违反了表的唯一约束，使用此hint可将Error降级为Warning，忽略违反约束的行的UPDATE操作，并继续执行剩余数据操作。

  3.分区表无法匹配到合法分区时

  在对分区表进行UPDATE操作时，若某行数据无法匹配到表格的合法分区，使用此hint可将Error降级为Warning，忽略该行操作，并继续执行剩余数据操作。

  4.更新值向目标列类型转换失败时：

  执行UPDATE语句时，若发现新值与目标列类型不匹配，使用此hint可将Error降级为Warning，并根据新值与目标列的具体类型采取以下策略的一种继续执行：

    -   当新值类型与列类型同为数值类型时：

        若新值在列类型的范围内，则直接进行更新；若新值在列类型范围外，则以列类型的最大/最小值替代。

    -   当新值类型与列类型同为字符串类型时：

        若新值长度在列类型限定范围内，则以直接进行更新；若新值长度在列类型的限定范围外，则保留列类型长度限制的前n个字符。

    -   若遇到新值类型与列类型不可转换时：

        更新为列类型的默认值。

  IGNORE关键字不支持列存，无法在列存表中生效。


## 示例<a name="zh-cn_topic_0283137651_zh-cn_topic_0237122194_zh-cn_topic_0059778969_s23d933f56bc745e1bd819083b4e50155"></a>

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
db_ignore=# insert into t_not_null values (1);
INSERT 0 1
db_ignore=# select * from t_not_null ;
 num 
-----
   1
(1 row)

db_ignore=# update /*+ ignore_error */ t_not_null set num = null where num = 1;
WARNING:  null value in column "num" violates not-null constraint
DETAIL:  Failing row contains (null).
UPDATE 0
db_ignore=# select * from t_not_null ;
 num 
-----
   1
(1 row)


-- 采用覆写策略

db_ignore=# delete from t_not_null;
db_ignore=# set sql_ignore_strategy = 'overwrite_null';
SET
db_ignore=# insert into t_not_null values (1);
WARNING:  null value in column "num" violates not-null constraint
DETAIL:  Failing row contains (null).
INSERT 0 1
db_ignore=# select * from t_not_null ;
 num 
-----
   1
(1 rows)

db_ignore=# update /*+ ignore_error */ t_not_null set num = null where num = 1;
WARNING:  null value in column "num" violates not-null constraint
DETAIL:  Failing row contains (null).
UPDATE 1
db_ignore=# select * from t_not_null ;
 num 
-----
   0
(1 rows)
```

- **忽略唯一约束**

```
db_ignore=# create table t_unique(num int unique);
NOTICE:  CREATE TABLE / UNIQUE will create implicit index "t_unique_num_key" for table "t_unique"
CREATE TABLE
db_ignore=# insert into t_unique values(1), (2);
INSERT 0 1
db_ignore=# update /*+ ignore_error */ t_unique set num = 1 where num = 2;
WARNING:  duplicate key value violates unique constraint in table "t_unique"
UPDATE 0
db_ignore=# select * from t_unique ;
 num 
-----
   1
   2
(2 rows)
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
db_ignore=# insert into t_ignore values(3000);
INSERT 0 1
db_ignore=# select * from t_ignore ;
 col1 | col2 
------+------
 3000 | 
(1 row)
db_ignore=# update /*+ ignore_error */ t_ignore set col1 = 20000 where col1 = 3000;
WARNING:  fail to update partitioned table "t_ignore".new tuple does not map to any table partition.
UPDATE 0
db_ignore=# select * from t_ignore ;
 col1 | col2 
------+------
 3000 | 
(1 row)

```

- **更新值向目标列类型转换失败**

```
-- 当新值类型与列类型同为数值类型

db_ignore=# create table t_tinyint(num tinyint);
CREATE TABLE
db_ignore=# insert into t_tinyint values(1);
INSERT 0 1
db_ignore=# select * from t_tinyint;
 num 
-----
 1
(1 row)
db_ignore=# update /*+ignore_error */ t_tinyint set num = 10000 where num = 1;
WARNING:  tinyint out of range
CONTEXT:  referenced column: num
UPDATE 1
db_ignore=# select * from t_tinyint;
 num
-----
 127
(1 row)


-- 当新值类型与列类型同为字符类型时

db_ignore=# create table t_varchar5(content varchar(5));
CREATE TABLE
db_ignore=# insert into t_varchar5 values('abc');
INSERT 0 1
db_ignore=# select * from t_varchar5;
 content
---------
 abc
(1 row)
db_ignore=# update /*+ ignore_error */ t_varchar5 set content = 'abcdefghijklmn' where content = 'abc';
WARNING:  value too long for type character varying(5)
CONTEXT:  referenced column: content
UPDATE 1
db_ignore=# select * from t_varchar5;
 content
---------
 abcde
(1 row)
```