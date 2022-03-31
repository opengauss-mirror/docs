# Functions<a name="EN-US_TOPIC_0000001210461850"></a>

The common functions of openGauss are as follows:

## Mathematical Functions<a name="section168311415165912"></a>

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

    Description: Remainder of x/y \(model\) If x equals to 0,  **0**  is returned.

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


## Trigonometric Functions<a name="section12324117201220"></a>

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


## String Functions and Operators<a name="section148338314152"></a>

-   string || string

    Description: Concatenates strings.

    Return type: text

    Example:

    ```
    openGauss=# SELECT 'MPP'||'DB' AS RESULT;
     result 
    --------
     MPPDB
    (1 row)
    ```


-   bit\_length\(string\)

    Description: Specifies the number of bits occupied by a string.

    Return type: int

    Example:

    ```
    openGauss=# SELECT bit_length('world');
     bit_length
    ------------
             40
    (1 row)
    ```


-   convert\(string bytea, src\_encoding name, dest\_encoding name\)

    Description: Converts the bytea string to  **dest\_encoding**.  **src\_encoding**  specifies the source code encoding. The string must be valid in this encoding.

    Return type: bytea

    Example:

    ```
    openGauss=# SELECT convert('text_in_utf8', 'UTF8', 'GBK');
              convert        
    ----------------------------
     \x746578745f696e5f75746638
    (1 row)
    ```


-   lower\(string\)

    Description: Converts the string into the lowercase.

    Return type: varchar

    Example:

    ```
    openGauss=# SELECT lower('TOM');
     lower
    -------
     tom
    (1 row)
    ```


-   octet\_length\(string\)

    Description: Specifies the number of bytes in a string.

    Return type: int

    Example:

    ```
    openGauss=# SELECT octet_length('jose');
     octet_length
    --------------
                4
    (1 row)
    ```


-   overlay\(string placing string FROM int \[for int\]\)

    Description: Replaces substrings.  **FROM int**  indicates the start position of the replacement in the first string.  **for int**  indicates the number of characters replaced in the first string.

    Return type: text

    Example:

    ```
    openGauss=# SELECT overlay('hello' placing 'world' from 2 for 3 );
     overlay 
    ---------
     hworldo
    (1 row)
    ```


-   position\(substring in string\)

    Description: Specifies the position of a substring. Parameters are case-sensitive.

    Return type: int. If the character string does not exist,  **0**  is returned.

    Example:

    ```
    openGauss=# SELECT position('ing' in 'string');
     position
    ----------
            4
    (1 row)
    ```


-   substring\(string \[from int\] \[for int\]\)

    Description: Extracts a substring.  **from int**  indicates the start position of the truncation.  **for int**  indicates the number of characters truncated.

    Return type: text

    Example:

    ```
    openGauss=# SELECT substring('Thomas' from 2 for 3);
     substring
    -----------
     hom
    (1 row)
    ```


-   substring\(string from  _pattern_\)

    Description: Extracts substrings matching the POSIX regular expression. It returns the text that matches the pattern. If no match record is found, a null value is returned.

    Return type: text

    Example:

    ```
    openGauss=# SELECT substring('Thomas' from '...$');
     substring
    -----------
     mas
    (1 row)
    openGauss=# SELECT substring('foobar' from 'o(.)b');
     result 
    --------
     o
    (1 row)
    openGauss=# SELECT substring('foobar' from '(o(.)b)');
     result 
    --------
     oob
    (1 row)
    ```


-   trim\(\[leading |trailing |both\] \[characters\] from string\)

    Description: Removes the longest string containing only the characters \(a space by default\) from the start/end/both ends of the string.

    Return type: varchar

    Example:

    ```
    openGauss=# SELECT trim(BOTH 'x' FROM 'xTomxx');
     btrim
    -------
     Tom
    (1 row)
    ```

    ```
    openGauss=# SELECT trim(LEADING 'x' FROM 'xTomxx');
     ltrim
    -------
     Tomxx
    (1 row)
    ```

    ```
    openGauss=# SELECT trim(TRAILING 'x' FROM 'xTomxx');
     rtrim
    -------
     xTom
    (1 row)
    ```


