# 版本能力矩阵图

## **版本功能对比**

| **分类/功能**     | **企业版** | **极简版** | **轻量版** | **说明**                           |
| :---------------- | :--------- | :--------- | :--------- | :--------------------------------- |
| **核心模块**      |            |            |            |                                    |
| 集群资源管理 (CM) | ✔️          | ❌          | ❌          | 仅企业版支持集群管理。             |
| 运维管理 (OM)     | ✔️          | ❌          | ❌          | 仅企业版提供运维工具。             |
| **资源占用**      |            |            |            |                                    |
| 安装包大小        | ➖          | ➖          | <30MB      | 轻量版极致精简。                   |
| 空载内存占用      | 1.5G       | 1.2G       | <250MB     | 轻量版优化内存配置。               |
| **安装复杂度**    | 需配置     | 极简       | 极简       | 轻量版内置 `liteom` 工具简化部署。 |

------

## **二进制工具支持清单**

| **工具名称**        | **企业版** | **极简版** | **轻量版** | **工具用途**                                 |
| :------------------ | :--------- | :--------- | :--------- | :------------------------------------------- |
| **基础管理工具**    |            |            |            |                                              |
| `gsql`              | ✔️          | ✔️          | ✔️          | 数据库连接工具。                             |
| `gs_ctl`            | ✔️          | ✔️          | ✔️          | 数据库服务控制（启动/停止/重启）。           |
| `gs_guc`            | ✔️          | ✔️          | ✔️          | 数据库参数配置管理。                         |
| `gs_dump`           | ✔️          | ✔️          | ✔️          | 数据库逻辑备份。                             |
| `gs_restore`        | ✔️          | ✔️          | ✔️          | 数据库逻辑恢复。                             |
| `gs_probackup`      | ✔️          | ✔️          | ✔️          | 物理备份与恢复。                             |
| `gs_initdb`         | ✔️          | ✔️          | ✔️          | 初始化数据库实例。                           |
| `liteom`            | ❌          | ❌          | ✔️          | 轻量版专用安装部署工具。                     |
| **高级管理工具**    |            |            |            |                                              |
| `gs_cgroup`         | ✔️          | ✔️          | ❌          | 负载管理工具。                               |
| `pg_recvlogical`    | ✔️          | ✔️          | ❌          | 创建/删除逻辑复制槽。                        |
| `pg_xlogdump`       | ✔️          | ✔️          | ❌          | 解码并显示openGauss的预写式日志（WAL）工具。 |
| `gs_assessment`     | ✔️          | ✔️          | ❌          | 数据库健康状态评估。                         |
| `pg_archivecleanup` | ✔️          | ✔️          | ❌          | 清理归档日志。                               |
| **插件与扩展**      |            |            |            |                                              |
| `postgres_fdw`      | ✔️          | ✔️          | ❌          | 跨库数据访问插件。                           |
| `dblink`            | ✔️          | ✔️          | ❌          | 跨数据库连接插件。                           |
| `timescaledb`       | ✔️          | ✔️          | ❌          | 时序数据库扩展。                             |
| `age`               | ✔️          | ✔️          | ❌          | 图数据库扩展。                               |
| `spqplugin`         | ✔️          | ✔️          | ❌          | 多机并行查询框架。                           |
| `ndpplugin`         | ✔️          | ✔️          | ❌          | 算子卸载扩展。                               |
| gms_output          | ✔️          | ✔️          | ✔️          | 调试PL/SQL程序。                             |
| gms_profiler        | ✔️          | ✔️          | ✔️          | 收集PL/pgSQL程序执行情况。                   |
| gms_stats           | ✔️          | ✔️          | ✔️          | 收集指定Schema中所有对象统计信息。           |
| gms_i18n            | ✔️          | ✔️          | ✔️          |                                              |
| gms_sql             | ✔️          | ✔️          | ✔️          | 执行动态SQL插件。                            |
| gms_tcp             | ✔️          | ✔️          | ✔️          | 网络通信插件。                               |
| gms_compress        | ✔️          | ✔️          | ✔️          | 数据压缩，解压缩插件。                       |
| gms_inaddr          | ✔️          | ✔️          | ✔️          | 提供多个ip主机名转换的函数接口。             |
| gms_utility         | ✔️          | ✔️          | ✔️          | 提供各种实用程序和函数。                     |
| gms_raw             | ✔️          | ✔️          | ✔️          | 对十六进制raw类型数据进行转换和操作。        |
| gms_match           | ✔️          | ✔️          | ✔️          | 比较两个字符串间相似度。                     |
| gms_assert          | ✔️          | ✔️          | ✔️          | 验证输入值属性，合法性。                     |
| gms_debug           | ✔️          | ✔️          | ✔️          | 服务端调试工具。                             |
| dolphin             | ✔️          | ✔️          | ✔️          | MySQL语法兼容性插件  |
| **依赖组件**        |            |            |            |                                              |
| JRE（Java 环境）    | ✔️          | ✔️          | ❌          | 轻量版无需 Java 支持。                       |

