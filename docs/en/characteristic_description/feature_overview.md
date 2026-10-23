# Feature Overview

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:09:28.955Z pushedAt=2026-09-22T11:12:32.623Z -->

## High Performance

<table>
    <tr>
        <th>Feature</th>
    </tr>
    <tr>
        <td><a href="./cbo_optimizer.md">CBO Optimizer</a></td>
    </tr>
    <tr>
        <td><a href="./llvm.md">LLVM Support</a></td>
    </tr>
    <tr>
        <td><a href="https://atomgit.com/opengauss/openGauss-server/blob/master/docs/en/performance_tuning_guide/vectorized_engine.md">Vectorized Engine</a></td>
    </tr>
    <tr>
        <td><a href="../database_administration_guide/planning_storage_models.md">Row/Column Hybrid Storage</a></td>
    </tr>
    <tr>
        <td><a href="../database_administration_guide/adaptive_compression.md">Adaptive Compression</a></td>
    </tr>
    <tr>
        <td><a href="./sql_by_pass.md">SQL by pass</a></td>
    </tr>
    <tr>
        <td><a href="./kunpeng_numa_architecture_optimization.md">Kunpeng NUMA Architecture Optimization</a></td>
    </tr>
    <tr>
        <td><a href="./high_concurrency_of_thread_pools.md">Thread Pool High Concurrency Support</a></td>
    </tr>
    <tr>
        <td><a href="./smp_for_parallel_execution.md">SMP Parallel Execution</a></td>
    </tr>
    <tr>
        <td><a href="./xlog_no_lock_flush.md">Xlog no Lock Flush</a></td>
    </tr>
    <tr>
        <td><a href="../database_administration_guide/parallel_page_based_redo_for_ustore.md">Parallel Page-based Redo For Ustore</a></td>
    </tr>
    <tr>
        <td><a href="https://atomgit.com/opengauss/openGauss-server/blob/master/docs/en/performance_tuning_guide/transition_quantitative_analysis.md">Row Store Transition Quantification</a></td>
    </tr>
    <tr>
        <td><a href="./ock_accelerated_data_transmission.md">OCK Accelerated Data Transmission</a></td>
    </tr>
    <tr>
        <td><a href="./scrlock.md">SCRLock Accelerated Distributed Lock</a></td>
    </tr>
    <tr>
        <td><a href="../sql_reference/optimization_of_subtransaction_concurrent_rollback_process.md">Subtransaction Concurrent Rollback Process Optimization</a></td>
    </tr>
    <tr>
        <td><a href="./huge_page_memory.md">Huge Page Memory</a></td>
    </tr>
    <tr>
        <td><a href="https://atomgit.com/opengauss/openGauss-server/blob/master/docs/en/performance_tuning_guide/heap_tables_support_prefetching.md">Heap Table Prefetching Support</a></td>
    </tr>
    <tr>
        <td><a href="./out_of_the_box.md">Out-of-the-Box</a></td>
    </tr>
    <tr>
        <td><a href="./user_mode_network.md">User-Mode Networking</a></td>
    </tr>
    <tr>
        <td><a href="./non_resource_pooling_active_standby_synchronization_acceleration.md">Xlog no Lock Flush</a></td>
    </tr>
    <tr>
        <td><a href="./row_and_column_integration.md">HTAP Row-Column Fusion</a></td>
    </tr>
    <tr>
        <td><a href="./automatic_parameterization.md">Automatic Parameterization</a></td>
    </tr>
    <tr>
        <td><a href="./udf_result_cache.md">UDF Result Cache</a></td>
    </tr>
    <tr>
        <td><a href="./bloom_index.md">BLOOM Index</a></td>
    </tr>
    <tr>
        <td><a href="./dpa_hash_agg_acceleration.md">DPA Hash Aggregation Acceleration</a></td>
    </tr>
</table>

## High Availability

