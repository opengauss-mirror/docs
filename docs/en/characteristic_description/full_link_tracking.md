# Full-Link Tracing

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:10:35.159Z pushedAt=2026-09-22T11:12:32.626Z -->

## Availability<a name="section147531742205517"></a>

This feature has been available since openGauss 7.0.0-RC2.

## Feature Overview<a name="section134931562564"></a>

Full-link tracking traces the related information of user SQL requests executed at different stages throughout the full database link, and presents it to users in a tree structure, helping developers trace SQL whose execution time exceeds the threshold and diagnose SQL performance bottlenecks.

## Customer Benefits<a name="section1407614175619"></a>

Full-link tracking provides the necessary information for diagnosing slow SQL. Users can diagnose the performance issues of specific slow SQL offline without reproducing them, helping users quickly and accurately identify internal component problems. The function interfaces make it convenient for users to collect slow SQL metrics and integrate with third-party platforms.

## Feature Description<a name="section8993113125610"></a>

On the primary node, full-link tracing provides a function query interface. It reuses the system table statement\_history and adds full-link trace information. From the interface, users can query the execution plan of a job and the related information executed at different stages. Combined with other existing slow SQL metric fields, users can conveniently locate performance bottlenecks for further analysis and optimization.

On the standby node, the original slow SQL recording method for standby nodes is reused, and full-link trace information is added. That is, the standby node cannot write performance diagnostic data to the table statement\_history, so the standby node uses a new method to record data and provides a function query interface. The various types of information that users query from the interface are exactly the same as those in the table statement\_history on the primary node.

## Feature Enhancements<a name="section1548515520568"></a>

Enhanced the related information about SQL execution at different stages.

```

Primary: View the trace information of SQL statement execution on the current node
gsql> select statement_trace_decode(trace) from statement_history;;
Example:
openGauss=# select statement_trace_decode(trace) from statement_history;
                                                     statement_trace_decode
--------------------------------------------------------------------------------------------------------------------------------
 ├─Select query                                     7424 (us)    2025-07-19 14:52:01.863055+08   2025-07-19 14:52:01.870479+08 +
     ├─ExecutorRun                                  7188 (us)    2025-07-19 14:52:01.863272+08   2025-07-19 14:52:01.87046+08  +
         ├─FunctionScan                             7169 (us)    2025-07-19 14:52:01.863282+08   2025-07-19 14:52:01.870451+08 +
                     
Standby: View the trace information of SQL statement execution on the current node
gsql> select statement_trace_decode(trace) from dbe_perf.standby_statement_history(only_slow, start_time, end_time);
Example:
openGauss=# select statement_trace_decode(trace) from dbe_perf.standby_statement_history(true);
                                                    statement_trace_decode
-------------------------------------------------------------------------------------------------------------------------------
 ├─Select query                                   100796 (us)    2025-07-19 15:02:10.007698+08   2025-07-19 15:02:10.108494+08+
     ├─ExecutorRun                                100574 (us)    2025-07-19 15:02:10.007874+08   2025-07-19 15:02:10.108448+08+
         ├─FunctionScan                           100500 (us)    2025-07-19 15:02:10.007883+08   2025-07-19 15:02:10.108383+08+
```

## Feature Constraints<a name="section1956417145819"></a>

+ The current SQL tracing information is based on normal execution logic. For SQL statements that fail to execute, their tracing information does not provide accurate reference value.
+ The system table (`statement_history`) is an unlogged table. Restarting a node or process causes the data on that node to be lost.
+ The number of SQL statements to be collected is set through a GUC parameter. If the threshold is exceeded, the execution information of new SQL statements is not collected.
+ The maximum number of bytes of full-link detailed information collected for a single SQL statement is set through a GUC parameter. If the threshold is exceeded, new full-link detailed information is not collected. If the threshold is too small (cannot hold one span), the full-link detailed information is not collected.
+ The SQL information being executed by users is refreshed asynchronously. Therefore, after a user query finishes executing, there is a short delay in querying the results of related views and functions.
+ The trace fields in the functions and views related to the `statement_history` table and in the standby node `dbe_perf.standby_statement_history` are in binary format. Use the corresponding function `pg\_catalog.statement\_trace\_decode\(trace\)`.
+ To query the statement_history table, switch to the postgres database. The data in other databases is empty.
+ To query the standby node `dbe_perf.standby_statement_history` function, switch to the postgres database. Queries in other databases will return a message indicating that it is unavailable.
+ The content of the statement_history table and the standby node `dbe_perf.standby_statement_history` function are controlled by `track_stmt_stat_level`, which defaults to 'OFF,L0'. The first part of the parameter represents Full SQL, and the second part represents slow SQL. For full-link information, it is recorded only when Full SQL is at level L1 or higher, or slow SQL is at level L1 or higher.

## Dependencies<a name="section15876411599"></a>

None.
