# Indexes<a name="EN-US_TOPIC_0260488160"></a>

MOT Index is a lock-free index based on state-of-the-art Masstree[\[13\]](#_ftn13)  – a fast and scalable KV store for multicore systems, implemented as tries of B+ trees. It achieves excellent performance on many-core servers and high concurrent workloads. It uses some advanced techniques, such as an optimistic lock approach, cache-awareness and memory prefetching.

Based on our empirical experiments, the combination of the mature Masstree[\[14\]](#_ftn14)  lock-free implementation and our robust improvements to Silo[\[15\]](#_ftn15)  provided us with exactly what we needed in that regard. For the index, we compared state-of-the-art solutions, such as[\[16\]](#_ftn16),  [\[17\]](#_ftn17)  and chose Masstree[\[18\]](#_ftn18)  as it demonstrated the best overall performance for point queries, iteration and modifications. Masstree is a combination of tries and a B+ tree, implemented to carefully exploit caching, prefetching, optimistic navigation and fine-grained locking. It is optimized for high contention and adds various optimizations to its predecessors, such as OLFIT[\[19\]](#_ftn19). However, a Masstree index downside is its higher memory consumption. While row data consumes the same memory size, the memory per row per each index, primary or secondary, is higher on average by 16 bytes – 29 bytes in the lock‑based B-Tree used in disk-based tables vs. 45 bytes in MOT's Masstree.

Another challenge is to make an optimistic insertion to a table with multiple indexes.

The Masstree index is at the core of MOT memory layout for data and index management. Our team enhanced and significantly improved Masstree, and submitted some of the key contributions to the Masstree open source. These improvements include

-   Dedicated memory pools per index – Efficient allocation and fast index drop
-   Global GC for Masstree – Fast, on-demand memory reclamation
-   Masstree iterator implementation with access to an insertion key
-   ARM architecture support

We contributed our Masstree index improvements to the Masstree open-source implementation, which can be found here   [https://github.com/kohler/masstree-beta](https://github.com/kohler/masstree-beta).

-   **[Secondary Index Support](secondary-index-support.md)**  

-   **[Non-unique Indexes](non-unique-indexes.md)**  


