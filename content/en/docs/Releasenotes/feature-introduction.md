# Features<a name="EN-US_TOPIC_0000001208458381"></a>

-   Standard SQL support

    Supports SQL-92, SQL-99, SQL:2003, and SQL:2011 standards, GBK and UTF-8 character sets, SQL standard functions and analytic functions, and stored procedures.

-   Database storage management

    Supports tablespaces where different tables can be stored in different locations.

-   Primary/standby deployment

    Supports the ACID properties, single-node fault recovery, primary/standby data synchronization, and primary/standby switchover.

-   Application programming interface \(API\)

    Supports standard JDBC 4.0 and ODBC 3.5 features.

-   Management tools

    Provides the installation and deployment tool, instance start and stop tool, backup and restoration tool, scale-out and scale-in tool, and upgrade tool.

-   Security management

    Supports SSL network connections, user permission management, password management, security auditing, and other functions, to ensure data security at the management, application, system, and network layers.

-   AI

    Supports parameter self-tuning, slow SQL discovery, single query index recommendation, virtual index, workload index recommendation, database metric collection, forecasting, and exception monitoring; compatible with the MADlib ecosystem and supports high-performance AI algorithms in the library.


## New Features<a name="en-us_topic_0283136327_section383172195410"></a>

Compared with 2.0.1, openGauss 2.1.0 Preview has the following new features:

-   The stored procedure compatibility is enhanced.

    Stored procedures support packages, autonomous transactions, and PL/PGSQL single-step debugging.

-   The SQL engine capability is enhanced.
    -   The JDBC driver supports the getNstring API.
    -   GUC parameters are initialized by resource group.
    -   The Group Planner is reconstructed.

        exec\_type is pre-processed, is pathkeys rewritten, and query\_planner is pathized.

    -   The list and hash partitioned tables support data exchange.
    -   Partitioned table execution is optimized.

        The operator initialization of the partitioned table obtains the pg\_partition part for cache optimization, reducing the query delay of a single partitioned table and improving the performance.

    -   Planhint is enhanced.

        The session-level optimizer parameters can be set by using planhint. The specified subquery can be not expanded. GPC can be disabled for a single query.


-   The Ustore storage engine is supported.

    The Ustore storage engine, also called the in-place update storage engine, is a new storage mode added to the openGauss Kernel. The row storage engine used by the earlier openGauss Kernel versions is in append update mode. The append update has good performance in addition, deletion, and HOT \(Heap Only Tuple\) update \(that is, update on the same page\) in the service. However, in a non-HOT UPDATE scenario across data pages, garbage collection is not efficient. The Ustore storage engine can solve this problem.


-   Segment-page storage is supported.

    The segment-page storage manages database file storage by segment and stores data of multiple tables in the same file, thereby resolving a problem that a large quantity of files cause relatively high pressure on a disk and a file system.

-   High availability is based on the Paxos distributed consistency protocol.

    Log replication and primary selection framework are based on the Paxos distributed consistency protocol. Nodes can be added and deleted online, the leader capability can be transferred online, the primary node can be selected based on the priority, and the majority policy is supported. Various node roles are supported with an efficient flow control algorithm.

-   AI4DB and DB4AI competitiveness is continuously built.
    -   Enhanced openGauss AI capability: provides the root cause diagnosis capability for a single slow SQL statement and enhances capabilities such as intelligent index recommendation and time series forecasting.
    -   DB4AI capability: provides the fenced UDF and native DB4AI algorithm capabilities, including the execution plan, operators, and SQL syntax in the database.

-   The log framework and error codes are modified.

    The kernel log specification framework is optimized and the existing logs are reconstructed and optimized.

-   JDBC client load is balanced and read and write are isolated.
    -   The IP addresses and port numbers of multiple nodes on the client are configured to adapt to HA switchover between multiple AZs and remote DR switchover.
    -   The connection-level read/write isolation configuration is supported.
    -   Always connecting to the read-only node \(not the current primary node\) and adapting to primary/standby switchover are supported.
    -   Preferentially connecting to read-only nodes is supported.
    -   Multiple read-only nodes are evenly distributed.
    -   Users are allowed to query the connection string configuration of each application on the database server to check for non-compliant connection configurations.

-   The CMake script compilation is supported.
-   The column-store table supports the primary key constraint and unique key constraint.
-   The jsonb data type is supported.
-   Automatic elimination of unique SQL statements is supported.

    When the number of unique SQL statements reaches the maximum, previous unique SQL statements are automatically deleted so that new unique SQL information can be recorded.

-   The UCE fault detection is supported.

    The UCE errors are detected and the corresponding logs are displayed.

-   The GB18030 character set is supported.
-   The standby server catch is optimized.

    The GUC parameter  **catchup2normal\_wait\_time **is added to control the maximum duration for blocking the primary server during data chasing on the synchronous standby server after the maximum availability mode is enabled.

-   The client tool gsql supports automatic supplement of the readline command.
-   The dynamic data masking is supported.

    Users are allowed to customize data masking rules by loading UDFs.

-   The State Cryptography Administration \(SCA\) algorithms are supported.

    The SM3 encryption algorithm is supported by ODBC and JDBC, and APIs for SM4 algorithm encryption and decryption are provided.

-   The tamper-proof ledger database is supported.

    The tamper-proof ledger database is implemented, the tamper-proof user history table and global block table are added, and operations on tables in the specified anti-tamper schema are audited.

-   The built-in role and permission management mechanism is supported.

    High-privilege operations supported by the system are managed using built-in roles. Roles can be created for users as required.

-   The transparent encryption is supported.

    The encryption is transparent to the application layer. Compared with non-encryption, the performance deterioration does not exceed 10%.

-   The fully-encrypted database is enhanced.

    The encrypted equality query supports JDBC, stored procedures, and functions.

-   The dblink is supported.

    The dblink plug-in is supported to implement interaction between tables in different databases.

-   The Ubuntu system is supported.

    The database can be installed in the Ubuntu system through source code build or OM installation, and the database can be connected through the client driver.

-   The hash index is supported.

    The performance of long-index column equality query is better than that of B-tree. Lock management is optimized to provide higher concurrency. Xlog protection is provided to prevent data loss.

-   UPSERT supports subqueries.

    The UPSERT statement supports subqueries.

-   The MIN/MAX function supports the IP address type.

    The MIN/MAX function can compare cidr and inet network address types.

-   The array\_remove, array\_replace, first, and last functions are added.

    The array\_remove, array\_replace, first, and last functions are added.

-   Data Studio features

    Data Studio supports multiple features of the openGauss kernel. The details are as follows:

    -   Partition tables of the HASH, LIST, and INTERVAL types can be created.

    -   Partition data can be viewed by partition column in a partitioned table.

    -   User roles can be revoked.

    -   The PRIMARY KEY and UNIQUE constraints on column-store tables are supported.


