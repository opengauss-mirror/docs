# Memoize Usage

## introduction

Memoize is an optimization operator. It caches results from parameterized scans within nested loop joins, preventing redundant data access and enhancing query performance. When join keys are repeated, Memoize significantly reduces I/O and CPU usage. This feature can be controlled via the `enable_memoize` parameter.

## limitation

- Do not support query_dop.
- Do not support column store.

## example

```sql
drop table if exists t5_1291950;
drop table if exists t6_1291950;
create table t5_1291950(a1 int,a2 numeric(6,2),a3 varchar2(4),a4 date,a5 timestamp,a6 serial);
create table t6_1291950(a1 int,a2 numeric(6,2),a3 varchar2(4),a4 date,a5 timestamp,a6 serial);
CREATE INDEX idx_t6_1291950 ON t6_1291950(a1,a2,a3,a4,a5);
--t5
insert into t5_1291950 (a1, a2, a3, a4, a5) select id % 5 AS a1, id % 10 AS a2, CHR((RANDOM() * 26 + 98)::int),
(current_date + floor(random() * 365))::date,
(current_timestamp - (random() * 3650) * interval '1 day')::timestamp from generate_series(1, 100000) AS id;
--t6
insert into t6_1291950 (a1, a2, a3, a4, a5) select id % 2000 AS a1, id % 1000 AS a2, CHR((RANDOM() * 26 + 98)::int),
(current_date + floor(random() * 365))::date,
(current_timestamp - (random() * 3650) * interval '1 day')::timestamp from generate_series(1, 100000) AS id;

set enable_nestloop=on;
set enable_mergejoin=off;
set enable_hashjoin=off;
set enable_hashagg=off;
set work_mem='10GB';

set enable_memoize=on;
explain (costs off) select * from t5_1291950 a inner join t6_1291950 b on a.a1=b.a1;
```

Plan:

```shell
                         QUERY PLAN                          
-------------------------------------------------------------
 Nested Loop
   ->  Seq Scan on t5_1291950 a
   ->  Memoize
         ->  Index Scan using idx_t6_1291950 on t6_1291950 b
               Index Cond: (a1 = a.a1)
(5 rows)

```
