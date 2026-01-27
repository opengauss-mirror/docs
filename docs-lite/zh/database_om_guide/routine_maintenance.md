# 例行维护<a name="ZH-CN_TOPIC_0289897003"></a>

## 检查时间一致性<a name="ZH-CN_TOPIC_0289897011"></a>

数据库事务一致性通过逻辑时钟保证，与操作系统时间无关，但是系统时间不一致会导致诸多潜在问题，主要是后台运维和监控功能异常，因此在月度检查时建议检查各个节点的时间一致性。

### 操作步骤<a name="zh-cn_topic_0283140539_zh-cn_topic_0237088808_zh-cn_topic_0059777703_s7110d1c3f93a4bdea6f206e6709de04f"></a>

1. 以操作系统用户omm登录数据库主节点。
2. 创建记录openGauss各节点的配置文件（mpphosts文件目录用户可随意指定，建议放在/tmp下）。

    ```
    vim /tmp/mpphosts
    ```

    增加各节点的主机名称。

    ```
    plat1
    plat2
    plat3
    ```

3. 保存配置文件。

    ```
    :wq!
    ```

4. 执行如下命令，输出各节点上的时间到“/tmp/sys\_ctl-os1.log”文件中。

    ```
    for ihost in `cat /tmp/mpphosts`; do ssh -n -q $ihost "hostname;date"; done > /tmp/sys_ctl-os1.log
    ```

5. 根据输出确认各个节点的时间一致性，节点之间时间差异不能超过30秒。

    ```
    cat /tmp/sys_ctl-os1.log
    plat1
    Thu Feb  9 16:46:38 CST 2017
    plat2
    Thu Feb  9 16:46:49 CST 2017
    plat3
    Thu Feb  9 16:46:14 CST 2017
    ```

## 检查应用连接数<a name="ZH-CN_TOPIC_0289897019"></a>

如果应用程序与数据库的连接数超过最大值，则新的连接无法建立。建议每天检查连接数，及时释放空闲的连接或者增加最大连接数。

### 操作步骤<a name="zh-cn_topic_0283140579_zh-cn_topic_0237088809_zh-cn_topic_0059777858_s8aaa4c4f54fe4b97b5bf3a874789aad6"></a>

1. 以操作系统用户omm登录数据库主节点。
2. 使用如下命令连接数据库。

    ```
    gsql -d postgres -p 8000
    ```

    postgres为需要连接的数据库名称，8000为数据库主节点的端口号。

    连接成功后，系统显示类似如下信息：

    ```
    gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    openGauss=# 
    ```

3. 执行如下SQL语句查看连接数。

    ```
    openGauss=# SELECT count(*) FROM (SELECT pg_stat_get_backend_idset() AS backendid) AS s;
    ```

    显示类似如下的信息，其中2表示当前有两个应用连接到数据库。

    ```
    count
    -------
         2
    (1 row)
    ```

4. 查看现有最大连接数。

    ```
    openGauss=# SHOW max_connections;
    ```

    显示信息如下，其中200为现在的最大连接数。

    ```
     max_connections 
    -----------------
     200
    (1 row)
    ```

### 异常处理<a name="zh-cn_topic_0283140579_zh-cn_topic_0237088809_zh-cn_topic_0059777858_sd21b84e4719d479daa8c2a0a7bef2589"></a>

如果显示的连接数接近数据库的最大连接数max\_connections，则需要考虑清理现有连接数或者增加新的连接数。

1. 执行如下SQL语句，查看state字段等于idle，且state\_change字段长时间没有更新过的连接信息。

    ```
    openGauss=# SELECT * FROM pg_stat_activity where state='idle' order by state_change;
    ```

    显示类似如下的信息：

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

2. 释放空闲的连接数。

    **查看每个连接，并与此连接的使用者确认是否可以断开连接，或执行如下SQL语句释放连接。其中，pid为上一步查询中空闲连接所对应的pid字段值。**

    ```
    openGauss=# SELECT pg_terminate_backend(140390132872976);
    ```

    显示类似如下的信息：

    ```
    openGauss=# SELECT pg_terminate_backend(140390132872976);
     pg_terminate_backend 
    ----------------------
     t
    (1 row)
    ```

    如果没有可释放的连接，请执行下一步。

3. 设置最大连接数。

    ```
    gs_guc set -D /gaussdb/data/dbnode -c "max_connections= 800"
    ```

    其中800为新修改的连接数。

4. 重启数据库服务使新的设置生效。

    >[!NOTE]说明
    >重启openGauss操作会导致用户执行操作中断，请在操作之前规划好合适的执行窗口。

    ```
    gs_ctl restart -D /gaussdb/data/dbnode
    ```

## 例行维护表<a name="ZH-CN_TOPIC_0289897016"></a>

为了保证数据库的有效运行，数据库必须在插入/删除操作后，基于客户场景，定期做VACUUM FULL和ANALYZE，更新统计信息，以便获得更优的性能。

