# MOT Features and Benefits<a name="EN-US_TOPIC_0270171559"></a>

MOT provide users with significant benefits in performance \(query and transaction latency\), scalability \(throughput and concurrency\) and in some cases cost \(high resource utilization\) –

-   **Low Latency –**  Provides fast query and transaction response time
-   **High Throughput –**  Supports spikes and constantly high user concurrency
-   **High Resource Utilization –**  Utilizes hardware to its full extent

Using MOT, applications are able to achieve more 2.5 to 4 times \(2.5x – 4x\) higher throughput. For example, in our TPC-C benchmarks \(interactive transactions and synchronous logging\) performed both on Huawei Taishan Kunpeng-based \(ARM\) servers and on Dell x86 Intel Xeon-based servers, MOT provides throughput gains that vary from 2.5x on a 2-socket server to 3.7x on a 4-socket server, reaching 4.8M \(million\) tpmC on an ARM 4-socket 256-cores server.

The lower latency provided by MOT reduces transaction speed by 3x to 5.5x, as observed in TPC-C benchmarks.

Additionally, MOT enables extremely high utilization of server resources when running under high load and contention, which is a well-known problem for all leading industry databases. Using MOT, utilization reaches 99% on 4-socket server, compared with much lower utilization observed when testing other industry leading databases.

This abilities are especially evident and important on modern many-core servers.

