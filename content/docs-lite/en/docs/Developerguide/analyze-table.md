# ANALYZE Table<a name="EN-US_TOPIC_0289900953"></a>

The execution plan generator needs to use table statistics to generate the most effective query execution plan to improve query performance. After data is imported, you are advised to run the  **ANALYZE**  statement to update table statistics. The statistics are stored in the system catalog  **PG\_STATISTIC**.

## ANALYZE Table<a name="en-us_topic_0283137110_en-us_topic_0237121146_en-us_topic_0165786590_section147211861618"></a>

**ANALYZE**  supports row-store and column-store tables.  **ANALYZE**  can also collect statistics about specified columns of a local table. For details on  **ANALYZE**, see  [ANALYZE | ANALYSE](analyze-analyse.md).

1.  Update table statistics.

    Do  **ANALYZE**  to the  **product\_info**  table.

    ```
    openGauss=# ANALYZE product_info;
    ```

    ```
    ANALYZE
    ```


## autoanalyze<a name="en-us_topic_0283137110_en-us_topic_0237121146_en-us_topic_0165786590_section1274813345166"></a>

openGauss provides the GUC parameter  [autovacuum](automatic-vacuuming.md#en-us_topic_0283137694_en-us_topic_0237124730_en-us_topic_0059778244_s995913ca9df54ae5bb488d1e810bd824)  to specify whether to enable the autovacuum function of the database.

If  **autovacuum**  is set to  **on**, the system will start the autovacuum thread to automatically analyze tables when the data volume in the table reaches the threshold. This is the autoanalyze function.

-   For an empty table, when the number of rows inserted to it is greater than 50,  **ANALYZE**  is automatically triggered.
-   For a table containing data, the threshold is 50 + 10% x  **reltuples**, where  **reltuples**  indicates the total number of rows in the table.

The autovacuum function also depends on the following GUC parameters for autoanalyze:

-   [track\_counts](query-and-index-statistics-collector.md#en-us_topic_0283136895_en-us_topic_0237124727_en-us_topic_0059779313_s3f4fb0b1004041f69e1454c701952411): This parameter must be set to  **on**  to enable statistics collection about the database.
-   [autovacuum\_max\_workers](automatic-vacuuming.md#en-us_topic_0283137694_en-us_topic_0237124730_en-us_topic_0059778244_s76932f79410248ba8923017d19982673): This parameter must be set to a value greater than  **0**  to specify the maximum number of concurrent autovacuum threads.
-   [autovacuum\_mode](automatic-vacuuming.md#en-us_topic_0237124730en-us_topic_0283137694_en-us_topic_0237124730_section658130152017): This parameter must be configured to allow ANALYZE.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   The autoanalyze function supports the default sampling mode but not percentage sampling.
>-   The autoanalyze function does not collect multi-column statistics, which only supports percentage sampling.
>-   The autoanalyze function supports row-store and column-store tables and does not support foreign tables, temporary tables, unlogged tables, and TOAST tables.

