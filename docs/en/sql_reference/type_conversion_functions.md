---
description: This document describes Type Conversion Functions in openGauss, covering topics such as Type Conversion Functions, Encoding Type Conversion.
keywords: [openGauss, Type Conversion Functions, SQL, Encoding Type Conversion]
---

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:37:51.964Z -->
# Type Conversion Functions

## Type Conversion Functions<a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_sd1817f56ca2d4be7a4ad606e0e597c55"></a>

- cash_words(money)

    Description: A type conversion function that converts money into text.

    Example:

    ```
    openGauss=# SELECT cash_words('1.23');
                cash_words
    -----------------------------------
     One dollar and twenty three cents
    (1 row)
    ```

- cast(x as y)

    Description: A type conversion function that converts x into the type specified by y.

    Return type: type_name

    Example:

    ```
    openGauss=# SELECT cast('22-oct-1997' as timestamp);
          timestamp      
    ---------------------
     1997-10-22 00:00:00
    (1 row)
    ```

- CAST( expr AS type_name [ DEFAULT return_value ON CONVERSION ERROR ][, fmt [, 'nlsparam' ] ])

    Description: A type conversion function that converts x into the type specified by y, and supports DEFAULT for setting a default value, fmt for specifying the input format of the input parameter, and the nlsparam parameter. Currently, the nlsparam parameter only supports English and American.

    Return type: type_name

    Example:

    ```
    openGauss=# SELECT cast('12,454.8-' as numeric, '99G999D9S');
     numeric
    ----------
     -12454.8
    (1 row)
    ```

    ```
    openGauss=# SELECT cast('111111.111'+'1111' as numeric, '99G999D9S');
      numeric
    ------------
     112222.111
    (1 row)
    ```

    ```
    openGauss=# SELECT cast('1e5'+'1111' as numeric, '999999.99');
     numeric
    ---------
      101111
    (1 row)
    ```

    ```
    openGauss=# SELECT cast('This parameter is incorrect' as numeric default 321456231 on conversion error, '999,999,999,999.99');
      numeric
    -----------
     321456231
    (1 row)
    ```

    ```
    openGauss=#  SELECT cast('12-sep-2014' as timestamp , 'DD-Mon-YYYY');
          timestamp      
    ---------------------
     2014-09-12 00:00:00
    (1 row)
    ```

    ```
    openGauss=# SELECT cast ('This is an invalid input' as timestamp DEFAULT '11-01-11 14:10:10.123000' ON CONVERSION ERROR,'DD-MM-RR HH24:MI:SS.FF');
            timestamp        
    -------------------------
     2011-11-01 14:10:10.123
    (1 row)
    ```

    ```
    openGauss=# SELECT cast ('01-Jan-03 14:10:10.123000' as timestamp DEFAULT '11-Jan-11 14:10:10.123000' ON CONVERSION ERROR,'DD-Mon-RR HH24:MI:SS.FF','NLS_DATE_LANGUAGE = American');
            timestamp        
    -------------------------
     2003-01-01 14:10:10.123
    (1 row)
    ```

- hextoraw(raw)

    Description: Converts a string consisting of hexadecimal characters to the raw type.

    Return type: raw

    Example:

    ```
    openGauss=# SELECT hextoraw('7D');
     hextoraw 
    ----------
     7D
    (1 row)
    ```

- numtoday\(numeric\)

    Description: Converts a numeric value to a timestamp in the specified format.

    Return type: timestamp

    Example:

    ```
    openGauss=# SELECT numtoday(2);
     numtoday
    ----------
     2 days
    (1 row)
    ```

- pg\_systimestamp\(\)

    Description: Obtains the system timestamp.

    Return type: timestamp with time zone

    Example:

    ```
    openGauss=# SELECT pg_systimestamp();
            pg_systimestamp
    -------------------------------
     2015-10-14 11:21:28.317367+08
    (1 row)
    ```

- rawtohex(string)

    Description: Converts a binary string into a hexadecimal string.

    The result is the ASCII code of the input character, represented in hexadecimal.

    Return type: varchar

    Example:

    ```
    openGauss=# SELECT rawtohex('1234567');
        rawtohex    
    ----------------
     31323334353637
    (1 row)
    ```

- to_bigint(varchar)

    Description: Converts a character type to the bigint type.

    Return type: bigint

    Example:

    ```
    openGauss=# SELECT to_bigint('123364545554455');
        to_bigint    
    ----------------
     123364545554455
    (1 row)
    ```

- to_binary_float(expr [default return_value on conversion error])

  Description: Converts the input to a single-precision floating-point number.

  - Supported input parameter types: real, double precision, text, and NULL values.

  - The optional [DEFAULT return_expr ON CONVERSION ERROR] specifies the value returned by this function when the conversion of `expr` fails.

  Return type: real

  Example:

  ```sql  
  openGauss=# select to_binary_float('3.456');
   to_binary_float
  -----------------
             3.456
  (1 row)
  
  openGauss=# select to_binary_float('3.456Ab');
  ERROR:  invalid input syntax for type real
  CONTEXT:  referenced column: to_binary_float
  SQL function "to_binary_float" statement 1
  referenced column: to_binary_float
  openGauss=#
  openGauss=# select to_binary_float('3.456Ab' default '1.23' on conversion error);
   to_binary_float
  -----------------
              1.23
  (1 row)
  ```

