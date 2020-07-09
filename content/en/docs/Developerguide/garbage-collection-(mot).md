# GARBAGE COLLECTION \(MOT\)<a name="EN-US_TOPIC_0260488057"></a>

-   enable\_gc = true

    Specifies whether to use the garbage collector.

-   reclaim\_threshold = 512 KB

    Configures the memory threshold for the garbage collector.

    Each session manages its own list of to-be-reclaimed objects and performs its own garbage collection during transaction commitment. This value determines the total memory threshold of objects waiting to be reclaimed, above which garbage collection is triggered for a session.

    In general, the trade-off here is between un-reclaimed objects vs garbage collection frequency. Setting a low value keeps low levels of un-reclaimed memory, but causes frequent garbage collection that may affect performance. Setting a high value triggers garbage collection less frequently, but results in higher levels of un-reclaimed memory. This setting is dependent upon the overall workload.

-   reclaim\_batch\_size = 8000

    Configures the batch size for garbage collection.

    The garbage collector reclaims memory from objects in batches, in order to restrict the number of objects being reclaimed in a single garbage collection pass. The intent of this approach is to minimize the operation time of a single garbage collection pass.

-   high\_reclaim\_threshold = 8 MB

    Configures the high memory threshold for garbage collection.

    Because garbage collection works in batches, it is possible that a session may have many objects that can be reclaimed, but which were not. In such situations, in order to prevent garbage collection lists from becoming too bloated, this value is used to continue reclaiming objects within a single pass, even though that batch size limit has been reached, until the total size of the still-waiting-to-be-reclaimed objects is less than this threshold, or there are no more objects eligible for reclamation.


