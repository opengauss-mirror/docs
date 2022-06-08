# CREATE INCREMENTAL MATERIALIZED VIEW<a name="EN-US_TOPIC_0000001086628686"></a>

## Function<a name="en-us_topic_0283136612_en-us_topic_0237122161_en-us_topic_0059777447_s984b3ec2b84d48bb843629462288417b"></a>

**CREATE INCREMENTAL MATERIALIZED VIEW**  creates a fast-refresh materialized view, and you can refresh the data of the materialized view by using  **REFRESH MATERIALIZED VIEW**  \(full refresh\) and  **REFRESH INCREMENTAL MATERIALIZED VIEW**  \(incremental refresh\).

**CREATE INCREMENTAL MATERIALIZED VIEW**  is similar to  **CREATE TABLE AS**, but it remembers the query used to initialize the view, so it can refresh data later. A materialized view has many attributes that are the same as those of a table, but does not support temporary materialized views.

## Precautions<a name="en-us_topic_0283136612_en-us_topic_0237122161_en-us_topic_0059777447_s3a6fd145e83b4e61a22dabdcf32ac282"></a>

-   Fast-refresh materialized views cannot be created on temporary tables or global temporary tables.
-   Fast-refresh materialized views support only simple filter queries and UNION ALL queries of base tables.
-   Distribution columns cannot be specified when an incremental MV is created.
-   After a fast-refresh materialized view is created, most DDL operations in the base table are no longer supported.
-   IUD operations cannot be performed on fast-refresh materialized views.
-   After a fast-refresh materialized view is created, you need to run the  **REFRESH**  command to synchronize the materialized view with the base table when the base table data changes.

## Syntax<a name="en-us_topic_0283136612_en-us_topic_0237122161_en-us_topic_0059777447_sbe280a5c331e4b75969129444d341882"></a>

```
CREATE INCREMENTAL MATERIALIZED VIEW mv_name
    [ (column_name [, ...] ) ]
    [ TABLESPACE tablespace_name ]
    AS query;
```

## Parameter Description<a name="en-us_topic_0283136612_en-us_topic_0237122161_en-us_topic_0059777447_sf2fd7956e26c49a8ae566c80a0e8e1c0"></a>

-   **mv\_name**

    Name \(optionally schema-qualified\) of the materialized view to be created.

    Value range: a string. It must comply with the naming convention.

-   **column\_name**

    Column name in the new materialized view. The materialized view supports specified columns. The number of specified columns must be the same as the number of columns in the result of the subsequent query statement. If no column name is provided, the column name is obtained from the output column name of the query.

    Value range: a string. It must comply with the naming convention.

-   **TABLESPACE tablespace\_name**

    Tablespace to which the new materialized view belongs. If not specified, the default tablespace is used.

-   **AS query**

    **SELECT**,  **TABLE**, or  **VALUES**  command This query will be run in a security-constrained operation.


## Examples<a name="en-us_topic_0283136612_en-us_topic_0237122161_en-us_topic_0059777447_s8a46083a59d940c3aaa2535b2f783645"></a>

```
-- Create an ordinary table.
openGauss=# CREATE TABLE my_table (c1 int, c2 int);
-- Create a fast-refresh materialized view.
openGauss=# CREATE INCREMENTAL MATERIALIZED VIEW my_imv AS SELECT * FROM my_table;
-- Write data to the base table.
openGauss=# INSERT INTO my_table VALUES(1,1),(2,2);
-- Incrementally refresh the fast-refresh materialized view my_imv.
openGauss=# REFRESH INCREMENTAL MATERIALIZED VIEW my_imv;
```

## Helpful Links<a name="en-us_topic_0283136612_section1922813315464"></a>

[ALTER MATERIALIZED VIEW](alter-materialized-view.md),  [CREATE MATERIALIZED VIEW](create-materialized-view.md),  [CREATE TABLE](create-table.md),  [DROP MATERIALIZED VIEW](drop-materialized-view.md),  [REFRESH INCREMENTAL MATERIALIZED VIEW](refresh-incremental-materialized-view.md), and  [REFRESH MATERIALIZED VIEW](refresh-materialized-view.md)