-   upper\(string\)

    Description: Converts the string into the uppercase.

    Return type: varchar

    Example:

    ```
    openGauss=# SELECT upper('tom');
     upper
    -------
     TOM
    (1 row)
    ```


-   ascii\(string\)

    Description: Indicates the ASCII code of the first character in the string.

    Return type: integer

    Example:

    ```
    openGauss=# SELECT ascii('xyz');
     ascii 
    -------
       120
    (1 row)
    ```


-   btrim\(string text \[, characters text\]\)

    Description: Removes the longest string consisting only of characters in  **characters**  \(a space by default\) from the start and end of  **string**.

    Return type: text

    Example:

    ```
    openGauss=# SELECT btrim('sring' , 'ing');
     btrim
    -------
     sr
    (1 row)
    ```


-   chr\(integer\)

    Description: Specifies the character of the ASCII code.

    Return type: varchar

    Example:

    ```
    openGauss=# SELECT chr(65);
     chr
    -----
     A
    (1 row)
    ```


-   convert\(string bytea, src\_encoding name, dest\_encoding name\)

    Description: Converts the bytea string to  **dest\_encoding**.  **src\_encoding**  specifies the source code encoding. The string must be valid in this encoding.

    Return type: bytea

    Example:

    ```
    openGauss=# SELECT convert('text_in_utf8', 'UTF8', 'GBK');
              convert        
    ----------------------------
     \x746578745f696e5f75746638
    (1 row)
    ```


-   initcap\(string\)

    Description: Converts the first letter of each word in the string into the uppercase and the other letters into the lowercase.

    Return type: text

    Example:

    ```
    openGauss=# SELECT initcap('hi THOMAS');
      initcap
    -----------
     Hi Thomas
    (1 row)
    ```


-   length\(string\)

    Description: Obtains the number of characters in a string.

    Return type: integer

    Example:

    ```
    openGauss=# SELECT length('abcd');
     length 
    --------
          4
    (1 row)
    ```


-   lpad\(string text, length int \[, fill text\]\)

    Description: Fills up  **string**  to  **length**  by appending the characters  **fill**  \(a space by default\). If  **string**  is already longer than  **length**, then it is truncated.

    Return type: text

    Example:

    ```
    openGauss=# SELECT lpad('hi', 5, 'xyza');
     lpad  
    -------
     xyzhi
    (1 row)
    ```


-   ltrim\(string \[, characters\]\)

    Description: Removes the longest string containing only characters from characters \(a space by default\) from the start of string.

    Return type: varchar

    Example:

    ```
    openGauss=# SELECT ltrim('xxxxTRIM','x');
     ltrim
    -------
     TRIM
    (1 row)
    ```


-   md5\(string\)

    Description: Encrypts a string in MD5 mode and returns a value in hexadecimal form.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >The MD5 encryption algorithm is not recommended because it has lower security and poses security risks.

    Return type: text

    Example:

    ```
    openGauss=# SELECT md5('ABC');
                   md5                
    ----------------------------------
     902fbdd2b1df0c4f70b4a5d23525e932
    (1 row)
    ```


-   repeat\(string text, number int \)

    Description: Repeats  **string**  the specified number of times.

    Return type: text

    Example:

    ```
    openGauss=# SELECT repeat('Pg', 4);
      repeat
    ----------
     PgPgPgPg
    (1 row)
    ```


-   replace\(string text, from text, to text\)

    Description: Replaces all occurrences in  **string**  of substring  **from**  with substring  **to**.

    Return type: text

    Example:

    ```
    openGauss=# SELECT replace('abcdefabcdef', 'cd', 'XXX');
        replace     
    ----------------
     abXXXefabXXXef
    (1 row)
    ```


-   rpad\(string text, length int \[, fill text\]\)

    Description: Fills up  **string**  to  **length**  by appending the characters  **fill**  \(a space by default\). If  **string**  is already longer than  **length**, then it is truncated.

    Return type: text

    Example:

    ```
    openGauss=# SELECT rpad('hi', 5, 'xy');
     rpad
    -------
     hixyx
    (1 row)
    ```


-   rtrim\(string text \[, characters text\]\)

    Description: Removes the longest string containing only characters from characters \(a space by default\) from the end of string.

    Return type: text

    Example:

    ```
    openGauss=# SELECT rtrim('trimxxxx', 'x');
     rtrim
    -------
     trim
    (1 row)
    ```