<table>
    <tr>
        <th>Feature</th>
    </tr>
    <tr>
        <td><a href="../database_administration_guide/master_and_standby_node.md">Primary/Standby Nodes</a></td>
    </tr>
    <tr>
        <td><a href="./logical_replication.md">Logical Replication</a></td>
    </tr>
    <tr>
        <td><a href="./logical_backup.md">Logical Backup</a></td>
    </tr>
    <tr>
        <td><a href="../database_om_guide/physical_backup_and_restoration.md">Physical Backup</a></td>
    </tr>
    <tr>
        <td><a href="../database_om_guide/ultimate_rto.md">Ultimate RTO</a></td>
    </tr>
    <tr>
        <td><a href="./automatic_job_retry_upon_failure.md">Automatic Job Retry Upon Failure</a></td>
    </tr>
    <tr>
        <td><a href="../database_om_guide/high_availability_based_on_the_paxos_protocol.md">High Availability Based on the Paxos Protocol</a></td>
    </tr>
    <tr>
        <td><a href="../database_administration_guide/cascaded_standby_node.md">Cascaded Standby Node</a></td>
    </tr>
    <tr>
        <td><a href="../database_om_guide/delayed_replay.md">Delayed Replay</a></td>
    </tr>
    <tr>
        <td><a href="../database_administration_guide/add_remover_standby_node.md">Adding and Removing Standby Nodes</a></td>
    </tr>
    <tr>
        <td><a href="../database_om_guide/delaying_entering_the_maximum_availability_mode.md">Delayed Entry into Maximum Availability Mode</a></td>
    </tr>
    <tr>
        <td><a href="./parallel_logical_decoding.md">Parallel Logical Decoding</a></td>
    </tr>
    <tr>
        <td><a href="../database_om_guide/dcf_overview.md">DCF</a></td>
    </tr>
    <tr>
        <td><a href="./cm.md">CM</a></td>
    </tr>
    <tr>
        <td><a href="./global_syscache.md">Global SysCache Support</a></td>
    </tr>
    <tr>
        <td><a href="../database_om_guide/standby_node_building.md">Building a Standby from a Standby</a></td>
    </tr>
    <tr>
        <td><a href="../database_administration_guide/two_city_three_dc_dr.md">Two-City Three-Center Cross-Region DR</a></td>
    </tr>
    <tr>
        <td><a href="../database_om_guide/enhanced_active_standby_ha.md">Enhanced Primary/Standby High Availability</a></td>
    </tr>
    <tr>
        <td><a href="../database_om_guide/table_level_parallel_recovery_optimization.md">Table-Level Parallel Recovery Optimization</a></td>
    </tr>
    <tr>
        <td><a href="./asynchronous_backup_and_recovery_capability_for_master_data.md">Asynchronous Standby-to-Primary Data Retrieval</a></td>
    </tr>
    <tr>
        <td><a href="./sql_firewall_capability.md">SQL Firewall Capability</a></td>
    </tr>
    <tr>
        <td><a href="./primary_and_standby_database_bad_block_repair_function.md">Primary and Standby Database Bad Block Repair</a></td>
    </tr>
</table>

## Maintainability

<table>
    <tr>
        <th>Feature</th>
    </tr>
    <tr>
        <td><a href="./gray_upgrade.md">Gray Upgrade</a></td>
    </tr>
    <tr>
        <td><a href="./rolling_upgrade.md">Specified Node Upgrade</a></td>
    </tr>
    <tr>
        <td><a href="./workload_diagnosis_report_wdr.md">WDR Diagnosis Report Support</a></td>
    </tr>
    <tr>
        <td><a href="./slow_sql_diagnosis.md">Slow SQL Diagnosis</a></td>
    </tr>
    <tr>
        <td><a href="./monitoring_alerts.md">Monitoring and Alerts</a></td>
    </tr>
    <tr>
        <td><a href="./session_performance_diagnosis.md">Session Performance Diagnosis</a></td>
    </tr>
    <tr>
        <td><a href="./system_kpi_aided_diagnosis.md">System KPI Aided Diagnosis</a></td>
    </tr>
    <tr>
        <td><a href="./built_in_stack_tool.md">Built-in Stack Tool</a></td>
    </tr>
    <tr>
        <td><a href="./sql_patch.md">SQL PATCH Support</a></td>
    </tr>
    <tr>
        <td><a href="./pg_indexes_verbose.md">Redundant Index Auxiliary Diagnosis</a></td>
    </tr>
</table>

## Database Security

