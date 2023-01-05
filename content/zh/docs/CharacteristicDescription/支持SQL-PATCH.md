# 支持SQL PATCH<a name="ZH-CN_TOPIC_0000001266435066"></a>

## 可获得性<a name="section1964504520318"></a>

本特性自3.0.0版本开始引入。

## 特性简介<a name="section1128444713459"></a>

SQL PATCH能够在避免直接修改用户业务语句的前提下对查询执行的方式做一定调整。在发现查询语句的执行计划、执行方式未达预期的场景下，可以通过创建查询补丁的方式，使用Hint对查询计划进行调优或对特定的语句进行报错短路处理。

## 客户价值<a name="section11437825469"></a>

在业务产生查询计划不优导致的性能问题或系统内部错误导致服务不可用问题时，可以在数据库内通过运维函数调用对特定的场景进行调优或提前报错，以规避更严重的问题，能够大幅降低上述问题的运维成本。

## 特性描述<a name="section12606141504717"></a>

SQL PATCH主要设计给DBA、运维人员及其他需要对SQL进行调优的角色使用，用户通过其他运维视图或定位手段识别到业务语句存在计划不优导致的性能问题时，可以通过创建SQL PATCH对业务语句进行基于Hint的调优。目前支持行数、扫描方式、连接方式、连接顺序、PBE custom/generic计划选择、语句级参数设置、参数化路径的Hint。此外，对于部分由特定语句触发系统内部问题导致系统可服务性受损的语句，在不对业务语句变更的情况下，也可以通过创建用于单点规避的SQL PATCH，对问题场景提前报错处理，避免更大的损失。

