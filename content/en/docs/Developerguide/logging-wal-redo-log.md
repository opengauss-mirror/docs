# Logging – WAL Redo Log<a name="EN-US_TOPIC_0260488098"></a>

To ensure Durability, MOT is fully integrated with the openGauss's Write-Ahead Logging \(WAL\) mechanism, so that MOT persists data in WAL records using openGauss's XLOG interface. This means that every addition, update, and deletion to a MOT table's record is recorded as an entry in the WAL. This ensures that the most current data state can be regenerated and recovered from this non-volatile log. For example, if three new rows were added to a table, two were deleted and one was updated, then six entries would be recorded in the log.

-   MOT log records are written to the same WAL as the other records of openGauss disk-based tables.
-   MOT only logs an operation at the transaction commit phase.
-   MOT only logs the updated delta record in order to minimize the amount of data written to disk.
-   During recovery, data is loaded from the last known or a specific Checkpoint; and then the WAL Redo log is used to complete the data changes that occur from that point forward.
-   The WAL \(Redo Log\) retains all the table row modifications until a Checkpoint is performed \(as described above\). The log can then be truncated in order to reduce recovery time and to save disk space.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>In order to ensure that the log IO device does not become a bottleneck, the log file must be placed on a drive that has low latency.  

-   **[Logging Types](logging-types.md)**  

-   **[Configuring Logging](configuring-logging.md)**  


