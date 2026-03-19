# 动态视图

## DV_DSS_TIME_STATS

DSS设备信息视图。支持数据库中的DSS设备操作统计信息收集，记录每种 DSS 操作的等待时间、执行次数，可以诊断存储层的 I/O 瓶颈和延迟问题，帮助 DBA 识别存储性能问题，如高延迟的读写操作。

字段说明：

| 序号  | 字段名                          | 数据类型          | 说明               |
| --- | ---------------------------- | ------------- | ---------------- |
| 0   | PREAD_WAIT_COUNT             | BINARY_BIGINT | 物理读等待次数          |
| 1   | PREAD_WAIT_TIME              | BINARY_BIGINT | 物理读等待时间          |
| 2   | PWRITE_WAIT_COUNT            | BINARY_BIGINT | 物理写等待次数          |
| 3   | PWRITE_WAIT_TIME             | BINARY_BIGINT | 物理写等待时间          |
| 4   | PREAD_SYN_META_WAIT_COUNT    | BINARY_BIGINT | 同步元数据物理读等待次数     |
| 5   | PREAD_SYN_META_WAIT_TIME     | BINARY_BIGINT | 同步元数据物理读等待时间     |
| 6   | PWRITE_SYN_META_WAIT_COUNT   | BINARY_BIGINT | 同步元数据物理写等待次数     |
| 7   | PWRITE_SYN_META_WAIT_TIME    | BINARY_BIGINT | 同步元数据物理写等待时间     |
| 8   | PREAD_DISK_WAIT_COUNT        | BINARY_BIGINT | 磁盘物理读等待次数        |
| 9   | PREAD_DISK_WAIT_TIME         | BINARY_BIGINT | 磁盘物理读等待时间        |
| 10  | PWRITE_DISK_WAIT_COUNT       | BINARY_BIGINT | 磁盘物理写等待次数        |
| 11  | PWRITE_DISK_WAIT_TIME        | BINARY_BIGINT | 磁盘物理写等待时间        |
| 12  | FOPEN_WAIT_COUNT             | BINARY_BIGINT | 文件打开操作的等待次数      |
| 13  | FOPEN_WAIT_TIME              | BINARY_BIGINT | 文件打开操作的等待时间      |
| 14  | STAT_WAIT_COUNT              | BINARY_BIGINT | 获取文件状态的等待次数      |
| 15  | STAT_WAIT_TIME               | BINARY_BIGINT | 获取文件状态的等待时间      |
| 16  | FIND_FT_ON_SERVER_WAIT_COUNT | BINARY_BIGINT | 在服务器上查找文件令牌的等待次数 |
| 17  | FIND_FT_ON_SERVER_WAIT_TIME  | BINARY_BIGINT | 在服务器上查找文件令牌的等待时间 |
| 18  | LOCK_VG_WAIT_COUNT           | BINARY_BIGINT | 锁定卷组的等待次数        |
| 19  | LOCK_VG_WAIT_TIME            | BINARY_BIGINT | 锁定卷组的等待时间        |
| 20  | LATCH_CONTEXT_WAIT_COUNT     | BINARY_BIGINT | 闩锁上下文等待次数        |
| 21  | LATCH_CONTEXT_WAIT_TIME      | BIGINT        | 闩锁上下文等待时间        |

## DV_SQL_EXECUTION

数据库SQL语句历史执行计划视图。可查询数据库中历史执行的每条sql执行计划及其状态信息，用于 SQL 性能分析和优化，可通过历史数据对比不同执行计划的性能差异。

字段说明：

