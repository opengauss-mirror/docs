# Mathematical Functions and Operators<a name="EN-US_TOPIC_0289900469"></a>

## Numeric Operators<a name="en-us_topic_0283136987_en-us_topic_0237121971_en-us_topic_0059777932_s00454841bcf24ad18eed980c0e3a2f75"></a>

-   \+

    Description: Addition

    Example:

    ```
    openGauss=# SELECT 2+3 AS RESULT;
     result 
    --------
          5
    (1 row)
    ```

-   \-

    Description: Subtraction

    Example:

    ```
    openGauss=# SELECT 2-3 AS RESULT;
     result 
    --------
         -1
    (1 row)
    ```

-   \*

    Description: Multiplication

    Example:

    ```
    openGauss=# SELECT 2*3 AS RESULT;
     result 
    --------
          6
    (1 row)
    ```

-   /

    Description: Division \(The result is not rounded.\)

    Example:

    ```
    openGauss=# SELECT 4/2 AS RESULT;
     result 
    --------
          2
    (1 row)
    ```

    ```
    openGauss=# SELECT 4/3 AS RESULT;
          result      
    ------------------
     1.33333333333333
    (1 row)
    ```

-   +/-

    Description: Positive/Negative

    Example:

    ```
    openGauss=# SELECT -2 AS RESULT;
     result 
    --------
         -2
    (1 row)
    ```

-   %

    Description: Model \(to obtain the remainder\)

    Example:

    ```
    openGauss=# SELECT 5%4 AS RESULT;
     result 
    --------
          1
    (1 row)
    ```

-   @

    Description: Absolute value

    Example:

    ```
    openGauss=# SELECT @ -5.0 AS RESULT;
     result 
    --------
        5.0
    (1 row)
    ```

-   ^

    Description: Power \(exponent calculation\)

    Example:

    ```
    openGauss=# SELECT 2.0^3.0 AS RESULT;
           result       
    --------------------
     8.0000000000000000
    (1 row)
    ```

-   |/

    Description: Square root

    Example:

    ```
    openGauss=# SELECT |/ 25.0 AS RESULT;
     result 
    --------
          5
    (1 row)
    ```

-   ||/

    Description: Cubic root

    Example:

    ```
    openGauss=# SELECT ||/ 27.0 AS RESULT;
     result 
    --------
          3
    (1 row)
    ```

-   !

    Description: Factorial

    Example:

    ```
    openGauss=# SELECT 5! AS RESULT;
     result 
    --------
        120
    (1 row)
    ```

-   !!

    Description: Factorial \(prefix operator\)

    Example:

    ```
    openGauss=# SELECT !!5 AS RESULT;
     result 
    --------
        120
    (1 row)
    ```

-   &

    Description: Binary AND

    Example:

    ```
    openGauss=# SELECT 91&15  AS RESULT;
     result 
    --------
         11
    (1 row)
    ```

-   |

    Description: Binary OR

    Example:

    ```
    openGauss=# SELECT 32|3  AS RESULT;
     result 
    --------
         35
    (1 row)
    ```

-   \#

    Description: Binary XOR

    Example:

    ```
    openGauss=# SELECT 17#5  AS RESULT;
     result 
    --------
         20
    (1 row)
    ```

-   \~

    Description: Binary NOT

    Example:

    ```
    openGauss=# SELECT ~1 AS RESULT;
     result 
    --------
         -2
    (1 row)
    ```

-   <<

    Description: Binary shift left

    Example:

    ```
    openGauss=# SELECT 1<<4 AS RESULT;
     result 
    --------
         16
    (1 row)
    ```

-   \>\>

    Description: Binary shift right

    Example:

    ```
    openGauss=# SELECT 8>>2 AS RESULT;
     result 
    --------
          2
    (1 row)
    ```


## Numeric Operation Functions<a name="en-us_topic_0283136987_en-us_topic_0237121971_en-us_topic_0059777932_s04c663eefe5a433d9a486b67706e44e1"></a>

-   abs\(x\)

    Description: Absolute value

    Return type: same as the input

    Example:

    ```
    openGauss=# SELECT abs(-17.4);
     abs
    ------
     17.4
    (1 row)
    ```

-   acos\(x\)

    Description: Arc cosine

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT acos(-1);
           acos       
    ------------------
     3.14159265358979
    (1 row)
    ```

-   asin\(x\)

    Description: Arc sine

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT asin(0.5);
           asin       
    ------------------
     .523598775598299
    (1 row)
    ```

-   atan\(x\)

    Description: Arc tangent

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT atan(1);
           atan       
    ------------------
     .785398163397448
    (1 row)
    ```

-   atan2\(y, x\)

    Description: Arc tangent of y/x

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT atan2(2, 1);
          atan2
    ------------------
     1.10714871779409
    (1 row)
    ```

