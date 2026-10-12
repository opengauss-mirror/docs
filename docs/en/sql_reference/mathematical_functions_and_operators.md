# Mathematical Functions and Operators

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:26:45.153Z -->

## Mathematical Operators<a name="zh-cn_topic_0283136987_zh-cn_topic_0237121971_zh-cn_topic_0059777932_s00454841bcf24ad18eed980c0e3a2f75"></a>

- \+

    Description: Addition

    Example:

    ```
    openGauss=# SELECT 2+3 AS RESULT;
     result 
    --------
          5
    (1 row)
    ```

- \-

    Description: Subtraction

    Example:

    ```
    openGauss=# SELECT 2-3 AS RESULT;
     result 
    --------
         -1
    (1 row)
    ```

- \*

    Description: Multiplication

    Example:

    ```
    openGauss=# SELECT 2*3 AS RESULT;
     result 
    --------
          6
    (1 row)
    ```

- /

    Description: Division (the division operator does not round)

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

- +/-

    Description: Positive/Negative

    Example:

    ```
    openGauss=# SELECT -2 AS RESULT;
     result 
    --------
         -2
    (1 row)
    ```

- %

    Description: Modulo (remainder)

    Example:

    ```
    openGauss=# SELECT 5%4 AS RESULT;
     result 
    --------
          1
    (1 row)
    ```

- @

    Description: Absolute value

    Example:

    ```
    openGauss=# SELECT @ -5.0 AS RESULT;
     result 
    --------
        5.0
    (1 row)
    ```

- ^

    Description: Power (exponentiation)

    Example:

    ```
    openGauss=# SELECT 2.0^3.0 AS RESULT;
           result       
    --------------------
     8.0000000000000000
    (1 row)
    ```

- |/

    Description: Square root

    Example:

    ```
    openGauss=# SELECT |/ 25.0 AS RESULT;
     result 
    --------
          5
    (1 row)
    ```

- ||/

    Description: Cube root

    Example:

    ```
    openGauss=# SELECT ||/ 27.0 AS RESULT;
     result 
    --------
          3
    (1 row)
    ```

- !

    Description: Factorial

    >[!WARNING]Warning: In B compatibility mode, this operator is not supported. It is recommended to use the factorial function instead.

    Example:

    ```
    openGauss=# SELECT 5! AS RESULT;
     result 
    --------
        120
    (1 row)
    ```

- !!

    Description: Factorial (prefix operator)

    Warning: In B compatibility mode, this operator cannot be used by default. It is recommended to use the factorial function instead.

    Example:

    ```
    openGauss=# SELECT !!5 AS RESULT;
     result 
    --------
        120
    (1 row)
    ```

- &amp;

    Description: Bitwise AND

    Example:

    ```
    openGauss=# SELECT 91&15  AS RESULT;
     result 
    --------
         11
    (1 row)
    ```

- |

    Description: Bitwise OR

    Example:

    ```
    openGauss=# SELECT 32|3  AS RESULT;
     result 
    --------
         35
    (1 row)
    ```

- \#

    Description: Binary XOR

    Example:

    ```
    openGauss=# SELECT 17#5  AS RESULT;
     result 
    --------
         20
    (1 row)
    ```

- \~

    Description: Binary NOT

    Example:

    ```
    openGauss=# SELECT ~1 AS RESULT;
     result 
    --------
         -2
    (1 row)
    ```

- &lt;&lt;

    Description: Binary left shift

    Example:

    ```
    openGauss=# SELECT 1<<4 AS RESULT;
     result 
    --------
         16
    (1 row)
    ```

- \&gt;\&gt;

    Description: Binary right shift

    Example:

    ```
    openGauss=# SELECT 8>>2 AS RESULT;
     result 
    --------
          2
    (1 row)
    ```

## Mathematical Functions<a name="zh-cn_topic_0283136987_zh-cn_topic_0237121971_zh-cn_topic_0059777932_s04c663eefe5a433d9a486b67706e44e1"></a>

- abs(x)

    Description: Absolute value.

    Return type: Same as input.

    Example:

    ```
    openGauss=# SELECT abs(-17.4);
     abs
    ------
     17.4
    (1 row)
    ```

- acos\(x\)

    Description: Arccosine.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT acos(-1);
           acos       
    ------------------
     3.14159265358979
    (1 row)
    ```

- asin\(x\)

    Description: Arcsine.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT asin(0.5);
           asin       
    ------------------
     .523598775598299
    (1 row)
    ```