-   split\_part\(string text, delimiter text, field int\)

    Description: Splits  **string**  on  **delimiter**  and returns the  _field_th column \(counting from text of the first appeared delimiter\).

    Return type: text

    Example:

    ```
    openGauss=# SELECT split_part('abc~@~def~@~ghi', '~@~', 2);
     split_part
    ------------
     def
    (1 row)
    ```


-   strpos\(string, substring\)

    Description: Specifies the position of a substring. It is the same as  **position\(substring in string\)**. However, the parameter sequences of them are reversed.

    Return type: int

    Example:

    ```
    openGauss=# SELECT strpos('source', 'rc');
     strpos
    --------
          4
    (1 row)
    ```


-   to\_hex\(number int or bigint\)

    Description: Converts a number to a hexadecimal expression.

    Return type: text

    Example:

    ```
    openGauss=# SELECT to_hex(2147483647);
      to_hex
    ----------
     7fffffff
    (1 row)
    ```


-   translate\(string text, from text, to text\)

    Description: Any character in  **string**  that matches a character in the  **from**  set is replaced by the corresponding character in the  **to**  set. If  **from**  is longer than  **to**, extra characters occurred in  **from**  are removed.

    Return type: text

    Example:

    ```
    openGauss=# SELECT translate('12345', '143', 'ax');
     translate
    -----------
     a2x5
    (1 row)
    ```


## Functions Related to Type Conversion<a name="section162813550446"></a>

-   to\_char\(timestamp, text\)

    Description: Converts the values of the timestamp type into the strings in the specified format.

    Return type: text

    Example:

    ```
    openGauss=# SELECT to_char(current_timestamp, 'HH12:MI:SS');
     to_char
    ----------
     10:55:59
    (1 row)
    ```


-   to\_char\(interval, text\)

    Description: Converts the values of the time interval type into the strings in the specified format.

    Return type: text

    Example:

    ```
    openGauss=# SELECT to_char(interval '15h 2m 12s', 'HH24:MI:SS');
     to_char
    ----------
     15:02:12
    (1 row)
    ```


-   to\_char\(int, text\)

    Description: Converts the values of the integer type into the strings in the specified format.

    Return type: text

    Example:

    ```
    openGauss=# SELECT to_char(125, '999');
     to_char
    ---------
      125
    (1 row)
    ```


-   to\_char\(double precision/real, text\)

    Description: Converts the values of the floating point type into the strings in the specified format.

    Return type: text

    Example:

    ```
    openGauss=# SELECT to_char(125.8::real, '999D99');
     to_char 
    ---------
      125.80
    (1 row)
    ```


-   to\_char\(numeric, text\)

    Description: Converts the values of the numeric type into the strings in the specified format.

    Return type: text

    Example:

    ```
    openGauss=# SELECT to_char(-125.8, '999D99S');
     to_char
    ---------
     125.80-
    (1 row)
    ```


-   to\_date\(text, text\)

    Description: Converts the values of the string type into the dates in the specified format.

    Return type: timestamp without time zone

    Example:

    ```
    openGauss=# SELECT to_date('05 Dec 2000', 'DD Mon YYYY');
           to_date
    ---------------------
     2000-12-05 00:00:00
    (1 row)
    ```


-   to\_number\(text, text\)

    Description: Converts the values of the string type into the numbers in the specified format.

    Return type: numeric

    Example:

    ```
    openGauss=# SELECT to_number('12,454.8-', '99G999D9S');
     to_number
    -----------
      -12454.8
    (1 row)
    ```


-   to\_timestamp\(text, text\)

    Description: Converts values of the string type into the timestamp of the specified type.

    Return type: timestamp

    Example:

    ```
    openGauss=# SELECT to_timestamp('05 Dec 2000', 'DD Mon YYYY');
        to_timestamp
    ---------------------
     2000-12-05 00:00:00
    (1 row)
    ```


-   to\_timestamp\(double precision\)

    Description: Converts a UNIX century into a timestamp.

    Return type: timestamp with time zone

    Example:

    ```
    openGauss=# SELECT to_timestamp(1284352323);
          to_timestamp      
    ------------------------
     2010-09-13 12:32:03+08
    (1 row)
    ```


