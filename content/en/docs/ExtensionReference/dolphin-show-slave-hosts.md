# SHOW SLAVE HOSTS <a name="ZH-CN_TOPIC_0289900448"></a>

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

Views WAL (Xlog) synchronization status information, such as the locations where the sender sends logs and where the receiver receives logs.

## Precautions <a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-  This command is valid in the primary database.
-  The displayed result is the same as that in the **select * from pg\_stat\_replication**.

## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW SLAVE HOSTS

```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **pid**

       PID of the thread.

- **usesysid**

       User system ID.

- **usename**

       Username.

- **application_name**

       Program name.

- **client_addr**

       Client address.

- **client_port**

       Port of the client.

- **backend_start**

       Start time of the program.

- **state**

       Log replication state.
            Catch-up state
            Consistent streaming state

- **sender_sent_location**

       Location where the sender sends logs.

- **receiver_write_location**

       Location where the receiver writes logs.

- **receiver_flush_location**

       Location where the receiver flushes logs.

- **receiver_replay_location**

      Location where the receiver replays logs.

- **sync_priority**

      Priority of synchronous duplication (**0** indicates asynchronization.)

- **sync_priority**
            
      Synchronization state.
            Asynchronous replication
            Synchronous replication
            Potential synchronization

## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

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
```
