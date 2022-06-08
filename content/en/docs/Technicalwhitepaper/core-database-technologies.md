# Core Database Technologies<a name="EN-US_CONCEPT_0252569318"></a>
<!-- TOC -->

- [Basic Functions Oriented to Application Development](#Basic Functions Oriented to Application Development)
- [High Performance](#high-performance)
- [High Scalability](#high-scalability)
- [HA](#ha)
- [Maintainability](#maintainability)
- [Database Security](#database-security)
- [AI Capabilities](#ai-capabilities)

<!-- /TOC -->

## Basic Functions Oriented to Application Development

- Standard SQL

  openGauss supports standard SQL statements. The SQL standard is an international standard and is updated periodically. SQL standards are classified into core features and optional features. Most databases do not fully support SQL standards. SQL features are built by database vendors to maintain customers and push up application migration costs. New SQL features are increasingly different among vendors. Currently, there is no authoritative SQL standard test.

  openGauss supports most of the SQL:2011 core features and some optional features. For details about the feature list, see "SQL Reference \> SQL Syntax" in the  _Developer Guide_.

  The introduction of standard SQL provides a unified SQL interface for all database vendors, reducing the learning costs of users and openGauss application migration costs.

- Standard Development Interfaces

  Standard ODBC and JDBC interfaces are provided to ensure quick migration of user services to openGauss.

  Currently, the standard ODBC 3.5 and JDBC 4.0 interfaces are supported. The ODBC interface supports SUSE Linux, Windows 32-bit, and Windows 64-bit platforms. The JDBC interface supports all platforms.

- Multiple Storage Engines

  openGauss is based on the unified transaction mechanism, log system, concurrency control system, metadata information, and cache management, provides Table Access Method API, and supports different storage engines.

  Currently, the Astore and Ustore storage engines are supported.

- Transaction Support

  Transaction support refers to the system capability to ensure the atomicity, consistency, isolation, and durability \(ACID\) features of global transactions.

  Transaction support and data consistency assurance are the basic functions of most databases and the prerequisites for a database to satisfy transaction-based application requirements.

  - Atomicity

    A transaction is comprised of an indivisible unit of work. Operations performed in a transaction must be all finished or have not been performed.

  - Consistency

    Transactions must be consistent within a system no matter when or how many concurrent transactions are ongoing.

  - Isolation

    Transactions are isolated for execution, as if each of them is the only operation performed during the specified period planned by the system. If there are two transactions that are executed within the same period of time and performing the same function, the transaction isolation makes each of them regard itself as the only transaction using the system.

  - Durability

    After a transaction is complete, the changes made by the transaction to the database are permanently stored in the database and will not be rolled back.

  The default transaction isolation level is READ COMMITTED, ensuring no dirty data will be read.

  Transactions are categorized into single-statement transactions and transaction blocks. Their basic interfaces are as follows:

  -   Start transaction;
  -   Commit;
  -   Rollback;

  Set transaction \(used for setting the isolation level, read/write mode, and delay mode\). For details about the syntax, see the  _Developer Guide_.

- Support for Functions and Stored Procedures

  Functions are important database objects. They encapsulate SQL statement sets used for certain functions so that the statements can be easily invoked.

  A stored procedure is a combination of SQL and PL/SQL. Stored procedures can move the code that executes business rules from the application to the database. Therefore, the code storage can be used by multiple programs at a time.

  1.  Allows customers to modularize program design and encapsulate SQL statement sets, easy to invoke.
  2.  Caches the compilation results of stored procedures to accelerate SQL statement set execution.
  3.  Allows system administrators to restrict the permission for executing a specific stored procedure and controls access to the corresponding type of data. This prevents access from unauthorized users and ensures data security.
  4.  To process SQL statements, the stored procedure process assigns a memory fragment to store context association. Cursors are handles or pointers to context areas. With cursors, stored procedures can control alterations in context areas.
  5.  Six levels of exception information are supported to facilitate the debugging of stored procedures. Stored procedure debugging is a debugging method. During the development of a stored procedure, you can trace the process executed by the stored procedure step by step and find the error cause or program bug based on the variable value to improve the fault locating efficiency. You can set breakpoints and perform independent debugging.

  openGauss supports functions and stored procedures in the SQL standard, which enhances the usability of stored procedures. For details about how to use the stored procedures, see the  _Developer Guide_.

- PG Interface Compatibility

  Compatible with PostgreSQL clients and interfaces.

- SQL Hints

  SQL hints are supported, which can override any execution plan and thus improve SQL query performance.

  In plan hints, you can specify a join order; join, stream, and scan operations; and the number of rows in a result to tune an execution plan, improving query performance.

- Copy Interface for Error Tolerance

  openGauss provides the encapsulated copy error tables for creating functions and allows users to specify error tolerance options when using the  **Copy From**  statement. In this way, errors related to parsing, data format, and character set during the execution of the  **Copy From**  statement are recorded in the error table instead of being reported and interrupted. Even if a small amount of data in the target file of  **Copy From**  is incorrect, the data can be imported to the database. You can locate and rectify the fault in the error table later.

## High Performance

### CBO Optimizer<a name="section1056021019542"></a>

The openGauss optimizer is a typical Cost-based Optimization \(CBO\). By using CBO, the database calculates the number of tuples and the execution cost for each execution step under each execution plan based on the number of table tuples, column width, NULL record ratio, and characteristic values, such as distinct, MCV, and HB values, and certain cost calculation methods. The database then selects the execution plan that takes the lowest cost for the overall execution or for the return of the first tuple.

The CBO optimizer can select the most efficient execution plan among multiple plans based on the cost to meet customer service requirements to the maximum extent.

### Hybrid Row-Column Storage<a name="section489210341544"></a>

openGauss supports both row-store and column-store models. Users can choose a row-store or column-store table based on their needs.

Column-store is recommended if a table contains many columns \(called a wide table\) but its query involves only a few columns. Row-store is recommended if a table contains only a few columns and a query involves most of the columns.

[Figure 1](#en-us_topic_0242724708_fig4487133722819)  shows the column-store model.

**Figure  1**  Column-store<a name="en-us_topic_0242724708_fig4487133722819"></a>  
<img src="figures/column-store.png" title="column-store" style="zoom:67%;" />

In a wide table containing a huge amount of data, a query usually only includes certain columns. In this case, the query performance of the row-store engine is poor. For example, a single table containing the data of a meteorological agency has 200 to 800 columns. Among these columns, only 10 are frequently accessed. In this case, a vectorized execution and column-store engine can significantly improve performance by saving storage space.

Row-store tables and column-store tables have their own advantages and disadvantages. You are advised to select a table based on the site requirements.

-   Row-store table

    Row-store tables are created by default. Data is stored by row. Row-store supports adding, deleting, modifying, and querying data of a complete row. Therefore, this storage model applies to scenarios where data needs to be updated frequently.

-   Column-store table

    Data is stored by column. The I/O of data query in a single column is small, and column-store tables occupy less storage space than row-store tables. This storage model applies to scenarios where data is inserted in batches, less updated, and queried for statistical analysis. The performance of single point query and single record insertion in a column-store table is poor.


The principles for selecting row-store and column-store tables are as follows:

-   Update frequency

    If data is frequently updated, use a row-store table.

-   Insert frequency

    If a small amount of data is frequently inserted each time, use a row-store table. If a large amount of data is inserted at a time, use column storage.

-   Number of columns

    If a table is to contain many columns, use a column-store table.

-   Number of columns to be queried

    If only a small number of columns \(less than 50% of the total\) is queried each time, use a column-store table.

-   Compression ratio

    The compression ratio of a column-store table is higher than that of a row-store table. The higher the compression ratio is, the more CPU resources will be consumed.

### In-place Upate Storage<a name="section11892054124413"></a>

The in-place update storage engine solves the problems of space expansion and large tuples of the Append update storage engine. The design of efficient rollback segments is the basis of the in-place update storage engine.

### Xlog Lockless Update and Parallel Page Playback<a name="section18905074613"></a>

**Figure  2**  Xlog lock less Design<a name="fig7888181774615"></a>  
![](figures/xlog-lock-less-design.png "xlog-lock-less-design")

This feature optimizes the WalInsertLock mechanism by using log sequence numbers \(LSNs\) and log record counts \(LRCs\) to record the copy progress of each backend and canceling the WalInsertLock mechanism. The backend can directly copy logs to the WalBuffer without contending for the WalInsertLock. In addition, a dedicated WALWriter thread is used to write logs, and the backend thread does not need to ensure the Xlog flushing. After the preceding optimization, the WalInsertLock contention and WalWriter dedicated disk write threads are canceled. The system performance can be further improved while the original XLog function remains unchanged. This feature optimizes the Ustore in-place update WALs and Ustore DML operation parallel playback and distribution. Prefixes and suffixes are used to reduce the update WALs. The playback thread is divided into multiple types to solve the problem that most Ustore DML WALs are replayed on multiple pages. In addition, the Ustore data page playback is distributed based on blkno to improve the degree of parallel playback.

### Adaptive Compression<a name="section146050573546"></a>

Currently, mainstream databases usually use the data compression technology. Various compression algorithms are used for different data types. If pieces of data of the same type have different characteristics, their compression algorithms and results will also be different. Adaptive compression chooses the suitable compression algorithm for data based on the data type and characteristics, achieving high performance in compression ratio, import, and query.

Importing and frequently querying a huge amount of data are the main application scenarios. When you import data, adaptive compression greatly reduces the data volume, increases I/O operation efficiency several times, and clusters data before storage, achieving fast data import. In this way, only a small number of I/O operations is required and data is quickly decompressed in a query. Data can be quickly retrieved and the query result is quickly returned.

Currently, the database has implemented various compression algorithms, including RLE, DELTA, BYTEPACK/BITPACK, LZ4, ZLIB, and LOCAL DICTIONARY. The following table lists data types and the compression algorithms suitable for them.

<a name="en-us_concept_0238164467_table57174405"></a>
<table><thead align="left"><tr id="en-us_concept_0238164467_row37135808"><th class="cellrowborder" valign="top" width="30.930000000000007%" id="mcps1.1.8.1.1"><p id="en-us_concept_0238164467_p55210503"><a name="en-us_concept_0238164467_p55210503"></a><a name="en-us_concept_0238164467_p55210503"></a>-</p>
</th>
<th class="cellrowborder" valign="top" width="8.250000000000002%" id="mcps1.1.8.1.2"><p id="en-us_concept_0238164467_p42865721"><a name="en-us_concept_0238164467_p42865721"></a><a name="en-us_concept_0238164467_p42865721"></a>RLE</p>
</th>
<th class="cellrowborder" valign="top" width="10.31%" id="mcps1.1.8.1.3"><p id="en-us_concept_0238164467_p49571392"><a name="en-us_concept_0238164467_p49571392"></a><a name="en-us_concept_0238164467_p49571392"></a>DELTA</p>
</th>
<th class="cellrowborder" valign="top" width="16.490000000000002%" id="mcps1.1.8.1.4"><p id="en-us_concept_0238164467_p55859844"><a name="en-us_concept_0238164467_p55859844"></a><a name="en-us_concept_0238164467_p55859844"></a>BITPACK/BYTEPACK</p>
</th>
<th class="cellrowborder" valign="top" width="9.280000000000001%" id="mcps1.1.8.1.5"><p id="en-us_concept_0238164467_p28353516"><a name="en-us_concept_0238164467_p28353516"></a><a name="en-us_concept_0238164467_p28353516"></a>LZ4</p>
</th>
<th class="cellrowborder" valign="top" width="10.31%" id="mcps1.1.8.1.6"><p id="en-us_concept_0238164467_p14933473"><a name="en-us_concept_0238164467_p14933473"></a><a name="en-us_concept_0238164467_p14933473"></a>ZLIB</p>
</th>
<th class="cellrowborder" valign="top" width="14.430000000000003%" id="mcps1.1.8.1.7"><p id="en-us_concept_0238164467_p1651786"><a name="en-us_concept_0238164467_p1651786"></a><a name="en-us_concept_0238164467_p1651786"></a>LOCAL DICTIONARY</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_concept_0238164467_row66685840"><td class="cellrowborder" valign="top" width="30.930000000000007%" headers="mcps1.1.8.1.1 "><p id="en-us_concept_0238164467_p32843930"><a name="en-us_concept_0238164467_p32843930"></a><a name="en-us_concept_0238164467_p32843930"></a>Smallint/int/bigint/Oid</p>
<p id="en-us_concept_0238164467_p27159916"><a name="en-us_concept_0238164467_p27159916"></a><a name="en-us_concept_0238164467_p27159916"></a>Decimal/real/double</p>
<p id="en-us_concept_0238164467_p43112656"><a name="en-us_concept_0238164467_p43112656"></a><a name="en-us_concept_0238164467_p43112656"></a>Money/time/date/</p>
<p id="en-us_concept_0238164467_p52469592"><a name="en-us_concept_0238164467_p52469592"></a><a name="en-us_concept_0238164467_p52469592"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="8.250000000000002%" headers="mcps1.1.8.1.2 "><p id="en-us_concept_0238164467_p22178556"><a name="en-us_concept_0238164467_p22178556"></a><a name="en-us_concept_0238164467_p22178556"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.3 "><p id="en-us_concept_0238164467_p51632641"><a name="en-us_concept_0238164467_p51632641"></a><a name="en-us_concept_0238164467_p51632641"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="16.490000000000002%" headers="mcps1.1.8.1.4 "><p id="en-us_concept_0238164467_p21494415"><a name="en-us_concept_0238164467_p21494415"></a><a name="en-us_concept_0238164467_p21494415"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="9.280000000000001%" headers="mcps1.1.8.1.5 "><p id="en-us_concept_0238164467_p63326029"><a name="en-us_concept_0238164467_p63326029"></a><a name="en-us_concept_0238164467_p63326029"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.6 "><p id="en-us_concept_0238164467_p29134691"><a name="en-us_concept_0238164467_p29134691"></a><a name="en-us_concept_0238164467_p29134691"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="14.430000000000003%" headers="mcps1.1.8.1.7 "><p id="en-us_concept_0238164467_p11099770"><a name="en-us_concept_0238164467_p11099770"></a><a name="en-us_concept_0238164467_p11099770"></a>-</p>
</td>
</tr>
<tr id="en-us_concept_0238164467_row32789069"><td class="cellrowborder" valign="top" width="30.930000000000007%" headers="mcps1.1.8.1.1 "><p id="en-us_concept_0238164467_p38668936"><a name="en-us_concept_0238164467_p38668936"></a><a name="en-us_concept_0238164467_p38668936"></a>Tinterval/interval/Time with time zone/</p>
</td>
<td class="cellrowborder" valign="top" width="8.250000000000002%" headers="mcps1.1.8.1.2 "><p id="en-us_concept_0238164467_p45176087"><a name="en-us_concept_0238164467_p45176087"></a><a name="en-us_concept_0238164467_p45176087"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.3 "><p id="en-us_concept_0238164467_p35384419"><a name="en-us_concept_0238164467_p35384419"></a><a name="en-us_concept_0238164467_p35384419"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="16.490000000000002%" headers="mcps1.1.8.1.4 "><p id="en-us_concept_0238164467_p47565651"><a name="en-us_concept_0238164467_p47565651"></a><a name="en-us_concept_0238164467_p47565651"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="9.280000000000001%" headers="mcps1.1.8.1.5 "><p id="en-us_concept_0238164467_p27612495"><a name="en-us_concept_0238164467_p27612495"></a><a name="en-us_concept_0238164467_p27612495"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.6 "><p id="en-us_concept_0238164467_p22019648"><a name="en-us_concept_0238164467_p22019648"></a><a name="en-us_concept_0238164467_p22019648"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="14.430000000000003%" headers="mcps1.1.8.1.7 "><p id="en-us_concept_0238164467_p38761102"><a name="en-us_concept_0238164467_p38761102"></a><a name="en-us_concept_0238164467_p38761102"></a>-</p>
</td>
</tr>
<tr id="en-us_concept_0238164467_row13305603"><td class="cellrowborder" valign="top" width="30.930000000000007%" headers="mcps1.1.8.1.1 "><p id="en-us_concept_0238164467_p4012071"><a name="en-us_concept_0238164467_p4012071"></a><a name="en-us_concept_0238164467_p4012071"></a>Numeric/char/varchar/text/nvarchar2</p>
<p id="en-us_concept_0238164467_p36108639"><a name="en-us_concept_0238164467_p36108639"></a><a name="en-us_concept_0238164467_p36108639"></a>and other supported data types</p>
</td>
<td class="cellrowborder" valign="top" width="8.250000000000002%" headers="mcps1.1.8.1.2 "><p id="en-us_concept_0238164467_p39118642"><a name="en-us_concept_0238164467_p39118642"></a><a name="en-us_concept_0238164467_p39118642"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.3 "><p id="en-us_concept_0238164467_p14493442"><a name="en-us_concept_0238164467_p14493442"></a><a name="en-us_concept_0238164467_p14493442"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="16.490000000000002%" headers="mcps1.1.8.1.4 "><p id="en-us_concept_0238164467_p33118134"><a name="en-us_concept_0238164467_p33118134"></a><a name="en-us_concept_0238164467_p33118134"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="9.280000000000001%" headers="mcps1.1.8.1.5 "><p id="en-us_concept_0238164467_p65323191"><a name="en-us_concept_0238164467_p65323191"></a><a name="en-us_concept_0238164467_p65323191"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="10.31%" headers="mcps1.1.8.1.6 "><p id="en-us_concept_0238164467_p56687084"><a name="en-us_concept_0238164467_p56687084"></a><a name="en-us_concept_0238164467_p56687084"></a>√</p>
</td>
<td class="cellrowborder" valign="top" width="14.430000000000003%" headers="mcps1.1.8.1.7 "><p id="en-us_concept_0238164467_p28251069"><a name="en-us_concept_0238164467_p28251069"></a><a name="en-us_concept_0238164467_p28251069"></a>√</p>
</td>
</tr>
</tbody>
</table>

For example, large integer compression of mobile number-like character strings, large integer compression of the numeric type, and adjustment of the compression algorithm compression level are supported.

### Partition

In the openGauss system, data is partitioned horizontally on an instance using a specified policy. This operation splits a table into multiple partitions that are not overlapped.

In common scenarios, a partitioned table has the following advantages over a common table:

-   High query performance: You can specify partitions when querying partitioned tables, improving query efficiency.
-   High availability: If a certain partition in a partitioned table is faulty, data in the other partitions is still available.
-   Easy maintenance: If a partition in a partitioned table is faulty, only this partition needs to be repaired.
-   Balanced I/O: Partitions can be mapped to different disks to balance I/O and improve the overall system performance.

Currently, openGauss supports range partitioned tables, list partitioned tables, and hash partitioned tables.

- In a range partitioned table, data within a certain range is mapped to each partition. The range is determined by the partition key specified when the partitioned table is created. This partitioning mode is most commonly used.

  With the range partitioning function, the database divides a record, which is to be inserted into a table, into multiple ranges using one or multiple columns and creates a partition for each range to store data. Partition ranges do no overlap.

- In a list partitioned table, data is mapped to each partition based on the key values contained in each partition. The key values contained in a partition are specified when the partition is created.

  The list partitioning function divides the key values in the records to be inserted into a table into multiple lists \(the lists do not overlap in different partitions\) based on a column of the table, and then creates a partition for each list to store the corresponding data.

- In a hash partitioned table, data is mapped to each partition using the hash algorithm, and each partition stores records with the same hash value.

  The hash partitioning function uses the internal hash algorithm to divide records to be inserted into a table into partitions based on a column of the table.


If you specify the  **PARTITION**  parameter when running the  **CREATE TABLE**  statement, data in the table will be partitioned.

Users can modify partition keys as needed during table creation to make the query result stored in the same or least partitions \(called partition pruning\), so as to obtain consecutive I/O to improve the query performance.

In actual services, time is often used as a filter criterion for query objects. Therefore, you can select the time column as the partition key. The key value range can be adjusted based on the total data volume and the data volume queried at a time.

### SQL Bypass<a name="section3268143815512"></a>

In a typical OLTP scenario, simple queries account for a large proportion. This type of queries involves only single tables and simple expressions. To accelerate such query, the SQL bypass framework is proposed. After simple mode judgment is performed on such query at the parse layer, the query enters a special execution path and skips the classic execution framework, including operator initialization and execution, expression, and projection. Instead, it directly rewrites a set of simple execution paths and directly invokes storage interfaces, greatly accelerating the execution of simple queries.

### Kunpeng NUMA Architecture Optimization<a name="section944319275618"></a>

**Figure  2**  Kunpeng NUMA architecture optimization<a name="fig1684262417126"></a>  
![](figures/kunpeng-numa-architecture-optimization.png "kunpeng-numa-architecture-optimization")

1.  Based on the multi-core NUMA architecture of the Kunpeng processor, openGauss optimizes the NUMA architecture to reduce the cross-core memory access latency and maximize the multi-core Kunpeng computing capability. The key technologies include redo log batch insertion, NUMA distribution of hotspot data, and Clog partitions, greatly improving the processing performance of the TP system.
2.  Based on the ARMv8.1 architecture used by the Kunpeng chip, openGauss uses the LSE instruction set to implement efficient atomic operations, effectively improving the CPU usage, multi-thread synchronization performance, and XLog write performance.
3.  Based on the wider L3 cacheline provided by the Kunpeng chip, openGauss optimizes hotspot data access, effectively improving the cache access hit ratio, reducing the cache consistency maintenance overhead, and greatly improving the overall data access performance of the system.

### High Concurrency of the Thread Pool<a name="en-us_concept_0283138983_section166741219583"></a>

In the OLTP field, a database needs to process a large quantity of client connections. Therefore, the processing capability in high-concurrency scenarios is one of the important capabilities of the database.

The simplest processing mode for external connections is the per-thread-per-connection mode, in which a user connection generates a thread. This mode features simple processing thanks to its architecture. However, in high-concurrency scenarios, there are too many threads, causing heavy workload in thread switchover and large conflict between the lightweight lock areas of the database. As a result, the performance \(throughput\) deteriorates sharply and the SLA of user performance cannot be met.

Therefore, a thread resource pooling and reuse technology needs to be used to resolve this problem. The overall design idea of the thread pool technology is to pool thread resources and reuse them among different connections. After the system is started, a fixed number of working threads are started based on the current number of cores or user configuration. A working thread serves one or more connection sessions. In this way, the session and thread are decoupled. The number of worker threads is fixed. Therefore, frequent thread switchover does not occur in case of high concurrency. The database layer schedules and manages sessions.

### Parallel Query<a name="section660434916519"></a>

The Symmetric Multi-Processing \(SMP\) parallel technology of openGauss uses the multi-core CPU architecture of a computer to implement multi-thread parallel computing, fully using CPU resources to improve query performance. In complex query scenarios, a single query execution takes long time and the system concurrency is low. Therefore, the SMP parallel execution technology is used to implement operator-level parallel execution, which effectively reduces the query execution time and improves the query performance and resource utilization. The overall implementation of the SMP parallel technology is as follows: For query operators that can be executed in parallel, data is sliced, multiple working threads are started for computation, and then the results are summarized and returned to the frontend. The data interaction operator  **Stream**  is added to SMP parallel execution to implement data interaction between multiple working threads, ensuring the correctness of the query and completing the overall query.

### Dynamic Build and Execution<a name="section1335965318515"></a>

Based on the query execution plan tree, with the library functions provided by the LLVM, openGauss moves the process of determining the actual execution path from the executor phase to the execution initialization phase. In this way, problems such as function calling, logic condition branch determination, and a large amount of data reading that are related to the original query execution are avoided, to improve the query performance.



## High Scalability

### High Concurrency of the Thread Pool<a name="section9726165155614"></a>

In the OLTP field, a database needs to process a large quantity of client connections. Therefore, the processing capability in high-concurrency scenarios is one of the important capabilities of the database.

The simplest processing mode for external connections is the per-thread-per-connection mode, in which a user connection generates a thread. This mode features simple processing thanks to its architecture. However, in high-concurrency scenarios, there are too many threads, causing heavy workload in thread switchover and large conflict between the lightweight lock areas of the database. As a result, the performance \(throughput\) deteriorates sharply and the SLA of user performance cannot be met.

Therefore, a thread resource pooling and reuse technology needs to be used to resolve this problem. The overall design idea of the thread pool technology is to pool thread resources and reuse them among different connections. After the system is started, a fixed number of working threads are started based on the current number of cores or user configuration. A working thread serves one or more connection sessions. In this way, the session and thread are decoupled. The number of worker threads is fixed. Therefore, frequent thread switchover does not occur in case of high concurrency. The database layer schedules and manages sessions.

## HA

### Primary/Standby<a name="en-us_concept_0283139022_section3473135114413"></a>

To ensure that a fault can be rectified, data needs to be written into multiple copies. Multiple copies are configured for the primary and standby nodes, and logs are used for data synchronization. In this way, openGauss has no data lost when a node is faulty or the system restarts after a stop, meeting the ACID feature requirements. The primary/standby environment supports two modes: primary/standby, and one primary and multiple standbys. In primary/standby mode, if the standby node needs to redo logs, it can be promoted to primary. In the one primary and multiple standbys mode, all standby nodes need to redo logs and can be promoted to primary. The primary/standby mode is mainly used for OLTP systems with general reliability to save storage resources. The one primary and multiple standbys mode provides higher DR capabilities and is suitable for the OLTP system with higher availability transaction processing.

The  **switchover**  command can be used to trigger a switchover between the primary and standby nodes. If the primary node is faulty, the  **failover**  command can be used to promote the standby node to the primary.

To ensure that the failover time is controllable, you can enable the log flow control function to control the rate of sending logs to the standby node. This ensures that the logs accumulated on the standby node will be replayed within the time configured for flow control. After flow control is enabled, the rate of sending logs to the standby node is dynamically adjusted. As a result, the overall transaction performance deteriorates.

In scenarios such as initial installation or backup and restoration, data on the standby node needs to be rebuilt based on the primary node. In this case, the build function is required to send the data and WALs of the primary node to the standby node. When the primary node is faulty and joins again as a standby node, the build function needs to be used to synchronize data and WALs with those of the new primary node. Build includes full build and incremental build. Full build depends on primary node data for rebuild. The amount of data to be copied is large and the time required is long. Incremental build copies only differential files. The amount of data to be copied is small and the time required is short. Generally, the incremental build is preferred for fault recovery. If the incremental build fails, the full build continues until the fault is rectified.

In addition to streaming replication in primary/standby mode, openGauss also supports logical replication. In logical replication, the primary database is called the source database, and the standby database is called the target database. The source database parses the WAL file based on the specified logical parsing rule and parses the DML operation into certain logical change information \(standard SQL statements\). The source database sends standard SQL statements to the target database. After receiving the SQL statements, the target database applies them to implement data synchronization. Logical replication involves only DML operations. Logical replication can implement cross-version replication, heterogeneous database replication, dual-write database replication, and table-level replication.

### Logical Backup<a name="en-us_concept_0283139022_section11293115015445"></a>

openGauss provides the logical backup capability to back up data in user tables to local disk files in text or CSV format and restore the data in homogeneous or heterogeneous databases.

### Physical Backup<a name="en-us_concept_0283139022_section1370220278457"></a>

openGauss provides the physical backup capability to back up data of the entire instance to local disk files in the internal database format, and restore data of the entire instance in a homogeneous database.

Physical backup is classified into full backup and incremental backup. The difference is as follows: Full backup includes the full data of the database at the backup time point. The time required for full backup is long \(in direct proportion to the total data volume of the database\), and a complete database can be restored. Incremental backup involves only incremental data modified after a specified time point. It takes a short period of time \(in direct proportion to the incremental data volume and irrelevant to the total data volume\). However, a complete database can be restored only after the incremental backup and full backup are performed. openGauss supports both full and incremental backup modes.

### Flashback Restoration<a name="section49964184312"></a>

The flashback function is used to restore dropped tables from the recycle bin. Like in a Window OS, dropped table information is stored in the recycle bin of databases. The MVCC mechanism is used to restore data to a specified point in time or system change number \(SCN\).

### Ultimate RTO<a name="section277463514817"></a>

After the ultimate RTO function is enabled, multi-level pipelines are established for Xlog log playback to improve the concurrency and log playback speed.

When the service load is heavy, the playback speed of the standby node cannot catch up with that of the primary node. After the system runs for a long time, logs are accumulated on the standby node. If a host is faulty, data restoration takes a long time and the database is unavailable, which severely affects system availability. The ultimate recovery time object \(RTO\) is enabled to reduce the data recovery time after a host fault occurs and improve availability.

### Logical Replication<a name="section43277417109"></a>

openGauss provides the logical decoding function to reversely parse physical logs into logical logs. Logical replication tools such as DRS convert logical logs to SQL statements and replay the SQL statements in the peer database. In this way, data can be synchronized between heterogeneous databases. Currently, unidirectional and bidirectional logical replication between the openGauss database and the MySQL or Oracle database is supported. DNs reversely parse physical logs to logical logs. Logical replication tools such as DRS extract logical logs from DNs, convert the logs to SQL statements, and replay the SQL statements in MySQL. Logical replication tools also extract logical logs from a MySQL database, reversely parse the logs to SQL statements, and replay the SQL statements in openGauss. In this way, data can be synchronized between heterogeneous databases.

### Point-In-Time Recovery \(PITR\)<a name="en-us_concept_0283139022_section977361551612"></a>

PITR uses basic hot backup, WALs, and WAL archive logs for backup and recovery. When replaying a WAL record, you can stop at any point in time, so that there is a snapshot of the consistent database at any point in time. That is, you can restore the database to the state at any time since the backup starts. During recovery, openGauss supports specifying the recovery stop point as TID, time, and LSN.

### High Availability Based on the Paxos Protocol \(DCF\)<a name="section4565549116"></a>

After DCF is enabled, DNs support Paxos-based replication and quorum, achieving high availability and disaster recovery. DNs support automatic primary node selection and log replication. The replication process supports compression and stream control to prevent high bandwidth usage. Node types based on Paxos roles are provided and can be adjusted.

## Maintainability

### Workload Diagnosis Report

The workload diagnosis report \(WDR\) generates a performance report between two different time points based on the system performance snapshot data at two different time points. The report is used to diagnose database kernel performance faults.

WDR depends on the following two components:

-   SNAPSHOT: The performance snapshot can be configured to collect a certain amount of performance data from the kernel at a specified interval and store the data in the user tablespace. Any snapshot can be used as a performance baseline for comparison with other snapshots.
-   WDR Reporter: This tool analyzes the overall system performance based on two snapshots, calculates the changes of more specific performance indicators between the two time periods, and generates summarized and detailed performance data. For details, see  [Table 1](#en-us_concept_0238164494_table14895120191613)  and  [Table 2](#en-us_concept_0238164494_table23331848193120).

**Table  1**  Summarized diagnosis report

<a name="en-us_concept_0238164494_table14895120191613"></a>

<table><thead align="left"><tr id="en-us_concept_0238164494_row1889513016163"><th class="cellrowborder" valign="top" width="24.77%" id="mcps1.2.3.1.1"><p id="en-us_concept_0238164494_p689512091618"><a name="en-us_concept_0238164494_p689512091618"></a><a name="en-us_concept_0238164494_p689512091618"></a>Diagnosis Type</p>
</th>
<th class="cellrowborder" valign="top" width="75.22999999999999%" id="mcps1.2.3.1.2"><p id="en-us_concept_0238164494_p118951404165"><a name="en-us_concept_0238164494_p118951404165"></a><a name="en-us_concept_0238164494_p118951404165"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_concept_0238164494_row1189517019163"><td class="cellrowborder" valign="top" width="24.77%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0238164494_p16896205162"><a name="en-us_concept_0238164494_p16896205162"></a><a name="en-us_concept_0238164494_p16896205162"></a>Database Stat</p>
</td>
<td class="cellrowborder" valign="top" width="75.22999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0238164494_p7110144513222"><a name="en-us_concept_0238164494_p7110144513222"></a><a name="en-us_concept_0238164494_p7110144513222"></a>Evaluates the load and I/O status of the current database. Load and I/O are the most important indicators of the TP system.</p>
<p id="en-us_concept_0238164494_p15896180171619"><a name="en-us_concept_0238164494_p15896180171619"></a><a name="en-us_concept_0238164494_p15896180171619"></a>The statistics include the number of sessions connected to the database, number of committed and rolled back transactions, number of read disk blocks, number of disk blocks found in the cache, number of rows returned, captured, inserted, updated, and deleted through database query, number of conflicts and deadlocks, usage of temporary files, and I/O read/write time.</p>
</td>
</tr>
<tr id="en-us_concept_0238164494_row589614018168"><td class="cellrowborder" valign="top" width="24.77%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0238164494_p2896170181618"><a name="en-us_concept_0238164494_p2896170181618"></a><a name="en-us_concept_0238164494_p2896170181618"></a>Load Profile</p>
</td>
<td class="cellrowborder" valign="top" width="75.22999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0238164494_p2089612013161"><a name="en-us_concept_0238164494_p2089612013161"></a><a name="en-us_concept_0238164494_p2089612013161"></a>Evaluates the current system load from the time, I/O, transaction, and SQL dimensions.</p>
<p id="en-us_concept_0238164494_p161691350122212"><a name="en-us_concept_0238164494_p161691350122212"></a><a name="en-us_concept_0238164494_p161691350122212"></a>The statistics include the job running elapse time, CPU time, daily transaction quality, logical and physical read volume, read and write I/O times and size, login and logout times, SQL, transaction execution volume, and SQL P85 and P90 response time.</p>
</td>
</tr>
<tr id="en-us_concept_0238164494_row889614011167"><td class="cellrowborder" valign="top" width="24.77%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0238164494_p11896801161"><a name="en-us_concept_0238164494_p11896801161"></a><a name="en-us_concept_0238164494_p11896801161"></a>Instance Efficiency Percentages</p>
</td>
<td class="cellrowborder" valign="top" width="75.22999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0238164494_p146120311858"><a name="en-us_concept_0238164494_p146120311858"></a><a name="en-us_concept_0238164494_p146120311858"></a>Evaluates the cache efficiency of the current system.</p>
<p id="en-us_concept_0238164494_p1989610091613"><a name="en-us_concept_0238164494_p1989610091613"></a><a name="en-us_concept_0238164494_p1989610091613"></a>The statistics include the database cache hit ratio.</p>
</td>
</tr>
<tr id="en-us_concept_0238164494_row189630111613"><td class="cellrowborder" valign="top" width="24.77%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0238164494_p148961007164"><a name="en-us_concept_0238164494_p148961007164"></a><a name="en-us_concept_0238164494_p148961007164"></a>Events</p>
</td>
<td class="cellrowborder" valign="top" width="75.22999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0238164494_p115276341657"><a name="en-us_concept_0238164494_p115276341657"></a><a name="en-us_concept_0238164494_p115276341657"></a>Evaluates the performance of key system kernel resources and key events.</p>
<p id="en-us_concept_0238164494_p789680191613"><a name="en-us_concept_0238164494_p789680191613"></a><a name="en-us_concept_0238164494_p789680191613"></a>The statistics include the number of times that the key time of the database kernel occurs and the waiting time.</p>
</td>
</tr>
<tr id="en-us_concept_0238164494_row20583178178"><td class="cellrowborder" valign="top" width="24.77%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0238164494_p559717121712"><a name="en-us_concept_0238164494_p559717121712"></a><a name="en-us_concept_0238164494_p559717121712"></a>Wait Classes</p>
</td>
<td class="cellrowborder" valign="top" width="75.22999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0238164494_p11553691966"><a name="en-us_concept_0238164494_p11553691966"></a><a name="en-us_concept_0238164494_p11553691966"></a>Evaluates the performance of key events in the system.</p>
<p id="en-us_concept_0238164494_p11595172176"><a name="en-us_concept_0238164494_p11595172176"></a><a name="en-us_concept_0238164494_p11595172176"></a>The statistics include the release of the data kernel in the main types of waiting events, such as STATUS, LWLOCK_EVENT, LOCK_EVENT, and IO_EVENT.</p>
</td>
</tr>
<tr id="en-us_concept_0238164494_row1737892971715"><td class="cellrowborder" valign="top" width="24.77%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0238164494_p1437872931714"><a name="en-us_concept_0238164494_p1437872931714"></a><a name="en-us_concept_0238164494_p1437872931714"></a>CPU</p>
</td>
<td class="cellrowborder" valign="top" width="75.22999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0238164494_p1437842910178"><a name="en-us_concept_0238164494_p1437842910178"></a><a name="en-us_concept_0238164494_p1437842910178"></a>Includes time release of the CPU in user mode, kernel mode, wait I/O, and idle mode.</p>
</td>
</tr>
<tr id="en-us_concept_0238164494_row13154183712171"><td class="cellrowborder" valign="top" width="24.77%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0238164494_p515514378179"><a name="en-us_concept_0238164494_p515514378179"></a><a name="en-us_concept_0238164494_p515514378179"></a>IO Profile</p>
</td>
<td class="cellrowborder" valign="top" width="75.22999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0238164494_p13155133710173"><a name="en-us_concept_0238164494_p13155133710173"></a><a name="en-us_concept_0238164494_p13155133710173"></a>Includes the number of database I/O times, database I/O data volume, number of redo I/O times, and redo I/O volume.</p>
</td>
</tr>
<tr id="en-us_concept_0238164494_row123476454170"><td class="cellrowborder" valign="top" width="24.77%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0238164494_p934714512178"><a name="en-us_concept_0238164494_p934714512178"></a><a name="en-us_concept_0238164494_p934714512178"></a>Memory Statistics</p>
</td>
<td class="cellrowborder" valign="top" width="75.22999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0238164494_p434712455175"><a name="en-us_concept_0238164494_p434712455175"></a><a name="en-us_concept_0238164494_p434712455175"></a>Includes maximum process memory, used process memory, maximum shared memory, and used shared memory.</p>
</td>
</tr>
</tbody>
</table>


**Table  2**  Detailed diagnosis report

<a name="en-us_concept_0238164494_table23331848193120"></a>

<table><thead align="left"><tr id="en-us_concept_0238164494_row1533312481318"><th class="cellrowborder" valign="top" width="24.93%" id="mcps1.2.3.1.1"><p id="en-us_concept_0238164494_p5333948203119"><a name="en-us_concept_0238164494_p5333948203119"></a><a name="en-us_concept_0238164494_p5333948203119"></a>Diagnosis Type</p>
</th>
<th class="cellrowborder" valign="top" width="75.07000000000001%" id="mcps1.2.3.1.2"><p id="en-us_concept_0238164494_p17333144823110"><a name="en-us_concept_0238164494_p17333144823110"></a><a name="en-us_concept_0238164494_p17333144823110"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_concept_0238164494_row1533315480312"><td class="cellrowborder" valign="top" width="24.93%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0238164494_p113331448163118"><a name="en-us_concept_0238164494_p113331448163118"></a><a name="en-us_concept_0238164494_p113331448163118"></a>Time Model</p>
</td>
<td class="cellrowborder" valign="top" width="75.07000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0238164494_p18455944461"><a name="en-us_concept_0238164494_p18455944461"></a><a name="en-us_concept_0238164494_p18455944461"></a>Evaluates the performance of the current system in the time dimension.</p>
<p id="en-us_concept_0238164494_p33332484313"><a name="en-us_concept_0238164494_p33332484313"></a><a name="en-us_concept_0238164494_p33332484313"></a>The statistics include time consumed by the system in each phase, including the kernel time, CPU time, execution time, parsing time, compilation time, query rewriting time, plan generation time, network time, and I/O time.</p>
</td>
</tr>
<tr id="en-us_concept_0238164494_row1233374883113"><td class="cellrowborder" valign="top" width="24.93%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0238164494_p10333948163119"><a name="en-us_concept_0238164494_p10333948163119"></a><a name="en-us_concept_0238164494_p10333948163119"></a>SQL Statistics</p>
</td>
<td class="cellrowborder" valign="top" width="75.07000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0238164494_p367217315715"><a name="en-us_concept_0238164494_p367217315715"></a><a name="en-us_concept_0238164494_p367217315715"></a>Diagnoses SQL statement performance problems.</p>
<p id="en-us_concept_0238164494_p103331848113117"><a name="en-us_concept_0238164494_p103331848113117"></a><a name="en-us_concept_0238164494_p103331848113117"></a>The statistics include normalized SQL performance indicators in multiple dimensions: elapsed time, CPU time, rows returned, tuple reads, executions, physical reads, and logical reads. The indicators can be classified into execution time, number of execution times, row activity, and cache I/O.</p>
</td>
</tr>
<tr id="en-us_concept_0238164494_row1933324873111"><td class="cellrowborder" valign="top" width="24.93%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0238164494_p183331348193119"><a name="en-us_concept_0238164494_p183331348193119"></a><a name="en-us_concept_0238164494_p183331348193119"></a>Wait Events</p>
</td>
<td class="cellrowborder" valign="top" width="75.07000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0238164494_p39281554285"><a name="en-us_concept_0238164494_p39281554285"></a><a name="en-us_concept_0238164494_p39281554285"></a>Diagnoses performance of key system resources and key time in detail.</p>
<p id="en-us_concept_0238164494_p933314823114"><a name="en-us_concept_0238164494_p933314823114"></a><a name="en-us_concept_0238164494_p933314823114"></a>The statistics include the performance of all key events in a period of time, including the number of events and the time consumed.</p>
</td>
</tr>
<tr id="en-us_concept_0238164494_row3334148183116"><td class="cellrowborder" valign="top" width="24.93%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0238164494_p4334204817319"><a name="en-us_concept_0238164494_p4334204817319"></a><a name="en-us_concept_0238164494_p4334204817319"></a>Cache IO Stats</p>
</td>
<td class="cellrowborder" valign="top" width="75.07000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0238164494_p77092138917"><a name="en-us_concept_0238164494_p77092138917"></a><a name="en-us_concept_0238164494_p77092138917"></a>Diagnoses the performance of user tables and indexes.</p>
<p id="en-us_concept_0238164494_p73341848193110"><a name="en-us_concept_0238164494_p73341848193110"></a><a name="en-us_concept_0238164494_p73341848193110"></a>The statistics include read and write operations on all user tables and indexes, and the cache hit ratio.</p>
</td>
</tr>
<tr id="en-us_concept_0238164494_row233424816311"><td class="cellrowborder" valign="top" width="24.93%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0238164494_p133474810318"><a name="en-us_concept_0238164494_p133474810318"></a><a name="en-us_concept_0238164494_p133474810318"></a>Utility status</p>
</td>
<td class="cellrowborder" valign="top" width="75.07000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0238164494_p178211436699"><a name="en-us_concept_0238164494_p178211436699"></a><a name="en-us_concept_0238164494_p178211436699"></a>Diagnoses the performance of backend jobs.</p>
<p id="en-us_concept_0238164494_p1334134843114"><a name="en-us_concept_0238164494_p1334134843114"></a><a name="en-us_concept_0238164494_p1334134843114"></a>The statistics include the performance of backend operations such as page operation and replication.</p>
</td>
</tr>
<tr id="en-us_concept_0238164494_row123341448113113"><td class="cellrowborder" valign="top" width="24.93%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0238164494_p11334848143110"><a name="en-us_concept_0238164494_p11334848143110"></a><a name="en-us_concept_0238164494_p11334848143110"></a>Object stats</p>
</td>
<td class="cellrowborder" valign="top" width="75.07000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0238164494_p14405135119915"><a name="en-us_concept_0238164494_p14405135119915"></a><a name="en-us_concept_0238164494_p14405135119915"></a>Diagnoses the performance of database objects.</p>
<p id="en-us_concept_0238164494_p6334174863119"><a name="en-us_concept_0238164494_p6334174863119"></a><a name="en-us_concept_0238164494_p6334174863119"></a>The statistics include user tables, tables on indexes, index scan activities, insert, update, and delete activities, number of valid rows, and table maintenance status.</p>
</td>
</tr>
<tr id="en-us_concept_0238164494_row1427793219359"><td class="cellrowborder" valign="top" width="24.93%" headers="mcps1.2.3.1.1 "><p id="en-us_concept_0238164494_p32775326355"><a name="en-us_concept_0238164494_p32775326355"></a><a name="en-us_concept_0238164494_p32775326355"></a>Configuration settings</p>
</td>
<td class="cellrowborder" valign="top" width="75.07000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0238164494_p1119216811109"><a name="en-us_concept_0238164494_p1119216811109"></a><a name="en-us_concept_0238164494_p1119216811109"></a>Determines whether the configuration is changed.</p>
<p id="en-us_concept_0238164494_p142774327353"><a name="en-us_concept_0238164494_p142774327353"></a><a name="en-us_concept_0238164494_p142774327353"></a>It is a snapshot that contains all current configuration parameters.</p>
</td>
</tr>
</tbody>
</table>


Benefits:

-   WDR is the main method for diagnosing long-term performance problems. Based on the performance baseline of a snapshot, performance analysis is performed from multiple dimensions, helping DBAs understand the system load, performance of each component, and performance bottlenecks.
-   Snapshots are also an important data source for subsequent performance problem self-diagnosis and self-optimization suggestions.

### Slow SQL Diagnosis<a name="section11920121884711"></a>

Slow SQL records information about all jobs whose execution time exceeds the threshold.

Historical slow SQL provides table-based and function-based query interfaces. You can query the execution plan, start time, end time, query statement, row activity, kernel time, CPU time, execution time, parsing time, compilation time, query rewriting time, plan generation time, network time, I/O time, network overhead, and lock overhead. All information is anonymized.

Slow SQL provides detailed information required for slow SQL diagnosis. You can diagnose performance problems of specific slow SQL statements offline without reproducing the problem. The table-based and function-based APIs help users collect statistics on slow SQL indicators and connect to third-party platforms.

## Database Security

### Access Control<a name="en-us_concept_0283139021_section1518355319485"></a>

Access control is to manage users' database access control permissions, including database system permissions and object permissions.

Role-based access control is supported. Roles and permissions are associated. Permissions are assigned to roles and then roles are assigned to users, implementing user access control permission management. The login access control is implemented by using the user ID and authentication technology. The object access control is implemented by checking the object permission based on the user permission on the object. You can assign the minimum permissions required for completing tasks to related database users to minimize database usage risks.

An access control model based on separation of permissions is supported. Database roles are classified into system administrator, security administrator, and audit administrator. The security administrator creates and manages users, the system administrator grants and revokes user permissions, and the audit administrator audits all user behaviors.

By default, the role-based access control model is used. You can set parameters to determine whether to enable the access control model based on separation of permissions.

### Separation of Control and Access Permissions<a name="en-us_concept_0283139021_section74261220114919"></a>

For the system administrator, the control and access permissions on table objects are separated to improve data security of common users and restrict the object access permissions of administrators.

This feature applies to the following scenarios: An enterprise has multiple business departments using different database users to perform service operations. Database maintenance departments at the same level use the database administrator to perform O&M operations. The business departments require that administrators can only perform control operations \(DROP, ALTER, and TRUNCATE\) on data of each department and cannot perform access operations \(INSERT, DELETE, UPDATE, SELECT, and COPY\) without authorization. That is, the control permissions of database administrators for tables need to be isolated from their access permissions to improve the data security of common users.

The system administrators can specify the  **INDEPENDENT**  attribute when creating a user, indicating that the user is a private user. Database administrators \(including initial users and other administrators\) can control \(**DROP**,  **ALTER**, and  **TRUNCATE**\) objects of private users but cannot access \(**INSERT**,  **DELETE**,  **UPDATE**,  **SELECT**,  **COPY**,  **GRANT**,  **REVOKE**, and  **ALTER OWNER**\) the objects without authorization.

### Built-in Database Role Permission Management<a name="section210351882916"></a>

openGauss provides a group of default roles whose names start with  **gs\_role\_**. These roles are provided to access to specific, typically high-privileged operations. You can grant these roles to other users or roles within the database so that they can use specific functions. These roles should be given with great care to ensure that they are used where they are needed.  [Table 1](#table2118117460)  describes the permissions of built-in roles.

**Table  1**  Built-in role permissions

<a name="table2118117460"></a>

<table><thead align="left"><tr id="row142101115461"><th class="cellrowborder" valign="top" width="17.44%" id="mcps1.2.3.1.1"><p id="p152141116461"><a name="p152141116461"></a><a name="p152141116461"></a>Role</p>
</th>
<th class="cellrowborder" valign="top" width="82.56%" id="mcps1.2.3.1.2"><p id="p18211117468"><a name="p18211117468"></a><a name="p18211117468"></a>Permission</p>
</th>
</tr>
</thead>
<tbody><tr id="row132011124611"><td class="cellrowborder" valign="top" width="17.44%" headers="mcps1.2.3.1.1 "><p id="p132161115462"><a name="p132161115462"></a><a name="p132161115462"></a>gs_role_copy_files</p>
</td>
<td class="cellrowborder" valign="top" width="82.56%" headers="mcps1.2.3.1.2 "><p id="p42101120469"><a name="p42101120469"></a><a name="p42101120469"></a>Permission to run the <strong id="b161060808"><a name="b161060808"></a><a name="b161060808"></a>copy... to/from filename</strong> command. However, the GUC parameter <strong id="b16111308013"><a name="b16111308013"></a><a name="b16111308013"></a>enable_copy_server_files</strong> must be set first to enable the function of copying server files.</p>
</td>
</tr>
<tr id="row13218113465"><td class="cellrowborder" valign="top" width="17.44%" headers="mcps1.2.3.1.1 "><p id="p122117468"><a name="p122117468"></a><a name="p122117468"></a>gs_role_signal_backend</p>
</td>
<td class="cellrowborder" valign="top" width="82.56%" headers="mcps1.2.3.1.2 "><p id="p112101115462"><a name="p112101115462"></a><a name="p112101115462"></a>Permission to invoke the <strong id="b205551310016"><a name="b205551310016"></a><a name="b205551310016"></a>pg_cancel_backend</strong>, <strong id="b11555532012"><a name="b11555532012"></a><a name="b11555532012"></a>pg_terminate_backend</strong>, and <strong id="b1755653902"><a name="b1755653902"></a><a name="b1755653902"></a>pg_terminate_session</strong> functions to cancel or terminate other sessions. However, this role cannot perform operations on sessions of the initial user or <strong id="b85569319014"><a name="b85569319014"></a><a name="b85569319014"></a>PERSISTENCE</strong> user.</p>
</td>
</tr>
<tr id="row182161164616"><td class="cellrowborder" valign="top" width="17.44%" headers="mcps1.2.3.1.1 "><p id="p15271114460"><a name="p15271114460"></a><a name="p15271114460"></a>gs_role_tablespace</p>
</td>
<td class="cellrowborder" valign="top" width="82.56%" headers="mcps1.2.3.1.2 "><p id="p1921011184615"><a name="p1921011184615"></a><a name="p1921011184615"></a>Permission to create a tablespace.</p>
</td>
</tr>
<tr id="row2261194613"><td class="cellrowborder" valign="top" width="17.44%" headers="mcps1.2.3.1.1 "><p id="p152191113468"><a name="p152191113468"></a><a name="p152191113468"></a>gs_role_replication</p>
</td>
<td class="cellrowborder" valign="top" width="82.56%" headers="mcps1.2.3.1.2 "><p id="p6271194616"><a name="p6271194616"></a><a name="p6271194616"></a>Permission to invoke logical replication functions, such as <strong id="b135690144016"><a name="b135690144016"></a><a name="b135690144016"></a>kill_snapshot</strong>, <strong id="b1156918141505"><a name="b1156918141505"></a><a name="b1156918141505"></a>pg_create_logical_replication_slot</strong>, <strong id="b45691914506"><a name="b45691914506"></a><a name="b45691914506"></a>pg_create_physical_replication_slot</strong>, <strong id="b12570614207"><a name="b12570614207"></a><a name="b12570614207"></a>pg_drop_replication_slot</strong>, <strong id="b175709141003"><a name="b175709141003"></a><a name="b175709141003"></a>pg_replication_slot_advance</strong>, <strong id="b175702144017"><a name="b175702144017"></a><a name="b175702144017"></a>pg_create_physical_replication_slot_extern</strong>, <strong id="b10571161414012"><a name="b10571161414012"></a><a name="b10571161414012"></a>pg_logical_slot_get_changes</strong>, <strong id="b1571714103"><a name="b1571714103"></a><a name="b1571714103"></a>pg_logical_slot_peek_changes</strong>, <strong id="b1257117145011"><a name="b1257117145011"></a><a name="b1257117145011"></a>pg_logical_slot_get_binary_changes</strong> and <strong id="b125711514305"><a name="b125711514305"></a><a name="b125711514305"></a>pg_logical_slot_peek_binary_changes</strong>.</p>
</td>
</tr>
<tr id="row132201154612"><td class="cellrowborder" valign="top" width="17.44%" headers="mcps1.2.3.1.1 "><p id="p12141118462"><a name="p12141118462"></a><a name="p12141118462"></a>gs_role_account_lock</p>
</td>
<td class="cellrowborder" valign="top" width="82.56%" headers="mcps1.2.3.1.2 "><p id="p829117463"><a name="p829117463"></a><a name="p829117463"></a>Permission to lock and unlock users. However, this role cannot lock or unlock the initial user or <strong id="b186742301794557"><a name="b186742301794557"></a><a name="b186742301794557"></a>PERSISTENCE</strong> user.</p>
</td>
</tr>
<tr id="row0460611191614"><td class="cellrowborder" valign="top" width="17.44%" headers="mcps1.2.3.1.1 "><p id="p64601118162"><a name="p64601118162"></a><a name="p64601118162"></a>gs_role_directory_create</p>
</td>
<td class="cellrowborder" valign="top" width="82.56%" headers="mcps1.2.3.1.2 "><p id="p17460311141616"><a name="p17460311141616"></a><a name="p17460311141616"></a>Permission to create directory objects. However, this role needs to enable the GUC parameter <strong id="b111751710320"><a name="b111751710320"></a><a name="b111751710320"></a>enable_access_server_directory</strong> first.</p>
</td>
</tr>
<tr id="row10679131511613"><td class="cellrowborder" valign="top" width="17.44%" headers="mcps1.2.3.1.1 "><p id="p96791115121616"><a name="p96791115121616"></a><a name="p96791115121616"></a>gs_role_directory_drop</p>
</td>
<td class="cellrowborder" valign="top" width="82.56%" headers="mcps1.2.3.1.2 "><p id="p14679111519168"><a name="p14679111519168"></a><a name="p14679111519168"></a>Permission to delete directory objects. However, this role needs to enable the GUC parameter <strong id="b1352916512322"><a name="b1352916512322"></a><a name="b1352916512322"></a>enable_access_server_directory</strong> first.</p>
</td>
</tr>
</tbody>
</table>


### Database Encryption Authentication<a name="en-us_concept_0283139021_section5666740124910"></a>

The password encryption method based on the RFC5802 mechanism is used for authentication.

The unidirectional, irreversible Hash encryption algorithm PBKDF2 is used for encryption and authentication, effectively defending against rainbow attacks.

The password of the created user is encrypted and stored in the system catalog. During the entire authentication process, passwords are encrypted for storage and transmission. The hash value is calculated and compared with the value stored on the server to verify the correctness.

The message processing flow in the unified encryption and authentication process effectively prevents attackers from cracking the username or password by capturing packets.

### Database Audit<a name="en-us_concept_0283139021_section1544614711502"></a>

Audit logs record user operations performed on database startup and stopping, connection, and DDL, DML, and DCL operations. The audit log mechanism enhances the database capability of tracing illegal operations and collecting evidence.

You can set parameters to specify the statements or operations for which audit logs are recorded.

Audit logs record the event time, type, execution result, username, database, connection information, database object, database instance name, port number, and details. You can query audit logs by start time and end time and filter audit logs by recorded field.

Database security administrators can use the audit logs to reproduce a series of events that cause faults in the database and identify unauthorized users, unauthorized operations, and the time when these operations are performed.

### Network Communication Security<a name="en-us_concept_0283139021_section12318192310500"></a>

SSL can be used to encrypt communication data between the client and server, ensuring communication security between the client and server.

The TLS 1.2 protocol and a highly secure encryption algorithm suite are adopted.  [Table 2](#table13251121491017)  lists the supported encryption algorithm suites.

**Table  2**  Encryption algorithm suites

<a name="table13251121491017"></a>

<table><thead align="left"><tr id="row1625261412109"><th class="cellrowborder" valign="top" width="37.940000000000005%" id="mcps1.2.4.1.1"><p id="p99755175105"><a name="p99755175105"></a><a name="p99755175105"></a>OpenSSL Suite Name</p>
</th>
<th class="cellrowborder" valign="top" width="47.25%" id="mcps1.2.4.1.2"><p id="p119751717121010"><a name="p119751717121010"></a><a name="p119751717121010"></a>IANA Suite Name</p>
</th>
<th class="cellrowborder" valign="top" width="14.81%" id="mcps1.2.4.1.3"><p id="p15594635152615"><a name="p15594635152615"></a><a name="p15594635152615"></a>Security</p>
</th>
</tr>
</thead>
<tbody><tr id="row313281911346"><td class="cellrowborder" valign="top" width="37.940000000000005%" headers="mcps1.2.4.1.1 "><p id="p131331119183419"><a name="p131331119183419"></a><a name="p131331119183419"></a>ECDHE-RSA-AES128-GCM-SHA256</p>
</td>
<td class="cellrowborder" valign="top" width="47.25%" headers="mcps1.2.4.1.2 "><p id="p11133101914340"><a name="p11133101914340"></a><a name="p11133101914340"></a>TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256</p>
</td>
<td class="cellrowborder" valign="top" width="14.81%" headers="mcps1.2.4.1.3 "><p id="p1413381911349"><a name="p1413381911349"></a><a name="p1413381911349"></a>HIGH</p>
</td>
</tr>
<tr id="row19615113518261"><td class="cellrowborder" valign="top" width="37.940000000000005%" headers="mcps1.2.4.1.1 "><p id="p66166355269"><a name="p66166355269"></a><a name="p66166355269"></a>ECDHE-RSA-AES256-GCM-SHA384</p>
</td>
<td class="cellrowborder" valign="top" width="47.25%" headers="mcps1.2.4.1.2 "><p id="p1761653522615"><a name="p1761653522615"></a><a name="p1761653522615"></a>TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384</p>
</td>
<td class="cellrowborder" valign="top" width="14.81%" headers="mcps1.2.4.1.3 "><p id="p261633515262"><a name="p261633515262"></a><a name="p261633515262"></a>HIGH</p>
</td>
</tr>
<tr id="row031613406345"><td class="cellrowborder" valign="top" width="37.940000000000005%" headers="mcps1.2.4.1.1 "><p id="p2031624043411"><a name="p2031624043411"></a><a name="p2031624043411"></a>ECDHE-ECDSA-AES128-GCM-SHA256</p>
</td>
<td class="cellrowborder" valign="top" width="47.25%" headers="mcps1.2.4.1.2 "><p id="p731694013418"><a name="p731694013418"></a><a name="p731694013418"></a>TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256</p>
</td>
<td class="cellrowborder" valign="top" width="14.81%" headers="mcps1.2.4.1.3 "><p id="p14316154033412"><a name="p14316154033412"></a><a name="p14316154033412"></a>HIGH</p>
</td>
</tr>
<tr id="row1723517434266"><td class="cellrowborder" valign="top" width="37.940000000000005%" headers="mcps1.2.4.1.1 "><p id="p7236204382616"><a name="p7236204382616"></a><a name="p7236204382616"></a>ECDHE-ECDSA-AES256-GCM-SHA384</p>
</td>
<td class="cellrowborder" valign="top" width="47.25%" headers="mcps1.2.4.1.2 "><p id="p17236164312261"><a name="p17236164312261"></a><a name="p17236164312261"></a>TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384</p>
</td>
<td class="cellrowborder" valign="top" width="14.81%" headers="mcps1.2.4.1.3 "><p id="p19236144315263"><a name="p19236144315263"></a><a name="p19236144315263"></a>HIGH</p>
</td>
</tr>
</tbody>
</table>


### Row-Level Security<a name="en-us_concept_0283139021_section135874520509"></a>

The row-level security \(RLS\) feature enables database access control to be accurate to each row of data tables. When different users perform the same SQL query operation, the read results may be different according to the RLS policy.

You can create an RLS policy for a data table. The policy defines an expression that takes effect only for specific database users and SQL operations. When a database user accesses the data table, if a SQL statement meets the specified RLS policy of the data table, the expressions that meet the specified condition will be combined by using  **AND**  or  **OR**  based on the attribute type \(**PERMISSIVE**  |  **RESTRICTIVE**\) and applied to the execution plan in the query optimization phase.

RLS is used to control the visibility of row-level data in tables. By predefining filters for data tables, the expressions that meet the specified condition can be applied to execution plans in the query optimization phase, which will affect the final execution result. Currently, RLS supports the following SQL statements: SELECT, UPDATE, and DELETE.

### Resource Labels<a name="section7656163019424"></a>

The resource label feature classifies database resources based on user-defined rules to implement resource classification and management. Administrators can configure resource labels to configure security policies, such as auditing or data masking, for a group of database resources.

Resource labels can be used to group database resources based on features and application scenarios. You can manage all database resources with specified labels, which greatly reduces policy configuration complexity and information redundancy and improves management efficiency.

Currently, resource labels support the following database resource types: schema, table, column, view, and function.

### Dynamic Data Masking<a name="section7123124654113"></a>

To prevent unauthorized users from sniffing privacy data, the dynamic data masking feature can be used to protect user privacy data. When an unauthorized user accesses the data for which a dynamic data masking policy is configured, the database returns the anonymized data to protect privacy data.

Administrators can create dynamic data masking policies on data columns. The policies specify the data masking methods for specific user scenarios. After the dynamic data masking function is enabled, the system matches user identity information \(such as the access IP address, client tool, and username\) with the masking policy when a user accesses data in the sensitive column. After the matching is successful, the system masks the sensitive data in the query result of the column based on the masking policy.

The purpose of dynamic data masking is to flexibly protect privacy data by configuring the filter, and specifying sensitive column labels and corresponding masking functions in the masking policy without changing the source data.

### Unified Auditing<a name="section1672052375210"></a>

Unified auditing allows administrators to configure audit policies for database resources or resource labels to simplify management, generate audit logs, reduce redundant audit logs, and improve management efficiency.

Administrators can customize audit policies for configuring operation behaviors or database resources. The policies are used to audit specific user scenarios, user behaviors, or database resources. After the unified auditing function is enabled, when a user accesses the database, the system matches the corresponding unified audit policy based on the user identity information, such as the access IP address, client tool, and username. Then, the system classifies the user behaviors based on the access resource label and user operation type \(DML or DDL\) in the policy to perform unified auditing.

The purpose of unified auditing is to change the existing traditional audit behavior into specific tracking audit behavior and exclude other behaviors from the audit, thereby simplifying management and improving the security of audit data generated by the database.

### Password Strength Verification<a name="section465673171713"></a>

To harden the security of customer accounts and data, do not set weak passwords. You need to specify a password when initializing the database, creating a user, or modifying a user. The password must meet the strength requirements. Otherwise, the system prompts you to enter the password again.

The account password complexity policy restricts the minimum number of uppercase letters, lowercase letters, digits, and special characters in a password, the maximum and minimum length of a password, the password cannot be the same as the username or the reverse of the username, and the password cannot be a weak password. This policy enhances user account security.

Weak passwords are easy to crack. The definition of weak passwords may vary with users or user groups. Users can define their own weak passwords.

The  **password\_policy**  parameter specifies whether to enable the password strength verification mechanism. The default value is  **1**, indicating that the password strength verification mechanism is enabled.

### Data Encryption and Storage<a name="section13800339194113"></a>

Imported data is encrypted before stored.

This feature provides data encryption and decryption APIs for users and uses encryption functions to encrypt sensitive information columns identified by users, so that data can be stored in tables after being encrypted.

If you need to encrypt the entire table, you need to write an encryption function for each column. Different attribute columns can use different input parameters.

If a user with the required permission wants to view specific data, the user can decrypt required columns using the decryption function API.

### Ledger Database<a name="section185956502478"></a>

To prevent database O&M personnel from stealing, tampering with, and erasing traces of the database, you can use the ledger database feature to perform comprehensive audit and trace the history. When a tamper-proof user table is modified, the database records the modification behavior to the history table where only data can be appended. In this way, the operation history can be recorded and the operation source can be traced.

The ledger database stores and verifies historical operations by generating data hash digests. Ledgers refer to user history tables and global blockchain tables. For table-level data modification operations, the system records the operation information and hash digest in a global blockchain table. In addition, each tamper-proof user table corresponds to a user history table to record the hash digest of row-level data changes. You can determine whether the user table is tampered by recalculating the hash digest and verifying the hash digest consistency.

Each record in the ledger represents a given operation fact that has occurred. The content of the record can only be appended and cannot be modified. The consistency between the tamper-proof user table and the corresponding history table can be checked to identify and track the tampering behavior. In addition, the ledger database provides an API for checking the tamper-proof user table consistency and an API for restoring and archiving history tables to meet the requirements of tampering identification, data expansion and mitigation, and historical data restoration and archiving.

## AI Capabilities

### AI4DB<a name="section9713101812114"></a>

AI4DB includes intelligent parameter tuning and diagnosis, slow SQL discovery, index recommendation, time sequence prediction, and exception detection. It provides users with more convenient O&M operations and performance improvement, and implements functions such as self-tuning, self-monitoring, and self-diagnosis.

### DB4AI<a name="section1639183432317"></a>

DB4AI is compatible with the MADlib ecosystem, supports more than 70 algorithms, and delivers performance several times higher than that of MADlib on PostgreSQL. Advanced and common algorithm suites such as XGBoost, prophet, and GBDT are added to supplement the shortcomings of the MADlib ecosystem. The technology stack from SQL to machine learning is unified to implement one-click driving of SQL statements from data management to model training.

The fenced UDF and native DB4AI algorithm capabilities are provided, including the execution plan, operators, and SQL syntax in the database.

