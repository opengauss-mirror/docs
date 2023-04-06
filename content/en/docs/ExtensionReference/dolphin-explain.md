# EXPLAIN<a name="EN-US_TOPIC_0289900742"></a>

## Function<a name="en-us_topic_0283136728_en-us_topic_0237122163_en-us_topic_0059777774_sd22ce4e4c8c14244afb6492e84f92d80"></a>

EXPLAIN and [DESCRIBE](dolphin-describe-table.md) are synonyms of each other. They can be used to view the structure of a specified table or the execution plan of a specified SQL statement.

For details about the syntax for viewing table structures, see the [DESCRIBE](dolphin-describe-table.md) syntax. The following describes how to view an execution plan.

The execution plan shows how the tables referenced by the SQL statement will be scanned, for example, by plain sequential scan or index scan. If multiple tables are referenced, what JOIN algorithms will be used to bring together the required rows from each input table.

The most critical part of the display is the estimated statement execution cost, which is the planner's guess at how long it will take to run the statement.

The **ANALYZE** option causes the statement to be executed, not only planned. Then actual runtime statistics are added to the display, including the total elapsed time expended within each plan node (in milliseconds) and the total number of rows it actually returned. This is useful to check whether the planner's estimates are close to reality.

## Precautions<a name="en-us_topic_0283136728_en-us_topic_0237122163_en-us_topic_0059777774_s9667906bf0d748b38b576a8e40549816"></a>

-   The statement is executed when the **ANALYZE** option is used. If you want to use **EXPLAIN** to analyze **INSERT**, **UPDATE**, **DELETE**, **CREATE TABLE AS**, or **EXECUTE** statement without letting the statement affect your data, use this approach:

    ```
    START TRANSACTION;
    EXPLAIN ANALYZE ...;
    ROLLBACK;
    ```

-   The **DETAIL**, **NODES**, and **NUM\_NODES** parameters are disabled in standalone mode. They are available only in distributed mode. If the parameters are used, the following error is reported:

    ```
    openGauss=# create table student(id int, name char(20));
    CREATE TABLE
    openGauss=# explain (nodes true) insert into student values(5,'a'),(6,'b');
    ERROR:  unrecognized EXPLAIN option "nodes"
    openGauss=# explain (num_nodes true) insert into student values(5,'a'),(6,'b');
    ERROR:  unrecognized EXPLAIN option "num_nodes"
    ```


## Syntax<a name="en-us_topic_0283136728_en-us_topic_0237122163_en-us_topic_0059777774_sfa16ba6ad51c455aa79e9602a5998838"></a>

-   Display the execution plan of an SQL statement, which supports multiple options and has no requirements for the order of options.

    ```
    {EXPLAIN | DESCRIBE | DESC} [ (  option  [, ...] )  ] statement;
    ```
    Or:
    ```
    {EXPLAIN | DESCRIBE | DESC} [FORMAT = format_name] statement;
    ```
    Or:
    ```
    {EXPLAIN | DESCRIBE | DESC} [EXTENDED] statement;
    ```
    {EXPLAIN | DESCRIBE | DESC} indicates that DESCRIBE, DESC, and EXPLAIN have the same effect.
    
    The syntax of the **option** clause is as follows:

    ```
    ANALYZE [ boolean ] |
        ANALYSE [ boolean ] |
        VERBOSE [ boolean ] |
        COSTS [ boolean ] |
        CPU [ boolean ] |
        DETAIL [ boolean ] | (Unavailable)
        NODES [ boolean ] | (Unavailable)
        NUM_NODES [ boolean ] | (Unavailable)
        BUFFERS [ boolean ] |
        TIMING [ boolean ] |
        PLAN [ boolean ] |
        FORMAT { TEXT | XML | JSON | YAML }
    ```

-   Display the execution plan of an SQL statement, where options are in order.

    ```
    {EXPLAIN | DESCRIBE | DESC} { [  { ANALYZE  | ANALYSE  }  ] [ VERBOSE  ]  | PERFORMANCE  } statement;
    ```


## Parameter Description<a name="en-us_topic_0283136728_en-us_topic_0237122163_en-us_topic_0059777774_se66550d2d643408ebe3189e751499cd5"></a>

-   **statement**

    Specifies the SQL statement to explain.

