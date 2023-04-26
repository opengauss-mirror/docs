# Features<a name="EN-US_TOPIC_0289899195"></a>

-   Standard SQL support

    Supports SQL-92, SQL-99, SQL:2003, and SQL:2011 standards, GBK and UTF-8 character sets, SQL standard functions and analytic functions, and stored procedures.

-   Database storage management

    Tablespaces are supported. Different tables can be stored in different locations. The enterprise edition supports storage engines such as Ustore, Astore, and MOT.

-   Primary/standby deployment

    Supports the ACID feature of transactions, single-node recovery, HA data synchronization, and HA switchover. The enterprise edition provides the CM tool to support database instance status query, primary/standby switchover, log management, and cluster status query and push.

-   Resource pooling

    Supports the resource pooling architecture based on shared storage and shared memory to ensure real-time read consistency on standby nodes.

-   Application programming interface (API)

    Supports standard JDBC 4.0 and ODBC 3.5 features, and Python and Go connection drivers.

-   Management tools

    Provides the installation and deployment tools, instance start and stop tools, backup and restoration tools, scaling tool, and upgrade tool, supports the full-lifecycle data production tool DataKit, MySQL full/incremental/reverse migration tools, and data check tool.

-   Security management

    Supports SSL network connections, user permission management, password management, security auditing, fine-grained ANY permission control, and other functions, to ensure data security at the management, application, system, and network layers.

-   AI

    Supports parameter self-tuning, slow SQL discovery, single query index recommendation, virtual index, workload index recommendation, database metric collection, forecast, and exception detection. The native AI engine in the database supports more than 10 high-performance machine learning algorithms.


## New Features<a name="en-us_topic_0283136327_section383172195410"></a>

This section describes openGauss 5.0.0. Compared with openGauss 3.1.0, it has the following new features:

-   High performance: The performance of basic operators is improved.
    
	The performance of the scan operators and aggregate operators is optimized, improving the end-to-end performance by 37% in the TPC-H 100 GB data scenario.
    -   Parser optimization: The method of searching for keywords in the parser is optimized.
    -   Expression and operator optimization: The expression framework is flattened and the operator performance is optimized.
    -   Inner Unique optimization.
    -   Predicate optimization: New pushdown predicates are obtained through predicate equivalence inference.
    -   Scan operator optimization: The index scanning and full table scanning operators are optimized.
    -   Aggregate operator optimization: The performance of the aggregate operators is optimized.
    
-   High security: user-level audit.
    
    -   User-level audit is supported. The GUC parameter **full\_audit\_users** is added to set the list of audited users. Audit logs are recorded for all SQL statements executed by users in the list. Administrators' operations can be fully audited to audit administrators' access to user data.
    -   The audit operation can be configured based on client information. The GUC parameter **no\_audit\_client** is added to configure the list of clients that do not need to be audited. Audit logs are not recorded for specified client apps and IP addresses.
    -   Audit logs are recorded for high-risk system function calls. The list of system functions that support audit recording must be specified in documents.
    
-   High availability: CM supports VIP management.
    
    -   The host can be directly found based on the virtual IP (VIP), and the reconnection is more accurate and faster (millisecond-level).
    -   When a host is faulty and a new primary CM is selected, the VIP is migrated to the new primary CM.
    -   When two primary nodes exist, only one host can be accessed through the VIP, reducing the risk of data loss.
    
-   High availability: CM can be deployed on two nodes.
    
    -   The third-party gateway IP address is introduced to effectively solve the self-quorum problem in the two-node CM cluster deployment mode. The CMS and DN can be deployed on two nodes.
    -   In addition, the CM cluster failover policy and database cluster split-brain recovery policy can be dynamically configured to ensure cluster data integrity and consistency.
    
-   High availability: The read-only detection capability of CM disks is enhanced.
    
    -   The read-only status is obtained from the database to ensure accuracy.
    -   Read-only quorum arbitrates only the instances that exceed the threshold. Other nodes are not affected.
    -   After the primary server is read-only, a primary/standby switchover is automatically performed. An available standby server is promoted to primary to ensure that the cluster can work properly.
    
-   High availability: CM usability is improved.
    
    -   The CM cluster service can be stopped in one-click mode.
    -   Decoupling from kernel installation and deployment is supported.
    -   User-defined scripts can be invoked by event.
    -   The CM component can be upgraded independently to enhance the reliability of the database cluster.
    -   The CM supports monitoring and management of user-defined components based on the configuration information.
    
-   High intelligence: Exception detection supports self-configuration.
    
    -   To adapt to actual scenarios and avoid resource occupation, DBMind supports self-configuration of exception detection at the system, database, and log layers. Users can add, pause, or delete exception detection items in real time before or during running. Exception detection items support different exception detection algorithms. The exception detection function obtains the intersection of the results of different exception detectors to adapt to specific application scenarios.
    
