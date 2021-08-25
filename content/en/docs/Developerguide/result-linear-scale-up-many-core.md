# Result: Linear Scale-up Many-core<a name="EN-US_TOPIC_0257867426"></a>

To the best of our knowledge, MOT outperforms all existing industry-grade OLTP databases in transactional throughput of ACID-compliant workloads.

openGauss/GaussDB and MOT have been tested on the following many-core systems with excellent performance scalability results. The tests were performed both on x86 Intel-based and ARM/Kunpeng-based many-core servers. See section 1.5 Performance Benchmarks for more detailed performance review.

Our TPC-C benchmark dated 01-May-2020 tested an openGauss MOT database on a Taishan 2480 server. A 4-socket ARM/Kunpeng server, achieved throughput of 4.79 M tpmC. The following graph shows the near-linear nature of the results, meaning that it shows a significant increase in performance correlating to the increase of the quantity of cores.

![](figures/en-us_image_0257713431.png)

The following shows the results of very high resource utilization that was tested on a 4‑socket 96-Core x86 server.

![](figures/en-us_image_0257713433.png)

This graph compares the performance results of openGauss, ORACLE, Postgres or MySQL disk-based tables, with the results of MOT \(the orange line\). It shows that only MOT demonstrates a significant performance increase correlation with an increase of the quantity of cores. Only MOT consumes more and more of the CPU correlating to the increase of the quantity of cores; other solutions do not increase and sometimes show slightly degraded performance.

