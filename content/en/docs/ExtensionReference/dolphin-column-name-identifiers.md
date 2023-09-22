# Column Name Identifiers<a name="EN-US_TOPIC_0245374853"></a>

## Precautions

Compared with the original openGauss, Dolphin modifies the column name identifiers as follows:
-   Column names and aliases are sensitive to storage and display. Whether to use double quotation marks to enclose column names is not considered.
-   Column names and aliases are insensitive to comparison. That is, column names **'aAa'** and **'AAa'** identify the same column.

Example:

```
openGauss=#  create database col_name dbcompatibility 'B';
CREATE DATABASE

openGauss=#  \c col_name

col_name=# create table t1(aAa int);
CREATE TABLE

col_name=# insert into t1 values(1);
INSERT 0 1

col_name=# select * from t1;
 aAa
-----
   1
(1 row)

col_name=# select "AAa" from t1;
 AAa
-----
   1
(1 row)

col_name=# select aaa AS AaA  from t1;
 AaA
-----
   1
(1 row)
```
