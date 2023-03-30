# Character Processing Functions and Operators<a name="EN-US_TOPIC_0289900656"></a>

Compared with the original openGauss, Dolphin modifies character processing functions and operators as follows:

1. The regexp, not regexp, and rlike operators are added.
2. The locate, lcase, ucase, insert, bin, char, elt, field, find\_int\_set, hex, space, soundex, export\_set, ord, substring\_index, and from\_base64 functions are added.
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

-   char(any)

    Description: Converts multiple digits into multiple characters based on ASCII codes.

    Return type: text

    Example:

    ```
    b_compatibility_database=# select char(77,77.3,'77.3','78.8',78.8);
    char
    -------
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

-   convert(expr using transcoding_name)

    Description: Converts expr based on the encoding mode specified by transcoding\_name.
    Note: By default, the database supports the following format: convert(string bytea, src\_encoding name, dest\_encoding name), where the bytea is converted using the encoding mode specified by dest\_encoding. In Dolphin, transcoding\_name after USING can be used to specify the encoding mode to convert expr, and the preceding three parameters are not supported.
    
    Return type: text

    Example:

    ```
    b_compatibility_database=# select convert('a' using 'utf8');
    convert
    ---------
    a 
    (1 row)
    
    b_compatibility_database=# select convert('a' using utf8);
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

- substring_index(str, delim, count)
  
  Description: Returns the substring between the start position of **str** and the position where **delim** is matched for **count** times. **count** indicates the number of matching times. If **count** is a positive number, the matching starts from the left of **str** and the substring on the left of the matching position is returned. If **count** is a negative number, the matching starts from the right of **str** and the substring on the right of the matching position is returned. The value of **count** ranges from INT64_MIN to INT64_MAX.
  
  Return type: text
  
  Example:
  
  ```
    openGauss=# SELECT instr('abcdabcdabcd', 'bcd', 2);
     substring_index 
    -----------------
     abcda
    (1 row)
    
  ``` 


-   export_set(bits, on, off, separator, number of bits)

    Description: Returns a string that will display the number of digits. This function requires five independent variables to work. This function converts the first parameter (integer) to a binary number. If the binary number is 1, **on** is returned. If the binary number is 0, **off** is returned.

    Return type: text
    
    Example:
    ```sql
    openGauss=# SELECT EXPORT_SET(5,'Y','N',',',5);
     export_set 
    -------------
     Y,N,Y,N,N
    (1 row)
    ```

- FROM_BASE64

  Description: Decodes a BASE64-encoded character string based on BASE64 encoding rules and returns the decoding result.

  Return type: text

    Encoding rules:

    - Every three bytes (24 bits) are converted into four bytes (32 bits). Six bits form a group, and two 0s are padded to the most significant bits to form a byte. In this way, three bytes can be padded into four bytes, and each byte corresponds to only 0(00000000) to 63(00111111).

    - Add a newline character for every 76 characters.

    - The codes from 0(00000000) to 61(00111111) correspond to 62 characters from A to Z, a to z, and 0 to 9. The code of 62(00111110) is '+', and the code of 63(00111111) is '/'.

    - If the number of bytes in the input character string is not a multiple of three, the remaining bytes are converted according to the encoding rule. If a byte is less than eight bits, 0s are padded to the least significant bits to fill eight bits, and '=' is used to fill four bytes in the conversion result. If the last group contains only two bytes, every six bits form a group, and the third group contains only four bits, pad two 0s to the least significant bits, pad two 0s to the most significant bits of the three groups, convert the three groups into three characters, and add an equal sign (=) to the end of the three groups. If the last group contains only one byte, every six bits form a group, and the second group contains only two bits, four 0s need to be padded to the lower bits. Then, two 0s need to be padded to the upper bits of the two groups to convert the two groups into two characters, and two equal signs (=) need to be added to the end of the two groups.

    

    Decoding rules:

    - Represent the input string in binary mode and remove the two 0s from the high-order bits of each byte.
    - According to the encoding rule, the number of correct encoding bytes must be a multiple of 4. If there is an equal sign (=) at the end, 0s in the least significant bits of the last byte except the equal sign (=) are removed based on the number of equal signs (=). If there is an equal sign (=) at the end, that is, the last four bytes are '\*\*\*=', convert the first three bytes into binary and delete the last two zeros. If there are two equal signs (=) at the end, that is, the last four bytes are '\*\*==', in this case, the first two bytes are converted into binary digits and then the last four 0s are deleted.
    - The bytes after the high-order 0s are removed are combined in sequence, and every eight bits are converted into a character.

    

    Example 1: YWJj

    1. The character string is expressed as 00011000(Y)00010110(W)00001001(J)00100011(j) in binary mode.
    2. After the two 0s are removed from the most significant bits of each byte, the value becomes 011000 010110 001001 100011.
    3. Combine the bytes without the most significant bit 0 into 01100001(a)01100010(b)01100011(c) in sequence.
    4. Therefore, the decoding result is abc.

    Example 2: YWI=

    1. The character string is expressed as 00011000(Y)00010110(W)00001000(I) in binary mode.
    2. After the two 0s are removed from the most significant bits of each byte, the value becomes 011000 010110 001000.
    3. Because there is an equal sign (=) at the end of the third byte, 0 at the end of the third byte must be removed and then combined, for example, 01100001 01100010.
    4. Therefore, the decoding result is ab.

    Example:
    
    ```
        openGauss=# SELECT FROM_BASE64('YWJj');
         from_base64 
        -------------
         abc
        (1 row)
        
    ``` 
