# Character Processing Functions and Operators<a name="EN-US_TOPIC_0289900656"></a>

Compared with the original openGauss, Dolphin modifies character processing functions and operators as follows:

1. The regexp, not regexp, and rlike operators are added.
2. The locate, lcase, ucase, insert, bin, chara, elt, field, find_int_set, hex, space, and soundex functions are added.
3. The performance of the length, bit_length, octet_length, convert, and format functions are modified.
4. The XOR function of the `^` operator is added, and the `LIKE BINARY/NOT LIKE BINARY` operator is added.
5. The `LIKE/NOT LIKE` operator is modified.

-   bit\_length\(string\)

    Description: Specifies the number of bits in a string. For binary input, the value is padded up to a multiple of 8.

    Return type: int

    Example:

    ```
    openGauss=# SELECT bit_length('world');
     bit_length
    ------------
             40
    (1 row)

    openGauss=# SELECT bit_length(b'010');
     bit_length
    ------------
              8
    (1 row)
    ```

-   insert\(des text, start int, length int, src text\)

    Description: Inserts a new string at a specified position of the original string and replaces a certain number of characters in the original string from the specified position.

    Return type: text

    Example:

    ```
    openGauss=# select insert('abcdefg', 2, 4, 'yyy');
    insert
    --------
    ayyyfg
    (1 row)
    ```

-   lcase\(string\)

    Description: Converts a string to lowercase, equivalent to **lower**.

    Return type: varchar

    Example:

    ```
    openGauss=# SELECT lcase('TOM');
     lcase
    -------
     tom
    (1 row)
    ```

-   length\(string\)

    Description: Obtains the number of characters in a string. For multi-character encoding (such as Chinese), the number of bytes is returned.

    Return type: integer

    Example:

    ```
    openGauss=# SELECT length('abcd');
     length 
    --------
          4
    (1 row)

    openGauss=# SELECT length ('中文');
     length 
    --------
          6
    (1 row)
    ```

- format\(val number, dec_num int \[,locale string\]\)

  Description: Returns **val** in the format of x,xxx,xxx.xx. The **val** will retain *dec_num* decimal places. A maximum of 32 decimal places can be reserved. If **dec\_num** is greater than 32, 32 decimal places are reserved. If **dec\_num** is set to 0, the returned content does not contain the decimal point or decimal part. The third parameter is optional. You can specify the format of the decimal point and thousands separator in the returned content based on locale. If the third parameter is not specified or the value of the third parameter is invalid, the default value **en_US** is used.

  Note: This format function is used for B-compatible databases and has different semantics from the original format function of openGauss. To use this semantics, create a B-compatible database, enable the B-compatible SQL engine plug-in, and set **B_COMPATIBILITY_MODE** to **TRUE**.

  Return type: text

  Example:

    ```
    openGauss=# CREATE DATABASE B_COMPATIBILITY_DATABASE DBCOMPATIBILITY 'B';
    CREATE DATABASE
    openGauss=# \c B_COMPATIBILITY_DATABASE
    b_compatibility_database=# CREATE EXTENSION dolphin;
    CREATE EXTENSION
    b_compatibility_database=# SET B_COMPATIBILITY_MODE = TRUE;
    SET
    b_compatibility_database=# select format(1234.4567,2);
      format
    -----------
     1,234.46
    (1 row)

    b_compatibility_database=# select format(1234.5,4);
      format
    -----------
     1,234.5000
    (1 row)

    b_compatibility_database=# select format(1234.5,0);
      format
    -----------
     1,235
    (1 row)

    b_compatibility_database=# select format(1234.5,2,'de_DE');
      format
    -----------
     1.234,50
    (1 row)
    ```

