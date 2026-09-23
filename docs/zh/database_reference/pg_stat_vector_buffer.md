# PG_STAT_VECTOR_BUFFER

`PG_STAT_VECTOR_BUFFER` 显示当前数据库实例向量专用缓存的全局容量、使用情况及运行计数，返回一行。实例中的数据库和会话共享这些统计，普通用户可以查询。

计数器自缓存初始化后累计，重启后重新统计。使用量按读取时的状态汇总，访问计数可能在访问上下文释放后才更新；并发环境下各字段及不同视图之间不是严格一致的快照。缓存未启用时，各字段为 0。

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| capacity_bytes | bigint | 实际可用于载荷缓存的容量，单位为字节，按完整 chunk 向下取整。 |
| configured_capacity_bytes | bigint | 初始化缓存时配置的载荷区容量，单位为字节。 |
| used_bytes | bigint | 已占用槽位大小的合计，单位为字节，包含槽位管理信息及对齐开销，不是有效向量数据字节数，也不包含全部共享管理结构。 |
| chunk_size | integer | 单个内存块的大小，单位为字节。 |
| chunk_count | integer | 载荷区的内存块总数。 |
| max_vbps | integer | 可管理的缓存池数量上限。 |
| min_payload | integer | 对齐后的最小可缓存载荷长度，单位为字节。 |
| entries | integer | 当前缓存池中有效缓存条目的合计。 |
| n_free_total | integer | 当前缓存池已分配内存块中的空闲槽位合计，不包含尚未分配给缓存池的内存块容量。 |
| active_pools | integer | 当前处于 ACTIVE 状态的缓存池数量。 |
| evict_pending | integer | 当前具有待处理回收请求的缓存池数量。 |
| installs | bigint | 成功装入共享缓存的累计条目次数。 |
| fallbacks | bigint | 通过载荷访问接口回退到载荷页读取的累计次数。回退不表示查询失败，也不等于磁盘物理读取次数。 |
| evictions | bigint | 后台淘汰缓存条目的累计次数。 |
| pool_full_requests | bigint | 缓存池空间不足时提出回收请求的累计次数。 |
| reclaim_attempts | bigint | 后台尝试选择并回收缓存条目的累计次数。 |
| reclaim_victims | bigint | 后台实际回收的累计条目数。 |
| invalidations | bigint | 对载荷发起失效处理的累计计数。 |
| invalidated_entries | bigint | 失效处理实际匹配并使之失效的累计缓存条目数。 |

```sql
openGauss=# SELECT capacity_bytes, used_bytes, entries, active_pools,
                    fallbacks, pool_full_requests, reclaim_victims
             FROM pg_stat_vector_buffer;
```

该视图对应无输入参数的集合返回函数 `pg_stat_get_vector_buffer()`，函数返回字段与视图一致。使用方法请参见[使用向量专用缓存](../database_administration_guide/using_vector_buffer.md)，查找命中统计请参见[PG_STAT_VECTOR_BUFFER_HIT_RATE](pg_stat_vector_buffer_hit_rate.md)。
