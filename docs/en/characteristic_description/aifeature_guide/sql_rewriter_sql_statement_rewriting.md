# SQL Rewriter: SQL Statement Rewriting<a name="EN-US_TOPIC_0000001364336305"></a>

## Overview<a name="EN-US_TOPIC_0000001311256716"></a>

SQL Rewriter is an SQL rewriting tool. It converts query statements into more efficient or standard forms based on preset rules to improve query efficiency.

>[!NOTE]NOTE
>
>- This function does not apply to statements that contain subqueries.
>- This function supports only the SELECT and DELETE statements for deleting the entire table.
>- This function contains 11 rewriting rules. Statements that do not comply with the rewriting rules are not processed.
>- This function displays original query statements and rewritten statements on the screen. You are not advised to rewrite SQL statements that contain sensitive information.
>- The rule for converting UNION to UNION ALL avoids deduplication and improves the query performance. The obtained result may be redundant.
>- If a statement contains ORDER BY + specified column name or GROUP BY + specified column name, the SelfJoin rule is not applicable.
>- The tool does not ensure equivalent conversion of query statements. The purpose is to improve the efficiency of query statements.

## Usage Guide<a name="EN-US_TOPIC_0000001311096732"></a>

### Prerequisites<a name="section11307523175912"></a>

The database and connection are normal.

### Example<a name="section12324135224"></a>

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

## Obtaining Help Information <a name="EN-US_TOPIC_0000001364496013"></a>

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

## Command Reference<a name="EN-US_TOPIC_0000001364615553"></a>

**Table 1** Command line parameters

<a name="table8333140153713"></a>
<table><thead align="left"><tr id="row1333364033712"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p19333940103713"><a name="p19333940103713"></a><a name="p19333940103713"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p733334012373"><a name="p733334012373"></a><a name="p733334012373"></a>Definition</p>
</th>
</tr>
</thead>
<tbody><tr id="row14333124063712"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p183331740153717"><a name="p183331740153717"></a><a name="p183331740153717"></a>db_port</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p2333144013378"><a name="p2333144013378"></a><a name="p2333144013378"></a>Database port number</p>
</td>
</tr>
<tr id="row123331540183712"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p4333194033717"><a name="p4333194033717"></a><a name="p4333194033717"></a>database</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p4333640173713"><a name="p4333640173713"></a><a name="p4333640173713"></a>Database name</p>
</td>
</tr>
<tr id="row2333184013376"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p123338404377"><a name="p123338404377"></a><a name="p123338404377"></a>file</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p633344016371"><a name="p633344016371"></a><a name="p633344016371"></a>Path of the file that contains multiple query statements</p>
</td>
</tr>
<tr id="row167521385392"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p97521538193914"><a name="p97521538193914"></a><a name="p97521538193914"></a>db-host</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1775223813916"><a name="p1775223813916"></a><a name="p1775223813916"></a>(Optional) Database host ID</p>
</td>
</tr>
<tr id="row514364417396"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p814364412392"><a name="p814364412392"></a><a name="p814364412392"></a>db-user</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p17143244203914"><a name="p17143244203914"></a><a name="p17143244203914"></a>(Optional) Database user name</p>
</td>
</tr>
<tr id="row7406202412015"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p44063240020"><a name="p44063240020"></a><a name="p44063240020"></a>schema</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1840632416018"><a name="p1840632416018"></a><a name="p1840632416018"></a>(Optional, public schema) Schema</p>
</td>
</tr>
</tbody>
</table>

## Troubleshooting<a name="EN-US_TOPIC_0000001311576152"></a>

- If the SQL statement cannot be rewritten, check whether the SQL statement complies with the rewriting rule or whether the SQL syntax is correct.
