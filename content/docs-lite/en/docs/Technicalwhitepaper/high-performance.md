# High Performance<a name="EN-US_CONCEPT_0289895657"></a>

## CBO Optimizer<a name="en-us_concept_0283139011_section191361958173919"></a>

The openGauss optimizer is a typical Cost-based Optimization \(CBO\). By using CBO, the database calculates the number of tuples and the execution cost for each execution step under each execution plan based on the number of table tuples, column width, NULL record ratio, and characteristic values, such as distinct, MCV, and HB values, and certain cost calculation methods. The database then selects the execution plan that takes the lowest cost for the overall execution or for the return of the first tuple.

The CBO optimizer can select the most efficient execution plan among multiple plans based on the cost to meet customer service requirements to the maximum extent.

## Hybrid Row-Column Storage<a name="en-us_concept_0283139011_section238822244016"></a>

openGauss supports both the row-store and column-store models. Users can choose a row-store or column-store table based on their needs.

Column-store is recommended if a table contains many columns \(called a wide table\) but its query involves only a few columns. Row-store is recommended if a table contains only a few columns and a query involves most of the columns.

[Figure 1](#en-us_concept_0283139011_en-us_topic_0242724708_fig4487133722819)  shows the column-store model.

**Figure  1**  Column-store<a name="en-us_concept_0283139011_en-us_topic_0242724708_fig4487133722819"></a>  
![](figures/column-store.png "column-store")

In a wide table containing a huge amount of data, a query usually only involves certain columns. In this case, the query performance of the row-store engine is poor. For example, a single table containing the data of a meteorological agency has 200 to 800 columns. Among these columns, only 10 are frequently accessed. In this case, the vectorized execution technology and column-store engine can significantly improve performance by saving storage space.

Row-store tables and column-store tables have their own advantages and disadvantages. You are advised to select a table based on the site requirements.

-   Row-store table

    Row-store tables are created by default. Data is stored by row. Row-store supports adding, deleting, modifying, and querying data of a complete row. Therefore, this storage model applies to scenarios where data needs to be updated frequently.

-   Column-store table

    Data is stored by column. The I/O of data query in a single column is small, and column-store tables occupy less storage space than row-store tables. This storage model applies to scenarios where data is inserted in batches, less updated, and queried for statistical analysis. The performance of single point query and single record insertion in a column-store table is poor.


The principles for selecting row-store and column-store tables are as follows:

-   Update frequency

    If data is frequently updated, use a row-store table.

-   Data insertion frequency

    If a small amount of data is frequently inserted each time, use a row-store table. If a large amount of data is inserted at a time, use a column-store table.

-   Number of columns

    If a table is to contain many columns, use a column-store table.

-   Number of columns to be queried

    If only a small number of columns \(less than 50% of the total\) is queried each time, use a column-store table.

-   Compression ratio

    The compression ratio of a column-store table is higher than that of a row-store table. High compression ratio consumes more CPU resources.


## In-place Update Storage<a name="section11892054124413"></a>

The in-place update storage engine solves the problems of space expansion and large tuples of the Append update storage engine. The design of efficient rollback segments is the basis of the in-place update storage engine.

## Xlog Lockless Update and Parallel Page Playback<a name="section18905074613"></a>

**Figure  2**  Xlog lock less Design<a name="fig7888181774615"></a>  
![](figures/xlog-lock-less-design.png "xlog-lock-less-design")

This feature optimizes the WalInsertLock mechanism by using log sequence numbers \(LSNs\) and log record counts \(LRCs\) to record the copy progress of each backend and canceling the WalInsertLock mechanism. The backend can directly copy logs to the WalBuffer without contending for the WalInsertLock. In addition, a dedicated WALWriter thread is used to write logs, and the backend thread does not need to ensure the Xlog flushing. After the preceding optimization, the WalInsertLock contention and WalWriter dedicated disk write threads are canceled. The system performance can be further improved while the original XLog function remains unchanged. This feature optimizes the Ustore in-place update WALs and Ustore DML operation parallel playback and distribution. Prefixes and suffixes are used to reduce the update WALs. The playback thread is divided into multiple types to solve the problem that most Ustore DML WALs are replayed on multiple pages. In addition, the Ustore data page playback is distributed based on blkno to improve the degree of parallel playback.

## Adaptive Compression<a name="en-us_concept_0283139011_section165674464017"></a>

Currently, mainstream databases usually use the data compression technology. Various compression algorithms are used for different data types. If pieces of data of the same type have different characteristics, their compression algorithms and results will also be different. Adaptive compression chooses the suitable compression algorithm for data based on the data type and characteristics, achieving high performance in compression ratio, import, and query.

Importing and frequently querying a huge amount of data are the main application scenarios. When you import data, adaptive compression greatly reduces the data volume, increases I/O operation efficiency several times, and clusters data before storage, achieving fast data import. In this way, only a small number of I/O operations is required and data is quickly decompressed in a query. Data can be quickly retrieved and the query result is quickly returned.

Currently, the database has implemented various compression algorithms, including RLE, DELTA, BYTEPACK/BITPACK, LZ4, ZLIB, and LOCAL DICTIONARY. The following table lists data types and the compression algorithms suitable for them.

<a name="en-us_concept_0283139011_en-us_concept_0238164467_table57174405"></a>
<table><thead align="left"><tr id="en-us_concept_0283139011_en-us_concept_0238164467_row37135808"><th class="cellrowborder" valign="top" width="30.930000000000007%" id="mcps1.1.8.1.1"><p id="en-us_concept_0283139011_en-us_concept_0238164467_p55210503"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p55210503"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p55210503"></a>-</p>
</th>
<th class="cellrowborder" valign="top" width="8.250000000000002%" id="mcps1.1.8.1.2"><p id="en-us_concept_0283139011_en-us_concept_0238164467_p42865721"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p42865721"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p42865721"></a>RLE</p>
</th>
<th class="cellrowborder" valign="top" width="10.31%" id="mcps1.1.8.1.3"><p id="en-us_concept_0283139011_en-us_concept_0238164467_p49571392"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p49571392"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p49571392"></a>DELTA</p>
</th>
<th class="cellrowborder" valign="top" width="16.490000000000002%" id="mcps1.1.8.1.4"><p id="en-us_concept_0283139011_en-us_concept_0238164467_p55859844"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p55859844"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p55859844"></a>BITPACK/BYTEPACK</p>
</th>
<th class="cellrowborder" valign="top" width="9.280000000000001%" id="mcps1.1.8.1.5"><p id="en-us_concept_0283139011_en-us_concept_0238164467_p28353516"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p28353516"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p28353516"></a>LZ4</p>
</th>
<th class="cellrowborder" valign="top" width="10.31%" id="mcps1.1.8.1.6"><p id="en-us_concept_0283139011_en-us_concept_0238164467_p14933473"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p14933473"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p14933473"></a>ZLIB</p>
</th>
<th class="cellrowborder" valign="top" width="14.430000000000003%" id="mcps1.1.8.1.7"><p id="en-us_concept_0283139011_en-us_concept_0238164467_p1651786"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p1651786"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p1651786"></a>LOCAL DICTIONARY</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_concept_0283139011_en-us_concept_0238164467_row66685840"><td class="cellrowborder" valign="top" width="30.930000000000007%" headers="mcps1.1.8.1.1 "><p id="en-us_concept_0283139011_en-us_concept_0238164467_p32843930"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p32843930"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p32843930"></a>Smallint/int/bigint/Oid</p>
<p id="en-us_concept_0283139011_en-us_concept_0238164467_p27159916"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p27159916"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p27159916"></a>Decimal/real/double</p>
<p id="en-us_concept_0283139011_en-us_concept_0238164467_p43112656"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p43112656"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p43112656"></a>Money/time/date/</p>
<p id="en-us_concept_0283139011_en-us_concept_0238164467_p52469592"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p52469592"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p52469592"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="8.250000000000002%" headers="mcps1.1.8.1.2 "><p id="en-us_concept_0283139011_en-us_concept_0238164467_p22178556"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p22178556"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p22178556"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.3 "><p id="en-us_concept_0283139011_en-us_concept_0238164467_p51632641"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p51632641"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p51632641"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="16.490000000000002%" headers="mcps1.1.8.1.4 "><p id="en-us_concept_0283139011_en-us_concept_0238164467_p21494415"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p21494415"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p21494415"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="9.280000000000001%" headers="mcps1.1.8.1.5 "><p id="en-us_concept_0283139011_en-us_concept_0238164467_p63326029"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p63326029"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p63326029"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.6 "><p id="en-us_concept_0283139011_en-us_concept_0238164467_p29134691"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p29134691"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p29134691"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="14.430000000000003%" headers="mcps1.1.8.1.7 "><p id="en-us_concept_0283139011_en-us_concept_0238164467_p11099770"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p11099770"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p11099770"></a>-</p>
</td>
</tr>
<tr id="en-us_concept_0283139011_en-us_concept_0238164467_row32789069"><td class="cellrowborder" valign="top" width="30.930000000000007%" headers="mcps1.1.8.1.1 "><p id="en-us_concept_0283139011_en-us_concept_0238164467_p38668936"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p38668936"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p38668936"></a>Tinterval/interval/Time with time zone/</p>
</td>
<td class="cellrowborder" valign="top" width="8.250000000000002%" headers="mcps1.1.8.1.2 "><p id="en-us_concept_0283139011_en-us_concept_0238164467_p45176087"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p45176087"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p45176087"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.3 "><p id="en-us_concept_0283139011_en-us_concept_0238164467_p35384419"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p35384419"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p35384419"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="16.490000000000002%" headers="mcps1.1.8.1.4 "><p id="en-us_concept_0283139011_en-us_concept_0238164467_p47565651"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p47565651"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p47565651"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.280000000000001%" headers="mcps1.1.8.1.5 "><p id="en-us_concept_0283139011_en-us_concept_0238164467_p27612495"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p27612495"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p27612495"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.6 "><p id="en-us_concept_0283139011_en-us_concept_0238164467_p22019648"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p22019648"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p22019648"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="14.430000000000003%" headers="mcps1.1.8.1.7 "><p id="en-us_concept_0283139011_en-us_concept_0238164467_p38761102"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p38761102"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p38761102"></a>-</p>
</td>
</tr>
<tr id="en-us_concept_0283139011_en-us_concept_0238164467_row13305603"><td class="cellrowborder" valign="top" width="30.930000000000007%" headers="mcps1.1.8.1.1 "><p id="en-us_concept_0283139011_en-us_concept_0238164467_p4012071"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p4012071"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p4012071"></a>Numeric/char/varchar/text/nvarchar2</p>
<p id="en-us_concept_0283139011_en-us_concept_0238164467_p36108639"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p36108639"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p36108639"></a>and other supported data types</p>
</td>
<td class="cellrowborder" valign="top" width="8.250000000000002%" headers="mcps1.1.8.1.2 "><p id="en-us_concept_0283139011_en-us_concept_0238164467_p39118642"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p39118642"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p39118642"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.3 "><p id="en-us_concept_0283139011_en-us_concept_0238164467_p14493442"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p14493442"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p14493442"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="16.490000000000002%" headers="mcps1.1.8.1.4 "><p id="en-us_concept_0283139011_en-us_concept_0238164467_p33118134"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p33118134"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p33118134"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="9.280000000000001%" headers="mcps1.1.8.1.5 "><p id="en-us_concept_0283139011_en-us_concept_0238164467_p65323191"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p65323191"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p65323191"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.6 "><p id="en-us_concept_0283139011_en-us_concept_0238164467_p56687084"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p56687084"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p56687084"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="14.430000000000003%" headers="mcps1.1.8.1.7 "><p id="en-us_concept_0283139011_en-us_concept_0238164467_p28251069"><a name="en-us_concept_0283139011_en-us_concept_0238164467_p28251069"></a><a name="en-us_concept_0283139011_en-us_concept_0238164467_p28251069"></a>√</p>
</td>
</tr>
</tbody>
</table>

For example, large integer compression of mobile number-like character strings, large integer compression of the numeric type, and adjustment of the compression algorithm compression level are supported.

## Partition<a name="en-us_concept_0283139011_section179995312414"></a>

In the openGauss system, data is partitioned horizontally in an instance using a specified policy. This operation splits a table into multiple partitions that are not overlapped.

In common scenarios, a partitioned table has the following advantages over a common table:

-   High query performance: You can specify partitions when querying partitioned tables, improving query efficiency.
-   High availability: If a certain partition in a partitioned table is faulty, data in the other partitions is still available.
-   Easy maintenance: To fix a partitioned table having a faulty partition, you only need to fix the partition.
-   Balanced I/O: Partitions can be mapped to different disks to balance I/O and improve the overall system performance.

Currently, openGauss supports range partitioned tables, list partitioned tables, and hash partitioned tables.

-   In a range partitioned table, data within a certain range is mapped to each partition. The range is determined by the partition key specified when the partitioned table is created. This partitioning mode is most commonly used.

    With the range partitioning function, the database divides a record, which is to be inserted into a table, into multiple ranges using one or multiple columns and creates a partition for each range to store data. Partition ranges do not overlap.

-   In a list partitioned table, data is mapped to each partition based on the key values contained in each partition. The key values contained in a partition are specified when the partition is created.

    The list partitioning function divides the key values in the records to be inserted into a table into multiple lists \(the lists do not overlap in different partitions\) based on a column of the table, and then creates a partition for each list to store the corresponding data.

-   In a hash partitioned table, data is mapped to each partition using the hash algorithm, and each partition stores records with the same hash value.

    The hash partitioning function uses the internal hash algorithm to divide records to be inserted into a table into partitions based on a column of the table.


If you specify the  **PARTITION**  parameter when running the  **CREATE TABLE**  statement, data in the table will be partitioned.

Users can modify partition keys as needed during table creation to make the query result stored in the same or least partitions \(called partition pruning\), so as to obtain consecutive I/O to improve the query performance.

In actual services, time is often used as a filter criterion for query objects. Therefore, you can select the time column as the partition key. The key value range can be adjusted based on the total data volume and the data volume queried at a time.

## SQL by pass<a name="en-us_concept_0283139011_section35179210428"></a>

In a typical OLTP scenario, simple queries account for a large proportion. This type of queries involves only single tables and simple expressions. To accelerate such query, the SQL bypass framework is proposed. After simple mode judgment is performed on such query at the parse layer, the query enters a special execution path and skips the classic execution framework, including operator initialization and execution, expression, and projection. Instead, it directly rewrites a set of simple execution paths and directly invokes storage APIs, greatly accelerating the execution of simple queries.

## Kunpeng NUMA Architecture Optimization<a name="en-us_concept_0283139011_section1133517227426"></a>

The following figure shows the Kunpeng NUMA architecture optimization.

**Figure  3**  Kunpeng NUMA architecture optimization<a name="en-us_concept_0283139011_fig1684262417126"></a>  
![](figures/kunpeng-numa-architecture-optimization.png "kunpeng-numa-architecture-optimization")

1.  Based on the multi-core NUMA architecture of the Kunpeng processor, openGauss optimizes the NUMA architecture to reduce the cross-core memory access latency and maximize the multi-core Kunpeng computing capability. The key technologies include redo log batch insertion, NUMA distribution of hotspot data, and Clog partitions, greatly improving the processing performance of the TP system.
2.  Based on the ARMv8.1 architecture used by the Kunpeng chip, openGauss uses the LSE instruction set to implement efficient atomic operations, effectively improving the CPU usage, multi-thread synchronization performance, and XLog write performance.
3.  Based on the wider L3 cache line provided by the Kunpeng chip, openGauss optimizes hotspot data access, effectively improving the cache access hit ratio, reducing the cache consistency maintenance overhead, and greatly improving the overall data access performance of the system.

## High Concurrency of the Thread Pool<a name="en-us_concept_0283138983_section166741219583"></a>

In the OLTP field, a database needs to process a large quantity of client connections. Therefore, the processing capability in high-concurrency scenarios is one of the important capabilities of the database.

The simplest processing mode for external connections is the per-thread-per-connection mode, in which a user connection generates a thread. This mode features simple processing thanks to its architecture. However, in high-concurrency scenarios, there are too many threads, causing heavy workload in thread switchover and large conflict between the lightweight lock areas of the database. As a result, the performance \(throughput\) deteriorates sharply and the SLA of user performance cannot be met.

Therefore, a thread resource pooling and reuse technology needs to be used to resolve this problem. The overall design idea of the thread pool technology is to pool thread resources and reuse them among different connections. After the system is started, a fixed number of working threads are started based on the current number of cores or user configuration. A working thread serves one or more connection sessions. In this way, the session and thread are decoupled. The number of worker threads is fixed. Therefore, frequent thread switchover does not occur in case of high concurrency. The database layer schedules and manages sessions.

## Parallel Query<a name="section660434916519"></a>

The Symmetric Multi-Processing \(SMP\) parallel technology of openGauss uses the multi-core CPU architecture of a computer to implement multi-thread parallel computing, fully using CPU resources to improve query performance. In complex query scenarios, a single query execution takes long time and the system concurrency is low. Therefore, the SMP parallel execution technology is used to implement operator-level parallel execution, which effectively reduces the query execution time and improves the query performance and resource utilization. The overall implementation of the SMP parallel technology is as follows: For query operators that can be executed in parallel, data is sliced, multiple working threads are started for computation, and then the results are summarized and returned to the frontend. The data interaction operator  **Stream**  is added to SMP parallel execution to implement data interaction between multiple working threads, ensuring the correctness of the query and completing the overall query.

