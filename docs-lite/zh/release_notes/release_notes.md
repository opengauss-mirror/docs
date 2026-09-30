# 发行说明

## 版本介绍

openGauss 7.0.0(LTS)是openGauss 2026年9月发布的LTS版本，该版本生命周期为3年。当前文档说明范围仅限轻量版。

轻量版的特点如下：

（1）占用资源少：

本次发布轻量化版本安装包实际大小小于60MB，空载内存小于250MB。

（2）易安装：

相比于企业版，其安装流程更简单快捷。

（3）轻量版通过参数控制的特性：

默认关闭的特性：Ustore特性（inplace-update引擎）、Asp特性（active session profile）、增量检查点（incremental checkpoint）、双写（double write）、Full /Slow SQL特性、workload特性、sql响应时间信息计算特性、数据库监控快照功能、两阶段提交事务。
部分特性的参数配置通过调整默认值使其占用更少的内存和CPU，包括global syscache、shared buffer等。
主要的参数配置如下。

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

不支持的GUC参数：

```ini
standby_recycle_interval
standby_max_query_time
base_page_saved_interval
standby_force_recycle_ratio
max_standby_base_page_size
max_standby_lsn_info_size
```

（4）轻量版不支持的特性：

ORC文件访问、Kerberos安全校验、JAVA UDF、Codegen、MOT内存表特性、SMP并行查询特性、AI特性相关工具和功能、全密态数据库、CM、OM、资源池化功能（含DSS、DMS等）、ECPG、pljava、HTAP特性、OBS、异步IO功能、容灾集群相关功能等。

（5）二进制工具精简：

保留了用户常用的gsql、gs_ctl、gs_guc、gs_dump、gs_restore、gs_probackup、gs_initdb等工具，它还提供了安装部署、升级的工具liteom。
不支持gs_cgroup、pg_recvlogical、pg_xlogdump、pagehack、pg_archivecleanup、gs_assessment、ndpplugin、spqplugin、timescaledb、age、postgres_fdw、dblink、gms_xmlgen、libog_query等插件和工具。不包含JRE组件。

7.0.0(LTS)与之前的版本特性功能保持兼容，主要功能如下：

- 标准SQL支持

    支持标准的SQL92/SQL99/SQL2003/SQL2011规范，支持GBK、UTF-8和GB18030字符集，支持SQL标准函数与分析函数，支持存储过程。

- 数据库存储管理功能

    支持表空间，可以把不同表规划到不同的存储位置。

- 提供主备双机

    事务支持ACID特性、单节点故障恢复、双机数据同步、双机故障切换等。

- 应用程序接口

    支持标准JDBC 4.0特性、ODBC 3.5特性，支持Python、Go连接驱动，支持MySQL协议兼容。

- 管理工具

    提供安装部署工具、实例启停工具、备份恢复工具、升级工具，支持数据全生命周期生产工具DataKit，支持MySQL全量/增量/反向迁移工具和数据校验工具。

- 安全管理

    支持SSL安全网络连接、用户权限管理、密码管理、安全审计、细粒度ANY权限控制等功能，保证数据库在管理层、应用层、系统层和网络层的安全性。

## 新增特性

此处说明的是openGauss 7.0.0(LTS)版本，在7.0.0-RC3版本功能的基础上，新增如下特性：

