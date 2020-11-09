# Microsoft Hekaton<a name="EN-US_TOPIC_0257867323"></a>

Microsoft Hekaton research, later published under name of SQL Server In-Memory OLTP is an in-memory row‑store, side by side a disk-row‑store, designed to solve performance bottlenecks in OLTP scenarios. Among its key technologies are lock‑free data structures, Optimistic Concurrency Control \(OCC\) and natively compiled stored procedures. Also, a columnar index enables Hybrid Transactional and Analytical Processing \(HTAP\) analytical queries. However, Hekaton's implementation imposes significant limitations that detract from many of its promises, including low performance in TPC-C tests, SQL coverage and cross-engine interoperability. Scale-out is not supported.

## Comparison<a name="en-us_topic_0257713221_section994922522619"></a>

openGauss MOT differs from Oracle and is more similar to Microsoft Hekaton in that it is a memory-optimized row‑store that enables the best OLTP workload performance. While some key technologies are similar, lessons have been learned and the results are better – superb TPC-C performance with scale-up and scale-out support, high coverage and in the near future, seamless interoperability \(cross-engine queries and transactions\).

