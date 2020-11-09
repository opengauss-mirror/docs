# Logging Design Overview<a name="EN-US_TOPIC_0276133416"></a>

Write-Ahead Logging \(WAL\) is a standard method for ensuring data durability. WAL's central concept is that changes to data files \(where tables and indexes reside\) are only written after those changes have been logged, meaning after the log records that describe these changes have been flushed to permanent storage.

The MOT Engine uses the existing openGauss logging facilities, enabling it also to participate in the replication process. 

**Figure  1**  Three Logging Options



![](figures/figure1.jpg)

The RedoLog component is used by both by backend threads that use the MOT Engine and by the WAL writer in order to persist their data. Checkpoints are performed using the Checkpoint Manager, which is triggered by the Postgres checkpointer.

