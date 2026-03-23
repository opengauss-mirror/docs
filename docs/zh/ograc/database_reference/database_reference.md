# GUC参数

## **_INDEX_BUFFER_SIZE**

**参数描述**  
用于存储索引热点页（当前主要指B树索引根节点页面）只读副本的全局缓存。该缓存旨在减少对高并发访问索引页的争用，从而提升系统并发性能。

**取值范围**

- 最小值：`16K` （16,384 字节）
  
- 最大值：`32T` （35,184,372,088,832 字节）
  
- 单位：字节
  
**默认值**  
`8M` （8,388,608 字节）

## **_OPT_CBO_STAT_SAMPLING_LEVEL**

**参数描述**
设置动态采样等级，用于优化器收集统计信息。该参数决定了优化器在缺失统计信息或统计信息过时的情况下生成执行计划时，是否采用动态采样以及采样的比率大小。

**取值范围**

- 整数

- 最小值：`0`，表示关闭动态采样功能。

- 最大值：`9`

**默认值**
`0`

## **_PREFETCH_ROWS**

**参数描述**  
设置在数据检索过程中，系统提前预读取到缓存中的行数。

**取值范围**

- 整数
  
- 最小值：`1`
  
- 最大值：`2^32 - 1`
  
**默认值**  
`100`

## **CHECKPOINT_PERIOD**

**参数描述**  
设置系统执行两次checkpoint之间的最大时间间隔。当达到此预设的时间间隔时，将自动触发一次checkpoint。

**特性**

- **别名**：`CHECKPOINT_TIMEOUT`（不建议修改）。

**取值范围**

- 整数，单位：秒
  
- 最小值：`1` 
  
- 最大值：`2^32 - 1` 
  
**默认值**  
`300` 

## **CHECKPOINT_PAGES**

**参数描述**  
设定触发checkpoint的脏页数量阈值。当数据库缓冲区中的脏页数量达到此设定值时，将自动触发一次checkpoint。

**特性**

- **别名**：`CHECKPOINT_INTERVAL`（不建议修改）。

**取值范围**

- 整数，单位：页
  
- 最小值：`1` 
  
- 最大值：`2^32 - 1` 
  
**默认值**  
`100,000` 

## **REACTOR_THREADS**

**参数描述**  
设置用于处理I/O侦听的线程数量。这些线程负责接收并分发来自客户端的连接请求和网络数据包。

**配置建议**

- **推荐值**：`OPTIMIZED_WORKER_THREADS / 50`。
  
- **风险提示**：
  
  1. 设置过大会额外消耗CPU、内存及线程资源。在系统资源不足时，可能导致数据库运行异常。
    
  2. 设置值不允许大于Agent线程的总数。
    
**取值范围**  
[1, 10000]

**默认值**  
`1`

## **OPTIMIZED_WORKER_THREADS**

**参数描述**  
设置数据库最优工作线程的数量。此参数决定了系统在会话与线程之间是采用**绑定模式**还是**分离模式**。

**工作模式**

- 当会话数 > OPTIMIZED_WORKER_THREADS，系统切换为会话和线程分离模式，否则为绑定模式。
  
**与 MAX_WORKER_THREADS 的关系**

1. **启动时**：若配置文件中 `OPTIMIZED_WORKER_THREADS > MAX_WORKER_THREADS`，则自动将 `MAX_WORKER_THREADS` 调整为与本参数值相等。
  
2. **启动后**：
  
    - 可在线将其设置为小于或等于当前 `MAX_WORKER_THREADS`的任意值。
      
    - 若尝试设置为大于当前 `MAX_WORKER_THREADS` 的值，系统将报错。
    
3. **重启后**：`MAX_WORKER_THREADS` 将保持原值，不会因本参数的修改而改变。
  
**配置建议与约束**

- **最大值上限**：不建议超过 `SESSIONS` 参数的配置值，否则会造成线程资源闲置浪费。
  
- **资源消耗**：
  
  - 每个工作线程约占用 **0.5 M+** 的内存。
    
  - 设置过大会显著增加 CPU 和内存开销，在资源不足时可能导致数据库异常。
    
- **绝对上限**：因受安全函数内存限制（传入内存上限为2G），本参数最大值为 **10000**。
  
**取值范围**  
[2, 10000]

