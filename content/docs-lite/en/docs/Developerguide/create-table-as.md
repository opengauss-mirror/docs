# CREATE TABLE AS<a name="EN-US_TOPIC_0289900336"></a>

## Function<a name="en-us_topic_0283136662_en-us_topic_0237122118_en-us_topic_0059777601_sf40d8ce0a2af4856a44d883e623632b9"></a>

**CREATE TABLE AS**  creates a table from the results of a query.

It creates a table and fills it with data obtained using  **SELECT**. The table columns have the names and data types associated with the output columns of  **SELECT**  \(except that you can override the  **SELECT**  output column names by giving an explicit list of new column names\).

**CREATE TABLE AS**  queries a source table once and writes the data in a new table. The result in the query view changes with the source table. In contrast, the view re-computes and defines its  **SELECT**  statement at each query.

## Precautions<a name="en-us_topic_0283136662_en-us_topic_0237122118_en-us_topic_0059777601_s0379750211b249b5a2831f6cdf27d110"></a>

-   This statement cannot be used to create a partitioned table.
-   If an error occurs during table creation, after it is fixed, the system may fail to delete the disk files that are created before the last automatic clearance and whose size is not 0. This problem seldom occurs and does not affect system running of the database.

## Syntax<a name="en-us_topic_0283136662_en-us_topic_0237122118_en-us_topic_0059777601_s58148dd6e63843eebaa64756e4b093c9"></a>

```
CREATE [ [ GLOBAL | LOCAL ] [ TEMPORARY | TEMP ] | UNLOGGED ] TABLE table_name
    [ (column_name [, ...] ) ]
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
    [ ON COMMIT { PRESERVE ROWS | DELETE ROWS | DROP } ]
    [ COMPRESS | NOCOMPRESS ]
    [ TABLESPACE tablespace_name ]
    AS query
    [ WITH [ NO ] DATA ];
```

## Parameter Description<a name="en-us_topic_0283136662_en-us_topic_0237122118_en-us_topic_0059777601_sb8ea2c52307445c9934740862f4ecc85"></a>

-   **UNLOGGED**

    Specifies that the table is created as an unlogged table. Data written to unlogged tables is not written to the WALs, which makes them considerably faster than ordinary tables. However, they are not crash-safe: an unlogged table is automatically truncated after a crash or unclean shutdown. Contents of an unlogged table are also not replicated to standby servers. Any indexes created on an unlogged table are automatically unlogged as well.

    -   Usage scenario: Unlogged tables do not ensure data security. Users can back up data before using unlogged tables; for example, users should back up the data before a system upgrade.
    -   Troubleshooting: If data is missing in the indexes of unlogged tables due to some unexpected operations such as an unclean shutdown, users should re-create the indexes with errors.

-   **GLOBAL | LOCAL**

    When creating a temporary table, you can specify the  **GLOBAL**  or  **LOCAL**  keyword before  **TEMP**  or  **TEMPORARY**. If the keyword  **GLOBAL**  is specified, openGauss creates a global temporary table. Otherwise, openGauss creates a local temporary table.

-   **TEMPORARY | TEMP**

    If  **TEMP**  or  **TEMPORARY**  is specified, the created table is a temporary table. Temporary tables are classified into global temporary tables and local temporary tables. If the keyword  **GLOBAL**  is specified when a temporary table is created, the table is a global temporary table. Otherwise, the table is a local temporary table.

    The metadata of the global temporary table is visible to all sessions. After the sessions end, the metadata still exists. The user data, indexes, and statistics of a session are isolated from those of another session. Each session can only view and modify the data submitted by itself. Global temporary tables have two schemas:  **ON COMMIT PRESERVE ROWS**  and  **ON COMMIT PRESERVE ROWS**. In session-based  **ON COMMIT PRESERVE ROWS**  schema, user data is automatically cleared when a session ends. In transaction-based  **ON COMMIT DELETE ROWS**  schema, user data is automatically cleared when the commit or rollback operation is performed. If the  **ON COMMIT**  option is not specified during table creation, the session level is used by default. Different from local temporary tables, you can specify a schema that does not start with  **pg\_temp\_**  when creating a global temporary table.

    A local temporary table is automatically dropped at the end of the current session. Therefore, you can create and use temporary tables in the current session as long as the connected database node in the session is normal. Temporary tables are created only in the current session. If a DDL statement involves operations on temporary tables, a DDL error will be generated. Therefore, you are not advised to perform operations on temporary tables in DDL statements.  **TEMP**  is equivalent to  **TEMPORARY**.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >-   Local temporary tables are visible to the current session through the schema starting with  **pg\_temp**  start. Users should not delete schema started with  **pg\_temp**  or  **pg\_toast\_temp**.
    >-   If  **TEMPORARY**  or  **TEMP**  is not specified when you create a table but its schema is set to that starting with  **pg\_temp\_**  in the current session, the table will be created as a temporary table.
    >-   If global temporary tables and indexes are being used by other sessions, do not perform  **ALTER**  or  **DROP**.
    >-   The DDL of a global temporary table affects only the user data and indexes of the current session. For example,  **TRUNCATE**,  **REINDEX**, and  **ANALYZE**  are valid only for the current session.

