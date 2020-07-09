# Extended FDW and Other openGauss Features<a name="EN-US_TOPIC_0260488158"></a>

openGauss is based on PostgreSQL, which does not have a built-in storage engine adapter, such as MySQL handlerton. To enable the integration of the MOT storage engine into openGauss, we decided to make use the existing Foreign Data Wrapper \(FDW\) mechanism and to extend it.

With the introduction of FDW into PostgreSQL 9.1 it became possible to access externally managed databases in a way that presented these foreign tables and data sources as united, locally accessible relations.

In contrast, the MOT storage engine is embedded inside openGauss and its tables are managed by it. Access to tables is controlled by the openGauss planner and executor. MOT gets logging and checkpointing services from openGauss and participates in the recovery process of the openGauss and more processes. We refer to all the components that are in use or are accessing the MOT storage engine as the  _Envelope_.

The following figure shows how the MOT storage engine is embedded and its bi-directional access to database functionality.

![](figures/en-us_image_0260488301.png)

We have extended the capabilities of FDW by extending and modifying the FdwRoutine structure. Support for new features was also added, such as Add index, Drop index/table, Truncate, Vacuum and Table/Index Memory Statistics. A significant emphasis was put on integration with openGauss logging, replication and checkpointing mechanisms in order to provide consistency for cross-table transactions through failures. In this case, the MOT itself sometimes initiates calls to openGauss functionality through the FDW layer. Such calls were never required previous to the introduction of MOT.

## Creating Tables and Indexes<a name="section8464896"></a>

In order to support the creation of MOT tables, the standard FDW syntax was reused –  **create FOREIGN table**.

The MOT FDW mechanism passes the instruction to the MOT storage engine for actual table creation. Similarly we needed ability to support index creation \(create index …\), previously not available and unneeded in FDW, since its tables are managed externally.

To support both, in the MOT FDW function ValidateTableDef actually creates the specified table, and in addition it handles index creation on that relation and DROP TABLE and DROP INDEX, as well as VACUUM and ALTER TABLE, which also previously were not supported in FDW.

## Index Usage for Planning and Execution<a name="section9075200"></a>

Query life breaks into two phases, the planning and the execution. In the planning phase, which may take place once per multiple executions, the best index for the scan is chosen. The choice is made based on matching query's WHERE clauses, JOIN clauses, and ORDER BY conditions. During execution a query iterates on the relevant table rows, and performs some work, e.g., update or delete, per iteration. An insert is a special case where the table adds the row to all indexes and no scanning is required.

Planner: In the standard FDW the query is passed for execution to a foreign data source, thus indexes filtering and actual planning, i.e. choice of indexes, is not done locally in the database, rather in the external data source. Internally the FDW returns to the database planner a general plan. In case of MOT tables, similarly as for database Disk-tables, relevant MOT indexes are filtered, matched, and the one that will minimize the set of traversed rows is selected and added the plan.

Executor: The query execution is using the chosen MOT index for iteration over the relevant rows of the table. Each row is inspected by openGauss envelope, and according to the query conditions, an update or delete is called for it.

## Durability and HA<a name="section14567938"></a>

While a storage engine is responsible to store, read, update and delete data in the underlying memory and storage systems. The Logging, checkpointing and recovery are not parts of the storage engine, especially as some transactions encompass multiple tables with different storage engines. Thus, to persist and replicate the data we use the high-availability facilities from the openGauss envelope as follows:

To ensure Durability, the MOT persists data by write-ahead logging \(WAL\) records using the openGauss's XLOG interface. By doing that we also gain openGauss's replication capabilities that are using the same APIs.

Checkpointing: MOT checkpoint is enabled by registering a callback to openGauss checkpointer. Whenever a general database checkpoint is performed, the MOT checkpoint process is called as well. MOT keeps the checkpoint's LSN \(Log Sequence Number\) in order to be aligned with openGauss recovery. The MOT checkpointing algorithm highly optimized, asynchronous and is not stopping concurrent transactions. More information on the matter can be found in section  [CHECKPOINT \(MOT\)](checkpoint-(mot).md).

Recovery: Upon startup, openGauss first calls an MOT callback that first recovers the MOT checkpoint by loading into memory rows and creating indexes, followed by execution of the WAL recovery by replaying records according to the checkpoint's LSN. MOT checkpoint is recovered in parallel using multiple threads, each one reading a different data segment. This makes MOT checkpoint recovery quite fast on many-core hardware, though still potentially slower compared to disk-based tables where only WAL records are replayed.

## VACUUM and DROP<a name="section64002584"></a>

To complete the functionality of MOT we added support for VACUUM, DROP TABLE, and DROP INDEX. All three execute with exclusive table lock, i.e. without concurrent transactions on the table. The system VACUUM calls a new FDW function to perform the MOT vacuuming, while DROP was added to the ValidateTableDef\(\) function.

Deleting memory pools: Each index and table tracks all memory pools it uses. At DROP INDEX command its metadata is removed and memory pools are deleted as one consecutive block. The MOT VACUUM is only doing compaction of the used memory, as memory reclamation is done continuously in the background by the epoch based Garbage Collector \(GC\). To perform the compaction we switch the index or the table to new memory pools, traverse all the live data, delete each row and insert it using the new pools, and finally delete the pools as done for drop.

## Query Native Compilation \(JIT\)<a name="section39152345"></a>

The FDW adapter to MOT engine also contains a lite execution path that employs Just-In-Time \(JIT\) compiled query execution using the LLVM compiler. More information about MOT Query Native Compilation or can be found in section .[Query Native Compilation \(JIT\)](query-native-compilation-(jit).md)

