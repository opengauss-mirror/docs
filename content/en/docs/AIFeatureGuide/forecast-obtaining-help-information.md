# Obtaining Help Information<a name="EN-US_TOPIC_0000001240351149"></a>

You can run the  **--help**  command to obtain the help information. For example:

```
gs_dbmind component forecast --help
```

```
usage:  [-h] -c DIRECTORY [--metric-name METRIC_NAME] [--host HOST] [--start-time TIMESTAMP_IN_MICROSECONDS] [--end-time TIMESTAMP_IN_MICROSECONDS] [--retention-days DAYS]
        {show,clean}

Workload Forecasting: Forecast monitoring metrics

positional arguments:
  {show,clean}          choose a functionality to perform

optional arguments:
  -h, --help            show this help message and exit
  -c DIRECTORY, --conf DIRECTORY
                        set the directory of configuration files
  --metric-name METRIC_NAME
                        set a metric name you want to retrieve
  --host HOST           set a host you want to retrieve
  --start-time TIMESTAMP_IN_MICROSECONDS
                        set a start time of for retrieving
  --end-time TIMESTAMP_IN_MICROSECONDS
                        set a end time of for retrieving
  --retention-days DAYS
                        clear historical diagnosis results and set the maximum number of days to retain data
```

