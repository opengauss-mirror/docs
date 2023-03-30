# MOT Introduction<a name="EN-US_TOPIC_0270171553"></a>

openGauss introduces Memory-Optimized Tables \(MOT\) storage engine – a transactional row-based store \(rowstore\), that is optimized for many-core and large memory servers. MOT is a state-of-the-art production-grade feature of the openGauss database that provides greater performance for transactional workloads. MOT is fully ACID compliant and includes strict durability and high availability support. Businesses can leverage MOT for mission-critical, performance-sensitive Online Transaction Processing \(OLTP\) applications in order to achieve high performance, high throughput, low and predictable latency and high utilization of many‑core servers. MOT is especially suited to leverage and scale-up when run on modern servers with multiple sockets and many-core processors, such as Huawei Taishan servers with ARM/Kunpeng processors and x86-based Dell or similar servers.

**Figure  1**  Memory-Optimized Storage Engine Within openGauss<a name="fig16939193016363"></a>  
![](figures/memory-optimized-storage-engine-within-opengauss.png "memory-optimized-storage-engine-within-opengauss")

[Figure 1](#fig16939193016363)  presents the Memory-Optimized Storage Engine component \(in green\) of openGauss database and is responsible for managing MOT and transactions.

MOT tables are created side-by-side regular disk-based (heap) tables. MOT's effective design enables almost full SQL coverage and support for a full database feature-set, such as stored procedures and user‑defined functions \(excluding the features listed in  [MOT SQL Coverage and Limitations](mot-sql-coverage-and-limitations.md)  section\).Since the openGauss 5.0 release, the MOT also supports of MVCC and Cross-Engine Transactions (CROSS-TX), enabling including both MOT tables and Heap tables (disk-based regular tables) in a single query (such as by a JOIN), as well as in a multi-step and multi-table transaction.

With data and indexes stored totally in-memory, a Non-Uniform Memory Access \(NUMA\)-aware design, algorithms that eliminate lock and latch contention and query native compilation, MOT provides faster data access and more efficient transaction execution.

MOT's effective almost lock-free design and highly tuned implementation enable exceptional near-linear throughput scale-up on many-core servers – probably the best in the industry.

Memory-Optimized Tables are fully ACID compliant, as follows:

-   **Atomicity –**  An atomic transaction is an indivisible series of database operations that either all occur or none occur after a transaction has been completed \(committed or aborted, respectively\).
-   **Consistency –**  Every transaction leaves the database in a consistent \(data integrity\) state.
-   **Isolation –**  Transactions cannot interfere with each other. MOT supports repeatable‑reads, read-committed and snapshot isolation levels. See the  [MOT Isolation Levels](mot-isolation-levels.md)  section for more information.
-   **Durability –**  The effects of successfully completed \(committed\) transactions must persist despite crashes and failures. MOT is fully integrated with the WAL-based logging of openGauss. Both synchronous and asynchronous logging options are supported. MOT also uniquely supports synchronous + group commit with NUMA-awareness optimization. See the  [MOT Durability Concepts](mot-durability-concepts.md)  section for more information.

The MOT Engine was published in the VLDB 2020 (an International Conference on ‘Very Large Data Bases” or VLDB):

**Industrial-Strength OLTP Using Main Memory and Many Cores**,  VLDB 2020 vol. 13 – [Paper](http://www.vldb.org/pvldb/vol13/p3099-avni.pdf), [Video on youtube](https://www.youtube.com/watch?v=xcAbww6x8wo), [Video on bilibili](https://www.bilibili.com/video/BV1MA411n7ef?p=97).