# Array Expressions<a name="EN-US_TOPIC_0289900526"></a>

## IN<a name="en-us_topic_0283137227_en-us_topic_0237122004_en-us_topic_0059778101_s5f7d92a0eaa14c1ab1215282bce7a3ef"></a>

_expression _**IN **_\(value \[, ...\]\)_

The parentheses on the right contain an expression list. The expression result on the left is compared with the content in the expression list. If the content in the list meets the expression result on the left, the result of  **IN**  is  **true**. If no result meets the requirements, the result of  **IN**  is  **false**.

Example:

```
openGauss=# SELECT 8000+500 IN (10000, 9000) AS RESULT;
  result 
----------
 f
(1 row)
```

If the expression result is null or the expression list does not meet the expression conditions and at least one empty value is returned for the expression list on the right, the result of  **IN**  is  **null**  rather than  **false**. This method is consistent with the Boolean rules used when SQL statements return empty values.

## NOT IN<a name="en-us_topic_0283137227_en-us_topic_0237122004_en-us_topic_0059778101_s29761a0d450d418989b3d9d3e4be3689"></a>

_expression _**NOT IN**_ \(value \[, ...\]\)_

The parentheses on the right contain an expression list. The expression result on the left is compared with the content in the expression list. If the content in the list does not meet the expression result on the left, the result of  **NOT IN**  is  **true**. If any content meets the expression result, the result of  **NOT IN**  is  **false**.

Example:

```
openGauss=# SELECT 8000+500 NOT IN (10000, 9000) AS RESULT;
  result 
----------
 t
(1 row)
```

If the query statement result is null or the expression list does not meet the expression conditions and at least one empty value is returned for the expression list on the right, the result of  **NOT IN**  is  **null**  rather than  **false**. This method is consistent with the Boolean rules used when SQL statements return empty values.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>In all situations,  **X NOT IN Y**  equals to  **NOT\(X IN Y\)**.

## ANY/SOME \(array\)<a name="en-us_topic_0283137227_en-us_topic_0237122004_en-us_topic_0059778101_s676c00f7f73940bc93d996f3af4ed06e"></a>

_expression operator _**ANY **_\(array expression\)_

_expression operator _**SOME **_\(array expression\)_

```
openGauss=# SELECT 8000+500 < SOME (array[10000,9000]) AS RESULT;
  result 
----------
 t
(1 row)

```

```
openGauss=# SELECT 8000+500 < ANY (array[10000,9000]) AS RESULT;
  result 
----------
 t
(1 row)
```

The right-hand side is a parenthesized expression, which must yield an array value. The result of the expression on the left uses operators to compute and compare the results in each row of the array expression. The comparison result must be a Boolean value.

-   If at least one comparison result is true, the result of  **ANY**  is  **true**.
-   If no comparison result is true, the result of ANY is false.
-   If no comparison result is true and the array expression generates at least one null value, the value of ANY is NULL, rather than false. This method is consistent with the Boolean rules used when SQL statements return empty values.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>**SOME**  is a synonym of  **ANY**.

## ALL \(array\)<a name="en-us_topic_0283137227_en-us_topic_0237122004_en-us_topic_0059778101_s5701e71e17c443b28c5f0c328acaf318"></a>

_expression operator _**ALL **_\(array expression\)_

The right-hand side is a parenthesized expression, which must yield an array value. The result of the expression on the left uses operators to compute and compare the results in each row of the array expression. The comparison result must be a Boolean value.

-   The result of  **ALL**  is  **true**  if all comparisons yield  **true**  \(including the case where the array has zero elements\).
-   The result of  **ALL**  is  **false**  if one or multiple comparisons yield  **false**.
-   If the array expression yields a null array, the result of  **ALL**  will be null. If the left-hand expression yields null, the result of  **ALL**  is ordinarily null \(though a non-strict comparison operator could possibly yield a different result\). Also, if the right-hand array contains any null elements and no false comparison result is obtained, the result of  **ALL**  will be null, not true \(again, assuming a strict comparison operator\). This method is consistent with the Boolean rules used when SQL statements return empty values.

```
openGauss=# SELECT 8000+500 < ALL (array[10000,9000]) AS RESULT;
  result
----------
 t
(1 row)
```