<table>
    <tr>
        <th>Feature</th>
    </tr>
    <tr>
        <td><a href="./access_control_model.md">Access Control Model</a></td>
    </tr>
    <tr>
        <td><a href="./separation_of_control_and_access_permissions.md">Separation of Control and Access Privileges</a></td>
    </tr>
    <tr>
        <td><a href="./database_authentication_mechanism.md">Database Authentication Mechanism</a></td>
    </tr>
    <tr>
        <td><a href="./data_encryption_and_storage.md">Data Encryption and Storage</a></td>
    </tr>
    <tr>
        <td><a href="./database_audit.md">Database Audit</a></td>
    </tr>
    <tr>
        <td><a href="./network_communication_security.md">Network Communication Security</a></td>
    </tr>
    <tr>
        <td><a href="./resource_label.md">Resource Label Mechanism</a></td>
    </tr>
    <tr>
        <td><a href="./unified_audit.md">Unified Audit Mechanism</a></td>
    </tr>
    <tr>
        <td><a href="./dynamic_data_masking.md">Dynamic Data Masking Mechanism</a></td>
    </tr>
    <tr>
        <td><a href="./row_level_access_control.md">Row-Level Access Control</a></td>
    </tr>
    <tr>
        <td><a href="./password_strength_verification.md">User Password Strength Verification Mechanism</a></td>
    </tr>
    <tr>
        <td><a href="./equality_query_in_a_fully_encrypted_database.md">Equality Query in a Fully Encrypted Database</a></td>
    </tr>
    <tr>
        <td><a href="./ledger_database_mechanism.md">Ledger Database Mechanism</a></td>
    </tr>
    <tr>
        <td><a href="./transparent_data_encryption.md">Transparent Data Encryption</a></td>
    </tr>
</table>

## Resource Pooling

<table>
    <tr>
        <th>Feature</th>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/resource_pooling/common_fault_locating_methods.html">Resource Pooling Feature Description</a></td>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/performance_tuning_guide/performance_tuning_overview.html">Resource Pooling Performance Optimization</a></td>
    </tr>
    <tr>
        <td><a href="https://atomgit.com/opengauss/openGauss-server/blob/master/docs/en/performance_tuning_guide/resource_pooling_performance_optimization.md">Transparent Write Forwarding Within Standby Transactions</a></td>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/resource_pooling/feature_enhancement.html">DSS Feature Enhancements</a></td>
    </tr>
    <tr>
        <td><a href="./resource_pooling_operator_offloading.md">Resource Pooling Operator Offloading</a></td>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/resource_pooling/resource_pooling_active_standby_dual_cluster_dr.html">Resource Pooling Primary/Standby Dual-Cluster DR</a></td>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/resource_pooling/ultimate_rto_on_demand_playback.html">Ultimate RTO On-Demand Replay</a></td>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/resource_pooling/dss_thread_pool.html">DSS Thread Pool</a></td>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/resource_pooling/cm_syssentry_fault_detection.html">CM SysSentry Fault Detection</a></td>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/resource_pooling/mes_ub_shared_memory_communication_optimization.html">MES Lingqu Shared Memory Communication Optimization</a></td>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/resource_pooling//ub_transaction_snapshot_acceleration_introduction.md">Transaction Snapshot UB Access Acceleration</a></td>
    </tr>
    <tr>
        <td><a href="./resource_pooling_multi_machine_parallelism.md">Resource Pooling Multi-Node Parallelism</a></td>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/resource_pooling//gs_collector_adaptation_resource_pooling.md">Resource Pooling Maintainability Enhancement</a></td>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/resource_pooling//gs_collector_adaptation_resource_pooling.md">gs_collector Adaptation to Resource Pooling</a></td>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/resource_pooling//dms_resource_statistics_function.md">DMS Resource Statistics Functions</a></td>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/resource_pooling//gs_probackup_adaptation_resource_pooling.md">gs_probackup Adaptation to Resource Pooling</a></td>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/resource_pooling//cm_supports_dual_cluster_backup_clusters_switchover.md">cm Support for Dual-Cluster Standby Cluster Switchover</a></td>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/resource_pooling//resource_pooling_support_for_primary_and_backup_parameter_synchronization.md">Resource Pooling Support for Primary/Standby Parameter Synchronization</a></td>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/resource_pooling//resource_pooling_xlog_support_archive.md">Resource Pooling XLOG Archive Support</a></td>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/resource_pooling//online_reform.md">Online Reform</a></td>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/resource_pooling//online_ddl_adapt_failover.md">Online Failover</a></td>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/performance_tuning_guide/mes_worker_thread_pooling.html">MES Worker Thread Pooling</a></td>
    </tr>
</table>

## Vector Database

<table>
    <tr>
        <th>Feature</th>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/datavec/datavec_overview.html">Vector Database Feature Description </a></td>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/datavec/mcp.html">openGauss MCP </a></td>
    </tr>
</table>

## Enterprise Features

