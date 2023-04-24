# Log Replay<a name="EN-US_TOPIC_0289900128"></a>

## recovery\_time\_target<a name="en-us_topic_0283136722_en-us_topic_0237124709_en-us_topic_0059778936_sbadc77895e6643b882a5e7557e405373"></a>

**Parameter description**: Specifies the time for a standby server to write and replay logs.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 3600. The unit is s.

**0**  indicates that log flow control is disabled. A value from  **1**  to  **3600**  indicates that a standby server can write and replay logs within the period specified by the value, so that the standby server can quickly assume the primary role. If this parameter is set to a small value, the performance of the primary server is affected. If it is set to a large value, the log flow is not effectively controlled.

**Default value**:  **0**

## recovery\_max\_workers<a name="en-us_topic_0283136722_en-us_topic_0237124709_section161152355114"></a>

**Parameter description**: Specifies the maximum number of concurrent replay threads.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 20

**Default value**:  **1**  \(For better performance, the default value in tool installation is  **4**.\)

## recovery\_parse\_workers<a name="en-us_topic_0283136722_section2094717549015"></a>

**Parameter description**: Specifies the number of  **ParseRedoRecord**  threads for the extreme Recovery Time Objective \(RTO\) feature.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 16

This parameter can be set to a value greater than 1 only when the extreme RTO feature is enabled. In addition, it must be used together with  **recovery\_redo\_workers**. If both  **recovery\_parse\_workers**  and  **recovery\_max\_workers**  are enabled, the setting of  **recovery\_parse\_workers**  prevails and the concurrent replay function is disabled. The extreme RTO feature does not support the hot standby mode or primary/standby/secondary mode. Therefore,  **recovery\_parse\_workers**  can be set to a value greater than 1 only when  **[hot\_standby](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283136835_en-us_topic_0237124714_en-us_topic_0059778071_sa43017102b08472cb160e9f856e664bd)**  is set to  **off**  and  **[replication\_type](transaction.md#en-us_topic_0283136901_en-us_topic_0237124741_section94292665717)**  to  **1**. This feature does not support column-store tables, either. Therefore, disable this feature in a system where column-store tables are used or are to be used. The ultimate RTO does not have flow control. Instead, flow control is determined by the  [recovery\_time\_target](#en-us_topic_0283136722_en-us_topic_0237124709_en-us_topic_0059778936_sbadc77895e6643b882a5e7557e405373)  parameter.

**Default value**:  **1**

## recovery\_redo\_workers<a name="en-us_topic_0283136722_section81797152110"></a>

**Parameter description**: Specifies the number of  **PageRedoWorker**  threads corresponding to each  **ParseRedoRecord**  thread when the ultimate RTO feature is enabled.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 8

This parameter must be used together with  **recovery\_parse\_workers**, and it takes effect only when  **recovery\_parse\_workers**  is set to a value greater than 0.

**Default value**:  **1**

## recovery\_parallelism<a name="en-us_topic_0283136722_en-us_topic_0237124709_section10617145710121"></a>

**Parameter description**: Specifies the actual number of replay threads. This parameter is read-only.

This parameter is a POSTMASTER parameter and is affected by recovery\_max\_workers and recovery\_parse\_workers. If any value is greater than 0, recover\_parallelism will be recalculated.

**Value range**: an integer ranging from 1 to 2147483647

**Default value**:  **1**

## enable\_page\_lsn\_check<a name="en-us_topic_0283136722_en-us_topic_0237124709_section172708441584"></a>

**Parameter description**: Specifies whether to enable the data page LSN check. During replay, the current LSN of the data page is checked to see if it is the expected one.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

**Default value**:  **on**

## recovery\_min\_apply\_delay<a name="en-us_topic_0283137238_en-us_topic_0237124710_en-us_topic_0059778119_sc70ee2a3ae214c89a156d9ad7a8b81e8"></a>

**Parameter description**: Specifies the replay delay of the standby node.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   This parameter does not take effect on the primary node. It must be set on the standby node that requires a delay. You are advised to set this parameter on the asynchronous standby node. If the delay is set on the asynchronous standby node, the RTO will be long after the node is promoted to primary.
>-   The delay time is calculated based on the transaction commit timestamp on the primary server and the current time on the standby server. Therefore, ensure that the clocks of the primary and standby servers are synchronized.
>-   If the delay time is too long, the disk where the XLOG file is located on the standby node may be full. Therefore, you need to set the delay time based on the disk size.
>-   Operations without transactions are not delayed.
>-   After the primary/standby switchover, if the original primary node needs to be delayed, you need to manually set this parameter.
>-   When  **synchronous\_commit**  is set to  **remote\_apply**, synchronous replication is affected by the delay. Each commit message is returned only after the replay on the standby server is complete.
>-   Using this feature also delays  **hot\_standby\_feedback**, which may cause the primary server to bloat, so be careful when using both.
>-   If a DDL operation \(such as DROP or TRUNCATE\) that holds an AccessExclusive lock is performed on the primary node, the query operation on the operation object on the standby node will be returned only after the lock is released during the delayed replay of the record on the standby node.
>-   The MOT table is not supported.

**Value range**: an integer ranging from 0 to INT\_MAX. The unit is ms.

**Default value**:  **0**  \(no delay added\)

## redo\_bind\_cpu\_attr<a name="section787511112134"></a>

**Parameter description**: Specifies the core binding operation of the replay thread. Only the  **sysadmin**  user can access this parameter. This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string of more than 0 characters. The value is case-insensitive.

-   **'nobind'**: The thread is not bound to a core.
-   **'nodebind: 1, 2'**: Use the CPU cores in NUMA groups 1 and 2 to bind threads.
-   **'cpubind: 0-30'**: Use the CPU cores 0 to 30 to bind threads.

**Default value**:  **'nobind'**

