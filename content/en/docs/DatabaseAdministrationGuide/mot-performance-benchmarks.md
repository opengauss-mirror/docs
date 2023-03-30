# MOT Performance Benchmarks<a name="EN-US_TOPIC_0270171591"></a>

Our performance tests are based on the TPC-C Benchmark that is commonly used both by industry and academia.

Ours tests used BenchmarkSQL \(see  [MOT Sample TPC-C Benchmark](mot-sample-tpc-c-benchmark.md)\) and generates the workload using interactive SQL commands, as opposed to stored procedures.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Using the stored procedures approach may produce even higher performance results because it involves significantly less networking roundtrips and database envelope SQL processing cycles.

All tests that evaluated the performance of openGauss MOT vs DISK used synchronous logging and its optimized  **group-commit=on**  version in MOT.

Finally, we performed an additional test in order to evaluate MOT's ability to quickly and ingest massive quantities of data and to serve as an alternative to a mid-tier data ingestion solutions.

All tests were performed in June 2020.

The following shows various types of MOT performance benchmarks –

-   **[MOT Hardware](mot-hardware.md)**  

-   **[MOT Results – Summary](mot-results-summary.md)**  

-   **[MOT High Throughput](mot-high-throughput.md)**  

-   **[MOT Low Latency](mot-low-latency.md)**  

-   **[MOT RTO and Cold-Start Time](mot-rto-and-cold-start-time.md)**  

-   **[MOT Resource Utilization](mot-resource-utilization.md)**  

-   **[MOT Data Ingestion Speed](mot-data-ingestion-speed.md)**  


