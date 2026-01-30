# 向量索引汇总与对比

索引通过额外的数据组织方式，使得查询不必逐行扫描整个数据集，而是能快速定位到目标数据。在高维向量检索的场景中，选择合适的索引结构至关重要。不同的索引算法在速度、精度、内存占用和适用数据规模上各有差异。通过对openGauss向量数据库已有索引进行系统化的汇总与对比，本文旨在帮助用户在不同场景下，能够快速判断并选择合适的索引方案，从而在性能与成本之间取得最佳平衡。

## 概述

openGauss的向量数据库组件DataVec，为高效管理与查询高维向量数据，通过适配多种先进的索引结构，包含**图结构索引（HNSW、DiskANN）、倒排索引(IVFFLAT)、量化索引(PQ、RabitQ)**，全面支持 vector（全精度）、halfvec（半精度）、bit（二进制）和 sparsevec（稀疏向量）四种数据类型。以下是各类索引的基本介绍。

索引类型 | 描述 | 支持的数据类型
--- | --- | --- 
[IVFFLAT](./vector_index.md)| 倒排文件索引 |  vector、halfvec、bit |
[HNSW](./vector_index.md)| 基于分层导航小世界（HNSW）算法的图索引 | vector、halfvec、bit、sparsevec  |
[DiskANN](./vector_index.md)| 基于磁盘的图索引 | vector  |
[PQ](./pq.md)| 基于乘积量化的索引算法，支持结合IVFFLAT、HNSW、DiskANN使用 | vector  |
[RabitQ](./Rabitq.md)| 基于1bit量化的索引算法，支持结合IVFFLAT、HNSW使用 | vector、halfvec  |

## 向量索引详解

### 数据结构

openGauss向量数据库DataVec现在已支持的向量索引数据结构主要包含以下两种：

- `倒排文件结构`：IVFFLAT是一种基于倒排文件的近似最近邻搜索索引结构。它首先通过k-means聚类将向量集划分为多个分区。查询时，系统仅在与查询向量最近的若干个候选分区内进行精确搜索，从而在保证较高召回率的前提下，大幅提升检索速度。该方法尤其适用于大规模数据集，但其效果依赖于聚类质量。

- `图结构`：HNSW和DiskANN都是基于图的向量索引算法。其中，HNSW（Hierarchical Navigable Small World） 在内存中构建一个多层稀疏图，利用“高速公路”实现高效导航，以查询延迟极低、精度高著称，但内存消耗较大，适合对延迟极度敏感的场景。而 DiskANN 则专为磁盘-内存混合存储设计，通过维护一份高质量的导航图（Vamana图）和磁盘上存储完整向量，在保证高性能的同时，实现了超大规模向量数据（亿级以上） 的成本可控存储，适合低内存场景。

### 量化

向量量化是一种通过压缩高维向量来降低其存储空间与计算成本的方法。DataVec主要支持PQ、RabitQ量化。

- `PQ(乘积量化)`：通过将高维向量分割成为多个低维子向量，并对每个子向量进行独立聚类，将原始向量表示为一系列质心，从而显著减少内存使用和提升检索速度。

- `RabitQ(1bit量化)`：将向量各维度值量化为仅包含0/1的1比特值，是一种极致的标量量化形式。压缩后，原始向量被转换为一个紧凑的二进制码，比如vector类型的数据可以通过RabitQ量化将float32压缩为1bit。

### 精排

由于量化会造成数据细节丢失，对查询召回率是有一定影响的。因此，我们通过“量化后的精排”来实现精度和性能之间的平衡。

“量化后的精排”通常指的是两阶段检索流程中的第二阶段，即先通过量化索引（如PQ, RabitQ）进行粗召回（Coarse Retrieval），得到大量候选结果，再使用高精度计算对这批候选结果进行重排序（Re-ranking）或精排（Fine Ranking），以提升最终结果的准确性。

例如在使用RabitQ时，可以选择精排类型FP32或者SQ8。

## 性能对比

不同的向量索引类型在性能表现上各有侧重，主要可以从召回率、QPS（每秒查询数）和构建索引时间三个维度进行对比。我们将基于向量性能测试工具VectorDB-Benchmark在Cohere 1M数据集（`1M dataset, 768 dim`）上进行openGauss向量数据库DataVec整机性能测试。

- 硬件环境：Kunpeng 920 arm服务器
- 软件环境：openGauss 7.0.0-RC3

### 索引构建时间

索引构建时间指从原始向量数据输入到索引文件完全生成并持久化的总耗时。

