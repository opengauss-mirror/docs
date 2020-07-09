# CHECKPOINT \(MOT\)<a name="EN-US_TOPIC_0260488228"></a>

-   enable\_checkpoint = true

    Specifies whether to use periodic checkpoint.


-   checkpoint\_dir =

    Specifies the directory in which checkpoint data is to be stored. The default location is in the data folder of each data node.


-   checkpoint\_segsize = 16 MB

    Specifies the segment size used during checkpoint. Checkpoint is performed in segments. When a segment is full, it is serialized to disk and a new segment is opened for the subsequent checkpoint data.


-   checkpoint\_workers = 3

    Specifies the number of workers to use during checkpoint.

    Checkpoint is performed in parallel by several MOT engine workers. The quantity of workers may substantially affect the overall performance of the entire checkpoint operation, as well as the operation of other running transactions. To achieve a shorter checkpoint duration, a larger number of workers should be used, up to the optimal number \(which varies based on the hardware and workload\). However, be aware that if this number is too large, it may negatively impact the execution time of other running transactions. Keep this number as low as possible to minimize the effect on the runtime of other running transactions. When this number is too high, longer checkpoint durations occur.


