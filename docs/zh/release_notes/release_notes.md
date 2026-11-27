---
description: 本文介绍 openGauss 发行说明 的相关内容，涵盖 版本介绍、新增特性 等内容。
keywords: [openGauss, 发行说明, 版本说明, 版本介绍, 新增特性]
---

# 发行说明

## 版本介绍

openGauss 7.0.0(LTS)是openGauss 2026年9月发布的LTS版本，该版本生命周期为3年。当前文档说明范围仅限企业版。

7.0.0(LTS)与之前的版本特性功能保持兼容，主要功能如下：

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

    提供安装部署工具、实例启停工具、备份恢复工具、扩缩容工具、升级工具，支持数据全生命周期生产工具DataKit，支持MySQL/Oracle/PG 全量/增量/反向迁移工具和数据校验工具。

- 安全管理

    支持SSL安全网络连接、用户权限管理、密码管理、安全审计、细粒度ANY权限控制、TLCP协议等功能，保证数据库在管理层、应用层、系统层和网络层的安全性。

- AI智能化

    企业版支持参数自调优、慢SQL发现、单query索引推荐、虚拟索引、workload索引推荐、数据库指标采集、预测与异常监控等功能；库内AI原生引擎支持10+高性能机器学习算法。

## 新增特性

此处说明的是openGauss 7.0.0(LTS)版本，在7.0.0-RC3版本功能的基础上，新增如下特性：

