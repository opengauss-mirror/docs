# MOT Durability<a name="EN-US_TOPIC_0289900585"></a>

Durability refers to long-term data protection \(also known as  _disk persistence_\). Durability means that stored data does not suffer from any kind of degradation or corruption, so that data is never lost or compromised. Durability ensures that data and the MOT engine are restored to a consistent state after a planned shutdown \(for example, for maintenance\) or an unplanned crash \(for example, a power failure\).

Memory storage is volatile, meaning that it requires power to maintain the stored information. Disk storage, on the other hand, is non-volatile, meaning that it does not require power to maintain stored information, thus, it can survive a power shutdown. MOT uses both types of storage. It has all data in memory, while persisting transactional changes to disks and by maintaining frequent periodic  [MOT Checkpoints](#en-us_topic_0283136668_en-us_topic_0280525142_section182761535131617)  in order to ensure data recovery in case of shutdown.

The user must ensure sufficient disk space for the logging and Checkpointing operations. A separated drive can be used for the Checkpoint to improve performance by reducing disk I/O load.

You may refer to the  [MOT Key Technologies](mot-key-technologies.md)  sectionfor an overview of how durability is implemented in the MOT engine.

To configure durability –

To ensure strict consistency, configure the synchronous\_commit parameter to  **On**  in the postgres.conf configuration file.

MOTs WAL Redo Log and Checkpoints enable durability, as described below –

## MOT Logging – WAL Redo Log<a name="en-us_topic_0283136668_en-us_topic_0280525142_section129831140121218"></a>

To ensure Durability, MOT is fully integrated with the openGauss's Write-Ahead Logging \(WAL\) mechanism, so that MOT persists data in WAL records using openGauss's XLOG interface. This means that every addition, update, and deletion to an MOT table's record is recorded as an entry in the WAL. This ensures that the most current data state can be regenerated and recovered from this non-volatile log. For example, if three new rows were added to a table, two were deleted and one was updated, then six entries would be recorded in the log.

MOT log records are written to the same WAL as the other records of openGauss disk-based tables.

MOT only logs an operation at the transaction commit phase.

MOT only logs the updated delta record in order to minimize the amount of data written to disk.

During recovery, data is loaded from the last known or a specific Checkpoint; and then the WAL Redo log is used to complete the data changes that occur from that point forward.

The WAL \(Redo Log\) retains all the table row modifications until a Checkpoint is performed \(as described above\). The log can then be truncated in order to reduce recovery time and to save disk space.

**Note**  – In order to ensure that the log IO device does not become a bottleneck, the log file must be placed on a drive that has low latency.

## MOT Logging Types<a name="en-us_topic_0283136668_en-us_topic_0280525142_section125771537134"></a>

Two synchronous transaction logging options and one asynchronous transaction logging option are supported \(these are also supported by the standard openGauss disk engine\). MOT also supports synchronous Group Commit logging with NUMA-awareness optimization, as described below.

According to your configuration, one of the following types of logging is implemented –

-   **Synchronous Redo Logging**

    The  **Synchronous Redo Logging**  option is the simplest and most strict redo logger. When a transaction is committed by a client application, the transaction redo entries are recorded in the WAL \(Redo Log\), as follows –

    1.  While a transaction is in progress, it is stored in the MOT's memory.
    2.  After a transaction finishes and the client application sends a Commit command, the transaction is locked and then written to the WAL Redo Log on the disk. This means that while the transaction log entries are being written to the log, the client application is still waiting for a response.
    3.  As soon as the transaction's entire buffer is written to the log, the changes to the data in memory take place and then the transaction is committed. After the transaction has been committed, the client application is notified that the transaction is complete.

        **Summary**

        The  **Synchronous Redo Logging**  option is the safest and most strict because it ensures total synchronization of the client application and the WAL Redo log entries for each transaction as it is committed; thus ensuring total durability and consistency with absolutely no data loss. This logging option prevents the situation where a client application might mark a transaction as successful, when it has not yet been persisted to disk.

        The downside of the  **Synchronous Redo Logging**  option is that it is the slowest logging mechanism of the three options. This is because a client application must wait until all data is written to disk and because of the frequent disk writes \(which typically slow down the database\).


-   **Group Synchronous Redo Logging**

    The  **Group Synchronous Redo Logging**  option is very similar to the  **Synchronous Redo Logging**  option, because it also ensures total durability with absolutely no data loss and total synchronization of the client application and the WAL \(Redo Log\) entries. The difference is that the  **Group Synchronous Redo Logging**  option writes  _groups of transaction _redo entries to the WAL Redo Log on the disk at the same time, instead of writing each and every transaction as it is committed. Using Group Synchronous Redo Logging reduces the amount of disk I/Os and thus improves performance, especially when running a heavy workload.

    The MOT engine performs synchronous Group Commit logging with Non-Uniform Memory Access \(NUMA\)-awareness optimization by automatically grouping transactions according to the NUMA socket of the core on which the transaction is running.

    You may refer to the  [NUMA Awareness Allocation and Affinity](numa-awareness-allocation-and-affinity.md)  section for more information about NUMA-aware memory access.

    When a transaction commits, a group of entries are recorded in the WAL Redo Log, as follows –

    1.  While a transaction is in progress, it is stored in the memory. The MOT engine groups transactions in buckets according to the NUMA socket of the core on which the transaction is running. This means that all the transactions running on the same socket are grouped together and that multiple groups will be filling in parallel according to the core on which the transaction is running.

        Writing transactions to the WAL is more efficient in this manner because all the buffers from the same socket are written to disk together.

        **Note**  – Each thread runs on a single core/CPU which belongs to a single socket and each thread only writes to the socket of the core on which it is running.

    2.  After a transaction finishes and the client application sends a Commit command, the transaction redo log entries are serialized together with other transactions that belong to the same group.
    3.  After the configured criteria are fulfilled for a specific group of transactions \(quantity of committed transactions or timeout period as describes in the  [Redo Log \(MOT\)](mot-configuration-settings.md#en-us_topic_0283136588_en-us_topic_0280525130_section361563811235)  section\), the transactions in this group are written to the WAL on the disk. This means that while these log entries are being written to the log, the client applications that issued the commit are waiting for a response.
    4.  As soon as all the transaction buffers in the NUMA-aware group have been written to the log, all the transactions in the group are performing the necessary changes to the memory store and the clients are notified that these transactions are complete.

        **Summary**

        The  **Group Synchronous Redo Logging**  option is an extremely safe and strict logging option because it ensures total synchronization of the client application and the WAL Redo log entries; thus ensuring total durability and consistency with absolutely no data loss. This logging option prevents the situation where a client application might mark a transaction as successful, when it has not yet been persisted to disk.

        On one hand this option has fewer disk writes than the  **Synchronous Redo Logging**  option, which may mean that it is faster. The downside is that transactions are locked for longer, meaning that they are locked until after all the transactions in the same NUMA memory have been written to the WAL Redo Log on the disk.

        The benefits of using this option depend on the type of transactional workload. For example, this option benefits systems that have many transactions \(and less so for systems that have few transactions, because there are few disk writes anyway\).


-   **Asynchronous Redo Logging**

    The  **Asynchronous Redo Logging**  option is the fastest logging method. However, it does not ensure no data loss, meaning that some data that is still in the buffer and was not yet written to disk may get lost upon a power failure or database crash. When a transaction is committed by a client application, the transaction redo entries are recorded in internal buffers and written to disk at preconfigured intervals. The client application does not wait for the data being written to disk. It continues to the next transaction. This is what makes asynchronous redo logging the fastest logging method.

    When a transaction is committed by a client application, the transaction redo entries are recorded in the WAL Redo Log, as follows –

    1.  While a transaction is in progress, it is stored in the MOT's memory.
    2.  After a transaction finishes and the client application sends a Commit command, the transaction redo entries are written to internal buffers, but are not yet written to disk. Then changes to the MOT data memory take place and the client application is notified that the transaction is committed.
    3.  At a preconfigured interval, a redo log thread running in the background collects all the buffered redo log entries and writes them to disk.

        **Summary**

        The Asynchronous Redo Logging option is the fastest logging option because it does not require the client application to wait for data being written to disk. In addition, it groups many transactions redo entries and writes them together, thus reducing the amount of disk I/Os that slow down the MOT engine.

        The downside of the Asynchronous Redo Logging option is that it does not ensure that data will not get lost upon a crash or failure. Data that was committed, but was not yet written to disk, is not durable on commit and thus cannot be recovered in case of a failure. The Asynchronous Redo Logging option is most relevant for applications that are willing to sacrifice data recovery \(consistency\) over performance.



## Configuring Logging<a name="en-us_topic_0283136668_en-us_topic_0280525142_section49403594"></a>

Two synchronous transaction logging options and one asynchronous transaction logging option are supported by the standard openGauss disk engine.

To configure logging –

1.  The determination of whether synchronous or asynchronous transaction logging is performed is configured in the sync\_commit  **\(On = Synchronous\)**  parameters in the postgres.conf configuration file.
2.  Set the enable\_redo\_log parameter to  **True**  in the REDO LOG section of the mot.conf configuration file.

If a synchronous mode of transaction logging has been selected \(synchronous\_commit =  **On**, as described above\), then the enable\_group\_commit parameter in the mot.conf configuration file determines whether the  **Group Synchronous Redo Logging**  option or the  **Synchronous Redo Logging**  option is used. For  **Group Synchronous Redo Logging**, you must also define in the mot.conf file which of the following thresholds determine when a group of transactions is recorded in the WAL

-   group\_commit\_size – The quantity of committed transactions in a group. For example,  **16**  means that when 16 transactions in the same group have been committed by a client application, then an entry is written to disk in the WAL Redo Log for all 16 transactions.
-   group\_commit\_timeout – A timeout period in ms. For example,  **10**  means that after 10 ms, an entry is written to disk in the WAL Redo Log for each of the transactions in the same group that have been committed by their client application in the last 10 ms.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>You may refer to the  [Redo Log \(MOT\)](mot-configuration-settings.md#en-us_topic_0283136588_en-us_topic_0280525130_section361563811235)  for more information about configuration settings. 

## MOT Checkpoints<a name="en-us_topic_0283136668_en-us_topic_0280525142_section182761535131617"></a>

A checkpoint is the point in time at which all the data of a table's rows is saved in files on persistent storage in order to create a full durable database image. It is a snapshot of the data at a specific point in time.

A Checkpoint is required in order to reduce a database's recovery time by shortening the quantity of WAL \(Redo Log\) entries that must be replayed in order to ensure durability. Checkpoints also reduce the storage space required to keep all the log entries.

If there were no Checkpoints, then in order to recover a database, all the WAL redo entries would have to be replayed from the beginning of time, which could take days/weeks depending on the quantity of records in the database. Checkpoints record the current state of the database and enable old redo entries to be discarded.

Checkpoints are essential during recovery scenarios \(especially for a cold start\). First, the data is loaded from the last known or a specific Checkpoint; and then the WAL is used to complete the data changes that occurred since then.

For example – If the same table row is modified 100 times, then 100 entries are recorded in the log. When Checkpoints are used, then even if a specific table row was modified 100 times, it is recorded in the Checkpoint a single time. After the recording of a Checkpoint, recovery can be performed on the basis of that Checkpoint and only the WAL Redo Log entries that occurred since the Checkpoint need be played.

**To configure Checkpoints**

Checkpoint configuration is performed in the CHECKPOINT; section of the mot.conf file. For details about these configuration parameters, see  [MOT Checkpoints](#en-us_topic_0283136668_en-us_topic_0280525142_section182761535131617).

>![](public_sys-resources/icon-caution.gif) **CAUTION:** 
>In a production deployment, the value must be TRUE \#enable\_Checkpoint = true. A FALSE value can only be used for testing.