- ORD(str)

  Description:
    Returns the value of the leftmost character of **str** and use the following formula to calculate the value of the byte formed by the character:
    ```
      (1st byte code)
    + (2nd byte code  256)
    + (3rd byte code  256^2) ...
    ```


  Return type: INT

  Example:

  ```sql
  -- test 1 byte
  openGauss=# select ord('1111');
  ord 
  -----
    49
  (1 row)

  openGauss=# select ord('sss111');
  ord 
  -----
  115
  (1 row)

  -- test 2 byte
  openGauss=# select ord('Ŷ1111');
    ord  
  -------
  50614
  (1 row)

  openGauss=# select ord('߷1111');
    ord  
  -------
  57271
  (1 row)

  -- test 3 byte
  openGauss=# select ord('অ1111');
    ord    
  ----------
  14722693
  (1 row)

  openGauss=# select ord('ꬤ1111');
    ord    
  ----------
  15379620
  (1 row)

  -- test 4 byte
  openGauss=# select ord('��1111');
      ord     
  ------------
  4036133270
  (1 row)

  openGauss=# select ord('��1111');
      ord     
  ------------
  4036199316
  (1 row)
  ```

  - TO_BASE64(str)
  
  Description: Encodes a character string into BASE64 format based on BASE64 encoding rules and returns the encoding result. The encoding and decoding rules are the same as those of the FROM\_BASE64 function.

  Return type: text

  Precautions

  - If NULL is entered, NULL is returned.
  - The encoding and decoding rules are the same as those of the FROM\_BASE64 function.

  Example 1: abc

  1. Represent a character string in binary mode: 01100001(a)01100010(b)01100011(c)
  2. Split the binary string into 6-bit groups: 011000 010110 001001 100011
  3. Pad the upper bits with two 0s: 00011000 00010110 00001001 00100011
  4. Search for the BASE64 code conversion table and find out that characters corresponding to 00011000, 00010110, 00001001, and 00100011 are Y, W, J, and j.
  5. Therefore, the encoding result is YWJj.

  Example 2: ab

  1. Represent a character string in binary mode: 01100001(a)01100010(b)
  2. Split the binary string into 6-bit groups. The lower bits of the last group are padded with two 0s to ensure that the last group contains six bits: 011000 010110 0010(00)
  3. Pad the upper bits with two 0s: 00011000 00010110 00001000
  4. Search for the BASE64 code conversion table and find out that characters corresponding to 00011000, 00010110, and 00001000 are Y, W, and I.
  5. The number of bytes in the input character string is not a multiple of 3. As a result, the number of characters after conversion is not a multiple of 4. You need to add an equal sign (=) to ensure that the final encoding result contains 4 bytes, that is YWI=.

    Example:
    
    ```sql
      SELECT TO_BASE64('to_base64');
        to_base64   
      --------------
      dG9fYmFzZTY0
      (1 row)
      SELECT TO_BASE64('123456');
       to_base64 
      -----------
       MTIzNDU2
      (1 row)

      SELECT TO_BASE64('12345');
       to_base64 
      -----------
       MTIzNDU=
      (1 row)

      SELECT TO_BASE64('1234');
       to_base64 
      -----------
       MTIzNA==
      (1 row)
    ```

- UNHEX(str)
  
  Description: Decodes a hexadecimal-encoded string. A hexadecimal character is decoded into a four-bit binary character, and two hexadecimal characters (eight bits) are decoded into one character. The decoding result of the string is returned. If the number of characters in the hexadecimal string is not an even number, pad the upper bits with 0. If a binary string is entered, NULL is returned.

  Return type: text

  Precautions

  - If the input is NULL or contains non-hexadecimal characters, NULL is returned.
  - If a number is entered, the number is converted into a character string and then decoded. If a hexadecimal number needs to be converted into a decimal number, other functions are required.
  - The encoding and decoding rules are the same as those of the HEX function.

  Example 1: 4142

  1. Represent each hexadecimal character in 4-bit binary mode. If the number of characters in the hexadecimal string is not an even number, pad the upper bits with 0: 0100(4)0001(1)0100(4)0010(2)
  2. Every eight bit form a character: 01000001 01000010
  3. Therefore, the decoding result is AB.

    Example:
    
    ```sql
      SELECT UNHEX('6f70656e4761757373');
        unhex   
      -----------
      openGauss
      (1 row)

      SELECT UNHEX(HEX('string'));
       unhex  
      --------
       string
      (1 row)

      SELECT HEX(UNHEX('1267'));
       hex  
      ------
       1267
      (1 row)
    ```
