# Core Database Technologies<a name="EN-US_CONCEPT_0252569318"></a>
<!-- TOC -->

- [Basic Functions Oriented to Application Development<a name="EN-US_CONCEPT_0252569319"></a>](#basic-functions-oriented-to-application-developmenta-nameen-us_concept_0252569319a)
- [High Performance<a name="EN-US_CONCEPT_0252569351"></a>](#high-performancea-nameen-us_concept_0252569351a)
    - [CBO Optimizer<a name="section1056021019542"></a>](#cbo-optimizera-namesection1056021019542a)
    - [Hybrid Row-Column Storage<a name="section489210341544"></a>](#hybrid-row-column-storagea-namesection489210341544a)
    - [Adaptive Compression<a name="section146050573546"></a>](#adaptive-compressiona-namesection146050573546a)
    - [Partitioning<a name="section768241520552"></a>](#partitioninga-namesection768241520552a)
    - [SQL Bypass<a name="section3268143815512"></a>](#sql-bypassa-namesection3268143815512a)
    - [Kunpeng NUMA Architecture Optimization<a name="section944319275618"></a>](#kunpeng-numa-architecture-optimizationa-namesection944319275618a)
- [High Scalability<a name="EN-US_CONCEPT_0252569367"></a>](#high-scalabilitya-nameen-us_concept_0252569367a)
    - [High Concurrency of the Thread Pool<a name="section9726165155614"></a>](#high-concurrency-of-the-thread-poola-namesection9726165155614a)
- [HA<a name="EN-US_CONCEPT_0252569372"></a>](#haa-nameen-us_concept_0252569372a)
    - [Primary/Standby<a name="section1341225615717"></a>](#primarystandbya-namesection1341225615717a)
    - [Logical Backup<a name="section1134091305818"></a>](#logical-backupa-namesection1134091305818a)
    - [Physical Backup<a name="section83441530145811"></a>](#physical-backupa-namesection83441530145811a)
- [Maintainability<a name="EN-US_CONCEPT_0252569383"></a>](#maintainabilitya-nameen-us_concept_0252569383a)
    - [Workload Diagnosis Report<a name="section1695871316594"></a>](#workload-diagnosis-reporta-namesection1695871316594a)
    - [Slow SQL Diagnosis<a name="section31565272012"></a>](#slow-sql-diagnosisa-namesection31565272012a)

<!-- /TOC -->
## Basic Functions Oriented to Application Development<a name="EN-US_CONCEPT_0252569319"></a>

-   Standard SQL

    The openGauss database supports standard SQL statements. The SQL standard is an international standard and is updated periodically. SQL standards are classified into core features and optional features. Most databases do not fully support SQL standards. SQL features are built by database vendors to maintain customers and push up application migration costs. New SQL features are increasingly different among vendors. Currently, there is no authoritative SQL standard test.

    The openGauss database supports most of the core features of SQL:2011 and some optional features. For details about the features, see the  _openGauss Product Documentation_.

    The use of standard SQL allows all database vendors to use a unified SQL interface, reduce the cost of language learning and application migration.

-   Standard Development Interfaces

    Industry-standard ODBC and JDBC interfaces help users quickly migrate services to openGauss.

    Currently, the standard ODBC 3.5 and JDBC 4.0 interfaces are supported. The ODBC interface supports SUSE Linux, Windows 32-bit, and Windows 64-bit platforms. The JDBC interface supports all platforms.

-   Transaction Support

    Transaction support refers to the system capability to ensure the atomicity, consistency, isolation, and durability \(ACID\) features of transactions.

    Transaction support and data consistency assurance are the basic functions of most databases and the prerequisites for a database to satisfy transaction-based application requirements.

    -   Atomicity

        A transaction is comprised of an indivisible unit of work. Operations performed in a transaction must be all finished or have not been performed.

    -   Consistency

        Transactions must be consistent within a system no matter when or how many concurrent transactions are ongoing.

    -   Isolation

        Transactions are isolated for execution, as if each of them is the only operation performed during the specified period planned by the system. If there are two transactions that are executed within the same period of time and performing the same function, the transaction isolation makes each of them regard itself as the only transaction using the system.

    -   Durability

        After a transaction is complete, the changes made by the transaction to the database are permanently stored in the database and will not be rolled back.

    The default transaction isolation level is READ COMMITTED, ensuring no dirty data will be read.

    Transactions are categorized into single-statement transactions and transaction blocks. Their basic interfaces are as follows:

    -   Start transaction;
    -   Commit;
    -   Rollback;

    Set transaction \(used for setting the isolation level, read/write mode, and delay mode\). For details about the syntax, see the  _openGauss Developer Guide_.

-   Support for Functions and Stored Procedures

    Functions and stored procedures are important database objects. They encapsulate SQL statement sets used for certain functions so that the statements can be easily invoked.

    A stored procedure is a combination of SQL and PL/SQL. Stored procedures can move the code that executes business rules from the application to the database. Therefore, the code storage can be used by multiple programs at a time.

    1.  Allowing customers to modularize program design and encapsulate SQL statement sets, easy to invoke.
    2.  Caching the compilation results of stored procedures to accelerate SQL statement set execution.
    3.  Allowing system administrators to restrict the permission for executing a specific stored procedure and control access to the corresponding type of data. This prevents access from unauthorized users and ensures data security.
    4.  To process SQL statements, the stored procedure process assigns a memory segment to store context association. Cursors are handles or pointers pointing to context regions. With cursors, stored procedures can control alterations in context regions.
    5.  Six levels of exception information are supported to facilitate the debugging of stored procedures.

    openGauss supports functions and stored procedures in the SQL standard, improving the usability of stored procedures.

    For details about how to use the stored procedure, see the  _openGauss Developer Guide_.

-   PG Interface Compatibility

    Compatible with PSQL clients and standard PostgreSQL interfaces.

-   SQL Hints

    SQL hints are supported, which can override any execution plan and thus improve SQL query performance.

    In plan hints, you can specify a join order; join, stream, and scan operations; and the number of rows in a result to tune an execution plan, improving query performance.

-   Copy Interface for Error Tolerance

    openGauss provides the encapsulated copy error tables for creating functions and allows users to specify error tolerance options when using the  **Copy From**  statement. In this way, errors related to parsing, data format, and character set during the execution of the  **Copy From**  statement are recorded in the error table instead of being reported and interrupted. Even if a small amount of data in the target file of  **Copy From**  is incorrect, the data can be imported to the database. You can locate and rectify the fault in the error table later.


## High Performance<a name="EN-US_CONCEPT_0252569351"></a>

### CBO Optimizer<a name="section1056021019542"></a>

The openGauss optimizer is a typical optimizer developed from Cost-based Optimization \(CBO\). By using CBO, the database calculates the number of tuples and the execution cost for each step under each execution plan based on the number of table tuples, column width, null record ratio, and characteristic values, such as distinct, MCV, and HB values, and certain cost calculation methods. The database then selects the execution plan that takes the lowest cost for the overall execution or for the return of the first tuple.

The CBO optimizer can select the most efficient execution plan among multiple plans based on the cost to meet customer service requirements to the maximum extent.

### Hybrid Row-Column Storage<a name="section489210341544"></a>

openGauss supports both row-store and column-store models. Choose a row-store or column-store table as needed.

Column-store is recommended if a table contains many columns \(called a wide table\) but its query involves only a few columns. Row-store is recommended if a table contains only a few columns and a query involves most of the columns.

[Figure 1](#en-us_topic_0242724708_fig4487133722819)  shows the column-store model.

**Figure  1**  Column-store<a name="en-us_topic_0242724708_fig4487133722819"></a>  
![](figures/column-store.png "column-store")

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

### Partitioning<a name="section768241520552"></a>

In the openGauss system, data is partitioned horizontally on an instance using a specified policy. This operation splits a table into multiple partitions that are not overlapped.

In common scenarios, a partitioned table has the following advantages over a common table:

-   High query performance: You can specify partitions when querying partitioned tables, improving query efficiency.
-   High availability: If a certain partition in a partitioned table is faulty, data in the other partitions is still available.
-   Easy maintenance: If a partition in a partitioned table is faulty, only this partition needs to be repaired.
-   Balanced I/O: Partitions can be mapped to different disks to balance I/O and improve the overall system performance.

Currently, the openGauss database supports range partitioning. Data is mapped to each partition based on the range. The range is determined by the partition key specified when the partitioned table is created. This partitioning mode is most commonly used.

With the range partitioning function, the database divides a record, which is to be inserted into a table, into multiple ranges using one or multiple columns and creates a partition for each range to store data. Partition ranges do no overlap. If you specify the  **PARTITION**  parameter in the  **CREATE TABLE**  statement, data in the table will be partitioned.

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

## High Scalability<a name="EN-US_CONCEPT_0252569367"></a>

### High Concurrency of the Thread Pool<a name="section9726165155614"></a>

In the OLTP field, a database needs to process a large quantity of client connections. Therefore, the processing capability in high-concurrency scenarios is one of the important capabilities of the database.

The simplest processing mode for external connections is the per-thread-per-connection mode, in which a user connection generates a thread. This mode features simple processing thanks to its architecture. However, in high-concurrency scenarios, there are too many threads, causing heavy workload in thread switchover and large conflict between the lightweight lock areas of the database. As a result, the performance \(throughput\) deteriorates sharply and the SLA of user performance cannot be met.

Therefore, a thread resource pooling and reuse technology needs to be used to resolve this problem. The overall design idea of the thread pool technology is to pool thread resources and reuse them among different connections. After the system is started, a fixed number of working threads are started based on the current number of cores or user configuration. A working thread serves one or more connection sessions. In this way, the session and thread are decoupled. The number of worker threads is fixed. Therefore, frequent thread switchover does not occur in case of high concurrency. The database layer schedules and manages sessions.

## HA<a name="EN-US_CONCEPT_0252569372"></a>

### Primary/Standby<a name="section1341225615717"></a>

To ensure that a fault can be rectified, data needs to be written into multiple copies. Multiple copies are configured for the primary and standby nodes, and logs are used for data synchronization. In this way, openGauss has no data lost when a node is faulty or the system restarts after a stop, meeting the ACID feature requirements. The primary/standby environment supports two modes: primary/standby, and one-primary and multiple-standby. In primary/standby mode, the standby node needs to redo logs and can be promoted to primary. In the one-primary and multiple-standby mode, all standby nodes need to redo logs and can be promoted to the primary. The primary/standby mode is mainly used for the OLTP system with general reliability to save storage resources. The one-primary and multiple-standby mode provides higher DR capabilities and is more suitable for the OLTP system with higher reliability.

The  **switchover**  command can be used to trigger a switchover between the primary and standby nodes. If the primary node is faulty, the  **failover**  command can be used to promote the standby node to the primary.

In scenarios such as initial installation or backup and restoration, data on the standby node needs to be rebuilt based on the primary node. In this case, the build function is required to send the data and WALs of the primary node to the standby node. When the primary node is faulty and joins again as a standby node, the build function needs to be used to synchronize data and WALs with those of the new primary node. Build includes full build and incremental build. Full build depends on primary node data for rebuild. The amount of data to be copied is large and the time required is long. Incremental build copies only differential files. The amount of data to be copied is small and the time required is short. Generally, the incremental build is preferred for fault recovery. If the incremental build fails, the full build continues until the fault is rectified.

### Logical Backup<a name="section1134091305818"></a>

openGauss provides the logical backup capability to back up user table data to local disk files in TEXT or CSV format and restore the data in homogeneous and heterogeneous databases.

### Physical Backup<a name="section83441530145811"></a>

openGauss provides the physical backup capability to back up data of an entire DB instance to local disk files in the internal format of the database, and restore the data of the entire DB instance in a homogeneous database.

Physical backup is classified into full backup and incremental backup. The difference is as follows: Full backup includes the full data of the database at the backup time point. The time required for full backup is long \(in direct proportion to the total data volume of the database\), and a complete database can be restored. An incremental backup involves only incremental data modified after a specified time point. It takes a short period of time \(in direct proportion to the incremental data volume and irrelevant to the total data volume\). However, a complete database can be restored only after the incremental backup and full backup are performed. Currently, openGauss supports only full backup.

## Maintainability<a name="EN-US_CONCEPT_0252569383"></a>

### Workload Diagnosis Report<a name="section1695871316594"></a>

The workload diagnosis report \(WDR\) generates a performance report between two different time points based on the system performance snapshot data at two different time points. The report is used to diagnose database kernel performance faults.

WDR depends on the following two components:

-   SNAPSHOT: The performance snapshot can be configured to collect a certain amount of performance data from the kernel at a specified interval and store the data in the user tablespace. Any snapshot can be used as a performance baseline for comparison with other snapshots.
-   WDR Reporter: This tool analyzes the overall system performance based on two snapshots, calculates the changes of more specific performance indicators between the two time periods, and generates summarized and detailed performance data. For details, see tables below.

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
    <td class="cellrowborder" valign="top" width="75.22999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0238164494_p1437842910178"><a name="en-us_concept_0238164494_p1437842910178"></a><a name="en-us_concept_0238164494_p1437842910178"></a>Includes time release of the CPU in user mode, kernel mode, wait I/O, or idle mode.</p>
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


### Slow SQL Diagnosis<a name="section31565272012"></a>

Slow SQL diagnosis can be classified into real-time slow SQL diagnosis and historical slow SQL diagnosis.

-   Real-time slow SQL diagnosis can output information about jobs that are being executed in the current system and whose execution time exceeds the threshold based on the execution time threshold provided by users.
-   Historical slow SQL diagnosis records information about all jobs whose execution time exceeds the threshold.

Slow SQL diagnosis provides table-based and file-based query interfaces. You can query the execution plan, start time, end time, query statement, row activity, kernel time, CPU time, execution time, parsing time, compilation time, query rewriting time, plan generation time, network time, and I/O time. All information is anonymized.

Benefits:

-   Real-time slow SQL diagnosis provides an interface for users to manage unfinished jobs. Users can manually stop abnormal jobs that consume too many resources.
-   Historical slow SQL diagnosis provides detailed information required for slow SQL diagnosis. You can diagnose performance problems of specific slow SQL statements offline without reproducing the problem. The table-based and file-based interfaces help users collect statistics on slow SQL indicators and connect to third-party platforms.
