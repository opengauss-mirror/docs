# Technical Characteristics<a name="EN-US_CONCEPT_0251307660"></a>

Compared with other open-source databases, openGauss provides multiple storage modes, NUMA-based kernel structure, and high availability.

-   Multi-storage mode
    -   Row-store, supporting frequent service data updates
    -   Column-store, supporting service data appending and analysis
    -   Memory table, supporting high throughput, low latency, and ultra-high performance

-   NUMA-based kernel structure
    -   Partitions key data structures to reduce data access conflicts.
    -   NUMA-based key data structure, reducing the data structure access latency.
    -   Cores are bound to key service threads to prevent inter-core thread drift.

-   High availability \(HA\)
    -   Replication between the primary and standby nodes can be deployed in synchronous or asynchronous mode.
    -   Data page CRC check is supported. Damaged data pages are automatically restored by the standby node.
    -   The standby node recovers in parallel and can be promoted to primary to provide services within 10 seconds.


