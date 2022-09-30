# Arithmetic Functions and Operators<a name="EN-US_TOPIC_0289900469"></a>

Compared with the original openGauss, Dolphin modifies the time/date function as follows:
1. The DIV, MOD, and XOR operators are added.
2. The truncate, rand, crc32, conv functions are added.

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
