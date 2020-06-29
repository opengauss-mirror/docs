# Kunpeng NUMA Architecture Optimization<a name="EN-US_TOPIC_0252569366"></a>

**Figure  1**  Kunpeng NUMA architecture optimization<a name="fig1684262417126"></a>  
![](figures/kunpeng-numa-architecture-optimization.png "kunpeng-numa-architecture-optimization")

1.  1. Based on the multi-core NUMA architecture of the Kunpeng processor, openGauss optimizes the NUMA architecture to reduce the cross-core memory access latency and maximize the multi-core Kunpeng computing capability. The key technologies include redo log batch insertion, NUMA distribution of hotspot data, and Clog partitions, greatly improving the processing performance of the TP system.
2.  2. Based on the ARMv8.1 architecture used by the Kunpeng chip, openGauss uses the LSE instruction set to implement efficient atomic operations, effectively improving the CPU usage, multi-thread synchronization performance, and XLog write performance.
3.  3. Based on the wider L3 cacheline provided by the Kunpeng chip, openGauss optimizes hotspot data access, effectively improving the cache access hit ratio, reducing the cache consistency maintenance overhead, and greatly improving the overall data access performance of the system.

