# VoltDB<a name="EN-US_TOPIC_0257867324"></a>

VoltDB[\[5\]](en-us_topic_0257713239.md#_ftn5)  is an in-memory relational database that partitions data and serially executes transactions in each partition. Transactions are implemented as stored procedures that are precompiled to optimize execution. The stored procedures are written either as single‑command SQL commands or based on Java code \(for more complex cases\). When a standard relational database is required, VoltDB’s characteristics only make it suitable for targeting new applications \(greenfields\). This is because it cannot replace an existing relational database \(especially not for a short trial\) and accelerate performance bottlenecks.

VoltDB only supports relaxed durability, meaning asynchronous transaction logging. Instead, VoltDB durability relies on a multi-node replication \(called K-factor\). While having some advantages, this approach is a significant durability compromise regarding ability to survive multi-node crush and data center shut-down, causing loss of data. Additionally, this invokes higher costs and still not provide 100% durability \(meaning that transactions may be lost\).

VoltDB’s TPC-C performance evaluation \(by Loesing et al.[\[6\]](en-us_topic_0257713239.md#_ftn6)\) demonstrated 19,264 tpmC/Core \(1.387M tpmC on 72 cores\) on a shardable-workload, with asynchronous logging and no replication \(thus not fulfilling the key durability requirement\). Latency \(transaction response time\) had a mean of 62 ms ± 102 ms.

## Comparison<a name="en-us_topic_0257713239_section994922522619"></a>

openGauss MOT’s performance during our tests showed a throughput of 27,500 tpmC/Core and transaction latency of \~6.5 ms on average \(even though different hardware was used\), while maintaining fully synchronous logging \(group commit\). Thus, MOT demonstrates much higher throughput and lower latency than VoltDB, while satisfying strict durability requirements. It is also much easier to use because it is an integral part of standard relational databases.

