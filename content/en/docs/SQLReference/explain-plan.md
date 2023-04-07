# EXPLAIN PLAN<a name="EN-US_TOPIC_0289900301"></a>

## Function<a name="en-us_topic_0283136849_en-us_topic_0237122164_section0601642305"></a>

**EXPLAIN PLAN**  saves information about an execution plan into the  **PLAN\_TABLE**  table. Different from the  **EXPLAIN**  statement,  **EXPLAIN PLAN**  only saves plan information and does not print information on the screen.

## Syntax<a name="en-us_topic_0283136849_en-us_topic_0237122164_en-us_topic_0165816825_section1531318315427"></a>

```
EXPLAIN PLAN
[ SET STATEMENT_ID = string ]
FOR statement ;
```

## Parameter Description<a name="en-us_topic_0283136849_en-us_topic_0237122164_en-us_topic_0165816825_section12263165913464"></a>

-   **PLAN**: saves plan information into  **PLAN\_TABLE**. If information is stored successfully, "EXPLAIN SUCCESS" is returned.
-   **STATEMENT\_ID**: tags each query. The tag information will be stored in  **PLAN\_TABLE**.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >If the  **EXPLAIN PLAN**  statement does not contain  **SET STATEMENT\_ID**,  **STATEMENT\_ID**  is empty by default. In addition, the value of  **STATEMENT\_ID**  cannot exceed 30 bytes. Otherwise, an error will be reported.


## Precautions<a name="en-us_topic_0283136849_en-us_topic_0237122164_en-us_topic_0165816825_section74641935135611"></a>

-   **EXPLAIN PLAN**  cannot be executed on a database node.
-   Plan information cannot be collected for SQL statements that failed to be executed.
-   Data in  **PLAN\_TABLE**  is in a session-level lifecycle. Sessions are isolated from users, and therefore users can only view the data of the current session and current user.

## Example 1<a name="en-us_topic_0283136849_en-us_topic_0237122164_en-us_topic_0165816825_section1128872085512"></a>

You can perform the following steps to collect execution plans of SQL statements by running  **EXPLAIN PLAN**:

1.  Run the  **EXPLAIN PLAN**  statement.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >After the  **EXPLAIN PLAN**  statement is executed, plan information is automatically stored in  **PLAN\_TABLE**.  **INSERT**,  **UPDATE**, and  **ANALYZE**  cannot be performed on  **PLAN\_TABLE**.
    >For details about  **PLAN\_TABLE**, see  [PLAN\_TABLE](../DatabaseReference/plan_table.md).

    ```
    explain plan set statement_id='TPCH-Q4' for
    select
    o_orderpriority,
    count(*) as order_count
    from
    orders
    where
    o_orderdate >= '1993-07-01'::date
    and o_orderdate < '1993-07-01'::date + interval '3 month'
    and exists (
    select
    *
    from
    lineitem
    where
    l_orderkey = o_orderkey
    and l_commitdate < l_receiptdate
    )
    group by
    o_orderpriority
    order by
    o_orderpriority;
    ```

2.  Query  **PLAN\_TABLE**.

    ```
    SELECT * FROM PLAN_TABLE;
    ```

    ![](figures/文档.png)

3.  Delete data from  **PLAN\_TABLE**.

    ```
    DELETE FROM PLAN_TABLE WHERE xxx;
    ```