**默认值**  
`100`

## **MAX_WORKER_THREADS**

**参数描述**  
设置数据库工作线程池的最大容量。

**与 OPTIMIZED_WORKER_THREADS 的关系**

1. **数值关系**：本参数值**必须大于或等于** `OPTIMIZED_WORKER_THREADS`。若尝试将其设置为小于当前 `OPTIMIZED_WORKER_THREADS` 的值，系统将报错。
  
2. **线程扩展**：当活跃会话数超过 `OPTIMIZED_WORKER_THREADS` 时，工作线程数可以从最优值继续扩展，直到达到本参数设定的**最大值**。即可额外扩展的线程数为 `MAX_WORKER_THREADS - OPTIMIZED_WORKER_THREADS`。
  
**配置建议与约束**

- **最大值参考**：`OPTIMIZED_WORKER_THREADS` 不建议超过 `SESSIONS` 参数的配置值，否则会造成线程资源浪费。
  
- **资源消耗**：
  
  - 每个工作线程约占用 **0.5 M+** 的内存。
    
  - 设置过大会显著增加 CPU 和线程管理开销，在资源不足时可能导致数据库异常。
    
- **绝对上限**：受系统安全函数内存限制，本参数最大值为 **10000**。
  
**取值范围**  
[2, 10000]

**默认值**  
`100`

## **STATS_LEVEL**

**参数描述**  
控制是否收集并统计对表进行的DML（数据操作语言）操作信息。

**特性**

- **别名**：`STATISTICS_LEVEL`（不建议修改）。

**取值范围与行为**

| 取值  | 含义与行为 |
|  |  |
| **TYPICAL** 或 **ALL** | 启用表监控（Table-monitoring）。<br>• 系统将收集对表执行的DML操作的统计信息。<br>• 收集到的统计信息会在约 15分钟后展示在系统表 `SYS_DML_STATS`中。 |
| **BASIC** | 禁用Table-monitoring。<br>• 不收集上述DML操作统计信息。 |

**默认值**  
`TYPICAL`

### **BUF_POOL_NUM**

**参数描述**  
设置数据缓冲区（data buffer）的分区数量。

**取值范围**  
[0, 1024]

**默认值**  
`0`

**特殊说明**

- 当该参数**未配置**或**显式设置为 `0`** 时，系统会根据 `DATA_BUFFER_SIZE` 的实际值**自动计算并调整**一个合理的分区数。

## `BUFFER_PAGE_CLEAN_PERIOD`

**参数说明**：控制 Page Clean 定时任务的执行间隔（单位：秒）。  
Page Clean 是一种快速清理 Buffer 中脏页的机制。在常规业务场景中，通常无需启用该定时任务，脏页清理可由 Buffer 淘汰机制自动触发。但在如 TPC-C、Sysbench 等持续高负载的性能测试场景中，若磁盘 I/O 能力较强，可开启此定时任务以加速脏页刷盘。

**取值范围**：整数，[0, 2³² − 1]  
**默认值**：0（表示不启用定时清理）

## `INTERCONNECT_CHANNEL_NUM`

**参数说明**：配置内部通信（MES）连接通道的数量。  
**取值范围**：整数，[1, 32]  
**默认值**：4

## `LOG_BUFFER_COUNT`

**参数说明**：设置 Log Buffer 的数量。  
**取值范围**：整数，(0, 16]  
**默认值**：4  

## `LOG_BUFFER_SIZE`

**参数说明**：定义每个 Log Buffer 的大小，用于缓存 REDO 日志。  
适当增大该值有助于提升数据写入性能，应根据实际可用内存进行调整。

**取值范围**：整数，[1M, 128M]（单位：字节）  
**默认值**：4M  

## `TIMED_STATS`（别名：`TIMED_STATISTICS`，不推荐使用）

**参数说明**：控制是否收集与时间相关的统计信息。  

- **TRUE**：收集并存储时间相关的统计信息（可查询 `DV_SYS_STATS` 动态视图或跟踪文件）  
- **FALSE**：所有时间相关统计值置为 0  

**默认值**：TRUE

## `SQL_STAT`

**参数说明**：控制 SQL 性能统计视图的开关，参数说明范围为整个数据库实例。  