- atan\(x\)

    Description: Arctangent.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT atan(1);
           atan       
    ------------------
     .785398163397448
    (1 row)
    ```

- atan2(y, x)

    Description: Arctangent of y/x.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT atan2(2, 1);
          atan2
    ------------------
     1.10714871779409
    (1 row)
    ```

- bin_to_num\(VARIADIC number[]\)

    Description: Converts a bit vector to its equivalent number. Each argument of this function represents a bit in the bit vector. Each expression must evaluate to 0 or 1.

    Return type: number

    Example:

    ```
    openGauss=# SELECT bin_to_num(1, 0, 1);
      bin_to_num
    ---------------
               5
    (1 row)
    ```

- bitand\(integer, integer\)

    Description: Computes the result of the bitwise AND (&amp;) operation on two numbers.

    Return type: A bigint number.

    Example:

    ```
    openGauss=# SELECT bitand(127, 63);
     bitand 
    --------
         63
    (1 row)
    ```

- cbrt\(dp\)

    Description: Cube root.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT cbrt(27.0);
     cbrt
    ------
        3
    (1 row)
    ```

- ceil\(x\)

    Description: The smallest integer not less than the argument.

    Return type: integer.

    Example:

    ```
    openGauss=# SELECT ceil(-42.8);
     ceil 
    ------
      -42
    (1 row)
    ```

- ceiling(dp or numeric)

    Description: The smallest integer not less than the parameter (alias of ceil).

    Return type: dp or numeric, same as input without implicit type conversion.

    Example:

    ```
    openGauss=# SELECT ceiling(-95.3);
     ceiling
    ---------
         -95
    (1 row)
    ```

- cos\(x\)

    Description: Cosine.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT cos(-3.1415927);
            cos        
    -------------------
     -.999999999999999
    (1 row)
    ```

- cot\(x\)

    Description: Cotangent.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT cot(1);
           cot
    ------------------
     .642092615934331
    (1 row)
    ```

- degrees\(dp\)

    Description: Converts radians to degrees.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT degrees(0.5);
         degrees
    ------------------
     28.6478897565412
    (1 row)
    ```

- div\(y numeric, x numeric\)

    Description: The integer part of the quotient of y divided by x.

    Return type: numeric

    Example:

    ```
    openGauss=# SELECT div(9,4);
     div
    -----
       2
    (1 row)
    ```

- exp(x)

    Description: Natural exponent.

    Return type: dp or numeric, same as input without implicit type conversion.

    Example:

    ```
    openGauss=# SELECT exp(1.0);
            exp         
    --------------------
     2.7182818284590452
    (1 row)
    ```

- floor\(x\)

    Description: The largest integer not greater than the argument.

    Return type: Same as input.

    Example:

    ```
    openGauss=# SELECT floor(-42.8);
     floor 
    -------
       -43
    (1 row)
    ```

- int1\(in\)

    Description: Converts the input text parameter to an int1 type value and returns it.

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

- int2\(in\)

    Description: Converts the input parameter to an int2 type value and returns it.

    Supported input parameter types include float4, float8, int16, numeric, and text.

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

- int4\(in\)

    Description: Converts the input parameter to an int4 type value and returns it.

    Supported input parameter types include bit, boolean, char, double precision, int16, numeric, real, smallint, and text.

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

- float4\(in\)

  Description: Converts the input parameter to a float4 type value and returns it. Supported input parameter types include: bigint, double precision, int16, integer, numeric, smallint, and text.

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

- float8\(in\)

  Description: Converts the input parameter to a float8 type value and returns it. Supported input parameter types include: bigint, int16, integer, numeric, real, smallint, and text.

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

- int16\(in\)

  Description: Converts the input parameter to an int16 type value and returns it. Supported input parameter types include: bigint, boolean, double precision, integer, numeric, oid, real, smallint, tinyint.

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

- numeric(in)

  Description: Converts the input parameter to a numeric type value and returns it. Supported input parameter types include: bigint, boolean, double precision, int16, integer, money, real, smallint.

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

- oid\(in\)

  Description: Converts the input parameter to an oid type value and returns it. Supported input parameter types include: bigint, int16.

  Return type: oid

