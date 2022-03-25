# Usage Guide<a name="EN-US_TOPIC_0000001195751184"></a>

Assume that the  **confpath**  configuration file directory has been initialized.

-   To enable only the trend prediction function, run the following command \(for details, see the description of the  **service**  subcommand\):

    ```
    gs_dbmind service start -c confpath --only-run forecast
    ```

-   To enable trend prediction in interactive mode, run the following command and view the prediction results from  **timestamps0**  to  **timestamps1**:

    ```
    gs_dbmind component forecast show -c confpath --start-time timestamps0 --end-time timestamps1
    ```

-   Run the following command to manually clear historical prediction results:

    ```
    gs_dbmind component forecast clean -c confpath --retention-days DAYS
    ```

-   Run the following command to stop the services that have been started:

    ```
    gs_dbmind service stop -c confpath
    ```


