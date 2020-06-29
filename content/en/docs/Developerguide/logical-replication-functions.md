# Logical Replication Functions<a name="EN-US_TOPIC_0242370460"></a>

-   pg\_create\_logical\_replication\_slot\('slot\_name', 'plugin\_name'\)

    Description: Creates a logical replication slot.

    Parameter description:

    -   slot\_name

        Indicates the name of the streaming replication slot.

        Value range: a string, supporting only letters, digits, and the following special characters: \_?-.

    -   plugin\_name

        Indicates the name of the plugin.

        Value range: a string, supporting only  **gaussdb\_decoding**

    Return type: name, text

    Note: The first return value is the slot name, and the second is the start LSN position for decoding in the logical replication slot.

-   pg\_drop\_replication\_slot\('slot\_name'\)

    Description: Deletes a streaming replication slot.

    Parameter description:

    -   slot\_name

        Indicates the name of the streaming replication slot.

        Value range: a string, supporting only letters, digits, and the following special characters: \_?-.

    Return type: void

-   <a name="en-us_topic_0237121996_li11712645125"></a>pg\_logical\_slot\_peek\_changes\('slot\_name', 'LSN', upto\_nchanges, 'options\_name', 'options\_value'\)

    Description: Performs decoding but does not go to the next streaming replication slot. \(The decoding result will be returned again on future calls.\)

    Parameter description:

    -   slot\_name

        Indicates the name of the streaming replication slot.

        Value range: a string, supporting only letters, digits, and the following special characters: \_?-.

    -   LSN

        Indicates a target LSN. Decoding is performed only when an LSN is less than or equal to this value.

        Value range: a string, in the format of xlogid/xrecoff, for example, '1/2AAFC60' \(If this parameter is set to  **NULL**, the target LSN indicating the end position of decoding is not specified.\)

    -   upto\_nchanges

        Indicates the number of decoded records \(including the  **begin**  and  **commit**  timestamps\). Assume that there are three transactions, which involve 3, 5, and 7 records, respectively. If  **upto\_nchanges**  is  **4**, 8 records of the first two transactions will be decoded. Specifically, decoding is stopped when the number of decoded records exceeds 4 after decoding in the first two transactions is finished.

        Value range: a non-negative integer

        >![](public_sys-resources/icon-note.gif) **NOTE:**   
        >If any of the  **LSN**  and  **upto\_nchanges**  values are reached, decoding ends.  

    -   options \(optional\)
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

            Indicates whether decoding information contains the  **commit**  timestamp.

            Valid value:  **0**  and  **1**. The default value is  **0**.

            -   **0**: The decoding information does not contain the  **commit**  timestamp.
            -   **1**: The decoding information contains the  **commit**  timestamp.


    Return type: text, uint, text

    Note: The function returns the decoding result. Each decoding result contains three columns, corresponding to the above return types and indicating the LSN position, XID, and decoded content, respectively.

-   pg\_logical\_slot\_get\_changes\('slot\_name', 'LSN', upto\_nchanges, 'options\_name', 'options\_value'\)

    Description: Performs decoding and goes to the next streaming replication slot.

    Parameter: This function has the same parameters as  **pg\_logical\_slot\_peek\_changes**. For details, see  [pg\_logical\_slot\_peek\_ch...](#en-us_topic_0237121996_li11712645125).

-   pg\_replication\_slot\_advance \('slot\_name', 'LSN'\)

    Description: Directly goes to the streaming replication slot for a specified LSN, without outputting any decoding result.

    Parameter description:

    -   slot\_name

        Indicates the name of the streaming replication slot.

        Value range: a string, supporting only letters, digits, and the following special characters: \_?-.

    -   LSN

        Indicates a target LSN. Next decoding will be performed only in transactions whose commission position is greater than this value. If an input LSN is smaller than the position recorded in the current streaming replication slot, the function directly returns. If the input LSN is greater than the LSN of the current physical log, the latter LSN will be directly used for decoding.

        Value range: a string, in the format of xlogid/xrecoff

    Return type: name, text

    Note: A return result contains the slot name and LSN that is actually used for decoding.


