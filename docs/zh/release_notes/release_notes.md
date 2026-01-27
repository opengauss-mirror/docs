# 发行说明

## 法律声明

**版权所有 © 2025华为技术有限公司。**

您对“本文档”的复制、使用、修改及分发受知识共享（Creative Commons）署名—相同方式共享4.0国际公共许可协议（以下简称“CC BY-SA 4.0”）的约束。为了方便用户理解，您可以通过访问[https://creativecommons.org/licenses/by-sa/4.0/](https://creativecommons.org/licenses/by-sa/4.0/)了解CC BY-SA 4.0的概要（但不是替代）。CC BY-SA 4.0的完整协议内容您可以访问如下网址获取：[https://creativecommons.org/licenses/by-sa/4.0/legalcode](https://creativecommons.org/licenses/by-sa/4.0/legalcode)。

遵循如下协议：
PostgreSQL is Copyright © 1996–2020 by the PostgreSQL Global Development Group.
Postgres95 is Copyright © 1994–5 by the Regents of the University of California.

Permission to use, copy, modify, and distribute this software and its documentation for any purpose, without fee, and without a written agreement is hereby granted, provided that the above copyright notice and this paragraph and the following two paragraphs appear in all copies.

IN NO EVENT SHALL THE UNIVERSITY OF CALIFORNIA BE LIABLE TO ANY PARTY FOR DIRECT, INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, ARISING OUT OF THE USE OF THIS SOFTWARE AND ITS DOCUMENTATION, EVEN IF THE UNIVERSITY OF CALIFORNIA HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

THE UNIVERSITY OF CALIFORNIA SPECIFICALLY DISCLAIMS ANY WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE SOFTWARE PROVIDED HEREUNDER IS ON AN  "AS-IS"  BASIS, AND THE UNIVERSITY OF CALIFORNIA HAS NO OBLIGATIONS TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS, OR MODIFICATIONS.

**商标声明**

openGauss为华为技术有限公司的商标。本文档提及的其他所有商标或注册商标，由各自的所有人拥有。

**免责声明**

本文档仅作为使用指导，除非适用法律强制规定或者双方有明确书面约定, 华为技术有限公司对本文档中的所有陈述、信息和建议不做任何明示或默示的声明或保证，包括但不限于不侵权，时效性或满足特定目的的担保。

## 用户须知

openGauss是一款极致性能、安全、可靠的多模开源数据库。采用协议“木兰宽松许可证”（Mulan PSL V2），用户可以自由复制、使用、修改、分发，不论修改与否。

openGauss的版本号遵循 X.Y.0-RCx 的格式，旨在区分不同类型的版本更新。具体而言：

 + LTS版本（X.0.0）：每两年发布一次，标志着长期稳定支持的版本，适合大规模部署与生产环境使用。社区承诺为每个LTS版本提供为期三年的维护支持，确保其持续稳定与安全。
 + 创新版本（X.Y.0-RCx）：每半年推出，旨在快速迭代，提供最新的功能与技术预览。这些版本主要用于用户测试与创新合作，社区将提供为期半年的维护支持，鼓励探索与反馈。
 + 补丁版本（X.Y.0）：当遇到重大问题时，会适时发布，旨在迅速修复关键性错误，保障系统稳定运行。

## 版本介绍

openGauss 7.0.0-RC2是openGauss 2025年9月发布的创新版本，该版本生命周期为0.5年。当前文档说明范围仅限企业版。

7.0.0-RC2与之前的版本特性功能保持兼容，主要功能如下：

- 继承功能：

  - 基础功能：SQL标准语法、数据类型(包括json和jsonb)、表\(包括临时表、全局临时表、外部表\)、视图、物化视图、外键、索引\(包括btree索引、Gin索引、hash索引\)、序列、函数、触发器、聚合函数median、ROWNUM、UPSERT、GB18030字符集。
  - SQL引擎增强：范围分区、LIST分区、HASH分区、基于范围分区的自动扩展分区、全局分区索引、行存转向量化、自治事务、并行查询、Global Syscache、Global PlanCache、IPv6协议、postgis插件、事件触发器。支持继承表。支持PIPELINED管道函数，函数可以返回行集合。SELECT语句支持通过TABLESAMPLE子句实现对指定子分区、视图、物化视图进行数据采样。支持通过ALTER TRIGGER的方式禁用/启动单个触发器。SELECT语句支持通过ROTATE和NOT ROTATE子句进行行列转换。支持通过SQL启用禁用table约束。数字支持以f/d结尾作为浮点数使用。支持 ‘NaN’ 和 ‘infinity’ 表示浮点数特殊值。支持IS [NOT] INFINITE和IS [NOT] NAN条件表达式。numeric数据类型精度设置允许precision大于scale，允许scale为负数。支持CROSS/OUTER APPLY JOIN语法。支持修改/删除视图引用的对象（如表、列、函数、视图等）后，将视图置为无效状态。
  - 存储引擎增强：延迟备库、备机支持逻辑复制、并行逻辑解码、灰度升级、指定节点升级、Hash索引、列存表主键唯一约束、Ustore存储引擎、段页式存储、发布订阅、行存表压缩、MOT内存表、NUMA-aware高性能优化等。
  - 资源池化：基于存储池化、内存池化和计算池化实现的openGauss 三层池化架构。优化备机可见性判断逻辑、优化主机推进oldestxmin逻辑、备机支持缓存快照信息，实现sysbench场景2节点性能6W tps，线性度1.6倍，相比优化前提升50%。支持备机事务内写语句透明转发到主机执行。DSS功能增强，支持NoF/NoF+协议；支持线程池模式，支持大并发处理；支持升级模式；支持黑匣子诊断。对接分布式存储，实现数据库算子卸载，加速TPCH性能提升40%。支持SPQ多机并行查询框架。DMS、CBB新增等待事件统计。支持在50W TPMC负载下RTO<10s。支持基于Dorado存储同步复制的主备双集群容灾。支持基于流复制的资源池化主备双集群容灾。按需回放redo阶段支持DDL执行。支持离线对资源池化备机进行扩缩容操作。支持虚拟机方式部署。支持xlog日志合一。实时构建支持流控。支持主备参数同步。支持页式存储。支持双集群缩容至单集群。支持归档。
  - 存储过程：存储过程、存储过程内commit/rollback、存储过程调试。支持存储过程覆盖率测试。游标支持嵌套定义。支持游标作为插入值。通过TYPE语法定义动态游标 REF CURSOR 时，支持通过RETURN指定游标返回的数据类型。游标参数支持设置默认值。支持array和record嵌套。支持使用ROWTYPE给游标赋值。
  - 安全功能：认证、权限管理、网络通信安全、数据库审计、全密态数据库、动态数据脱敏、国密算法、防篡改账本数据库、内置角色和权限管理、透明加密、ANY权限管理、用户级别审计等。支持第三方密钥管理服务。在鲲鹏服务器上，借助KAE组件，提升国密SM4加解密算法性能5%。支持对服务启停操作进行审计、对数据库备份恢复操作进行审计。支持对审计日志进行sha256完整性校验。发布安全配置基线以及安全配置巡检工具。支持禁止非owner用户远程执行DDL操作。
  - 高可用：主备双机、级联备机、逻辑复制、极致RTO、备机扩容、基于Paxos分布式一致性协议（DCF）、两地三中心跨Region容灾。并行回放性能优化，TPCC场景备机redo性能提升50%~100%。极致RTO支持备机可读，维持一主一备70W tpmC时，RTO<10s。主备高可用能力增强。支持异步备升主数据找回能力。逻辑复制增强。CM支持双集群中备集群首备和从备的switchover。CM支持选择实时回放节点，在主机故障时优先升主。CM选主逻辑优化，多数派备机未回放完时，及时选出旧主。CM支持在当前满足DN多数派场景下，动态开关最大可用，在从库丢失时打开最大可用，从库恢复后关闭最大可用。CM两节点部署，支持心跳网络，支持多个三方ip检测，减少脑裂情况发生。逻辑复制增强，新增支持Alter/Truncate/Rename 表和分区表DDL语法。CM 集群管理组件支持在资源池化场景下，通过CM检测reform阶段内核是否hang住。DCC支持节点间数据build，支持通过cm_ctl触发build操作。
  - 高性能：支持shared buffer按大页内存分配，实现4k pagesize环境中性能提升5%。内核GCC版本升级到GCC 10.3，基于反馈优化，TPCC性能提升6%。SCRLock提高分布式锁性能。分区表性能优化。UWAL实现数据库WAL性能加速。TPCC性能提升约20%。优化主备锁机制控制粒度和有序队列加锁逻辑，提升一主一同步备场景下TPCC性能10%。函数/PACKAGE支持指定并行相关参数，NO SCROLL游标和作为并行函数入参的游标表达式支持并行执行。使用用户态网络优化北向网络，单机TPCC性能提升15%。传统主备部署模式下支持行列转换功能，备机支持列存查询，TPCH 100G基准环境，整体性能对比原始行存方式平均提升5x。SMP场景扩展，IUD场景下stream算子上移，提升并行效率，性能提升50%以上。子事务场景性能提升，Multixact相关的SLRU buffer大小支持可配置，同时通过SLRU分bank优化，提升大量子事务场景下的性能100%+。支持自动参数化，在需要反复执行相似/相同的SQL简单语句的情境下（仅支持IUD），通过复用执行计划缓存以减少SQL语句的执行时间。
  - 向量数据库：支持原生向量存储，支持IVF-FLAT/IVF-PQ/HNSW/HNSW-PQ等向量索引类型。支持向标量融合查询，基于CBO生成最优计划。ANN索引支持并行构建，提升处理大规模数据集的效率。
  - AI4DB：参数自调优、慢SQL发现、AI查询时间预测、数据库指标采集预测与异常监控、异常检测自配置、DBMind自治运维平台、智能优化器、智能索引推荐。
  - DB4AI：deepSQL库内AI算法、库内AI算法支持XGBoost、multiclass和PCA。
  - 备份恢复：全量物理备份、逻辑备份、备机备份、增量备份和恢复、恢复到指定时间点\(PITR\)。
  - 运维能力：WDR诊断报告新增数据库运行指标、备机慢SQL诊断视图、unique sql自动淘汰。慢SQL根因分析优化，增强输出结论。慢SQL统计时间空洞补齐，支持细粒度阶段统计。支持switchover超时打印节点堆栈。增加对WalSender、WalRecv和WalRecvWriter线程的统计信息记录。支持在主机宕机的情况下，在备机上获取当前事务日志的同步位置。支持全链路跟踪能力，实现追踪并记录jdbc查询接口执行sql的端到端网络耗时，并记录在数据库dbe_perf.statement视图、statement_history表中。慢SQL统计默认开启计划统计，降低性能损耗。支持通过内置函数 gs_get_hba_conf() 获取pg_hba.conf文件中的内容。
  - JDBC：支持JDBC客户端负载均衡及读写分离、主节点心跳检测。
  - 集群管理：支持CM集群管理，CM支持自定义资源监控、支持VIP管理、支持两节点部署，支持对外状态查询和推送能力。
  - 工具链：开发工具DataStudio、MySQL全量迁移工具gs_mysync、增量和反向迁移工具gs_replicate、数据校验工具gs_datacheck、数据全生命周期生产工具DataKit。支持升级场景数据字典校验工具。OM工具解耦对OS版本依赖。支持实例监控插件和智能诊断插件，实现SQL、会话、实例和集群指标监控，支持历史数据分析与SQL诊断、告警监控和告警通知，提升智能运维能力。数据库开发插件增强，支持表/视图/用户角色/函数/存储过程等对象管理。MySQL全量迁移：支持直接读取csv文件用于数据迁移，索引并行创建，解除跨平台的依赖，可靠性增强。MySQL增量&反向迁移：支持断点续传，支持迁移进度展示，反向迁移支持全量迁移。数据校验：支持按表分片校验，增强和全量迁移流程的配合，提升校验性能到150MB/s。提供gs_perfconfig支持开箱即用，性能最优。支持 Oracle 全量、增量、反向迁移，支持数据校验。DataKit集成兼容性评估工具、支持集群拓扑显示、实例监控插件增加新指标、优化采集架构、智能诊断增加诊断经验，优化SQL诊断任务、日志检索插件增加CM日志采集，支持lucene语法搜索、告警监控插件增加内置规则、支持告警收敛、优化页面、支持组件安装路径可选、支持智能参数调优插件、支持资源池化双集群部署。支持流量录制回放工具，支持连接源端数据库（MySQL），采集SQL，并且向 openGauss 数据库进行 SQL 回放&压测。支持解析MySQL数据库的 General Log表或文件、支持Attach到JAVA应用程序、支持截取和解析MySQL网络通讯包等方式采集SQL。支持多次回放并比较结果和性能。Portal支持依赖包离线安装。迁移插件支持连接到数据库集群。支持按文件导入方式批量添加服务器和批量添加用户。支持多数据库集群并行安装。支持SSO与DevKit统一登录，实现同一用户可以登录到DevKit和DataKit。录制回放支持采集openGauss流量，支持录制回放的结果对比。支持PostgreSQL到openGauss的迁移能力。支持添加IPV6实例。
  - 中间件：shardingSphere、openLookeng。
  - 周边生态：dblink；支持openEuler、CentOS、FusionOS系统；绝大部分MySQL语法和协议兼容。
  - 插件：GMS_STATS插件，支持收集特定schame下对象的统计信息。GMS_PROFILER插件，用于收集PL/pgSQL程序执行情况。GMS_OUTPUT插件，提供将文本行写入内存、供以后提取和显示的功能。
  - 企业级特性：支持修改表压缩属性。子事务并发回滚流程优化，减少锁争抢，提升并发执行效率。支持GB18030-2022标准。存储过程支持嵌套调试，支持匿名块调试。发布订阅支持用户自定义冲突解决方案。支持多语言日志。支持限制内核日志最大磁盘占用空间。支持龙芯平台编译。索引创建支持预扩展，堆表支持预读。压缩表支持页式存储和段页式存储两种模式。
  - 其他：cmake脚本编译、容器化部署、kubernetes。

- 新增功能：
  - 高智能：向量数据库支持BM25全文检索，支持多语言 SDK 接入。
  - 高智能：向量索引扫描支持SQL Bypass、HNSW索引支持通过mmap方式读取，提升向量扫描性能20%+。
  - 高智能：向量数据库支持DiskANN磁盘索引算法。
  - 高智能：向量数据库支持多向量召回。
  - 高性能：Xlog刷盘优化。通过在低并发场景直接刷xlog、部分字段合并、减少持锁放锁代价等方式提升低并发场景下的xlog刷盘效率。
  - 高性能：提升单条INSERT/REPLACE SQL带多个VALUES场景的插入性能50%+。
  - 高性能：支持bloom索引。
  - 高性能：新增Memoize算子优化NestLoop场景性能。
  - 高可用：增量build场景支持校验commit lsn。
  - 高可用：备机数据读取出现坏块，支持从主机修复。
  - 高安全：提供数据保险柜功能。结合VirtCCA机密虚机和Dorado Worm安全存储，实现对数据库WAL日志的实时同步，形成对用户数据库系统的日志安全保护的软硬一体组合方案。
  - 资源池化：支持对接分布式存储Oceanstor Pacific。
  - 企业级特性：支持通过视图查询当前会话拥有的自动参数化计划信息。
  - 企业级特性：Ubtree索引支持undo管理，支持PCR。
  - 企业级特性：行存压缩功能协同KAE硬件加速，2P TPCC场景下，性能影响小于5%，CPU压缩开销相较于没有KAE场景时降低50%。
  - 企业级特性：支持通过配置SQL防火墙规则，限制指定SQL的执行并发数。
  - 企业级特性：OM升级前支持升级预校验。
  - 企业级特性：支持内核全链路跟踪。记录SQL执行链路的上下游关系以及各个步骤、算子的耗时。
  - 企业级特性：内核监控告警。通过采集数据库内核后台线程和服务器系统的运行状态，经过分析和计算评估数据库是否出现异常，并将异常信息写入到告警日志。
  - DataKit：支持SQL Server到openGauss的全量数据迁移、常用对象迁移。
  - DataKit：支持DataKit最小化打包，插件按需下载。
  - DataKit：支持存储历史慢SQL。
  - DataKit：支持PostgreSQL到openGauss的全量/增量数据迁移、全量/增量数据校验、反向迁移。

## 特性介绍

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

### 新增特性<a name="zh-cn_topic_0283136327_section383172195410"></a>

此处说明的是openGauss 7.0.0-RC2版本，在7.0.0-RC1版本功能的基础上，新增如下特性：

- 高性能：Xlog刷盘优化

  - 新增添加enable_LC_xlog_flush_optimize和xlog_write_flush_split参数，通过在低并发场景直接刷xlog、部分字段合并、减少持锁放锁代价等方式提升低并发场景下的xlog刷盘效率。[其他选项](../database_reference/other_options.md)
  
- 高性能：提升单条INSERT/REPLACE SQL带多个VALUES场景的插入性能50%+

  - 新增enable_parse_fusion参数，提升单条INSERT/REPLACE SQL带多个VALUES场景的插入性能50%+。[其他选项](../database_reference/other_options.md)

- 高性能：支持bloom索引

  - Bloom过滤器是一种节省空间的数据结构，用于测试元素是否是集合的成员。对于索引访问方法，它允许通过签名快速排除不匹配的元组，其大小在索引创建时确定。当表具有许多属性并且查询测试它们的任意组合时，这种类型的索引最有用。传统的btree索引比bloom索引更快，但它可能需要许多 btree索引来支持所有可能的查询，但bloom索引只需要一个。[子事务TPCC性能调优](../sql_reference/bloom_index.md)

- 高性能：新增Memoize算子优化NestLoop场景性能

  - 新增enable_memoize参数，对于可以参数化的NestLoop路径，连接键内表的distinct值较少时，通过memoize算子将内表值缓存在内存中可以提高性能。[优化器方法配置](../database_reference/optimizer_method_configuration.md)

- 高可用：增量build场景支持校验commit lsn

  - gs_ctl在执行增量build时，支持通过 --verify-commit 选项对备机已提交事务进行校验，如果备机与主机存在共同的checkpoint日志，但之后存在不同的提交数据，则为保证这部分数据不丢失，增量build失败，且不会转为全量build。[gs_ctl](../tool_and_commandreference/gs_ctl.md)

- 高可用：数据读取出现坏块，支持从其他节点进行修复

  - 在数据库运行过程中，会因为某些磁盘问题（例如数据意外覆盖）等问题，导致磁盘数据损坏，从而影响数据库的正常运行。为了解决这类问题，openGauss数据库提供了主库备库坏块恢复功能，用于解决主库备库坏块问题。通过该方式，可以解决主库备库坏块问题，从而保证数据库的可用性。[主库备库坏块修复功能](../characteristic_description/primary_and_standby_database_bad_block_repair_function.md)

- 高安全：提供数据保险柜功能

  - GR（oGRecorder）是一款数据库日志保护软件。其典型部署场景是运行于virtCCA中，南向对接Dorado Worm存储，北向通过oGRecorderSDK对接数据库，实现对数据库WAL日志的实时同步，形成对用户数据库系统的日志安全保护的软硬一体组合方案。[数据保险柜](../tool_and_commandreference/ogrecorder/ogrecorder_overview.md)

- 高智能：向量数据库增强。[DataVec向量数据库](../datavec/datavec_overview.md)

  - 支持BM25全文检索。[BM25全文建索索引](../datavec/bm25_full_text_search_index.md)
  - HNSW-PQ支持通过mmap方式读取，提升检索性能，通过enable_mmap等参数控制。[PQ](../datavec/pq.md)
  - 支持DiskANN磁盘索引算法。[DiskANN](../datavec/diskann.md)
  - 支持支持多向量召回。支持在单次搜索请求中同时提交多个查询向量，openGauss将并行对查询向量进行搜索，并返回多组结果。[Python SDK对接向量数据库](../datavec/integration_python.md)

- 资源池化：支持对接分布式存储Oceanstor Pacific

  - 资源池化集群支持部署在Oceanstor Pacific分布式存储之上。

- 企业级特性：支持通过视图查询当前会话拥有的自动参数化计划信息

  - 新增query_parameterization_views视图函数查询自动化参数信息。[query_parameterization_views](../sql_reference/other_functions.md)

- 企业级特性：Ubtree索引支持undo管理，支持PCR

  - 通过undo管理，支持PCR的方式解决索引历史版本、数据混合存储，索引每行保存事务信息导致的索引存储空间膨胀的问题。

- 企业级特性：压缩功能增强

  - 压缩功能支持KAE硬件加速，2P TPCC场景下，性能影响小于5%，CPU压缩开销相较于没有KAE场景时降低50%。[支持OLTP场景数据压缩](../database_administration_guide/data_compression_in_oltp_scenarios.md)

- 企业级特性：SQL防火墙

  - 通过系统表和系统函数实现SQL防火墙规则的配置，在业务SQL执行时，通过检查是否匹配SQL防火墙规则，如果匹配则拦截报错，否则继续执行。限制指定SQL的执行并发数，保证业务的稳定性和健壮性。[SQL防火墙](../characteristic_description/sql_firewall_capability.md)

- 企业级特性：内核全链路跟踪

  - 追踪用户 SQL 请求在数据库全链路过程中，在不同阶段执行的相关信息，并以树状结构展现给用户，帮助开发者回溯执行时间超过阈值的SQL，诊断SQL性能瓶颈。[全链路跟踪](../characteristic_description/full_link_tracking.md)

- 企业级特性：内核监控告警

  - 通过采集数据库内核后台线程和服务器系统的运行状态，经过分析和计算评估数据库是否出现异常，并将异常信息写入到告警日志中。帮助及时发现潜在问题，快速定位根源，并高效解决问题。[内核监控告警](../characteristic_description/monitoring_alerts.md)

- 内核工具：OM工具增强

  - 通过gs_preupgradechk工具在升级前检查集群中cpu、内存、磁盘、网络、进程等资源情况是否满足升级条件。[gs_preupgradechk](../tool_and_commandreference/gs_preupgradechk.md)

- DataKit：迁移工具增强

  - PostgreSQL到openGauss的迁移能力集成至DataKit。
  - 支持SQL Server到openGauss的全量数据迁移、常用对象迁移。（暂未集成至datakit，提供单独的二进制工具）

- DataKit：安装部署优化。[DataKit](../characteristic_description/tool_chain_datakit.md)

  - 支持DataKit最小化打包，插件按需下载。

## 版本使用注意事项

- 版本技术规格可以参照《关于openGauss》中的[技术指标](../about_opengauss/technical_indicators.md)。
- 可参照《数据库管理指南》中的[数据库部署方案](../database_administration_guide/opengauss_common_primary_standby_deployment_solutions.md)，选择业务需要的部署架构，保证数据库集群的可靠性和可用性。

## 已知问题

- openGauss没有文件权限，慢盘监控功能。在文件权限异常时，数据库会退出，日志中会有相应打印信息。在慢盘时，数据库操作会变慢。
- MOT（Memory Optimized Tables）与增量检查点特性不兼容，如果使用MOT，需要关闭增量检查点功能。
- LLVM对ARM架构支持不友好，在导入MOT的TPCC时候报LLVM相关错误。可以通过不启用JIT规避，使用enable\_mot\_codegen开关控制。对于不启用JIT对TPCC测试产生的性能影响，可以通过force\_mot\_pseudo\_codegen= true配置来降低性能影响。

## CVE漏洞

本版本是2025年9月发布的创新版本，版本涉及的CVE漏洞可通过[CVE列表](https://opengauss.org/zh/cve)查询。

## 已修复问题

opengauss 7.0.0-RC2已修复问题.md

完整问题清单请参见[完整问题清单](https://gitcode.com/opengauss/openGauss-server/issues)。

完整的内核提交记录请参见[提交记录](https://gitcode.com/opengauss/openGauss-server/commits/v7.0.0-RC2)。

已修复问题请参见下表。

| ISSUE                                                        | 关联仓库                                | 问题描述                                                     |
| ------------------------------------------------------------ | --------------------------------------- | ------------------------------------------------------------ |
| [7541](https://gitcode.com/opengauss/openGauss-server/issues/7541) | openGauss-server | [Bug]: 【升级】从6.0.0版本不带CM升级到带CM的7.0.0RC2B024版本，回滚后报错 |
| [7539](https://gitcode.com/opengauss/openGauss-server/issues/7539) | openGauss-server | [Bug]: 【资源池化】主备均跑业务的情况下，手动kill掉主节点的db进程6次，集群未成功failover，主节点core |
| [7537](https://gitcode.com/opengauss/openGauss-server/issues/7537) | openGauss-server | 从5.0.0版本升级到7.0.0RC2B024版本，升级报错 |
| [7535](https://gitcode.com/opengauss/openGauss-server/issues/7535) | openGauss-server | [Bug]: astore表+hash索引，执行计划走bitmapscan时，pg_stat_all_tables视图更新字段为last_seq_scan，预期是更新last_idx_scan |
| [7507](https://gitcode.com/opengauss/openGauss-server/issues/7507) | openGauss-server | [Bug]: most_available_sync设置成on未生效 |
| [7500](https://gitcode.com/opengauss/openGauss-server/issues/7500) | openGauss-server | [Bug]: 没有表的select权限时可以通过内联视图更新和删除数据 |
| [7463](https://gitcode.com/opengauss/openGauss-server/issues/7463) | openGauss-server | [Bug]: gsql连接时，connection_timeout参数不起作用 |
| [7429](https://gitcode.com/opengauss/openGauss-server/issues/7429) | openGauss-server | [Bug]: 使用nodejs、c++进行多向量召回，传入完整的sql语句进行查询，数据库会core。 |
| [7427](https://gitcode.com/opengauss/openGauss-server/issues/7427) | openGauss-server | [Bug]: 【测试类型：功能测试】【测试版本：7.0.0-RC2】【资源池化】自动化，B020版本执行用例时产生较多mes相关的core，疑似CBB代码变动引起 |
| [7407](https://gitcode.com/opengauss/openGauss-server/issues/7407) | openGauss-server | 【测试类型：SQL功能】【测试版本：7.0.0-RC2】主备场景下，主机更新数据可以走diskann索引查询，备机索引查询时发生core |
| [7402](https://gitcode.com/opengauss/openGauss-server/issues/7402) | openGauss-server | [移动在线] gs_probackup oss对象存储恢复速率过慢，影响客户容灾场景快速恢复 |
| [7397](https://gitcode.com/opengauss/openGauss-server/issues/7397) | openGauss-server | [Bug]: union all语句使用smp导致coredump |
| [7394](https://gitcode.com/opengauss/openGauss-server/issues/7394) | openGauss-server | 【测试类型：SQL功能】【测试版本：7.0.0-RC2】只加载diskann的PQ库时，创建hnswpq索引数据库core掉 |
| [7393](https://gitcode.com/opengauss/openGauss-server/issues/7393) | openGauss-server | [Bug]: 安装报错 |
| [7387](https://gitcode.com/opengauss/openGauss-server/issues/7387) | openGauss-server | 【测试类型：SQL功能】【测试版本：7.0.0-RC2】使用diskann索引进行向量搜索时，返回的数据条数与预期不一致 |
| [7386](https://gitcode.com/opengauss/openGauss-server/issues/7386) | openGauss-server | 【测试类型：SQL功能】【测试版本：7.0.0-RC2】使用diskann创建分区表LOCAL分区索引和非日志表索引时数据库宕机 |
| [7345](https://gitcode.com/opengauss/openGauss-server/issues/7345) | openGauss-server | [Bug]: 【高概率偶现】受修复GiST索引扫描问题单影响，导致BM25索引查询出现coredum |
| [7343](https://gitcode.com/opengauss/openGauss-server/issues/7343) | openGauss-server | [Bug]: 传统6.0.2B003升级到7.0.0RC2B016报错，升级失败 |
| [7341](https://gitcode.com/opengauss/openGauss-server/issues/7341) | openGauss-server | [Bug]: 修改参数enable_stmt_track=on和track_stmt_stat_level='L1,L0'之后性能大幅下降，默认值基线134.05w，非分区表性能88.9w，性能相比下降33.7%。分区表性能10.76w，性能相比下降92%。 |
| [7309](https://gitcode.com/opengauss/openGauss-server/issues/7309) | openGauss-server | [Bug]: libpgtypes.so 为空 |
| [7298](https://gitcode.com/opengauss/openGauss-server/issues/7298) | openGauss-server | [Bug]: 【测试类型：SQL功能】【测试版本：7.0.0】【需求：内存池共享内存，RTO<6s】无rackmanager的环境，设置max_smb_memory参数，数据库启动失败产生core |
| [7286](https://gitcode.com/opengauss/openGauss-server/issues/7286) | openGauss-server | [Bug]: 【测试类型：SQL功能】【测试版本：7.0.0】ident_current函数的返回结果插入表的某列，违反约束时，插入后数据库挂掉无core |
| [7278](https://gitcode.com/opengauss/openGauss-server/issues/7278) | openGauss-server | [Bug]: 【测试类型：SQL功能】【测试版本：7.0.0-RC2】向量索引查询计划无法走bypass |
| [7275](https://gitcode.com/opengauss/openGauss-server/issues/7275) | openGauss-server | [Bug]: 3.0,5.0版本二级分区表，分区子表统计信息不能自动收集 |
| [7273](https://gitcode.com/opengauss/openGauss-server/issues/7273) | openGauss-server | [Bug]: 【测试类型：稳定性测试】【测试版本：7.0.0-RC2】【资源池化】稳定性测试，业务连跑7H左右节点异常，产生dms_invalidate_ownership相关core |
| [7270](https://gitcode.com/opengauss/openGauss-server/issues/7270) | openGauss-server | [Bug]:【ci】 数据库扩容失败 |
| [1555](https://gitcode.com/opengauss/Plugin/issues/1555) | Plugin | [Bug]: 24.03编译dolphin失败，dolphin--4.2--4.1.sql not found |
| [1544](https://gitcode.com/opengauss/Plugin/issues/1544) | Plugin | spq_plugin插件存在致命类告警问题 |
| [1116](https://gitcode.com/opengauss/openGauss-workbench/issues/1116) | openGauss-workbench | [Bug]: datakit安装数据库时，前端传递加密后的密码，后端未解密导致安装失败 |
| [1079](https://gitcode.com/opengauss/openGauss-workbench/issues/1079) | openGauss-workbench | [Bug]: datakit使用intarkdb作为基座数据库时，部分系统表的建表语句不支持导致缺少相关表 |
| [1066](https://gitcode.com/opengauss/openGauss-workbench/issues/1066) | openGauss-workbench | [Bug]: datakit使用intarkdb作为基座数据库,服务器管理异常报错，获取cpu_freq字段数据失败 |
| [1049](https://gitcode.com/opengauss/openGauss-workbench/issues/1049) | openGauss-workbench | [Bug]: datakit安装数据库时，环境检查无法获取CPU信息，导致校验不通过，无法安装数据库 |
| [1024](https://gitcode.com/opengauss/openGauss-workbench/issues/1024) | openGauss-workbench | [Bug]: datakit创建迁移任务时，配置自定义参数的高级参数设置页面异常 |
| [1017](https://gitcode.com/opengauss/openGauss-workbench/issues/1017) | openGauss-workbench | [Bug]: datakit安装portal时，物理机搜索功能异常 |

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

## 参与贡献

**参与贡献**

作为openGauss用户，你可以通过多种方式协助openGauss社区。参与社区贡献的方法请参见[社区贡献](https://opengauss.org/zh/contribution/)，这里简单列出部分方式供参考。

**特别兴趣小组**

openGauss将拥有共同兴趣的人们聚在一起，组成了不同的特别兴趣小组（SIG）。当前已有的SIG请参见[SIG列表](https://opengauss.org/zh/contribution/)。

我们欢迎并鼓励你加入已有的SIG或创建新的SIG，创建方法请参见[SIG管理指南](https://gitcode.com/opengauss/tc/blob/master/sigs/README.md/)。

**邮件列表和任务**

欢迎你积极地帮助用户解决在[邮件列表](https://opengauss.org/zh/community/onlineCommunication/)和issue任务（包括[代码仓任务](https://gitee.com/organizations/opengauss/issues)）中提出的问题。另外，我们也欢迎你提出问题。这些都将帮助openGauss社区更好地发展。

**文档**

你不仅可以通过提交代码参与社区贡献，我们也欢迎你反馈遇到的问题、困难，或者对文档易用性、完整性的改进建议等。例如获取软件或文档过程中的问题，使用系统过程中的难点。欢迎关注并改进openGauss社区的文档模块。

## 致谢<a name="ZH-CN_TOPIC_0289899198"></a>

我们衷心地感谢参与和协助 openGauss 7.0.0-RC2版本发布的项目的所有开发者和伙伴，包括华为、北京海量数据技术股份有限公司、中移信息技术有限公司、粤港澳大湾区（广东）国创中心、软通动力信息技术（集团）股份有限公司、天津南大通用数据技术股份有限公司、云和恩墨（北京）信息技术有限公司、天津神舟通用数据技术有限公司、万宝盛华大中华有限公司、中科院软件所、邮储银行、天津凡泰、易宝软件有限公司、民生银行、国能信息、海康威视、浙江大华、兴业银行、中软国际等组织单位。是你们的辛勤付出使得版本顺利发布，也为openGauss更好地发展提供可能。
