# Routine Maintenance<a name="EN-US_TOPIC_0289897003"></a>

## Checking Time Consistency<a name="EN-US_TOPIC_0289897011"></a>

Database transaction consistency is guaranteed by a logical clock and is not affected by OS time. However, OS time inconsistency will lead to problems, such as abnormal backend O&M and monitoring functions. Therefore, you are advised to monthly check time consistency among nodes.

### Procedure<a name="en-us_topic_0283140539_en-us_topic_0237088808_en-us_topic_0059777703_s7110d1c3f93a4bdea6f206e6709de04f"></a>

1. Log in as the OS user  **omm**  to the primary node of the database.
2. Create a configuration file for each openGauss node. The  **mpphosts**  file directory can be specified by users. The  **/tmp**  directory is recommended.

    ```
    vim /tmp/mpphosts
    ```

    Add the host name of each node.

    ```
    plat1
    plat2
    plat3
    ```

3. Save the configuration file.

    ```
    :wq!
    ```

4. Run the following command and write the time on each node into the  **/tmp/sys\_ctl-os1.log**  file:

    ```
    for ihost in `cat /tmp/mpphosts`; do ssh -n -q $ihost "hostname;date"; done > /tmp/sys_ctl-os1.log
    ```

5. Check time consistency between the nodes based on the command output. The time difference should not exceed 30s.

    ```
    cat /tmp/sys_ctl-os1.log
    plat1
    Thu Feb  9 16:46:38 CST 2017
    plat2
    Thu Feb  9 16:46:49 CST 2017
    plat3
    Thu Feb  9 16:46:14 CST 2017
    ```

## Checking the Number of Application Connections<a name="EN-US_TOPIC_0289897019"></a>

If the number of connections between applications and the database exceeds the maximum value, new connections cannot be established. You are advised to daily check the number of connections, release idle connections in time, or increase the allowed maximum number of connections.

### Procedure<a name="en-us_topic_0283140579_en-us_topic_0237088809_en-us_topic_0059777858_s8aaa4c4f54fe4b97b5bf3a874789aad6"></a>

1. Log in as the OS user  **omm**  to the primary node of the database.
2. Run the following command to connect to the database:

    ```
    gsql -d postgres -p 8000
    ```

    **postgres**  is the name of the database to be connected, and  **8000**  is the port number of the database primary node.

    If information similar to the following is displayed, the connection succeeds:

    ```
    gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    openGauss=# 
    ```

3. Run the following SQL statement to check the number of connections:

    ```
    openGauss=# SELECT count(*) FROM (SELECT pg_stat_get_backend_idset() AS backendid) AS s;
    ```

    Information similar to the following is displayed.  **2**  indicates that two applications are connected to the database.

    ```
    count
    -------
         2
    (1 row)
    ```

4. View the allowed maximum connections.

    ```
    openGauss=# SHOW max_connections;
    ```

    Information similar to the following is displayed.  **200**  indicates the currently allowed maximum number of connections.

    ```
     max_connections 
    -----------------
     200
    (1 row)
    ```

### Exception Handling<a name="en-us_topic_0283140579_en-us_topic_0237088809_en-us_topic_0059777858_sd21b84e4719d479daa8c2a0a7bef2589"></a>

If the number of connections in the command output is close to the value of  **max\_connections**  of the database, delete existing connections or change the upper limit based on site requirements.