| 序号  | 字段名                    | 数据类型          | 说明                                  |
| --- | ---------------------- | ------------- | ----------------------------------- |
| 0   | SQL_ID                 | VARCHAR       | SQL语句唯一标识符                          |
| 1   | PLAN_VERSION           | VARCHAR       | 执行计划版本号                             |
| 2   | EXECUTION_COUNT        | BINARY_BIGINT | 执行次数                                |
| 3   | DISK_READ_COUNT        | BINARY_BIGINT | 磁盘读取次数                              |
| 4   | BUFFER_GET_COUNT       | BINARY_BIGINT | 缓冲区读取次数                             |
| 5   | CR_GET_COUNT           | BINARY_BIGINT | 一致性读获取次数（SQL语句在CR POOL查找的次数）        |
| 6   | SORT_COUNT             | BINARY_BIGINT | 排序次数                                |
| 7   | HARD_PARSE_TIME        | BINARY_BIGINT | 硬解析时间（微秒）                           |
| 8   | SOFT_PARSE_TIME        | BINARY_BIGINT | 软解析时间（微秒）                           |
| 9   | IO_WAIT_ELAPSED_TIME   | BINARY_BIGINT | IO等待时间（微秒）                          |
| 10  | CON_WAIT_ELAPSED_TIME  | BINARY_BIGINT | 条件等待时间（微秒）                          |
| 11  | CPU_ELAPSED_TIME       | BINARY_BIGINT | CPU执行时间（微秒）                         |
| 12  | TOTAL_ELAPSED_TIME     | BINARY_BIGINT | 总执行时间（微秒）                           |
| 13  | LAST_LOAD_TIMESTAMP    | DATE          | 最后加载时间戳（最新一次加载到库缓存的时间，一般为第一次硬解析的时间） |
| 14  | LAST_ACTIVE_TIMESTAMP  | DATE          | 最后活跃时间戳（一般为最新一次被执行的时间）              |
| 15  | REFERENCE_COUNT        | BINARY_UINT32 | SQL引用计数（当前有多少会话或进程正在使用该执行计划）        |
| 16  | MEMORY_PAGES           | BINARY_UINT32 | context占用页数                         |
| 17  | SHARED_MEMORY_SIZE     | BINARY_BIGINT | 占用内存大小                              |
| 18  | VM_OPEN_PAGE_COUNT     | BINARY_BIGINT | 打开的VM页面数                            |
| 19  | VM_CLOSE_PAGE_COUNT    | BINARY_BIGINT | 关闭的VM页面数                            |
| 20  | VM_SWAPIN_PAGE_COUNT   | BINARY_BIGINT | 从磁盘换入内存的VM页面数                       |
| 21  | VM_FREE_PAGE_COUNT     | BINARY_BIGINT | 释放的VM页面数（执行所用）                      |
| 22  | PLAN_TEXT              | VARCHAR       | 执行计划文本                              |
| 23  | VM_MAX_OPEN_PAGE_COUNT | BINARY_BIGINT | SQL执行申请打开的最大VM页面数                   |
| 24  | VM_SWAPOUT_PAGE_COUNT  | BINARY_BIGINT | 从内存换出到磁盘的VM页面数                      |
| 25  | VM_ALLOC_PAGE_COUNT    | BINARY_BIGINT | 申请的VM页面数                            |
| 26  | SIGNATURE              | VARCHAR       | 执行计划签名                              |
| 27  | EXPLAIN_ID             | VARCHAR       | 执行计划ID                              |

## DV_SLOW_SQL

慢SQL视图。记录执行时间超过预设阈值的慢 SQL，包含 SQL 文本、执行时间、等待事件、锁等待等关键信息，可提供于性能优化。

慢sql视图信息从slowsql日志获取，因此获取慢sql信息需要打开慢sql日志开关：

```
--设置日志记录slowsql，对应_LOG_LEVEL = 256
alter system set SLOWSQL_LOG_MODE=ON;
--慢SQL日志记录的阈值，用于判断是否记录慢SQL日志
alter system set SQL_STAGE_THRESHOLD=2;
--检查设置结果
show parameter SLOWSQL_LOG_MODE;
show parameter SQL_STAGE_THRESHOLD;
```

字段说明：

