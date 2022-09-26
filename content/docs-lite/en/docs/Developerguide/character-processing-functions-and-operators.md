# Character Processing Functions and Operators<a name="EN-US_TOPIC_0289900656"></a>

String functions and operators provided by openGauss are for concatenating strings with each other, concatenating strings with non-strings, and matching the patterns of strings. Note: Except length-related functions, other functions and operators of string processing functions do not support parameters greater than 1 GB.

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

-   char\_length\(string\) or character\_length\(string\)

    Description: Specifies the number of characters in a string.

    Return type: int

    Example:

    ```
    openGauss=# SELECT char_length('hello');
     char_length
    -------------
               5
    (1 row)
    ```

-   instr\(text,text,int,int\)

    Description:  **instr\(string1,string2,int1,int2\)**  returns the text from  **int1**  to  **int2**  in  **string1**. The first  **int**  indicates the start position for matching, and the second  **int**  indicates the number of matching times.

    Return type: int

    Example:

    ```
    openGauss=# SELECT instr( 'abcdabcdabcd', 'bcd', 2, 2 );
     instr
    -------
         6
    (1 row)
    ```

-   lengthb\(text/bpchar\)

    Description: Obtains the number of bytes of a specified string.

    Return type: int

    Example:

    ```
    openGauss=# SELECT lengthb('hello');
     lengthb
    ---------
           5
    (1 row)
    ```

-   left\(str text, n int\)

    Description: Returns the first  *n_  characters in a string. When  _n*  is negative, all but the last  **|n|**  characters are returned.

    Return type: text

    Example:

    ```
    openGauss=# SELECT left('abcde', 2);
     left
    ------
     ab
    (1 row)
    ```

-   length\(string bytea, encoding name \)

    Description: Specifies the number of characters in  **string**  in the given  **encoding**.  **string**  must be valid in this encoding.

    Return type: int

    Example:

    ```
    openGauss=# SELECT length('jose', 'UTF8');
     length
    --------
          4
    (1 row)
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >If the length of the bytea type is queried and UTF8 encoding is specified, the maximum length can only be  **536870888**.

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

-   notlike\(x bytea name text, y bytea text\)

    Description: Compares x and y to check whether they are inconsistent.

    Return type: Boolean

    Example:

    ```
    openGauss=# SELECT notlike(1,2);
        notlike
    --------------
                t
    (1 row)
    openGauss=# SELECT notlike(1,1);
        notlike
    --------------
                f
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

-   pg\_client\_encoding\(\)

    Description: Specifies the current client encoding name.

    Return type: name

    Example:

    ```
    openGauss=# SELECT pg_client_encoding();
     pg_client_encoding
    --------------------
     UTF8
    (1 row)
    ```

-   quote\_ident\(string text\)

    Description: Returns the given string suitably quoted to be used as an identifier in an SQL statement string \(quotation marks are used as required\). Quotation marks are added only if necessary \(that is, if the string contains non-identifier characters or would be case-folded\). Embedded quotation marks are properly doubled.

    Return type: text

    Example:

    ```
    openGauss=# SELECT quote_ident('hello world');
     quote_ident
    --------------
     "hello world"
    (1 row)
    ```

-   quote\_literal\(string text\)

    Description: Returns the given string suitably quoted to be used as a string literal in an SQL statement string \(quotation marks are used as required\).

    Return type: text

    Example:

    ```
    openGauss=# SELECT quote_literal('hello');
     quote_literal 
    ---------------
     'hello'
    (1 row)
    ```

    If a command similar to the following exists, the text will be escaped.

    ```
    openGauss=# SELECT quote_literal(E'O\'hello');
     quote_literal
    ---------------
     'O''hello'
    (1 row)
    ```

    If a command similar to the following exists, the backslash will be properly doubled.

    ```
    openGauss=# SELECT quote_literal('O\hello');
     quote_literal 
    ---------------
     E'O\\hello'
    (1 row)
    ```

    If the parameter is null,  **NULL**  is returned. If the parameter may be null, you are advised to use  **quote\_nullable**.

    ```
    openGauss=# SELECT quote_literal(NULL);
     quote_literal 
    ---------------
    
    (1 row)
    ```

-   quote\_literal\(value anyelement\)

    Description: Converts the given value to text and then quotes it as a literal.

    Return type: text

    Example:

    ```
    openGauss=# SELECT quote_literal(42.5);
     quote_literal 
    ---------------
     '42.5'
    (1 row)
    ```

    If a command similar to the following exists, the given value will be escaped.

    ```
    openGauss=# SELECT quote_literal(E'O\'42.5');
     quote_literal
    ---------------
     '0''42.5'
    (1 row)
    ```

    If a command similar to the following exists, the backslash will be properly doubled.

    ```
    openGauss=# SELECT quote_literal('O\42.5');
     quote_literal 
    ---------------
     E'O\\42.5'
    (1 row)
    ```

