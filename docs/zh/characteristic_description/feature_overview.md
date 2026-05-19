# 特性概览

## 高性能

<table>
    <tr>
        <th>特性</th>
    </tr>
    <tr>
        <td><a href="./cbo_optimizer.md">CBO优化器</a></td>
    </tr>
    <tr>
        <td><a href="./llvm.md">支持LLVM</a></td>
    </tr>
    <tr>
        <td><a href="../performance_tuning_guide/vectorized_engine.md">向量化引擎</a></td>
    </tr>
    <tr>
        <td><a href="../database_administration_guide/planning_storage_models.md">行列混合存储</a></td>
    </tr>
    <tr>
        <td><a href="../database_administration_guide/adaptive_compression.md">自适应压缩</a></td>
    </tr>
    <tr>
        <td><a href="./sql_by_pass.md">SQL by pass</a></td>
    </tr>
    <tr>
        <td><a href="./kunpeng_numa_architecture_optimization.md">鲲鹏NUMA架构优化</a></td>
    </tr>
    <tr>
        <td><a href="./high_concurrency_of_thread_pools.md">支持线程池高并发</a></td>
    </tr>
    <tr>
        <td><a href="./smp_for_parallel_execution.md">SMP并行执行</a></td>
    </tr>
    <tr>
        <td><a href="./xlog_no_lock_flush.md">Xlog no Lock Flush</a></td>
    </tr>
    <tr>
        <td><a href="../database_administration_guide/parallel_page_based_redo_for_ustore.md">Parallel Page-based Redo For Ustore</a></td>
    </tr>
    <tr>
        <td><a href="../performance_tuning_guide/transition_quantitative_analysis.md">行存转向量化</a></td>
    </tr>
    <tr>
        <td><a href="./ock_accelerated_data_transmission.md">OCK加速数据传输</a></td>
    </tr>
    <tr>
        <td><a href="./scrlock.md">SCRLock加速分布式锁</a></td>
    </tr>
    <tr>
        <td><a href="../sql_reference/optimization_of_subtransaction_concurrent_rollback_process.md">子事务并发回滚流程优化</a></td>
    </tr>
    <tr>
        <td><a href="./huge_page_memory.md">大页内存</a></td>
    </tr>
    <tr>
        <td><a href="../performance_tuning_guide/heap_tables_support_prefetching.md">堆表支持预读</a></td>
    </tr>
    <tr>
        <td><a href="./out_of_the_box.md">开箱即用</a></td>
    </tr>
    <tr>
        <td><a href="./user_mode_network.md">用户态网络</a></td>
    </tr>
    <tr>
        <td><a href="./non_resource_pooling_active_standby_synchronization_acceleration.md">非资源池化主备同步加速</a></td>
    </tr>
    <tr>
        <td><a href="./row_and_column_integration.md">HTAP 行列融合</a></td>
    </tr>
    <tr>
        <td><a href="./automatic_parameterization.md">自动参数化</a></td>
    </tr>
    <tr>
        <td><a href="./udf_result_cache.md">UDF结果缓存</a></td>
    </tr>
    <tr>
        <td><a href="./bloom_index.md">BLOOM索引</a></td>
    </tr>
    <tr>
        <td><a href="./dpa_hash_agg_acceleration.md">DPA哈希聚合加速</a></td>
    </tr>
</table>

## 高可用