| 序号  | 字段名                    | 数据类型          | 说明                           |
| --- | ---------------------- | ------------- | ---------------------------- |
| 0   | TENANT_ID              | BINARY_UINT32 | 租户ID                         |
| 1   | CTIME                  | VARCHAR       | 执行时间                         |
| 2   | STAGE                  | VARCHAR       | SQL执行阶段                      |
| 3   | SID                    | BINARY_BIGINT | 会话ID                         |
| 4   | CLIENT_IP              | VARCHAR       | 客户端IP地址                      |
| 5   | ELAPSED_TIME           | NUMBER        | 总执行时间（微秒）                    |
| 6   | PARAMS                 | VARCHAR       | SQL语句绑定参数                    |
| 7   | SQL_ID                 | VARCHAR       | SQL语句ID                      |
| 8   | EXPLAIN_ID             | VARCHAR       | 执行计划ID                       |
| 9   | DISK_READ_COUNT        | BINARY_BIGINT | 磁盘读取次数                       |
| 10  | BUFFER_GET_COUNT       | BINARY_BIGINT | 缓冲区获取次数                      |
| 11  | CR_GET_COUNT           | BINARY_BIGINT | 一致性读获取次数（SQL语句在CR POOL查找的次数） |
| 12  | DIRTY_COUNT            | BINARY_BIGINT | 产生的脏页数量                      |
| 13  | PROCESSED_ROWS         | BINARY_BIGINT | 获取行数                         |
| 14  | CPU_ELAPSED_TIME       | BINARY_BIGINT | CPU执行时间（微秒）                  |
| 15  | IO_WAIT_ELAPSED_TIME   | BINARY_BIGINT | IO等待时间（微秒）                   |
| 16  | CON_WAIT_ELAPSED_TIME  | BINARY_BIGINT | 条件等待时间（微秒）                   |
| 17  | PARSE_ELAPSED_TIME     | BINARY_BIGINT | 执行期间重解析时间（微秒）                |
| 18  | VM_ALLOC_PAGES         | BINARY_BIGINT | 申请的VM页数                      |
| 19  | VM_MAX_OPEN_PAGE_COUNT | BINARY_BIGINT | 申请打开的最大VM页面数                 |
| 20  | TOP1_EVENT             | VARCHAR       | 执行最长的等待事件                    |
| 21  | TOP1_WAIT_TIME         | BINARY_BIGINT | 执行最长等待事件的等待时间                |
| 22  | TOP1_EVENT_COUNT       | BINARY_BIGINT | 执行最长等待事件的发生次数                |
| 23  | TOP2_EVENT             | VARCHAR       | 执行第二长的等待事件                   |
| 24  | TOP2_WAIT_TIME         | BINARY_BIGINT | 执行第二长等待事件的等待时间               |
| 25  | TOP2_EVENT_COUNT       | BINARY_BIGINT | 执行第二长等待事件的发生次数               |
| 26  | TOP3_EVENT             | VARCHAR       | 执行第三长的等待事件                   |
| 27  | TOP3_WAIT_TIME         | BINARY_BIGINT | 执行第三长等待事件的等待时间               |
| 28  | TOP3_EVENT_COUNT       | BINARY_BIGINT | 执行第三长等待事件的发生次数               |
| 29  | SQL_TEXT               | VARCHAR       | SQL语句文本                      |
| 30  | EXPLAIN_TEXT           | VARCHAR       | 执行计划文本                       |

说明：

1、只有执行时间超过预设阈值，且SQL必须是DML 语句（SELECT、UPDATE、INSERT、DELETE、MERGE、REPLACE），才会被记录；

2、STAGE为sql执行阶段（PREPARE / EXECUTE / PREP_EXEC / QUERY / FETCH)，当一条SQL处理某个阶段的命令超时，会记录到慢sql日志中；当SQL的执行时间超时，也会记录到慢sql日志中，此时记录的STAGE为EXECUTE。

## DV_DRC_BUF_INFO

本地节点的缓冲区页面视图。可监控数据库本地节点的缓冲区页面使用情况，显示页面的状态信息，可用于内存管理分析，当出现锁定冲突或页面转换延迟时使用。

