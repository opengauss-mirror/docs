# Mathematical Functions and Operators<a name="EN-US_TOPIC_0242370435"></a>

## Numeric Operators<a name="en-us_topic_0237121971_en-us_topic_0059777932_s00454841bcf24ad18eed980c0e3a2f75"></a>

-   +

    Description: Addition

    Example:

    ```
    postgres=# SELECT 2+3 AS RESULT;
     result 
    --------
          5
    (1 row)
    ```

-   -

    Description: Subtraction

    Example:

    ```
    postgres=# SELECT 2-3 AS RESULT;
     result 
    --------
         -1
    (1 row)
    ```

-   \*

    Description: Multiplication

    Example:

    ```
    postgres=# SELECT 2*3 AS RESULT;
     result 
    --------
          6
    (1 row)
    ```

-   /

    Description: Division \(The result is not rounded.\)

    Example:

    ```
    postgres=# SELECT 4/2 AS RESULT;
     result 
    --------
          2
    (1 row)
    ```

    ```
    postgres=# SELECT 4/3 AS RESULT;
          result      
    ------------------
     1.33333333333333
    (1 row)
    ```

-   +/-

    Description: Positive/negative

    Example:

    ```
    postgres=# SELECT -2 AS RESULT;
     result 
    --------
         -2
    (1 row)
    ```

-   %

    Description: Model \(to obtain the remainder\)

    Example:

    ```
    postgres=# SELECT 5%4 AS RESULT;
     result 
    --------
          1
    (1 row)
    ```

-   @

    Description: Absolute value

    Example:

    ```
    postgres=# SELECT @ -5.0 AS RESULT;
     result 
    --------
        5.0
    (1 row)
    ```

-   ^

    Description: Power \(exponent calculation\)

    Example:

    ```
    postgres=# SELECT 2.0^3.0 AS RESULT;
           result       
    --------------------
     8.0000000000000000
    (1 row)
    ```

-   |/

    Description: Square root

    Example:

    ```
    postgres=# SELECT |/ 25.0 AS RESULT;
     result 
    --------
          5
    (1 row)
    ```

-   ||/

    Description: Cubic root

    Example:

    ```
    postgres=# SELECT ||/ 27.0 AS RESULT;
     result 
    --------
          3
    (1 row)
    ```

-   !

    Description: Factorial

    Example:

    ```
    postgres=# SELECT 5! AS RESULT;
     result 
    --------
        120
    (1 row)
    ```

-   !!

    Description: Factorial \(prefix operator\)

    Example:

    ```
    postgres=# SELECT !!5 AS RESULT;
     result 
    --------
        120
    (1 row)
    ```

-   &

    Description: Binary AND

    Example:

    ```
    postgres=# SELECT 91&15  AS RESULT;
     result 
    --------
         11
    (1 row)
    ```

-   |

    Description: Binary OR

    Example:

    ```
    postgres=# SELECT 32|3  AS RESULT;
     result 
    --------
         35
    (1 row)
    ```

-   \#

    Description: Binary XOR

    Example:

    ```
    postgres=# SELECT 17#5  AS RESULT;
     result 
    --------
         20
    (1 row)
    ```

-   \~

    Description: Binary NOT

    Example:

    ```
    postgres=# SELECT ~1 AS RESULT;
     result 
    --------
         -2
    (1 row)
    ```

-   <<

    Description: Binary shift left

    Example:

    ```
    postgres=# SELECT 1<<4 AS RESULT;
     result 
    --------
         16
    (1 row)
    ```

-   \>\>

    Description: Binary shift right

    Example:

    ```
    postgres=# SELECT 8>>2 AS RESULT;
     result 
    --------
          2
    (1 row)
    ```


## Numeric Operation Functions<a name="en-us_topic_0237121971_en-us_topic_0059777932_s04c663eefe5a433d9a486b67706e44e1"></a>

-   abs\(x\)

    Description: Absolute value

    Return type: same as the input

    Example:

    ```
    postgres=# SELECT abs(-17.4);
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
    postgres=# SELECT acos(-1);
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
    postgres=# SELECT asin(0.5);
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
    postgres=# SELECT atan(1);
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
    postgres=# SELECT atan2(2, 1);
          atan2
    ------------------
     1.10714871779409
    (1 row)
    ```

