# SQL Firewall Capability

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:28:12.111Z pushedAt=2026-09-22T11:12:32.703Z -->

## Availability<a name="section14707931165614"></a>

This feature has been available since openGauss 7.0.0-RC2.

## Feature Overview<a name="section43398242"></a>

This feature limits the execution concurrency of specified SQL statements by configuring SQL firewall rules, ensuring service stability and robustness.

## Customer Benefits<a name="section55039858"></a>

In production environments, the following scenarios may occur: 1. The concurrency of a certain type of SQL rises sharply, possibly due to abnormal calls; 2. Unoptimized SQL. In these scenarios, SQL consumes a large amount of resources during execution, affecting the execution of other SQL statements. With this feature, you can limit the execution concurrency of specified SQL statements to ensure service stability and robustness.

## Feature Description<a name="section25596675"></a>

This feature configures SQL firewall rules through system tables and system functions. When a business SQL statement is executed, the system checks whether it matches a SQL firewall rule. If it matches, the statement is intercepted and an error is reported; otherwise, execution continues.

## Feature Enhancements<a name="section29043486"></a>

None.

## Feature Constraints<a name="section27741012910"></a>

- This feature requires the `enable_sql_limit` parameter to be enabled.

- Cursors, stored procedures, multi-statement, and trigger scenarios are not supported.

- SQL statements involved in driver connections (for example, select name,setting from `pg_settings` where name in ('connection_info')) cannot be restricted.

- The activation of SQL firewall rules on the standby node depends on xlog synchronization. If too many xlog logs accumulate on the standby node, the effectiveness of SQL firewall rules on the standby node may be delayed.

- SQL firewall rules affect business performance. The more SQL firewall rules there are, the longer the rule matching takes and the greater the impact on business performance. Therefore, keep only the necessary SQL firewall rules in use.

## Dependencies<a name="section57771982"></a>

None.

## Basic Principles<a name="section8406643144717"></a>

SQL firewall rules are added, modified, deleted, and queried through system functions. When configuring a SQL firewall rule, you can specify either `unique_sql_id` or a keyword. When a business SQL statement is executed, its `unique_sql_id` can be obtained after the analyze and rewrite stages. For a rule that specifies `unique_sql_id`, the system directly checks whether the `unique_sql_id` matches. For a rule that specifies a keyword, the system matches the SQL statement by the keyword. If a matching rule is found, the system checks whether the current concurrency exceeds the concurrency configured in the rule. If it does, the statement is intercepted and an error is reported; otherwise, execution continues.

## Usage Scenarios<a name="section8406643144719"></a>

When a business needs to limit the concurrency of specified SQL execution, this feature can be used for configuration.

## Usage Guide<a name="section8406643144718"></a>

See [SQL Firewall System Functions](../sql_reference/sql_firewall_system_functions.md).

1. Add a SQL firewall rule

```sql
openGauss=# select gs_create_sql_limit('query_1','sqlid',0,0,'','','{3466980236}','{db1}','{usr1}');
 gs_create_sql_limit
--------------------
                  1
(1 row)

openGauss=# select gs_create_sql_limit('rule_keywords','select',0,0,'now()','','{select,count,from,test,where,i,>,and,i,<}','','');
 gs_create_sql_limit
--------------------
                  2
(1 row)
```

2. Modify a SQL firewall rule

```sql
openGauss=# select gs_update_sql_limit(1,'sqlid',0,100,'','','{3466980236}','{db1}','{usr1}');
 gs_update_sql_limit
--------------------
                  1
(1 row)

openGauss=# select gs_update_sql_limit(2,'select',0,100,'','','{select,count,from,test,where,i,>,and,i,<}','','');
 gs_update_sql_limit
--------------------
                  2
(1 row)
```

3. Query SQL firewall rules

Query a specified rule ID

```sql
openGauss=# select * from gs_select_sql_limit(1);
 limit_id | is_valid | work_node | max_concurrency | hit_count | reject_count
----------+----------+-----------+-----------------+-----------+-------------
        1 | t        | 0         |             100 |         0 |            0
(1 row)
```

Query all rules

```sql
openGauss=# select * from gs_select_sql_limit();
 limit_id | is_valid | work_node | max_concurrency | hit_count | reject_count
----------+----------+-----------+-----------------+-----------+-------------
        1 | t        | 0         |             100 |         0 |            0
        2 | t        | 0         |             100 |         0 |            0
(2 rows)
```

4. Delete a SQL firewall rule

```sql
openGauss=# select gs_delete_sql_limit(1);
 gs_delete_sql_limit
---------------------
                  1
(1 row)

openGauss=# select gs_delete_sql_limit(2);
 gs_delete_sql_limit
---------------------
                  2
(1 row)
```
