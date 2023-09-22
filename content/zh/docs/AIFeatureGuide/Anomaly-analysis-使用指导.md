# 使用指导

假设指标采集系统运行正常，并且用户已经初始化了配置文件目录confpath，则可以通过下述命令实现本特性的功能：


对于某一指标，在特定节点上，分析其他指标与该指标从timestamps1到timestamps1时间段内的数据的相关性：

```
gs_dbmind component anomaly_analysis --conf confpath --metric metric_name --start-time timestamps1 --end-time timestamps2 --host ip_address
```

对于某一指标，在特定节点上，分析其他指标与该指标从timestamps1到timestamps1时间段内的数据的相关性，并将分析结果保存至为csv文件：

```
gs_dbmind component anomaly_analysis --conf confpath --metric metric_name --start-time timestamps1 --end-time timestamps2 --host ip_address --csv-dump-path csv_path
```




>![](public_sys-resources/icon-note.png) **说明：** 
>在输入anomaly_analysis的参数时，start-time至少要比end-time早30秒以上。

