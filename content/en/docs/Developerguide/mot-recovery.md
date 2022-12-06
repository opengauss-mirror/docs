# MOT Recovery<a name="EN-US_TOPIC_0270171500"></a>

The main objective of MOT Recovery is to restore the data and the MOT engine to a consistent state after a planned shutdown \(for example, for maintenance\) or an unplanned crash \(for example, after a power failure\).

MOT recovery is performed automatically with the recovery of the rest of the openGauss database and is fully integrated into openGauss recovery process \(also called a  _Cold Start_\).

MOT recovery consists of two stages –

**Checkpoint Recovery –**  First, data must be recovered from the latest Checkpoint file on disk by loading it into memory rows and creating indexes.

**WAL Redo Log Recovery –**  Afterwards, the recent data \(which was not captured in the Checkpoint\) must be recovered from the WAL Redo Log by replaying records that were added to the log since the Checkpoint that was used in the Checkpoint Recovery \(described above\).

The WAL Redo Log recovery is managed and triggered by openGauss.

In order to shorten the RTO (secondary node recovery at a failover event) and to speed-up the cold-start, the MOT Engine supports process parallelization of both Redo Log Recovery and Checkpoint Recovery. 
Configure the parallel_recovery_workers and parallel_recovery_queue_size settings to change how the Redo Log Recovery (log replay) parallelization works. This effects the RTO.
Configure the checkpoint_recovery_workers setting to change how the Checkpoint Recovery parallelization works. This mostly affects the cold-start time.

See the [RECOVERY (MOT)](mot-configuration-settings.md#section7442447103115) section for additional description and defaults values.

