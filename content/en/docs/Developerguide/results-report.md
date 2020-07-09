# Results Report<a name="EN-US_TOPIC_0260488134"></a>

## Results in CLI<a name="section15214251239"></a>

BenchmarkSQL results should appear as follows.

![](figures/en-us_image_0260577787.jpg)

Over time, the benchmark measures and averages the committed transactions. The example above benchmarks for two minutes.

The score is  **2.71M tmp-C**  \(new-orders per-minute\), which is 45% of the total committed transactions, meaning the  **tpmTOTAL**.

## Detailed Result Report<a name="section1493411441546"></a>

The following is an example of a detailed result report.

![](figures/en-us_image_0260577786.png)

![](figures/en-us_image_0260577785.png)

BenchmarkSQL collects detailed performance statistics and operating system performance data \(if configured\).

This information can show the latency of the queries, and thus expose bottlenecks related to storage/network/CPU.

## Results of TPC-C of MOT on Huawei Taishan 2480<a name="section17291133956"></a>

Our TPC-C benchmark dated 01-May-2020 with an openGauss database installed on Taishan 2480 server \(a 4-socket ARM/Kunpeng server\), achieved a throughput of 4.79M tpm‑C.

A near linear scalability was demonstrated, as shown below.

**Figure  1**  Results of TPC-C of MOT on Huawei Taishan 2480<a name="fig476033811517"></a>  
![](figures/results-of-tpc-c-of-mot-on-huawei-taishan-2480.png "results-of-tpc-c-of-mot-on-huawei-taishan-2480")

