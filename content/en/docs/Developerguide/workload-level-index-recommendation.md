# Workload-level Index Recommendation<a name="EN-US_TOPIC_0296549248"></a>

For workload-level indexes, you can run scripts outside the database to use this function. This function uses the workload of multiple DML statements as the input to generate a batch of indexes that can optimize the overall workload execution time.

## Prerequisites<a name="section18679102695014"></a>

-   The database is normal, and the client can be connected properly.
-   The gsql tool has been installed by the current user, and the tool path has been added to the  _PATH _environment variable.
-   The Python 3.6+ environment is available.

## Procedure<a name="section174995305018"></a>

1.  Prepare a file that contains multiple DML statements as the input workload. Each statement in the file occupies a line. You can obtain historical service statements from the offline logs of the database.
2.  Run the Python script  **index\_advisor\_workload.py**:

    ```
    python index_advisor_workload.py [p PORT] [d DATABASE] [f FILE] [--h HOST] [-U USERNAME] [-W PASSWORD]
    [--max_index_num MAX_INDEX_NUM][--max_index_storage MAX_INDEX_STORAGE] [--multi_iter_mode] 
    ```

    The input parameters are as follows:

    -   **PORT**: port number of the connected database.
    -   **DATABASE**: specifies the name of the connected database.
    -   **FILE**: specifies the file path that contains the workload statement.
    -   **HOST**: \(optional\) ID of the host that connects to the database.
    -   **USERNAME**: \(optional\) username for connecting to the database.
    -   **PASSWORD**: \(optional\) password for connecting to the database.
    -   **MAX\_INDEX\_NUM**: \(optional\) maximum number of recommended indexes.
    -   **MAX\_INDEX\_STORAGE:**  \(Optional\) Maximum size of the index set space.
    -   **multi\_iter\_mode**: \(optional\) algorithm mode. You can switch the algorithm mode by setting this parameter. For example:

        ```
        python index_advisor_workload.py 6001 postgres tpcc_log.txt --max_index_num 10 --multi_iter_mode
        ```


    The recommendation result is a batch of indexes, which are displayed on the screen in the format of multiple create index statements. The following is an example of the result.

    ```
    create index ind0 on bmsql_stock(s_i_id,s_w_id);
    create index ind1 on bmsql_customer(c_w_id,c_id,c_d_id);
    create index ind2 on bmsql_order_line(ol_w_id,ol_o_id,ol_d_id);
    create index ind3 on bmsql_item(i_id);
    create index ind4 on bmsql_oorder(o_w_id,o_id,o_d_id);
    create index ind5 on bmsql_new_order(no_w_id,no_d_id,no_o_id);
    create index ind6 on bmsql_customer(c_w_id,c_d_id,c_last,c_first);
    create index ind7 on bmsql_new_order(no_w_id);
    create index ind8 on bmsql_oorder(o_w_id,o_c_id,o_d_id);
    create index ind9 on bmsql_district(d_w_id);
    ```