-   quote\_nullable\(string text\)

    Description: Returns the given string suitably quoted to be used as a string literal in an SQL statement string \(quotation marks are used as required\).

    Return type: text

    Example:

    ```
    openGauss=# SELECT quote_nullable('hello');
     quote_nullable 
    ----------------
     'hello'
    (1 row)
    ```

    If a command similar to the following exists, the text will be escaped.

    ```
    openGauss=# SELECT quote_nullable(E'O\'hello');
     quote_nullable
    ----------------
     'O''hello'
    (1 row)
    ```

    If a command similar to the following exists, the backslash will be properly doubled.

    ```
    openGauss=# SELECT quote_nullable('O\hello');
     quote_nullable
    ----------------
     E'O\\hello'
    (1 row)
    ```

    If the parameter is null,  **NULL**  is returned.

    ```
    openGauss=# SELECT quote_nullable(NULL);
     quote_nullable
    ----------------
     NULL
    (1 row)
    ```

-   quote\_nullable\(value anyelement\)

    Description: Converts the given value to text and then quotes it as a literal.

    Return type: text

    Example:

    ```
    openGauss=# SELECT quote_nullable(42.5);
     quote_nullable
    ----------------
     '42.5'
    (1 row)
    ```

    If a command similar to the following exists, the given value will be escaped.

    ```
    openGauss=# SELECT quote_nullable(E'O\'42.5');
     quote_nullable 
    ----------------
     'O''42.5'
    (1 row)
    ```

    If a command similar to the following exists, the backslash will be properly doubled.

    ```
    openGauss=# SELECT quote_nullable('O\42.5');
     quote_nullable
    ----------------
     E'O\\42.5'
    (1 row)
    ```

    If the parameter is null,  **NULL**  is returned.

    ```
    openGauss=# SELECT quote_nullable(NULL);
     quote_nullable
    ----------------
     NULL
    (1 row)
    ```

