# Version Introduction<a name="EN-US_TOPIC_0289899200"></a>

openGauss 1.1.0 is positioned as an updated version and is compatible with the features and functions of the 1.0.1 version. It supports the following functions:

-   Inherited functions:
    -   SQL standard syntax, UPSERT, data type, XML type, table, temporary table, global temporary table, foreign table, view, materialized view, index, foreign key, Generalized Inverted Index \(GIN\), sequence, function, trigger, ROWNUM, and MEDIAN aggregate function.
    -   Stored procedure, commit/rollback in stored procedure, omission of parameter parentheses \(\) from the stored procedure or function calling, stored procedure debugging, and autonomous transaction.
    -   Authentication, permission management, network communication security, and database audit.
    -   Primary/standby, logical replication, ultimate recovery time objective \(RTO\), and high availability \(HA\) of the standby node scale-out.
    -   Range partitioning, global partitioned indexes, and automatically extended partition based on range partitions.
    -   Full physical backup, logical backup, incremental backup and restoration, and point-in-time recovery \(PITR\).
    -   Memory-optimized table \(MOT\), NUMA-based high-performance capability, and parallel query.
    -   Container-based deployment, IPv6, and PostGIS plug-in.

-   New features:

    LIST partition, HASH partition, fully-encrypted database, DDL permission granting and revoking, cascaded standby node, character data type length compatible with PostgreSQL, automatic index recommendation, PL/Python, standby node backup, autonomous transaction rebuilding, parallel query rebuilding, and support for the Kirin OS.


The MOT, parallel query, and container-based deployment are in the beta test phase. You are welcome to give your comments or participate in the community contribution to improve these functions.

openGauss is a single database kernel. To use openGauss in formal commercial projects, you need to build complete tool chain capabilities such as database monitoring and primary/standby switchover.

This version is maintained every six months.

