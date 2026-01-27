# Release Notes

## Terms of Use

**Copyright © Huawei Technologies Co., Ltd. 2022.**

Your replication, use, modification, and distribution of this document are governed by the Creative Commons License Attribution-ShareAlike 4.0 International Public License \(CC BY-SA 4.0\). You can visit [https://creativecommons.org/licenses/by-sa/4.0/](https://creativecommons.org/licenses/by-sa/4.0/) to view a human-readable summary of \(and not a substitute for\) CC BY-SA 4.0. For the complete CC BY-SA 4.0, visit [https://creativecommons.org/licenses/by-sa/4.0/legalcode](https://creativecommons.org/licenses/by-sa/4.0/legalcode).

Certain document contents (such as standard APIs and parameter descriptions) on this website are from the official PostgreSQL website (<https://www.postgresql.org/docs/>) and comply with the following protocols:
PostgreSQL is Copyright © 1996–2020 by the PostgreSQL Global Development Group.
Postgres95 is Copyright © 1994–5 by the Regents of the University of California.

Permission to use, copy, modify, and distribute this software and its documentation for any purpose, without fee, and without a written agreement is hereby granted, provided that the above copyright notice and this paragraph and the following two paragraphs appear in all copies.

IN NO EVENT SHALL THE UNIVERSITY OF CALIFORNIA BE LIABLE TO ANY PARTY FOR DIRECT, INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, ARISING OUT OF THE USE OF THIS SOFTWARE AND ITS DOCUMENTATION, EVEN IF THE UNIVERSITY OF CALIFORNIA HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

THE UNIVERSITY OF CALIFORNIA SPECIFICALLY DISCLAIMS ANY WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE SOFTWARE PROVIDED HEREUNDER IS ON AN  "AS-IS"  BASIS, AND THE UNIVERSITY OF CALIFORNIA HAS NO OBLIGATIONS TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS, OR MODIFICATIONS.

**Trademarks and Permissions**

openGauss is a trademark of Huawei Technologies Co., Ltd. All other trademarks and registered trademarks mentioned in this document are the property of their respective holders.

**Disclaimer**

This document is used only as a guide. Unless otherwise specified by applicable laws or agreed by both parties in written form, all statements, information, and recommendations in this document are provided "AS IS" without warranties, guarantees or representations of any kind, including but not limited to non-infringement, timeliness, and specific purposes.

## User Notice<a name="EN-US_TOPIC_0289899191"></a>

openGauss is an open-source, secure, and reliable relational OLTP database with ultimate performance. It is released with the Mulan PSL v2 protocol, allowing users to copy, use, modify, and distribute the source code.

The version number of openGauss follows the format of X.Y.0-RCx, which aims to distinguish different types of version updates. Specifically:

- LTS version (X.0.0): It is released every two years and marks a long-term stable support version, which is suitable for large-scale deployment and use in production environments. The community commits to providing maintenance support for each LTS version for a period of three years to ensure its continuous stability and security.
- Innovation version (X.Y.0-RCx): It is launched every six months and aims for rapid iteration, providing the latest features and technology previews. These versions are mainly used for user testing and innovation cooperation. The community will provide maintenance support for a period of six months to encourage exploration and feedback.
- Patch version (X.Y.0): When major issues are encountered, it will be released in a timely manner, aiming to quickly fix critical errors and ensure the stable operation of the system.  

## Versions<a name="EN-US_TOPIC_0289899200"></a>

openGauss 5.0.0 is the third LTS version of openGauss, and its lifecycle is three years. This document applies only to the enterprise edition.

5.0.0 is compatible with the earlier versions. Main functions are as follows:

- Inherited functions:

  - Basic functions: standard SQL syntax, data types, tables \(including temporary tables, global temporary tables, and foreign tables\), views, materialized views, foreign keys, indexes \(including B-tree indexes, GIN indexes, and hash indexes\), sequences, functions, triggers, MEDIAN aggregate function, ROWNUM, UPSERT, JSONB data type, and GB18030 character set.
  - Enhanced SQL engine: range partitioning, global partitioned index, list partitioning, hash partitioning, automatic extended partitioning based on range partitioning, row-store execution to vectorized execution, autonomous transaction, parallel query, Global SysCache, IPv6 protocol, and PostGIS extensions.
  - Enhanced storage engine: delayed standby node replay, logical replication on standby nodes, parallel logical decoding, gray upgrade, rolling upgrade, hash index, unique primary key constraint for column-store tables, Ustore storage engine, segment-page storage, publication-subscription, row-store table compression, memory-optimized table (MOT), and NUMA-aware high-performance capability.
  - Stored procedure, commit/rollback in a stored procedure, omission of parameter parentheses \(\) from the stored procedure or function calling, and stored procedure debugging.
  - Security functions: authentication, permission management, network communication security, database audit, fully encrypted database, dynamic masking, Chinese national cryptographic algorithm, tamper-proof ledger database, built-in role and permission management, transparent encryption, and ANY permission management.
  - High availability: primary/standby two-node cluster, cascaded standby node, logical replication, ultimate RTO, standby node scale-out, Paxos-based distributed consensus framework \(DCF\), and two-city three-DC DR.
  - Backup and restoration: Full physical backup, logical backup, standby node backup, incremental backup and restoration, and point-in-time recovery \(PITR\).
  - AI capabilities: parameter self-tuning, slow SQL discovery, AI query time forecasting, database metric collection, forecast, and exception detection, DBMind autonomous O&M platform, intelligent optimizer, intelligent index recommendation, and DeepSQL in-database AI algorithms (supporting XGBoost, multiclass, and PCA).
  - O&M capabilities: database running metrics in WDRs, diagnosis view for slow SQL statements on the standby node, and automatic eviction of unique SQL statements.
  - JDBC client load is balanced and read and write are isolated.
  - Cluster management (CM) supports customized resource management and control, and external status query and push.
  - Toolchain: development tool DataStudio, MySQL full migration tool, incremental migration tool, reverse migration tool, and data check tool.
  - Middleware: ShardingSphere and openLookeng.
  - Peripheral ecosystem: dblink, supporting openEuler, CentOS, and FusionOS.
  - Others: CMake script compilation, container-based deployment, and Kubernetes.

- New functions:
  - High performance: The performance of basic operators is improved. (For details, see the feature description.)
  - High performance: The SCRLock feature improves distributed lock performance. 
  - High security: user-level audit.
  - High availability: CM supports VIP management.
  - High availability: CM can be deployed on two nodes.
  - High availability: The read-only detection capability of CM disks is enhanced.
  - High availability: CM usability is improved.
  - High intelligence: Exception detection supports self-configuration.
  - Enterprise-level feature: event trigger.
  - Enterprise-level feature: openGauss resource pooling architecture is implemented based on storage pooling, memory pooling, and computing pooling (beta feature).
  - Enterprise-level feature: The Unified Write-Ahead Log \(UWAL\) feature accelerates the Write-Ahead Log \(WAL\) performance of the database.
  - Application development interface: enhanced JDBC capabilities.
  - Middleware: ShardingSphere supports read/write isolation in multiple modes and cross-database query.
  - Middleware: 32-node networking performance of openGauss+ShardingSphere > 21 million tpmC
  - Toolchain: full-lifecycle data production tool DataKit
  - Toolchain: MySQL migration tool gs\_rep\_portal
  - Toolchain: MySQL incremental and reverse migration tool gs\_replicate
  - Toolchain: gs\_datacheck based on the Merkle tree
  - Compatibilities: Compatible with most common MySQL syntax, including data types, operators, system functions, DDL, DML, DCL, and PL/SQL, implementing application migration without modification.

- Fixed defects:
    - I6NVAB: An error is reported during rollback and forcible rollback after gray upgrade from 3.0.3 to 5.0.0.
    - I6NK8U: When a publication/subscription name is changed to an existing name, the error message "ERROR: unsupported object class xxx" is displayed.
    - I6N2QD: When ESCAPE is used in SIMILAR TO, if the escape character is Chinese, an error is reported. If the LIKE escape character is Chinese, the operation is successful.
    - I6MOCS: In the B-compatible database, if the partition key of a level-2 partitioned table is the year function, an unknown error is reported when pg\_get\_tabledef is used after the ADD PARTITION operation is performed.
    - I6LMTU: In B-compatible mode, objects in backquotes are not supported.
    - I6KO5S: [Resource pooling] When the upgrade command is executed to upgrade shared storage, the upgrade fails.
    - I6KRZ6: [Resource pooling] The **dsscmd du -p +data -f a** command calculates only directories but not files.
    - I6IZH9: [Resource Pooling] The reform fails and does not enter the next round. The cluster is suspended.
    - I6O0K6: The versions 2.0.1, 2.0.0, and 2.0.5 without the CM tool fail to be committed after being gray upgraded to version 5.0.0 with the CM tool.
    - I61OX7: No error is reported when the value of the CM agent parameter **log\_dir** is changed to null. After the CM agent is restarted for the change to take effect, no new CM agent log is generated.
    - I6K2BZ: Chameleon migration fails due to double quotation marks.
    - I6KIWQ: During Debezium+kafka incremental migration, the timestamp after the migration is incorrect.
    - I6I640: When the data check tool is used to check data in 150,000 tables, the check process is suspended.

## Features<a name="EN-US_TOPIC_0289899195"></a>

- Standard SQL support

    Supports SQL-92, SQL-99, SQL:2003, and SQL:2011 standards, GBK and UTF-8 character sets, SQL standard functions and analytic functions, and stored procedures.

- Database storage management

    Tablespaces are supported. Different tables can be stored in different locations. The enterprise edition supports storage engines such as Ustore, Astore, and MOT.

- Primary/standby deployment

    Supports the ACID feature of transactions, single-node recovery, HA data synchronization, and HA switchover. The enterprise edition provides the CM tool to support database instance status query, primary/standby switchover, log management, and cluster status query and push.

- Resource pooling

    Supports the resource pooling architecture based on shared storage and shared memory to ensure real-time read consistency on standby nodes.

- Application programming interface (API)

    Supports standard JDBC 4.0 and ODBC 3.5 features, and Python and Go connection drivers.

- Management tools

    Provides the installation and deployment tools, instance start and stop tools, backup and restoration tools, scaling tool, and upgrade tool, supports the full-lifecycle data production tool DataKit, MySQL full/incremental/reverse migration tools, and data check tool.

- Security management

    Supports SSL network connections, user permission management, password management, security auditing, fine-grained ANY permission control, and other functions, to ensure data security at the management, application, system, and network layers.

- AI

    Supports parameter self-tuning, slow SQL discovery, single query index recommendation, virtual index, workload index recommendation, database metric collection, forecast, and exception detection. The native AI engine in the database supports more than 10 high-performance machine learning algorithms.

### New Features<a name="en-us_topic_0283136327_section383172195410"></a>

This section describes openGauss 5.0.0. Compared with openGauss 3.1.0, it has the following new features:

- High performance: The performance of basic operators is improved.
    
 The performance of the scan operators and aggregate operators is optimized, improving the end-to-end performance by 37% in the TPC-H 100 GB data scenario.
    - Parser optimization: The method of searching for keywords in the parser is optimized.
    - Expression and operator optimization: The expression framework is flattened and the operator performance is optimized.
    - Inner Unique optimization.
    - Predicate optimization: New pushdown predicates are obtained through predicate equivalence inference.
    - Scan operator optimization: The index scanning and full table scanning operators are optimized.
    - Aggregate operator optimization: The performance of the aggregate operators is optimized.

- High performance: SCRLock provides the distributed lock capability to improve distributed lock performance.

    - SCRLock provides distributed locks in optimistic mode based on the RDMA protocol. The RDMA network improves the efficiency of obtaining locks, and the optimistic mode features a simplified process.
    - SCRLock ensures lock fairness and prevents permanent waiting events in a cluster.
    - SCRLock also provides the local lock cache capability to reduce the frequency of obtaining remote locks, reducing the latency. 

- High security: user-level audit.
    
    - User-level audit is supported. The GUC parameter **full\_audit\_users** is added to set the list of audited users. Audit logs are recorded for all SQL statements executed by users in the list. Administrators' operations can be fully audited to audit administrators' access to user data.
    - The audit operation can be configured based on client information. The GUC parameter **no\_audit\_client** is added to configure the list of clients that do not need to be audited. Audit logs are not recorded for specified client apps and IP addresses.
    - Audit logs are recorded for high-risk system function calls. The list of system functions that support audit recording must be specified in documents.
    
- High availability: CM supports VIP management.
    
    - The host can be directly found based on the virtual IP (VIP), and the reconnection is more accurate and faster (millisecond-level).
    - When a host is faulty and a new primary CM is selected, the VIP is migrated to the new primary CM.
    - When two primary nodes exist, only one host can be accessed through the VIP, reducing the risk of data loss.
    
- High availability: CM can be deployed on two nodes.
    
    - The third-party gateway IP address is introduced to effectively solve the self-quorum problem in the two-node CM cluster deployment mode. The CMS and DN can be deployed on two nodes.
    - In addition, the CM cluster failover policy and database cluster split-brain recovery policy can be dynamically configured to ensure cluster data integrity and consistency.
    
- High availability: The read-only detection capability of CM disks is enhanced.
    
    - The read-only status is obtained from the database to ensure accuracy.
    - Read-only quorum arbitrates only the instances that exceed the threshold. Other nodes are not affected.
    - After the primary server is read-only, a primary/standby switchover is automatically performed. An available standby server is promoted to primary to ensure that the cluster can work properly.
    
- High availability: CM usability is improved.
    
    - The CM cluster service can be stopped in one-click mode.
    - Decoupling from kernel installation and deployment is supported.
    - User-defined scripts can be invoked by event.
    - The CM component can be upgraded independently to enhance the reliability of the database cluster.
    - The CM supports monitoring and management of user-defined components based on the configuration information.
    
- High intelligence: Exception detection supports self-configuration.
    
    - To adapt to actual scenarios and avoid resource occupation, DBMind supports self-configuration of exception detection at the system, database, and log layers. Users can add, pause, or delete exception detection items in real time before or during running. Exception detection items support different exception detection algorithms. The exception detection function obtains the intersection of the results of different exception detectors to adapt to specific application scenarios.
    
- Enterprise-level feature: event trigger.
    
    - DDL operations in the current database and their target objects are captured and processed.
    - The following DDL events can be captured: ddl\_command\_start, ddl\_command\_end, sql\_drop, and table\_rewrite.
    
- Enterprise-level feature: openGauss resource pooling architecture is implemented based on storage pooling, memory pooling, and computing pooling (beta feature).
    
    - Storage pooling supports multiple storage forms, such as enterprise high-end storage and distributed storage. One data service can be used for multiple types of computing, improving storage utilization by more than 50%.
    - Memory pooling implements memory interconnection between compute nodes. Transaction information and database cache are synchronized to implement consistent read of multi-version snapshots on multiple nodes. RDMA-accelerated RoCE hardware is used to achieve ultra-low latency and high throughput communication across nodes.
    - Computing pooling supports diversified computing power. ShardingSphere is used to build the openGauss distributed computing capability, achieving 32-node networking performance > 21 million tpmC.
    - In terms of cluster management, technologies such as dual heartbeat detection, shared disk quorum , and I/O fencing are used to automatically detect, rectify, and isolate cluster node faults, providing a highly reliable running environment for resource pooling.   

- Enterprise-level feature: UWAL accelerates the WAL performance of the database.
    - The database and UWAL component are combined to accelerate the WAL performance of the database.
    - This feature solves the problem of performance loss during active/standby streaming replication and improves the performance of active/standby transaction submission as well as streaming replication and transmission.  

- Application development interface: enhanced JDBC capabilities.

    - Quick load balancing can be triggered when the cluster status changes.
    - The heartbeat thread can be enabled to periodically maintain the heartbeat of the primary node. When the primary node is faulty, the old connection is quickly killed and the new connection is connected to the new primary node.

- Middleware: ShardingSphere supports read/write isolation in multiple modes and cross-database query.

    - The read/write isolation of statements in a transaction is supported.
    - The computing capability of the aggregate operator is supported to implement associated query across sharded tables in the database.

- Middleware: 32-node networking performance of openGauss+ShardingSphere > 21 million tpmC

    - ShardingSphere uses asynchronous JDBC at the backend to reduce connection consumption. openGauss uses the resource pooling architecture to improve the single-sharding capability. When 32 Kunpeng 920 \(128 cores\) nodes are used for networking \(1 x shardingsphere-proxy ,11 x shardingsphere-jdbc, 20 x openGauss\), the perfect sharding performance is greater than 21 million tpmc.

- Toolchain: full-lifecycle data production tool DataKit
   
    - DataKit is positioned as a full-lifecycle data productivity tool of openGauss. It supports full-lifecycle data management, covering openGauss deployment, migration, development, and O&M.
    - DataKit is a tool kit of openGauss. It uses the browser/server (B/S) software architecture and provides basic software and hardware resource management capabilities such as servers and database instances.
    - In addition, on-demand deployment of function extensions is supported. Currently, the community provides function extensions such as installation and deployment, data migration, data development, and intelligent O&M.
    - The DataKit is also a tool development platform that allows users to implement their own functions based on extension interfaces and specifications. Function extensions can be dynamically loaded to and run on the DataKit or dynamically uninstalled from the DataKit. Extensions can invoke open interfaces of the platform and other extensions to obtain corresponding data and functions, implementing quick construction of featured functions.
   
- Toolchain: MySQL migration tool gs\_rep\_portal
   
    - gs\_rep\_portal can connect to Debezium+kafka and gs\_mysync to integrate full migration, incremental migration, and data check capabilities, implementing full migration, incremental migration, reverse migration, and data check.
    - Users are allowed to create parallel migration task flows and customize migration plans. Each migration step is automatically executed based on the preset execution sequence.
    - The migration progress (including the total amount, remaining amount and time, and replication delay) and statements that fail to be migrated can be displayed.
   
- Toolchain: MySQL full migration tool gs\_mysync
   
    - The gs\_mysync (original Chameleon) full migration tool supports progress display and enhanced debugging. The full migration performance is greater than 300 MB/s, that is, 1 TB/h.
   
- Toolchain: MySQL incremental and reverse migration tool gs\_replicate
   
    - Incremental migration and reverse migration are incorporated into Debezium+kafka and integrated into gs\_replicate. The incremental migration performance is greater than 30,000 TPS.
   
- Toolchain: gs\_datacheck based on the Merkle tree
   
    - The data check performance reaches 70 MB/s.
    - The row-level, column-level, and table-level data checks are supported.
    - Data exported from a full migration can be directly read and checked.
   
- Compatibilities: Compatible with most common MySQL syntax, including data types, operators, system functions, DDL, DML, DCL, and PL/SQL, implementing application migration without modification.
   
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

## Important Notes<a name="EN-US_TOPIC_0289899192"></a>

- For details about technical specifications, see the *Technical White Paper*.
- You can select a deployment architecture based on the database deployment solutions in the *Database Management Guide* to ensure the reliability and availability of the database cluster.
- The resource pooling primary/standby shared storage feature is a beta feature and is in the trial phase.

## Known Issues<a name="EN-US_TOPIC_0289899194"></a>

- openGauss cannot monitor file permissions and slow disks. When the file permission is abnormal, the database exits and the corresponding information is recorded in logs. On a slow disk, the response to database operations is slower than usual.

- The read-only mode of the standby node and cascaded standby node is incompatible with the ultimate RTO feature. If the ultimate RTO feature is enabled, disable the read-only mode of the standby node and cascaded standby node.

- Memory Optimized Tables (MOTs) are incompatible with the incremental checkpoint feature. If MOTs are used, disable the incremental checkpoint function.

- LLVM does not support the Arm architecture. When the MOT TPC-C is imported, an LLVM error is reported. To avoid this problem, disable the JIT function using the **enable\_mot\_codegen** parameter. You can configure **force\_mot\_pseudo\_codegen= true** to reduce the impact on TPC-C test performance when the JIT function is disabled.

## Common Vulnerabilities and Exposures \(CVEs\)<a name="EN-US_TOPIC_0289899199"></a>

This is the tenth release of openGauss. The disclosed CVEs have been fixed.

## Resolved Issues<a name="EN-US_TOPIC_0289899193"></a>

This is the tenth release of openGauss. The disclosed CVEs have been fixed.

## Source Code<a name="EN-US_TOPIC_0289899190"></a>

openGauss contains the following 18 code repositories.

- Open-source software code repository: [https://gitcode.com/opengauss/openGauss-third\_party](https://gitcode.com/opengauss/openGauss-third_party)

- JDBC driver code repository: [https://gitcode.com/opengauss/openGauss-connector-jdbc](https://gitcode.com/opengauss/openGauss-connector-jdbc)

- ODBC driver code repository: [https://gitcode.com/opengauss/openGauss-connector-odbc](https://gitcode.com/opengauss/openGauss-connector-odbc)
- Database server code repository: [https://gitcode.com/opengauss/openGauss-server](https://gitcode.com/opengauss/openGauss-server)
- Autonomous O&M platform DBMind code repository: [https://gitcode.com/opengauss/openGauss-DBMind](https://gitcode.com/opengauss/openGauss-DBMind)
- OM tool code repository: [https://gitcode.com/opengauss/openGauss-OM](https://gitcode.com/opengauss/openGauss-OM)
- CM tool code repository: [https://gitcode.com/opengauss/CM](https://gitcode.com/opengauss/CM)
- Database distributed memory service \(DMS\) component code repository: [https://gitcode.com/opengauss/DMS](https://gitcode.com/opengauss/DMS)
- Database distributed storage service \(DSS\) component code repository: [https://gitcode.com/opengauss/DSS](https://gitcode.com/opengauss/DSS)
- DCF code repository: [https://gitcode.com/opengauss/DCF](https://gitcode.com/opengauss/DCF)
- DCC code repository: [https://gitcode.com/opengauss/DCC](https://gitcode.com/opengauss/DCC)
- Plug-in code repository: [https://gitcode.com/opengauss/Plugin](https://gitcode.com/opengauss/Plugin)
- MySQL-to-openGauss full migration tool code repository: [https://gitcode.com/opengauss/openGauss-tools-chameleon](https://gitcode.com/opengauss/openGauss-tools-chameleon)
- MySQL incremental/reverse migration tool code repository: [https://gitcode.com/opengauss/debezium](https://gitcode.com/opengauss/debezium)
- Data verification tool code repository: [https://gitcode.com/opengauss/openGauss-tools-datachecker-performance](https://gitcode.com/opengauss/openGauss-tools-datachecker-performance)
- Prometheus-exporter code repository: [https://gitcode.com/opengauss/openGauss-prometheus-exporter](https://gitcode.com/opengauss/openGauss-prometheus-exporter)
- Database monitoring plug-in generation tool code repository: [https://gitcode.com/opengauss/openGauss-tools-monitor](https://gitcode.com/opengauss/openGauss-tools-monitor)
- Document repository: [https://gitcode.com/opengauss/docs](https://gitcode.com/opengauss/docs)

## Contribution<a name="EN-US_TOPIC_0289899196"></a>

**Participating in Contribution**

As an openGauss user, you can contribute to the openGauss community in multiple ways. For details about how to contribute to the community, see [Contribution](https://opengauss.org/en/contribution/). Here, some methods are listed for reference.

**Special Interest Groups \(SIGs\)**

openGauss brings together people of common interest to form different SIGs. For details about existing SIGs, see the [SIG list](https://opengauss.org/en/contribution/).

You are welcome to join an existing SIG or create a SIG. For details about how to create a SIG, see [Special Interest Group \(SIG\)](https://gitcode.com/opengauss/tc/blob/master/sigs/README.en.md/).

**Mail List and Issues**

You are welcome to actively help users solve problems raised in the [mail list](https://opengauss.org/en/community/onlineCommunication/) and issues \(including [code repository issues](https://gitee.com/organizations/opengauss/issues)\). In addition, you can commit an issue. All these will help the openGauss community develop better.

**Documents**

You can contribute to the community by committing code. We also welcome your feedback on problems and difficulties, or suggestions on improving the usability and integrity of documents, for example, problems encountered when obtaining software or documents and difficulties encountered when using the system. You are welcome to pay attention to and help us improve the documentation module of the openGauss community.

## Acknowledgement<a name="EN-US_TOPIC_0289899198"></a>

We sincerely thank all the members who participated in and assisted in the openGauss project, including Huawei, ENMOTECH, VASTDATA, China Unicom, GBASE, Greater Bay Area National Center of Technology Innovation (GBA NCTI), iSoftStone, Beijing SuperMap Software Co., Ltd., China Minsheng Banking, SHENTONGDATA, School of Computer Science and Engineering of UESTC, School of Information Engineering of Ningxia University, School of Software Engineering of SCUT, School of Computer Science and Engineering of Sun Yat-sen University, School of Information Engineering of Minzu University of China, Xi'an Rita Network Technology Co., Ltd., SphereEx, and SANGFOR. It is your hard work to make the version released successfully and provide the possibility for the better development of openGauss.
