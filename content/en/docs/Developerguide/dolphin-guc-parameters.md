# GUC Parameters<a name="EN-US_TOPIC_0289899843"></a>

## sql\_mode<a name="section203671436821"></a>

Parameter description: The parameter value is a character string separated by commas (,). Only valid character strings are allowed. If the parameter value is invalid, a warning is reported after the startup. Similarly, if the new value is invalid, a warning is reported and the old value is not changed. The default string of the current sql\_mode is sql\_mode_strict,sql\_mode\_full\_group. Currently, sql\_mode is used in the following scenarios:

1. sql\_mode\_strict: When a value that does not comply with the current column type is inserted, data conversion is performed. There are two scenarios: **insert into table values (...)** and **insert into table select ...**. Conversion between various data types is involved. Currently, the following types are involved: tinyint (tinyint is not considered because its data scope is different from that of MySQL), smallint, int, bigint, float, double, numeric, clob, char, and varchar.
2. sql\_mode\_strict: If the length of the inserted column value exceeds the length limit of the column, the maximum or minimum value is assigned to the column. The involved types are tinyint, smallint, int, bigint, float, double, numeric, clob, char, and varchar.
3. sql\_mode\_strict: During insert, if a column whose attribute is not empty and does not have a default value is not in the insert list, the default value is added to the column. (The involved types are the same as the preceding types.)
4. sql\_mode\_strict: supports explicit insertion of default to columns whose attributes are not empty and do not have default values. (The involved types are the same as the preceding types.)
5. sql\_mode\_full\_group: determines whether columns (without aggregate functions) in the SELECT list must be included in the GROUP BY clause. In sql\_mode\_full\_group mode (default mode), if a column in the select list does not use an aggregate function or appear in the GROUP BY clause, an error is reported. Otherwise, the execution is successful and the first tuple is selected from all tuples that meet the conditions.

This parameter is a SIGHUP parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

Default value: 'sql_mode_strict,sql_mode_full_group'

Example:
```
--Create a table named test1.
openGauss=# CREATE TABLE test1
(
  a1 smallint not null,
  a2 int not null,
  a3 bigint not null,
  a4 float not null,
  a5 double not null,
  a6 numeric not null,
  a7 varchar(5) not null
);

--Failed to insert records into the table.
openGauss=# insert into test1(a1,a2) values(123412342342314,3453453453434324);
--Failed to query the table.
openGauss=# select a1,a2 from test1 group by a1;

--A record is successfully inserted into the table.
openGauss=# set sql_mode = '';
openGauss=# insert into test1(a1,a2) values(123412342342314,3453453453434324);
--A table is queried successfully.
openGauss=# select a1,a2 from test1 group by a1;

--Deleting a Table
openGauss=# DROP TABLE test1;
```
