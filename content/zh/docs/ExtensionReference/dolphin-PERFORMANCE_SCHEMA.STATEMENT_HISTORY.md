---
description: PERFORMANCE_SCHEMA.STATEMENT_HISTORY视图仅在B兼容数据库中创建，通过pg_catalog.get_statement_history()读取本节点postgres数据库中的dbe_perf.statement_history，展示其中的14个字段。.
keywords: [openGauss, PERFORMANCE_SCHEMA.STATEMENT_HISTORY]
---

# PERFORMANCE_SCHEMA.STATEMENT_HISTORY

PERFORMANCE_SCHEMA.STATEMENT_HISTORY视图仅在B兼容数据库中创建，通过pg_catalog.get_statement_history()读取本节点postgres数据库中的dbe_perf.statement_history，展示其中的14个字段。

- 底层函数检查会话用户（SESSION_USER）是否具有dbe_perf模式的USAGE权限和dbe_perf.statement_history的SELECT权限。
- 当前数据库需安装dblink扩展，其函数位于public模式，并能够连接本节点的postgres数据库。
- 记录的采集和保留遵循底层statement_history的配置，包括track_stmt_stat_level、log_min_duration_statement等。

**表 1** STATEMENT_HISTORY字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| schema_name | name | 模式名称。 |
| unique_query_id | bigint | 归一化SQL的标识。 |
| debug_query_id | bigint | 语句的调试查询标识。 |
| query | text | 记录的SQL文本。 |
| start_time | timestamp with time zone | 语句开始时间。 |
| finish_time | timestamp with time zone | 语句结束时间。 |
| thread_id | bigint | 执行线程标识。 |
| session_id | bigint | 会话标识。 |
| n_returned_rows | bigint | 返回的行数。 |
| n_tuples_inserted | bigint | 插入的元组数。 |
| n_tuples_updated | bigint | 更新的元组数。 |
| n_tuples_deleted | bigint | 删除的元组数。 |
| cpu_time | bigint | CPU时间，单位为微秒。 |
| lock_time | bigint | 加锁耗时。 |

示例（满足上述依赖后执行）：

```sql
SELECT schema_name, unique_query_id, query, start_time, finish_time
FROM performance_schema.statement_history
ORDER BY start_time DESC
LIMIT 10;
```
