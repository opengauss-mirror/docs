# Primary Server<a name="EN-US_TOPIC_0289900361"></a>

## synchronous\_standby\_names<a name="en-us_topic_0283137370_en-us_topic_0237124713_en-us_topic_0059777578_sed4ef11504b74982b8b64ce158bf0f0e"></a>

**Parameter description**: Specifies a comma-separated list of names of potential standby servers that support synchronous replication.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   The current synchronous standby server is on the top of the list. If the current synchronous standby server is disconnected, it will be replaced immediately with the next-highest-priority standby server. Name of the next-highest-priority standby server is added to the list.
>-   The standby server name can be specified by setting the environment variable  **PGAPPNAME**.

**Value range**: a string If this parameter is set to  **\***, the name of any standby server that provides synchronous replication is matched. The value can be configured in the following format:

-   ANY  _num\_sync_  \(_standby\_name_  \[, ...\]\)
-   \[FIRST\]  _num\_sync_  \(_standby\_name_  \[, ...\]\)
-   _standby\_name_  \[, ...\]

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   In the preceding command,  _num\_sync_  indicates the number of standby nodes that need to wait for responses from the transaction,  _standby\_name_  indicates the name of the standby node, and FIRST and ANY specify the policies for selecting standby nodes for synchronous replication from the listed servers.
    >-   **ANY N \(dn\_instanceId1, dn\_instanceId2,...\)**  indicates that any  _N_  host names in the brackets are selected as the name list of standby nodes for synchronous replication. For example,  **ANY 1\(dn\_instanceId1, dn\_instanceId2\)**  indicates that any one of  **dn\_instanceId1**  and  **dn\_instanceId2**  is used as the standby node for synchronous replication.
    >-   **FIRST N \(dn\_instanceId1, dn\_instanceId2, ...\)**  indicates that the first N primary node names in the brackets are selected as the standby node name list for synchronous replication based on the priority. For example,  **FIRST 1 \(dn\_instanceId1, dn\_instanceId2\)**  indicates that  **dn\_instanceId1**  is selected as the standby node for synchronous replication.
    >-   The meanings of dn\_instanceId1, dn\_instanceId2, ... are the same as those of FIRST 1 \(dn\_instanceId1, dn\_instanceId2, ...\).


If you use the  **gs\_guc**  tool to set this parameter, perform the following operations:

```
gs_guc reload -Z datanode -D @DN_PATH@ -c "synchronous_standby_names='ANY NODE 1(dn_instanceId1, dn_instanceId2)'";
```

or

```
gs_guc reload -Z datanode -D @DN_PATH@ -c "synchronous_standby_names='ANY 1(AZ1, AZ2)'";
```

**Default value**:  **\***

## most\_available\_sync<a name="en-us_topic_0283137370_en-us_topic_0237124713_en-us_topic_0059777578_se53a9bce83414d17b84a9beb44dd0dda"></a>

**Parameter description:**  Specifies whether transactions on the primary server are not blocked due to faults on the synchronous standby server. For example, if one of the two synchronous standby nodes is faulty and the other is normal, the primary node waits for the normal synchronous standby node instead of being blocked by the faulty synchronous standby node.

For another example, when the quorum protocol is executed, one primary node and three synchronous standby nodes are configured. ANY 2 \(node1, node2, and node3\) is configured. When node1 and node3 are faulty and node2 is normal, host services are not blocked.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the primary server is not blocked when all synchronous standby servers are faulty.
-   **off**  indicates that the primary server is blocked when all synchronous standby servers are faulty.

**Default value**:  **off**

## keep\_sync\_window<a name="section9965135135115"></a>

**Parameter description:**  Specifies whether to enable the maximum availability mode \(**most\_available\_sync**\). In primary/standby scenarios, if the synchronous standby server is faulty, the maximum protection mode is retained and the system delays entering the maximum availability mode within the  **keep\_sync\_window**  timeout window. If the fault of the synchronous standby server is rectified within the  **keep\_sync\_window**  timeout window, the synchronous standby server does not enter the maximum availability mode. If  **keep\_sync\_window**  is required, you are advised to set it to the minimum value 5 to avoid false reports.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to  _INT\_MAX_. The unit is second.

-   **0**  indicates that  **keep\_sync\_window**  is not set.
-   Other values indicate the size of the timeout window.

