# Primary Server<a name="EN-US_TOPIC_0289900361"></a>

## synchronous\_standby\_names<a name="en-us_topic_0283137370_en-us_topic_0237124713_en-us_topic_0059777578_sed4ef11504b74982b8b64ce158bf0f0e"></a>

**Parameter description**: Specifies a comma-separated list of names of potential standby servers that support synchronous replication.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   The current synchronous standby server is on the top of the list. If the current synchronous standby server is disconnected, it will be replaced immediately with the next-highest-priority standby server. Name of the next-highest-priority standby server is added to the list.
>-   The standby server name can be specified by setting the environment variable  **PGAPPNAME**.

**Value range**: a string. If this parameter is set to  **\***, the name of any standby server that provides synchronous replication is matched.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>**ANY N \(node1,node2, ...\)**  indicates that any N host names in the brackets are selected as the name list of standby nodes for synchronous replication. For example,  **ANY 1\(node1,node2\)**  indicates that either node1 or node2 is used as the name of the standby node for synchronous replication.

**Default value**:  **\***

## most\_available\_sync<a name="en-us_topic_0283137370_en-us_topic_0237124713_en-us_topic_0059777578_se53a9bce83414d17b84a9beb44dd0dda"></a>

**Parameter description**: Specifies whether to block the primary server when the primary-standby synchronization fails.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the primary server is not blocked when the synchronization fails.
-   **off**  indicates that the primary server is blocked when the synchronization fails.

**Default value**:  **off**

## enable\_stream\_replication<a name="en-us_topic_0283137370_en-us_topic_0237124713_en-us_topic_0059777578_s13e647ddc37142dfa8ed01044f51030b"></a>

**Parameter description**: Specifies whether data and logs are synchronized between primary and standby servers, and between primary and secondary servers.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   This parameter is used for performance testing in scenarios where data synchronization to standby server is enabled and where it is disabled. If this parameter is set to  **off**, tests on abnormal scenarios, such as switchover and faults, cannot be performed to prevent inconsistency between the primary, standby, and secondary servers.
>-   This parameter is a restricted parameter, and you are advised not to set it to  **off**  in normal service scenarios.

**Value range**: Boolean

-   **on**  indicates that data and log synchronization is enabled.
-   **off**  indicates that data and log synchronization is disabled.

**Default value**:  **on**

## enable\_mix\_replication<a name="en-us_topic_0283137370_en-us_topic_0237124713_section1037113185420"></a>

**Parameter description**: Specifies how WAL files and data are replicated between primary and standby servers, and between primary and secondary servers.

This parameter is an INTERNAL parameter. Its default value is  **off**  and cannot be modified.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>This parameter cannot be modified in normal service scenarios. That is, the WAL file and data page mixed replication mode is disabled.

**Value range**: Boolean

-   **on**  indicates that the WAL file and data page mixed replication mode is enabled.
-   **off**  indicates that the WAL file and data page mixed replication mode is disabled.

**Default value**:  **off**

## vacuum\_defer\_cleanup\_age<a name="en-us_topic_0283137370_en-us_topic_0237124713_en-us_topic_0059777578_sc622a7b295d1479dbc80f95d50aff8de"></a>

**Parameter description**: Specifies the number of transactions by which  **VACUUM**  will defer the cleanup of invalid row-store table records, so that  **VACUUM**  and  **VACUUM FULL**  do not clean up deleted tuples immediately.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 1000000.  **0**  means no delay.

**Default value**:  **0**

## data\_replicate\_buffer\_size<a name="en-us_topic_0283137370_en-us_topic_0237124713_en-us_topic_0059777578_sc3dd3b16705f4fbfb54c665ce00ef966"></a>

**Parameter description**: Specifies the amount of memory used by queues when the sender sends data pages to the receiver. The value of this parameter affects the buffer size used during the replication from the primary server to the standby server.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 4096 to 1072693248. The unit is KB.

**Default value**:  **16MB**  \(16384 KB\)

## walsender\_max\_send\_size<a name="en-us_topic_0283137370_en-us_topic_0237124713_en-us_topic_0059777578_sbef7a545706e4995b7028b980cdcb35a"></a>

**Parameter description**: Specifies the size of the WAL or Sender buffers on the primary server.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 8 to  _INT\_MAX_. The unit is KB.

**Default value**:  **8MB**  \(8192 KB\)

## enable\_data\_replicate<a name="en-us_topic_0283137370_en-us_topic_0237124713_en-us_topic_0059777578_sa5d3c2e3d3954dd9a4b9c84024c7b63c"></a>

**Parameter description**: Specifies how data is synchronized between primary and standby servers when the data is imported to a row-store table.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the primary and standby servers synchronize data using data pages when the data is imported to a row-store table. When  **replication\_type**  is set to  **1**, this parameter cannot be set to  **on**. If this parameter is set to  **on**  using the GUC tool, its value will be forcibly changed to  **off**.
-   **off**  indicates that the primary and standby servers synchronize data using Xlogs when the data is imported to a row-store table.

**Default value**:  **off**

## ha\_module\_debug<a name="en-us_topic_0283137370_en-us_topic_0237124713_section143006151135"></a>

**Parameter description**: Specifies the replication status log of a specific data block during data replication.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the status of each data block is recorded in logs during data replication.
-   **off**  indicates that the status of each data block is not recorded in logs during data replication.

**Default value**:  **off**

## enable\_incremental\_catchup<a name="en-us_topic_0283137370_en-us_topic_0237124713_section710318493419"></a>

**Parameter description**: Specifies the data catchup mode between the primary and standby servers.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the standby server uses the incremental catchup mode. That is, the standby server scans local data files on the standby server to obtain the list of differential data files between the primary and standby servers and then performs catchup between the primary and standby servers.
-   **off**  indicates that the standby server uses the full catchup mode. That is, the standby server scans all local data files on the primary server to obtain the list of differential data files between the primary and standby servers and performs catchup between the primary and standby servers.

**Default value**:  **on**

## wait\_dummy\_time<a name="en-us_topic_0283137370_en-us_topic_0237124713_section761015504410"></a>

**Parameter description**: Specifies the maximum duration for the primary server to wait for the standby and secondary servers to start and send the scanning lists when incremental data catchup is enabled in openGauss.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to  _INT\_MAX_. The unit is second.

**Default value**:  **300**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The unit can only be second.

## catchup2normal\_wait\_time<a name="en-us_topic_0283137370_section756984271613"></a>

**Parameter description**: Specifies the maximum duration that the primary server is blocked during the data catchup on the standby server in the case of a single synchronous standby server.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from –1 to 10000. The unit is ms.

-   The value  **–1**  indicates that the primary server is blocked until the data catchup on the standby server is complete.
-   The value  **0**  indicates that the primary server is not blocked during the data catchup on the standby server.
-   Other values indicate the maximum duration that the primary server is blocked during the data catchup on the standby server. For example, if this parameter is set to  **5000**, the primary server is blocked until the data catchup on the standby server is complete in 5s.

**Default value**:  **–1**

