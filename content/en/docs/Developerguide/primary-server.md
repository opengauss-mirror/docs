# Primary Server<a name="EN-US_TOPIC_0289900361"></a>

## synchronous\_standby\_names<a name="en-us_topic_0283137370_en-us_topic_0237124713_en-us_topic_0059777578_sed4ef11504b74982b8b64ce158bf0f0e"></a>

**Parameter description**: Specifies a comma-separated list of names of potential standby nodes that support synchronous replication.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   The current synchronous standby node is on the top of the list. If the current synchronous standby node is disconnected, it will be replaced immediately with the next-highest-priority standby node. Name of the next-highest-priority standby node is added to the list.
>-   The standby node name can be specified by setting the environment variable  **PGAPPNAME**.

**Value range**: a string If this parameter is set to  **\***, the name of any standby node that provides synchronous replication is matched. The value can be configured in the following format:

-   ANY  *num\*sync_  \(*standby\*name_  \[, ...\]\) \[, ANY  *num\*sync_  \(*standby\*name_  \[, ...\]\)\]
-   \[FIRST\]  *num\*sync_  \(*standby\*name_  \[, ...\]\)
-   *standby\*name_  \[, ...\]

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   In the preceding command,  *num\*sync_  indicates the number of standby nodes that need to wait for responses from the transaction,  *standby\*name_  indicates the name of the standby node, and FIRST and ANY specify the policies for selecting standby nodes for synchronous replication from the listed servers.
    >-   **ANY N \(dn\_instanceId1, dn\_instanceId2,...\)**  indicates that any  *N_  host names in the brackets are selected as the name list of standby nodes for synchronous replication. For example,  **ANY 1\(dn\*instanceId1, dn\_instanceId2\)**  indicates that any one of  **dn\_instanceId1**  and  **dn\_instanceId2**  is used as the standby node for synchronous replication.
    >-   **FIRST N \(dn\_instanceId1, dn\_instanceId2, ...\)**  indicates that the first N primary node names in the brackets are selected as the standby node name list for synchronous replication based on the priority. For example,  **FIRST 1 \(dn\_instanceId1, dn\_instanceId2\)**  indicates that  **dn\_instanceId1**  is selected as the standby node for synchronous replication.
    >-   The meanings of dn\_instanceId1, dn\_instanceId2, ... are the same as those of FIRST 1 \(dn\_instanceId1, dn\_instanceId2, ...\).


If you use the gs\_guc tool to set this parameter, perform the following operations:

```
gs_guc reload -Z datanode -N @NODE_NAME@ -D @DN_PATH@ -c "synchronous_standby_names='ANY NODE 1(dn_instanceId1, dn_instanceId2)'";
```

or

```
gs_guc reload -Z datanode -N @NODE_NAME@ -D @DN_PATH@ -c "synchronous_standby_names='ANY 1(AZ1, AZ2)'";
```

**Default value**:  **\***

## most\_available\_sync<a name="en-us_topic_0283137370_en-us_topic_0237124713_en-us_topic_0059777578_se53a9bce83414d17b84a9beb44dd0dda"></a>

**Parameter description:**  Specifies whether transactions on the primary node are not blocked due to faults on synchronous standby nodes. For example, if one of the two synchronous standby nodes is faulty and the other is normal, the primary node waits for the normal synchronous standby node instead of being blocked by the faulty synchronous standby node.

For another example, when the quorum protocol is executed, one primary node and three synchronous standby nodes are configured. ANY 2 \(node1, node2, and node3\) is configured. When node1 and node3 are faulty and node2 is normal, host services are not blocked.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the primary node is not blocked when all synchronous standby nodes are faulty.
-   **off**  indicates that the primary node is blocked when all synchronous standby nodes are faulty.

**Default value**:  **off**

## keep\_sync\_window<a name="section9965135135115"></a>

**Parameter description**: Specifies the delay for entering the maximum availability mode.

-   If  **most\_available\_sync**  is set to  **on**, when synchronous standby nodes are faulty in primary/standby scenarios and the number of configured synchronous standby nodes is insufficient \(for details, see the meaning of  **synchonous\_standby\_name**\), setting  **keep\_sync\_window**  will retain the maximum protection mode within the time window specified by  **keep\_sync\_window**. That is, committing transactions on the primary node is blocked, delay the primary node to enter the maximum availability mode.
-   If synchronous standby nodes recover from faults and the number of synchronous standby nodes meets the configuration requirements, transactions are not blocked.
-   You are advised to set  **keep\_sync\_window**  to 5s. This prevents the monitoring system from incorrectly reporting network instability.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to  *INT\*MAX_. The unit is second.

