# Release Notes

## Versions

openGauss 7.0.0 (LTS) is an LTS version released by openGauss in September 2026, with a lifecycle of 3 years. This document applies only to the lite edition.

The lite edition has the following characteristics:

(1) Low resource consumption:

The installation package of this lite release is actually smaller than 60 MB, and its memory usage when idle is less than 250 MB.

(2) Easy installation:

Compared with the enterprise edition, the installation process is simpler and faster.

(3) Features controlled by parameters in the lite edition:

Features disabled by default: the Ustore feature (in-place update engine), the ASP feature (active session profile), incremental checkpoints, double write, the Full/Slow SQL feature, the workload feature, the SQL response time statistics feature, database monitoring snapshots, and two-phase commit transactions.
For some features, parameter default values are tuned so that they consume less memory and CPU, including global syscache and shared buffer.
The main parameter settings are as follows.

```ini
enable_asp=off
enable_ustore=off
enable_incremental_checkpoint=off
enable_double_write=off
max_prepared_transactions=0
enable_stmt_track=off
use_workload_manager=off
enable_instr_rt_percentile=off
enable_wdr_snapshot=off
enable_cachedplan_mgr=off

enable_global_syscache=on
asp_sample_num=10
shared_buffers=64MB
cstore_buffers=16MB
num_internal_lock_partitions='CLOG_PART=1,CSNLOG_PART=1,LOG2_LOCKTABLE_PART=4,TWOPHASE_PART=1,FASTPATH_PART=20'
max_locks_per_transaction=64
audit_file_remain_threshold=1024
wal_buffers=16MB
segment_buffers=16
max_connections=200
track_activity_query_size=200
data_replicate_buffer_size=4096
max_inner_tool_connections=10
global_syscache_threshold=64MB
local_syscache_threshold=16MB
wal_flush_timeout=800
wal_flush_delay=100
```

Unsupported GUC parameters:

```ini
standby_recycle_interval
standby_max_query_time
base_page_saved_interval
standby_force_recycle_ratio
max_standby_base_page_size
max_standby_lsn_info_size
```

(4) Features not supported by the lite edition:

ORC file access, Kerberos authentication, Java UDFs, Codegen, MOT memory tables, SMP parallel query, AI-related tools and features, fully encrypted databases, CM, OM, resource pooling (including DSS and DMS), ECPG, pljava, HTAP features, OBS, asynchronous I/O, and DR cluster capabilities.

(5) Streamlined binary tools:

Commonly used tools such as gsql, gs_ctl, gs_guc, gs_dump, gs_restore, gs_probackup, and gs_initdb are retained. The liteom tool is also provided for installation, deployment, and upgrade.
The following plug-ins and tools are not supported: gs_cgroup, pg_recvlogical, pg_xlogdump, pagehack, pg_archivecleanup, gs_assessment, ndpplugin, spqplugin, timescaledb, age, postgres_fdw, dblink, gms_xmlgen, and libog_query. The JRE component is not included.

7.0.0 (LTS) is compatible with the features and functions of previous versions. Its main features are as follows:

- Standard SQL support

    Supports the standard SQL92/SQL99/SQL2003/SQL2011 specifications, the GBK, UTF-8, and GB18030 character sets, SQL standard functions and analytic functions, and stored procedures.

- Database storage management

    Supports tablespaces, so that different tables can be planned to different storage locations.

- Primary/standby deployment

    Transactions support ACID properties, single-node failure recovery, primary/standby data synchronization, and primary/standby switchover.

- Application programming interfaces

    Supports standard JDBC 4.0 and ODBC 3.5 features, Python and Go connection drivers, and MySQL protocol compatibility.

- Management tools

    Provides installation and deployment tools, instance start and stop tools, backup and restoration tools, and upgrade tools. Supports DataKit, a data full-lifecycle production tool, as well as MySQL full, incremental, and reverse migration tools and a data verification tool.

- Security management

    Supports SSL-secured network connections, user permission management, password management, security audit, and fine-grained ANY permission control, ensuring database security at the management, application, system, and network layers.

## New Features

This section describes the new features of openGauss 7.0.0 (LTS) based on the features of 7.0.0-RC3:

