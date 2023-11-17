# DELETE

## 功能描述
DELETE从指定的表里删除满足WHERE子句的行。如果WHERE子句不存在，将删除表中所有行，结果只保留表结构。

## 注意事项

-   本章节只包含spqplugin新增的多机并行功能，原openGauss的语法未做删除和修改。

## 示例

```sql
--创建表t1。
openGauss=# create table t1(c1 int, c2 char);
CREATE TABLE
openGauss=# insert into t1 values(1, 'a');
INSERT 0 1

--开启spq delete。
openGauss=# set spqplugin.enable_spq = on;
SET
openGauss=# set spqplugin.spq_optimizer_enable_dml = true;
SET
openGauss=# set spqplugin.spq_enable_delete = on;
SET
--查看多机计划。
openGauss=# explain delete from t1 where c1 = 1;
                                               QUERY PLAN
---------------------------------------------------------------------------------------------------------
 Streaming (type: GATHER)  (cost=0.00..0.00 rows=0 width=0)
   ->  Streaming(type: LOCAL GATHER dop: 1/3)  (cost=0.00..0.00 rows=0 width=0)
         ->  Delete on t1  (cost=0.00..431.02 rows=1 width=1)
               ->  SPQ Result  (cost=0.00..431.00 rows=1 width=26)
                     ->  Streaming(type: DML REDISTRIBUTE dop: 3/2)  (cost=0.00..431.00 rows=1 width=15)
                           ->  Spq Seq Scan on t1  (cost=0.00..431.00 rows=1 width=15)
                                 Filter: (c1 = 1)
(7 rows)

--删除表。
openGauss=# drop table t1;
```

## 相关链接

[DELETE](../SQLReference/DELETE.md)