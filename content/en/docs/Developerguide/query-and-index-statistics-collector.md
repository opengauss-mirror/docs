# Query and Index Statistics Collector<a name="EN-US_TOPIC_0289900686"></a>

The query and index statistics collector is used to collect statistics during database running. The statistics include the times of inserting and updating a table and index, the number of disk blocks and tuples, and the time required for the last cleanup and analysis on each table. The statistics can be viewed by querying system view families pg\_stats and pg\_statistic. The following parameters are used to set the statistics collection feature in the server scope.

## track\_activities<a name="en-us_topic_0283136895_en-us_topic_0237124727_en-us_topic_0059779313_s7ae1b39207b14bb697df6bd9ee91e54b"></a>

**Parameter description:**  Collects statistics about the commands that are being executed in session.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the statistics collection function is enabled.
-   **off**  indicates that the statistics collection function is disabled.

**Default value**:  **on**

## track\_counts<a name="en-us_topic_0283136895_en-us_topic_0237124727_en-us_topic_0059779313_s3f4fb0b1004041f69e1454c701952411"></a>

**Parameter description:**  Collects statistics about database activities.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the statistics collection function is enabled.
-   **off**  indicates that the statistics collection function is disabled.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Database statistics are required when the autovacuum process checks for databases that need to be vacuumed. Therefore, the default value is set to  **on**.

**Default value**:  **on**

## track\_io\_timing<a name="en-us_topic_0283136895_en-us_topic_0237124727_en-us_topic_0059779313_s1d78f16061f74c30a6459c7be772f86d"></a>

**Parameter description:**  Collects statistics about I/O timing in the database. The I/O timing statistics can be queried by using the  **pg\_stat\_database**  parameter.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   If this parameter is set to  **on**, the collection function is enabled. In this case, the collector repeatedly queries the operating system at the current time. As a result, large number of costs may occur on some platforms. Therefore, the default value is set to  **off**.
-   **off**  indicates that the statistics collection function is disabled.

**Default value**:  **off**

## track\_functions<a name="en-us_topic_0283136895_en-us_topic_0237124727_en-us_topic_0059779313_s4088de04d7354ed4aaf8a8829340b952"></a>

**Parameter description:**  Collects statistics of the number and duration of function invocations.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>When the SQL functions are set to inline functions queried by the invoking, these SQL functions cannot be traced no matter these functions are set or not.

**Value range**: enumerated values

-   **pl**  indicates that only procedural language functions are traced.
-   **all**  indicates that SQL language functions area traced.
-   **none**  indicates that the function tracing function is disabled.

**Default value**:  **none**

## track\_activity\_query\_size<a name="en-us_topic_0283136895_en-us_topic_0237124727_en-us_topic_0059779313_sb3bdc911af0447d8aee56e6200ef505e"></a>

**Parameter description**: Specifies byte counts of the current running commands used to trace each active session.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 100 to 102400

**Default value:** **1024**

## stats\_temp\_directory<a name="en-us_topic_0283136895_en-us_topic_0237124727_en-us_topic_0059779313_sdeb1e45821844e389d3045f40f8ac427"></a>

**Parameter description**: Specifies the directory for storing temporary statistics. Only the sysadmin user can access this parameter.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>If a RAM-based file system directory is used, the actual I/O cost can be lowered and the performance can be improved.

**Value range**: a string

**Default value**:  **pg\_stat\_tmp**

## track\_thread\_wait\_status\_interval<a name="en-us_topic_0283136895_en-us_topic_0237124727_en-us_topic_0059779313_sfbda1f47f4054e80b4e8624bd56c448b"></a>

**Parameter description**: Specifies the interval of collecting the thread status information.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: 0 to 1 day. The unit is min.

**Default value**:  **30min**

## enable\_save\_datachanged\_timestamp<a name="en-us_topic_0283136895_en-us_topic_0237124727_section05051855154013"></a>

**Parameter description**: Specifies whether to record the time when  **INSERT**,  **UPDATE**,  **DELETE**, or  **EXCHANGE**/**TRUNCATE**/**DROP** **PARTITION**  is performed on table data.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the time when an operation is performed on table data will be recorded.
-   **off**  indicates that the time when an operation is performed on table data will not be recorded.

**Default value**:  **on**

## plan_collect_thresh
**Parameter description**:  Collects statistics about the plans that are being executed in each session.
This parameter is a SUSET parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).
**Value range**: an integer ranging from –1 to 2147483647 
-  **-1**: Plans that are being executed are not collected.
-  **0**: Plans that are being executed are collected before plan execution.
-  \>0: When the total number of tuples incrementally returned by all operators in a plan is greater than or equal to the value of this parameter, plans that are being executed are collected once.

**Default value**: 0

## track\_sql\_count<a name="en-us_topic_0283136895_en-us_topic_0237124727_section6524929122813"></a>

**Parameter description**: Collects statistics about the statements \(**SELECT**,  **INSERT**,  **UPDATE**,  **MERGE INTO**, and  **DELETE**\) that are being executed in a session.

In the x86-based centralized deployment scenario, the hardware configuration specifications are 32-core CPU and 256 GB memory. When the Benchmark SQL 5.0 tool is used to test performance, the performance fluctuates by about 0.8% by enabling or disabling this parameter.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the statistics collection function is enabled.
-   **off**  indicates that the auditing function is disabled.

**Default value**:  **on**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   The  **track\_sql\_count**  parameter is restricted by the  **track\_activities**  parameter when the  **gs\_sql\_count**  or  **pgxc\_sql\_count**  view is queried.
>    -   If  **track\_activities**  is set to  **on**  and  **track\_sql\_count**  is set to  **off**, a warning message indicating that  **track\_sql\_count**  is disabled will be displayed in logs when the  **gs\_sql\_count **view is queried.
>    -   If both  **track\_activities**  and  **track\_sql\_count**  are set to  **off**, two warning messages indicating that  **track\_activities**  is disabled and  **track\_sql\_count**  is disabled will be displayed in logs when the views are queried.
>    -   If  **track\_activities**  is set to  **off**  and  **track\_sql\_count**  is set to  **on**, a warning message indicating that  **track\_activities**  is disabled will be displayed in logs when the views are queried.
>-   If  **track\_sql\_count**  is set to  **off**, querying the  **gs\_sql\_count**  or  **pgxc\_sql\_count**  view returns  **0**.