-   bitand\(integer, integer\)

    Description: Performs an AND \(&\) operation on two integers.

    Return type: bigint

    Example:

    ```
    openGauss=# SELECT bitand(127, 63);
     bitand 
    --------
         63
    (1 row)
    ```

-   cbrt\(dp\)

    Description: Cubic root

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT cbrt(27.0);
     cbrt
    ------
        3
    (1 row)
    ```

-   ceil\(x\)

    Description: Minimum integer greater than or equal to the parameter

    Return type: integer

    Example:

    ```
    openGauss=# SELECT ceil(-42.8);
     ceil 
    ------
      -42
    (1 row)
    ```

-   ceiling\(dp or numeric\)

    Description: Minimum integer \(alias of ceil\) greater than or equal to the parameter

    Return type: dp or numeric. If implicit type conversion is not considered, the return type is the same as the input type.

    Example:

    ```
    openGauss=# SELECT ceiling(-95.3);
     ceiling
    ---------
         -95
    (1 row)
    ```

-   cos\(x\)

    Description: Cosine

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT cos(-3.1415927);
            cos        
    -------------------
     -.999999999999999
    (1 row)
    ```

-   cot\(x\)

    Description: Cotangent

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT cot(1);
           cot
    ------------------
     .642092615934331
    (1 row)
    ```

-   degrees\(dp\)

    Description: Converts radians to angles.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT degrees(0.5);
         degrees
    ------------------
     28.6478897565412
    (1 row)
    ```

-   div\(y numeric, x numeric\)

    Description: Integer part of y/x

    Return type: numeric

    Example:

    ```
    openGauss=# SELECT div(9,4);
     div
    -----
       2
    (1 row)
    ```

-   exp\(x\)

    Description: Natural exponent

    Return type: dp or numeric. If implicit type conversion is not considered, the return type is the same as the input type.

    Example:

    ```
    openGauss=# SELECT exp(1.0);
            exp         
    --------------------
     2.7182818284590452
    (1 row)
    ```

-   floor\(x\)

    Description: Maximum integer not larger than the parameter

    Return type: same as the input

    Example:

    ```
    openGauss=# SELECT floor(-42.8);
     floor 
    -------
       -43
    (1 row)
    ```

-   int1\(in\)

    Description: Converts the input text parameter to a value of the int1 type and returns the value.

    Return type: int1

    Example:

    ```
    openGauss=# select int1('123');
     int1
    ------
     123
    (1 row)
    openGauss=# select int1('a');
     int1
    ------
       0
    (1 row)
    ```

-   int2\(in\)

    Description: Converts the input parameter to a value of the int2 type and returns the value.

    The supported input parameter types include float4, float8, int16, numeric, and text.

    Return type: int2

    Example:

    ```
    openGauss=# select int2('1234');
     int2
    ------
     1234
    (1 row)
    openGauss=# select int2(25.3);
     int2
    ------
       25
    (1 row)
    ```

-   int4\(in\)

    Description: Converts the input parameter to a value of the int4 type and returns the value.

    The supported input parameter types include bit, boolean, char, double precision, int16, numeric, real, smallint and text

    Return type: int4

    Example:

    ```
    openGauss=# select int4('789');
     int4
    ------
     789
    (1 row)
    openGauss=# select int4(99.9);
     int4
    ------
       99
    (1 row)
    ```

-   float4\(in\)

    Description: Converts the input parameter to a value of the float4 type and returns the value. The supported input parameter types include bigint, duoble precision, int16, integer, numeric, smallint, and text.

    Return type: float4

    Example:

    ```
    openGauss=# select float4('789');
     float4
    --------
        789
    (1 row)
    
    openGauss=# select float4(99.9);
     float4
    --------
       99.9
    (1 row)
    ```

-   float8\(in\)

    Description: Converts the input parameter to a value of the float8 type and returns the value. The supported input parameter types include bigint, int16, integer, numeric, real, smallint, and text.

    Return type: float8

    Example:

    ```
    openGauss=# select float8('789');
     float8
    --------
        789
    (1 row)
    
    openGauss=# select float8(99.9);
     float8
    --------
       99.9
    (1 row)
    ```

-   int16\(in\)

    Description: Converts the input parameter to a value of the int16 type and returns the value. The supported input parameter types include bigint, boolean, double precision, integer, numeric, oid, real, smallint, and tinyint.

    Return type: int16

    Example:

    ```
    openGauss=# select int16('789');
     int16
    --------
        789
    (1 row)
    
    openGauss=# select int16(99.9);
     int16
    --------
       99
    (1 row)
    ```

-   numeric\(in\)

    Description: Converts the input parameter to a value of the numeric type and returns the value. The supported input parameter types include bigint, boolean, double precision, int16, integer, money, real, and smallint.

    Return type: numeric

    Example:

    ```
    openGauss=# select "numeric"('789');
     numeric
    ---------
         789
    (1 row)
    
    openGauss=# select "numeric"(99.9);
     numeric
    ---------
        99.9
    (1 row)
    ```

