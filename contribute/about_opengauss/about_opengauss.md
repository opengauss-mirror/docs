# 产品描述

本文档对openGauss数据库进行了详细描述，包含产品定位、系统架构介绍、应用场景、运行环境、技术指标、基本功能和特性、企业级增强特性介绍等信息。

## 产品定位

openGauss是一款支持SQL2003标准语法，支持主备部署的高可用多模数据库。

- 支持多种数据模型（如关系型、向量、全文搜索、图结构等），满足多样化的业务需求。
- 多种存储模式支持复合业务场景，新引入提供原地更新存储引擎。
- NUMA化数据结构支持高性能。
- Paxos一致性日志复制协议，主备模式，CRC校验支持高可用。
- 支持全密态计算，账本数据库等安全特性，提供全方位端到端的数据安全保护。
- 通过Table Access Method接口层支持多存储引擎。

openGauss是一款提供面向多核的极致性能、全链路的业务和数据安全、基于AI的调优和高效运维的能力，全面友好开放，携手伙伴共同打造全球领先的企业级开源多模数据库，采用木兰宽松许可证v2发行。openGauss深度融合华为在数据库领域多年的研发经验，结合企业级场景需求，持续构建竞争力特性。

## 技术特点

openGauss相比于其他开源数据库主要有以下几个特点：

- 高性能
    - 提供了面向多核架构的并发控制技术，结合[鲲鹏硬件优化](../../docs/zh/characteristic_description/kunpeng_numa_architecture_optimization.md)，在两路鲲鹏下，TPCC Benchmark可以达到150万tpmc的性能。
    - 针对当前硬件多核numa的架构趋势，在内核关键结构上采用了[Numa-Aware](../database_administration_guide/numa_awareness_allocation_and_affinity.md)的数据结构。
    - 提供[Sql-bypass](../../docs/zh/characteristic_description/sql_by_pass.md)智能快速引擎技术。
    - 针对频繁更新场景，提供[Ustore存储引擎](../database_administration_guide/in_place_update_storage_engine.md)。
    - [HTAP行列融合](../../docs/zh/characteristic_description/row_and_column_integration.md)，在单机、主备场景下，通过节点的行列双格式内存模式，实现openGauss HTAP一体化数据库架构。

- 高可用
    - 支持[主备同步、异步以及级联备机](../../docs/zh/database_administration_guide/opengauss_common_primary_standby_deployment_solutions.md)多种部署模式。
    - 数据页CRC校验，损坏数据页通过备机[自动修复](../../docs/zh/characteristic_description/primary_and_standby_database_bad_block_repair_function.md)。
    - [极致RTO](../../docs/zh/database_om_guide/ultimate_rto.md)，10秒内可升主提供服务。
    - 提供[基于paxos分布式一致性协议](../../docs/zh/database_om_guide/high_availability_based_on_the_paxos_protocol.md)的日志复制及选主框架。
    - 通过[CM](../../docs/zh/characteristic_description/cm.md)管理和监控数据库系统中各个功能单元和物理资源的运行情况，确保整个系统的稳定运行。
    - 支持[在线DDL](../../docs/zh/database_administration_guide/online_ddl.md)，通过辅助表+追增的模式，缩短DDL操作持有八级锁的时间，允许并发业务在数据重建期间对被操作表执行DML、DQL操作，避免业务长时间阻塞，解决客户业务变更的痛点问题。

- 高安全

    - 支持[全密态](../../docs/zh/characteristic_description/advanced_features/full_encrypted_database.md)数据库，使得系统无论在何种业务场景和环境下，数据在传输、运算以及存储的各个环节始终都处于密文状态。
    - 支持[访问控制](../../docs/zh/characteristic_description/access_control_model.md)，客户可依据自身需求创建对应的数据库用户并赋予相应的权限给操作人员，将数据库使用风险降到最低。
    - 支持[数据库审计](../../docs/zh/characteristic_description/database_audit.md)，记录用户对数据库的启停、连接、DDL、DML、DCL等操作，提供对非法操作的追溯及举证能力。
    - 支持[动态数据脱敏](../../docs/zh/characteristic_description/dynamic_data_masking.md)，通过定制化制定脱敏策略从而实现对隐私数据保护的一种技术，可以有效地在保留原始数据的前提下解决非授权用户对敏感信息的访问问题。
    - 通过[数据保险柜](../../docs/zh/tool_and_commandreference/ogrecorder/ogrecorder_overview.md)提供对数据库的日志保护，其典型部署场景是运行于virtCCA中，南向对接Dorado Worm存储，北向通过oGRecorderSDK对接数据库，实现对数据库WAL日志的实时同步，形成对用户数据库系统的日志安全保护的软硬一体组合方案。 

