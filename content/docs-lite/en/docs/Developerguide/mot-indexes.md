# MOT Indexes<a name="EN-US_TOPIC_0289900508"></a>

MOT Index is a lock-free index based on state-of-the-art Masstree<sup>\[</sup>[Comparison: Disk vs. MOT](comparison-disk-vs-mot.md)<sup>\]</sup>, which is a fast and scalable Key Value \(KV\) store for multicore systems, implemented as tries of B+ trees. It achieves excellent performance on many-core servers and high concurrent workloads. It uses various advanced techniques, such as an optimistic lock approach, cache-awareness and memory prefetching.

After comparing various state-of-the-art solutions, such as  <sup>\[</sup>[Comparison: Disk vs. MOT](comparison-disk-vs-mot.md)<sup>\]</sup>,<sup>\[</sup>[Comparison: Disk vs. MOT](comparison-disk-vs-mot.md)<sup>\]</sup>, we chose Masstree<sup>\[</sup>[Comparison: Disk vs. MOT](comparison-disk-vs-mot.md)<sup>\]</sup>  for the index because it demonstrated the best overall performance for point queries, iterations and modifications. Masstree is a combination of tries and a B+ tree that is implemented to carefully exploit caching, prefetching, optimistic navigation and fine-grained locking. It is optimized for high contention and adds various optimizations to its predecessors, such as OLFIT<sup>\[</sup>[Comparison: Disk vs. MOT](comparison-disk-vs-mot.md)<sup>\]</sup>. However, the downside of a Masstree index is its higher memory consumption. While row data consumes the same memory size, the memory per row per each index \(primary or secondary\) is higher on average by 16 bytes – 29 bytes in the lock‑based B-Tree used in disk-based tables vs. 45 bytes in MOT's Masstree.

Our empirical experiments showed that the combination of the mature lock-free Masstree<sup>\[</sup>[Comparison: Disk vs. MOT](comparison-disk-vs-mot.md)<sup>\]</sup>  implementation and our robust improvements to Silo<sup>\[</sup>[Comparison: Disk vs. MOT](comparison-disk-vs-mot.md)<sup>\]</sup>  have provided exactly what we needed in that regard.

Another challenge was making an optimistic insertion into a table with multiple indexes.

The Masstree index is at the core of MOT memory layout for data and index management. Our team enhanced and significantly improved Masstree and submitted some of the key contributions to the Masstree open source. These improvements include –

-   Dedicated memory pools per index – Efficient allocation and fast index drop
-   Global GC for Masstree – Fast, on-demand memory reclamation
-   Masstree iterator implementation with access to an insertion key
-   ARM architecture support

We contributed our Masstree index improvements to the Masstree open-source implementation, which can be found here –  [https://github.com/kohler/masstree-beta](https://github.com/kohler/masstree-beta).

MOT's main innovation was to enhance the original Masstree data structure and algorithm, which did not support Non-Unique Indexes \(as a Secondary index\). You may refer to the  [Non-unique Indexes](#en-us_topic_0283137557_en-us_topic_0270171529_section12297174320129)  section for the design details.

MOT supports both Primary, Secondary and Keyless indexes \(subject to the limitations specified in the  **Unsupported Index DDLs and Index**<u>section</u>\).

## Non-unique Indexes<a name="en-us_topic_0283137557_en-us_topic_0270171529_section12297174320129"></a>

A non-unique index may contain multiple rows with the same key. Non-unique indexes are used solely to improve query performance by maintaining a sorted order of data values that are used frequently. For example, a database may use a non-unique index to group all people from the same family. However, the Masstree<sup>\[</sup>[Comparison: Disk vs. MOT](comparison-disk-vs-mot.md)<sup>\]</sup>  data structure implementation does not allow the mapping of multiple objects to the same key. Our solution for enabling the creation of non-unique indexes \(as shown in the figure below\) is to add a symmetry-breaking suffix to the key, which maps the row. This added suffix is the pointer to the row itself, which has a constant size of 8 bytes and a value that is unique to the row. When inserting into a non-unique index, the insertion of the sentinel always succeeds, which enables the row allocated by the executing transaction to be used. This approach also enable MOT to have a fast, reliable, order-based iterator for a non-unique index.

**Figure  1**  Non-unique Indexes<a name="en-us_topic_0283137557_en-us_topic_0270171529_fig14741915135"></a>  
![](figures/non-unique-indexes.png "non-unique-indexes")

The structure of an MOT table T that has three rows and two indexes is depicted in the figure above. The rectangles represent data rows, and the indexes point to sentinels \(the elliptic shapes\) which point to the rows. The sentinels are inserted into unique indexes with a key and into non-unique indexes with a key + a suffix. The sentinels facilitate maintenance operations so that the rows can be replaced without touching the index data structure. In addition, there are various flags and a reference count embedded in the sentinel in order to facilitate optimistic inserts.

When searching a non-unique secondary index, the required key \(for example, the family name\) is used. The fully concatenated key is only used for insert and delete operations. Insert and delete operations always get a row as a parameter, thereby making it possible to create the entire key and to use it in the execution of the deletion or the insertion of the specific row for the index.

