# Log Replay<a name="EN-US_TOPIC_0242371499"></a>

## recovery\_time\_target<a name="en-us_topic_0237124709_en-us_topic_0059778936_sbadc77895e6643b882a5e7557e405373"></a>

**Parameter description**: Specifies the time for a standby server to write and replay logs.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 3600. The unit is second.

**0**  indicates that log flow control is disabled. A value from  **1**  to  **3600**  indicates that a standby server can write and replay logs within the period specified by the value, so that the standby server can quickly assume the primary role. If this parameter is set to a small value, the performance of the primary server is affected. If it is set to a large value, the log flow is not effectively controlled.

**Default value**:  **0**

## recovery\_max\_workers<a name="en-us_topic_0237124709_section161152355114"></a>

**Parameter description**: Specifies the maximum number of concurrent replay threads.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 20

**Default value**:  **1**

## recovery\_parse\_workers<a name="section2094717549015"></a>

**Parameter description**: Specifies the number of  **ParseRedoRecord**  threads for the extreme Recovery Time Objective \(RTO\) feature.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 16

This parameter can be set to a value greater than 1 only when the extreme RTO feature is enabled. In addition, it must be used together with  **recovery\_redo\_workers**. If both  **recovery\_parse\_workers**  and  **recovery\_max\_workers**  are enabled, the setting of  **recovery\_parse\_workers**  prevails and the concurrent replay function is disabled. The extreme RTO feature does not support the hot standby mode or primary/standby/secondary mode. Therefore,  **recovery\_parse\_workers**  can be set to a value greater than 1 only when  **[hot\_standby](standby-server.md#en-us_topic_0237124714_en-us_topic_0059778071_sa43017102b08472cb160e9f856e664bd)**  is set to  **off**  and  **[replication\_type](opengauss-transaction.md#en-us_topic_0237124741_section94292665717)**  to  **1**. This feature does not support column-store tables, either. Therefore, disable this feature in a system where column-store tables are used or are to be used.

**Default value**:  **1**

## recovery\_redo\_workers<a name="section81797152110"></a>

**Parameter description**: Specifies the number of  **PageRedoWorker**  threads corresponding to each  **ParseRedoRecord**  thread when the ultimate RTO feature is enabled.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 8

This parameter must be used together with  **recovery\_parse\_workers**, and it takes effect only when  **recovery\_parse\_workers**  is set to a value greater than 0.

**Default value**:  **1**

## recovery\_parallelism<a name="en-us_topic_0237124709_section10617145710121"></a>

**Parameter description**: Specifies the actual number of replay threads. This parameter is read-only.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 2147483647

**Default value**:  **1**

## enable\_page\_lsn\_check<a name="en-us_topic_0237124709_section172708441584"></a>

**Parameter description**: Specifies whether to enable the data page LSN check. During replay, the current LSN of the data page is checked to see if it is the expected one.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

**Default value**:  **true**

