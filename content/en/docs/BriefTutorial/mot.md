# MOT<a name="EN-US_TOPIC_0000001179976288"></a>

openGauss introduces the memory-optimized table \(MOT\) storage engine, which is a transactional row store and is optimized for multi-core and large-memory servers. MOT is the most advanced production-level feature \(Beta version\) of openGauss databases. It provides higher performance for transactional workloads. MOT fully supports ACID features, especially strict persistence and high availability. Enterprises can use MOT in mission-critical and performance-sensitive online transaction processing \(OLTP\) to achieve high performance, high throughput, predictable low latency, and high utilization of multi-core servers. MOT is especially suitable for running on modern servers with multi-channel and multi-core processors, such as Huawei TaiShan servers based on ARM/Kunpeng processors and Dell or similar x86 servers.

## MOT Features and Benefits<a name="section15901154673217"></a>

MOT has significant advantages in terms of performance \(query and transaction latency\), scalability \(throughput and concurrency\), and in some cases, even costs \(high resource utilization\).

-   Low latency: provides fast query and transaction response time.
-   High throughput: supports peak and continuous high user concurrency.
-   High resource utilization: fully utilizes hardware.

Applications that use MOT can reach 2.5 to 4 times the throughput compared to applications that do not use MOT. For example, you can perform the TPC-C benchmark test \(interactive transactions and synchronous logs\) on Huawei TaiShan servers based on ARM/Kunpeng processors and on Dell x86 servers based on Intel Xeon processors. The throughput gain provided by MOT reaches 2.5 times on a 2-socket server, 3.7 times on a 4-socket server, and 4.8 million tpmC on a 4-socket 256-core ARM server.

In the TPC-C benchmark test, you can find that MOT provides lower latency and reduces the transaction response time by 3 to 5.5 times.

The high load and high contention situation is a recognized problem for all industry-leading databases, and MOT can make extremely high use of server resources in this situation. After MOT is used, the resource utilization of 4-socket servers reaches 99%, which is far higher than that of other databases in the industry.

This capability is especially obvious and important on modern multi-core servers.

## Key MOT Technologies<a name="section3623104533719"></a>

The key technologies of MOT are as follows:

-   Memory-optimized data structure: To achieve high concurrent throughput and predictable low latency, all data and indexes are stored in the memory, no intermediate page buffer is used, and the lock with the shortest duration is used. The data structure and all algorithms are optimized for memory design.
-   Lock-free transaction management: While ensuring strict consistency and data integrity, MOT uses optimistic policies to achieve high concurrency and high throughput. During a transaction, the MOT does not lock any version of the data row being updated, greatly reducing contention in some large memory systems. Optimistic concurrency control \(OCC\) in transactions is implemented without locks. All data modification is performed in the part of memory dedicated to private transactions \(also called private transactional memory\). This means that during a transaction, related data is updated in the private transactional memory, thereby implementing lock-free read and write. In addition, a lock is locked for a short time only in the commit phase.
-   Lock-free index: The data and indexes of memory tables are stored in the memory. Therefore, it is important to have an efficient index data structure and algorithm. The MOT index mechanism is based on the state-of-the-art Masstree, which is a fast and scalable Key Value \(KV\) storage index for multi-core systems and is implemented using the Trie of the B+ tree. In this way, excellent performance on multi-core servers can be achieved in the case of high-concurrency workloads. In addition, MOT uses advanced technologies to optimize performance, such as lock optimization, cache awareness, and memory prefetch.
-   NUMA-aware memory management: MOT supports NUMA-aware. The NUMA-aware algorithm enhances the performance of data layout in memory by enabling threads to access the memory that is physically connected to the core where the threads run. This is handled by the memory controller and does not require additional jumps through the use of interconnection, such as Intel QPI. The intelligent memory control module of MOT pre-allocates memory pools for various memory objects to improve performance, reduce locks, and ensure stability. Transactional memory is always allocated to NUMA local nodes. After the transaction ends, memory is released to the pool. In addition, system memory allocation \(OS malloc\) is used as less as possible in transactions to avoid unnecessary locks.
-   Efficient persistence: Logs and checkpoints are key capabilities for disk persistence and one of the key requirements of ACID \(D stands for durability\). Currently, all disks \(including SSDs and NVMe disks\) are obviously slower than the memory. Therefore, persistence is the bottleneck of the in-memory database engine. As a memory-based storage engine, the persistence design of MOT must implement various algorithm optimizations to ensure that the designed speed and throughput targets can be achieved while persistence is implemented. These optimizations include:
    -   Parallel logging, supported by all openGauss disk-based tables.
    -   Log buffer and lock-free transaction preparation for each transaction.
    -   Incremental update, that is, only changes are recorded.
    -   NUMA-aware group commit, in addition to synchronous and asynchronous logging.
    -   State-of-the-art checkpointing asynchronously using logical consistency \(CALC\), minimizing memory and computing overhead.