-   **table\_name**

    Specifies the name of the table to be created.

    Value range: a string. It must comply with the naming convention.

-   **column\_name**

    Specifies the name of a column to be created in the new table.

    Value range: a string. It must comply with the naming convention.

-   **WITH \( storage\_parameter \[= value\] \[, ... \] \)**

    Specifies an optional storage parameter for a table or an index. See details of parameters below.

    -   FILLFACTOR

        The fill factor of a table is a percentage from 10 to 100.  **100**  \(complete filling\) is the default value. When a smaller fill factor is specified,  **INSERT**  operations pack table pages only to the indicated percentage. The remaining space on each page is reserved for updating rows on that page. This gives  **UPDATE**  a chance to place the updated copy of a row on the same page, which is more efficient than placing it on a different page. For a table whose entries are never updated, setting the fill factor to  **100**  \(complete filling\) is the best choice, but in heavily updated tables a smaller fill factor would be appropriate. The parameter is only valid for row–store tables.

        Value range: 10–100

    -   ORIENTATION

        Value range:

        **COLUMN**: The data will be stored in columns.

        **ROW**  \(default value\): The data will be stored in rows.

    -   COMPRESSION

        Specifies the compression level of table data. It determines the compression ratio and time. Generally, the higher the level of compression, the higher the ratio, the longer the time; and the lower the level of compression, the lower the ratio, the shorter the time. The actual compression ratio depends on the distribution mode of table data loaded.

        Value range:

        The valid values for column-store tables are  **YES**,  **NO**,  **LOW**,  **MIDDLE**, and  **HIGH**, and the default value is  **LOW**.

        Row-store tables do not support compression.

    -   MAX\_BATCHROW

        Specifies the maximum number of rows in a storage unit during data loading. The parameter is only valid for column-store tables.

        Value range: 10000 to 60000


-   **ON COMMIT \{ PRESERVE ROWS | DELETE ROWS | DROP \}**

    **ON COMMIT**  determines what to do when you commit a temporary table creation operation. The three options are as follows. Currently, only  **PRESERVE ROWS**  and  **DELETE ROWS**  can be used.

    -   **PRESERVE ROWS**  \(default\): No special action is taken at the ends of transactions. The temporary table and its table data are unchanged.
    -   **DELETE ROWS**: All rows in the temporary table will be deleted at the end of each transaction block.
    -   **DROP**: The temporary table will be dropped at the end of the current transaction block. Only local temporary tables can be dropped. Global temporary tables cannot be dropped.

-   **COMPRESS / NOCOMPRESS**

    Specifies keyword  **COMPRESS**  during the creation of a table, so that the compression feature is triggered in case of bulk  **INSERT**  operations. If this feature is enabled, a scan is performed for all tuple data within the page to generate a dictionary and then the tuple data is compressed and stored. If  **NOCOMPRESS**  is specified, the table is not compressed. Row-store tables do not support compression.

    Default value:  **NOCOMPRESS**, that is, tuple data is not compressed before storage.

-   **TABLESPACE tablespace\_name**

    Specifies that the new table will be created in the  **tablespace\_name**  tablespace. If not specified, the default tablespace is used.

-   **AS query**

    Specifies a  **SELECT**  or  **VALUES**  command, or an  **EXECUTE**  command that runs a prepared  **SELECT**  or  **VALUES**  query.

-   **\[ WITH \[ NO \] DATA \]**

    Specifies whether the data produced by the query should be copied to the new table. By default, the data will be copied. If the value  **NO**  is used, only the table structure will be copied.


## Examples<a name="en-us_topic_0283136662_en-us_topic_0237122118_en-us_topic_0059777601_sa7f2698f298f4001b3a283cb912f1f4d"></a>

```
-- Create the tpcds.store_returns table.
openGauss=# CREATE TABLE tpcds.store_returns
(
    W_WAREHOUSE_SK            INTEGER               NOT NULL,
    W_WAREHOUSE_ID            CHAR(16)              NOT NULL,
    sr_item_sk                VARCHAR(20)                   ,
    W_WAREHOUSE_SQ_FT         INTEGER                       
);
-- Create the tpcds.store_returns_t1 table and insert numbers that are greater than 16 in the sr_item_sk column of the tpcds.store_returns table.
openGauss=# CREATE TABLE tpcds.store_returns_t1 AS SELECT * FROM tpcds.store_returns WHERE sr_item_sk > '4795';

-- Copy tpcds.store_returns to create the tpcds.store_returns_t2 table.
openGauss=# CREATE TABLE tpcds.store_returns_t2 AS table tpcds.store_returns;

-- Delete the table.
openGauss=# DROP TABLE tpcds.store_returns_t1 ;
openGauss=# DROP TABLE tpcds.store_returns_t2 ;
openGauss=# DROP TABLE tpcds.store_returns;
```

## Helpful Links<a name="en-us_topic_0283136662_en-us_topic_0237122118_en-us_topic_0059777601_sa0d9dc1ba4fb4ce58ecdfe391f0561d3"></a>

[CREATE TABLE](create-table.md)  and  [SELECT](select.md)