<table>
    <tr>
        <th>特性</th>
    </tr>
    <tr>
        <td><a href="../database_administration_guide/master_and_standby_node.md">主备机</a></td>
    </tr>
    <tr>
        <td><a href="./logical_replication.md">逻辑复制</a></td>
    </tr>
    <tr>
        <td><a href="./logical_backup.md">逻辑备份</a></td>
    </tr>
    <tr>
        <td><a href="../database_om_guide/physical_backup_and_restoration.md">物理备份</a></td>
    </tr>
    <tr>
        <td><a href="../database_om_guide/ultimate_rto.md">极致RTO</a></td>
    </tr>
    <tr>
        <td><a href="./automatic_job_retry_upon_failure.md">作业失败自动重试</a></td>
    </tr>
    <tr>
        <td><a href="../database_om_guide/high_availability_based_on_the_paxos_protocol.md">基于Paxos协议的高可用</a></td>
    </tr>
    <tr>
        <td><a href="../database_administration_guide/cascaded_standby_node.md">级联备机</a></td>
    </tr>
    <tr>
        <td><a href="../database_om_guide/delayed_replay.md">延时回放</a></td>
    </tr>
    <tr>
        <td><a href="../database_administration_guide/add_remover_standby_node.md">备机增加删除</a></td>
    </tr>
    <tr>
        <td><a href="../database_om_guide/delaying_entering_the_maximum_availability_mode.md">延迟进入最大可用模式</a></td>
    </tr>
    <tr>
        <td><a href="./parallel_logical_decoding.md">并行逻辑解码</a></td>
    </tr>
    <tr>
        <td><a href="../database_om_guide/dcf_overview.md">DCF</a></td>
    </tr>
    <tr>
        <td><a href="./cm.md">CM</a></td>
    </tr>
    <tr>
        <td><a href="./global_syscache.md">支持Global SysCache</a></td>
    </tr>
    <tr>
        <td><a href="../database_om_guide/standby_node_building.md">支持备机build备机</a></td>
    </tr>
    <tr>
        <td><a href="../database_administration_guide/two_city_three_dc_dr.md">两地三中心跨Region容灾</a></td>
    </tr>
    <tr>
        <td><a href="../database_om_guide/enhanced_active_standby_ha.md">主备高可用能力增强</a></td>
    </tr>
    <tr>
        <td><a href="../database_om_guide/table_level_parallel_recovery_optimization.md">表级别并行恢复优化</a></td>
    </tr>
    <tr>
        <td><a href="./asynchronous_backup_and_recovery_capability_for_master_data.md">异步备升主数据找回能力</a></td>
    </tr>
    <tr>
        <td><a href="./sql_firewall_capability.md">SQL防火墙能力</a></td>
    </tr>
    <tr>
        <td><a href="./primary_and_standby_database_bad_block_repair_function.md">主库备库坏块修复功能</a></td>
    </tr>
</table>

## 维护性

<table>
    <tr>
        <th>特性</th>
    </tr>
    <tr>
        <td><a href="./gray_upgrade.md">灰度升级</a></td>
    </tr>
    <tr>
        <td><a href="./rolling_upgrade.md">指定节点升级</a></td>
    </tr>
    <tr>
        <td><a href="./workload_diagnosis_report_wdr.md">支持WDR诊断报告</a></td>
    </tr>
    <tr>
        <td><a href="./slow_sql_diagnosis.md">慢SQL诊断</a></td>
    </tr>
    <tr>
        <td><a href="./monitoring_alerts.md">监控告警</a></td>
    </tr>
    <tr>
        <td><a href="./session_performance_diagnosis.md">Session性能诊断</a></td>
    </tr>
    <tr>
        <td><a href="./system_kpi_aided_diagnosis.md">系统KPI辅助诊断</a></td>
    </tr>
    <tr>
        <td><a href="./built_in_stack_tool.md">内置stack工具</a></td>
    </tr>
    <tr>
        <td><a href="./sql_patch.md">支持SQL PATCH</a></td>
    </tr>
    <tr>
        <td><a href="./pg_indexes_verbose.md">冗余索引辅助诊断</a></td>
    </tr>
</table>

## 数据库安全

<table>
    <tr>
        <th>特性</th>
    </tr>
    <tr>
        <td><a href="./access_control_model.md">访问控制模型</a></td>
    </tr>
    <tr>
        <td><a href="./separation_of_control_and_access_permissions.md">控制权和访问权分离</a></td>
    </tr>
    <tr>
        <td><a href="./database_authentication_mechanism.md">数据库认证机制</a></td>
    </tr>
    <tr>
        <td><a href="./data_encryption_and_storage.md">数据加密存储</a></td>
    </tr>
    <tr>
        <td><a href="./database_audit.md">数据库审计</a></td>
    </tr>
    <tr>
        <td><a href="./network_communication_security.md">网络通信安全</a></td>
    </tr>
    <tr>
        <td><a href="./resource_label.md">资源标签机制</a></td>
    </tr>
    <tr>
        <td><a href="./unified_audit.md">统一审计机制</a></td>
    </tr>
    <tr>
        <td><a href="./dynamic_data_masking.md">动态数据脱敏机制</a></td>
    </tr>
    <tr>
        <td><a href="./row_level_access_control.md">行级访问控制</a></td>
    </tr>
    <tr>
        <td><a href="./password_strength_verification.md">用户口令强度校验机制</a></td>
    </tr>
    <tr>
        <td><a href="./equality_query_in_a_fully_encrypted_database.md">全密态数据库等值查询</a></td>
    </tr>
    <tr>
        <td><a href="./ledger_database_mechanism.md">账本数据库机制</a></td>
    </tr>
    <tr>
        <td><a href="./transparent_data_encryption.md">透明数据加密</a></td>
    </tr>
