# MOT Recovery<a name="EN-US_TOPIC_0289900043"></a>

The main objective of MOT Recovery is to restore the data and the MOT engine to a consistent state after a planned shutdown \(for example, for maintenance\) or an unplanned crash \(for example, after a power failure\).

MOT recovery is performed automatically with the recovery of the rest of the openGauss database and is fully integrated into openGauss recovery process \(also called a  _Cold Start_\).

MOT recovery consists of two stages –

**Checkpoint Recovery –**  First, data must be recovered from the latest Checkpoint file on disk by loading it into memory rows and creating indexes.

**WAL Redo Log Recovery –**  Afterwards, the recent data \(which was not captured in the Checkpoint\) must be recovered from the WAL Redo Log by replaying records that were added to the log since the Checkpoint that was used in the Checkpoint Recovery \(described above\).

The WAL Redo Log recovery is managed and triggered by openGauss.

-   To configure recovery –
-   While WAL recovery is performed in a serial manner, the Checkpoint recovery can be configured to run in a multi-threaded manner \(meaning in parallel by multiple workers\).
-   Configure the  **Checkpoint\_recovery\_workers**  parameter in the  **mot.conf**  file, which is described in the  [Recovery \(MOT\)](mot-configuration-settings.md#en-us_topic_0283136588_en-us_topic_0280525130_section7442447103115)  section.

