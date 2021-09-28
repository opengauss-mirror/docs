# Logical Replication Functions<a name="EN-US_TOPIC_0289900082"></a>

-   pg\_create\_logical\_replication\_slot\('slot\_name', 'plugin\_name'\)

    Description: Creates a logical replication slot.

    Parameter description:

    -   slot\_name

        Indicates the name of the streaming replication slot.

        Value range: a string, supporting only letters, digits, and the following special characters: \_?-.

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

        Value range: a string, supporting only letters, digits, and the following special characters: \_?-.

    -   isDummyStandby

        Specifies whether the replication slot is created by connecting the secondary server to the primary server.

        Type: bool

    Return type: name, text

    Note: A user with the  **SYSADMIN**  or  **REPLICATION**  permission or a user who inherits the  **gs\_role\_replication**  permission of the built-in role can invoke this function.

-   pg\_drop\_replication\_slot\('slot\_name'\)

    Description: Deletes a streaming replication slot.

    Parameter description:

    -   slot\_name

        Indicates the name of the streaming replication slot.

        Value range: a string, supporting only letters, digits, and the following special characters: \_?-.

    Return type: void

    Note: A user with the  **SYSADMIN**  or  **REPLICATION**  permission or a user who inherits the  **gs\_role\_replication**  permission of the built-in role can invoke this function. Currently, this function can be invoked only on the host.

-   <a name="en-us_topic_0283137128_en-us_topic_0237121996_li11712645125"></a>pg\_logical\_slot\_peek\_changes\('slot\_name', 'LSN', upto\_nchanges, 'options\_name', 'options\_value'\)

    Description: Performs decoding but does not go to the next streaming replication slot. \(The decoding result will be returned again on future calls.\)

    Parameter description:

    -   slot\_name

        Indicates the name of the streaming replication slot.

        Value range: a string, supporting only letters, digits, and the following special characters: \_?-.

    -   LSN

        Indicates a target LSN. Decoding is performed only when an LSN is less than or equal to this value.

        Value range: a string, in the format of  _xlogid_/_xrecoff_, for example, 1/2AAFC60 \(If this parameter is set to  **NULL**, the target LSN indicating the end position of decoding is not specified.\)

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


    Return type: text, xid, text

    Note: The function returns the decoding result. Each decoding result contains three columns, corresponding to the above return types and indicating the LSN position, XID, and decoded content, respectively.

    Users who invoke this function must have the  **SYSADMIN**  permission, the  **REPLICATION**  permission, or inherit the  **gs\_role\_replication**  permission of the built-in role.

-   pg\_logical\_slot\_get\_changes\('slot\_name', 'LSN', upto\_nchanges, 'options\_name', 'options\_value'\)

    Description: Performs decoding and goes to the next streaming replication slot.

    Parameter: This function has the same parameters as  **pg\_logical\_slot\_peek\_changes**. For details, see  [pg\_logical\_slot\_peek\_ch...](#en-us_topic_0283137128_en-us_topic_0237121996_li11712645125).

    Note: A user with the  **SYSADMIN**  or  **REPLICATION**  permission or a user who inherits the  **gs\_role\_replication**  permission of the built-in role can invoke this function. Currently, this function can be invoked only on the host.

-   <a name="li15187162457"></a>pg\_logical\_slot\_peek\_binary\_changes\('slot\_name', 'LSN', upto\_nchanges, 'options\_name', 'options\_value'\)

    Description: Performs decoding in binary mode and does not go to the next streaming replication slot. \(The decoded data can be obtained again during the next decoding.\)

    Parameter description:

    -   slot\_name

        Indicates the name of the streaming replication slot.

        Value range: a string, supporting only letters, digits, and the following special characters: \_?-.

    -   LSN

        Indicates a target LSN. Decoding is performed only when an LSN is less than or equal to this value.

        Value range: a string, in the format of  _xlogid_/_xrecoff_, for example, 1/2AAFC60 \(If this parameter is set to  **NULL**, the target LSN indicating the end position of decoding is not specified.\)

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


    Return type: text, xid, bytea

    Note: The function returns the decoding result. Each decoding result contains three columns, corresponding to the above return types and indicating the LSN position, XID, and decoded content in binary format, respectively. Users who invoke this function must have the  **SYSADMIN**  permission, the  **REPLICATION**  permission, or inherit the  **gs\_role\_replication**  permission of the built-in role.

-   pg\_logical\_slot\_get\_binary\_changes\('slot\_name', 'LSN', upto\_nchanges, 'options\_name', 'options\_value'\)

    Description: Performs decoding in binary mode and does not go to the next streaming replication slot.

    Parameter: This function has the same parameters as  **pg\_logical\_slot\_peek\_binary\_changes**. For details, see  [•pg\_logical\_slot\_peek\_bi...](#li15187162457)

    Note: A user with the  **SYSADMIN**  or  **REPLICATION**  permission or a user who inherits the  **gs\_role\_replication**  permission of the built-in role can invoke this function.

-   pg\_replication\_slot\_advance \('slot\_name', 'LSN'\)

    Description: Directly goes to the streaming replication slot for a specified LSN, without outputting any decoding result.

    Parameter description:

    -   slot\_name

        Indicates the name of the streaming replication slot.

        Value range: a string, supporting only letters, digits, and the following special characters: \_?-.

    -   LSN

        Indicates a target LSN. Next decoding will be performed only in transactions whose commission position is greater than this value. If an input LSN is smaller than the position recorded in the current streaming replication slot, the function directly returns. If the input LSN is greater than the LSN of the current physical log, the latter LSN will be directly used for decoding.

        Value range: a string, in the format of  _xlogid_/_xrecoff_

    Return type: name, text

    Note: A return result contains the slot name and LSN that is actually used for decoding. Users who invoke this function must have the  **SYSADMIN**  permission, the  **REPLICATION**  permission, or inherit the  **gs\_role\_replication**  permission of the built-in role. Currently, this function can be invoked only on the host.

-   pg\_get\_replication\_slots

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