<table>
    <tr>
        <th>Feature</th>
    </tr>
    <tr>
        <td><a href="./support_for_functions_and_stored_procedures.md">Function and Stored Procedure Support</a></td>
    </tr>
    <tr>
        <td><a href="./sql_hints.md">SQL Hint Support</a></td>
    </tr>
    <tr>
        <td><a href="./full_text_indexing.md">Full-Text Index</a></td>
    </tr>
    <tr>
        <td><a href="./copy_interface_for_error_tolerance.md">Copy Interface Fault Tolerance Mechanism</a></td>
    </tr>
    <tr>
        <td><a href="./partitioning.md">Partitioning</a></td>
    </tr>
    <tr>
        <td><a href="./support_for_advanced_analysis_functions.md">Advanced Analysis Function Support</a></td>
    </tr>
    <tr>
        <td><a href="./materialized_view.md">Materialized View</a></td>
    </tr>
    <tr>
        <td><a href="./hyperloglog.md">HyperLogLog Support</a></td>
    </tr>
    <tr>
        <td><a href="./creating_an_index_online.md">Creating an Index Online</a></td>
    </tr>
    <tr>
        <td><a href="./autonomous_transaction.md">Autonomous Transaction</a></td>
    </tr>
    <tr>
        <td><a href="./global_temporary_table.md">Global Temporary Table</a></td>
    </tr>
    <tr>
        <td><a href="./pseudocolumn_rownum.md">Pseudocolumn ROWNUM</a></td>
    </tr>
    <tr>
        <td><a href="./stored_procedure_debugging.md">Stored Procedure Debugging</a></td>
    </tr>
    <tr>
        <td><a href="./jdbc_client_load_balancing_and_read_write_isolation.md">JDBC Client Load Balancing and Read/Write Separation</a></td>
    </tr>
    <tr>
        <td><a href="../database_administration_guide/in_place_update_storage_engine.md">In-place Update Storage Engine</a></td>
    </tr>
    <tr>
        <td><a href="./publication_subscription.md">Publication and Subscription</a></td>
    </tr>
    <tr>
        <td><a href="./foreign_key_lock_enhancement.md">Foreign Key Lock Enhancement</a></td>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/characteristic_description/data_compression_in_oltp_scenarios.html">Data Compression in OLTP Scenarios</a></td>
    </tr>
    <tr>
        <td><a href="./support_for_special_floating_point_numbers.md">Support for Special Floating-Point Numbers</a></td>
    </tr>
    <tr>
        <td><a href="./event_trigger.md">Event Trigger</a></td>
    </tr>
    <tr>
        <td><a href="./uwal.md">UWAL Support</a></td>
    </tr>
    <tr>
        <td><a href="./segment_space_shrink.md">Segment-Page Space Reclaim</a></td>
    </tr>
    <tr>
        <td><a href="./huge_page_memory.md">Huge Page Memory</a></td>
    </tr>
</table>

## Application Development Interfaces

<table>
    <tr>
        <th>Feature</th>
    </tr>
    <tr>
        <td><a href="./standard_sql.md">Standard SQL Support</a></td>
    </tr>
    <tr>
        <td><a href="./standard_development_interfaces.md">Standard Development Interface Support</a></td>
    </tr>
    <tr>
        <td><a href="./standard_development_interfaces_ograc.md">Support for the ograc Standard Development Interface</a></td>
    </tr>
    <tr>
        <td><a href="./embedded_sql_preprocessor_ecpg.md">Embedded SQL Preprocessor (ECPG) Support</a></td>
    </tr>
    <tr>
        <td><a href="./postgresql_api_compatibility.md">PostgreSQL API Compatibility</a></td>
    </tr>
    <tr>
        <td><a href="./pl_java.md">PL/Java Support</a></td>
    </tr>
    <tr>
        <td><a href="./enhanced_mysql_compatibility.md">Enhanced MySQL Compatibility</a></td>
    </tr>
</table>

## AI Capabilities

<table>
    <tr>
        <th>Feature</th>
    </tr>
    <tr>
        <td><a href="./aifeature_guide/ai4db_autonomous_database_o_m.md">AI4DB: Autonomous Database O&M</a></td>
    </tr>
    <tr>
        <td><a href="./db4ai_database_driven_ai.md">DB4AI: Database-Driven AI</a></td>
    </tr>
    <tr>
        <td><a href="./aifeature_guide/intelligent_cardinality_estimation.md">ABO Optimizer</a></td>
    </tr>
    <tr>
        <td><a href="./ogai.md">OGAI Feature Documentation</a></td>
    </tr>