-   substring\_inner\(string \[from int\] \[for int\]\)

    Description: Extracts a substring.  **from int**  indicates the start position of the truncation.  **for int**  indicates the number of characters truncated.

    Return type: text

    Example:

    ```
    openGauss=# select substring_inner('adcde', 2,3);
     substring_inner
    -----------------
     dcd
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

-   substring\(string from  *pattern*\)

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

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >If the POSIX pattern contains any parentheses, the portion of the text that matched the first parenthesized sub-expression \(the one whose left parenthesis comes first\) is returned. You can put parentheses around the whole expression if you want to use parentheses within it without triggering this exception.

-   substring\(string from  *pattern*  for  *escape*\)

    Description: Extracts substrings matching the SQL regular expression. The declared schema must match the entire data string; otherwise, the function fails and returns a null value. To indicate the part of the pattern that should be returned on success, the pattern must contain two occurrences of the escape character followed by a double quotation mark \("\). The text matching the portion of the pattern between these marks is returned.

    Return type: text

    Example:

    ```
    openGauss=# SELECT substring('Thomas' from '%#"o_a#"_' for '#');
     substring
    -----------
     oma
    (1 row)
    ```

-   rawcat\(raw,raw\)

    Description: Indicates the string concatenation function.

    Return type: raw

    Example:

    ```
    openGauss=# SELECT rawcat('ab','cd');
     rawcat
    --------
     ABCD
    (1 row)
    ```

-   regexp\_like\(text,text,text\)

    Description: Indicates the mode matching function of a regular expression.

    Return type: Boolean

    Example:

    ```
    openGauss=# SELECT regexp_like('str','[ac]');
     regexp_like
    -------------
     f
    (1 row)
    ```

-   regexp\_substr\(string text, pattern text \[, position int \[, occurrence int \[, flags text\]\]\]\)

    Description: Extracts substrings from a regular expression. Its function is similar to  **substr**. When a regular expression contains multiple parallel brackets, it also needs to be processed.

    Parameter description:

    -   **string**: source character string used for matching.
    -   **pattern**: regular expression pattern string used for matching.
    -   **position**: start character of the source string used for matching. This parameter is optional. The default value is  **1**.
    -   **occurrence**: sequence number of the matched substring to be extracted. This parameter is optional. The default value is  **1**.
    -   **flags**: contains zero or multiple single-letter flags that change the matching behavior of the function. This parameter is optional.  **m**  indicates multi-line matching. If the SQL syntax is compatible with products A and B and the value of the GUC parameter  **behavior\_compat\_options**  contains  **aformat\_regexp\_match**, the option  **n**  indicates that the period \(.\) can match the  **'\\n'**  character. If  **n**  is not specified in flags, the period \(.\) cannot match the  **'\\n'**  character by default. If the value does not contain  **aformat\_regexp\_match**, the period \(.\) matches the  **'\\n'**  character by default. The meaning of option  **n**  is the same as that of option  **m**.

    Return type: text

    Example:

    ```
    openGauss=# SELECT regexp_substr('str','[ac]');
     regexp_substr
    ---------------
    
    (1 row)
    
    openGauss=# SELECT regexp_substr('foobarbaz', 'b(..)', 3, 2) AS RESULT;
     result
    --------
     baz
    (1 row)
    ```

-   regexp\_count\(string text, pattern text \[, position int \[, flags text\]\]\)

    Description: obtains the number of substrings used for matching.

    Parameter description:

    -   **string**: source character string used for matching.
    -   **pattern**: regular expression pattern string used for matching.
    -   **position**: sequence number of the character to be matched from the source character string. This parameter is optional. The default value is  **1**.
    -   **flags**: contains zero or multiple single-letter flags that change the matching behavior of the function. This parameter is optional.  **m**  indicates multi-line matching. If the SQL syntax is compatible with products A and B and the value of the GUC parameter  **behavior\_compat\_options**  contains  **aformat\_regexp\_match**, the option  **n**  indicates that the period \(.\) can match the  **'\\n'**  character. If  **n**  is not specified in flags, the period \(.\) cannot match the  **'\\n'**  character by default. If the value does not contain  **aformat\_regexp\_match**, the period \(.\) matches the  **'\\n' **character by default. The meaning of option  **n**  is the same as that of option  **m**.

    Return type: int

    Example:

    ```
    openGauss=# SELECT regexp_count('foobarbaz','b(..)', 5) AS RESULT;
    result
    --------
    1
    (1 row)
    ```

-   regexp\_instr\(string text, pattern text \[, position int \[, occurrence int \[, return\_opt int \[, flags text\]\]\]\]\)

    Description: obtains the position \(starting from 1\) of the substring that meets the matching condition. If no substring is matched,  **0**  is returned.

    Parameter description:

    -   **string**: source character string used for matching.
    -   **pattern**: regular expression pattern string used for matching.
    -   **position**: start character of the source string used for matching. This parameter is optional. The default value is  **1**.
    -   **occurrence**: sequence number of the matched substring to be replaced. This parameter is optional. The default value is  **1**.
    -   **return\_opt**: specifies whether to return the position of the first or last character of the matched substring. This parameter is optional. If the value is  **0**, the position of the first character \(starting from 1\) of the matched substring is returned. If the value is greater than 0, the position of the next character of the end character of the matched substring is returned. The default value is  **0**.
    -   **flags**: contains zero or multiple single-letter flags that change the matching behavior of the function. This parameter is optional.  **m**  indicates multi-line matching. If the SQL syntax is compatible with products A and B and the value of the GUC parameter  **behavior\_compat\_options**  contains  **aformat\_regexp\_match**, the option  **n**  indicates that the period \(.\) can match the  **'\\n'**  character. If  **n**  is not specified in flags, the period \(.\) cannot match the  **'\\n'**  character by default. If the value does not contain  **aformat\_regexp\_match**, the period \(.\) matches the  **'\\n'**  character by default. The meaning of option  **n**  is the same as that of option  **m**.

    Return type: int

    Example:

    ```
    openGauss=# SELECT regexp_instr('foobarbaz','b(..)', 1, 1, 0) AS RESULT;
    result
    --------
    4
    (1 row)
    
    openGauss=# SELECT regexp_instr('foobarbaz','b(..)', 1, 2, 0) AS RESULT;
    result
    --------
    7
    (1 row)
    ```

-   regexp\_matches\(string text, pattern text \[, flags text\]\)

    Description: Returns all captured substrings resulting from matching a POSIX regular expression against  **string**. If the pattern does not match, the function returns no rows. If the pattern contains no parenthesized sub-expressions, then each row returned is a single-element text array containing the substring matching the whole pattern. If the pattern contains parenthesized sub-expressions, the function returns a text array whose  *n_th element is the substring matching the  _n*th parenthesized sub-expression of the pattern.

    The optional  **flags**  argument contains zero or multiple single-letter flags that change function behavior.  **i**  indicates that the matching is not related to uppercase and lowercase.  **g**  indicates that each matched substring is replaced, instead of replacing only the first one.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >If the last parameter is provided but the parameter value is an empty string \(''\) and the SQL compatibility mode of the database is set to A, the returned result is an empty set. This is because the A compatibility mode treats the empty string \(''\) as  **NULL**. To resolve this problem, you can:
    >-   Change the database SQL compatibility mode to C.
    >-   Do not provide the last parameter or do not set the last parameter to an empty string.

    Return type: SETOF text\[\]

    Example:

    ```
    openGauss=# SELECT regexp_matches('foobarbequebaz', '(bar)(beque)');
     regexp_matches
    ----------------
     {bar,beque}
    (1 row)
    openGauss=# SELECT regexp_matches('foobarbequebaz', 'barbeque');
     regexp_matches 
    ----------------
     {barbeque}
    (1 row)
    openGauss=#  SELECT regexp_matches('foobarbequebazilbarfbonk', '(b[^b]+)(b[^b]+)', 'g');
        result    
    --------------
     {bar,beque}
     {bazil,barf}
    (2 rows)
    ```

-   regexp\_split\_to\_array\(string text, pattern text \[, flags text \]\)

    Description: Splits  **string**  using a POSIX regular expression as the delimiter. The  **regexp\_split\_to\_array**  function behaves the same as  **regexp\_split\_to\_table**, except that  **regexp\_split\_to\_array**  returns its result as an array of text.

    Return type: text\[\]

    Example:

    ```
    openGauss=# SELECT regexp_split_to_array('hello world', E'\\s+');
     regexp_split_to_array
    -----------------------
     {hello,world}
    (1 row)
    ```

-   regexp\_split\_to\_table\(string text, pattern text \[, flags text\]\)

    Description: Splits  **string**  using a POSIX regular expression as the delimiter. If there is no match to the pattern, the function returns the string. If there is at least one match, for each match it returns the text from the end of the last match \(or the beginning of the string\) to the beginning of the match. When there are no more matches, it returns the text from the end of the last match to the end of the string.

    The  **flags**  parameter is a text string containing zero or more single-letter flags that change the function's behavior.  **i**  indicates case-insensitive matching.

    Return type: SETOF text

    Example:

    ```
    openGauss=# SELECT regexp_split_to_table('hello world', E'\\s+');
     regexp_split_to_table
    -----------------------
     hello
     world
    (2 rows)
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

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >The maximum size of memory allocated at a time cannot exceed 1 GB due to the memory allocation mechanism of the database. Therefore, the maximum value of  **number**  cannot exceed \(1 GB –  **x**\)/**lengthb**  \(**string**\) – 1.  **x**  indicates the length of the header information, which is usually greater than 4 bytes. The value varies among different scenarios.

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


-   replace\(string, substring\)

    Description: Deletes all substrings in a string.

    String type: text

    Substring type: text

    Return type: text

    Example:

    ```
    openGauss=# SELECT replace('abcdefabcdef', 'cd');
        replace     
    ----------------
     abefabef
    (1 row)
    ```

-   reverse\(str\)

    Description: Returns the reversed string.

    Return type: text

    Example:

    ```
    openGauss=# SELECT reverse('abcde');
     reverse
    ---------
     edcba
    (1 row)
    ```

-   right\(str text, n int\)

    Description: Returns the last  *n_  characters in a string. When  _n*  is negative, all but the first  **|n|**  characters are returned.

    Return type: text

    Example:

    ```
    openGauss=# SELECT right('abcde', 2);
     right
    -------
     de
    (1 row)
    
    openGauss=# SELECT right('abcde', -2);
     right 
    -------
     cde
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

-   substrb\(text,int,int\)

    Description: Extracts a substring. The first  **int **indicates the start position of the subtraction. The second  **int**  indicates the number of characters extracted.

    Return type: text

    Example:

    ```
    openGauss=# SELECT substrb('string',2,3);
     substrb
    ---------
     tri
    (1 row)
    ```

-   substrb\(text,int\)

    Description: Extracts a substring.  **int**  indicates the start position of the extraction.

    Return type: text

    Example:

    ```
    openGauss=# SELECT substrb('string',2);
     substrb
    ---------
     tring
    (1 row)
    ```

-   substr\(bytea,from,count\)

    Description: Extracts a substring from  **bytea**.  **from**  specifies the position where the extraction starts.  **count**  specifies the length of the extracted substring.

    Return type: text

    Example:

    ```
    openGauss=# SELECT substr('string',2,3);
     substr
    --------
     tri
    (1 row)
    ```

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

-   string || non-string or non-string || string

    Description: Concatenates strings and non-strings.

    Return type: text

    Example:

    ```
    openGauss=# SELECT 'Value: '||42 AS RESULT;
      result   
    -----------
     Value: 42
    (1 row)
    ```

-   split\_part\(string text, delimiter text, field int\)

    Description: Splits  **string**  on  **delimiter**  and returns the  **field**th column \(counting from text of the first appeared delimiter\).

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

-   lengthb\(string\)

    Description: Obtains the number of characters in a string. The value depends on character sets \(GBK and UTF8\).

    Return type: integer

    Example:

    ```
    openGauss=# SELECT lengthb('Chinese');
     lengthb 
    ---------
           7
    (1 row)
    ```

-   substr\(string,from\)

    Description:

    Extracts substrings from a string.

    **from**  indicates the start position of the extraction.

    -   If  **from**  starts at 0, the value  **1**  is used.
    -   If the value of  **from**  is positive, all characters from  **from**  to the end are extracted.
    -   If the value of  **from**  is negative, the last  *n*  characters in the string are extracted, in which  **n**  indicates the absolute value of  **from**.

    Return type: varchar

    Example:

    If the value of  **from**  is positive:

    ```
    openGauss=# SELECT substr('ABCDEF',2);
     substr
    --------
     BCDEF
    (1 row)
    ```

    If the value of  **from**  is negative:

    ```
    openGauss=# SELECT substr('ABCDEF',-2);
     substr
    --------
     EF
    (1 row)
    ```

-   substr\(string,from,count\)

    Description:

    Extracts substrings from a string.

    **from**  indicates the start position of the extraction.

    **count**  indicates the length of the extracted substring.

    -   If  **from**  starts at 0, the value  **1**  is used.
    -   If the value of  **from**  is positive, extract  **count**  characters starting from  **from**.
    -   If the value of  **from**  is negative, extract the last  **n** **count**  characters in the string, in which  **n**  indicates the absolute value of  **from**.
    -   If the value of  **count**  is smaller than  **1**,  **null**  is returned.

    Return type: varchar

    Example:

    If the value of  **from**  is positive:

    ```
    openGauss=# SELECT substr('ABCDEF',2,2);
     substr 
    --------
     BC
    (1 row)
    ```

    If the value of  **from**  is negative:

    ```
    openGauss=# SELECT substr('ABCDEF',-3,2);
     substr 
    --------
     DE
    (1 row)
    ```

-   substrb\(string,from\)

    Description: The functionality of this function is the same as that of  **SUBSTR\(string,from\)**. However, the calculation unit is byte.

    Return type: bytea

    Example:

    ```
    openGauss=# SELECT substrb('ABCDEF',-2);
     substrb 
    ---------
     EF
    (1 row)
    ```

-   substrb\(string,from,count\)

    Description: The functionality of this function is the same as that of  **SUBSTR\(string,from,count\)**. However, the calculation unit is byte.

    Return type: bytea

    Example:

    ```
    openGauss=# SELECT substrb('ABCDEF',2,2);
     substrb 
    ---------
     BC
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

-   rtrim\(string \[, characters\]\)

    Description: Removes the longest string containing only characters from characters \(a space by default\) from the end of string.

    Return type: varchar

    Example:

    ```
    openGauss=# SELECT rtrim('TRIMxxxx','x');
     rtrim
    -------
     TRIM
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

-   rpad\(string varchar, length int \[, fill varchar\]\)

    Description: Fills up  **string**  to  **length**  by appending the characters  **fill**  \(a space by default\). If  **string**  is already longer than  **length**, then it is truncated.

    **length**  in openGauss indicates the character length. One Chinese character is counted as one character.

    Return type: varchar

    Example:

    ```
    openGauss=# SELECT rpad('hi',5,'xyza');
     rpad
    -------
     hixyz
    (1 row)
    ```

    ```
    openGauss=# SELECT rpad('hi',5,'abcdefg');
     rpad  
    -------
     hiabc
    (1 row)
    ```

-   instr\(string,substring\[,position,occurrence\]\)

    Description: Queries and returns the value of the substring position that occurs the  **occurrence**  \(1 by default\) times from the  **position**  \(1 by default\) in the string.

    -   If the value of  **position**  is  **0**,  **0**  is returned.
    -   If the value of  **position**  is negative, the search is performed backwards from the last  *n_th character in the string, in which  _n*  indicates the absolute value of  **position**.

    In this function, the calculation unit is character. One Chinese character is one character.

    Return type: integer

    Example:

    ```
    openGauss=# SELECT instr('corporate floor','or', 3);
     instr 
    -------
         5
    (1 row)
    ```

    ```
    openGauss=# SELECT instr('corporate floor','or',-3,2);
     instr 
    -------
         2
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

-   replace\(string varchar, search\_string varchar, replacement\_string varchar\)

    Description: Replaces all  **search\_string**  in the string with  **replacement\_string**.

    Return type: varchar

    Example:

    ```
    openGauss=# SELECT replace('jack and jue','j','bl');
        replace     
    ----------------
     black and blue
    (1 row)
    ```

-   lpad\(string varchar, length int\[, repeat\_string varchar\]\)

    Description: Adds a series of  **repeat\_string**  \(a space by default\) on the left of the string to generate a new string with the total length of  *n*.

    If the length of the string is longer than the specified length, the function truncates the string and returns the substrings with the specified length.

    Return type: varchar

    Example:

    ```
    openGauss=# SELECT lpad('PAGE 1',15,'*.');
          lpad       
    -----------------
     *.*.*.*.*PAGE 1
    (1 row)
    ```

    ```
    openGauss=# SELECT lpad('hello world',5,'abcd');
     lpad  
    -------
     hello
    (1 row)
    ```

-   concat\(str1,str2\)

    Description: Connects str1 and str2 and returns the string.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >If the SQL compatibility mode is set to  **MY**  and  **str1**  or  **str2**  is set to  **NULL**,  **NULL**  will be returned.

    Return type: varchar

    Example:

    ```
    openGauss=# SELECT concat('Hello', ' World!');
        concat    
    --------------
     Hello World!
    (1 row)
    openGauss=# SELECT concat('Hello', NULL);
     concat
    --------
     Hello
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

-   regexp\_substr\(source\_char, pattern\)

    Description: Extracts substrings from a regular expression. If the SQL syntax is compatible with products A and B and the value of the GUC parameter  **behavior\_compat\_options**  contains  **aformat\_regexp\_match**, the period \(.\) cannot match the  **'\\n'**  character. If  **aformat\_regexp\_match**  is not contained, the period \(.\) matches the  **'\\n'**  character by default.

    Return type: text

    Example:

    ```
    openGauss=# SELECT regexp_substr('500 Hello World, Redwood Shores, CA', ',[^,]+,') "REGEXPR_SUBSTR";
      REGEXPR_SUBSTR   
    -------------------
     , Redwood Shores,
    (1 row)
    ```

-   regexp\_replace\(string, pattern, replacement \[,flags \]\)

    Description: Replaces substrings matching the POSIX regular expression. The source string is returned unchanged if there is no match to the pattern. If there is a match, the source string is returned with the replacement string substituted for the matching substring.

    The replacement string can contain  **\\n**, where  **n**  is 1 through 9, to indicate that the source substring matching the  *n*th parenthesized sub-expression of the pattern should be inserted, and it can contain  **\\&**  to indicate that the substring matching the entire pattern should be inserted.

    The optional  **flags**  argument contains zero or multiple single-letter flags that change the function behavior.  **i**  indicates that the matching is not related to uppercase and lowercase.  **g**  indicates that each matched substring is replaced, instead of replacing only the first one.  **m**  indicates multi-line matching. If the SQL syntax is compatible with products A and B and the value of the GUC parameter  **behavior\_compat\_options**  contains  **aformat\_regexp\_match**, the option  **n**  indicates that the period \(.\) can match the  **'\\n'**  character. If  **n**  is not specified in flags, the period \(.\) cannot match the  **'\\n'**  character by default. If the value does not contain  **aformat\_regexp\_match**, the period \(.\) matches the  **'\\n'**  character by default. The meaning of option  **n**  is the same as that of option  **m**.

    Return type: varchar

    Example:

    ```
    openGauss=# SELECT regexp_replace('Thomas', '.[mN]a.', 'M');
     regexp_replace
    ----------------
     ThM
    (1 row)
    openGauss=# SELECT regexp_replace('foobarbaz','b(..)', E'X\\1Y', 'g') AS RESULT;                                                    
       result    
    -------------
     fooXarYXazY
    (1 row)
    ```

-   repexp\_replace\(string text, pattern text \[, replacement text \[, position int \[, occurrence int \[, flags text\]\]\]\]\)

    Description: Replaces substrings matching the POSIX regular expression. The source string is returned unchanged if there is no match to the pattern. If there is a match, the source string is returned with the replacement string substituted for the matching substring.

    Parameter description:

    -   **string**: source character string used for matching.
    -   **pattern**: regular expression pattern string used for matching.
    -   **replacement**:character string used to replace the matched substring. This parameter is optional. If no parameter value is specified or the parameter value is null, the parameter value is replaced with an empty string.
    -   **position**: start character of the source string used for matching. This parameter is optional. The default value is  **1**.
    -   **occurrence**: sequence number of the matched substring to be replaced. This parameter is optional. The default value is  **0**, indicating that all matched substrings are replaced.
    -   **flags**: contains zero or multiple single-letter flags that change the matching behavior of the function. This parameter is optional.  **m**  indicates multi-line matching. If the SQL syntax is compatible with products A and B and the value of the GUC parameter  **behavior\_compat\_options**  contains  **aformat\_regexp\_match**, the option  **n**  indicates that the period \(.\) can match the  **'\\n'**  character. If  **n**  is not specified in flags, the period \(.\) cannot match the  **'\\n'**  character by default. If the value does not contain  **aformat\_regexp\_match**, the period \(.\) matches the  **'\\n'**  character by default. The meaning of option  **n**  is the same as that of option  **m**.

    Return type: text

    Example:

    ```
    openGauss=# SELECT regexp_replace('foobarbaz','b(..)', E'X\\1Y', 2, 2, 'n') AS RESULT;
    result
    ------------
    foobarXazY
    (1 row)
    ```

-   concat\_ws\(sep text, str"any" \[, str"any" \[, ...\] \]\)

    Description: Uses the first parameter as the separator, which is associated with all following parameters. The  **NULL**  parameter is ignored.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >-   If the first parameter value is  **NULL**, the returned result is  **NULL**.
    >-   If the first parameter is provided but the parameter value is an empty string \(''\) and the SQL compatibility mode of the database is set to  **A**, the returned result is  **NULL**. This is because the A compatibility mode treats the empty string \(''\) as  **NULL**. To resolve this problem, you can change the SQL compatibility mode of the database to  **B**,  **C**, or  **PG**.

    Return type: text

    Example:

    ```
    openGauss=# SELECT concat_ws(',', 'ABCDE', 2, NULL, 22);
     concat_ws
    ------------
     ABCDE,2,22
    (1 row)
    ```

-   nlssort\(string text, sort\_method text\)

    Description: Returns the encoding value of a string in the sorting mode specified by  **sort\_method**. The encoding value can be used for sorting and determines the sequence of the string in the sorting mode. Currently,  **sort\_method**  can be set to  **nls\_sort=schinese\_pinyin\_m**  or  **nls\_sort=generic\_m\_ci**.  **nls\_sort=generic\_m\_ci**  supports only the case-insensitive order for English characters.

    String type: text

    sort\_method type: text

    Return type: text

    Example:

    ```
    openGauss=# SELECT nlssort('A', 'nls_sort=schinese_pinyin_m');
        nlssort     
    ----------------
     01EA0000020006
    (1 row)
    openGauss=# SELECT nlssort('A', 'nls_sort=generic_m_ci');
        nlssort     
    ----------------
     01EA000002
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

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >If the rule for converting between source to target encoding \(for example, GBK and LATIN1\) does not exist, the string is returned without conversion. See the  **pg\_conversion**  system catalog for details.
    >Example:
    >```
    >openGauss=# show server_encoding;
    > server_encoding 
    >-----------------
    > LATIN1
    >(1 row)
    >openGauss=# SELECT convert_from('some text', 'GBK');
    > convert_from 
    >--------------
    > some text
    >(1 row)
    >db_latin1=# SELECT convert_to('some text', 'GBK');
    >      convert_to      
    >----------------------
    > \x736f6d652074657874
    >(1 row)
    >db_latin1=# SELECT convert('some text', 'GBK', 'LATIN1');
    >       convert        
    >----------------------
    > \x736f6d652074657874
    >(1 row)
    >```

-   convert\_from\(string bytea, src\_encoding name\)

    Description: Converts the long bytea using the coding mode of the database.

    **src\_encoding**  specifies the source code encoding. The string must be valid in this encoding.

    Return type: text

    Example:

    ```
    openGauss=# SELECT convert_from('text_in_utf8', 'UTF8');
     convert_from
    --------------
     text_in_utf8
    (1 row)
    ```

-   convert\_to\(string text, dest\_encoding name\)

    Description: Converts a string to  **dest\_encoding**.

    Return type: bytea

    Example:

    ```
    openGauss=# SELECT convert_to('some text', 'UTF8');
          convert_to
    ----------------------
     \x736f6d652074657874
    (1 row)
    ```

-   string \[NOT\] LIKE pattern \[ESCAPE escape-character\]

    Description: Specifies the pattern matching function.

    If the pattern does not include a percentage sign \(%\) or an underscore \(\_\), this mode represents itself only. In this case, the behavior of LIKE is the same as the equal operator. The underscore \(\_\) in the pattern matches any single character while one percentage sign \(%\) matches no or multiple characters.

    To match with underscores \(\_\) or percent signs \(%\), corresponding characters in  **pattern**  must lead escape characters. The default escape character is a backward slash \(\\\) and can be specified using the  **ESCAPE**  clause. To match with escape characters, enter two escape characters.

    Return type: Boolean

    Example:

    ```
    openGauss=# SELECT 'AA_BBCC' LIKE '%A@_B%' ESCAPE '@' AS RESULT;
     result
    --------
     t
    (1 row)
    ```

    ```
    openGauss=# SELECT 'AA_BBCC' LIKE '%A@_B%' AS RESULT;
     result
    --------
     f
    (1 row)
    ```

    ```
    openGauss=# SELECT 'AA@_BBCC' LIKE '%A@_B%' AS RESULT;
     result
    --------
     t
    (1 row)
    ```

-   REGEXP\_LIKE\(source\_string, pattern \[, match\_parameter\]\)

    Description: Indicates the mode matching function of a regular expression.

    **source\_string**  indicates the source string and  **pattern**  indicates the matching pattern of the regular expression.  **match\_parameter**  indicates the matching items and the values are as follows: 

    -   'i': case-insensitive
    -   'c': case-sensitive
    -   'n': allowing the metacharacter "." in a regular expression to be matched with a linefeed.
    -   'm': allows  **source\_string**  to be regarded as multiple rows.

    If  **match\_parameter**  is ignored,  **case-sensitive**  is enabled by default, "." is not matched with a linefeed, and  **source\_string**  is regarded as a single row.

    Return type: Boolean

    Example:

    ```
    openGauss=# SELECT regexp_like('ABC', '[A-Z]');
     regexp_like
    -------------
     t
    (1 row)
    ```

    ```
    openGauss=# SELECT regexp_like('ABC', '[D-Z]');
     regexp_like
    -------------
     f
    (1 row)
    ```

    ```
    openGauss=# SELECT regexp_like('ABC', '[a-z]','i');
     regexp_like
    -------------
     t
    (1 row)
    ```

-   format\(formatstr text \[, str"any" \[, ...\] \]\)

    Description: Formats a string.

    Return type: text

    Example:

    ```
    openGauss=# SELECT format('Hello %s, %1$s', 'World');
           format       
    --------------------
     Hello World, World
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
-   sha\(string\) / sha1\(string\)

    Description: Encrypts a string using SHA1 and returns a hexadecimal number. The sha and sha1 functions are the same.

    >![](public_sys-resources/icon-note.gif) **NOTE:**
     >  
    >The SHA1 encryption algorithm is not recommended because it has lower security and poses security risks.
    >This function is valid only when openGauss is compatible with the MY type (that is, sql\_compatibility = 'B').

    Return type: text

    Example:

    ```
    openGauss=# select sha('ABC');
                       sha
    ------------------------------------------
     3c01bdbb26f358bab27f267924aa2c9a03fcfdb8
    (1 row)
    openGauss=# select sha1('ABC');
                       sha1
    ------------------------------------------
     3c01bdbb26f358bab27f267924aa2c9a03fcfdb8
    (1 row)
    ```

-   sha2\(string, hash\_length\)

    Description: Encrypts a string in SHA2 mode and returns a value in hexadecimal form.

    **hash\_length**: corresponds to a SHA2 algorithm. The value can be **0**\(SHA-256\), **224**\(SHA-224\), **256**\(SHA-256\), **384**\(SHA-384\), or **512**\(SHA-512\). For other values, **NULL** is returned.

    >![](public_sys-resources/icon-note.gif) **NOTE:**
       >
    >The SHA224 encryption algorithm is not recommended because it has lower security and poses security risks.
    >The SHA2 function records hash plaintext in logs. Therefore, you are not advised to use this function to encrypt sensitive information such as keys.
    >This function is valid only when openGauss is compatible with the MY type (that is, sql\_compatibility = 'B').

    Return type: text

    Example:

    ```
    openGauss=# select sha2('ABC',224);
                               sha2
    ----------------------------------------------------------
     107c5072b799c4771f328304cfe1ebb375eb6ea7f35a3aa753836fad
    (1 row)
    openGauss=# select sha2('ABC',256);
                                   sha2
    ------------------------------------------------------------------
     b5d4045c3f466fa91fe2cc6abe79232a1a57cdf104f7a26e716e0a1e2789df78
    (1 row)
    openGauss=# select sha2('ABC',0);
                                   sha2
    ------------------------------------------------------------------
     b5d4045c3f466fa91fe2cc6abe79232a1a57cdf104f7a26e716e0a1e2789df78
    (1 row)
    ```

-   decode\(string text, format text\)

    Description: Decodes binary data from textual representation.

    Return type: bytea

    Example:

    ```
    openGauss=# SELECT decode('MTIzAAE=', 'base64');
        decode    
    --------------
     \x3132330001
    (1 row)
    ```

-   similar\_escape\(pat text, esc text\)

    Description: Converts a regular expression of the SQL:2008 style to the POSIX style.

    Return type: text

    Example:

    ```
    openGauss=# select similar_escape('\s+ab','2');
     similar_escape
    ----------------
     ^(?:\\s+ab)$
    (1 row)
    ```

-   svals\(hstore\)

    Description: Obtains the value of the hstore type.

    Return type: SETOF text

    Example:

    ```
    openGauss=# select svals('"aa"=>"bb"');
     svals
    -------
     bb
    (1 row)
    ```

-   tconvert\(key text, value text\)

    Description: Converts character strings to the hstore format.

    Return type: hstore

    Example:

    ```
    openGauss=# select tconvert('aa', 'bb');
      tconvert
    ------------
     "aa"=>"bb"
    (1 row)
    ```
-   find\_in\_set\(text, set\)

    Description: Finds the position of a given member in a set, counting from 1. If no record is found, 0 is returned.

    Return type: int2

    Example:

    ```
    openGauss=# select site, find_in_set('wuhan', site) from employee;  
          site       | find_in_set 
    -----------------+-------------
     beijing,nanjing |           0
     beijing,wuhan   |           2
    (2 rows)
    ```

-   encode\(data bytea, format text\)

    Description: Encodes binary data into a textual representation.

    Return type: text

    Example:

    ```
    openGauss=# SELECT encode(E'123\\000\\001', 'base64');
      encode  
    ----------
     MTIzAAE=
    (1 row)
    ```


>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   For a string containing newline characters, for example, a string consisting of a newline character and a space, the value of  **length**  and  **lengthb**  in openGauss is 2.
>-   In openGauss,  *n_  in the CHAR\(n\) type indicates the number of characters. Therefore, for multiple-octet coded character sets, the length returned by the LENGTHB function may be longer than  _n*.
>-   openGauss supports multiple types of databases, including A, B, C, and PG. If the database type is not specified, A is used by default. The lexical analyzer of A database is different from that of the other three databases. In A database, an empty character string is considered as  **NULL**. Therefore, when a type A database is used, if a  **NULL**  character string is used as a parameter in the preceding character operation function, no output is displayed. For example:
>    ```
>    openGauss=# SELECT translate('12345','123','');
>    translate  
>    -----------
>    (1 row)
>    ```
>    This is because the kernel checks whether the input parameter contains  **NULL**  before calling the corresponding function. If yes, the kernel does not call the corresponding function. As a result, no output is displayed. In PG mode, the processing of character strings is the same as that of PostgreSQL. Therefore, the preceding problem does not occur.
