# Obtaining Help Information <a name="EN-US_TOPIC_0000001364496013"></a>

Before using the SQL Rewriter tool, run the following command to obtain help information:

```
gs_dbmind component sql_rewriter --help
```

The following information is displayed:

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

Passwords are entered through pipes or in interactive mode. For password-free users, any input can pass the verification.
