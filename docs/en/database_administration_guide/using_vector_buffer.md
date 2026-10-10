# Using Vector Buffer

## Functions

Vector Buffer buffers the vector payload used by vector indexes in the shared memory of a database instance. Multiple sessions in the same instance can reuse the loaded payload, reducing repeated access to vector data in the index. This function applies when vector data in HNSW, IVFFlat, and DiskANN indexes is repeatedly accessed. The actual benefits depend on the working set size, cache hit ratio, and query execution plan.

This function consists of two parts:

- Independent vector storage: When an index is created, the vector payloads are stored in the dedicated payload page of the index. The index structure accesses the payloads by reference. The payload page is still the persistent data of the index and is managed by the database.
- Vector buffer: When the payloads are read, the shared buffer is preferentially accessed. If the payloads are not hit, they are loaded from the payload page and written to the shared buffer when the buffer conditions are met. If the capacity is insufficient or the payloads are not suitable for caching, the query continues to read the payloads from the payload page.

The vector buffer does not store SQL query results, nor does it change the distance calculation method or approximate retrieval semantics of the index. The common page buffer of the index page and the vector buffer perform different buffer tasks. After this function is enabled, you still need to reserve memory for the common page buffer, query execution, and index construction.

## Conditions

To use the vector buffer, the following three conditions must be met.

| Hierarchy| Parameter| Default Value| Effective Method|
| --- | --- | --- | --- |
| DB instance| The value of `vector_buffers` is greater than 0.| 0 | After the configuration, restart the instance to allocate shared memory for the vector buffer.|
| Vector index| `enable_vector_payload_storage = on` | off | Specify it in `CREATE INDEX` and use the independent vector storage format.|
| Query session| `enable_vector_buffer_cache = on` | off | Use `SET` to enable payload buffer access for the current session.|

If only the session switch is enabled, the shared buffer will not be allocated and the storage format of existing indexes will not be converted. Indexes that use the independent storage format can still be queried when the buffer is disabled or the capacity is 0.

To configure a DB instance, you must have the database O&M permission. To create an index, you must have the corresponding permission on the target table. The following statistics queries require a database version that contains the vector buffer statistics functions and system views. For a database upgraded from an earlier version, the system catalogs must also be upgraded.

## Support Scope and Constraints

| Index| Independent Vector Storage| Options That Cannot Be Enabled Along with Independent Storage| Partitioned Table|
| --- | --- | --- | --- |
| HNSW | Supported| `use_mmap`, `enable_pq`, `enable_rabitq`, `enable_lsg`| HNSW LOCAL partitioned indexes are supported.|
| IVFFlat | Supported| `enable_pq`, `enable_rabitq`| Not supported|
| DiskANN | Supported| `enable_pq`, `enable_rabitq`| Not supported|

