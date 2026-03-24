# spqplugin_v2使用

## 前提条件

1.一个CN以及若干DN节点服务器运行正常，openGauss能够正常启动

2.所有节点网络互通

3.线程池关闭(目前暂不兼容)

## 部署

### 1.openGauss部署

#### 1.1 CN节点

修改`cn节点数据目录/postgresql.conf`，添加如下参数

```shell
password_encryption_type = 1
enable_pbe_optimization = OFF
shared_preload_libraries = 'spq'
port = cn节点port
```

修改完上述配置后，需要重启openGauss进程，命令例如（若openGauss未启动则启动即可，命令为实例，其他启动方式也可以）

```shell
gs_ctl restart -D CN节点数据目录
```

#### 1.2 DN节点

修改`dn节点数据目录/postgresql.conf` 添加如下参数

```shell
password_encryption_type = 1
shared_preload_libraries = 'spq'
port = dn节点port
listen_addresses = 'localhost,当前DN节点网卡IP'
```

修改`dn节点数据目录/pg_hba.conf` 添加如下行，接收来自cn节点的所有用户连接（此处代码逻辑控制）

```shell
# TYPE  DATABASE        USER            ADDRESS          METHOD
host    all             all             CN节点IP/32  trust
```

此处要注意，如果是使用单机多docker方式部署(DN和CN节点都在该机器上，但为不同docker容器)，则DN节点的pg_hba.conf中CN节点IP要配置为ifconfig命令输出中，docker0的IP，例如下面示例中的172.17.0.1

```shell
$ ifconfig
docker0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 172.17.0.1  netmask 255.255.0.0  broadcast 172.17.255.255
        inet6 fe80::42:a6ff:fe5e:19cb  prefixlen 64  scopeid 0x20<link>
        ether 02:42:a6:5e:19:cb  txqueuelen 0  (Ethernet)
        RX packets 23556  bytes 1778105 (1.6 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 23323  bytes 2091561 (1.9 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

修改完上述配置后，需要重启openGauss进程，命令例如（若openGauss未启动则启动即可，命令为示例，其他启动方式也可以）

```shell
gs_ctl restart -D 当前DN节点数据目录
```

查看每个DN节点的防火墙是否开启，若开启则需要对CN节点放通其openGauss的监听端口

```shell
# 查看firewalld是否开启，若输出包含Active: active (running)则说明firewalld正在运行，否则我们需要对CN节点IP放通openGauss监听端口。
systemctl status firewalld

# DN节点向CN节点IP放通端口
firewall-cmd --permanent --add-rich-rule='rule family=ipv4 source address=CN节点IP port port=当前DN节点openGauss端口 protocol=“tcp” accept'
firewall-cmd --reload
```

注意，对每个DN节点都要进行如上配置

### 2.spq配置

#### 2.1 加载插件

连接CN节点和所有DN节点的openGauss执行如下sql，加载spq插件，注意所有节点的openGauss都需要执行。

```
create extension spq;
```

#### 2.2 节点配置

连接CN节点，添加节点配置

```sql
-- 设置自身为CN节点
SELECT * from spq_set_coordinator_host('127.0.0.1', CN节点端口号);
-- 添加所有DN节点
SELECT * from spq_add_node('DN1 IP', DN1端口号);
SELECT * from spq_add_node('DN2 IP', DN2端口号);
...

