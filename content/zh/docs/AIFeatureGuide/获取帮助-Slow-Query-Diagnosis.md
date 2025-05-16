# 获取帮助<a name="ZH-CN_TOPIC_0000002294398297"></a>

**模块命令行说明：**

使用如下命令查看帮助信息

```
gs_dbmind component slow_query_diagnosis --help

usage:  [-h] -c DIRECTORY [--instance INSTANCE] [--database DATABASE] [--schema SCHEMA]
        [--query SLOW_QUERY] [--start-time TIMESTAMP_IN_MICROSECONDS]
        [--end-time TIMESTAMP_IN_MICROSECONDS] [--retention-days DAYS]
        {show,clean,diagnosis}

Slow Query Diagnosis: Analyse the root cause of slow query

positional arguments:
  {show,clean,diagnosis}
                        choose a functionality to perform

optional arguments:
  -h, --help            show this help message and exit
  -c DIRECTORY, --conf DIRECTORY
                        set the directory of configuration files  
  --instance INSTANCE   Set the instance of slow query. Using in show.
  --database DATABASE   name of database
  --schema SCHEMA       schema of database
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

