# 超低内存磁盘检索

## 可获得性

本特性自openGauss 8.0.0-RC1版本开始引入。

## 特性简介

随着推荐系统、图像识别、自然语言处理等AI应用的普及，向量数据的规模从百万级快速走向亿级，内存成为大规模向量检索的主要成本。DiskANN以图索引加磁盘存储的混合架构降低了内存消耗，但索引中仍然保存完整的原始向量，检索时的内存占用与原始数据同量级。超低内存磁盘检索在DiskANN的基础上引入PCA降维与RaBitQ量化，索引只保存压缩编码，图遍历用位运算估算距离，候选集再回堆表用原始向量精排，在保持查询性能与召回的同时进一步降低索引体积和检索内存，满足企业在内存受限条件下管理大规模向量数据的需求。

## 客户价值

- 内存与存储成本下降：索引不再保存原始向量，图遍历只读取压缩编码，相同配置的机器可以承载更大规模的向量数据。
- 查询性能保持：压缩编码的位运算估距访存量小，配合原始向量精排，在高召回下保持低查询延迟。
- 使用方式不变：沿用DiskANN的SQL语法创建索引并按距离排序查询，向量与业务数据同库，共用事务、权限、备份和主备能力。
- 数据可持续变化：支持INSERT、UPDATE、DELETE和VACUUM，大量增删后可通过REINDEX重整索引。

## 特性描述

本特性通过DiskANN索引选项`enable_rabitq = on`启用。开启后索引采用新的磁盘格式（元数据version为2），不再保存原始向量，实现原理如下：

- 向量压缩

    PCA降维把向量投影到方差最大的主成分方向上，缩短编码长度，`pca_dim`为0时不降维；RaBitQ量化对变换后的向量逐维做1bit或2bit量化，得到定长的压缩编码。PCA投影与随机正交旋转在创建索引时训练并固化，后续插入的数据沿用同一变换，不重新训练。

- 混合存储架构

    索引：存储压缩编码与Vamana图结构，用于图遍历和候选集筛选。

    堆表：保存完整的原始向量，用于候选集的精确距离计算。

- 索引检索

    图遍历阶段只读取压缩编码，用位运算估算距离，按`diskann_probes`维护候选集；候选集确定后回堆表读取原始向量计算精确距离并排序输出。量化误差只影响召回，返回结果的距离由原始向量计算。

- 索引更新

    新插入的向量沿用创建索引时的变换与量化参数，用估算距离选取邻居入图，完全相同的向量会合并到同一个索引节点。删除或更新掉的旧向量由检索时的回表精排过滤，其索引项在VACUUM时清理。大量插入导致数据分布变化，或大量删除导致空节点累积后，需要REINDEX重整。

主要索引选项：

- `enable_rabitq`：是否启用本特性，默认off，不能与`enable_pq`同时开启。
- `pca_dim`：PCA降维后的维度，取值为0（不降维，默认值）或8~维度-1。
- `rabitq_bits`：每维量化位数，取值为1或2（默认值为1）。

`enable_rabitq`、`pca_dim`、`rabitq_bits`决定索引的磁盘格式，索引建成后不可通过ALTER INDEX修改，需要删除后重建。

构建与查询还受`diskann_build_in_memory`、`diskann_probes`、`rbq_query_bits`等参数影响，其中`diskann_probes`、`rbq_query_bits`的通用说明参见[DataVec向量引擎参数](https://docs.opengauss.org/zh/docs/latest/database_reference/datavec_vector_engine_parameters.html)。

详细的创建、查询和增删步骤请参考[超低内存磁盘检索](https://docs.opengauss.org/zh/docs/latest/datavec/low_memory_disk_retrieval.html)。

## 特性增强

无。

## 特性约束

- 仅支持vector数据类型，维度不超过1536，未指定向量列维度时无法构建索引。
- 仅支持普通行存表、临时表、Toast表、Unlogged表、段页式表等，不支持ustore表。
- 不支持表达式索引，需要直接对向量列创建索引。
- `enable_rabitq`与`enable_pq`不能同时开启；`pca_dim`、`rabitq_bits`需在`enable_rabitq = on`时使用。
- `pca_dim`取非0值时表中数据量不少于16384行，空表和小表只能使用不降维的超低内存磁盘检索。
- `enable_rabitq`、`pca_dim`、`rabitq_bits`不允许通过ALTER INDEX修改，需要删除索引后重建。
- 精排需要读取堆表中的原始向量，因此不支持仅索引扫描。
- 若在兼容B库中使用向量索引，需要执行`set dolphin.nulls_minimal_policy=false`，用于关闭nulls处理策略。
- 主备环境开启极致RTO情况下，不支持向量索引功能。
- 本特性构建的索引无法被未完成升级的旧版本节点读取，版本回退前需要删除该索引。
- 支持ARM/x86架构，兼容A/B/C/PG库。

## 依赖关系

- [向量数据库特性](https://docs.opengauss.org/zh/docs/latest/datavec/datavec_overview.html)
- [DISKANN](https://docs.opengauss.org/zh/docs/latest/datavec/diskann.html)
- [RABITQ](https://docs.opengauss.org/zh/docs/latest/datavec/RabitQ.html)

## 使用指导

建议先导入数据再创建索引。设置`pca_dim`时，表中数据量不少于16384行。

使用L2距离创建1bit、不降维的超低内存磁盘检索索引：

```
CREATE INDEX ON items USING diskann (embedding vector_l2_ops) WITH (enable_rabitq = on);
```

使用余弦距离创建先PCA降至448维、再按2bit量化的超低内存磁盘检索索引：

```
CREATE INDEX ON items USING diskann (embedding vector_cosine_ops) WITH (enable_rabitq = on, pca_dim = 448, rabitq_bits = 2);
```

查询时设置`diskann_probes`并按距离排序：

```
SET diskann_probes = 128;
SELECT id FROM items ORDER BY embedding <-> '[1,2,3,4]' LIMIT 10;
```

更多参数说明与错误示例请参考[超低内存磁盘检索](https://docs.opengauss.org/zh/docs/latest/datavec/low_memory_disk_retrieval.html)。
