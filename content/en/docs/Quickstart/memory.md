# Memory<a name="EN-US_TOPIC_0251900927"></a>

This section describes memory parameters.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>These parameters take effect only after the database restarts.

## memorypool\_enable<a name="en-us_topic_0242371489_en-us_topic_0237124699_en-us_topic_0059777577_s630c23ad11044fafae4ed851bc89169a"></a>

**Parameter description**: Specifies whether to enable a memory pool.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the memory pool is enabled.
-   **off**  indicates that the memory pool is disabled.

**Default value**:  **off**

## memorypool\_size<a name="en-us_topic_0242371489_en-us_topic_0237124699_en-us_topic_0059777577_sd277355ba87045b6b802fef9f49f4725"></a>

**Parameter description**: Specifies the memory pool size.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 128 x 1024 to  _INT\_MAX_/2. The unit is KB.

**Default value**:  **512MB**

## enable\_memory\_limit<a name="en-us_topic_0242371489_en-us_topic_0237124699_en-us_topic_0059777577_s2cf6c862bad443aea7e115ff83941f94"></a>

**Parameter description**: Specifies whether to enable the logical memory management module.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the logical memory management module is enabled.
-   **off**  indicates that the logical memory management module is disabled.

**Default value**:  **on**

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>If the result of  **max\_process\_memory**  -  **shared\_buffer**  -  **cstore\_buffers**  is less than 2 GB, openGauss forcibly sets  **enable\_memory\_limit**  to  **off**.

## max\_process\_memory<a name="en-us_topic_0242371489_en-us_topic_0237124699_en-us_topic_0059777577_sbebcee7acf2042dc8824982f22a2b4a8"></a>

**Parameter description**: Specifies the maximum physical memory of a database node.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 2 x 1024 x 1024 to  _INT\_MAX_. The unit is KB.

**Default value**: On the primary database node, the value is automatically calculated using the following formula: \(Physical memory\) x 0.6/\(1 + Number of primary nodes\). If the result is less than 2 GB, the value of 2 GB is used. On a standby or secondary database node, the value is 12 GB by default.

**Setting suggestions**:

On database nodes, the value of this parameter is determined based on the physical system memory and the number of primary database nodes. Parameter value = Physical memory size x Coefficient/Number of primary nodes. The recommended coefficient is  **0.8**. This coefficient is used to reserve memory for the OS kernel. It prevents node OOM caused by memory usage bloat, ensuring system reliability. Set a smaller coefficient when the amount of physical memory of a node is smaller. For example, set the coefficient to  **0.9**  for a node with 128 GB physical memory, and  **0.7**  for a node with 32 GB physical memory.

## enable\_memory\_context\_control<a name="en-us_topic_0242371489_en-us_topic_0237124699_section83355314353"></a>

**Parameter description**: Specifies whether to enable the function of checking whether the amount of memory contexts exceeds the specified limit. This parameter applies only to the DEBUG version.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the function of checking the amount of memory contexts is enabled.
-   **off**  indicates that the function of checking the amount of memory contexts is disabled.

**Default value**:  **off**

## uncontrolled\_memory\_context<a name="en-us_topic_0242371489_en-us_topic_0237124699_section93539377411"></a>

**Parameter description**: Specifies which memory texts will not be checked when the  **enable\_memory\_context\_control**  parameter is set to  **on**. This parameter applies only to the DEBUG version.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

During the query, the title meaning string "MemoryContext white list:" is added to the beginning of the parameter value.

**Value range**: a string

**Default value**: empty

## shared\_buffers<a name="en-us_topic_0242371489_en-us_topic_0237124699_en-us_topic_0059777577_s55a43fb6d0464430a59031671b37cd07"></a>

**Parameter description**: Specifies the size of shared memory used by openGauss. Increasing the value of this parameter causes openGauss to request more System V shared memory than the default configuration allows.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 16 to 1073741823. The unit is 8 KB.

The minimum value changes according to  **BLCKSZ**.

**Default value**: 1 GB on a database node. If the maximum value allowed by the OS is smaller than 32 MB, this parameter will be automatically changed to the maximum value allowed by the OS during the initialization of a data storage area.

**Setting suggestions**:

Set  **shared\_buffers**  to a value less than 40% of the memory. Set it to a large value for row-store tables and a small value for column-store tables. For column-store tables:  **shared\_buffers**  = \(Memory of a single server/Number of database nodes on the server\) x 0.4 x 0.25

If  **shared\_buffers**  is set to a larger value, increase the value of  **checkpoint\_segments**  because a longer period of time is required to write a large amount of new or changed data.

## bulk\_write\_ring\_size<a name="en-us_topic_0242371489_en-us_topic_0237124699_en-us_topic_0059777577_sa239f9a6b4234f04949abc3615970502"></a>

**Parameter description**: Specifies the size of a ring buffer used for parallel data import.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 16384 to 2147483647. The unit is KB.