-   Enterprise-level feature: event trigger.
    
    -   DDL operations in the current database and their target objects are captured and processed.
    -   The following DDL events can be captured: ddl\_command\_start, ddl\_command\_end, sql\_drop, and table\_rewrite.
    
-   Enterprise-level feature: openGauss resource pooling architecture is implemented based on storage pooling, memory pooling, and computing pooling (beta feature).
    
    -   Storage pooling supports multiple storage forms, such as enterprise high-end storage and distributed storage. One data service can be used for multiple types of computing, improving storage utilization by more than 50%.
    -   Memory pooling implements memory interconnection between compute nodes. Transaction information and database cache are synchronized to implement consistent read of multi-version snapshots on multiple nodes. RDMA-accelerated RoCE hardware is used to achieve ultra-low latency and high throughput communication across nodes.
    -   Computing pooling supports diversified computing power. ShardingSphere is used to build the openGauss distributed computing capability, achieving 32-node networking performance > 21 million tpmC.
    -   In terms of cluster management, technologies such as dual heartbeat detection, shared disk quorum , and I/O fencing are used to automatically detect, rectify, and isolate cluster node faults, providing a highly reliable running environment for resource pooling.   
    
-   Application development interface: enhanced JDBC capabilities.

    -   Quick load balancing can be triggered when the cluster status changes.
    -   The heartbeat thread can be enabled to periodically maintain the heartbeat of the primary node. When the primary node is faulty, the old connection is quickly killed and the new connection is connected to the new primary node.

-   Middleware: ShardingSphere supports read/write isolation in multiple modes and cross-database query.

    -   The read/write isolation of statements in a transaction is supported.
    -   The computing capability of the aggregate operator is supported to implement associated query across sharded tables in the database.

-   Middleware: 32-node networking performance of openGauss+ShardingSphere > 21 million tpmC

    -   ShardingSphere uses asynchronous JDBC at the backend to reduce connection consumption. openGauss uses the resource pooling architecture to improve the single-sharding capability. When 32 Kunpeng 920 \(128 cores\) nodes are used for networking \(1 x shardingsphere-proxy ,11 x shardingsphere-jdbc, 20 x openGauss\), the perfect sharding performance is greater than 21 million tpmc.

-   Toolchain: full-lifecycle data production tool DataKit
   
    -   DataKit is positioned as a full-lifecycle data productivity tool of openGauss. It supports full-lifecycle data management, covering openGauss deployment, migration, development, and O&M.
    -   DataKit is a tool kit of openGauss. It uses the browser/server (B/S) software architecture and provides basic software and hardware resource management capabilities such as servers and database instances.
    -   In addition, on-demand deployment of function extensions is supported. Currently, the community provides function extensions such as installation and deployment, data migration, data development, and intelligent O&M.
    -   The DataKit is also a tool development platform that allows users to implement their own functions based on extension interfaces and specifications. Function extensions can be dynamically loaded to and run on the DataKit or dynamically uninstalled from the DataKit. Extensions can invoke open interfaces of the platform and other extensions to obtain corresponding data and functions, implementing quick construction of featured functions.
   
-   Toolchain: MySQL migration tool gs\_rep\_portal
   
    -   gs\_rep\_portal can connect to Debezium+kafka and gs\_mysync to integrate full migration, incremental migration, and data check capabilities, implementing full migration, incremental migration, reverse migration, and data check.
    -   Users are allowed to create parallel migration task flows and customize migration plans. Each migration step is automatically executed based on the preset execution sequence.
    -   The migration progress (including the total amount, remaining amount and time, and replication delay) and statements that fail to be migrated can be displayed.
   
-   Toolchain: MySQL full migration tool gs\_mysync
   
    -   The gs\_mysync (original Chameleon) full migration tool supports progress display and enhanced debugging. The full migration performance is greater than 300 MB/s, that is, 1 TB/h.
   
-   Toolchain: MySQL incremental and reverse migration tool gs\_replicate
   
    -   Incremental migration and reverse migration are incorporated into Debezium+kafka and integrated into gs\_replicate. The incremental migration performance is greater than 30,000 TPS.
   
-   Toolchain: gs\_datacheck based on the Merkle tree
   
    -   The data check performance reaches 70 MB/s.
    -   The row-level, column-level, and table-level data checks are supported.
    -   Data exported from a full migration can be directly read and checked.
   
