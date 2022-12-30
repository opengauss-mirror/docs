# Arithmetic Functions and Operators<a name="EN-US_TOPIC_0289900469"></a>

Compared with the original openGauss, Dolphin modifies the time/date function as follows:

1. The DIV, MOD, XOR, and ^ operators are added.
2. The truncate, rand, crc32, conv, float8\_bool, oct, and float4_bool functions are added.

-   DIV

    Description: Division (rounded)

    Example:

    ```
    openGauss=# SELECT 8 DIV 3 AS RESULT;
     result 
    --------
          2
    (1 row)
    ```

-   MOD

    Description: Model (to obtain the remainder)

    Example:

    ```
    openGauss=# SELECT 4 MOD 3 AS RESULT;
     result 
    --------
          1
    (1 row)
    ```

-   XOR

    Description: Binary XOR

    Example:

    ```
    openGauss=# SELECT 4 XOR 3 AS RESULT;
     result 
    --------
          0
    (1 row)
    ```

-   truncate\(v numeric, s int\)

    Description: Truncates a number with **s** digits after the decimal point. It is equivalent to trunc.

    Return type: numeric

    Example:

    ```
    openGauss=# SELECT truncate(42.4382, 2);
     truncate
    ----------
        42.43
    (1 row)
    ```

-   rand\(\)

    Description: Random number between 0.0 and 1.0 It is equivalent to random.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT rand();
           rand
    -------------------
     0.254671605769545
    (1 row)
    ```

-   crc32\(string\)

    Description: Calculates the crc32 value of string.

    Return type: int

    Example:

    ```
    openGauss=# SELECT crc32('abc');
       crc32
    -----------
     891568578
    (1 row)
    ```

-   conv\(input in, current_base int, new_base int\)

    Description: Converts a number or string from one number base system to another. The value of in can be a number or a character string.

    Return type: text

    Example:

    ```
    openGauss=# SELECT conv(20, 10, 2);
     conv
    -------
     10100
    (1 row)
    
    openGauss=# SELECT conv('8D', 16, 10);
     conv
    ------
     141
    (1 row)
    ```

- ^

  Description: Implements bitwise XOR between two integers.

  Return type: INT

  Example:

  ```
  openGauss=# SELECT 1^1;
  ?column?
  ----------
         0
  (1 row)
  ```

  Description: After `set b_compatibility_mode` is set to `1`, the float data can be bitwise XOR or XOR after rounded off.

  Return type: DOUBLE

  Example:

  ```
  openGauss=# select 0.5678::float^1.1234::float;
   ?column? 
  ----------
          0
  (1 row)
  ```

- float8_bool(float)

  Description: Returns a Boolean value based on the value of a floating point number. If the value is **0**, **false** is returned. Otherwise, **true** is returned.

  Return type: Boolean

  Example:

  ```
  openGauss=# select float8_bool(0.1);
   float8_bool 
  -------------
   t
  (1 row)
  ```

  ```
  openGauss=# select float8_bool(0.0);
   float8_bool 
  -------------
   f
  (1 row)
  ```

-   oct\(input N)

    Description: Converts a number or string from a decimal number to an octal number.

    Return type: text

    Example:

    ```
    openGauss=# SELECT OCT(10);
     oct 
    -----
    12
    (1 row)
    
    openGauss=# SELECT OCT('10');
     oct 
    -----
    12
    (1 row)
    ```

- float4_bool(float)

  Description: Returns a Boolean value based on the value of a floating point number. If the value is **0**, **false** is returned. Otherwise, **true** is returned.

  Return type: Boolean

  Example:

  ~~~
  openGauss=# select float4_bool(0.1);
   float4_bool 
  -------------
   t
  (1 row)
  ~~~

  ~~~
  openGauss=# select float4_bool(0.0);
   float4_bool 
  -------------
   f
  (1 row)
  ~~~