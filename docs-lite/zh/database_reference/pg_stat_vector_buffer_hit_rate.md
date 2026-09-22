# PG_STAT_VECTOR_BUFFER_HIT_RATE

`PG_STAT_VECTOR_BUFFER_HIT_RATE` 显示当前数据库实例向量专用缓存的累计查找和命中统计，返回一行。普通用户可以查询。

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| lookups | bigint | 缓存查找次数，为 hits 与 misses 之和。 |
| hits | bigint | 共享缓存命中次数。 |
| misses | bigint | 共享缓存未命中次数。 |
| hit_rate | numeric | hits / lookups，比率范围为 0～1；lookups 为 0 时为 NULL。 |

这些值统计实例中的缓存访问，不是单个数据库或单条查询的命中率。部分计数在访问上下文释放后汇总，重启后重新统计。关闭会话缓存、使用原格式索引、顺序扫描等未执行共享缓存查找的路径，不应作为 misses 的预期来源；回退次数应结合 `pg_stat_vector_buffer.fallbacks` 单独观察。

```sql
openGauss=# SELECT lookups, hits, misses, round(hit_rate * 100, 2) AS hit_rate_percent
             FROM pg_stat_vector_buffer_hit_rate;
```

该视图对应无输入参数的集合返回函数 `pg_stat_get_vector_buffer_hit_rate()`，函数返回字段与视图一致。缓存未启用时 lookups、hits、misses 为 0，hit_rate 为 NULL。使用方法请参见[使用向量专用缓存](../database_administration_guide/using_vector_buffer.md)。
