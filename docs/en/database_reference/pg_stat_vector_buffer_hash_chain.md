# PG_STAT_VECTOR_BUFFER_HASH_CHAIN

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-10-13T02:00:30.255Z pushedAt=2026-10-19T09:20:53.028Z -->

`PG_STAT_VECTOR_BUFFER_HASH_CHAIN` displays the hash chain distribution and expansion progress of the readable vector buffer pool in the current instance. Ordinary users can query it. An empty set is returned when the cache is not enabled or no readable buffer pool hash information is available.

| Name | Type | Description |
| --- | --- | --- |
| vbp_id | integer | Internal identifier of the buffer pool. |
| generation | integer | Generation of the buffer pool. |
| live_entries | integer | Number of currently valid cache entries in the buffer pool. |
| bucket_count | integer | Number of active hash table buckets in this scan. |
| n0 | integer | Number of buckets with an observed chain length of 0. |
| n1 | integer | Number of buckets with an observed chain length of 1. |
| n2 | integer | Number of buckets with an observed chain length of 2. |
| n3 | integer | Number of buckets with an observed chain length of 3. |
| n_ge4 | integer | Number of buckets with an observed chain length greater than or equal to 4. |
| max_chain | integer | Maximum chain length observed in this scan. |
| chained_nodes | integer | Total number of chain nodes observed in this scan. |
| truncated | integer | Number of buckets whose chain traversal terminated early because the scan limit was reached. |
| rehashing | boolean | Whether hash table expansion migration is in progress. |
| migrated_buckets | integer | Number of buckets migrated during expansion. The value is 0 when not in the expansion state. |
| candidate_bucket_count | integer | Number of buckets in the target hash table for expansion. The value is 0 when not in the expansion state. |

This view does not obtain a consistent snapshot for the entire table. During expansion, only the currently active table is scanned, and migrated buckets may no longer contain the original chains. Therefore, `chained_nodes` may be smaller than `live_entries`. Wait until `rehashing = false` before analyzing the chain length distribution. When `truncated` is non-zero, the observed chain length should not be treated as a complete result.

```sql
openGauss=# SELECT vbp_id, bucket_count, n0, n1, n2, n3, n_ge4,
                    max_chain, truncated, rehashing, migrated_buckets
             FROM pg_stat_vector_buffer_hash_chain ORDER BY vbp_id;
```

This view traverses hash buckets and chains, so it is suitable for on-demand diagnosis. Avoid high-frequency polling. It corresponds to the set-returning function `pg_stat_get_vector_buffer_hash_chain()` with no input parameters, and the fields returned by the function are consistent with those of the view. For usage, see [Using the Vector-Specific Cache](../database_administration_guide/using_vector_buffer.md).
