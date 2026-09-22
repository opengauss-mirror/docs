# PG_STAT_VECTOR_BUFFER_HASH_CHAIN

`PG_STAT_VECTOR_BUFFER_HASH_CHAIN` 显示当前实例中可读取的向量缓存池哈希链分布及扩容进度。普通用户可以查询；缓存未启用或没有可读取的缓存池哈希信息时返回空集。

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| vbp_id | integer | 缓存池内部标识。 |
| generation | integer | 缓存池代次。 |
| live_entries | integer | 缓存池当前有效缓存条目数。 |
| bucket_count | integer | 本次扫描的活动哈希表桶数。 |
| n0 | integer | 观测链长为 0 的桶数。 |
| n1 | integer | 观测链长为 1 的桶数。 |
| n2 | integer | 观测链长为 2 的桶数。 |
| n3 | integer | 观测链长为 3 的桶数。 |
| n_ge4 | integer | 观测链长大于或等于 4 的桶数。 |
| max_chain | integer | 本次扫描观测到的最大链长。 |
| chained_nodes | integer | 本次扫描观测到的链节点总数。 |
| truncated | integer | 链遍历达到扫描上限而提前终止的桶数。 |
| rehashing | boolean | 是否正在进行哈希表扩容迁移。 |
| migrated_buckets | integer | 扩容期间已迁移的桶数，非扩容状态为 0。 |
| candidate_bucket_count | integer | 扩容目标哈希表的桶数，非扩容状态为 0。 |

该视图不为全表获取一致性快照。扩容期间仅扫描当前活动表，已迁移的桶可能不再包含原链，因此 `chained_nodes` 可能小于 `live_entries`；应等待 `rehashing = false` 后再分析链长分布。`truncated` 非零时，也不应把观测链长视为完整结果。

```sql
openGauss=# SELECT vbp_id, bucket_count, n0, n1, n2, n3, n_ge4,
                    max_chain, truncated, rehashing, migrated_buckets
             FROM pg_stat_vector_buffer_hash_chain ORDER BY vbp_id;
```

该视图会遍历哈希桶和链，宜用于按需诊断，避免高频轮询。它对应无输入参数的集合返回函数 `pg_stat_get_vector_buffer_hash_chain()`，函数返回字段与视图一致。使用方法请参见[使用向量专用缓存](../database_administration_guide/using_vector_buffer.md)。
