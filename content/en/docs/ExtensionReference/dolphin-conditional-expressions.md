# Conditional Expressions<a name="EN-US_TOPIC_0289899945"></a>

Compared with the original openGauss, Dolphin modifies the condition expressions as follows:
1. The IFNULL and IF expressions are added.

-   IFNULL

    It is equivalent to NVL. For the NVL syntax, see [Figure 7](#en-us_topic_0283136958_en-us_topic_0237122002_en-us_topic_0059777797_f69cd4e01dd6e4280b756eb98d3c77c91).

    **Figure 7** nvl::=<a name="en-us_topic_0283136958_en-us_topic_0237122002_en-us_topic_0059777797_f69cd4e01dd6e4280b756eb98d3c77c91"></a> 
    ![](figures/nvl.jpg "nvl")

    If the value of **value1** is **NULL**, the value of **value2** is returned. Otherwise, the value of **value1** is returned.

    Example:

    ```
    openGauss=# SELECT ifnull(null,1);
    ifnull 
    -------
     1
    (1 row)
    
    ```

    ```
    openGauss=# SELECT ifnull ('Hello World' ,1);
       ifnull
    -------------
     Hello World
    (1 row)
    ```

-   IF

    Only IF(expr1,expr2,expr3) is supported, which is equivalent to CASE WHEN expr1 THEN expr2 ELSE expr3 END.

    For the CASE syntax, see [Figure 1](#en-us_topic_0283136958_en-us_topic_0237122002_en-us_topic_0059777797_f6defc8307fd0434380b6ba22838ed5f1).

    **Figure 1** case::=<a name="en-us_topic_0283136958_en-us_topic_0237122002_en-us_topic_0059777797_f6defc8307fd0434380b6ba22838ed5f1"></a> 
    ![](figures/case.jpg "case")

    A **CASE** clause can be used in a valid expression. **condition** is an expression that returns a value of Boolean type.

    -   If the result is **true**, the result of the **CASE** expression is the required result.
    -   If the result is **false**, the following **WHEN** or **ELSE** clauses are processed in the same way.
    -   If every **WHEN condition** is **false**, the result of the expression is the result of the **ELSE** clause. If the **ELSE** clause is omitted and has no match condition, the result is **NULL**.

    Example:

    ```
    openGauss=# CREATE TABLE case_when_t1(CW_COL1 INT);
    
    openGauss=# INSERT INTO case_when_t1 VALUES (1), (2), (3);
    
    openGauss=# SELECT * FROM case_when_t1;
    cw_col1 
    ---------
     1
     2
     3
    (3 rows)
    
    openGauss=# SELECT CW_COL1, IF(CW_COL1=1, 'one', 'other') FROM case_when_t1 ORDER BY 1;
     cw_col1 | case  
    ---------+-------
           1 | one
           2 | other
           3 | other
    (3 rows)
    
    openGauss=# DROP TABLE case_when_t1;
    ```