### 相关概念<a name="zh-cn_topic_0283140571_zh-cn_topic_0237088810_zh-cn_topic_0111591987_zh-cn_topic_0085032190_zh-cn_topic_0059779302_section1275717610563"></a>

使用VACUUM、VACUUM FULL和ANALYZE命令定期对每个表进行维护，主要有以下原因：

- VACUUM FULL可回收已更新或已删除的数据所占据的磁盘空间，同时将小数据文件合并。
- VACUUM对每个表维护了一个可视化映射来跟踪包含对别的活动事务可见的数组的页。一个普通的索引扫描首先通过可视化映射来获取对应的数组，来检查是否对当前事务可见。若无法获取，再通过堆数组抓取的方式来检查。因此更新表的可视化映射，可加速唯一索引扫描。
- VACUUM可避免执行的事务数超过数据库阈值时，事务ID重叠造成的原有数据丢失。
- ANALYZE可收集与数据库中表内容相关的统计信息。统计结果存储在系统表PG\_STATISTIC中。查询优化器会使用这些统计数据，生成最有效的执行计划。

### 操作步骤<a name="zh-cn_topic_0283140571_zh-cn_topic_0237088810_zh-cn_topic_0111591987_zh-cn_topic_0085032190_zh-cn_topic_0059779302_section97581768562"></a>

1. 使用VACUUM或VACUUM FULL命令，进行磁盘空间回收。
    - **VACUUM**：

        对表执行VACUUM操作

        ```
        openGauss=# VACUUM customer;
        ```

        ```
        VACUUM
        ```

        可以与数据库操作命令并行运行。（执行期间，可正常使用的语句：SELECT、INSERT、UPDATE和DELETE。不可正常使用的语句：ALTER TABLE）。

        对表分区执行VACUUM操作

        ```
        openGauss=# VACUUM customer_par PARTITION ( P1 );
        ```

        ```
        VACUUM
        ```

    - **VACUUM FULL**：

        ```
        openGauss=# VACUUM FULL customer;
        ```

        ```
        VACUUM
        ```

        需要向正在执行的表增加排他锁，且需要停止其他所有数据库操作。

2. 使用ANALYZE语句更新统计信息。

    ```
    openGauss=# ANALYZE customer;
    ```

    ```
    ANALYZE
    ```

    使用ANALYZE VERBOSE语句更新统计信息，并输出表的相关信息。

    ```
    openGauss=# ANALYZE VERBOSE customer;
    ```

    ```
    ANALYZE
    ```

    也可以同时执行VACUUM ANALYZE命令进行查询优化。

    ```
    openGauss=# VACUUM ANALYZE customer;
    ```

    ```
    VACUUM
    ```

    >[!NOTE]说明
    >VACUUM和ANALYZE会导致I/O流量的大幅增加，这可能会影响其他活动会话的性能。因此，建议通过“vacuum\_cost\_delay”参数设置《数据库参考》中“GUC参数说明 \> 资源消耗 \> 基于开销的清理延迟”。

3. 删除表

    ```
    openGauss=# DROP TABLE customer;
    openGauss=# DROP TABLE customer_par;
    openGauss=# DROP TABLE part;
    ```

    当结果显示为如下信息，则表示删除成功。

    ```
    DROP TABLE
    ```

### 维护建议<a name="zh-cn_topic_0283140571_zh-cn_topic_0237088810_zh-cn_topic_0111591987_zh-cn_topic_0085032190_zh-cn_topic_0059779302_section976110616566"></a>

- 定期对部分大表做VACUUM FULL，在性能下降后为全库做VACUUM FULL，目前暂定每月做一次VACUUM FULL。
- 定期对系统表做VACUUM FULL，主要是PG\_ATTRIBUTE。
- 启用系统自动清理线程（AUTOVACUUM）自动执行VACUUM和ANALYZE，回收被标识为删除状态的记录空间，并更新表的统计数据。

## 例行重建索引<a name="ZH-CN_TOPIC_0289897018"></a>

### 背景信息<a name="zh-cn_topic_0283140542_zh-cn_topic_0237088811_zh-cn_topic_0059779198_sb20e9236c2ee4359bd71385a42b73ce8"></a>

数据库经过多次删除操作后，索引页面上的索引键将被删除，造成索引膨胀。例行重建索引，可有效的提高查询效率。

数据库支持的索引类型为B-tree索引，例行重建索引可有效的提高查询效率。

- 如果数据发生大量删除后，索引页面上的索引键将被删除，导致索引页面数量的减少，造成索引膨胀。重建索引可回收浪费的空间。
- 新建的索引中逻辑结构相邻的页面，通常在物理结构中也是相邻的，所以一个新建的索引比更新了多次的索引访问速度要快。

### 重建索引<a name="zh-cn_topic_0283140542_zh-cn_topic_0237088811_section1483310439110"></a>