-   High SQL coverage and function set: MOT uses extended PostgreSQL Foreign Data Wrappers \(FDWs\) and indexes to support almost the entire SQL scope, including stored procedures, user-defined functions, and system function calls.
-   Native PREPARE statements for query: With the PREPARE client commands, users can execute query and transaction statements interactively. These commands have been pre-compiled into native execution formats, also known as Code-Gen or Just-in-Time \(JIT\) compilation. In this way, the performance can be improved by 30% on average. If possible, apply compilation and lightweight execution; otherwise, use the standard execution path to process the applicable query. The Cache Plan module has been optimized for OLTP. Different binding settings are used in the entire session and compilation results are reused in different sessions.
-   Seamless integration between MOT and openGauss: MOT is a high-performance memory-optimized storage engine integrated in the openGauss package. The MOT storage engine and disk-based storage engine coexist to support multiple application scenarios. In addition, the MOT reuses auxiliary database services, such as WAL, replication, checkpoint, and HA. Users can benefit from unified deployment, configuration, and access of disk-based tables and MOTs. Users can flexibly and cost-effectively select a storage engine based on their specific needs. For example, performance-sensitive data that causes bottlenecks is stored in memory.

## MOT Application Scenarios<a name="section926403410387"></a>

MOT can significantly improve the overall performance of applications based on load characteristics. MOT improves transaction processing performance by improving the efficiency of data access and transaction execution, and minimizing redirections by eliminating locks and lock memory contention between concurrently executed transactions.

MOT is fast not only because it is in memory, but also because it is optimized around concurrent memory usage. Data storage, access, and processing algorithms are designed from scratch to take advantage of the state-of-the-art technologies for in-memory and highly concurrent computing.

openGauss allows applications to freely combine MOTs and standard disk-based tables. MOT is especially useful for enabling the most active, contention-intensive, and performance-sensitive application tables that have proven to be bottlenecks, and tables that require predictable low-latency access and high throughput.

MOT can be used in a variety of applications, such as:

-   High-throughput transaction processing: This is the main scenario where MOT is used because it supports massive transactions and requires low latency of each single transaction. The representative applications include the real-time decision-making system, payment system, financial instrument transactions, sports lottery, mobile games, advertisement placement, and the like.
-   Performance acceleration: Tables with high contention can benefit from MOT, even if the table is a disk-based table. The transformation of such tables \(other than related tables and tables referenced together in queries and transactions\) results in significant performance improvement due to lower latency, fewer contentions and locks, and increased server throughput capabilities.
-   Elimination of mid-tier caching: Cloud computing and mobile applications tend to have periodic or peak high workloads. In addition, more than 80% of the loads of many applications are read loads with frequent repeated queries. Typically, a mid-tier caching layer is deployed for applications to meet the individual requirements of peak loads and to reduce response latency and provide the best user experience. Such an additional layer increases the complexity and time of development as well as operational costs. MOT provides a good alternative solution, which simplifies the application architecture, shortens the development cycle, and reduces the CAPEX and OPEX through consistent high-performance data storage.
-   Large-scale stream data extraction: The MOT can meet requirements of extracting large-scale stream data in the cloud \(for mobility, M2M, and the IoT\), transactional processing \(TP\), analytical processing \(AP\), and machine learning \(ML\). MOT is particularly good at extracting large amounts of data from many different sources at once, continuously and quickly. This data can be processed, transformed, and moved later in slower disk-based tables. In addition, MOT can query consistent and latest data to obtain real-time results. In IoT and cloud computing applications with many real-time data streams, there is usually dedicated data ingestion and processing. For example, an Apache Kafka cluster can be used to extract data of 100,000 events per second with a latency of 10 ms. A periodic batch processing task collects data, converts the data format, and stores the data in a relational database for further analysis. MOT can support such a scenario \(and eliminate a separate data processing layer\) by storing data streams directly in relational MOTs to prepare for analysis and decision making. This enables faster data collection and processing, avoids costly tiering and slow batch processing, improves consistency, increases the timeliness of data analysis, and reduces the total cost of ownership \(TCO\).
-   Reduced TCO: 30% to 90% TCO can be saved by improving resource utilization and eliminating the intermediate layer.

