# Logical Replication Functions<a name="EN-US_TOPIC_0289900082"></a>

-   pg\_create\_logical\_replication\_slot\('slot\_name', 'plugin\_name'\)

    Description: Creates a logical replication slot.

    Parameter description:

    -   slot\_name

        Indicates the name of the streaming replication slot.

        Value range: a string of characters, which can contain only lowercase letters, digits, underscores (_), question marks (?), hyphens (-), and periods (.). The '.' or '..' cannot be used as a replication slot name.

    -   plugin\_name

        Indicates the name of the plugin.

        Value range: a string, supporting  **mppdb\_decoding**

    Return type: name, text

    Note: The first return value is the slot name, and the second is the start LSN position for decoding in the logical replication slot. Users who invoke this function must have the  **SYSADMIN**  permission, the  **REPLICATION**  permission, or inherit the  **gs\_role\_replication**  permission of the built-in role. Currently, this function can be invoked only on the host.

-   pg\_create\_physical\_replication\_slot\('slot\_name', 'isDummyStandby'\)

    Description: Creates a physical replication slot.

    Parameter description:

    -   slot\_name

        Indicates the name of the streaming replication slot.

        Value range: a string of characters, which can contain only lowercase letters, digits, underscores (_), question marks (?), hyphens (-), and periods (.). The '.' or '..' cannot be used as a replication slot name.

    -   isDummyStandby

        Specifies whether the replication slot is created by connecting the secondary server to the primary server.

        Type: bool

    Return type: name, text

    Note: Users who invoke this function must have the  **SYSADMIN**  permission or the  **REPLICATION**  permission, or inherit the  **gs\_role\_replication**  permission of the built-in role. Currently, primary/standby/secondary deployment is not supported by default.

-   pg\_drop\_replication\_slot\('slot\_name'\)

    Description: Deletes a streaming replication slot.

    Parameter description:

    -   slot\_name

        Indicates the name of the streaming replication slot.

        Value range: a string of characters, which can contain only lowercase letters, digits, underscores (_), question marks (?), hyphens (-), and periods (.). The '.' or '..' cannot be used as a replication slot name.

    Return type: void

    Note: Users who invoke this function must have the  **SYSADMIN**  permission or the  **REPLICATION**  permission, or inherit the  **gs\_role\_replication**  permission of the built-in role. Currently, this function can be invoked only on the host.