重建索引有以下两种方式：

- 先运行DROP INDEX语句删除索引，再运行CREATE INDEX语句创建索引。

    在删除索引过程中，会在父表上增加一个临时排他锁，阻止相关读写操作。在创建索引过程中，会锁住写操作但是不会锁住读操作，此时读操作只能使用顺序扫描。

- 使用REINDEX语句重建索引。
    - 使用REINDEX TABLE语句重建索引，会在重建过程中增加排他锁，阻止相关读写操作。
    - 使用REINDEX INTERNAL TABLE语句重建desc表（包括列存表的cudesc表）的索引，会在重建过程中增加排他锁，阻止相关读写操作。

### 操作步骤<a name="zh-cn_topic_0283140542_zh-cn_topic_0237088811_zh-cn_topic_0059779198_s5066efbb8c0d462694edc169c57822b0"></a>

假定在导入表“areaS”上的“area\_id”字段上存在普通索引“areaS\_idx”。重建索引有以下两种方式：

- 先运行DROP INDEX语句删除索引，再运行CREATE INDEX语句创建索引。
    1. 删除索引。

        ```
        openGauss=# DROP INDEX areaS_idx;
        DROP INDEX
        ```

    2. 创建索引。

        ```
        openGauss=# CREATE INDEX areaS_idx ON areaS (area_id);
        CREATE INDEX
        ```

- 使用REINDEX重建索引。
    - 使用REINDEX TABLE语句重建索引。

        ```
        openGauss=# REINDEX TABLE areaS;
        REINDEX
        ```

    - 使用REINDEX INTERNAL TABLE重建desc表（包括列存表的cudesc表）的索引。

        ```
        openGauss=# REINDEX INTERNAL TABLE areaS;
        REINDEX
        ```

>[!NOTE]说明
>在重建索引前，用户可以通过临时增大maintenance\_work\_mem和psort\_work\_mem的取值来加快索引的重建。

## 数据安全维护建议<a name="ZH-CN_TOPIC_0289897026"></a>

为保证openGauss数据库中的数据安全，避免丢失数据，非法访问数据等事故发生，请仔细阅读以下内容。

### 避免数据被丢失<a name="zh-cn_topic_0283140538_zh-cn_topic_0237088812_zh-cn_topic_0085413817_zh-cn_topic_0059781987_s838b550f384b449bb87e13a200bf04cd"></a>

建议用户规划周期性的物理备份，且对备份文件进行可靠的保存。在系统发生严重错误的情况下，可以利用备份文件，将系统恢复到备份前的状态。

### 避免数据被非法访问<a name="zh-cn_topic_0283140538_zh-cn_topic_0237088812_zh-cn_topic_0085413817_zh-cn_topic_0059781987_s654ff86682394156a57cf0860791b723"></a>

- 建议对数据库用户进行权限分级管理。数据库管理员根据业务需要，建立用户并赋予权限，保证各用户对数据库的合理访问。
- 对于openGauss的服务端和客户端（或基于客户端库开发的应用程序），最好也部署在可信任的内网中。如果服务端和客户端一定要部署在非信任的网络中，需要在服务启动前，打开SSL加密，保证数据在非信任网络上的传输安全。需要注意的是，打开SSL加密会降低数据库的性能。

### 避免系统日志泄露个人数据<a name="zh-cn_topic_0283140538_zh-cn_topic_0237088812_zh-cn_topic_0085413817_zh-cn_topic_0059781987_s2ff16280ae30412c9f531f105fd2d6c6"></a>

- 将调试日志发给他人进行分析前，请删除个人数据。

    >[!NOTE]说明
    >因为日志级别（log\_min\_messages）设置为DEBUGx（x为DEBUG级别，取值范围为1\~5）时，调试日志中记录的信息可能包含用户的个人数据。

- 将系统日志发给其他人进行分析前，请删除个人数据。因为在默认配置下，当SQL语句执行错误时，日志中会记录出错的SQL语句，而这些SQL语句中可能包含用户个人数据。
- 将log\_min\_error\_statement参数的值设置为PANIC，可以避免将出错的SQL语句记录在系统日志中。若禁用该功能，当出现故障时，很难定位故障原因。

为保证openGauss数据库中的数据安全，避免丢失数据，非法访问数据等事故发生，请仔细阅读以下内容。

## 慢SQL诊断<a name="ZH-CN_TOPIC_0290917654"></a>

### 背景信息<a name="section11436171655914"></a>

在SQL语句执行性能不符合预期时，可以查看SQL语句执行信息，便于事后分析SQL语句执行时的行为，从而诊断SQL语句执行出现的相关问题。

### 前提条件<a name="section18794625615"></a>

- 数据库实例运行正常。
- 查询SQL语句信息，需要正确设置GUC参数track\_stmt\_stat\_level。
- 只能用系统管理员和监控管理员权限进行操作。

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