- **High Intelligence**: [BM25 index](https://docs.opengauss.org/en/docs/7.0.0-lite/datavec/bm25_full_text_search_index.html) optimization.
  - Supports [customizing the dictionary of the jieba tokenizer for BM25 indexes](https://docs.opengauss.org/en/docs/7.0.0-lite/datavec/bm25_usage_guide.html#3-custom-dictionary-dict_path). [#9036](https://atomgit.com/opengauss/openGauss-server/pull/9036) [@Setname](https://atomgit.com/Setname)
  - Implements the [variable block feature for BM25 indexes](https://docs.opengauss.org/en/docs/7.0.0-lite/datavec/bm25_usage_guide.html#4-index-space-optimization-notes), reducing index space usage by 40%. [#9134](https://atomgit.com/opengauss/openGauss-server/pull/9134) [@Setname](https://atomgit.com/Setname)

- **High Intelligence**: [oGMemory](https://docs.opengauss.org/en/docs/7.0.0-lite/datavec/ogmem_introduction.html) context memory management framework.
  - [The oGMemory framework supports integration with OpenClaw](https://docs.opengauss.org/en/docs/7.0.0-lite/datavec/ogmem_case01.html), improving multi-turn dialogue accuracy by 30% and reducing token overhead by 50% for scenario-based test cases. [#22](https://atomgit.com/opengauss/oGMemory/pull/22) [#66](https://atomgit.com/opengauss/oGMemory/pull/66) [#65](https://atomgit.com/opengauss/oGMemory/pull/65) [#64](https://atomgit.com/opengauss/oGMemory/pull/64) [#63](https://atomgit.com/opengauss/oGMemory/pull/63) [#39](https://atomgit.com/opengauss/oGMemory/pull/39) [#35](https://atomgit.com/opengauss/oGMemory/pull/35) [#23](https://atomgit.com/opengauss/oGMemory/pull/23) [#18](https://atomgit.com/opengauss/oGMemory/pull/18) [@Vincent__Sun](https://atomgit.com/Vincent__Sun)

- **Enterprise-Grade Capabilities**
  - Supports the [INSERT ON CONFLICT](../sql_reference/insert.md#parameter-description) syntax, which specifies the behavior when a unique constraint or primary key constraint conflict occurs, for example, performing an update instead of inserting new data, or ignoring the conflict without any operation. [#8765](https://atomgit.com/opengauss/openGauss-server/pull/8765) [@sunquancheng01](https://atomgit.com/sunquancheng01)
  - Supports a [global sequence cache](../sql_reference/create_sequence.md#parameter-description). The sequence cache is a global cache shared by all sessions. [#8647](https://atomgit.com/opengauss/openGauss-server/pull/8647) [@sunquancheng01](https://atomgit.com/sunquancheng01)
  - Column attributes support [GENERATED { ALWAYS | BY DEFAULT } AS IDENTITY](../sql_reference/create_table.md#parameter-description) when a table is created, specifying a column as an auto-increment column through syntax. [#9137](https://atomgit.com/opengauss/openGauss-server/pull/9137) [@CXXXXZ](https://atomgit.com/CXXXXZ)
  - Adds the [`pg_stat_progress_copy` view](../database_reference/pg_stat_progress_copy.md), which monitors the progress of COPY data import and displays the number of imported rows and filtered rows (where filter). [#9115](https://atomgit.com/opengauss/openGauss-server/pull/9115) [@CXXXXZ](https://atomgit.com/CXXXXZ)
  - Supports the [NOTIFY](../sql_reference/notify.md)/[LISTEN](../sql_reference/listen.md) feature, enabling communication between different sessions. [#9352](https://atomgit.com/opengauss/openGauss-server/pull/9352) [@Solataire](https://atomgit.com/Solataire)
  - Supports the [CREATE FORCE VIEW](../sql_reference/create_view.md#parameter-description) syntax, which forces a view to be created regardless of whether the base tables, views, or functions on which the view depends exist. [#9363](https://atomgit.com/opengauss/openGauss-server/pull/9363) [@Coder_Zero1](https://atomgit.com/Coder_Zero1)
  - Uses shared memory for statistics collection, eliminating the pgstat background thread and reducing CPU and I/O consumption. [#9009](https://atomgit.com/opengauss/openGauss-server/pull/9009) [@hw_hbj](https://atomgit.com/hw_hbj)

## Version Compatibility

- The default value of the GUC parameter [`d_format_behavior_compat_options`](https://docs.opengauss.org/en/docs/7.0.0-lite/extension_reference/extension_reference/server/shark_guc_parameters.html#d_format_behavior_compat_options) is changed from empty to 'enable_sbr_identifier, default_collation'. This change affects only D-compatible databases. After the change, identifiers (including data types) enclosed in '[]' are supported by default, while '[]' is not supported as array syntax. For character type fields, the collation inherits the table-level collation when the table-level collation is not empty, and is set to the default collation corresponding to the database encoding when the table-level collation is empty. In upgrade scenarios, when upgrading through OM, if the user database contains D-compatible databases and is upgraded from a version before the change to a version after the change, the original `d_format_behavior_compat_options` value is retained after the upgrade without modification. If the old version does not contain D-compatible databases, the default value for new databases created after the upgrade is the new default value. [#9034](https://atomgit.com/opengauss/openGauss-server/pull/9034) [#1245](https://atomgit.com/opengauss/openGauss-OM/pull/1245) [@shijuzheng1997](https://atomgit.com/shijuzheng1997)
- Lock wait related views and functions add a `waitstart` field, which marks the time when the lock wait starts. Affected views and functions include [`dbe_perf.locks`](../sql_reference/dbe_perf_schema_locks.md), [`pg_catalog.pg_locks`](../database_reference/pg_locks.md), and [`pg_catalog.pg_lock_status`](../sql_reference/statistics_information_functions.md). [#9133](https://atomgit.com/opengauss/openGauss-server/pull/9133) [@2504_92042799](https://atomgit.com/2504_92042799)
- Sequence related views and functions support displaying global sequence information, indicating whether the current sequence is a global sequence. Affected views and functions include [`dbe_perf.statio_all_sequences`](../sql_reference/statio_all_sequences.md), [`information_schema.sequences`](../sql_reference/columns.md), [`pg_catalog.pg_gtt_attached_pids`](../database_reference/pg_gtt_attached_pids.md), [`pg_catalog.pg_seclabels`](../database_reference/pg_seclabels.md), [`pg_catalog.pg_statio_all_sequences`](../database_reference/pg_statio_all_sequences.md), [`pg_catalog.pg_sequence_all_parameters`](../sql_reference/system_information_function.md), and [`pg_catalog.pg_sequence_parameters`](../sql_reference/system_information_function.md). [#8647](https://atomgit.com/opengauss/openGauss-server/pull/8647) [@sunquancheng01](https://atomgit.com/sunquancheng01)
- The [`information_schema.columns`](../sql_reference/columns.md) view supports displaying identity-related information. The `is_identity`, `identity_generation`, `identity_start`, `identity_increment`, `identity_maximum`, `identity_minimum`, and `identity_cycle` columns display real information based on the identity status. Previously, the values of these columns were always NO or NULL. [#9137](https://atomgit.com/opengauss/openGauss-server/pull/9137) [@CXXXXZ](https://atomgit.com/CXXXXZ)
- [WLM statistics related views](../database_reference/pg_session_wlmstat.md) support displaying the number of RowDescription cache hits. Four fields are added: `rowdesc_a_store_count`, `rowdesc_a_hit_count`, `rowdesc_b_store_count`, and `rowdesc_b_hit_count`. They indicate the cumulative number of slots created and the cumulative number of cache hits for the RowDescription cache when connecting to openGauss through the openGauss protocol, and the corresponding cumulative slot creation count and cumulative cache hit count when connecting to openGauss through the MySQL protocol. RowDescription is used when processing D messages in the openGauss protocol and result set output in the MySQL protocol. [#2419](https://atomgit.com/opengauss/Plugin/pull/2419) [#9202](https://atomgit.com/opengauss/openGauss-server/pull/9202) [@wofanzheng](https://atomgit.com/wofanzheng)
- The `provolatile` attribute of the [`text_date`](../sql_reference/type_conversion_function.md) function is changed from 'i' (immutable) to 's' (stable). This means that for a fixed input, the result of the function remains unchanged within a single scan, but the same input may produce different results across multiple scans. [#9548](https://atomgit.com/opengauss/openGauss-server/pull/9548) [@liyangx](https://atomgit.com/liyangx)

## Known Issues

- openGauss Lite does not provide storage space, file permission, or slow disk monitoring. When the storage space is full or the file permission is abnormal, the database exits and the corresponding information is recorded in logs. On a slow disk, database operations become slower.
- openGauss Lite has only database kernel capabilities and does not support primary/standby monitoring or switchover. If the primary and standby nodes are disconnected and their logs do not match, the HA cluster needs to be rebuilt.
- By default, OM starts the primary and standby databases according to the initially configured primary/standby relationship. If the application has performed a primary/standby switchover, the new relationship must be reported to OM; otherwise the relationship may become inconsistent and the cluster may need to be rebuilt.

## Resolved Issues

For the complete issue list, see [Complete Issue List](https://atomgit.com/opengauss/openGauss-server/issues).

For the complete kernel commit history, see [Commit History](https://atomgit.com/opengauss/openGauss-server/commits/7.0.0).

The resolved issues are listed in the following table.

| ISSUE                                                        | Associated Repository                   | Description                                                  |
| ------------------------------------------------------------ | --------------------------------------- | ------------------------------------------------------------ |
| [8056](https://atomgit.com/opengauss/openGauss-server/issues/8056) | openGauss-server | [Bug]: [Compatibility] After the `b_format_behavior_compat_options` parameter is set to '' in a B-compatible database, the database crashes when a column modification is performed. |
| [8061](https://atomgit.com/opengauss/openGauss-server/issues/8061) | openGauss-server | [Bug]: [Compatibility] In a 7.0.0RC3B023 database, executing the D-compatible syntax select CONVERT(date, '1956-12-30 20:00:00', 0); causes the database to crash. |
| [8069](https://atomgit.com/opengauss/openGauss-server/issues/8069) | openGauss-server | [Bug]: During a 2*24h stability test of resource pooling, the cluster crashes and primary/standby services are interrupted. |
| [8071](https://atomgit.com/opengauss/openGauss-server/issues/8071) | openGauss-server | [Bug]: [Upgrade] Upgrading from 6.0.3 or 7.0.0RC2 to the latest version 7.0.0RC3B024 fails with an error. |
| [8073](https://atomgit.com/opengauss/openGauss-server/issues/8073) | openGauss-server | [Bug]: When ultimate RTO standby read and feedback are enabled and Global Syscache is disabled on the standby, starting the standby directly causes a core dump [M]. |
| [8075](https://atomgit.com/opengauss/openGauss-server/issues/8075) | openGauss-server | [Bug]: After a policy is added to a table, inserting data that triggers the policy causes a memory leak. [DR] |
| [8076](https://atomgit.com/opengauss/openGauss-server/issues/8076) | openGauss-server | [Bug]: When two packages have interdependent variables, calling them causes a core dump. |
| [8095](https://atomgit.com/opengauss/openGauss-server/issues/8095) | openGauss-server | [Bug]: BM25 supports custom dictionaries. When `enable_remote_execute`=on, the custom dictionary is readable on the primary but not on the standby, and the database crashes when queried after creation on the standby. |
| [8109](https://atomgit.com/opengauss/openGauss-server/issues/8109) | openGauss-server | [Bug]: [Test Type: Upgrade] [Test Version: 6.0.5] [Resource Pooling] A core dump occurs after upgrading to 7.0.0 LTS B002. |
| [8142](https://atomgit.com/opengauss/openGauss-server/issues/8142) | openGauss-server | [Bug]: During batch data insertion through openGauss JDBC, an xlog insertion panic occurs and the process actively core dumps. |
| [8171](https://atomgit.com/opengauss/openGauss-server/issues/8171) | openGauss-server | [Bug]: A core dump occurs during a full fastcheck. |
| [8206](https://atomgit.com/opengauss/openGauss-server/issues/8206) | openGauss-server | [Bug]: [Test Feature: Traditional Stability] When the traditional stability B007 version runs the TPCC compressed table workload, the log continuously outputs "WARNING: you don't own a lock of type AccessShareLock". |
| [8209](https://atomgit.com/opengauss/openGauss-server/issues/8209) | openGauss-server | [Bug]: After the UB transaction acceleration access feature is enabled, primary node performance degrades noticeably. |
| [8235](https://atomgit.com/opengauss/openGauss-server/issues/8235) | openGauss-server | [Bug]: [Stability] [Traditional Primary/Standby] When Ustore workloads run in a stability environment with ultimate RTO enabled, a core dump occurs after a period of time, with the message "PANIC: [REDO_LOG_TRACE] DispatchRedoRecord encounter fatal error: rmgrID:22, info:48, indexid:22". |
| [8244](https://atomgit.com/opengauss/openGauss-server/issues/8244) | openGauss-server | [Bug]: [Ustore] In concurrent interaction scenarios, updating a Ustore table reports an error. |
| [8260](https://atomgit.com/opengauss/openGauss-server/issues/8260) | openGauss-server | [Bug]: With insert on conflict do update, when the newly inserted update value is the same as data inserted at the same time, the openGauss execution result differs from that of PG. |
| [8261](https://atomgit.com/opengauss/openGauss-server/issues/8261) | openGauss-server | [Bug]: With insert on conflict do update, when the newly inserted data itself conflicts, the openGauss execution result differs from that of PG. |
| [8272](https://atomgit.com/opengauss/openGauss-server/issues/8272) | openGauss-server | [Bug]: For the convert function in a B-compatible database, executing select convert('ffff1测试646测试nhjhio' using 'latin1'); through JDBC causes the database to crash. |
| [8289](https://atomgit.com/opengauss/openGauss-server/issues/8289) | openGauss-server | [Bug]: When the jieba tokenizer dictionary of a BM25 index is empty, the database process core dumps. |
| [8297](https://atomgit.com/opengauss/openGauss-server/issues/8297) | openGauss-server | [Bug]: [Upgrade] [Traditional Primary/Standby] Upgrading from 6.0.6 to 7.0.0LTSB013 fails with an error. |
| [8336](https://atomgit.com/opengauss/openGauss-server/issues/8336) | openGauss-server | [Bug]: When `hot_standby_feedback` is enabled, the physical replication slot carries the xmin field. After a primary/standby switchover, the standby has inactive replication slots that carry xmin, so csnlog cannot be cleaned up [M]. |
| [8344](https://atomgit.com/opengauss/openGauss-server/issues/8344) | openGauss-server | [Bug]: When `sql_mode_full_group` is disabled, a core dump occurs in some scenarios. |
| [8360](https://atomgit.com/opengauss/openGauss-server/issues/8360) | openGauss-server | [Bug]: COPY FROM on a USTORE table does not verify foreign key constraints (ASTORE works normally). |
| [8361](https://atomgit.com/opengauss/openGauss-server/issues/8361) | openGauss-server | [Bug]: [Ustore] [HA] [gs_probackup] After an incremental restoration, executing alter table ... alter column ... type int on a Ustore table causes a core dump. |
| [8357](https://atomgit.com/opengauss/openGauss-server/issues/8357) | openGauss-server | [Bug]: In resource pooling CI 6.0.0 FORWARD_OLDEST_XMIN Case0002, after a cms server node stops, a new cms primary cannot be elected. |
| [8392](https://atomgit.com/opengauss/openGauss-server/issues/8392) | openGauss-server | [Bug]: When memcheck runs the autonomous_cursor test case, a core dump occurs. |
| [8316](https://atomgit.com/opengauss/openGauss-server/issues/8316) | openGauss-server | [Bug]: In stability scenarios with hot reads on a Ustore standby, the standby quickly core dumps. |
| [8449](https://atomgit.com/opengauss/openGauss-server/issues/8449) | openGauss-server | [Bug]: After Ustore runs for 1x24h in a stability test, the standby core dumps and primary/standby replication is interrupted. |
| [8479](https://atomgit.com/opengauss/openGauss-server/issues/8479) | openGauss-server | [Bug][Resource Pooling]: Upgrading from 7.0.0RC3 to 7.0.0LTS fails with an error. |
| [8485](https://atomgit.com/opengauss/openGauss-server/issues/8485) | openGauss-server | [Documentation issue]: In resource pooling, executing query_all_drc_info(0) according to the documentation reports a return row type mismatch. |
| [8494](https://atomgit.com/opengauss/openGauss-server/issues/8494) | openGauss-server | [Bug]: gs_probackup authentication fails during a remote full backup. |
| [8496](https://atomgit.com/opengauss/openGauss-server/issues/8496) | openGauss-server | [Bug]: [Resource Pooling] Upgrading from 6.0.x to 7.0.0LTSB022 fails with an error. |
| [270](https://atomgit.com/opengauss/debezium/issues/270) | debezium | [Bug]: The Oracle2oGRAC migration toolkit is missing an executable jar after extraction. |
| [284](https://atomgit.com/opengauss/debezium/issues/284) | debezium | [Bug]: After online migration is started in DataKit and the full migration is interrupted, some data is inserted into the source database. After the environment is repaired and the full migration resumes, the incremental migration gets stuck and the migration process is blocked. |
| [291](https://atomgit.com/opengauss/debezium/issues/291) | debezium | [Bug]: PG reverse incremental migration fails. |
| [311](https://atomgit.com/opengauss/openGauss-tools-chameleon/issues/311) | openGauss-tools-chameleon | [Bug]: MySQL full migration supports resumable migration. After the target database stops, the DataKit page shows a blocked state. After the target database starts, DataKit resumes the migration; when the resume completes and full verification begins, data loss occurs. |
| [312](https://atomgit.com/opengauss/openGauss-tools-chameleon/issues/312) | openGauss-tools-chameleon | [Bug]: MySQL full migration supports resumable migration. After the source database stops, the DataKit page shows that the migration is interrupted. After the source database starts, clicking the resume button in DataKit results in data loss. |

## Inherited Features

- **Basic Features**: [SQL standard syntax](../sql_reference/dcl_grammer_overview.md), [data types](../sql_reference/numeric_types.md) (including [JSON and JSONB](../sql_reference/json_jsonb_types.md)), tables (including temporary tables, global temporary tables, and foreign tables), [views](../sql_reference/brief_tutorial/views.md), [materialized views](../sql_reference/brief_tutorial/materialized_views.md), foreign keys, [indexes](../sql_reference/brief_tutorial/indexes.md) (including btree, Gin, and hash indexes), [sequences](../database_administration_guide/creating_and_managing_sequences.md), functions, [triggers](../sql_reference/trigger.md), [aggregate functions](../sql_reference/alter_aggregate.md) such as `median`, ROWNUM, UPSERT, and the GB18030 character set.

- **SQL Engine Enhancements**: [Range, LIST, and HASH partitioning](../sql_reference/partitioned_tables.md#classification-of-range-partitioned-tables), automatic partition extension based on range partitioning, global partitioned indexes, row-store execution to vectorized execution, [autonomous transactions](../characteristic_description/autonomous_transaction.md), [parallel query](../characteristic_description/smp_for_parallel_execution.md), [Global Syscache](../characteristic_description/global_syscache.md), the [IPv6 protocol](../sql_reference/network_address_types.md), and [event triggers](../sql_reference/brief_tutorial/event_trigger.md). Supports [inherited tables](../sql_reference/create_table_inherits.md). Supports PIPELINED functions, which can return a set of rows. SELECT statements support data sampling on specified subpartitions, views, and materialized views through the [TABLESAMPLE clause](../sql_reference/select.md#parameter-description). A single trigger can be disabled or enabled through ALTER TRIGGER. SELECT statements support row-column conversion through the ROTATE and NOT ROTATE clauses. Table constraints can be enabled or disabled through SQL. Numbers ending with f or d are treated as floating-point numbers. 'NaN' and 'infinity' are supported to represent special floating-point values. The IS [NOT] INFINITE and IS [NOT] NAN conditional expressions are supported. For the numeric data type, precision can be greater than scale, and scale can be negative. The CROSS/OUTER APPLY JOIN syntax is supported. When an object referenced by a view (such as a table, column, function, or view) is modified or dropped, the view is set to an invalid state. Supports [XMLTABLE](../sql_reference/xmltable.md), which expands an XML document into relational table results by the specified row path, maps nodes, attributes, or expressions to output columns through the `COLUMNS` clause, and is used as a table function in the `FROM` clause. JSONB capabilities are enhanced: the [jsonb_path_exists](../sql_reference/json_jsonb_functions_and_operators.md) function checks whether any item exists at the specified JSON path, and the [jsonb_path_query_first](../sql_reference/json_jsonb_types.md#jsonpath-types) function extracts a specific expression from JSON data through JSONPATH.

- **Storage Engine Enhancements**: Delayed standby, [logical replication on standby](../characteristic_description/logical_replication.md), [parallel logical decoding](../characteristic_description/parallel_logical_decoding.md), [gray upgrade](../characteristic_description/gray_upgrade.md), specified-node upgrade, hash indexes, primary key and unique constraints on column-store tables, [publication/subscription](../characteristic_description/publication_subscription.md), [NUMA-aware optimization](../database_administration_guide/numa_awareness_allocation_and_affinity.md), and enhancements to the oGEngine in-place update storage engine. [Segment-page tables support space reclamation](../characteristic_description/segment_space_shrink.md). After DELETE and UPDATE operations on a segment-page table, space is reclaimed through system functions, so that the storage resources occupied by table files are released more effectively without affecting normal user services.

- **Stored Procedures**: [Stored procedures](../sql_reference/stored_procedure.md), [commit/rollback within stored procedures](../sql_reference/transaction_management.md), omission of parameter parentheses () when calling stored procedures or functions, and [stored procedure debugging](../characteristic_description/stored_procedure_debugging.md). Supports [stored procedure coverage tests](../sql_reference/proc_coverage_generate_stored_procedure_coverage_report.md). [Cursors](../sql_reference/cursors.md) support nested definition. A cursor can be used as an inserted value. When a dynamic cursor REF CURSOR is defined with TYPE syntax, the data type returned by the cursor can be specified through RETURN. [Cursor parameters support default values](../sql_reference/explicit_cursor.md). Supports nested arrays and records. Supports [assigning values to cursors with ROWTYPE](../sql_reference/define_variables.md).

- **Security Features**: [Authentication](../database_administration_guide/configuring_client_access_authentication.md), [permission management](../database_om_guide/secharden/permission_management.md), secure network communication, [database audit](../characteristic_description/database_audit.md), SM series cryptographic algorithms, [built-in roles](../database_administration_guide/roles.md) and permission management, ANY permission management, and [user-level audit](../characteristic_description/database_audit.md). Supports third-party key management services. On Kunpeng servers, the KAE component improves the performance of the SM4 encryption and decryption algorithm by 5%. Supports [auditing of service start and stop operations](../characteristic_description/database_audit.md) and [auditing of database backup and restoration operations](../characteristic_description/database_audit.md). Supports [SHA-256 integrity verification of audit logs](../characteristic_description/database_audit.md). Releases a security configuration baseline and a security configuration inspection tool. Supports prohibiting non-owner users from remotely executing DDL operations.

- **High Availability**: Primary/standby deployment, cascaded standbys, [logical replication](../characteristic_description/logical_replication.md), [ultimate RTO](../characteristic_description/ultimate_rto.md), and standby scaling. Parallel replay performance is optimized, improving standby redo performance by 50% to 100% in TPCC scenarios. Ultimate RTO supports readable standbys, keeping RTO < 10s under a 700K tpmC one-primary-one-standby workload. [Primary/standby high availability capabilities are enhanced](../characteristic_description/enhanced_active_and_standby_ha.md). Supports [data recovery when an asynchronous standby is promoted to primary](../characteristic_description/asynchronous_backup_and_recovery_capability_for_master_data.md). [Logical replication enhancements](../characteristic_description/logical_replication.md). The walwriteraux thread supports pre-allocating XLog files. Logical replication is enhanced to support the Alter, Truncate, and Rename DDL syntax for tables and partitioned tables. Supports [online DDL](../database_administration_guide/online_ddl.md), which reduces the time high-level locks are held during DDL and the blocking of concurrent DML. Online DDL supports Astore and segment-page column data type changes, compression attribute changes, constraint addition (including range and not-null constraints), VACUUM FULL, CLUSTER, and partition splitting and merging in traditional primary/standby deployment, and is triggered by the new CONCURRENTLY keyword.

- **High Performance**: Supports [allocating the shared buffer from huge pages](../database_reference/huge_page_memory.md), improving performance by 5% in a 4k pagesize environment. The kernel GCC version is upgraded to GCC 10.3, and feedback-based optimization improves TPCC performance by 6%. SCRLock improves distributed lock performance. The control granularity of the primary/standby lock mechanism and the ordered queue locking logic are optimized, improving TPCC performance by 10% in the one-primary-one-synchronous-standby scenario. Functions and PACKAGEs support specifying parallelism-related parameters. [NO SCROLL cursors](../sql_reference/cursor.md) and cursor expressions passed as parallel function arguments support parallel execution. User-mode networking optimizes the northbound network, improving single-node TPCC performance by 15%. Subtransaction scenario performance is improved: the size of Multixact-related SLRU buffers is configurable, and SLRU bank partitioning improves performance by more than 100% in scenarios with many subtransactions. Supports [automatic parameterization](../characteristic_description/automatic_parameterization.md), which reduces the execution time of SQL statements by reusing the execution plan cache when similar or identical simple SQL statements (IUD only) need to be executed repeatedly. Supports [parameterized paths](../characteristic_description/automatic_parameterization.md) for simple SELECT statements, consolidates the related memory into the plan cache, and supports the global plan cache. Supports GPC (Global Plan Cache): with GPC enabled and parameterization in use, parameterized statements are also cached in GPC (when the execution plan uses a generic plan) and can be queried through the `DBE_PERF.GLOBAL_PLANCACHE_STATUS` view. Supports [ADIO](../database_reference/asynchronous_i_o_operations.md): file access to row-store tables can read data through direct I/O without going through the OS page cache, and page flushing and VACUUM FULL use asynchronous I/O. Supports [DPA hash aggregation acceleration](../characteristic_description/dpa_hash_agg_acceleration.md), which offloads vectorized hash aggregation to hardware accelerators based on the UADK framework, significantly improving the efficiency of aggregation queries.

- **Backup and Restoration**: [Full physical backup](../characteristic_description/physical_backup_and_restoration.md), [logical backup](../database_om_guide/logical_backup_and_restoration.md), standby backup, [incremental backup and restoration](../characteristic_description/physical_backup_and_restoration.md), and point-in-time recovery (PITR).

- **O&M Capabilities**: The [WDR diagnostic report](../characteristic_description/workload_diagnosis_report_wdr.md) adds database runtime metrics, standby [slow SQL diagnostic views](../characteristic_description/root_cause_analysis_for_slow_sql_statements.md), [automatic unique SQL eviction](../database_reference/query_62.md#enable_auto_clean_unique_sql). Slow SQL statistics time gaps are filled, and fine-grained phase statistics are supported. Node stacks are printed when a switchover times out. Statistics recording is added for the WalSender, WalRecv, and WalRecvWriter threads. A new GUC parameter supports forcible reclamation of primary XLog files. When the primary is down, the current synchronization position of the transaction log can be obtained on the standby. Supports [full-link tracing](../characteristic_description/full_link_tracking.md), which traces and records the end-to-end network time of SQL statements executed through the JDBC query API and records it in the database [`dbe_perf.statement`](../sql_reference/dbe_perf_schema.md) view and the [`statement_history`](../database_reference/statement_history.md) table. Plan statistics are enabled by default for slow SQL statistics to reduce performance overhead. Supports obtaining the content of the pg_hba.conf file through the built-in function `gs_get_hba_conf()`. gs_ctl log files support periodic rotation, limiting the maximum disk space occupied by logs. The gs_probackup tool supports directly transferring backup data and logs to remote object storage that is compatible with the S3 protocol.

- **JDBC**: Supports [JDBC client load balancing and read/write splitting](../characteristic_description/jdbc_client_load_balancing_and_read_write_isolation.md) and primary node heartbeat detection.

- **Toolchain**: [Development tool DataStudio](../characteristic_description/opengauss_client_tool_datastudio.md), the MySQL full migration tool gs_mysync, the incremental and reverse migration tool gs_replicate, the data verification tool gs_datacheck, and [DataKit, a data full-lifecycle production tool](../characteristic_description/tool_chain_datakit.md). Supports a data dictionary verification tool for upgrade scenarios. The OM tool is decoupled from the OS version. Supports instance monitoring and intelligent diagnosis plug-ins, implementing SQL, session, instance, and cluster metric monitoring, historical data analysis, SQL diagnosis, alarm monitoring, and alarm notification, improving intelligent O&M capabilities. Database development plug-ins are enhanced to support object management for tables, views, user roles, functions, and stored procedures. MySQL full migration: supports reading CSV files directly for data migration, parallel index creation, removal of cross-platform dependencies, and higher reliability. MySQL incremental and reverse migration: supports resumable migration and migration progress display, and reverse migration supports full migration. Data verification: supports sharded verification by table, better cooperation with the full migration process, and improves verification performance to 150 MB/s. Supports Oracle full, incremental, and reverse migration, as well as data verification. DataKit integrates a compatibility assessment tool, supports cluster topology display, adds new metrics to the instance monitoring plug-in, optimizes the collection architecture, adds diagnostic experience to intelligent diagnosis, optimizes SQL diagnosis tasks, adds CM log collection to the log retrieval plug-in, supports Lucene syntax search, adds built-in rules to the alarm monitoring plug-in, supports alarm convergence, optimizes pages, supports optional component installation paths, and supports an intelligent parameter tuning plug-in. Supports a traffic recording and playback tool that connects to the source database (MySQL), collects SQL statements, and replays and stress tests them against the openGauss database. Supports collecting SQL statements by parsing the General Log table or files of a MySQL database, attaching to Java applications, and capturing and parsing MySQL network communication packets. Supports multiple playbacks and comparison of results and performance. Portal supports offline installation of dependency packages. Migration plug-ins support connecting to database clusters. Supports batch addition of servers and users by file import. Supports parallel installation of multiple database clusters. Supports SSO unified login with DevKit, so that the same user can log in to both DevKit and DataKit. Recording and playback support collecting openGauss traffic and comparing recording and playback results. Supports adding IPv6 instances. DataKit integrates the [migration of Elasticsearch and Milvus to openGauss](../characteristic_description/datakit_support_elasticsearch_milvus_migration.md) capability.

- **Middleware**: [shardingSphere](../characteristic_description/distributed_database_capability.md) and openLookeng.

- **Ecosystem**: Supports openEuler, CentOS, and FusionOS, and is [compatible with most MySQL syntax and protocols](https://docs.opengauss.org/en/docs/7.0.0/extension_reference/extension_reference/plugin/dolphin.html).

- **Enterprise-Grade Features**: Supports modifying table compression attributes. [The subtransaction concurrent rollback process is optimized](../characteristic_description/optimization_of_subtransaction_concurrent_rollback_process.md), reducing lock contention and improving concurrent execution efficiency. Supports the GB18030-2022 standard. [Stored procedures support nested debugging](../characteristic_description/stored_procedure_debugging.md), and anonymous blocks support debugging. [Publication/subscription](../database_om_guide/subscriptions.md) supports user-defined conflict resolution. Supports multi-language logs. Supports limiting the maximum disk space occupied by kernel logs. Supports compilation on the Loongson platform. Index creation supports pre-extension, and heap tables support prefetching. Compressed tables support both page storage and segment-page storage modes.

- **Others**: CMake script compilation, containerized deployment, and Kubernetes.

## CVE Vulnerabilities

This version is an LTS version released in September 2026. The CVEs involved in this version can be found in the [CVE list](https://opengauss.org/en/cve).

## Performance Test Report

See the [openGauss 7.0.0 LTS version test report](https://atomgit.com/opengauss/QA/blob/master/Test_Result/openGauss_7.0.0/版本集成测试报告/openGauss%207.0.0LTS版本测试报告.md#423-性能测试)

## Important Notes

- For version technical specifications, see [Technical Specifications](../about_opengauss/technical_indicators.md) in About openGauss.
- openGauss currently supports a maximum of eight standby nodes. The lite edition does not have CM management. When one primary node and multiple standby nodes are used and the primary node is faulty, promote a standby node with more logs to primary to prevent other standby nodes from being rebuilt.
- For the lite edition, you are advised to deploy one primary node and two standby nodes to ensure database reliability and availability.
- The lite edition does not support two-city three-DC deployment.
- The lite edition does not support the resource pooling architecture.

## Source Code

openGauss Lite mainly contains 17 code repositories: the patch repository for referenced open-source software, the JDBC driver repository, the ODBC driver repository, the database server repository, the autonomous O&M platform DBMind repository, the database OM management tool, the database CM management tool repository, the database DCF repository, the database DCC repository, the database plug-in repository, the DataKit repository, the MySQL-to-openGauss full migration tool repository, the MySQL incremental migration repository, the data verification repository, the database prometheus-exporter repository, the monitoring plug-in generation tool repository, and the document repository:

- Open-source software code repository: [https://atomgit.com/opengauss/openGauss-third_party](https://atomgit.com/opengauss/openGauss-third_party)
- JDBC driver code repository: [https://atomgit.com/opengauss/openGauss-connector-jdbc](https://atomgit.com/opengauss/openGauss-connector-jdbc)
- ODBC driver code repository: [https://atomgit.com/opengauss/openGauss-connector-odbc](https://atomgit.com/opengauss/openGauss-connector-odbc)
- Database server code repository: [https://atomgit.com/opengauss/openGauss-server](https://atomgit.com/opengauss/openGauss-server)
- DBMind autonomous O&M platform code repository: [https://atomgit.com/opengauss/openGauss-DBMind](https://atomgit.com/opengauss/openGauss-DBMind)
- Database OM tool code repository: [https://atomgit.com/opengauss/openGauss-OM](https://atomgit.com/opengauss/openGauss-OM)
- Database CM (Cluster Manager) tool code repository: [https://atomgit.com/opengauss/CM](https://atomgit.com/opengauss/CM)
- Database DCF (Distributed Consensus Framework) code repository: [https://atomgit.com/opengauss/DCF](https://atomgit.com/opengauss/DCF)
- Database DCC (Distributed Configuration Center) code repository: [https://atomgit.com/opengauss/DCC](https://atomgit.com/opengauss/DCC)
- Database plug-in code repository: [https://atomgit.com/opengauss/Plugin](https://atomgit.com/opengauss/Plugin)
- DataKit code repository: [https://atomgit.com/opengauss/openGauss-workbench](https://atomgit.com/opengauss/openGauss-workbench)
- MySQL-to-openGauss full migration tool code repository: [https://atomgit.com/opengauss/openGauss-tools-chameleon](https://atomgit.com/opengauss/openGauss-tools-chameleon)
- MySQL incremental/reverse migration tool code repository: [https://atomgit.com/opengauss/debezium](https://atomgit.com/opengauss/debezium)
- Data verification tool code repository: [https://atomgit.com/opengauss/openGauss-tools-datachecker-performance](https://atomgit.com/opengauss/openGauss-tools-datachecker-performance)
- Database prometheus-exporter code repository: [https://atomgit.com/opengauss/openGauss-prometheus-exporter](https://atomgit.com/opengauss/openGauss-prometheus-exporter)
- Database monitoring plug-in generation tool code repository: [https://atomgit.com/opengauss/openGauss-tools-monitor](https://atomgit.com/opengauss/openGauss-tools-monitor)
- Database documentation repository: [https://atomgit.com/opengauss/docs](https://atomgit.com/opengauss/docs)

## User Notice

openGauss is a multi-model open-source database with ultimate performance, security, and reliability. It is licensed under the Mulan Permissive Software License (Mulan PSL V2), allowing users to flexibly copy, use, modify, and distribute the software, whether modified or not.

The openGauss version number follows the X.Y.0-RCx format to distinguish different types of version updates. Specifically:

 + LTS version (X.0.0): Released every two years, it marks a long-term stable support version suitable for large-scale deployment and production environments. The community commits to three years of maintenance support for each LTS version to ensure its continuous stability and security.
 + Innovation release (X.Y.0-RCx): Released every six months, it is designed for rapid iteration and provides the latest features and technology previews. These versions are mainly used for user testing and innovation cooperation. The community provides six months of maintenance support and encourages exploration and feedback.
 + Patch version (X.Y.0): Released as appropriate when major issues occur, it is designed to quickly fix critical errors and ensure stable system operation.

## Acknowledgement

We sincerely thank all developers and partners who participated in and assisted with the release of openGauss 7.0.0 (LTS), including Huawei Technologies Co., Ltd., Beijing Vastdata Technology Co., Ltd. (VASTDATA), China Mobile Information Technology Co., Ltd., Tianjin Shenzhou General Data Technology Co., Ltd., General Data Technology Co., Ltd. (GBASE), ENMOTECH, the Greater Bay Area National Center of Technology Innovation (GBA NCTI), SI-TECH Information Technology Co., Ltd., Postal Savings Bank of China Co., Ltd. (PSBC), China Minsheng Banking Corp., Ltd. (CMBC), Shenhua Information Technology Co., Ltd., Hangzhou Hikvision Digital Technology Co., Ltd. (HIKVISION), and Zhejiang Dahua Technology Co., Ltd. (DAHUA). Your hard work made this release possible and will help openGauss grow even stronger.

![openGauss developer cloud map](./opengauss_logo.png)
