# CREATE MATERIALIZED VIEW<a name="EN-US_TOPIC_0273480004"></a>

## Function<a name="en-us_topic_0237122118_en-us_topic_0059777601_sf40d8ce0a2af4856a44d883e623632b9"></a>

**CREATE MATERIALIZED VIEW**  defines a materialized view for query. When this command is delivered, the query is executed and used to fill the view \(unless WITH NO DATA is used\), and the  **REFRESH MATERIALIZED VIEW**  command can be used to refresh data.

CREATE MATERIALIZED VIEW is similar to CREATE TABLE AS, but it remembers the query used to initialize the view, so it can refresh data later. A materialized view has many attributes that are the same as those of a table, but does not support temporary materialized views.

## Precautions<a name="en-us_topic_0237122118_en-us_topic_0059777601_s0379750211b249b5a2831f6cdf27d110"></a>

-   Materialized views cannot be created on temporary tables or global temporary tables.
-   After a materialized view is created, you need to run the  **REFRESH**  command to synchronize the materialized view with the base table when the data in the base table changes.

## Syntax<a name="en-us_topic_0237122118_en-us_topic_0059777601_s58148dd6e63843eebaa64756e4b093c9"></a>

```
CREATE MATERIALIZED VIEW mv_name
    [ (column_name [, ...] ) ]
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
      [ TABLESPACE tablespace_name ]
    AS query
    [ WITH [ NO ] DATA ];
```

## Parameter Description<a name="en-us_topic_0237122118_en-us_topic_0059777601_sb8ea2c52307445c9934740862f4ecc85"></a>

-   **mv\_name**

    Specifies the name \(optionally schema-qualified\) of the materialized view to be created.

    Value range: a string. It must comply with the naming convention.

-   **column\_name**

    Specifies a column name in the new materialized view. The materialized view supports specified columns. The number of specified columns must be the same as the number of columns in the result of the subsequent query statement. If no column name is provided, the column name is obtained from the output column name of the query.

    Value range: a string. It must comply with the naming convention.

-   **WITH \( storage\_parameter \[= value\] \[, ... \] \)**

    Specifies an optional storage parameter for a table or an index. CREATE MATERIALIZED VIEW supports all parameters supported by CREATE TABLE ,except  **OIDS**. For details, see  [CREATE TABLE](en-us_topic_0242370581.md).

-   **TABLESPACE tablespace\_name**

    Tablespace to which the new materialized view belongs. If not specified, the default tablespace is used.

-   **AS query**

    Specifies the  **SELECT**,  **TABLE**, or  **VALUES**  command. This query will be run in a security-constrained operation.

-   **\[ WITH \[ NO \] DATA \]**

    Specifies whether the data produced by the query should be copied to the new materialized view. By default, the data will be copied. If the value  **NO**  is used, no data is copied.


## Examples<a name="en-us_topic_0237122118_en-us_topic_0059777601_sa7f2698f298f4001b3a283cb912f1f4d"></a>

```
-- Create the tpcds.store_returns table.
postgres=# CREATE TABLE tpcds.store_returns
(
    W_WAREHOUSE_SK            INTEGER               NOT NULL,
    W_WAREHOUSE_ID            CHAR(16)              NOT NULL,
    sr_item_sk                VARCHAR(20)                   ,
    W_WAREHOUSE_SQ_FT         INTEGER                       
);
-- Create the materialized view tpcds.store_returns_mv based on the tpcds.store_returns base table.
postgres=# CREATE MATERIALIZED VIEW tpcds.store_returns_mv AS SELECT * FROM tpcds.store_returns';

-- Use tpcds.store_returns to copy a new table tpcds.store_returns_mv2 as a materialized view.
postgres=# CREATE MATERIALIZED VIEW tpcds.store_returns_mv2 AS table tpcds.store_returns;
-- Delete the table.
postgres=# DROP MATERIALIZED VIEW tpcds.store_returns_mv cascade;
```

## Helpful Links<a name="en-us_topic_0237122118_en-us_topic_0059777601_sa0d9dc1ba4fb4ce58ecdfe391f0561d3"></a>

[CREATE TABLE](en-us_topic_0242370581.md),  [DROP MATERIALIZED VIEW](drop-materialized-view.md),  [ALTER MATERIALIZED VIEW](alter-materialized-view.md), and  [REFRESH MATERIALIZED VIEW](refresh-materialized-view.md)

