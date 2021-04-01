# Statistics Collection<a name="EN-US_TOPIC_0311524275"></a>

To improve the query performance, you are advised to periodically do  **ANALYZE**  on foreign tables, especially for join queries and aggregate queries.

## Procedure<a name="en-us_topic_0085032190_en-us_topic_0059779302_section97581768562"></a>

1.  Run  **ANALYZE**  to update statistics.

    ```
    postgres=# ANALYZE customer;
    ANALYZE
    ```

    Run  **ANALYZE VERBOSE**  to update statistics and display table information.

    ```
    postgres=# ANALYZE VERBOSE customer;
    ANALYZE
    ```

    You can run  **VACUUM ANALYZE**  at the same time to optimize the query.

    ```
    postgres=# VACUUM ANALYZE customer;
    VACUUM
    ```

2.  Delete a table.

    ```
    postgres=# DROP TABLE customer;
    postgres=# DROP TABLE customer_par;
    postgres=# DROP TABLE part;
    ```

    If the following information is displayed, the tables have been deleted:

    ```
    DROP TABLE
    ```