-   The value  **0**  indicates that the  **keep\_sync\_window**  is not set, that is, the maximum availability mode is entered directly.
-   Other values indicate the size of the timeout window.

**Default value**:  **0**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Setting this parameter may affect the RPO. If the primary node is faulty within the configured timeout window, the data generated from the time when the primary node is blocked to the time when the primary node is faulty may be lost.

## enable\_stream\_replication<a name="en-us_topic_0283137370_en-us_topic_0237124713_en-us_topic_0059777578_s13e647ddc37142dfa8ed01044f51030b"></a>

**Parameter description**: Specifies whether data and logs are synchronized between primary and standby nodes, and between primary and secondary nodes.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   This parameter is used for performance testing in scenarios where data synchronization to standby nodes is enabled and where it is disabled. If this parameter is set to  **off**, tests on abnormal scenarios, such as switchover and faults, cannot be performed to prevent inconsistency between the primary, standby, and secondary servers.
>-   This parameter is a restricted parameter, and you are advised not to set it to  **off**  in normal service scenarios.
>-   Currently, primary/standby/secondary deployment is not supported by default.

**Value range**: Boolean

-   **on**  indicates that data and log synchronization is enabled.
-   **off**  indicates that data and log synchronization is disabled.

**Default value**:  **on**

## enable\_mix\_replication<a name="en-us_topic_0283137370_en-us_topic_0237124713_section1037113185420"></a>

**Parameter description**: Specifies how WAL files and data are replicated between primary and standby nodes, and between primary and secondary nodes.

This parameter is an INTERNAL parameter. Its default value is  **off**  and cannot be modified.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   This parameter cannot be modified in normal service scenarios. That is, mixed replication of the WAL files and data pages is disabled.
>-   Currently, primary/standby/secondary deployment is not supported by default.

**Value range**: Boolean

-   **on**  indicates that the WAL file and data page mixed replication mode is enabled.
-   **off**  indicates that the WAL file and data page mixed replication mode is disabled.

**Default value**:  **off**

## vacuum\_defer\_cleanup\_age<a name="en-us_topic_0283137370_en-us_topic_0237124713_en-us_topic_0059777578_sc622a7b295d1479dbc80f95d50aff8de"></a>

**Parameter description**: Specifies the number of transactions by which  **VACUUM**  will defer the cleanup of invalid row-store table records, so that  **VACUUM**  and  **VACUUM FULL**  do not clean up deleted tuples immediately.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 1000000.  **0**  means no delay.

**Default value**:  **0**

## data\_replicate\_buffer\_size<a name="en-us_topic_0283137370_en-us_topic_0237124713_en-us_topic_0059777578_sc3dd3b16705f4fbfb54c665ce00ef966"></a>

**Parameter description**: Specifies the amount of memory used by queues when the sender sends data pages to the receiver. The value of this parameter affects the buffer size used during the replication from the primary node to the standby node.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 4096 to 1072693248. The unit is KB.

**Default value:**  16 MB \(that is, 16384 KB\)

## walsender\_max\_send\_size<a name="en-us_topic_0283137370_en-us_topic_0237124713_en-us_topic_0059777578_sbef7a545706e4995b7028b980cdcb35a"></a>

**Parameter description**: Specifies the size of the WAL or Sender buffers on the primary node.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 8 to  *INT\*MAX_. The unit is KB.

**Default value**:  **8 MB**  \(8192 KB\)

## enable\_data\_replicate<a name="en-us_topic_0283137370_en-us_topic_0237124713_en-us_topic_0059777578_sa5d3c2e3d3954dd9a4b9c84024c7b63c"></a>

**Parameter description**: Specifies how data is synchronized between primary and standby nodes when the data is imported to a row-store table.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the primary and standby nodes synchronize data using data pages when the data is imported to a row-store table. When  **replication\_type**  is set to  **1**, this parameter cannot be set to  **on**. If this parameter is set to  **on**  using the GUC tool, its value will be forcibly changed to  **off**.
-   **off**  indicates that the primary and standby nodes synchronize data using Xlogs when the data is imported to a row-store table.

**Default value**:  **on**

## ha\_module\_debug<a name="en-us_topic_0283137370_en-us_topic_0237124713_section143006151135"></a>

