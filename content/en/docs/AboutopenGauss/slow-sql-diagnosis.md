# Slow SQL Diagnosis<a name="EN-US_TOPIC_0000001151995075"></a>

## Availability<a name="section147531742205517"></a>

This feature is available since openGauss 1.1.0. The following slow SQL views have been discarded before reconstruction: dbe\_perf.gs\_slow\_query\_info, dbe\_perf.gs\_slow\_query\_history, dbe\_perf.global\_slow\_query\_hisotry, and dbe\_perf.global\_slow\_query\_info.

This feature is available since openGauss 3.1.0.

## Introduction<a name="section134931562564"></a>

Slow SQL diagnosis provides necessary information for diagnosing slow SQL statements, helping developers backtrack SQL statements whose execution time exceeds the threshold and diagnose SQL performance bottlenecks.

## Benefits<a name="section1407614175619"></a>

Slow SQL provides detailed information required for slow SQL diagnosis. You can diagnose performance problems of specific slow SQL statements offline without reproducing the problem. The table-based and function-based APIs help users collect statistics on slow SQL indicators and connect to third-party platforms.

## Description<a name="section8993113125610"></a>

Slow SQL diagnosis records information about all jobs whose execution time exceeds the threshold  **log\_min\_duration\_statement**.

On the primary node, slow SQL statements provide table-based and function-based query APIs. You can query the execution plan, start time, end time, query statement, row activity, kernel time, CPU time, execution time, parsing time, compilation time, query rewriting time, plan generation time, network time, I/O time, network overhead, lock overhead, and wait events. All information is anonymized.

On the standby node, slow SQL statements provide a dedicated function as the query API. The standby node cannot write performance diagnosis data to the statement\_history table. Therefore, the standby node uses a new method to record data and queries the data through the function API. The information queried through the API is the same as that in the statement\_history table on the primary node.

## Enhancements<a name="section1548515520568"></a>

Optimized slow SQL indicators, security \(anonymization\), execution plans, and query interfaces.

```
Primary node: Run the following command to check the execution information about the SQL statements in the database instance:
gsql> select * from dbe_perf.get_global_full_sql_by_timestamp(start_timestamp, end_timestamp); 
For example:
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

Primary node: Run the following command to check the execution information about the slow SQL statements in the database instance:
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

Primary node: Check the execution information about the SQL statement on the current node.
gsql> select * from statement_history;
For example:
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
                     
Standby node: Check the execution information about the SQL statement on the current node.
gsql> select * from dbe_perf.standby_statement_history(only_slow, start_time, end_time);
Example:
openGauss=# select * from dbe_perf.standby_statement_history(false);
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

## Constraints<a name="section1956417145819"></a>

-   The SQL tracing information is based on the normal execution logic. The tracing information may inaccurate if SQL statements fail to be executed.
-   Restarting a node may cause data loss on the node.
-   If you exit a session immediately after SQL statements are executed, the session data that is not updated to the system catalog may be lost.
-   The number of SQL statements to be collected is specified by a GUC parameter. If the number of SQL statements exceeds the threshold, new SQL statement execution information will not be collected.
-   The maximum number of bytes of lock event details collected by a single SQL statement is specified by a GUC parameter. If the number of bytes exceeds the threshold, new lock event details will not be collected.
-   The SQL statement information is updated in asynchronous mode. Therefore, after a query statement is executed, the related view function result is slightly delayed.
-   When **track\_stmt\_parameter** is set to **off**, the maximum value of the **query** field is determined by the value of by **track\_activity\_query\_size**.
-   Certain indicator information \(such as row activities, cache I/O, and time distribution\) depends on the dbe\_perf.statement view. If the number of records in the view exceeds the preset size \(depending on GUC:instr\_unique\_sql\_count\), related indicators may not be collected.
-   Functions and views related to the statement\_history table and the **details** column in dbe_perf.standby\_statement\_history on the standby node are in binary format. To parse the detailed information, use the pg\_catalog.statement\_detail\_decode\(details, 'plaintext', true\) function.
-   The statement_history table can be queried only in the postgres database. The data in other databases is empty.
-   To query the dbe_perf.standby\_statement\_history function on the standby node, you need to switch to the postgres database. If you query the function in other databases, a message is displayed indicating that the function is unavailable.
-   The standby node uses the track\_stmt\_standby\_chain\_size parameter to limit the memory and disk space occupied by recorded data.
-   The content of the statement\_history table and the dbe_perf.standby\_statement\_history function on the standby node are controlled by track\_stmt\_stat\_level. The default value is **'OFF,L0'**. The first part of the parameter indicates the full SQL statement, and the second part indicates the slow SQL statement. Slow SQL statements are recorded only when the execution time exceeds the value of log\_min\_duration\_statement.

## Dependencies<a name="section15876411599"></a>

None.