1. Run the following SQL statement to view information about connections whose  **state**  is set to  **idle**, and  **state\_change**  column is not updated for a long time.

    ```
    openGauss=# SELECT * FROM pg_stat_activity where state='idle' order by state_change;
    ```

    Information similar to the following is displayed:

    ```
    datid | datname  |       pid       |    sessionid    | usesysid | usename |    application_name    | client_addr | client_hostname | client_port |         backend_start         | xact_start |          query
    _start          |         state_change          | waiting | enqueue | state | resource_pool | query_id |                          query                           | connection_info | unique_sql_id
    -------+----------+-----------------+-----------------+----------+---------+------------------------+-------------+-----------------+-------------+-------------------------------+------------+---------------
    ----------------+-------------------------------+---------+---------+-------+---------------+----------+----------------------------------------------------------+-----------------+---------------
     16200 | postgres | 140556276659968 | 140556276659968 |       10 | omm     | statement flush thread |             |                 |             | 2022-01-10 20:31:19.679721+08 |            |
                    | 2022-01-10 20:31:19.679741+08 | f       |         | idle  | default_pool  |        0 |                                                          |                 |             0
     16200 | postgres | 140556569540352 | 140556569540352 |       10 | omm     | cm_agent               | 10.244.2.24 |                 |       50522 | 2022-01-10 20:31:15.582877+08 |            | 2022-01-10 20:
    31:20.612987+08 | 2022-01-10 20:31:20.616886+08 | f       |         | idle  | default_pool  |        0 | select * from disable_conn('polling_connection', '', 0); |                 |             0
     16200 | postgres | 140556602111744 | 140556602111744 |       10 | omm     | cm_agent               | 10.244.2.24 |                 |       50476 | 2022-01-10 20:31:09.92659+08  |            | 2022-03-09 10:
    47:40.948749+08 | 2022-03-09 10:47:40.948891+08 | f       |         | idle  | default_pool  |        0 | show synchronous_standby_names;                          |                 |             0
     16200 | postgres | 140556637828864 | 140556637828864 |       10 | omm     | cm_agent               | 10.244.2.24 |                 |       50472 | 2022-01-10 20:31:08.921173+08 |            | 2022-03-09 10:
    47:41.131224+08 | 2022-03-09 10:47:41.13128+08  | f       |         | idle  | default_pool  |        0 | show most_available_sync;                                |                 |             0
    (4 rows)
    ```

2. Release idle connections.

    Check each connection and free them up after obtaining approval from the user of the connection. Run the following SQL command to free up the connection using the  **pid**  obtained in the previous step:

    ```
    openGauss=# SELECT pg_terminate_backend(140390132872976);
    ```

    Information similar to the following is displayed:

    ```
    openGauss=# SELECT pg_terminate_backend(140390132872976);
     pg_terminate_backend 
    ----------------------
     t
    (1 row)
    ```

    If no connections can be released, go to the next step.

3. Increase the maximum number of connections.

    ```
    gs_guc set -D /gaussdb/data/dbnode -c "max_connections= 800"
    ```

    **800**  is the new maximum value.

4. Restart database services to make the new settings take effect.

    >[!NOTE]NOTE 
    >Restarting openGauss results in operation interruption. Properly plan the restart to avoid affecting users.

    ```
    gs_ctl restart -D /gaussdb/data/dbnode
    ```

## Routinely Maintaining Tables<a name="EN-US_TOPIC_0289897016"></a>

To ensure proper database running, after insert and delete operations, you need to routinely run  **VACUUM FULL**  and  **ANALYZE**  as appropriate for customer scenarios and update statistics to obtain better performance.

### Related Concepts<a name="en-us_topic_0283140571_en-us_topic_0237088810_en-us_topic_0111591987_en-us_topic_0085032190_en-us_topic_0059779302_section1275717610563"></a>

You need to routinely run  **VACUUM**,  **VACUUM FULL**, and  **ANALYZE**  to maintain tables, because:

- **VACUUM FULL**  can be used to reclaim disk space occupied by updated or deleted data and combine small-size data files.
- **VACUUM**  can be used to maintain a visualized mapping for each table to track pages that contain arrays visible to other active transactions. A common index scan uses the mapping to obtain the corresponding arrays and check whether the arrays are visible to the current transaction. If the arrays cannot be obtained, capture a batch of arrays to check the visibility. Therefore, updating the visualized mapping of a table can accelerate unique index scans.
- Running  **VACUUM**  can avoid original data loss caused by duplicate transaction IDs when the number of executed transactions exceeds the database threshold.
- **ANALYZE**  can be used to collect statistics on tables in databases. The statistics are stored in the system catalog  **PG\_STATISTIC**. Then the query optimizer uses the statistics to work out the most efficient execution plan.

### Procedure<a name="en-us_topic_0283140571_en-us_topic_0237088810_en-us_topic_0111591987_en-us_topic_0085032190_en-us_topic_0059779302_section97581768562"></a>