**Parameter description**: Specifies the replication status log of a specific data block during data replication.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the status of each data block is recorded in logs during data replication.
-   **off**  indicates that the status of each data block is not recorded in logs during data replication.

**Default value**:  **off**

## enable\_incremental\_catchup<a name="en-us_topic_0283137370_en-us_topic_0237124713_section710318493419"></a>

**Parameter description**: Specifies the data catchup mode between the primary and standby nodes. Currently, primary/standby/secondary deployment is not supported by default.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the standby node uses the incremental catchup mode. That is, the standby node scans local data files on the standby node to obtain the list of differential data files between the primary and standby nodes and then performs catchup between the primary and standby nodes.
-   **off**  indicates that the standby node uses the full catchup mode. That is, the standby node scans all local data files on the primary node to obtain the list of differential data files between the primary and standby nodes and then performs catchup between the primary and standby nodes.

**Default value**:  **on**

## wait\_dummy\_time<a name="en-us_topic_0283137370_en-us_topic_0237124713_section761015504410"></a>

**Parameter description**: Specifies the maximum duration for the primary node to wait for the standby and secondary nodes to start and send the scanning lists when incremental data catchup is enabled in openGauss.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to  *INT\*MAX_. The unit is second.

**Default value**:  **300**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   The unit can only be second.
>-   Currently, primary/standby/secondary deployment is not supported by default.

## catchup2normal\_wait\_time<a name="en-us_topic_0283137370_section756984271613"></a>

**Parameter description**: Specifies the maximum duration for the standby node to catch up with the primary node when  **most\_available\_sync**  is enabled in primary/standby scenarios. The value of this parameter is an estimate and may be different from the actual value.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from –1 to 10000. The unit is ms.

-   The value  **–1**  indicates that the primary node is blocked until the data catchup on the standby node is complete.
-   The value  **0**  indicates that the primary node is not blocked during the data catchup on the standby node.
-   Other values indicate the maximum duration that the primary node is blocked during the data catchup on the standby node. For example, if this parameter is set to  **5000**, the primary node is blocked until the data catchup on the standby node is complete in 5s.

**Default value**:  **–1**

## sync\_config\_strategy<a name="section94339215542"></a>

**Parameter description:**  Specifies the policy for synchronizing configuration files between the primary node and standby node, and between the standby node and cascaded standby node.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: enumerated values

-   **all\_node**: If this parameter is set to  **all\_node**  for the primary node, the primary node is allowed to proactively synchronize configuration files to all standby nodes. If this parameter is set to  **all\_node**  for a standby node, the standby node is allowed to send synchronization requests to its primary node, and the standby node is allowed to proactively synchronize configuration files to all cascaded standby nodes. If this parameter is set to  **all\_node**  for a cascaded standby node, the current cascaded standby node is allowed to send synchronization requests to its standby node.
-   **only\_sync\_node**: If this parameter is set to  **only\_sync\_node**  for the primary node, the primary node is only allowed to proactively synchronize configuration files to all standby nodes. If this parameter is set to  **only\_sync\_node**  for a standby node, the standby node is allowed to send synchronization requests to its primary node, and the standby node is not allowed to proactively synchronize configuration files to all cascaded standby nodes. If this parameter is set to  **only\_sync\_node**  for a cascaded standby node, the current cascaded standby node is allowed to send synchronization requests to its standby node.
-   **none\_node**: If this parameter is set to  **none\_node**  for the primary node, the primary node is not allowed to proactively synchronize configuration files to all standby nodes. If this parameter is set to  **none\_node**  for a standby node, the standby node is not allowed to send synchronization requests to its primary node, and the standby node is allowed to proactively synchronize configuration files to all cascaded standby nodes. If this parameter is set to  **none\_node**  for a cascaded standby node, the current cascaded standby node is not allowed to send synchronization requests to its standby node.

