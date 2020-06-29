# Checking openGauss Run Logs<a name="EN-US_TOPIC_0242215065"></a>

A database can still run when errors occur during the execution of some operations. However, data may be inconsistent before and after the error occurrences. Therefore, you are advised to monthly check openGauss run logs to detect potential problems in time.

## Prerequisites<a name="en-us_topic_0237088806_en-us_topic_0059778412_s39917dbd767d45a6907e332d7c173f02"></a>

-   The host used for collecting logs is running properly, and the network connection is normal. Database installation users trust each other.
-   An OS tool \(for example,  **gstack**\) that the log collection tool requires has been installed. If it is not installed, an error message is displayed, and this collection item is skipped.

## Procedure<a name="en-us_topic_0237088806_en-us_topic_0059778412_s372bdaf3309c4df7896d3204bfc0bdb0"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  <a name="en-us_topic_0237088806_en-us_topic_0059778412_l87490fc259434bc6ac7800ec9881a6ab"></a>Run the following command to collect database logs:

    ```
    gs_collector --begin-time="20160616 01:01" --end-time="20160616 23:59"
    ```

    In the command,  **20160616 01:01**  indicates the start time of the log and  **20160616 23:59**  indicates the end time of the log.

3.  Based on command output in  [2](#en-us_topic_0237088806_en-us_topic_0059778412_l87490fc259434bc6ac7800ec9881a6ab), access the related log collection directory, decompress collected database logs, and check these logs.

    Assume that collected logs are stored in  **/opt/gaussdb/tmp/gaussdba\_mppdb/collector\_20160726\_105158.tar.gz**.

    ```
    tar -xvzf /opt/gaussdb/tmp/gaussdba_mppdb/collector_20160726_105158.tar.gz 
    cd /opt/gaussdb/tmp/gaussdba_mppdb/collector_20160726_105158
    ```


## Examples<a name="en-us_topic_0237088806_en-us_topic_0059778412_sb0fb3a564c104088b282d390f8b15404"></a>

-   Run the  **gs\_collector**  command together with parameters  **--begin-time**  and  **--end-time**:

    ```
    gs_collector --begin-time="20160616 01:01" --end-time="20160616 23:59"
    ```

    If information similar to the following is displayed, the logs have been archived:

    ```
    Successfully collected  files 
    All results are stored in /tmp/gaussdba_mppdb/collector_20160616_175615.tar.gz.
    ```

-   Run the  **gs\_collector**  command together with parameters  **--begin-time**,  **--end-time**, and  **-h**:

    ```
    gs_collector --begin-time="20160616 01:01" --end-time="20160616 23:59" -h plat2
    ```

    If information similar to the following is displayed, the logs have been archived:

    ```
    Successfully collected  files
    All results are stored in /tmp/gaussdba_mppdb/collector_20160616_190225.tar.gz.
    ```

-   Run the  **gs\_collector**  command together with parameters  **--begin-time**,  **--end-time**, and  **-f**:

    ```
    gs_collector --begin-time="20160616 01:01" --end-time="20160616 23:59" -f /opt/software/gaussdb/output
    ```

    If information similar to the following is displayed, the logs have been archived:

    ```
    Successfully collected  files
    All results are stored in /opt/software/gaussdb/output/collector_20160616_190511.tar.gz.
    ```

-   Run the  **gs\_collector**  command together with parameters  **--begin-time**,  **--end-time**, and  **--keyword**:

    ```
    gs_collector --begin-time="20160616 01:01" --end-time="20160616 23:59" --keyword="os"
    ```

    If information similar to the following is displayed, the logs have been archived:

    ```
    Successfully collected files.
    All results are stored in /tmp/gaussdba_mppdb/collector_20160616_190836.tar.gz.
    ```

-   Run the  **gs\_collector**  command together with parameters  **--begin-time**,  **--end-time**, and  **-o**:

    ```
    gs_collector --begin-time="20160616 01:01" --end-time="20160616 23:59" -o /opt/software/gaussdb/output
    ```

    If information similar to the following is displayed, the logs have been archived:

    ```
    Successfully collected files.
    All results are stored in /opt/software/gaussdb/output/collector_20160726_113711.tar.gz.
    ```

-   Run the  **gs\_collector**  command together with parameters  **--begin-time**,  **--end-time**, and  **-l**  \(the file name extension must be .log\):

    ```
    gs_collector --begin-time="20160616 01:01" --end-time="20160616 23:59" -l /opt/software/gaussdb/logfile.log
    ```

    If information similar to the following is displayed, the logs have been archived:

    ```
    Successfully collected files.
    All results are stored in /opt/software/gaussdb/output/collector_20160726_113711.tar.gz.
    ```


