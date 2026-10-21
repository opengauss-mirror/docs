---
description: This document describes WDR Snapshot Data Table in openGauss.
keywords: [openGauss, WDR Snapshot Data Table, SQL]
---

# WDR Snapshot Data Table<a name="EN-US_TOPIC_0245374866"></a>

The naming rule of a WDR snapshot data table is  **snap\_**_\{Source data table\}_.

WDR snapshot data tables come from all views in  [DBE\_PERF Schema](dbe_perf_schema.md).

Related additions/extensions for this feature:

- `snap_global_instance_time` adds `snap_n_calls`, corresponding to `n_calls` of `pv_instance_time` / `dbe_perf.instance_time`, used by Protocol Message Statistics deltas.
- New table `snap_summary_database_sql_stat` is sourced from `dbe_perf.summary_database_sql_stat` and used by SQL Stats by Database.
