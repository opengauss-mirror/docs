# Extended FDW and Other openGauss Features<a name="EN-US_TOPIC_0270171527"></a>

openGauss is based on PostgreSQL, which does not have a built-in storage engine adapter, such as MySQL handlerton. To enable the integration of the MOT storage engine into openGauss, we have leveraged and extended the existing Foreign Data Wrapper \(FDW\) mechanism. With the introduction of FDW into PostgreSQL 9.1, externally managed databases can now be accessed in a way that presents these foreign tables and data sources as united, locally accessible relations.

In contrast, the MOT storage engine is embedded inside openGauss and its tables are managed by it. Access to tables is controlled by the openGauss planner and executor. MOT gets logging and checkpointing services from openGauss and participates in the openGauss recovery process in addition to other processes.

We refer to all the components that are in use or are accessing the MOT storage engine as the  _Envelope_.

The following figure shows how the MOT storage engine is embedded inside openGauss and its bi‑directional access to database functionality.

**Figure  1**  MOT Storage Engine Embedded inside openGauss – FDW Access to External Databases<a name="fig391615571359"></a>  
<img src="figures/mot-architecture.png" title="mot-architecture" style="zoom:50%;" />

We have extended the capabilities of FDW by extending and modifying the FdwRoutine structure in order to introduce features and calls that were not required before the introduction of MOT. For example, support for The following new features was added – Add Index, Drop Index/Table, Truncate, Vacuum and Table/Index Memory Statistics. A significant emphasis was put on integration with openGauss logging, replication and checkpointing mechanisms in order to provide consistency for cross-table transactions through failures. In this case, the MOT itself sometimes initiates calls to openGauss functionality through the FDW layer.

## Creating Tables and Indexes<a name="section15974216819"></a>

In order to support the creation of MOT tables, standard FDW syntax was reused.

For example, create FOREIGN table.

The MOT FDW mechanism passes the instruction to the MOT storage engine for actual table creation. Similarly, we support index creation \(create index …\). This feature was not previously available in FDW, because it was not needed since its tables are managed externally.

To support both in MOT FDW, the  **ValidateTableDef**  function actually creates the specified table. It also handles the index creation of that relation, as well as DROP TABLE and DROP INDEX, in addition to VACUUM and ALTER TABLE, which were not previously supported in FDW.

## Index Usage for Planning and Execution<a name="section232414551297"></a>

A query has two phases –  **Planning**  and  **Execution**. During the Planning phase \(which may take place once per multiple executions\), the best index for the scan is chosen. This choice is made based on the matching query's WHERE clauses, JOIN clauses and ORDER BY conditions. During execution, a query iterates over the relevant table rows and performs various tasks, such as update or delete, per iteration. An insert is a special case where the table adds the row to all indexes and no scanning is required.

-   **Planner –**  In standard FDW, a query is passed for execution to a foreign data source. This means that index filtering and the actual planning \(such as the choice of indexes\) is not performed locally in the database, rather it is performed in the external data source. Internally, the FDW returns a general plan to the database planner. MOT tables are handled in a similar manner as disk tables. This means that relevant MOT indexes are filtered and matched, and the indexes that minimize the set of traversed rows are selected and are added to the plan.
-   **Executor –**  The Query Executor uses the chosen MOT index in order to iterate over the relevant rows of the table. Each row is inspected by the openGauss envelope, and according to the query conditions, an update or delete is called to handle the relevant row.

## Durability, Replication and High Availability<a name="section1965173211010"></a>

A storage engine is responsible for storing, reading, updating and deleting data in the underlying memory and storage systems. The logging, checkpointing and recovery are not handled by the storage engine, especially because some transactions encompass multiple tables with different storage engines. Therefore, in order to persist and replicate data, the high-availability facilities from the openGauss envelope are used as follows –

-   **Durability –**  In order to ensure Durability, the MOT engine persists data by Write-Ahead Logging \(WAL\) records using the openGauss's XLOG interface. This also provides the benefits of openGauss's replication capabilities that use the same APIs. You may refer to the  [MOT Durability Concepts](mot-durability-concepts.md)  for more information.
-   **Checkpointing –**  A MOT Checkpoint is enabled by registering a callback to the openGauss Checkpointer. Whenever a general database Checkpoint is performed, the MOT Checkpoint process is called as well. MOT keeps the Checkpoint's Log Sequence Number \(LSN\) in order to be aligned with openGauss recovery. The MOT Checkpointing algorithm is highly optimized and asynchronous and does not stop concurrent transactions. You may refer to the  [MOT Checkpoint Concepts](mot-checkpoint-concepts.md)  for more information.
-   **Recovery –**  Upon startup, openGauss first calls an MOT callback that recovers the MOT Checkpoint by loading into memory rows and creating indexes, followed by the execution of the WAL recovery by replaying records according to the Checkpoint's LSN. The MOT Checkpoint is recovered in parallel using multiple threads – each thread reads a different data segment. This makes MOT Checkpoint recovery quite fast on many-core hardware, though it is still potentially slower compared to disk-based tables where only WAL records are replayed. You may refer to the  [MOT Recovery Concepts](mot-recovery-concepts.md)  for more information.

## VACUUM and DROP<a name="section1585113313114"></a>

In order to maximize MOT functionality, we added support for VACUUM, DROP TABLE and DROP INDEX. All three execute with an exclusive table lock, meaning without allowing concurrent transactions on the table. The system VACUUM calls a new FDW function to perform the MOT vacuuming, while DROP was added to the ValidateTableDef\(\) function.

## Deleting Memory Pools<a name="section259262411116"></a>

Each index and table tracks all the memory pools that it uses. A DROP INDEX command is used to remove metadata. Memory pools are deleted as a single consecutive block. The MOT VACUUM only compacts used memory, because memory reclamation is performed continuously in the background by the epoch-based Garbage Collector \(GC\). In order to perform the compaction, we switch the index or the table to new memory pools, traverse all the live data, delete each row and insert it using the new pools and finally delete the pools as is done for a drop.

## Query Native Compilation \(JIT\)<a name="section10157153612119"></a>

The FDW adapter to MOT engine also contains a lite execution path that employs Just-In-Time \(JIT\) compiled query execution using the LLVM compiler. More information about MOT Query Native Compilation can be found in the  **Query Native Compilation \(JIT\)**  section.

