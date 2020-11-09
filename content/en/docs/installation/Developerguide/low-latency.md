# Low Latency<a name="EN-US_TOPIC_0260488081"></a>

The following was measured on ARM/Kunpeng 2-socket server \(128 cores\). The numbers scale is milliseconds \(ms\).

**Figure  1**  Low Latency \(90<sup>th</sup>%\) – Performance Benchmarks<a name="fig57662018202514"></a>  
![](figures/low-latency-(90th-)-performance-benchmarks.png)

MOT’s average transaction speed is 2.5x, with MOT latency of 10.5 ms, compared to 23-25ms for disk tables.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The average was calculated by taking into account all TPC-C 5 transaction percentage distributions. You may refer to description of TPC-C transactions as described in the  [TPC-C Introduction](tpc-c-introduction.md)  section.  

**Figure  2**  Low Latency \(90<sup>th</sup>%, Transaction Average\) – Performance Benchmarks<a name="fig1614185732516"></a>  
![](figures/low-latency-(90th-transaction-average)-performance-benchmarks.png)