- 高智能

    - 提供[向量数据库](../../docs/zh/datavec/datavec_overview.md)能力，提供向量数据类型的存储、检索。提供向量的精确和近似的最近邻搜索、L2距离&余弦距离&内积、向量索引、向量操作函数和操作符等。
    - 提供多种[向量索引算法](../../docs/zh/datavec/index.md)，包括IVFFLAT、HNSW、DiskANN、基于乘积量化的索引、基于1bit量化的索引等，适用于不同的场景和数据类型。
    - 支持[融合查询](../../docs/zh/datavec/fusion_queries_using_guide.md)，结合结构化过滤和非结构化检索的技术，使用户在同一查询中使用不同的数据类型和查询方法，以获取更为精确的非结构化数据。
    - 支持[全文检索索引](../../docs/zh/datavec/full_text.md)，通过对文本数据集的文本内容建立索引，支持快速、灵活地查询并返回包含特定关键词或短语的文档，并根据相关性对返回的文档集进行排序。
    - 提供一站式的 AI 能力集成方案[oGAI](../../docs/zh/characteristic_description/ogai.md)，用户可以在数据库内部直接调用AI模型进行文本向量化、文本生成、文档重排序等操作，无需依赖外部应用层实现，大幅简化了 RAG（检索增强生成）应用的开发流程。
    - 丰富的第三方生态接口，支持多个[编排组件](../../docs/zh/datavec/dify.md)、[嵌入模型](../../docs/zh/datavec/embedding_bgem3.md)、[Agents框架](../../docs/zh/datavec/mcp.md)等。

- DataPod资源池化架构

    - 提供主备机共享一份存储的[资源池化](../../docs/zh/resource_pooling/resource_pooling_overview.md)能力，提供一种新HA部署形态，解决传统HA部署下存储容量较单机翻倍的问题，满足降低存储容量及成本的诉求，同时备机支持实时一致性读。
    - 资源池化架构下支持[主备双集群容灾](../../docs/zh/resource_pooling/resource_pooling_active_standby_dual_cluster_dr.md)，实现主备双集群的XLog日志同步，保证主备双集群的XLog一致性，从而增强主备双集群的容灾能力，降低存储空间，并保证主备集群内节点切换、主备集群间切换功能正常。
    - 支持资源池化[算子卸载](../../docs/zh/characteristic_description/resource_pooling_operator_offloading.md)，将数据过滤卸载到存储侧执行，去除不需要的数据，从而减少网络通信数据量，提升端到端性能。
    - 支持资源池化[多机并行](../../docs/zh/characteristic_description/resource_pooling_multi_machine_paralleism.md)，对于SQL语句生成多机执行计划，并将计划分发到各节点执行，再由查询节点汇聚各节点数据实现所有读节点并行查询，充分发挥集群的OLAP能力。
    - 支持资源池化[备机事务内透明写转发](../../docs/zh/performance_tuning_guide/transparent_forwarding_within_backup_machine_affairs.md)，在资源池化架构下，当开启备机支持写特性后，备机上执行的显式事务(即begin,end包围的sql)，数据库会自动将事务中的涉及修改的写SQL语句转发给主机, 而事务中的读语句仍然在备机本地执行。

