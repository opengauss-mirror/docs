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
        <td><a href="../performance_tuning_guide/vectorized_engine.md">向量化执行引擎</a></td>
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
        <td><a href="./parallel_page_based_redo_for_ustore.md">Parallel Page-based Redo For Ustore</a></td>
    </tr>
    <tr>
        <td><a href="../performance_tuning_guide/transition_quantitative_analysis.md">行存转向量化</a></td>
    </tr>
    <tr>
        <td><a href="./optimization_of_subtransaction_concurrent_rollback_process.md">子事务并发回滚流程优化</a></td>
    </tr>
    <tr>
        <td><a href="./huge_page_memory.md">大页内存</a></td>
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
        <td><a href="./master_and_standby_vms.md">主备机</a></td>
    </tr>
    <tr>
        <td><a href="./logical_replication.md">逻辑复制</a></td>
    </tr>
    <tr>
        <td><a href="./logical_backup.md">逻辑备份</a></td>
    </tr>
    <tr>
        <td><a href="./physical_backup_and_restoration.md">物理备份</a></td>
    </tr>
    <tr>
        <td><a href="./automatic_job_retry_upon_failure.md">作业失败自动重试</a></td>
    </tr>
    <tr>
        <td><a href="./ultimate_rto.md">极致RTO</a></td>
    </tr>
    <tr>
        <td><a href="./delayed_replay.md">延时回放</a></td>
    </tr>
    <tr>
        <td><a href="./delaying_entering_the_maximum_availability_mode.md">延迟进入最大可用模式</a></td>
    </tr>
    <tr>
        <td><a href="./parallel_logical_decoding.md">并行逻辑解码</a></td>
    </tr>
    <tr>
        <td><a href="./global_syscache.md">支持Global SysCache</a></td>
    </tr>
    <tr>
        <td><a href="./enhanced_active_and_standby_ha.md">主备高可用能力增强</a></td>
    </tr>
    <tr>
        <td><a href="./table_level_parallel_recovery_optimization.md">表级别并行恢复优化</a></td>
    </tr>
    <tr>
        <td><a href="./asynchronous_backup_and_recovery_capability_for_master_data.md">异步备升主数据找回能力</a></td>
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
        <td><a href="./workload_diagnosis_report_wdr.md">支持WDR诊断报告</a></td>
    </tr>
    <tr>
        <td><a href="./slow_sql_diagnosis.md">慢SQL诊断</a></td>
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
        <td><a href="./ledger_database_mechanism.md">账本数据库机制</a></td>
    </tr>
    <tr>
        <td><a href="./transparent_data_encryption.md">透明数据加密</a></td>
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
        <td><a href="./support_specila_floating_point_number.md">支持特殊浮点数</a></td>
    </tr>
    <tr>
        <td><a href="./gms_output_tool_package.md">高级包</a></td>
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
        <td><a href="./database_metric_collection_forecast_and_exception_detection.md">AI4DB: 数据库自治运维</a></td>
    </tr>
    <tr>
        <td><a href="./db4ai_database_driven_ai.md">DB4AI: 数据库驱动AI</a></td>
    </tr>
</table>

## 工具链

<table>
    <tr>
        <th>特性</th>
    </tr>
    <tr>
        <td><a href="./opengauss_client_tool_datastudio.md">openGauss客户端工具DataStudio</a></td>
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
