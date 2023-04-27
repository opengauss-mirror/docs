# SQL PATCH<a name="EN-US_TOPIC_0000001266435066"></>

## Availability<a name="section1964504520318"></a>

This feature is available since openGauss 3.0.0.

## Introduction<a name="section1167555239"></a>

SQL PATCH adjusts the query execution plan without directly modifying users' service statements. If the execution plan or execution mode of a query statement does not meet the expectation, you can create a query patch and use hints to optimize the query plan or handle errors for specific statements by short-circuiting.

## Benefits<a name="section1839714319416"></a>

If performance problems occur due to poor query plans or services are unavailable due to internal system errors, you can invoke O&M functions in the database to optimize specific scenarios or report errors in advance to avoid more serious problems and greatly reduce O&M costs.

## Description<a name="section1744178185110"></a>

SQL PATCH is designed for database administrators (DBAs), O&M personnel, and other roles who need to optimize SQL statements. If performance problems caused by poor plans of service statements are identified through other O&M views or fault locating methods, you can create an SQL patch to optimize service statements based on hints. Currently, the following hints are supported: number of rows, scanning mode, join mode, join sequence, PBE custom/generic plan selection, statement-level parameter setting, and parameterized path. In addition, in case that services are unavailable due to internal system errors that are triggered by specific statements, you can create SQL patches to rectify single-point failures without changing service statements. In this way, errors can be reported in advance to avoid greater loss.

