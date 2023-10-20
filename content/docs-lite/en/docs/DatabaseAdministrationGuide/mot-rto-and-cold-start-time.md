# MOT RTO and Cold-Start Time<a name="EN-US_TOPIC_0289900802"></a>

High Availability Recovery Time Objective \(RTO\)

MOT is fully integrated into openGauss, including support for high-availability scenarios consisting of primary and secondary deployments. The WAL Redo Log's replication mechanism replicates changes into the secondary database node and uses it for replay.

If a Failover event occurs, whether it is due to an unplanned primary node failure or due to a planned maintenance event, the secondary node quickly becomes active. The amount of time that it takes to recover and replay the WAL Redo Log and to enable connections is also referred to as the Recovery Time Objective \(RTO\).

**The RTO of openGauss, including the MOT, is less than 10 seconds.**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The Recovery Time Objective \(RTO\) is the duration of time and a service level within which a business process must be restored after a disaster in order to avoid unacceptable consequences associated with a break in continuity. In other words, the RTO is the answer to the question: "How much time did it take to recover after notification of a business process disruption?"

In addition, as shown in the  [MOT High Throughput](mot-high-throughput.md)  section in MOT the replication overhead of a Primary/Secondary High Availability scenario is only 7% on ARM/Kunpeng servers and 2% on x86 servers, as opposed to the replication overhead of disk-tables, which is 20% on ARM/Kunpeng and 15% on x86 servers.

Cold-Start Recovery Time

Cold-start Recovery time is the amount of time it takes for a system to become fully operational after a stopped mode. In memory databases, this includes the loading of all data and indexes into memory, thus it depends on data size, hardware bandwidth, and on software algorithms to process it efficiently.

Our MOT tests used x86 servers and SSD disks to demonstrate the ability to load 100 GB of data in 65 seconds. Because MOT does not persist indexes and therefore they are created at cold-start, the actual size of the loaded data + indexes is approximately 50% more. Therefore, MOT Data + Index cold-start time can be converted into  **138 GB in 60 seconds**.

The following figure demonstrates cold-start process and how long it takes to load data into a MOT table from the disk after a cold start.

**Figure  1**  Cold-Start Time – Performance Benchmarks<a name="en-us_topic_0283136642_en-us_topic_0270171499_fig89536207425"></a>  
![](figures/cold-start-time-performance-benchmarks.png "cold-start-time-performance-benchmarks")

-   **Database Size –**  The total amount of time to load the entire database \(per database GB\) is represented by the blue line and the  **TIME \(sec\)**  Y axis on the left.
-   **Throughput –**  The quantity of database GB throughput per second is represented by the orange line and the  **Throughput GB/sec**  Y axis on the right.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The performance demonstrated during the test is very close to the bandwidth of the SSD hardware. Therefore, it is feasible that higher \(or lower\) performance may be achieved on a different platform.