-   bitand\(integer, integer\)

    Description: Performs AND \(&\) operation on two integers.

    Return type: bigint

    Example:

    ```
    postgres=# SELECT bitand(127, 63);
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
    postgres=# SELECT cbrt(27.0);
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
    postgres=# SELECT ceil(-42.8);
     ceil 
    ------
      -42
    (1 row)
    ```

-   ceiling\(dp or numeric\)

    Description: Minimum integer \(alias of ceil\) greater than or equal to the parameter

    Return type: same as the input

    Example:

    ```
    postgres=# SELECT ceiling(-95.3);
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
    postgres=# SELECT cos(-3.1415927);
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
    postgres=# SELECT cot(1);
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
    postgres=# SELECT degrees(0.5);
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
    postgres=# SELECT div(9,4);
     div
    -----
       2
    (1 row)
    ```

-   exp\(x\)

    Description: Natural exponent

    Return type: same as the input

    Example:

    ```
    postgres=# SELECT exp(1.0);
            exp         
    --------------------
     2.7182818284590452
    (1 row)
    ```

-   floor\(x\)

    Description: Not larger than the maximum integer of the parameter

    Return type: same as the input

    Example:

    ```
    postgres=# SELECT floor(-42.8);
     floor 
    -------
       -43
    (1 row)
    ```

-   radians\(dp\)

    Description: Converts angles to radians.

    Return type: double precision

    Example:

    ```
    postgres=# SELECT radians(45.0);
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
    postgres=# SELECT random();
          random
    ------------------
     .824823560658842
    (1 row)
    ```

-   ln\(x\)

    Description: Natural logarithm

    Return type: same as the input

    Example:

    ```
    postgres=# SELECT ln(2.0);
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
    postgres=# SELECT log(100.0);
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
    postgres=# SELECT log(2.0, 64.0);
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
    postgres=# SELECT mod(9,4);
     mod 
    -----
       1
    (1 row)
    ```

    ```
    postgres=# SELECT mod(9,0);
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
    postgres=# SELECT pi();
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
    postgres=# SELECT power(9.0, 3.0);
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
    postgres=# SELECT round(42.4);
     round 
    -------
        42
    (1 row)
    
    postgres=# SELECT round(42.6);
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
    postgres=# SELECT round(42.4382, 2);
     round
    -------
     42.44
    (1 row)
    ```

-   setseed\(dp\)

    Description: Sets seed for the following random\(\) invoking \(between -1.0 and 1.0, inclusive\).

    Return type: void

    Example:

    ```
    postgres=# SELECT setseed(0.54823);
     setseed
    ---------
    
    (1 row)
    ```

-   sign\(x\)

    Description: returns symbols of this parameter.

    The return value type:-1 indicates negative. 0 indicates 0, and 1 indicates a positive number.

    Example:

    ```
    postgres=# SELECT sign(-8.4);
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
    postgres=# SELECT sin(1.57079);
           sin        
    ------------------
     .999999999979986
    (1 row)
    ```

-   sqrt\(x\)

    Description: Square root

    Return type: same as the input

    Example:

    ```
    postgres=# SELECT sqrt(2.0);
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
    postgres=# SELECT tan(20);
           tan        
    ------------------
     2.23716094422474
    (1 row)
    ```

-   trunc\(x\)

    Description: truncates \(the integral part\).

    Return type: same as the input

    Example:

    ```
    postgres=# SELECT trunc(42.8);
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
    postgres=# SELECT trunc(42.4382, 2);
     trunc
    -------
     42.43
    (1 row)
    ```

-   width\_bucket\(op numeric, b1 numeric, b2 numeric, count int\)

    Description: Returns a bucket to which the operand will be assigned in an equi-depth histogram with  **count**  buckets, ranging from  **b1**  to  **b2**.

    Return type: int

    Example:

    ```
    postgres=# SELECT width_bucket(5.35, 0.024, 10.06, 5);
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
    postgres=# SELECT width_bucket(5.35, 0.024, 10.06, 5);
     width_bucket
    --------------
                3
    (1 row)
    ```