SQL PATCH is implemented based on the unique SQL ID. Therefore, to use SQL PATCH, related O&M parameters (for details, see [Feature Constraints](#section865112655119)) must be enabled for the SQL patch to take effect. The unique SQL ID can be obtained from both the WDR and slow SQL view. You must specify the unique SQL ID when creating an SQL patch. The following provides a simple example.

Scenario 1: Use SQL PATCH to optimize specific statements based on hints.

```
openGauss=# set track_stmt_stat_level = 'L1,L1'; -- Enable full SQL statistics.
SET
openGauss=# select * from hint_t1 t1 where t1.a = 1; -- Execute the SQL statement.
 a | b | c
---+---+---
 1 | 1 | 1
(1 row)
openGauss=# select unique_query_id, query, query_plan from dbe_perf.statement_history where query like '%hint_t1%'; -- Obtain the query plan and unique SQL ID.
-[ RECORD 1 ]---+----------------------------------------------------------------------------------------------
unique_query_id | 2578396627
query           | select * from hint_t1 t1 where t1.a = ?;
query_plan      | Datanode Name: sgnode
                | Bitmap Heap Scan on hint_t1 t1  (cost=4.33..15.70 rows=10 p-time=0 p-rows=0 width=12)
                |   Recheck Cond: (a = '***')
                |   ->  Bitmap Index Scan on hint_t1_a_idx  (cost=0.00..4.33 rows=10 p-time=0 p-rows=0 width=0)
                |         Index Cond: (a = '***')
                |
                |
openGauss=# select * from dbe_sql_util.create_hint_sql_patch('patch1', 2578396627, 'indexscan(t1)'); -- Specify a hint patch for the specified unique SQL ID.
-[ RECORD 1 ]---------+--
create_hint_sql_patch | t
openGauss=# explain select * from hint_t1 t1 where t1.a = 1; -- Check whether the hint takes effect.
NOTICE:  Plan influenced by SQL hint patch
                                    QUERY PLAN
-----------------------------------------------------------------------------------
 [Bypass]
 Index Scan using hint_t1_a_idx on hint_t1 t1  (cost=0.00..32.43 rows=10 width=12)
   Index Cond: (a = 1)
(3 rows)
openGauss=# select * from hint_t1 t1 where t1.a = 1; -- Execute the statement again.
 a | b | c
---+---+---
 1 | 1 | 1
(1 row)
openGauss=# select unique_query_id, query, query_plan from dbe_perf.statement_history where query like '%hint_t1%'; -- The query plan has been changed.
-[ RECORD 1 ]---+--------------------------------------------------------------------------------------------------
unique_query_id | 2578396627
query           | select * from hint_t1 t1 where t1.a = ?;
query_plan      | Datanode Name: sgnode
                | Bitmap Heap Scan on hint_t1 t1  (cost=4.33..15.70 rows=10 p-time=0 p-rows=0 width=12)
                |   Recheck Cond: (a = '***')
                |   ->  Bitmap Index Scan on hint_t1_a_idx  (cost=0.00..4.33 rows=10 p-time=0 p-rows=0 width=0)
                |         Index Cond: (a = '***')
                |
                |
-[ RECORD 2 ]---+--------------------------------------------------------------------------------------------------
unique_query_id | 2578396627
query           | select * from hint_t1 t1 where t1.a = ?;
query_plan      | Datanode Name: sgnode
                | Index Scan using hint_t1_a_idx on hint_t1 t1  (cost=0.00..8.27 rows=1 p-time=0 p-rows=0 width=12)
                |   Index Cond: (a = '***')
                |
                |
```

Scenario 2: Run the SQL PATCH command to report an error for a specific statement in advance.

```
openGauss=# select * from dbe_sql_util.drop_sql_patch('patch1'); -- Delete patch 1.
 drop_sql_patch
----------------
 t
(1 row)
openGauss=# select * from dbe_sql_util.create_abort_sql_patch('patch2', 2578396627); -- Create an abort patch for the statement of the unique SQL ID.
 create_abort_sql_patch
------------------------
 t
(1 row)

openGauss=# select * from hint_t1 t1 where t1.a = 1; -- An error is reported in advance when the statement is executed again.
ERROR:  Statement 2578396627 canceled by abort patch patch2
```

## Enhancements<a name="section35315526014"></a>

None

## Constraints<a name="section865112655119"></a>

1.  Patches can be created only by unique SQL ID. If unique SQL IDs conflict, SQL patches that are used for hint-based optimization may affect performance but do not affect semantic correctness.
2.  Only hints that do not change SQL semantics can be used as patches. SQL rewriting is not supported.
3.  This tool is not applicable to logical backup and restoration.
4.  The patch validity cannot be verified during patch creation. If the patch hint has syntax or semantic errors, the query execution is not affected.
5.  Only the initial user, O&M administrator, monitoring administrator, and system administrator have the permission to perform this operation.
6.  Patches are not shared between databases. When creating SQL patches, you need to connect to the target database.
7.  In the centralized deployment scenario where the standby node is readable, you must specify the primary node to run the SQL PATCH command to create, modify, or delete functions and the standby node to report errors.
8.  There is a delay in synchronizing an SQL patch to the standby node. The patch takes effect after the standby node replays related logs.
9.  This function does not take effect for SQL statements in stored procedures because no unique SQL ID is generated for statements in stored procedures.
10. It is not recommended that the abort patch be used in the database for a long time. It should be used only as a workaround. If the database service is unavailable due to a kernel fault triggered by a specific statement, you must rectify the service fault or upgrade the kernel as soon as possible. After the upgrade, the method of generating unique SQL IDs may change. Therefore, the workaround may become invalid.
11. Currently, except DML statements, unique SQL IDs of SQL statements (such as CREATE TABLE) are generated by hashing the statement text. Therefore, SQL PATCH is sensitive to uppercase and lowercase letters, spaces, and line breaks. That is, even statements of different texts are semantically relative, you still need to create different SQL patches for them. For DML operations, SQL PATCH can take effect for the same statement with different input parameters, regardless of uppercase letters, lowercase letters, and spaces.

## Dependencies<a name="section15876411599"></a>

This feature depends on the real-time resource monitoring function. To use this feature, set the **enable\_resource\_track** parameter to **on** and set **instr\_unique\_sql\_count** to a value greater than 0. For different statements, if the generated unique SQL IDs conflict, the SQL PATCH statement incorrectly hits other statements that are not expected. Compared with hint patches that are used for optimization, abort patches have more side effects and should be used with caution.