-   oid\(in\)

    Description: Converts the input parameter to a value of the oid type and returns the value. The supported input parameter types include bigint and int16.

    Return type: oid

-   radians\(dp\)

    Description: Converts angles to radians.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT radians(45.0);
         radians
    ------------------
     .785398163397448
    (1 row)
    ```

-   random\(\)

    Description: Random number between 0.0 and 1.0

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT random();
          random
    ------------------
     .824823560658842
    (1 row)
    ```

-   multiply\(x double precision or text, y double precision or text\)

    Description: Product of x and y.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT multiply(9.0, '3.0');
         multiply         
    -------------------
                   27
    (1 row)
    openGauss=# SELECT multiply('9.0', 3.0);
         multiply         
    -------------------
                   27
    (1 row)
    ```

-   ln\(x\)

    Description: Natural logarithm

    Return type: dp or numeric. If implicit type conversion is not considered, the return type is the same as the input type.

    Example:

    ```
    openGauss=# SELECT ln(2.0);
            ln         
    -------------------
     .6931471805599453
    (1 row)
    ```

-   log\(x\)

    Description: Logarithm with 10 as the base

    Return type: same as the input

    Example:

    ```
    openGauss=# SELECT log(100.0);
            log         
    --------------------
     2.0000000000000000
    (1 row)
    ```

-   log\(b numeric, x numeric\)

    Description: Logarithm with b as the base

    Return type: numeric

    Example:

    ```
    openGauss=# SELECT log(2.0, 64.0);
            log         
    --------------------
     6.0000000000000000
    (1 row)
    ```

-   mod\(x,y\)

    Description: Remainder of x/y \(model\) If x equals to 0, 0 is returned.

    Return type: same as the parameter type

    Example:

    ```
    openGauss=# SELECT mod(9,4);
     mod 
    -----
       1
    (1 row)
    ```

    ```
    openGauss=# SELECT mod(9,0);
     mod 
    -----
       9
    (1 row)
    ```

-   pi\(\)

    Description: π constant value

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT pi();
            pi
    ------------------
     3.14159265358979
    (1 row)
    ```

-   power\(a double precision, b double precision\)

    Description: b power of a

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT power(9.0, 3.0);
            power         
    ----------------------
     729.0000000000000000
    (1 row)
    ```

-   round\(x\)

    Description: Integer closest to the input parameter

    Return type: same as the input

    Example:

    ```
    openGauss=# SELECT round(42.4);
     round 
    -------
        42
    (1 row)
    
    openGauss=# SELECT round(42.6);
     round 
    -------
        43
    (1 row)
    ```

-   round\(v numeric, s int\)

    Description:  **s**  digits are kept after the decimal point.

    Return type: numeric

    Example:

    ```
    openGauss=# SELECT round(42.4382, 2);
     round
    -------
     42.44
    (1 row)
    ```

-   setseed\(dp\)

    Description: Sets seed for the following random\(\) invoking \(between –1.0 and 1.0, inclusive\).

    Return type: void

    Example:

    ```
    openGauss=# SELECT setseed(0.54823);
     setseed
    ---------
    
    (1 row)
    ```

-   sign\(x\)

    Description: Returns symbols of this parameter.

    Return type:  **–1**  indicates minus.  **0**  indicates 0, and  **1**  indicates positive numbers.

    Example:

    ```
    openGauss=# SELECT sign(-8.4);
     sign 
    ------
       -1
    (1 row)
    ```

-   sin\(x\)

    Description: Sine

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT sin(1.57079);
           sin        
    ------------------
     .999999999979986
    (1 row)
    ```

-   sqrt\(x\)

    Description: Square root

    Return type: dp or numeric. If implicit type conversion is not considered, the return type is the same as the input type.

    Example:

    ```
    openGauss=# SELECT sqrt(2.0);
           sqrt        
    -------------------
     1.414213562373095
    (1 row)
    ```