## Unsupported Data Types<a name="en-us_topic_0283137737_en-us_topic_0280525140_section41636693"></a>

-   UUID
-   User-Defined Type \(UDF\)
-   Array data type
-   NVARCHAR2\(n\)
-   Clob
-   Name
-   Blob
-   Raw
-   Path
-   Circle
-   Reltime
-   Bit varying\(10\)
-   Tsvector
-   Tsquery
-   JSON
-   Box
-   Text
-   Line
-   Point
-   LSEG
-   POLYGON
-   INET
-   CIDR
-   MACADDR
-   Smalldatetime
-   BYTEA
-   Bit
-   Varbit
-   OID
-   Money
-   Any unlimited varchar/character varying
-   HSTORE

## MOT Usage<a name="section16922105712433"></a>

1.  Grant permissions to a user.

    The following describes how to grant a database user the permission to access the MOT storage engine. This operation is performed only once for each database user and is usually performed during initial configuration.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >MOT is integrated with the openGauss database through FDWs. Therefore, user permissions need to be authorized.

    To enable a specific user to create and access MOTs \(through DDL, DML, and SELECT operations\), execute the following statement only once:

    ```
    GRANT USAGE ON FOREIGN SERVER mot_server TO <user>;
    ```

    All keywords are case insensitive.

2.  Create or delete an MOT.

    The statements for creating and deleting MOTs are different from those for creating and deleting disk-based tables in openGauss. Except that, the syntax of all other SELECT, DML, and DDL commands is the same for MOTs and openGauss disk-based tables.

    -   Create an MOT.

        ```
        create FOREIGN table test(x int) [server mot_server];
        ```

    -   In the preceding statement:
        -   Always use the FOREIGN keyword to reference the MOT.
        -   When creating a MOT,  **\[server mot\_server\]**  is optional because the MOT is an integrated engine, not a standalone server.
        -   In the preceding example, an MOT named  **test**  \(containing an integer column named  **x**\) is created. Another example is provided in the next step "Create an index for an MOT."
        -   If incremental checkpoints are enabled in  **postgresql.conf**, MOTs cannot be created. Therefore, set  **enable\_incremental\_checkpoint**  to  **off**  before creating an MOT.

    -   Delete the  **test**  MOT.

        ```
        drop FOREIGN table test;
        ```

