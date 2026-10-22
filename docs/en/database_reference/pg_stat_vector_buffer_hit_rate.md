# PG_STAT_VECTOR_BUFFER_HIT_RATE

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-10-13T02:00:30.379Z pushedAt=2026-10-19T09:25:24.459Z -->

`PG_STAT_VECTOR_BUFFER_HIT_RATE` displays the cumulative lookup and hit statistics of the vector-specific buffer of the current database instance, and returns one row. Ordinary users can query it.

| Name | Type | Description |
| --- | --- | --- |
| lookups | bigint | Number of buffer lookups, which is the sum of hits and misses. |
| hits | bigint | Number of shared cache hits. |
| misses | bigint | Number of shared cache misses. |
| hit_rate | numeric | hits / lookups, with a ratio ranging from 0 to 1; NULL when lookups is 0. |

These values count cache accesses in the instance, not the hit rate of a single database or a single query. Some counts are aggregated after the access context is released, and are recounted after a restart. Paths that do not perform shared cache lookups, such as disabling the session cache, using original-format indexes, and sequential scans, should not be regarded as expected sources of misses; the fallback count should be observed separately in combination with `pg_stat_vector_buffer.fallbacks`.

```sql
openGauss=# SELECT lookups, hits, misses, round(hit_rate * 100, 2) AS hit_rate_percent
             FROM pg_stat_vector_buffer_hit_rate;
```

This view corresponds to the set-returning function `pg_stat_get_vector_buffer_hit_rate()` with no input parameters, and the fields returned by the function are consistent with those of the view. When the cache is not enabled, lookups, hits, and misses are 0, and hit_rate is NULL. For usage, see [Using the Vector-Specific Buffer](../database_administration_guide/using_vector_buffer.md).
