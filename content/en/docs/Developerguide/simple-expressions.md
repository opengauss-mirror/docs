# Simple Expressions<a name="EN-US_TOPIC_0242370465"></a>

## Logical Expressions<a name="en-us_topic_0237122001_en-us_topic_0059778068_s3998c0a95e73437db8ea894c6eecb3f2"></a>

[Logical Operators](logical-operators.md)  lists the operators and calculation rules of logical expressions.

## Comparative Expressions<a name="en-us_topic_0237122001_en-us_topic_0059778068_s1b8089e350ba466f9baafc8c95e678ce"></a>

[Operators](operators.md)  lists the common comparative operators.

In addition to comparative operators, you can also use the following sentence structure:

-   BETWEEN operator

    **a  BETWEEN  x  AND  y**  is equivalent to  **a \>= x AND a <= y**.

    **a  NOT BETWEEN  x  AND y**  is equivalent to  **a < x OR a \> y**.

-   To check whether a value is null, use:

    expression_ _IS NULL

    expression IS NOT NULL

    or an equivalent \(non-standard\) sentence structure:

    expression_ _   ISNULL

    expression  NOTNULL

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**   
    >Do not write  **expression=NULL**  or  **expression<\>\(!=\)NULL**, because  **NULL**  represents an unknown value, and these expressions cannot determine whether two unknown values are equal.  


## Examples<a name="en-us_topic_0237122001_en-us_topic_0059778068_sa45abd926c8248c3b0b03e0173b11821"></a>

```
postgres=# SELECT 2 BETWEEN 1 AND 3 AS RESULT;
 result 
----------
 t
(1 row)

postgres=# SELECT 2 >= 1 AND 2 <= 3 AS RESULT;
 result 
----------
 t
(1 row)

postgres=# SELECT 2 NOT BETWEEN 1 AND 3 AS RESULT;
 result 
----------
 f
(1 row)

postgres=# SELECT 2 < 1 OR 2 > 3 AS RESULT;
 result 
----------
 f
(1 row)

postgres=# SELECT 2+2 IS NULL AS RESULT;
 result 
----------
 f
(1 row)

postgres=# SELECT 2+2 IS NOT NULL AS RESULT;
 result 
----------
 t
(1 row)

postgres=# SELECT 2+2 ISNULL AS RESULT;
 result 
----------
 f
(1 row)

postgres=# SELECT 2+2 NOTNULL AS RESULT;
 result 
----------
 t
(1 row)

postgres=# SELECT 2+2 IS DISTINCT FROM NULL AS RESULT;
 result 
----------
 t
(1 row)

postgres=# SELECT 2+2 IS NOT DISTINCT FROM NULL AS RESULT;
 result  
----------
 f
(1 row)
```

