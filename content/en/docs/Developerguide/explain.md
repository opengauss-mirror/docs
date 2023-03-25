# EXPLAIN<a name="EN-US_TOPIC_0289900742"></a>

## Function<a name="en-us_topic_0283136728_en-us_topic_0237122163_en-us_topic_0059777774_sd22ce4e4c8c14244afb6492e84f92d80"></a>

**EXPLAIN**  shows the execution plan of an SQL statement.

The execution plan shows how the tables referenced by the statement will be scanned - by plain sequential scan, index scan, etc. - and if multiple tables are referenced, what join algorithms will be used to bring together the required rows from each input table.

The most critical part of the display is the estimated statement execution cost, which is the planner's guess at how long it will take to run the statement.

The  **ANALYZE**  option causes the statement to be actually executed, not only planned. The total elapsed time expended within each plan node \(in milliseconds\) and total number of rows it actually returned are added to the display. This is useful for seeing whether the planner's estimates are close to reality.

## Precautions<a name="en-us_topic_0283136728_en-us_topic_0237122163_en-us_topic_0059777774_s9667906bf0d748b38b576a8e40549816"></a>

-   The statement is actually executed when the  **ANALYZE**  option is used. If you want to use  **EXPLAIN**  to analyze  **INSERT**,  **UPDATE**,  **DELETE**,  **CREATE TABLE AS**, or  **EXECUTE**  statement without letting the statement affect your data, use this approach:

    ```
    START TRANSACTION;
    EXPLAIN ANALYZE ...;
    ROLLBACK;
    ```

-   The  **DETAIL**,  **NODES**, and  **NUM\_NODES**  parameters are disabled in standalone mode. They are available only in distributed mode. If the parameters are used, the following error is reported:

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
    EXPLAIN [ (  option  [, ...] )  ] statement;
    ```

    The syntax of the  **option**  clause is as follows:

    ```
    ANALYZE [ boolean ] |
        ANALYSE [ boolean ] |
        VERBOSE [ boolean ] |
        COSTS [ boolean ] |
        CPU [ boolean ] |
        DETAIL [ boolean ] |)
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


## Parameter Description<a name="en-us_topic_0283136728_en-us_topic_0237122163_en-us_topic_0059777774_se66550d2d643408ebe3189e751499cd5"></a>

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

    -   **TRUE**  \(default\): displays it.
    -   **FALSE**: does not display it.

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

    -   **TRUE**  \(default\): displays it.
    -   **FALSE**: does not display it.

-   **NODES boolean** 

    Specifies whether to display information about the nodes executed by query.

    Value range:

    -   **TRUE**  \(default\): displays it.
    -   **FALSE**: does not display it.

-   **NUM\_NODES boolean** 

    Specifies whether to display the number of executing nodes.

    Value range:

    -   **TRUE**  \(default\): displays it.
    -   **FALSE**: does not display it.

-   **BUFFERS boolean**

    Specifies whether to display buffer usage.

    Value range:

    -   **TRUE**: displays it.
    -   **FALSE**  \(default\): does not display it.

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


## Examples<a name="en-us_topic_0283136728_en-us_topic_0237122163_en-us_topic_0059777774_s7175356f914d4ca1954f9c87c4b1e349"></a>

```
-- 1. Create a table.
openGauss=# create table test_t(c1 int, c2 varchar(30));
CREATE TABLE

-- 2. View the execution plan of the SQL statement.
openGauss=# explain select * from test_t;
                        QUERY PLAN
----------------------------------------------------------
 Seq Scan on test_t  (cost=0.00..17.29 rows=729 width=82)
(1 row)

-- 3. (Optional) Specify the output format when querying a plan.
-- Note: The JSON format is supported only when explain_perf_mode is set to normal.
openGauss=# SET explain_perf_mode=normal;
SET
openGauss=# explain (format json) select * from test_t;
            QUERY PLAN
----------------------------------
 [                               +
   {                             +
     "Plan": {                   +
       "Node Type": "Seq Scan",  +
       "Relation Name": "test_t",+
       "Alias": "test_t",        +
       "Startup Cost": 0.00,     +
       "Total Cost": 17.29,      +
       "Plan Rows": 729,         +
       "Plan Width": 82          +
     }                           +
   }                             +
 ]
(1 row)

-- 4. If the column of the WHERE clause in a query has an index, different execution plans may be displayed when the conditions or data are different.
openGauss=# create index idx_test_t_c1 on test_t(c1);
CREATE INDEX
openGauss=# insert into test_t values(generate_series(1, 200), 'hello openGauss');
INSERT 0 200
openGauss=# explain select c1, c2 from test_t where c1=100;
                                 QUERY PLAN
----------------------------------------------------------------------------
 Bitmap Heap Scan on test_t  (cost=4.28..12.74 rows=4 width=82)
   Recheck Cond: (c1 = 100)
   ->  Bitmap Index Scan on idx_test_t_c1  (cost=0.00..4.28 rows=4 width=0)
         Index Cond: (c1 = 100)
(4 rows)

-- 5. (Optional) Use the costs option to specify whether to display the cost.
openGauss=# explain (costs false) select * from test_t where c1=100;
                QUERY PLAN
------------------------------------------
 Bitmap Heap Scan on test_t
   Recheck Cond: (c1 = 100)
   ->  Bitmap Index Scan on idx_test_t_c1
         Index Cond: (c1 = 100)
(4 rows)

```

## Helpful Links<a name="en-us_topic_0283136728_en-us_topic_0237122163_en-us_topic_0059777774_scfac1ca9cbb74e3d891c918580e6b393"></a>

[ANALYZE | ANALYSE](analyze-analyse.md)

