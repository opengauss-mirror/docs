# 因DMS端口被占用导致reform失败的问题

## 一、问题现象
在资源池化场景，数据库节点启动时，会初始化DMS组件，此时需要额外占用一个端口，用于各节点的DMS组件间的通信，如果该端口被占用，则数据库会因DMS初始化失败而退出。

## 二、定位方法
查看相应时间段的pg_log日志（目录：$GAUSSLOG/pg_log/dn_600X），可以发现如下报错信息`failed to initialize dms, errno: 308, reason: Tcp port conflict xx.xx.xx.111:12703`，意为tpc端口冲突，并打印对应的端口信息。
```
2024-10-08 16:06:04.094 6704e7e9.1 [unknown] 281458621612048 [unknown] 0 dn_6001_6002_6003 22023  0 [BACKEND] FATAL:  failed to initialize dms, errno: 308, reason: Tcp port conflict xx.xx.xx.111:12703
2024-10-08 16:06:04.095 6704e7ea.10000 [unknown] 281452543258528 dn_6001 0 dn_6001_6002_6003 00000  0 [BACKEND] LOG:  [Alarm Module]alarm checker shutting down...
2024-10-08 16:06:04.121 6704e7e9.1 [unknown] 281458621612048 [unknown] 0 dn_6001_6002_6003 00000  0 [BACKEND] LOG:  FiniNuma allocIndex: 0.
2024-10-08 16:06:04.122 6704e7e9.1 [unknown] 281458621612048 [unknown] 0 dn_6001_6002_6003 00000  0 [BACKEND] LOG:  Gaussdb exit(1)
```
查看相应时间段的DMS日志（目录：$GAUSSLOG/pg_log/DMS/run），可以发现如下报错信息`Start tcp lsnr failed. Host_name: xx.xx.xx.111, inst_id:0, port:12703, os error:17`，其中`port:12703`表示预计占用的端口号，`os error:17`表示file exit。
```
UTC+8 2024-10-08 16:06:02.602|DMS|101860|ERROR>[mes] failed to create lsnr sockets for listener type 0 [cs_listener.c:299]
UTC+8 2024-10-08 16:06:02.602|DMS|103786|INFO>[mes] mes_task_proc thread init callback: cb_thread_init done [mes_queue.c:985]
UTC+8 2024-10-08 16:06:02.603|DMS|101860|ERROR>[mes]:Start tcp lsnr failed. Host_name: xx.xx.xx.111, inst_id:0, port:12703, os error:17. [mes_tcp.c:873]
UTC+8 2024-10-08 16:06:02.603|DMS|101860|ERROR>[mes]mes_init failed. [mes_func.c:1141]
UTC+8 2024-10-08 16:06:02.603|DMS|101860|INFO>[mes] mes_uninit start [mes_func.c:1480]
UTC+8 2024-10-08 16:06:02.603|DMS|103810|INFO>[mes] mes_task_proc thread init callback: cb_thread_init done [mes_queue.c:985]
UTC+8 2024-10-08 16:06:02.603|DMS|101860|INFO>[mes] mes_stop_heartbeat_thread end [mes_func.c:1468]
UTC+8 2024-10-08 16:06:02.861|DMS|101860|INFO>[mes] stop sender monitor finish [mes_recv.c:289]
UTC+8 2024-10-08 16:06:02.861|DMS|101860|INFO>[mes] mes_close_work_thread end [mes_func.c:1178]
UTC+8 2024-10-08 16:06:02.862|DMS|101860|INFO>[mes] mes_close_work_thread end [mes_func.c:1178]
UTC+8 2024-10-08 16:06:02.862|DMS|101860|WARN>[mes]: mes_disconnect: inst_id 0 already disconnect. [mes_func.c:1940]
UTC+8 2024-10-08 16:06:02.862|DMS|101860|WARN>[mes]: mes_disconnect: inst_id 1 already disconnect. [mes_func.c:1940]
UTC+8 2024-10-08 16:06:02.862|DMS|101860|WARN>[mes]: mes_disconnect: inst_id 2 already disconnect. [mes_func.c:1940]
UTC+8 2024-10-08 16:06:02.864|DMS|101860|INFO>[mes] mes_uninit success [mes_func.c:1504]
UTC+8 2024-10-08 16:06:04.085|DMS|103762|INFO>[DRC recycle]drc_recycle_buf_res_thread close [drc_res_mgr.c:974]
```
可以在root用户下使用`lsof -i:12703`找出占用该端口的进程，其中PID即为占用该端口的进程号。
```
COMMAND     PID     USER   FD   TYPE    DEVICE SIZE/OFF NODE NAME
gaussdb 3816250 xxxxxxxx   20u  IPv6 39736xxxx      0t0  TCP localhost:12703 (LISTEN)
gaussdb 3816250 xxxxxxxx   22u  IPv4 39736xxxx      0t0  TCP localhost:12703 (LISTEN)
gaussdb 3816250 xxxxxxxx   25u  IPv4 39736xxxx      0t0  TCP openGauss111:12703 (LISTEN)
```

## 三、问题根因
在资源池化场景，数据库节点启动时，会初始化DMS组件，此时需要额外占用一个端口，用于各节点的DMS组件间的通信，如果该端口被占用，则数据库会因DMS初始化失败而退出。

## 四、解决方案
DMS所需端口通过参数ss_interconnect_url定义，具体参数说明参考[通信矩阵](../DatabaseReference/通信矩阵.md)。如果发现因DMS端口冲突导致节点无法启动的情况，可以通过`gs_guc set -N all -I all -c "ss_interconnect_url = 'xxx'"`修改为非冲突端口并重启节点解决该问题。