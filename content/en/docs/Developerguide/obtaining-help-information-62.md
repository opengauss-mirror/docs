# Obtaining Help Information<a name="EN-US_TOPIC_0000001240744997"></a>

You can run the  **--help**  command to obtain the help information. For example:

```
gs_dbmind component slow_query_diagnosis --help
```

```
usage:  [-h] -c DIRECTORY [--query SLOW_QUERY]
        [--start-time TIMESTAMP_IN_MICROSECONDS]
        [--end-time TIMESTAMP_IN_MICROSECONDS] [--retention-days DAYS]
        {show,clean}

Slow Query Diagnosis: Analyse the root cause of slow query

positional arguments:
  {show,clean}          choose a functionality to perform

optional arguments:
  -h, --help            show this help message and exit
  -c DIRECTORY, --conf DIRECTORY
                        set the directory of configuration files
  --query SLOW_QUERY    set a slow query you want to retrieve
  --start-time TIMESTAMP_IN_MICROSECONDS
                        set the start time of a slow SQL diagnosis result to
                        be retrieved
  --end-time TIMESTAMP_IN_MICROSECONDS
                        set the end time of a slow SQL diagnosis result to be
                        retrieved
  --retention-days DAYS
                        clear historical diagnosis results and set the maximum
                        number of days to retain data
```

