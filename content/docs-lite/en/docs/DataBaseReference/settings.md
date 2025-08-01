# Settings<a name="EN-US_TOPIC_0289900114"></a>

## wal\_level<a name="en-us_topic_0283137354_en-us_topic_0237124707_en-us_topic_0059778393_s2c76f5957066407a959191148f2c780f"></a>

**Parameter description:**  Specifies the level of information to be written to the WAL. The value cannot be empty or commented out.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   To enable WAL archiving and data streaming replication between primary and standby servers, set this parameter to  **archive**  or  **hot\_standby**.
>-   This parameter can be set to  **minimal**  only in a single-server system. When the parameter value is  **minimal**,  **archive\_mode**  must be set to  **off**,  **hot\_standby**  must be set to  **off**, and  **max\_wal\_senders**  must be set to  **0**. Otherwise, the database startup fails.
>-   If this parameter is set to  **archive**,  **hot\_standby**  must be set to  **off**. Otherwise, the database startup fails. However,  **hot\_standby**  cannot be set to  **off**  in a primary-standby deployment. For details, see the description of the  **hot\_standby**  parameter.

**Value range**: enumerated values

-   **minimal**

    Advantages: Certain bulk operations \(including creating tables and indexes, executing cluster operations, and copying tables\) are safely skipped in logging, which can make those operations much faster.

    Disadvantages: WALs contain only basic information required for recovery from a database server crash or an emergency shutdown. Data cannot be restored from archived WALs.

-   **archive**

    Adds logging required for WAL archiving, supporting the database restoration from archives.

-   **hot\_standby**
    -   Further adds information required to run SQL queries on a standby server and takes effect after a server restart.
    -   To enable read-only queries on a standby server, the  **wal\_level**  parameter must be set to  **hot\_standby**  on the primary server and the same value must be set on the standby server. There are few measurable differences in performance between using  **hot\_standby**  and  **archive**  levels. However, feedback is welcome if any differences in their impacts on product performance are noticeable.

-   logical

    This parameter indicates that WALs support logical replication.


**Default value**:  **hot\_standby**

## fsync<a name="en-us_topic_0283137354_en-us_topic_0237124707_en-us_topic_0059778393_sb6cc47bbe02c47a785c873b1959ad0df"></a>

