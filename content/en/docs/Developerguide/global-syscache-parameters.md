# Global SysCache Parameters<a name="EN-US_TOPIC_0000001242538051"></a>

## enable\_global\_syscache<a name="section97160555612"></a>

**Parameter description**: Specifies whether to enable the global system cache function. This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the global system cache function is enabled.
-   **off**  indicates that the global system cache function is disabled.

**Default value**:  **on**

You are advised to use this parameter together with the thread pool parameter. After this parameter is enabled, you are advised to set  **wal\_level**  of the standby nnode to  **hot\_standby**  or higher if you need to access the standby node.

## global\_syscache\_threshold<a name="section787511112134"></a>

**Parameter description**: Specifies the maximum memory usage of the global system cache.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

The  **enable\_global\_syscache**  parameter must be enabled.

**Value range**: an integer ranging from 16384 to 1073741824. The unit is KB.

**Default value**:  **163840**

Recommended calculation formula: The smaller value of the number of hot databases and the number of threads x Memory size allocated to each database.

That is,  **global\_syscache\_threshold**  =  **min\(count\(hot dbs\)**,  **count\(threads\)\)**  x  **memofdb**.

The number of hot databases refers to the number of frequently accessed databases. In thread pool mode, the number of threads is the sum of the number of threads in the thread pool and the number of background threads. In non-thread pool mode, the number of hot databases is used.

**memofdb**  indicates the average memory allocated to each database. The background noise memory of each database is 2 MB. Each time a table or index is added, 11 KB memory is added.

If this parameter is set to a small value, memory is frequently evicted, and a large number of memory fragments cannot be recycled. As a result, memory control fails.
