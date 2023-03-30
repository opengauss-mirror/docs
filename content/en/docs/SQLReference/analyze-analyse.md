# ANALYZE | ANALYSE<a name="EN-US_TOPIC_0289900881"></a>

## Function<a name="en-us_topic_0283136969_en-us_topic_0237122086_en-us_topic_0059779340_s3b85e88124004279b0fccf70b5953039"></a>

**ANALYZE** collects statistics about ordinary tables in a database, and stores the results in the **PG\_STATISTIC** system catalog. The execution plan generator uses these statistics to determine which one is the most effective execution plan.

If no parameter is specified, **ANALYZE** analyzes each table and partitioned table in the current database. You can also specify the **table\_name**, **column**, and **partition\_name** parameters to restrict the analysis to a specific table, column, or partitioned table.

**ANALYZE | ANALYSE VERIFY** is used to check whether data files of common tables \(row-store and column-store tables\) in a database are damaged.

## Precautions<a name="en-us_topic_0283136969_en-us_topic_0237122086_en-us_topic_0059779340_s5dcc72ade57146a2920a3136d366081c"></a>

-   Non-temporary tables cannot be analyzed in an anonymous block, transaction block, function, or stored procedure. Temporary tables in a stored procedure can be analyzed but their statistics updates cannot be rolled back.
-   The **ANALYZE VERIFY** operation is used to detect abnormal scenarios. The **RELEASE** version is required. In the **ANALYZE VERIFY** scenario, remote read is not triggered. Therefore, the remote read parameter does not take effect. If the system detects that a page is damaged due to an error in a key system table, the system directly reports an error and does not continue the detection.
-   With no table specified, **ANALYZE** processes all the tables that the current user has permission to analyze in the current database. With tables specified, **ANALYZE** processes only the specified tables.
-   To perform ANALYZE operation to a table, you must be a table owner or a user granted the VACUUM permission on the table. By default, the system administrator has this permission. However, database owners are allowed to **ANALYZE** all tables in their databases, except shared catalogs. (The restriction for shared catalogs means that a true database-wide **ANALYZE** can only be executed by the system administrator). **ANALYZE** skips tables on which users do not have permissions.

## Syntax<a name="en-us_topic_0283136969_en-us_topic_0237122086_en-us_topic_0059779340_sd95698dc205444ad9f4bbe049cc5d488"></a>

-   Collect statistics information about a table.

    ```
    { ANALYZE | ANALYSE } [ VERBOSE ]
        [ table_name [ ( column_name [, ...] ) ] ];
    ```