- This function buffers unquantized vector payloads. Currently, PQ or RaBitQ encoding is not supported. If quantized indexes are required, `enable_vector_payload_storage = off` must be retained.
- HNSW indexes that are stored independently use the common payload read path and do not use mmap. You cannot enable `hnsw_use_mmap` to switch the read mode of such indexes to mmap.
- The data type, dimension, distance operator class, table storage type, and index creation parameters must still meet the requirements of each index. For example, the `ef_construction` of HNSW must be greater than or equal to the `2 * m`. For details about the complete index syntax, see [Vector Indexes](https://docs.opengauss.org/en/docs/latest/datavec/vector_index.html).
- `enable_vector_payload_storage` is a format option determined during index creation and cannot be modified using `ALTER INDEX SET/RESET`. `REINDEX` means reindexing based on the original index options and is not used to switch the options. To convert the format, you need to create an index again based on the target options.
- If the payload size is less than the valid threshold of `vbp_min_payload` or the buffer entry containing management information cannot be placed in a chunk, the shared buffer is not used. Small-dimensional vectors may therefore have no hit records.
- The payload of partitioned indexes is managed according to the physical relationship of the actual index partitions. The parent index does not represent a single buffer pool. Partition pruning and whether the index is used for query are still determined by the execution plan.

## Configuring Instance Buffer

The following uses a 256 MB payload buffer as an example. Run the following command as the database OS user: `/path/to/data` indicates the data directory of the target instance. Replace it with the actual path.

```shell
gs_guc set -D /path/to/data -c "vector_buffers = 256MB"
```

`vector_buffers` is a POSTMASTER parameter. You need to restart the target instance based on the current deployment mode for the parameter to take effect. Connect to the database that has been restarted and check the parameter value:

```sql
openGauss=# SHOW vector_buffers;
openGauss=# SHOW vbp_chunk_size;
```

The default value of `vbp_chunk_size` is 2 MB. The buffer is allocated by complete chunks. When `vector_buffers` is not zero, it should contain at least one chunk. The tail space that is not an integer multiple of the chunk size is not used for payload caching. The shared buffer also requires additional control structures and hash table memory. Therefore, `vector_buffers` is not the total memory overhead of this function.

You are advised to retain the default values of other parameters and adjust the capacity based on the actual working set and monitoring result. For details about the parameter value ranges, effective modes, and recycling configurations, see [DataVec Vector Engine Parameters](../database_reference/datavec_vector_engine_parameters.md#vector-buffers).

## Creating an Index and Performing a Query

In the following example, three tables are created to observe the execution plan of each index, using 32-dimensional vectors. The example objects should be created in the test schema.

### HNSW Index

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

When the data volume is small, the optimizer may choose sequential scan. The following settings are used only to demonstrate the index access path. In actual services, determine whether to adjust the settings based on the execution plan.

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

Ensure that the plan uses `vb_hnsw_idx`. The first read is used to load the payload, and the buffered data can be reused for repeated queries. The actual number of hits is affected by the query path and other concurrent accesses.

### IVFFlat Index

```sql
openGauss=# CREATE TABLE vb_ivfflat AS SELECT * FROM vb_hnsw;
openGauss=# CREATE INDEX vb_ivfflat_idx ON vb_ivfflat USING ivfflat (embedding vector_l2_ops)
             WITH (lists = 10, enable_vector_payload_storage = on);
openGauss=# ANALYZE vb_ivfflat;
openGauss=# SELECT id FROM vb_ivfflat
             ORDER BY embedding <-> ('[' || repeat('1,', 31) || '1]')::vector LIMIT 5;
```

### DiskANN Index

```sql
openGauss=# CREATE TABLE vb_diskann AS SELECT * FROM vb_hnsw;
openGauss=# CREATE INDEX vb_diskann_idx ON vb_diskann USING diskann (embedding vector_l2_ops)
             WITH (index_size = 16, enable_vector_payload_storage = on);
openGauss=# ANALYZE vb_diskann;
openGauss=# SELECT id FROM vb_diskann
             ORDER BY embedding <-> ('[' || repeat('1,', 31) || '1]')::vector LIMIT 5;
openGauss=# RESET enable_seqscan;
```

You can use `EXPLAIN` for IVFFlat and DiskANN queries and repeat the operations, similar to the HNSW example, to check the changes in index access and cache hit.

### HNSW Partitioned Index

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

The execution plan should be checked for queries on single-partition queries, cross-partition queries, and queries that contain partition pruning conditions. After partitions are added, exchanged, truncated, or deleted, the buffer is maintained along with the physical relationship and payload lifecycle. You do not need to manually clear the buffer.

## Checking Buffer Status

Query the global capacity and hit statistics first:

```sql
openGauss=# SELECT configured_capacity_bytes, capacity_bytes, used_bytes,
                    entries, active_pools, fallbacks, evictions
             FROM pg_stat_vector_buffer;
openGauss=# SELECT lookups, hits, misses, round(hit_rate * 100, 2) AS hit_rate_percent
             FROM pg_stat_vector_buffer_hit_rate;
```

`hit_rate` is a ratio from 0 to 1. It is NULL if there is no buffer lookup. The counters show the accumulated values since the cache initialization of the current instance and are reset after a restart. They are not statistics for a single SQL statement or database. Some access counts are aggregated when the access context is released. Concurrent reads of different fields or views do not guarantee a consistent snapshot at the same time. Comparing the increment before and after the query is more suitable for locating the current load than observing only the cumulative hit ratio.

To locate the buffer pool of a common index, you can use the physical file ID for association.

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

`relfilenode` is the physical file identifier, not the `pg_class.oid`. It may change after indexes are rebuilt. For partitioned indexes, you need to query the physical identifier of the specific indexed partition. The parent index cannot be directly associated with the preceding common index example.

| View| Purpose|
| --- | --- |
| [PG_STAT_VECTOR_BUFFER](../database_reference/pg_stat_vector_buffer.md) | Global capacity, usage, loading, rollback, recycling, and invalidation counts.|
| [PG_STAT_VECTOR_BUFFER_HIT_RATE](../database_reference/pg_stat_vector_buffer_hit_rate.md) | Cache lookups, hits, misses, and hit ratio.|
| [PG_STAT_VECTOR_BUFFER_POOL](../database_reference/pg_stat_vector_buffer_pool.md) | Physical relationship, payload length, and resource usage of each buffer pool.|
| [PG_STAT_VECTOR_BUFFER_CHUNK](../database_reference/pg_stat_vector_buffer_chunk.md) | Allocation and slot status of memory blocks.|
| [PG_STAT_VECTOR_BUFFER_HASH_CHAIN](../database_reference/pg_stat_vector_buffer_hash_chain.md) | Hash chain distribution and scale-out progress.|

The chunk and hash-chain views traverse the internal structure. Therefore, they are used for diagnosis as required to avoid frequent polling of a large amount of detailed data.

## Data Maintenance and Buffer Recycling

Insertion, update, deletion, and `VACUUM` are still performed according to the original transaction and visibility rules of the database. When a payload is deleted, replaced, or recycled, the system instantly invalidates the buffer. The read entries can be reused only after the access ends. Transaction rollback and query exceptions also release the buffer resources occupied by the current access.

The responsibilities of buffer eviction and `VACUUM` are different: Buffer eviction releases space in the shared buffer, while `VACUUM` clears invalid data from indexes based on visibility and maintains payload space reusability. You cannot determine whether to perform `VACUUM` based on the cache hit ratio, nor can you ensure that the index file is immediately reduced by performing `VACUUM` once.

```sql
openGauss=# UPDATE vb_hnsw
             SET embedding = ('[' || repeat('2000,', 31) || '2000]')::vector WHERE id = 1;
openGauss=# DELETE FROM vb_hnsw WHERE id = 2;
openGauss=# VACUUM ANALYZE vb_hnsw;
```

If the space of the buffer pool is insufficient, the read operation can be rolled back to the payload page, and background recycling can be triggered based on the `vbp_cold_evict` configuration. The recycling is completed in batches by background threads. It is not guaranteed that the current requests that are not hit can immediately obtain idle buffer slots. Disabling background eviction does not disable buffer reading or relationship invalidation.

The buffered content is stored only in the memory. After the system is restarted, the content needs to be reloaded. The primary and standby instances maintain their own buffers. WAL replay maintains persistent payloads and processes related buffer invalidation. The popularity and hit statistics of the primary database buffer are not replicated to the standby database.

## Deactivation and Upgrade Compatibility

Disable buffer access for the current session:

```sql
openGauss=# SET enable_vector_buffer_cache = off;
```

This setting does not clear the shared buffer used by other sessions or change the independent storage format of the index. To stop allocating the vector buffer to an instance, set `vector_buffers` to `0` and restart the instance.

The vector indexes in the original format are still accessed in the original format after the upgrade. If the vector buffer is required, use `enable_vector_payload_storage = on` to re-create the corresponding index.

The statistics view is initialized by the system catalog in a new database. In an existing database, the statistics function and view are installed by the upgrade process of the corresponding version. The rollback script of the statistics API processes only catalog objects and does not convert the created independent storage indexes. Before rolling back to a version that does not support the storage format, you need to re-create related indexes in the format supported by the target version and follow the database upgrade or rollback process of the target version.

## Common Issues

| Symptom| Check Method|
| --- | --- |
| The value of `capacity_bytes` is 0.| Check whether the value of `vector_buffers` is not 0 and whether the current instance is restarted after the configuration.|
| The capacity has been allocated, but there are no cache entries or hits.| Check whether the current session switch, format options during index creation, execution plan, and whether the payload reaches the valid thresholds specified by `vbp_min_payload`. Payload hits are not generated for queries on empty tables or queries that do not actually access indexes.|
| A message is displayed indicating that a certain combination is not supported during index creation.| Check the constraints on the combinations of PQ, RaBitQ, LSG, mmap, and independent storage, as well as the index parameters and partitioning support range.|
| The value of `fallbacks` or `pool_full_requests` keeps increasing.| Determine the pressure based on the capacity, occupied slots, number of buffer pools, recycling requests, and concurrent queries. Rollback is not equivalent to query failure. Adjust the capacity based on the working set to avoid insufficient capacity by increasing the recycling frequency.|
| The value of `used_bytes` does not decrease immediately after data is deleted.| Check the transaction visibility, whether `VACUUM` has been executed, whether there are still access references, and the background recycling status. This value reflects the buffer slot usage, which is not equal to the number of valid vector bytes in the table.|
| A message is displayed indicating that the object does not exist when the statistics view is queried.| Check whether the version in use contains the statistics API and whether the system catalog of the database has been upgraded. If only the database binary files are replaced, the views in the old database will not be automatically supplemented.|

## Clearing Example Objects

```sql
openGauss=# DROP TABLE vb_partition;
openGauss=# DROP TABLE vb_diskann;
openGauss=# DROP TABLE vb_ivfflat;
openGauss=# DROP TABLE vb_hnsw;
openGauss=# RESET enable_vector_buffer_cache;
```
