# Versions<a name="EN-US_TOPIC_0289899200"></a>

openGauss 3.1.0 is the preview version released by openGauss in 2022. The lifecycle of this version is 0.5 years. This release contains two database server installation packages: enterprise edition and lite edition. This document applies only to the lite edition.

The 3.1.0 version is compatible with features and functions of earlier versions. The main functions are as follows:

-   Inherited functions:
    -   SQL standard syntax, UPSERT, data type, XML type, table, temporary table, global temporary table, foreign table, view, materialized view, index, foreign key, generalized inverted index \(GIN\), sequence, function, trigger, ROWNUM, MEDIAN aggregate function, JSONB data type, GB18030 character set, UPSERT subquery, and row-store execution to vectorized execution.
    -   Stored procedure, commit/rollback in stored procedure, omission of parameter parentheses \(\) from the stored procedure or function calling, stored procedure debugging, and autonomous transaction.
    -   Security features such as authentication, permission management, network communication security, database audit, SM algorithm, and built-in role and permission management.
    -   HA functions such as primary/standby two-node cluster, cascaded standby node, logical replication, ultimate RTO, standby node scale-out, and Paxos-based distributed consensus framework \(DCF\).
    -   Range partitioning, global partitioned indexes, LIST partitioning, HASH partitioning, and automatically extended partition based on range partitions.
    -   Full physical backup, logical backup, standby node backup, incremental backup and restoration, and point-in-time recovery \(PITR\).
    -   NUMA-aware high-performance optimization, parallel query, Global Syscache, and automatic eviction of unique SQL statements.
    -   Storage features such as delayed standby node replay, logical replication on standby nodes, Xlog archiving on standby nodes, parallel logical decoding, hash index, and row-store table compression.
    -   Load balancing and read/write isolation on the JDBC client, CMake script compilation, container-based deployment, IPv6 protocol, and postgis plug-in.
    -   Toolchain: DataStudio development tool.
    -   Middleware: ShardingSphere, Kubernetes, and openLookeng.

-   New functions:
    -   The performance of basic operators is improved.
    -   Publication-subscription is supported.
    -   The fine-grained Any permission is enhanced.
    -   The compression capability of row-store tables is enhanced.
    -   Middleware: integrates OpenLookeng to provide distributed OLAP capabilities.
    -   Toolchain: MySQL full migration supports parallel migration, improving full migration performance.
    -   Toolchain: MySQL incremental migration supports transaction-level parallel consumption, improving incremental migration performance.
    -   Toolchain: The data verification based on the Merkle tree is supported.
    -   Toolchain: Migration from openGauss to MySQL is supported, meeting MySQL reverse migration requirements.

-   Modified defects:
    -   I5N6E6: After **work\_mem** is set to **4MB** and **try\_vector\_engine\_strategy** is set to **force**, a core dump occurs when a complex subquery is executed.
    -   I5MM6P: After parallel parsing is enabled, an LSN error is returned in the case of multiple transactions. As a result, data is parsed repeatedly after the application is restarted.
    -   I53M9A: TYPE IS TABLE OF prints garbled GBK characters in the GBK environment.
    -   I56S1E: When the column type in the database table is tinyint, the data type obtained by the cursor is str.
    -   I5FIZ1: After the **try\_vector\_engine\_strategy** parameter is set to **force**, a table is created, and an incremental materialized view is created, the result of querying the materialized view is incorrect.
    -   I5E46Z: When **-p** is left blank or the port number is incorrect in the assessment statement, the error message is incorrect.
    -   I5EOSI: The migration tool fails to migrate data online, and the migration tool page keeps refreshing.
    -   I5EDAR: When a user-defined function is migrated, the function body contains return, and an error is reported during migration.
    -   I5E4CE: When **max\_sync\_workers\_per\_subscription** is set to **0**, no message is displayed indicating that basic data cannot be synchronized.
    -   I5EDVY: After data is inserted into a table online, the data is not synchronized to openGauss. After another table is created, the data is migrated to openGauss.
    -   I56B7E: When LIKE.. EXCLUDING is used to create a table, there is no row-store compression parameter.
