# Usage Guide<a name="EN-US_TOPIC_0000001240944983"></a>

Assume that the  **confpath**  configuration file directory has been initialized.

-   Run the following command to start only the slow SQL diagnosis function (the number of root causes for slow SQL diagnosis is determined by the algorithm running result and is not fixed). For more usage, see the description of the **service** subcommand.

    ```
    gs_dbmind service start -c confpath --only-run slow_query_diagnosis
    ```

-   Run the following command to query the diagnosis history of slow SQL statements:

    ```
    gs_dbmind component slow_query_diagnosis show -c confpath --query SQL --start-time timestamps0 --end-time timestamps1
    ```

-   Run the following command to diagnose slow SQL statements in interactive mode:

    ```
    gs_dbmind component slow_query_diagnosis diagnosis -c confpath --database dbname --schema schema_name --query SQL
    ```

-   Run the following command to manually clear historical prediction results:

    ```
    gs_dbmind component slow_query_diagnosis clean -c confpath --retention-days DAYS
    ```

-   Run the following command to stop the services that have been started:

    ```
    gs_dbmind service stop -c confpath
    ```