SQL PATCH的实现当前基于Unique SQL ID，所以需要打开相关的运维参数才可以生效（详见[特性约束](#section1956417145819)），Unique SQL ID在WDR报告和慢SQL视图中都可以获取到，在创建SQL PATCH时需要指定Unique SQL ID。下面给出简单的使用样例。

场景一：使用SQL PATCH对特定语句进行Hint调优。

```
openGauss=# set track_stmt_stat_level = 'L1,L1'; --打开FullSQL统计信息
SET
openGauss=# select * from hint_t1 t1 where t1.a = 1; --执行SQL语句
 a | b | c
---+---+---
 1 | 1 | 1
(1 row)
openGauss=# select unique_query_id, query, query_plan from dbe_perf.statement_history where query like '%hint_t1%'; --获取查询计划和Unique SQL ID
-[ RECORD 1 ]---+----------------------------------------------------------------------------------------------
unique_query_id | 2578396627
query           | select * from hint_t1 t1 where t1.a = ?;
query_plan      | Datanode Name: sgnode
                | Bitmap Heap Scan on hint_t1 t1  (cost=4.33..15.70 rows=10 p-time=0 p-rows=0 width=12)
                |   Recheck Cond: (a = '***')
                |   ->  Bitmap Index Scan on hint_t1_a_idx  (cost=0.00..4.33 rows=10 p-time=0 p-rows=0 width=0)
                |         Index Cond: (a = '***')
                |
                |
openGauss=# select * from dbe_sql_util.create_hint_sql_patch('patch1', 2578396627, 'indexscan(t1)'); -- 对指定的Unique SQL ID指定Hint Patch
-[ RECORD 1 ]---------+--
create_hint_sql_patch | t
openGauss=# explain select * from hint_t1 t1 where t1.a = 1; -- 通过explain可以确认Hint是否生效
NOTICE:  Plan influenced by SQL hint patch
                                    QUERY PLAN
-----------------------------------------------------------------------------------
 [Bypass]
 Index Scan using hint_t1_a_idx on hint_t1 t1  (cost=0.00..32.43 rows=10 width=12)
   Index Cond: (a = 1)
(3 rows)
openGauss=# select * from hint_t1 t1 where t1.a = 1; -- 再次执行语句
 a | b | c
---+---+---
 1 | 1 | 1
(1 row)
openGauss=# select unique_query_id, query, query_plan from dbe_perf.statement_history where query like '%hint_t1%'; -- 可以看到新的执行记录计划已改变
-[ RECORD 1 ]---+--------------------------------------------------------------------------------------------------
unique_query_id | 2578396627
query           | select * from hint_t1 t1 where t1.a = ?;
query_plan      | Datanode Name: sgnode
                | Bitmap Heap Scan on hint_t1 t1  (cost=4.33..15.70 rows=10 p-time=0 p-rows=0 width=12)
                |   Recheck Cond: (a = '***')
                |   ->  Bitmap Index Scan on hint_t1_a_idx  (cost=0.00..4.33 rows=10 p-time=0 p-rows=0 width=0)
                |         Index Cond: (a = '***')
                |
                |
-[ RECORD 2 ]---+--------------------------------------------------------------------------------------------------
unique_query_id | 2578396627
query           | select * from hint_t1 t1 where t1.a = ?;
query_plan      | Datanode Name: sgnode
                | Index Scan using hint_t1_a_idx on hint_t1 t1  (cost=0.00..8.27 rows=1 p-time=0 p-rows=0 width=12)
                |   Index Cond: (a = '***')
                |
                |
```

场景二：使用SQL PATCH对特定语句进行提前报错规避。

```
openGauss=# select * from dbe_sql_util.drop_sql_patch('patch1'); -- 删去patch1
 drop_sql_patch
----------------
 t
(1 row)
openGauss=# select * from dbe_sql_util.create_abort_sql_patch('patch2', 2578396627); 对该语句的Unique SQL ID创建Abort Patch
 create_abort_sql_patch
------------------------
 t
(1 row)

openGauss=# select * from hint_t1 t1 where t1.a = 1; -- 再次执行语句会提前报错
ERROR:  Statement 2578396627 canceled by abort patch patch2
```

## 特性增强<a name="section35315526014"></a>

无。

## 特性约束<a name="section1895264010475"></a>

1.  仅支持针对Unique SQL ID打PATCH，如果存在Unique SQL ID冲突，用于Hint调优的SQL PATCH可能影响性能，但不影响语义正确性。
2.  仅支持不改变SQL语义的Hint作为PATCH，不支持SQL改写。
3.  不支持逻辑备份、恢复。
4.  不支持创建时校验PATCH合法性，如果PATCH的Hint存在语法或语义错误，不影响查询正确执行。
5.  仅初始用户、运维管理员、监控管理员、系统管理员用户有权限执行。
6.  库之间不共享，创建SQL PATCH时需要连接目标库。
7.  配置集中式备机可读时，需要指定主机执行SQL PATCH创建/修改/删除函数调用，备机执行报错。
8.  SQL PATCH同步给备机存在一定延迟，待备机回放相关日志后PATCH生效。
9.  不支持对存储过程中的SQL语句生效，当前机制不会对存储过程内语句生成Unique SQL ID。
10. 用于规避的Abort Patch不建议在数据库中长期使用，只应该作为临时规避方法。遇到内核问题所导致的特定语句触发数据库服务不可用问题，需要尽快修改业务或升级内核版本解决问题。并且升级后由于Unique SQL ID生成方法可能变化，可能导致规避方法失效。
11. 当前，除DML语句之外，其他SQL语句（如CREATE TABLE等）的Unique SQL ID是对语句文本直接哈希生成的，所以对于此类语句，SQL PATCH对大小写、空格、换行等敏感，即不同的文本的语句，即使语义相对，仍然需要对应不同的SQL PATCH。对于DML，则同一个SQL PATCH可以对不同入参的语句生效，并且忽略大小写和空格。

## 依赖关系<a name="section15876411599"></a>

本特性依赖于资源实时监控功能，需要开启enable\_resource\_track参数并且设置instr\_unique\_sql\_count大于0。对于不同的语句，如果生成的Unique SQL ID冲突，会导致SQL PATCH错误的命中预期外的其他语句。其中用于调优的Hint PATCH副作用相对较小，Abort Patch需要谨慎使用。

