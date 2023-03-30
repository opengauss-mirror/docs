# 获取帮助<a name="ZH-CN_TOPIC_0000001311256720"></a>

模块命令行说明：

```
gs_dbmind component anomaly_detection --help
```

显示如下帮助信息：
```
usage: anomaly_analysis.py [-h] -c CONF -m METRIC -s START_TIME -e END_TIME -H
                           HOST [--csv-dump-path CSV_DUMP_PATH]

Workload Anomaly analysis: Anomaly analysis of monitored metric.

optional arguments:
  -h, --help            show this help message and exit
  -c CONF, --conf CONF  set the directory of configuration files
  -m METRIC, --metric METRIC
                        set the metric name you want to retrieve
  -s START_TIME, --start-time START_TIME
                        set the start time of for retrieving in ms, supporting
                        UNIX-timestamp with microsecond or datetime format
  -e END_TIME, --end-time END_TIME
                        set the end time of for retrieving in ms, supporting
                        UNIX-timestamp with microsecond or datetime format
  -H HOST, --host HOST  set a host of the metric, ip only or ip and port.
  --csv-dump-path CSV_DUMP_PATH
                        dump the result csv file to the dump path if it is
                        specified.
```