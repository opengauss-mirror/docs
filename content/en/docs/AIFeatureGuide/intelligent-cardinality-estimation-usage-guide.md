# Usage Guide<a name="EN-US_TOPIC_0000001311096732"></a>

## Prerequisites<a name="section11307523175912"></a>

The database and connection are normal.

## Example<a name="section12324135224"></a>

Use the **tpcc** database as an example:

```
gs_dbmind component sql_rewriter 5030 tpcc queries.sql --db-host 127.0.0.1 --db-user myname --schema public
```

**queries.sql** is the SQL statement to be modified. The content is as follows:

```
select cfg_name from bmsql_config group by cfg_name having cfg_name='1';
delete from bmsql_config;
delete from bmsql_config where cfg_name='1';
```

The result is multiple rewritten query statements, which are displayed on the screen (the statements that cannot be rewritten are displayed as null), as shown in the following.

```
+--------------------------------------------------------------------------+------------------------------+
| Raw SQL                                                                  | Rewritten SQL                |
+--------------------------------------------------------------------------+------------------------------+
| select cfg_name from bmsql_config group by cfg_name having cfg_name='1'; | SELECT cfg_name              |
|                                                                          | FROM bmsql_config            |
|                                                                          | WHERE cfg_name = '1';        |
| delete from bmsql_config;                                                | TRUNCATE TABLE bmsql_config; |
| delete from bmsql_config where cfg_name='1';                             |                              |
+--------------------------------------------------------------------------+------------------------------+
```
