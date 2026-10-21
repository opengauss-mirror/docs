---
description: 本文介绍 openGauss WDR Snapshot 数据表 的相关内容与操作方法。
keywords: [openGauss, WDR Snapshot 数据表, SQL参考]
---

# WDR Snapshot 数据表

WDR Snapshot数据表命名原则：snap\_\{源数据表\}。

WDR Snapshot数据表来源为[DBE\_PERF Schema](dbe_perf_schema.md)下的视图。

与本特性相关的新增/扩展说明：

- `snap_global_instance_time` 增加 `snap_n_calls` 字段，对应 `pv_instance_time` / `dbe_perf.instance_time` 的 `n_calls`，供 Protocol Message Statistics 等差分统计使用。
- 新增 `snap_summary_database_sql_stat`，来源为 `dbe_perf.summary_database_sql_stat`，供 SQL Stats by Database 使用。