- radians\(dp\)

    Description: Converts degrees to radians.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT radians(45.0);
         radians
    ------------------
     .785398163397448
    (1 row)
    ```

- random\(\)

    Description: A random number between 0.0 and 1.0.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT random();
          random
    ------------------
     .824823560658842
    (1 row)
    ```

- multiply\(x double precision or text, y double precision or text\)

    Description: Product of x and y. Only the two scenarios multiply\(x double precision, y text\) and multiply\(x text, y double precision\) are supported.

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

- ln\(x\)

    Description: Natural logarithm.

    Return type: dp or numeric, same as input without implicit type conversion.

    Example:

    ```
    openGauss=# SELECT ln(2.0);
            ln         
    -------------------
     .6931471805599453
    (1 row)
    ```

- log\(x\)

    Description: Base-10 logarithm.

    Return type: Same as input.

    Example:

    ```
    openGauss=# SELECT log(100.0);
            log         
    --------------------
     2.0000000000000000
    (1 row)
    ```

    Supplementary note: In B-compatibility mode databases, the log function returns the natural logarithm.

    Example:

    ```
    openGauss=# SELECT log(100.0);
            log         
    --------------------
     4.605170185988092
    (1 row)
    ```

- log\(b numeric, x numeric\)

    Description: Base-b logarithm.

    Return type: numeric

    Example:

    ```
    openGauss=# SELECT log(2.0, 64.0);
            log         
    --------------------
     6.0000000000000000
    (1 row)
    ```

- mod\(x,y\)

    Description: Remainder (modulo) of x/y. If x is 0, then 0 is returned.

    Return type: Same as the parameter type.

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

- pi\(\)

    Description: The "π" constant.

    Return type: double precision

    Examples:

    ```
    openGauss=# SELECT pi();
            pi
    ------------------
     3.14159265358979
    (1 row)
    ```

- power\(a double precision, b double precision\)

    Description: A raised to the power of b.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT power(9.0, 3.0);
            power         
    ----------------------
     729.0000000000000000
    (1 row)
    ```

- round\(x\)

    Description: The integer closest to the input parameter.

    Return type: Same as the input (double precision or numeric type).

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

- round(v numeric, s int)

    Description: Retains s decimal places, and rounds the digit after the s-th decimal place.

    Return type: numeric

    Example:

    ```
    openGauss=# SELECT round(42.4382, 2);
     round
    -------
     42.44
    (1 row)
    ```

- setseed(dp)

    Description: Sets the seed for subsequent random() calls (between -1.0 and 1.0, inclusive).

    Return type: void

    Example:

    ```
    openGauss=# SELECT setseed(0.54823);
     setseed
    ---------
    
    (1 row)
    ```

- sign(x)

    Description: Returns the sign of this parameter.

    Return type: -1 indicates a negative number, 0 indicates zero, and 1 indicates a positive number.

    Example:

    ```
    openGauss=# SELECT sign(-8.4);
     sign 
    ------
       -1
    (1 row)
    ```

- sin\(x\)

    Description: Sine.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT sin(1.57079);
           sin        
    ------------------
     .999999999979986
    (1 row)
    ```

- sqrt\(x\)

    Description: Square root.

    Return type: dp or numeric, same as input without considering implicit type conversion.

    Example:

    ```
    openGauss=# SELECT sqrt(2.0);
           sqrt        
    -------------------
     1.414213562373095
    (1 row)
    ```