- **TRUE**：开启 SQL 性能统计  
- **FALSE**：关闭 SQL 性能统计  

**默认值**：TRUE

## `MES_ELAPSED_SWITCH`

**参数说明**：是否启用 MES 内部通信的时延统计功能。  

- **TRUE**：开启时延统计  
- **FALSE**：关闭时延统计  

**默认值**：FALSE

## `SESSIONS`

**参数说明**：设置数据库实例中并发会话（Session）的最大数量。实际运行时的并发会话数不得超过此值。

### 会话组成说明

- **系统预留会话**：
  - 固定 32 个：用于内部任务（如资源回收、Checkpoint 等）
  - `PARALLEL_MAX_THREADS` 个：用于 SQL 并行执行框架
- **EMERG 用户会话**：数量由 `SUPER_USER_RESERVED_SESSIONS` 参数控制
- **普通用户会话**：
  - 至少需配置 1 个，否则数据库无法启动
  - **未开启并行回放时**：  
    普通用户会话数 = `SESSIONS − 32 − PARALLEL_MAX_THREADS − SUPER_USER_RESERVED_SESSIONS`
  - **开启并行回放时（仅备机）**：  
    可用会话数 = `SESSIONS − 32 − PARALLEL_MAX_THREADS − SUPER_USER_RESERVED_SESSIONS − LOG_REPLAY_PROCESSES − REPLAY_PRELOAD_PROCESSES`  
    （主机行为与未开启并行回放时一致）

### 配置建议

- 一般建议设为 `OPTIMIZED_WORKER_THREADS × 1.2`
- 在 DN 节点上，建议 `SESSIONS < OPTIMIZED_WORKER_THREADS`

### 修改生效方式

- **立即生效**：新值 ≥ 初始值 `init_count` 且 ≤ `1.5 × init_count`
- **需重启生效**：新值 < `init_count` 或 > `1.5 × init_count`（但 ≤ 16320）  
  > 其中 `init_count` 为数据库启动时的 `SESSIONS` 值。系统默认预留 50% 的扩容空间用于动态调整，因此实时调整仅支持扩容，不支持缩容。

### 注意事项

1. 修改 `SUPER_USER_RESERVED_SESSIONS` 后需重启生效。
2. 调整 `SESSIONS` 前，请确保 `_MAX_RM_COUNT` 满足约束条件。
3. 若 `SESSIONS > 13600`，则 `_MAX_RM_COUNT` 必须为 64 的倍数、大于 `SESSIONS`，建议设为 16320。

**取值范围**：整数，  
下限 = `33 + PARALLEL_MAX_THREADS + SUPER_USER_RESERVED_SESSIONS`，  
上限 = 16320  
**默认值**：200  

## 数据库参数配置说明

### 1. 全局共享内存

#### `TEMP_BUFFER_SIZE`

**作用**：配置临时缓冲区（Temporary Buffer）的总大小，用于支持物化表创建、数据排序等临时操作。

- 系统在启动时会根据 `TEMP_BUFFER_SIZE`（总大小）和 `TEMP_POOL_NUM`（临时池数量）将缓冲区均分为多个临时池（Temp Pool）。
- 单个临时池的最小大小为 **2 GB**。若 `TEMP_BUFFER_SIZE < 2 GB`，则仅创建一个临时池。
- 支持**在线动态调大**：
  - 每次扩展的空间必须 ≥ `temp_buffer_extend_threshold`（临时缓冲区扩展阈值）。
  - 新增临时池数量 = `MIN(扩展值 / 单个临时池大小, 1)`。
  - 临时池总数上限为 **128**。
- **不支持在线调小**：若需减小该参数，需通过修改数据库配置文件或使用 `SCOPE=PFILE` 方式修改，并**重启数据库**生效。

**取值范围**：整数，[32M, 4T]（单位：Byte）  
**默认值**：32M  
**安装脚本默认值**：使用 `install.py` 安装时，自动设为 **1G**

#### `DATA_BUFFER_SIZE`

**作用**：设置数据缓冲区（Data Buffer）的大小，用于缓存最近访问的数据页，提升数据访问效率。

- 应根据服务器物理内存合理配置。
- **动态生效**，但受以下参数约束：
  - 最小值 = `BUFFER_UINT_SIZE`
  - 最大值 = `BUFFER_UINT_SIZE × BUF_POOL_NUM × 1024`
