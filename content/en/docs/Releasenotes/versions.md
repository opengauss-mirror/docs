# Versions<a name="EN-US_TOPIC_0289899200"></a>

openGauss 3.0.0 is the second release version of openGauss, and its lifecycle is 3.5 years. This release contains two database server installation packages: enterprise edition and lite edition.

This document applies only to the enterprise edition.

The enterprise edition is compatible with the earlier versions. Main functions are as follows:

-   Inherited functions:
    -   SQL standard syntax, UPSERT, data type, XML type, table, temporary table, global temporary table, foreign table, view, materialized view, index, foreign key, generalized inverted index \(GIN\), sequence, function, trigger, ROWNUM, MEDIAN aggregate function, JSONB data type, GB18030 character set and UPSERT subquery.
    -   Stored procedure, commit/rollback in stored procedure, omission of parameter parentheses \(\) from the stored procedure or function calling, stored procedure debugging, and autonomous transaction.
    -   Security features such as authentication, permission management, network communication security, database audit, fully encrypted database, dynamic masking, Chinese national cryptographic algorithm, tamper-proof ledger database, built-in role and permission management, and transparent encryption.
    -   HA functions such as primary/standby two-node cluster, cascaded standby node, logical replication, ultimate RTO, standby node scale-out, and Paxos-based distributed consensus framework \(DCF\).
    -   Range partitioning, global partitioned indexes, list partitioning, hash partitioning, and interval partitioning \(automatic partitioning based on range partitioning\).
    -   Full physical backup, logical backup, standby node backup, incremental backup and restoration, and point-in-time recovery \(PITR\).
    -   Memory-optimized table \(MOT\), NUMA-aware high-performance capability, and parallel query.
    -   AI capabilities: parameter self-tuning, slow SQL discovery, Predictor \(prediction of AI query time\), Anomaly-detection \(database metric collection, forecast, and exception detection\), and DeepSQL \(AI algorithm in the library\).
    -   Storage features such as delayed standby node replay, logical replication on standby nodes, Xlog archiving on standby nodes, I/O write amplification optimization on standby nodes, gray upgrade, hash index, unique primary key constraint for column-store tables, Ustore storage engine, and segment-page storage.
    -   Database running metrics in WDRs, intelligent index recommendation enhancement, and automatic eviction of unique SQL statements.
    -   Load balancing and read/write isolation on the JDBC client. The gsql client supports automatic completion of the readline command. It supports dblink, Ubuntu, CMake script compilation, container-based deployment, IPv6 protocol, and postgis plug-ins.


-   New functions:
    -   Row-store execution to vectorized execution
    -   Delay of entering the maximum availability mode
    -   Parallel logical decoding
    -   Cluster Manager \(CM\)
    -   global syscache
    -   Publication-Subscription
    -   Foreign key lock enhancement
    -   Row-store table compression
    -   Open-source Data Studio
    -   MySQL to openGauss migration tool Chameleon
    -   Using ShardingSphere to build a distributed database
    -   Deploying a distributed database using Kubernetes
-   Support ANY permission management
    - DBMind componentization
    - In-library AI algorithms support XGBoost, multiclass and PCA
    
-   Fixed defects:
    -   [I4VUXG](https://gitee.com/opengauss/openGauss-server/issues/I4VUXG?from=project-issue): Fixed the data loss issue of unlogged tables.
    -   [I4SF5P](https://gitee.com/opengauss/openGauss-server/issues/I4SF5P?from=project-issue): Fixed the core dump issue occurred by running create extension dblink after the database is compiled and installed in the release version, and the dblink module is compiled and installed.
    -   [I4S74D](https://gitee.com/opengauss/openGauss-server/issues/I4S74D?from=project-issue): Fixed the issue of failing to insert data \(5/5\) into a row-store compressed table using Jmeter when the data volume is greater than 1 GB. The compression type is set to  **2**.
    -   [I4N81J](https://gitee.com/opengauss/openGauss-server/issues/I4N81J?from=project-issue): Fixed the issue of failing to synchronize the UPDATE and DELETE operations to subscribers.
    -   [I4YPJQ](https://gitee.com/opengauss/openGauss-server/issues/I4YPJQ?from=project-issue): Fixed the issue of failing to insert varchar constants into MOTs using JDBC.
    -   [I4PF6G](https://gitee.com/opengauss/openGauss-server/issues/I4PF6G?from=project-issue): Fixed the issue of TPC-C execution failure during foreign key lock enhancement and gray upgrade from 2.0.0. to 2.2.0 \(not committed\).
    -   [I4WPD1](https://gitee.com/opengauss/openGauss-server/issues/I4WPD1?from=project-issue): Fixed the issue of failing to execute simplified installation because the  **openGauss-2.1.0-CentOS-64bit.tar.bz2**  file is missing in the decompressed installation package.
    -   [I4L268](https://gitee.com/opengauss/openGauss-server/issues/I4L268?from=project-issue): Fixed the issue of incorrect system catalog  **pg\_partition**  after the partitioned table is truncated for multiple times and then the  **vacuum freeze pg\_partition**  command is executed.
    -   [I3HZJN](https://gitee.com/opengauss/openGauss-server/issues/I3HZJN?from=project-issue): Fixed the issue of incorrect date format when the  **copy**  command is executed.
    -   [I4HUXD](https://gitee.com/opengauss/openGauss-server/issues/I4HUXD?from=project-issue): Fixed the issue of failing to query the JSONB type.
    -   [I4QDN9](https://gitee.com/opengauss/openGauss-server/issues/I4QDN9?from=project-issue): Fixed the issue of returning a value for  **select 1.79E +308\*2,cume\_dist\(\) over\(order by 1.0E128\*1.2\)**  out of range.
    -   [I4PAVO](https://gitee.com/opengauss/openGauss-server/issues/I4PAVO?from=project-issue): Fixed the issue of failing to identify the  **start with connect by record**  subquery.
    -   [I4UY9A](https://gitee.com/opengauss/openGauss-server/issues/I4UY9A?from=project-issue): Fixed the issue of failing to create the default partition during list partitioning.
    -   [I4W3UB](https://gitee.com/opengauss/openGauss-server/issues/I4W3UB?from=project-issue): Fixed the issue of failing to obtain the view definition when the view is created using a user-defined type and the user-defined type is renamed.
    -   [I4WRMX](https://gitee.com/opengauss/openGauss-server/issues/I4WRMX?from=project-issue): Fixed the issue of failing to clear data in the  **statement\_history**  table. When the database restarts and the  **enable\_stmt\_track**  parameter is disabled, no record should be found in the  **statement\_history**  table.
    -   [I4WOBH](https://gitee.com/opengauss/openGauss-server/issues/I4WOBH?from=project-issue): Fixed the issue of failing to restart the database by setting GUC parameter  **pagewriter\_sleep**  from  **360000**  to  **2000**.