**Default value**:  **0**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>If the primary server is faulty within the configured timeout window, data generated from the time when the synchronous standby server is disconnected to the time when the primary server is faulty may be lost. That is, RPO <=  **keep\_sync\_window**.

## enable\_stream\_replication<a name="en-us_topic_0283137370_en-us_topic_0237124713_en-us_topic_0059777578_s13e647ddc37142dfa8ed01044f51030b"></a>

**Parameter description**: Specifies whether data and logs are synchronized between primary and standby servers, and between primary and secondary servers.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   This parameter is used for performance testing in scenarios where data synchronization to standby server is enabled and where it is disabled. If this parameter is set to  **off**, tests on abnormal scenarios, such as switchover and faults, cannot be performed to prevent inconsistency between the primary, standby, and secondary servers.
>-   This parameter is a restricted parameter, and you are advised not to set it to  **off**  in normal service scenarios.
>-   Currently, primary/standby/secondary deployment is not supported by default.

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

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 1000000.  **0**  means no delay.

**Default value**:  **0**

## data\_replicate\_buffer\_size<a name="en-us_topic_0283137370_en-us_topic_0237124713_en-us_topic_0059777578_sc3dd3b16705f4fbfb54c665ce00ef966"></a>

**Parameter description**: Specifies the amount of memory used by queues when the sender sends data pages to the receiver. The value of this parameter affects the buffer size used during the replication from the primary server to the standby server.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 4096 to 1072693248. The unit is kB.

**Default value**: 4 MB \(4096 kB\)

## walsender\_max\_send\_size<a name="en-us_topic_0283137370_en-us_topic_0237124713_en-us_topic_0059777578_sbef7a545706e4995b7028b980cdcb35a"></a>

**Parameter description**: Specifies the size of the WAL or Sender buffers on the primary server.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 8 to  _INT\_MAX_. The unit is kB.

**Default value**:  **8 MB**  \(8192 kB\)

## enable\_data\_replicate<a name="en-us_topic_0283137370_en-us_topic_0237124713_en-us_topic_0059777578_sa5d3c2e3d3954dd9a4b9c84024c7b63c"></a>

**Parameter description**: Specifies how data is synchronized between primary and standby servers when the data is imported to a row-store table.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the primary and standby servers synchronize data using data pages when the data is imported to a row-store table. When  **replication\_type**  is set to  **1**, this parameter cannot be set to  **on**. If this parameter is set to  **on**  using the GUC tool, its value will be forcibly changed to  **off**.
-   **off**  indicates that the primary and standby servers synchronize data using Xlogs when the data is imported to a row-store table.

**Default value**:  **on**

## ha\_module\_debug<a name="en-us_topic_0283137370_en-us_topic_0237124713_section143006151135"></a>

**Parameter description**: Specifies the replication status log of a specific data block during data replication.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the status of each data block is recorded in logs during data replication.
-   **off**  indicates that the status of each data block is not recorded in logs during data replication.

**Default value**:  **off**

## enable\_incremental\_catchup<a name="en-us_topic_0283137370_en-us_topic_0237124713_section710318493419"></a>

**Parameter description**: Specifies the data catchup mode between the primary and standby servers.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846). Currently, primary/standby/secondary deployment is not supported by default.

**Value range**: Boolean

-   **on**  indicates that the standby server uses the incremental catchup mode. That is, the standby server scans local data files on the standby server to obtain the list of differential data files between the primary and standby servers and then performs catchup between the primary and standby servers.
-   **off**  indicates that the standby server uses the full catchup mode. That is, the standby server scans all local data files on the primary server to obtain the list of differential data files between the primary and standby servers and then performs catchup between the primary and standby servers.

**Default value**:  **on**

## wait\_dummy\_time<a name="en-us_topic_0283137370_en-us_topic_0237124713_section761015504410"></a>

**Parameter description**: Specifies the maximum duration for the primary server to wait for the standby and secondary servers to start and send the scanning lists when incremental data catchup is enabled in openGauss.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to  _INT\_MAX_. The unit is second.

**Default value**:  **300**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The unit can only be second.
>Currently, primary/standby/secondary deployment is not supported by default.

## catchup2normal\_wait\_time<a name="en-us_topic_0283137370_section756984271613"></a>

**Parameter description**: Specifies the maximum duration for the standby server to catch up with the primary server when  **most\_available\_sync**  is enabled in primary/standby scenarios. The value of this parameter is an estimate and may be different from the actual value.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from –1 to 10000. The unit is ms.

