# INSERT

## 功能描述
向表中添加一行或多行数据。

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

--开启spq insert。
openGauss=# set spqplugin.enable_spq = on;
SET
openGauss=# set spqplugin.spq_optimizer_enable_dml = true;
SET
openGauss=# set spqplugin.spq_optimizer_enable_dml_constraints = true;
SET
openGauss=# set spqplugin.spq_enable_insert_select = on;
SET
openGauss=# set query_dop = 2;
SET

--查看多机计划。
openGauss=# explain insert into t2 select * from t1;
                                               QUERY PLAN
---------------------------------------------------------------------------------------------------
 Streaming (type: GATHER)  (cost=0.00..0.00 rows=0 width=5)
   ->  Insert on t2  (cost=0.00..431.01 rows=1 width=5)
         ->  SPQ Result  (cost=0.00..0.00 rows=0 width=0)
               ->  Streaming(type: DML REDISTRIBUTE dop: 1/2)  (cost=0.00..431.00 rows=1 width=16)
                     ->  Spq Seq Scan on t1  (cost=0.00..431.00 rows=1 width=5)
(5 rows)


--删除表。
openGauss=# drop table t1;
openGauss=# drop table t2;
```

## 相关链接

[INSERT](../SQLReference/INSERT.md)