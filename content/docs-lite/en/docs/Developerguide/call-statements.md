# Call Statements<a name="EN-US_TOPIC_0289899886"></a>

## Syntax<a name="en-us_topic_0283136925_en-us_topic_0237122223_en-us_topic_0059778001_sde66d89c567e4012bf160f6f6421d2af"></a>

[Figure 1](#en-us_topic_0283136925_en-us_topic_0237122223_en-us_topic_0059778001_fa4de2ab1dc7e4c04b4997c6238ee1861)  shows the syntax diagram for calling a clause.

**Figure  1**  call\_clause::=<a name="en-us_topic_0283136925_en-us_topic_0237122223_en-us_topic_0059778001_fa4de2ab1dc7e4c04b4997c6238ee1861"></a>  
![](figures/call_clause.png "call_clause")

The above syntax diagram is explained as follows:

-   **procedure\_name**  specifies the name of a stored procedure.
-   **parameter**  specifies the parameters for the stored procedure. You can set no parameter or multiple parameters.

## Examples<a name="en-us_topic_0283136925_en-us_topic_0237122223_en-us_topic_0059778001_scfc5c5fdac3e4a11a915ebac95b49f79"></a>

```
-- Create the stored procedure proc_staffs.
openGauss=# CREATE OR REPLACE PROCEDURE proc_staffs
(
section     NUMBER(6),
salary_sum out NUMBER(8,2),
staffs_count out INTEGER
)
IS
BEGIN
SELECT sum(salary), count(*) INTO salary_sum, staffs_count FROM hr.staffs where section_id = section;
END;
/

-- Invoke the stored procedure proc_return.
openGauss=# CALL proc_staffs(2,8,6);

-- Delete a stored procedure.
openGauss=# DROP PROCEDURE proc_staffs;

```

