# EXPLAIN<a name="EN-US_TOPIC_0242370627"></a>

## Function<a name="en-us_topic_0237122163_en-us_topic_0059777774_sd22ce4e4c8c14244afb6492e84f92d80"></a>

**EXPLAIN**  shows the execution plan of an SQL statement.

The execution plan shows how the tables referenced by the statement will be scanned - by plain sequential scan, index scan, etc. - and if multiple tables are referenced, what join algorithms will be used to bring together the required rows from each input table.

The most critical part of the display is the estimated statement execution cost, which is the planner's guess at how long it will take to run the statement.

The  **ANALYZE**  option causes the statement to be actually executed, not only planned. The total elapsed time expended within each plan node \(in milliseconds\) and total number of rows it actually returned are added to the display. This is useful for seeing whether the planner's estimates are close to reality.

## Precautions<a name="en-us_topic_0237122163_en-us_topic_0059777774_s9667906bf0d748b38b576a8e40549816"></a>

- The statement is actually executed when the  **ANALYZE**  option is used. If you wish to use  **EXPLAIN ANALYZE**  on an  **INSERT**,  **UPDATE**,  **DELETE**,  **CREATE TABLE AS**, or  **EXECUTE**  statement without letting the statement affect your data, use this approach:


```
START TRANSACTION;
EXPLAIN ANALYZE ...;
ROLLBACK;
```

- The statement is actually executed when the  **ANALYZE**  option is used.The **DETAIL**, **NODES** and **NUM_NODES** are the parameters which can be used only in distributed mode. Therefore,they are forbidden in the single node mode. If you use these parameters in the single node mode, the error is as follows:

  ```
  postgres=# create table student(id int, name char(20));
  CREATE TABLEpostgres=# explain (analyze,detail true)insert into student values(5,'a'),(6,'b');
  ERROR:  unrecognized EXPLAIN option "detail"
  postgres=# explain (analyze,node true)insert into student values(5,'a'),(6,'b');
  ERROR:  unrecognized EXPLAIN option "nodes"
  postgres=# explain (analyze,num_nodes true)insert into student values(5,'a'),(6,'b');
  ERROR:  unrecognized EXPLAIN option "num_nodes"
  ```

  

## Syntax<a name="en-us_topic_0237122163_en-us_topic_0059777774_sfa16ba6ad51c455aa79e9602a5998838"></a>

-   Display the execution plan of an SQL statement, which supports multiple options and has no requirements for the order of options.

    ```
    EXPLAIN [ (  option  [, ...] )  ] statement;
    ```

    The syntax of the  **option**  clause is as follows:

    ```
    ANALYZE [ boolean ] |
        ANALYSE [ boolean ] |
        VERBOSE [ boolean ] |
        COSTS [ boolean ] |
        CPU [ boolean ] |
        DETAIL [ boolean ] |
        NODES [ boolean ] |
        NUM_NODES [ boolean ] |
        BUFFERS [ boolean ] |
        TIMING [ boolean ] |
        PLAN [ boolean ] |
        FORMAT { TEXT | XML | JSON | YAML }
    ```

-   Display the execution plan of an SQL statement, where options are in order.

    ```
    EXPLAIN  { [  { ANALYZE  | ANALYSE  }  ] [ VERBOSE  ]  | PERFORMANCE  } statement;
    ```


## Parameter Description<a name="en-us_topic_0237122163_en-us_topic_0059777774_se66550d2d643408ebe3189e751499cd5"></a>

-   **statement**

    Specifies the SQL statement to explain.

-   **ANALYZE boolean | ANALYSE boolean**

    Specifies whether to display actual run times and other statistics.

    Value range:

    -   **TRUE**  \(default\): displays them.
    -   **FALSE**: does not display them.

-   **VERBOSE boolean**

    Specifies whether to display additional information regarding the plan.

    Value range:

    -   **TRUE**  \(default\): displays them.
    -   **FALSE**: does not display them.

-   **COSTS boolean**

    Specifies whether to display the estimated total cost of each plan node, estimated number of rows, estimated width of each row.

    Value range:

    -   **TRUE**  \(default\): displays them.
    -   **FALSE**: does not display them.

-   **CPU boolean**

    Specifies whether to display CPU usage.

    Value range:

    -   **TRUE**  \(default\): displays it.
    -   **FALSE**: does not display it.

-   **DETAIL boolean**

    Displays information about database nodes.

    Value range:

    -   **TRUE**  \(default value\): displays it.
    -   **FALSE**: does not display it.

