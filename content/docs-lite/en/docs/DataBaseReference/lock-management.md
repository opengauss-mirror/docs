# Lock Management<a name="EN-US_TOPIC_0289900212"></a>

In openGauss, a deadlock may occur when concurrently executed transactions compete for resources. This section describes parameters used for managing transaction locks.

## deadlock\_timeout<a name="en-us_topic_0283136691_en-us_topic_0237124735_en-us_topic_0059778102_se697b4ff00b643938b67eb5e08206cd5"></a>

**Parameter description**: Specifies the time, in milliseconds, to wait on a lock before checking whether there is a deadlock condition. When the applied lock exceeds the preset value, the system will check whether a deadlock occurs. This parameter takes effect only for common locks.

-   The check for deadlock is relatively expensive. Therefore, the server does not check it when waiting for a lock every time. Deadlocks do not frequently occur when the system is running. Therefore, the system just needs to wait on the lock for a while before checking for a deadlock. Increasing this value reduces the time wasted in needless deadlock checks, but slows down reporting of real deadlock errors. On a heavily loaded server, you may need to raise it. The value you have set needs to exceed the transaction time. By doing this, the possibility that a lock will be checked for deadlocks before it is released will be reduced.
-   When  [log\_lock\_waits](logging-content.md#en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_s0e43c2815b8a4f369d5b150535d1703f)  is set to  **on**,  **deadlock\_timeout**  determines a waiting time to write the lock waiting time information during query execution to logs. To study the lock delay, you can set  **deadlock\_timeout**  to a value smaller than the normal value.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 1 to 2147483647. The unit is ms.

**Default value**:  **1s**

## lockwait\_timeout<a name="en-us_topic_0283136691_en-us_topic_0237124735_en-us_topic_0059778102_s6569557a768f4a80b5cade038eafb31b"></a>

**Parameter description**: Specifies the timeout for attempts to acquire a lock. If the time spent in waiting for a lock exceeds the specified time, an error is reported.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 0 to  *INT\*MAX_. The unit is ms.

**Default value**:  **20min**

## update\_lockwait\_timeout<a name="en-us_topic_0283136691_en-us_topic_0237124735_section14495103214523"></a>

**Parameter description**: Specifies the maximum duration that a lock waits for concurrent updates on a row to complete when the concurrent update feature is enabled. If the time spent in waiting for a lock exceeds the specified time, an error is reported.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 0 to 2147483647. The unit is ms.

**Default value**:  **2min**  \(120000 ms\)

## max\_locks\_per\_transaction<a name="en-us_topic_0283136691_en-us_topic_0237124735_en-us_topic_0059778102_sa005b68f05cb491f8e06512ea8ad5a8c"></a>

**Parameter description**: Determines the average number of object locks allocated for each transaction.

-   The size of the shared lock table is calculated under the condition that a maximum of  *N_  independent objects need to be locked at any time.  _N*  =  **max\_locks\_per\_transaction**  x \(**max\_connections**  +  **max\_prepared\_transactions**\). Objects whose amount does not exceed the preset number can be locked simultaneously at any time. You may need to increase this value if many different tables are modified in a single transaction. This parameter can only be set at database start.
-   Increasing the value of this parameter may cause openGauss to request more System V-shared memory than the OS's default configuration allows.
-   When running a standby server, you must set this parameter to a value that is no less than that on the primary server. Otherwise, queries will not be allowed on the standby server.

This parameter is a  **POSTMASTER**  parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range:**  an integer ranging from 10 to  *INT\*MAX_

**Default value**:  **64**

## max\_pred\_locks\_per\_transaction<a name="en-us_topic_0283136691_en-us_topic_0237124735_en-us_topic_0059778102_s1e51a38ba83a4afebc57fcf50135e9cf"></a>

**Parameter description**: Specifies the average number of predicate locks allocated for each transaction.

-   The size of the shared predicate lock table is calculated under the condition that a maximum of  *N_  independent objects need to be locked at any time.  _N*  =  **max\_pred\_locks\_per\_transaction**  x \(**max\_connections**  +  **max\_prepared\_transactions**\). Objects whose amount does not exceed the preset number can be locked simultaneously at any time. You may need to increase this value if many different tables are modified in a single transaction. This parameter can only be set at server start.
-   Increasing the value of this parameter may cause openGauss to request more System V-shared memory than the OS's default configuration allows.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range:**  an integer ranging from 10 to  *INT\*MAX_

**Default value**:  **64**

## gs\_clean\_timeout<a name="en-us_topic_0059778102_s3be3f5098fe846f88a95afb16b0528f6"></a>

**Parameter description**: Specifies the average interval for clearing temporary tables on the primary node.

-   When the database connection is terminated abnormally, temporary tables may exist. In this case, you need to call the  **gs\_clean**  tool to clear the temporary tables in the database.
-   If this parameter is set to a larger value, the time for clearing openGauss temporary tables may be prolonged.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 0 to 2147483. The unit is s.

**Default value**:  **1min**

## partition\_lock\_upgrade\_timeout<a name="en-us_topic_0283136691_en-us_topic_0237124735_en-us_topic_0059778102_sbe63348a5e5d487fa275eeef89c92ad9"></a>

**Parameter description**: Specifies the timeout for attempts to upgrade an exclusive lock \(read allowed\) to an access exclusive lock \(read/write blocked\) on a partitioned table during the execution of some query statements. If there are concurrent read transactions running, the lock upgrade will need to wait. This parameter sets the waiting timeout for lock upgrade attempts.

-   When you do  **MERGE PARTITION**  and  **CLUSTER PARTITION**  on a partitioned table, temporary tables are used for data rearrangement and file exchange. To concurrently perform as many operations as possible on the partitions, exclusive locks are acquired for the partitions during data rearrangement and access exclusive locks are acquired during file exchange.
-   Generally, a partition waits until it acquires a lock, or a timeout occurs if the partition waits for a period longer than the value specified by the  **[lockwait\_timeout](#en-us_topic_0283136691_en-us_topic_0237124735_en-us_topic_0059778102_s6569557a768f4a80b5cade038eafb31b)**  parameter.
-   When doing  **MERGE PARTITION**  or  **CLUSTER PARTITION**  on a partitioned table, an access exclusive lock needs to be acquired during file exchange. If the lock fails to be acquired, the acquisition is retried at an interval of 50 ms until timeout occurs. The  **partition\_lock\_upgrade\_timeout**  parameter specifies the time to wait before the lock acquisition attempt times out.
-   If this parameter is set to  **–1**, the lock upgrade never times out. The lock upgrade is continuously retried until it succeeds.

    This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).


**Value range**: an integer ranging from –1 to 3000. The unit is s.

**Default value**:  **1800**

## fault\_mon\_timeout<a name="en-us_topic_0283136691_en-us_topic_0237124735_section814374718548"></a>

**Parameter description**: Specifies the period for detecting lightweight deadlocks. This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 0 to 1440. The unit is minute.

**Default value**:  **5min**

## enable\_online\_ddl\_waitlock<a name="en-us_topic_0283136691_en-us_topic_0237124735_section6742115954016"></a>

**Parameter description**: Specifies whether to block DDL operations to wait for the release of  openGauss locks, such as  **pg\_advisory\_lock**.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates that DDL operations will be blocked to wait for the lock release.
-   **off**  indicates that DDL operations will not be blocked.

**Default value**:  **off**

## xloginsert\_locks<a name="en-us_topic_0283136691_en-us_topic_0237124735_section19159193810"></a>

**Parameter description**: Specifies the number of locks on concurrent write-ahead logging. This parameter is used to improve the efficiency of writing write-ahead logs.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range:**  an integer ranging from 1 to 1000

Default value:  **8**

## num\_internal\_lock\_partitions<a name="section216042513554"></a>

**Parameter description**: Specifies the number of internal lightweight lock partitions. It is mainly used for performance optimization in various scenarios. The content is organized in the KV format of keywords and numbers. Different types of locks are separated by commas \(,\). The sequence does not affect the setting result. For example,  **CLOG\_PART=256,CSNLOG\_PART=512**  is equivalent to  **CSNLOG\_PART=512,CLOG\_PART=256**. If you set the same keyword multiple times, only the latest setting takes effect. For example, if you set  **CLOG\_PART**  to  **256 **and  **CLOG\_PART**  to  **2**, the value of  **CLOG\_PART**  is  **2**. If no keyword is set, the default value is used. The usage description, maximum value, minimum value, and default value of each lock type are as follows:

-   **CLOG\_PART**: number of Clog file controllers. Increasing the value of this parameter improves the Clog writing efficiency and transaction submission performance, but increases the memory usage. Decreasing the value of this parameter reduces the memory usage, but may increase the conflict of writing Clogs and affect the performance. The value ranges from 1 to 256.
-   **CSNLOG\_PART**: number of CSNLOG file controllers. Increasing the value of this parameter improves the CSNLOG log writing efficiency and transaction submission performance, but increases the memory usage. Decreasing the value of this parameter reduces the memory usage, but may increase the conflict of writing CSNLOG logs and affect the performance. The value ranges from 1 to 512.
-   **LOG2\_LOCKTABLE\_PART**: two logarithms of the number of common table lock partitions. Increasing the value can improve the concurrency of obtaining locks in the normal process, but may increase the time required for transferring and clearing locks. When waiting events occur in  **LockMgrLock**, you can increase the value to improve the performance. The minimum value is 4, that is, the number of lock partitions is 16. The maximum value is 16, that is, the number of lock partitions is 65536.
-   **TWOPHASE\_PART**: number of partitions of the two-phase transaction lock. Increasing the value can increase the number of concurrent two-phase transaction commits. The value ranges from 1 to 64.
-   **FASTPATH\_PART**: maximum number of locks that each thread can obtain without using the primary lock table. Increasing the value of this parameter will consume more memory. The value ranges from 20 to 10000.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: a string

**Default value**:

-   **CLOG\_PART**:  **1**
-   **CSNLOG\_PART**:  **1**
-   **LOG2\_LOCKTABLE\_PART**:  **4**
-   **TWOPHASE\_PART**:  **1**
-   **FASTPATH\_PART**:  **20**
