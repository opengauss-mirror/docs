# Routinely Maintaining Tables<a name="EN-US_TOPIC_0289897016"></a>

To ensure proper database running, after insert and delete operations, you need to routinely run  **VACUUM FULL**  and  **ANALYZE**  as appropriate for customer scenarios and update statistics to obtain better performance.

## Related Concepts<a name="en-us_topic_0283140571_en-us_topic_0237088810_en-us_topic_0111591987_en-us_topic_0085032190_en-us_topic_0059779302_section1275717610563"></a>

You need to routinely run  **VACUUM**,  **VACUUM FULL**, and  **ANALYZE**  to maintain tables, because:

-   **VACUUM FULL**  can be used to reclaim disk space occupied by updated or deleted data and combine small-size data files.
-   **VACUUM**  can be used to maintain a visualized mapping for each table to track pages that contain arrays visible to other active transactions. A common index scan uses the mapping to obtain the corresponding arrays and check whether the arrays are visible to the current transaction. If the arrays cannot be obtained, capture a batch of arrays to check the visibility. Therefore, updating the visualized mapping of a table can accelerate unique index scans.
-   Running  **VACUUM**  can avoid original data loss caused by duplicate transaction IDs when the number of executed transactions exceeds the database threshold.
-   **ANALYZE**  can be used to collect statistics on tables in databases. The statistics are stored in the system catalog  **PG\_STATISTIC**. Then the query optimizer uses the statistics to work out the most efficient execution plan.

## Procedure<a name="en-us_topic_0283140571_en-us_topic_0237088810_en-us_topic_0111591987_en-us_topic_0085032190_en-us_topic_0059779302_section97581768562"></a>

1.  Run the  **VACUUM**  or  **VACUUM FULL**  command to reclaim disk space.
    -   **VACUUM**:

        Run  **VACUUM**  for a table.

        ```
        openGauss=# VACUUM customer;
        ```

        ```
        VACUUM
        ```

        This statement can be concurrently executed with database operation commands, including  **SELECT**,  **INSERT**,  **UPDATE**, and  **DELETE**; excluding  **ALTER TABLE**.

        Run  **VACUUM**  for the table partition.

        ```
        openGauss=# VACUUM customer_par PARTITION ( P1 );
        ```

        ```
        VACUUM
        ```

    -   **VACUUM FULL**:

        ```
        openGauss=# VACUUM FULL customer;
        ```

        ```
        VACUUM
        ```

        During the command running, exclusive locks need to be added to the table and all other database operations need to be suspended.

2.  Run  **ANALYZE**  to update statistics.

    ```
    openGauss=# ANALYZE customer;
    ```

    ```
    ANALYZE
    ```

    Run  **ANALYZE VERBOSE**  to update statistics and display table information.

    ```
    openGauss=# ANALYZE VERBOSE customer;
    ```

    ```
    ANALYZE
    ```

    You can run  **VACUUM ANALYZE**  at the same time to optimize the query.

    ```
    openGauss=# VACUUM ANALYZE customer;
    ```

    ```
    VACUUM
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >**VACUUM**  and  **ANALYZE**  cause a substantial increase in I/O traffic, which may affect other active sessions. Therefore, you are advised to set the cost-based vacuum delay feature by specifying the  **vacuum\_cost\_delay**  parameter. For details, see [Cost-based Vacuum Delay](../DataBaseReference/cost-based-vacuum-delay.md).

3.  Delete a table.

    ```
    openGauss=# DROP TABLE customer;
    openGauss=# DROP TABLE customer_par;
    openGauss=# DROP TABLE part;
    ```

    If the following information is displayed, the tables have been deleted:

    ```
    DROP TABLE
    ```


## Maintenance Suggestions<a name="en-us_topic_0283140571_en-us_topic_0237088810_en-us_topic_0111591987_en-us_topic_0085032190_en-us_topic_0059779302_section976110616566"></a>

-   Routinely run  **VACUUM FULL**  for large tables. If the database performance deteriorates, run  **VACUUM FULL**  for the entire database. If the database performance is stable, you are advised to run  **VACUUM FULL**  monthly.
-   Routinely run  **VACUUM FULL**  on system catalogs, especially  **PG\_ATTRIBUTE**.
-   Enable automatic vacuum threads \(**AUTOVACUUM**\) in the system. The processes automatically run the  **VACUUM**  and  **ANALYZE**  statements to reclaim the record space marked as the deleted state and update statistics in the table.

