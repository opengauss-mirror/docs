# 获取帮助<a name="ZH-CN_TOPIC_0000002259861278"></a>

异常检测模块命令行说明：

```
gs_dbmind component anomaly_detection --help
```

显示如下帮助信息：

```
usage: [-h] --action {overview,plot} -c CONF -m METRIC -s START_TIME -e END_TIME [-H HOST] [-a {level_shift,spike,seasonal,volatility_shift}]

Workload Anomaly detection: Anomaly detection of monitored metric.

optional arguments:
  -h, --help            show this help message and exit
  --action {overview,plot}
                        choose a functionality to perform
  -c CONF, --conf CONF  set the directory of configuration files
  -m METRIC, --metric METRIC
                        set the metric name you want to retrieve
  -s START_TIME, --start-time START_TIME
                        set the start time of for retrieving in ms, supporting UNIX-timestamp with microsecond or datetime format
  -e END_TIME, --end-time END_TIME
                        set the end time of for retrieving in ms, supporting UNIX-timestamp with microsecond or datetime format
  -H HOST, --host HOST  set a host of the metric, ip only or ip and port.
  -a {level_shift,spike,seasonal,volatility_shift}, --anomaly {level_shift,spike,seasonal,volatility_shift}
                        set a anomaly detector of the metric from: "level_shift", "spike", "seasonal", "volatility_shift"
```

