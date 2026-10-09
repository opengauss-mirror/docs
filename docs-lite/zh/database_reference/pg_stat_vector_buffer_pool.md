# PG_STAT_VECTOR_BUFFER_POOL

`PG_STAT_VECTOR_BUFFER_POOL` 显示当前实例中可取得访问引用的向量缓存池，每个池对应一行。普通用户可以查询。缓存未启用或没有可读取的缓存池时，返回空集。

缓存池按索引的物理关系区分；分区索引应识别具体索引分区的物理关系。缓存池标识可被复用，连续采样时应结合 generation 和物理关系字段识别池，不应仅依赖 vbp_id。

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| vbp_id | integer | 缓存池内部标识。 |
| generation | integer | 缓存池的代次，用于区分同一标识的不同生命周期。 |
| state | text | 缓存池状态，通常为 ACTIVE。状态标签还包括 FREE、DETACHED、DESTROY_QUEUED、DESTROYING、UNKNOWN；该视图不会保证输出每种状态的池。 |
| spcnode | oid | 索引物理关系所属的表空间标识。 |
| dbnode | oid | 索引物理关系所属的数据库标识。 |
| relfilenode | oid | 索引或索引分区的物理文件标识，不是系统目录中对象的 OID。 |
| payload_len | integer | 该池缓存的载荷长度，单位为字节。 |
| slot_size | integer | 单个槽位的大小，包含管理信息及对齐开销，单位为字节。 |
| live_entries | integer | 当前有效缓存条目数。 |
| n_free_total | integer | 该池已分配内存块中的空闲槽位合计。 |
| n_occupied_total | integer | 该池已分配内存块中的已占用槽位合计，包含尚不能复用的槽位。 |
| n_chunks_used | integer | 该池当前使用的内存块数量。 |
| scan_refs | integer | 读取时的访问引用数，不含本次统计读取自身持有的引用；不是累计 SQL 扫描次数。 |
| evict_requested | boolean | 是否存在待处理的后台回收请求。 |

```sql
openGauss=# SELECT vbp_id, generation, dbnode, relfilenode, payload_len,
                    live_entries, n_chunks_used, evict_requested
             FROM pg_stat_vector_buffer_pool ORDER BY vbp_id;
```

该视图对应无输入参数的集合返回函数 `pg_stat_get_vector_buffer_pool()`，函数返回字段与视图一致。字段按当前运行状态采样，不是严格一致的快照；关联普通索引的示例请参见[使用向量专用缓存](../database_administration_guide/using_vector_buffer.md)。
