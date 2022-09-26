# Conditional Expression Functions <a name="EN-US_TOPIC_0289900535"></a>

## Precautions <a name="en-us_topic_0283137529_en-us_topic_0237122159_en-us_topic_0059777895_s115556a9029e407ca47ff01fea8de0cb"></a>

-   This section describes only the new conditional expression functions of Dolphin. For details about the conditional expression functions of the original openGauss, see [Conditional Expression Functions](conditional-expression-functions.md).

## Conditional Expression Functions<a name="en-us_topic_0283136903_en-us_topic_0237121986_en-us_topic_0059778809_s67706c61c09047c4bca384689f7f5c08"></a>

-   if\(bool, expr1, expr2\)

    Description: Condition judgment function. If **bool** is **true**, **expr1** is returned. If **bool** is **false**, **expr2** is returned.

    Example:

    ```
    openGauss=# select if(true, 1, 2);
     case
    ------
        1
    (1 row)
    ```
    ```
    openGauss=# select if(false, 1, 2);
     case
    ------
        2
    (1 row)
    ```

- ifnull\( expr1 , expr2 \)

  Description:

    -   If the value of **expr1** is **NULL**, the value of **expr2** is returned.
    -   If the value of **expr1** is not **NULL**, the value of **expr1** is returned.

  Example:

  ```
  openGauss=# SELECT ifnull('hello','world');
    nvl  
  -------
   hello
  (1 row)
  ```

  Remarks: The parameter conversion logic is the same as that of the NVL.

- isnull\( expr \)

    -   Returns **true** if **expr** is **NULL**.
    -   Returns **false** if **expr** is not **NULL**.

  Example:

  ```
  openGauss=# SELECT ifnull('hello');
  ?column?  
  --------
        f 
  (1 row)
  ```

  Remarks: The null check logic is the same as that of **expr is null**.

- gs_interval(base_expr, expr1, expr2, ..., exprn)

  Description:

    - Compares base\_expr with expr(n) one by one until expr(n) is greater than base\_expr and returns value(n-1). If expr(n) is less than or equal to base\_expr, returns value(n).
    - If base\_expr or expr(n) is non-numeric data:
        - BOOL: TRUE is converted to 1, and FALSE is converted to 0.
        - If it can be truncated to a floating point number in float8 format, it is truncated to float8.
        - If it cannot be truncated to a floating point number float8, it is considered as 0.

  Example:

  ```
  openGauss=# SELECT gs_interval(5,2,3,4,6,7);
   gs_interval 
  -------------
             3
  (1 row)
  ```

  ```
  openGauss=# SELECT gs_interval(false,-1,0,true,2);
   gs_interval 
  -------------
             2
  (1 row)
  ```

  ```
  openGauss=# SELECT gs_interval('2022-12-12'::timestamp,'asdf','2020-12-12'::date,2023);
   gs_interval 
  -------------
             2
  (1 row)
  ```



- strcmp(str1, str2)

  Description: Compares str1 with str2 from left to right. If str1 is equal to str2, 0 is returned. If str1 is greater than str2, 1 is returned. If str1 is less than str2, -1 is returned.

  Example:

  ```
  openGauss=# SELECT strcmp('asd','asd');
   strcmp 
  --------
        0
  (1 row)
  ```

  ```
  openGauss=# SELECT strcmp(312,311);
   strcmp 
  --------
        1
  (1 row)
  ```

  ```
  openGauss=# SELECT strcmp('2021-12-12'::timestamp,20210::float8);
   strcmp 
  --------
       -1
  (1 row)
  ```

  