## **核心功能模块**

| **功能模块**                          | **企业版** | **极简版** | **轻量版** | **说明**                                                 |
| :------------------------------------ | :--------- | :--------- | :--------- | :------------------------------------------------------- |
| ORC 文件访问                          | ✔️          | ✔️          | ❌          | 轻量版不支持 ORC 外部数据源读写。                        |
| Kerberos 安全校验                     | ✔️          | ✔️          | ❌          | 轻量版禁用企业级安全认证协议。                           |
| MOT 内存表                            | ✔️          | ✔️          | ❌          | 轻量版不支持内存优化表引擎。                             |
| SMP 并行查询                          | ✔️          | ✔️          | ❌          | 轻量版禁用多核并行加速查询。                             |
| 全密态数据库                          | ✔️          | ✔️          | ❌          | 轻量版不支持全生命周期数据加密。                         |
| 容灾集群功能                          | ✔️          | ✔️          | ❌          | 轻量版不支持主备容灾部署。                               |
| **高性能**                            |            |            |            |                                                          |
| [CBO优化器](../characteristic_description/cbo_optimizer.md)                                          | ✔️      | ✔️      | ✔️      | 基于代价的优化器。                                         |
| [支持LLVM](../characteristic_description/llvm.md)                                                    | ✔️      | ✔️      | ❌      | 提供查询动态编译执行能力。                                 |
| [向量化引擎](https://docs.opengauss.org/zh/docs/latest/performance_tuning_guide/vectorized_engine.html)           | ✔️      | ✔️      | ❌      | 提供向量化引擎。                                           |
| [行列混合存储](../database_administration_guide/planning_storage_models.md) | ✔️      | ✔️      | ✔️      | 提供行列混合存储。                                         |
| [自适应压缩](../database_administration_guide/adaptive_compression.md)     | ✔️      | ✔️      | ✔️      | 提供数据压缩技术。                                         |
| [SQL by pass](../characteristic_description/sql_by_pass.md)                                          | ✔️      | ✔️      | ✔️      | 提供OLTP查询场景定制化执行方案。                           |
| [鲲鹏NUMA架构优化](../characteristic_description/kunpeng_numa_architecture_optimization.md)          | ✔️      | ✔️      | ✔️      | 提升在鲲鹏平台上的处理性能。                               |
| [支持线程池高并发](../characteristic_description/high_concurrency_of_thread_pools.md)                | ✔️      | ✔️      | ✔️      | 支撑数据库大并发稳定运行。                                 |
| [SMP并行执行](../characteristic_description/smp_for_parallel_execution.md)                           | ✔️      | ✔️      | ✔️      | 利用多核能力提升查询性能。                                 |
| [Parallel Page-based Redo For Ustore](../database_administration_guide/parallel_page_based_redo_for_ustore.md) | ✔️      | ✔️      | ✔️      | 基于Ustore存储引擎的并行页级重做机制，提升事务恢复效率。   |
| [行存转向量化](https://docs.opengauss.org/zh/docs/latest/performance_tuning_guide/transition_quantitative_analysis.html) | ✔️      | ✔️      | ❌      | 提升复杂查询执行性能。                                     |
| [OCK加速数据传输](../characteristic_description/ock_accelerated_data_transmission.md)                | ✔️      | ✔️      | ❌      | 提高备机一致性读的性能。                                   |
| [大页内存](../characteristic_description/huge_page_memory.md)                                        | ✔️      | ✔️      | ✔️      | 提升在大内存环境下数据库的性能表现。                       |
| [开箱即用](../characteristic_description/out_of_the_box.md)                                          | ✔️      | ✔️      | ❌      | 通过工具自动对数据库进行性能优化。                         |
| [用户态网络](../characteristic_description/user_mode_network.md)                                      | ✔️      | ✔️      | ❌      | 支持高性能用户态网络协议栈。                               |
| [HTAP行列融合](../characteristic_description/row_and_column_integration.md)                          | ✔️      | ✔️      | ❌      | 支持HTAP行列融合特性。                                     |
| ADIO                                                                     | ✔️      | ✔️      | ✔️      | 直接IO、异步UI。                                           |
| **高可用**                            |            |            |            |                                                          |
| [主备机](../database_administration_guide/master_and_standby_node.md)      | ✔️      | ✔️      | ✔️      | 支持主备机部署。                                           |
| [逻辑复制](../characteristic_description/logical_replication.md)                                      | ✔️      | ✔️      | ✔️      | 支持对数据进行逻辑复制。                                   |
| [逻辑备份](../characteristic_description/logical_backup.md)                                          | ✔️      | ✔️      | ✔️      | 支持对数据进行逻辑备份。                                   |
| [物理备份](../database_om_guide/physical_backup_and_restoration.md)        | ✔️      | ✔️      | ✔️      | 支持对数据进行物理备份。                                   |
| 在线DDL                                                                   | ✔️      | ✔️      | ✔️      | 执行DDL时不阻塞并发DML。                                   |
| [极致RTO](../database_om_guide/ultimate_rto.md)                           | ✔️      | ✔️      | ❌      | 轻量版不支持极致RTO特性。                                  |
| [基于Paxos协议的高可用](../database_om_guide/high_availability_based_on_the_paxos_protocol.md) | ✔️      | ✔️      | ❌      | 支持基于Paxos协议的复制与仲裁能力。                        |
| [级联备机](../database_administration_guide/cascaded_standby_node.md)      | ✔️      | ✔️      | ❌      | 在主备机基础上支持级联备机连接备机。                       |
| [延时回放](../database_om_guide/delayed_replay.md)                        | ✔️      | ✔️      | ✔️      | 允许备机延迟应用主库日志，用于数据误操作恢复。             |
| [备机添加删除](../database_administration_guide/add_remover_standby_node.md) | ✔️      | ✔️      | ❌      | 支持在线动态扩展或缩减备机节点。                           |
| [并行逻辑解码](../characteristic_description/parallel_logical_decoding.md)                            | ✔️      | ✔️      | ✔️      | 提升逻辑复制吞吐量的并行解码能力。                         |
| [DCF](../database_om_guide/dcf_overview.md)                                | ✔️      | ❌      | ❌      | 分布式共识框架（基于Paxos协议实现强一致性复制）。          |
| [CM](../characteristic_description/cm.md)                                                             | ✔️      | ❌      | ❌      | 集群管理组件（负责节点监控与故障自动切换）。               |
| [支持Global SysCache](../characteristic_description/global_syscache.md)                               | ✔️      | ✔️      | ❌      | 全局系统缓存共享机制，降低内存重复开销。                   |
| [两地三中心跨Region容灾](../database_administration_guide/two_city_three_dc_dr.md) | ✔️      | ❌      | ❌      | 支持同城双活+异地灾备的跨地域部署架构。                    |
| **维护性**                                                               |        |        |        |                                                            |
| [灰度升级](../characteristic_description/gray_upgrade.md)                                            | ✔️      | ✔️      | ❌      | 支持滚动升级确保服务连续性。                               |
| [指定节点升级](../characteristic_description/rolling_upgrade.md)                                      | ✔️      | ❌      | ❌      | 允许选择特定节点优先升级。                                 |
| [支持WDR诊断报告](../characteristic_description/workload_diagnosis_report_wdr.md)                     | ✔️      | ✔️      | ✔️      | 提供性能分析报告。                                         |
| [慢SQL诊断](../characteristic_description/slow_sql_diagnosis.md)                                      | ✔️      | ✔️      | ✔️      | 支持慢查询分析。                                           |
| [Session性能诊断](../characteristic_description/session_performance_diagnosis.md)                    | ✔️      | ✔️      | ✔️      | 提供会话级性能监控。                                       |
| [系统KPI辅助诊断](../characteristic_description/system_kpi_aided_diagnosis.md)                        | ✔️      | ✔️      | ✔️      | 监控关键性能指标。                                         |
| [内置stack工具](../characteristic_description/built_in_stack_tool.md)                                 | ✔️      | ✔️      | ✔️      | 集成堆栈分析工具。                                         |
| [支持SQL PATCH](../characteristic_description/sql_patch.md)                                          | ✔️      | ✔️      | ✔️      | 支持在线SQL语句热修复。                                    |
| **数据库安全**                        |            |            |            |                                                          |
| [访问控制模型](../characteristic_description/access_control_model.md)                                 | ✔️      | ✔️      | ✔️      | 最小权限管理。                                             |
| [控制权和访问权分离](../characteristic_description/separation_of_control_and_access_permissions.md)   | ✔️      | ✔️      | ✔️      | 支持控制权和访问权分离。                                   |
| [数据库认证机制](../characteristic_description/database_authentication_mechanism.md)                  | ✔️      | ✔️      | ✔️      | 提供客户端/服务端模式的客户端连接认证机制。                |
| [数据加密存储](../characteristic_description/data_encryption_and_storage.md)                          | ✔️      | ✔️      | ❌      | 提供对导入数据的加密存储。                                 |
| [数据库审计](../characteristic_description/database_audit.md)                                        | ✔️      | ✔️      | ✔️      | 审计日志记录用户操作。                                     |
| [网络通信安全](../characteristic_description/network_communication_security.md)                      | ✔️      | ✔️      | ✔️      | 保护客户端与服务器通讯安全。                               |
| [资源标签机制](../characteristic_description/resource_label.md)                                      | ✔️      | ✔️      | ✔️      | 安全管理数据库资源。                                       |
| [统一审计机制](../characteristic_description/unified_audit.md)                                        | ✔️      | ✔️      | ✔️      | 根据审计策略生成审计行为，并记录日志。                     |
| [动态数据脱敏机制](../characteristic_description/dynamic_data_masking.md)                            | ✔️      | ✔️      | ✔️      | 限制非授权用户访问隐私数据。                               |
| [行级访问控制](../characteristic_description/row_level_access_control.md)                            | ✔️      | ✔️      | ✔️      | 使数据库达到行级访问控制的能力。                           |
| [用户口令强度校验机制](../characteristic_description/password_strength_verification.md)              | ✔️      | ✔️      | ✔️      | 校验数据库设置的口令强度。                                 |
| [全密态数据库等值查询](../characteristic_description/equality_query_in_a_fully_encrypted_database.md) | ✔️      | ✔️      | ❌      | 轻量版不支持全密态数据库。                                 |
| [账本数据库机制](../characteristic_description/ledger_database_mechanism.md)                        | ✔️      | ✔️      | ❌      | 提高数据库防篡改能力。                                     |
| [透明数据加密](../characteristic_description/transparent_data_encryption.md)                        | ✔️      | ✔️      | ❌      | 解决静态数据泄露问题。                                     |
| **资源池化**                          |            |            |            |                                                          |
| [资源池化特性](https://docs.opengauss.org/zh/docs/latest/resource_pooling/resource_pooling_overview.html)        | ✔️      | ❌      | ❌      | 实现跨节点计算/存储资源统一调度。                          |
| **企业级特性**                                                          |        |        |        |                                                            |
| [函数及存储过程支持](../characteristic_description/support_for_functions_and_stored_procedures.md)  | ✔️      | ✔️      | ✔️      | 支持PL/pgSQL编程。                                         |
| [支持SQL hint](../characteristic_description/sql_hints.md)                                          | ✔️      | ✔️      | ✔️      | 提供执行计划调优指令。                                     |
| [全文索引](../characteristic_description/full_text_indexing.md)                                      | ✔️      | ✔️      | ✔️      | 支持文本检索优化。                                         |
| [分区](../characteristic_description/partitioning.md)                                                | ✔️      | ✔️      | ✔️      | 支持表分区管理。                                           |
| [高级分析函数支持](../characteristic_description/support_for_advanced_analysis_functions.md)        | ✔️      | ✔️      | ✔️      | 支持窗口函数等高级分析功能。                               |
| [物化视图](../characteristic_description/materialized_view.md)                                      | ✔️      | ✔️      | ✔️      | 支持预计算视图加速查询。                                   |
| [支持HyperLogLog](../characteristic_description/hyperloglog.md)                                      | ✔️      | ✔️      | ✔️      | 提供基数估算算法。                                         |
| [在线添加索引](../characteristic_description/creating_an_index_online.md)                            | ✔️      | ✔️      | ✔️      | 支持不锁表创建索引。                                       |
| [自治事务](../characteristic_description/autonomous_transaction.md)                                  | ✔️      | ✔️      | ✔️      | 支持子事务独立提交/回滚。                                  |
| [全局临时表](../characteristic_description/global_temporary_table.md)                                | ✔️      | ✔️      | ✔️      | 支持会话级/事务级临时表。                                  |
| [JDBC客户端负载均衡与读写分离](../characteristic_description/jdbc_client_load_balancing_and_read_write_isolation.md) | ✔️      | ✔️      | ✔️      | 支持连接池自动路由。                                       |
| [In-place Update存储引擎](../database_administration_guide/in_place_update_storage_engine.md) | ✔️      | ✔️      | ✔️      | 支持原地更新减少写放大。                                   |
| [发布订阅](../characteristic_description/publication_subscription.md)                                | ✔️      | ✔️      | ✔️      | 支持逻辑订阅数据变更。                                     |
| [支持OLTP场景数据压缩](../database_administration_guide/data_compression_in_oltp_scenarios.md) | ✔️      | ✔️      | ✔️      | 提供行存压缩技术。                                         |
| [事件触发器](../characteristic_description/event_trigger.md)                                        | ✔️      | ✔️      | ❌      | 支持DDL/DML事件触发自定义操作。                            |
| [支持UWAL特性](../characteristic_description/uwal.md)                                                | ✔️      | ✔️      | ❌      | 统一日志写入优化，提升高并发日志吞吐。                     |
| **应用开发接口**                      |            |            |            |                                                          |
| [支持标准SQL](../characteristic_description/standard_sql.md)                                          | ✔️      | ✔️      | ✔️      | 兼容SQL:2011标准。                                         |
| [支持标准开发接口](../characteristic_description/standard_development_interfaces.md)                  | ✔️      | ✔️      | ✔️      | 提供JDBC/ODBC等接口。                                      |
| [支持嵌入式SQL预处理器（ECPG）](../characteristic_description/embedded_sql_preprocessor_ecpg.md)      | ✔️      | ✔️      | ❌      | 支持C语言嵌入式SQL开发。                                   |
| [PG接口兼容](../characteristic_description/postgresql_api_compatibility.md)                          | ✔️      | ✔️      | ✔️      | 兼容PostgreSQL协议。                                       |
| [支持PL/Java](../characteristic_description/pl_java.md)                                              | ✔️      | ✔️      | ✔️      | 支持Java存储过程。                                         |
| [MySQL兼容性增强](../characteristic_description/enhanced_mysql_compatibility.md)                      | ✔️      | ✔️      | ✔️      | 支持常用MySQL语法与函数。                                  |
| **AI能力**                                                               |        |        |        |                                                            |
| [向量数据库](../datavec/datavec_overview.md)                              | ✔️      | ✔️      | ✔️      | DataVec向量能力。                                          |
| AI4DB：数据库指标采集、预测与异常监控                                      | ✔️      | ✔️      | ❌      | 基于时序预测的智能监控告警系统。                           |
| AI4DB：慢SQL根因分析                                                      | ✔️      | ✔️      | ❌      | 通过机器学习定位SQL性能瓶颈。                              |
| [AI4DB：索引推荐](../characteristic_description/advanced_features/index_recommendation.md)            | ✔️      | ✔️      | ❌      | 自动生成最优索引组合建议。                                 |
| AI4DB：参数调优与诊断                                                     | ✔️      | ✔️      | ❌      | 基于强化学习的参数自动优化。                               |
| AI4DB：慢SQL发现                                                          | ✔️      | ✔️      | ❌      | 智能识别潜在性能风险SQL。                                  |
| [AI4DB：数据库驱动AI](../characteristic_description/db4ai_database_driven_ai.md)                      | ✔️      | ✔️      | ❌      | 内置机器学习算法库支持库内AI训练。                         |
| [ABO优化器 > 智能基数估计](../characteristic_description/aifeature_guide/intelligent_cardinality_estimation.md) | ✔️      | ✔️      | ❌      | 基于神经网络的基数预估模型。                               |
| ABO优化器 > 自适应计划选择                                                 | ✔️      | ✔️      | ❌      | 运行时动态调整最优执行计划。                               |
| **中间件**                                                               |        |        |        |                                                            |
| [使用kubernetes部署分布式数据库](../characteristic_description/deploying_a_distributed_database_using_kubernetes.md) | ✔️      | ✔️      | ❌      | 支持K8s编排实现自动化扩缩容。                              |
| **负载管理**                                                             |        |        |        |                                                            |
| [支持底层执行层高时延逃生能力](../characteristic_description/high_latency_escape_at_the_infrastructure_layer.md) | ✔️      | ✔️      | ✔️      | 在网络异常时自动降级保障基础服务。                         |

## **轻量版不支持的 GUC 参数**

| **GUC 参数**                  | **企业版** | **极简版** | **轻量版** | **说明**                                |
| :---------------------------- | :--------- | :--------- | :--------- | :-------------------------------------- |
| `standby_recycle_interval`    | ✔️          | ✔️          | ❌          | 轻量版禁用备机日志回收间隔配置。        |
| `standby_max_query_time`      | ✔️          | ✔️          | ❌          | 轻量版不支持备机查询超时时间设置。      |
| `base_page_saved_interval`    | ✔️          | ✔️          | ❌          | 轻量版禁用基础页保存周期配置。          |
| `standby_force_recycle_ratio` | ✔️          | ✔️          | ❌          | 轻量版不支持强制备机日志回收比例设置。  |
| `max_standby_base_page_size`  | ✔️          | ✔️          | ❌          | 轻量版禁用备机基础页最大尺寸配置。      |
| `max_standby_lsn_info_size`   | ✔️          | ✔️          | ❌          | 轻量版不支持备机 LSN 信息最大尺寸设置。 |

## **轻量版通过参数默认关闭的特性**

| **特性分类**        | **功能点**             | **企业版** | **极简版** | **轻量版** | **说明**                          |
| :------------------ | :--------------------- | :--------- | :--------- | :--------- | :-------------------------------- |
| **存储与事务**      |                        |            |            |            |                                   |
| Ustore 存储引擎     | Inplace-update 引擎    | ✔️ 开启     | ✔️ 开启     | ➖ 默认关闭 | enable_ustore=off                 |
| 增量检查点          | Incremental Checkpoint | ✔️ 开启     | ✔️ 开启     | ➖ 默认关闭 | enable_incremental_checkpoint=off |
| 双写 (Double Write) | 数据页双写机制         | ✔️ 开启     | ✔️ 开启     | ➖ 默认关闭 | enable_double_write=off           |
| 两阶段提交事务      | 分布式事务支持         | ✔️ 支持     | ✔️ 支持     | ➖ 默认关闭 | max_prepared_transactions=0       |
| **性能分析**        |                        |            |            |            |                                   |
| Asp 特性            | Active Session Profile | ✔️ 开启     | ✔️ 开启     | ➖ 默认关闭 | enable_asp=off                    |
| Full/Slow SQL 跟踪  | 完整/慢 SQL 记录       | ✔️ 开启     | ✔️ 开启     | ➖ 默认关闭 | enable_stmt_track=off             |
| SQL 响应时间计算    | 响应时间百分位统计     | ✔️ 开启     | ✔️ 开启     | ➖ 默认关闭 | enable_instr_rt_percentile=off    |
| 数据库监控快照      | WDR 性能快照           | ✔️ 开启     | ✔️ 开启     | ➖ 默认关闭 | enable_wdr_snapshot=off           |
| **资源管理**        |                        |            |            |            |                                   |
| Workload 管理       | 工作负载资源隔离       | ✔️ 开启     | ✔️ 开启     | ➖ 默认关闭 | use_workload_manager=off          |
