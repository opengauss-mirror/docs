# PG_STAT_VECTOR_BUFFER_CHUNK

`PG_STAT_VECTOR_BUFFER_CHUNK` 显示当前实例向量专用缓存的各内存块及槽位状态，每个 chunk 对应一行。普通用户可以查询；缓存未启用时返回空集。

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| chunk_index | integer | 内存块在共享载荷区中的编号。 |
| vbp_id | integer | 读取到的所属缓存池标识；没有取得有效所属池信息时为 -1。 |
| vbp_generation | integer | 所属缓存池的代次；未取得有效所属池信息时为 0。 |
| state | text | 内存块状态：FREE（空闲）、ACTIVE（正在使用）、DRAINING（正在排空）、CLAIMED（正在认领）；未知值显示 UNKNOWN。 |
| n_free | integer | 当前空闲槽位数。 |
| n_reserved | integer | 处于封闭或保留状态、尚未作为有效缓存条目发布的槽位数。 |
| n_cached | integer | 当前已缓存槽位数。 |
| n_quarantined | integer | 已失效但尚待安全回收的隔离槽位数。 |
| slot_count | integer | 该内存块按所属缓存池布局可容纳的槽位数。 |
| slot_stride | integer | 槽位之间的字节跨度，包含管理信息和对齐开销。 |
| in_cl | boolean | 是否在所属缓存池的内存块链表中。 |
| in_freelist | boolean | 是否带有全局空闲链表标记。 |

没有取得有效所属池信息时，槽位布局及计数字段可能为 0。状态和计数在并发分配、失效和回收期间可能变化，不应通过一次查询的字段相加判断内存一致性。

```sql
openGauss=# SELECT chunk_index, vbp_id, state, n_free, n_cached, n_quarantined
             FROM pg_stat_vector_buffer_chunk ORDER BY chunk_index;
```

该视图会扫描内存块中的槽位，建议仅在诊断时按需查询。它对应无输入参数的集合返回函数 `pg_stat_get_vector_buffer_chunk()`，函数返回字段与视图一致。使用方法请参见[使用向量专用缓存](../database_administration_guide/using_vector_buffer.md)。
