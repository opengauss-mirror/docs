# Product Features<a name="EN-US_TOPIC_0241702871"></a>

Compared with other open-source databases, openGauss has the following features: composite application scenarios, high performance, and high availability.

-   Composite application scenarios
    -   Row-store, supporting frequent service data updates
    -   Column-store, supporting service data appending and analysis
    -   Memory table, supporting high throughput, low latency, and ultra-high performance

-   High performance
    -   The multi-core data structure, incremental checkpoints, and large memory buffer management are used to implement 1 million transactions per minute \(tpmC\).
    -   The server connection pool supports tens of thousands of concurrent connections.

-   High availability \(HA\)
    -   Replication between the primary and standby nodes can be deployed in synchronous or asynchronous mode.
    -   Data page CRC check is supported. Damaged data pages are automatically restored by the standby node.
    -   The standby node recovers in parallel and can be promoted to primary to provide services within 10 seconds.


