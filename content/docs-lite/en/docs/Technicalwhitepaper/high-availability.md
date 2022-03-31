# High Availability<a name="EN-US_CONCEPT_0289895658"></a>

## Primary/Standby<a name="en-us_concept_0283139022_section3473135114413"></a>

To ensure that a fault can be rectified, data needs to be written into multiple copies. Multiple copies are configured for the primary and standby nodes, and logs are used for data synchronization. In this way, openGauss has no data lost when a node is faulty or the system restarts after a stop, meeting the ACID feature requirements. The primary/standby environment supports two modes: primary/standby, and one primary and multiple standbys. In primary/standby mode, if the standby node needs to redo logs, it can be promoted to primary. In the one primary and multiple standbys mode, all standby nodes need to redo logs and can be promoted to primary. The primary/standby mode is mainly used for OLTP systems with general reliability to save storage resources. The one primary and multiple standbys mode provides higher DR capabilities and is suitable for the OLTP system with higher availability transaction processing.

The  **switchover**  command can be used to trigger a switchover between the primary and standby nodes. If the primary node is faulty, the  **failover**  command can be used to promote the standby node to the primary.

To ensure that the failover time is controllable, you can enable the log flow control function to control the rate of sending logs to the standby node. This ensures that the logs accumulated on the standby node will be replayed within the time configured for flow control. After flow control is enabled, the rate of sending logs to the standby node is dynamically adjusted. As a result, the overall transaction performance deteriorates.

In scenarios such as initial installation or backup and restoration, data on the standby node needs to be rebuilt based on the primary node. In this case, the build function is required to send the data and WALs of the primary node to the standby node. When the primary node is faulty and joins again as a standby node, the build function needs to be used to synchronize data and WALs with those of the new primary node. Build includes full build and incremental build. Full build depends on primary node data for rebuild. The amount of data to be copied is large and the time required is long. Incremental build copies only differential files. The amount of data to be copied is small and the time required is short. Generally, the incremental build is preferred for fault recovery. If the incremental build fails, the full build continues until the fault is rectified.

In addition to streaming replication in primary/standby mode, openGauss also supports logical replication. In logical replication, the primary database is called the source database, and the standby database is called the target database. The source database parses the WAL file based on the specified logical parsing rule and parses the DML operation into certain logical change information \(standard SQL statements\). The source database sends standard SQL statements to the target database. After receiving the SQL statements, the target database applies them to implement data synchronization. Logical replication involves only DML operations. Logical replication can implement cross-version replication, heterogeneous database replication, dual-write database replication, and table-level replication.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>In the current Lite scenario, openGauss does not support deployment with one primary and multiple standbys.

## Logical Backup<a name="en-us_concept_0283139022_section11293115015445"></a>

openGauss provides the logical backup capability to back up data in user tables to local disk files in text or CSV format and restore the data in homogeneous or heterogeneous databases.

## Flashback Restoration<a name="section49964184312"></a>

The flashback function is used to restore dropped tables from the recycle bin. Like in a Window OS, dropped table information is stored in the recycle bin of databases. The MVCC mechanism is used to restore data to a specified point in time or system change number \(SCN\).

## Ultimate RTO<a name="section277463514817"></a>

After the ultimate RTO function is enabled, multi-level pipelines are established for Xlog log playback to improve the concurrency and log playback speed.

When the service load is heavy, the playback speed of the standby node cannot catch up with that of the primary node. After the system runs for a long time, logs are accumulated on the standby node. If a host is faulty, data restoration takes a long time and the database is unavailable, which severely affects system availability. The ultimate recovery time object \(RTO\) is enabled to reduce the data recovery time after a host fault occurs and improve availability.

## Logical Replication<a name="section43277417109"></a>

openGauss provides the logical decoding function to reversely parse physical logs into logical logs. Logical replication tools such as DRS convert logical logs to SQL statements and replay the SQL statements in the peer database. In this way, data can be synchronized between heterogeneous databases. Currently, unidirectional and bidirectional logical replication between the openGauss database and the MySQL or Oracle database is supported. DNs reversely parse physical logs to logical logs. Logical replication tools such as DRS extract logical logs from DNs, convert the logs to SQL statements, and replay the SQL statements in MySQL. Logical replication tools also extract logical logs from a MySQL database, reversely parse the logs to SQL statements, and replay the SQL statements in openGauss. In this way, data can be synchronized between heterogeneous databases.

## Publication-Subscription<a name="section75262516558"></a>

Publication-subscription is implemented based on logical replication, with one or more subscribers subscribing to one or more publications on a publisher node. The subscriber pulls data from the publication they subscribe to. Data can be synchronized between clusters in real time. Changes on the publisher are sent to the subscriber as they occur in real time. The subscriber applies the data in the same order as the publisher, so that transactional consistency is guaranteed for publications within a single subscription. This method of data replication is sometimes called transactional replication.

## Point-In-Time Recovery \(PITR\)<a name="en-us_concept_0283139022_section977361551612"></a>

PITR uses basic hot backup, WALs, and WAL archive logs for backup and recovery. When replaying a WAL record, you can stop at any point in time, so that there is a snapshot of the consistent database at any point in time. That is, you can restore the database to the state at any time since the backup starts. During recovery, openGauss supports specifying the recovery stop point as TID, time, and LSN.