- to_char(datetime/interval [, fmt])

  Description: Converts a DATETIME or INTERVAL value of the DATE, TIMESTAMP, TIMESTAMP WITH TIME ZONE, or TIMESTAMP WITH LOCAL TIME ZONE type to the TEXT type in the format specified by fmt.

  - The optional parameter fmt can be of the following categories: date, time, week, quarter, and century. Each category can have different templates, and templates can be reasonably combined. Common templates include: HH, MI, SS, YYYY, MM, and DD.
  - Templates can have modifiers. The commonly used modifier is FM, which suppresses leading zeros or trailing blanks.
  - **Only in A-compatibility mode**, when the input parameter is interval, the fmt input parameter is ignored. When interval contains only year and month, the output fmt is SYYYY-MM, and when year has fewer than two digits, a leading zero is padded. When interval contains only day and time, the output fmt is SDD HH:MI:SS. When interval contains both, an error code is returned.

  Return type: text

  Example:

  ```
  openGauss=# SELECT to_char(current_timestamp,'HH12:MI:SS');
   to_char  
  ----------
   10:19:26
  (1 row)
  ```

  ```
  openGauss=# SELECT to_char(current_timestamp,'FMHH12:FMMI:FMSS');
   to_char  
  ----------
   10:19:46
  (1 row)
  ```

- to\_char(datetime/interval, fmt, nls_language={american|english})

  Description: Same as to\_char(datetime/interval \[, fmt\]), with an additional parameter nls_language whose value can be american or english.

  - Templates such as MON in fmt are converted to the expression in the corresponding language based on nls_language.

  Return type: text

  Example:

  ```
  openGauss=# SELECT to_char(DATE '2024-08-05', 'DY, DD-MON-YYYY', 'NLS_DATE_LANGUAGE = ENGLISH') ;
   to_char      
  ----------
   MON, 05-AUG-2024
  (1 row)
  ```

- to_char(double precision/real, text)

  Description: Converts a floating-point value to a string in the specified format.

  Return type: text

  Examples:

  ```
  openGauss=# SELECT to_char(125.8::real, '999D99');
   to_char 
  ---------
    125.80
  (1 row)
  ```

- to_char(numeric/smallint/integer/bigint/double precision/real[, fmt])

  Description: Converts an integer or floating-point value to a string in a specified format.

  - The optional parameter `fmt` can be one of the following categories: decimal characters, group separators, signs, and currency symbols. Each category has different templates, and templates can be combined reasonably. Common templates include: `9`, `0`, `,` (thousands separator), and `.` (decimal point).
  - Templates can have modifiers similar to FM, but FM does not suppress zeros output by template 0.
  - To convert an integer type value to a string of its corresponding hexadecimal value, use template X or x.

  Return type: varchar

  Example:

  ```
  openGauss=# SELECT to_char(1485,'9,999');
   to_char 
  ---------
    1,485
  (1 row)
  ```

  ```
  openGauss=# SELECT to_char( 1148.5,'9,999.999');
    to_char   
  ------------
    1,148.500
  (1 row)
  ```

  ```
  openGauss=# SELECT to_char(148.5,'990999.909');
     to_char   
  -------------
      0148.500
  (1 row)
  ```

  ```
  openGauss=# SELECT to_char(123,'XXX');
   to_char 
  ---------
     7B
  (1 row)
  ```

- to_char(interval, text)

  Description: Converts an interval value to a string in the specified format.

  - **Only in A-compatibility mode**, the fmt input parameter is ignored. When the interval contains only year and month, the output fmt is SYYYY-MM, and a leading zero is added when the year has fewer than two digits. When the interval contains only day and time, the output fmt is SDD HH:MI:SS. When the interval contains both, an error code is returned.

  Return type: text

  Example:

  ```
  openGauss=# SELECT to_char(interval '15h 2m 12s', 'HH24:MI:SS');
   to_char
  ----------
   15:02:12
  (1 row)
  ```

  ```
  openGauss=# SELECT to_char(INTERVAL '123-2' YEAR(4) TO MONTH, 'YYY-MON');
   to_char 
  ---------
   +123-02
  (1 row)
  ```

  ```
  openGauss=# SELECT to_char(INTERVAL '1 year 2 months 3 days', 'YYYY-MON-DD') ;
  ERROR:  Interval simultaneously includes 'year to month' and 'day to second' is not supported in A format
  DETAIL:  Not support the given interval data.
  CONTEXT:  referenced column: to_char
  ```

- to_char(int, text)

  Description: Converts an integer value to a string in the specified format.

  Return type: text

  Example:

  ```
  openGauss=# SELECT to_char(125, '999');
   to_char
  ---------
    125
  (1 row)
  ```

- to_char(set)

  Description: Converts a SET type value to a string in the specified format.

  Return type: text

  Example:

  ```
  - site is a SET-type column in the employee table. 

  openGauss=# select to_char(site) from employee;
   to_char
   ---------
    beijing,nanjing
    beijing,wuhan
  (2 rows)
  ```

- to_char(numeric, text)

  Description: Converts a numeric value to a string in the specified format.

  Return type: text

  Example:

  ```
  openGauss=# SELECT to_char(-125.8, '999D99S');
   to_char
  ---------
   125.80-
  (1 row)
  ```

- to_char(string)

  Description: Converts CHAR, VARCHAR, VARCHAR2, and CLOB types to the VARCHAR type.

  If this function is used to convert a CLOB type and the value to be converted exceeds the range of the target type, an error is returned.

  Return type: varchar

  Example:

  ```
  openGauss=# SELECT to_char('01110');
   to_char
  ---------
   01110
  (1 row)
  ```

