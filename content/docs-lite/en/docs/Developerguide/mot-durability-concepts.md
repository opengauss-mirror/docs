# MOT Durability Concepts<a name="EN-US_TOPIC_0289900992"></a>

Durability refers to long-term data protection \(also known as  _disk persistence_\). Durability means that stored data does not suffer from any kind of degradation or corruption, so that data is never lost or compromised. Durability ensures that data and the MOT engine are restored to a consistent state after a planned shutdown \(for example, for maintenance\) or an unplanned crash \(for example, a power failure\).

Memory storage is volatile, meaning that it requires power to maintain the stored information. Disk storage, on the other hand, is non-volatile, meaning that it does not require power to maintain stored information, thus, it can survive a power shutdown. MOT uses both types of storage. It has all data in memory, while persisting transactional changes to disks and by maintaining frequent periodic MOT checkpoints \([MOT Checkpoint Concepts](mot-checkpoint-concepts.md)\) in order to ensure data recovery in case of shutdown.

The user must ensure sufficient disk space for the logging and Checkpointing operations. A separated drive can be used for the Checkpoint to improve performance by reducing disk I/O load.

You may refer to  [MOT Key Technologies](mot-key-technologies.md)  sectionfor an overview of how durability is implemented in the MOT engine.

MOTs WAL Redo Log and checkpoints enabled durability, as described below –

-   **[MOT Logging – WAL Redo Log Concepts](mot-logging-wal-redo-log-concepts.md)**  

-   **[MOT Checkpoint Concepts](mot-checkpoint-concepts.md)**  