- 若 `BUFFER_CHECK_MEMORY = TRUE`，则配置值 **不得超过物理内存总量**，否则在以下场景会触发报错拦截：
  - 参数配置阶段
  - 在线扩容操作
  - 数据库启动时加载配置

**取值范围**：整数，[64M, 32T]，支持单位：B / K / M / G / T（无单位时默认为字节）  
**默认值**：128M  
**配置建议**：

  - 建议将 `DATA_BUFFER_SIZE` 设为 `BUFFER_UINT_SIZE × BUF_POOL_NUM` 的整数倍，以减少内存碎片。
  - **仅支持在线调大**；如需调小，需修改配置文件或使用 `SCOPE=PFILE`，并**重启数据库**生效。  
**安装脚本默认值**：使用 `install.py` 安装时，自动设为 **2G**

#### `SHARED_POOL_SIZE`

**作用**：配置共享池（Shared Pool）的总大小，包含 Lock Pool、SQL Pool 和 DC Pool 等共享内存结构。

- **最小值受 `init_lock_pool_pages` 影响**：
  - 仅当 `init_lock_pool_pages = 128` 时，才允许将 `SHARED_POOL_SIZE` 设为最小值 **68M**。
- 备机的 `SHARED_POOL_SIZE` **必须 ≥ 主机值**，否则无法使用 68M 最小配置。
- 调大该参数后，建议评估是否需同步增大 `init_lock_pool_pages`。
- **动态调整限制**：
  - 仅支持**在线调大**，不支持在线收缩。
  - 单次扩展量（`expand_size`）必须 ≥ `MIN(512M, 当前 SHARED_POOL_SIZE)`，否则需重启生效。
  - 最多支持 **15 次**动态扩展；超过次数后，后续修改需重启数据库生效。

**取值范围**：整数，[68M, 32T]（单位：Byte）  
**默认值**：128M  
**配置建议**：

  - 如需调小，必须通过修改配置文件或使用 `SCOPE=PFILE`，并**重启数据库**生效。  
**安装脚本默认值**：使用 `install.py` 安装时，自动设为 **1G**

### 2. 检查点（Checkpoint）

#### `CHECKPOINT_IO_CAPACITY`

**作用**：控制每次 Checkpoint 触发时写入磁盘的脏页数量（以页为单位）。

**取值范围**：整数，[1, 4096]  
**默认值**：1024

#### `_CHECKPOINT_TIMED_TASK_DELAY`

**作用**：设置两次定时 Checkpoint 任务之间的间隔时间（毫秒）。

- 定时 Checkpoint 由 `checkpoint_pages` 和 `checkpoint_period` 共同控制，本参数用于调节执行频率。

**取值范围**：整数，[0, 2³² − 1]（单位：毫秒）  
**默认值**：100

### 3. 事务类

#### `_UNDO_AUTO_SHRINK`

**作用**：控制是否启用 Undo Segment 的自动收缩功能。

**取值**：

- `true`：启用自动收缩
- `false`：禁用自动收缩

**默认值**：`true`

### 4. 进程类

#### `DBWR_PROCESSES`

**作用**：设置后台写脏页（DBWR）线程的数量。

- 增大该值可提升 I/O 并发能力，但会增加 CPU 和内存开销。
- **默认配置因安装包类型而异**：
  - 共享存储安装包：默认设为 **36**
  - 其他类型安装包：默认设为 **8**
- **特殊建议**：当 `FILE_OPTIONS = ASYNCH` 或 `SETALL`（即启用异步 I/O）时，建议将该参数设为 **1**，因为异步 I/O 本身已具备高并发能力，无需额外增加 DBWR 线程。

**取值范围**：整数，[1, 36]  
**默认值**：1

### 5. 会话级参数

#### `_DOUBLEWRITE`

**作用**：控制是否启用双写（Double Write）机制，用于提升数据写入的可靠性，防止部分写（Partial Write）问题。

**取值**：

- `TRUE`：启用双写
- `FALSE`：关闭双写

**默认值**：`TRUE`

> **说明**：所有“仅支持在线调大”的参数，若需缩小，必须通过配置文件或 `SCOPE=PFILE` 修改，并**重启数据库实例**后生效。
