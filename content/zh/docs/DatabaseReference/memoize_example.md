# Memoize 使用

## 介绍

Memoize 是一种优化器算子，它在嵌套循环连接（Nested Loop Join）中缓存参数化扫描的结果，避免重复访问相同数据，从而提升查询性能。当查询中存在重复的连接键时，Memoize 可以显著减少 I/O 和 CPU 开销。该功能可通过设置参数 enable_memoize 来控制。

## 使用限制

- 不支持query_dop场景使用
- 不支持列存表

## 例子

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
