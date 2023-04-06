# Versions<a name="EN-US_TOPIC_0289899200"></a>

openGauss 3.1.1 is a preview of openGauss 5.0.0 LTS. We hope that community partners and developers can perform scenario-based verification based on this version, detect problems in advance, and report the problems to the community. The community will fix the problems before the LTS version is released. This document applies only to the enterprise edition.

3.1.1 is compatible with the earlier versions. Main functions are as follows:

-   Inherited functions:
    -   Basic functions: standard SQL syntax, data types, tables \(including temporary tables, global temporary tables, and foreign tables\), views, materialized views, foreign keys, indexes \(including B-tree indexes, GIN indexes, and hash indexes\), sequences, functions, triggers, MEDIAN aggregate function, ROWNUM, UPSERT, JSONB data type, and GB18030 character set.
    -   Stored procedure, commit/rollback in a stored procedure, omission of parameter parentheses \(\) from the stored procedure or function calling, and stored procedure debugging
    -   Security functions: authentication, permission management, network communication security, database audit, fully encrypted database, dynamic masking, Chinese national cryptographic algorithm, tamper-proof ledger database, built-in role and permission management, transparent encryption, and ANY permission management.
    -   High availability: primary/standby two-node cluster, cascaded standby node, logical replication, ultimate RTO, standby node scale-out, Paxos-based distributed consensus framework \(DCF\), and two-city three-DC DR.
    -   Enhanced SQL engine: range partitioning, global partitioned index, list partitioning, hash partitioning, automatic extended partitioning based on range partitioning, row-store execution to vectorized execution, autonomous transaction, parallel query, Global Syscache, IPv6 protocol, and postgis plug-ins.
    -   Enhanced storage engine: delayed standby node replay, logical replication on standby nodes, parallel logical decoding, gray upgrade, rolling upgrade, hash index, unique primary key constraint for column-store tables, Ustore storage engine, segment-page storage, publication-subscription, row-store table compression, memory-optimized table (MOT), and NUMA-aware high-performance capability.
    -   Backup and restoration: Full physical backup, logical backup, standby node backup, incremental backup and restoration, and point-in-time recovery \(PITR\).
    -   AI capabilities: parameter self-tuning, slow SQL discovery, AI query time forecasting, database metric collection, forecast, and exception detection, DBMind autonomous O&M platform, intelligent optimizer, intelligent index recommendation, and DeepSQL in-database AI algorithms (supporting XGBoost, multiclass, and PCA).
    -   O&M capabilities: database running metrics in WDRs, diagnosis view for slow SQL statements on the standby node, and automatic eviction of unique SQL statements.
    -   JDBC client load is balanced and read and write are isolated.
    -   Cluster management (CM) supports customized resource management and control, and external status query and push.
    -   Tool chain: development tool DataStudio and data migration tool Chameleon.
    -   Middleware: shardingSphere and openLookeng.
	-   Peripheral ecosystem: dblink, supporting OpenEuler, CentOS, Ubuntu, and FusionOS.
	-   Others: CMake script compilation, container-based deployment, and Kubernetes.
	

-   New functions:
    -   Primary/Standby shared storage
    -   Enhanced MySQL compatibility
    -   CM deployment is decoupled from database deployment. CM supports incremental upgrade.

-   Fixed defects:
    -   I674AZ: pg\_stat\_replication has race conditions and may cause system breakdown.
    -   I6736H: The execution results of the agg statement are inconsistent before and after query\_dop is enabled.
    -   I66TE2: When the Dolphin plug-in is loaded, a deadlock may occur when the database is restarted.
    -   I66FUD: When enable\_memory\_limit is enabled to perform a parallel test, memory is temporaily unavailable. If no extra operation is performed, the database cannot be stopped and the test cannot be ended.
    -   I64N8V: Failed to create a stored procedure with the REPLACE INTO statement.
    -   I648IQ: When **query\_dop** is set to **1**, an error is reported during FULL JOIN query. When **query\_dop** is set to **4**, no error is reported.
    -   I5MM6P: An error is reported when the database connection is configured through the CLI during parameter tuning and diagnosis.
    -   I66XL4: The bit\_xor results of the time type are inconsistent in x86 and ARM.
    -   I66UFT: MySQL is compatible with the partition syntax REORGANIZE. When the partition is reorganized into another type of partition, a core dump occurs in the database.
    -   I667VC: When a character string is inserted into some columns of the uint type, an error is expected to be reported, but the insertion is successful.
    -   I64A4T: In the environment with one primary node, one standby node, and one cascaded node, after the **switchover -A** command is executed, not all nodes are switched to standby nodes.
    -   I5YS5B: When CM is uninstalled using an XML file containing CM, the uninstallation is successful. When gs\_om is used to query the status, a message is displayed indicating that the cm\_ctl command is unavailable.
    -   I66CXK: When the data at the source and sink ends is inconsistent, the incremental verification result does not contain the repair statement.
