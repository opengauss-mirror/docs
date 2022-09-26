# INSERT<a name="ZH-CN_TOPIC_0289900448"></a>

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

Inserts new rows into a table.

## Precautions<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-   This section describes only the new syntax of Dolphin. The original syntax of openGauss is not deleted or modified.
-   The operation of inserting null values is added. The insertion effect varies according to the value of sql\_mode.
-   The set_clause_values clause is added.

## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

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

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **IGNORE**
  
  If an error occurs in a specified scenario when an INSERT statement containing the keyword IGNORE is executed, the error is degraded to warning and the statement execution continues without affecting other data operations. Error degradation can be enabled in the following scenarios:

  1. The non-null constraint is violated.

  If the executed SQL statement violates the non-null constraint of the table, you can use this hint to degrade errors to warnings and use one of the following strategies based on the value of the GUC parameter **sql_ignore_strategy**:

    -   If **sql_ignore_strategy** is set to **ignore_null**, the INSERT operations on rows that violate non-null constraints are ignored and remaining data operations are performed.

    -   If **sql_ignore_strategy** is set to **overwrite_null**, the null value that violates the constraint is overwritten by the default value of the target type, and the remaining data operations are performed.

        >![](public_sys-resources/icon-note.gif) **NOTE:**
      The GUC parameter sql\_ignore\_strategy is of the enumeration type. The options are ignore\_null and overwrite\_null.

  2. The unique constraint is violated.

  If the executed SQL statement violates the unique constraint of a table, you can use this hint to degrade errors to warnings, ignore the INSERT operation on the row that violates the constraint, and continue to perform the remaining data operations.

  3. The partitioned table cannot match a valid partition.

  When INSERT is performed on a partitioned table, if a row of data does not match a valid partition of the table, you can use this hint to degrade errors to warnings, ignore the row, and continue to perform operations on the remaining data.

  4. Failed to convert the inserted value to the target column type.

  During the execution of the INSERT statement, if the new value does not match the type of the target column, you can use this hint to degrade errors to warnings and continue the execution based on the new value type and the target column type:

    -   When the new value type and column type are both numeric:

        If the new value is within the range of the column type, insert the value directly. If the new value is beyond the range of the column type, replace the value with the maximum or minimum value of the column type.

    -   When the new value type and column type are both character strings:

        If the length of the new value is within the range specified by the column type, insert the value directly. If the length of the new value is beyond the range specified by the column type, the first n characters of the column type are retained.

    -   When the new value type cannot be converted to the column type:

        Insert the default value of a column type.

  The IGNORE keyword does not support column store and cannot take effect in column-store tables.

-   **VALUES()**

    When the GUC parameter **sql\_mode** is set to **stric\_all\_tables**, NULL is inserted into all columns. Otherwise, if the corresponding column name has a default value, the default value is inserted. If the corresponding column name does not have a default value, check whether the corresponding column has the not\_null constraint. If not, NULL is inserted. If yes, the basic value of the type is inserted, for details about the basic values, see the pg\_type\_basic\_value view.

-   **set_clause_values**

    It is equivalent to **insert into table_name set column_name = value, column_name = value, ...** set\_clause\_values indicates **set column_name = value**. Multiple column insertion values are separated by commas (,).
    This is an extended syntax of INSERT INTO to prevent write errors caused by disordered field sequence and value sequence during INSERT INTO. 

## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

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
db_ignore=# insert /*+ ignore_error */ into t_not_null values(null), (1);
WARNING:  null value in column "num" violates not-null constraint
DETAIL:  Failing row contains (null).
INSERT 0 1
db_ignore=# select * from t_not_null ;
 num 
-----
   1
(1 row)

-- The overwrite strategy is used.
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

- **Ignore the unique constraint.**

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
db_ignore=# insert /*+ ignore_error */ into t_ignore values(20000);
WARNING:  inserted partition key does not map to any table partition
INSERT 0 0
db_ignore=# select * from t_ignore ;
 col1 | col2 
------+------
(0 rows)
```

- **Failed to convert the inserted value to the target column type.**

```
-- When the new value type and column type are both numeric:
db_ignore=# create table t_tinyint(num tinyint);
CREATE TABLE
db_ignore=# insert /*+ ignore_error */ into t_tinyint values(10000);
WARNING:  tinyint out of range
CONTEXT:  referenced column: num
INSERT 0 1
db_ignore=# select * from t_tinyint;
 num 
-----
 255
(1 row)

-- When the new value type and column type are both character strings:
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
--Create the table value_test.
openGauss=# create table value_test(a int not null, b int default 3);

--Insert VALUES() into the table.
openGauss=# insert into value_test values();

ERROR:  null value in column "a" violates not-null constraint

--Disable sql\_mode and insert VALUES() into the table.
openGauss=# set sql_mode = '';
openGauss=# insert into value_test values();

--View table data.
openGauss=# select * from value_test;

 a | b
---+---
 0 | 3
(1 row)

--Delete the table value_test.
openGauss=# DROP TABLE value_test.
```

## Helpful Links<a name="section156744489391"></a>

[INSERT](INSERT.md)
