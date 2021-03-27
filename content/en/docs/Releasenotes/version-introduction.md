# Version Introduction<a name="EN-US_TOPIC_0289899200"></a>

openGauss 2.0.0 is the first ong-term support \(LTS\) version released by openGauss. The lifecycle of this version is three years. The 2.0.0 version is compatible with the earlier versions. Main functions are as follows:

-   Inherited functions:
    -   SQL standard syntax, UPSERT, data type, XML type, table, temporary table, global temporary table, foreign table, view, materialized view, index, foreign key, Generalized Inverted Index \(GIN\), sequence, function, trigger, ROWNUM, and MEDIAN aggregate function.
    -   Stored procedure, commit/rollback in stored procedure, omission of parameter parentheses \(\) from the stored procedure or function calling, stored procedure debugging, and autonomous transaction.
    -   Security features such as authentication, permission management, network communication security, database audit, and encrypted database.
    -   Primary/standby, logical replication, ultimate recovery time objective \(RTO\), and high availability \(HA\) of the standby node scale-out.
    -   Range partitioning, global partitioned indexes, LIST partitioning, HASH partitioning, and automatically extended partition based on range partitions.
    -   Full physical backup, logical backup, standby node backup, incremental backup and restoration, and point-in-time recovery \(PITR\).
    -   Memory-optimized table \(MOT\), NUMA-based high-performance capability, and parallel query.
    -   Container-based deployment, IPv6, and PostGIS plug-in.
    -   AI capabilities: parameter self-tuning, slow SQL discovery, AI query time forecasting, database metric collection, forecasting, and exception monitoring, and DeepSQL AI algorithms in the library.

-   New features:

    Delayed standby databases, logical replication of standby databases, optimization of scale-out tools, gray upgrade, write amplification of standby database I/O, and workload diagnosis report \(WDR\). In addition, the Data Studio client tool is adapted to multiple features of the kernel.


The MOT, parallel query, and container-based deployment are in the beta test phase. You are welcome to give your comments or participate in the community contribution to improve these functions.

openGauss is a single database kernel. To use openGauss in formal commercial projects, you need to build complete tool chain capabilities such as database monitoring and primary/standby switchover.

This version is maintained every six months.

