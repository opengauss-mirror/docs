# PG_STAT_VECTOR_BUFFER_POOL

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-10-13T02:01:01.564Z pushedAt=2026-10-19T09:34:23.791Z -->

`PG_STAT_VECTOR_BUFFER_POOL` displays the vector buffer pools that can be accessed and referenced in the current instance, with one row per pool. Ordinary users can query this view. When the cache is not enabled or no readable buffer pool exists, an empty set is returned.

Buffer pools are distinguished by the physical relation of the index. For a partition index, the physical relation of the specific index partition should be identified. Buffer pool identifiers can be reused. During continuous sampling, identify a pool by combining the generation and physical relation fields, rather than relying solely on vbp_id.

| Name | Type | Description |
| --- | --- | --- |
| vbp_id | integer | Internal identifier of the buffer pool. |
| generation | integer | Generation of the buffer pool, used to distinguish different lifecycles of the same identifier. |
| state | text | State of the buffer pool, usually ACTIVE. State labels also include FREE, DETACHED, DESTROY_QUEUED, DESTROYING, and UNKNOWN. This view does not guarantee that pools in every state are output. |
| spcnode | oid | Identifier of the tablespace to which the physical relation of the index belongs. |
| dbnode | oid | Identifier of the database to which the physical relation of the index belongs. |
| relfilenode | oid | Physical file identifier of the index or index partition, not the OID of the object in the system catalog. |
| payload_len | integer | Payload length cached by this pool, in bytes. |
| slot_size | integer | Size of a single slot, including management information and alignment overhead, in bytes. |
| live_entries | integer | Number of currently valid cache entries. |
| n_free_total | integer | Total number of free slots in the memory blocks allocated by this pool. |
| n_occupied_total | integer | Total number of occupied slots in the memory blocks allocated by this pool, including slots that cannot be reused yet. |
| n_chunks_used | integer | Number of memory blocks currently used by this pool. |
| scan_refs | integer | Number of access references during reads, excluding the reference held by this statistics read itself. It is not the cumulative number of SQL scans. |
| evict_requested | boolean | Whether there is a pending background eviction request. |

```sql
openGauss=# SELECT vbp_id, generation, dbnode, relfilenode, payload_len,
                    live_entries, n_chunks_used, evict_requested
             FROM pg_stat_vector_buffer_pool ORDER BY vbp_id;
```

This view corresponds to the set-returning function `pg_stat_get_vector_buffer_pool()` with no input parameters. The fields returned by the function are consistent with those of the view. Fields are sampled based on the current running state and are not a strictly consistent snapshot. For an example of a regular index, see [Using the Vector-Specific Cache](../database_administration_guide/using_vector_buffer.md).
