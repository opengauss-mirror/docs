# CALC Checkpoint algorithm: low overhead in memory and compute<a name="EN-US_TOPIC_0260488174"></a>

The checkpoint algorithm provides the following benefits

-   <u>Reduced memory usage</u>: At most two copies of each record are stored at any time. Memory usage is minimized by only storing one physical copy of a record when its live and stable versions are equal or when no checkpoint is actively being recorded.
-   <u>Low overhead</u>. CALC's overhead is smaller than other asynchronous checkpointing algorithms.
-   <u>Uses virtual points of consistency</u>. CALC does not require quiescing of the database in order to achieve a physical point of consistency.