- **高性能**：鲲鹏超节点软硬结合性能优化
  - [MES灵衢内存语义通信优化](https://docs.opengauss.org/zh/docs/7.0.0/resource_pooling/mes_ub_shared_memory_communication_optimization.html)，适用于资源池化架构，基于鲲鹏超节点 UBS Memory 服务与 ub_dist_comm_queue （ubs-atomic库能力）分布式通信队列，在节点间建立共享内存环形缓冲区，实现零拷贝消息收发。 [#717](https://atomgit.com/opengauss/DMS/pull/717) [#9230](https://atomgit.com/opengauss/openGauss-server/pull/9230) [#363](https://atomgit.com/opengauss/CBB/pull/363) [#364](https://atomgit.com/opengauss/CBB/pull/364) [@meankkkk](https://atomgit.com/meankkkk)
  - [事务快照传输性能优化](https://docs.opengauss.org/zh/docs/7.0.0/resource_pooling/ub_transaction_snapshot_acceleration_introduction.html)，适用于资源池化架构，基于鲲鹏超节点提供的UB（Unified Bus）共享内存能力，在资源池化集群中为CLOG、CSNLOG、Snapshot和OldestXmin建立共享内存加速通道，将高频事务元数据访问从"消息获取"优化为"共享内存直读"，降低跨节点访问时延，减轻主机消息处理压力，提升资源池化场景的事务处理效率。[#9299](https://atomgit.com/opengauss/openGauss-server/pull/9229) [@g75596197](https://atomgit.com/g75596197)

- **高可用**: 鲲鹏超节点软硬结合可靠性提升
  - [CM支持订阅sysSentry](https://docs.opengauss.org/zh/docs/7.0.0/resource_pooling/cm_syssentry_fault_detection.html)，及时获取节点级故障通知，故障检测时间<1s。 [#482](https://atomgit.com/opengauss/CM/pull/482) [@liuzhanfeng](https://atomgit.com/liuzhanfeng)

- **高安全**：[黑匣子](https://docs.opengauss.org/zh/docs/7.0.0/tool_and_commandreference/ogrecorder/ogrecorder_overview.html)接口能力增强
  - 增加查询查询内存、cpu、nfs设备io接口，文件名称列表接口优化支持排序，详见[API列表](../tool_and_commandreference/ogrecorder/ogrecorder_api_introduction.md)。 [#101](https://atomgit.com/opengauss/oGRecorder/pull/101) [#28](https://atomgit.com/opengauss/CM-RestAPI/pull/28) [@liuzhanfeng](https://atomgit.com/liuzhanfeng) [@zkcarl](https://atomgit.com/zkcarl)

- **高智能**：[BM25索引](https://docs.opengauss.org/zh/docs/7.0.0/datavec/bm25_full_text_search_index.html)优化。
  - 支持[自定义BM25索引jieba分词器的词典](https://docs.opengauss.org/zh/docs/7.0.0/datavec/bm25_usage_guide.html#3-%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AF%8D%E5%85%B8dict_path)。[#9036](https://atomgit.com/opengauss/openGauss-server/pull/9036) [@Setname](https://atomgit.com/Setname)
  - 实现[BM25索引可变块特性](https://docs.opengauss.org/zh/docs/7.0.0/datavec/bm25_usage_guide.html#4-%E7%B4%A2%E5%BC%95%E7%A9%BA%E9%97%B4%E4%BC%98%E5%8C%96%E8%AF%B4%E6%98%8E)，减少索引空间占用40%。[#9134](https://atomgit.com/opengauss/openGauss-server/pull/9134) [@Setname](https://atomgit.com/Setname)

- **高智能**：[oGMemory](https://docs.opengauss.org/zh/docs/7.0.0/datavec/ogmem_introduction.html)上下文记忆管理框架。
  - [oGMemory记忆框架支持对接OpenClaw](https://docs.opengauss.org/zh/docs/7.0.0/datavec/ogmem_case01.html)，多轮对话准确率提升30%，场景化用例测试任务Token开销降低50%。[#22](https://atomgit.com/opengauss/oGMemory/pull/22) [#66](https://atomgit.com/opengauss/oGMemory/pull/66) [#65](https://atomgit.com/opengauss/oGMemory/pull/65) [#64](https://atomgit.com/opengauss/oGMemory/pull/64) [#63](https://atomgit.com/opengauss/oGMemory/pull/63) [#39](https://atomgit.com/opengauss/oGMemory/pull/39) [#35](https://atomgit.com/opengauss/oGMemory/pull/35) [#23](https://atomgit.com/opengauss/oGMemory/pull/23) [#18](https://atomgit.com/opengauss/oGMemory/pull/18) [@Vincent__Sun](https://atomgit.com/Vincent__Sun)

- **数据分支**：[数据分支](https://docs.opengauss.org/zh/docs/7.0.0/datavec/data_branch_architecture.html)功能增强
  - 支持[LFC（Local File Cache）与prefetch预取](https://docs.opengauss.org/zh/docs/7.0.0/datavec/data_branch_lfc_prefetch.html)。[#4](https://atomgit.com/opengauss/neon/pull/4) [#9289](https://atomgit.com/opengauss/openGauss-server/pull/9289) [@wangjingyuan8](https://atomgit.com/wangjingyuan8)
  - [Pageserver 支持并行回放](https://docs.opengauss.org/zh/docs/7.0.0/datavec/data_branch_parallel_replay.html)，降低多个页面同时触发 WAL redo 时的排队时间。[#11](https://atomgit.com/opengauss/neon/pull/11) [@wangjingyuan8](https://atomgit.com/wangjingyuan8) [@xudabiao2024](https://atomgit.com/xudabiao2024)
  - 支持[分支合并](https://docs.opengauss.org/zh/docs/7.0.0/datavec/data_branch_merge.html)，比较和合入两个数据分支之间的数据差异。[#10](https://atomgit.com/opengauss/neon/pull/10) [@wangjingyuan8](https://atomgit.com/wangjingyuan8)

- **企业级能力**
  - 支持[GS_XMLDOM高级包](https://docs.opengauss.org/zh/docs/7.0.0/extension_reference/extension_reference/server/gms_xmldom.html)，内置基于PL/Python语言实现，将底层的Python XML DOM操作封装成符合规范的PL/pgSQL函数，包内定义了一系列自定义数据类型，用于在SQL层面表示不同的DOM对象。[#8887](https://atomgit.com/opengauss/openGauss-server/pull/8887) [#9281](https://atomgit.com/opengauss/openGauss-server/pull/9281) [@2504_92042799](https://atomgit.com/2504_92042799) [@mchxyz](https://atomgit.com/mchxyz)
  - 支持[INSERT ON CONFLICT](../sql_reference/insert.md#参数说明)语法，指定在发生唯一约束或者主键约束导致冲突时的行为，例如执行更新操作而不是插入新数据，或者忽略冲突而不进行任何操作等。[#8765](https://atomgit.com/opengauss/openGauss-server/pull/8765) [@sunquancheng01](https://atomgit.com/sunquancheng01)
  - 支持[全局sequence cache](../sql_reference/create_sequence.md#参数说明)，序列缓存是全局缓存，所有session共享。[#8647](https://atomgit.com/opengauss/openGauss-server/pull/8647) [@sunquancheng01](https://atomgit.com/sunquancheng01)
  - 建表时列属性支持[GENERATED { ALWAYS | BY DEFAULT } AS IDENTITY](../sql_reference/create_table.md#参数说明)，通过语法指定列为自增列。[#9137](https://atomgit.com/opengauss/openGauss-server/pull/9137) [@CXXXXZ](https://atomgit.com/CXXXXZ)
  - 新增[pg_stat_progress_copy视图](../database_reference/pg_stat_progress_copy.md)，支持监控COPY导入数据进度，展示已导入行数及被过滤行数（where filter）。[#9115](https://atomgit.com/opengauss/openGauss-server/pull/9115) [@CXXXXZ](https://atomgit.com/CXXXXZ)
  - 支持[NOTIFY](../sql_reference/notify.md)/[LISTEN](../sql_reference/listen.md)功能，实现不同会话间通信的能力。[#9352](https://atomgit.com/opengauss/openGauss-server/pull/9352) [@Solataire](https://atomgit.com/Solataire)
  - 支持[CREATE FORCE VIEW](../sql_reference/create_view.md#参数说明)语法，强制创建视图，而不管视图所依赖的基表、视图或函数是否存在。[#9363](https://atomgit.com/opengauss/openGauss-server/pull/9363) [@Coder_Zero1](https://atomgit.com/Coder_Zero1)
  - 使用共享内存进行统计信息收集，消除pgstat后台线程，降低CPU/IO消耗。[#9009](https://atomgit.com/opengauss/openGauss-server/pull/9009) [@hw_hbj](https://atomgit.com/hw_hbj)

- **[DataKit](https://docs.opengauss.org/zh/docs/7.0.0/datakit/datakit.html)**：迁移工具增强
  - 支持[在MySQL全量迁移流程中迁移用户](../characteristic_description/datakit_migration_optimization.md)，在openGauss创建同名用户并赋权。[#298](https://atomgit.com/opengauss/openGauss-tools-chameleon/pull/298) [#1444](https://atomgit.com/opengauss/openGauss-workbench/pull/1444) [@duanguoqiang4](https://atomgit.com/duanguoqiang4)
  - 支持完全[跳过数据校验进程](../characteristic_description/datakit_migration_optimization.md)，对于不需要数据校验的迁移场景，可以有效提升迁移效率。[#1451](https://atomgit.com/opengauss/openGauss-workbench/pull/1451) [#249](https://atomgit.com/opengauss/openGauss-migration-portal/pull/249) [@duanguoqiang4](https://atomgit.com/duanguoqiang4)
  - 支持在卸载DataKit时通过选项控制是否同步卸载prometheus、portal等组件。[#252](https://atomgit.com/opengauss/openGauss-migration-portal/pull/252) [#1457](https://atomgit.com/opengauss/openGauss-workbench/pull/1457) [#1460](https://atomgit.com/opengauss/openGauss-workbench/pull/1460) [#1464](https://atomgit.com/opengauss/openGauss-workbench/pull/1464) [@duanguoqiang4](https://atomgit.com/duanguoqiang4)
  - MySQL全量迁移支持断点续传，如果迁移过程中途断掉，支持对已完成数据迁移的表不再重复迁移，实现表级断点续传。[#304](https://atomgit.com/opengauss/openGauss-tools-chameleon/pull/304) [#1447](https://atomgit.com/opengauss/openGauss-workbench/pull/1447) [#248](https://atomgit.com/opengauss/openGauss-migration-portal/pull/248) [#299](https://atomgit.com/opengauss/openGauss-tools-chameleon/pull/299) [@tt1819798371](https://atomgit.com/tt1819798371)

## 版本兼容性说明

- GUC参数[d_format_behavior_compat_options](https://docs.opengauss.org/zh/docs/7.0.0/extension_reference/extension_reference/server/shark_guc_parameters.html#d_format_behavior_compat_options)默认值由空调整为'enable_sbr_identifier, default_collation'。仅影响D库，修改后默认支持'[]'包裹标识符(含数据类型)，不支持'[]'作为数组语法使用。字符类型字段的字符序当表级字符序不为空时继承表级字符序，为空时设置为数据库编码对应的默认字符序。升级场景下，通过OM升级时，如果用户数据库包含D库且从修改前版本升级到修改后版本，则升级后保存用户原有d_format_behavior_compat_options值，不做变更。如果旧版本不包含D库，升级后创建新数据库时，默认值为新默认值。[#9034](https://atomgit.com/opengauss/openGauss-server/pull/9034) [#1245](https://atomgit.com/opengauss/openGauss-OM/pull/1245) [@shijuzheng1997](https://atomgit.com/shijuzheng1997)
- 锁等待相关视图、函数新增waitstart字段，用于标记锁等待开始的时间。受影响的视图/函数包括[dbe_perf.locks](../sql_reference/dbe_perf_schema_locks.md)、[pg_catalog.pg_locks](../database_reference/pg_locks.md)、[pg_catalog.pg_lock_status](../sql_reference/statistics_information_functions.md)。[#9133](https://atomgit.com/opengauss/openGauss-server/pull/9133) [@2504_92042799](https://atomgit.com/2504_92042799)
- 序列相关视图、函数支持展示全局序列信息，用于标识当前序列是否为全局序列。受影响的视图/函数包括[dbe_perf.statio_all_sequences](../sql_reference/statio_all_sequences.md)、[information_schema.sequences](../sql_reference/columns.md)、[pg_catalog.pg_gtt_attached_pids](../database_reference/pg_gtt_attached_pids.md)、[pg_catalog.pg_seclabels](../database_reference/pg_seclabels.md)、[pg_catalog.pg_statio_all_sequences](../database_reference/pg_statio_all_sequences.md)、[pg_catalog.pg_sequence_all_parameters](../sql_reference/system_information_functions.md)、[pg_catalog.pg_sequence_parameters](../sql_reference/system_information_functions.md)。[#8647](https://atomgit.com/opengauss/openGauss-server/pull/8647) [@sunquancheng01](https://atomgit.com/sunquancheng01)
- [information_schema.columns](../sql_reference/columns.md)视图支持展示identity相关信息，is_identity、identity_generation、identity_start、identity_increment、identity_maximum、identity_minimum、identity_cycle列支持根据identity情况展示真实信息。原先这些列的值恒为NO或NULL。[#9137](https://atomgit.com/opengauss/openGauss-server/pull/9137) [@CXXXXZ](https://atomgit.com/CXXXXZ)
- [WLM统计相关视图](../database_reference/pg_session_wlmstat.md)支持展示RowDescription缓存被命中的次数，新增rowdesc_a_store_count,rowdesc_a_hit_count,rowdesc_b_store_count,rowdesc_b_hit_count四个字段，分别表示使用openGauss协议连接openGauss数据库时，RowDescription缓存的累计建槽次数、缓存的累计命中次数。使用MySQL协议连接openGauss数据库时，RowDescription缓存的累计建槽次数、缓存的累计命中次数。RowDescription用于在处理openGauss协议D报文以及MySQL协议的结果集输出时被用到。[#2419](https://atomgit.com/opengauss/Plugin/pull/2419) [#9202](https://atomgit.com/opengauss/openGauss-server/pull/9202) [@wofanzheng](https://atomgit.com/wofanzheng)
- [text_date](../sql_reference/type_conversion_functions.md)函数的provolatile属性从'i'（immutable，不可变的）变更为's'（stable，稳定的）。意味着该函数的结果，对于固定输入，结果在一次扫描里不变。但是在多次扫描中，相同的输入可能产生不同的结果。[#9548](https://atomgit.com/opengauss/openGauss-server/pull/9548) [@liyangx](https://atomgit.com/liyangx)

## 已知问题

- openGauss没有文件权限，慢盘监控功能。在文件权限异常时，数据库会退出，日志中会有相应打印信息。在慢盘时，数据库操作会变慢。
- MOT（Memory Optimized Tables）与增量检查点特性不兼容，如果使用MOT，需要关闭增量检查点功能。
- LLVM对ARM架构支持不友好，在导入MOT的TPCC时候报LLVM相关错误。可以通过不启用JIT规避，使用enable\_mot\_codegen开关控制。对于不启用JIT对TPCC测试产生的性能影响，可以通过force\_mot\_pseudo\_codegen= true配置来降低性能影响。

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
| [387](https://atomgit.com/opengauss/DSS/issues/387) | DSS | [Bug]: 多并发创建文件压测导致的coredump |
| [272](https://atomgit.com/opengauss/CM/issues/272) | CM | [Bug]: CM多数派少数派反复横跳，导致term值过大， 数据库重启 |
| [279](https://atomgit.com/opengauss/CM/issues/279) | CM | [Bug]: 6.0.6升级7.0.0LTSB020版本，升级到带CM版本场景，升级后集群状态异常 |
| [777](https://atomgit.com/opengauss/openGauss-OM/issues/777) | openGauss-OM | [Bug]: 【测试类型：工具功能】【测试工具：gsql】开启并行，SQL不含';' or SQL 结合元命令（\g、 \gset ......）执行命令后gsql发生core dump |

## 继承功能

- **基础功能**：[SQL标准语法](../sql_reference/opengauss_sql.md)、[数据类型](../sql_reference/numeric_types.md)（包括[JSON和JSONB](../sql_reference/json_jsonb_types.md)）、表（包括临时表、全局临时表、外部表）、[视图](../sql_reference/brief_tutorial/views.md)、[物化视图](../sql_reference/materialized_view.md)、外键、[索引](../sql_reference/indexes.md)（包括btree索引、Gin索引、hash索引）、[序列](../database_administration_guide/creating_and_managing_sequences.md)、函数、[触发器](../sql_reference/triggers.md)、[聚合函数](../sql_reference/aggregate_functions.md)median、ROWNUM、UPSERT、GB18030字符集。

- **SQL引擎增强**：[范围分区、LIST分区、HASH分区](../sql_reference/partitioned_tables.md#范围分区表的分类)、基于范围分区的自动扩展分区、全局分区索引、行存转向量化、[自治事务](../characteristic_description/autonomous_transaction.md)、[并行查询](../characteristic_description/smp_for_parallel_execution.md)、[Global Syscache](../characteristic_description/global_syscache.md)、Global PlanCache、[IPv6协议](../sql_reference/network_address_types.md)、[postgis插件](https://docs.opengauss.org/zh/docs/7.0.0/extension_reference/PostGIS.html)、[事件触发器](../characteristic_description/event_trigger.md)。支持[继承表](../sql_reference/create_table_inherits.md)。支持PIPELINED管道函数，函数可以返回行集合。SELECT语句支持通过[TABLESAMPLE子句](../sql_reference/select.md#参数说明)实现对指定子分区、视图、物化视图进行数据采样。支持通过ALTER TRIGGER的方式禁用/启动单个触发器。SELECT语句支持通过ROTATE和NOT ROTATE子句进行行列转换。支持通过SQL启用禁用table约束。数字支持以f/d结尾作为浮点数使用。支持 ‘NaN’ 和 ‘infinity’ 表示浮点数特殊值。支持IS [NOT] INFINITE和IS [NOT] NAN条件表达式。numeric数据类型精度设置允许precision大于scale，允许scale为负数。支持CROSS/OUTER APPLY JOIN语法。支持修改/删除视图引用的对象（如表、列、函数、视图等）后，将视图置为无效状态。支持[XMLTABLE](../sql_reference/xmltable.md)，用于将XML文档按指定行路径展开为关系表结果，并通过`COLUMNS`子句将节点、属性或表达式映射为输出列，在`FROM`子句中作为表函数使用。JSONB功能增强，支持[jsonb_path_exists](../sql_reference/json_jsonb_functions_and_operators.md)函数检查指定JSON路径下是否有任何项，支持[jsonb_path_query_first](../sql_reference/json_jsonb_types.md#jsonpath类型)函数通过JSONPATH提取JSON数据中的特定表达式。

- **存储引擎增强**：延迟备库、[备机支持逻辑复制](../characteristic_description/logical_replication.md)、[并行逻辑解码](../characteristic_description/parallel_logical_decoding.md)、[灰度升级](../characteristic_description/gray_upgrade.md)、[指定节点升级](../characteristic_description/rolling_upgrade.md)、Hash索引、列存表主键唯一约束、[Ustore存储引擎](../database_administration_guide/in_place_update_storage_engine.md)、[段页式存储](../database_administration_guide/storage_structure.md#段页式存储结构)、[发布订阅](../characteristic_description/publication_subscription.md)、行存表压缩、[MOT内存表](../database_administration_guide/mot_memory_and_storage_planning.md)、[NUMA-aware高性能优化](../database_administration_guide/numa_awareness_allocation_and_affinity.md)等。[段页式表支持空间回收](../characteristic_description/segment_space_shrink.md)，在DELETE和UPDATE段页式表后，通过系统函数回收空间，使表文件占用的存储资源更有效地释放，不影响用户业务的正常运行。

- **资源池化**：基于存储池化、内存池化和计算池化实现的 [openGauss 三层池化架构](https://docs.opengauss.org/zh/docs/7.0.0/resource_pooling/resource_pooling_overview.html)。[优化备机可见性判断逻辑、优化主机推进oldestxmin逻辑、备机支持缓存快照信息](https://docs.opengauss.org/zh/docs/7.0.0/performance_tuning_guide/resource_pooling_performance_optimization.html)，实现sysbench场景2节点性能6W tps，线性度1.6倍，相比优化前提升50%。支持[备机事务内写语句透明转发到主机执行](https://docs.opengauss.org/zh/docs/7.0.0/performance_tuning_guide/transparent_forwarding_within_backup_machine_affairs.html)。[DSS功能增强](https://docs.opengauss.org/zh/docs/7.0.0/resource_pooling/feature_enhancement.html)，支持NoF/NoF+协议；支持线程池模式，支持大并发处理；支持升级模式；支持黑匣子诊断。对接分布式存储，实现[数据库算子卸载](../characteristic_description/resource_pooling_operator_offloading.md)，加速TPCH性能提升40%。支持[SPQ多机并行查询框架](https://docs.opengauss.org/zh/docs/7.0.0/extension_reference/spqplugin.html)。[DMS](https://docs.opengauss.org/zh/docs/7.0.0/resource_pooling/dms_resource_statistics_function.html)、CBB新增等待事件统计。支持在50W TPMC负载下RTO<10s。支持基于[Dorado存储同步复制的主备双集群容灾](https://docs.opengauss.org/zh/docs/7.0.0/resource_pooling/resource_pooling_active_standby_dual_cluster_dr.html)。支持[基于流复制的资源池化主备双集群容灾](https://docs.opengauss.org/zh/docs/7.0.0/resource_pooling/resource_pooling_active_standby_dual_cluster_dr.html)。按需回放redo阶段支持DDL执行。支持[离线对资源池化备机进行扩缩容操作](../tool_and_commandreference/gs_expansion.md)。支持[虚拟机方式部署](../database_administration_guide/resource_pooling_om_installation_and_deployment.md#虚拟环境)。支持xlog日志合一。实时构建支持流控。支持[主备参数同步](https://docs.opengauss.org/zh/docs/7.0.0/resource_pooling/resource_pooling_support_for_primary_and_backup_parameter_synchronization.html)。支持页式存储。支持双集群缩容至单集群。支持[归档](https://docs.opengauss.org/zh/docs/7.0.0/resource_pooling/resource_pooling_xlog_support_archive.html)。

- **存储过程**：[存储过程](../sql_reference/stored_procedures.md)、[存储过程内commit/rollback](../sql_reference/transaction_management.md)、[存储过程调试](../characteristic_description/stored_procedure_debugging.md)。支持[存储过程覆盖率测试](../sql_reference/proc_coverage_generate_stored_procedure_coverage_report.md)。[游标](../sql_reference/cursors.md)支持嵌套定义。支持游标作为插入值。通过TYPE语法定义动态游标 REF CURSOR 时，支持通过RETURN指定游标返回的数据类型。[游标参数支持设置默认值](../sql_reference/explicit_cursor.md)。支持[array和record嵌套](../sql_reference/arrays.md)。支持使用[ROWTYPE给游标赋值](../sql_reference/variable_definition_statements.md)。

- **安全功能**：[认证](../database_administration_guide/configuring_client_access_authentication.md)、[权限管理](../database_om_guide/secharden/permission_management.md)、网络通信安全、[数据库审计](../characteristic_description/database_audit.md)、[全密态数据库](../characteristic_description/advanced_features/full_encrypted_database.md)、[动态数据脱敏](../characteristic_description/dynamic_data_masking.md)、国密算法、[防篡改账本数据库](../characteristic_description/ledger_database_mechanism.md)、[内置角色](../database_administration_guide/roles.md)和权限管理、[透明加密](../characteristic_description/transparent_data_encryption.md)、ANY权限管理、[用户级别审计](../characteristic_description/database_audit.md)等。支持第三方密钥管理服务。在鲲鹏服务器上，借助KAE组件，提升国密SM4加解密算法性能5%。支持[对服务启停操作进行审计](../characteristic_description/database_audit.md)、[对数据库备份恢复操作进行审计](../characteristic_description/database_audit.md)。支持[对审计日志进行sha256完整性校验](../characteristic_description/database_audit.md)。发布安全配置基线以及安全配置巡检工具。支持禁止非owner用户远程执行DDL操作。支持[黑匣子](../characteristic_description/advanced_features/oGRecorder.md)特性增强，支持黑匣子主备进程间的参数同步，支持证书/密钥的加密生成与节点间同步，实现多节点共享统一证书体系，提供基于REST API的远程管理能力用于查询数据保险柜集群信息并执行集群状态控制操作，支持在线滚动升级及离线升级。

- **高可用**：[主备双机](../database_administration_guide/master_and_standby_node.md)、[级联备机](../database_administration_guide/cascaded_standby_node.md)、[逻辑复制](../characteristic_description/logical_replication.md)、[极致RTO](../database_om_guide/ultimate_rto.md)、[备机扩容](../database_administration_guide/add_remover_standby_node.md)、[基于Paxos分布式一致性协议（DCF）](../database_om_guide/high_availability_based_on_the_paxos_protocol.md)、[两地三中心跨Region容灾](../database_administration_guide/two_city_three_dc_dr.md)。并行回放性能优化，TPCC场景备机redo性能提升50%~100%。[极致RTO支持备机可读](../database_om_guide/ultimate_rto.md)，维持一主一备70W tpmC时，RTO<10s。[主备高可用能力增强](../database_om_guide/enhanced_active_standby_ha.md)。支持[异步备升主数据找回能力](../characteristic_description/asynchronous_backup_and_recovery_capability_for_master_data.md)。[逻辑复制增强](../characteristic_description/logical_replication.md)。[CM支持双集群中备集群首备和从备的switchover](https://docs.opengauss.org/zh/docs/7.0.0/resource_pooling/cm_supports_dual_cluster_backup_clusters_switchover.html)。CM支持选择实时回放节点，在主机故障时优先升主。CM选主逻辑优化，多数派备机未回放完时，及时选出旧主。CM支持在当前满足DN多数派场景下，动态开关最大可用，在从库丢失时打开最大可用，从库恢复后关闭最大可用。[CM](../characteristic_description/cm.md)两节点部署，支持心跳网络，支持多个三方ip检测，减少脑裂情况发生。[逻辑复制增强](../database_om_guide/logical_copy_support_ddl_operation.md)，新增支持Alter/Truncate/Rename 表和分区表DDL语法。CM 集群管理组件支持在资源池化场景下，通过CM检测reform阶段内核是否hang住。DCC支持节点间数据build，支持通过cm_ctl触发build操作。支持[在线DDL](../database_administration_guide/online_ddl.md)，减少DDL过程中持有高级别锁的时间，减少对并发DML的阻塞。在线DDL支持传统主备中Astore、段页式修改列数据类型、修改压缩属性、添加约束(包括范围约束和非空约束)、VACUUM FULL、CLUSTER、分区表分裂合并分区，并通过新增关键字CONCURRENTLY触发在线DDL。

- **高性能**：支持[shared buffer按大页内存分配](../database_reference/huge_page_memory.md)，实现4k pagesize环境中性能提升5%。内核GCC版本升级到GCC 10.3，基于反馈优化，TPCC性能提升6%。[SCRLock提高分布式锁性能](../characteristic_description/scrlock.md)。[分区表性能优化](../characteristic_description/partitioning.md)。[UWAL](../characteristic_description/advanced_features/uwal.md)实现数据库WAL性能加速。TPCC性能提升约20%。优化主备锁机制控制粒度和有序队列加锁逻辑，提升一主一同步备场景下TPCC性能10%。函数/PACKAGE支持指定并行相关参数，[NO SCROLL游标](../sql_reference/cursors.md)和作为并行函数入参的游标表达式支持并行执行。使用[用户态网络](../characteristic_description/user_mode_network.md)优化北向网络，单机TPCC性能提升15%。传统主备部署模式下支持行列转换功能，备机支持列存查询，TPCH 100G基准环境，整体性能对比原始行存方式平均提升5x。SMP场景扩展，IUD场景下stream算子上移，提升并行效率，性能提升50%以上。子事务场景性能提升，Multixact相关的SLRU buffer大小支持可配置，同时通过SLRU分bank优化，提升大量子事务场景下的性能100%+。支持[自动参数化](../characteristic_description/automatic_parameterization.md)，在需要反复执行相似/相同的SQL简单语句的情境下（仅支持IUD），通过复用执行计划缓存以减少SQL语句的执行时间。支持[参数化路径](../characteristic_description/automatic_parameterization.md)功能支持简单SELECT语句，并将相关内存统一到plan cache，支持global plan cache。支持GPC（Global Plan Cache全局计划缓存），开启GPC后使用参数化功能的情况下，被参数化的语句也会被缓存到GPC（执行计划使用Generic Plan的情形下），可通过视图`DBE_PERF.GLOBAL_PLANCACHE_STATUS`查询。支持[ADIO](../database_reference/asynchronous_i_o_operations.md)，行存表的文件访问支持通过直接IO，不经过操作系统页面缓存的方式进行读取，页面刷盘以及VACUUM FULL操作采用异步IO方式。支持[DPA哈希聚合加速](../characteristic_description/dpa_hash_agg_acceleration.md)，基于UADK框架将向量化哈希聚合操作卸载到硬件加速器上执行，显著提升聚合查询执行效率。

- **向量数据库**：支持[原生向量存储](https://docs.opengauss.org/zh/docs/7.0.0/datavec/datavec_overview.html)，支持IVF-FLAT/IVF-PQ/HNSW/HNSW-PQ等向量索引类型。支持[向标量融合查询](https://docs.opengauss.org/zh/docs/7.0.0/datavec/datavec_architecture.html#%E6%A0%87%E9%87%8F%E5%90%91%E9%87%8F%E6%B7%B7%E5%90%88%E6%9F%A5%E8%AF%A2)，基于CBO生成最优计划。[ANN索引支持并行构建](https://docs.opengauss.org/zh/docs/7.0.0/datavec/datavec_architecture.html#%E5%B9%B6%E8%A1%8C%E6%9E%84%E5%BB%BA%E7%B4%A2%E5%BC%95)，提升处理大规模数据集的效率。支持[RabitQ](https://docs.opengauss.org/zh/docs/7.0.0/datavec/RabitQ.html)量化索引算法，一种具有理论保证的先进的二进制量化方法，与HNSW、IVFFLAT结合使用时，可以确保向量数据在高度压缩的表示下仍能保持搜索的可靠性。

- **AI4DB**：[参数自调优](../characteristic_description/aifeature_guide/x_tuner_parameter_tuning_and_diagnosis.md)、[慢SQL发现](../characteristic_description/slow_sql_statement_discovery.md)、AI查询时间预测、数据库指标采集预测与异常监控、异常检测自配置、[DBMind](../characteristic_description/aifeature_guide/dbmind_mode.md)自治运维平台、智能优化器、[智能索引推荐](../characteristic_description/aifeature_guide/index_advisor_index_recommendation.md)。支持一站式的AI能力集成方案[oGAI](../characteristic_description/ogai.md)，作为openGauss数据库的智能向量化框架插件，用户可在数据库内部直接调用AI模型进行文本向量化、文本生成、文档重排序等操作，无需依赖外部应用层，大幅简化RAG（检索增强生成）应用的开发流程。支持[MCP](https://docs.opengauss.org/zh/docs/7.0.0/datavec/mcp.html)适配openGauss数据库，使AI智能体能够通过标准化协议安全、高效地直接操作企业级国产数据库。

- [**DB4AI**](../characteristic_description/db4ai_database_driven_ai.md)：deepSQL库内AI算法、库内AI算法支持XGBoost、multiclass和PCA。

- **备份恢复**：[全量物理备份](../database_om_guide/physical_backup_and_restoration.md)、[逻辑备份](../database_om_guide/logical_backup_and_restoration.md)、备机备份、[增量备份和恢复](../database_om_guide/physical_backup_and_restoration.md)、恢复到指定时间点(PITR)。

- **运维能力**：[WDR诊断报告](../characteristic_description/workload_diagnosis_report_wdr.md)新增数据库运行指标、备机[慢SQL诊断视图](../characteristic_description/root_cause_analysis_for_slow_sql_statements.md)、[unique sql自动淘汰](../database_reference/query_62.md#enable_auto_clean_unique_sql)、慢SQL根因分析优化，增强输出结论。慢SQL统计时间空洞补齐，支持细粒度阶段统计。支持switchover超时打印节点堆栈。增加对WalSender、WalRecv和WalRecvWriter线程的统计信息记录。支持在主机宕机的情况下，在备机上获取当前事务日志的同步位置。支持[全链路跟踪能力](../characteristic_description/full_link_tracking.md)，实现追踪并记录jdbc查询接口执行sql的端到端网络耗时，并记录在数据库[dbe_perf.statement](../sql_reference/dbe_perf_schema.md)视图、[statement_history](../database_reference/statement_history.md)表中。慢SQL统计默认开启计划统计，降低性能损耗。支持通过内置函数gs_get_hba_conf()获取pg_hba.conf文件中的内容。

- **JDBC**：支持[JDBC客户端负载均衡及读写分离](../characteristic_description/jdbc_client_load_balancing_and_read_write_isolation.md)、主节点心跳检测。

- **集群管理**：支持CM集群管理，CM支持[自定义资源监控](../tool_and_commandreference/features.md#自定义资源)、支持VIP管理、支持[两节点部署](../installation_guide/creating_an_xml_configuration_file.md#配置cm_server主非主信息)、支持对外状态查询和推送能力。

- **工具链**：[开发工具DataStudio](../characteristic_description/opengauss_client_tool_datastudio.md)、[MySQL全量迁移工具gs_mysync](../characteristic_description/full_migration_tool_gs_mysync.md)、[增量和反向迁移工具gs_replicate](../characteristic_description/incremental_migration_tool_gs_replicate.md)、数据校验工具gs_datacheck、[数据全生命周期生产工具DataKit](../characteristic_description/tool_chain_datakit.md)。支持升级场景数据字典校验工具。OM工具解耦对OS版本依赖。支持实例监控插件和智能诊断插件，实现SQL、会话、实例和集群指标监控，支持历史数据分析与SQL诊断、告警监控和告警通知，提升智能运维能力。数据库开发插件增强，支持表/视图/用户角色/函数/存储过程等对象管理。MySQL全量迁移：支持直接读取csv文件用于数据迁移，索引并行创建，解除跨平台的依赖，可靠性增强。MySQL增量&反向迁移：支持断点续传，支持迁移进度展示，反向迁移支持全量迁移。数据校验：支持按表分片校验，增强和全量迁移流程的配合，提升校验性能到150MB/s。提供[gs_perfconfig](../characteristic_description/out_of_the_box.md)支持开箱即用，性能最优。支持 Oracle 全量、增量、反向迁移，支持数据校验。DataKit集成[兼容性评估工具](https://docs.opengauss.org/zh/docs/7.0.0/datakit/compatibility_assessment.html)、支持集群拓扑显示、实例监控插件增加新指标、优化采集架构、智能诊断增加诊断经验，优化SQL诊断任务、[日志检索插件](https://docs.opengauss.org/zh/docs/7.0.0/datakit/datakit_log_retrieval.html)增加CM日志采集，支持lucene语法搜索、[告警监控插件](https://docs.opengauss.org/zh/docs/7.0.0/datakit/datakit_alarm_mointor.html)增加内置规则、支持告警收敛、优化页面、支持组件安装路径可选、支持智能参数调优插件、支持资源池化双集群部署。支持流量[录制回放工具](https://docs.opengauss.org/zh/docs/7.0.0/datakit/datakit_workload_replay.html)，支持连接源端数据库（MySQL），采集SQL，并且向 openGauss 数据库进行 SQL 回放&压测。支持解析MySQL数据库的 General Log表或文件、支持Attach到JAVA应用程序、支持截取和解析MySQL网络通讯包等方式采集SQL。支持多次回放并比较结果和性能。Portal支持依赖包离线安装。迁移插件支持连接到数据库集群。支持按文件导入方式批量添加服务器和批量添加用户。支持多数据库集群并行安装。支持SSO与DevKit统一登录，实现同一用户可以登录到DevKit和DataKit。录制回放支持采集openGauss流量，支持录制回放的结果对比。支持[PostgreSQL到openGauss的迁移能力](../characteristic_description/postgresql_opengauss_migration_tool_debezium_connector_postgres.md)。支持添加IPV6实例。支持[主备数据校验工具](../tool_and_commandreference/gs_checkps.md)，以可视化HTML报表展示各备节点数据文件md5值与主节点不一致的文件，方便直观对比MD5值不一致的数据文件。DataKit集成[Elasticsearch和Milvus到openGauss的迁移](../characteristic_description/datakit_support_elasticsearch_milvus_migration.md)能力。

- **中间件**：[shardingSphere](../characteristic_description/distributed_database_capability.md)、[openLookeng](../characteristic_description/distributed_analysis_capabilities.md)。

- **周边生态**：[dblink](../database_administration_guide/dblink.md)；支持openEuler、CentOS、FusionOS系统；[绝大部分MySQL语法和协议兼容](https://docs.opengauss.org/zh/docs/7.0.0/extension_reference/extension_reference/plugin/dolphin.html)。

- **插件**：[GMS_STATS插件](https://docs.opengauss.org/zh/docs/7.0.0/extension_reference/gms_stats.html)，支持收集特定schema下对象的统计信息。[GMS_PROFILER插件](../characteristic_description/gms_profiler_advanced_package.md)，用于收集PL/pgSQL程序执行情况。[GMS_OUTPUT插件](../characteristic_description/gms_output_tool_package.md)，提供将文本行写入内存、供以后提取和显示的功能。支持[wal2json插件](https://docs.opengauss.org/zh/docs/7.0.0/extension_reference/wal2json.html)，用于将WAL（Write-Ahead Log）中的数据变更转换为JSON格式输出。

- **企业级特性**：支持修改表压缩属性。[子事务并发回滚流程优化](../sql_reference/optimization_of_subtransaction_concurrent_rollback_process.md)，减少锁争抢，提升并发执行效率。支持GB18030-2022标准。[存储过程支持嵌套调试](../characteristic_description/stored_procedure_debugging.md)，支持匿名块调试。[发布订阅](../database_om_guide/subscriptions.md)支持用户自定义冲突解决方案。支持多语言日志。支持限制内核日志最大磁盘占用空间。支持龙芯平台编译。索引创建支持预扩展，堆表支持预读。压缩表支持页式存储和段页式存储两种模式。

- **其他**：cmake脚本编译、容器化部署、kubernetes。

## CVE漏洞

本版本是2026年9月发布的LTS版本，版本涉及的CVE漏洞可通过[CVE列表](https://opengauss.org/zh/cve)查询。

## 性能测试报告

见[openGauss 7.0.0 LTS 版本测试报告](https://atomgit.com/opengauss/QA/blob/master/Test_Result/openGauss_7.0.0/版本集成测试报告/openGauss%207.0.0LTS版本测试报告.md#423-性能测试)

## 版本使用注意事项

- 版本技术规格可以参照《关于openGauss》中的[技术指标](../about_opengauss/technical_indicators.md)。
- 可参照《数据库管理指南》中的[数据库部署方案](../database_administration_guide/opengauss_common_primary_standby_deployment_solutions.md)，选择业务需要的部署架构，保证数据库集群的可靠性和可用性。

## 源代码

openGauss主要包含20个代码仓，引用开源软件的补丁代码仓、JDBC驱动代码仓、ODBC驱动代码仓、数据库服务器代码仓、自治运维平台DBMind代码仓、数据库OM管理工具、数据库CM管理工具代码仓、数据库DMS代码仓、数据库DSS代码仓、数据库CBB代码仓、数据库DCF代码仓、数据库DCC代码仓、数据库插件代码仓、DataKit代码仓、MySQL到openGauss全量迁移工具代码仓、MySQL增量/反向迁移代码仓、数据校验代码仓、数据库prometheus-exporter代码仓、监控插件生成工具代码仓和文档仓库：

- 开源软件代码仓：[https://atomgit.com/opengauss/openGauss-third\_party](https://atomgit.com/opengauss/openGauss-third_party)
- JDBC驱动代码仓：[https://atomgit.com/opengauss/openGauss-connector-jdbc](https://atomgit.com/opengauss/openGauss-connector-jdbc)
- ODBC驱动代码仓：[https://atomgit.com/opengauss/openGauss-connector-odbc](https://atomgit.com/opengauss/openGauss-connector-odbc)
- 数据库服务器代码仓：[https://atomgit.com/opengauss/openGauss-server](https://atomgit.com/opengauss/openGauss-server)
- 自治运维平台DBMind代码仓：[https://atomgit.com/opengauss/openGauss-DBMind](https://atomgit.com/opengauss/openGauss-DBMind)
- 数据库OM工具代码仓：[https://atomgit.com/opengauss/openGauss-OM](https://atomgit.com/opengauss/openGauss-OM)
- 数据库CM\(Cluster Manager\)工具代码仓：[https://atomgit.com/opengauss/CM](https://atomgit.com/opengauss/CM)
- 数据库DMS\(Distributed Memory Service\)组件代码仓: [https://atomgit.com/opengauss/DMS](https://atomgit.com/opengauss/DMS)
- 数据库DSS\(Distributed Storage Service\)组件代码仓: [https://atomgit.com/opengauss/DSS](https://atomgit.com/opengauss/DSS)
- 数据库CBB\(Common Building Block\)组件代码仓: [https://atomgit.com/opengauss/CBB](https://atomgit.com/opengauss/CBB)
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
 + 创新版本（X.Y.0-RCx）：每半年推出，旨在快速迭代，提供最新的功能与技术预览这些版本主要用于用户测试与创新合作，社区将提供为期半年的维护支持，鼓励探索与反馈。
 + 补丁版本（X.Y.0）：当遇到重大问题时，会适时发布，旨在迅速修复关键性错误，保障系统稳定运行。

## 致谢

衷心感谢参与和协助 openGauss 7.0.0(LTS) 版本发布的所有开发者和伙伴，包括华为技术有限公司、北京海量数据技术股份有限公司、中移动信息技术有限公司、天津神舟通用数据技术有限公司、天津南大通用数据技术股份有限公司、云和恩墨（北京）信息技术有限公司、粤港澳大湾区（广东）国创中心、北京思特奇信息技术股份有限公司、邮储银行、民生银行、国能信息、海康威视、浙江大华等组织单位。是你们的辛勤付出使得版本顺利发布，也为 openGauss 更好地发展提供可能。

![openGauss开发者云图](./opengauss_logo.png)
