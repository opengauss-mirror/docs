# Kunpeng NUMA Architecture Optimization<a name="EN-US_TOPIC_0000001135548527"></a>

## Availability<a name="section1820817472142"></a>

This feature is available since openGauss 1.0.0.

## Introduction<a name="section595916321417"></a>

Kunpeng NUMA architecture optimization mainly focuses on Kunpeng processor architecture features and ARMv8 instruction set, and optimizes the system from multiple layers, including OS, software architecture, lock concurrency, logs, atomic operations, and cache access. This greatly improves the openGauss performance on the Kunpeng platform.

## Benefits<a name="section1889785041315"></a>

Transactions per minute \(TPM\) is a key performance indicator of the database competitiveness. Under the same hardware costs, a higher database performance means the database can process more services, thereby reducing the usage cost of customers.

## Description<a name="section3050790"></a>

-   openGauss optimizes the Kunpeng NUMA architecture based on the architecture characteristics. This reduces cross-core memory access latency and maximizes multi-core Kunpeng computing capabilities. The key technologies include redo log batch insertion, NUMA distribution of hotspot data, and CLog partitions, greatly improving the TP system performance.
-   Based on the ARMv8.1 architecture used by the Kunpeng chip, openGauss uses the LSE instruction set to implement efficient atomic operations, effectively improving the CPU usage, multi-thread synchronization performance, and Xlog write performance.
-   Based on the wider L3 cache line provided by the Kunpeng chip, openGauss optimizes hotspot data access, effectively improving the cache access hit ratio, reducing the cache consistency maintenance overhead, and greatly improving the overall data access performance of the system.
-   Kunpeng 920, 2P server \(64 cores x 2, memory: 768 GB\), 10 GE network, I/O: 4 NVMe PCIe SSDs, TPC-C: 1000 warehouses, performance: 1,500,000 tpmC.

## Enhancements<a name="section27457110"></a>

-   Batch redo log insertion and CLog partition are supported, improving the database performance on the Kunpeng platform.
-   Efficient atomic operations using the LSE instruction set are supported, improving multi-thread synchronization performance.

## Constraints<a name="section06531946143616"></a>

None

## Dependencies<a name="section45787398"></a>

None

