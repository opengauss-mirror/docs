# UPDATE

## 功能描述

更新表中的数据。UPDATE修改满足条件的所有行中指定的字段值，WHERE子句声明条件，SET子句指定的字段会被修改，没有出现的字段则保持它们的原值。

## 注意事项

-   本章节只包含spqplugin新增的多机并行功能，原openGauss的语法未做删除和修改。

## 示例

```sql
--创建表t1。
openGauss=# create table t1(c1 int, c2 char);
CREATE TABLE
openGauss=# insert into t1 values(1, 'a');
INSERT 0 1

--开启spq update。
openGauss=# set spqplugin.enable_spq = on;
SET
openGauss=# set spqplugin.spq_optimizer_enable_dml = true;
SET
openGauss=# set spqplugin.spq_optimizer_enable_dml_constraints = true;
SET
openGauss=# set spqplugin.spq_enable_update = on;
SET
--查看多机计划。
openGauss=# explain update t1 set c1 = 2 where c1 < 2;
                                               QUERY PLAN
---------------------------------------------------------------------------------------------------------
 Streaming (type: GATHER)  (cost=0.00..0.00 rows=0 width=0)
   ->  Streaming(type: LOCAL GATHER dop: 1/3)  (cost=0.00..0.00 rows=0 width=0)
         ->  Update on t1  (cost=0.00..431.03 rows=1 width=1)
               ->  SPQ Result  (cost=0.00..0.00 rows=0 width=0)
                     ->  Streaming(type: DML REDISTRIBUTE dop: 3/2)  (cost=0.00..431.00 rows=2 width=26)
                           ->  Split  (cost=0.00..431.00 rows=2 width=26)
                                 ->  Spq Seq Scan on t1  (cost=0.00..431.00 rows=1 width=15)
                                       Filter: (c1 < 2)
(8 rows)

--删除表。
openGauss=# drop table t1;
```

## 相关链接

[UPDATE](../SQLReference/UPDATE.md)