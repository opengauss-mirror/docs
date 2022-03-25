# Automatic Vacuuming<a name="EN-US_TOPIC_0289900634"></a>

The  **autovacuum**  process automatically runs the  **VACUUM**  and  **ANALYZE**  statements to recycle the record space marked as deleted and update statistics about the table.

## autovacuum<a name="en-us_topic_0283137694_en-us_topic_0237124730_en-us_topic_0059778244_s995913ca9df54ae5bb488d1e810bd824"></a>

**Parameter description**: Specifies whether to start the  **autovacuum**  process in the database. Ensure that the  [track\_counts](query-and-index-statistics-collector.md#en-us_topic_0283136895_en-us_topic_0237124727_en-us_topic_0059779313_s3f4fb0b1004041f69e1454c701952411)  parameter is set to  **on**  before starting the automatic cleanup process.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   Set the  **autovacuum**  parameter to  **on**  if you want to start the automatic cleanup of abnormal two-phase transactions when the system recovers from faults.
>-   If  **autovacuum**  is set to  **on**  and  **[autovacuum\_max\_workers](#en-us_topic_0283137694_en-us_topic_0237124730_en-us_topic_0059778244_s76932f79410248ba8923017d19982673)**  to  **0**, the autovacuum process is started only when the system recovers from faults to clean up abnormal two-phase transactions.
>-   If  **autovacuum**  is set to  **on**  and the value of  [autovacuum\_max\_workers](#en-us_topic_0283137694_en-us_topic_0237124730_en-us_topic_0059778244_s76932f79410248ba8923017d19982673)  is greater than  **0**, the system will automatically clean up the two-phase transactions and processes after recovering from faults.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>Even if  **autovacuum**  is set to  **off**, the autovacuum process will be started automatically when a transaction ID wraparound is about to occur. When a  **CREATE DATABASE**  or  **DROP DATABASE**  operation fails, it is possible that the transaction has been committed or rolled back on some nodes whereas some nodes are still in the prepared state. In this case, perform the following operations to manually restore the nodes:

**Value range**: Boolean

-   **on**  indicates that the  **autovacuum**  process is started.
-   **off**  indicates that the  **autovacuum**  process is not started.

**Default value**:  **on**

## autovacuum\_mode<a name="en-us_topic_0283137694_en-us_topic_0237124730_section658130152017"></a>

**Parameter description**: Specifies whether the autoanalyze or autovacuum function is started. This parameter is valid only when  **autovacuum**  is set to  **on**.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: enumerated values

-   **analyze**  indicates that only autoanalyze is performed.
-   **vacuum**  indicates that only autovacuum is performed.
-   **mix**  indicates that both autoanalyze and autovacuum are performed.
-   **none**  indicates that neither of them is performed.

**Default value**:  **mix**

## autoanalyze\_timeout<a name="en-us_topic_0283137694_en-us_topic_0237124730_section11642162416185"></a>

**Parameter description**: Specifies the timeout period of autoanalyze. If the duration of autoanalyze on a table exceeds the value of  **autoanalyze\_timeout**, the autoanalyze is automatically canceled.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 0 to 2147483. The unit is s.

**Default value**:  **5min**  \(300s\)

## autovacuum\_io\_limits<a name="en-us_topic_0283137694_en-us_topic_0237124730_section127431618386"></a>

**Parameter description**: Specifies the upper limit of I/Os triggered by the autovacuum process per second.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer. The value can be  **–1**  or a number ranging from 0 to 1073741823.  **–1**  indicates that the default cgroup is used.

**Default value**:  **–1**

## log\_autovacuum\_min\_duration<a name="en-us_topic_0283137694_en-us_topic_0237124730_en-us_topic_0059778244_sf43be8f64dc74d958cd6ad40f87a695a"></a>

**Parameter description**: Records each step performed by the autovacuum process to the server log when the execution time of the autovacuum process is greater than or equal to a certain value. This parameter helps track the autovacuum behavior.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

A setting example is as follows:

Set the  **log\_autovacuum\_min\_duration**  parameter to 250 ms to record the actions of autovacuum if it runs for 250 ms or longer.

**Value range**: an integer ranging from –1 to 2147483647. The unit is ms.

-   **0**  indicates that all autovacuum actions are recorded in the log.
-   **–1**  indicates that all autovacuum actions are not recorded in the log.
-   A value other than  **–1**  indicates that a message is recorded when an autovacuum action is skipped due to a lock conflict.

**Default value**:  **–1**

## autovacuum\_max\_workers<a name="en-us_topic_0283137694_en-us_topic_0237124730_en-us_topic_0059778244_s76932f79410248ba8923017d19982673"></a>

**Parameter description**: Specifies the maximum number of autovacuum worker threads that can run at the same time. The upper limit of this parameter is related to the values of  **max\_connections**  and  **job\_queue\_processes**.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer. The minimum value is  **0**, indicating that autovacuum is not enabled. The theoretical maximum value is  **262143**, but the actual maximum value is a dynamic value calculated by the following formula: 262143 -  **max\_connections**  -  **job\_queue\_processes**  - Number of auxiliary threads - Number of autovacuum launcher threads - 1. The number of auxiliary threads and the number of autovacuum launcher threads are specified by two macros. Their default values are  **20**  and  **2**  respectively.

**Default value**:  **3**

## autovacuum\_naptime<a name="en-us_topic_0283137694_en-us_topic_0237124730_en-us_topic_0059778244_s2b149c0f391f4cd3990a366d08d5f14a"></a>

**Parameter description**: Specifies the interval between activity rounds for the autovacuum process.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 1 to 2147483. The unit is s.

**Default value**:  **10min**  \(600s\)

## autovacuum\_vacuum\_threshold<a name="en-us_topic_0283137694_en-us_topic_0237124730_en-us_topic_0059778244_sbbb19edeb79141089bc0bd60169365de"></a>

**Parameter description**: Specifies the threshold for triggering the  **VACUUM**  operation. When the number of deleted or updated records in a table exceeds the specified threshold, the  **VACUUM**  operation is executed on this table.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 0 to 2147483647.

**Default value**:  **50**

## autovacuum\_analyze\_threshold<a name="en-us_topic_0283137694_en-us_topic_0237124730_en-us_topic_0059778244_se95472b6a2cd4b13b3721bc9e11a73f3"></a>

**Parameter description**: Specifies the threshold for triggering the  **ANALYZE**  operation. When the number of deleted, inserted, or updated records in a table exceeds the specified threshold, the  **ANALYZE**  operation is executed on this table.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 0 to 2147483647.

**Default value**:  **50**

## autovacuum\_vacuum\_scale\_factor<a name="en-us_topic_0283137694_en-us_topic_0237124730_en-us_topic_0059778244_s5e1ca61425aa4b9a86d570e3ee0361ef"></a>

**Parameter description**: Specifies a fraction of the table size added to the  **autovacuum\_vacuum\_threshold**  parameter when deciding whether to vacuum a table.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: a floating point number ranging from 0.0 to 100.0

**Default value**:  **0.2**

## autovacuum\_analyze\_scale\_factor<a name="en-us_topic_0283137694_en-us_topic_0237124730_en-us_topic_0059778244_s8586078b83954d9ba8ddcd5320b4594b"></a>

**Parameter description**: Specifies a fraction of the table size added to the  **autovacuum\_analyze\_threshold**  parameter when deciding whether to analyze a table.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: a floating point number ranging from 0.0 to 100.0

**Default value**:  **0.1**

## autovacuum\_freeze\_max\_age<a name="en-us_topic_0283137694_en-us_topic_0237124730_en-us_topic_0059778244_s7857d2d0002547a3853b7aac36a458b3"></a>

**Parameter description**: Specifies the maximum age \(in transactions\) that a table's  **pg\_class.relfrozenxid**  field can attain before a VACUUM operation is performed.

-   The old files under the subdirectory of  **pg\_clog/**  can also be deleted by the  **VACUUM**  operation.
-   Even if the  **autovacuum**  process is not started, the system will invoke the process to prevent transaction ID wraparound.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 100000 to 576460752303423487

**Default value**:  **4000000000**

## autovacuum\_vacuum\_cost\_delay<a name="en-us_topic_0283137694_en-us_topic_0237124730_en-us_topic_0059778244_sd5fd7715ef6447a28f1e5f898e5ae342"></a>

**Parameter description**: Specifies the value of the cost delay used in the  **autovacuum**  operation.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from –1 to 100. The unit is ms.  **–1**  indicates that the normal vacuum cost delay is used.

**Default value**:  **20ms**

## autovacuum\_vacuum\_cost\_limit<a name="en-us_topic_0283137694_en-us_topic_0237124730_en-us_topic_0059778244_s3e72d276e45246e8958a1400c7c9f3ea"></a>

**Parameter description:**  sets the value of the cost limit used in the  **autovacuum**  operation.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from –1 to 10000  **–1**  indicates that the normal vacuum cost limit is used.

**Default value**:  **–1**

## defer\_csn\_cleanup\_time<a name="en-us_topic_0283137694_en-us_topic_0237124730_section355033134211"></a>

**Parameter description**: Specifies the interval of recycling transaction IDs.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 0 to  _INT\_MAX_. The unit is ms.

**Default value**:  **5s**  \(5000 ms\)