-   **ANALYZE boolean | ANALYSE boolean**

    Specifies whether to display actual run times and other statistics.

    Value range:

    -   **TRUE** (default): displays them.
    -   **FALSE**: No display.

-   **VERBOSE boolean**

    Specifies whether to display additional information regarding the plan.

    Value range:

    -   **TRUE** (default): displays it.
    -   **FALSE**: No display.

-   **COSTS boolean**

    Specifies whether to display the estimated total cost of each plan node, estimated number of rows, estimated width of each row.

    Value range:

    -   **TRUE** (default): displays them.
    -   **FALSE**: No display.

-   **CPU boolean**

    Specifies whether to display CPU usage.

    Value range:

    -   **TRUE** (default): displays it.
    -   **FALSE**: No display.

-   **DETAIL boolean** (Unavailable)

    Displays information about database nodes.

    Value range:

    -   **TRUE** (default): displays it.
    -   **FALSE**: No display.

-   **NODES boolean** (Unavailable)

    Specifies whether to display information about the nodes executed by query.

    Value range:

    -   **TRUE** (default): displays it.
    -   **FALSE**: No display.

-   **NUM\_NODES boolean** (Unavailable)

    Specifies whether to display the number of executing nodes.

    Value range:

    -   **TRUE** (default): displays it.
    -   **FALSE**: No display.

-   **BUFFERS boolean**

    Specifies whether to display buffer usage.

    Value range:

    -   **TRUE**: displays it.
    -   **FALSE** (default): No display.

-   **TIMING boolean**

    Specifies whether to display the actual startup time and time spent on the output node.

    Value range:

    -   **TRUE** (default): displays them.
    -   **FALSE**: No display.

-   **PLAN**

    Specifies whether to store the execution plan in **PLAN\_TABLE**. If this parameter is set to **on**, the execution plan is stored in **PLAN\_TABLE** and is not displayed on the screen. Therefore, this parameter cannot be used together with other parameters when it is set to **on**.

    Value range:

    -   **ON** (default): The execution plan is stored in **PLAN\_TABLE** and not printed on the screen. If the plan is stored successfully, "EXPLAIN SUCCESS" is returned.
    -   **OFF**: The execution plan is not stored in **PLAN\_TABLE** but is printed on the screen.

-   **FORMAT**

    Specifies the output format.

    Value range: **TEXT**, **XML**, **JSON**, and **YAML**.

    Default value: **TEXT**

-   **PERFORMANCE**

    Prints all relevant information in execution.

-   **format_name** 
    
    Specifies the output format.
  
    Value range: **JSON** or **TRADITIONAL**.

    Default value: **TRADITIONAL**

-   **EXTENDED**

    This parameter is optional and makes no difference.


## Examples<a name="en-us_topic_0283136728_en-us_topic_0237122163_en-us_topic_0059777774_s7175356f914d4ca1954f9c87c4b1e349"></a>

