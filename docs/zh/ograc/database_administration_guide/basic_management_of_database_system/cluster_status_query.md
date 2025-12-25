# 集群状态查询

oGRAC可以通过cms工具查看整个集群、节点以及cms状态，通过查询结果确认其运行状态是否正常，查询的前提是需切换到集群用户下执行。

## 命令说明

使用方法：

```
cms stat
cms stat -node [NODE_ID]
cms stat -res [RESOURCE_NAME]
cms stat -server [SERVER_ID]
```

选项参数：

| 参数            | 说明                |
| ------------- | ----------------- |
| NODE_ID       | 节点ID              |
| RESOURCE_NAME | 资源名称，当前仅有db和dss资源 |
| SERVER_ID     | cms节点ID           |

## 命令参考

1、查询集群状态

```
$ cms stat
NODE_ID  NAME      STAT    PRE_STAT    TARGET_STAT   WORK_STAT   SESSION_ID   INSTANCE_ID   ROLE     LAST_CHECK              HB_TIME                 STAT_CHANGE
      0  db        ONLINE  OFFLINE     ONLINE                1            0             0   REFORMER 2025-10-28 11:19:44.427 2025-10-28 11:19:44.427 2025-10-27 20:57:51.886
      1  db        ONLINE  OFFLINE     ONLINE                1            0             1            2025-10-28 11:19:46.179 2025-10-28 11:19:46.179 2025-10-27 20:58:33.151
      0  dss       ONLINE  OFFLINE     ONLINE                1            1             0   REFORMER 2025-10-28 11:19:45.789 2025-10-28 11:19:45.789 2025-10-27 14:25:12.349
      1  dss       ONLINE  OFFLINE     ONLINE                1            1             1            2025-10-28 11:19:45.444 2025-10-28 11:19:45.444 2025-10-27 17:19:20.978
```

结果说明：

| 字段          | 含义                  | 字段值                                                                                                  |
| ----------- | ------------------- | ---------------------------------------------------------------------------------------------------- |
| NODE_ID     | 节点ID                | -                                                                                                    |
| NAME        | 节点名称           | db<br />dss                                                                                          |
| STAT        | 节点当前状态         | ONLINE：在线<br />OFFLINE：离线<br />UNKNOWN：状态未知                                                          |
| PRE_STAT    | 节点上一次状态        | -                                                                                                    |
| TARGET_STAT | 节点下一个目标状态      | -                                                                                                    |
| WORK_STAT   | 节点工作状态         | RC_JOINING (0) ：正在加入集群<br />RC_JOINED (1) ：已加入集群<br />RC_LEAVING (2) ：正在离开集群<br />RC_LEFT (3) ：已离开集群 |
| SESSION_ID  | 节点ID           | 只有一个资源时ID为0，当资源离线时为-1                                                                                |
| INSTANCE_ID | 节点的实例id        | -                                                                                                    |
| ROLE        | 节点的角色          | 包括REFORMER和非REFORMER（显示为空），一类资源在一个集群中有且仅会存在1个reformer。                                               |
| LAST_CHECK  | 上一次检查节点的时间     | 等于HB_TIME，当节点离线时时间为2000-01-01 00:00:00.000。                                                   |
| HB_TIME     | 上一次收到节点心跳消息的时间 | 当节点离线时时间为2000-01-01 00:00:00.000。                                                               |
| STAT_CHANGE | 上一次节点状态变化的时间   | -                                                                                                    |

备注：

LAST_CHECK和HB_TIME作对比，一般可用于观察cms server进程是否正常。如果阵列故障或者阵列通信故障，会观察到LAST_CHECK更新，HB_TIME不会变化。

2、查询节点状态

查看所有节点状态：

```
$ cms stat -node
NODE_ID   NODE_NAME                       ROLE          
      0   node0                           server        
      1   node1                           agent  
```

查看指定节点状态：

```
$ cms stat -node 0
NODE_ID   NODE_NAME                       ROLE          
      0   node0                           server 
```

结果说明：