- tan\(x\)

    Description: Tangent.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT tan(20);
           tan        
    ------------------
     2.23716094422474
    (1 row)
    ```

- trunc\(x\)

    Description: Truncation (integer part).

    Return type: Same as input.

    Example:

    ```
    openGauss=# SELECT trunc(42.8);
     trunc 
    -------
        42
    (1 row)
    ```

- trunc\(v numeric, s int4\)

    Description: Truncate to s decimal places (trunc only supports truncation up to the number of digits within the maximum value of the int4 type).

    Return type: numeric

    Example:

    ```
    openGauss=# SELECT trunc(42.4382, 2);
     trunc
    -------
     42.43
    (1 row)
    ```

- smgrne\(a smgr, b smgr\)

    Description: Compares whether two smgr type integers are not equal.

    Return type: bool

- smgreq\(a smgr, b smgr\)

    Description: Compares whether two smgr type integers are equal.

    Return type: bool

- int1abs

    Description: Returns the absolute value of uint8 type data.

    Parameters: tinyint

    Return type: tinyint

- int1and

    Description: Returns the result of bitwise AND of two uint8 type data.

    Parameters: tinyint, tinyint

    Return type: tinyint

- int1cmp

    Description: Compares two uint8 data type values. If the first parameter is greater, 1 is returned; if the second parameter is greater, -1 is returned; if they are equal, 0 is returned.

    Parameters: tinyint, tinyint

    Return type: integer

- int1div

    Description: Returns the result of dividing two uint8 type values. The result is of float8 type.

    Parameters: tinyint, tinyint

    Return type: tinyint

- int1eq

    Description: Compares whether two uint8 type data are equal.

    Parameters: tinyint, tinyint

    Return type: boolean

- int1ge

    Description: Determines whether the first parameter is greater than or equal to the second parameter for two uint8 type data.

    Parameters: tinyint, tinyint

    Return type: boolean

- int1gt

    Description: Performs greater-than operation on unsigned 1-byte integers.

    Parameters: tinyint, tinyint

    Return type: boolean

- int1larger

    Description: Returns the maximum value of two unsigned 1-byte integers.

    Parameters: tinyint, tinyint

    Return type: tinyint

- int1le

    Description: Performs a less-than-or-equal-to operation on unsigned 1-byte integers.

    Parameters: tinyint, tinyint

    Return type: boolean

- int1lt

    Description: Performs a less-than comparison on unsigned 1-byte integers.

    Parameters: tinyint, tinyint

    Return type: boolean

- int1smaller

    Description: Returns the smaller of two unsigned 1-byte integers.

    Parameters: tinyint, tinyint

    Return type: tinyint

- int1inc

    Description: Increments an unsigned 1-byte integer by one.

    Parameters: tinyint

    Return type: tinyint

- int1mi

    Description: Performs subtraction on unsigned 1-byte integers.

    Parameters: tinyint, tinyint

    Return type: tinyint

- int1mod

    Description: Performs modulo operation on unsigned 1-byte integers.

    Parameters: tinyint, tinyint

    Return type: tinyint

- int1mul

    Description: Performs multiplication on unsigned 1-byte integers.

    Parameters: tinyint, tinyint

    Return type: tinyint

- int1ne

    Description: Performs inequality comparison on unsigned 1-byte integers.

    Parameters: tinyint, tinyint

    Return type: boolean

- int1pl

    Description: Unsigned one-byte integer addition.

    Parameters: tinyint, tinyint

    Return type: tinyint

- int1um

    Description: Negates an unsigned one-byte integer and returns a signed two-byte integer.

    Parameters: tinyint

    Return type: smallint

- int1xor

    Description: Bitwise XOR operation on unsigned 1-byte integers.

    Parameters: tinyint, tinyint

    Return type: tinyint

- cash\_div\_int1

    Description: Performs division on the money type.

    Parameters: money, tinyint

    Return type: money

- cash_mul_int1

    Description: Performs multiplication on the money type.

    Parameters: money, tinyint

    Return type: money

- int1not

    Description: Performs a binary bit flip on an unsigned 1-byte integer.

    Parameters: tinyint

    Return type: tinyint

- int1or

    Description: Performs a bitwise OR operation on unsigned 1-byte integers.

    Parameters: tinyint, tinyint

    Return type: tinyint

- int1shl

    Description: Performs an unsigned 1-byte integer left shift by a specified number of bits.

    Parameters: tinyint, integer

    Return type: tinyint

- width\_bucket\(op numeric, b1 numeric, b2 numeric, count int\)

    Description: Returns the bucket number in an equi-depth histogram with `count` buckets, where b1 is the upper bound and b2 is the lower bound, into which `operand` would be assigned.

    Return type: int

    Example:

    ```
    openGauss=# SELECT width_bucket(5.35, 0.024, 10.06, 5);
     width_bucket
    --------------
                3
    (1 row)
    ```

- width_bucket(op dp, b1 dp, b2 dp, count int)

    Description: Returns the bucket number in an equi-depth histogram with `count` buckets, where b1 is the upper bound and b2 is the lower bound, into which `operand` would be assigned.

    Return type: int

    Example:

    ```
    openGauss=# SELECT width_bucket(5.35, 0.024, 10.06, 5);
     width_bucket
    --------------
                3
    (1 row)
    ```