**Default value:** **all\_node**

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   In an openGauss database instance that contains a primary node, a standby node, and a cascaded standby node, the primary node is a sender relative to the standby node and the standby node is a receiver relative to the primary node, while the standby node is a sender relative to the cascaded standby node and the cascaded standby node is a receiver relative to the standby node.
>-   The sender actively synchronizes the configuration file to the receiver, and the receiver requests the sender to synchronize the configuration file, which are two independent events, so that the configuration files are synchronized. If you do not want to synchronize configuration files, set this parameter to  **none\_node**  on the receiver. If the sender is a standby node, set this parameter to  **none\_node**  only. If the sender is a primary node, set this parameter to  **none\_node**  when the primary node does not synchronize with any standby node; or set this parameter to  **only\_sync\_node**  when the primary node synchronizes with synchronous standby nodes only and does not synchronize with asynchronous standby nodes.
>-   To be specific, the sender sends a configuration file which directly overwrites the corresponding parameter in the configuration file of the receiver. After the policy for synchronizing configuration files is set, even if you modify configuration parameters of the receiver, the modification does not take effect because the sender immediately overwrites these parameters.
>-   The following configuration parameters are not synchronized even if the policy for synchronizing configuration files is set: application\_name, archive\_command, audit\_directory, available\_zone, comm\_control\_port, comm\_sctp\_port, listen\_addresses, log\_directory, port, replconninfo1, replconninfo2, replconninfo3, replconninfo4, replconninfo5, replconninfo6, replconninfo7, replconninfo8, replconninfo9, replconninfo10, replconninfo11, replconninfo12, replconninfo13, replconninfo14, replconninfo15, replconninfo16, replconninfo17, replconninfo18, ssl, ssl\_ca\_file, ssl\_cert\_file, ssl\_ciphers, ssl\_crl\_file, ssl\_key\_file, ssl\_renegotiation\_limit, ssl\_cert\_notify\_time, synchronous\_standby\_names, local\_bind\_address, perf\_directory, query\_log\_directory, asp\_log\_directory, streaming\_router\_port, enable\_upsert\_to\_merge, archive\_dest, recovery\_min\_apply\_delay, and sync\_config\_strategy.


## enable_save_confirmed_lsn<a name="section94339215542"></a>

**Parameter description:** If this parameter is enabled, the primary node flushes the location that has achieved majority consistency with the current synchronous standby node during each transaction to a disk. When the primary node is faulty and the original primary node functions as the standby node to initiate a build request, the system checks whether the same confirmed LSN exists on the source node (new primary node). If it does not exist, the build fails to prevent the data of the original primary node from being overwritten by the build.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** Boolean

-   **on**: indicates that this function is enabled. In the scenario where one primary node and multiple standby nodes are configured and a synchronous standby node is configured, each time the primary node performs a data change transaction operation (DML/DDL), and the primary node waits to reach a majority consistency location with the synchronous standby node, flushes the location that has achieved majority consistency with the current synchronous standby to disk. The persistent file corresponds to the status file of the replication slot of the synchronous standby node. If this parameter is enabled, both automatic build and incremental build in unspecified schema are affected. When the primary node is faulty and the original primary node functions as the standby node, the system checks whether the same confirmed LSN exists on the source node (new primary node). If it does not exist, the build fails to prevent the data of the original primary node from being overwritten by the build.
-   **off**: indicates that this function is disabled. The behavior of the primary node remains unchanged when a transaction is committed. The behavior of automatic build and incremental build remains unchanged. In the scenario where one primary node and multiple standby nodes are configured and asynchronous standby nodes are configured, if the primary node suddenly breaks down and the majority consistency location (such as LSN100) of the primary node is not synchronized to the asynchronous standby node, the asynchronous standby node is forcibly started as the new primary node. If some transaction operations are performed on the new primary node, the data on the new primary node overwrites LSN100. In this case, if the original primary node is used as the standby node and a build request is initiated, the primary node loses the service data of LSN100 that has reached the latest majority consistency location.

**Default value:** **off**

>![](public_sys-resources/icon-notice.gif) **NOTICE:**
>
>-   If **most\_available\_sync** is set to **on** and all synchronous standby nodes are faulty, this function does not take effect. This is because no synchronous standby can trigger the persistence of the LSN.
>
>-   This function affects only incremental build or automatic build without specifying the build mode. If you forcibly specify the full build mode, this function does not take effect.
>
>-   If files in pg\_replslot of the primary node are manually deleted or damaged before the build command is executed, this function does not take effect.
>
>-   After this function is enabled, if the primary node is stopped while waiting for the standby node to achieve majority consistency, the system does not display a message indicating that the transaction has been committed locally and may not be synchronized to the remote node. This prevents upper-layer services from considering that data has been consistent.
>
>-   After this function is enabled, the synchronization waiting time is prolonged due to persistent data. As a result, the performance of the primary and standby clusters with synchronous standby nodes is affected. According to the test data, the performance decreases by about 20% compared with that when this function is disabled.