| 字段        | 含义                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------ |
| NODE_ID   | 节点ID。                                                                                            |
| NODE_NAME | 节点名称。                                                                                            |
| ROLE      | 节点的类型：<br />当节点CMS为Master时，该节点类型为server，CMS Master负责控制脑裂仲裁等流程。<br />当节点CMS为非Master时，该节点类型为agent。 |

3、查询资源状态

查看所有资源状态：

```
$ cms stat -res
NODE_ID  RESOURCE_NAME  STAT   PRE_STAT  TARGET_STAT  WORK_STAT                      
0           db                ONLINE  OFFLINE  ONLINE        1
1           db                OFFLINE UNKNOWN  UNKNOWN       0
LAST_CHECK            STAT_CHANGE
2025-10-28 17:02:05.154    2025-10-28 16:30:10.262 
2000-01-01 00:00:00.000    2025-10-22 16:33:36.612 
```

查看指定db资源状态：

```
$ cms stat -res db
NODE_ID  RESOURCE_NAME  STAT   PRE_STAT  TARGET_STAT  WORK_STAT                      
0           db                ONLINE  OFFLINE  ONLINE        1
1           db                OFFLINE UNKNOWN  UNKNOWN       0
LAST_CHECK            STAT_CHANGE
2025-10-28 17:05:01.083    2025-10-28 16:30:10.262 
2000-01-01 00:00:00.000    2025-10-22 16:33:36.612 
```

查看指定dss资源状态：
$ cms stat -res db
NODE_ID  RESOURCE_NAME  STAT   PRE_STAT  TARGET_STAT  WORK_STAT                      
0           dss                ONLINE  OFFLINE  ONLINE        1
1           dss                OFFLINE UNKNOWN  UNKNOWN       0
LAST_CHECK            STAT_CHANGE
2025-10-22 20:58:08.909    2025-10-22 19:57:58.712 
2025-10-22 19:26:49.315    2025-10-22 19:26:50.395 
```

结果说明：

| 字段            | 含义                                                                                                                          |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| NODE_ID       | 节点ID。                                                                                                                       |
| RESOURCE_NAME | 资源名称，当前仅有db和dss资源。                                                                                                            |
| STAT          | 资源的状态，分为：<br><br>- ONLINE：在线<br>- OFFLINE：离线<br>- UNKNOWN：状态未知                                                              |
| PRE_STAT      | 资源的上一个状态。                                                                                                                   |
| TARGET_STAT   | 资源的下一个目标状态。                                                                                                                 |
| WORK_STAT     | 资源的工作状态，分为：<br><br>- RC_JOINING (0) ：正在加入集群<br>- RC_JOINED (1) ：已经加入集群<br>- RC_LEAVING (2) ：正在离开集群<br>- RC_LEFT (3) ：已经离开集群 |
| LAST_CHECK    | 上一次检查资源的时间，当资源离线时时间为2000-01-01 00:00:00.000。                                                                      |
| STAT_CHANGE   | 上一次资源状态变化的时间。                                                                                                               |

4、查询CMS状态

查看所有CMS状态：

```
$ cms stat -server
NODE_ID  SRV_READY  SEND_QUE  RECV_QUE  TIME_GAP(ms)
0        TRUE       0         0         0
1        TRUE       0         0         1
```

查看指定节点CMS状态：

```
$ cms stat -server 0
NODE_ID  SRV_READY   SEND_QUE  RECV_QUE  TIME_GAP(ms)
0        TRUE        0         0         0
```

结果说明：

| 字段        | 含义                                                      |
| --------- | ------------------------------------------------------- |
| NODE ID   | 节点ID。                                                   |
| SRV_READY | 节点CMS的工作状态：<br />TRUE：表示CMS正常工作。<br />FALSE：表示CMS为暂停工作。 |
| SEND_QUE  | CMS消息发送队列中消息的数目。                                        |
| RECV_QUE  | CMS消息接收队列中消息的数据。                                        |
| TIME_GAP  | 该节点CMS与其他各节点CMS之间的时间跳变的最大值。                             |
