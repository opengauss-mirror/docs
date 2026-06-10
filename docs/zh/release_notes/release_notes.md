# 发行说明

## 版本介绍

openGauss 7.0.0-RC3是openGauss 2026年3月发布的创新版本，该版本生命周期为0.5年。当前文档说明范围仅限企业版。

7.0.0-RC3与之前的版本特性功能保持兼容，主要功能如下：

- 标准SQL支持

    支持标准的SQL92/SQL99/SQL2003/SQL2011规范，支持GBK、UTF-8和GB18030字符集，支持SQL标准函数与分析函数，支持存储过程。

- 数据库存储管理功能

    支持表空间，可以把不同表规划到不同的存储位置；企业版支持Ustore、Astore、MOT等多种存储引擎。

- 提供主备双机

    事务支持ACID特性、单节点故障恢复、双机数据同步、双机故障切换等；企业版还提供了CM工具，支持数据库实例状态查询、主备切换、日志管理、VIP管理、集群状态查询和推送等。

- 资源池化

    支持基于共享存储、共享内存的资源池化架构，实现备机读实时一致性。

- 应用程序接口

    支持标准JDBC 4.0特性、ODBC 3.5特性，支持Python、Go连接驱动，支持MySQL协议兼容。

- 管理工具

    提供安装部署工具、实例启停工具、备份恢复工具、扩缩容工具、升级工具，支持数据全生命周期生产工具DataKit，支持MySQL和Oracle全量/增量/反向迁移工具和数据校验工具。

- 安全管理

    支持SSL安全网络连接、用户权限管理、密码管理、安全审计、细粒度ANY权限控制、TLCP协议等功能，保证数据库在管理层、应用层、系统层和网络层的安全性。

- AI智能化

    企业版支持参数自调优、慢SQL发现、单query索引推荐、虚拟索引、workload索引推荐、数据库指标采集、预测与异常监控等功能；库内AI原生引擎支持10+高性能机器学习算法。

## 新增特性

此处说明的是openGauss 7.0.0-RC3版本，在7.0.0-RC2版本功能的基础上，新增如下特性：

