# CREATE TABLE AS<a name="ZH-CN_TOPIC_0289900336"></a>

## Function<a name="en-us_topic_0283136662_en-us_topic_0237122118_en-us_topic_0059777601_sf40d8ce0a2af4856a44d883e623632b9"></a>

**CREATE TABLE AS** creates a table based on the results of a query.

It creates a table and fills it with data obtained using **SELECT**. The table columns have the names and data types associated with the output columns of **SELECT** (except that you can override the **SELECT** output column names by giving an explicit list of new column names).

**CREATE TABLE AS** queries a source table once and writes the data in a new table. The result in the query view changes with the source table. In contrast, the view re-computes and defines its **SELECT** statement at each query.

## Precautions<a name="en-us_topic_0283136662_en-us_topic_0237122118_en-us_topic_0059777601_s0379750211b249b5a2831f6cdf27d110"></a>

- This section describes only the new syntax of Dolphin. The original syntax of openGauss is not deleted or modified.

## Syntax<a name="en-us_topic_0283136662_en-us_topic_0237122118_en-us_topic_0059777601_s58148dd6e63843eebaa64756e4b093c9"></a>

```
CREATE [ [ GLOBAL | LOCAL ] [ TEMPORARY | TEMP ] | UNLOGGED ] TABLE table_name
    [ (column_name [, ...] ) ]
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
    [ ON COMMIT { PRESERVE ROWS | DELETE ROWS | DROP } ]
    [ COMPRESS | NOCOMPRESS ]
    [ TABLESPACE tablespace_name ]
    [ AS ] query
    [ WITH [ NO ] DATA ];
```

## Parameter Description<a name="en-us_topic_0283136662_en-us_topic_0237122118_en-us_topic_0059777601_sb8ea2c52307445c9934740862f4ecc85"></a>

- **\[ AS \] query**

    Specifies a **SELECT** or **VALUES** command, or an **EXECUTE** command that runs a prepared **SELECT**, or **VALUES** query.

    The AS keyword is optional. However, if the query contains the WITH statement, you must use parentheses to enclose the query. The following is an example:

    ```
    CREATE TABLE t_new (WITH temp_t(a, b) AS (SELECT a, b FROM t_old) SELECT * FROM temp_t);
    ```


## Examples<a name="en-us_topic_0283136662_en-us_topic_0237122118_en-us_topic_0059777601_sa7f2698f298f4001b3a283cb912f1f4d"></a>

```
--Create the tpcds.store_returns table.
openGauss=# CREATE TABLE tpcds.store_returns
(
    W_WAREHOUSE_SK            INTEGER               NOT NULL,
    W_WAREHOUSE_ID            CHAR(16)              NOT NULL,
    sr_item_sk                VARCHAR(20)                   ,
    W_WAREHOUSE_SQ_FT         INTEGER                       
);
--Create the tpcds.store_returns_t1 table and insert numbers that are greater than 16 in the sr_item_sk column of the tpcds.store_returns table:
openGauss=# CREATE TABLE tpcds.store_returns_t1 AS SELECT * FROM tpcds.store_returns WHERE sr_item_sk > '4795';

--Copy tpcds.store_returns to create the tpcds.store_returns_t2 table.
openGauss=# CREATE TABLE tpcds.store_returns_t2 AS table tpcds.store_returns;

--Delete a table.
openGauss=# DROP TABLE tpcds.store_returns_t1 ;
openGauss=# DROP TABLE tpcds.store_returns_t2 ;
openGauss=# DROP TABLE tpcds.store_returns;
```

## Helpful Links<a name="en-us_topic_0283136662_en-us_topic_0237122118_en-us_topic_0059777601_sa0d9dc1ba4fb4ce58ecdfe391f0561d3"></a>

[CREATE TABLE](create-table.md), [SELECT](select.md)
