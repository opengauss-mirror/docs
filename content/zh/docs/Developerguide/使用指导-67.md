# 使用指导<a name="ZH-CN_TOPIC_0000001364336309"></a>

假设指标采集系统运行正常，并且用户已经初始化了配置文件目录confpath，则可以通过下述命令实现本特性的功能：

仅启动异常检测功能：

```
gs_dbmind service start --conf confpath --only-run anomaly_detection
```

对于某一指标，在全部节点上，从timestamps1到timestamps1时间段内的数据进行概览：

```
gs_dbmind component anomaly_detection --conf confpath --action overview --metric metric_name --start-time timestamps1 --end-time timestamps2
```

对于某一指标，在特定节点上，从timestamps1到timestamps1时间段内的数据进行概览：

```
gs_dbmind component anomaly_detection --conf confpath --action overview --metric metric_name --start-time timestamps1 --end-time timestamps2 --host ip_address --anomaly anomaly_type
```

对于某一指标，在全部节点上，从timestamps1到timestamps1时间段内的数据，以特定异常检测方式进行概览：

```
gs_dbmind component anomaly_detection --conf confpath --action overview --metric metric_name --start-time timestamps1 --end-time timestamps2 --anomaly anomaly_type
```

对于某一指标，在特定节点，从timestamps1到timestamps1时间段内的数据，以特定异常检测方式进行概览：

```
gs_dbmind component anomaly_detection --conf confpath --action overview --metric metric_name --start-time timestamps1 --end-time timestamps2 --host ip_address --anomaly anomaly_type
```

对于某一指标，在特定节点，从timestamps1到timestamps1时间段内的数据，以特定异常检测方式进行可视化展示：

```
gs_dbmind component anomaly_detection --conf confpath --action plot --metric metric_name --start-time timestamps1 --end-time timestamps2 --host ip_address --anomaly anomaly_type
```

停止已启动的服务：

```
gs_dbmind service stop --conf confpath
```

>![](public_sys-resources/icon-note.gif) **说明：** 
>在输入anomaly detection的参数时，start-time至少要比end-time早30秒以上。

