# 慢SQL诊断<a name="ZH-CN_TOPIC_0290917654"></a>

## 背景信息<a name="section11436171655914"></a>

在SQL语句执行性能不符合预期时，可以查看SQL语句执行信息，便于事后分析SQL语句执行时的行为，从而诊断SQL语句执行出现的相关问题。

## 前提条件<a name="section18794625615"></a>

-   数据库实例运行正常。
-   查询SQL语句信息，需要正确设置GUC参数track\_stmt\_stat\_level。
-   只能用系统管理员和监控管理员权限进行操作。

```
执行命令查看数据库实例中SQL语句执行信息
select * from dbe_perf.get_global_full_sql_by_timestamp(start_timestamp, end_timestamp); 
例如：
select * from DBE_PERF.get_global_full_sql_by_timestamp('2020-12-01 09:25:22', '2020-12-31 23:54:41');
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
select * from dbe_perf.get_global_slow_sql_by_timestamp(start_timestamp, end_timestamp);
例如：
select * from DBE_PERF.get_global_slow_sql_by_timestamp('2020-12-01 09:25:22', '2020-12-31 23:54:41');
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

查看当前主节点SQL语句执行信息
select * from statement_history;
例如：
select * from statement_history;
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
...

查看当前备节点SQL语句执行信息
select * from dbe_perf.standby_statement_history(is_only_slow, start_timestamp, end_timestamp);
例如：
select * from dbe_perf.standby_statement_history(true, '2022-08-01 09:25:22', '2022-08-31 23:54:41');
db_name              | postgres
schema_name          | "$user",public
origin_node          | 0
user_name            | user_dj
application_name     | gsql
client_addr          |
client_port          | -1
unique_query_id      | 1660376009
debug_query_id       | 281474976710740
query                | select name, setting from pg_settings where name in (?)
start_time           | 2022-08-19 16:19:51.216818+08
finish_time          | 2022-08-19 16:19:51.224513+08
slow_sql_threshold   | 1800000000
transaction_id       | 0
thread_id            | 140058747205376
session_id           | 140058747205376
n_soft_parse         | 0
n_hard_parse         | 1
query_plan           | Datanode Name: sgnode
                     | Function Scan on pg_show_all_settings a  (cost=0.00..12.50 rows=5 width=64)
                     |   Filter: (name = '***'::text)
...
```