-   Compatibilities: Compatible with most common MySQL syntax, including data types, operators, system functions, DDL, DML, DCL, and PL/SQL, implementing application migration without modification.
   
    Version 5.0.0 supports the following syntax points: (Only some typical syntax points are listed. For details, see section "MySQL Compatibility" in the *Data Migration Guide*.)
   
    - Data types:
   
      (1) XML type
      (2) Binary data types and operators
      (3) Converting the output of the Boolean type to tinyint
      (4) Signed and unsigned tinyint types

    - System functions: ADDDATE(), ADDTIME(), CONVERT\_TZ(), CURDATE(), DATE\_ADD(), DATE\_FORMAT(), DATE\_SUB(), DATEDIFF(), DAY(), DAYNAME(), EXTRACT(), FROM\_DAYS(), FROM\_UNIXTIME(), GET\_FORMAT(), LAST\_DAY, LOCALTIME(), LOCALTIME, LOCALTIMESTAMP, LOCALTIMESTAMP(), MAKEDATE(), MAKETIME(), MONTH(), MONTHNAME(), NOW(), JSON\_ARRAY(), JSON\_OBJECT(), JSON\_QUOTE(), JSON\_CONTAINS(), JSON\_CONTAINS\_PATH(), JSON\_EXTRACT(), JSON\_UNQUOTE(), JSON\_KEYS(), JSON\_SEARCH(), JSON\_APPEND(), JSON\_ARRAY\_APPEND(), JSON\_ARRAY\_INSERT(), JSON\_INSERT(), JSON\_MERGE(), JSON\_MERGE\_PATCH(), DATABASE(), ROW\_COUNT() and ANY\_VALUE()

    - DDLs:

      (1) The default character set and collation can be set and modified at the schema, table, and column levels. The character set of a table can be converted.
      (2) Columns can be added before the first column of a table or after a specified column.
      (3) The syntax for modifying column names and column definitions is compatible.
      (4) The ALTER TABLE tablename ADD CONSTRAINT UNIQUE INDEX|KEY syntax is supported.
      (5) The CREATE/ALTER/DROP DATABASE can be converted to the CREATE/ALTER/DROP SCHEMA when the character set is specified.
      (6) Indexes can be hidden and index visibility can be set.
      (7) Compatibility with uncommon options in table creation statements is supported, such as checksum and max_rows;
      (8) Columns can be specified when a table is created in CREATE TABLE SELECT mode.
      (9) Columns are case sensitive.
      (10) The dual tables are supported.
      (11) The authid can be used as the column name.

    - DMLs:

      (1) Column aliases can be specified when INSERT is used.
      (2) The SELECT INTO syntax is compatible. OUTFILE, DUMPFILE, and variables are added after SELECT INTO.
      (3) The LOAD DATA statement can be used to import table data.
      (4) The union query can be associated with columns of different types.
      (5) DISTINCT supports ORDER BY with expressions.
      (6) Foreign keys can be associated with non-unique indexes.
      (7) The SELECT statement supports the FORCE keyword to forcibly use the index.
      (8) The SELECT statement supports user-defined variables.
      (9) Views can be inserted, deleted, and updated.
      (10) In an INSERT statement, the right value of an expression following SET can contain the column name.
      (11) Multiple partitions can be specified to query data.
      (12) The default function can be used for SQL statements.

    - DCLs:

      (1) The syntax tree of SET TRANSACTION can be used to set the session level, global isolation level, and read/write permission.
      (2) The event scheduler can be used to periodically execute specified statements at intervals, create, modify, and delete events, and support SHOW EVENTS.
      (3) LOCK TABLE and UNLOCK TABLE are supported.
      (4) SHOW STATUS, SHOW TABLE STATUS, SHOW PRIVILEGES, SHOW WARNING, and SHOW ERRORS are supported.
      (5) The IF NOT EXISTS option is supported when a user is created.
      (6) Users can be specified in the 'user'@'host' format.

    - PLs/SQLs:

      (1) The WHILE loops with labels are supported.
      (2) The CASE WHEN condition control syntax is supported.
      (3) The IF_THEN control syntax is supported.
      (4) The cursor-related syntax is supported.
      (5) The stored procedure processes the condition.
      (6) The DROP TRIGGER supports cascading deletion without specifying the table name.
      (7) The DO statement is supported.
      (8) The stored procedure supports REPEAT.
      (9) The CREATE PROCEDURE SELECT syntax is supported.
      (10) The stored procedure supports RETURN.
      (11) The **as $$begin** and **end; $$language plpgsql** are not added to the beginning and end of CREATE FUNCTION.
      (12) A slash (/) is not added at the end of CREATE TRIGGER.
      (13) DECLARE HANDLER, CONTINUE HANDLER, and EXIT HANDLER are supported.

    - Other syntax compatibility:

      (1) Users are allowed to customize variables to save the result of the SELECT statement.
      (2) Seven character sequences are supported: utf8_general_ci, utf8_bin, utf8_unicode_ci, utf8mb4_general_ci, utf8mb4_bin, and utf8mb4_unicode_ci and binary.
      (3) The utf8mb4 character set is supported.
      (4) The operator behavior is the same as that of MySQL.
      (5) Character strings can be enclosed in double quotation marks.
