# Obtaining Help Information<a name="EN-US_TOPIC_0000001240351149"></a>

You can run the  **--help**  command to obtain the help information. For example:

```
gs_dbmind component forecast --help
```

```
usage: forecast.py [-h] -c DIRECTORY [--metric-name METRIC_NAME] [--host HOST]
                   [--labels LABELS] [--start-time TIMESTAMP_IN_MICROSECONDS]
                   [--end-time TIMESTAMP_IN_MICROSECONDS]
                   [--retention-days DAYS] [--upper UPPER] [--lower LOWER]
                   [--warning-hours WARNING-HOURS]
                   [--csv-dump-path CSV_DUMP_PATH]
                   {show,clean,early-warning}

Workload Forecasting: Forecast monitoring metrics

positional arguments:
  {show,clean,early-warning}
                        Choose a functionality to perform

optional arguments:
  -h, --help            show this help message and exit
  -c DIRECTORY, --conf DIRECTORY
                        Set the directory of configuration files
  --metric-name METRIC_NAME
                        Set a metric name you want to retrieve
  --host HOST           Set a host you want to retrieve. IP only or IP with
                        port.
  --labels LABELS       A list of label (format is label=name) separated by
                        comma(,). Using in warning.
  --start-time TIMESTAMP_IN_MICROSECONDS
                        Set a start time for retrieving, supporting UNIX-
                        timestamp with microsecond or datetime format
  --end-time TIMESTAMP_IN_MICROSECONDS
                        Set an end time for retrieving, supporting UNIX-
                        timestamp with microsecond or datetime format
  --retention-days DAYS
                        Clear historical diagnosis results and set the maximum
                        number of days to retain data
  --upper UPPER         The upper value of early-warning. Using in warning.
  --lower LOWER         The lower value of early-warning. Using in warning.
  --warning-hours WARNING-HOURS
                        warning length, unit is hour.
  --csv-dump-path CSV_DUMP_PATH
                        Dump the result CSV file to the path if it is
                        specified. Use in warning.