# Slow Response to a Query Statement<a name="EN-US_TOPIC_0291615096"></a>

## Symptom<a name="section262711486472"></a>

After a query statement has been executed, no response is returned for a long time.

## Cause Analysis<a name="section101846244812"></a>

-   The query statement is complex and requires a long time for execution.

-   The query statement is blocked.


## Procedure<a name="section954884820"></a>

1.  Log in to the host as the OS user  **omm**.
2.  Run the following command to connect to the database:

    ```
    gsql -d postgres -p 8000
    ```

    **postgres**  is the name of the database, and  **8000**  is the port number.

3.  Check for the query statements that are executed for a long time in the system.

    ```
    SELECT EXTRACT(DAY FROM (current_timestamp - query_start)) * 24 * 60 + EXTRACT(HOUR FROM (current_timestamp - query_start)) * 60 + EXTRACT(MINUTE FROM (current_timestamp - query_start)) AS runtime, datname, usename, query FROM pg_stat_activity WHERE state != 'idle' ORDER BY 1 desc;
    
    -- In B-compatible mode, run the following statement:
    SELECT timestampdiff(minutes, query_start, current_timestamp) AS runtime, datname, usename, query FROM pg_stat_activity WHERE state != 'idle' ORDER BY 1 desc;
    ```

    Query statements are returned, sorted by execution time length in descending order. The first record is the query statement that takes the long time for execution.

    Alternatively, you can use the  [TIMESTAMPDIFF](en-us_topic_0289900496.md#en-us_topic_0283136846_section5629194495516)  function to set  **current\_timestamp**  and  **query\_start**  to be greater than a threshold to identify query statements that are executed for a duration longer than this threshold. The first parameter of  **timestampdiff**  is the time difference unit. For example, execute the following statement to query the statements whose execution lasts more than 2 minutes:

    ```
    SELECT query FROM pg_stat_activity WHERE (EXTRACT(DAY FROM (current_timestamp - query_start)) * 24 * 60 + EXTRACT(HOUR FROM (current_timestamp - query_start)) * 60 + EXTRACT(MINUTE FROM (current_timestamp - query_start))) > 2;
    
    -- In B-compatible mode, run the following statement:
    SELECT query FROM pg_stat_activity WHERE timestampdiff(minutes, query_start, current_timestamp) > 2;
    ```

4.  Analyze the status of the query statements that were run for a long time.
    -   If the query statement is normal, wait until the execution of the query statement is complete.
    -   If the query statement is blocked, rectify the fault by referring to  [Analyzing Whether a Query Statement Is Blocked](en-us_topic_0291615099.md).


