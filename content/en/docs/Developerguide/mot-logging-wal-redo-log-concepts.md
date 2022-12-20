# MOT Logging – WAL Redo Log Concepts<a name="EN-US_TOPIC_0270171532"></a>

## Overview<a name="section1312831316145"></a>

Write-Ahead Logging \(WAL\) is a standard method for ensuring data durability. The main concept of WAL is that changes to data files \(where tables and indexes reside\) are only written after those changes have been logged, meaning only after the log records that describe the changes have been flushed to permanent storage.

The MOT is fully integrated with the openGauss envelope logging facilities. In addition to durability, another benefit of this method is the ability to use the WAL for replication purposes.

Three logging methods are supported, two standard Synchronous and Asynchronous, which are also supported by the standard openGauss disk-engine. In addition, in the MOT a Group-Commit option is provided with special NUMA-Awareness optimization. The Group-Commit provides the top performance while maintaining ACID properties.

To ensure Durability, MOT is fully integrated with the openGauss's Write-Ahead Logging \(WAL\) mechanism, so that MOT persists data in WAL records using openGauss's XLOG interface. This means that every addition, update, and deletion to an MOT table's record is recorded as an entry in the WAL. This ensures that the most current data state can be regenerated and recovered from this non-volatile log. For example, if three new rows were added to a table, two were deleted and one was updated, then six entries would be recorded in the log.

-   MOT log records are written to the same WAL as the other records of openGauss disk-based tables.
-   MOT only logs an operation at the transaction commit phase.
-   MOT only logs the updated delta record in order to minimize the amount of data written to disk.
-   During recovery, data is loaded from the last known or a specific Checkpoint; and then the WAL Redo log is used to complete the data changes that occur from that point forward.
-   The WAL \(Redo Log\) retains all the table row modifications until a Checkpoint is performed \(as described above\). The log can then be truncated in order to reduce recovery time and to save disk space.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >In order to ensure that the log IO device does not become a bottleneck, the log file must be placed on a drive that has low latency.

-   Parallel Redo Recovery - Since the openGauss 5.0 version release, the MOT engine includes a Parallel Recovery mechanism. The recovery operations are performed using multiple threads, while the transaction commit is done with a single thread, ensuring transactional consistency. This delivers low RTO for MOT tables as per openGauss specifications.

## Logging Types<a name="section1648172420153"></a>

Two synchronous transaction logging options and one asynchronous transaction logging option are supported \(these are also supported by the standard openGauss disk engine\). MOT also supports synchronous Group Commit logging with NUMA-awareness optimization, as described below.

According to your configuration, one of the following types of logging is implemented: 

-   [Synchronous Redo Logging](synchronous-redo-logging.md)
-   [Group Synchronous Redo Logging](group-synchronous-redo-logging.md)
-   [Asynchronous Redo Logging](asynchronous-redo-logging.md)

### Additional information:

-   [Logging Design Overview](logging-design-overview.md)
-   [Per-transaction Logging](per-transaction-logging.md)
-   [Exception Handling](exception-handling.md)



