# Design Principles<a name="EN-US_TOPIC_0260488143"></a>

To achieve the requirements described above \(especially in an environment with many-cores\), our storage engine's architecture implements the following techniques and strategies

-   Data and indexes only reside in memory.
-   Data and indexes are  **not**  laid out with physical partitions \(because these might achieve lower performance for certain types of applications\).
-   Transaction concurrency control is based on Optimistic Concurrency Control \(OCC\) without any centralized contention points. See the ++ section for more information about OCC.
-   Parallel Redo Logs \(ultimately per core\) are used to efficiently avoid a central locking point. See the ++ section for more information about Parallel Redo Logs.
-   Indexes are lock-free. See the ++ section for more information about lock-free indexes.
-   NUMA-awareness memory allocation is used to avoid cross-socket access, especially for session lifecycle objects. See the ++ section for more information about NUMA‑awareness.
-   A customized MOT memory management allocator with pre-cached object pools is used to avoid expensive runtime allocation and extra points of contention. This dedicated MOT memory allocator makes memory allocation more efficient by pre‑accessing relatively large chunks of memory from the operation system as needed and then divvying it out to the MOT as needed.