3.  Create an index for an MOT.

    Standard openGauss statements for creating and deleting indexes are supported.

    For example:

    ```
    create index  text_index1 on test(x) ;
    ```

    Create an  **ORDER**  table for TPC-C and create an index.

    ```
    create FOREIGN table bmsql_oorder ( 
      o_w_id       integer      not null, 
      o_d_id       integer      not null, 
      o_id         integer      not null, 
      o_c_id       integer not null, 
      o_carrier_id integer,          
      o_ol_cnt     integer, 
      o_all_local  integer, 
      o_entry_d    timestamp, 
      primary key (o_w_id, o_d_id, o_id) 
    ); 
    create index  bmsql_oorder_index1 on bmsql_oorder(o_w_id, o_d_id, o_c_id, o_id) ;
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >You do not need to specify the FOREIGN keyword before the MOT name because it is used only in the commands for creating and deleting tables.


## Converting a Disk-based Table into an MOT<a name="section36781485016"></a>

The direct conversion of disk-based tables into MOTs is not yet possible, meaning that no ALTER TABLE statement yet exists for converting a disk-based table into an MOT.

The following describes how to manually perform a few steps in order to convert a disk-based table into an MOT, as well as how the  **gs\_dump**  tool is used to export data and the  **gs\_restore**  tool is used to import data.

-   Prerequisite Check

    Check whether the disk-based table to be converted to MOT contains all required columns.

    Check whether the table contains any unsupported column data types, as described in the Unsupported Data Types section.

    If any specific column data type is not supported, you are advised to first create a disk-based table with the updated column data types. This table is the same as the original table, except that all the unsupported types have been converted into supported types.

    Afterwards, use the following script to export this disk-based table and then import it into an MOT.

-   Conversion

    To covert a disk-based table into an MOT, perform the following:

    1.  Suspend application activities.
    2.  Use  **gs\_dump**  tool to dump the table's data into a physical file on the disk. Make sure to use the  **data only**.
    3.  Rename your original disk-based table.
    4.  Create an MOT with the same table name and schema. Make sure to use the create FOREIGN keyword to specify that it will be an MOT.
    5.  Use  **gs\_restore**  to load/restore data from the disk file into the database table.
    6.  Visually/Manually verify that all the original data was imported correctly into the new MOT. An example is provided below.
    7.  Resume application activities.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >In this way, since the table name remains the same, application queries and relevant database stored procedures will be able to access the new MOT seamlessly without code changes. Please note that MOT does not support cross-engine multi-table queries \(such as by using Join, Union and sub-query\) and cross-engine multi-table transactions. Therefore, if an original table is accessed somewhere in a multi-table query, stored procedure or transaction, you must either convert all related disk-based tables into MOTs or alter the relevant code in the application or the database.

-   Conversion example

    Assume that you have a database named  **benchmarksql**  containing a disk-based table named  **customer**  to be migrated into an MOT.

    To migrate the  **customer**  table into an MOT, perform the following: 

    1.  Check your source table column types. Verify that all types are supported by the MOT. For details, refer to the Unsupported Data Types section.

        ```
        benchmarksql-# \d+ customer 
                               Table "public.customer" 
         Column |  Type   | Modifiers | Storage | Stats target | Description 
        --------+---------+-----------+---------+--------------+------------- 
         x      | integer |           | plain   |              | 
         y      | integer |           | plain   |              | 
        Has OIDs: no 
        Options: orientation=row, compression=no
        ```

    2.  Check your source table data.

        ```
        benchmarksql=# select * from customer; 
         x | y 
        ---+--- 
         1 | 2 
         3 | 4 
        (2 rows)
        ```

    3.  Dump table data only by using  **gs\_dump**.

        ```
        $ gs_dump -Fc benchmarksql -a --table customer -f customer.dump -p 16000
        gs_dump[port='15500'][benchmarksql][2020-06-04 16:45:38]: dump database benchmarksql successfully 
        gs_dump[port='15500'][benchmarksql][2020-06-04 16:45:38]: total time: 332  ms
        ```

    4.  Rename the source table name.

        ```
        benchmarksql=# alter table customer rename to customer_bk; 
        ALTER TABLE
        ```

    5.  Create an MOT that is totally the same as the source table.

        ```
        benchmarksql=# create foreign table customer (x int, y int); 
        CREATE FOREIGN TABLE 
        benchmarksql=# select * from customer; 
         x | y 
        ---+--- 
        (0 rows)
        ```

    6.  Import the source dump data into the new MOT.

        ```
        $ gs_restore -C -d benchmarksql customer.dump -p 16000
        restore operation successful 
        total time: 24  ms 
        Check that the data was imported successfully. 
        benchmarksql=# select * from customer; 
         x | y 
        ---+--- 
         1 | 2 
         3 | 4 
        (2 rows) 
          
        benchmarksql=# \d 
                                        List of relations 
         Schema |    Name     |     Type      | Owner  |             Storage 
        --------+-------------+---------------+--------+---------------------------------- 
         public | customer    | foreign table | aharon | 
         public | customer_bk | table         | aharon | {orientation=row,compression=no} 
        (2 rows)
        ```



