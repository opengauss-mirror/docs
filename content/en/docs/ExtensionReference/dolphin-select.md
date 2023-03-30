# SELECT<a name="ZH-CN_TOPIC_0289900232"></a>

## Function<a name="en-us_topic_0283136463_en-us_topic_0237122184_en-us_topic_0059777449_s65596fb5f1d44a428e41dd508d2044a7"></a>

**SELECT** retrieves data from a table or view.

Serving as an overlaid filter for a database table, **SELECT** filters required data from the table using SQL keywords.

## Precautions<a name="en-us_topic_0283136463_en-us_topic_0237122184_en-us_topic_0059777449_s42c37979749545719ac9114594f45d93"></a>

-   Compared with the openGauss SELECT syntax, the SOUNDS LIKE syntax under the WHERE clause is added.

-   The new JOIN does not contain ON/USING. The effect is the same as that of CROSS JOIN.

-   The new PARTITION clause can be used to specify multiple partitions.

## Syntax<a name="en-us_topic_0283136463_en-us_topic_0237122184_en-us_topic_0059777449_sb7329222602d46fe944bf6c300931dd2"></a>

-   Querying data

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
-   The specified query source **from\_item** is as follows:

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

-   The **group** clause is as follows:

    ```
    ( )
    | expression
    | ( expression [, ...] )
    | rollup_clause
    | CUBE ( { expression | ( expression [, ...] ) } [, ...] )
    | GROUPING SETS ( grouping_element [, ...] )
    ```
-   The specified partition **partition\_clause** is as follows:

    ```
    PARTITION { ( partition_name [, ...] ) | 
            FOR (  partition_value [, ...] ) }
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**
    >The specified partition applies only to ordinary tables.

    The rollup\_clause clause is as follows:

    ```
    ROLLUP ( { expression | ( expression [, ...] ) } [, ...] )
    | { expression | ( expression [, ...] ) } WITH ROLLUP
    ```

-   JOIN syntax

```
[JOIN | INNER JOIN] {ON join_condition | USING ( join_column [, ...] ) }
```

## Parameter Description<a name="en-us_topic_0283136463_en-us_topic_0237122184_en-us_topic_0059777449_sa812f65b8e8c4c638ec7840697222ddc"></a>

-   **WHERE clause**

    SOUNDS LIKE is a syntax of condition. For example, **column_name sounds like 'character';** is equivalent to the comparison result of **soundex(column_name) = soundex('character')**. It is a Boolean value. It is used to query the data that meets the conditions through soundex processing.

> ![](public_sys-resources/icon-note.gif) **NOTE:**
> 
> For details about other parameters, see [SELECT](select.md).

## Examples<a name="en-us_topic_0283136463_en-us_topic_0237122184_en-us_topic_0059777449_sc1b5e63c90c946b89430696c38fc86c0"></a>

- Example of the SOUNDS LIKE: homophone column query

```
openGauss=# CREATE TABLE TEST(id int, name varchar);
openGauss=# INSERT INTO TEST VALUES(1, 'too');
openGauss=# SELECT * FROM TEST WHERE name SOUNDS LIKE 'two';
 id | name
----+------
  1 | too
(1 row)
```


- Use ROLLUP in the SELECT GROUP BY clause.
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
- Use the SELECT FROM PARTITION clause to specif multiple partitions.
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

## Helpful Links<a name="section156744489391"></a>

[SELECT](SELECT.md)
