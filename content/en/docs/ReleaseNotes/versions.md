# Versions<a name="EN-US_TOPIC_0289899200"></a>

openGauss 5.0.0 is the third LTS version of openGauss, and its lifecycle is three years. This document applies only to the enterprise edition.

5.0.0 is compatible with the earlier versions. Main functions are as follows:

- Inherited functions:

  -   Basic functions: standard SQL syntax, data types, tables \(including temporary tables, global temporary tables, and foreign tables\), views, materialized views, foreign keys, indexes \(including B-tree indexes, GIN indexes, and hash indexes\), sequences, functions, triggers, MEDIAN aggregate function, ROWNUM, UPSERT, JSONB data type, and GB18030 character set.
  -   Enhanced SQL engine: range partitioning, global partitioned index, list partitioning, hash partitioning, automatic extended partitioning based on range partitioning, row-store execution to vectorized execution, autonomous transaction, parallel query, Global SysCache, IPv6 protocol, and PostGIS extensions.
  -   Enhanced storage engine: delayed standby node replay, logical replication on standby nodes, parallel logical decoding, gray upgrade, rolling upgrade, hash index, unique primary key constraint for column-store tables, Ustore storage engine, segment-page storage, publication-subscription, row-store table compression, memory-optimized table (MOT), and NUMA-aware high-performance capability.
  -   Stored procedure, commit/rollback in a stored procedure, omission of parameter parentheses \(\) from the stored procedure or function calling, and stored procedure debugging.
  -   Security functions: authentication, permission management, network communication security, database audit, fully encrypted database, dynamic masking, Chinese national cryptographic algorithm, tamper-proof ledger database, built-in role and permission management, transparent encryption, and ANY permission management.
  -   High availability: primary/standby two-node cluster, cascaded standby node, logical replication, ultimate RTO, standby node scale-out, Paxos-based distributed consensus framework \(DCF\), and two-city three-DC DR.
  -   Backup and restoration: Full physical backup, logical backup, standby node backup, incremental backup and restoration, and point-in-time recovery \(PITR\).
  -   AI capabilities: parameter self-tuning, slow SQL discovery, AI query time forecasting, database metric collection, forecast, and exception detection, DBMind autonomous O&M platform, intelligent optimizer, intelligent index recommendation, and DeepSQL in-database AI algorithms (supporting XGBoost, multiclass, and PCA).
  -   O&M capabilities: database running metrics in WDRs, diagnosis view for slow SQL statements on the standby node, and automatic eviction of unique SQL statements.
  -   JDBC client load is balanced and read and write are isolated.
  -   Cluster management (CM) supports customized resource management and control, and external status query and push.
  -   Toolchain: development tool DataStudio, MySQL full migration tool, incremental migration tool, reverse migration tool, and data check tool.
  -   Middleware: ShardingSphere and openLookeng.
  -   Peripheral ecosystem: dblink, supporting openEuler, CentOS, and FusionOS.
  -   Others: CMake script compilation, container-based deployment, and Kubernetes.

- New functions:
  -   High performance: The performance of basic operators is improved. (For details, see the feature description.)
  -   High security: user-level audit.
  -   High availability: CM supports VIP management.
  -   High availability: CM can be deployed on two nodes.
  -   High availability: The read-only detection capability of CM disks is enhanced.
  -   High availability: CM usability is improved.
  -   High intelligence: Exception detection supports self-configuration.
  -   Enterprise-level feature: event trigger.
  -   Enterprise-level feature: openGauss resource pooling architecture is implemented based on storage pooling, memory pooling, and computing pooling (beta feature).
  -   Application development interface: enhanced JDBC capabilities.
  -   Middleware: ShardingSphere supports read/write isolation in multiple modes and cross-database query.
  -   Middleware: 32-node networking performance of openGauss+ShardingSphere > 21 million tpmC
  -   Toolchain: full-lifecycle data production tool DataKit
  -   Toolchain: MySQL migration tool gs\_rep\_portal
  -   Toolchain: MySQL incremental and reverse migration tool gs\_replicate
  -   Toolchain: gs\_datacheck based on the Merkle tree
  -   Compatibilities: Compatible with most common MySQL syntax, including data types, operators, system functions, DDL, DML, DCL, and PL/SQL, implementing application migration without modification.

-   Fixed defects:
    -   I6NVAB: An error is reported during rollback and forcible rollback after gray upgrade from 3.0.3 to 5.0.0.
    -   I6NK8U: When a publication/subscription name is changed to an existing name, the error message "ERROR: unsupported object class xxx" is displayed.
    -   I6N2QD: When ESCAPE is used in SIMILAR TO, if the escape character is Chinese, an error is reported. If the LIKE escape character is Chinese, the operation is successful.
    -   I6MOCS: In the B-compatible database, if the partition key of a level-2 partitioned table is the year function, an unknown error is reported when pg\_get\_tabledef is used after the ADD PARTITION operation is performed.
    -   I6LMTU: In B-compatible mode, objects in backquotes are not supported.
    -   I6KO5S: [Resource pooling] When the upgrade command is executed to upgrade shared storage, the upgrade fails.
    -   I6KRZ6: [Resource pooling] The **dsscmd du -p +data -f a** command calculates only directories but not files.
    -   I6IZH9: [Resource Pooling] The reform fails and does not enter the next round. The cluster is suspended.
    -   I6O0K6: The versions 2.0.1, 2.0.0, and 2.0.5 without the CM tool fail to be committed after being gray upgraded to version 5.0.0 with the CM tool.
    -   I61OX7: No error is reported when the value of the CM agent parameter **log\_dir** is changed to null. After the CM agent is restarted for the change to take effect, no new CM agent log is generated.
    -   I6K2BZ: Chameleon migration fails due to double quotation marks.
    -   I6KIWQ: During Debezium+kafka incremental migration, the timestamp after the migration is incorrect.
    -   I6I640: When the data check tool is used to check data in 150,000 tables, the check process is suspended.