- **高性能**：[参数化路径](../characteristic_description/automatic_parameterization.md)功能支持简单SELECT语句，并将相关内存统一到plan cache，支持global plan cache。[#8777](https://gitcode.com/opengauss/openGauss-server/pull/8777) [@shijuzheng1997](https://gitcode.com/shijuzheng1997)

  - 支持GPC（Global Plan Cache全局计划缓存），开启GPC后使用参数化功能的情况下，被参数化的语句也会被缓存到GPC（执行计划使用Generic Plan的情形下）。可以通过视图`DBE_PERF.GLOBAL_PLANCACHE_STATUS`查询。

- **高性能**：支持[ADIO](../database_reference/asynchronous_i_o_operations.md)。[#8719](https://gitcode.com/opengauss/openGauss-server/pull/8719) [@zcj112](https://gitcode.com/zcj112)

  - 行存表的文件访问支持通过直接IO，不经过操作系统页面缓存的方式进行读取。对于页面刷盘以及VACUUM FULL操作，将采用异步IO的方式进行。

- **高性能**：支持[DPA哈希聚合加速](../characteristic_description/dpa_hash_agg_acceleration.md)，提升哈希算子性能。[#8746](https://gitcode.com/opengauss/openGauss-server/pull/8746) [#8750](https://gitcode.com/opengauss/openGauss-server/pull/8750) [#8754](https://gitcode.com/opengauss/openGauss-server/pull/8754) [@Eurekaxun](https://gitcode.com/Eurekaxun)

  - DPA（Data Processing Accelerator）哈希聚合加速是openGauss基于UADK框架实现的硬件加速特性，将向量化哈希聚合操作卸载到硬件加速器上执行，显著提升聚合查询的执行效率。

- **高可用**：支持[在线DDL](../database_administration_guide/online_ddl.md)，使得DDL过程中持有高级别锁的时间大为减少，减少对并发DML的阻塞时间。[#8748](https://gitcode.com/opengauss/openGauss-server/pull/8748) [#8771](https://gitcode.com/opengauss/openGauss-server/pull/8771) [#8782](https://gitcode.com/opengauss/openGauss-server/pull/8782) [#8822](https://gitcode.com/opengauss/openGauss-server/pull/8822) [#8958](https://gitcode.com/opengauss/openGauss-server/pull/8958) [#8971](https://gitcode.com/opengauss/openGauss-server/pull/8971) [@congzhou2603](https://gitcode.com/congzhou2603) [@luodongxu](https://gitcode.com/luodongxu)

  - 在线DDL特性涉及传统主备中Astore、段页式支持修改列数据类型、修改压缩属性、添加约束(包括范围约束和非空约束)、VACUUM FULL、CLUSTER、分区表分裂合并分区，并新增关键字CONCURRENTLY用于触发在线DDL功能。

- **高安全**：[黑匣子](../characteristic_description/advanced_features/oGRecorder.md)特性增强。

  - 支持黑匣子主备进程间的参数同步。[#78](https://gitcode.com/opengauss/oGRecorder/pull/78) [@Miyano](https://gitcode.com/Miyano)
  - 支持证书/密钥的加密生成与节点间同步，实现多节点共享统一证书体系，提升证书管理的一致性与安全性。[#86](https://gitcode.com/opengauss/oGRecorder/pull/86) [@liuzhanfeng](https://gitcode.com/liuzhanfeng)
  - 提供基于REST API的远程管理能力，支持查询数据保险柜集群信息并执行集群状态控制操作。[#79](https://gitcode.com/opengauss/oGRecorder/pull/79) [@liuzhanfeng](https://gitcode.com/liuzhanfeng)
  - 支持在线滚动升级及离线升级。[#83](https://gitcode.com/opengauss/oGRecorder/pull/83) [@zkcarl](https://gitcode.com/zkcarl)

- **高智能**： 支持一站式的 AI 能力集成方案 [oGAI](../characteristic_description/ogai.md)。[#8671](https://gitcode.com/opengauss/openGauss-server/pull/8671) [#8672](https://gitcode.com/opengauss/openGauss-server/pull/8672) [#8673](https://gitcode.com/opengauss/openGauss-server/pull/8673) [#8689](https://gitcode.com/opengauss/openGauss-server/pull/8689) [#8690](https://gitcode.com/opengauss/openGauss-server/pull/8690) [#8696](https://gitcode.com/opengauss/openGauss-server/pull/8696) [#8715](https://gitcode.com/opengauss/openGauss-server/pull/8715) [@Eurekaxun](https://gitcode.com/Eurekaxun) [@Vincent__Sun](https://gitcode.com/Vincent__Sun)

  - OGAI（openGauss AI）是 openGauss 数据库的智能向量化框架插件，提供了一站式的 AI 能力集成方案。通过 OGAI，用户可以在数据库内部直接调用AI模型进行文本向量化、文本生成、文档重排序等操作，无需依赖外部应用层实现，大幅简化了 RAG（检索增强生成）应用的开发流程。

- **高智能**：支持[RabitQ](../datavec/RabitQ.md)量化索引算法。[#8642](https://gitcode.com/opengauss/openGauss-server/pull/8642) [#8645](https://gitcode.com/opengauss/openGauss-server/pull/8645) [#8650](https://gitcode.com/opengauss/openGauss-server/pull/8650) [#8655](https://gitcode.com/opengauss/openGauss-server/pull/8655) [#8658](https://gitcode.com/opengauss/openGauss-server/pull/8658) [@wangjingyuan8](https://gitcode.com/wangjingyuan8) [@weixin_44204324](https://gitcode.com/weixin_44204324)

  - RabitQ是一种具有理论保证的最先进的二进制量化方法，与HNSW、IVFFLAT结合使用时，可以确保向量数据在高度压缩的表示下仍能保持搜索的可靠性。

- **高智能**：[MCP](../datavec/mcp.md)适配openGauss。[#4](https://gitcode.com/opengauss/mcp-opengauss/pull/4) [@weixin_44204324](https://gitcode.com/weixin_44204324)

  - MCP是为LLM和Agent系统设计的标准化交互框架，使LLM可以与外部数据库、API和工具进行高效交互。MCP适配openGauss数据库让AI智能体能够通过标准化协议安全、高效地直接操作企业级国产数据库，将结构化数据无缝融入AI工作流，大幅降低AI应用与复杂数据系统集成的开发门槛。

- **内核工具**：支持[主备数据校验工具](../tool_and_commandreference/gs_checkps.md)。[#1212](https://gitcode.com/opengauss/openGauss-OM/pull/1212) [@yc-jianda](https://gitcode.com/yc-jianda)

  - 以可视化HTML报表展示各备节点数据文件md5值与主节点不一致的文件，方便直观对比MD5值不一致的数据文件。

- **企业级能力**

  - 支持[XMLTABLE](../sql_reference/xmltable.md)。用于将 XML 文档按指定行路径展开为关系表结果，并通过 `COLUMNS` 子句将节点、属性或表达式映射为输出列。该语法在 `FROM` 子句中作为表函数使用。[#8857](https://gitcode.com/opengauss/openGauss-server/pull/8857) [@lianshanzhou](https://gitcode.com/lianshanzhou)
  - JSONB功能增强，支持[jsonb_path_exists](../sql_reference/json_jsonb_functions_and_operators.md)函数，检查指定JSONB值的指定JSON路径下是否有任何项。支持[jsonb_path_query_first](../sql_reference/json_jsonb_types.md#jsonpath类型)函数，通过JSONPATH在JSON数据中提取特定数据的表达式。[#8869](https://gitcode.com/opengauss/openGauss-server/pull/8869) [@yelingzhi](https://gitcode.com/Solataire)
  - [段页式表支持空间回收](../characteristic_description/segment_space_shrink.md)。在DELETE和UPDATE段页式表后，通过系统函数回收空间，使表文件占用的存储资源更有效地释放，不影响用户业务的正常运行。[#8535](https://gitcode.com/opengauss/openGauss-server/pull/8535) [@Lamaric](https://gitcode.com/Lamaric)
  - 支持[wal2json插件](../extension_reference/wal2json.md)。用于将WAL（Write-Ahead Log）中的数据变更转换为JSON格式输出。[#8559](https://gitcode.com/opengauss/openGauss-server/pull/8559) [@Rade_he](https://gitcode.com/Rade_he)

- **DataKit**：迁移工具增强

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

- openGauss没有文件权限，慢盘监控功能。在文件权限异常时，数据库会退出，日志中会有相应打印信息。在慢盘时，数据库操作会变慢。
- MOT（Memory Optimized Tables）与增量检查点特性不兼容，如果使用MOT，需要关闭增量检查点功能。
- LLVM对ARM架构支持不友好，在导入MOT的TPCC时候报LLVM相关错误。可以通过不启用JIT规避，使用enable\_mot\_codegen开关控制。对于不启用JIT对TPCC测试产生的性能影响，可以通过force\_mot\_pseudo\_codegen= true配置来降低性能影响。

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

## 继承功能

- **基础功能**：[SQL标准语法](../sql_reference/opengauss_sql.md)、[数据类型](../sql_reference/numeric_types.md)（包括[JSON和JSONB](../sql_reference/json_jsonb_types.md)）、表（包括临时表、全局临时表、外部表）、[视图](../sql_reference/brief_tutorial/view.md)、[物化视图](../sql_reference/materialized_view.md)、外键、[索引](../sql_reference/indexes.md)（包括btree索引、Gin索引、hash索引）、[序列](../database_administration_guide/creating_and_managing_sequences.md)、函数、[触发器](../sql_reference/triggers.md)、[聚合函数](../sql_reference/aggregate_functions.md)median、ROWNUM、UPSERT、GB18030字符集。

- **SQL引擎增强**：[范围分区、LIST分区、HASH分区](../sql_reference/partitioned_tables.md#范围分区表的分类)、基于范围分区的自动扩展分区、全局分区索引、行存转向量化、[自治事务](../characteristic_description/autonomous_transaction.md)、[并行查询](../characteristic_description/smp_for_parallel_execution.md)、[Global Syscache](../characteristic_description/global_syscache.md)、Global PlanCache、[IPv6协议](../sql_reference/network_address_types.md)、[postgis插件](../extension_reference/PostGIS.html)、[事件触发器](../characteristic_description/event_trigger.md)。支持[继承表](../sql_reference/create_table_inherits.md)。支持PIPELINED管道函数，函数可以返回行集合。SELECT语句支持通过[TABLESAMPLE子句](../sql_reference/select.md#参数说明)实现对指定子分区、视图、物化视图进行数据采样。支持通过ALTER TRIGGER的方式禁用/启动单个触发器。SELECT语句支持通过ROTATE和NOT ROTATE子句进行行列转换。支持通过SQL启用禁用table约束。数字支持以f/d结尾作为浮点数使用。支持 ‘NaN’ 和 ‘infinity’ 表示浮点数特殊值。支持IS [NOT] INFINITE和IS [NOT] NAN条件表达式。numeric数据类型精度设置允许precision大于scale，允许scale为负数。支持CROSS/OUTER APPLY JOIN语法。支持修改/删除视图引用的对象（如表、列、函数、视图等）后，将视图置为无效状态。

- **存储引擎增强**：延迟备库、[备机支持逻辑复制](../characteristic_description/logical_replication.md)、[并行逻辑解码](../characteristic_description/parallel_logical_decoding.md)、[灰度升级](../characteristic_description/gray_upgrade.md)、[指定节点升级](../characteristic_description/rolling_upgrade.md)、Hash索引、列存表主键唯一约束、[Ustore存储引擎](../database_administration_guide/in_place_update_storage_engine.md)、[段页式存储](../database_administration_guide/storage_structure.md#段页式存储结构)、[发布订阅](../characteristic_description/publication_subscription.md)、行存表压缩、[MOT内存表](../database_administration_guide/mot_memory_and_storage_planning.md)、[NUMA-aware高性能优化](../database_administration_guide/numa_awareness_allocation_and_affinity.md)等。

- **资源池化**：基于存储池化、内存池化和计算池化实现的 [openGauss 三层池化架构](../resource_pooling/resource_pooling_overview.md)。[优化备机可见性判断逻辑、优化主机推进oldestxmin逻辑、备机支持缓存快照信息](../performance_tuning_guide/resource_pooling_performance_optimization.md)，实现sysbench场景2节点性能6W tps，线性度1.6倍，相比优化前提升50%。支持[备机事务内写语句透明转发到主机执行](../performance_tuning_guide/transparent_forwarding_within_backup_machine_affairs.md)。[DSS功能增强](../resource_pooling/feature_enhancement.md)，支持NoF/NoF+协议；支持线程池模式，支持大并发处理；支持升级模式；支持黑匣子诊断。对接分布式存储，实现[数据库算子卸载](../characteristic_description/resource_pooling_operator_offloading.md)，加速TPCH性能提升40%。支持[SPQ多机并行查询框架](../extension_reference/spqplugin.md)。[DMS](../resource_pooling/dms_resource_statistics_function.md)、CBB新增等待事件统计。支持在50W TPMC负载下RTO<10s。支持基于[Dorado存储同步复制的主备双集群容灾](../resource_pooling/resource_pooling_active_standby_dual_cluster_dr.md)。支持[基于流复制的资源池化主备双集群容灾](../resource_pooling/resource_pooling_active_standby_dual_cluster_dr.md)。按需回放redo阶段支持DDL执行。支持[离线对资源池化备机进行扩缩容操作](../tool_and_commandreference/gs_expansion.md)。支持[虚拟机方式部署](../database_administration_guide/resource_pooling_om_installation_and_deployment.md#虚拟环境)。支持xlog日志合一。实时构建支持流控。支持[主备参数同步](../resource_pooling/resource_pooling_support_for_primary_and_backup_parameter_synchronization.md)。支持页式存储。支持双集群缩容至单集群。支持[归档](../resource_pooling/resource_pooling_xlog_support_archive.md)。

- **存储过程**：[存储过程](../sql_reference/stored_procedure_sql_reference.md)、[存储过程内commit/rollback](../sql_reference/transaction_management.md)、[存储过程调试](../characteristic_description/stored_procedure_debugging.md)。支持[存储过程覆盖率测试](../sql_reference/proc_coverage_generate_stored_procedure_coverage_report.md)。[游标](../sql_reference/cursors.md)支持嵌套定义。支持游标作为插入值。通过TYPE语法定义动态游标 REF CURSOR 时，支持通过RETURN指定游标返回的数据类型。[游标参数支持设置默认值](../sql_reference/explicit_cursor.md)。支持[array和record嵌套](../sql_reference/arrays.md)。支持使用[ROWTYPE给游标赋值](../sql_reference/define_variables.md)。

- **安全功能**：[认证](../database_administration_guide/configuring_client_access_authentication.md)、[权限管理](../database_om_guide/secharden/permission_management.md)、网络通信安全、[数据库审计](../characteristic_description/database_audit.md)、[全密态数据库](../characteristic_description/advanced_features/full_encrypted_database.md)、[动态数据脱敏](../characteristic_description/dynamic_data_masking.md)、国密算法、[防篡改账本数据库](../characteristic_description/ledger_database_mechanism.md)、[内置角色](../database_administration_guide/roles.md)和权限管理、[透明加密](../characteristic_description/transparent_data_encryption.md)、ANY权限管理、[用户级别审计](../characteristic_description/database_audit.md)等。支持第三方密钥管理服务。在鲲鹏服务器上，借助KAE组件，提升国密SM4加解密算法性能5%。支持[对服务启停操作进行审计](../characteristic_description/database_audit.md)、[对数据库备份恢复操作进行审计](../characteristic_description/database_audit.md)。支持[对审计日志进行sha256完整性校验](../characteristic_description/database_audit.md)。发布安全配置基线以及安全配置巡检工具。支持禁止非owner用户远程执行DDL操作。

- **高可用**：[主备双机](../database_administration_guide/master_and_standby_node.md)、[级联备机](../database_administration_guide/cascaded_standby_node.md)、[逻辑复制](../characteristic_description/logical_replication.md)、[极致RTO](../database_om_guide/ultimate_rto.md)、[备机扩容](../database_administration_guide/add_remover_standby_node.md)、[基于Paxos分布式一致性协议（DCF）](../database_om_guide/high_availability_based_on_the_paxos_protocol.md)、[两地三中心跨Region容灾](../database_administration_guide/two_city_three_dc_dr.md)。并行回放性能优化，TPCC场景备机redo性能提升50%~100%。[极致RTO支持备机可读](../database_om_guide/ultimate_rto.md)，维持一主一备70W tpmC时，RTO<10s。[主备高可用能力增强](../database_om_guide/enhanced_active_standby_ha.md)。支持[异步备升主数据找回能力](../characteristic_description/asynchronous_backup_and_recovery_capability_for_master_data.md)。[逻辑复制增强](../characteristic_description/logical_replication.md)。[CM支持双集群中备集群首备和从备的switchover](../resource_pooling/cm_supports_dual_cluster_backup_clusters_switchover.md)。CM支持选择实时回放节点，在主机故障时优先升主。CM选主逻辑优化，多数派备机未回放完时，及时选出旧主。CM支持在当前满足DN多数派场景下，动态开关最大可用，在从库丢失时打开最大可用，从库恢复后关闭最大可用。[CM](../characteristic_description/cm.md)两节点部署，支持心跳网络，支持多个三方ip检测，减少脑裂情况发生。[逻辑复制增强](../database_om_guide/logical_copy_support_ddl_operation.md)，新增支持Alter/Truncate/Rename 表和分区表DDL语法。CM 集群管理组件支持在资源池化场景下，通过CM检测reform阶段内核是否hang住。DCC支持节点间数据build，支持通过cm_ctl触发build操作。

- **高性能**：支持[shared buffer按大页内存分配](../database_reference/huge_page_memory.md)，实现4k pagesize环境中性能提升5%。内核GCC版本升级到GCC 10.3，基于反馈优化，TPCC性能提升6%。[SCRLock提高分布式锁性能](../characteristic_description/scrlock.md)。[分区表性能优化](../characteristic_description/partitioning.md)。[UWAL](../characteristic_description/advanced_features/uwal.md)实现数据库WAL性能加速。TPCC性能提升约20%。优化主备锁机制控制粒度和有序队列加锁逻辑，提升一主一同步备场景下TPCC性能10%。函数/PACKAGE支持指定并行相关参数，[NO SCROLL游标](../sql_reference/cursors.md)和作为并行函数入参的游标表达式支持并行执行。使用[用户态网络](../characteristic_description/user_mode_network.md)优化北向网络，单机TPCC性能提升15%。传统主备部署模式下支持行列转换功能，备机支持列存查询，TPCH 100G基准环境，整体性能对比原始行存方式平均提升5x。SMP场景扩展，IUD场景下stream算子上移，提升并行效率，性能提升50%以上。子事务场景性能提升，Multixact相关的SLRU buffer大小支持可配置，同时通过SLRU分bank优化，提升大量子事务场景下的性能100%+。支持[自动参数化](../characteristic_description/automatic_parameterization.md)，在需要反复执行相似/相同的SQL简单语句的情境下（仅支持IUD），通过复用执行计划缓存以减少SQL语句的执行时间。

- **向量数据库**：支持[原生向量存储](../datavec/datavec_overview.md)，支持IVF-FLAT/IVF-PQ/HNSW/HNSW-PQ等向量索引类型。支持[向标量融合查询](../datavec/datavec_architecture.md#标量向量混合查询)，基于CBO生成最优计划。[ANN索引支持并行构建](../datavec/datavec_architecture.md#并行构建索引)，提升处理大规模数据集的效率。

- **AI4DB**：[参数自调优](../characteristic_description/aifeature_guide/x_tuner_parameter_tuning_and_diagnosis.md)、[慢SQL发现](../characteristic_description/slow_sql_statement_discovery.md)、AI查询时间预测、数据库指标采集预测与异常监控、异常检测自配置、[DBMind](../characteristic_description/aifeature_guide/dbmind_mode.md)自治运维平台、智能优化器、[智能索引推荐](../characteristic_description/aifeature_guide/index_advisor_index_recommendation.md)。

- [**DB4AI**](../characteristic_description/db4ai_database_driven_ai.md)：deepSQL库内AI算法、库内AI算法支持XGBoost、multiclass和PCA。

- **备份恢复**：[全量物理备份](../database_om_guide/physical_backup_and_restoration.md)、[逻辑备份](../database_om_guide/logical_backup_and_restoration.md)、备机备份、[增量备份和恢复](../database_om_guide/physical_backup_and_restoration.md)、恢复到指定时间点(PITR)。

- **运维能力**：[WDR诊断报告](../characteristic_description/workload_diagnosis_report_wdr.md)新增数据库运行指标、备机[慢SQL诊断视图](../characteristic_description/root_cause_analysis_for_slow_sql_statements.md)、[unique sql自动淘汰](../database_reference/query_62.md#enable_auto_clean_unique_sql)、慢SQL根因分析优化，增强输出结论。慢SQL统计时间空洞补齐，支持细粒度阶段统计。支持switchover超时打印节点堆栈。增加对WalSender、WalRecv和WalRecvWriter线程的统计信息记录。支持在主机宕机的情况下，在备机上获取当前事务日志的同步位置。支持[全链路跟踪能力](../characteristic_description/full_link_tracking.md)，实现追踪并记录jdbc查询接口执行sql的端到端网络耗时，并记录在数据库[dbe_perf.statement](../sql_reference/dbe_perf_schema.md)视图、[statement_history](../database_reference/STATEMENT_HISTORY.md)表中。慢SQL统计默认开启计划统计，降低性能损耗。支持通过内置函数gs_get_hba_conf()获取pg_hba.conf文件中的内容。

- **JDBC**：支持[JDBC客户端负载均衡及读写分离](../characteristic_description/jdbc_client_load_balancing_and_read_write_isolation.md)、主节点心跳检测。

- **集群管理**：支持CM集群管理，CM支持[自定义资源监控](../tool_and_commandreference/features.md#自定义资源)、支持VIP管理、支持[两节点部署](../installation_guide/creating_an_xml_configuration_file.md#配置cm_server主非主信息)、支持对外状态查询和推送能力。

- **工具链**：[开发工具DataStudio](../characteristic_description/opengauss_client_tool_datastudio.md)、[MySQL全量迁移工具gs_mysync](../characteristic_description/full_migration_tool_gs_mysync.md)、[增量和反向迁移工具gs_replicate](../characteristic_description/incremental_migration_tool_gs_replicate.md)、数据校验工具gs_datacheck、[数据全生命周期生产工具DataKit](../characteristic_description/tool_chain_datakit.md)。支持升级场景数据字典校验工具。OM工具解耦对OS版本依赖。支持实例监控插件和智能诊断插件，实现SQL、会话、实例和集群指标监控，支持历史数据分析与SQL诊断、告警监控和告警通知，提升智能运维能力。数据库开发插件增强，支持表/视图/用户角色/函数/存储过程等对象管理。MySQL全量迁移：支持直接读取csv文件用于数据迁移，索引并行创建，解除跨平台的依赖，可靠性增强。MySQL增量&反向迁移：支持断点续传，支持迁移进度展示，反向迁移支持全量迁移。数据校验：支持按表分片校验，增强和全量迁移流程的配合，提升校验性能到150MB/s。提供[gs_perfconfig](../characteristic_description/out_of_the_box.md)支持开箱即用，性能最优。支持 Oracle 全量、增量、反向迁移，支持数据校验。DataKit集成[兼容性评估工具](../datakit/compatibility_assessment.md)、支持集群拓扑显示、实例监控插件增加新指标、优化采集架构、智能诊断增加诊断经验，优化SQL诊断任务、[日志检索插件](../datakit/datakit_log_retrieval.md)增加CM日志采集，支持lucene语法搜索、[告警监控插件](../datakit/datakit_alarm_mointor.md)增加内置规则、支持告警收敛、优化页面、支持组件安装路径可选、支持智能参数调优插件、支持资源池化双集群部署。支持流量[录制回放工具](../datakit/datakit_workload_replay.md)，支持连接源端数据库（MySQL），采集SQL，并且向 openGauss 数据库进行 SQL 回放&压测。支持解析MySQL数据库的 General Log表或文件、支持Attach到JAVA应用程序、支持截取和解析MySQL网络通讯包等方式采集SQL。支持多次回放并比较结果和性能。Portal支持依赖包离线安装。迁移插件支持连接到数据库集群。支持按文件导入方式批量添加服务器和批量添加用户。支持多数据库集群并行安装。支持SSO与DevKit统一登录，实现同一用户可以登录到DevKit和DataKit。录制回放支持采集openGauss流量，支持录制回放的结果对比。支持[PostgreSQL到openGauss的迁移能力](../characteristic_description/postgresql_opengauss_migration_tool_debezium_connector_postgres.md)。支持添加IPV6实例。

- **中间件**：[shardingSphere](../characteristic_description/distributed_database_capability.md)、[openLookeng](../characteristic_description/distributed_analysis_capabilities.md)。

- **周边生态**：[dblink](../database_administration_guide/dblink.md)；支持openEuler、CentOS、FusionOS系统；[绝大部分MySQL语法和协议兼容](../extension_reference/dolphin.md)。

- **插件**：[GMS_STATS插件](../extension_reference/gms_stats.md)，支持收集特定schema下对象的统计信息。[GMS_PROFILER插件](../characteristic_description/gms_profiler_advanced_package.md)，用于收集PL/pgSQL程序执行情况。[GMS_OUTPUT插件](../characteristic_description/gms_output_tool_package.md)，提供将文本行写入内存、供以后提取和显示的功能。

- **企业级特性**：支持修改表压缩属性。[子事务并发回滚流程优化](../sql_reference/optimization_of_subtransaction_concurrent_rollback_process.md)，减少锁争抢，提升并发执行效率。支持GB18030-2022标准。[存储过程支持嵌套调试](../characteristic_description/stored_procedure_debugging.md)，支持匿名块调试。[发布订阅](../database_om_guide/subscriptions.md)支持用户自定义冲突解决方案。支持多语言日志。支持限制内核日志最大磁盘占用空间。支持龙芯平台编译。索引创建支持预扩展，堆表支持预读。压缩表支持页式存储和段页式存储两种模式。

- **其他**：cmake脚本编译、容器化部署、kubernetes。

## CVE漏洞

本版本是2026年3月发布的创新版本，版本涉及的CVE漏洞可通过[CVE列表](https://opengauss.org/zh/cve)查询。

## 性能测试报告

见[openGauss 7.0.0-RC3 版本集成测试报告](https://gitcode.com/opengauss/QA/blob/master/Test_Result/openGauss_7.0.0_RC3/%E7%89%88%E6%9C%AC%E9%9B%86%E6%88%90%E6%B5%8B%E8%AF%95%E6%8A%A5%E5%91%8A/openGauss%207.0.0RC3%E7%89%88%E6%9C%AC%E6%B5%8B%E8%AF%95%E6%8A%A5%E5%91%8A.md#423-%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95)

## 版本使用注意事项

- 版本技术规格可以参照《关于openGauss》中的[技术指标](../about_opengauss/technical_indicators.md)。
- 可参照《数据库管理指南》中的[数据库部署方案](../database_administration_guide/opengauss_common_primary_standby_deployment_solutions.md)，选择业务需要的部署架构，保证数据库集群的可靠性和可用性。

## 源代码

openGauss主要包含20个代码仓，引用开源软件的补丁代码仓、JDBC驱动代码仓、ODBC驱动代码仓、数据库服务器代码仓、自治运维平台DBMind代码仓、数据库OM管理工具、数据库CM管理工具代码仓、数据库DMS代码仓、数据库DSS代码仓、数据库CBB代码仓、数据库DCF代码仓、数据库DCC代码仓、数据库插件代码仓、DataKit代码仓、MySQL到openGauss全量迁移工具代码仓、MySQL增量/反向迁移代码仓、数据校验代码仓、数据库prometheus-exporter代码仓、监控插件生成工具代码仓和文档仓库：

- 开源软件代码仓：[https://gitcode.com/opengauss/openGauss-third\_party](https://gitcode.com/opengauss/openGauss-third_party)
- JDBC驱动代码仓：[https://gitcode.com/opengauss/openGauss-connector-jdbc](https://gitcode.com/opengauss/openGauss-connector-jdbc)
- ODBC驱动代码仓：[https://gitcode.com/opengauss/openGauss-connector-odbc](https://gitcode.com/opengauss/openGauss-connector-odbc)
- 数据库服务器代码仓：[https://gitcode.com/opengauss/openGauss-server](https://gitcode.com/opengauss/openGauss-server)
- 自治运维平台DBMind代码仓：[https://gitcode.com/opengauss/openGauss-DBMind](https://gitcode.com/opengauss/openGauss-DBMind)
- 数据库OM工具代码仓：[https://gitcode.com/opengauss/openGauss-OM](https://gitcode.com/opengauss/openGauss-OM)
- 数据库CM\(Cluster Manager\)工具代码仓：[https://gitcode.com/opengauss/CM](https://gitcode.com/opengauss/CM)
- 数据库DMS\(Distributed Memory Service\)组件代码仓: [https://gitcode.com/opengauss/DMS](https://gitcode.com/opengauss/DMS)
- 数据库DSS\(Distributed Storage Service\)组件代码仓: [https://gitcode.com/opengauss/DSS](https://gitcode.com/opengauss/DSS)
- 数据库CBB\(Common Building Block\)组件代码仓: [https://gitcode.com/opengauss/CBB](https://gitcode.com/opengauss/CBB)
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
 + 创新版本（X.Y.0-RCx）：每半年推出，旨在快速迭代，提供最新的功能与技术预览这些版本主要用于用户测试与创新合作，社区将提供为期半年的维护支持，鼓励探索与反馈。
 + 补丁版本（X.Y.0）：当遇到重大问题时，会适时发布，旨在迅速修复关键性错误，保障系统稳定运行。

## 致谢

我们衷心地感谢参与和协助 openGauss 7.0.0-RC3版本发布的项目的所有开发者和伙伴，包括华为、北京海量数据技术股份有限公司、天津神舟通用数据技术有限公司、天津南大通用数据技术股份有限公司、粤港澳大湾区（广东）国创中心、中移信息技术有限公司、邮储银行、广东跃昉科技有限公司、云和恩墨（北京）信息技术有限公司、中科院软件所、西北工业大学、民生银行、国能信息、海康威视、浙江大华等组织单位。是你们的辛勤付出使得版本顺利发布，也为openGauss更好地发展提供可能。

![openGauss开发者云图](./opengauss_logo.png)
