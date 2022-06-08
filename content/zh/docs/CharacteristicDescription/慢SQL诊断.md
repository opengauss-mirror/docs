# 慢SQL诊断<a name="ZH-CN_TOPIC_0000001135403989"></a>

## 可获得性<a name="section147531742205517"></a>

本特性自openGauss 1.1.0 版本开始引入。

重构前慢SQL相关视图已废弃，包括dbe\_perf. gs\_slow\_query\_info、dbe\_perf.gs\_slow\_query\_history、dbe\_perf.global\_slow\_query\_hisotry、dbe\_perf.global\_slow\_query\_info。

## 特性简介<a name="section134931562564"></a>

慢SQL诊断提供诊断慢SQL所需要的必要信息，帮助开发者回溯执行时间超过阈值的SQL，诊断SQL性能瓶颈。

## 客户价值<a name="section1407614175619"></a>

慢SQL诊断提供给用户对于慢SQL所需的详细信息，用户无需通过复现就能离线诊断特定慢SQL的性能问题。表和函数接口方便用户统计慢SQL指标，对接第三方平台。

## 特性描述<a name="section8993113125610"></a>

慢SQL能根据用户提供的执行时间阈值（log\_min\_duration\_statement），记录所有超过阈值的执行完毕的作业信息。

慢SQL提供表和函数两种维度的查询接口。用户从接口中能查询到作业的执行计划，开始、结束执行时间，执行查询的语句，行活动，内核时间，CPU时间，执行时间，解析时间，编译时间，查询重写时间，计划生成时间，网络时间，IO时间，网络开销，锁开销等。以上所有信息都是脱敏的。

## 特性增强<a name="section1548515520568"></a>

增加对慢SQL指标信息、安全性（脱敏）、执行计划、查询接口的增强。

```
执行命令查看数据库实例中SQL语句执行信息
gsql> select * from dbe_perf.get_global_full_sql_by_timestamp(start_timestamp, end_timestamp); 
例如：
openGauss=# select * from DBE_PERF.get_global_full_sql_by_timestamp('2020-12-01 09:25:22', '2020-12-31 23:54:41');
-[ RECORD 1 ]--------+---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------
node_name            | dn_6001_6002_6003
db_name              | postgres
schema_name          | "$user",public
origin_node          | 1938253334
user_name            | user_dj
application_name     | gsql
client_addr          |
client_port          | -1
unique_query_id      | 3671179229
debug_query_id       | 72339069014839210
query                | select name, setting from pg_settings where name in (?)
start_time           | 2020-12-19 16:19:51.216818+08
finish_time          | 2020-12-19 16:19:51.224513+08
slow_sql_threshold   | 1800000000
transaction_id       | 0
thread_id            | 139884662093568
session_id           | 139884662093568
n_soft_parse         | 0
n_hard_parse         | 1
query_plan           | Datanode Name: dn_6001_6002_6003
                     | Function Scan on pg_show_all_settings a  (cost=0.00..12.50 rows=5 width=64)
                     |   Filter: (name = '***'::text)
...

执行命令查看数据库实例中慢SQL语句执行信息
gsql> select * from dbe_perf.get_global_slow_sql_by_timestamp(start_timestamp, end_timestamp);
openGauss=# select * from DBE_PERF.get_global_slow_sql_by_timestamp('2020-12-01 09:25:22', '2020-12-31 23:54:41');
-[ RECORD 1 ]--------+---------------------------------------------------------------------------------------------------
node_name            | dn_6001_6002_6003
db_name              | postgres
schema_name          | "$user",public
origin_node          | 1938253334
user_name            | user_dj
application_name     | gsql
client_addr          |
client_port          | -1
unique_query_id      | 2165004317
debug_query_id       | 72339069014839319
query                | select * from DBE_PERF.get_global_slow_sql_by_timestamp(?, ?);
start_time           | 2020-12-19 16:23:20.738491+08
finish_time          | 2020-12-19 16:23:20.773714+08
slow_sql_threshold   | 10000
transaction_id       | 0
thread_id            | 139884662093568
session_id           | 139884662093568
n_soft_parse         | 10
n_hard_parse         | 8
query_plan           | Datanode Name: dn_6001_6002_6003
                     | Result  (cost=1.01..1.02 rows=1 width=0)
                     |   InitPlan 1 (returns $0)
                     |     ->  Seq Scan on pgxc_node  (cost=0.00..1.01 rows=1 width=64)
                     |           Filter: (nodeis_active AND ((node_type = '***'::"char") OR (node_type = '***'::"char")))
...

查看当前节点SQL语句执行信息
gsql> select * from statement_history;
例如：
openGauss=# select * from statement_history;
-[ RECORD 1 ]--------+---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------
db_name              | postgres
schema_name          | "$user",public
origin_node          | 1938253334
user_name            | user_dj
application_name     | gsql
client_addr          |
client_port          | -1
unique_query_id      | 3671179229
debug_query_id       | 72339069014839210
query                | select name, setting from pg_settings where name in (?)
start_time           | 2020-12-19 16:19:51.216818+08
finish_time          | 2020-12-19 16:19:51.224513+08
slow_sql_threshold   | 1800000000
transaction_id       | 0
thread_id            | 139884662093568
session_id           | 139884662093568
n_soft_parse         | 0
n_hard_parse         | 1
query_plan           | Datanode Name: dn_6001_6002_6003
                     | Function Scan on pg_show_all_settings a  (cost=0.00..12.50 rows=5 width=64)
                     |   Filter: (name = '***'::text)
```

## 特性约束<a name="section1956417145819"></a>

+ 目前的SQL跟踪信息，基于正常的执行逻辑。执行失败的SQL，其跟踪信息不具有准确的参考价值。
+ 节点重启，可能导致该节点的数据丢失。
+ SQL语句执行完立即退出会话，可能会丢失该会话未刷新到系统表中的数据。
+ 通过GUC参数设置收集SQL语句的数量，如果超过阈值，新的SQL语句执行信息不会被收集。
+ 通过GUC参数设置单条SQL语句收集的锁事件详细信息的最大字节数，如果超过阈值，新的锁事件详细信息不会被收集。
+ 通过异步刷新方式刷新用户执行中的SQL信息，所以用户Query执行结束后，存在查询相关视图函数结果短暂时延。
+ 当track\_stmt\_parameter为off时，query字段最大长度受track\_activity\_query\_size控制。
+ 部分指标信息（行活动、Cache/IO、时间分布等）依赖于dbe\_perf.statement视图收集，如果该视图对应记录数超过预定大小（依赖GUC：instr\_unique\_sql\_count），则本特性可能不收集相关指标。
+ statement\_history表相关函数以及视图中details字段为二进制格式，如果需要解析详细内容，请使用对应函数pg\_catalog.statement\_detail\_decode\(details, 'plaintext', true\)。

## 依赖关系<a name="section15876411599"></a>

无。