- DataKit全生命周期数据管理工具

    - [DataKit](../../docs/zh/characteristic_description/tool_chain_datakit.md)是基于Web的openGauss的可视化的平台系统，提供[基础运维](../../docs/zh/datakit/base_ops/datakit_base_ops.md)、[实例监控](../../docs/zh/datakit/observability_instance/instance_monitoring.md)、[告警监控](../../docs/zh/datakit/datakit_alarm_mointor.md)、[业务开发](../../docs/zh/datakit/data_studio/datakit_business_development.md)、[智能诊断](../../docs/zh/datakit/datakit_intelligent_diagnosis.md)、[兼容性评估](../../docs/zh/datakit/compatibility_assessment.md)等能力。
    - 支持[MySQL到openGauss的迁移能力](../../docs/zh/datakit/datakit_data_migration.md)、[PostgreSQL到openGauss的迁移能力](../../docs/zh/datakit/datakit_postgresql_migration.md)，包括全量/增量数据迁移、全量/增量数据校验、反向迁移等能力。
    - 支持[流量录制回放](../../docs/zh/datakit/datakit_workload_replay.md)，录制MySQL客户端的业务SQL，然后在openGauss端进行回放。回放结果会输出慢SQL信息和失败SQL信息。

- 易运维
    - 基于AI的[智能参数调优](../../docs/zh/characteristic_description/parameter_tuning_and_diagnosis.md)和[索引推荐](../../docs/zh/characteristic_description/index_recommendation.md)，提供AI自动参数推荐。
    - [慢SQL诊断](../../docs/zh/characteristic_description/root_cause_analysis_for_slow_sql_statements.md)，多维性能自监控视图，实时掌控系统的性能表现、预测指标的未来走势，还可以进行异常检测和慢SQL的根因分析。

- 全开放
    - 采用木兰宽松许可证协议，允许对代码自由修改、使用、引用。
    - 数据库内核能力全开放。
    - 提供丰富的伙伴认证，培训体系和高校课程。

## 系统架构

openGauss是集中式数据库系统，在这样的系统架构中，业务数据存储在单个物理节点上，数据访问任务被推送到服务节点执行，通过服务器的高并发，实现对数据处理的快速响应。同时通过日志复制可以把数据复制到备机，提供数据的高可靠和读扩展。

### 软件架构

openGauss是单机系统，在这样的系统架构中，业务数据存储在单个物理节点上，数据访问任务被推送到服务节点执行，通过服务器的高并发，实现对数据处理的快速响应。同时日志复制可以把数据复制到备机，提供数据的高可靠和读扩展。
openGauss支持主备部署，openGauss逻辑架构如[图1](#zh-cn_topic_0283136530_zh-cn_topic_0237080634_zh-cn_topic_0231764167_fig5205420191411)所示。

**图 1**  openGauss逻辑架构图<a name="zh-cn_topic_0283136530_zh-cn_topic_0237080634_zh-cn_topic_0231764167_fig5205420191411"></a>  
![](figures/openGauss逻辑架构图.png)

**表 1**  架构说明

| 名称 | 描述 |
|------|------|
| OM | 运维管理模块（Operation Manager）。提供数据库日常运维、配置管理的管理接口、工具。 |
| CM | 数据库管理模块（Cluster Manager）。管理和监控数据库系统中各个功能单元和物理资源的运行情况，确保整个系统的稳定运行。 |
| 客户端驱动 | 客户端驱动（Client Driver）。负责接收来自应用的访问请求，并向应用返回执行结果。客户端驱动负责与openGauss实例通信，发送应用的SQL命令，接收openGauss实例的执行结果。 |
| openGauss（主备） | openGauss主备（Datanode）。负责存储业务数据、执行数据查询任务以及向客户端返回执行结果。<br> openGauss实例包含主、备两种类型，支持一主多备。建议将主、备openGauss实例分散部署在不同的物理节点中。 |
| Storage | 服务器的本地存储资源，持久化存储数据。 |

## 应用场景

- 交易型应用

    大并发、大数据量、以联机事务处理为主的交易型应用，如电商、金融、O2O、电信CRM/计费等，应用可按需选择不同的主备部署模式。

- 物联网数据

    在工业监控和远程控制、智慧城市的延展、智能家居、车联网等物联网场景下，传感监控设备多，采样率高，数据存储为追加模型，操作和分析并重的场景。

- AI应用

    [向量数据库](../../docs/zh/datavec/datavec_overview.md)通过高效的相似性搜索能力，让大模型能精准召回相关私有知识，从而在检索增强生成（RAG）、推荐、语义搜索等场景中实现更低延迟、更高准确率的企业级AI应用。