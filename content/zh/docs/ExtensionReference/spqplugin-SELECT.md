# SELECT

## 功能描述

SELECT用于从表或视图中取出数据。

SELECT语句就像叠加在数据库表上的过滤器，利用SQL关键字从数据表中过滤出用户需要的数据。

## 注意事项
-   本章节只包含spqplugin新增的多机并行功能，原openGauss的语法未做删除和修改。

## 示例

```sql
--创建表t1、t2。
openGauss=# create table t1(c1 int, c2 char);
CREATE TABLE
openGauss=# insert into t1 values(1, 'a');
INSERT 0 1
openGauss=# create table t2(c1 int, c2 char);
CREATE TABLE
openGauss=# insert into t2 values(1, 'b');
INSERT 0 1

--开启spq。
openGauss=# set spqplugin.enable_spq = on;
SET

--执行联表查询。
openGauss=# explain select * from t1, t2 where t1.c1 = t2.c1;
                                           QUERY PLAN
-------------------------------------------------------------------------------------------------
 Streaming (type: GATHER)  (cost=0.00..862.00 rows=1 width=10)
   ->  Streaming(type: LOCAL GATHER dop: 1/2)  (cost=0.00..862.00 rows=1 width=10)
         ->  Hash Join  (cost=0.00..862.00 rows=1 width=10)
               Hash Cond: (t1.c1 = t2.c1)
               ->  Spq Seq Scan on t1  (cost=0.00..431.00 rows=1 width=5)
               ->  Hash  (cost=431.00..431.00 rows=6 width=5)
                     ->  Streaming(type: BROADCAST dop: 2/2)  (cost=0.00..431.00 rows=6 width=5)
                           ->  Spq Seq Scan on t2  (cost=0.00..431.00 rows=1 width=5)
(8 rows)

--删除表。
openGauss=# drop table t1;
openGauss=# drop table t2;
```

## 相关链接

[SELECT](../SQLReference/SELECT.md)