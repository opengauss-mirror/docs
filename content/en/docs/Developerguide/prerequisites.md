# Prerequisites<a name="EN-US_TOPIC_0257867349"></a>

The following specifies the hardware and software prerequisites for using openGauss MOT.

## Supported Hardware<a name="en-us_topic_0257713315_section12925740103412"></a>

MOT can utilize state-of-the-art hardware, as well as support existing hardware platforms. Both x86 architecture and ARM by Huawei Kunpeng architecture are supported.

MOT is fully aligned with the hardware supported by the openGauss database. For more information, see the  _openGauss Installation Guide_.

## CPU<a name="en-us_topic_0257713315_section71991078356"></a>

MOT delivers exceptional performance on many-core servers \(scale-up\). MOT significantly outperforms the competition in these environments and provides near-linear scaling and extremely high resource utilization.

Even so, users can already start realizing MOT’s performance benefits on both low-end, mid-range and high-end servers, starting from one or two CPU sockets, as well as four and even eight CPU sockets. Very high performance and resource utilization are also expected on very high-end servers that have 16 or even 32 sockets \(for such cases, we recommend contacting Huawei support\).

## Memory<a name="en-us_topic_0257713315_section4110142715351"></a>

MOT supports standard RAM/DRAM for its data and transaction management. All MOT tables’ data and indexes reside in-memory; therefore, the memory capacity must support the data capacity and still have space for further growth. For detailed information about memory requirements and planning, see the  [Memory and Storage Planning](memory-and-storage-planning.md#EN-US_TOPIC_0257867350)__section.

## Storage IO<a name="en-us_topic_0257713315_section42921547103510"></a>

MOT is a durable database and uses persistent storage \(disk/SSD/NVMe drive\[s\]\) for transaction log operations and periodic checkpoints.

We recommend using a storage device with low latency, such as SSD with a RAID-1 configuration, NVMe or any enterprise-grade storage system. When appropriate hardware is used, the database transaction processing and contention are the bottleneck, not the IO.

For detailed memory requirements and planning, see the  [Memory and Storage Planning](memory-and-storage-planning.md#EN-US_TOPIC_0257867350)section_._

## Supported Operating Systems<a name="en-us_topic_0257713315_section1312482253612"></a>

MOT is fully aligned with the operating systems supported by openGauss.

MOT supports both bare-metal and virtualized environments that run the following operating systems on a bare-metal server or virtual machine:

-   **x86 –**  CentOS 7.6 and EulerOS 2.0
-   **ARM –**  OpenEuler and EulerOS

## OS Optimization<a name="en-us_topic_0257713315_section46748220381"></a>

MOT does not require any special modifications or the installation of new software. However, several optional optimizations can enhance performance. You may refer to the  [Server Optimization – x86](server-optimization-x86.md#EN-US_TOPIC_0257867354)__and  [Server Optimization – ARM Huawei Taishan 4P](server-optimization-arm-huawei-taishan-4p.md#EN-US_TOPIC_0257867359)  sections for a description of the optimizations that enable maximal performance.

