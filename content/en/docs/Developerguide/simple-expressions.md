# Simple Expressions<a name="EN-US_TOPIC_0289900627"></a>

## Logical Expressions<a name="en-us_topic_0283137643_en-us_topic_0237122001_en-us_topic_0059778068_s3998c0a95e73437db8ea894c6eecb3f2"></a>

[Logical Operators](logical-operators.md)  lists the operators and calculation rules of logical expressions.

## Comparative Expressions<a name="en-us_topic_0283137643_en-us_topic_0237122001_en-us_topic_0059778068_s1b8089e350ba466f9baafc8c95e678ce"></a>

[Operators](operators.md)  lists the common comparative operators.

In addition to comparative operators, you can also use the following sentence structure:

-   BETWEEN operator

    **a  BETWEEN  x  AND  y**  is equivalent to  **a \>= x AND a <= y**.

    **a  NOT BETWEEN  x  AND y**  is equivalent to  **a < x OR a \> y**.

-   To check whether a value is null, use:

    expression IS NULL

    expression IS NOT NULL

    or an equivalent \(non-standard\) sentence structure:

    expression   ISNULL

    expression  NOTNULL

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >Do not write  **expression=NULL**  or  **expression<\>\(!=\)NULL**, because  **NULL**  represents an unknown value, and these expressions cannot determine whether two unknown values are equal.


-   is distinct from/is not distinct from
    -   is distinct from

        If the data types and values of A and B are different, the value is  **true**.

        If the data types and values of A and B are the same, the value is  **false**.

        Empty values are considered the same.

    -   is not distinct from

        If the data types and values of A and B are different, the value is  **false**.

        If the data types and values of A and B are the same, the value is  **true**.

        Empty values are considered the same.

-   <=\> NULL-safe equality operator

    The comparison of NULL values is added on the basis of the comparison of '='. If neither the left nor right value of the operator is NULL, the result is the same as that of '='.

    If the data types and values of A and B are not completely the same, the value is **false**.

    If the data types and values of A and B are completely the same, the value is **true**.

    Null values are considered the same.

    >![](public_sys-resources/icon-note.gif) **NOTE:**
    >-   The usage of the <=\> operator is the same as that of IS NOT DISTINCT FROM.
    >-   This operator is valid only when GaussDB Kernel or openGauss is compatible with the MY type (that is, sql\_compatibility = 'B'). Other types do not support this operator.

## Pseudocolumn<a name="en-us_topic_0283137643_section104921036122717"></a>

ROWNUM

**ROWNUM**  is a pseudocolumn that returns a number indicating the row number of the result obtained from the query. The value of  **ROWNUM**  in the first row is  **1**, the value of  **ROWNUM**  in the second row is  **2**, and so on.

The return type of  **ROWNUM**  is numeric.  **ROWNUM**  can be used to limit the total number of rows returned by a query. For example, the following statement limits the maximum number of records returned from the table  **Students**  to 10.

```
select * from Students where rownum <= 10;
```

## Examples<a name="en-us_topic_0283137643_en-us_topic_0237122001_en-us_topic_0059778068_sa45abd926c8248c3b0b03e0173b11821"></a>

```
openGauss=# SELECT 2 BETWEEN 1 AND 3 AS RESULT;
 result 
----------
 t
(1 row)

openGauss=# SELECT 2 >= 1 AND 2 <= 3 AS RESULT;
 result 
----------
 t
(1 row)

openGauss=# SELECT 2 NOT BETWEEN 1 AND 3 AS RESULT;
 result 
----------
 f
(1 row)

openGauss=# SELECT 2 < 1 OR 2 > 3 AS RESULT;
 result 
----------
 f
(1 row)

openGauss=# SELECT 2+2 IS NULL AS RESULT;
 result 
----------
 f
(1 row)

openGauss=# SELECT 2+2 IS NOT NULL AS RESULT;
 result 
----------
 t
(1 row)

openGauss=# SELECT 2+2 ISNULL AS RESULT;
 result 
----------
 f
(1 row)

openGauss=# SELECT 2+2 NOTNULL AS RESULT;
 result 
----------
 t
(1 row)

openGauss=# SELECT 2+2 IS DISTINCT FROM NULL AS RESULT;
 result 
----------
 t
(1 row)

openGauss=# SELECT 2+2 IS NOT DISTINCT FROM NULL AS RESULT;
 result  
----------
 f
(1 row)
```
