# 使用向量专用缓存

## 功能介绍

向量专用缓存（Vector Buffer）在数据库实例的共享内存中缓存向量索引使用的向量载荷（payload）。同一实例中的多个会话可以复用已经加载的载荷，减少重复访问索引中的向量数据。该功能适用于 HNSW、IVFFlat 和 DiskANN 索引中向量数据被反复访问的场景，实际收益取决于工作集大小、缓存命中率及查询执行计划。

该功能包含两个部分：

- 向量独立存储：在创建索引时，将向量载荷存放到索引的专用载荷页，索引结构通过引用访问载荷。载荷页仍属于该索引的持久化数据，由数据库管理。
- 向量专用缓存：读取上述载荷时，优先尝试共享缓存；未命中时从载荷页加载，并在满足缓存条件时写入共享缓存。容量不足或载荷不适合缓存时，查询继续通过载荷页读取。

向量专用缓存不保存 SQL 查询结果，也不改变索引的距离计算方式和近似检索语义。索引页的普通页缓存与向量专用缓存各自承担不同的缓存工作。开启该功能后，仍需为普通页缓存、查询执行和索引构建预留内存。

## 启用条件

使用向量专用缓存需要同时满足以下三个条件。

| 层次 | 参数 | 默认值 | 生效方式 |
| --- | --- | --- | --- |
| 数据库实例 | `vector_buffers` 大于 0 | 0 | 配置后重启实例，为向量专用缓存分配共享内存。 |
| 向量索引 | `enable_vector_payload_storage = on` | off | 在 `CREATE INDEX` 中指定，使用向量独立存储格式。 |
| 查询会话 | `enable_vector_buffer_cache = on` | off | 使用 `SET` 为当前会话开启载荷缓存访问。 |

仅开启会话开关不会分配共享缓存，也不会转换已有索引的存储格式。使用独立存储格式的索引在缓存关闭或容量为 0 时仍可以查询。

配置数据库实例需要数据库运维权限；创建索引需要目标表的相应权限。下文的统计查询需要使用已包含向量专用缓存统计函数和系统视图的数据库版本；从旧版本升级的数据库还需完成配套系统目录升级。

## 支持范围与约束

| 索引 | 向量独立存储 | 不支持与独立存储同时启用的选项 | 分区表 |
| --- | --- | --- | --- |
| HNSW | 支持 | `use_mmap`、`enable_pq`、`enable_rabitq`、`enable_lsg` | 支持 HNSW LOCAL 分区索引。 |
| IVFFlat | 支持 | `enable_pq`、`enable_rabitq` | 不支持。 |
| DiskANN | 支持 | `enable_pq`、`enable_rabitq` | 不支持。 |

