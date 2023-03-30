# Branch Statements<a name="EN-US_TOPIC_0289899970"></a>

## Syntax<a name="en-us_topic_0283137347_en-us_topic_0237122235_en-us_topic_0059779327_sa0d157976d6d4848ae582a3adc20e356"></a>

[Figure 1](#en-us_topic_0283137347_en-us_topic_0237122235_en-us_topic_0059779327_fe2376535378e44c78c4e70078d0fb779)  shows the syntax diagram for a branch statement.

**Figure  1**  case\_when::=<a name="en-us_topic_0283137347_en-us_topic_0237122235_en-us_topic_0059779327_fe2376535378e44c78c4e70078d0fb779"></a>  
![](figures/case_when.png "case_when")

[Figure 2](#en-us_topic_0283137347_en-us_topic_0237122235_en-us_topic_0059779327_f0b6779d008024e8fb5c2267d8d3bff14)  shows the syntax diagram for  **when\_clause**.

**Figure  2**  when\_clause::=<a name="en-us_topic_0283137347_en-us_topic_0237122235_en-us_topic_0059779327_f0b6779d008024e8fb5c2267d8d3bff14"></a>  
![](figures/when_clause.png "when_clause")

Parameter description:

-   _case\_expression_: specifies the variable or expression.
-   _when\_expression_: specifies the constant or conditional expression.
-   _statement_: specifies the statement to be executed.

## Examples<a name="en-us_topic_0283137347_en-us_topic_0237122235_en-us_topic_0059779327_sfd9ddef81026494fbefef995f9ced557"></a>

```
CREATE OR REPLACE PROCEDURE proc_case_branch(pi_result in integer, pi_return out integer)
AS 
    BEGIN 
        CASE pi_result 
            WHEN 1 THEN 
                pi_return := 111; 
            WHEN 2 THEN 
                pi_return := 222; 
            WHEN 3 THEN 
                pi_return := 333; 
            WHEN 6 THEN 
                pi_return := 444; 
            WHEN 7 THEN 
                pi_return := 555; 
            WHEN 8 THEN 
                pi_return := 666; 
            WHEN 9 THEN 
                pi_return := 777; 
            WHEN 10 THEN 
                pi_return := 888; 
            ELSE 
                pi_return := 999; 
        END CASE; 
        raise info 'pi_return : %',pi_return ; 
END; 
/

CALL proc_case_branch(3,0);

-- Delete the stored procedure.
DROP PROCEDURE proc_case_branch;
```