1. Run the  **VACUUM**  or  **VACUUM FULL**  command to reclaim disk space.
    - **VACUUM**:

        Run  **VACUUM**  for a table.

        ```
        openGauss=# VACUUM customer;
        ```

        ```
        VACUUM
        ```

        This statement can be concurrently executed with database operation commands, including  **SELECT**,  **INSERT**,  **UPDATE**, and  **DELETE**; excluding  **ALTER TABLE**.

        Run  **VACUUM**  for the table partition.

        ```
        openGauss=# VACUUM customer_par PARTITION ( P1 );
        ```

        ```
        VACUUM
        ```

    - **VACUUM FULL**:

        ```
        openGauss=# VACUUM FULL customer;
        ```

        ```
        VACUUM
        ```

        During the command running, exclusive locks need to be added to the table and all other database operations need to be suspended.

2. Run  **ANALYZE**  to update statistics.

    ```
    openGauss=# ANALYZE customer;
    ```

    ```
    ANALYZE
    ```

    Run  **ANALYZE VERBOSE**  to update statistics and display table information.

    ```
    openGauss=# ANALYZE VERBOSE customer;
    ```

    ```
    ANALYZE
    ```

    You can run  **VACUUM ANALYZE**  at the same time to optimize the query.

    ```
    openGauss=# VACUUM ANALYZE customer;
    ```

    ```
    VACUUM
    ```

    >[!NOTE]NOTE 
    >**VACUUM**  and  **ANALYZE**  cause a substantial increase in I/O traffic, which may affect other active sessions. Therefore, you are advised to set the cost-based vacuum delay feature by specifying the  **vacuum\_cost\_delay**  parameter. For details, see [Cost-based Vacuum Delay](../database_reference/cost-based-vacuum-delay.md).

3. Delete a table.

    ```
    openGauss=# DROP TABLE customer;
    openGauss=# DROP TABLE customer_par;
    openGauss=# DROP TABLE part;
    ```

    If the following information is displayed, the tables have been deleted:

    ```
    DROP TABLE
    ```

### Maintenance Suggestions<a name="en-us_topic_0283140571_en-us_topic_0237088810_en-us_topic_0111591987_en-us_topic_0085032190_en-us_topic_0059779302_section976110616566"></a>

- Routinely run  **VACUUM FULL**  for large tables. If the database performance deteriorates, run  **VACUUM FULL**  for the entire database. If the database performance is stable, you are advised to run  **VACUUM FULL**  monthly.
- Routinely run  **VACUUM FULL**  on system catalogs, especially  **PG\_ATTRIBUTE**.
- Enable automatic vacuum threads \(**AUTOVACUUM**\) in the system. The processes automatically run the  **VACUUM**  and  **ANALYZE**  statements to reclaim the record space marked as the deleted state and update statistics in the table.

## Routinely Recreating an Index<a name="EN-US_TOPIC_0289897018"></a>

### Background<a name="en-us_topic_0283140542_en-us_topic_0237088811_en-us_topic_0059779198_sb20e9236c2ee4359bd71385a42b73ce8"></a>

When data deletion is repeatedly performed in the database, index keys will be deleted from the index pages, resulting in index bloat. Recreating an index routinely improves query efficiency.

The database supports B-tree indexes. Recreating a B-tree index routinely helps improve query efficiency.

- If a large amount of data is deleted, index keys on the index pages will be deleted. As a result, the number of index pages reduces and index bloat occurs. Recreating an index helps reclaim wasted space.
- In a newly created index, pages with adjacent logical structures tend to have adjacent physical structures. Therefore, a new index achieves a higher access speed than an index that has been updated for multiple times.

### Methods<a name="en-us_topic_0283140542_en-us_topic_0237088811_section1483310439110"></a>

Use either of the following two methods to recreate an index:

- Run the  **DROP INDEX**  statement to delete the index, and then run the  **CREATE INDEX**  statement to create an index.

    When you delete an index, a temporary exclusive lock is added in the parent table to block related read/write operations. During index creation, the write operation is locked, whereas the read operation is not locked and can use only sequential scans.

- Run  **REINDEX**  to recreate an index.
    - When you run the  **REINDEX TABLE**  statement to recreate an index, an exclusive lock is added to block related read/write operations.
    - When you run the  **REINDEX INTERNAL TABLE**  statement to recreate an index for a  **desc**  table \(such as column-store  **cudesc**  table\), an exclusive lock is added to block related read/write operations on the table.

