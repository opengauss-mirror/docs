# Version Introduction<a name="EN-US_TOPIC_0244801136"></a>

This is the second release \(1.0.1\) of the openGauss. It is a beta version and provides the following functions:

-   Inherited functions:
    -   SQL standard syntax, data types, tables, temporary tables, views, indexes, sequences, stored procedures, functions, and triggers.
    -   Authentication, permission management, network communication security, and database audit.
    -   Primary/Standby cluster, range partitioning, full physical backup, logical backup, ultimate recovery time objective \(RTO\) HA function, memory-optimized table \(MOT\), and NUMA-based high-performance capability.

-   New features:

    XML type, ROWNUM, MEDIAN aggregate function, global temporary table, foreign table, materialized view, foreign key, UPSERT, commit in a stored procedure, omission of parameter parentheses \(\) from the stored procedure or function calling, autonomous transaction, keyword alias, logical replication, incremental backup and restoration, point-in-time recovery \(PITR\), global partitioned index, automatic extended partition based on range partitions, parallel query, IPv6 protocol, GIN index, standby node scale-out, commit/rollback in a stored procedure, stored procedure debugging, container-based deployment, and PostGIS plug-in.


The MOT, ultimate RTO, incremental backup and restoration, global temporary table, parallel query, and container-based deployment are in the beta test phase. You are welcome to give your comments or participate in the community contribution to improve these functions.

openGauss is a single database kernel. To use openGauss in formal commercial projects, you need to build complete tool chain capabilities such as database monitoring and primary/standby switchover.

This version is maintained every six months.