-   <a name="en-us_topic_0283137128_en-us_topic_0237121996_li11712645125"></a>pg\_logical\_slot\_peek\_changes\('slot\_name', 'LSN', upto\_nchanges, 'options\_name', 'options\_value'\)

    Description: Performs decoding but does not go to the next streaming replication slot. \(The decoding result will be returned again on future calls.\)

    Parameter description:

    -   slot\_name

        Indicates the name of the streaming replication slot.

        Value range: a string of characters, which can contain only lowercase letters, digits, underscores (_), question marks (?), hyphens (-), and periods (.). The '.' or '..' cannot be used as a replication slot name.

    -   LSN

        Indicates a target LSN. Decoding is performed only when an LSN is less than or equal to this value.

        Value range: a string, in the format of  *xlogid*/*xrecoff*, for example, 1/2AAFC60 \(If this parameter is set to  **NULL**, the target LSN indicating the end position of decoding is not specified.\)

    -   upto\_nchanges

        Indicates the number of decoded records \(including the  **begin**  and  **commit**  timestamps\). Assume that there are three transactions, which involve 3, 5, and 7 records, respectively. If  **upto\_nchanges**  is set to  **4**, 8 records of the first two transactions will be decoded. Specifically, decoding is stopped when the number of decoded records exceeds the value of  **upto\_nchanges**  after decoding in the first two transactions is finished.

        Value range: a non-negative integer

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >If any of the  **LSN**  and  **upto\_nchanges**  values are reached, decoding ends.

    -   **options**: Specifies optional parameters, consisting of  **options\_name**  and  **options\_value**.
        -   include-xids

            Indicates whether the decoded  **data**  column contains XID information.

            Valid value:  **0**  and  **1**. The default value is  **1**.

            -   **0**: The decoded  **data**  column does not contain XID information.
            -   **1**: The decoded  **data**  column contains XID information.

        -   skip-empty-xacts

            Indicates whether to ignore empty transaction information during decoding.

            Valid value:  **0**  and  **1**. The default value is  **0**.

            -   **0**: The empty transaction information is not ignored during decoding.
            -   **1**: The empty transaction information is ignored during decoding.

        -   include-timestamp

            Indicates whether decoded information contains the  **commit**  timestamp.

            Valid value:  **0**  and  **1**. The default value is  **0**.

            -   **0**: The decoded information does not contain the  **commit**  timestamp.
            -   **1**: The decoded information contains the  **commit**  timestamp.

        -   only-local

            Specifies whether to decode only local logs.

            Value range:  **0**  and  **1**. The default value is  **1**.

            -   **0**: Non-local logs and local logs are decoded.
            -   **1**: Only local logs are decoded.

        -   force-binary

            Specifies whether to output the decoding result in binary format.

            Value range:  **0**

            -   **0**: The decoding result is output in text format.

        -   white-table-list

            Whitelist parameter, including the schemas and table names to be decoded.

            Value range: a string that contains table names in the whitelist. Different tables are separated by commas \(,\). An asterisk \(\*\) is used to fuzzily match all tables. Schema names and table names are separated by periods \(.\). No space character is allowed. Example:  **select \* from pg\_logical\_slot\_peek\_changes\('slot1', NULL, 4096, 'white-table-list', 'public.t1,public.t2'\);**


    Return type: text, xid, text

    Note: The function returns the decoding result. Each decoding result contains three columns, corresponding to the above return types and indicating the LSN position, XID, and decoded content, respectively.

    Users who invoke this function must have the  **SYSADMIN**  permission or the  **REPLICATION**  permission, or inherit the  **gs\_role\_replication**  permission of the built-in role.

-   pg\_logical\_slot\_get\_changes\('slot\_name', 'LSN', upto\_nchanges, 'options\_name', 'options\_value'\)

    Description: Performs decoding and goes to the next streaming replication slot.

    Parameter: This function has the same parameters as  **pg\_logical\_slot\_peek\_changes**. For details, see  [pg\_logical\_slot\_peek\_ch...](#en-us_topic_0283137128_en-us_topic_0237121996_li11712645125).

    Note: Users who invoke this function must have the  **SYSADMIN**  permission or the  **REPLICATION**  permission, or inherit the  **gs\_role\_replication**  permission of the built-in role. Currently, this function can be invoked only on the host.

-   <a name="li15187162457"></a>pg\_logical\_slot\_peek\_binary\_changes\('slot\_name', 'LSN', upto\_nchanges, 'options\_name', 'options\_value'\)

    Description: Performs decoding in binary mode and does not go to the next streaming replication slot. \(The decoded data can be obtained again during the next decoding.\)

    Parameter description:

    -   slot\_name

        Indicates the name of the streaming replication slot.

        Value range: a string of characters, which can contain only lowercase letters, digits, underscores (_), question marks (?), hyphens (-), and periods (.). The '.' or '..' cannot be used as a replication slot name.

    -   LSN

        Indicates a target LSN. Decoding is performed only when an LSN is less than or equal to this value.

        Value range: a string, in the format of  *xlogid*/*xrecoff*, for example, 1/2AAFC60 \(If this parameter is set to  **NULL**, the target LSN indicating the end position of decoding is not specified.\)

    -   upto\_nchanges

        Indicates the number of decoded records \(including the  **begin**  and  **commit**  timestamps\). Assume that there are three transactions, which involve 3, 5, and 7 records, respectively. If  **upto\_nchanges**  is set to  **4**, 8 records of the first two transactions will be decoded. Specifically, decoding is stopped when the number of decoded records exceeds the value of  **upto\_nchanges**  after decoding in the first two transactions is finished.

        Value range: a non-negative integer

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >If any of the  **LSN**  and  **upto\_nchanges**  values are reached, decoding ends.

    -   **options**: Specifies optional parameters, consisting of  **options\_name**  and  **options\_value**.
        -   include-xids

            Indicates whether the decoded  **data**  column contains XID information.

            Valid value:  **0**  and  **1**. The default value is  **1**.

            -   **0**: The decoded  **data**  column does not contain XID information.
            -   **1**: The decoded  **data**  column contains XID information.

        -   skip-empty-xacts

            Indicates whether to ignore empty transaction information during decoding.

            Valid value:  **0**  and  **1**. The default value is  **0**.

            -   **0**: The empty transaction information is not ignored during decoding.
            -   **1**: The empty transaction information is ignored during decoding.

        -   include-timestamp

            Indicates whether decoded information contains the  **commit**  timestamp.

            Valid value:  **0**  and  **1**. The default value is  **0**.

            -   **0**: The decoded information does not contain the  **commit**  timestamp.
            -   **1**: The decoded information contains the  **commit**  timestamp.

        -   only-local

            Specifies whether to decode only local logs.

            Value range:  **0**  and  **1**. The default value is  **1**.

            -   **0**: Non-local logs and local logs are decoded.
            -   **1**: Only local logs are decoded.

        -   force-binary

            Specifies whether to output the decoding result in binary format.

            Value range:  **0**  or  **1**. The default value is  **0**. The result is output in binary format.

        -   white-table-list

            Whitelist parameter, including the schema and table name to be decoded.

            Value range: a string that contains table names in the whitelist. Different tables are separated by commas \(,\). An asterisk \(\*\) is used to fuzzily match all tables. Schema names and table names are separated by periods \(.\). No space character is allowed. Example:  **select \* from pg\_logical\_slot\_peek\_binary\_changes\('slot1', NULL, 4096, 'white-table-list', 'public.t1,public.t2'\);**


    Return type: text, xid, bytea

    Note: The function returns the decoding result. Each decoding result contains three columns, corresponding to the above return types and indicating the LSN position, XID, and decoded content in binary format, respectively. Users who invoke this function must have the  **SYSADMIN**  permission or the  **REPLICATION**  permission, or inherit the  **gs\_role\_replication**  permission of the built-in role.

