# LLVM<a name="EN-US_TOPIC_0000001225294477"></a>

Based on the query execution plan tree, with the library functions provided by the Low Level Virtual Machine \(LLVM\), openGauss moves the process of determining the actual execution path from the executor phase to the execution initialization phase. In this way, problems such as function calling, logic condition branch determination, and a large amount of data read that are related to the original query execution are avoided, to improve the query performance.

LLVM dynamic compilation can be used to generate customized machine code for each query to replace original common functions. Query performance is improved by reducing redundant judgment conditions and virtual function calls, and by making local data more accurate during actual queries.

LLVM needs to consume extra time to pre-generate intermediate representation \(IR\) and compile it into codes. Therefore, if the data volume is small or if a query itself consumes less time, the performance deteriorates.

## Application Scenarios<a name="en-us_topic_0283137499_en-us_topic_0237121504_en-us_topic_0066033419_section279430195545"></a>

-   Expressions supporting LLVM

    The query statements that contain the following expressions support LLVM optimization:

    1.  Case...when...
    2.  IN
    3.  Bool
        -   And
        -   Or
        -   Not

    4.  BooleanTest
        -   **IS\_NOT\_UNKNOWN**: corresponds to SQL statement IS NOT UNKNOWN.
        -   **IS\_UNKNOWN**: corresponds to SQL statement IS UNKNOWN.
        -   **IS\_TRUE**: corresponds to SQL statement IS TRUE.
        -   **IS\_NOT\_TRUE**: corresponds to SQL statement IS NOT TRUE.
        -   **IS\_FALSE**: corresponds to SQL statement IS FALSE.
        -   **IS\_NOT\_FALSE**: corresponds to SQL statement IS NOT FALSE.

    5.  NullTest
        -   IS\_NOT\_NULL
        -   IS\_NULL

    6.  Operator
    7.  Function
        -   lpad
        -   substring
        -   btrim
        -   rtrim
        -   length

    8.  Nullif

    Supported data types for expression computing are bool, tinyint, smallint, int, bigint, float4, float8, numeric, date, time, timetz, timestamp, timestamptz, interval, bpchar, varchar, text, and oid.

    Consider using LLVM only if expressions are used in the following content in a vectorized executor:  **filter**  in the  **Scan**  node;  **complicate hash condition**,  **hash join filter**, and  **hash join target**  in the  **Hash Join**  node;  **filter**  and  **join filter**  in the  **Nested Loop**  node;  **merge join filter**  and  **merge join target**  in the  **Merge Join**  node; and  **filter**  in the  **Group**  node.

-   Operators supporting LLVM

    1.  Join: HashJoin
    2.  Agg: HashAgg
    3.  Sort

    Where HashJoin supports only Hash Inner Join, and the corresponding hash cond supports comparisons between int4, bigint, and bpchar. HashAgg supports sum and avg operations of bigint and numeric data types. Group By statements supports int4, bigint, bpchar, text, varchar, timestamp, and count\(\*\) aggregation operation. Sort supports only comparisons between int4, bigint, numeric, bpchar, text, and varchar data types. Except the preceding operations, LLVM cannot be used. You can use the explain performance tool to check whether LLVM can be used.


## Non-applicable Scenarios<a name="en-us_topic_0283137499_en-us_topic_0237121504_en-us_topic_0066033419_section316931181001"></a>

-   LLVM does not apply to tables that have small amount of data.
-   Query jobs with a non-vectorized execution path cannot be generated.

## Other Factors Affecting LLVM Performance<a name="section8556103715396"></a>

The LLVM optimization effect depends on not only operations and computing in the database, but also the selected hardware environment.

-   Number of C functions called by expressions

    CodeGen does not implement full-expression calculation, that is, some expressions use CodeGen while others invoke original C code for calculation. In an entire calculation process, if the later calculation method plays a dominate role, using LLVM may deteriorate the performance. By setting  **log\_min\_message**  to  **DEBUG1**, you can view expressions that directly invoke C code.

-   Memory resources

    One of the key LLVM features is to ensure the locality of data, that is, data should be stored in registers as much as possible. Data loading should be reduced at the same time. Therefore, when using LLVM, value of  **work\_mem**  must be set as large as required to ensure that code is implemented in the memory. Otherwise, performance deteriorates.

-   Cost estimation

    LLVM realizes a simple cost estimation model. You can determine whether to use LLVM for the current node based on the tables involved in the node computing. If the optimizer underestimates the actual number of rows involved, gains cannot be achieved as expected. And vice versa.


## Suggestions for Using LLVM<a name="section9635192534019"></a>

Currently,  LLVM is enabled by default in the database kernel, and users can configure it as required. The overall suggestions are as follows:

1.  Set  **work\_mem**  to an appropriate value as large as possible. If much data is flushed to disks, you are advised to disable LLVM by setting  **enable\_codegen**  to  **off**.
2.  Set  **codegen\_cost\_threshold**  to an appropriate value \(the default value is  **10000**\). Ensure that LLVM is not used when the data volume is small. After  **codegen\_cost\_threshold**  is set, the database performance may deteriorate due to the use of LLVM. In this case, you are advised to increase the parameter value.
3.  If a large number of C functions are called, you are advised not to use the LLVM function.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >If resources are robust, the larger the data volume is, the better the performance improvement is.


