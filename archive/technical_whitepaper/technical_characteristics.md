# Technical Characteristics<a name="EN-US_CONCEPT_0289895596"></a>

Compared with other databases, openGauss features multiple storage modes, NUMA-based kernel structure, and high availability.

-   Multiple storage modes
    -   Row-store, supporting frequent service data updates and the fusion engine \(Ustore\) and the original Astore
    -   Column-store, supporting service data appending and analysis

-   NUMA-based kernel structure
    -   Partitions key data structures to reduce data access conflicts.
    -   Provides NUMA-based key data structure to reduce the data structure access latency.
    -   Binds cores to key service threads to prevent inter-core thread drift.

-   High availability
    -   Supports multiple deployment modes, such as primary/standby synchronization and primary/standby asynchronization.
    -   Supports data page cyclic redundancy check \(CRC\), and automatically restores damaged data pages through the standby node.

-   High security

    Provides fully-encrypted database capabilities and supports security features such as fully-encrypted equality query, access control, encryption authentication, database audit, and dynamic data masking to provide comprehensive end-to-end data security protection.


