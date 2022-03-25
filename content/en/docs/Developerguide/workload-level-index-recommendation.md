# Workload-level Index Recommendation<a name="EN-US_TOPIC_0296549248"></a>

For workload-level indexes, you can run scripts outside the database to use this function. This function uses the workload of multiple DML statements as the input to generate a batch of indexes that can optimize the overall workload execution performance. In addition, it provides the function of extracting service data SQL statements from logs.

## Prerequisites<a name="section18679102695014"></a>

-   The database is normal, and the client can be connected properly.
-   The  **gsql**  tool has been installed by the current user, and the tool path has been added to the  _PATH _environment variable.
-   To use the service data extraction function, you need to set the GUC parameters of the node whose data is to be collected as follows:
    -   log\_min\_duration\_statement = 0
    -   log\_statement= 'all'

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >After service data extraction is complete, you are advised to restore the preceding GUC parameters. Otherwise, log files may be expanded.



## Procedure for Using the Service Data Extraction Script<a name="section183663372522"></a>

1.  <a name="li541620573521"></a>Set the GUC parameters according to instructions in the prerequisites.
2.  Run the following command to extract SQL statements based on logs:

    ```
    gs_dbmind component extract_log [l LOG_DIRECTORY] [f OUTPUT_FILE] [p LOG_LINE_PREFIX] [-d DATABASE] [-U USERNAME][--start_time] [--sql_amount] [--statement] [--json] [--max_reserved_period] [--max_template_num]
    ```

    The input parameters are as follows:

    -   **LOG\_DIRECTORY**: directory for storing  **pg\_log**.
    -   **OUTPUT\_PATH**: path for storing the output SQL statements, that is, path for storing the extracted service data.
    -   **LOG\_LINE\_PREFIX**: specifies the prefix format of each log.
    -   **DATABASE**  \(optional\): database name. If this parameter is not specified, all databases are selected by default.
    -   **USERNAME**  \(optional\): username. If this parameter is not specified, all users are selected by default.
    -   **start\_time**  \(optional\): start time for log collection. If this parameter is not specified, all files are collected by default.
    -   **sql\_amount**  \(optional\): maximum number of SQL statements to be collected. If this parameter is not specified, all SQL statements are collected by default.
    -   **statement**  \(optional\): Collects the SQL statements starting with  **statement**  in  **pg\_log log**. If this parameter is not specified, the SQL statements are not collected by default.
    -   **json**  \(optional\): specifies that the collected log files are stored in JSON format after SQL normalization. If no format is specified, each SQL statement occupies a line.
    -   **max\_reserved\_period**  \(optional\): specifies the maximum number of days of reserving the template in incremental log collection in JSON mode. If this parameter is not specified, the template is reserved by default. The unit is day.
    -   **max\_template\_num**  \(optional\): Specifies the maximum number of templates that can be reserved in JSON mode. If this parameter is not specified, all templates are reserved by default.

    An example is provided as follows.

    ```
    gs_dbmind component extract_log $GAUSSLOG/pg_log/dn_6001 sql_log.txt '%m %c %d %p %a %x %n %e' -d postgres -U omm --start_time '2021-07-06 00:00:00' --statement
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >If the  **-d/-U**  parameter is specified, the prefix of each log record must contain  **%d**  and  **%u**. If transactions need to be extracted,  **%p**  must be specified. For details, see the  **log\_line\_prefix**  parameter. It is recommended that the value of  **max\_template\_num**  be less than or equal to  **5000**  to avoid long execution time of workload indexes.

3.  Change the GUC parameter values set in  [1](#li541620573521)  to the values before the setting.

## Procedure for Using the Index Recommendation Script<a name="section174995305018"></a>

1.  Prepare a file that contains multiple DML statements as the input workload. Each statement in the file occupies a line. You can obtain historical service statements from the offline logs of the database.
2.  To enable this function, run the following command:

    ```
    gs_dbmind component index_advisor [p PORT] [d DATABASE] [f FILE] [--h HOST] [-U USERNAME] [-W PASSWORD][--schema SCHEMA]
    [--max_index_num MAX_INDEX_NUM][--max_index_storage MAX_INDEX_STORAGE] [--multi_iter_mode] [--multi_node]  [--json] [--driver] [--show_detail]
    ```

    The input parameters are as follows:

    -   **PORT**: port number of the connected database.
    -   **DATABASE**: name of the connected database.
    -   **FILE**: file path that contains the workload statement.
    -   **HOST**  \(optional\): ID of the host that connects to the database.
    -   **USERNAME**  \(optional\): username for connecting to the database.
    -   **PASSWORD**  \(optional\): password for connecting to the database.
    -   **SCHEMA**: schema name.
    -   **MAX\_INDEX\_NUM**  \(optional\): maximum number of recommended indexes.
    -   **MAX\_INDEX\_STORAGE**  \(optional\): maximum size of the index set space.
    -   **multi\_node**  \(optional\): specifies whether the current instance is a distributed database instance.
    -   **multi\_iter\_mode**  \(optional\): algorithm mode. You can switch the algorithm mode by setting this parameter.
    -   **json**  \(optional\): Specifies the file path format of the workload statement as JSON after SQL normalization. By default, each SQL statement occupies one line.
    -   **driver**  \(optional\): Specifies whether to use the Python driver to connect to the database. By default,  **gsql**  is used for the connection.
    -   **show\_detail**  \(optional\): Specifies whether to display the detailed optimization information about the current recommended index set.

    Example:

    ```
    gs_dbmind component index_advisor 6001 postgres tpcc_log.txt --schema public --max_index_num 10 --multi_iter_mode
    ```

    The recommendation result is a batch of indexes, which are displayed on the screen in the format of multiple create index statements. The following is an example of the result.

    ```
    create index ind0 on public.bmsql_stock(s_i_id,s_w_id);
    create index ind1 on public.bmsql_customer(c_w_id,c_id,c_d_id);
    create index ind2 on public.bmsql_order_line(ol_w_id,ol_o_id,ol_d_id);
    create index ind3 on public.bmsql_item(i_id);
    create index ind4 on public.bmsql_oorder(o_w_id,o_id,o_d_id);
    create index ind5 on public.bmsql_new_order(no_w_id,no_d_id,no_o_id);
    create index ind6 on public.bmsql_customer(c_w_id,c_d_id,c_last,c_first);
    create index ind7 on public.bmsql_new_order(no_w_id);
    create index ind8 on public.bmsql_oorder(o_w_id,o_c_id,o_d_id);
    create index ind9 on public.bmsql_district(d_w_id);
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >The value of the  **multi\_node**  parameter must be specified based on the current database architecture. Otherwise, the recommendation result is incomplete, or even no recommendation result is generated.