```
--Create the tpcds.customer_address_p1 table.
openGauss=# CREATE TABLE tpcds.customer_address_p1 AS TABLE tpcds.customer_address;

--Change the value of explain_perf_mode to normal.
openGauss=# SET explain_perf_mode=normal;

--Display an execution plan for simple queries in the table.
openGauss=# EXPLAIN SELECT * FROM tpcds.customer_address_p1;
QUERY PLAN
--------------------------------------------------
Data Node Scan  (cost=0.00..0.00 rows=0 width=0)
Node/s: All dbnodes
(2 rows)

--Generate an execution plan in JSON format (with explain_perf_mode being normal).
openGauss=# EXPLAIN(FORMAT JSON) SELECT * FROM tpcds.customer_address_p1;
              QUERY PLAN              
--------------------------------------
 [                                   +
   {                                 +
     "Plan": {                       +
       "Node Type": "Data Node Scan",+
       "Startup Cost": 0.00,         +
       "Total Cost": 0.00,           +
       "Plan Rows": 0,               +
       "Plan Width": 0,              +
       "Node/s": "All dbnodes"     +
     }                               +
   }                                 +
 ]
(1 row)

--If there is an index and we use a query with an indexable WHERE condition, EXPLAIN might show a different plan.
openGauss=# EXPLAIN SELECT * FROM tpcds.customer_address_p1 WHERE ca_address_sk=10000;
QUERY PLAN
--------------------------------------------------
Data Node Scan  (cost=0.00..0.00 rows=0 width=0)
Node/s: dn_6005_6006
(2 rows)

--Generate an execution plan in YAML format (with explain_perf_mode being normal).
openGauss=# EXPLAIN(FORMAT YAML) SELECT * FROM tpcds.customer_address_p1 WHERE ca_address_sk=10000;
           QUERY PLAN            
---------------------------------
 - Plan:                        +
     Node Type: "Data Node Scan"+
     Startup Cost: 0.00         +
     Total Cost: 0.00           +
     Plan Rows: 0               +
     Plan Width: 0              +
     Node/s: "dn_6005_6006"
(1 row)

--Here is an example of a query plan with cost estimates suppressed:
openGauss=# EXPLAIN(COSTS FALSE)SELECT * FROM tpcds.customer_address_p1 WHERE ca_address_sk=10000;
       QUERY PLAN       
------------------------
 Data Node Scan
   Node/s: dn_6005_6006
(2 rows)

--Here is an example of a query plan for a query using an aggregate function:
openGauss=# EXPLAIN SELECT SUM(ca_address_sk) FROM tpcds.customer_address_p1 WHERE ca_address_sk<10000;
                                      QUERY PLAN                                       
---------------------------------------------------------------------------------------
 Aggregate  (cost=18.19..14.32 rows=1 width=4)
   ->  Streaming (type: GATHER)  (cost=18.19..14.32 rows=3 width=4)
         Node/s: All dbnodes
         ->  Aggregate  (cost=14.19..14.20 rows=3 width=4)
               ->  Seq Scan on customer_address_p1  (cost=0.00..14.18 rows=10 width=4)
                     Filter: (ca_address_sk < 10000)
(6 rows)


--Create a level-2 partitioned table.
openGauss=# CREATE TABLE range_list
openGauss-# (
openGauss(#     month_code VARCHAR2 ( 30 ) NOT NULL ,
openGauss(#     dept_code  VARCHAR2 ( 30 ) NOT NULL ,
openGauss(#     user_no    VARCHAR2 ( 30 ) NOT NULL ,
openGauss(#     sales_amt  int
openGauss(# )
openGauss-# PARTITION BY RANGE (month_code) SUBPARTITION BY LIST (dept_code)
openGauss-# (
openGauss(#   PARTITION p_201901 VALUES LESS THAN( '201903' )
openGauss(#   (
openGauss(#     SUBPARTITION p_201901_a values ('1'),
openGauss(#     SUBPARTITION p_201901_b values ('2')
openGauss(#   ),
openGauss(#   PARTITION p_201902 VALUES LESS THAN( '201910' )
openGauss(#   (
openGauss(#     SUBPARTITION p_201902_a values ('1'),
openGauss(#     SUBPARTITION p_201902_b values ('2')
openGauss(#   )
openGauss(# );
CREATE TABLE

--Run a query statement containing a level-2 partitioned table.
--Iterations and Sub Iterations specifies the numbers of level-1 and level-2 partitions that are traversed, respectively.
--Selected Partitions specifies which level-1 partitions are actually scanned. Selected Subpartitions (p:s) indicates that s level-2 partitions under the pth level-1 partition are actually scanned. If all level-2 partitions under the level-1 partition are scanned, the value of s is ALL.
openGauss=# EXPLAIN SELECT * FROM range_list WHERE dept_code = '1';
                                  QUERY PLAN
-------------------------------------------------------------------------------
 Partition Iterator  (cost=0.00..13.81 rows=2 width=238)
   Iterations: 2, Sub Iterations: 2
   ->  Partitioned Seq Scan on range_list  (cost=0.00..13.81 rows=2 width=238)
         Filter: ((dept_code)::text = '1'::text)
         Selected Partitions:  1..2
         Selected Subpartitions:  1:1, 2:1
(6 rows)

--Delete the tpcds.customer_address_p1 table.
openGauss=# DROP TABLE tpcds.customer_address_p1;

```

## Helpful Links<a name="en-us_topic_0283136728_en-us_topic_0237122163_en-us_topic_0059777774_scfac1ca9cbb74e3d891c918580e6b393"></a>

[ANALYZE | ANALYSE](analyze-analyse.md), [DESCRIBE](dolphin-describe-table.md)
