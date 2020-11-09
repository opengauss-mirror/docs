# Performance Benchmarks<a name="EN-US_TOPIC_0260488223"></a>

Our performance tests are based on the TPC-C Benchmark that is commonly used both by industry and academia.

Ours tests used BenchmarkSQL \(see  [Comparison – Disk vs. MOT](comparison-disk-vs-mot.md)\) and generates the workload using interactive SQL commands, as opposed to stored procedures.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>Using the stored procedures approach may produce even higher performance results because it involves significantly less networking roundtrips and database envelope SQL processing cycles.  

All tests that evaluated the performance of openGauss MOT vs DISK used synchronous logging and its optimized  **group-commit=on**  version in MOT.

Finally, we performed an additional test in order to evaluate MOT’s ability to quickly and ingest massive quantities of data and to serve as an alternative to a mid-tier data ingestion solutions.

-   **[Hardware](hardware.md)**  

-   **[Results – Summary](results-summary.md)**  

-   **[High Throughput](high-throughput.md)**  

-   **[Low Latency](low-latency.md)**  

-   **[Recovery / Cold-Start Time](recovery-cold-start-time.md)**  

-   **[Resource Utilization](resource-utilization.md)**  

-   **[Data Ingestion Speed](data-ingestion-speed.md)**  