-   pg\_logical\_slot\_get\_binary\_changes\('slot\_name', 'LSN', upto\_nchanges, 'options\_name', 'options\_value'\)

    Description: Performs decoding in binary mode and does not go to the next streaming replication slot.

    Parameter: This function has the same parameters as  **pg\_logical\_slot\_peek\_binary\_changes**. For details, see  [•pg\_logical\_slot\_peek\_bi...](#li15187162457)

    Note: Users who invoke this function must have the  **SYSADMIN**  permission or the  **REPLICATION**  permission, or inherit the  **gs\_role\_replication**  permission of the built-in role.

-   pg\_replication\_slot\_advance \('slot\_name', 'LSN'\)

    Description: Directly goes to the streaming replication slot for a specified LSN, without outputting any decoding result.

    Parameter description:

    -   slot\_name

        Indicates the name of the streaming replication slot.

        Value range: a string of characters, which can contain only lowercase letters, digits, underscores (_), question marks (?), hyphens (-), and periods (.). The '.' or '..' cannot be used as a replication slot name.

    -   LSN

        Indicates a target LSN. Next decoding will be performed only in transactions whose commission position is greater than this value. If an input LSN is smaller than the position recorded in the current streaming replication slot, the function directly returns. If the input LSN is greater than the LSN of the current physical log, the latter LSN will be directly used for decoding.

        Value range: a string, in the format of  *xlogid*/*xrecoff*

    Return type: name, text

    Note: A return result contains the slot name and LSN that is actually used for decoding. Users who invoke this function must have the  **SYSADMIN**  permission, the  **REPLICATION**  permission, or inherit the  **gs\_role\_replication**  permission of the built-in role. Currently, this function can be invoked only on the host.

-   pg\_logical\_get\_area\_changes\('LSN\_start', 'LSN\_end', upto\_nchanges, 'decoding\_plugin', 'xlog\_path', 'options\_name', 'options\_value'\)

    Description: Specifies an LSN range or an Xlog file for decoding when no DDL is available.

    The constraints are as follows:

    1.  When the API is called, only when  **wal\_level**  is set to  **logical**, the generated log files can be parsed. If the used Xlog file is not of the logical level, the decoded content does not have the corresponding value and type, and there is no other impact.
    2.  The Xlog file can be parsed only by a copy of a fully homogeneous DN to ensure that the metadata corresponding to the data can be found and no DDL or VACUUM FULL operation is performed.
    3.  You can find the XLog to be parsed.
    4.  Do not read too many Xlog files at a time. You are advised to read one Xlog file at a time. It is estimated that the memory occupied by one Xlog file is two to three times the size of the Xlog file.
    5.  The Xlog file before scale-out cannot be decoded.

    Parameter description:

    -   LSN\_start

        Specifies the LSN at the start of decoding.

        Value range: a string, in the format of  *xlogid*/*xrecoff*, for example, 1/2AAFC60 \(If this parameter is set to  **NULL**, the target LSN indicating the end position of decoding is not specified.\)

    -   LSN\_end

        Specifies the LSN at the end of decoding.

        Value range: a string, in the format of  *xlogid*/*xrecoff*, for example, 1/2AAFC60 \(If this parameter is set to  **NULL**, the target LSN indicating the end position of decoding is not specified.\)

    -   upto\_nchanges

        Indicates the number of decoded records \(including the  **begin**  and  **commit**  timestamps\). Assume that there are three transactions, which involve 3, 5, and 7 records, respectively. If  **upto\_nchanges**  is set to  **4**, 8 records of the first two transactions will be decoded. Specifically, decoding is stopped when the number of decoded records exceeds the value of  **upto\_nchanges**  after decoding in the first two transactions is finished.

        Value range: a non-negative integer

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >If any of the  **LSN**  and  **upto\_nchanges**  values are reached, decoding ends.

    -   decoding\_plugin

    Decoding plug-in, which is a .so plug-in that specifies the output format of the decoded content.

    Value range:  **mppdb\_decoding**  and  **sql\_decoding**.

    -   xlog\_path

    Decoding plug-in, which specifies the Xlog absolute path and file level of the decoding file.

    Value range:  **NULL**  or a character string of the absolute path of the Xlog file.

    -   **options**: This parameter is optional and consists of a series of  **options\_name**  and  **options\_value**. You can retain the default value. For details, see  **pg\_logical\_slot\_peek\_changes**.

    Example:

    ```
    openGauss=# SELECT pg_current_xlog_location();
     pg_current_xlog_location 
    --------------------------
     0/E62E238
    (1 row)
    
    openGauss=# create table t1 (a int primary key,b int,c int);
    NOTICE:  CREATE TABLE / PRIMARY KEY will create implicit index "t1_pkey" for table "t1"
    CREATE TABLE
    openGauss=# insert into t1 values(1,1,1);
    INSERT 0 1
    openGauss=# insert into t1 values(2,2,2);
    INSERT 0 1
    
    openGauss=# select data from pg_logical_get_area_changes('0/E62E238',NULL,NULL,'sql_decoding',NULL);
     location  |  xid  |                       data                        
    -----------+-------+---------------------------------------------------
     0/E62E8D0 | 27213 | COMMIT (at 2022-01-26 15:08:03.349057+08) 3020226
     0/E6325F0 | 27214 | COMMIT (at 2022-01-26 15:08:07.309869+08) 3020234
    ......
    ```

-   pg\_get\_replication\_slots\(\)

    Description: Obtains the replication slot list.

    Return type: text, text, text, oid, boolean, xid, xid, text, boolean

    Example:

    ```
    openGauss=# select * from pg_get_replication_slots();
     slot_name |     plugin     | slot_type | datoid | active | xmin | catalog_xmin | restart_lsn | dummy_standby
    -----------+----------------+-----------+--------+--------+------+--------------+-------------+---------------
     wkl001    | mppdb_decoding | logical   |  15914 | f      |      |      2079556 | 4/1B81D920  | f
     dn_6002   |                | physical  |      0 | t      |      |              | 8/7CB63BD8  | f
     dn_6004   |                | physical  |      0 | t      |      |              | 8/7CB63BD8  | f
     dn_6003   |                | physical  |      0 | t      |      |              | 8/7CB63BD8  | f
     gfslot001 | mppdb_decoding | logical   |  15914 | f      |      |      2412553 | 4/A54B2428  | f
    (5 rows)
    ```

-   gs\_get\_parallel\_decode\_status\(\)

    Description: Monitors the length of the read log queue and decoding result queue of each decoding thread to locate the concurrent decoding performance bottleneck.

    Return type: text, int, text, text

    Example:

    ```
    openGauss=# select * from gs_get_parallel_decode_status();
     slot_name | parallel_decode_num |                     read_change_queue_length                     |                    decode_change_queue_length
    -----------+---------------------+------------------------------------------------------------------+------------------------------------------------------------------
     slot1     |                   3 | queue0: 33, queue1: 36, queue2: 1017                             | queue0: 1011, queue1: 1008, queue2: 27
     slot2     |                   5 | queue0: 452, queue1: 1017, queue2: 233, queue3: 585, queue4: 183 | queue0: 754, queue1: 188, queue2: 972, queue3: 620, queue4: 1022
    (2 rows)
    ```

    Note: In the returned value,  **slot\_name**  indicates the replication slot name,  **parallel\_decode\_num**  indicates the number of parallel decoding threads in the replication slot,  **read\_change\_queue\_length**  indicates the current length of the log queue read by each decoding thread, and  **decode\_change\_queue\_length**  indicates the current length of the decoding result queue of each decoding thread.

-   pg\_replication\_origin\_create \(node\_name\)

    Description: Creates a replication source with a given external name and returns the internal ID assigned to it.

    Note: The user who calls this function must have the  **SYSADMIN**  permission.

    Parameter description:

    -   node\_name

        Name of the replication source to be created.

        Value range: a string, supporting only letters, digits, and the following special characters: \_?-.

    Return type: oid

-   pg\_replication\_origin\_drop \(node\_name\)

    Description: Deletes a previously created replication source, including any associated replay progress.

    Note: The user who calls this function must have the  **SYSADMIN**  permission.

    Parameter description:

    -   node\_name

        Name of the replication source to be deleted.

        Value range: a string, supporting only letters, digits, and the following special characters: \_?-.


-   pg\_replication\_origin\_oid \(node\_name\)

    Description: Searches for a replication source by name and returns the internal ID. If no such replication source is found, an error is thrown.

    Note: The user who calls this function must have the  **SYSADMIN**  permission.

    Parameter description:

    -   node\_name

        Specifies the name of the replication source to be queried.

        Value range: a string, supporting only letters, digits, and the following special characters: \_?-.

    Return type: oid

-   pg\_replication\_origin\_session\_setup \(node\_name\)

    Description: Marks the current session for replaying from a given origin, allowing you to track replay progress. This parameter can be used only when no origin is selected. Run the  **pg\_replication\_origin\_session\_reset**  command to cancel the configuration.

    Note: The user who calls this function must have the  **SYSADMIN**  permission.

    Parameter description:

    -   node\_name

        Name of the replication source.

        Value range: a string, supporting only letters, digits, and the following special characters: \_?-.


-   pg\_replication\_origin\_session\_reset \(\)

    Description: Cancels the  **pg\_replication\_origin\_session\_setup\(\)**  effect.

    Note: The user who calls this function must have the  **SYSADMIN**  permission.

-   pg\_replication\_origin\_session\_is\_setup \(\)

    Description: Returns a true value if a replication source is selected in the current session.

    Note: The user who calls this function must have the  **SYSADMIN**  permission.

    Return type: Boolean

-   pg\_replication\_origin\_session\_progress \(flush\)

    Description: Returns the replay position of the replication source selected in the current session.

    Note: The user who calls this function must have the  **SYSADMIN**  permission.

    Parameter description:

    -   flush

        Determines whether the corresponding local transaction has been flushed to disk.

        Value range: Boolean

    Return type: LSN

-   pg\_replication\_origin\_xact\_setup \(origin\_lsn, origin\_timestamp\)

    Description: Marks the current transaction as recommitted at a given LSN and timestamp. This function can be called only when  **pg\_replication\_origin\_session\_setup**  is used to select a replication source.

    Note: The user who calls this function must have the  **SYSADMIN**  permission.

    Parameter description:

    -   origin\_lsn

        Position for replaying the replication source.

        Value range: LSN

    -   origin\_timestamp

        Time point when a transaction is committed

        Value range: timestamp with time zone


-   pg\_replication\_origin\_xact\_reset \(\)

    Description: Cancels the  **pg\_replication\_origin\_xact\_setup\(\)**  effect.

    Note: The user who calls this function must have the  **SYSADMIN**  permission.

-   pg\_replication\_origin\_advance \(node\_name, lsn\)

    Description:

    Sets the replication progress of a given node to a given position. This is primarily used to set the initial position, or to set a new position after a configuration change or similar change.

    Note: Improper use of this function may cause inconsistent replication data.

    Note: The user who calls this function must have the  **SYSADMIN**  permission.

    Parameter description:

    -   node\_name

        Name of an existing replication source.

        Value range: a string, supporting only letters, digits, and the following special characters: \_?-.

    -   lsn

        Position for replaying the replication source.

        Value range: LSN


-   pg\_replication\_origin\_progress \(node\_name, flush\)

    Description: Returns the position for replaying the given replication source.

    Note: The user who calls this function must have the  **SYSADMIN**  permission.

    Parameter description:

    -   node\_name

        Name of the replication source.

        Value range: a string, supporting only letters, digits, and the following special characters: \_?-.

    -   flush

        Determines whether the corresponding local transaction has been flushed to disk.

        Value range: Boolean


-   pg\_show\_replication\_origin\_status\(\)

    Description: Displays the replication status of the replication source.

    Note: The user who calls this function must have the  **SYSADMIN**  permission.

    Return type:

    -   **local\_id**: OID, which specifies the ID of the replication source.
    -   **external\_id**: text, which specifies the name of the replication source.
    -   **remote\_lsn**: LSN of the replication source.
    -   **local\_lsn**: local LSN.

-   pg\_get\_publication\_tables\(pub\_name\)

    Description: Returns the relid list of tables to be published based on the publication name.

    Parameter description:

    -   pub\_name

        Existing publication name.

        Value range: a string, supporting only letters, digits, and the following special characters: \_?-.

    Return type: relid list

-   pg\_stat\_get\_subscription\(sub\_oid oid\) → record

    Description:

    Rerurns the subscription status information after a subscription OID is entered.

    Parameter description:

-   subid

    Subscription OID.

    Value range: oid

    Return type:

    -   **relid**: OID of the table.
    -   **pid**: thread\_id, which indicates the thread ID of the background apply/sync thread.
    -   **received\_lsn**: pg\_lsn, which indicates the latest LSN received from the publication side.
    -   **last\_msg\_send\_time**: timestamp, which indicates the time when the last message is sent from the publication side.
    -   **last\_msg\_receipt\_time**: timestamp, which indicates the time when the last message is received by the subscription side.
    -   **latest\_end\_lsn**: pg\_lsn, which indicates the LSN of the publication side when the last keepalive message is received.
    -   **latest\_end\_time**: timstamp, which indicates the time when the last keepalive message is received.
