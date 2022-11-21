# workload级别索引推荐<a name="ZH-CN_TOPIC_0296549248"></a>

对于workload级别的索引推荐，用户可通过运行数据库外的脚本使用此功能，本功能将包含有多条DML语句的workload作为输入，最终生成一批可对整体workload的执行表现进行优化的索引。同时，本功能提供从日志中或系统表中抽取业务数据SQL流水的功能。

## 前提条件<a name="section18679102695014"></a>

-   数据库状态正常、客户端能够正常连接。
-   当前执行用户下安装有gsql工具，该工具路径已被加入到PATH环境变量中。



## 业务数据抽取<a name="section183663372522"></a>

### 日志中的SQL采集

1.  <a name="li541620573521"></a>设置相关GUC参数：  
    log\_min\_duration\_statement = 0  
    log\_statement= 'all'
2.  执行根据日志抽取SQL语句的功能，命令如下：

    ```
    gs_dbmind component extract_log [l LOG_DIRECTORY] [f OUTPUT_FILE] [p LOG_LINE_PREFIX] [-d DATABASE] [-U USERNAME][--start_time] [--sql_amount] [--statement] [--json] [--max_reserved_period] [--max_template_num]
    ```

    其中的输入参数依次为：

    -   LOG\_DIRECTORY：pg\_log的存放目录。
    -   OUTPUT\_PATH：输出SQL流水文件文件的保存路径，即抽取出的业务数据存放的文件路径。
    -   LOG\_LINE\_PREFIX：指定每条日志信息的前缀格式。
    -   DATABASE：（可选）数据库名称，不指定默认所有数据库。
    -   USERNAME：（可选）用户名称，不指定默认所有用户。
    -   start\_time：（可选）日志收集的开始时间，不指定默认所有文件。
    -   sql\_amount：（可选）收集SQL数量的最大值，不指定默认收集所有SQL。
    -   statement：（可选）表示收集pg\_log日志中statement标识开头的SQL，不指定默认不收集。
    -   json：（可选）指定收集日志的文件存储格式为SQL归一化后的json，不指定默认格式每条SQL占一行。
    -   max\_reserved\_period：（可选）指定json模式下，增量收集日志中保留的模板的最大的更新时长，不指定默认都保留，单位/天。
    -   max\_template\_num：（可选）指定json模式下保留的最大模板数量，不指定默认都保留。

    使用示例：

    ```
    gs_dbmind component extract_log $GAUSSLOG/pg_log/dn_6001 sql_log.txt '%m %c %d %p %a %x %n %e' -d postgres -U omm --start_time '2021-07-06 00:00:00' --statement
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >若指定-d/-U参数，日志打印每条日志信息的前缀格式需包含%d、%u，若需要抽取事务，必须指定%p，详见log\_line\_prefix参数。max\_template\_num参数设置建议不超5000条，避免workload索引推荐执行时间过长。

3.  将[1](#li541620573521)中设置的GUC参数还原为设置前的值。  
    >![](public_sys-resources/icon-note.gif) **说明：**   
    >   
    >业务数据抽取完毕建议将上述GUC参数复原，否则容易导致日志文件膨胀。

### 系统表中的SQL采集
执行系统表抽取SQL语句功能，命令如下：
```
echo PASSWORD | gs_dbmind component fetch_statement [DB_PORT] [DATABASE] [OUTPUT] [--db-host DB_HOST] [-U DB_USER] [--schema SCHEMA]
[--statement-type {asp,slow,history,activity}] [--start-time STAET_TIME] [--end-time END_TIME] [--verify] [--driver]
```

其中的输入参数依次为：    
-   DB\_PORT：连接数据库的端口号。
-   DATABASE：连接数据库的名字。
-   OUTPUT：包含SQL流水的输出文件。
-   DB\_HOST：（可选）连接数据库的主机名。
-   DB\_USER：（可选）连接数据库的用户名，用户需具有sysadmin或monitor admin权限。
-   SCHEMA：模式名称，仅在statement-type为history时使用，默认为public。
-   statement-type：SQL流水类型，分为asp,slow,history,activity四种:  
    -  asp：从gs_asp中提取SQL流水，需保证开启GUC参数enable_asp
    -  slow：指定抽取当前活跃的慢SQL
    -  history：指定抽取历史慢SQL
    -  activity：指定抽取当前活跃SQL
-   START\_TIME：起始时间，仅在statement-type为asp时使用，且为必选。
-   END\_TIME：结束时间，仅在statement-type为asp时使用，且为必选。
-   verify：是否校验SQL合法性。
-   driver：是否使用python驱动器连接数据库，默认gsql连接。

## 索引推荐脚本使用步骤<a name="section174995305018"></a>

1.  准备好包含有多条DML语句的文件作为输入的workload，文件中每条语句占据一行。用户可从数据库的离线日志中获得历史的业务语句。
2.  运行本功能，命令如下：

    ```
    echo PASSWORD | gs_dbmind component index_advisor [p DB_PORT] [d DATABASE] [f FILE] [--h DB_HOST] [-U DB_USER] [--schema SCHEMA]
    [--max_index_num MAX_INDEX_NUM][--max_index_storage MAX_INDEX_STORAGE] [--multi_iter_mode] [--max-n-distinct MAX_N_DISTINCT]
    [--min-improved-rate MIN_IMPROVED_RATE] [--max-candidate-columns MAX_CANDIDATE_COLUMNS] [--max-index-columns MAX_INDEX_COLUMNS] 
    [--min-reltuples MIN_RELTUPLES] [--use-all-columns] [--multi_node]  [--json] [--driver] [--show_detail] [--show-benifits]
    ```

    其中的输入参数依次为：

    -   DB\_PORT：连接数据库的端口号。
    -   DATABASE：连接数据库的名字。
    -   FILE：包含workload语句的文件路径。
    -   DB\_HOST：（可选）连接数据库的主机号。
    -   DB\_USER：（可选）连接数据库的用户名。
    -   SCHEMA：模式名称。
    -   MAX\_INDEX\_NUM：（可选）最大的索引推荐数目。
    -   MAX\_INDEX\_STORAGE：（可选）最大的索引集合空间大小。
    -   MAX\_N\_DISTINCT：distinct值个数的倒数，默认为0.01。
    -   MIN\_IMPROVED\_RATE：最小提升比例，默认为0.1。
    -   MAX\_CANDIDATE\_COLUMNS：（可选）索引最大的候选列个数。
    -   MAX\_INDEX\_COLUMNS：索引最大列数，默认为4。
    -   MIN\_RELTUPLES：最小记录数，默认为10000。
    -   use-all-columns：将所有相关列作为索引候选列。
    -   multi\_node：（可选）指定当前是否为分布式数据库实例。
    -   multi\_iter\_mode：（可选）算法模式，可通过是否设置该参数来切换算法。
    -   json：（可选）指定workload语句的文件路径格式为SQL归一化后的json，默认格式每条SQL占一行。
    -   driver：（可选）指定是否使用python驱动器连接数据库，默认gsql连接。
    -   show-detail：（可选）是否显示当前推荐索引集合的详细优化信息。
    -   show-benefits：（可选）是否显示索引收益。

    推荐结果为一批索引，以多个创建索引语句的格式显示在屏幕上，结果示例。

    ```
    create index ind0 on public.bmsql_stock(s_i_id,s_w_id);
    create index ind1 on public.bmsql_customer(c_w_id,c_id,c_d_id);
    create index ind2 on public.bmsql_order_line(ol_w_id,ol_o_id,ol_d_id);
    create index ind3 on public.bmsql_item(i_id);
    create index ind4 on public.bmsql_oorder(o_w_id,o_id,o_d_id);
    create index ind5 on public.bmsql_new_order(no_w_id,no_d_id,no_o_id);
    create index ind6 on public.bmsql_customer(c_w_id,c_d_id,c_last,c_first);
    create index ind7 on public.bmsql_new_order(no_w_id);
    create index ind8 on public.bmsql_oorder(o_w_id,o_c_id,o_d_id);
    create index ind9 on public.bmsql_district(d_w_id);
    ```