- 本功能缓存未量化的向量载荷，当前不支持缓存 PQ 或 RaBitQ 编码。需要使用量化索引时，应保持 `enable_vector_payload_storage = off`。
- HNSW 独立存储索引使用普通载荷读取路径，不使用 mmap；不能通过开启 `hnsw_use_mmap` 将此类索引切换为 mmap 读取。
- 数据类型、维度、距离操作符类、表存储类型及建索引参数仍需符合各索引的要求。例如，HNSW 的 `ef_construction` 必须大于或等于 `2 * m`。完整索引语法请参见[向量索引](https://docs.opengauss.org/zh/docs/latest/datavec/vector_index.html)。
- `enable_vector_payload_storage` 是创建索引时确定的格式选项，不允许通过 `ALTER INDEX SET/RESET` 修改。`REINDEX` 按索引原有选项重建，不用于切换此选项；如需转换格式，应按目标选项重新创建索引。
- 载荷大小小于 `vbp_min_payload` 的有效阈值，或者包含管理信息的缓存条目无法放入一个 chunk 时，不进入共享缓存。小维度向量可能因此没有命中记录。
- 分区索引的载荷按实际索引分区的物理关系管理。父索引不表示单个缓存池；分区裁剪和查询是否使用索引仍由执行计划决定。

## 配置实例缓存

以 256MB 载荷缓存为例，使用数据库操作系统用户执行以下命令。`/path/to/data` 表示目标实例的数据目录，请替换为实际路径。

```shell
gs_guc set -D /path/to/data -c "vector_buffers = 256MB"
```

`vector_buffers` 为 POSTMASTER 参数，需按当前部署方式重启目标实例才能生效。连接重启后的数据库，确认参数值：

```sql
openGauss=# SHOW vector_buffers;
openGauss=# SHOW vbp_chunk_size;
```

`vbp_chunk_size` 默认为 2MB，缓存按完整 chunk 分配。`vector_buffers` 非零时至少应容纳一个 chunk；非整数倍的尾部容量不用于载荷缓存。共享缓存还需要额外的控制结构和哈希表内存，因此 `vector_buffers` 不是该功能的全部内存开销。

建议先保留其他参数的默认值，根据实际工作集和监控结果调整容量。参数的范围、生效方式和回收配置请参见[DataVec向量引擎参数](../database_reference/datavec_vector_engine_parameters.md#vector-buffers)。

## 创建索引并查询

以下示例使用 32 维向量，分别创建三个表以便观察各索引的执行计划。示例对象应在测试 schema 中创建。

### HNSW 索引

```sql
openGauss=# CREATE TABLE vb_hnsw (id integer, embedding vector(32));
openGauss=# INSERT INTO vb_hnsw
             SELECT i, ('[' || repeat(i::text || ',', 31) || i::text || ']')::vector
             FROM generate_series(1, 1000) AS s(i);
openGauss=# CREATE INDEX vb_hnsw_idx ON vb_hnsw USING hnsw (embedding vector_l2_ops)
             WITH (enable_vector_payload_storage = on);
openGauss=# ANALYZE vb_hnsw;
openGauss=# SET enable_vector_buffer_cache = on;
```

小数据量下优化器可能选择顺序扫描。以下设置仅用于演示索引访问路径，实际业务应根据执行计划决定是否调整。

```sql
openGauss=# SET enable_seqscan = off;
openGauss=# EXPLAIN (COSTS OFF)
             SELECT id FROM vb_hnsw
             ORDER BY embedding <-> ('[' || repeat('1,', 31) || '1]')::vector LIMIT 5;
openGauss=# SELECT id FROM vb_hnsw
             ORDER BY embedding <-> ('[' || repeat('1,', 31) || '1]')::vector LIMIT 5;
openGauss=# SELECT id FROM vb_hnsw
             ORDER BY embedding <-> ('[' || repeat('1,', 31) || '1]')::vector LIMIT 5;
```

确认计划使用 `vb_hnsw_idx`。首次读取用于加载载荷，重复查询可以复用已缓存的数据；实际命中次数受查询路径和其他并发访问影响。

### IVFFlat 索引

```sql
openGauss=# CREATE TABLE vb_ivfflat AS SELECT * FROM vb_hnsw;
openGauss=# CREATE INDEX vb_ivfflat_idx ON vb_ivfflat USING ivfflat (embedding vector_l2_ops)
             WITH (lists = 10, enable_vector_payload_storage = on);
openGauss=# ANALYZE vb_ivfflat;
openGauss=# SELECT id FROM vb_ivfflat
             ORDER BY embedding <-> ('[' || repeat('1,', 31) || '1]')::vector LIMIT 5;
```

### DiskANN 索引

```sql
openGauss=# CREATE TABLE vb_diskann AS SELECT * FROM vb_hnsw;
openGauss=# CREATE INDEX vb_diskann_idx ON vb_diskann USING diskann (embedding vector_l2_ops)
             WITH (index_size = 16, enable_vector_payload_storage = on);
openGauss=# ANALYZE vb_diskann;
openGauss=# SELECT id FROM vb_diskann
             ORDER BY embedding <-> ('[' || repeat('1,', 31) || '1]')::vector LIMIT 5;
openGauss=# RESET enable_seqscan;
```

可按 HNSW 示例的方式，对 IVFFlat、DiskANN 查询使用 `EXPLAIN` 并重复执行，检查索引访问和缓存命中变化。

### HNSW 分区索引

```sql
openGauss=# CREATE TABLE vb_partition (id integer, embedding vector(32))
             PARTITION BY RANGE (id)
             (PARTITION p1 VALUES LESS THAN (501),
              PARTITION p2 VALUES LESS THAN (1001));
openGauss=# INSERT INTO vb_partition SELECT * FROM vb_hnsw;
openGauss=# CREATE INDEX vb_partition_idx ON vb_partition USING hnsw (embedding vector_l2_ops)
             LOCAL WITH (enable_vector_payload_storage = on);
openGauss=# ANALYZE vb_partition;
openGauss=# SELECT id FROM vb_partition PARTITION (p1)
             ORDER BY embedding <-> ('[' || repeat('1,', 31) || '1]')::vector LIMIT 5;
```

查询单个分区、跨分区查询及包含分区裁剪条件的查询都应分别检查执行计划。分区增加、交换、截断或删除后，缓存随物理关系及载荷生命周期进行维护，无需手动清除缓存。

## 查看缓存状态

优先查询全局容量与命中统计：

```sql
openGauss=# SELECT configured_capacity_bytes, capacity_bytes, used_bytes,
                    entries, active_pools, fallbacks, evictions
             FROM pg_stat_vector_buffer;
openGauss=# SELECT lookups, hits, misses, round(hit_rate * 100, 2) AS hit_rate_percent
             FROM pg_stat_vector_buffer_hit_rate;
```

`hit_rate` 为 0 到 1 的比率，没有缓存查找时为 NULL。计数器为当前实例自缓存初始化以来的累计值，重启后重新统计；它们不是单条 SQL 或单个数据库的统计。部分访问计数在访问上下文释放时汇总，并发读取不同字段或视图不保证同一时刻的一致快照。比较查询前后的增量，比仅观察累计命中率更适合定位当前负载。

如需定位普通索引的缓存池，可使用物理文件标识进行关联：

```sql
openGauss=# SELECT p.*
             FROM pg_stat_vector_buffer_pool p
             JOIN pg_class c ON p.relfilenode = pg_relation_filenode(c.oid)
             JOIN pg_database d ON d.oid = p.dbnode
             WHERE d.datname = current_database()
               AND p.spcnode = CASE WHEN c.reltablespace = 0 THEN d.dattablespace
                                    ELSE c.reltablespace END
               AND c.oid = 'vb_hnsw_idx'::regclass;
```

`relfilenode` 是物理文件标识，不是 `pg_class.oid`；重建索引后它可能变化。分区索引需查询具体索引分区的物理标识，不能直接用上述普通索引示例关联父索引。

| 视图 | 用途 |
| --- | --- |
| [PG_STAT_VECTOR_BUFFER](../database_reference/pg_stat_vector_buffer.md) | 全局容量、使用量、加载、回退、回收和失效计数。 |
| [PG_STAT_VECTOR_BUFFER_HIT_RATE](../database_reference/pg_stat_vector_buffer_hit_rate.md) | 缓存查找、命中、未命中和命中率。 |
| [PG_STAT_VECTOR_BUFFER_POOL](../database_reference/pg_stat_vector_buffer_pool.md) | 各缓存池对应的物理关系、载荷长度和资源使用量。 |
| [PG_STAT_VECTOR_BUFFER_CHUNK](../database_reference/pg_stat_vector_buffer_chunk.md) | 内存块的分配和槽位状态。 |
| [PG_STAT_VECTOR_BUFFER_HASH_CHAIN](../database_reference/pg_stat_vector_buffer_hash_chain.md) | 哈希链分布和扩容进度。 |

chunk 和 hash-chain 视图会遍历内部结构，宜按需用于诊断，避免高频轮询大量细节数据。

## 数据维护与缓存回收

插入、更新、删除及 `VACUUM` 仍按数据库原有事务和可见性规则执行。载荷被删除、替换或回收时，系统同步维护缓存失效；尚被读取的条目需等待访问结束后再复用。事务回滚和查询异常也会释放当前访问持有的缓存资源。

缓存淘汰与 `VACUUM` 的职责不同：缓存淘汰释放共享缓存中的空间，`VACUUM` 根据可见性清理索引中的无效数据并维护载荷空间复用。不能通过缓存命中率判断是否需要执行 `VACUUM`，也不能通过执行一次 `VACUUM` 保证索引文件立即缩小。

```sql
openGauss=# UPDATE vb_hnsw
             SET embedding = ('[' || repeat('2000,', 31) || '2000]')::vector WHERE id = 1;
openGauss=# DELETE FROM vb_hnsw WHERE id = 2;
openGauss=# VACUUM ANALYZE vb_hnsw;
```

缓存池空间不足时，读取可以回退到载荷页，并按 `vbp_cold_evict` 配置触发后台回收。回收由后台线程分批完成，不保证当前未命中的请求立即获得空闲缓存槽位。关闭后台淘汰不会关闭缓存读取或关系失效处理。

缓存内容仅驻留内存，重启后需要重新加载。主备实例分别维护各自的缓存；WAL 回放维护持久化载荷并处理相关缓存失效，主库缓存的热度和命中统计不会复制到备库。

## 停用与升级兼容

停用当前会话的缓存访问：

```sql
openGauss=# SET enable_vector_buffer_cache = off;
```

该设置不会清空其他会话使用的共享缓存，也不会改变索引的独立存储格式。若要停止为实例分配向量专用缓存，将 `vector_buffers` 设为 0 并重启实例。

原格式的向量索引在升级后仍按原格式访问。若需要使用向量专用缓存，应使用 `enable_vector_payload_storage = on` 重新创建相应索引。

统计视图在新建数据库中由系统目录初始化；已有数据库由版本配套的升级流程安装统计函数和视图。统计接口的回滚脚本仅处理目录对象，不会转换已创建的独立存储索引。回退到不支持该存储格式的版本前，需先按目标版本支持的格式重新创建相关索引，并遵循该版本的数据库升级/回滚流程。

## 常见问题

| 现象 | 检查方法 |
| --- | --- |
| `capacity_bytes` 为 0 | 检查 `vector_buffers` 是否非零，以及配置后是否已重启当前实例。 |
| 容量已分配，但没有缓存条目或命中 | 检查当前会话开关、索引创建时的格式选项、执行计划，以及载荷是否达到 `vbp_min_payload` 的有效阈值。空表和未实际访问索引的查询不会产生载荷命中。 |
| 创建索引提示不支持某个组合 | 检查 PQ、RaBitQ、LSG、mmap 与独立存储的组合限制，以及索引自身参数和分区支持范围。 |
| `fallbacks` 或 `pool_full_requests` 持续增加 | 结合容量、占用槽位、缓存池数量、回收请求和查询并发判断压力；回退不等同于查询失败。根据工作集调整容量，避免仅靠增大回收频率处理容量不足。 |
| 删除数据后 `used_bytes` 未立即下降 | 检查事务可见性、是否已执行 `VACUUM`、是否仍有访问引用及后台回收状态。该值反映缓存槽位占用，不等于表中的有效向量字节数。 |
| 查询统计视图提示对象不存在 | 检查所用版本是否包含统计接口，以及该数据库的系统目录升级是否完成。仅替换数据库二进制不会自动补齐旧库中的视图。 |

## 清理示例对象

```sql
openGauss=# DROP TABLE vb_partition;
openGauss=# DROP TABLE vb_diskann;
openGauss=# DROP TABLE vb_ivfflat;
openGauss=# DROP TABLE vb_hnsw;
openGauss=# RESET enable_vector_buffer_cache;
```
