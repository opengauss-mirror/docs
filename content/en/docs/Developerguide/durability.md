# Durability<a name="EN-US_TOPIC_0260578556"></a>

Durability refers to long-term data protection \(also known as  _disk persistence_\). Durability means that stored data does not suffer from any kind of degradation or corruption, so that data is never lost or compromised. Durability ensures that data and the MOT engine are restored to a consistent state after a planned shutdown \(for example, for maintenance\) or an unplanned crash \(for example, a power failure\).

Memory storage is volatile, meaning that it requires power to maintain the stored information. Disk storage, on the other hand, is non-volatile, meaning that it does not require power to maintain stored information, thus, it can survive a power shutdown. MOT uses both types of storage – it has all data in memory, while persisting transactional changes to disk  [by WAL Redo Logging](logging-wal-redo-log.md)  and by maintaining frequent periodic  [Checkpoints](checkpoints.md)  in order to ensure data recovery in case of shutdown.

The user must ensure sufficient disk space for the logging and Checkpointing operations. A separated drive can be used for the Checkpoint to improve performance by reducing disk I/O load.

You may refer to  _MOT Key Technologies__ _for an overview of how durability is implemented in the MOT engine.

-   **[Configuring Durability](configuring-durability.md)**  

-   **[Logging – WAL Redo Log](logging-wal-redo-log.md)**  

-   **[Checkpoints](checkpoints.md)**  

-   **[Recovery](recovery.md)**  

-   **[Replication and High Availability](replication-and-high-availability.md)**  

-   **[Memory Management](memory-management.md)**  

-   **[Vacuum](vacuum.md)**  

-   **[Statistics](statistics.md)**  

-   **[Monitoring](monitoring.md)**  

-   **[Error Messages](error-messages.md)**  


