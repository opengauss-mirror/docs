# Lock Management<a name="EN-US_TOPIC_0242371525"></a>

In openGauss, a deadlock may occur when concurrently executed transactions compete for resources. This section describes parameters used for managing transaction locks.

## deadlock\_timeout<a name="en-us_topic_0237124735_en-us_topic_0059778102_se697b4ff00b643938b67eb5e08206cd5"></a>

**Parameter description**: Specifies the time, in milliseconds, to wait on a lock before checking whether there is a deadlock condition. When the applied lock exceeds the preset value, the system will check whether a deadlock occurs.

-   The check for deadlock is relatively expensive. Therefore, the server does not check it when waiting for a lock every time. Deadlocks do not frequently occur when the system is running. Therefore, the system just needs to wait on the lock for a while before checking for a deadlock. Increasing this value reduces the time wasted in needless deadlock checks, but slows down reporting of real deadlock errors. On a heavily loaded server, you may need to raise it. The value you have set needs to exceed the transaction time. By doing this, the possibility that a lock will be checked for deadlocks before it is released will be reduced.
-   If you want to write the lock wait time during query execution to logs by setting  **[log\_lock\_waits](logging-content.md#en-us_topic_0237124723_en-us_topic_0059778400_s0e43c2815b8a4f369d5b150535d1703f)**, ensure that the value of  **[log\_lock\_waits](logging-content.md#en-us_topic_0237124723_en-us_topic_0059778400_s0e43c2815b8a4f369d5b150535d1703f)**  is less than the specified value \(or the default value\) of  **deadlock\_timeout**.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 1 to 2147483647. The unit is ms.

**Default value**:  **1s**

## lockwait\_timeout<a name="en-us_topic_0237124735_en-us_topic_0059778102_s6569557a768f4a80b5cade038eafb31b"></a>

**Parameter description**: Specifies the timeout for attempts to acquire a lock. If the time spent in waiting for a lock exceeds the specified time, an error is reported.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 0 to  _INT\_MAX_. The unit is ms.

**Default value**:  **20min**

## update\_lockwait\_timeout<a name="en-us_topic_0237124735_section14495103214523"></a>

**Parameter description**: Specifies the maximum duration that a lock waits for concurrent updates on a row to complete when the concurrent update feature is enabled. If the time spent in waiting for a lock exceeds the specified time, an error is reported.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 0 to  _INT\_MAX_. The unit is ms.

**Default value**:  **2min**

## max\_locks\_per\_transaction<a name="en-us_topic_0237124735_en-us_topic_0059778102_sa005b68f05cb491f8e06512ea8ad5a8c"></a>

**Parameter description**: Controls the average number of object locks allocated for each transaction.

-   The size of the shared lock table is calculated under the condition that a maximum of  _N_  independent objects need to be locked at any time.  _N_  =  **max\_locks\_per\_transaction**  x \(**max\_connections**  +  **max\_prepared\_transactions**\). Objects whose amount does not exceed the preset number can be locked simultaneously at any time. You may need to increase this value if many different tables are modified in a single transaction. This parameter can only be set at database start.
-   Increasing the value of this parameter may cause openGauss to request more System V-shared memory than the OS's default configuration allows.
-   When running a standby server, you must set this parameter to a value that is no less than that on the primary server. Otherwise, queries will not be allowed on the standby server.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range:**  an integer ranging from 10 to  _INT\_MAX_

**Default value**:  **256**

## max\_pred\_locks\_per\_transaction<a name="en-us_topic_0237124735_en-us_topic_0059778102_s1e51a38ba83a4afebc57fcf50135e9cf"></a>

**Parameter description**: Controls the average number of predicate locks allocated for each transaction.

-   The size of the shared predicate lock table is calculated under the condition that a maximum of  _N_  independent objects need to be locked at any time.  _N_  =  **max\_pred\_locks\_per\_transaction**  x \(**max\_connections**  +  **max\_prepared\_transactions**\). Objects whose amount does not exceed the preset number can be locked simultaneously at any time. You may need to increase this value if many different tables are modified in a single transaction. This parameter can only be set at server start.
-   Increasing the value of this parameter may cause openGauss to request more System V-shared memory than the OS's default configuration allows.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range:**  an integer ranging from 10 to  _INT\_MAX_

**Default value**:  **64**

## gs\_clean\_timeout<a name="en-us_topic_0237124735_en-us_topic_0059778102_s3be3f5098fe846f88a95afb16b0528f6"></a>

**Parameter description**: Controls the average interval between  **gs\_clean**  invocations by the DBnode.

-   Transactions in openGauss are committed in two phases. An unfinished two-phase transaction may hold a table-level lock, keeping tables from being locked by other connections. In this case, the database needs to invoke the  **gs\_clean**  tool to clean unfinished two-phase transactions in openGauss.  **gs\_clean\_timeout**  is used to control the interval for the DBnode to invoke the  **gs\_clean**  tool.
-   A larger value of this parameter indicates a low frequency of  **gs\_clean**  invocation to clean unfinished two-phase transactions.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 0 to  _INT\_MAX_/1000. The unit is s.

**Default value**:  **5min**

## partition\_lock\_upgrade\_timeout<a name="en-us_topic_0237124735_en-us_topic_0059778102_sbe63348a5e5d487fa275eeef89c92ad9"></a>

**Parameter description**: Specifies the timeout for attempts to upgrade an exclusive lock \(read allowed\) to an access exclusive lock \(read/write blocked\) on a partitioned table during the execution of some query statements. If there are concurrent read transactions running, the lock upgrade will need to wait. This parameter sets the waiting timeout for lock upgrade attempts.

-   When you do MERGE PARTITION and CLUSTER PARTITION on a partitioned table, temporary tables are used for data rearrangement and file exchange. To concurrently perform as many operations as possible on the partitions, exclusive locks are acquired for the partitions during data rearrangement and access exclusive locks are acquired during file exchange.
-   Generally, a partition waits until it acquires a lock, or a timeout occurs if the partition waits for a period longer than the value specified by the  **[lockwait\_timeout](#en-us_topic_0237124735_en-us_topic_0059778102_s6569557a768f4a80b5cade038eafb31b)**  parameter.
-   When doing MERGE PARTITION or CLUSTER PARTITION on a partitioned table, an access exclusive lock needs to be acquired during file exchange. If the lock fails to be acquired, the acquisition is retried at an interval of 50 ms until timeout occurs. The  **partition\_lock\_upgrade\_timeout**  parameter specifies the time to wait before the lock acquisition attempt times out.
-   If this parameter is set to  **–1**, the lock upgrade never times out. The lock upgrade is continuously retried until it succeeds.

    This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).


**Value range**: an integer ranging from –1 to 3000. The unit is s.

**Default value**:  **1800**

## fault\_mon\_timeout<a name="en-us_topic_0237124735_section814374718548"></a>

**Parameter description**: Specifies the period for detecting lightweight deadlocks. This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 0 to 1440. The unit is minute.

**Default value**:  **5min**

## enable\_online\_ddl\_waitlock<a name="en-us_topic_0237124735_section6742115954016"></a>

**Parameter description**: Specifies whether to block DDL operations to wait for the release of openGauss locks, such as  **pg\_advisory\_lock**  and  **pgxc\_lock\_for\_backup**. This parameter is mainly used in online OM operations and you are not advised to modify the settings.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates that DDL operations will be blocked to wait for the lock release.
-   **off**  indicates that DDL operations will not be blocked.

**Default value**:  **off**

## xloginsert\_locks<a name="en-us_topic_0237124735_section19159193810"></a>

**Parameter description**: Specifies the number of locks on concurrent write-ahead logging. This parameter is used to improve the efficiency of writing write-ahead logs.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range:**  an integer ranging from 1 to 1000

**Default value**:  **8**

