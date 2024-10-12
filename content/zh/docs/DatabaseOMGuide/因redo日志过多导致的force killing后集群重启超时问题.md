# 因redo日志过多导致的force killing后集群重启超时问题

## 问题现象

openGauss集群启动超时退出，报错信息如下。

```
cm_ctl: start cluster.
cm_ctl: start nodeid: 1
cm_ctl: start nodeid: 2
cm_ctl: start nodeid: 3
.................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
cm_ctl: start cluster failed in (601)s!

HINT: Maybe the cluster is continually being started in the background.
You can wait for a while and check whether the cluster starts, or increase the value of parameter "-t", e.g -t 600.
```

## 定位分析

查看集群状态，所有节点都处于Standby Starting状态。资源池化下可查看PGDATA目录下的DBstart.log和dms_control.log日志判断dn是否已经启动，查看dms_control.log日志，有以下信息。

```
Starting dn...
start dn in /usr1/dbuser/install/dss_home success.
```

查看dn日志，出现以下信息。

```
2024-10-11 17:46:12.560 6708f1c0.6311 [unknown] 281458809548704 dn_6001 0 dn_6001_6002_6003 DB010  0 [REDO] LOG:  [REDO_LOG_TRACE]ProcessPendingRecords:replayedLsn:30602196424, blockcnt:268435455, WorkerCount:4, readEndLSN:30603794696
2024-10-11 17:46:54.131 6708f1c0.6311 [unknown] 281458809548704 dn_6001 0 dn_6001_6002_6003 DB010  0 [REDO] LOG:  [REDO_LOG_TRACE]ProcessPendingRecords:replayedLsn:30602196424, blockcnt:402653183, WorkerCount:4, readEndLSN:30603794696
2024-10-11 17:47:08.195 [unknown] [unknown] localhost 281459307032480 0[0:0#0]  0 [DMS] WARNING:  [SS reform] wait recovery to apply done for 600000000 us.
2024-10-11 17:47:34.682 6708f1c0.6311 [unknown] 281458809548704 dn_6001 0 dn_6001_6002_6003 DB010  0 [REDO] LOG:  [REDO_LOG_TRACE]ProcessPendingRecords:replayedLsn:30602196424, blockcnt:536870911, WorkerCount:4, readEndLSN:30603794696
2024-10-11 17:47:39.673 6708f1c0.6311 [unknown] 281458809548704 dn_6001 0 dn_6001_6002_6003 DB010  0 [REDO] LOG:  RedoSpeedDiag: 151146675 us, redoBytes:136,preEndPtr:30602196424, readPtr:30602196424, endPtr:30602196560, speed:0 KB/s, totalTime:151146675
2024-10-11 17:47:45.312 6708f1c0.6319 [unknown] 281458464436128 dn_6001 0 dn_6001_6002_6003 00000  0 [DBL_WRT] LOG:  [single flush] [first version] Reset DW file: file_head[dwn 147, start 0], writer pos is 0
```

说明当前节点正在进行日志回放，此时等待集群恢复正常即可。