--查询所有节点
SELECT * from pg_dist_node;
SELECT * FROM spq_get_active_worker_nodes();
```

#### 2.3 分布式表使用示例

创本地表

```sql
CREATE TABLE IF NOT EXISTS public.pg_vector_collection (id BIGINT PRIMARY KEY, embedding vector(4));
ALTER TABLE public.pg_vector_collection ALTER COLUMN embedding SET STORAGE PLAIN;
ALTER TABLE public.pg_vector_collection SET (parallel_workers = 32);
-- 查询表的分片分布情况：
SELECT * from pg_dist_shard;
```

转分布式表

```sql
SELECT create_distributed_table('pg_vector_collection', 'id', shard_count:=4);
-- 查询表的分片分布情况：
SELECT * from pg_dist_shard;
```

插数据

```sql
INSERT INTO public.pg_vector_collection 
VALUES(1,'[1,2,3,4]'),(2,'[1,2,3,4]'),(3,'[1,2,3,4]'),(4,'[1,2,3,4]'),(5,'[1,2,3,4]'),(6,'[1,2,3,4]'),(7,'[1,2,3,4]');
```

建索引

```sql
CREATE INDEX IF NOT EXISTS  "opengauss_index"  ON public. pg_vector_collection USING  "hnsw"  (embedding  "vector_cosine_ops" ) WITH ( "m" = "16", "ef_construction" = "200" );
```

查询

```sql
SELECT * FROM public.pg_vector_collection ORDER BY embedding <=> '[1,2,3,4]' LIMIT 5;
```

删表

```sql
drop table pg_vector_collection;
```

## 函数参考

### 分布式表相关

- create_distributed_table(table_name, distribution_column, shard_count)

    描述：把local表转化为分布式表，注意除了指定的分布列，表的其它列不能有PRIMARY KEY、UNIQUE约束，对于分布式列而言，要求其比较collation是明确的，即相同的value必须有相同的hash值。

    参数说明：
    - table_name：转分布式表的表名
    - distribution_column：指定的分片列名
    - shard_count：分片数量，不指定时默认为spq.shard_count
    
    返回值类型：N/A
    
    示例：

    ```sql
    -- 创建local表
    openGauss=# create table t1(id int primary key, b varchar(10));
    -- 将local表转为分布式表
    openGauss=# select create_distributed_table('t1', 'id', shard_count:=4);
    ```

- alter_distributed_table(table_name, distribution_column, shard_count)

    描述：修改分布式表的分布列、分片数量。

    参数说明：
    - table_name：分布式表的表名
    - distribution_column：指定的分片列名
    - shard_count：分片数量，不指定时默认为spq.shard_count
    
    返回值类型：N/A
    
    示例：

    ```sql
    -- 修改分片数量
    openGauss=# select alter_distributed_table('t1', shard_count:=8);
    ```

- undistribute_table(table_name)

    描述：把分布式表转回local表

    参数说明：
    - table_name：分布式表的表名
    
    返回值类型：N/A
    
    示例：

    ```sql
    -- 修改分片数量
    openGauss=# select undistribute_table('t1');
    ```

- rebalance_table_shards()

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

- spq_rebalance_start()

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

### 节点管理相关

- spq_set_coordinator_host(host text, port integer default current_setting('port')::int)

    描述：将某节点设置为CN节点，每个集群仅需要一个读写CN。

    参数说明：
    - host：当前CN的ip地址、域名或endpoint等
    - port：CN节点的openGauss端口号

    返回值类型：N/A
    
    示例：

    ```sql
    openGauss=# select spq_set_coordinator_host('127.0.01', 5432);
    ```

- spq_add_node(nodename text, nodeport integer)

    描述：添加DN节点，该节点被立即激活，可以立刻被使用。

    参数说明：
    - nodename：当前DN的ip地址、域名或endpoint等
    - nodeport：DN节点的openGauss端口号

    返回值类型：N/A

    示例：

    ```sql
    openGauss=# select spq_add_node('127.0.01', 5432);
    ```   
 
- spq_add_inactive_node(nodename text, nodeport integer)

    描述：添加DN节点，该节点不会被立即激活，即分布式表的分片不会落在这个节点上。

    参数说明：
    - nodename：当前DN的ip地址、域名或endpoint等
    - nodeport：DN节点的openGauss端口号

    返回值类型：N/A

    示例：

    ```sql
    openGauss=# select spq_add_inactive_node('127.0.01', 5432);
    ```

- spq_activate_node(nodename text, nodeport integer)

    描述：激活某个非活跃节点，在spq_add_inactive_node之后使用。

    参数说明：
    - nodename：当前DN的ip地址、域名或endpoint等
    - nodeport：DN节点的openGauss端口号

    返回值类型：N/A

    示例：

    ```sql
    openGauss=# select spq_activate_node('127.0.01', 5432);
    ```

- spq_disable_node(nodename text, nodeport integer)

    描述：与spq_activate_node相反的操作，将某个激活节点变为非激活节点。

    参数说明：
    - nodename：当前DN的ip地址、域名或endpoint等
    - nodeport：DN节点的openGauss端口号

    返回值类型：N/A

    示例：

    ```sql
    openGauss=# select spq_disable_node('127.0.01', 5432);
    ```

- spq_update_node(node_id int, new_node_name text, new_node_port integer)

    描述：更新某个节点的IP和端口。

    参数说明：
    - node_id：节点在pg_dist_node表中的node id
    - new_node_name：节点的新ip地址、域名或endpoint等
    - new_node_port：节点的新openGauss端口号

    返回值类型：N/A

    示例：

    ```sql
    openGauss=# select spq_update_node(1, '127.0.01', 5432);
    ```

- spq_remove_node(nodename text, nodeport integer)

    描述：移除某个节点，要求当前节点不存在数据分片。

    参数说明：
    - nodename：当前DN的ip地址、域名或endpoint等
    - nodeport：DN节点的openGauss端口号

    返回值类型：N/A

    示例：

    ```sql
    openGauss=# select spq_remove_node('127.0.01', 5432);
    ```

- spq_is_coordinator()

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

- spq_get_active_worker_nodes()

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

- spq_check_connection_to_node(nodename text, nodeport integer)

    描述：检查节点的连通性

    参数说明：
    - nodename：当前DN的ip地址、域名或endpoint等
    - nodeport：DN节点的openGauss端口号

    返回值类型：bool

    示例：

    ```sql
    openGauss=# select spq_check_connection_to_node('127.0.0.1', 5432);
     spq_check_connection_to_node
    ------------------------------
     t
    ```

## 系统表及视图说明

- pg_dist_node

    描述：系统表，存储集群中所有节点的信息

    <table><thead align="left"><tr id="row2994153425611">
    <th class="cellrowborder" valign="top" width="11.97%" id="mcps1.2.5.1.2"><p id="p3994113411568"><a name="p3994113411568"></a><a name="p3994113411568"></a>列名</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.32%" id="mcps1.2.5.1.3"><p id="p189946342567"><a name="p189946342567"></a><a name="p189946342567"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="61.019999999999996%" id="mcps1.2.5.1.4"><p id="p899410346569"><a name="p899410346569"></a><a name="p899410346569"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row16994143445619">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p114021312413"><a name="p114021312413"></a><a name="p114021312413"></a>nodeid</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p16994183413569"><a name="p16994183413569"></a><a name="p16994183413569"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    节点唯一标识
    </td>
    </tr>
    <tr id="row17994123411562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p53919138411"><a name="p53919138411"></a><a name="p53919138411"></a>groupid</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p12994103420564"><a name="p12994103420564"></a><a name="p12994103420564"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    唯一标识一组节点
    </td>
    </tr>
    <tr id="row29944347562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p0371613945"><a name="p0371613945"></a><a name="p0371613945"></a>nodename</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p188631948943"><a name="p188631948943"></a><a name="p188631948943"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    节点IP或域名
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">nodeport
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    节点端口
    </td>
    </tr>
    
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">noderack
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    当前版本不使用
    </td>
    </tr>
    
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">hasmetadata
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    是否有元数据，CN节点为true，DN节点为false
    </td>
    </tr>
    
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">isactive
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    该节点是否被使用
    </td>
    </tr>
    
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">nodecluster
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>name</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    该节点所属spq cluster的名字
    </td>
    </tr>
    
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">metadatasynced
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    元数据是否同步。CN节点为true，DN节点为fasle
    </td>
    </tr>
    
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">shouldhaveshards
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    是否可以存储分片数据。CN节点为false，DN节点为true
    </td>
    </tr>
    </tbody>
    </table>
    
    示例：

    ```sql
    openGauss=# select * from pg_dist_node;
    nodeid | groupid | nodename  | nodeport | noderack | hasmetadata | isactive | noderole | nodecluster | metadatasynced | shouldhaveshards 
    --------+---------+-----------+----------+----------+-------------+----------+----------+-------------+----------------+------------------
         1 |       0 | 127.0.0.1 |    15432 | default  | t           | t        | primary  | default     | t              | f
         2 |       1 | 127.0.0.1 |    15532 | default  | f           | t        | primary  | default     | f              | t
         3 |       2 | 127.0.0.1 |    15632 | default  | f           | t        | primary  | default     | f              | t
    (3 rows)
    ```

- pg_dist_partition

    描述：系统表，存储分布式表的定义

    <table><thead align="left"><tr id="row2994153425611">
    <th class="cellrowborder" valign="top" width="11.97%" id="mcps1.2.5.1.2"><p id="p3994113411568"><a name="p3994113411568"></a><a name="p3994113411568"></a>列名</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.32%" id="mcps1.2.5.1.3"><p id="p189946342567"><a name="p189946342567"></a><a name="p189946342567"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="61.019999999999996%" id="mcps1.2.5.1.4"><p id="p899410346569"><a name="p899410346569"></a><a name="p899410346569"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row16994143445619">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p114021312413"><a name="p114021312413"></a><a name="p114021312413"></a>logicalrelid</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p16994183413569"><a name="p16994183413569"></a><a name="p16994183413569"></a>regclass</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    分布式表表名
    </td>
    </tr>
    <tr id="row17994123411562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p53919138411"><a name="p53919138411"></a><a name="p53919138411"></a>partmethod</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p12994103420564"><a name="p12994103420564"></a><a name="p12994103420564"></a>char</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    当前版本唯一值为'h'，代表hash分区
    </td>
    </tr>
    <tr id="row29944347562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p0371613945"><a name="p0371613945"></a><a name="p0371613945"></a>partkey</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p188631948943"><a name="p188631948943"></a><a name="p188631948943"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    分区列的信息
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">colocationid
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    当前版本不使用
    </td>
    </tr>
    
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">repmodel
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>char</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    当前版本不使用
    </td>
    </tr>
    
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">autoconverted
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    当前版本不使用
    </td>
    </tr>
    
    </tbody>
    </table>
    
    示例：

    ```sql
    openGauss=# select * from pg_dist_partition;
    logicalrelid | partmethod |                                                        partkey                                                         | colocationid | repmodel | autoconverted 
    --------------+------------+------------------------------------------------------------------------------------------------------------------------+--------------+----------+---------------
    t1           | h          | {VAR :varno 1 :varattno 1 :vartype 23 :vartypmod -1 :varcollid 0 :varlevelsup 0 :varnoold 1 :varoattno 1 :location -1} |            1 | s        | f
    (1 row)
    ```

- pg_dist_shard

    描述：系统表，存储分布式表每个分片的信息

    <table><thead align="left"><tr id="row2994153425611">
    <th class="cellrowborder" valign="top" width="11.97%" id="mcps1.2.5.1.2"><p id="p3994113411568"><a name="p3994113411568"></a><a name="p3994113411568"></a>列名</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.32%" id="mcps1.2.5.1.3"><p id="p189946342567"><a name="p189946342567"></a><a name="p189946342567"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="61.019999999999996%" id="mcps1.2.5.1.4"><p id="p899410346569"><a name="p899410346569"></a><a name="p899410346569"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row16994143445619">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p114021312413"><a name="p114021312413"></a><a name="p114021312413"></a>logicalrelid</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p16994183413569"><a name="p16994183413569"></a><a name="p16994183413569"></a>regclass</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    分布式表表名
    </td>
    </tr>
    <tr id="row17994123411562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p53919138411"><a name="p53919138411"></a><a name="p53919138411"></a>shardid</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p12994103420564"><a name="p12994103420564"></a><a name="p12994103420564"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    分片编号
    </td>
    </tr>
    <tr id="row29944347562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p0371613945"><a name="p0371613945"></a><a name="p0371613945"></a>shardstorage</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p188631948943"><a name="p188631948943"></a><a name="p188631948943"></a>char</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    存储类型，当前仅支持't'，即普通表
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">shardminvalue
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    当前shard的hash分区的最小hash值
    </td>
    </tr>
    
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">shardmaxvalue
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    当前shard的hash分区的最大hash值
    </td>
    </tr>
    
    </tbody>
    </table>
    
    示例：

    ```sql
    openGauss=# select * from pg_dist_shard;
     logicalrelid | shardid | shardstorage | shardminvalue | shardmaxvalue 
    --------------+---------+--------------+---------------+---------------
     t1           |   62025 | t            | -2147483648   | -1073741825
     t1           |   62026 | t            | -1073741824   | -1
     t1           |   62027 | t            | 0             | 1073741823
     t1           |   62028 | t            | 1073741824    | 2147483647
    (4 rows)
    ```

- pg_dist_placement

    描述：系统表，存储分布式表每个分片的位置信息

    <table><thead align="left"><tr id="row2994153425611">
    <th class="cellrowborder" valign="top" width="11.97%" id="mcps1.2.5.1.2"><p id="p3994113411568"><a name="p3994113411568"></a><a name="p3994113411568"></a>列名</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.32%" id="mcps1.2.5.1.3"><p id="p189946342567"><a name="p189946342567"></a><a name="p189946342567"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="61.019999999999996%" id="mcps1.2.5.1.4"><p id="p899410346569"><a name="p899410346569"></a><a name="p899410346569"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">placementid
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    自增唯一标识
    </td>
    </tr>
    <tr id="row17994123411562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p53919138411"><a name="p53919138411"></a><a name="p53919138411"></a>shardid</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p12994103420564"><a name="p12994103420564"></a><a name="p12994103420564"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    分片编号
    </td>
    </tr>
    <tr id="row29944347562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p0371613945"><a name="p0371613945"></a><a name="p0371613945"></a>shardstate</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p188631948943"><a name="p188631948943"></a><a name="p188631948943"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    分片状态
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">shardlength
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    对于hash分区，恒为0
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">groupid
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    唯一标识一组节点
    </td>
    </tr>
    
    </tbody>
    </table>
    
    示例：

    ```sql
    openGauss=# select * from pg_dist_placement;
     placementid | shardid | shardstate | shardlength | groupid 
    -------------+---------+------------+-------------+---------
               1 |   62025 |          1 |           0 |       1
               2 |   62026 |          1 |           0 |       2
               3 |   62027 |          1 |           0 |       1
               4 |   62028 |          1 |           0 |       2
    (4 rows)
    
    ```
  
- spq_shards

    描述：视图，查看所有的分片信息

    <table><thead align="left"><tr id="row2994153425611">
    <th class="cellrowborder" valign="top" width="11.97%" id="mcps1.2.5.1.2"><p id="p3994113411568"><a name="p3994113411568"></a><a name="p3994113411568"></a>列名</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.32%" id="mcps1.2.5.1.3"><p id="p189946342567"><a name="p189946342567"></a><a name="p189946342567"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="61.019999999999996%" id="mcps1.2.5.1.4"><p id="p899410346569"><a name="p899410346569"></a><a name="p899410346569"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">table_name
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>regclass</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    表名
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">shardid
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    分片编号
    </td>
    </tr>
    <tr id="row17994123411562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p53919138411"><a name="p53919138411"></a><a name="p53919138411"></a>shard_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p12994103420564"><a name="p12994103420564"></a><a name="p12994103420564"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    分片名
    </td>
    </tr>
    <tr id="row29944347562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p0371613945"><a name="p0371613945"></a><a name="p0371613945"></a>table_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p188631948943"><a name="p188631948943"></a><a name="p188631948943"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    表类型
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">nodename</td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>text</p></td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    节点IP或域名
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">nodeport</td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>integer</p></td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    节点端口
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">shard_size</td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>bigint</p></td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    分片大小
    </td>
    </tr>
    
    </tbody>
    </table>
    
    示例：

    ```sql
    openGauss=# select * from spq_shards;
     table_name | shardid | shard_name | table_type  | nodename  | nodeport | shard_size 
    ------------+---------+------------+-------------+-----------+----------+------------
     t1         |   62025 | t1_62025   | distributed | 127.0.0.1 |    15532 |       8192
     t1         |   62026 | t1_62026   | distributed | 127.0.0.1 |    15632 |       8192
     t1         |   62027 | t1_62027   | distributed | 127.0.0.1 |    15532 |          0
     t1         |   62028 | t1_62028   | distributed | 127.0.0.1 |    15632 |       8192
    (4 rows)
    ```

- spq_tables

    描述：视图，查看所有分布式表信息

    <table><thead align="left"><tr id="row2994153425611">
    <th class="cellrowborder" valign="top" width="11.97%" id="mcps1.2.5.1.2"><p id="p3994113411568"><a name="p3994113411568"></a><a name="p3994113411568"></a>列名</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.32%" id="mcps1.2.5.1.3"><p id="p189946342567"><a name="p189946342567"></a><a name="p189946342567"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="61.019999999999996%" id="mcps1.2.5.1.4"><p id="p899410346569"><a name="p899410346569"></a><a name="p899410346569"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">table_name
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>regclass</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    表名
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">table_type
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    表类型
    </td>
    </tr>
    <tr id="row17994123411562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p53919138411"><a name="p53919138411"></a><a name="p53919138411"></a>distribution_column</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p12994103420564"><a name="p12994103420564"></a><a name="p12994103420564"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    分片列
    </td>
    </tr>
    <tr id="row29944347562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p0371613945"><a name="p0371613945"></a><a name="p0371613945"></a>table_size</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p188631948943"><a name="p188631948943"></a><a name="p188631948943"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    表大小
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">shard_count</td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>bigint</p></td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    分片数量
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">table_owner</td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>name</p></td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    属主
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">access_method</td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>name</p></td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    当前版本不使用
    </td>
    </tr>
    
    </tbody>
    </table>
    
    示例：

    ```sql
    openGauss=# select * from spq_tables;
     table_name | table_type  | distribution_column | table_size | shard_count | table_owner | access_method 
    ------------+-------------+---------------------+------------+-------------+-------------+---------------
     t1         | distributed | a                   | 24 kB      |           4 | openGauss   | 
    (1 row)
    ```
