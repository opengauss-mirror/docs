# Design<a name="EN-US_TOPIC_0257867433"></a>

The key organizing principle is to eliminate unnecessary contention by reducing writes to shared memory. This variant of OCC achieves serializability, even after recovery, using CSN or periodically-updated epochs; epoch boundaries form natural serialization points. Epochs also help make garbage collection efficient and enable snapshot transactions. Several design choices, such as transaction ID design, record overwriting, and range query support, simplify and speed up transaction execution further, and the decentralized durability subsystem also avoids contention.

SILO key technologies when running a transaction ‒

Transaction Private Memory for lock-less reads and writes, short locks only at commit.

Very Low Contention.

Low Latency. NUMA-aware local memory.

Optimistic CC ‒ Minimal data locks, Low Contention.

Auto-Vacuum with No Locks, No Overhead.

Masstree implementation of Btree – extremely optimized