字段说明：

| 序号  | 字段名                 | 数据类型          | 说明                                                   |
| --- | ------------------- | ------------- | ---------------------------------------------------- |
| 0   | IDX                 | BINARY_UINT32 | 缓冲区资源索引                                              |
| 1   | FILE_ID             | BINARY_UINT32 | 文件ID                                                 |
| 2   | PAGE_ID             | BINARY_UINT32 | 页面ID                                                 |
| 3   | CLAIMED_OWNER       | BINARY_UINT32 | owner持有节点id                                          |
| 4   | LOCK                | BINARY_UINT32 | owner持有节点锁模式：<br/>0：NULL<br/>1：SHARE<br/>2：EXCLUSIVE |
| 5   | CONVERTING_INST     | BINARY_UINT32 | converting节点id                                       |
| 6   | CONVERTING_CUR_LOCK | VARCHAR       | converting节点当前锁模式：<br/>NULL<br/>SHARE<br/>EXCLUSIVE  |
| 7   | CONVERTING_REQ_LOCK | VARCHAR       | converting节点请求的锁模式：<br/>NULL<br/>SHARE<br/>EXCLUSIVE |
| 8   | CONVERTQ_LEN        | BINARY_UINT32 | converting节点请求队列长度                                   |
| 9   | EDP_MAP             | BINARY_BIGINT | EDP持有节点bitmap（无效值设为255）                              |
| 10  | CONVERTING_SID      | BINARY_UINT32 | converting节点的会话ID                                    |
| 11  | CONVERTING_RSN      | BINARY_UINT32 | converting节点的序列号                                     |
| 12  | PART_ID             | BINARY_UINT32 | 所属的DRC分区链表ID                                         |
| 13  | READONLY_COPIES     | BINARY_BIGINT | 只读副本bitmap                                           |
| 14  | LATEST_EDP          | BINARY_UINT32 | 最近的脏器脏页持有节点ID                                        |
| 15  | IN_RECOVERY         | BINARY_UINT32 | 页面是否处于RECOVERY中                                      |
| 16  | REFORM_PROMOTE      | BINARY_UINT32 | DRC是否在重构期间从副本提升为所有者                                  |
| 17  | LSN                 | BINARY_BIGINT | 集群中本页面所有EDP中最大的LSN                                   |
| 18  | RECOVERY_SKIP       | BINARY_UINT32 | REFORM期间DRC是否跳过回放，即是否需要脏页持久化刷盘                       |
| 19  | IS_RECYCLING        | BINARY_UINT32 | 是否正在被回收                                              |
| 20  | MASTER_ID           | BINARY_UINT32 | master节点ID                                           |

## DV_DRC_LOCAL_LOCK_INFO

数据库本地节点的锁信息视图。可监控数据库本地节点的锁使用情况，用于帮助识别锁竞争和死锁等问题。

字段说明：

| 序号  | 字段名                 | 数据类型          | 说明                                                    |
| --- | ------------------- | ------------- | ----------------------------------------------------- |
| 0   | IDX                 | BINARY_UINT32 | 本地锁资源在资源池的索引                                          |
| 1   | DRID_TYPE           | VARCHAR       | 资源ID类型                                                |
| 2   | DRID_UID            | BINARY_UINT32 | 资源UID                                                 |
| 3   | DRID_ID             | BINARY_UINT32 | 锁ID                                                   |
| 4   | DRID_IDX            | BINARY_UINT32 | 资源索引ID                                                |
| 5   | DRID_PART           | BINARY_UINT32 | 资源分区                                                  |
| 6   | DRID_PARENTPART     | BINARY_UINT32 | 资源父分区                                                 |
| 7   | IS_OWNER            | UINT32        | 是否为所有者                                                |
| 8   | IS_LOCKED           | UINT32        | 是否被锁定                                                 |
| 9   | COUNT               | BINARY_UINT32 | 计数器（仅表锁）                                              |
| 10  | LATCH_SHARE_COUNT   | UINT32        | 闩锁共享计数                                                |
| 11  | LATCH_STAT          | UINT32        | 闩锁状态                                                  |
| 12  | LATCH_SID           | UINT32        | 持有闩锁的会话ID                                             |
| 13  | IS_RELEASING        | UINT32        | 本地锁是否释放                                           |
| 14  | LOCK_MODE           | UINT32        | 本地锁模式                                      |