**Default value**:  **2GB**

**Setting suggestions**: Increase the value of this parameter on database nodes if a huge amount of data will be imported.

## standby\_shared\_buffers\_fraction<a name="en-us_topic_0242371489_en-us_topic_0237124699_en-us_topic_0059777577_sfda2b709d047441cab1a59ac63bccb08"></a>

**Parameter description**: Specifies the  **shared\_buffers**  proportion used on the server where a standby instance is deployed.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a double-precision floating-point number ranging from 0.1 to 1.0

**Default value:** **0.3**

## temp\_buffers<a name="en-us_topic_0242371489_en-us_topic_0237124699_en-us_topic_0059777577_s2a60d22e5f524adbbf493dfe3a29a4c6"></a>

**Parameter description**: Specifies the maximum size of local temporary buffers used by a database session.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

This parameter can be modified only before the first use of temporary tables within each session. Subsequent attempts to change the value of this parameter will not take effect on that session.

A session allocates temporary buffers based on the value of  **temp\_buffers**. If a large value is set in a session that does not require many temporary buffers, only the overhead of one buffer descriptor is added. If a buffer is used, additional 8192 bytes will be consumed for it.

**Value range**: an integer ranging from 100 to 1073741823. The unit is 8 KB.

**Default value**:  **8MB**

## max\_prepared\_transactions<a name="en-us_topic_0242371489_en-us_topic_0237124699_en-us_topic_0059777577_s0baf9251722144d492151b31104dd73c"></a>

**Parameter description**: Specifies the maximum number of transactions that can stay in the  **prepared**  state simultaneously. Increasing the value of this parameter causes openGauss to request more System V shared memory than the default configuration allows.

When openGauss is deployed as an HA system, set this parameter on standby servers to a value greater than or equal to that on the primary server. Otherwise, queries will fail on the standby servers.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 536870911

**Default value**:  **800**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Set this parameter to a value greater than or equal to that of  **max\_connections**  to avoid failures in preparation.

## work\_mem<a name="en-us_topic_0242371489_en-us_topic_0237124699_en-us_topic_0059777577_sd27c81d651ce4d2585febca76c4cc34e"></a>

**Parameter description**: Specifies the amount of memory to be used by internal sort operations and hash tables before they write data into temporary disk files. Sort operations are required for  **ORDER BY**,  **DISTINCT**, and merge joins. Hash tables are used in hash joins, hash-based aggregation, and hash-based processing of  **IN**  subqueries.

In a complex query, several sort or hash operations may run in parallel; each operation will be allowed to use as much memory as this parameter specifies. If the memory is insufficient, data will be written into temporary files. In addition, several running sessions could be performing such operations concurrently. Therefore, the total memory used may be many times the value of  **work\_mem**.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 64 to 2147483647. The unit is KB.

**Default value**:  **64MB**

**Setting suggestions**:

If the physical memory specified by  **work\_mem**  is insufficient, additional operator calculation data will be written into temporary tables based on query characteristics and the degree of parallelism. This reduces performance by five to ten times, and prolongs the query response time from seconds to minutes.

-   For complex serial queries, each query requires five to ten associated operations. Set  **work\_mem**  using the following formula:  **work\_mem**  = 50% of the memory/10.
-   For simple serial queries, each query requires two to five associated operations. Set  **work\_mem**  using the following formula:  **work\_mem**  = 50% of the memory/5.
-   For concurrent queries, set  **work\_mem**  using the following formula:  **work\_mem**  =  **work\_mem**  for serial queries/Number of concurrent SQL statements.

## query\_mem<a name="en-us_topic_0242371489_en-us_topic_0237124699_en-us_topic_0059777577_section12283034151318"></a>

**Parameter description**: Specifies the memory used by a query. If the value of  **query\_mem**  is greater than 0, the optimizer adjusts the memory cost estimate to this value when generating an execution plan.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: 0 or an integer greater than 32 MB. The default unit is KB. If the value is set to a negative value or is less than 32 MB, the default value  **0**  is used. In this case, the optimizer does not adjust the estimated query memory.

**Default value**:  **0**

## query\_max\_mem<a name="en-us_topic_0242371489_en-us_topic_0237124699_section1258420917117"></a>

**Parameter description**: Specifies the maximum memory that can be used by a query. If the value of  **query\_max\_mem**  is greater than 0, an error is reported when the query memory usage exceeds the value.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: 0 or an integer greater than 32 MB. The default unit is KB. If the value is set to a negative value or a positive integer less than 32 MB, the default value  **0**  is used. In this case, the optimizer does not limit the query memory.

**Default value**:  **0**

## maintenance\_work\_mem<a name="en-us_topic_0242371489_en-us_topic_0237124699_en-us_topic_0059777577_s123a0cc8d6434028a6709bbfa876e8b0"></a>