- to\_char\(timestamp, text\)

  Description: Converts a timestamp value to a string in the specified format.

  Return type: text

  Example:

  ```
  openGauss=# SELECT to_char(current_timestamp, 'HH12:MI:SS');
   to_char
  ----------
   10:55:59
  (1 row)
  ```

- to\_char\(blob, \[CSID\]\)

  Description: **Only in A-compatibility mode**, this function is supported. It converts a blob type value to a string in the specified CSID character set.

  - CSID is of int type, indicating the character set ID in A-compatibility mode.
  - When CSID is 0 or not passed, the database character set is used.

  Mapping from CSID to character set

  | CSID | Encoding Name  | openGauss Name              |
  | ------ | ---------------- | ---------------------- |
  | 1    | US7ASCII       | SQL_ASCII        |
  | 837  | JA16EUCTILDE   | EUC_JP           |
  | 850  | ZHS16CGB231280 | EUC_CN           |
  | 846  | KO16MSWIN949   | EUC_KR           |
  | 862  | ZHT16DBT       | EUC_TW           |
  | 830  | JA16EUC        | EUC_JIS_2004 |
  | 852  | ZHS16GBK       | GBK                  |
  | 873  | AL32UTF8       | UTF8                 |
  | 31   | WE8ISO8859P1   | LATIN1               |
  | 32   | EE8ISO8859P2   | LATIN2               |
  | 33   | SE8ISO8859P3   | LATIN3               |
  | 34   | NEE8ISO8859P4  | LATIN4               |
  | 39   | WE8ISO8859P9   | LATIN5               |
  | 40   | NE8ISO8859P10  | LATIN6               |
  | 47   | BLT8ISO8859P13 | LATIN7               |
  | 48   | CEL8ISO8859P14 | LATIN8               |
  | 46   | WE8ISO8859P15  | LATIN9               |
  | 560  | AR8MSWIN1256   | WIN1256              |
  | 45   | VN8MSWIN1258   | WIN1258              |
  | 41   | TH8TISASCII    | WIN874               |
  | 196  | CL8KOI8R       | KOI8R                |
  | 171  | CL8MSWIN1251   | WIN1251              |
  | 178  | WE8MSWIN1252   | WIN1252              |
  | 35   | CL8ISO8859P5   | ISO_8859_5   |
  | 36   | AR8ISO8859P6   | ISO_8859_6   |
  | 37   | EL8ISO8859P7   | ISO_8859_7   |
  | 38   | IW8ISO8859P8   | ISO_8859_8   |
  | 170  | EE8MSWIN1250   | WIN1250              |
  | 173  | BG8MSWIN       | WIN1253              |
  | 177  | TR8MSWIN1254   | WIN1254              |
  | 175  | IW8MSWIN1255   | WIN1255              |
  | 179  | BLT8MSWIN1257  | WIN1257              |
  | 51   | CL8KOI8U       | KOI8U                |
  | 854  | ZHS32GB18030   | GB18030              |
  | 832  | JA16SJIS       | SJIS                 |
  | 865  | ZHT16BIG5      | BIG5                 |

  Return type: text

  Example:

  ```
  CREATE TABLE blob_table (c1 BLOB);
  INSERT INTO blob_table (c1) VALUES ( (encode('Hello World!','hex'))::RAW );
  SELECT to_char(c1, 873) FROM blob_table ;
     to_char    
  --------------
   Hello World!
  (1 row)
  
  SELECT to_char(c1) FROM blob_table ;
     to_char    
  --------------
   Hello World!
  (1 row)

  ```

- `to_clob(char/nchar/varchar/varchar2/nvarchar/nvarchar2/text/raw)`

  Description: Converts RAW type or text character set types CHAR, NCHAR, VARCHAR, VARCHAR2, NVARCHAR, NVARCHAR2, TEXT to CLOB type.

  Return type: clob

  Examples:

  ```
  openGauss=# SELECT to_clob('ABCDEF'::RAW(10));
   to_clob 
  ---------
   ABCDEF
  (1 row)
  ```

  ```
  openGauss=# SELECT to_clob('hello111'::CHAR(15));
   to_clob  
  ----------
   hello111
  (1 row)
  ```

  ```
  openGauss=# SELECT to_clob('gauss123'::NCHAR(10));
   to_clob  
  ----------
   gauss123
  (1 row)
  ```

  ```
  openGauss=# SELECT to_clob('gauss234'::VARCHAR(10));
   to_clob  
  ----------
   gauss234
  (1 row)
  ```

  ```
  openGauss=# SELECT to_clob('gauss345'::VARCHAR2(10));
   to_clob  
  ----------
   gauss345
  (1 row)
  ```

  ```
  openGauss=# SELECT to_clob('gauss456'::NVARCHAR2(10));
   to_clob  
  ----------
   gauss456
  (1 row)
  ```

  ```
  openGauss=# SELECT to_clob('World222!'::TEXT);
    to_clob  
  -----------
   World222!
  (1 row)
  ```

- to_date(text)

  Description: Converts a text-type value to a timestamp in the specified format. Currently, only two types of formats are supported.

  - Format 1: A date without delimiters, such as 20150814, which must include the complete year, month, and day.
  - Format 2: date with delimiter, for example, 2014-08-14. The delimiter can be any single non-numeric character.

  Return type: timestamp without time zone

  Example:

  ```
  openGauss=# SELECT to_date('2015-08-14');
         to_date
  ---------------------
   2015-08-14 00:00:00
  (1 row)
  ```