## DV_BUF_CTRL_INFO

数据库本地节点的缓冲区控制块信息视图。可用于缓冲区管理和页面状态分析。

字段说明：

| 序号  | 字段名               | 数据类型          | 说明                                                                                  |
| --- | ----------------- | ------------- | ----------------------------------------------------------------------------------- |
| 0   | POOL_ID           | BINARY_UINT32 | 缓冲池ID                                                                               |
| 1   | FILE_ID           | BINARY_UINT32 | 数据文件ID                                                                              |
| 2   | PAGE_ID           | BINARY_UINT32 | 页面ID                                                                                |
| 3   | LATCH_SHARE_COUNT | BINARY_UINT32 | 闩锁共享计数                                                                              |
| 4   | LATCH_STAT        | BINARY_UINT32 | 闩锁状态                                                                                |
| 5   | LATCH_SID         | BINARY_UINT32 | 持有闩锁的会话ID                                                                           |
| 6   | LATCH_XSID        | BINARY_UINT32 | 最后一个独占持有闩锁的会话ID                                                                     |
| 7   | IS_READONLY       | BINARY_UINT32 | 是否只读                                                                                |
| 8   | IS_DIRTY          | BINARY_UINT32 | 是否脏页                                                                                |
| 9   | IS_REMOTE_DIRTY   | BINARY_UINT32 | 是否远程脏页                                                                              |
| 10  | IS_MARKED         | BINARY_UINT32 | 是否标记                                                                                |
| 11  | LOAD_STATUS       | BINARY_UINT32 | 加载状态：<br/>0：BUF_NEED_LOAD（需要加载）<br/>1：BUF_IS_LOADED（已加载）<br/>2：BUF_LOAD_FAILED（加载失败 |
| 12  | IN_OLD            | BINARY_UINT32 | 是否在旧列表（LRU冷端）                                                                       |
| 13  | IN_CKPT           | BINARY_UINT32 | 是否在检查点队列                                                                            |
| 14  | LOCK_MODE         | BINARY_UINT32 | 本地锁模式：<br/>0：NULL<br/>1：SHARE<br/>2：EXCLUSIVE                                       |
| 15  | IS_EDP            | BINARY_UINT32 | 是否为EDP页                                                                             |
| 16  | EDP_SCN           | BINARY_BIGINT | 本地页面成为EDP时的最近SCN                                                                    |
| 17  | EDP_MAP           | BINARY_BIGINT | EDP持有节点bitmap                                                                       |
| 18  | REF_NUM           | BINARY_UINT32 | 引用计数                                                                                |
| 19  | LASTEST_LFN       | BINARY_BIGINT | 最新日志文件号                                                                             |
| 20  | NEED_FLUSH        | BINARY_BIGINT | reform期间是否需要刷盘（固定为0，buf ctrl不需要刷盘）                                                  |
| 21  | BEEN_LOADED       | BINARY_UINT32 | 缓存的页面是否被加载过                                                                         |
| 22  | IN_RECOVERY       | BINARY_UINT32 | reform期间页面是否正在恢复                                                                    |
| 23  | LAST_CKPT_TIME    | BINARY_UINT32 | 本地EDP最近一次加入EDP组的时间                                                                  |
| 24  | IS_RESIDENT       | BINARY_UINT32 | 是否常驻内存                                                                              |
| 25  | IS_PINNED         | BINARY_UINT32 | 是否被pin住                                                                             |
| 26  | PAGE_SCN          | BINARY_BIGINT | 页面SCN                                                                               |