</table>

## 资源池化

<table>
    <tr>
        <th>特性</th>
    </tr>
    <tr>
        <td><a href="../resource_pooling/resource_pooling_overview.md">资源池化特性说明</a></td>
    </tr>
    <tr>
        <td><a href="../performance_tuning_guide/resource_pooling_performance_optimization.md">资源池化性能优化</a></td>
    </tr>
    <tr>
        <td><a href="../performance_tuning_guide/transparent_forwarding_within_backup_machine_affairs.md">备机事务内透明写转发</a></td>
    </tr>
    <tr>
        <td><a href="../resource_pooling/feature_enhancement.md">DSS功能增强</a></td>
    </tr>
    <tr>
        <td><a href="./resource_pooling_operator_offloading.md">资源池化算子卸载</a></td>
    </tr>
    <tr>
        <td><a href="../resource_pooling/resource_pooling_active_standby_dual_cluster_dr.md">资源池化主备双集群容灾</a></td>
    </tr>
    <tr>
        <td><a href="../resource_pooling/ultimate_rto_on_demand_playback.md">极致RTO按需回放</a></td>
    </tr>
    <tr>
        <td><a href="../resource_pooling/dss_thread_pool.md">DSS线程池</a></td>
    </tr>
    <tr>
        <td><a href="../resource_pooling/mes_ub_shared_memory_communication_optimization.md">MES灵衢内存语义通信优化</a></td>
    </tr>
    <tr>
        <td><a href="../resource_pooling/ub_transaction_snapshot_acceleration_introduction.md">事务快照UB访问加速特性简介</a></td>
    </tr>
    <tr>
        <td><a href="./resource_pooling_multi_machine_paralleism.md">资源池化多机并行</a></td>
    </tr>
    <tr>
        <td><a href="../resource_pooling/gs_collector_adaptation_resource_pooling.md">资源池化可维护性增强</a></td>
    </tr>
    <tr>
        <td><a href="../resource_pooling/gs_collector_adaptation_resource_pooling.md">gs_collector适配资源池化</a></td>
    </tr>
    <tr>
        <td><a href="../resource_pooling/dms_resource_statistics_function.md">DMS资源统计函数</a></td>
    </tr>
    <tr>
        <td><a href="../resource_pooling/gs_probackup_adaptation_resource_pooling.md">gs_probackup适配资源池化</a></td>
    </tr>
    <tr>
        <td><a href="../resource_pooling/cm_supports_dual_cluster_backup_clusters_switchover.md">cm支持双集群备集群switchover</a></td>
    </tr>
    <tr>
        <td><a href="../resource_pooling/resource_pooling_support_for_primary_and_backup_parameter_synchronization.md">资源池化支持主备参数同步</a></td>
    </tr>
    <tr>
        <td><a href="../resource_pooling/resource_pooling_xlog_support_archive.md">资源池化XLOG支持归档</a></td>
    </tr>
    <tr>
        <td><a href="../resource_pooling/online_reform.md">在线reform</a></td>
    </tr>
    <tr>
        <td><a href="../performance_tuning_guide/mes_worker_thread_pooling.md">MES worker线程池化</a></td>
    </tr>
</table>

## 向量数据库

<table>
    <tr>
        <th>特性</th>
    </tr>
    <tr>
        <td><a href="../datavec/datavec_overview.md">向量数据库特性说明 </a></td>
    </tr>
    <tr>
        <td><a href="../datavec/mcp.md">openGauss MCP </a></td>
    </tr>
