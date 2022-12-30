# UPDATE<a name="ZH-CN_TOPIC_0289900207"></a>

## Function<a name="en-us_topic_0283137651_en-us_topic_0237122194_en-us_topic_0059778969_s85747c5f88e64562a8ff9ddacda19929"></a>

Updates data in a table. Changes the values of the specified columns in all rows that satisfy the condition. The WHERE clause clarifies conditions. The SET clause specifies the columns to be modified and columns that not specified in the SET clause retain their previous values.

## Precautions<a name="en-us_topic_0283137651_en-us_topic_0237122194_en-us_topic_0059778969_s7e9e912f472543cbb190edb83e5f22d2"></a>

-   This section describes only the new syntax of Dolphin. The UPDATE syntax of openGauss is not modified. For details about the UPDATE syntax of the original openGauss, see section [UPDATE](update.md).

## Syntax<a name="en-us_topic_0283137651_en-us_topic_0237122194_en-us_topic_0059778969_sd8d9ff15ff6c45c9aebd16c861936c06"></a>


Update a single table:
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

Update multiple tables:
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

## Parameter Description<a name="en-us_topic_0283137651_en-us_topic_0237122194_en-us_topic_0059778969_sf3e3262b89854b3d829a94054116838c"></a>

- **IGNORE**
  
  If an error occurs in a specified scenario when an UPDATE statement containing the keyword IGNORE is executed, the error is degraded to warning and the statement execution continues without affecting other data operations. Error degradation can be enabled in the following scenarios:

  1. The non-null constraint is violated.

  If the executed SQL statement violates the non-null constraint of the table, you can use this hint to degrade errors to warnings and use one of the following strategies based on the value of the GUC parameter **sql_ignore_strategy**:

 -   If **sql_ignore_strategy** is set to **ignore_null**, the UPDATE operations on rows that violate non-null constraints are ignored and remaining data operations are performed.

 -   If **sql_ignore_strategy** is set to **overwrite_null**, the null value that violates the constraint is overwritten by the default value of the target type, and the remaining data operations are performed.

        >![](public_sys-resources/icon-note.gif) **NOTE:**
      >The GUC parameter sql\_ignore\_strategy is of the enumeration type. The options are ignore\_null and overwrite\_null.

  2. The unique constraint is violated.

  If the executed SQL statement violates the unique constraint of a table, you can use this hint to degrade errors to warnings, ignore the UPDATE operation on the row that violates the constraint, and continue to perform the remaining data operations.

  3. The partitioned table cannot match a valid partition.

  When UPDATE is performed on a partitioned table, if a row of data does not match a valid partition of the table, you can use this hint to degrade errors to warnings, ignore the row, and continue to perform operations on the remaining data.

  4. Failed to convert the updated value to the target column type.

  During the execution of the UPDATE statement, if the new value does not match the type of the target column, you can use this hint to degrade errors to warnings and continue the execution based on the new value type and the target column type:

    -   When the new value type and column type are both numeric:

        If the new value is within the range of the column type, update the value directly. If the new value is beyond the range of the column type, replace the value with the maximum or minimum value of the column type.

    -   When the new value type and column type are both character strings:

        If the length of the new value is within the range specified by the column type, update the value directly. If the length of the new value is beyond the range specified by the column type, the first n characters of the column type are retained.

    -   When the new value type cannot be converted to the column type:

        Update to the default value of the column type.

  The IGNORE keyword does not support column store and cannot take effect in column-store tables.


## Example<a name="en-us_topic_0283137651_en-us_topic_0237122194_en-us_topic_0059778969_s23d933f56bc745e1bd819083b4e50155"></a>

### **IGNORE**

To use the ignore_error hints, you need to create a database named **db_ignore** in B-compatible mode.
```
create database db_ignore dbcompatibility 'B';
\c db_ignore
```

- **Ignore the non-null constraint.**

```
db_ignore=# create table t_not_null(num int not null);
CREATE TABLE
-- The ignore strategy is used.
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


-- The overwrite strategy is used.
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

- **Ignore the unique constraint.**

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

- **Ignore the partitioned table that cannot match a valid partition.**

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

- **Failed to convert the updated value to the target column type.**

```
-- When the new value type and column type are both numeric:
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


-- When the new value type and column type are both character strings:
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