以下是 Cohere1M 数据集在余弦距离度量下的索引构建时间数据，并发数为32，maintenance_work_mem为4GB。

索引类型 | 索引参数配置 | 索引构建时间（s）
--- | --- | --- 
 IVFFLAT| lists=1024 | 121.10
 IVFFLAT-RabitQ |lists=1024, 重排类型（none/FP32）| 265.61
 IVFFLAT-PQ |lists=1024, pq_m=192, pq_ksub=256| 701.26
 HNSW|m=16, ef_construction=200| 149.55
 HNSW-RabitQ|m=16, ef_construction=200，重排类型（FP32） | 385.091
 HNSW-PQ|m=16, ef_construction=200，pq_m=96 | 855.75
 DiskANN |index_size=50 | 2070.25
 DiskANN-PQ| index_size=50,0q_m=192,max_degree=96| 4695.41

一般结论如下：

- IVFFLAT 系列索引构建速度最快，DiskANN 系列构建时间远超其他索引。
- 增加量化会显著增加索引构建时间，RabitQ 的构建耗时增量低于 PQ 量化。

### 每秒查询次数（QPS）

每秒查询次数（Queries Per Second，QPS） 是衡量向量数据库查询性能核心指标，用于表示系统在单位时间（1 秒）内能够成功处理的查询请求总数，直接反映系统的并发处理能力和吞吐量上限。

以下为针对 Cohere1M 数据集的测试数据，测试条件为召回率 99%、并发数 8。

索引类型 | 参数配置 | 召回率 | QPS
--- | --- | --- | --- 
 IVFFLAT| lists=1024，nprobes=128 | 0.9947 | 22.8738
 IVFFLAT-RabitQ |lists=1024, 重排类型（none/FP32）, nprobes=32| 0.993 | 111.4228
 IVFFLAT-PQ |lists=1024, pq_m=192, pq_ksub=256,nprobes=128| 0.9943 | 39.6979
 HNSW|m=16, ef_construction=200,ef_search=400| 0.9907 | 366.6528
 HNSW-RabitQ|m=16, ef_construction=200，重排类型（FP32） | 0.99 | 498.6068
 HNSW-PQ|m=16, ef_construction=200，pq_m=96,,ef_search=400,hnsw_earlystop_threshold=160 | 0.989 | 628.361
 HNSW + MMAP|m=16, ef_construction=200,ef_search=400 | 0.9956 | 620.1976
 DiskANN |index_size=50 | 0.9923 | 218.7175
 DiskANN-PQ| index_size=50,0q_m=192,max_degree=96| 0.9917| 281.388

一般结论如下：

- HNSW 系列的 QPS 最高，但构建时间通常长于 IVFFLAT。
- PQ 和 RabitQ 量化会小幅增加构建时间，但能显著提升查询 QPS。

### 容量

在向量数据库中，索引性能、内存、磁盘三者在容量维度上是强耦合的关系，核心逻辑是：索引的容量上限由磁盘存储决定，而索引的性能和内存承载能力强相关。如果内存充足，数据库内存相关参数（shared_buffers）一般设置成索引大小，内存容量不足时，会触发磁盘与内存的频繁数据交换（Page Cache 换入换出），可能直接导致索引查询性能下降。

以下是针对 Cohere1M 数据集、基于余弦距离构建的索引所占用的空间大小，该数值与索引参数的配置直接相关。

索引类型 | 索引参数配置 | 索引大小
--- | --- | --- 
 IVFFLAT| lists=1024 | 3912MB
 IVFFLAT-RabitQ |lists=1024, 重排类型（none/FP32）| 139MB
 IVFFLAT-PQ |lists=1024, pq_m=192, pq_ksub=256| 3914MB
 HNSW|m=16, ef_construction=200| 3906MB
 HNSW-RabitQ|m=16, ef_construction=200，重排类型（FP32） | 395MB
 HNSW-PQ|m=16, ef_construction=200，pq_m=96 | 3908MB
 DiskANN |index_size=50 | 7813MB
 DiskANN-PQ| index_size=50,0q_m=192,max_degree=96| 7815MB

一般结论如下：

- 如果存储的数据量大，但是可用磁盘空间有限，可以考虑使用IVFFLAT-RabitQ/HNSW-RabitQ减少索引所占空间。
- 如果磁盘空间足够，内存比较小，可以考虑磁盘索引DiskANN。
- 如果内存足够，可以考虑直接使用IVFFLAT或者HNSW。

>[!NOTE]说明
>
>以上数据并不覆盖所有场景，建议根据实际情况尝试不同索引，以确定当前业务适合的索引类型。<br>
