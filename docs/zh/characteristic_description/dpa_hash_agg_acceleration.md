# DPA哈希聚合加速

## 可获得性

本特性自openGauss 7.0.0-RC3版本开始引入。

## 特性简介

DPA（Data Processing Accelerator）哈希聚合加速是openGauss基于UADK框架实现的硬件加速特性，将向量化哈希聚合操作卸载到硬件加速器上执行，显著提升聚合查询的执行效率。

## 客户价值

在大规模数据聚合查询场景下，通过硬件加速器的并行处理能力替代CPU执行哈希聚合计算，减少CPU开销并提升查询性能。

## 特性描述

DPA哈希聚合加速功能基于[UADK（Unified Accelerator Development Kit）](https://docs.openeuler.org/zh/docs/22.03_LTS/docs/UADK/UADK-quick-start.html)框架，在向量化执行引擎的Vector Hash Aggregate算子中，将SUM、COUNT等聚合运算卸载到硬件加速器执行。支持INT4、INT8、CHAR、VARCHAR等数据类型的分组键，以及BIGINT类型的SUM和多种类型的COUNT聚合函数。当查询不满足加速条件时，系统自动回退到CPU执行，不会导致查询失败。

详细的配置方法和使用指导请参考[配置DPA哈希聚合加速](../performance_tuning_guide/dpa_hash_aggregation_acceleration.md)。

## 特性增强

无。

## 特性约束

- 仅支持ARM64（aarch64）架构平台，需要支持UADK的硬件加速器。
- 仅在向量化执行引擎的HashAgg算子中生效。
- 必须包含GROUP BY子句，不支持无分组键的全表聚合。
- GROUP BY键列数最多9列，聚合输入列数最多9列，CHAR/VARCHAR键列数最多5个。
- 当前不支持`count(*)`全行计数、`sum(numeric)`等聚合操作，不支持MAX、MIN聚合函数。

## 依赖关系

- [UADK加速库](https://docs.openeuler.org/zh/docs/22.03_LTS/docs/UADK/UADK-quick-start.html)
- [向量化引擎](../performance_tuning_guide/vectorized_engine.md)