### Procedure<a name="en-us_topic_0283140542_en-us_topic_0237088811_en-us_topic_0059779198_s5066efbb8c0d462694edc169c57822b0"></a>

Assume the ordinary index  **areaS\_idx**  exists in the  **area\_id**  column of the imported table  **areaS**. Use either of the following two methods to recreate an index:

- Run the  **DROP INDEX**  statement to delete the index and run the  **CREATE INDEX**  statement to create an index.
    1. Delete the index.

        ```
        openGauss=# DROP INDEX areaS_idx;
        DROP INDEX
        ```

    2. Create an index

        ```
        openGauss=# CREATE INDEX areaS_idx ON areaS (area_id);
        CREATE INDEX
        ```

- Run  **REINDEX**  to recreate an index.
    - Run  **REINDEX TABLE**  to recreate an index.

        ```
        openGauss=# REINDEX TABLE areaS;
        REINDEX
        ```

    - Run  **REINDEX INTERNAL TABLE**  to recreate an index for a  **desc**  table \(such as column-store  **cudesc**  table\).

        ```
        openGauss=# REINDEX INTERNAL TABLE areaS;
        REINDEX
        ```

>[!NOTE]NOTE 
>Before you recreate an index, you can increase the values of  **maintenance\_work\_mem**  and  **psort\_work\_mem**  to accelerate the index recreation.

## Data Security Maintenance Suggestions<a name="EN-US_TOPIC_0289897026"></a>

To ensure data security in openGauss and prevent accidents, such as data loss and illegal data access, read this section carefully.

### Preventing Data Loss<a name="en-us_topic_0283140538_en-us_topic_0237088812_en-us_topic_0085413817_en-us_topic_0059781987_s838b550f384b449bb87e13a200bf04cd"></a>

You are advised to plan routine physical backup and store backup files in a reliable medium. If a serious error occurs in the system, you can use the backup files to restore the system to the state at the backup point.

### Preventing Illegal Data Access<a name="en-us_topic_0283140538_en-us_topic_0237088812_en-us_topic_0085413817_en-us_topic_0059781987_s654ff86682394156a57cf0860791b723"></a>

- You are advised to manage database users based on their permission hierarchies. A database administrator creates users and grants permissions to the users based on service requirements to ensure users properly access the database.
- You are advised to deploy openGauss servers and clients \(or applications developed based on the client library\) in trusted internal networks. If the servers and clients must be deployed in an untrusted network, enable SSL encryption before services are started to ensure data transmission security. Note that enabling the SSL encryption function compromises database performance.

### Preventing System Logs from Leaking Personal Data<a name="en-us_topic_0283140538_en-us_topic_0237088812_en-us_topic_0085413817_en-us_topic_0059781987_s2ff16280ae30412c9f531f105fd2d6c6"></a>

- Delete personal data before sending debug logs to others for analysis.

    >[!NOTE]NOTE 
    >The log level  **log\_min\_messages**  is set to  **DEBUG**_x_  \(_x_  indicates the debug level and the value ranges from 1 to 5\). The information recorded in debug logs may contain personal data.

- Delete personal data before sending system logs to others for analysis. If the execution of a SQL statement fails, the error SQL statement will be recorded in a system log by default. SQL statements may contain personal data.
- Set  **log\_min\_error\_statement**  to  **PANIC**  to prevent error SQL statements from being recorded in system logs. If this function is disabled, it is difficult to locate fault causes when a fault occurs.

To ensure data security in openGauss and prevent accidents, such as data loss and illegal data access, read this section carefully.

## Slow SQL Diagnosis<a name="EN-US_TOPIC_0290917654"></a>

### Background<a name="section11436171655914"></a>

If the SQL statement execution performance does not meet expectations, you can view the SQL statement execution information to analyze the behavior and diagnose problems that occur during the execution.

### Prerequisites<a name="section18794625615"></a>

- The database instance is running properly.
- The GUC parameter  **track\_stmt\_stat\_level**is properly set for querying the SQL statement information.
- Only the system administrator and monitor administrator can perform this operation.

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
