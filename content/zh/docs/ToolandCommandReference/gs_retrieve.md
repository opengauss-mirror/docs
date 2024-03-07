# gs\_retrieve

## 背景信息<a name="zh-cn_topic_0237152335_zh-cn_topic_0059777770_section1271019596335"></a>

在openGauss主备的架构下，当主机异常宕机，需要异步备升主时，旧主可能有数据未同步到异步备。gs\_retrieve工具可以在旧主恢复之后，将未同步的数据通过逻辑解码的方式找回。

## 注意事项<a name="zh-cn_topic_0237152335_zh-cn_topic_0059777770_s75e900efd4f04a2bb39914ec1d8f971f"></a>

- gs_retrieve工具仅支持在旧主所在机器上使用，新主可在不同机器。

- 旧主恢复之后建议将autovacuum设置为off，防止元数据的历史版本被回收清理。

- 解码范围内存在DDL的情况下，可能由于元数据的历史版本被清理而无法正常解码。通过force方式解码，可能会丢失数据。

- 当旧主xlog堆积过多，导致还没同步到异步备的日志被回收时，可能无法获取完整的数据。

- 在gs_retrieve工具运行过程中，如果旧主执行相关IUD业务，同样会被解码出来。

- 继承原有逻辑解码的约束。

## 语法<a name="zh-cn_topic_0237152335_zh-cn_topic_0059777770_s884f9e03cedd408cbe7ce5303df97df6"></a>

```
gs_retrieve [OPTION]...
```

![](public_sys-resources/icon-note.png) **说明：** 



## 参数说明<a name="zh-cn_topic_0237152335_zh-cn_topic_0059777770_s6822518f650f4ad4ab67d1084cd8ffdd"></a>

通用参数：

-   -d, --dbname=DBNAME

    待数据找回的目标数据库名

-   --newhost=HOSTNAME

    新主的主机名

-   --newport=PORT

    新主的HA端口号

-   --oldhost=HOSTNAME

    旧主的主机名

-   --oldport=PORT

    旧主的数据库端口号

-   -U, --username=NAME

    连接目标库所使用的用户名

-   -W, --password

    使用指定密码进行连接

    -P, --plugin=PLUGIN

    指定使用的逻辑复制槽输出插件，默认值为mppdb_decoding，可选值为mppdb_decoding和sql_decoding。

    -f, --file=FILE

    设置输出到指定文件。直接使用"-"表示输出到stdout

    --force

    强制使用不创建历史快照的方式进行解码，该方式在表元数据发生表更（DDL）的场景下，可能发生数据丢失。

## 示例<a name="zh-cn_topic_0237152335_s969fde25c47f45ed897e29d208d57649"></a>

执行gs\_retrieve，结果输出到stdout。

```
gs_retrieve --newhost=127.0.0.1 --newport=25821 --oldhost=127.0.0.1 --oldport=25800 -U openGauss -W --dbname=postgres -P mppdb_decoding -f -
gs_retrieve: begin to search for diverge lsn.
INFO:  Try to bind walsender thread to available CPUs in threadpool.
gs_retrieve: find diverge lsn 0/14000350
gs_retrieve: found proper restart_lsn 0/140000D8.
gs_retrieve: ready to connect old-master database and do logical replication.
Password: 
location   |   xid   |   data
0/140001C8   |   16020   |   BEGIN 16020
0/140001C8   |   16020   |   {"table_name":"public.t1","op_type":"INSERT","columns_name":["a","b"],"columns_type":["integer","integer"],"columns_val":["14","14"],"old_keys_name":[],"old_keys_type":[],"old_keys_val":[]}
0/140003B0   |   16020   |   {"table_name":"public.t1","op_type":"INSERT","columns_name":["a","b"],"columns_type":["integer","integer"],"columns_val":["16","16"],"old_keys_name":[],"old_keys_type":[],"old_keys_val":[]}
0/14000538   |   16020   |   COMMIT 16020 (at 2024-02-05 14:46:35.203057+08) CSN 2155
0/14000538   |   16022   |   BEGIN 16022
0/14000538   |   16022   |   {"table_name":"public.t1","op_type":"INSERT","columns_name":["a","b"],"columns_type":["integer","integer"],"columns_val":["17","17"],"old_keys_name":[],"old_keys_type":[],"old_keys_val":[]}
0/14000638   |   16022   |   COMMIT 16022 (at 2024-02-05 14:46:40.965957+08) CSN 2156
0/14038798   |   16739   |   BEGIN 16739
0/143C7530   |   16739   |   COMMIT 16739 (at 2024-02-06 01:34:11.237605+08) CSN 2157
0/143EE1A0   |   16741   |   BEGIN 16741
0/1477D390   |   16741   |   COMMIT 16741 (at 2024-02-06 07:17:19.45874+08) CSN 2159
gs_retrieve: retrieve data finished.
```
