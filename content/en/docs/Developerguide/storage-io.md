# Storage IO<a name="EN-US_TOPIC_0257867352"></a>

MOT is a memory-optimized, persistent database storage engine. A disk drive\(s\) is required for storing the Redo Log \(WAL\) and a periodic checkpoint.

It is recommended to use a storage device with low latency, such as SSD with a RAID-1 configuration, NVMe or any enterprise-grade storage system. When appropriate hardware is used, the database transaction processing and contention are the bottleneck, not the IO.

Since the persistent storage is much slower than RAM memory, the IO operations \(logging and checkpoint\) can create a bottleneck for both an in-memory and memory-optimized databases. However, MOT has a highly efficient durability design and implementation that is optimized for modern hardware \(such as SSD and NVMe\). In addition, MOT has minimized and optimized writing points \(for example, by using parallel logging, single log record per transaction and logging only at the commit phase\) and has minimized data written to disk \(for example, no index and only updating the delta of the changed records\).

## Required Capacity<a name="en-us_topic_0257713344_section82854716426"></a>

The required capacity is determined by the requirements of checkpointing and logging, as described below:

-   **Checkpointing**

    A checkpoint saves a snapshot of all the data to disk.

    Twice the size of all data should be allocated for checkpointing. There is no need to allocate space for the indexes for checkpointing

    Checkpointing = 2x the MOT Data Size \(rows only, index is not persistent\).

    Twice the size is required because a snapshot is saved to disk of the entire size of the data, and in addition, the same amount of space should be allocated for the checkpoint that is in progress. When a checkpoint process finishes, the previous checkpoint files are deleted.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >In the next openGauss release, MOT will have an incremental checkpoint feature, which will significantly reduce this storage capacity requirement.  

-   **Logging**

    MOT table log records are written to the same database transaction log as the other openGauss MOT log records.

    The size of the log depends on the transactional throughput, the size of the data changes and the time between checkpoints \(at each time checkpoint the Redo Log is truncated and starts to expanding again\). IS THIS CORRECT? GGG

    MOT tables use less log bandwidth and have lower IO contention than disk‑based tables. This is enabled by multiple mechanisms.

    For example, MOT does not log every operation before a transaction has been completed. It is only logged at the commit phase and only the updated delta record is logged \(not full records like for disk-based tables\).

    In order to ensure that the log IO device does not become a bottleneck, the log file must be placed on a drive that has low latency.


