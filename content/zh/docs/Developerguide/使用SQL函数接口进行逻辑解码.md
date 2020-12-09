# 使用SQL函数接口进行逻辑解码<a name="ZH-CN_TOPIC_0264264807"></a>

openGauss可以通过调用SQL函数，进行创建、删除、推进逻辑复制槽，获取解码后的事务日志。

## 前提条件<a name="zh-cn_topic_0237121453_section1288315272236"></a>

-   逻辑日志目前从主机节点中抽取，默认关闭SSL连接，如果进行逻辑复制，需要先上配置GUC参数[ssl](zh-cn_topic_0242371486.md#zh-cn_topic_0237124696_zh-cn_topic_0059778664_s8c4647db116f44c4b9ce3dceee3d6ffa)=on。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >为避免安全风险，请保证启用SSL连接。


-   设置GUC参数[wal\_level](设置.md#zh-cn_topic_0237124707_zh-cn_topic_0059778393_s2c76f5957066407a959191148f2c780f)=logical。
-   设置GUC参数[max\_replication\_slots](发送端服务器.md#section7322161612568)\>每个节点所需的（物理流复制槽数+逻辑复制槽数）。

    物理流复制槽提供了一种自动化的方法来确保主节点在所有备节点或从备节点收到xlog之前，xlog不会被移除。也就是说物理流复制槽用于支撑集群HA。集群所需要的物理流复制槽数为：备节点加从备的和与主节点之间的比例。例如，假设集群的高可用方案为1主、1备、1从备，则所需物理流复制槽数为2。又例如，假设集群的高可用方案为1主3备，则所需物理流复制槽数为3。

    关于逻辑复制槽数，请按如下规则考虑。

    -   一个逻辑复制槽只能解码一个Database的修改，如果需要解码多个Database，则需要创建多个逻辑复制槽。
    -   如果需要多路逻辑复制同步给多个目标数据库，在源端数据库需要创建多个逻辑复制槽，每个逻辑复制槽对应一条逻辑复制链路。

-   仅限数据库管理员和拥有REPLICATION权限的用户进行操作。

## 操作步骤<a name="zh-cn_topic_0237121453_section14821441121619"></a>

1.  以集群安装用户登录openGauss集群主节点。
2.  使用如下命令通过连接默认数据库postgres。

    ```
    gsql -d postgres -p 16000 -r
    ```

    其中，16000为数据库端口号，用户可根据实际情况替换。

3.  创建名称为slot1的逻辑复制槽。

    ```
    postgres=# SELECT * FROM pg_create_logical_replication_slot('slot1', 'mppdb_decoding');
    slotname | xlog_position
    ----------+---------------
    slot1    | 0/601C150
    (1 row)
    ```

4.  在数据库中创建表t，并向表t中插入数据。

    ```
    postgres=# CREATE TABLE t(a int PRIMARY KEY, b int);
    postgres=# INSERT INTO t VALUES(3,3);
    ```

5.  读取复制槽slot1解码结果，解码条数为4096。

    ```
    postgres=# SELECT * FROM pg_logical_slot_peek_changes('slot1', NULL, 4096);
    location  |  xid  | data                                                                                         
    -----------+-------+-------------------------------------------------------------------------------------------------------------------------------------------------
    -------------------------------------------
     0/601C188 | 1010023 | BEGIN 1010023
     0/601ED60 | 1010023 | COMMIT 1010023 CSN 1010022
     0/601ED60 | 1010024 | BEGIN 1010024
     0/601ED60 | 1010024 | {"table_name":"public.t","op_type":"INSERT","columns_name":["a","b"],"columns_type":["integer","integer"],"columns_val":["3","3"],"old_keys_name":[],"old_keys_type":[],"old_keys_val":[]}
     0/601EED8 | 1010024 | COMMIT 1010024 CSN 1010023
    (5 rows)
    ```

6.  删除逻辑复制槽slot1。

    ```
    postgres=#  SELECT * FROM pg_drop_replication_slot('slot1');
     pg_drop_replication_slot
    --------------------------
    
    (1 row)
    ```


