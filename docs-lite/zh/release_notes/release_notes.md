# 发行说明

## 版本介绍

openGauss 7.0.0-RC3是openGauss 2026年3月发布的创新版本，该版本生命周期为0.5年。当前文档说明范围仅限轻量版。

轻量版的特点如下：

（1）占用资源少：

本次发布轻量化版本安装包实际大小小于30MB，空载内存小于250MB。

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

7.0.0-RC3与之前的版本特性功能保持兼容，主要功能如下：

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

此处说明的是openGauss 7.0.0-RC3版本，在7.0.0-RC2版本功能的基础上，新增如下特性：

- 高性能：[参数化路径](../characteristic_description/automatic_parameterization.md)功能支持简单SELECT语句，并将相关内存统一到plan cache，支持global plan cache。[#8777](https://gitcode.com/opengauss/openGauss-server/pull/8777) [@shijuzheng1997](https://gitcode.com/shijuzheng1997)

  - 支持GPC（Global Plan Cache全局计划缓存），开启GPC后使用参数化功能的情况下，被参数化的语句也会被缓存到GPC（执行计划使用Generic Plan的情形下）。可以通过视图`DBE_PERF.GLOBAL_PLANCACHE_STATUS`查询

- 高性能：支持[ADIO](../database_reference/asynchronous_i_o_operations.md)。[#8719](https://gitcode.com/opengauss/openGauss-server/pull/8719) [@zcj112](https://gitcode.com/zcj112)

  - 行存表的文件访问支持通过直接IO，不经过操作系统页面缓存的方式进行读取。对于页面刷盘以及VACUUM FULL操作，将采用异步IO的方式进行。

- 高性能：支持[DPA哈希聚合加速](../characteristic_description/dpa_hash_agg_acceleration.md)，提升哈希算子性能。[#8746](https://gitcode.com/opengauss/openGauss-server/pull/8746) [#8750](https://gitcode.com/opengauss/openGauss-server/pull/8750) [#8754](https://gitcode.com/opengauss/openGauss-server/pull/8754) [@Eurekaxun](https://gitcode.com/Eurekaxun)

  - DPA（Data Processing Accelerator）哈希聚合加速是openGauss基于UADK框架实现的硬件加速特性，将向量化哈希聚合操作卸载到硬件加速器上执行，显著提升聚合查询的执行效率。

- 高可用：支持[在线DDL](../database_administration_guide/online_ddl.md)，使得DDL过程中持有高级别锁的时间大为减少，减少对并发DML的阻塞时间。[#8748](https://gitcode.com/opengauss/openGauss-server/pull/8748) [#8771](https://gitcode.com/opengauss/openGauss-server/pull/8771) [#8782](https://gitcode.com/opengauss/openGauss-server/pull/8782) [#8822](https://gitcode.com/opengauss/openGauss-server/pull/8822) [#8958](https://gitcode.com/opengauss/openGauss-server/pull/8958) [#8971](https://gitcode.com/opengauss/openGauss-server/pull/8971) [@congzhou2603](https://gitcode.com/congzhou2603) [@luodongxu](https://gitcode.com/luodongxu)

  - 在线DDL特性涉及传统主备中Astore、段页式支持修改列数据类型、修改压缩属性、添加约束(包括范围约束和非空约束)、VACUUM FULL、CLUSTER、分区表分裂合并分区，并新增关键字CONCURRENTLY用于触发在线DDL功能：

- 高智能：支持[RabitQ](../datavec/Rabitq.md)量化索引算法。[#8642](https://gitcode.com/opengauss/openGauss-server/pull/8642) [#8645](https://gitcode.com/opengauss/openGauss-server/pull/8645) [#8650](https://gitcode.com/opengauss/openGauss-server/pull/8650) [#8655](https://gitcode.com/opengauss/openGauss-server/pull/8655) [#8658](https://gitcode.com/opengauss/openGauss-server/pull/8658) [@wangjingyuan8](https://gitcode.com/wangjingyuan8) [@weixin_44204324](https://gitcode.com/weixin_44204324)

  - RabitQ是一种具有理论保证的最先进的二进制量化方法，与HNSW、IVFFLAT结合使用时，可以确保向量数据在高度压缩的表示下仍能保持搜索的可靠性。

- 高智能：[MCP](../datavec/mcp.md)适配openGauss。[#4](https://gitcode.com/opengauss/mcp-opengauss/pull/4) [@weixin_44204324](https://gitcode.com/weixin_44204324)

  - MCP是为LLM和Agent系统设计的标准化交互框架，使LLM可以与外部数据库、API和工具进行高效交互。MCP适配openGauss数据库让AI智能体能够通过标准化协议安全、高效地直接操作企业级国产数据库，将结构化数据无缝融入AI工作流，大幅降低AI应用与复杂数据系统集成的开发门槛。

- 企业级能力

  - 支持[XMLTABLE](../sql_reference/xmltable.md)。用于将 XML 文档按指定行路径展开为关系表结果，并通过 `COLUMNS` 子句将节点、属性或表达式映射为输出列。该语法在 `FROM` 子句中作为表函数使用。[#8857](https://gitcode.com/opengauss/openGauss-server/pull/8857) [@lianshanzhou](https://gitcode.com/lianshanzhou)
  - [段页式表支持空间回收](../characteristic_description/segment_space_shrink.md)。在DELETE和UPDATE段页式表后，通过系统函数回收空间，使表文件占用的存储资源更有效地释放，不影响用户业务的正常运行。[#8535](https://gitcode.com/opengauss/openGauss-server/pull/8535) [@Lamaric](https://gitcode.com/Lamaric)
  - 支持[wal2json插件](../extension_reference/wal2json.md)。用于将WAL（Write-Ahead Log）中的数据变更转换为JSON格式输出。[#8559](https://gitcode.com/opengauss/openGauss-server/pull/8559) [@Rade_he](https://gitcode.com/Rade_he)

- DataKit：迁移工具增强

  - [Elasticsearch和Milvus到openGauss的迁移](../characteristic_description/datakit_support_elasticsearch_milvus_migration.md)能力集成至DataKit。[#232](https://gitcode.com/opengauss/openGauss-migration-portal/pull/232) [#1376](https://gitcode.com/opengauss/openGauss-workbench/pull/1376) [#1378](https://gitcode.com/opengauss/openGauss-workbench/pull/1378) [#1378](https://gitcode.com/opengauss/openGauss-workbench/pull/1378) [#1379](https://gitcode.com/opengauss/openGauss-workbench/pull/1379) [@duanguoqiang4](https://gitcode.com/duanguoqiang4) [@l3007kkk](https://gitcode.com/l3007kkk)

## 版本兼容性说明

- [l2_norm函数](../datavec/vector_functions_and_operators.md#sparsevec-函数)表现变更。该函数用来计算欧几里得范数，原始表现l2_norm函数针对vector数据类型的入参，由于代码逻辑问题执行将报错，现通过将入参转化为sparsevec类型，调用l2_norm(sparsevec)函数，并返回正确的结果。[#9093](https://gitcode.com/opengauss/openGauss-server/pull/9093) [@wofanzheng](https://gitcode.com/wofanzheng)
- 新增GUC参数[enable_subscription](../database_reference/sending_server.md#enable_subscription)，控制是否支持创建发布订阅。默认值为off，即不支持创建发布订阅。对于升级场景，若升级前集群中有发布订阅，则OM升级时会自动将该参数设置为on，以确保升级后的集群仍支持发布订阅。[#8898](https://gitcode.com/opengauss/openGauss-server/pull/8898) [#1227](https://gitcode.com/opengauss/openGauss-OM/pull/1227) [@wangzhengyuan1](https://gitcode.com/wangzhengyuan1)
- GUC参数[b_compatibility_user_host_auth](../database_reference/connection_settings.md#b_compatibility_user_host_auth)默认值由off调整为on。修改后的默认值兼容MySQL的行为，允许创建`user@host`、`'user'@'host'`之类的用户名并兼容mysql的`user@host`认证鉴权。对于升级场景，OM升级时将保持该参数默认值和升级前一致，确保升级前后表现兼容。[#8150](https://gitcode.com/opengauss/openGauss-server/pull/8150) [#1239](https://gitcode.com/opengauss/openGauss-OM/pull/1239) [@ywzq1161327784](https://gitcode.com/ywzq1161327784)
- GUC参数[b_format_behavior_compat_options](../database_reference/platform_and_client_compatibility.md#b_format_behavior_compat_options)默认值由空调整为`enable_set_variables,set_session_transaction,enable_modify_column,default_collation,fetch,enable_multi_charset,diagnostics`。修改后的默认值兼容MySQL的行为，允许设置自定义变量，多字符集等。对于升级场景，OM升级时将保持该参数默认值和升级前一致，确保升级前后表现兼容。[#8150](https://gitcode.com/opengauss/openGauss-server/pull/8150) [#1239](https://gitcode.com/opengauss/openGauss-OM/pull/1239) [@ywzq1161327784](https://gitcode.com/ywzq1161327784)
- GUC参数[enable_set_variable_b_format](../database_reference/platform_and_client_compatibility.md#enable_set_variable_b_format)默认值由off调整为on。修改后的默认值兼容MySQL的行为，允许自定义用户变量。对于升级场景，OM升级时将保持该参数默认值和升级前一致，确保升级前后表现兼容。[#8150](https://gitcode.com/opengauss/openGauss-server/pull/8150) [#1239](https://gitcode.com/opengauss/openGauss-OM/pull/1239) [@ywzq1161327784](https://gitcode.com/ywzq1161327784)
- GUC参数[dolphin.sql_mode](../extension_reference/dolphin_guc_parameters.md#dolphinsql_mode)默认值由`sql_mode_strict,sql_mode_full_group,pipes_as_concat,ansi_quotes,no_zero_date,pad_char_to_full_length,auto_recompile_function,error_for_division_by_zero`调整为`sql_mode_full_group,sql_mode_strict,no_zero_date,error_for_division_by_zero,block_return_multi_results,escape_quotes,disable_escape_bytea`。修改后的默认值兼容MySQL的行为。对于升级场景，OM升级时将保持该参数默认值和升级前一致，确保升级前后表现兼容。[#2217](https://gitcode.com/opengauss/Plugin/pull/2217) [#1239](https://gitcode.com/opengauss/openGauss-OM/pull/1239) [@ywzq1161327784](https://gitcode.com/ywzq1161327784)
- GUC参数[dolphin.lower_case_table_names](../extension_reference/dolphin_guc_parameters.md#dolphinlower_case_table_names)默认值由1修改为0。修改后的默认值兼容MySQL的行为，默认区分大小写。对于升级场景，OM升级时将保持该参数默认值和升级前一致，确保升级前后表现兼容。[#2217](https://gitcode.com/opengauss/Plugin/pull/2217) [#1239](https://gitcode.com/opengauss/openGauss-OM/pull/1239) [@ywzq1161327784](https://gitcode.com/ywzq1161327784)
- GUC参数[dolphin.use_const_value_as_colname](../extension_reference/dolphin_guc_parameters.md#dolphinuse_const_value_as_colname)默认值由false修改为true。修改后的默认值兼容MySQL的行为，默认在SELECT查询时，对于常量，直接使用常量的值作为列名。对于升级场景，OM升级时将保持该参数默认值和升级前一致，确保升级前后表现兼容。[#2217](https://gitcode.com/opengauss/Plugin/pull/2217) [#1239](https://gitcode.com/opengauss/openGauss-OM/pull/1239) [@ywzq1161327784](https://gitcode.com/ywzq1161327784)
- GUC参数[dolphin.transform_unknown_param_type_as_column_type_first](../extension_reference/dolphin_guc_parameters.md#dolphintransform_unknown_param_type_as_column_type_first)默认值由false修改为true。修改后的默认值兼容MySQL的行为，对于preapre语句中unknown类型的参数优先按照其比较的列类型来解释，从而避免因为隐式类型转换导致的索引失效的问题。对于升级场景，OM升级时将保持该参数默认值和升级前一致，确保升级前后表现兼容。[#2217](https://gitcode.com/opengauss/Plugin/pull/2217) [#1239](https://gitcode.com/opengauss/openGauss-OM/pull/1239) [@ywzq1161327784](https://gitcode.com/ywzq1161327784)

## 已知问题

- openGauss轻量版没有存储空间、文件权限、慢盘监控功能。在存储空间满，文件权限异常时，数据库会退出，日志中会有相应打印信息。在慢盘时，数据库操作会变慢。
- openGauss轻量版只有数据库内核能力，没有主备监控和切换功能。在主备断连，主备日志不匹配时需要进行双机重建。
- OM默认根据初始配置的主备双机关系启动主备数据库，如果应用对数据库进行了主备切换，需要把新的主备关系通知给OM，避免主备关系发生错乱，导致双机重建。

## 已修复问题

完整问题清单请参见[完整问题清单](https://gitcode.com/opengauss/openGauss-server/issues)。

完整的内核提交记录请参见[提交记录](https://gitcode.com/opengauss/openGauss-server/commits/7.0.0-RC3)。

已修复问题请参见下表。

| ISSUE                                                        | 关联仓库                                | 问题描述                                                     |
| ------------------------------------------------------------ | --------------------------------------- | ------------------------------------------------------------ |
| [8059](https://gitcode.com/opengauss/openGauss-server/issues/8059) | openGauss-server | [Bug]: 【升级】使用7.0.0RC3B023的openeuler2403的包，设置打开升级模式，在数据库内alter extension dolphin update to "4.3"及以下版本报错 |
| [8046](https://gitcode.com/opengauss/openGauss-server/issues/8046) | openGauss-server | [Bug]: 【升级】从5.0.0->5.0.2->5.0.5->7.0.0RC3的连升场景，在5.0.5升级到7.0.0RC3报错 |
| [8036](https://gitcode.com/opengauss/openGauss-server/issues/8036) | openGauss-server | [Bug]: 设置archive_command参数后，在主上执行gs_om -t restart，两个备起来不，进入备节点gs_ctl可以拉起来 |
| [8031](https://gitcode.com/opengauss/openGauss-server/issues/8031) | openGauss-server | [Bug]: 【测试类型：功能测试】【测试版本：7.0.0-RC3】【资源池化】自动化，执行CI过程中发现pwrite相关core |
| [8019](https://gitcode.com/opengauss/openGauss-server/issues/8019) | openGauss-server | [Bug]: 【A兼容性】【CI】在7.0.0RC3B020版本A兼容库里执行json_textcontains相关用例，导致数据库挂掉 |
| [8018](https://gitcode.com/opengauss/openGauss-server/issues/8018) | openGauss-server | [Bug]: 【长稳】7.0.0RC3B020版本B库执行分区表插入语句，发生内存泄漏 |
| [8014](https://gitcode.com/opengauss/openGauss-server/issues/8014) | openGauss-server | [Bug]: 删除gms_xmlparser插件失败 |
| [8013](https://gitcode.com/opengauss/openGauss-server/issues/8013) | openGauss-server | [Bug]: gs_om -t start操作环境未成功拉起，产生coredump |
| [8007](https://gitcode.com/opengauss/openGauss-server/issues/8007) | openGauss-server | [Bug]: 列存模式下向量化查询导致OOM |
| [7994](https://gitcode.com/opengauss/openGauss-server/issues/7994) | openGauss-server | [Bug]: 【升级】【传统】从6.0.3带D库升级到7.0.0RC3，升级过程报错 |
| [7992](https://gitcode.com/opengauss/openGauss-server/issues/7992) | openGauss-server | [Bug]: b_format_behavior_compat_options设置为"",表插入出现core |
| [7983](https://gitcode.com/opengauss/openGauss-server/issues/7983) | openGauss-server | [Bug]: 6.0.0升级至7.0.0-RC3 B018版本元数据校验失败 |
| [7979](https://gitcode.com/opengauss/openGauss-server/issues/7979) | openGauss-server | [Bug]: 运行tpcc期间多次执行数据库重启，第8次stop失败，start也不能拉起 |
| [7973](https://gitcode.com/opengauss/openGauss-server/issues/7973) | openGauss-server | [Bug]: 【长稳】【传统】安装集群后设置极致RTO参数，重启集群状态异常 |
| [7971](https://gitcode.com/opengauss/openGauss-server/issues/7971) | openGauss-server | [Bug]: 【升级】【传统】从5.0.0升级到7.0.0RC3最新版本，升级报错 |
| [7958](https://gitcode.com/opengauss/openGauss-server/issues/7958) | openGauss-server | [Bug]: opengauss7.0RC2版本行列融合HTAP表tpch压测多并行下库宕机【M】 |
| [7941](https://gitcode.com/opengauss/openGauss-server/issues/7941) | openGauss-server | [Bug]: 开线程池enable_thread_pool=on，创建B库指定tablespace数据库coredump【NJYJ】 |
| [7920](https://gitcode.com/opengauss/openGauss-server/issues/7920) | openGauss-server | [Bug]: 【测试类型：功能测试】【测试版本：7.0.0-RC3】diskann PQ 包和opengauss转测包配合，重启集群gaussdb发生core |
| [7915](https://gitcode.com/opengauss/openGauss-server/issues/7915) | openGauss-server | [Bug]: root用户在本地模式下执行gs_check命令，提示name 'CmdUtil' is not defined |
| [7912](https://gitcode.com/opengauss/openGauss-server/issues/7912) | openGauss-server | [Bug]: [neon branching]Yat用例连跑SUBXACT_ROLLBACK用例，计算节点crash，并且计算节点重启失败 |
| [7908](https://gitcode.com/opengauss/openGauss-server/issues/7908) | openGauss-server | [Bug]: online ddl修改压缩属性数据库无法连接 |
| [7902](https://gitcode.com/opengauss/openGauss-server/issues/7902) | openGauss-server | [Bug]: 【升级】从5.0.0升级到7.0.0RC3B015报错，升级失败 |
| [7900](https://gitcode.com/opengauss/openGauss-server/issues/7900) | openGauss-server | [Bug]: ADIO开启时删除数据后Vacuum Full之后\d+ table_name数据库core |
| [7883](https://gitcode.com/opengauss/openGauss-server/issues/7883) | openGauss-server | [Bug]: 【资源池化】长稳3*24小时数据库宕机 |
| [7872](https://gitcode.com/opengauss/openGauss-server/issues/7872) | openGauss-server | [Bug]: 【测试类型：性能测试】【测试版本：7.0.0-RC3】【资源池化】RTO性能不满足出口指标 |
| [7871](https://gitcode.com/opengauss/openGauss-server/issues/7871) | openGauss-server | [Bug]: [neon branching特性]gms_utility.analyze_schema功能，ESTIMATE_ROWS值过大，计算节点crash |
| [7870](https://gitcode.com/opengauss/openGauss-server/issues/7870) | openGauss-server | [Bug]: [neon branching特性]回收站功能启用之后，执行sql ，计算节点crash. |
| [7866](https://gitcode.com/opengauss/openGauss-server/issues/7866) | openGauss-server | [Bug]: [neon branching特性] 创建增量物化视图、普通物化视图，计算节点crash |
| [7845](https://gitcode.com/opengauss/openGauss-server/issues/7845) | openGauss-server | [Bug]: neon branching创建段页式表时，计算节点crash |
| [7837](https://gitcode.com/opengauss/openGauss-server/issues/7837) | openGauss-server | [Bug]: 【升级】从7.0.0RC2升级到7.0.0RC3最新转测版本，升级失败 |
| [7823](https://gitcode.com/opengauss/openGauss-server/issues/7823) | openGauss-server | [Bug]: 【升级】从低版本3.0.5升级到当前7.0.0RC3B013版本，升级报错 |
| [7818](https://gitcode.com/opengauss/openGauss-server/issues/7818) | openGauss-server | [Bug]: openGauss 数据库运行一段时间后，占用服务器内存会随运行时间持续增长 |
| [7795](https://gitcode.com/opengauss/openGauss-server/issues/7795) | openGauss-server | [Bug]: 连接失败报数据库不存在，但是实际数据库存在 |
| [7794](https://gitcode.com/opengauss/openGauss-server/issues/7794) | openGauss-server | [Bug]: ADIO开启时删除数据后Vacuum Full导致数据库CORE |
| [7786](https://gitcode.com/opengauss/openGauss-server/issues/7786) | openGauss-server | [Bug]: 版本安装包不符合安全编译选项发布标准 |
| [7731](https://gitcode.com/opengauss/openGauss-server/issues/7731) | openGauss-server | [Bug]: [资源池化]稳定性测试，执行6*24小时+，主节点dssserver断连，无core生成 |
| [7638](https://gitcode.com/opengauss/openGauss-server/issues/7638) | openGauss-server | [Bug]: 数据库core文件报错：Cannot access memory at address 【M】 |
| [7577](https://gitcode.com/opengauss/openGauss-server/issues/7577) | openGauss-server | [Bug]: 【测试类型：功能测试】【资源池化】自动化，执行CI过程中踢掉备机，重新加入备机后，集群卡住 |
| [1232](https://gitcode.com/opengauss/openGauss-workbench/issues/1232) | openGauss-workbench | [Bug]: datakit迁移时不选择表，任务无法启动 |
| [1226](https://gitcode.com/opengauss/openGauss-workbench/issues/1226) | openGauss-workbench | [Bug]: DataKit MySQL全流程迁移中，指定表迁移功能无效 |
| [1165](https://gitcode.com/opengauss/openGauss-workbench/issues/1165) | openGauss-workbench | [Bug]: pg迁移分区表时报错 |

## 继承特性

- **基础功能**：[SQL标准语法](../sql_reference/dcl_grammer_overview.md)、[数据类型](../sql_reference/numeral_type.md)（包括[JSON和JSONB](../sql_reference/json_jsonb_type.md)）、表（包括临时表、全局临时表、外部表）、[视图](../brief_tutorial/views.md)、[物化视图](../brief_tutorial/materialized_views.md)、外键、[索引](../brief_tutorial/indexes.md)（包括btree索引、Gin索引、hash索引）、[序列](../database_administration_guide/creating_and_managing_sequences.md)、函数、[触发器](../brief_tutorial/trigger.md)、[聚合函数](../sql_reference/alter_aggregate.md)median、ROWNUM、UPSERT、GB18030字符集。

- **SQL引擎增强**：[范围分区、LIST分区、HASH分区](../sql_reference/partitioned_table.md#范围分区表的分类)、基于范围分区的自动扩展分区、全局分区索引、行存转向量化、[自治事务](../characteristic_description/autonomous_transaction.md)、[并行查询](../characteristic_description/smp_for_parallel_execution.md)、[Global Syscache](../characteristic_description/global_syscache.md)、[IPv6协议](../sql_reference/network_address_type.md)、[事件触发器](../brief_tutorial/event_trigger.md)。支持[继承表](../sql_reference/create_table_inherits.md)。支持PIPELINED管道函数，函数可以返回行集合。SELECT语句支持通过[TABLESAMPLE子句](../sql_reference/SELECT.md#参数说明)实现对指定子分区、视图、物化视图进行数据采样。支持通过ALTER TRIGGER的方式禁用/启动单个触发器。SELECT语句支持通过ROTATE和NOT ROTATE子句进行行列转换。支持通过SQL启用禁用table约束。数字支持以f/d结尾作为浮点数使用。支持 ‘NaN’ 和 ‘infinity’ 表示浮点数特殊值。支持IS [NOT] INFINITE和IS [NOT] NAN条件表达式。numeric数据类型精度设置允许precision大于scale，允许scale为负数。支持CROSS/OUTER APPLY JOIN语法。支持修改/删除视图引用的对象（如表、列、函数、视图等）后，将视图置为无效状态。

- **存储引擎增强**：延迟备库、[备机支持逻辑复制](../characteristic_description/logical_replication.md)、[并行逻辑解码](../characteristic_description/parallel_logical_decoding.md)、[灰度升级](../characteristic_description/gray_upgrade.md)、指定节点升级、Hash索引、列存表主键唯一约束、[发布订阅](../characteristic_description/publication_subscription.md)、[NUMA-aware高性能优化](../database_administration_guide/numa_awareness_allocation_and_affinity.md)等、oGEngine原位更新存储引擎增强。

- **存储过程**：[存储过程](../sql_reference/stored_procedure_20.md)、[存储过程内commit/rollback](../sql_reference/transaction_management.md)、参数的存储过程/函数调用省略()、[存储过程调试](../characteristic_description/stored_procedure_debugging.md)。支持[存储过程覆盖率测试](../sql_reference/proc_coverage_generate_stored_procedure_coverage_report.md)。[游标](../sql_reference/cursor_1.md)支持嵌套定义。支持游标作为插入值。通过TYPE语法定义动态游标 REF CURSOR 时，支持通过RETURN指定游标返回的数据类型。[游标参数支持设置默认值](../sql_reference/explicit_cursor.md)。支持array和record嵌套。支持使用[ROWTYPE给游标赋值](../sql_reference/define_variables.md)。

- **安全功能**：[认证](../database_administration_guide/configuring_client_access_authentication.md)、[权限管理](../database_om_guide/secharden/permission_management.md)、网络通信安全、[数据库审计](../characteristic_description/database_audit.md)、国密算法、[内置角色](../database_administration_guide/roles.md)和权限管理、ANY权限管理、[用户级别审计](../characteristic_description/database_audit.md)等。支持第三方密钥管理服务。在鲲鹏服务器上，借助KAE组件，提升国密SM4加解密算法性能5%。支持[对服务启停操作进行审计](../characteristic_description/database_audit.md)、[对数据库备份恢复操作进行审计](../characteristic_description/database_audit.md)。支持[对审计日志进行sha256完整性校验](../characteristic_description/database_audit.md)。发布安全配置基线以及安全配置巡检工具。

- **高可用**：主备双机、级联备机、[逻辑复制](../characteristic_description/logical_replication.md)、[极致RTO](../characteristic_description/ultimate_rto.md)、备机扩容。并行回放性能优化，TPCC场景备机redo性能提升50%~100%。极致RTO支持备机可读，维持一主一备70W tpmC时，RTO<10s。[主备高可用能力增强](../characteristic_description/enhanced_active_and_standby_ha.md)。支持[异步备升主数据找回能力](../characteristic_description/asynchronous_backup_and_recovery_capability_for_master_data.md)。[逻辑复制增强](../characteristic_description/logical_replication.md)。walwriteraux线程支持预分配XLog文件。逻辑复制增强，新增支持Alter/Truncate/Rename 表和分区表DDL语法。

- **高性能**：支持[shared buffer按大页内存分配](../database_reference/huge_page_memory.md)，实现4k pagesize环境中性能提升5%。内核GCC版本升级到GCC 10.3，基于反馈优化，TPCC性能提升6%。SCRLock提高分布式锁性能。优化主备锁机制控制粒度和有序队列加锁逻辑，提升一主一同步备场景下TPCC性能10%。函数/PACKAGE支持指定并行相关参数，[NO SCROLL游标](../sql_reference/CURSOR.md)和作为并行函数入参的游标表达式支持并行执行。使用用户态网络优化北向网络，单机TPCC性能提升15%。子事务场景性能提升，Multixact相关的SLRU buffer大小支持可配置，同时通过SLRU分bank优化，提升大量子事务场景下的性能100%+。支持[自动参数化](../characteristic_description/automatic_parameterization.md)，在需要反复执行相似/相同的SQL简单语句的情境下（仅支持IUD），通过复用执行计划缓存以减少SQL语句的执行时间。

- **备份恢复**：[全量物理备份](../characteristic_description/physical_backup_and_restoration.md)、[逻辑备份](../database_om_guide/logical_backup_and_restoration.md)、备机备份、[增量备份和恢复](../characteristic_description/physical_backup_and_restoration.md)、恢复到指定时间点(PITR)。

- **运维能力**：[WDR诊断报告](../characteristic_description/workload_diagnosis_report_wdr.md)新增数据库运行指标、备机[慢SQL诊断视图](../characteristic_description/root_cause_analysis_for_slow_sql_statements.md)、[unique sql自动淘汰](../database_reference/query_62.md#enable_auto_clean_unique_sql)。慢SQL统计时间空洞补齐，支持细粒度阶段统计。支持switchover超时打印节点堆栈。增加对WalSender、WalRecv和WalRecvWriter线程的统计信息记录。新增GUC参数支持强制回收主机XLog日志。支持在主机宕机的情况下，在备机上获取当前事务日志的同步位置。支持[全链路跟踪能力](../characteristic_description/full_link_tracking.md)，实现追踪并记录jdbc查询接口执行sql的端到端网络耗时，并记录在数据库[dbe_perf.statement](../sql_reference/dbe_perf_schema.md)视图、[statement_history](../database_reference/STATEMENT_HISTORY.md)表中。慢SQL统计默认开启计划统计，降低性能损耗。支持通过内置函数gs_get_hba_conf()获取pg_hba.conf文件中的内容。gs_ctl日志文件支持按固定周期轮转，限制最大日志磁盘空间占用。gs_probackup工具支持将备份的数据和日志直接传输到远端兼容S3协议的对象存储中。

- **JDBC**：支持[JDBC客户端负载均衡及读写分离](../characteristic_description/jdbc_client_load_balancing_and_read_write_isolation.md)、主节点心跳检测。

- **工具链**：[开发工具DataStudio](../characteristic_description/opengauss_client_tool_datastudio.md)、MySQL全量迁移工具gs_mysync、增量和反向迁移工具gs_replicate、数据校验工具gs_datacheck、[数据全生命周期生产工具DataKit](../characteristic_description/tool_chain_datakit.md)。支持升级场景数据字典校验工具。OM工具解耦对OS版本依赖。支持实例监控插件和智能诊断插件，实现SQL、会话、实例和集群指标监控，支持历史数据分析与SQL诊断、告警监控和告警通知，提升智能运维能力。数据库开发插件增强，支持表/视图/用户角色/函数/存储过程等对象管理。MySQL全量迁移：支持直接读取csv文件用于数据迁移，索引并行创建，解除跨平台的依赖，可靠性增强。MySQL增量&反向迁移：支持断点续传，支持迁移进度展示，反向迁移支持全量迁移。数据校验：支持按表分片校验，增强和全量迁移流程的配合，提升校验性能到150MB/s。支持 Oracle 全量、增量、反向迁移，支持数据校验。DataKit集成兼容性评估工具、支持集群拓扑显示、实例监控插件增加新指标、优化采集架构、智能诊断增加诊断经验，优化SQL诊断任务、日志检索插件增加CM日志采集，支持lucene语法搜索、告警监控插件增加内置规则、支持告警收敛、优化页面、支持组件安装路径可选、支持智能参数调优插件。支持流量录制回放工具，支持连接源端数据库（MySQL），采集SQL，并且向 openGauss 数据库进行 SQL 回放&压测。支持解析MySQL数据库的 General Log表或文件、支持Attach到JAVA应用程序、支持截取和解析MySQL网络通讯包等方式采集SQL。支持多次回放并比较结果和性能。Portal支持依赖包离线安装。迁移插件支持连接到数据库集群。支持按文件导入方式批量添加服务器和批量添加用户。支持多数据库集群并行安装。支持SSO与DevKit统一登录，实现同一用户可以登录到DevKit和DataKit。

- **中间件**：[shardingSphere](../characteristic_description/distributed_database_capability.md)、openLookeng。

- **周边生态**：支持openEuler、CentOS、FusionOS系统；[绝大部分MySQL语法和协议兼容](../extension_reference/dolphin.md)。

- **企业级特性**：支持修改表压缩属性。[子事务并发回滚流程优化](../characteristic_description/optimization_of_subtransaction_concurrent_rollback_process.md)，减少锁争抢，提升并发执行效率。支持GB18030-2022标准。[存储过程支持嵌套调试](../characteristic_description/stored_procedure_debugging.md)，支持匿名块调试。[发布订阅](../database_om_guide/subscriptions.md)支持用户自定义冲突解决方案。支持多语言日志。支持限制内核日志最大磁盘占用空间。支持龙芯平台编译。

- **其他**：cmake脚本编译、容器化部署、kubernetes。

## CVE漏洞

本版本是2026年3月发布的创新版本，版本涉及的CVE漏洞可通过[CVE列表](https://opengauss.org/zh/cve)查询。

## 性能测试报告

见[openGauss 7.0.0-RC3 版本集成测试报告](https://gitcode.com/opengauss/QA/blob/master/Test_Result/openGauss_7.0.0_RC3/%E7%89%88%E6%9C%AC%E9%9B%86%E6%88%90%E6%B5%8B%E8%AF%95%E6%8A%A5%E5%91%8A/openGauss%207.0.0RC3%E7%89%88%E6%9C%AC%E6%B5%8B%E8%AF%95%E6%8A%A5%E5%91%8A.md#423-%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95)

## 版本使用注意事项

- 版本技术规格可以参照《关于openGauss》中的[技术指标](../about_opengauss/technical_indicators.md)。
- openGauss目前最多支持8备。轻量版没有CM管理，在使用一主多备时，如果主机故障，需要选择一个日志多的备机升主，避免其他备机发生重建。
- 轻量版推荐使用一主两备部署模式，保证数据库的可靠性和可用性。
- 轻量版不支持两地三中心部署。
- 轻量版不支持资源池化架构。

## 源代码

openGauss轻量版主要包含16个代码仓，引用开源软件的补丁代码仓、JDBC驱动代码仓、ODBC驱动代码仓、数据库服务器代码仓、自治运维平台DBMind代码仓、数据库OM管理工具、数据库CM管理工具代码仓、数据库DCF代码仓、数据库DCC代码仓、数据库插件代码仓、DataKit代码仓、MySQL到openGauss全量迁移工具代码仓、MySQL增量迁移代码仓、数据校验代码仓、数据库prometheus-exporter代码仓、监控插件生成工具代码仓和文档仓库：

- 开源软件代码仓：[https://gitcode.com/opengauss/openGauss-third\_party](https://gitcode.com/opengauss/openGauss-third_party)
- JDBC驱动代码仓：[https://gitcode.com/opengauss/openGauss-connector-jdbc](https://gitcode.com/opengauss/openGauss-connector-jdbc)
- ODBC驱动代码仓：[https://gitcode.com/opengauss/openGauss-connector-odbc](https://gitcode.com/opengauss/openGauss-connector-odbc)
- 数据库服务器代码仓：[https://gitcode.com/opengauss/openGauss-server](https://gitcode.com/opengauss/openGauss-server)
- 自治运维平台DBMind代码仓：[https://gitcode.com/opengauss/openGauss-DBMind](https://gitcode.com/opengauss/openGauss-DBMind)
- 数据库OM工具代码仓：[https://gitcode.com/opengauss/openGauss-OM](https://gitcode.com/opengauss/openGauss-OM)
- 数据库CM\(Cluster Manager\)工具代码仓：[https://gitcode.com/opengauss/CM](https://gitcode.com/opengauss/CM)
- 数据库DCF\(Distributed Consensus Framework\)代码仓：[https://gitcode.com/opengauss/DCF](https://gitcode.com/opengauss/DCF)
- 数据库DCC\(Distributed Configuration Center\)代码仓：[https://gitcode.com/opengauss/DCC](https://gitcode.com/opengauss/DCC)
- 数据库插件代码仓：[https://gitcode.com/opengauss/Plugin](https://gitcode.com/opengauss/Plugin)
- DataKit代码仓：[https://gitcode.com/opengauss/openGauss-workbench](https://gitcode.com/opengauss/openGauss-workbench)
- MySQL到openGauss全量迁移工具代码仓：[https://gitcode.com/opengauss/openGauss-tools-chameleon](https://gitcode.com/opengauss/openGauss-tools-chameleon)
- MySQL增量/反向迁移工具代码仓：[https://gitcode.com/opengauss/debezium](https://gitcode.com/opengauss/debezium)
- 数据校验工具代码仓：[https://gitcode.com/opengauss/openGauss-tools-datachecker-performance](https://gitcode.com/opengauss/openGauss-tools-datachecker-performance)
- 数据库prometheus-exporter代码仓：[https://gitcode.com/opengauss/openGauss-prometheus-exporter](https://gitcode.com/opengauss/openGauss-prometheus-exporter)
- 数据库监控插件生成工具代码仓：[https://gitcode.com/opengauss/openGauss-tools-monitor](https://gitcode.com/opengauss/openGauss-tools-monitor)
- 数据库文档仓库：[https://gitcode.com/opengauss/docs](https://gitcode.com/opengauss/docs)

## 用户须知

openGauss是一款极致性能、安全、可靠的多模开源数据库。采用协议“木兰宽松许可证”（Mulan PSL V2），用户可以自由复制、使用、修改、分发，不论修改与否。

openGauss的版本号遵循 X.Y.0-RCx 的格式，旨在区分不同类型的版本更新。具体而言：

 + LTS版本（X.0.0）：每两年发布一次，标志着长期稳定支持的版本，适合大规模部署与生产环境使用。社区承诺为每个LTS版本提供为期三年的维护支持，确保其持续稳定与安全。
 + 创新版本（X.Y.0-RCx）：每半年推出，旨在快速迭代，提供最新的功能与技术预览。这些版本主要用于用户测试与创新合作，社区将提供为期半年的维护支持，鼓励探索与反馈。
 + 补丁版本（X.Y.0）：当遇到重大问题时，会适时发布，旨在迅速修复关键性错误，保障系统稳定运行。

## 致谢

我们衷心地感谢参与和协助 openGauss 7.0.0-RC3版本发布的项目的所有开发者和伙伴，包括华为、北京海量数据技术股份有限公司、天津神舟通用数据技术有限公司、天津南大通用数据技术股份有限公司、粤港澳大湾区（广东）国创中心、中移信息技术有限公司、邮储银行、广东跃昉科技有限公司、云和恩墨（北京）信息技术有限公司、中科院软件所、西北工业大学、民生银行、国能信息、海康威视、浙江大华等组织单位。是你们的辛勤付出使得版本顺利发布，也为openGauss更好地发展提供可能。

![openGauss开发者云图](./opengauss_logo.png)