-   Collect statistics about a partitioned table.

    ```
    { ANALYZE | ANALYSE } [ VERBOSE ]
        [ table_name [ ( column_name [, ...] ) ] ]
        PARTITION ( patrition_name ) ;
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >An ordinary partitioned table supports the syntax but not the function of collecting statistics about specified partitions.


-   Collect statistics about multiple columns.

    ```
    {ANALYZE | ANALYSE} [ VERBOSE ]
        table_name (( column_1_name, column_2_name [, ...] ));
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >
    >-   When collecting statistics about multiple columns, set the GUC parameter [default\_statistics\_target](other-optimizer-options.md#en-us_topic_0283137690_en-us_topic_0237124719_en-us_topic_0059779049_se18c86fcdf5e4a22870f71187436d815) to a negative value to sample data in percentage.
    >
    >-   If the GUC parameter **enable\_functional\_dependency** is disabled, the statistics about a maximum of 32 columns can be collected at a time. If the GUC parameter **enable\_functional\_dependency** is enabled, the statistics about a maximum of 4 columns can be collected at a time.
    >
    >-   You are not allowed to collect statistics about multiple columns in system catalogs.


-   Check the data files in the current database.

    ```
    {ANALYZE | ANALYSE} VERIFY {FAST|COMPLETE};
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >
    >-   In fast mode, DML operations need to be performed on the tables to be verified concurrently. As a result, an error is reported during the verification. In the current fast mode, data is directly read from the disk. When other threads modify files concurrently, the obtained data is incorrect. Therefore, you are advised to perform the verification offline.
    >
    >-   You can perform operations on the entire database. Because a large number of tables are involved, you are advised to save the result **gsql -d database -p port -f "verify.sql"\> verify\_warning.txt  2\>&1** in redirection mode.
    >
    >-   NOTICE is used to check only tables that are visible to external systems. The detection of internal tables is included in the external tables on which NOTICE depends and is not displayed externally.
    >
    >-   This statement can be executed with error tolerance. The **Assert** of the debug version may cause the core to fail to execute commands. Therefore, you are advised to perform the operations in release mode.
    >
    >-   If a key system table is damaged during a full database operation, an error is reported and the operation stops.

-   Check data files of tables and indexes.

    ```
    {ANALYZE | ANALYSE} VERIFY {FAST|COMPLETE} table_name|index_name [CASCADE];
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >
    >-   Operations on ordinary tables and index tables are supported, but **CASCADE** operations on indexes of index tables are not supported. The **CASCADE** mode is used to process all index tables of the primary table. When the index tables are checked separately, the **CASCADE** mode is not required.
    >
    >-   When the primary table is checked, the internal tables of the primary table, such as the toast table and cudesc table, are also checked.
    >
    >-   When the system displays a message indicating that the index table is damaged, you are advised to run the **reindex** command to recreate the index.

-   Check the data files of the table partition.

    ```
    {ANALYZE | ANALYSE} VERIFY {FAST|COMPLETE} table_name PARTITION {(patrition_name)}[CASCADE];
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >You can check a single partition of a table, but cannot perform the **CASCADE** operation on the indexes of an index table.


## Parameter Description<a name="en-us_topic_0283136969_en-us_topic_0237122086_en-us_topic_0059779340_s4a744c72f8c44fa4899ddd31887cb4ee"></a>

-   **VERBOSE**

    Enables the display of progress messages.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >If **VERBOSE** is specified, **ANALYZE** displays the progress information, indicating the table that is being processed. Statistics about tables are also displayed.

-   **table\_name**

    Specifies the name (possibly schema-qualified) of a specific table to analyze. If omitted, all regular tables (but not foreign tables) in the current database are analyzed.

    Currently, you can use **ANALYZE** to collect statistics only from row-store tables and column-store tables.

    Value range: an existing table name

-   **column\_name**, column\_1\_name, column\_2\_name

    Specifies the name of a specific column to analyze. All columns are analyzed by default.

    Value range: an existing column name

-   **partition\_name**

    Specifies a partitioned table after the keyword **PARTITION** to analyze the table statistics. Currently the partitioned table supports the syntax of analyzing a partitioned table, but does not execute this syntax.

    Value range: a partition name of a table

-   **index\_name**

    Specifies the name of the specific index table to be analyzed \(possibly schema-qualified\).

    Value range: an existing table name

-   **FAST|COMPLETE**

    For a row-store table, the **FAST** mode verifies the CRC and page header of the row-store table. If the verification fails, an alarm is generated. In **COMPLETE** mode, the pointer and tuple of the row-store table are parsed and verified. For a column-store table, the **FAST** mode verifies the CRC and magic of the column-store table. If the verification fails, an alarm is generated. In **COMPLETE** mode, the CU of the column-store table is parsed and verified.

-   **CASCADE**

    In **CASCADE** mode, all indexes of the current table are verified.


## Examples<a name="en-us_topic_0283136969_en-us_topic_0237122086_en-us_topic_0059779340_s70741e0e8d4843c29a3d2916af35ad25"></a>

-- Create a table.

```
openGauss=# CREATE TABLE customer_info
(
WR_RETURNED_DATE_SK       INTEGER                       ,
WR_RETURNED_TIME_SK       INTEGER                       ,
WR_ITEM_SK                INTEGER               NOT NULL,
WR_REFUNDED_CUSTOMER_SK   INTEGER
)
;

-- Create a partitioned table. 

openGauss=# CREATE TABLE customer_par
(
WR_RETURNED_DATE_SK       INTEGER                       ,
WR_RETURNED_TIME_SK       INTEGER                       ,
WR_ITEM_SK                INTEGER               NOT NULL,
WR_REFUNDED_CUSTOMER_SK   INTEGER
)
PARTITION BY RANGE(WR_RETURNED_DATE_SK)
(
PARTITION P1 VALUES LESS THAN(2452275),
PARTITION P2 VALUES LESS THAN(2452640),
PARTITION P3 VALUES LESS THAN(2453000),
PARTITION P4 VALUES LESS THAN(MAXVALUE)
)
ENABLE ROW MOVEMENT;

-- Run **ANALYZE** to update statistics.

openGauss=# ANALYZE customer_info;
openGauss=# ANALYZE customer_par;

-- Run the **ANALYZE VERBOSE** statement to update statistics and display table information.

openGauss=# ANALYZE VERBOSE customer_info;
INFO:  analyzing "cstore.pg_delta_3394584009"(cn_5002 pid=53078)
INFO:  analyzing "public.customer_info"(cn_5002 pid=53078)
INFO:  analyzing "public.customer_info" inheritance tree(cn_5002 pid=53078)
ANALYZE

-- Delete the table.
openGauss=# DROP TABLE customer_info;
openGauss=# DROP TABLE customer_par;
```
