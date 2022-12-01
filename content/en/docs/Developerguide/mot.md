# MOT<a name="EN-US_TOPIC_0257861804"></a>


MOT is a high-performance row-based memory-optimized transactional storage engine (rowstore) that is a feature of Huawei’s openGauss. 
This user manual describes the openGauss Memory-Optimized Tables (MOT) engine, how it works, how to deploy it and how to use it.

## About This Manual

- [Chapter 1, Introducing MOT](introducing-mot.md) introduces Huawei’s openGauss Memory-Optimized Tables (MOT), describes its features and benefits, key technologies, applicable scenarios, performance benchmarks and its competitive advantages.
- [Chapter 2, Using MOT](using-mot.md) describes how to deploy, use and manage openGauss MOT. Using MOT tables is quite simple. The syntax of all MOT commands is the same as for openGauss diskbased tables. Only the create and drop table statements in MOT differ from the statements for disk-based tables in openGauss. You may refer to this chapter in order to learn how to get started, how to convert a diskbased table into a MOT table, how to use MOT’s Query Native Compilation feature and about MOT’s limitations and coverage. MOT administration options are also described here. This chapter also describes  how to perform a TPC-C benchmark.
-  [Chapter 3, MOT Concepts ](concepts-of-mot.md) describes how openGauss MOT is designed and how it works. It also sheds light on its advanced features and capabilities and how to use them. This chapter serves to educate the reader about various technical details of how MOT operates, details of important MOT features and innovative differentiators. The content of this chapter may be useful for decision-making regarding MOT’s suitability to specific application requirements and for using and managing it most efficiently.

## Audience

Database users, such as DBAs and application developers, should read [Chapter 1, Introducing MOT](introducing-mot.md), and pay special attention to [Chapter 2, Using MOT](using-mot.md). If needed, more answers can be found in  [Chapter 3, MOT Concepts ](concepts-of-mot.md)  . 
Software architects and expert database developers may want to read [Chapter 3, MOT Concepts ](concepts-of-mot.md) closely in addition to the other chapters. 