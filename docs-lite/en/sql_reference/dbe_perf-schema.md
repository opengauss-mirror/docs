# DBE\_PERF Schema<a name="EN-US_TOPIC_0289899966"></a>

In the  **DBE\_PERF**  schema, views are used to diagnose performance issues and are also the data source of WDR snapshots. After the database is installed, only the initial user has the permission for the  **DBE\_PERF**  schema by default. If the database is upgraded from an earlier version, permissions for the  **DBE\_PERF**  schema are the same as those of the earlier version to ensure forward compatibility. Organization views are divided based on multiple dimensions, such as OS, instance, and memory. These views comply with the following naming rules:

- Views starting with  **GLOBAL\_**: Request data from database nodes and return the data without processing them.
- Views starting with  **SUMMARY\_**: Summarize data in openGauss. In most cases, data from database nodes \(sometimes only the primary database node\) is processed and collected.
- Views that do not start with  **GLOBAL\_**  or  **SUMMARY\_**: Local views that do not request data from other database nodes.

- **[OS](os_runtime.md)**  

- **[Instance](instance_time.md)**  

- **[Memory](memory_node_detail.md)**  

- **[File](file_iostat.md)**  

- **[Object](stat_user_tables.md)**  

- **[Workload](workload_sql_count.md)**  

- **[Session/Thread](session_stat.md)**  

- **[Transaction](transactions_prepared_xacts.md)**  

- **[Query](statement.md)**  

- **[Cache/IO](statio_user_tables.md)**  

- **[Utility](replication_stat.md)**  

- **[Lock](locks.md)**  

- **[Wait Events](wait-events.md)**  

- **[Configuration](config_settings.md)**  

- **[Operator](operator_history_table.md)**  

- **[Workload Manager](wlm_user_resource_config.md)**  

- **[Global Plancache](global_plancache_status.md)**  

- **[RTO & RPO](global_rto_status.md)**  