</table>

## 企业级特性

<table>
    <tr>
        <th>特性</th>
    </tr>
    <tr>
        <td><a href="./support_for_functions_and_stored_procedures.md">函数及存储过程支持</a></td>
    </tr>
    <tr>
        <td><a href="./sql_hints.md">支持SQL hint</a></td>
    </tr>
    <tr>
        <td><a href="./full_text_indexing.md">全文索引</a></td>
    </tr>
    <tr>
        <td><a href="./copy_interface_for_error_tolerance.md">Copy接口支持容错机制</a></td>
    </tr>
    <tr>
        <td><a href="./partitioning.md">分区</a></td>
    </tr>
    <tr>
        <td><a href="./support_for_advanced_analysis_functions.md">高级分析函数支持</a></td>
    </tr>
    <tr>
        <td><a href="./materialized_view.md">物化视图</a></td>
    </tr>
    <tr>
        <td><a href="./hyperloglog.md">支持HyperLogLog</a></td>
    </tr>
    <tr>
        <td><a href="./creating_an_index_online.md">在线添加索引</a></td>
    </tr>
    <tr>
        <td><a href="./autonomous_transaction.md">自治事务</a></td>
    </tr>
    <tr>
        <td><a href="./global_temporary_table.md">全局临时表</a></td>
    </tr>
    <tr>
        <td><a href="./pseudocolumn_rownum.md">伪列ROWNUM</a></td>
    </tr>
    <tr>
        <td><a href="./stored_procedure_debugging.md">支持存储过程调试</a></td>
    </tr>
    <tr>
        <td><a href="./jdbc_client_load_balancing_and_read_write_isolation.md">JDBC客户端负载均衡与读写分离</a></td>
    </tr>
    <tr>
        <td><a href="../database_administration_guide/in_place_update_storage_engine.md">In-place Update存储引擎</a></td>
    </tr>
    <tr>
        <td><a href="./publication_subscription.md">发布订阅</a></td>
    </tr>
    <tr>
        <td><a href="./foreign_key_lock_enhancement.md">外键锁增强</a></td>
    </tr>
    <tr>
        <td><a href="../database_administration_guide/data_compression_in_oltp_scenarios.md">支持OLTP场景数据压缩</a></td>
    </tr>
    <tr>
        <td><a href="./support_for_special_floating_point_numbers.md">支持特殊浮点数</a></td>
    </tr>
    <tr>
        <td><a href="./event_trigger.md">事件触发器</a></td>
    </tr>
    <tr>
        <td><a href="./uwal.md">支持UWAL特性</a></td>
    </tr>
    <tr>
        <td><a href="./segment_space_shrink.md">段页式空间回收</a></td>
    </tr>
    <tr>
        <td><a href="./huge_page_memory.md">高级包</a></td>
    </tr>
</table>

## 应用开发接口

<table>
    <tr>
        <th>特性</th>
    </tr>
    <tr>
        <td><a href="./standard_sql.md">支持标准SQL</a></td>
    </tr>
    <tr>
        <td><a href="./standard_development_interfaces.md">支持标准开发接口</a></td>
    </tr>
    <tr>
        <td><a href="./standard_development_interfaces_ograc.md">支持ograc标准开发接口</a></td>
    </tr>
    <tr>
        <td><a href="./embedded_sql_preprocessor_ecpg.md">支持嵌入式SQL预处理器（ECPG）</a></td>
    </tr>
    <tr>
        <td><a href="./postgresql_api_compatibility.md">PG接口兼容</a></td>
    </tr>
    <tr>
        <td><a href="./pl_java.md">支持PL/Java</a></td>
    </tr>
    <tr>
        <td><a href="./enhanced_mysql_compatibility.md">MySQL兼容性增强</a></td>
    </tr>
</table>

## AI能力

<table>
    <tr>
        <th>特性</th>
    </tr>
    <tr>
        <td><a href="./aifeature_guide/ai4db_autonomous_database_o_m.md">AI4DB: 数据库自治运维</a></td>
    </tr>
    <tr>
        <td><a href="./db4ai_database_driven_ai.md">DB4AI: 数据库驱动AI</a></td>
    </tr>
    <tr>
        <td><a href="./aifeature_guide/intelligent_cardinality_estimation.md">ABO优化器</a></td>
    </tr>
    <tr>
        <td><a href="./ogai.md">OGAI</a></td>
    </tr>