- **高智能**：[BM25索引](https://docs.opengauss.org/zh/docs/7.0.0-lite/datavec/bm25_full_text_search_index.html)优化。
  - 支持[自定义BM25索引jieba分词器的词典](https://docs.opengauss.org/zh/docs/7.0.0-lite/datavec/bm25_usage_guide.html#3-%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AF%8D%E5%85%B8dict_path)。[#9036](https://atomgit.com/opengauss/openGauss-server/pull/9036) [@Setname](https://atomgit.com/Setname)
  - 实现[BM25索引可变块特性](https://docs.opengauss.org/zh/docs/7.0.0-lite/datavec/bm25_usage_guide.html#4-%E7%B4%A2%E5%BC%95%E7%A9%BA%E9%97%B4%E4%BC%98%E5%8C%96%E8%AF%B4%E6%98%8E)，减少索引空间占用40%。[#9134](https://atomgit.com/opengauss/openGauss-server/pull/9134) [@Setname](https://atomgit.com/Setname)

- **高智能**：[oGMemory](https://docs.opengauss.org/zh/docs/7.0.0-lite/datavec/ogmem_introduction.html)上下文记忆管理框架。
  - [oGMemory记忆框架支持对接OpenClaw](https://docs.opengauss.org/zh/docs/7.0.0-lite/datavec/ogmem_case01.html)，多轮对话准确率提升30%，场景化用例测试任务Token开销降低50%。[#22](https://atomgit.com/opengauss/oGMemory/pull/22) [#66](https://atomgit.com/opengauss/oGMemory/pull/66) [#65](https://atomgit.com/opengauss/oGMemory/pull/65) [#64](https://atomgit.com/opengauss/oGMemory/pull/64) [#63](https://atomgit.com/opengauss/oGMemory/pull/63) [#39](https://atomgit.com/opengauss/oGMemory/pull/39) [#35](https://atomgit.com/opengauss/oGMemory/pull/35) [#23](https://atomgit.com/opengauss/oGMemory/pull/23) [#18](https://atomgit.com/opengauss/oGMemory/pull/18) [@Vincent__Sun](https://atomgit.com/Vincent__Sun)

- **企业级能力**
  - 支持[INSERT ON CONFLICT](../sql_reference/insert.md#参数说明)语法，指定在发生唯一约束或者主键约束导致冲突时的行为，例如执行更新操作而不是插入新数据，或者忽略冲突而不进行任何操作等。[#8765](https://atomgit.com/opengauss/openGauss-server/pull/8765) [@sunquancheng01](https://atomgit.com/sunquancheng01)
  - 支持[全局sequence cache](../sql_reference/create_sequence.md#参数说明)，序列缓存是全局缓存，所有session共享。[#8647](https://atomgit.com/opengauss/openGauss-server/pull/8647) [@sunquancheng01](https://atomgit.com/sunquancheng01)
  - 建表时列属性支持[GENERATED { ALWAYS | BY DEFAULT } AS IDENTITY](../sql_reference/create_table.md#参数说明)，通过语法指定列为自增列。[#9137](https://atomgit.com/opengauss/openGauss-server/pull/9137) [@CXXXXZ](https://atomgit.com/CXXXXZ)
  - 新增[pg_stat_progress_copy视图](../database_reference/pg_stat_progress_copy.md)，支持监控COPY导入数据进度，展示已导入行数及被过滤行数（where filter）。[#9115](https://atomgit.com/opengauss/openGauss-server/pull/9115) [@CXXXXZ](https://atomgit.com/CXXXXZ)
  - 支持[NOTIFY](../sql_reference/notify.md)/[LISTEN](../sql_reference/listen.md)功能，实现不同会话间通信的能力。[#9352](https://atomgit.com/opengauss/openGauss-server/pull/9352) [@Solataire](https://atomgit.com/Solataire)
  - 支持[CREATE FORCE VIEW](../sql_reference/create_view.md#参数说明)语法，强制创建视图，而不管视图所依赖的基表、视图或函数是否存在。[#9363](https://atomgit.com/opengauss/openGauss-server/pull/9363) [@Coder_Zero1](https://atomgit.com/Coder_Zero1)
  - 使用共享内存进行统计信息收集，消除pgstat后台线程，降低CPU/IO消耗。[#9009](https://atomgit.com/opengauss/openGauss-server/pull/9009) [@hw_hbj](https://atomgit.com/hw_hbj)

## 版本兼容性说明

- GUC参数[d_format_behavior_compat_options](https://docs.opengauss.org/zh/docs/7.0.0-lite/extension_reference/extension_reference/server/shark_guc_parameters.html#d_format_behavior_compat_options)默认值由空调整为'enable_sbr_identifier, default_collation'。仅影响D库，修改后默认支持'[]'包裹标识符(含数据类型)，不支持'[]'作为数组语法使用。字符类型字段的字符序当表级字符序不为空时继承表级字符序，为空时设置为数据库编码对应的默认字符序。升级场景下，通过OM升级时，如果用户数据库包含D库且从修改前版本升级到修改后版本，则升级后保存用户原有d_format_behavior_compat_options值，不做变更。如果旧版本不包含D库，升级后创建新数据库时，默认值为新默认值。[#9034](https://atomgit.com/opengauss/openGauss-server/pull/9034) [#1245](https://atomgit.com/opengauss/openGauss-OM/pull/1245) [@shijuzheng1997](https://atomgit.com/shijuzheng1997)
- 锁等待相关视图、函数新增waitstart字段，用于标记锁等待开始的时间。受影响的视图/函数包括[dbe_perf.locks](../sql_reference/dbe_perf_schema_locks.md)、[pg_catalog.pg_locks](../database_reference/pg_locks.md)、[pg_catalog.pg_lock_status](../sql_reference/statistics_information_functions.md)。[#9133](https://atomgit.com/opengauss/openGauss-server/pull/9133) [@2504_92042799](https://atomgit.com/2504_92042799)
- 序列相关视图、函数支持展示全局序列信息，用于标识当前序列是否为全局序列。受影响的视图/函数包括[dbe_perf.statio_all_sequences](../sql_reference/statio_all_sequences.md)、[information_schema.sequences](../sql_reference/columns.md)、[pg_catalog.pg_gtt_attached_pids](../database_reference/pg_gtt_attached_pids.md)、[pg_catalog.pg_seclabels](../database_reference/pg_seclabels.md)、[pg_catalog.pg_statio_all_sequences](../database_reference/pg_statio_all_sequences.md)、[pg_catalog.pg_sequence_all_parameters](../sql_reference/system_information_function.md)、[pg_catalog.pg_sequence_parameters](../sql_reference/system_information_function.md)。[#8647](https://atomgit.com/opengauss/openGauss-server/pull/8647) [@sunquancheng01](https://atomgit.com/sunquancheng01)
- [information_schema.columns](../sql_reference/columns.md)视图支持展示identity相关信息，is_identity、identity_generation、identity_start、identity_increment、identity_maximum、identity_minimum、identity_cycle列支持根据identity情况展示真实信息。原先这些列的值恒为NO或NULL。[#9137](https://atomgit.com/opengauss/openGauss-server/pull/9137) [@CXXXXZ](https://atomgit.com/CXXXXZ)
- [WLM统计相关视图](../database_reference/pg_session_wlmstat.md)支持展示RowDescription缓存被命中的次数，新增rowdesc_a_store_count,rowdesc_a_hit_count,rowdesc_b_store_count,rowdesc_b_hit_count四个字段，分别表示使用openGauss协议连接openGauss数据库时，RowDescription缓存的累计建槽次数、缓存的累计命中次数。使用MySQL协议连接openGauss数据库时，RowDescription缓存的累计建槽次数、缓存的累计命中次数。RowDescription用于在处理openGauss协议D报文以及MySQL协议的结果集输出时被用到。[#2419](https://atomgit.com/opengauss/Plugin/pull/2419) [#9202](https://atomgit.com/opengauss/openGauss-server/pull/9202) [@wofanzheng](https://atomgit.com/wofanzheng)
- [text_date](../sql_reference/type_conversion_function.md)函数的provolatile属性从'i'（immutable，不可变的）变更为's'（stable，稳定的）。意味着该函数的结果，对于固定输入，结果在一次扫描里不变。但是在多次扫描中，相同的输入可能产生不同的结果。[#9548](https://atomgit.com/opengauss/openGauss-server/pull/9548) [@liyangx](https://atomgit.com/liyangx)

## 已知问题

- openGauss轻量版没有存储空间、文件权限、慢盘监控功能。在存储空间满，文件权限异常时，数据库会退出，日志中会有相应打印信息。在慢盘时，数据库操作会变慢。
- openGauss轻量版只有数据库内核能力，没有主备监控和切换功能。在主备断连，主备日志不匹配时需要进行双机重建。
- OM默认根据初始配置的主备双机关系启动主备数据库，如果应用对数据库进行了主备切换，需要把新的主备关系通知给OM，避免主备关系发生错乱，导致双机重建。

## 已修复问题

完整问题清单请参见[完整问题清单](https://atomgit.com/opengauss/openGauss-server/issues)。

完整的内核提交记录请参见[提交记录](https://atomgit.com/opengauss/openGauss-server/commits/7.0.0)。

已修复问题请参见下表。

| ISSUE                                                        | 关联仓库                                | 问题描述                                                     |
| ------------------------------------------------------------ | --------------------------------------- | ------------------------------------------------------------ |
| [8056](https://atomgit.com/opengauss/openGauss-server/issues/8056) | openGauss-server | [Bug]: 【兼容性】在B库中修改b_format_behavior_compat_options参数为''，执行修改列操作，数据库挂掉 |
| [8061](https://atomgit.com/opengauss/openGauss-server/issues/8061) | openGauss-server | [Bug]: 【兼容性】在7.0.0RC3B023版本数据库中执行D兼容语法，select CONVERT(date， '1956-12-30 20:00:00'， 0);后数据库挂掉 |
| [8069](https://atomgit.com/opengauss/openGauss-server/issues/8069) | openGauss-server | [Bug]: 资源池化长稳跑2*24h内，出现集群挂掉，主备业务断掉 |
| [8071](https://atomgit.com/opengauss/openGauss-server/issues/8071) | openGauss-server | [Bug]: 【升级】安装6.0.3或者7.0.0RC2升级到最新版本7.0.0RC3B024，升级报错 |
| [8073](https://atomgit.com/opengauss/openGauss-server/issues/8073) | openGauss-server | [Bug]: 备机开启极致RTO备机读+feedback+关闭globalsyscache，启动备机直接coredump【M】 |
| [8075](https://atomgit.com/opengauss/openGauss-server/issues/8075) | openGauss-server | [Bug]: 表添加策略后，插入数据触发策略发生内存泄露。【DR】 |
| [8076](https://atomgit.com/opengauss/openGauss-server/issues/8076) | openGauss-server | [Bug]: 两个package之间有相互依赖的变量，执行调用会出现core |
| [8095](https://atomgit.com/opengauss/openGauss-server/issues/8095) | openGauss-server | [Bug]: BM25支持自定义词典，设置enable_remote_execute=on;主机自定义词典可读，备机自定义词典不可读，在备机创建后查询数据库挂掉 |
| [8109](https://atomgit.com/opengauss/openGauss-server/issues/8109) | openGauss-server | [Bug]: 【测试类型：升级功能】【测试版本：6.0.5】【资源池化】升级到7.0.0 LTS B002版本core掉 |
| [8142](https://atomgit.com/opengauss/openGauss-server/issues/8142) | openGauss-server | [Bug]: openGauss jdbc批量插入数据出现xlog插入 panic 主动core |
| [8171](https://atomgit.com/opengauss/openGauss-server/issues/8171) | openGauss-server | [Bug]: 全量fastcheck出现coredump |
| [8206](https://atomgit.com/opengauss/openGauss-server/issues/8206) | openGauss-server | [Bug]: 【测试功能：传统长稳】传统长稳B007版本跑tpcc 压缩表业务，一直在输出'WARNING:  you don't own a lock of type AccessShareLock'日志 |
| [8209](https://atomgit.com/opengauss/openGauss-server/issues/8209) | openGauss-server | [Bug]: 开启UB事务加速访问特性后，主机性能劣化明显 |
| [8235](https://atomgit.com/opengauss/openGauss-server/issues/8235) | openGauss-server | [Bug]: 【长稳】【传统主备】长稳环境运行ustore业务，开启极致RTO，运行一段时间产生core，提示PANIC:  [REDO_LOG_TRACE]DispatchRedoRecord encounter fatal error:rmgrID:22， info:48， indexid:22 |
| [8244](https://atomgit.com/opengauss/openGauss-server/issues/8244) | openGauss-server | [Bug]: 【ustore】并发交互场景，更新ustore表，出现报错 |
| [8260](https://atomgit.com/opengauss/openGauss-server/issues/8260) | openGauss-server | [Bug]: insert on conflict do update 新插入更新值与同时新插入的数据一致 openGauss执行结果与pg不一致 |
| [8261](https://atomgit.com/opengauss/openGauss-server/issues/8261) | openGauss-server | [Bug]: insert on conflict do update 新插入的本身存在冲突 opengauss 执行结果与pg不一致 |
| [8272](https://atomgit.com/opengauss/openGauss-server/issues/8272) | openGauss-server | [Bug]: B库convert函数，通过jdbc执行select convert('ffff1测试646测试nhjhio' using 'latin1');数据库挂掉 |
| [8289](https://atomgit.com/opengauss/openGauss-server/issues/8289) | openGauss-server | [Bug]: BM25索引jieba分词词典为空时数据库进程core |
| [8297](https://atomgit.com/opengauss/openGauss-server/issues/8297) | openGauss-server | [Bug]: 【升级】【传统主备】6.0.6升级到7.0.0LTSB013，升级报错 |
| [8336](https://atomgit.com/opengauss/openGauss-server/issues/8336) | openGauss-server | [Bug]: 开启hot_standby_feedback，物理复制槽会带上xmin字段，在做主备切换后，备机存在不活跃的复制槽带有xmin，csnlog无法清理【M】 |
| [8344](https://atomgit.com/opengauss/openGauss-server/issues/8344) | openGauss-server | [Bug]: 关闭sql_mode_full_group有些场景会产生core |
| [8360](https://atomgit.com/opengauss/openGauss-server/issues/8360) | openGauss-server | [Bug]: USTORE表COPY FROM不校验外键约束（ASTORE正常） |
| [8361](https://atomgit.com/opengauss/openGauss-server/issues/8361) | openGauss-server | [Bug]: 【ustore】【HA】【gs_probackup】增量恢复后对ustore表执行alter table ... alter column ... type int 产生core |
| [8357](https://atomgit.com/opengauss/openGauss-server/issues/8357) | openGauss-server | [Bug]: 资源池化CI 6.0.0 FORWARD_OLDEST_XMINCase0002 出现cms server节点stop后无法选出新cms主 |
| [8392](https://atomgit.com/opengauss/openGauss-server/issues/8392) | openGauss-server | [Bug]: memcheck 跑测试用例autonomous_cursor 发生core |
| [8316](https://atomgit.com/opengauss/openGauss-server/issues/8316) | openGauss-server | [Bug]: Ustore备库热读长稳场景下，备库快速出现core |
| [8449](https://atomgit.com/opengauss/openGauss-server/issues/8449) | openGauss-server | [Bug]: ustore长稳运行1x24h 出现备机core dump 主备复制中断 |
| [8479](https://atomgit.com/opengauss/openGauss-server/issues/8479) | openGauss-server | [Bug][资源池化]: 7.0.0RC3升级到7.0.0LTS，升级报错 |
| [8485](https://atomgit.com/opengauss/openGauss-server/issues/8485) | openGauss-server | [资料issue]: 资源池化 query_all_drc_info(0) 按文档执行报 return row 类型不匹配 |
| [8494](https://atomgit.com/opengauss/openGauss-server/issues/8494) | openGauss-server | [Bug]: gs_probackup 远程全量备份时认证失败 |
| [8496](https://atomgit.com/opengauss/openGauss-server/issues/8496) | openGauss-server | [Bug]:[资源池化]6.0.x升级到7.0.0LTSB022，升级报错 |
| [270](https://atomgit.com/opengauss/debezium/issues/270) | debezium | [Bug]: Oracle2oGRAC迁移工具包解压后缺失可执行jar |
| [284](https://atomgit.com/opengauss/debezium/issues/284) | debezium | [Bug]: 在datakit启动在线迁移，全量迁移中断后，给源库插入一定数据后，修复环境后全量迁移续传，增量迁移卡住，迁移进程阻塞 |
| [291](https://atomgit.com/opengauss/debezium/issues/291) | debezium | [Bug]: pg反向增量迁移失败 |
| [311](https://atomgit.com/opengauss/openGauss-tools-chameleon/issues/311) | openGauss-tools-chameleon | [Bug]: MySQL全量迁移支持断点续传，在目标库停止后，datakit页面显示进入阻塞状态，目标库启动后，datakit显示续传，续传完进入全量校验，存在数据丢失 |
| [312](https://atomgit.com/opengauss/openGauss-tools-chameleon/issues/312) | openGauss-tools-chameleon | [Bug]: MySQL全量迁移支持断点续传，在源库停止后，datakit页面显示迁移中断，源库启动后，datakit点击续传按钮，存在数据丢失 |

## 继承特性

- **基础功能**：[SQL标准语法](../sql_reference/dcl_grammer_overview.md)、[数据类型](../sql_reference/numeric_types.md)（包括[JSON和JSONB](../sql_reference/json_jsonb_type.md)）、表（包括临时表、全局临时表、外部表）、[视图](../sql_reference/brief_tutorial/views.md)、[物化视图](../sql_reference/brief_tutorial/materialized_views.md)、外键、[索引](../sql_reference/brief_tutorial/indexes.md)（包括btree索引、Gin索引、hash索引）、[序列](../database_administration_guide/creating_and_managing_sequences.md)、函数、[触发器](../sql_reference/trigger.md)、[聚合函数](../sql_reference/alter_aggregate.md)median、ROWNUM、UPSERT、GB18030字符集。

- **SQL引擎增强**：[范围分区、LIST分区、HASH分区](../sql_reference/partitioned_table.md#范围分区表的分类)、基于范围分区的自动扩展分区、全局分区索引、行存转向量化、[自治事务](../characteristic_description/autonomous_transaction.md)、[并行查询](../characteristic_description/smp_for_parallel_execution.md)、[Global Syscache](../characteristic_description/global_syscache.md)、[IPv6协议](../sql_reference/network_address_types.md)、[事件触发器](../sql_reference/brief_tutorial/event_trigger.md)。支持[继承表](../sql_reference/create_table_inherits.md)。支持PIPELINED管道函数，函数可以返回行集合。SELECT语句支持通过[TABLESAMPLE子句](../sql_reference/select.md#参数说明)实现对指定子分区、视图、物化视图进行数据采样。支持通过ALTER TRIGGER的方式禁用/启动单个触发器。SELECT语句支持通过ROTATE和NOT ROTATE子句进行行列转换。支持通过SQL启用禁用table约束。数字支持以f/d结尾作为浮点数使用。支持 ‘NaN’ 和 ‘infinity’ 表示浮点数特殊值。支持IS [NOT] INFINITE和IS [NOT] NAN条件表达式。numeric数据类型精度设置允许precision大于scale，允许scale为负数。支持CROSS/OUTER APPLY JOIN语法。支持修改/删除视图引用的对象（如表、列、函数、视图等）后，将视图置为无效状态。支持[XMLTABLE](../sql_reference/xmltable.md)，用于将XML文档按指定行路径展开为关系表结果，并通过`COLUMNS`子句将节点、属性或表达式映射为输出列，在`FROM`子句中作为表函数使用。JSONB功能增强，支持[jsonb_path_exists](../sql_reference/json_jsonb_function_and_operator.md)函数检查指定JSON路径下是否有任何项，支持[jsonb_path_query_first](../sql_reference/json_jsonb_type.md#jsonpath类型)函数通过JSONPATH提取JSON数据中的特定表达式。

- **存储引擎增强**：延迟备库、[备机支持逻辑复制](../characteristic_description/logical_replication.md)、[并行逻辑解码](../characteristic_description/parallel_logical_decoding.md)、[灰度升级](../characteristic_description/gray_upgrade.md)、指定节点升级、Hash索引、列存表主键唯一约束、[发布订阅](../characteristic_description/publication_subscription.md)、[NUMA-aware高性能优化](../database_administration_guide/numa_awareness_allocation_and_affinity.md)等、oGEngine原位更新存储引擎增强。[段页式表支持空间回收](../characteristic_description/segment_space_shrink.md)，在DELETE和UPDATE段页式表后，通过系统函数回收空间，使表文件占用的存储资源更有效地释放，不影响用户业务的正常运行。

- **存储过程**：[存储过程](../sql_reference/stored_procedure.md)、[存储过程内commit/rollback](../sql_reference/transaction_management.md)、参数的存储过程/函数调用省略()、[存储过程调试](../characteristic_description/stored_procedure_debugging.md)。支持[存储过程覆盖率测试](../sql_reference/proc_coverage_generate_stored_procedure_coverage_report.md)。[游标](../sql_reference/cursors.md)支持嵌套定义。支持游标作为插入值。通过TYPE语法定义动态游标 REF CURSOR 时，支持通过RETURN指定游标返回的数据类型。[游标参数支持设置默认值](../sql_reference/explicit_cursor.md)。支持array和record嵌套。支持使用[ROWTYPE给游标赋值](../sql_reference/define_variables.md)。

- **安全功能**：[认证](../database_administration_guide/configuring_client_access_authentication.md)、[权限管理](../database_om_guide/secharden/permission_management.md)、网络通信安全、[数据库审计](../characteristic_description/database_audit.md)、国密算法、[内置角色](../database_administration_guide/roles.md)和权限管理、ANY权限管理、[用户级别审计](../characteristic_description/database_audit.md)等。支持第三方密钥管理服务。在鲲鹏服务器上，借助KAE组件，提升国密SM4加解密算法性能5%。支持[对服务启停操作进行审计](../characteristic_description/database_audit.md)、[对数据库备份恢复操作进行审计](../characteristic_description/database_audit.md)。支持[对审计日志进行sha256完整性校验](../characteristic_description/database_audit.md)。发布安全配置基线以及安全配置巡检工具。发布安全配置基线以及安全配置巡检工具。支持禁止非owner用户远程执行DDL操作。

- **高可用**：主备双机、级联备机、[逻辑复制](../characteristic_description/logical_replication.md)、[极致RTO](../characteristic_description/ultimate_rto.md)、备机扩容。并行回放性能优化，TPCC场景备机redo性能提升50%~100%。极致RTO支持备机可读，维持一主一备70W tpmC时，RTO<10s。[主备高可用能力增强](../characteristic_description/enhanced_active_and_standby_ha.md)。支持[异步备升主数据找回能力](../characteristic_description/asynchronous_backup_and_recovery_capability_for_master_data.md)。[逻辑复制增强](../characteristic_description/logical_replication.md)。walwriteraux线程支持预分配XLog文件。逻辑复制增强，新增支持Alter/Truncate/Rename 表和分区表DDL语法。支持[在线DDL](../database_administration_guide/online_ddl.md)，减少DDL过程中持有高级别锁的时间，减少对并发DML的阻塞。在线DDL支持传统主备中Astore、段页式修改列数据类型、修改压缩属性、添加约束(包括范围约束和非空约束)、VACUUM FULL、CLUSTER、分区表分裂合并分区，并通过新增关键字CONCURRENTLY触发在线DDL。

- **高性能**：支持[shared buffer按大页内存分配](../database_reference/huge_page_memory.md)，实现4k pagesize环境中性能提升5%。内核GCC版本升级到GCC 10.3，基于反馈优化，TPCC性能提升6%。SCRLock提高分布式锁性能。优化主备锁机制控制粒度和有序队列加锁逻辑，提升一主一同步备场景下TPCC性能10%。函数/PACKAGE支持指定并行相关参数，[NO SCROLL游标](../sql_reference/cursor.md)和作为并行函数入参的游标表达式支持并行执行。使用用户态网络优化北向网络，单机TPCC性能提升15%。子事务场景性能提升，Multixact相关的SLRU buffer大小支持可配置，同时通过SLRU分bank优化，提升大量子事务场景下的性能100%+。支持[自动参数化](../characteristic_description/automatic_parameterization.md)，在需要反复执行相似/相同的SQL简单语句的情境下（仅支持IUD），通过复用执行计划缓存以减少SQL语句的执行时间。支持[参数化路径](../characteristic_description/automatic_parameterization.md)功能支持简单SELECT语句，并将相关内存统一到plan cache，支持global plan cache。支持GPC（Global Plan Cache全局计划缓存），开启GPC后使用参数化功能的情况下，被参数化的语句也会被缓存到GPC（执行计划使用Generic Plan的情形下），可通过视图`DBE_PERF.GLOBAL_PLANCACHE_STATUS`查询。支持[ADIO](../database_reference/asynchronous_i_o_operations.md)，行存表的文件访问支持通过直接IO，不经过操作系统页面缓存的方式进行读取，页面刷盘以及VACUUM FULL操作采用异步IO方式。支持[DPA哈希聚合加速](../characteristic_description/dpa_hash_agg_acceleration.md)，基于UADK框架将向量化哈希聚合操作卸载到硬件加速器上执行，显著提升聚合查询执行效率。

- **备份恢复**：[全量物理备份](../characteristic_description/physical_backup_and_restoration.md)、[逻辑备份](../database_om_guide/logical_backup_and_restoration.md)、备机备份、[增量备份和恢复](../characteristic_description/physical_backup_and_restoration.md)、恢复到指定时间点(PITR)。

- **运维能力**：[WDR诊断报告](../characteristic_description/workload_diagnosis_report_wdr.md)新增数据库运行指标、备机[慢SQL诊断视图](../characteristic_description/root_cause_analysis_for_slow_sql_statements.md)、[unique sql自动淘汰](../database_reference/query_62.md#enable_auto_clean_unique_sql)。慢SQL统计时间空洞补齐，支持细粒度阶段统计。支持switchover超时打印节点堆栈。增加对WalSender、WalRecv和WalRecvWriter线程的统计信息记录。新增GUC参数支持强制回收主机XLog日志。支持在主机宕机的情况下，在备机上获取当前事务日志的同步位置。支持[全链路跟踪能力](../characteristic_description/full_link_tracking.md)，实现追踪并记录jdbc查询接口执行sql的端到端网络耗时，并记录在数据库[dbe_perf.statement](../sql_reference/dbe_perf_schema.md)视图、[statement_history](../database_reference/statement_history.md)表中。慢SQL统计默认开启计划统计，降低性能损耗。支持通过内置函数gs_get_hba_conf()获取pg_hba.conf文件中的内容。gs_ctl日志文件支持按固定周期轮转，限制最大日志磁盘空间占用。gs_probackup工具支持将备份的数据和日志直接传输到远端兼容S3协议的对象存储中。

- **JDBC**：支持[JDBC客户端负载均衡及读写分离](../characteristic_description/jdbc_client_load_balancing_and_read_write_isolation.md)、主节点心跳检测。

- **工具链**：[开发工具DataStudio](../characteristic_description/opengauss_client_tool_datastudio.md)、MySQL全量迁移工具gs_mysync、增量和反向迁移工具gs_replicate、数据校验工具gs_datacheck、[数据全生命周期生产工具DataKit](../characteristic_description/tool_chain_datakit.md)。支持升级场景数据字典校验工具。OM工具解耦对OS版本依赖。支持实例监控插件和智能诊断插件，实现SQL、会话、实例和集群指标监控，支持历史数据分析与SQL诊断、告警监控和告警通知，提升智能运维能力。数据库开发插件增强，支持表/视图/用户角色/函数/存储过程等对象管理。MySQL全量迁移：支持直接读取csv文件用于数据迁移，索引并行创建，解除跨平台的依赖，可靠性增强。MySQL增量&反向迁移：支持断点续传，支持迁移进度展示，反向迁移支持全量迁移。数据校验：支持按表分片校验，增强和全量迁移流程的配合，提升校验性能到150MB/s。支持 Oracle 全量、增量、反向迁移，支持数据校验。DataKit集成兼容性评估工具、支持集群拓扑显示、实例监控插件增加新指标、优化采集架构、智能诊断增加诊断经验，优化SQL诊断任务、日志检索插件增加CM日志采集，支持lucene语法搜索、告警监控插件增加内置规则、支持告警收敛、优化页面、支持组件安装路径可选、支持智能参数调优插件。支持流量录制回放工具，支持连接源端数据库（MySQL），采集SQL，并且向 openGauss 数据库进行 SQL 回放&压测。支持解析MySQL数据库的 General Log表或文件、支持Attach到JAVA应用程序、支持截取和解析MySQL网络通讯包等方式采集SQL。支持多次回放并比较结果和性能。Portal支持依赖包离线安装。迁移插件支持连接到数据库集群。支持按文件导入方式批量添加服务器和批量添加用户。支持多数据库集群并行安装。支持SSO与DevKit统一登录，实现同一用户可以登录到DevKit和DataKit。录制回放支持采集openGauss流量，支持录制回放的结果对比。支持添加IPV6实例。DataKit集成[Elasticsearch和Milvus到openGauss的迁移](../characteristic_description/datakit_support_elasticsearch_milvus_migration.md)能力。

- **中间件**：[shardingSphere](../characteristic_description/distributed_database_capability.md)、openLookeng。

- **周边生态**：支持openEuler、CentOS、FusionOS系统；[绝大部分MySQL语法和协议兼容](https://docs.opengauss.org/zh/docs/7.0.0-lite/extension_reference/extension_reference/plugin/dolphin.html)。

- **企业级特性**：支持修改表压缩属性。[子事务并发回滚流程优化](../characteristic_description/optimization_of_subtransaction_concurrent_rollback_process.md)，减少锁争抢，提升并发执行效率。支持GB18030-2022标准。[存储过程支持嵌套调试](../characteristic_description/stored_procedure_debugging.md)，支持匿名块调试。[发布订阅](../database_om_guide/subscriptions.md)支持用户自定义冲突解决方案。支持多语言日志。支持限制内核日志最大磁盘占用空间。支持龙芯平台编译。索引创建支持预扩展，堆表支持预读。压缩表支持页式存储和段页式存储两种模式。

- **其他**：cmake脚本编译、容器化部署、kubernetes。

## CVE漏洞

本版本是2026年9月发布的LTS版本，版本涉及的CVE漏洞可通过[CVE列表](https://opengauss.org/zh/cve)查询。

## 性能测试报告

见[openGauss 7.0.0 LTS 版本测试报告](https://atomgit.com/opengauss/QA/blob/master/Test_Result/openGauss_7.0.0/版本集成测试报告/openGauss%207.0.0LTS版本测试报告.md#423-性能测试)

## 版本使用注意事项

- 版本技术规格可以参照《关于openGauss》中的[技术指标](../about_opengauss/technical_indicators.md)。
- openGauss目前最多支持8备。轻量版没有CM管理，在使用一主多备时，如果主机故障，需要选择一个日志多的备机升主，避免其他备机发生重建。
- 轻量版推荐使用一主两备部署模式，保证数据库的可靠性和可用性。
- 轻量版不支持两地三中心部署。
- 轻量版不支持资源池化架构。

## 源代码

openGauss轻量版主要包含16个代码仓，引用开源软件的补丁代码仓、JDBC驱动代码仓、ODBC驱动代码仓、数据库服务器代码仓、自治运维平台DBMind代码仓、数据库OM管理工具、数据库CM管理工具代码仓、数据库DCF代码仓、数据库DCC代码仓、数据库插件代码仓、DataKit代码仓、MySQL到openGauss全量迁移工具代码仓、MySQL增量迁移代码仓、数据校验代码仓、数据库prometheus-exporter代码仓、监控插件生成工具代码仓和文档仓库：

- 开源软件代码仓：[https://atomgit.com/opengauss/openGauss-third\_party](https://atomgit.com/opengauss/openGauss-third_party)
- JDBC驱动代码仓：[https://atomgit.com/opengauss/openGauss-connector-jdbc](https://atomgit.com/opengauss/openGauss-connector-jdbc)
- ODBC驱动代码仓：[https://atomgit.com/opengauss/openGauss-connector-odbc](https://atomgit.com/opengauss/openGauss-connector-odbc)
- 数据库服务器代码仓：[https://atomgit.com/opengauss/openGauss-server](https://atomgit.com/opengauss/openGauss-server)
- 自治运维平台DBMind代码仓：[https://atomgit.com/opengauss/openGauss-DBMind](https://atomgit.com/opengauss/openGauss-DBMind)
- 数据库OM工具代码仓：[https://atomgit.com/opengauss/openGauss-OM](https://atomgit.com/opengauss/openGauss-OM)
- 数据库CM\(Cluster Manager\)工具代码仓：[https://atomgit.com/opengauss/CM](https://atomgit.com/opengauss/CM)
- 数据库DCF\(Distributed Consensus Framework\)代码仓：[https://atomgit.com/opengauss/DCF](https://atomgit.com/opengauss/DCF)
- 数据库DCC\(Distributed Configuration Center\)代码仓：[https://atomgit.com/opengauss/DCC](https://atomgit.com/opengauss/DCC)
- 数据库插件代码仓：[https://atomgit.com/opengauss/Plugin](https://atomgit.com/opengauss/Plugin)
- DataKit代码仓：[https://atomgit.com/opengauss/openGauss-workbench](https://atomgit.com/opengauss/openGauss-workbench)
- MySQL到openGauss全量迁移工具代码仓：[https://atomgit.com/opengauss/openGauss-tools-chameleon](https://atomgit.com/opengauss/openGauss-tools-chameleon)
- MySQL增量/反向迁移工具代码仓：[https://atomgit.com/opengauss/debezium](https://atomgit.com/opengauss/debezium)
- 数据校验工具代码仓：[https://atomgit.com/opengauss/openGauss-tools-datachecker-performance](https://atomgit.com/opengauss/openGauss-tools-datachecker-performance)
- 数据库prometheus-exporter代码仓：[https://atomgit.com/opengauss/openGauss-prometheus-exporter](https://atomgit.com/opengauss/openGauss-prometheus-exporter)
- 数据库监控插件生成工具代码仓：[https://atomgit.com/opengauss/openGauss-tools-monitor](https://atomgit.com/opengauss/openGauss-tools-monitor)
- 数据库文档仓库：[https://atomgit.com/opengauss/docs](https://atomgit.com/opengauss/docs)

## 用户须知

openGauss是一款极致性能、安全、可靠的多模开源数据库。采用协议“木兰宽松许可证”（Mulan PSL V2），用户可以自由复制、使用、修改、分发，不论修改与否。

openGauss的版本号遵循 X.Y.0-RCx 的格式，旨在区分不同类型的版本更新。具体而言：

 + LTS版本（X.0.0）：每两年发布一次，标志着长期稳定支持的版本，适合大规模部署与生产环境使用。社区承诺为每个LTS版本提供为期三年的维护支持，确保其持续稳定与安全。
 + 创新版本（X.Y.0-RCx）：每半年推出，旨在快速迭代，提供最新的功能与技术预览。这些版本主要用于用户测试与创新合作，社区将提供为期半年的维护支持，鼓励探索与反馈。
 + 补丁版本（X.Y.0）：当遇到重大问题时，会适时发布，旨在迅速修复关键性错误，保障系统稳定运行。

## 致谢

衷心感谢参与和协助 openGauss 7.0.0(LTS) 版本发布的所有开发者和伙伴，包括华为技术有限公司、北京海量数据技术股份有限公司、中移动信息技术有限公司、天津神舟通用数据技术有限公司、天津南大通用数据技术股份有限公司、云和恩墨（北京）信息技术有限公司、粤港澳大湾区（广东）国创中心、北京思特奇信息技术股份有限公司、邮储银行、民生银行、国能信息、海康威视、浙江大华等组织单位。是你们的辛勤付出使得版本顺利发布，也为 openGauss 更好地发展提供可能。

![openGauss开发者云图](./opengauss_logo.png)