- hex\(number or string or bytea or bit\)

  Description: Converts a number, character, binary character type, or bit string type to a hexadecimal format.

  Note: The openGauss considers the backslash (\) as a character. Therefore, the length of the character string **\n** is 2.

  Return type: text

  Example:

    ```
    openGauss=# SELECT hex(256);
     hex
    -----
     100
    (1 row)

    openGauss=# select hex('abc');
     hex
    --------
     616263
    (1 row)

    openGauss=# select hex('abc'::bytea);
     hex
    --------
     616263
    (1 row)

    openGauss=# select hex(b'1111');
     hex
    -----
     0f
    (1 row)

    openGauss=# select hex('\n');
     hex
    -------
     5c6e
    (1 row)
    ```

-   locate\(substring, string \[,position\]\)

    Description: From the specified **position** (**1** by default) in the string on, queries and returns the value of **position** where the substring occurs for the first time. Parameters are case-sensitive.

    -   If the value of **position** is **0**, 0 is returned.
    -   If the value of **position** is negative, the search is performed backwards from the last *n*th character in the string, in which *n* indicates the absolute value of **position**.

    Return type: integer. If the character string does not exist, **0** is returned.

    Example:

    ```
    openGauss=# SELECT locate('ing', 'string');
     locate
    --------
          4
    (1 row)

    openGauss=# SELECT locate('ing', 'string', 0);
     locate
    --------
          0
    (1 row)

    openGauss=# SELECT locate('ing', 'string', 5);
     locate
    --------
          0
    (1 row)
    ```

-   octet\_length\(string\)

    Description: It is equivalent to **length**.

    Return type: int

    Example:

    ```
    openGauss=# SELECT octet_length ('中文');
     octet_length
    --------------
                6
    (1 row)
    ```

-   source\_string regexp pattern

    Description: Indicates the pattern matching operator of a regular expression.

    **source\_string** indicates the source string and **pattern** indicates the matching pattern of the regular expression.

    Return type: integer (0 or 1)

    Example:

    ```
    openGauss=# SELECT 'str' regexp '[ac]' AS RESULT;
     result
    --------
          0
    (1 row)
    ```

-   source\_string not regexp pattern

    Description: Reverses the result of regexp.

    **source\_string** indicates the source string and **pattern** indicates the matching pattern of the regular expression.

    Return type: integer (0 or 1)

    Example:

    ```
    openGauss=# SELECT 'str' not regexp '[ac]' AS RESULT;
     result
    --------
          1
    (1 row)
    ```

-   source\_string rlike pattern

    Description: It is equivalent to **regexp**.

    **source\_string** indicates the source string and **pattern** indicates the matching pattern of the regular expression.

    Return type: integer (0 or 1)

    Example:

    ```
    openGauss=# SELECT 'str' rlike '[ac]' AS RESULT;
     result
    --------
          0
    (1 row)
    ```

-   ucase\(string\)

    Description: Converts the string into the uppercase. It is equivalent to **upper**.

    Return type: varchar

    Example:

    ```
    openGauss=# SELECT ucase('tom');
     ucase
    -------
     TOM
    (1 row)
    ```

-   bin(number or string)

    Description: Returns a binary string of N integers or numeric characters. For Chinese characters, 0 is returned.

    Return type: text

    Example:

    ```
    b_compatibility_database=# SELECT bin('309');
    bin
    ------------
    100110101
    (1 row)

    b_compatibility_database=# SELECT bin('你好'); 
    bin
    ---
    0 
    (1 row)
    ```

-   chara(any)

    Description: Converts multiple digits into multiple characters based on ASCII codes.

    Return type: text

    Example:

    ```
    b_compatibility_database=# select chara(77,77.3,'77.3','78.8',78.8);
    chara
    ------------
    MMMNO
    (1 row)
    ```

-   char_length (string) or character_leng (string)

    Description: Specifies the number of characters in a character string. The length of a Chinese character is 1. The binary type is supported.

    Return type: int

    Example:

    ```
    openGauss=# SELECT char_length('hello');
    char_length
    -------------
            5
    (1 row)
    b_compatibility_database=# SELECT char_length(B'101');
    char_length
    -------------
            1
    (1 row)
    ```

