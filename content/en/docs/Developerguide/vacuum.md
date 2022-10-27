# VACUUM<a name="EN-US_TOPIC_0289900615"></a>

## Function<a name="en-us_topic_0283137096_en-us_topic_0237122195_en-us_topic_0059777503_sd160e2f29b7240d88e6b4e9c7c7b8ae3"></a>

**VACUUM**  recycles storage space occupied by tables or  **B-Tree**  indexes. In normal database operation, rows that have been deleted are not physically removed from their table; they remain present until a  **VACUUM**  is done. Therefore, it is necessary to do  **VACUUM**  periodically, especially on frequently-updated tables.

## Precautions<a name="en-us_topic_0283137096_en-us_topic_0237122195_en-us_topic_0059777503_sc14108b37ff240e98423cf0f3a02fc33"></a>

-   With no table specified,  **VACUUM**  processes all the tables that the current user has permission to vacuum in the current database. With a parameter,  **VACUUM**  processes only that table.
-   To perform  **VACUUM**  operation to a table, you must be a table owner or a user granted the  **VACUUM**  permission on the table. By default, the system administrator has this permission. However, database owners are allowed to  **VACUUM**  all tables in their databases, except shared catalogs. \(The restriction for shared catalogs means that a true database-wide  **VACUUM**  can only be executed by the system administrator\).  **VACUUM**  skips over any tables that the calling user does not have the permission to vacuum.
-   **VACUUM**  cannot be executed inside a transaction block.
-   It is recommended that active production databases be vacuumed frequently \(at least nightly\), in order to remove dead rows. After adding or deleting a large number of rows, it might be a good idea to run  **VACUUM ANALYZE**  for the affected table. This will update the system catalogs with the results of all recent changes, and allow the query planner to make better choices in planning queries.
-   **FULL**  is recommended only in special scenarios. For example, you wish to physically narrow the table to decrease the occupied disk space after deleting most rows of a table.  **VACUUM FULL**  usually shrinks a table more than  **VACUUM**  does. The  **FULL**  option does not clear indexes. You are advised to periodically run the  [REINDEX](reindex.md)  statement. Deleting all indexes, running  **VACUUM FULL**, and rebuilding indexes is usually a faster choice. If the physical space usage does not decrease after you run the statement, check whether there are other active transactions \(that have started before you delete data transactions and not ended before you run  **VACUUM FULL**\). If there are such transactions, run this statement again when the transactions quit.
-   **VACUUM**  causes a substantial increase in I/O traffic, which might cause poor performance for other active sessions. Therefore, it is sometimes advisable to use the cost-based VACUUM delay feature.
-   When  **VERBOSE**  is specified,  **VACUUM**  prints progress messages to indicate which table is currently being processed. Various statistics about the tables are printed as well. However, if you execute  **VACUUM**  and specify the  **VERBOSE**  option for column-store tables, no information is returned.
-   When the option list is surrounded by parentheses, the options can be written in any order. If there are no brackets, the options must be given in the order displayed in the syntax.
-   **VACUUM**  and  **VACUUM FULL**  clear deleted tuples after the delay specified by  **vacuum\_defer\_cleanup\_age**.
-   **VACUUM ANALYZE**  executes a VACUUM operation and then an ANALYZE operation for each selected table. This is a handy combination form for routine maintenance scripts.
-   Plain  **VACUUM**  \(without  **FULL**\) simply recycles space and makes it available for reuse. This form of statement can operate in parallel with normal reading and writing of the table, as an exclusive lock is not obtained.  **VACUUM FULL**  executes wider processing, including moving rows across blocks to compress tables so they occupy the minimum number of disk blocks. This form is much slower and requires an exclusive lock on each table while it is being processed.
-   When you do  **VACUUM**  to a column-store table, the following operations are internally performed: data in the delta table is migrated to the primary table, and the delta and desc tables of the primary table are vacuumed.  **VACUUM**  does not recycle the storage space of the delta table. To recycle it, do  **VACUUM DELTAMERGE**  to the column-store table.
-   A deadlock may occur when multiple  **VACUUM FULL**  statements are executed simultaneously.
-   If the  **xc\_maintenance\_mode**  parameter is not enabled, the  **VACUUM FULL**  operation will skip all system catalogs.
-   If VACUUM FULL is executed immediately after DELETE is executed, space may not be reclaimed, depending on whether transactions started before DELETE are still active. In this case, wait until all transactions are complete or restart the database, and then run the VACUUM FULL statement again.

## Syntax<a name="en-us_topic_0283137096_en-us_topic_0237122195_en-us_topic_0059777503_s6ae572813e4047dbafe371b136af69ae"></a>