**Parameter description:**  Specifies the maximum amount of memory to be used by maintenance operations, such as  **VACUUM**,  **CREATE INDEX**, and  **ALTER TABLE ADD FOREIGN KEY**. This parameter may affect the execution efficiency of  **VACUUM**,  **VACUUM FULL**,  **CLUSTER**, and  **CREATE INDEX**.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1024 to  _INT\_MAX_. The unit is KB.

**Default value**:  **128MB**

**Setting suggestions**:

-   The value of this parameter must be greater than that of  **[work\_mem](#en-us_topic_0242371489_en-us_topic_0237124699_en-us_topic_0059777577_sd27c81d651ce4d2585febca76c4cc34e)**  so that database dumps can be more quickly cleared or restored. In a database session, only one maintenance operation can be performed at a time. Maintenance is usually performed when there are not many running sessions.
-   When the  [Automatic Vacuuming](automatic-vacuuming.md#EN-US_TOPIC_0251900959)  process is running, up to  **[autovacuum\_max\_workers](automatic-vacuuming.md#en-us_topic_0242371520_en-us_topic_0237124730_en-us_topic_0059778244_s76932f79410248ba8923017d19982673)**  times this memory may be allocated. In this case, set  **maintenance\_work\_mem**  to a value greater than or equal to that of  **[work\_mem](#en-us_topic_0242371489_en-us_topic_0237124699_en-us_topic_0059777577_sd27c81d651ce4d2585febca76c4cc34e)**.
-   If a large amount of data is to be clustered, increase the value of this parameter in the session.

## psort\_work\_mem<a name="en-us_topic_0242371489_en-us_topic_0237124699_en-us_topic_0059777577_scb2890bc578f4811b63b341f7866057a"></a>

**Parameter description**: Specifies the memory capacity to be used for partial sorting in a column-store table before writing to temporary disk files. This parameter can be used for inserting tables with a partial cluster key or index, creating a table index, and deleting or updating a table.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>Several running sessions could be performing such operations concurrently. Therefore, the total memory used may be many times the value of  **psort\_work\_mem**.

**Value range**: an integer ranging from 64 to 2147483647. The unit is KB.

**Default value**:  **512MB**

## max\_loaded\_cudesc<a name="en-us_topic_0242371489_en-us_topic_0237124699_en-us_topic_0059777577_s180b94f02cee4806be39f36f8d2e2a28"></a>

**Parameter description**: Specifies the number of loaded CuDescs per column when a column-store table is scanned. Increasing the value will improve query performance and increase memory usage, particularly when there are many columns in the column-store table.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>If  **max\_loaded\_cudesc**  is set to a large value, memory may be insufficient.

**Value range**: 100 to 1073741823

**Default value:** **1024**

## max\_stack\_depth<a name="en-us_topic_0242371489_en-us_topic_0237124699_en-us_topic_0059777577_s7417ae6acda9409f8ff99365a0e8bb11"></a>

**Parameter description**: Specifies the maximum safe depth of the openGauss execution stack. The safety margin is required because the stack depth is not checked in every routine in the server, but only in key potentially-recursive routines, such as expression evaluation.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

When setting this parameter, comply with the following principles:

-   The database needs to reserve 640 KB stack depth. Therefore, the ideal setting for this parameter is the actual stack size limit enforced by the OS kernel \(as set by  **ulimit -s**\) minus 640 KB.
-   Setting this parameter to a value larger than the actual kernel limit means that a running recursive function may crash an individual backend process. In an OS, such as an SLES OS, where openGauss can determine the kernel limit, this parameter cannot be set to an unsafe value.
-   Since not all OSs provide this function, you are advised to set a specific value for this parameter.

**Value range**: an integer ranging from 100 to  _INT\_MAX_. The unit is KB.

**Default value**:  **2MB**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>**2MB**  is a small value and will hardly cause system breakdown, but may lead to execution failures of complex functions.

## cstore\_buffers<a name="en-us_topic_0242371489_en-us_topic_0237124699_en-us_topic_0059777577_s00a05d7c1a374988b114e167735a552d"></a>

**Parameter description**: Specifies the shared buffer size used in column-store tables.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 16384 to 1073741823. The unit is KB.

**Default value**:  **32768KB**

**Setting suggestions**:

Column-store tables use the shared buffer specified by  **cstore\_buffers**  instead of that specified by  **shared\_buffers**. When column-store tables are mainly used, reduce the value of  **shared\_buffers**  and increase that of  **cstore\_buffers**.

## bulk\_read\_ring\_size<a name="en-us_topic_0242371489_en-us_topic_0237124699_en-us_topic_0059777577_s43b2a38b07f647039f73f31d71db7b26"></a>

**Parameter description**: Specifies the ring buffer size used for parallel data export.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 256 to 2147483647. The unit is KB.

**Default value**:  **16MB**

