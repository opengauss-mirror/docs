# MOT Logging – WAL Redo Log Concepts<a name="EN-US_TOPIC_0289899880"></a>

## Overview<a name="en-us_topic_0283136556_en-us_topic_0280525164_section57612679"></a>

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
>In order to ensure that the log I/O device does not become a bottleneck, the log file must be placed on a drive that has low latency.

## Logging Types<a name="en-us_topic_0283136556_en-us_topic_0280525164_section48752064"></a>

Two synchronous transaction logging options and one asynchronous transaction logging option are supported \(these are also supported by the standard openGauss disk engine\). MOT also supports synchronous Group Commit logging with NUMA-awareness optimization, as described below.

According to your configuration, one of the following types of logging is implemented:

-   **Synchronous Redo Logging**

    The  **Synchronous Redo Logging**  option is the simplest and most strict redo logger. When a transaction is committed by a client application, the transaction redo entries are recorded in the WAL \(Redo Log\), as follows –

    1.  While a transaction is in progress, it is stored in the MOT's memory.
    2.  After a transaction finishes and the client application sends a** Commit **command, the transaction is locked and then written to the WAL Redo Log on the disk. This means that while the transaction log entries are being written to the log, the client application is still waiting for a response.
    3.  As soon as the transaction's entire buffer is written to the log, the changes to the data in memory take place and then the transaction is committed. After the transaction has been committed, the client application is notified that the transaction is complete.

    **Technical Description**

    When a transaction ends, the SynchronousRedoLogHandler serializes its transaction buffer and write it to the XLOG iLogger implementation.

    **Figure  1**  Synchronous Logging<a name="en-us_topic_0283136556_en-us_topic_0280525164_fig25836861"></a>  
    ![](figures/synchronous-logging.png "synchronous-logging")

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

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >-   Each thread runs on a single core/CPU which belongs to a single socket and each thread only writes to the socket of the core on which it is running.

    2.  After a transaction finishes and the client application sends a Commit command, the transaction redo log entries are serialized together with other transactions that belong to the same group.
    3.  After the configured criteria are fulfilled for a specific group of transactions \(quantity of committed transactions or timeout period as describes in the  [Redo Log \(MOT\)](mot-configuration-settings.md#en-us_topic_0283136588_en-us_topic_0280525130_section361563811235)  section\), the transactions in this group are written to the WAL on the disk. This means that while these log entries are being written to the log, the client applications that issued the commit are waiting for a response.
    4.  As soon as all the transaction buffers in the NUMA-aware group have been written to the log, all the transactions in the group are performing the necessary changes to the memory store and the clients are notified that these transactions are complete.

    **Technical Description**

    The four colors represent 4 NUMA nodes. Thus each NUMA node has its own memory log enabling a group commit of multiple connections.

    **Figure  2**  Group Commit – with NUMA-awareness<a name="en-us_topic_0283136556_en-us_topic_0280525164_fig34015509"></a>  
    ![](figures/group-commit-with-numa-awareness.png "group-commit-with-numa-awareness")

    **Summary**

    The  **Group Synchronous Redo Logging**  option is an extremely safe and strict logging option because it ensures total synchronization of the client application and the WAL Redo log entries; thus ensuring total durability and consistency with absolutely no data loss. This logging option prevents the situation where a client application might mark a transaction as successful, when it has not yet been persisted to disk.

    On one hand this option has fewer disk writes than the  **Synchronous Redo Logging**  option, which may mean that it is faster. The downside is that transactions are locked for longer, meaning that they are locked until after all the transactions in the same NUMA memory have been written to the WAL Redo Log on the disk.

    The benefits of using this option depend on the type of transactional workload. For example, this option benefits systems that have many transactions \(and less so for systems that have few transactions, because there are few disk writes anyway\).


-   **Asynchronous Redo Logging**

    The  **Asynchronous Redo Logging**  option is the fastest logging method. However, it does not ensure no data loss, meaning that some data that is still in the buffer and is not yet written to disk may get lost upon a power failure or database crash. When a transaction is committed by a client application, the transaction redo entries are recorded in internal buffers and written to disk at preconfigured intervals. The client application does not wait for the data being written to disk. It continues to the next transaction. This is what makes asynchronous redo logging the fastest logging method.

    When a transaction is committed by a client application, the transaction redo entries are recorded in the WAL Redo Log, as follows –

    1.  While a transaction is in progress, it is stored in the MOT's memory.
    2.  After a transaction finishes and the client application sends a Commit command, the transaction redo entries are written to internal buffers, but are not yet written to disk. Then changes to the MOT data memory take place and the client application is notified that the transaction is committed.
    3.  At a preconfigured interval, a redo log thread running in the background collects all the buffered redo log entries and writes them to disk.

    **Technical Description**

    Upon transaction commit, the transaction buffer is moved \(pointer assignment – not a data copy\) to a centralized buffer and a new transaction buffer is allocated for the transaction. The transaction is released as soon as its buffer is moved to the centralized buffer and the transaction thread is not blocked. The actual write to the log uses the Postgres walwriter thread. When the walwriter timer elapses, it first calls the AsynchronousRedoLogHandler \(via registered callback\) to write its buffers and then continues with its logic and flushes the data to the XLOG.

    **Figure  3**  Asynchronous Logging<a name="en-us_topic_0283136556_en-us_topic_0280525164_fig44824869"></a>  
    ![](figures/asynchronous-logging.png "asynchronous-logging")

    **Summary**

    The Asynchronous Redo Logging option is the fastest logging option because it does not require the client application to wait for data being written to disk. In addition, it groups many transactions redo entries and writes them together, thus reducing the amount of disk I/Os that slow down the MOT engine.

    The downside of the Asynchronous Redo Logging option is that it does not ensure that data will not get lost upon a crash or failure. Data that was committed, but was not yet written to disk, is not durable on commit and thus cannot be recovered in case of a failure. The Asynchronous Redo Logging option is most relevant for applications that are willing to sacrifice data recovery \(consistency\) over performance.

    Logging Design Details

    The following describes the design details of each persistence-related component in the In-Memory Engine Module.

    **Figure  4**  Three Logging Options<a name="en-us_topic_0283136556_en-us_topic_0280525164_fig48696192"></a>  
    ![](figures/three-logging-options.png "three-logging-options")


The RedoLog component is used by both by backend threads that use the In-Memory Engine and by the WAL writer in order to persist their data. Checkpoints are performed using the Checkpoint Manager, which is triggered by the Postgres checkpointer.

-   **Logging Design Overview**

    Write-Ahead Logging \(WAL\) is a standard method for ensuring data durability. WAL's central concept is that changes to data files \(where tables and indexes reside\) are only written after those changes have been logged, meaning after the log records that describe these changes have been flushed to permanent storage.

    In the In-Memory Engine we use the existing openGauss logging facilities and have not develop a low level logging API from scratch in order to reduce development time and to enable it to be used for replication purposes as well.

-   **Per-transaction Logging**

    In the In-Memory Engine, the transaction log records are stored in a transaction buffer which is part of the transaction object \(TXN\). The transaction buffer is logged during the calls to addToLog\(\) – if the buffer exceeds a threshold it is then flushed and reused. When a transaction commits and passes the validation phase \(OCC SILO<sup>\[</sup>[Comparison: Disk vs. MOT](comparison-disk-vs-mot.md)<sup>\]</sup>  validation\) or aborts for some reason, the appropriate message is saved in the log as well in order to make it possible to determine the transaction's state during a recovery.


**Figure  5**  Per-transaction Logging<a name="en-us_topic_0283136556_en-us_topic_0280525164_fig28147941"></a>  
![](figures/per-transaction-logging.png "per-transaction-logging")

Parallel Logging is performed both by MOT and disk engines. However, the MOT engine enhances this design with a log-buffer per transaction, lockless preparation and a single log record.

-   **Exception Handling**

    The persistence module handles exceptions by using the Postgres error reporting infrastructure \(ereport\). An error message is recorded in the system log for each error condition. In addition, the error is reported to the envelope using Postgres's built-in error reporting infrastructure.

    The following exceptions are reported by this module –


**Table  1**  Exception Handling

<a name="en-us_topic_0283136556_en-us_topic_0280525164_table25810689"></a>
<table><thead align="left"><tr id="en-us_topic_0283136556_en-us_topic_0280525164_row47263705"><th class="cellrowborder" valign="top" width="29.292929292929294%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283136556_en-us_topic_0280525164_p3154929"><a name="en-us_topic_0283136556_en-us_topic_0280525164_p3154929"></a><a name="en-us_topic_0283136556_en-us_topic_0280525164_p3154929"></a>Exception Condition</p>
</th>
<th class="cellrowborder" valign="top" width="26.26262626262626%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283136556_en-us_topic_0280525164_p54222681"><a name="en-us_topic_0283136556_en-us_topic_0280525164_p54222681"></a><a name="en-us_topic_0283136556_en-us_topic_0280525164_p54222681"></a>Exception Code</p>
</th>
<th class="cellrowborder" valign="top" width="21.21212121212121%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283136556_en-us_topic_0280525164_p29961017"><a name="en-us_topic_0283136556_en-us_topic_0280525164_p29961017"></a><a name="en-us_topic_0283136556_en-us_topic_0280525164_p29961017"></a>Scenario</p>
</th>
<th class="cellrowborder" valign="top" width="23.232323232323232%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283136556_en-us_topic_0280525164_p10923322"><a name="en-us_topic_0283136556_en-us_topic_0280525164_p10923322"></a><a name="en-us_topic_0283136556_en-us_topic_0280525164_p10923322"></a>Resulting Outcome</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136556_en-us_topic_0280525164_row12373891"><td class="cellrowborder" valign="top" width="29.292929292929294%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136556_en-us_topic_0280525164_p62761149"><a name="en-us_topic_0283136556_en-us_topic_0280525164_p62761149"></a><a name="en-us_topic_0283136556_en-us_topic_0280525164_p62761149"></a>WAL write failure</p>
</td>
<td class="cellrowborder" valign="top" width="26.26262626262626%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136556_en-us_topic_0280525164_p50488336"><a name="en-us_topic_0283136556_en-us_topic_0280525164_p50488336"></a><a name="en-us_topic_0283136556_en-us_topic_0280525164_p50488336"></a>ERRCODE_FDW_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="21.21212121212121%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136556_en-us_topic_0280525164_p63023395"><a name="en-us_topic_0283136556_en-us_topic_0280525164_p63023395"></a><a name="en-us_topic_0283136556_en-us_topic_0280525164_p63023395"></a>On any case the WAL write fails</p>
</td>
<td class="cellrowborder" valign="top" width="23.232323232323232%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136556_en-us_topic_0280525164_p4621342"><a name="en-us_topic_0283136556_en-us_topic_0280525164_p4621342"></a><a name="en-us_topic_0283136556_en-us_topic_0280525164_p4621342"></a>Transaction terminates</p>
</td>
</tr>
<tr id="en-us_topic_0283136556_en-us_topic_0280525164_row41592082"><td class="cellrowborder" valign="top" width="29.292929292929294%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136556_en-us_topic_0280525164_p13515518"><a name="en-us_topic_0283136556_en-us_topic_0280525164_p13515518"></a><a name="en-us_topic_0283136556_en-us_topic_0280525164_p13515518"></a>File I/O error: write, open and so on</p>
</td>
<td class="cellrowborder" valign="top" width="26.26262626262626%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136556_en-us_topic_0280525164_p21015141"><a name="en-us_topic_0283136556_en-us_topic_0280525164_p21015141"></a><a name="en-us_topic_0283136556_en-us_topic_0280525164_p21015141"></a>ERRCODE_IO_ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="21.21212121212121%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136556_en-us_topic_0280525164_p24504881"><a name="en-us_topic_0283136556_en-us_topic_0280525164_p24504881"></a><a name="en-us_topic_0283136556_en-us_topic_0280525164_p24504881"></a>Checkpoint – Called on any file access error</p>
</td>
<td class="cellrowborder" valign="top" width="23.232323232323232%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136556_en-us_topic_0280525164_p38738378"><a name="en-us_topic_0283136556_en-us_topic_0280525164_p38738378"></a><a name="en-us_topic_0283136556_en-us_topic_0280525164_p38738378"></a>FATAL – process exists</p>
</td>
</tr>
<tr id="en-us_topic_0283136556_en-us_topic_0280525164_row13101087"><td class="cellrowborder" valign="top" width="29.292929292929294%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136556_en-us_topic_0280525164_p54555093"><a name="en-us_topic_0283136556_en-us_topic_0280525164_p54555093"></a><a name="en-us_topic_0283136556_en-us_topic_0280525164_p54555093"></a>Out of Memory</p>
</td>
<td class="cellrowborder" valign="top" width="26.26262626262626%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136556_en-us_topic_0280525164_p56886412"><a name="en-us_topic_0283136556_en-us_topic_0280525164_p56886412"></a><a name="en-us_topic_0283136556_en-us_topic_0280525164_p56886412"></a>ERRCODE_INSUFFICIENT_RESOURCES</p>
</td>
<td class="cellrowborder" valign="top" width="21.21212121212121%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136556_en-us_topic_0280525164_p44396651"><a name="en-us_topic_0283136556_en-us_topic_0280525164_p44396651"></a><a name="en-us_topic_0283136556_en-us_topic_0280525164_p44396651"></a>Checkpoint – Local memory allocation failures</p>
</td>
<td class="cellrowborder" valign="top" width="23.232323232323232%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136556_en-us_topic_0280525164_p39359003"><a name="en-us_topic_0283136556_en-us_topic_0280525164_p39359003"></a><a name="en-us_topic_0283136556_en-us_topic_0280525164_p39359003"></a>FATAL – process exists</p>
</td>
</tr>
<tr id="en-us_topic_0283136556_en-us_topic_0280525164_row18686713"><td class="cellrowborder" valign="top" width="29.292929292929294%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136556_en-us_topic_0280525164_p37228773"><a name="en-us_topic_0283136556_en-us_topic_0280525164_p37228773"></a><a name="en-us_topic_0283136556_en-us_topic_0280525164_p37228773"></a>Logic, DB errors</p>
</td>
<td class="cellrowborder" valign="top" width="26.26262626262626%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136556_en-us_topic_0280525164_p62740597"><a name="en-us_topic_0283136556_en-us_topic_0280525164_p62740597"></a><a name="en-us_topic_0283136556_en-us_topic_0280525164_p62740597"></a>ERRCODE_INTERNAL_</p>
<p id="en-us_topic_0283136556_en-us_topic_0280525164_p27794462"><a name="en-us_topic_0283136556_en-us_topic_0280525164_p27794462"></a><a name="en-us_topic_0283136556_en-us_topic_0280525164_p27794462"></a>ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="21.21212121212121%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136556_en-us_topic_0280525164_p36758944"><a name="en-us_topic_0283136556_en-us_topic_0280525164_p36758944"></a><a name="en-us_topic_0283136556_en-us_topic_0280525164_p36758944"></a>Checkpoint: algorithm fails or failure to retrieve table data or indexes.</p>
</td>
<td class="cellrowborder" valign="top" width="23.232323232323232%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136556_en-us_topic_0280525164_p24684474"><a name="en-us_topic_0283136556_en-us_topic_0280525164_p24684474"></a><a name="en-us_topic_0283136556_en-us_topic_0280525164_p24684474"></a>FATAL – process exists</p>
</td>
</tr>
</tbody>
</table>

