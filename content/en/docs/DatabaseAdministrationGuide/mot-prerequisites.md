# MOT Prerequisites<a name="EN-US_TOPIC_0270171545"></a>

The following specifies the hardware and software prerequisites for using openGauss MOT.

## Supported Hardware<a name="section2795111724213"></a>

MOT can utilize state-of-the-art hardware, as well as support existing hardware platforms. Both x86 architecture and ARM by Huawei Kunpeng architecture are supported.

MOT is fully aligned with the hardware supported by the openGauss database. For more information, see the  _openGauss Installation Guide_.

## CPU<a name="section35486275421"></a>

MOT delivers exceptional performance on many-core servers \(scale-up\). MOT significantly outperforms the competition in these environments and provides near-linear scaling and extremely high resource utilization.

Even so, users can already start realizing MOT's performance benefits on both low-end, mid-range and high-end servers, starting from one or two CPU sockets, as well as four and even eight CPU sockets. Very high performance and resource utilization are also expected on very high-end servers that have 16 or even 32 sockets \(for such cases, we recommend contacting Huawei support\).

## Memory<a name="section1294374584217"></a>

MOT supports standard RAM/DRAM for its data and transaction management. All MOT tables’ data and indexes reside in-memory; therefore, the memory capacity must support the data capacity and still have space for further growth. For detailed information about memory requirements and planning, see the  [MOT Memory and Storage Planning](mot-memory-and-storage-planning.md)__section.

## Storage IO<a name="section8264125484218"></a>

MOT is a durable database and uses persistent storage \(disk/SSD/NVMe drive\[s\]\) for transaction log operations and periodic checkpoints.

We recommend using a storage device with low latency, such as SSD with a RAID-1 configuration, NVMe or any enterprise-grade storage system. When appropriate hardware is used, the database transaction processing and contention are the bottleneck, not the IO.

For detailed memory requirements and planning, see the  [MOT Memory and Storage Planning](mot-memory-and-storage-planning.md)__section_._

Supported Operating Systems

MOT is fully aligned with the operating systems supported by openGauss.

MOT supports both bare-metal and virtualized environments that run the following operating systems on a bare-metal server or virtual machine –

-   **x86 –**  CentOS 7.6 and EulerOS 2.0
-   **ARM –**  openEuler and EulerOS

## OS Optimization<a name="section1020616174314"></a>

MOT does not require any special modifications or the installation of new software. However, several optional optimizations can enhance performance. You may refer to the  [MOT Server Optimization – x86](mot-server-optimization-x86.md)  and  [MOT Server Optimization – ARM Huawei Taishan 2P/4P](mot-server-optimization-arm-huawei-taishan-2p-4p.md)  sections for a description of the optimizations that enable maximal performance.

