# DROP FUNCTION<a name="EN-US_TOPIC_0289900712"></a>

## Function<a name="en-us_topic_0283137306_en-us_topic_0237122138_en-us_topic_0059778261_se0a88dccf4a449189e3598bd873250fe"></a>

**DROP FUNCTION**  deletes a function.

## Precautions<a name="en-us_topic_0283137306_en-us_topic_0237122138_en-us_topic_0059778261_s8faef0d4b5934393b67d84ec2e34b07d"></a>

-   If a function involves operations on temporary tables,  **DROP FUNCTION**  cannot be used.
-   Only the function owner or a user granted with the DROP permission can run the  **DROP FUNCTION**  command. The system administrator has this permission by default.

## Syntax<a name="en-us_topic_0283137306_en-us_topic_0237122138_en-us_topic_0059778261_s1aad0e4026434244b8879b36ec9adaff"></a>

```
DROP FUNCTION [ IF EXISTS ] function_name 
[ ( [ {[ argname ] [ argmode ] argtype} [, ...] ] ) [ CASCADE | RESTRICT ] ];
```

## Parameter Description<a name="en-us_topic_0283137306_en-us_topic_0237122138_en-us_topic_0059778261_sf080415ead494e02bd48dbc9ec81a573"></a>

-   **IF EXISTS**

    Reports a notice instead of an error if the specified function does not exist.

-   **function\_name**

    Specifies the name of the function to be deleted.

    Value range: an existing function name

-   **argmode**

    Specifies the parameter mode of the function.

-   **argname**

    Specifies the parameter name of the function.

-   **argtype**

    Specifies the parameter type of the function.


## Examples<a name="en-us_topic_0283137306_en-us_topic_0237122138_en-us_topic_0059778261_s4c0a49238b6c41bdbf9c9cbd3aabcf08"></a>

For details, see  [Examples](create-function.md#en-us_topic_0283136560_en-us_topic_0237122104_en-us_topic_0059778837_scc61c5d3cc3e48c1a1ef323652dda821).

## Helpful Links<a name="en-us_topic_0283137306_en-us_topic_0237122138_en-us_topic_0059778261_sf722b7d9e13547449d559364553b790a"></a>

[ALTER FUNCTION](alter-function.md)  and  [CREATE FUNCTION](create-function.md)

