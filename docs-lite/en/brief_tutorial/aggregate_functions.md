# Aggregate Functions<a name="EN-US_TOPIC_0000001255221837"></a>

-   sum\(expression\)

    Description: Specifies the sum of expressions across all input values.

    Return type:

    Generally, it is the same as the argument data type. In the following cases, type conversion occurs:

    -   **BIGINT**  for  **SMALLINT**  or  **INT**  arguments
    -   **NUMBER**  for  **BIGINT**  arguments
    -   **DOUBLE PRECISION**  for floating-point arguments

    Example:

    ```
    openGauss=# SELECT SUM(amount) FROM customer_t1;
      sum
    -------
     14200
    (1 row)
    ```

-   max\(expression\)

    Description: Specifies the maximum value of expressions across all input values.

    Parameter type: any array, numeric, string, or date/time type

    Return type: same as the argument data type

    Example:

    ```
    openGauss=# SELECT MAX (c_customer_sk) FROM customer_t1;
     max
    ------
     9976
    (1 row)
    ```

-   min\(expression\)

    Description: Specifies the minimum value of expressions across all input values.

    Parameter type: any array, numeric, string, or date/time type

    Return type: same as the argument data type

    Example:

    ```
    openGauss=#  SELECT MIN (c_customer_sk) FROM customer_t1;
    min
    ------
     3869
    (1 row)
    ```

-   avg\(expression\)

    Description: Specifies the average \(arithmetic mean\) of all input values.

    Return type:

    **NUMBER**  for any integer-type argument.

    **DOUBLE PRECISION**  for floating-point arguments.

    Otherwise, it is the same as the argument data type.

    Example:

    ```
    openGauss=# SELECT AVG(AMOUNT) FROM customer_t1;
              avg
    -----------------------
     2366.6666666666666667
    (1 row)
    ```

-   count\(expression\)

    Description: Specifies the number of input rows for which the value of the expression is  **NULL**.

    Return type: BIGINT

    Example:

    ```
    openGauss=# SELECT COUNT(c_customer_id) FROM customer_t1;
     count
    -------
         7
    (1 row)
    ```

-   count\(\*\)

    Description: Returns the number of input rows.

    Return type: BIGINT

    Example:

    ```
    openGauss=# SELECT COUNT(*) FROM customer_t1;
    count
    -------
         8
    (1 row)
    ```

-   delta

    Description: Returns the difference between the current row and the previous row.

    Parameter: numeric

    Return type: numeric

-   mode\(\) within group \(order by value anyelement\)

    Description: Returns the value with the highest occurrence frequency in a column. If multiple values have the same frequency, the smallest value is returned. The sorting mode is the same as the default sorting mode of the column type.  **value**  is an input parameter and can be of any type.

    Return type: same as the argument data type

    Example:

    ```
    openGauss=# select mode() within group (order by value) from (values(1, 'a'), (2, 'b'), (2, 'c')) v(value, tag);
     mode
    ------
        2
    (1 row)
    openGauss=# select mode() within group (order by tag) from (values(1, 'a'), (2, 'b'), (2, 'c')) v(value, tag);
     mode
    ------
     a
    (1 row)
    ```


