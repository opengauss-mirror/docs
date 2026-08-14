# 资源池化灵衢内存语义加速

## 可获得性<a name="section15406143204715"></a>

本特性在 openGauss 资源池化架构中引入，仅适用于资源池化架构；其中事务快照共享内存直读加速能力自 openGauss 7.0.0 版本开始引入。集群各节点需具备灵衢超节点（UB）能力、UBS Memory 服务及 ubs-atomic 开源库运行环境。

## 特性简介<a name="section740615433477"></a>

openGauss 基于灵衢超节点（UB）共享内存能力，为资源池化架构提供内存语义加速，主要包括两类能力：

- **MES 节点间共享内存通信优化（SHM 传输模式）**：在 MES（Message Exchange Service）通信层新增 SHM（Shared Memory）传输模式，作为与 TCP、RDMA/UBC 并列的第三种节点间通信方式。SHM 模式基于灵衢超节点 UBS Memory 服务与 ub_dist_comm_queue（ubs-atomic 库能力）分布式通信队列，在节点间建立共享内存环形缓冲区，实现零拷贝消息收发；互连类型、队列 CPU 绑核及传输性能统计均可通过 GUC 参数配置。
- **事务快照共享内存直读加速**：为 CLOG、CSNLOG、Snapshot 和 OldestXmin 等高频事务元数据建立共享内存加速通道，将备机的事务状态查询与可见性判断从"消息获取"优化为"共享内存直读"，降低跨节点访问时延，减轻主机消息处理压力，提升资源池化场景的事务处理效率。

## 客户价值<a name="section13406743164715"></a>

- 为资源池化场景下 MES 节点间通信提供基于 UB 共享内存的底层传输通道，支撑小包高频场景下的低时延跨节点消息交互。
- 避免协议栈上下文切换与多次内存拷贝；相比 URMA，在小包高频场景下协议开销更低、时延更优，可显著降低节点间消息传输时延并提升小包高频场景吞吐量。
- 备机访问事务状态和可见性信息时的跨节点时延显著降低，热点事务路径的访问效率提升；同时减少主机处理 DMS 请求和广播同步的压力，缓解高并发场景下的消息负载，提高多节点读写的并发能力。
- 在不改变现有事务语义和异常处理框架的前提下，通过"共享内存优先、DMS 回退"的方式兼顾性能与可靠性；SHM 与既有 TCP、RDMA/UBC 模式互斥可选，不改变现有传输模式行为及 MES 消息协议。

## 特性描述<a name="section16406154310471"></a>

### MES 节点间共享内存通信优化（SHM 传输模式）

- 在 CBB MES 模块实现 SHM 传输模式：各节点通过 UBS Memory API 创建共享内存 region 与 9 个 ub_queue 队列的共享内存对象（优先级 0–7 及 prio6-mirror 队列），映射集群内其他节点共享内存，并基于 ub_dist_comm_queue 完成消息收发、连接管理与断连清理。
- 在 DMS 层新增 `DMS_CONN_MODE_SHM` 连接模式及 `DMS_CS_TYPE_SHM` 管道类型，将 SHM 队列 CPU 绑核等配置从 openGauss-server 透传至 MES。
- 在 openGauss-server 层扩展 `ss_interconnect_type` 支持 SHM 取值，新增 `ss_shm_ub_comm_cpu_bind`（9 个队列的 CPU 亲和性，格式 `[id,id,...]` 或 `[lo~hi]`）与 `ss_mes_elapsed_switch`（MES 耗时统计开关）；上述 GUC 为 PGC_POSTMASTER 级别，需重启生效。
- SHM 模式下消息接收由 ub_dist_comm_queue 内部回调线程驱动，不启动 MES 独立接收线程；优先级 6 的消息在 prio6、prio7、prio6-mirror 三个队列间轮转发送，以缓解高优先级队列压力。
- 支持按 ub_queue（0–8）维度的发送时延（avg/max/min）、发送计数与接收计数统计；开启 `ss_mes_elapsed_switch` 后，按约 10 秒窗口输出至运行日志（该开关默认关闭）。

### 事务快照共享内存直读加速

在资源池化（一写多读）场景下，利用灵衢 UB 共享内存能力，为主备节点间的四类事务元数据传输建立加速通道：

- **CLOG 获取加速**：主机在更新事务状态时同步维护 CLOG 共享内存缓存，备机查询事务提交、回滚和进行中状态时优先读取共享内存，失败后回退 DMS。
- **CSNLOG 获取加速**：主机在写入事务 CSN 时同步维护 CSNLOG 共享内存缓存，备机进行事务可见性判断时优先读取共享内存中的 CSN 信息，失败后回退 DMS。
- **Snapshot 获取加速**：主机在刷新最新 MVCC 快照时同步维护 Snapshot 共享内存槽位，备机获取快照时优先读取共享内存中的 xmin/xmax/csn，失败后回退广播或 DMS。
- **OldestXmin 同步加速**：备机定期将本节点 oldest_xmin 写入主机共享内存指定槽位，主机基于共享内存和本地状态维护全局 OldestXmin，失败后回退 DMS。
- **Reform 场景适配**：定义共享内存在 normal reform、switchover、failover 等场景下的初始化、映射、重建、热缓存拷贝、预热和失效处理规则，确保功能在故障和角色切换场景下行为可控。

