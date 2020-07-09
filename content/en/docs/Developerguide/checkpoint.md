# Checkpoint<a name="EN-US_TOPIC_0260488173"></a>

In openGauss the Checkpoints are points in the sequence of transactions at which it is guaranteed that the heap and index data files have been updated with all information written before the checkpoint.

At checkpoint time, all dirty data pages are flushed to disk and a special checkpoint record is written to the log file.

The MOT does not store its data like openGauss does and there is no dirty pages concept. The data is stored directly in memory.

For this reason we have researched and implemented the CALC algorithm described in the paper Low-Overhead Asynchronous Checkpointing in Main-Memory Database Systems, SIGMOND 2016 from Yale University.

Reference to CALC footnote:

K. Ren, T. Diamond, D. J. Abadi, and A. Thomson. Low-overhead asynchronous checkpointing in main-memory database systems. In Proceedings of the 2016 ACM SIGMOD International Conference on Management of Data, 2016.

-   **[CALC Checkpoint algorithm: low overhead in memory and compute](calc-checkpoint-algorithm-low-overhead-in-memory-and-compute.md)**  

-   **[Checkpoint Activation](checkpoint-activation.md)**  