-   tan\(x\)

    Description: Tangent

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT tan(20);
           tan        
    ------------------
     2.23716094422474
    (1 row)
    ```

-   trunc\(x\)

    Description: Truncates \(the integral part\).

    Return type: same as the input

    Example:

    ```
    openGauss=# SELECT trunc(42.8);
     trunc 
    -------
        42
    (1 row)
    ```

-   trunc\(v numeric, s int\)

    Description: Truncates a number with  **s**  digits after the decimal point.

    Return type: numeric

    Example:

    ```
    openGauss=# SELECT trunc(42.4382, 2);
     trunc
    -------
     42.43
    (1 row)
    ```

-   smgrne\(a smgr, b smgr\)

    Description: Compares two integers of the smgr type to check whether they are different.

    Return type: Boolean

-   smgreq\(a smgr, b smgr\)

    Description: Compares two integers of the smgr type to check whether they are equivalent.

    Return type: Boolean

-   int1abs

    Description: Returns the absolute value of data of the uint8 type.

    Parameter: tinyint

    Return type: tinyint

-   int1and

    Description: Returns the bitwise AND result of two data records of the uint8 type.

    Parameter: tinyint, tinyint

    Return type: tinyint

-   int1cmp

    Description: Returns the comparison result of two data records of the uint8 type. If the value of the first parameter is greater,  **1**  is returned. If the value of the second parameter is greater,  **–1**  is returned. If they are the same,  **0**  is returned.

    Parameter: tinyint, tinyint

    Return type: integer

-   int1div

    Description: Returns the result of dividing two data records of the uint8 type. The result is of the float8 type.

    Parameter: tinyint, tinyint

    Return type: tinyint

-   int1eq

    Description: Compares two pieces of data of the uint8 type to check whether they are the same.

    Parameter: tinyint, tinyint

    Return type: Boolean

-   int1ge

    Description: Determines whether the value of the first parameter is greater than or equal to the value of the second parameter in two data records of the uint8 type.

    Parameter: tinyint, tinyint

    Return type: Boolean

-   int1gt

    Description: Performs a greater-than operation on an unsigned 1-byte integer.

    Parameter: tinyint, tinyint

    Return type: Boolean

-   int1larger

    Description: Returns the maximum value of an unsigned 1-byte integer.

    Parameter: tinyint, tinyint

    Return type: tinyint

-   int1le

    Description: Performs a less-than or an equal-to operation on an unsigned 1-byte integer.

    Parameter: tinyint, tinyint

    Return type: Boolean

-   int1lt

    Description: Performs a less-than operation on an unsigned 1-byte integer.

    Parameter: tinyint, tinyint

    Return type: Boolean

-   int1smaller

    Description: Calculates the minimum value of an unsigned 1-byte integer.

    Parameter: tinyint, tinyint

    Return type: tinyint

-   int1inc

    Description: Unsigned 1-byte integer plus 1.

    Parameter: tinyint

    Return type: tinyint

-   int1mi

    Description: Performs a minus operation on an unsigned 1-byte integer.

    Parameter: tinyint, tinyint

    Return type: tinyint

-   int1mod

    Description: Performs a reminder operation on an unsigned 1-byte integer.

    Parameter: tinyint, tinyint

    Return type: tinyint

-   int1mul

    Description: Performs a multiplication operation on unsigned 1-byte integer.

    Parameter: tinyint, tinyint

    Return type: tinyint

-   int1ne

    Description: Performs a not-equal-to operation on an unsigned 1-byte integer.

    Parameter: tinyint, tinyint

    Return type: Boolean

-   int1pl

    Description: Performs an addition operation on an unsigned 1-byte integer.

    Parameter: tinyint, tinyint

    Return type: tinyint

-   int1um

    Description: Returns an unsigned 2-byte integer after subtracting the opposite number from the unsigned 1-byte integer.

    Parameter: tinyint

    Return type: smallint

-   int1xor

    Description: Performs an exclusive OR operation on an unsigned 1-byte integer.

    Parameter: tinyint, tinyint

    Return type: tinyint

-   cash\_div\_int1

    Description: Performs a division operation on the money type.

    Parameter: money, tinyint

    Return type: money

-   cash\_mul\_int1

    Description: Performs a multiplication operation on the money type.

    Parameter: money, tinyint

    Return type: money

-   int1not

    Description: Reverts binary bits of an unsigned 1-byte integer.

    Parameter: tinyint

    Return type: tinyint

-   int1or

    Description: Performs an OR operation on an unsigned 1-byte integer.

    Parameter: tinyint, tinyint

    Return type: tinyint

-   int1shl

    Description: Shifts an unsigned 1-byte integer leftwards by a specified number of bits.

    Parameter: tinyint, integer

    Return type: tinyint

-   width\_bucket\(op numeric, b1 numeric, b2 numeric, count int\)

    Description: Returns a bucket to which the operand will be assigned in an equi-depth histogram with  **count**  buckets, ranging from  **b1**  to  **b2**.

    Return type: int

    Example:

    ```
    openGauss=# SELECT width_bucket(5.35, 0.024, 10.06, 5);
     width_bucket
    --------------
                3
    (1 row)
    ```

-   width\_bucket\(op dp, b1 dp, b2 dp, count int\)

    Description: Returns a bucket to which the operand will be assigned in an equi-depth histogram with  **count**  buckets, ranging from  **b1**  to  **b2**.

    Return type: int

    Example:

    ```
    openGauss=# SELECT width_bucket(5.35, 0.024, 10.06, 5);
     width_bucket
    --------------
                3
    (1 row)
    ```