本特性不涉及 CLOG、CSNLOG 的磁盘格式变更，不改变事务可见性语义，不新增用户可见 SQL 接口；现有 DMS 路径继续作为共享内存路径的异常兜底机制保留。

## 特性增强<a name="section1340684315478"></a>

- MES 通信层新增 SHM 传输模式，与 TCP、RDMA/UBC 并列可选；基于 UB 共享内存实现跨节点零拷贝消息收发。
- 支持 9 个 ub_queue 队列的独立共享内存对象与 ub_comm_queue 句柄，以及 per-queue CPU 绑核；新增 SHM 传输性能统计与节点间共享内存映射重试、断连解映射等可靠性机制。
- CLOG/CSNLOG 共享内存作为跨节点一级热缓存，本地 SLRU 缓存继续保留为节点内二级缓存，不改变原有事务状态落盘顺序和恢复语义。
- Snapshot 分区采用"version + xmin/xmax/csn + version"的双读校验方式，利用灵衢共享内存最高 128 位原子读写能力，避免读取半写状态。
- switchover 和在线 failover 场景下支持旧主热缓存迁移，startup_reform 场景下支持 SLRU 预热；共享内存生命周期自动管理，尽可能减少用户手动清理共享内存的操作。

## 特性约束<a name="section06531946143616"></a>

- 本特性仅在 openGauss 资源池化架构下生效，集群各节点需具备灵衢超节点（UB）能力，并在数据库参数配置文件中设置 UB 动态库路径。
- 本特性在集群中所有节点统一生效，不支持集群中部分节点开启该功能。
- SHM 传输模式仅在 `ss_interconnect_type` 配置为 SHM 时启用，与 TCP、RDMA/UBC 互斥，不影响其他模式。
- 依赖灵衢超节点 UBS Memory 服务与 ubs-atomic（ub_dist_comm_queue）动态库，运行时通过 dlopen 加载。
- `enable_ub`、`ss_init_clog_size`、`ss_interconnect_type`、`ss_shm_ub_comm_cpu_bind`、`ss_mes_elapsed_switch` 及互连类型相关配置均为静态配置（PGC_POSTMASTER），不支持动态生效，修改后需重启集群节点。
- CLOG 分区实际占用 8GB、CSNLOG 分区实际占用 2GB，OldestXmin 和 Snapshot 分区各按最小粒度对齐到 128MB，整块连续共享内存总占用约 11GB，需确保超节点有足够共享内存资源。
- 本特性创建的共享内存主要用于事务和快照信息的缓存访问加速，退出时不进行清理，便于下次启动复用。
- 由于灵衢共享内存映射对用户权限具有条件约束，本特性使用时集群各个节点的用户 uid 必须保持相同。
- 不推荐使用安装包内附带的 libstdc++.so.6，应当使用系统 /usr/lib64/ 目录下的动态库，否则可能导致启动失败。
- 共享内存映射对端失败时最多重试 60 次（间隔 1 秒），以容忍节点启动时序差异；对端共享内存未就绪前对应 pipe 不可用于收发。
- 灵衢内存故障场景的处理依赖 OS 层面相关可靠性功能实现，目前正在进行适配和开发工作中，该场景处理暂未加入本特性。
- 主机启动场景下的 SLRU 预热会增加主机启动耗时，`ss_init_clog_size` 配置越大，预热开销越高；在线 failover 和 switchover 场景，新主会将旧主共享内存拷贝给自己，避免冷启动，会增加部分 RTO 时间。

## 依赖关系<a name="section8406643144716"></a>

- **硬件依赖**：集群各节点需具备灵衢超节点（UB）共享内存能力。
- **软件依赖**：依赖 UBS Memory 服务提供的共享内存创建与映射能力、ubs-atomic（ub_dist_comm_queue）通信队列库，以及 DMS 组件提供资源池化场景下的事务状态同步兜底机制。
- **参数依赖**：事务快照共享内存直读加速的总开关 `enable_ub` 需设置为 on；`ss_init_clog_size` 用于调整 CLOG/CSNLOG 启动预热窗口上限；SHM 传输模式需将 `ss_interconnect_type` 配置为 SHM，并可通过 `ss_shm_ub_comm_cpu_bind`、`ss_mes_elapsed_switch` 调整队列绑核与传输性能统计。
- 涉及 CBB、DMS、openGauss-server 三个仓库的协同改造，无独立交付件。

## 基本原理<a name="section8406643144716"></a>

本特性采用"本地持久化链路不变、灵衢共享内存优先访问、DMS 作为兜底"的分层方案。