**Parameter description:**  Specifies whether the openGauss server uses the  **fsync\(\)**  function \(see  **[wal\_sync\_method](#en-us_topic_0283137354_en-us_topic_0237124707_en-us_topic_0059778393_s9fc8bf6fcd2b474d894fc8ee7385fe86)**\) to ensure that updates can be written to disks in a timely manner.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   Using the  **fsync\(\)**  function ensures that the data can be recovered to a known state when an OS or a hardware crashes.
>-   Setting this parameter to  **off**  may result in unrecoverable data corruption in a system crash.

**Value range**: Boolean

-   **on**  indicates that the  **fsync\(\)**  function is used.
-   **off**  indicates that the  **fsync\(\)**  function is not used.

**Default value**:  **on**

## synchronous\_commit<a name="en-us_topic_0283137354_en-us_topic_0237124707_en-us_topic_0059778393_sc39a5bd106204166ba4660306d302239"></a>

**Parameter description**: Specifies the synchronization mode of the current transaction.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: enumerated values

-   **on**  indicates that synchronization logs of a standby server are flushed to disk.
-   **off**  indicates asynchronous commit.
-   **local**  indicates local commit.
-   **remote\_write**  indicates that synchronization logs of a standby server are written to disks.
-   **remote\_receive**  indicates that the standby server receives logs.
-   **remote\_apply**  indicates that the synchronization logs of the standby server are replayed.
-   **true**  indicates that synchronization logs of a standby server are flushed to disk.
-   **false**  indicates asynchronous commit.
-   **yes**  indicates that synchronization logs of a standby server are flushed to disk.
-   **no**  indicates asynchronous commit.
-   **1**  indicates that synchronization logs of a standby server are flushed to disk.
-   **0**  indicates asynchronous commit.
-   **2**  indicates that the synchronization logs of the standby server are replayed.

>![](public_sys-resources/icon-note.gif) **NOTE:**
>If **synchronous\_commit** is set to **off** or **local**, the synchronization mode is async only when the value of **synchronous\_standby\_names** is empty.

**Default value**:  **on**

## wal\_sync\_method<a name="en-us_topic_0283137354_en-us_topic_0237124707_en-us_topic_0059778393_s9fc8bf6fcd2b474d894fc8ee7385fe86"></a>

**Parameter description**: Specifies the method used for forcing WAL updates out to disk.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>If  [fsync](#en-us_topic_0283137354_en-us_topic_0237124707_en-us_topic_0059778393_sb6cc47bbe02c47a785c873b1959ad0df)  is set to  **off**, the setting of this parameter does not take effect because WAL file updates will not be forced out to disk.

**Value range**: enumerated values

-   **open\_datasync**  indicates that WAL files are opened with the  **O\_DSYNC**  option.
-   fdatasync indicates that  **fdatasync\(\)**  is called at each commit. \(SUSE 10 and SUSE 11 are supported.\)
-   **fsync\_writethrough**  indicates that  **fsync\(\)**  is called at each commit to force data in the buffer to be written to the disk.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >**wal\_sync\_method**  can be set to  **fsync\_writethrough**  on a Windows platform, but this setting has the same effect as setting the parameter to  **fsync**.

-   **fsync**  indicates that  **fsync\(\)**  is invoked at each commit \(SUSE 10 and SUSE 11 are supported\).
-   **open\_sync**  indicates that the  **open\(\)**  with the O\_SYNC option is used to write WAL files \(SUSE 10 and SUSE 11 are supported\).

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >Not all platforms support the preceding parameters.


**Default value:** **fdatasync**

## full\_page\_writes<a name="en-us_topic_0283137354_en-us_topic_0237124707_en-us_topic_0059778393_scf91a0abd76640efb76b172daf9a5f38"></a>

**Parameter description**: Specifies whether the openGauss server writes the entire content of each disk page to WALs during the first modification of that page after a checkpoint. When the incremental checkpoint function and  **enable\_double\_write**  are enabled at the same time,  **full\_page\_writes**  is not used.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   This parameter is needed because a page write that is in process during an OS crash might be only partially completed, leading to an on-disk page that contains a mix of old and new data. The row-level change data normally stored in WALs will not be enough to completely restore such a page during post-crash recovery. Storing the full page image guarantees that the page can be correctly restored, but at the price of increasing the amount of data that must be written to WALs.
>-   Setting this parameter to  **off**  might lead to unrecoverable data corruption after a system failure. It might be safe to set this parameter to  **off**  if you have hardware \(such as a battery-backed disk controller\) or file-system software \(such as ReiserFS 4\) that reduces the risk of partial page writes to an acceptably low level.

**Value range**: Boolean

-   **on**  indicates that this feature is enabled.
-   **off**  indicates that this feature is disabled.

**Default value**:  **on**

## wal\_log\_hints<a name="en-us_topic_0283137354_en-us_topic_0237124707_section19360016114"></a>

**Parameter description**: Specifies whether to write an entire page to WALs during the first modification of that page after a checkpoint, even for non-critical modifications of so-called hint bits. You are advised not to modify the setting.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the entire page is written to WALs.
-   **off**  indicates that the entire page is not written to WALs.

**Default value**:  **on**

## wal\_buffers<a name="en-us_topic_0283137354_en-us_topic_0237124707_en-us_topic_0059778393_sce544e842a94430abad77f1ae64406af"></a>

**Parameter description**: Specifies the number of  **XLOG\_BLCKSZ**s used for storing WAL data. The size of each  **XLOG\_BLCKSZ**  is 8 kB.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  –1 to 2<sup>18</sup>. The minimum value is –1 and the maximum value is 262144. The unit is 8 kB.

-   If this parameter is set to –1, the value of  **wal\_buffers**  is automatically adjusted to 1/64 of  **shared\_buffers**. The minimum value is 8  **XLOG\_BLCKSZ**  and the maximum value is 2048  **XLOG\_BLCKSZ**, if the automatically adjusted value is less than the minimum value, the value is adjusted to the minimum value. If the automatically adjusted value is greater than the maximum value, the value is adjusted to the maximum value.
-   If this parameter is set to a value other than  **–1**  and smaller than  **4**, the value  **4**  is used.

**Default value**: 2048, 16 MB

**Setting suggestions:**  The content of the WAL buffers is written to disks at every transaction commit, so extremely large values are unlikely to provide a significant increase in system performance. However, setting this parameter to hundreds of megabytes can improve the disk write performance on a server to which a large number of transactions are committed at the same time. The default value meets user requirements in most cases.

## wal\_writer\_delay<a name="en-us_topic_0283137354_en-us_topic_0237124707_en-us_topic_0059778393_s84c1de31de80481381e554741a4ab7d7"></a>

**Parameter description**: Specifies the delay between activity rounds for the WAL writer.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>A longer delay might lead to insufficient WAL buffer and a shorter delay leads to continuously writing of the WALs, thereby increasing the load of disk I/O.

**Value range**: an integer ranging from 1 to 10000. The unit is millisecond.

**Default value**:  **200 ms**

## commit\_delay<a name="en-us_topic_0283137354_en-us_topic_0237124707_en-us_topic_0059778393_s4a63dd7d4d794286a990ae2123a328fd"></a>

**Parameter description**: Specifies the duration for committed data to be stored in the WAL buffer.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   When this parameter is set to a non-zero value, the committed transaction is stored in the WAL buffer instead of being written to the WAL immediately. Then the WAL writer process flushes the buffer out to disks periodically.
>-   If system load is high, other transactions are probably ready to be committed within the delay. If no other transactions are ready to be committed, the delay is a waste of time.

**Value range**: an integer ranging from 0 to 100000. The unit is μs.  **0**  indicates no delay.

**Default value**:  **0**

## commit\_siblings<a name="en-us_topic_0283137354_en-us_topic_0237124707_en-us_topic_0059778393_s107c785a61a44d39b43b4255d436e5a8"></a>

**Parameter description**: Specifies a threshold on the number of concurrent open transactions. If the number of concurrent open transactions is greater than the value of this parameter, a transaction that initiates a commit request will wait for a period of time specified by  **[commit\_delay](#en-us_topic_0283137354_en-us_topic_0237124707_en-us_topic_0059778393_s4a63dd7d4d794286a990ae2123a328fd)**. Otherwise, this transaction is written into WALs immediately.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 1000

**Default value**:  **5**

## wal\_block\_size<a name="en-us_topic_0283137354_en-us_topic_0237124707_en-us_topic_0059778393_s339ce27351264935bcfd6d38330a019e"></a>

**Parameter description**: Specifies the size of a WAL disk block.

This parameter is a fixed INTERNAL parameter and cannot be modified.

**Value range**: an integer. The unit is byte.

**Default value**:  **8192**

## wal\_segment\_size<a name="en-us_topic_0283137354_en-us_topic_0237124707_en-us_topic_0059778393_scc42bcb403d84ca687cec54f94d623aa"></a>

**Parameter description**: Specifies the size of a WAL segment file.

This parameter is a fixed INTERNAL parameter and cannot be modified.

**Value range**: an integer. The unit is 8 kB.

**Default value**:  **16 MB**  \(2048 x 8 kB\)

## walwriter\_cpu\_bind<a name="section15983031593"></a>

**Parameter description**: Specifies the CPU core bound to the WAL write thread. This parameter is used together with the thread pool parameter.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from –1 to the number of cores minus 1

**Default value**:  **–1**

## walwriter\_sleep\_threshold<a name="section513914314213"></a>

**Parameter description**: Specifies the number of times that idle Xlogs are refreshed before the xlogflusher enters the sleep state. If the number of times reaches the threshold, the xlogflusher enters the sleep state.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 50000

**Default value**:  **500** 

## wal\_file\_init\_num<a name="section11176351456"></a>

**Parameter description**: Specifies the number of Xlog segment files to be created by the WAL writer.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 1000000

**Default value**:  **10** 

## force\_promote<a name="section686422815242"></a>

**Parameter description**: Specifies whether to enable the forcible switchover function on the standby node.

When a cluster is faulty, the forcible switchover enables the cluster to recover services as soon as possible at the cost of losing some data. This is an escape method used when the cluster is unavailable. You are not advised to trigger this method frequently. You are not advised not to use this function if you are not clear about the impact of data loss on services.

**Value range**:  **0**  or  **1**

The value  **0**  indicates that the function is disabled and the value  **1**  indicates that the function is enabled.

**Default value**:  **0**
