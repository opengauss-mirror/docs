# Assignment Statements<a name="EN-US_TOPIC_0245374612"></a>

## Syntax<a name="en-us_topic_0237122222_en-us_topic_0059778597_s0d14c5a042e2478fa57514f056522738"></a>

[Figure 1](#en-us_topic_0237122222_en-us_topic_0059778597_f1087f61f4ec24addbb3b79a2ccf21917)  shows the syntax diagram for assigning a value to a variable.

**Figure  1**  assignment\_value::=<a name="en-us_topic_0237122222_en-us_topic_0059778597_f1087f61f4ec24addbb3b79a2ccf21917"></a>  
![](figures/assignment_value.png "assignment_value")

The above syntax diagram is explained as follows:

-   **variable\_name**  indicates the name of a variable.
-   **value**  can be a value or an expression. The type of  **value**  must be compatible with the type of  **variable\_name**.

## Example<a name="en-us_topic_0237122222_en-us_topic_0059778597_s81aa6674faef4f409c3f7105a8e396ec"></a>

```
postgres=# DECLARE
    emp_id  INTEGER := 7788; --Assignment
BEGIN
    emp_id := 5; --Assignment
    emp_id := 5*7784;
END;
/
```