-   The value  **–1**  indicates that the primary server is blocked until the data catchup on the standby server is complete.
-   The value  **0**  indicates that the primary server is not blocked during the data catchup on the standby server.
-   Other values indicate the maximum duration that the primary server is blocked during the data catchup on the standby server. For example, if this parameter is set to  **5000**, the primary server is blocked until the data catchup on the standby server is complete in 5s.

**Default value**:  **–1**

## sync\_config\_strategy<a name="section94339215542"></a>

**Parameter description:**  Specifies the policy for synchronizing configuration files between the primary server and standby server, and between the standby server and cascaded standby server.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: enumerated values

-   **all\_node**: If this parameter is set to  **all\_node**  for a primary node, the primary node is allowed to proactively synchronize configuration files to all standby nodes. If this parameter is set to  **all\_node**  for a standby server, the standby server is allowed to send synchronization requests to its primary server, and the standby server is allowed to proactively synchronize configuration files to all cascaded standby servers. If this parameter is set to  **all\_node**  for a cascaded standby server, the current cascaded standby server is allowed to send synchronization requests to its standby server.
-   **only\_sync\_node**: If this parameter is set to  **only\_sync\_node**  for a primary node, the primary node is only allowed to proactively synchronize configuration files to all standby nodes. If this parameter is set to  **only\_sync\_node**  for a standby server, the standby server is allowed to send synchronization requests to its primary server, and the standby server is not allowed to proactively synchronize configuration files to all cascaded standby servers. If this parameter is set to  **only\_sync\_node**  for a cascaded standby server, the current cascaded standby server is allowed to send synchronization requests to its standby server.
-   **none\_node**: If this parameter is set to  **none\_node**  for a primary node, the primary node is not allowed to proactively synchronize configuration files to all standby nodes. If this parameter is set to  **none\_node**  for a standby server, the standby server is not allowed to send synchronization requests to its primary server, and the standby server is allowed to proactively synchronize configuration files to all cascaded standby servers. If this parameter is set to  **none\_node**  for a cascaded standby server, the current cascaded standby server is not allowed to send synchronization requests to its standby server.

**Default value:** **all\_node**

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   In an openGauss database instance that contains a primary node, a standby node, and a cascaded standby node, the primary node is a sender relative to the standby node and the standby node is a receiver relative to the primary node, while the standby node is a sender relative to the cascaded standby node and the cascaded standby node is a receiver relative to the standby node.
>-   The sender actively synchronizes the configuration file to the receiver, and the receiver requests the sender to synchronize the configuration file, which are two independent events, so that the configuration files are synchronized. If you do not want to synchronize configuration files, set this parameter to  **none\_node**  on the receiver. If the sender is a standby node, set this parameter to  **none\_node**  only. If the sender is a primary node, set this parameter to  **none\_node**  when the primary node does not synchronize with any standby node; or set this parameter to  **only\_sync\_node**  when the primary node synchronizes with synchronous standby nodes only and does not synchronize with asynchronous standby nodes.
>-   To be specific, the sender sends a configuration file which directly overwrites the corresponding parameter in the configuration file of the receiver. After the policy for synchronizing configuration files is set, even if you modify configuration parameters of the receiver, the modification does not take effect because the sender immediately overwrites these parameters.
>-   The following configuration parameters are not synchronized even if the policy for synchronizing configuration files is set: application\_name, archive\_command, audit\_directory, available\_zone, comm\_control\_port, comm\_sctp\_port, listen\_addresses, log\_directory, port, replconninfo1, replconninfo2, replconninfo3, replconninfo4, replconninfo5, replconninfo6, replconninfo7, replconninfo8, replconninfo9, replconninfo10, replconninfo11, replconninfo12, replconninfo13, replconninfo14, replconninfo15, replconninfo16, replconninfo17, replconninfo18, ssl, ssl\_ca\_file, ssl\_cert\_file, ssl\_ciphers, ssl\_crl\_file, ssl\_key\_file, ssl\_renegotiation\_limit, ssl\_cert\_notify\_time, synchronous\_standby\_names, local\_bind\_address, perf\_directory, query\_log\_directory, asp\_log\_directory, streaming\_router\_port, enable\_upsert\_to\_merge, archive\_dest, recovery\_min\_apply\_delay, and sync\_config\_strategy.

