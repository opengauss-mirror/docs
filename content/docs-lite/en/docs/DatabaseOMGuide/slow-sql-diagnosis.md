# Slow SQL Diagnosis<a name="EN-US_TOPIC_0290917654"></a>

## Background<a name="section11436171655914"></a>

If the SQL statement execution performance does not meet expectations, you can view the SQL statement execution information to analyze the behavior and diagnose problems that occur during the execution.

## Prerequisites<a name="section18794625615"></a>

-   The database instance is running properly.
-   The GUC parameter  **track\_stmt\_stat\_level **is properly set for querying the SQL statement information.
-   Only the system administrator and monitor administrator can perform this operation.

```
Run the following command to check the execution information about the SQL statements in the database instance:
select * from dbe_perf.get_global_full_sql_by_timestamp(start_timestamp, end_timestamp); 
Example:
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

Run the following command to check the execution information about the slow SQL statements in the database instance:
select * from dbe_perf.get_global_slow_sql_by_timestamp(start_timestamp, end_timestamp);
Example:
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

Check the execution information about the SQL statement on the current primary node.
select * from statement_history;
Example:
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

Check the execution information about the SQL statement on the current standby node.
select * from dbe_perf.standby_statement_history(is_only_slow, start_timestamp, end_timestamp);
Example:
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
