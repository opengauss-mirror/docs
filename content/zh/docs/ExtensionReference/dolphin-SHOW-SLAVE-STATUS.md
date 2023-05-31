# SHOW SLAVE STATUS 

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

查看wal（xlog）日志同步状态信息，例如发起端发送日志位置，接收端接收日志位置等。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-  在主库执行有效。
-  展示结果和select * from pg_stat_get_wal_senders()一致。

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW {SLAVE | REPLICA} STATUS [FOR CHANNEL channel]
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **{SLAVE | REPLICA}**

       两者是等价的。

- **[FOR CHANNEL channel]**

       支持通过channel字段过滤，可以是channel字段全部或者一部分，如端口号或者ip，用于模糊查询。

## 字段说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **pid**

       walsender的线程号。

- **sender_pid**

       walsender的pid相对的轻量级线程号。

- **local_role**

       主节点类型。

- **peer_role**

       备节点类型。

- **peer_state**

       备节点状态。

- **state**

       walsender状态。

- **catchup_start**

       catchup启动时间。

- **catchup_end**

       catchup结束时间。

- **sender_sent_location**

       主节点发送位置。

- **sender_write_location**

       主节点落盘位置。

- **sender_flush_location**

       主节点flush磁盘位置。

- **sender_replay_location**

       主节点redo位置。

- **receiver_received_location**

       备节点接收位置。

- **receiver_write_location**

       备节点落盘位置。

- **receiver_flush_location**

       备节点flush磁盘位置。

- **receiver_replay_location**

       备节点redo磁盘位置。

- **sync_percent**

       同步百分比。

- **sync_state**

       同步状态。

- **sync_priority**

       同步复制的优先级。

- **sync_most_available**

       最大可用模式设置。

- **channel**

       walsender信道信息。

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
openGauss=# show slave status;
-[ RECORD 1 ]--------------+-------------------------------------------
pid                        | 139766487054080
sender_pid                 | 129111
local_role                 | Primary
peer_role                  | Standby
peer_state                 | Normal
state                      | Streaming
catchup_start              | 2023-05-17 17:23:58.6677+08
catchup_end                | 2023-05-17 17:23:58.736808+08
sender_sent_location       | 0/44A27C8
sender_write_location      | 0/44A27C8
sender_flush_location      | 0/44A27C8
sender_replay_location     | 0/44A27C8
receiver_received_location | 0/44A27C8
receiver_write_location    | 0/44A27C8
receiver_flush_location    | 0/44A27C8
receiver_replay_location   | 0/44A27C8
sync_percent               | 100%
sync_state                 | Sync
sync_priority              | 1
sync_most_available        | Off
channel                    | 10.248.192.249:5433-->10.248.192.249:46984

openGauss=# show slave status for channel '249';
-[ RECORD 1 ]--------------+-------------------------------------------
pid                        | 139766487054080
sender_pid                 | 129111
local_role                 | Primary
peer_role                  | Standby
peer_state                 | Normal
state                      | Streaming
catchup_start              | 2023-05-17 17:23:58.6677+08
catchup_end                | 2023-05-17 17:23:58.736808+08
sender_sent_location       | 0/44A27C8
sender_write_location      | 0/44A27C8
sender_flush_location      | 0/44A27C8
sender_replay_location     | 0/44A27C8
receiver_received_location | 0/44A27C8
receiver_write_location    | 0/44A27C8
receiver_flush_location    | 0/44A27C8
receiver_replay_location   | 0/44A27C8
sync_percent               | 100%
sync_state                 | Sync
sync_priority              | 1
sync_most_available        | Off
channel                    | 10.248.192.249:5433-->10.248.192.249:46984
```