</table>

## 工具链

<table>
    <tr>
        <th>特性</th>
    </tr>
    <tr>
        <td><a href="./tool_chain_datakit.md">DataKit</a></td>
    </tr>
    <tr>
        <td><a href="./gs_rep_portal.md">MySQL一键式迁移</a></td>
    </tr>
    <tr>
        <td><a href="./full_migration_tool_gs_mysync.md">全量迁移gs_mysync</a></td>
    </tr>
    <tr>
        <td><a href="./incremental_migration_tool_gs_replicate.md">增量迁移gs_replicate(MySQL -> openGauss)</a></td>
    </tr>
    <tr>
        <td><a href="./reverse_migration_gs_replicate.md">反向迁移gs_replicate(openGauss -> MySQL)</a></td>
    </tr>
    <tr>
        <td><a href="./reverse_full_migration.md">反向全量迁移(openGauss -> MySQL)</a></td>
    </tr>
    <tr>
        <td><a href="./postgresql_opengauss_migration_tool_debezium_connector_postgres.md">PostgreSQL迁移</a></td>
    </tr>
    <tr>
        <td><a href="./data_check_tool_gs_datacheck.md">数据校验gs_datacheck</a></td>
    </tr>
    <tr>
        <td><a href="./opengauss_client_tool_datastudio.md">openGauss客户端工具DataStudio</a></td>
    </tr>
    <tr>
        <td><a href="./database_installation_process_eliminates_dependency_on_the_root_user.md">数据库安装流程解除对root用户的依赖</a></td>
    </tr>
    <tr>
        <td><a href="./support_for_custom_ssh_ports.md">支持自定义ssh端口</a></td>
    </tr>
    <tr>
        <td><a href="./workload_tool.md">录制回放工具</a></td>
    </tr>
    <tr>
        <td><a href="./sql_syntax_audit_tool_libog_query.md">SQL语法审计工具libog_query</a></td>
    </tr>
</table>

## 中间件

<table>
    <tr>
        <th>特性</th>
    </tr>
    <tr>
        <td><a href="./distributed_database_capability.md">分布式数据库能力</a></td>
    </tr>
    <tr>
        <td><a href="./deploying_a_distributed_database_using_kubernetes.md">使用kubernetes部署分布式数据库</a></td>
    </tr>
    <tr>
        <td><a href="./distributed_analysis_capabilities.md">分布式分析能力</a></td>
    </tr>
</table>

## 负载管理

<table>
    <tr>
        <th>特性</th>
    </tr>
    <tr>
        <td><a href="./high_latency_escape_at_the_infrastructure_layer.md">支持底层执行层高时延逃生能力</a></td>
    </tr>
</table>

## 高级特性

<table>
    <tr>
        <th>特性</th>
    </tr>
    <tr>
        <td><a href="./advanced_features/index_recommendation.md">索引推荐</a></td>
    </tr>
    <tr>
        <td><a href="./advanced_features/db4ai.md">DB4AI</a></td>
    </tr>
    <tr>
        <td><a href="../database_administration_guide/planning_storage_models.md">列存储</a></td>
    </tr>
    <tr>
        <td><a href="./advanced_features/llvm.md">LLVM</a></td>
    </tr>
    <tr>
        <td><a href="./advanced_features/mot.md">MOT</a></td>
    </tr>
    <tr>
        <td><a href="./advanced_features/full_encrypted_database.md">全密态数据库</a></td>
    </tr>
    <tr>
        <td><a href="./advanced_features/dcf.md">DCF</a></td>
    </tr>
    <tr>
        <td><a href="./advanced_features/parallel_query.md">并行查询</a></td>
    </tr>
    <tr>
        <td><a href="../resource_pooling/resource_pooling_overview.md">资源池化</a></td>
    </tr>
    <tr>
        <td><a href="./advanced_features/uwal.md">UWAL</a></td>
    </tr>
    <tr>
        <td><a href="./advanced_features/oGRecorder.md">数据保险柜</a></td>
    </tr>
</table>
