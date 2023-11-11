# spqplugin使用

## 加载插件

多机查询特性默认是关闭的，需要新增以下GUC配置参数使能插件：

node1:
```
port = 12300
pgxc_node_name = 'node1'
comm_sctp_port = 12330
comm_control_port = 12340
shared_preload_libraries = 'spqplugin'
spqplugin.cluster_map = 'node1|x.x.x.x|12300|1|12340|12330,node2|x.x.x.x|12300|1|12340|12330'
spqplugin.enable_spq = on
```
node2:
```
port = 12300
pgxc_node_name = 'node2'
comm_sctp_port = 12330
comm_control_port = 12340
shared_preload_libraries = 'spqplugin'
spqplugin.cluster_map = 'node1|x.x.x.x|12300|1|12340|12330,node2|x.x.x.x|12300|1|12340|12330'
spqplugin.enable_spq = on
```

## 使用插件

### DQL
执行如下命令插入数据：
```
openGauss=# create table t1(c1 int, c2 char);
CREATE TABLE
openGauss=# insert into t1 values(1, 'a');
INSERT 0 1
openGauss=# create table t2(c1 int, c2 char);
CREATE TABLE
openGauss=# insert into t2 values(1, 'b');
INSERT 0 1
```

执行简单的联表查询如下：
```
openGauss=# set spqplugin.enable_spq = off;
SET
openGauss=# explain select * from t1, t2 where t1.c1 = t2.c1;
                            QUERY PLAN
-------------------------------------------------------------------
 Hash Join  (cost=53.76..301.54 rows=18915 width=24)
   Hash Cond: (t1.c1 = t2.c1)
   ->  Seq Scan on t1  (cost=0.00..29.45 rows=1945 width=12)
   ->  Hash  (cost=29.45..29.45 rows=1945 width=12)
         ->  Seq Scan on t2  (cost=0.00..29.45 rows=1945 width=12)
(5 rows)

openGauss=# set spqplugin.enable_spq = on;
SET
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

openGauss=# select * from t1, t2 where t1.c1 = t2.c1;
 c1 | c2 | c1 | c2
----+----+----+----
  1 | a  |  1 | a
(1 row)

```
对比开启spq多机特性前后计划可以发现，单机计划仅支持单节点内顺序执行算子，而多机计划中新增了Streaming算子用于计划分发及数据通信，示例中Hash Join和Scan能够被分发到多个节点执行，进而提升查询效率。

### DML
对于一些通过获取其他表的查询结果作为dml操作数据的语句，可以将查询过程多机执行并由写节点完成数据修改，从而提升效率。示例如下：
#### INSERT
```
openGauss=# set spqplugin.enable_spq = off;
SET
openGauss=# explain insert into t2 select * from t1;
                         QUERY PLAN
-------------------------------------------------------------
 [Bypass]
 Insert on t2  (cost=0.00..29.45 rows=1945 width=12)
   ->  Seq Scan on t1  (cost=0.00..29.45 rows=1945 width=12)
(3 rows)

openGauss=# set spqplugin.enable_spq = on;
SET
openGauss=# set spqplugin.spq_optimizer_enable_dml = true;
SET
openGauss=# set spqplugin.spq_optimizer_enable_dml_constraints = true;
SET
openGauss=# set spqplugin.spq_enable_insert_select = on;
SET
openGauss=# explain insert into t2 select * from t1;
                                               QUERY PLAN
---------------------------------------------------------------------------------------------------------
 Streaming (type: GATHER)  (cost=0.00..0.00 rows=0 width=0)
   ->  Streaming(type: LOCAL GATHER dop: 1/3)  (cost=0.00..0.00 rows=0 width=0)
         ->  Insert on t2  (cost=0.00..431.01 rows=1 width=5)
               ->  SPQ Result  (cost=0.00..0.00 rows=0 width=0)
                     ->  Streaming(type: DML REDISTRIBUTE dop: 3/2)  (cost=0.00..431.00 rows=1 width=16)
                           ->  Spq Seq Scan on t1  (cost=0.00..431.00 rows=1 width=5)
(6 rows)
```

#### UPDATE
```
openGauss=# set spqplugin.enable_spq = off;
SET
openGauss=# explain update t2 set c1 = 2 where c1 < 2;
                         QUERY PLAN
------------------------------------------------------------
 Update on t2  (cost=0.00..34.31 rows=648 width=14)
   ->  Seq Scan on t2  (cost=0.00..34.31 rows=648 width=14)
         Filter: (c1 < 2)
(3 rows)

openGauss=# set spqplugin.enable_spq = on;
SET
openGauss=# set spqplugin.spq_optimizer_enable_dml = true;
SET
openGauss=# set spqplugin.spq_optimizer_enable_dml_constraints = true;
SET
openGauss=# set spqplugin.spq_enable_update = on;
SET
openGauss=# explain update t2 set c1 = 2 where c1 < 2;
                                               QUERY PLAN
---------------------------------------------------------------------------------------------------------
 Streaming (type: GATHER)  (cost=0.00..0.00 rows=0 width=0)
   ->  Streaming(type: LOCAL GATHER dop: 1/3)  (cost=0.00..0.00 rows=0 width=0)
         ->  Update on t2  (cost=0.00..431.03 rows=1 width=1)
               ->  SPQ Result  (cost=0.00..0.00 rows=0 width=0)
                     ->  Streaming(type: DML REDISTRIBUTE dop: 3/2)  (cost=0.00..431.00 rows=2 width=26)
                           ->  Split  (cost=0.00..431.00 rows=2 width=26)
                                 ->  Spq Seq Scan on t2  (cost=0.00..431.00 rows=1 width=15)
                                       Filter: (c1 < 2)
(8 rows)
```

#### DELETE
```
openGauss=# set spqplugin.enable_spq = off;
SET
openGauss=# explain delete from t2 where c1 = 1;
                        QUERY PLAN
----------------------------------------------------------
 Delete on t2  (cost=0.00..34.31 rows=10 width=6)
   ->  Seq Scan on t2  (cost=0.00..34.31 rows=10 width=6)
         Filter: (c1 = 1)
(3 rows)

openGauss=# set spqplugin.enable_spq = on;
SET
openGauss=# set spqplugin.spq_optimizer_enable_dml = true;
SET
openGauss=# set spqplugin.spq_enable_delete = on;
SET
openGauss=# explain delete from t2 where c1 = 1;
                                               QUERY PLAN
---------------------------------------------------------------------------------------------------------
 Streaming (type: GATHER)  (cost=0.00..0.00 rows=0 width=0)
   ->  Streaming(type: LOCAL GATHER dop: 1/3)  (cost=0.00..0.00 rows=0 width=0)
         ->  Delete on t2  (cost=0.00..431.02 rows=1 width=1)
               ->  SPQ Result  (cost=0.00..431.00 rows=1 width=26)
                     ->  Streaming(type: DML REDISTRIBUTE dop: 3/2)  (cost=0.00..431.00 rows=1 width=15)
                           ->  Spq Seq Scan on t2  (cost=0.00..431.00 rows=1 width=15)
                                 Filter: (c1 = 1)
(7 rows)
```