# 获取帮助<a name="ZH-CN_TOPIC_0000001364496013"></a>

使用SQL Rewriter前，您可以通过以下指令获取帮助。

```
gs_dbmind component sql_rewriter --help
```

显示如下帮助信息：

```
usage:  [-h] [--db-host DB_HOST] [--db-user DB_USER] [--schema SCHEMA]
        db_port database file

SQL Rewriter

positional arguments:
  db_port            Port for database
  database           Name for database
  file               File containing SQL statements which need to rewrite

optional arguments:
  -h, --help         show this help message and exit
  --db-host DB_HOST  Host for database
  --db-user DB_USER  Username for database log-in
  --schema SCHEMA    Schema name for the current business data
```

密码通过管道输入或交互式输入，对于免密用户，任意输入都可通过检验。