- **共享内存管理层（SHM 传输）**：基于 UBS Memory API 在各节点创建命名 region（`region_mes_<user>_<index>`）及 per-queue 共享内存对象（`shm_mes_<user>_<index>_<queue_idx>`），段内划分为 Boot 区域与 Ring 区域（128MiB 对齐），并映射本节点及对端节点共享内存至本地地址空间。
- **通信队列层**：基于 ub_dist_comm_queue 为每个优先级队列初始化环形缓冲区，注册 MES 命令回调；发送时调用 `ub_comm_queue_send` 将消息写入目标节点 Ring Buffer，接收由队列内部回调线程驱动并投递至 MES 消息处理流程。
- **事务缓存共享内存组织**：每个节点创建一块固定长度的连续共享内存（名称 `ub_<inst_id>_<user_id>_txn_cache`），按偏移划分为控制块、CLOG 区、CSNLOG 区、OldestXmin 区和 Snapshot 区；所有节点映射主节点的共享内存，发生倒换后重新映射新主节点的共享内存。
- **访问路径**：备机访问事务元数据时优先读取主机共享内存，命中则直接返回；未命中、校验失败、处于 reform 期间或共享内存不可用时，回退到现有 DMS 链路。

## 使用指导<a name="section8406643144716"></a>

### 参数配置

| 参数名 | 类型/GUC级别 | 默认值 | 取值范围 | 生效方式 | 说明 |
| --- | --- | --- | --- | --- | --- |
| enable_ub | bool / PGC_POSTMASTER | off | on/off | 重启生效 | 事务快照共享内存直读加速的总开关。开启后，资源池化节点在启动阶段初始化 UB 共享域、事务共享内存及四类分区，并在主备事务访问路径上启用"共享内存优先、DMS 回退"的加速逻辑。 |
| ss_init_clog_size | int(kB) / PGC_POSTMASTER | 0 | 0 ~ 1048576 | 重启生效 | startup_reform 场景下 CLOG/CSNLOG 启动预热窗口上限控制参数。参数越大，切换后热点事务命中率越高，但恢复尾段耗时也越长；参数越小，恢复更快，但冷启动爬坡更明显。 |
| ss_interconnect_type | string / PGC_POSTMASTER | TCP | TCP、RDMA、SHM | 重启生效 | MES 通信协议类型。配置为 SHM 时启用灵衢 UB 共享内存互连。 |
| ss_shm_ub_comm_cpu_bind | string / PGC_POSTMASTER | ""（空字符串） | 格式 `[id,id,...]` 或 `[lo~hi]` | 重启生效 | SHM 模式下 9 个 ub_queue 队列的 CPU 亲和性配置，未配置或解析失败时对应队列不绑核。 |
| ss_mes_elapsed_switch | bool / PGC_POSTMASTER | off | on/off | 重启生效 | MES 耗时统计开关。开启后按 ub_queue 维度统计发送时延（avg/max/min）、发送次数与接收次数，约每 10 秒输出至运行日志。 |

以上参数的详细说明请参考[资源池化参数](../database_reference/resource_pooling_parameters.md)。

### 配置策略

1. **部署启动**：如需使用事务快照共享内存直读加速，需设置 `enable_ub = on`；`ss_init_clog_size` 可自行设置，也可使用默认值。
2. 初次启动如果发现有残留的未知共享内存存在，可以使用 `ubsectl delete memory -t share --name xxx` 命令将内存清理掉，防止访问到错误的遗留内存块。
3. 由于特性约束中提到的依赖文件限制，在通过 gs_install 执行脚本安装好集群环境之后，需要检索 openGauss 目录下的 libstdc++.so.6 文件，并使用 mv 或 rm 命令将其备份或者直接删除，使 gaussdb 自动链接系统库文件。
4. 本特性必须依赖 UBS Memory 动态库组件，因此需要在系统参数配置中添加文件路径参数，例如 `ubs_mem_path = '/usr/local/ubs_mem/lib/libubsmem_sdk.so'`，具体路径根据 UB 安装设置决定。
5. **启用 SHM 传输模式**：设置 `ss_interconnect_type = 'SHM'`；可按需配置 `ss_shm_ub_comm_cpu_bind` 设置队列 CPU 亲和性，或设置 `ss_mes_elapsed_switch = on` 开启传输性能统计。SHM 模式与 TCP、RDMA/UBC 互斥，启用前需确认集群各节点已部署并可用 UBS Memory 与 ub_dist_comm_queue 运行环境。

### 参数联动约束

- `enable_ub` 是事务快照共享内存直读加速的前置开关，只有在其开启时，其余相关参数才具备实际意义。
- `ss_init_clog_size` 只在主机启动场景生效，normal reform、switchover 和在线 failover 场景不触发预热逻辑。
- `ss_shm_ub_comm_cpu_bind`、`ss_mes_elapsed_switch` 仅在 `ss_interconnect_type` 为 SHM 时生效。

## 使用场景<a name="section8406643144716"></a>

- 资源池化一主多备集群中，备机大量执行只读查询、需要频繁判断事务可见性的场景，CLOG/CSNLOG 共享内存直读可显著降低单次事务状态查询的跨节点往返开销，同时加速备机获取快照。
- 资源池化集群中 MES 节点间小包高频消息通信场景，例如对跨节点消息时延敏感、通信频次较高的 DMS/MES 协同路径。
- 已部署灵衢超节点且希望以共享内存替代 TCP 或 URMA 作为 MES 底层互连的部署场景。