</table>

## Tool Chain

<table>
    <tr>
        <th>Feature</th>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/datakit/datakit.html">DataKit</a></td>
    </tr>
    <tr>
        <td><a href="./gs_rep_portal.md">MySQL One-Click Migration</a></td>
    </tr>
    <tr>
        <td><a href="./full_migration_tool_gs_mysync.md">Full Migration gs_mysync</a></td>
    </tr>
    <tr>
        <td><a href="./incremental_migration_tool_gs_replicate.md">Incremental Migration gs_replicate (MySQL -> openGauss)</a></td>
    </tr>
    <tr>
        <td><a href="./reverse_migration_gs_replicate.md">Reverse Migration gs_replicate (openGauss -> MySQL)</a></td>
    </tr>
    <tr>
        <td><a href="./reverse_full_migration.md">Reverse Full Migration</a></td>
    </tr>
    <tr>
        <td><a href="./postgresql_opengauss_migration_tool_debezium_connector_postgres.md">PostgreSQL-to-openGauss Migration Tool debezium-connector-postgres</a></td>
    </tr>
    <tr>
        <td><a href="./data_check_tool_gs_datacheck.md">Data Verification gs_datacheck</a></td>
    </tr>
    <tr>
        <td><a href="./opengauss_client_tool_datastudio.md">openGauss Client Tool DataStudio</a></td>
    </tr>
    <tr>
        <td><a href="./database_installation_process_eliminates_dependency_on_the_root_user.md">Installation Without Root User Dependency</a></td>
    </tr>
    <tr>
        <td><a href="./support_for_custom_ssh_ports.md">Support for Custom SSH Ports</a></td>
    </tr>
    <tr>
        <td><a href="./workload_tool.md">Workload Replay Tool</a></td>
    </tr>
    <tr>
        <td><a href="./sql_syntax_audit_tool_libog_query.md">libog_query SQL Syntax Audit Tool</a></td>
    </tr>
    <tr>
        <td><a href="./mysql_full_migration_resume.md">MySQL Full Migration Resumable Transfer</a></td>
    </tr>
</table>

## Middleware

<table>
    <tr>
        <th>Feature</th>
    </tr>
    <tr>
        <td><a href="./distributed_database_capability.md">Distributed Database Capability</a></td>
    </tr>
    <tr>
        <td><a href="./deploying_a_distributed_database_using_kubernetes.md">Deploying a Distributed Database Using Kubernetes</a></td>
    </tr>
    <tr>
        <td><a href="./distributed_analysis_capabilities.md">Distributed Analysis Capability</a></td>
    </tr>
</table>

## Workload Management

<table>
    <tr>
        <th>Feature</th>
    </tr>
    <tr>
        <td><a href="./high_latency_escape_at_the_infrastructure_layer.md">High-Latency Escape at the Infrastructure Layer</a></td>
    </tr>
</table>

## Advanced Features

<table>
    <tr>
        <th>Feature</th>
    </tr>
    <tr>
        <td><a href="./advanced_features/index_recommendation.md">Index Recommendation</a></td>
    </tr>
    <tr>
        <td><a href="./advanced_features/db4ai.md">DB4AI</a></td>
    </tr>
    <tr>
        <td><a href="../database_administration_guide/planning_storage_models.md">Column Store</a></td>
    </tr>
    <tr>
        <td><a href="./advanced_features/llvm.md">LLVM</a></td>
    </tr>
    <tr>
        <td><a href="./advanced_features/mot.md">MOT</a></td>
    </tr>
    <tr>
        <td><a href="./advanced_features/fully_encrypted_database.md">Fully Encrypted Database</a></td>
    </tr>
    <tr>
        <td><a href="./advanced_features/dcf.md">DCF</a></td>
    </tr>
    <tr>
        <td><a href="./advanced_features/parallel_query.md">Parallel Query</a></td>
    </tr>
    <tr>
        <td><a href="https://docs.opengauss.org/en/docs/latest/resource_pooling/common_fault_locating_methods.html">resource pooling</a></td>
    </tr>
    <tr>
        <td><a href="./advanced_features/uwal.md">UWAL</a></td>
    </tr>
    <tr>
        <td><a href="./advanced_features/ogrecorder.md">Data Vault</a></td>
    </tr>
</table>
