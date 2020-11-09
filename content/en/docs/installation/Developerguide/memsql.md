# MemSQL<a name="EN-US_TOPIC_0257867345"></a>

MemSQL is an additional database with scale-out capabilities. It has a memory-optimized row‑store as a separate storage engine, in addition to a primary column-store. The primary purpose of a memory row‑store is to act as a high-performance data digestion layer, while the automated asynchronous mechanism transfers and converts the data into the disk-column‑store. Originally based on MySQL code, MemSQL provides distributed scale-out \(using a share-nothing approach\), transaction support and distributed queries. The advantage of this architecture is its ability to mix simple Transactional Processing \(TP\) with Analytical Processing \(AP\) in a single system, which is also referred to as  _Operational Analytics_. The disadvantage of this architecture is its performance during TP scenarios, because it requires that transaction access and query access simultaneously maintain locks both in engines and in layers.

## Comparison<a name="en-us_topic_0257713261_section994922522619"></a>

Though both openGauss MOT and MemSQL possess a memory-optimized row‑store \(as well as scale-out capabilities in the enterprise version of GaussDB\), there are fundamental differences in architecture implementation and the focus of scenarios. MOT focusses purely on TP scenarios that deliver state-of-the-art performance. As shown in TPC-C benchmarks \(see the  [Performance Benchmarks](performance-benchmarks.md#EN-US_TOPIC_0257867320)  section\), depending on the deployment configuration,  **MOT delivers 1**5**,000 to 30,000 tpmC per Core**, compared with** 1,000 tpmC / Core in MemSQL**[\[7\]](en-us_topic_0257713261.md#_ftn7).

## **References**<a name="en-us_topic_0257713261_section199113585283"></a>

\[1\] C. Diaconu, C. Freedman, E. Ismert, P. Larson, P. Mittal, R. Stonecipher, N. Verma, and M. Zwilling. Hekaton: openGauss MOT’s memory-optimized OLTP engine. In Proceedings of the ACM SIGMOD International Conference on Management of Data,  _SIGMOD 2013, New York, NY, USA, _June 22-27, 2013 \(2013\), pp. 1243–1254.

\[2\] N. Shamgunov. The Memsql in-memory database system. In Proceedings of the 2nd International Workshop on In Memory Data Management and Analytics,  _IMDM 2014, Hangzhou, China, _September 1, 2014 \(2014\), J. J. Levandoski and A. Pavlo, Eds.

\[3\] Lee, J., Muehle, M., May, N., Faerber, F., Sikka, V., Plattner, H., Krüger, J., and Grund, M. High-performance transaction processing in SAP HANA.  _IEEE Data Eng. Bull. _36, 2 \(2013\), 28–33.

\[5\] S. Tu, W. Zheng, E. Kohler, B.Liskov, and S. Madden. Speedy transactions in multicore in-memory databases. In Proceedings of the Twenty-Fourth ACM Symposium on Operating Systems Principles \(New York, NY, USA, 2013\),  _SOSP ’13_, ACM, pp. 18–32.

\[7\] X. Yu, G. Bezerra, A. Pavlo, S. Devadas, and M. Stonebraker. Staring into the abyss: An evaluation of concurrency control with one thousand cores.  _PVLDB _8, 3 \(2014\), 209–220.

\[8\] R. Appuswamy, A. Anadiotis, D. Porobic, M. Iman, and A. Ailamaki. Analyzing the impact of system architecture on the scalability of OLTP engines for high-contention workloads.  _PVLDB_, 11\(2\): 121–134, 2017.

\[30\] Yu, X., Bezerra, G., Pavlo, A., Devadas, S., and Stonebraker, M. Staring into the abyss: An evaluation of concurrency control with one thousand cores. Proc. VLDB Endow. 8, 3 \(Nov. 2014\), 209–220.

