# Checkpoint<a name="EN-US_TOPIC_0257867443"></a>

ELI–OK

In openGauss/GaussDB the Checkpoints are points in the sequence of transactions at which it is guaranteed that the heap and index data files have been updated with all information written before the checkpoint.

At checkpoint time, all dirty data pages are flushed to disk and a special checkpoint record is written to the log file.

The MOT does not store its data like openGauss/GaussDB does and there is no dirty pages concept. The data is stored directly in memory.

For this reason we have researched and implemented the CALC algorithm described in the paper Low-Overhead Asynchronous Checkpointing in Main-Memory Database Systems, SIGMOND 2016 from Yale University.

Reference to footnote:

K. Ren, T. Diamond, D. J. Abadi, and A. Thomson. Low-overhead asynchronous checkpointing in main-memory database systems. In Proceedings of the 2016 ACM SIGMOD International Conference on Management of Data, 2016.

## CALC Checkpoint algorithm: low overhead in memory and compute<a name="en-us_topic_0257713323_section42663342249"></a>

The checkpoint algorithm provides the following benefits –

-   <u>Reduced memory usage</u>: At most two copies of each record are stored at any time. Memory usage is minimized by only storing one physical copy of a record when its live and stable versions are equal or when no checkpoint is actively being recorded.
-   <u>Low overhead</u>. CALC's overhead is smaller than other asynchronous checkpointing algorithms.
-   <u>Uses virtual points of consistency</u>. CALC does not require quiescing of the database in order to achieve a physical point of consistency.

How to activate manually the checkpoint?

MOT checkpoints are integrated into the envelope’s checkpoint mechanism. The process can be triggered manually by executing “**CHECKPOINT;**” command or by automatically considering the envelope’s triggering settings \(time/size\).

Checkpoint configuration is done in the mot.conf file – see the relevant  [Default MOT.conf](default-mot-conf.md#EN-US_TOPIC_0257867375).

