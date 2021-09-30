# Versions<a name="EN-US_TOPIC_0000001208538395"></a>

openGauss 2.1.0 is the preview version released by openGauss. The lifecycle of this version is half a year. 2.1.0 is compatible with the earlier versions. Main functions are as follows:

**Inherited Functions**

-   SQL standard syntax, UPSERT, data type, XML type, table, temporary table, global temporary table, foreign table, view, materialized view, index, foreign key, Generalized Inverted Index \(GIN\), sequence, function, trigger, ROWNUM, and MEDIAN aggregate function.
-   Stored procedure, commit/rollback in stored procedure, omission of parameter parentheses \(\) from the stored procedure or function calling, stored procedure debugging, and autonomous transaction.
-   Security features such as authentication, permission management, network communication security, database audit, and encrypted database.
-   Primary/standby nodes, cascaded standby node, logical replication, ultimate recovery time objective \(RTO\), and high availability \(HA\) of the standby node scale-out.
-   Range partitioning, global partitioned indexes, LIST partitioning, HASH partitioning, and automatically extended partition based on range partitions.
-   Full physical backup, logical backup, standby node backup, incremental backup and restoration, and point-in-time recovery \(PITR\).
-   Memory-optimized table \(MOT\), NUMA-aware high-performance capability, and parallel query.
-   Container-based deployment, IPv6, and PostGIS plug-in.
-   AI capabilities: parameter self-tuning, slow SQL discovery, AI query time forecasting, database indicator collection, forecasting, and exception monitoring, and DeepSQL AI algorithms in the library.
-   Delayed standby node replay, logical replication of standby node, standby Xlog archiving, standby node I/O write amplification optimization, gray upgrade, scale-out tool optimization, database running indicators added to a workload diagnosis report \(WDR\), and enhanced intelligent index recommendation.

**New Features**

-   The stored procedure compatibility is enhanced.
-   The SQL engine capability is enhanced.

-   The Ustore storage engine is supported.
-   Segment-page storage is supported.
-   High availability is based on the Paxos distributed consistency protocol.
-   AI4DB and DB4AI competitiveness is continuously built.
-   The log framework and error codes are modified.
-   JDBC client load is balanced and read and write are isolated.
-   The CMake script compilation is supported.
-   The column-store table supports the primary key constraint and unique key constraint.
-   The jsonb data type is supported.
-   Automatic elimination of unique SQL statements is supported.
-   The UCE fault detection is supported.
-   The GB18030 character set is supported.
-   The standby server catch is optimized.
-   The client tool gsql supports automatic supplement of the readline command.
-   The dynamic data masking is supported.
-   The State Cryptography Administration \(SCA\) algorithms are supported.
-   The tamper-proof ledger database is supported.
-   The built-in role and permission management mechanism is supported.
-   The transparent encryption is supported.
-   The fully-encrypted database is enhanced.
-   The dblink is supported.
-   The Ubuntu system is supported.
-   The hash index is supported.
-   UPSERT supports subqueries.
-   The MIN/MAX function supports the IP address type.
-   The array\_remove, array\_replace, first, and last functions are added.
-   The Data Studio client tool adapts the kernel features.

**Modified Defects**

-   [I435UP](https://gitee.com/opengauss/openGauss-server/issues/I435UP)  An error is reported when the EXPLAIN statement is executed.
-   [I44QS6](https://gitee.com/opengauss/openGauss-server/issues/I44QS6)  When the  **select get\_local\_active\_session\(\) limit 1 ;**  function is executed, the database breaks down.
-   [I4566H](https://gitee.com/opengauss/openGauss-server/issues/I4566H)  After UPDATE GLOBAL INDEX is performed on a partition of a partitioned table, the query result is inconsistent with the master version.
-   [I45822](https://gitee.com/opengauss/openGauss-server/issues/I45822)  An error occurs when the GPC global plan cache information is queried in the global temporary table.
-   [I442TY](https://gitee.com/opengauss/openGauss-server/issues/I442TY)  Failed to recover to the timestamp specified by PITR.
-   [I45T7A](https://gitee.com/opengauss/openGauss-server/issues/I45T7A)  Remote backup is abnormal when the database is installed in environment variable separation mode.
-   [I464G5](https://gitee.com/opengauss/openGauss-server/issues/I464G5)  Failed to use  **gs\_ctl build**  to rebuild a specified non-instance directory on a standby node. The error information is inconsistent.
-   [I45TTB](https://gitee.com/opengauss/openGauss-server/issues/I45TTB)  The foreign table is successfully created for the file type that is not supported by file\_fdw, but no error is reported.
-   [I491CN](https://gitee.com/opengauss/openGauss-server/issues/I491CN)  When the subnet mask of the network address of the cidr type is 32, an error is reported when the MAX function is called.
-   [I496VN](https://gitee.com/opengauss/openGauss-server/issues/I496VN)  After a large number of Xlogs are stacked on the standby node, the archiving address is corrected. As a result, the archiving fails.
-   [I49HRV](https://gitee.com/opengauss/openGauss-server/issues/I49HRV)  When the standby node archiving is enabled, the standby node archiving is slow. After the switchover, the new primary node is abnormal.
-   [I492W4](https://gitee.com/opengauss/openGauss-server/issues/I492W4)  When operations related to the mysql\_fdw and oracle\_fdw foreign tables are performed on the database installed using the OM, a core dump occurs in the database.
-   [I498QT](https://gitee.com/opengauss/openGauss-server/issues/I498QT)  In the maximum availability mode, when the synchronous standby parameter is ANY2 and the primary server is under continuous pressure, running the  **kill-9**  command to stop one synchronous standby server causes transaction congestion on the primary server for 2s.
-   [I49L15](https://gitee.com/opengauss/openGauss-server/issues/I49L15)  Two standby nodes are enabled for archiving. After one node is scaled in and out, the archiving of the other node is abnormal.
-   [I43MTG](https://gitee.com/opengauss/openGauss-server/issues/I43MTG)  The developer guide does not contain information related to new functions.
-   [I42YW8](https://gitee.com/opengauss/openGauss-server/issues/I42YW8)  The UPSERT subquery information is not supplemented.
-   [I45WDH](https://gitee.com/opengauss/openGauss-server/issues/I45WDH)  file\_fdw does not support the fixed format. The related description needs to be deleted from the developer guide.
-   [I484J0](https://gitee.com/opengauss/openGauss-server/issues/I484J0)  The  **gs\_initdb -T**  parameter is not verified, and the value is incorrect after being set according to the guide.
-   [I471CS](https://gitee.com/opengauss/openGauss-server/issues/I471CS)  When  **pgxc\_node\_name**  contains hyphens \(-\), the database exits abnormally. If residual temporary tables are not cleared, automatic clearance and vacuum cannot be performed.
-   [I40QM1](https://gitee.com/opengauss/openGauss-server/issues/I40QM1)  When gs\_basebackup is executed, an exception occurs on the standby node. As a result, the gs\_basebackup process is blocked and cannot exit.
-   [I3RTQK](https://gitee.com/opengauss/openGauss-server/issues/I3RTQK)  The standby node fails to be backed up using gs\_basebackup, and the message "could not fetch mot checkpoint info:, status:7" is displayed.

openGauss is a standalone database. To use openGauss in formal commercial projects, you need to build complete toolchain capabilities such as database monitoring and primary/standby switchover.

