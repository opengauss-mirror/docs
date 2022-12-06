# Group Synchronous Redo Logging<a name="EN-US_TOPIC_0276133082"></a>

The  **Group Synchronous Redo Logging**  option is very similar to the  **Synchronous Redo Logging**  option, because it also ensures total durability with absolutely no data loss and total synchronization of the client application and the WAL \(Redo Log\) entries. The difference is that the  **Group Synchronous Redo Logging**  option writes  _groups of transaction _redo entries to the WAL Redo Log on the disk at the same time, instead of writing each and every transaction as it is committed. Using Group Synchronous Redo Logging reduces the amount of disk I/Os and thus improves performance, especially when running a heavy workload.

The MOT engine performs synchronous Group Commit logging with Non-Uniform Memory Access \(NUMA\)-awareness optimization by automatically grouping transactions according to the NUMA socket of the core on which the transaction is running.

You may refer to the  [NUMA Awareness Allocation and Affinity](numa-awareness-allocation-and-affinity.md)  section for more information about NUMA-aware memory access.

When a transaction commits, a group of entries are recorded in the WAL Redo Log, as follows –

1. While a transaction is in progress, it is stored in the memory. The MOT engine groups transactions in buckets according to the NUMA socket of the core on which the transaction is running. This means that all the transactions running on the same socket are grouped together and that multiple groups will be filling in parallel according to the core on which the transaction is running.

   Writing transactions to the WAL is more efficient in this manner because all the buffers from the same socket are written to disk together.

   >![](public_sys-resources/icon-note.gif) **NOTE:** 
   >
   >-   Each thread runs on a single core/CPU which belongs to a single socket and each thread only writes to the socket of the core on which it is running.

2.  After a transaction finishes and the client application sends a Commit command, the transaction redo log entries are serialized together with other transactions that belong to the same group.
3.  After the configured criteria are fulfilled for a specific group of transactions \(quantity of committed transactions or timeout period as describes in the  [REDO LOG \(MOT\)](mot-configuration-settings.md#section361563811235)section\), the transactions in this group are written to the WAL on the disk. This means that while these log entries are being written to the log, the client applications that issued the commit are waiting for a response.
4.  As soon as all the transaction buffers in the NUMA-aware group have been written to the log, all the transactions in the group are performing the necessary changes to the memory store and the clients are notified that these transactions are complete.

## **Technical Description**

The four colors represent 4 NUMA nodes. Thus each NUMA node has its own memory log enabling a group commit of multiple connections.

**Figure  1**  Group Commit – with NUMA-awareness![](figures/group-commit-with-numa-awareness.png)

## **Summary**

The  **Group Synchronous Redo Logging**  option is an extremely safe and strict logging option because it ensures total synchronization of the client application and the WAL Redo log entries; thus ensuring total durability and consistency with absolutely no data loss. This logging option prevents the situation where a client application might mark a transaction as successful, when it has not yet been persisted to disk.

On one hand this option has fewer disk writes than the  **Synchronous Redo Logging**  option, which may mean that it is faster. The downside is that transactions are locked for longer, meaning that they are locked until after all the transactions in the same NUMA memory have been written to the WAL Redo Log on the disk.

The benefits of using this option depend on the type of transactional workload. For example, this option benefits systems that have many transactions \(and less so for systems that have few transactions, because there are few disk writes anyway\).