-   convert\(expr using transcoding\_name\)

    Description: Converts **expr** using **transcoding_name**.

    Return type: text

    Example:

    ```
    b_compatibility_database=# select convert('a' using 'utf8');
    convert
    ---------
    a 
    (1 row)
    ```

-   elt(number, str1,str2,str3,...)

    Description: Returns the *N*th string.

    Return type: text

    Example:

    ```
    b_compatibility_database=# select elt(3,'wo','ceshi','disange');
    elt   
    ---------
    disange
    (1 row)
    ```
    
-   field(str, str1,str2,str3,...)

    Description: Obtains the position of str in strn. The position is case insensitive.

    Return type: int

    Example:

    ```
    b_compatibility_database=# select field('ceshi','wo','ceshi','disange');
    field 
    -------
        2
    (1 row)
    ```
    
-   find_in_set(str, strlist)

    Description: Obtains the position of str in strlist. The position is case insensitive and is separated by commas (,).

    Return type: int

    Example:

    ```
    b_compatibility_database=# select find_in_set('ceshi','wo','ceshi,ni,wo,ta');
    find_in_set 
    -------------
            3
    (1 row)
    ```

-   space(number)

    Description: Returns *N* spaces.

    Return type: text

    Example:

    ```
    b_compatibility_database=# select space('5');
    space 
    -------
        
    (1 row)
    ```

-   soundex(str)

    Description: Returns the algorithm that describes the alphanumeric pattern of the speech representation of the specified string.

    Return type: text

    Example:

    ```
    b_compatibility_database=# select soundex('abcqwcaa');
    soundex 
    ---------
    A120
    (1 row)
    ```

-   make_set(number, string1, string2, ...)

    Description: Returns a set value (a string containing substrings separated by commas) consisting of a string with the corresponding bit set in number. string1 corresponds to bit 0, string2 corresponds to bit 1, and so on.
    NULL values in string1, string2, ... are not added to the result.

    Return type: text

    ```sql
    select make_set(1|4, 'one', 'two', NULL, 'four');
     make_set 
    ----------
     one
    (1 row)
    ```

- ^

  Description: Implements the XOR function of two character strings. The content before the first non-numeric symbol is truncated for XOR.

  Return type: INT

  Example:

  ```
  openGauss=# SELECT '123a'^'123';
  ?column?
  ---------
        0
  (1 row)
  ```

- like/not like

  Description: Specifies whether the string matches the pattern string following LIKE. In the source version, LIKE of openGauss is case sensitive. In this version, when `b_compatibility_mode` is set to `TRUE`, LIKE is case insensitive. When `b_compatibility_mode` is set to `FALSE`, LIKE is case sensitive. If the string matches the provided pattern, the LIKE expression returns true (the ILIKE expression returns false).

  Return type: Boolean

  Example:

  ```
  openGauss=# SELECT 'a' like 'A' as result;
   result
  ------------
           t
  (1 row)
  
  openGauss=# SELECT 'abc' like 'a' as result;
   result
  ------------
            f
  (1 row)
  
  openGauss=# SELECT 'abc' like 'A%' as result;
   result
  ------------
            t
  (1 row)
  ```

- like binary/not like binary

  Description: Determines whether a string can match the pattern string after LIKE BINARY. LIKE BINARY uses case-sensitive pattern matching. If the pattern is matched, true is returned (NOT LIKE BINARY returns false). If the pattern is not matched, false is returned (NOT LIKE BINARY returns true).

  Return type: Boolean

  Example:

  ```
  openGauss=# SELECT 'a' like binary 'A' as result;
   result
  ------------
           f
  (1 row)
  
  openGauss=# SELECT 'a' like binary 'a' as result;
   result
  ------------
           t
  (1 row)
  
  openGauss=# SELECT 'abc' like binary 'a' as result;
   result
  ------------
            f
  (1 row)
  
  openGauss=# SELECT 'abc' like binary 'a%' as result;
   result
  ------------
            t
  (1 row)
  ```

  
