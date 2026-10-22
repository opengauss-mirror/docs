# PG_STAT_VECTOR_BUFFER_CHUNK

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-10-13T02:00:21.880Z pushedAt=2026-10-19T09:17:42.104Z -->

`PG_STAT_VECTOR_BUFFER_CHUNK` displays the status of each memory chunk and its slots in the vector buffer of the current instance, with one row per chunk. Ordinary users can query this view; an empty set is returned when the buffer is not enabled.

| Name | Type | Description |
| --- | --- | --- |
| chunk_index | integer | Number of the memory chunk in the shared payload area. |
| vbp_id | integer | Identifier of the cache pool to which the chunk belongs; -1 if no valid pool information is obtained. |
| vbp_generation | integer | Generation of the cache pool to which the chunk belongs; 0 if no valid pool information is obtained. |
| state | text | State of the memory chunk: FREE (idle), ACTIVE (in use), DRAINING (being drained), CLAIMED (being claimed); UNKNOWN is displayed for unknown values. |
| n_free | integer | Number of currently free slots. |
| n_reserved | integer | Number of slots that are in a closed or reserved state and have not yet been published as valid cache entries. |
| n_cached | integer | Number of currently cached slots. |
| n_quarantined | integer | Number of quarantined slots that have been invalidated but are still awaiting safe reclamation. |
| slot_count | integer | Number of slots that this memory chunk can hold according to the layout of its cache pool. |
| slot_stride | integer | Byte stride between slots, including management information and alignment overhead. |
| in_cl | boolean | Whether the chunk is in the memory chunk list of its cache pool. |
| in_freelist | boolean | Whether the chunk carries the global free list flag. |

When no valid pool information is obtained, the slot layout and count fields may be 0. States and counts may change during concurrent allocation, invalidation, and reclamation; therefore, memory consistency should not be determined by summing fields from a single query.

```sql
openGauss=# SELECT chunk_index, vbp_id, state, n_free, n_cached, n_quarantined
             FROM pg_stat_vector_buffer_chunk ORDER BY chunk_index;
```

This view scans the slots in the memory chunks, so it is recommended to query it on demand only for diagnostics. It corresponds to the set-returning function `pg_stat_get_vector_buffer_chunk()` with no input parameters, and the fields returned by the function are consistent with those of the view. For usage, see [Using the Vector Buffer](../database_administration_guide/using_vector_buffer.md).
