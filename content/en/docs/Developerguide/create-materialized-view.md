# CREATE MATERIALIZED VIEW<a name="EN-US_TOPIC_0289899973"></a>

**CREATE MATERIALIZED VIEW**  creates a complete-refresh materialized view, and you can use  **REFRESH MATERIALIZED VIEW**  to fully refresh the data in the materialized view.

**CREATE MATERIALIZED VIEW**  is similar to  **CREATE TABLE AS**, but it remembers the query used to initialize the view, so it can refresh data later. A materialized view has many attributes that are the same as those of a table, but does not support temporary materialized views.

## Precautions<a name="en-us_topic_0283136593_en-us_topic_0237122118_en-us_topic_0059777601_s0379750211b249b5a2831f6cdf27d110"></a>

-   Complete-refresh materialized views cannot be created in temporary tables or global temporary tables.
-   Complete-refresh materialized views do not support NodeGroups.
-   After a complete-refresh materialized view is created, most DDL operations in the base table are no longer supported.
-   The IUD operation cannot be performed on complete-refresh materialized views.
-   After a complete-refresh materialized view is created, if the base table data changes, you need to run the  **REFRESH**  command to synchronize the materialized view with the base table.
-   The Ustore engine does not support the creation and use of materialized views.

## Syntax<a name="en-us_topic_0283136593_en-us_topic_0237122118_en-us_topic_0059777601_s58148dd6e63843eebaa64756e4b093c9"></a>

```
CREATE MATERIALIZED VIEW mv_name
    [ (column_name [, ...] ) ]
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
      [ TABLESPACE tablespace_name ]
    AS query
    [ WITH [ NO ] DATA ];
```

## Parameter Description<a name="en-us_topic_0283136593_en-us_topic_0237122118_en-us_topic_0059777601_sb8ea2c52307445c9934740862f4ecc85"></a>

-   **mv\_name**

    Name \(optionally schema-qualified\) of the materialized view to be created.

    Value range: a string. It must comply with the identifier naming convention.

-   **column\_name**

    Specifies a column name in the new materialized view. The materialized view supports specified columns. The number of specified columns must be the same as the number of columns in the result of the subsequent query statement. If no column name is provided, the column name is obtained from the output column name of the query.

    Value range: a string. It must comply with the identifier naming convention.

-   **WITH \( storage\_parameter \[= value\] \[, ... \] \)**

    Specifies an optional storage parameter for a table or an index. For details, see  [CREATE TABLE](create-table.md).

-   **TABLESPACE tablespace\_name**

    Tablespace to which the new materialized view belongs. If not specified, the default tablespace is used.

-   **AS query**

    Specifies the  **SELECT**,  **TABLE**, or  **VALUES**  command. This query will be run in a security-constrained operation.


## Examples<a name="en-us_topic_0283136593_en-us_topic_0237122118_en-us_topic_0059777601_sa7f2698f298f4001b3a283cb912f1f4d"></a>

```
-- Create an ordinary table.
openGauss=# CREATE TABLE my_table (c1 int, c2 int);
-- Create a complete-refresh materialized view.
openGauss=# CREATE MATERIALIZED VIEW my_mv AS SELECT * FROM my_table;
-- Write data to the base table.
openGauss=# INSERT INTO my_table VALUES(1,1),(2,2);
-- Refresh the complete-refresh materialized view my_mv.
openGauss=# REFRESH MATERIALIZED VIEW my_mv;
```

## Helpful Links<a name="en-us_topic_0283136593_en-us_topic_0237122118_en-us_topic_0059777601_sa0d9dc1ba4fb4ce58ecdfe391f0561d3"></a>

[ALTER MATERIALIZED VIEW](alter-materialized-view.md),  [CREATE INCREMENTAL MATERIALIZED VIEW](create-incremental-materialized-view.md),  [CREATE TABLE](create-table.md),  [DROP MATERIALIZED VIEW](drop-materialized-view.md),  [REFRESH INCREMENTAL MATERIALIZED VIEW](refresh-incremental-materialized-view.md), and  [REFRESH MATERIALIZED VIEW](refresh-materialized-view.md)

