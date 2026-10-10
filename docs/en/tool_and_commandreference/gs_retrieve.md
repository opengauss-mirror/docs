# gs_retrieve

## Background<a name="zh-cn_topic_0237152335_zh-cn_topic_0059777770_section1271019596335"></a>

In an openGauss primary-standby architecture, when the primary node crashes unexpectedly and an asynchronous standby needs to be promoted to primary, the old primary may have data that has not been synchronized to the asynchronous standby. The gs_retrieve tool can retrieve the unsynchronized data through logical decoding after the old primary is recovered.

## Precautions<a name="zh-cn_topic_0237152335_zh-cn_topic_0059777770_s75e900efd4f04a2bb39914ec1d8f971f"></a>

- The `gs_retrieve` tool is only supported for use on the machine where the old primary is located. The new primary can be on a different machine.

- After the old primary is recovered, it is recommended to set autovacuum to off to prevent historical versions of metadata from being recycled and cleaned up.

- If DDL operations exist within the decoding range, normal decoding may fail because historical versions of metadata have been cleaned up. Decoding in force mode may result in data loss.

- When excessive xlog accumulation on the old primary causes logs that have not been synchronized to the asynchronous standby to be recycled, complete data may not be retrievable.

- During the execution of the `gs_retrieve` tool, if IUD operations are performed on the old primary, they will also be decoded.

- This feature inherits the constraints of the existing logical decoding mechanism.

## Syntax<a name="zh-cn_topic_0237152335_zh-cn_topic_0059777770_s884f9e03cedd408cbe7ce5303df97df6"></a>

```
gs_retrieve [OPTION]...
```

>[!NOTE] Note

## Parameter Description<a name="zh-cn_topic_0237152335_zh-cn_topic_0059777770_s6822518f650f4ad4ab67d1084cd8ffdd"></a>

General parameters:

- -d, --dbname=DBNAME

    Target database name for data retrieval.

- --newhost=HOSTNAME

    Host name of the new primary.

- --newport=PORT

    HA port number of the new primary.

- --oldhost=HOSTNAME

    Host name of the old primary.

- --oldport=PORT

    Database port number of the old primary.

- -U, --username=NAME

    Username used to connect to the target database.

- -W, --password

    Connect using the specified password.

- -P, --plugin=PLUGIN

    Specifies the logical replication slot output plugin to use. The default value is `mppdb_decoding`. Optional values are `mppdb_decoding` and `sql_decoding`.

- -f, --file=FILE

    Output to the specified file. Use "-" to output to stdout.

- --force

    Force decoding without creating a historical snapshot. In scenarios where table metadata changes (DDL), this mode may result in data loss.

## Example<a name="zh-cn_topic_0237152335_s969fde25c47f45ed897e29d208d57649"></a>

Execute `gs_retrieve` and output the result to stdout.

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
