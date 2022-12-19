# MOT Key Technologies<a name="EN-US_TOPIC_0289900293"></a>

The following key MOT technologies enable its benefits:

-   **Memory Optimized Data Structures –**  With the objective of achieving optimal high concurrent throughput and predictable low latency, all data and indexes are in memory, no intermediate page buffers are used and minimal, short-duration locks are used. Data structures and all algorithms have been specialized and optimized for in-memory design.
-   **Lock-free Transaction Management –**  The MOT storage engine applies an optimistic approach to achieving data integrity versus concurrency and high throughput. During a transaction, an MOT table does not place locks on any version of the data rows being updated, thus significantly reducing contention in some high-volume systems. Optimistic Concurrency Control \(OCC\) statements within a transaction are implemented without locks, and all data modifications are performed in a part of the memory that is dedicated to private transactions \(also called  _Private Transaction Memory_\). This means that during a transaction, the relevant data is updated in the Private Transaction Memory, thus enabling lock-less reads and writes; and a very short duration lock is only placed at the Commit phase. For more details, see the  [MOT Concurrency Control Mechanism](mot-concurrency-control-mechanism.md)__section.
-   **Lock-free Index –**  Because database data and indexes stored totally in-memory, having an efficient index data structure and algorithm is essential. The MOT Index is based on state-of-the-art Masstree<sup>\[</sup>[Comparison: Disk vs. MOT](comparison-disk-vs-mot.md)<sup>\]</sup>, a fast and scalable Key Value \(KV\) store for multi-core systems, implemented as a Trie of B+ trees. In this way, excellent performance is achieved on many-core servers and during high concurrent workloads. This index applies various advanced techniques in order to optimize performance, such as an optimistic lock approach, cache-line awareness and memory prefetching.
-   **NUMA-aware Memory Management –**  MOT memory access is designed with Non-Uniform Memory Access \(NUMA\) awareness. NUMA-aware algorithms enhance the performance of a data layout in memory so that threads access the memory that is physically attached to the core on which the thread is running. This is handled by the memory controller without requiring an extra hop by using an interconnect, such as Intel QPI. MOT's smart memory control module with pre‑allocated memory pools for various memory objects improves performance, reduces locks and ensures stability. Allocation of a transaction's memory objects is always NUMA-local. Deallocated objects are returned to the pool. Minimal usage of OS malloc during transactions circumvents unnecessary locks.
-   **Efficient Durability – Logging and Checkpoint –**  Achieving disk persistence \(also known as  _durability_\) is a crucial requirement for being ACID compliant \(the  **D**  stands for Durability\). All current disks \(including the SSD and NVMe\) are significantly slower than memory and thus are always the bottleneck of a memory-based database. As an in-memory storage engine with full durability support, MOT's durability design must implement a wide variety of algorithmic optimizations in order to ensure durability, while still achieving the speed and throughput objectives for which it was designed. These optimizations include –
    -   Parallel logging, which is also available in all openGauss disk tables
    -   Log buffering per transaction and lock-less transaction preparation
    -   Updating delta records, meaning only logging changes
    -   In addition to synchronous and asynchronous, innovative NUMA-aware group commit logging
    -   State-of-the-art database checkpoints \(CALC<sup>\[</sup>[Comparison: Disk vs. MOT](comparison-disk-vs-mot.md)<sup>\]</sup>\) enable the lowest memory and computational overhead.


-   **High SQL Coverage and Feature Set –**  By extending and relying on the PostgreSQL Foreign Data Wrappers \(FDW\) + Index support, the entire range of SQL is covered, including stored procedures, user-defined functions and system function calls. You may refer to the  [MOT SQL Coverage and Limitations](mot-sql-coverage-and-limitations.md)__section for a list of the features that are not supported.
-   **Queries Native Compilation using PREPARE Statements –**  Queries and transaction statements can be executed in an interactive manner by using PREPARE client commands that have been precompiled into a native execution format \(which are also known as  _Code‑Gen_  or  _Just-in-Time \[JIT\]_  compilation\). This achieves an average of 30% higher performance. Compilation and Lite Execution are applied when possible, and if not, applicable queries are processed using the standard execution path. A Cache Plan module \(that has been optimized for OLTP\) re-uses compilation results throughout an entire session \(even using different bind settings\), as well as across different sessions.
-   **Seamless Integration of MOT and openGauss Database –**  The MOT operates side by side the disk‑based storage engine within an integrated envelope. MOT's main memory engine and disk‑based storage engines co-exist side by side in order to support multiple application scenarios, while internally reusing database auxiliary services, such as a Write-Ahead Logging \(WAL\) Redo Log, Replication, Checkpointing, Recovery, High Availability and so on. Users benefit from the unified deployment, configuration and access of both disk-based tables and MOT tables. This provides a flexible and cost-efficient choice of which storage engine to use according to specific requirements. For example, to place highly performance-sensitive data that causes bottlenecks into memory.