-   **NODES boolean**

    Specifies whether to display information about the nodes executed by query.

    Value range:

    -   **TRUE**  \(default\): displays it.
    -   **FALSE**: does not display it.

-   **NUM\_NODES boolean**

    Specifies whether to display the number of executing nodes.

    Value range:

    -   **TRUE**  \(default value\): displays it.
    -   **FALSE**: does not display it.

-   **BUFFERS boolean**

    Specifies whether to display buffer usage.

    Value range:

    -   **TRUE**  \(default\): displays it.
    -   **FALSE**: does not display it.

-   **TIMING boolean**

    Specifies whether to display the actual startup time and time spent on the output node.

    Value range:

    -   **TRUE**  \(default\): displays them.
    -   **FALSE**: does not display them.

-   **PLAN**

    Specifies whether to store the execution plan in  **PLAN\_TABLE**. If this parameter is set to  **on**, the execution plan is stored in  **PLAN\_TABLE**  and not displayed on the screen. Therefore, this parameter cannot be used together with other parameters when it is set to  **on**.

    Value range:

    -   **ON**  \(default\): The execution plan is stored in  **PLAN\_TABLE**  and not printed on the screen. If the plan is stored successfully, "EXPLAIN SUCCESS" is returned.
    -   **OFF**: The execution plan is not stored in  **PLAN\_TABLE**  but is printed on the screen.

-   **FORMAT**

    Specifies the output format.

    Value range:  **TEXT**,  **XML**,  **JSON**, and  **YAML**

    Default value:  **TEXT**

-   **PERFORMANCE**

    Prints all relevant information in execution.


## Examples<a name="en-us_topic_0237122163_en-us_topic_0059777774_s7175356f914d4ca1954f9c87c4b1e349"></a>

```
-- Create the tpcds.customer_address_p1 table.
postgres=# CREATE TABLE tpcds.customer_address_p1 AS TABLE tpcds.customer_address;

-- Change the value of explain_perf_mode to normal.
postgres=# SET explain_perf_mode=normal;

-- Display an execution plan for simple queries in the table.
postgres=# EXPLAIN SELECT * FROM tpcds.customer_address_p1;
QUERY PLAN
--------------------------------------------------
Data Node Scan  (cost=0.00..0.00 rows=0 width=0)
Node/s: All dbnodes
(2 rows)

-- Generate an execution plan in JSON format (with explain_perf_mode being normal).
postgres=# EXPLAIN(FORMAT JSON) SELECT * FROM tpcds.customer_address_p1;
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

-- If there is an index and we use a query with an indexable WHERE condition, EXPLAIN might show a different plan.
postgres=# EXPLAIN SELECT * FROM tpcds.customer_address_p1 WHERE ca_address_sk=10000;
QUERY PLAN
--------------------------------------------------
Data Node Scan  (cost=0.00..0.00 rows=0 width=0)
Node/s: dn_6005_6006
(2 rows)

-- Generate an execution plan in YAML format (with explain_perf_mode being normal).
postgres=# EXPLAIN(FORMAT YAML) SELECT * FROM tpcds.customer_address_p1 WHERE ca_address_sk=10000;
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

-- Here is an example of a query plan with cost estimates suppressed:
postgres=# EXPLAIN(COSTS FALSE)SELECT * FROM tpcds.customer_address_p1 WHERE ca_address_sk=10000;
       QUERY PLAN       
------------------------
 Data Node Scan
   Node/s: dn_6005_6006
(2 rows)

-- Here is an example of a query plan for a query using an aggregate function:
postgres=# EXPLAIN SELECT SUM(ca_address_sk) FROM tpcds.customer_address_p1 WHERE ca_address_sk<10000;
                                      QUERY PLAN                                       
---------------------------------------------------------------------------------------
 Aggregate  (cost=18.19..14.32 rows=1 width=4)
   ->  Streaming (type: GATHER)  (cost=18.19..14.32 rows=3 width=4)
         Node/s: All dbnodes
         ->  Aggregate  (cost=14.19..14.20 rows=3 width=4)
               ->  Seq Scan on customer_address_p1  (cost=0.00..14.18 rows=10 width=4)
                     Filter: (ca_address_sk < 10000)
(6 rows)

-- Delete the tpcds.customer_address_p1 table.
postgres=# DROP TABLE tpcds.customer_address_p1;
```

## Helpful Links<a name="en-us_topic_0237122163_en-us_topic_0059777774_scfac1ca9cbb74e3d891c918580e6b393"></a>

[ANALYZE | ANALYSE](analyze-analyse.md)

