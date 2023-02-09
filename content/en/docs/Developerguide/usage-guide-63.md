# Usage Guide<a name="EN-US_TOPIC_0000001240944983"></a>

Assume that the **confpath** configuration file directory has been initialized.

-   To enable only the trend prediction function, run the following command (for details, see the description of the **service** subcommand):

    ```
    gs_dbmind service start -c confpath --only-run forecast
    ```

-   To enable trend prediction in interactive mode, run the following command and view the prediction result of an instance metric from **timestamps0** to **timestamps1**:

    ```
    gs_dbmind component forecast show -c confpath --metric-name metric --host instance --start-time timestamps0 --end-time timestamps1
    ```

-   Run the following command to manually clear historical prediction results:

    ```
    gs_dbmind component forecast clean -c confpath --retention-days DAYS
    ```

-   To enable trend prediction based on the user-defined threshold (**up** and **low**), run the following command and view the prediction result of the metric of an instance from **timestamps0** to **timestamps1** and check whether the prediction value exceeds the threshold:

    ```
    gs_dbmind component forecast early-warning -c confpath --metric-name metric --host instance --start-time timestamps0 --end-time timestamps1 --upper up --lower low
    ```

-   Run the following command to stop the services that have been started:

    ```
    gs_dbmind service stop -c confpath
    ```
