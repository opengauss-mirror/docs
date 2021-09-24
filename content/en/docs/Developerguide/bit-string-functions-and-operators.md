# Bit String Functions and Operators<a name="EN-US_TOPIC_0289900942"></a>

## Bit String Operators<a name="en-us_topic_0283137721_en-us_topic_0237121969_en-us_topic_0059777668_sc2026528bca44ca29cf0ee99329f0598"></a>

Aside from the usual comparison operators, the following operators can be used. Bit string operands of  **&**,  **|**, and  **\#**  must be of equal length. In case of bit shifting, the original length of the string is preserved by zero padding \(if necessary\).

-   ||

    Description: Connects bit strings.

    Example:

    ```
    openGauss=# SELECT B'10001' || B'011' AS RESULT;
      result
    ----------
     10001011
    (1 row)
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >It is recommended that a column have no more than 180 consecutive internal joins. A column with over 180 joins will be split into joined consecutive strings.
    >Example:  **str1||str2||str3||str4**  is split into  **\(str1||str2\)||\(str3||str4\)**.

-   &

    Description: Specifies the AND operation between bit strings.

    Example:

    ```
    openGauss=# SELECT B'10001' & B'01101' AS RESULT;
     result 
    --------
     00001
    (1 row)
    ```

-   |

    Description: Specifies the OR operation between bit strings.

    Example:

    ```
    openGauss=# SELECT B'10001' | B'01101' AS RESULT;
     result 
    --------
     11101
    (1 row)
    ```

-   \#

    Description: Specifies the OR operation between bit strings if they are inconsistent. If the same positions in the two bit strings are both 1 or 0, the position returns  **0**.

    Example:

    ```
    openGauss=# SELECT B'10001' # B'01101' AS RESULT;
     result 
    --------
     11100
    (1 row)
    ```

-   \~

    Description: Specifies the NOT operation between bit strings.

    Example:

    ```
    openGauss=# SELECT ~B'10001'AS RESULT;
     result  
    ----------
     01110
    (1 row)
    ```

-   <<

    Description: Shifts left in a bit string.

    Example:

    ```
    openGauss=# SELECT B'10001' << 3 AS RESULT;
     result  
    ----------
     01000
    (1 row)
    ```

-   \>\>

    Description: Shifts right in a bit string.

    Example:

    ```
    openGauss=# SELECT B'10001' >> 2 AS RESULT;
     result  
    ----------
     00100
    (1 row)
    ```


The following SQL-standard functions work on bit strings as well as strings:  **length**,  **bit\_length**,  **octet\_length**,  **position**,  **substring**, and  **overlay**.

The following functions work on bit strings as well as binary strings:  **get\_bit**  and  **set\_bit**. When working with a bit string, these functions number the first \(leftmost\) bit of the string as bit 0.

In addition, it is possible to convert between integral values and type  **bit**. Example:

```
openGauss=# SELECT 44::bit(10) AS RESULT;
   result
------------
 0000101100
(1 row)

openGauss=# SELECT 44::bit(3) AS RESULT;
 result 
--------
 100
(1 row)

openGauss=# SELECT cast(-44 as bit(12)) AS RESULT;
    result    
--------------
 111111010100
(1 row)

openGauss=# SELECT '1110'::bit(4)::integer AS RESULT;
 result 
--------
     14
(1 row)

openGauss=# select substring('10101111'::bit(8), 2);
 substring
-----------
 0101111
(1 row)
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Casting to just "bit" means casting to bit\(1\), and so will deliver only the least significant bit of the integer.