-   Recycle space and update statistics information, without requirements for keyword orders.

    ```
    VACUUM [ ( { FULL | FREEZE | VERBOSE | {ANALYZE | ANALYSE }} [,...] ) ]
        [ table_name [ (column_name [, ...] ) ] ] [ PARTITION ( partition_name ) | SUBPARTITION ( subpartition_name ) ];
    ```

-   Recycle space, without updating statistics information.

    ```
    VACUUM [ FULL [COMPACT] ] [ FREEZE ] [ VERBOSE ] [ table_name ] 
    [ PARTITION ( partition_name )  | SUBPARTITION ( subpartition_name ) ];
    ```

-   Recycle space and update statistics information, and require keywords in order.

    ```
    VACUUM [ FULL ] [ FREEZE ] [ VERBOSE ] { ANALYZE | ANALYSE } [ VERBOSE ] 
        [ table_name [ (column_name [, ...] ) ] ] [ PARTITION ( partition_name ) | SUBPARTITION ( subpartition_name ) ];
    ```


## Parameter Description<a name="en-us_topic_0283137096_en-us_topic_0237122195_en-us_topic_0059777503_sbca5ac35b0f942659382ddcabe74ee42"></a>

-   **FULL**

    Selects "FULL" vacuum, which can recycle more space, but takes much longer and exclusively locks the table.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >Using  **FULL**  will cause statistics missing. To collect statistics, add the keyword  **ANALYZE**  to  **VACUUM FULL**.

-   **FREEZE**

    Is equivalent to running  **VACUUM**  with the  **vacuum\_freeze\_min\_age**  parameter set to  **zero**.

-   **VERBOSE**

    Prints a detailed VACUUM activity report for each table.

-   **ANALYZE | ANALYSE**

    Updates statistics used by the planner to determine the most efficient way to execute a query.

  > **![](public_sys-resources/icon-note.gif) NOTE:**
  >
  > Vacuum is also triggered when **autovacuum** is set to **analyze** for the ustore partitioned table.
  
-   **table\_name**

    Specifies the name \(optionally schema-qualified\) of a specific table to vacuum.

    Value range: name of a specific table to vacuum Defaults are all tables in the current database.

-   **column\_name**

    Specifies the name of the column to be analyzed. This parameter must be used together with  **ANALYZE**.

    Value range: name of the column to be analyzed Defaults are all columns.

-   **PARTITION**

    **COMPACT**  and  **PARTITION**  cannot be used at the same time.

-   **partition\_name**

    Specifies the level-1 partition name of the table to be cleared. If it is left empty, all level-1 partitions are cleared.

-   **subpartition\_name**

    Specifies the level-2 partition name of the table to be cleared. If it is left empty, all level-2 partitions are cleared.

-   **DELTAMERGE**

    \(For column-store tables\) Migrates data from the delta table to primary tables. For a column-store table, this operation is controlled by  **deltarow\_threshold**. For details, see  [enable\_delta\_store](en-us_topic_0289900911.md#en-us_topic_0283136577_en-us_topic_0237124705_section1035224982816)  and  [Parameter Description](create-table.md#en-us_topic_0283137629_en-us_topic_0237122117_en-us_topic_0059778169_s99cf2ac11c79436c93385e4efd7c4428).


## Examples<a name="en-us_topic_0283137096_en-us_topic_0237122195_en-us_topic_0059777503_s030f55570baf48f8978effdf4361bb45"></a>

```
-- Create an index in the tpcds.reason tabletable.
openGauss=# CREATE UNIQUE INDEX ds_reason_index1 ON tpcds.reason(r_reason_sk);

-- Vacuum the tpcds.reason table that has indexes.
openGauss=# VACUUM (VERBOSE, ANALYZE) tpcds.reason;

-- Delete the index.
openGauss=# DROP INDEX ds_reason_index1 CASCADE;
openGauss=# DROP TABLE tpcds.reason;
```

## Suggestions<a name="en-us_topic_0283137096_en-us_topic_0237122195_en-us_topic_0059777503_section34774208154224"></a>

-   vacuum
    -   **VACUUM**  cannot be executed inside a transaction block.
    -   It is recommended that active production databases be vacuumed frequently \(at least nightly\), in order to remove dead rows. It is strongly recommended that you run  **VACUUM ANALYZE**  after adding or deleting a large number of records.
    -   **FULL**  is recommended only in special scenarios. For example, you wish to physically narrow the table to decrease the occupied disk space after deleting most rows of a table.
    -   Before performing the VACUUM FULL operation, you are advised to delete all indexes in related tables, run  **VACUUM FULL**, and then re-create the index.
