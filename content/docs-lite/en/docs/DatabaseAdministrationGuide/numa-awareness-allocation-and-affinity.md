# NUMA Awareness Allocation and Affinity<a name="EN-US_TOPIC_0289900545"></a>

Non-Uniform Memory Access \(NUMA\) is a computer memory design used in multiprocessing, where the memory access time depends on the memory location relative to the processor. Under NUMA, a processor can take advantage of NUMA by preferring to access its own local memory \(which is faster\), rather than accessing non-local memory \(meaning that it will prefer  **not**  to access the local memory of another processor or memory shared between processors\). 

MOT memory access has been designed with NUMA awareness. This means that MOT is aware that memory is not uniform and achieves best performance by accessing the quickest and most local memory.

The benefits of NUMA are limited to certain types of workloads, particularly on servers where the data is often strongly associated with certain tasks or users.

In-memory database systems running on NUMA platforms face several issues, such as the increased latency and the decreased bandwidth when accessing remote main memory. To cope with these NUMA-related issues, NUMA awareness must be considered as a major design principle for the fundamental architecture of a database system.

To facilitate quick operation and make efficient use of NUMA nodes, MOT allocates a designated memory pool for rows per table and for nodes per index. Each memory pool is composed from 2 MB chunks. A designated API allocates these chunks from a local NUMA node, from pages coming from all nodes or in a round-robin fashion, where each chunk is allocated on the next node. By default, pools of shared data are allocated in a round robin fashion in order to balance access, while not splitting rows between different NUMA nodes. However, thread private memory is allocated from a local node. It must also be verified that a thread always operates in the same NUMA node.

**Summary**

MOT has a smart memory control module that has preallocated memory pools intended for various types of memory objects. This smart memory control improves performance, reduces locks and ensures stability. The allocation of the memory objects of a transaction is always NUMA-local, ensuring optimal performance for CPU memory access and resulting in low latency and reduced contention. Deallocated objects go back to the memory pool. Minimized use of OS malloc functions during transactions circumvents unnecessary locks.

