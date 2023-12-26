# UWAL<a name="EN-US_TOPIC_0000001687210125"></a>

## Availability<a name="section14611198203513"></a>

This feature is introduced in openGauss 5.1.1.

## Introduction<a name="section1044295211352"></a>

This feature combines the database and a Huawei-developed Unified Write-Ahead Log \(UWAL\) component to improve the performance of active/standby transaction submission as well as stream replication and transmission, accelerating the Write-Ahead Log \(WAL\) performance of the database.

## Benefits<a name="section38042903613"></a>

As the data scale and data nodes increase, data replication between nodes hinders performance and end-to-end database experience of clients. The UWAL feature greatly improves the performance of streaming replication and provides RDMA support to further improve database performance.

## Description<a name="section595563813616"></a>

The Huawei-developed common component UWAL is used to accelerate streaming replication. UWAL is a log service based on high-speed storage media and network media. It provides:

-   A large-granularity storage unit that supports only appending and transfers I/O operations to the mapped software protocol stack of a storage block, thereby reducing end-to-end latency of the storage system and CPU loads of storage software.
-   Unified northbound interfaces, unified multi-layer storage media, and compatibility with multiple network communication mechanisms.
    -   One-way high-performance log service based on Non-Volatile Memory express \(NVMe\) + remote direct memory access \(RDMA\). Memory-like media will be planned in the long run to further improve performance.

    -   Large-capacity and low-cost log service based on block devices.

-   Distributed features such as high availability \(multi-copy\) and strong consistency.

-   A cluster manager \(CM\) that provides cluster management functions. This module:
    -   Pushes global views and supports fault recovery.
    -   Supports dynamic scaling and load balancing.

The UWAL feature combines the features of the database and new hardware to ensure database durability, effectively reduce the transaction submission latency, and improve database performance. RDMA releases the CPU computing power used in TCP communication transmission, and the remote memory directly accesses the network adapter and transmits WAL records through one-way operations to the persistent storage device of the remote standby database. The latency is lower than that of transmitting WAL records through the TCP protocol stack, improving the active/standby replication efficiency. This method leverages the CPU offloading, kernel bypass, and zero copy advantages of RDMA.

## Enhancement<a name="section190946203720"></a>

None

## Constraints<a name="section011116254373"></a>

None

## Dependency<a name="section12798194673710"></a>

None

