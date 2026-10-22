# PG_STAT_VECTOR_BUFFER

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-10-13T02:01:22.440Z pushedAt=2026-10-19T09:41:47.815Z -->

`PG_STAT_VECTOR_BUFFER` displays the global capacity, usage, and runtime counters of the vector-specific buffer of the current database instance, and returns one row. Databases and sessions in the instance share these statistics, and ordinary users can query them.

Counters accumulate after the cache is initialized and are reset after a restart. Usage is summarized based on the state at read time, and access counts may be updated only after the access context is released. In a concurrent environment, the fields and different views do not form a strictly consistent snapshot. When the cache is not enabled, all fields are 0.

| Name | Type | Description |
| --- | --- | --- |
| `capacity_bytes` | `bigint` | Capacity actually available for the payload cache. Unit: Byte, rounded down to the nearest whole chunk. |
| `configured_capacity_bytes` | `bigint` | Capacity of the payload area configured when the cache is initialized. Unit: Byte. |
| `used_bytes` | `bigint` | Total size of occupied slots. Unit: Byte, including slot management information and alignment overhead. It is not the number of bytes of valid vector data, nor does it include all shared management structures. |
| `chunk_size` | `integer` | Size of a single memory chunk. Unit: Byte. |
| `chunk_count` | `integer` | Total number of memory chunks in the payload area. |
| `max_vbps` | `integer` | Maximum number of cache pools that can be managed. |
| `min_payload` | `integer` | Minimum cacheable payload length after alignment. Unit: Byte. |
| `entries` | `integer` | Total number of valid cache entries in the current cache pools. |
| `n_free_total` | `integer` | Total number of free slots in the memory chunks already allocated to the current cache pools, excluding the capacity of memory chunks not yet allocated to cache pools. |
| `active_pools` | `integer` | Number of cache pools currently in the ACTIVE state. |
| `evict_pending` | `integer` | Number of cache pools that currently have pending eviction requests. |
| `installs` | `bigint` | Cumulative number of entries successfully installed into the shared cache. |
| `fallbacks` | `bigint` | Cumulative number of times the payload access interface fell back to payload page reads. A fallback does not indicate a query failure, nor does it equal the number of physical disk reads. |
| `evictions` | `bigint` | Cumulative number of cache entries evicted in the background. |
| `pool_full_requests` | `bigint` | Cumulative number of eviction requests made when cache pool space was insufficient. |
| `reclaim_attempts` | `bigint` | Cumulative number of times the background attempted to select and reclaim cache entries. |
| `reclaim_victims` | `bigint` | Cumulative number of entries actually reclaimed in the background. |
| `invalidations` | `bigint` | Cumulative count of invalidation operations initiated on payloads. |
| `invalidated_entries` | `bigint` | Cumulative number of cache entries that invalidation operations actually matched and invalidated. |

```sql
openGauss=# SELECT capacity_bytes, used_bytes, entries, active_pools,
                    fallbacks, pool_full_requests, reclaim_victims
             FROM pg_stat_vector_buffer;
```

This view corresponds to the set-returning function `pg_stat_get_vector_buffer()`, which takes no input parameters and returns the same fields as the view. For usage, see [Using the Vector-Specific Buffer](../database_administration_guide/using_vector_buffer.md). For lookup hit statistics, see [PG_STAT_VECTOR_BUFFER_HIT_RATE](pg_stat_vector_buffer_hit_rate.md).
