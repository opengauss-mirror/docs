# spqplugin_v2函数参考
## 分布式表相关
-   create_distributed_table(table_name, distribution_column, shard_count)

    描述：把local表转化为分布式表，注意除了指定的分布列，表的其它列不能有PRIMARY KEY、UNIQUE约束，对于分布式列而言，要求其比较collation是明确的，即相同的value必须有相同的hash值。

    参数说明：
    -   table_name：转分布式表的表名
    -   distribution_column：指定的分片列名
    -   shard_count：分片数量，不指定时默认为spq.shard_count
    
    返回值类型：N/A
    
    示例：
    ```sql
    -- 创建local表
    openGauss=# create table t1(id int primary key, b varchar(10));
    -- 将local表转为分布式表
    openGauss=# select create_distributed_table('t1', 'id', shard_count:=4);
    ```

-   alter_distributed_table(table_name, distribution_column, shard_count)

    描述：修改分布式表的分布列、分片数量。

    参数说明：
    -   table_name：分布式表的表名
    -   distribution_column：指定的分片列名
    -   shard_count：分片数量，不指定时默认为spq.shard_count
    
    返回值类型：N/A
    
    示例：
    ```sql
    -- 修改分片数量
    openGauss=# select alter_distributed_table('t1', shard_count:=8);
    ```

-   undistribute_table(table_name)

    描述：把分布式表转回local表

    参数说明：
    -   table_name：分布式表的表名
    
    返回值类型：N/A
    
    示例：
    ```sql
    -- 修改分片数量
    openGauss=# select undistribute_table('t1');
    ```

-   rebalance_table_shards()

    描述：按照每个DN节点分片数量平衡的策略，对分布式表分片进行重新分布。

    参数说明：N/A
    
    返回值类型：N/A
    
    示例：
    ```sql
    -- 加入一个新的DN节点
    select spq_add_node('127.0.01', 5432);
    -- 重分布
    openGauss=# select rebalance_table_shards();
    ```

-   spq_rebalance_start()

    描述：作用同rebalance_table_shards，调用后立即返回，数据重分布任务将在后台异步进行。

    参数说明：N/A
    
    返回值类型：N/A
    
    示例：
    ```sql
    -- 加入一个新的DN节点
    select spq_add_node('127.0.01', 5432);
    -- 重分布
    openGauss=# select spq_rebalance_start();
    ```


## 节点管理相关
-   spq_set_coordinator_host(host text, port integer default current_setting('port')::int)

    描述：将某节点设置为CN节点，每个集群仅需要一个读写CN。

    参数说明：
    -   host：当前CN的ip地址、域名或endpoint等
    -   port：CN节点的openGauss端口号

    返回值类型：N/A
    
    示例：
    ```sql
    openGauss=# select spq_set_coordinator_host('127.0.01', 5432);
    ```

-   spq_add_node(nodename text, nodeport integer)

    描述：添加DN节点，该节点被立即激活，可以立刻被使用。

    参数说明：
    -   nodename：当前DN的ip地址、域名或endpoint等
    -   nodeport：DN节点的openGauss端口号

    返回值类型：N/A

    示例：
    ```sql
    openGauss=# spq_addselect spq_add_node('127.0.01', 5432);
    ```   
 
-   spq_add_inactive_node(nodename text, nodeport integer)

    描述：添加DN节点，该节点不会被立即激活，即分布式表的分片不会落在这个节点上。

    参数说明：
    -   nodename：当前DN的ip地址、域名或endpoint等
    -   nodeport：DN节点的openGauss端口号

    返回值类型：N/A

    示例：
    ```sql
    openGauss=# select spq_add_inactive_node('127.0.01', 5432);
    ```

-   spq_activate_node(nodename text, nodeport integer)

    描述：激活某个非活跃节点，在spq_add_inactive_node之后使用。

    参数说明：
    -   nodename：当前DN的ip地址、域名或endpoint等
    -   nodeport：DN节点的openGauss端口号

    返回值类型：N/A

    示例：
    ```sql
    openGauss=# select spq_activate_node('127.0.01', 5432);
    ```

-   spq_disable_node(nodename text, nodeport integer)

    描述：与spq_activate_node相反的操作，将某个激活节点变为非激活节点。

    参数说明：
    -   nodename：当前DN的ip地址、域名或endpoint等
    -   nodeport：DN节点的openGauss端口号

    返回值类型：N/A

    示例：
    ```sql
    openGauss=# select spq_disable_node('127.0.01', 5432);
    ```

-   spq_update_node(node_id int, new_node_name text, new_node_port integer)

    描述：更新某个节点的IP和端口。

    参数说明：
    -   node_id：节点在pg_dist_node表中的node id
    -   new_node_name：节点的新ip地址、域名或endpoint等
    -   new_node_port：节点的新openGauss端口号

    返回值类型：N/A

    示例：
    ```sql
    openGauss=# select spq_update_node(1, '127.0.01', 5432);
    ```

-   spq_remove_node(nodename text, nodeport integer)

    描述：移除某个节点，要求当前节点不存在数据分片。

    参数说明：
    -   nodename：当前DN的ip地址、域名或endpoint等
    -   nodeport：DN节点的openGauss端口号

    返回值类型：N/A

    示例：
    ```sql
    openGauss=# select spq_remove_node('127.0.01', 5432);
    ```


-   spq_is_coordinator()

    描述：查询当前节点是否是CN节点

    参数说明：N/A

    返回值类型：bool

    示例：
    ```sql
    openGauss=# select spq_is_coordinator();
     spq_is_coordinator
    --------------------
     t
    ```

-   spq_get_active_worker_nodes()

    描述：获取集群中活跃的DN节点信息

    参数说明：N/A

    返回值类型：record

    示例：
    ```sql
    openGauss=# select spq_get_active_worker_nodes();
     spq_get_active_worker_nodes
    -----------------------------
     (127.0.0.1,5432)
     (127.0.0.1,5532)
    ```

-   spq_check_connection_to_node(nodename text, nodeport integer)

    描述：检查节点的连通性

    参数说明：
    -   nodename：当前DN的ip地址、域名或endpoint等
    -   nodeport：DN节点的openGauss端口号

    返回值类型：bool

    示例：
    ```sql
    openGauss=# select spq_check_connection_to_node('127.0.0.1', 5432);
     spq_check_connection_to_node
    ------------------------------
     t
    ```
