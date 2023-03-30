# Overview<a name="EN-US_TOPIC_0289900579"></a>

The SQL execution plan is a node tree, which displays detailed procedure when openGauss runs an SQL statement. A database operator indicates one step.

You can run the  **EXPLAIN**  command to view the execution plan generated for each query by an optimizer. The output of  **EXPLAIN**  has one row for each execution node, showing the basic node type and the cost estimation that the optimizer made for the execution of this node, as shown in  [Figure 1](#en-us_topic_0283137711_en-us_topic_0237121510_en-us_topic_0073548187_en-us_topic_0040046537_fig27100601101634).

**Figure  1**  SQL execution plan example<a name="en-us_topic_0283137711_en-us_topic_0237121510_en-us_topic_0073548187_en-us_topic_0040046537_fig27100601101634"></a>  
![](figures/sql-execution-plan-example.png "sql-execution-plan-example")

-   Nodes at the bottom level are scan nodes. They scan tables and return raw rows. The types of scan nodes \(sequential scans and index scans\) vary depending on the table access methods. Objects scanned by the bottom layer nodes may not be row-store data \(not directly read from a table\), such as  **VALUES**  clauses and functions that return rows, which have their own types of scan nodes.
-   If the query requires join, aggregation, sorting, or other operations on the raw rows, there will be other nodes above the scan nodes to perform these operations. In addition, there is more than one way to perform these operations, so different types of execution nodes may be displayed here.
-   The first row \(the upper-layer node\) estimates the total execution cost of the execution plan. Such an estimate indicates the value that the optimizer tries to minimize.

## Execution Plan Information<a name="en-us_topic_0283137711_en-us_topic_0237121510_en-us_topic_0073548187_section1708958594911"></a>

In addition to setting different display formats for an execution plan, you can use different  **EXPLAIN**  syntax to display execution plan information in detail. The following lists the common  **EXPLAIN**  syntax. For details about more  **EXPLAIN**  syntax, see  [EXPLAIN](en-us_topic_0289900742.md).

-   EXPLAIN  _statement_: only generates an execution plan and does not execute. The  _statement_  indicates SQL statements.
-   EXPLAIN ANALYZE  _statement_: generates and executes an execution plan, and displays the execution summary. Then actual execution time statistics are added to the display, including the total elapsed time expended within each plan node \(in milliseconds\) and the total number of rows it actually returned.
-   EXPLAIN PERFORMANCE  _statement_: generates and executes the execution plan, and displays all execution information.

To measure the run time cost of each node in the execution plan, the current execution of  **EXPLAIN ANALYZE**  or  **EXPLAIN PERFORMANCE**  adds profiling overhead to query execution. Running  **EXPLAIN ANALYZE**  or  **EXPLAIN PERFORMANCE**  on a query sometimes takes longer time than executing the query normally. The amount of overhead depends on the nature of the query, as well as the platform being used.

Therefore, if an SQL statement is not finished after being running for a long time, run the  **EXPLAIN**  statement to view the execution plan and then locate the fault. If the SQL statement has been properly executed, run the  **EXPLAIN ANALYZE**  or  **EXPLAIN PERFORMANCE**  statement to check the execution plan and information to locate the fault.

The  **EXPLAIN PERFORMANCE**  lightweight execution is consistent with  **EXPLAIN PERFORMANCE**  but greatly reduces the time spent on performance analysis.

