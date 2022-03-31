# MOT Recovery Concepts<a name="EN-US_TOPIC_0289900842"></a>

The MOT Recovery Module provides all the required functionality for recovering the MOT tables data. The main objective of the Recovery module is to restore the data and the MOT engine to a consistent state after a planned \(maintenance for example\) shut down or an unplanned \(power failure for example\) crash.

OpenGauss database recovery, which is also sometimes called a  _Cold Start_, includes MOT tables and is performed automatically with the recovery of the rest of the database. The MOT Recovery Module is seamlessly and fully integrated into the openGauss recovery process.

MOT recovery has two main stages – Checkpoint Recovery and WAL Recovery \(Redo Log\).

MOT checkpoint recovery is performed before the envelope's recovery takes place. This is done only at cold-start events \(start of a PG process\). It recovers the metadata first \(schema\) and then inserts all the rows from the current valid checkpoint, which is done in parallel by checkpoint\_recovery\_workers, each working on a different table. The indexes are created during the insert process.

When checkpointing a table, it is divided into 16 MB chunks, so that multiple recovery workers can recover the table in parallel. This is done in order to speed-up the checkpoint recovery, it is implemented as a multi-threaded procedure where each thread is responsible for recovering a different segment. There are no dependencies between different segments therefore there is no contention between the threads and there is no need to use locks when updating table or inserting new rows.

WAL records are recovered as part of the envelope's WAL recovery. openGauss envelope iterates through the XLOG and performs the necessary operation based on the xlog record type. In case of entry with record type MOT, the envelope forwards it to MOT RecoveryManager for handling. The xlog entry will be ignored by MOT recovery, if it is 'too 'old' – its LSN is older than the checkpoint's LSN \(Log Sequence Number\).

In an active-standby deployment, the standby server is always in a Recovery state for an automatic WAL recovery process.

The MOT recovery parameters are set in the  **mot.conf**  file explained in the  [MOT Recovery](mot-recovery.md)  section.

