# Standby Server<a name="EN-US_TOPIC_0289900463"></a>

## hot\_standby<a name="en-us_topic_0283136835_en-us_topic_0237124714_en-us_topic_0059778071_sa43017102b08472cb160e9f856e664bd"></a>

**Parameter description**: Specifies whether to allow connections and queries on a standby server during its recovery.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   If this parameter is set to  **on**,  **[wal\_level](settings.md#en-us_topic_0283137354_en-us_topic_0237124707_en-us_topic_0059778393_s2c76f5957066407a959191148f2c780f)**  must be set to  **hot\_standby**. Otherwise, the database startup fails.
>-   In an HA system,  **hot\_standby**  cannot be set to  **off**, because this setting can affect other features of the HA system.
>-   If the  **hot\_standby**  parameter was disabled and the  **wal\_level**  parameter was set to a value lower than  **hot\_standby**, perform the following operations to ensure that the logs to be replayed on the standby node can be queried on the standby node before enabling the  **hot\_standby**  parameter again:
>    1.  Change the  **wal\_level**  value of the primary and standby nodes to  **hot\_standby**  or higher, and restart the instances for the change to take effect.
>    2.  Perform the checkpoint operation on the primary node and query the  **pg\_stat\_get\_wal\_senders\(\)**  function to ensure that the  **receiver\_replay\_location**  value of each standby node is the same as the  **sender\_flush\_location**  value of the primary node. Ensure that the value adjustment of  **wal\_level**  is synchronized to standby nodes and takes effect, and standby nodes do not need to replay low-level logs.
>    3.  Set the  **hot\_standby**  parameter of the primary and standby nodes to  **on**, and restart the instances for the setting to take effect.

**Value range**: Boolean

-   **on**  indicates that connections and queries are allowed on the standby server during the recovery.
-   **off**  indicates that connections and queries are not allowed on the standby server during the recovery.

**Default value**:  **on**

## max\_standby\_archive\_delay<a name="en-us_topic_0283136835_en-us_topic_0237124714_en-us_topic_0059778071_s9e74a03bd0e94f47adf29ee295f821d7"></a>

**Parameter description**: Specifies the wait period before queries on a standby server are canceled when the queries conflict with WAL processing and archiving in hot standby mode.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>**–1**  indicates that the standby server waits until the conflicting queries are complete.

**Value range**: an integer ranging from –1 to  *INT\*MAX_. The unit is ms.

**Default value**:  **3s**  \(3000 ms\)

## max\_standby\_streaming\_delay<a name="en-us_topic_0283136835_en-us_topic_0237124714_en-us_topic_0059778071_sa882fb4dfbfc4fdda5640d350053c2be"></a>

**Parameter description**: Specifies the wait period before queries on a standby server are canceled when the queries conflict with WAL data receiving through streaming replication in hot standby mode. If this parameter is set to a large value or the service load is heavy, an error may be reported for waiting for transaction replay and flushing to disks.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>**–1**  indicates that the standby server waits until the conflicting queries are complete.

**Value range**: an integer ranging from –1 to  *INT\*MAX_. The unit is ms.

**Default value**:  **3s**  \(3000 ms\)

## wal\_receiver\_status\_interval<a name="en-us_topic_0283136835_en-us_topic_0237124714_en-us_topic_0059778071_sbaf194f1d634463aa25c5985a8102447"></a>

**Parameter description**: Specifies the maximum interval for notifying the primary server of the WAL Receiver status.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to INT\_MAX. The unit is ms.

**Default value**:  **5s**  \(5000 ms\)

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>If this parameter is set to  **0**, the standby server does not send information, such as the log receiving location, to the primary server. As a result, the transaction commit on the primary server may be blocked, and the switchover may fail. In normal service scenarios, you are not advised to set this parameter to  **0**.

## hot\_standby\_feedback<a name="en-us_topic_0283136835_en-us_topic_0237124714_en-us_topic_0059778071_s766f240c55244d1888253a480e732637"></a>

**Parameter description**: Specifies whether a standby server is allowed to send the result of a query performed on it to the primary server, preventing a query conflict.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the ID of the oldest transaction active on standby servers will be sent to the primary server.
-   **off**  indicates that the ID of the oldest transaction active on standby servers will not be sent to the primary server.

**Default value**:  **off**

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>If this parameter is set to  **on**, VACUUM on the primary server will not clean up tuples modified in transactions later than the oldest transaction active on standby servers.
>Therefore, the performance of the primary server will be affected.

## wal\_receiver\_timeout<a name="en-us_topic_0283136835_en-us_topic_0237124714_en-us_topic_0059778071_s6afc725ed1b5426391be682f42702b77"></a>

**Parameter description:**  Specifies the maximum wait period for a standby server to receive data from the primary server.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to  *INT\*MAX_. The unit is ms.

**Default value**:  **6s**  \(6000 ms\)

## wal\_receiver\_connect\_timeout<a name="en-us_topic_0283136835_en-us_topic_0237124714_en-us_topic_0059778071_s5e87cc7dd7c740319e4179171fb673d3"></a>

**Parameter description**: Specifies the timeout period for a standby server to connect to the primary server.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to  *INT\*MAX_/1000. The unit is s.

**Default value**:  **2s**

## wal\_receiver\_connect\_retries<a name="en-us_topic_0283136835_en-us_topic_0237124714_en-us_topic_0059778071_s0a5fff3c126340d78e4aab61ac038caa"></a>

**Parameter description**: Specifies the maximum attempts that a standby server connects to the primary server

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to  *INT\*MAX_

**Default value**:  **1**

## wal\_receiver\_buffer\_size<a name="en-us_topic_0283136835_en-us_topic_0237124714_en-us_topic_0059778071_s1152f5dcb7744fa5ace65b997f92ed03"></a>

**Parameter description**: Specifies the size of the memory buffer that stores the Xlogs received by the standby and secondary nodes. Currently, primary/standby/secondary deployment is not supported by default.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 4096 to 1047552. The unit is KB.

**Default value**:  **64 MB**  \(65536 KB\)

## primary\_slotname<a name="en-us_topic_0283136835_en-us_topic_0237124714_en-us_topic_0059778071_s77614979f3654250b770828634de63c7"></a>

**Parameter description**: Specifies the slot name of the primary server corresponding to a standby server. This parameter is used for the mechanisms to verify the primary-standby relationship and delete WALs.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**: empty

## max\_logical\_replication\_workers<a name="section876805114185"></a>

**Parameter description**: Specifies the maximum number of apply worker threads on the subscriber side.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 262143

**Default value:** **4**

## max_sync_workers_per_subscription

**Parameter description**: Specifies the maximum number of tablesync worker threads for each subscription on the subscriber.

This parameter is a SIGHUP parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 262143

**Default value**: **2**