- to\_date\(text, text\)

  Description: Converts a string value to a date in the specified format.

  For the type conversion format, see [Table 1](#table-1-template-patterns-for-date-formatting).

  Return type: timestamp without time zone

  Example:

  ```
  openGauss=# SELECT to_date('05 Dec 2000', 'DD Mon YYYY');
         to_date
  ---------------------
   2000-12-05 00:00:00
  (1 row)
  ```

- to\_number( expr \[  DEFAULT return_value ON CONVERSION ERROR ] \[, fmt ])

  Description: Converts expr into a NUMERIC value according to the specified format. If the conversion of expr partially fails, it attempts to convert the return_value after the DEFAULT keyword (the input format of return_value is constrained by fmt).

  * For the type conversion format, refer to [Table 2](#table-2-template-patterns-for-numeric-formatting).

  * The length of the integer part in fmt must be greater than the length of the integer part in expr. If it is smaller, an error is reported. The length of the decimal part in fmt can be specified as needed, and the output result truncates expr according to the decimal part length of fmt.

  * Both expr and return_value after DEFAULT support implicit conversion. (Note: NULL plus any value equals NULL.)

  * Scientific notation is supported.

  * When converting a hexadecimal string to a decimal number, a hexadecimal string of up to 16 bytes can be converted to an unsigned number.

  * When converting a hexadecimal string to a decimal number, no characters other than 'x' or 'X' are allowed in the format string. Otherwise, an error is reported.
  * When the `correct_to_number` switch of `behavior_compat_options` is turned off, if grouping exists, the number of groups in `expr` must be the same as the number of groups in `fmt`. Otherwise, an error is reported.
  * When the `fmt` pattern is configured as a numeric digit (pattern 9), non-numeric input in `expr` is ignored.

  Return type: numeric

  Example:

  ```
  openGauss=# SELECT to_number('12,454.8-', '99G999D9S');
   to_number 
  -----------
    -12454.8
  (1 row)
  ```

  ```
  openGauss=# SELECT to_number('1234.123','999999.99');
   to_number 
  -----------
     1234.12
  (1 row)
  ```

  ```
  openGauss=# SELECT to_number('111111.111'+'1111','999999.99');
   to_number 
  -----------
   112222.11
  (1 row)
  ```

  ```
  openGauss=# SELECT to_number('1e5'+'1111','999999.99');
   to_number 
  -----------
      101111
  (1 row)
  ```

  ```
  openGauss=# SELECT to_number('111111.111'+'1111'+NULL,'999999.99');
   to_number 
  -----------        
  (1 row)
  ```

  ```
  openGauss=# SELECT to_number('this parameter is incorrect' default 321456231 on conversion error ,'999,999,999,999.99');
   to_number 
  -----------
   321456231
  (1 row)
  ```

  ```
  -- -- When the correct_to_number switch of behavior_compat_options is turned off, different numbers of groups are not allowed.
  openGauss=# select to_number('123.45' ,'999,999.999');
  ERROR:  invalid data.
  CONTEXT:  referenced column: to_number
  openGauss=# set behavior_compat_options = 'correct_to_number';
  SET
  openGauss=# select to_number('123.45' ,'999,999.999');
   to_number
  -----------
      123.45
  (1 row)
  ```

  ```
  -- -- When the fmt pattern is configured as numeric digits (pattern 9), non-numeric input in expr is ignored.
  openGauss=# select to_number('123,123','999999999');
   to_number
  -----------
      123123
  (1 row)
  openGauss=# select to_number('123.123','999999999');
   to_number
  -----------
      123123
  (1 row)
  openGauss=# select to_number('123S123','999999999');
   to_number
  -----------
      123123
  (1 row)
  ```

- to\_timestamp\(double precision\)

  Description: Converts a UNIX epoch to a timestamp.

  Return type: timestamp with time zone

  Example:

  ```
  openGauss=# SELECT to_timestamp(1284352323);
        to_timestamp      
  ------------------------
   2010-09-13 12:32:03+08
  (1 row)
  ```

- to\_timestamp(string \[ DEFAULT return_value ON CONVERSION ERROR ] \[ , fmt  [, 'nlsparam' ] ]\)

  Description: Converts a string to a timestamp. The default input format is [DD-Mon-YYYY HH12:MI:SS.FF], which uses the 12-hour AM format. If the input value string does not follow the default format, the user must describe their own input format in fmt. An error is reported if the format description is incorrect. If the string conversion partially fails, the system attempts to convert the return_value after the DEFAULT keyword (the input format of return_value is constrained by fmt). If Mon is an English abbreviation such as Jan, the description language for months can be set in nlsparam (currently only American and English are supported).
  * For the type conversion format, see [Table 1](#table-1-template-patterns-for-date-formatting).
  * If the input year YYYY=0, the system reports an error.
  * If the input year YYYY<0 and SYYYY is specified in fmt, the year with the absolute value n in BC is correctly output.
  * Parameters like MM in fmt cannot use mixed case.
  * The separators in fmt and the string time information can be replaced with other symbols. Example: SELECT to_timestamp('05*Dec^2000', 'DD Mon+YYYY');
  * Both HH and HH12 are in the 01-12 hour format. In timestamps where fmt is specified as HH or HH12 mode and pm is not explicitly specified, the 12th hour of the timestamp is treated as the 0th hour.

  Return type: timestamp without time zone

  Example:

  ```
  openGauss=# SHOW nls_timestamp_format;
      nls_timestamp_format    
  ----------------------------
   DD-Mon-YYYY HH:MI:SS.FF AM
  (1 row)
  ```

  ```
  openGauss=# SELECT to_timestamp('12-sep-2014');
      to_timestamp     
  ---------------------
   2014-09-12 00:00:00
  (1 row)
  ```

  ```
  openGauss=# SELECT to_timestamp ('01-Jan-2002 10:10:10.123000');
      to_timestamp       
  -------------------------
   2002-01-01 10:10:10.123
  (1 row)
  ```

  ```
  openGauss=# SELECT to_timestamp ('2002-01-01 10:10:10.123000','YYYY-MM-DD HH24:MI:SS.FF');
        to_timestamp       
  -------------------------
   2002-01-01 10:10:10.123
  (1 row)
  ```

  ```
  openGauss=# SELECT to_timestamp ('This is an error input' DEFAULT '11-01-11 14:10:10.123000' ON CONVERSION ERROR,'DD-MM-RR HH24:MI:SS.FF');
        to_timestamp       
  -------------------------
   2011-01-11 14:10:10.123
  (1 row)
  ```

  ```
  openGauss=# SELECT to_timestamp ('01-Jan-03 14:10:10.123000' DEFAULT '11-Jan-11 14:10:10.123000' ON CONVERSION ERROR,'DD-Mon-RR HH24:MI:SS.FF','NLS_DATE_LANGUAGE = American');
        to_timestamp       
  -------------------------
   2003-01-01 14:10:10.123
  (1 row)
  ```

  ```
  openGauss=# SELECT to_timestamp('-1','SYYYY');
        to_timestamp      
  ------------------------
   0001-01-01 00:00:00 BC
  (1 row)
  ```

  ```
  openGauss=# SELECT to_timestamp('05 Dec 2000', 'DD Mon YYYY');
      to_timestamp
  ---------------------
   2000-12-05 00:00:00
  (1 row)
  ```

  ```
  openGauss=# SELECT to_timestamp('05*Dec^2000', 'DD Mon+YYYY');
    to_timestamp     
  ---------------------
   2000-12-05 00:00:00
  (1 row)
  ```

  ```
  -- -- In HH or HH12 mode, when PM is not specified, 12 o'clock is treated as 0 o'clock.
  openGauss=# select to_timestamp('2025-09-01 12:24:02','YYYY-MM-DD HH:MI:SS');
      to_timestamp
  ---------------------
   2025-09-01 00:24:02
  (1 row)
  
  openGauss=# select to_timestamp('2025-09-01 12:24:02 pm','YYYY-MM-DD HH:MI:SS pm');
      to_timestamp
  ---------------------
   2025-09-01 12:24:02
  (1 row)
  ```

- abstime\_text

    Description: Converts the abstime type to the text type for output.

    Parameter: abstime

    Return type: text

- abstime\_to\_smalldatetime

    Description: Converts the abstime type to the smalldatetime type.

    Parameter: abstime

    Return type: smalldatetime

- bigint\_tid

    Description: Converts bigint to tid.

    Parameter: bigint

    Return type: tid

- bool\_int1

    Description: Converts bool to int1.

    Parameter: boolean

    Return type: tinyint

- bool\_int2

    Description: Converts bool to int2.

    Parameters: boolean

    Return type: smallint

- bool\_int8

    Description: Converts bool to tinyint.

    Parameter: boolean

    Return type: bigint

- bpchar\_date

    Description: Converts a string to date.

    Parameters: character

    Return type: date

- bpchar\_float4

    Description: Converts a string to float4.

    Parameters: character

    Return type: real

- bpchar\_float8

    Description: Converts a string to float8.

    Parameter: character

    Return type: double precision

- bpchar\_int4

    Description: Converts a string to int4.

    Parameter: character

    Return type: integer

- bpchar\_int8

    Description: Converts a string to tinyint.

    Parameter: character

    Return type: bigint

- bpchar\_numeric

    Description: Converts a string to numeric.

    Parameter: character

    Return type: numeric

- bpchar\_timestamp

    Description: Converts a string to a timestamp.

    Parameter: character

    Return type: timestamp without time zone

- bpchar\_to\_smalldatetime

    Description: Converts a string to smalldatetime.

    Parameters: character

    Return type: smalldatetime

- cupointer_bigint

    Description: Converts the column store CU pointer type to the bigint type.

    Parameters: text

    Return type: bigint

- date_bpchar

    Description: Converts the date type to the bpchar type.

    Parameters: date

    Return type: character

- date\_text

    Description: Converts the date type to the text type.

    Parameter: date

    Return type: text

- date\_varchar

    Description: Converts the date type to the varchar type.

    Parameter: date

    Return type: character varying

- f4toi1

    Description: Forcibly casts the float4 type to the tinyint unsigned type.

    Parameters: real

    Return type: tinyint unsigned

- f8toi1

    Description: Forcibly casts the float8 type to the tinyint unsigned type.

    Parameters: double precision

    Return type: tinyint unsigned

- float4_bpchar

    Description: Converts float4 to bpchar.

    Parameter: real

    Return type: character

- float4\_text

    Description: Converts float4 to text.

    Parameter: real

    Return type: text

- float4\_varchar

    Description: Converts float4 to varchar.

    Parameter: real

    Return type: character varying

- float8\_bpchar

    Description: Converts float8 to bpchar.

    Parameter: double precision

    Return type: character

- float8\_interval

    Description: Converts float8 to interval.

    Parameters: double precision

    Return type: interval

- float8\_text

    Description: float8 is converted to text.

    Parameter: double precision

    Return type: text

- float8\_varchar

    Description: float8 is converted to varchar.

    Parameter: double precision

    Return type: character varying

- i1tof4

    Description: Converts tinyint unsigned to float4.

    Parameter: tinyint unsigned

    Return type: real

- i1tof8

    Description: Converts tinyint unsigned to float8.

    Parameters: tinyint unsigned

    Return type: double precision

- i1toi2

    Description: Converts tinyint unsigned to smallint.

    Parameters: tinyint unsigned

    Return type: smallint

- i1toi4

    Description: tinyint unsigned is converted to int.

    Parameters: tinyint unsigned

    Return type: integer

- i1toi8

    Description: tinyint unsigned is converted to bigint.

    Parameters: tinyint unsigned

    Return type: bigint

- i2toi1

    Description: smallint is converted to tinyint unsigned.

    Parameters: smallint

    Return type: tinyint unsigned

- i4toi1

    Description: Converts int to tinyint unsigned.

    Parameter: integer

    Return type: tinyint unsigned

- i8toi1

    Description: Converts bigint to tinyint unsigned.

    Parameters: bigint

    Return type: tinyint unsigned

- int1\_avg\_accum

    Description: Adds the second tinyint unsigned type parameter to the first parameter, where the first parameter is a bigint type array.

    Parameters: bigint\[\], tinyint unsigned

    Return type: bigint\[\]

- int1\_bool

    Description: Converts tinyint unsigned to bool.

  Parameter: tinyint unsigned

  Return type: boolean

- int1\_bpchar

  Description: Converts tinyint unsigned to bpchar.

  Parameter: tinyint unsigned

    Return type: character

- int1_mul_cash

    Description: Returns the product of a tinyint parameter and a cash parameter. The return value is of the cash type.

    Parameters: tinyint, money

    Return type: money

- int1\_numeric

    Description: Converts tinyint unsigned to numeric.

    Parameters: tinyint unsigned

    Return type: numeric

- int1\_nvarchar2

    Description: Converts tinyint unsigned to nvarchar2.

    Parameters: tinyint unsigned

    Return type: nvarchar2

- int1\_text

    Description: Converts tinyint unsigned to text.

    Parameters: tinyint unsigned

    Return type: text

- int1_varchar

    Description: Converts tinyint unsigned to varchar.

    Parameters: tinyint unsigned

    Return type: character varying

- int1in

    Description: Converts a string to an unsigned 1-byte integer.

    Parameters: cstring

    Return type: tinyint

- int1out

    Description: Converts an unsigned 1-byte integer to a string.

    Parameters: tinyint

    Return type: cstring

- int1up

  Description: Converts an input integer to an unsigned 1-byte integer.

  Parameter: tinyint

  Return type: tinyint

- int2\_bool

  Description: Converts a signed 2-byte integer to the Boolean type.

   Parameters: smallint

  Return type: boolean

- int2_bpchar

  Description: Converts a signed 2-byte integer to BpChar.

  Parameters: smallint

    Return type: character

- int2\_text

    Description: Converts a signed 2-byte integer to the text type.

    Parameters: smallint

    Return type: text

- int2\_varchar

    Description: Converts a signed 2-byte integer to the varchar type.

    Parameters: smallint

    Return type: character varying

- int8\_text

    Description: tinyint is converted to the text type.

    Parameter: bigint

    Return type: text

- int8_varchar

    Description: tinyint is converted to varchar.

    Parameters: bigint

    Return type: character varying

- intervaltonum

    Description: Converts the internal data type date to the numeric type.

    Parameters: interval

    Return type: numeric

- numeric\_bpchar

    Description: Converts numeric to bpchar.

    Parameters: numeric

    Return type: character

- numeric\_int1

    Description: Converts numeric to a signed 1-byte integer.

    Parameters: numeric

    Return type: tinyint

- numeric\_text

    Description: numeric is converted to text.

    Parameter: numeric

    Return type: text

- numeric\_varchar

    Description: numeric is converted to varchar.

    Parameters: numeric

    Return type: character varying

- nvarchar2in

    Description: Converts a C string to varchar.

    Parameters: cstring, oid, integer

    Return type: nvarchar2

- nvarchar2out

    Description: Converts text to a C string.

    Parameter: nvarchar2

    Return type: cstring

- nvarchar2send

    Description: Converts varchar to binary.

    Parameters: nvarchar2

    Return type: bytea

- oidvectorin\_extend

    Description: Converts a string into oidvector.

    Parameters: cstring

    Return type: oidvector_extend

- oidvectorout_extend

    Description: Converts oidvector to a string.

    Parameters: oidvector\_extend

    Return type: cstring

- oidvectorsend\_extend

    Description: Converts oidvector to a string.

    Parameters: oidvector\_extend

    Return type: bytea

- reltime\_text

    Description: Converts reltime to text.

    Parameter: reltime

    Return type: text

- text_date

    Description: Converts the text type to the date type.

    Parameter: text

    Return type: date

- text_float4

    Description: Converts the text type to the float4 type.

    Parameter: text

    Return type: real

- text_float8

    Description: Converts the text type to the float8 type.

    Parameter: text

    Return type: double precision

- text_int1

    Description: Converts the text type to the int1 type.

    Parameter: text

    Return type: tinyint

- text\_int2

    Description: Converts text type to int2 type.

    Parameters: text

    Return type: smallint

- text\_int4

    Description: Converts the text type to the int4 type.

    Parameters: text

    Return type: integer

- text\_int8

    Description: Converts text type to tinyint type.

    Parameter: text

    Return type: bigint

- text\_numeric

    Description: Converts text type to numeric type.

    Parameters: text

    Return type: numeric

- text_timestamp

    Description: Converts text type to timestamp type.

    Parameters: text

    Return type: timestamp without time zone

- time\_text

    Description: Converts the time type to the text type.

    Parameter: time without time zone

    Return type: text

- timestamp_text

    Description: Converts the timestamp type to the text type.

    Parameters: timestamp without time zone

    Return type: text

- timestamp_to_smalldatetime

  Description: Converts the timestamp type to the smalldatetime type.

  Parameters: timestamp without time zone

  Return type: smalldatetime

- timestamp\_varchar

  Description: Converts the timestamp type to the varchar type.

    Parameters: timestamp without time zone

    Return type: character varying

- timestamptz\_to\_smalldatetime

    Description: Converts the timestamptz type to smalldatetime.

    Parameters: timestamp with time zone

    Return type: smalldatetime

- timestampzone_text

    Description: Converts the timestampzone type to the text type.

    Parameter: timestamp with time zone

    Return type: text

- timetz\_text

    Description: Converts a timetz type to a text type.

    Parameters: time with time zone

    Return type: text

- to\_integer

    Description: Converts to the integer type.

    Parameters: character varying

    Return type: integer

- to_interval

    Description: Converts to the interval type.

    Parameters: character varying

    Return type: interval

- to\_numeric

    Description: Converts to the numeric type.

    Parameters: character varying

    Return type: numeric

- to\_nvarchar2

    Description: Converts to the nvarchar2 type.

    Parameter: numeric

    Return type: nvarchar2

- to\_text

    Description: Converts to the text type.

    Parameters: smallint

    Return type: text

- to\_ts

    Description: Converts to the ts type.

    Parameter: character varying

    Return type: timestamp without time zone

- to\_varchar2

    Description: Converts to the varchar2 type.

    Parameters: timestamp without time zone

    Return type: character varying

- varchar\_date

    Description: Converts varchar type to date.

    Parameters: character varying

    Return type: date

- varchar\_float4

    Description: Converts varchar type to float4.

    Parameters: character varying

    Return type: real

- varchar\_float8

    Description: Converts the varchar type to float8.

    Parameters: character varying

    Return type: double precision

- varchar\_int4

    Description: Converts the varchar type to int4.

    Parameters: character varying

    Return type: integer

- varchar\_int8

    Description: Converts the varchar type to tinyint.

    Parameters: character varying

    Return type: bigint

- varchar\_numeric

    Description: Converts varchar type to numeric.

    Parameters: character varying

    Return type: numeric

- varchar_timestamp

    Description: Converts varchar type to timestamp.

    Parameter: character varying

    Return type: timestamp without time zone

- varchar2\_to\_smlldatetime

    Description: Converts the varchar2 type to smalldatetime.

    Parameters: character varying

    Return type: smalldatetime

- xidout4

    Description: Outputs xid as a 4-byte number.

    Parameter: xid32

    Return type: cstring

- xidsend4

    Description: Converts xid to binary format.

    Parameters: xid32

    Return type: bytea

## Encoding Type Conversion<a name="zh-cn_topic_0283137417_section1073313502270"></a>

- convert_to_nocase(text, text)

    Description: Converts a string to the specified encoding type.

    Return type: bytea

    Example:

  ```
    openGauss=# SELECT convert_to_nocase('12345', 'GBK');
     convert_to_nocase 
    -------------------
     \x3132333435
    (1 row)
  ```

## Appendix

### Table 1 Template Patterns for Date Formatting

| Pattern                        | Description                                                         |
| ------------------------------ | ------------------------------------------------------------------- |
| `HH`                           | Hour (01-12). When PM is not specified, 12 o'clock is treated as 0. |
| `HH12`                         | Hour (01-12). When PM is not specified, 12 o'clock is treated as 0. |
| `HH24`                         | Hour (01-24)                                                        |
| `MI`                           | Minute (00-59)                                                      |
| `SS`                           | Second (00-59)                                                      |
| `MS`                           | Millisecond (000-999)                                               |
| `US`                           | Microsecond (000000-999999)                                         |
| `Y,YYY`                        | Year with comma (4 or more digits)                                  |
| `YYYY`                         | Year (4 or more digits)                                             |
| `BC`, `bc`, `AD`, `ad`         | Era indicator                                                       |
| `B.C.`, `b.c.`, `A.D.`, `a.d.` | Era indicator                                                       |
| `MONTH`                        | Full uppercase month name                                           |
| `Month`                        | Capitalized month name                                              |
| `month`                        | Full lowercase month name                                           |
| `MON`                          | Abbreviated uppercase month name                                    |
| `Mon`                          | Abbreviated capitalized month name                                  |
| `mon`                          | Abbreviated lowercase month name                                    |
| `MM`                           | Month (01-12)                                                       |
| `DD`                           | Day (01-31)                                                         |

### Table 2 Template Patterns for Numeric Formatting

<table><thead align="left"><tr id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_r69f9bd4666d94b829aa792ae99d7cf23"><th class="cellrowborder" valign="top" width="30.64%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p626603815414"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p626603815414"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p626603815414"></a>Pattern</p></th>
<th class="cellrowborder" valign="top" width="69.36%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_a74d38a94a3fe4541a0cefacceb68421c"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_a74d38a94a3fe4541a0cefacceb68421c"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_a74d38a94a3fe4541a0cefacceb68421c"></a>Description</p></th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_re3c8f9ca94614519b3dc7f6684b67a8a"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_a85e6c7355dba429d89743d33ddb6fe9f"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_a85e6c7355dba429d89743d33ddb6fe9f"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_a85e6c7355dba429d89743d33ddb6fe9f"></a>9</p></td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p19267138249"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p19267138249"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p19267138249"></a>Value with the specified number of digits</p></td>
</tr>
<tr id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_rd6c7766b2b6c4256a5f7c41857969c2e"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_ad1e030e105a041f9be29b32b9880926b"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_ad1e030e105a041f9be29b32b9880926b"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_ad1e030e105a041f9be29b32b9880926b"></a>0</p></td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_aedbc391c58984d7ea79e88323c899cba"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_aedbc391c58984d7ea79e88323c899cba"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_aedbc391c58984d7ea79e88323c899cba"></a>Value with leading zero</p></td>
</tr>
<tr id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_r0ec636a0189549a5a9ec28f7d07442fa"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p226712381420"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p226712381420"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p226712381420"></a>. (period)</p></td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p826718381548"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p826718381548"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p826718381548"></a>Decimal point</p></td>
</tr>
<tr id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_r41f917a4d30a42f49dfee21c616238c6"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p226720381415"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p226720381415"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p226720381415"></a>, (comma)</p></td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p19267238744"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p19267238744"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p19267238744"></a>Group (thousands) separator</p></td>
</tr>
<tr id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_r40680a627e0747de969940c96e4becb0"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p122679382048"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p122679382048"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p122679382048"></a>PR</p></td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p5267538048"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p5267538048"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p5267538048"></a>Negative value in angle brackets</p></td>
</tr>
<tr id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_r980dc458836d4a47bb6d317860300ee7"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_a45caeb08b0264dc4a2ff529d6874f0e0"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_a45caeb08b0264dc4a2ff529d6874f0e0"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_a45caeb08b0264dc4a2ff529d6874f0e0"></a>S</p></td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p126717381641"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p126717381641"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p126717381641"></a>Signed numeric value (using locale setting)</p></td>
</tr>
<tr id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_rc2a588c196874114a198e171bc60efb3"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_a620e5b93899f4be49edbb42d28a5b7ed"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_a620e5b93899f4be49edbb42d28a5b7ed"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_a620e5b93899f4be49edbb42d28a5b7ed"></a>L</p></td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_a606fb171c87b41f7b14729ca2452eb79"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_a606fb171c87b41f7b14729ca2452eb79"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_a606fb171c87b41f7b14729ca2452eb79"></a>Currency symbol (uses locale setting)</p></td>
</tr>
<tr id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_r67802f70db2c47d6826d2f3058670e02"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p82686383413"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p82686383413"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p82686383413"></a>D</p></td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p142684382414"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p142684382414"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p142684382414"></a>Decimal point (uses locale setting)</p></td>
</tr>
<tr id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_r8e5228e208524ae79219dad8bc0cb9f6"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p152688381649"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p152688381649"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p152688381649"></a>G</p></td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p52684389411"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p52684389411"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p52684389411"></a>Group separator (uses locale setting)</p></td>
</tr>
<tr id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_r93be073968b145a99a7cd6cec84767fd"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p182681238546"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p182681238546"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p182681238546"></a>MI</p></td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_aa773dde81ab84b8f99b4b4cc7c6e8106"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_aa773dde81ab84b8f99b4b4cc7c6e8106"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_aa773dde81ab84b8f99b4b4cc7c6e8106"></a>Minus sign at the specified position (if number &lt; 0)</p></td>
</tr>
<tr id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_rf29e9449a7af4ca98cbc4d9c49f81c13"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_ae1dd06afe04b42d0bd52a8586fdac92c"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_ae1dd06afe04b42d0bd52a8586fdac92c"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_ae1dd06afe04b42d0bd52a8586fdac92c"></a>PL</p></td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p426814387413"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p426814387413"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p426814387413"></a>Plus sign at the specified position (if number &gt; 0)</p></td>
</tr>
<tr id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_rfd44d9c8be5d41b7b6a65884d8cdb125"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p102684385411"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p102684385411"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p102684385411"></a>SG</p></td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_a49bcb7bb23d643439471051b81fd1702"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_a49bcb7bb23d643439471051b81fd1702"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_a49bcb7bb23d643439471051b81fd1702"></a>Plus/minus sign at the specified position</p></td>
</tr>
<tr id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_r855442c6df294909af07f69b6bbd56eb"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p626910381647"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p626910381647"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p626910381647"></a>RN</p></td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_aeea1784f00d94ef8a9cc55abe562c252"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_aeea1784f00d94ef8a9cc55abe562c252"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_aeea1784f00d94ef8a9cc55abe562c252"></a>Roman numeral (input between 1 and 3999)</p></td>
</tr>
<tr id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_re53a4c10b2f14c6e965cb84d797e7c7c"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_aad0288db5cd24746ab7960d9bbf3b7ac"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_aad0288db5cd24746ab7960d9bbf3b7ac"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_aad0288db5cd24746ab7960d9bbf3b7ac"></a>TH or th</p></td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_a9ba0a6b1de56488398018c14b93422ed"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_a9ba0a6b1de56488398018c14b93422ed"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_a9ba0a6b1de56488398018c14b93422ed"></a>Ordinal suffix</p></td>
</tr>
<tr id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_rd055aecafa1d4d40ade943b2332801fd"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p172691038441"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p172691038441"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p172691038441"></a>V</p></td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p72691938743"><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p72691938743"></a><a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_zh-cn_topic_0058966040_p72691938743"></a>Shift specified digits (decimal point)</p></td>
</tr>
</tbody>
</table>
