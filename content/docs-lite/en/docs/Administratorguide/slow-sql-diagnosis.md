# Slow SQL Diagnosis<a name="EN-US_TOPIC_0290917654"></a>

## Background<a name="section11436171655914"></a>

If the SQL statement execution performance does not meet expectations, you can view the SQL statement execution information to analyze the behavior and diagnose problems that occur during the execution.

## Prerequisites<a name="section18794625615"></a>

-   The database instance is running properly.
-   The GUC parameter  **track\_stmt\_stat\_level **is properly set for querying the SQL statement information.
-   Only the system administrator and monitor administrator can perform this operation.

```
Run the following command to check the execution information about the SQL statements in the database instance:
gsql> select * from dbe_perf.get_global_full_sql_by_timestamp(start_timestamp, end_timestamp); 
Run the following command to check the execution information about the slow SQL statements in the database instance:
gsql> select * from dbe_perf.get_global_slow_sql_by_timestamp(start_timestamp, end_timestamp);
Check the execution information about the SQL statement on the current node.
gsql> select * from statement_history;
```

