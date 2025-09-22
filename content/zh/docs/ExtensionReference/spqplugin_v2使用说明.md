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
host    all             all             CN节点IP/32		trust
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


## 2.spq配置

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

