# Assignment Statements<a name="EN-US_TOPIC_0000001208458007"></a>

## Syntax<a name="en-us_topic_0283137492_en-us_topic_0237122222_en-us_topic_0059778597_s0d14c5a042e2478fa57514f056522738"></a>

[Figure 1](#en-us_topic_0283137492_en-us_topic_0237122222_en-us_topic_0059778597_f1087f61f4ec24addbb3b79a2ccf21917)  shows the syntax diagram for assigning a value to a variable.

**Figure  1**  assignment\_value::=<a name="en-us_topic_0283137492_en-us_topic_0237122222_en-us_topic_0059778597_f1087f61f4ec24addbb3b79a2ccf21917"></a>  
![](figures/assignment_value.png "assignment_value")

The above syntax diagram is explained as follows:

-   **variable\_name**  indicates the name of a variable.
-   **value**  can be a value or an expression. The type of  **value**  must be compatible with the type of  **variable\_name**.

## Examples<a name="en-us_topic_0283137492_en-us_topic_0237122222_en-us_topic_0059778597_s81aa6674faef4f409c3f7105a8e396ec"></a>

```
openGauss=# DECLARE
    emp_id  INTEGER := 7788; -- Assignment
BEGIN
    emp_id := 5; -- Assignment
    emp_id := 5*7784;
END;
/
```

## Nested Value Assignment<a name="section72764134216"></a>

[Figure 2](#fig178291445115118)  shows the syntax diagram for assigning a nested value to a variable.

**Figure  2**  nested\_assignment\_value::=<a name="fig178291445115118"></a>  
![](figures/nested_assignment_value.png "nested_assignment_value")

The syntax in  [Figure 2](#fig178291445115118)  is described as follows:

-   **variable\_name**: variable name
-   **col\_name**: column name
-   **subscript**: subscript, which is used for an array variable. The value can be a value or an expression and must be of the int type.
-   **value**: value or expression. The type of  **value**  must be compatible with the type of  **variable\_name**.

## Examples<a name="section15483143464214"></a>

```
openGauss=#CREATE TYPE o1 as (a int, b int);
openGauss=# DECLARE
    TYPE r1 is VARRAY(10) of o1;
    emp_id  r1;
BEGIN
    emp_id(1).a := 5;-- Assign a value.
    emp_id(1).b := 5*7784;
END;
/
```

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   In INTO mode, values can be assigned only to the columns at the first layer. Two-dimensional or above arrays are not supported.
>-   When a nested column value is referenced, if an array subscript exists, only one parenthesis can exist in the first three layers of columns. You are advised to use square brackets to reference the subscript.

## INTO/BULK COLLECT INTO<a name="section1491111311511"></a>

**INTO**  and  **BULK COLLECT INTO**  store values returned by statements in a stored procedure to variables.  **BULK COLLECT INTO**  allows some or all returned values to be temporarily stored in an array.

## Examples<a name="section1174210218183"></a>

```
openGauss=# DECLARE
    my_id integer;
BEGIN
    select id into my_id from customers limit 1; -- Assign a value.
END;
/

openGauss=# DECLARE
    type id_list is varray(6) of customers.id%type;
    id_arr id_list;
BEGIN
    select id bulk collect into id_arr from customers order by id DESC limit 20; -- Assign values in batches.
END;
/
```

>![](public_sys-resources/icon-notice.gif) **NOTICE:**  
>**BULK COLLECT INTO**  can only assign values to arrays in batches. Use  **LIMIT**  properly to prevent performance deterioration caused by excessive operations on data.  
>For array variables, parentheses () are preferentially identified as subscripts. Therefore, expressions with parentheses cannot be written after array variables. For example, select (1+3) into va(5) cannot be written as select into va(5) (1+3) or select into va[5] (1+3).

