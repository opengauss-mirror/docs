# MOT Checkpoint Concepts<a name="EN-US_TOPIC_0289901022"></a>

In openGauss, a checkpoint is a snapshot of a point in the sequence of transactions at which it is guaranteed that the heap and index data files have been updated with all information written before the checkpoint.

At the time of a Checkpoint, all dirty data pages are flushed to disk and a special checkpoint record is written to the log file.

The data is stored directly in memory. The MOT does not store its data it the same way as openGauss so that the concept of dirty pages does not exist.

For this reason, we have researched and implemented the CALC algorithm, which is described in the paper named Low-Overhead Asynchronous Checkpointing in Main-Memory Database Systems, SIGMOND 2016 from Yale University.

Low-overhead asynchronous checkpointing in main-memory database systems<sup>\[</sup>[Comparison: Disk vs. MOT](comparison-disk-vs-mot.md)<sup>\]</sup>.

## CALC Checkpoint Algorithm – Low Overhead in Memory and Compute<a name="en-us_topic_0283137002_en-us_topic_0280525165_section5525712"></a>

The checkpoint algorithm provides the following benefits –

-   **Reduced Memory Usage –**  At most two copies of each record are stored at any time. Memory usage is minimized by only storing a single physical copy of a record while it is live and stable versions are equal or when no checkpoint is actively being recorded.
-   **Low Overhead –**  CALC's overhead is smaller than other asynchronous checkpointing algorithms.
-   **Uses Virtual Points of Consistency –**  CALC does not require quiescing of the database in order to achieve a physical point of consistency.

## Checkpoint Activation<a name="en-us_topic_0283137002_en-us_topic_0280525165_section49731412"></a>

MOT checkpoints are integrated into openGauss's envelope's Checkpoint mechanism. The Checkpoint process can be triggered manually by executing the  **CHECKPOINT;**  command or automatically according to the envelope's Checkpoint triggering settings \(time/size\).

Checkpoint configuration is performed in the mot.conf file – see the  [Checkpoint \(MOT\)](mot-configuration-settings.md#en-us_topic_0283136588_en-us_topic_0280525130_section8719101152712)  section.

