# Logging Types<a name="EN-US_TOPIC_0260488099"></a>

Two synchronous transaction logging options and one asynchronous transaction logging option are supported \(these are also supported by the standard openGauss disk engine\). MOT also supports synchronous Group Commit logging with NUMA-awareness optimization, as described below.

According to your configuration, one of the following types of logging is implemented –

[Synchronous Redo Logging](#section13294122621816)

[Group Synchronous Redo Logging](#section1544013621916)

[Asynchronous Redo Logging](#section16446161112210)

## Synchronous Redo Logging<a name="section13294122621816"></a>

The  **Synchronous Redo Logging**  option is the simplest and most strict redo logger. When a transaction is committed by a client application, the transaction redo entries are recorded in the WAL \(Redo Log\), as follows

1.  While a transaction is in progress, it is stored in the MOT’s memory.
2.  After a transaction finishes and the client application sends a  **Commit **command, the transaction is locked and then written to the WAL Redo Log on the disk. This means that while the transaction log entries are being written to the log, the client application is still waiting for a response.
3.  As soon as the transaction’s entire buffer is written to the log, the changes to the data in memory take place and then the transaction is committed. After the transaction has been committed, the client application is notified that the transaction is complete.

**Summary**

The** Synchronous Redo Logging**  option is the safest and most strict because it ensures total synchronization of the client application and the WAL Redo log entries for each transaction as it is committed; thus ensuring total durability and consistency with absolutely no data loss. This logging option prevents the situation where a client application might mark a transaction as successful, when it has not yet been persisted to disk.

The downside of the** Synchronous Redo Logging**  option is that it is the slowest logging mechanism of the three options. This is because a client application must wait until all data is written to disk and because of the frequent disk writes \(which typically slow down the database\).

## Group Synchronous Redo Logging<a name="section1544013621916"></a>

The  **Group Synchronous Redo Logging**  option is very similar to the  **Synchronous Redo Logging**  option, because it also ensures total durability with absolutely no data loss and total synchronization of the client application and the WAL \(Redo Log\) entries. The difference is that the** Group Synchronous Redo Logging**  option writes  _groups of transaction _redo entries to the WAL Redo Log on the disk at the same time, instead of writing each and every transaction as it is committed. Using Group Synchronous Redo Logging reduces the amount of disk I/Os and thus improves performance, especially when running a heavy workload.

The MOT engine performs synchronous Group Commit logging with Non-Uniform Memory Access \(NUMA\)-awareness optimization by automatically grouping transactions according to the NUMA socket of the core on which the transaction is running.

You may refer to the ++ section for more information about NUMA-aware memory access.

When a transaction commits, a group of entries are recorded in the WAL Redo Log, as follows –

1.  While a transaction is in progress, it is stored in the memory. The MOT engine groups transactions in buckets according to the NUMA socket of the core on which the transaction is running. This means that all the transactions running on the same socket are grouped together and that multiple groups will be filling in parallel according to the core on which the transaction is running.

    Writing transactions to the WAL is more efficient in this manner because all the buffers from the same socket are written to disk together.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >Each thread runs on a single core/CPU which belongs to a single socket and each thread only writes to the socket of the core on which it is running.  

2.  After a transaction finishes and the client application sends a Commit command, the transaction redo log entries are serialized together with other transactions that belong to the same group.
3.  After the configured criteria are fulfilled for a specific group of transactions \(quantity of committed transactions or timeout period as describes on ++\), the transactions in this group are written to the WAL on the disk. This means that while these log entries are being written to the log, the client applications that issued the commit are waiting for a response.
4.  As soon as all the transaction buffers in the NUMA-aware group have been written to the log, all the transactions in the group are performing the necessary changes to the memory store and the clients are notified that these transactions are complete.

**Summary**

The** Group Synchronous Redo Logging**  option is a an extremely safe and strict logging option because it ensures total synchronization of the client application and the WAL Redo log entries; thus ensuring total durability and consistency with absolutely no data loss. This logging option prevents the situation where a client application might mark a transaction as successful, when it has not yet been persisted to disk.

On one hand this option has fewer disk writes than the  **Synchronous Redo Logging**  option, which may mean that it is faster. The downside is that transactions are locked for longer, meaning that they are locked until after all the transactions in the same NUMA memory have been written to the WAL Redo Log on the disk.

The benefits of using this option depend on the type of transactional workload. For example, this option benefits systems that have many transactions \(and less so for systems that have few transactions, because there are few disk writes anyway\).

## Asynchronous Redo Logging<a name="section16446161112210"></a>

The  **Asynchronous Redo Logging**  option is the fastest logging method, However, it does not ensure no data loss, meaning that some data that is still in the buffer and was not yet written to disk may get lost upon a power failure or database crash. When a transaction is committed by a client application, the transaction redo entries are recorded in internal buffers and written to disk at preconfigured intervals. The client application does not wait for the data being written to disk. It continues to the next transaction. This is what makes asynchronous redo logging the fastest logging method.

When a transaction is committed by a client application, the transaction redo entries are recorded in the WAL Redo Log, as follows:

1.  While a transaction is in progress, it is stored in the MOT's memory.
2.  After a transaction finishes and the client application sends a  **Commit **command, the transaction redo entries are written to internal buffers, but are not yet written to disk. Then changes to the data in memory takes place and the client application is notified that the transaction is committed.
3.  At a preconfigured interval, a redo log thread running in the background collects all the buffered redo log entries and writes them to disk.

**Summary**

The Asynchronous Redo Logging option is the fastest logging option because it does not require the client application to wait for data being written to disk. In addition, it groups many transactions redo entries and writes them together, thus reducing the amount of disk I/Os that slow down the MOT engine.

The downside of the Asynchronous Redo Logging option is that it does not ensure that data will not get lost upon a crash or failure. Data that was committed, but was not yet written to disk, is not durable on commit and thus cannot be recovered in case of a failure. The Asynchronous Redo Logging option is most relevant for applications that are willing to sacrifice data recovery \(consistency\) over performance.

