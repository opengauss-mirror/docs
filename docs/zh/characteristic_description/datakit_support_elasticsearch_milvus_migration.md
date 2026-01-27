# Elasticsearch和Milvus迁移工具对接DataKit

## 可获得性

本特性自 openGauss 7.0.0-RC3 版本开始引入。

## 特性简介

本特性将 Elasticsearch 与 Milvus 的数据迁移能力集成至 DataKit 数据迁移插件，用户可直接通过 DataKit 完成从 Elasticsearch 或 Milvus 至 openGauss 的数据迁移。

## 客户价值

特性提供了高效、易用的数据迁移通道，助力用户将 Elasticsearch 或 Milvus 中的向量数据平滑迁移至 openGauss 数据库。在保留原有业务数据的同时，用户可无缝使用 openGauss 的向量检索能力，实现业务的无感过渡与升级。

## 特性描述

原有的 Elasticsearch/Milvus 迁移工具为基于 Python 编写的脚本，使用时需手动修改配置文件并执行脚本。本集成功能将其迁移流程整合至 DataKit 数据迁移插件中，支持以下增强特性：

- **可视化任务管理**：通过 DataKit 界面创建、启动、停止及管理迁移任务。
- **实时进度监控**：在 DataKit 页面实时查看数据迁移进度。
- **迁移日志访问**：支持直接在界面中查看或下载迁移日志，便于问题跟踪与分析。
- **并行迁移支持**：支持创建多表并行迁移的迁移任务，提升了迁移效率。

## 特性约束

（1）服务器限制

工具当前仅支持在指定系统架构的 Linux 服务器中运行，支持的系统架构如下：

- CentOS7 x86_64
- openEuler20.03 x86_64/aarch64
- openEuler22.03 x86_64/aarch64
- openEuler24.03 x86_64/aarch64

（2）运行环境限制

工具使用 Java 17 和 Python 3.8 编写，需要服务器准备 Java 17+ 及 Python 3.8+ 的运行环境。

（3）数据库版本限制

- Elasticsearch 7.3 及以上版本。
- Milvus 2.3 及以上版本。
- openGauss 7.0.0-RC1 及以上版本。

## 依赖关系

无

## 参考文档

使用本特性完成 Elasticsearch/Milvus 迁移，请参考[DataKit相关文档](https://docs.opengauss.org/zh/docs/latest/datakit/datakit.html)。
