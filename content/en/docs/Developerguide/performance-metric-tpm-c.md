# Performance Metric – tpm-C<a name="EN-US_TOPIC_0257867416"></a>

The tpm-C metric is the number of new-order transactions executed per minute. Given the required mix and a wide range of complexity and types among the transactions, this metric most closely simulates a comprehensive business activity, not just one or two transactions or computer operations. For this reason, the tpm-C metric is considered to be a measure of business throughput.

The tpm-C unit of measure is expressed as transactions-per-minute-C, whereas "C" stands for TPC-C specific benchmark.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The official TPC-C Benchmark specification can be accessed at –  [http://www.tpc.org/tpc\_documents\_current\_versions/pdf/tpc-c\_v5.11.0.pdf](http://www.tpc.org/tpc_documents_current_versions/pdf/tpc-c_v5.11.0.pdf). Some of the rules of this specification are generally not fulfilled in the industry, because they are too strict for industry reality. For example, Scaling rules – \(a\) tpm-C / Warehouse must be \>9 and <12.86 \(implying that a very high warehouses rate is required in order to achieve a high tpm-C rate, which also means that an extremely large database and memory capacity are required\); and \(b\) 10x terminals x Warehouses \(implying a huge quantity of simulated clients\).  

## BenchmarkSQL – An Open-Source TPC-C Tool<a name="en-us_topic_0257713272_section1016212197381"></a>

For example, to test TPCC, the  **BenchmarkSQL**  can****be used, as follows：

-   Download  **benchmarksql**  from the following link –[https://osdn.net/frs/g\_redir.php?m=kent&f=benchmarksql%2Fbenchmarksql-5.0.zip](https://osdn.net/frs/g_redir.php?m=kent&f=benchmarksql%2Fbenchmarksql-5.0.zip).
-   Under run/sql.common, adjust the schema creation scripts to MOT syntax and avoid unsupported DDLs.
-   The following attachment is a sql.common that has already been adjusted for MOT. Replace the contents of the sql.common folder with the contents of the following attachment and execute.

![](figures/en-us_image_0257843947.png)

This folder includes all the create tables and indexes with MOT syntax. The only difference is in Tables DDL – create FOREIGN table and drop FOREIGN table, which have an additional FOREIGN****keyword that specifies it as a MOT Table. In case the reader cannot download the embedded file, the required change should added to relevant files in the sql.common folder before their execution.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The benchmark test is executed using a standard interactive SQL mode without stored procedures.  

## System-Level Optimization<a name="en-us_topic_0257713272_section13355184033916"></a>

Follow the instructions in the  [Server Optimization – ARM Huawei Taishan 4P](server-optimization-arm-huawei-taishan-4p.md#EN-US_TOPIC_0257867359)  section. The following section describe the key system-level optimizations for deploying the openGauss database on a Huawei Taishan server and an Euler 2.8 operating system for ultimate performance.

-   **[BenchmarkSQL – An Open-Source TPC-C Tool](benchmarksql-an-open-source-tpc-c-tool.md)**  

-   **[System-Level Optimization](system-level-optimization.md)**  

-   **[Setting Up and Running BenchmarkSQL](setting-up-and-running-benchmarksql.md)**  

-   **[Results Report](results-report.md)**  


