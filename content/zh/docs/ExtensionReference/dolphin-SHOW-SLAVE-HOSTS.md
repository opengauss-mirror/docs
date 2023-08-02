# SHOW SLAVE HOSTS 

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

查看wal（xlog）日志同步状态信息，例如发起端发送日志位置，接收端接收日志位置等。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-  在主库执行有效。
-  展示结果和select * from pg_stat_replication一致。

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
{SHOW SLAVE HOSTS | SHOW REPLICAS}
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **pid**

       线程的PID。

- **usesysid**

       用户系统ID。

- **usename**

       用户名。

- **application_name**

       程序名称。

- **client_addr**

       客户端地址。

- **client_port**

       客户端端口。

- **backend_start**

       程序启动时间。

- **state**

       日志复制的状态：
            追赶状态、
            一致的流状态。

- **sender_sent_location**

       发送端发送日志位置。

- **receiver_write_location**

       接收端write日志位置。

- **receiver_flush_location**

       接收端flush日志位置。

- **receiver_replay_location**

       接收端replay日志位置。

- **sync_priority**

       同步复制的优先级（0表示异步）。

- **sync_state**
            
       同步状态：
            异步复制、
            同步复制、
            潜在同步者。

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
openGauss=# show slave hosts;
-[ RECORD 1 ]------------+----------------------------------
pid                      | 140395615176448
usesysid                 | 10
usename                  | opengauss
application_name         | WalSender to Standby[walreceiver]
client_addr              | 127.0.0.1
client_hostname          |
client_port              | 43174
backend_start            | 2022-08-23 18:41:12.398717+08
state                    | Streaming
sender_sent_location     | 0/1098BB08
receiver_write_location  | 0/1098BB08
receiver_flush_location  | 0/1098BB08
receiver_replay_location | 0/1098BB08
sync_priority            | 1
sync_state               | Sync

openGauss=# show replicas;
-[ RECORD 1 ]------------+----------------------------------
pid                      | 140395615176448
usesysid                 | 10
usename                  | opengauss
application_name         | WalSender to Standby[walreceiver]
client_addr              | 127.0.0.1
client_hostname          |
client_port              | 43174
backend_start            | 2022-08-23 18:41:12.398717+08
state                    | Streaming
sender_sent_location     | 0/1098BB08
receiver_write_location  | 0/1098BB08
receiver_flush_location  | 0/1098BB08
receiver_replay_location | 0/1098BB08
sync_priority            | 1
sync_state               | Sync
```
