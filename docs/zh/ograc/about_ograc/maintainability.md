# DFX能力<a name="ZH-CN_CONCEPT_0289895656"></a>

## DFX能力

oGRAC中提供了多种手段可以监控数据库当前运行的状态，辅助DBA进行问题的分析。比较常用的有WSR报告、统计视图、慢SQL诊断等。

### WSR报告

WSR报告是比较常用的性能分析工具，它主要是通过对数据库打快照，利用两个不同时间点的生成的快照中收集到的统计数据，生成这期间的性能分析报告。打快照的默认周期是30分钟，用户可以修改这个时间周期，也可以手工创建快照。

WSR报告将收集到的统计数据按数据库、会话、Buffer命中、主机等不同的维度进行聚集后统一展示出来，用户可以很直观地看到这期间数据库的运行状态，进而发现当前存在的问题。

目前WSR中可以体现的统计数据有：

- 当前主机的CPU/MEM使用情况
- 当前数据库实例的等待事件
- SQL性能统计数据
- Buffer等待事件统计
- LATCH统计
- 慢SQL和执行计划
- 正在执行的SQL和会话信息

### 统计视图

oGRAC提供了多个视图供用户查看系统信息，按功能维度可以分为DBA视图、用户视图和性能视图，结合这些视图信息可以观察当前数据库内部的运行状态，下表中是常见的一些性能视图说明。

| 视图名称  | 描述  |
|---|---|
| DV_SYSTEM  | 用于查询当前数据库实例所在主机的CPU的属性和负载、内存的相关信息  |
| DV_DATABASE  | 用于查询当前数据库的名称、状态、scn、rcy_point等基本信息 |
| DV_SESSIONS  | 用于查询当前数据库内部的会话信息  |
| DV_GMA  | 用于查询当前所配置的数据Buffer区大小、Shared Pool大小、log buffer大小等与缓存区大小相关的信息  |
| ADM_TABLESPACES  | 用于查询表空间中数据文件、Undo文件等设备文件的使用情况 |
| DV_DATA_FILES  | 用于查询当前数据库中数据文件、Undo文件等设备文件的当前状态和属性  |
| DV_LOG_FILES  | 用于查询当前数据库中日志文件的当前状态、实时写入的位置、剩余空间等信息  |
| DV_BUFFER_POOL_STATS  | 用于查询当前Data Buffer的详细信息，包含每个分区的页面总数、脏页数量、可用页面数量等信息  |
| DV_TEMP_POOLS  | 用于查询当前Temp Buffer的详细信息，包含每个分区的页面总数、可用页面数量、磁盘上可以容纳换出的数量等信息|
| DV_LOCKS  | 用于查询当前数据库所有的表锁和行锁的信息  |
| DV_LATCHS  | 用于查询当前数据库PAGE LATCH、HEAP LATCH的统计信息  |
| DV_SYS_STATS  | 用于查询当前数据库所有的事件的统计次数 |
| DV_SYS_EVENTS  | 用于查询当前数据库所有的等待事件的统计信息 |
| DV_PARAMETERS  | 用于查询当前数据库所有的配置项的运行值和默认值信息 |
| DV_SQLS  | 用于查询SQL的DML语句的执行情况 |
| DV_LONG_SQL  | 用于查询慢SQL的信息，只有执行时间超过了LONGSQL_TIMEOUT的SQL才会被查询到 |
| DV_SESSION_EVENTS  | 用于查询当前会话存在的事件 |
| DV_SESSION_WAITS  | 用于查询当前会话存在的等待事件 |
| DV_BUFFER_ACCESS_STATS  | 用于查询当前数据库BUFFER访问的统计信息 |
| DV_UNDO_STATS  | 用于查询10分钟内UNDO空间的使用信息 |
| DV_UNDO_SEGMENTS  | 用于查询所有UNDO SEGMENT队列的实时状态信息 |
| DV_ARCHIVED_LOGS  | 用于查询所有归档日志的信息 |
| DV_CKPT_STATS  | 用于查询checkpoint相关的一些统计信息 |
