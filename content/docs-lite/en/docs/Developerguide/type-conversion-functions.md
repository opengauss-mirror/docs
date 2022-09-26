# Type Conversion Functions<a name="EN-US_TOPIC_0289900669"></a>

## Type Conversion Functions<a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_sd1817f56ca2d4be7a4ad606e0e597c55"></a>

-   cash\_words\(money\)

    Description: Type conversion function, which converts money into text.

    Example:

    ```
    openGauss=# SELECT cash_words('1.23');
                cash_words
    -----------------------------------
     One dollar and twenty three cents
    (1 row)
    ```

-   cast\(x as y\)

    Description: Converts x into the type specified by y.

    Example:

    ```
    openGauss=# SELECT cast('22-oct-1997' as timestamp);
          timestamp      
    ---------------------
     1997-10-22 00:00:00
    (1 row)
    ```

-   hextoraw\(raw\)

    Description: Converts a string in hexadecimal format into raw type.

    Return type: raw

    Example:

    ```
    openGauss=# SELECT hextoraw('7D');
     hextoraw 
    ----------
     7D
    (1 row)
    ```

-   numtoday\(numeric\)

    Description: Converts values of the number type into the timestamp of the specified type.

    Return type: timestamp

    Example:

    ```
    openGauss=# SELECT numtoday(2);
     numtoday
    ----------
     2 days
    (1 row)
    ```

-   pg\_systimestamp\(\)

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

-   rawtohex\(string\)

    Description: Converts a string in binary format into hexadecimal format.

    The result is the ACSII code of the input characters in hexadecimal format.

    Return type: varchar

    Example:

    ```
    openGauss=# SELECT rawtohex('1234567');
        rawtohex    
    ----------------
     31323334353637
    (1 row)
    ```

-   to\_bigint\(varchar\)

    Description: Converts the character type to the bigint type.

    Return type: bigint

    Example:

    ```
    openGauss=# SELECT to_bigint('123364545554455');
        to_bigint    
    ----------------
     123364545554455
    (1 row)
    ```

-   to\_char\(datetime/interval \[, fmt\]\)

    Description: Converts a DATETIME or INTERVAL value of the DATE/TIMESTAMP/TIMESTAMP WITH TIME ZONE/TIMESTAMP WITH LOCAL TIME ZONE type into the TEXT type according to the format specified by  **fmt**. 

    -   The optional parameter  **fmt**  allows for the following types: date, time, week, quarter, and century. Each type has a unique template. The templates can be combined together. Common templates include HH, MI, SS, YYYY, MM, and DD.
    -   A template may have a modification word. FM is a common modification word and is used to suppress the preceding zero or the following blank spaces.

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

-   to\_char\(numeric/smallint/integer/bigint/double precision/real\[, fmt\]\)

    Descriptions: Converts an integer or a value in floating point format into a string in specified format.

    -   The optional parameter  **fmt**  allows for the following types: decimal characters, grouping characters, positive/negative sign and currency sign. Each type has a unique template. The templates can be combined together. Common templates include: 9, 0, millesimal sign \(,\), and decimal point \(.\).
    -   A template can have a modification word, similar to FM. However, FM does not suppress 0 which is output according to the template.
    -   Use the template X or x to convert an integer value into a string in hexadecimal format.

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
-   to\_char\(set\)

    Description: Converts a value of the SET type to a string.

    Return value: text

    Example:

    ```
    -- The site column is of the SET type in the employee table.
    openGauss=# select to_char(site) from employee;
         to_char     
    -----------------
     beijing,nanjing
     beijing,wuhan
    (2 rows)
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

-   to\_char\(string\)

    Description: Converts the CHAR/VARCHAR/VARCHAR2/CLOB type into the VARCHAR type.

    If this function is used to convert data of the CLOB type, and the value to be converted exceeds the value range of the target type, an error is returned.

    Return type: varchar

    Example:

    ```
    openGauss=# SELECT to_char('01110');
     to_char
    ---------
     01110
    (1 row)
    ```

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

-   to\_clob\(char/nchar/varchar/varchar2/nvarchar/nvarchar2/text/raw\)

    Description: Converts the raw type or text character set type CHAR, NCHAR, VARCHAR, VARCHAR2, NVARCHAR, NVARCHAR2, or TEXT to the CLOB type.

    Return type: clob

    Example:

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

-   to\_date\(text\)

    Description: Converts values of the text type into the timestamp in the specified format. Currently, only the following two formats are supported:

    -   Format 1: Date without separators, for example, 20150814. The value must contain the complete year, month, and day.
    -   Format 2: Date with separators, for example, 2014-08-14. The separator can be any non-digit character.

    Return type: timestamp without time zone

    Example:

    ```
    openGauss=# SELECT to_date('2015-08-14');
           to_date
    ---------------------
     2015-08-14 00:00:00
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

-   to\_number \( expr \[, fmt\]\)

    Description: Converts  **expr**  into a value of the NUMBER type according to the specified format.

    For details about the type conversion formats, see  [Table 1](#en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_t3987a5bb00154b0f9e55863b4ababd3d).

    If a hexadecimal string is converted into a decimal number, the hexadecimal string can include a maximum of 16 bytes if it is to be converted into a sign-free number.

    During the conversion from a hexadecimal string to a decimal digit, the format string cannot have a character other than x or X. Otherwise, an error is reported.

    Return type: number

    Example:

    ```
    openGauss=# SELECT to_number('12,454.8-', '99G999D9S');
     to_number 
    -----------
      -12454.8
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

-   to\_timestamp\(string \[,fmt\]\)

    Description: Converts a string into a value of the timestamp type according to the format specified by  **fmt**. When  **fmt**  is not specified, perform the conversion according to the format specified by  **nls\_timestamp\_format**.

    In  **to\_timestamp**  in openGauss,

    -   If the input year  *YYYY*  is 0, an error will be reported.
    -   If the input year  *YYYY*  is less than 0, specify  *SYYYY*  in  **fmt**. The year with the value of n \(an absolute value\) BC will be output correctly.

    Characters in the  **fmt**  must match the schema for formatting the data and time. Otherwise, an error is reported.

    Return type: timestamp without time zone

    Example:

    ```
    openGauss=# SHOW nls_timestamp_format;
        nls_timestamp_format    
    ----------------------------
     DD-Mon-YYYY HH:MI:SS.FF AM
    (1 row)
    
    openGauss=# SELECT to_timestamp('12-sep-2014');
        to_timestamp     
    ---------------------
     2014-09-12 00:00:00
    (1 row)
    ```

    ```
    openGauss=# SELECT to_timestamp('12-Sep-10 14:10:10.123000','DD-Mon-YY HH24:MI:SS.FF');
          to_timestamp       
    -------------------------
     2010-09-12 14:10:10.123
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
    openGauss=# SELECT to_timestamp('98','RR');
        to_timestamp     
    ---------------------
     1998-01-01 00:00:00
    (1 row)
    ```

    ```
    openGauss=# SELECT to_timestamp('01','RR');
        to_timestamp     
    ---------------------
     2001-01-01 00:00:00
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


**Table  1**  Template patterns for numeric formatting

<a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_t3987a5bb00154b0f9e55863b4ababd3d"></a>
<table><thead align="left"><tr id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_r69f9bd4666d94b829aa792ae99d7cf23"><th class="cellrowborder" valign="top" width="30.64%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p626603815414"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p626603815414"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p626603815414"></a>Pattern</p>
</th>
<th class="cellrowborder" valign="top" width="69.36%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_a74d38a94a3fe4541a0cefacceb68421c"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_a74d38a94a3fe4541a0cefacceb68421c"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_a74d38a94a3fe4541a0cefacceb68421c"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_re3c8f9ca94614519b3dc7f6684b67a8a"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_a85e6c7355dba429d89743d33ddb6fe9f"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_a85e6c7355dba429d89743d33ddb6fe9f"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_a85e6c7355dba429d89743d33ddb6fe9f"></a>9</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p19267138249"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p19267138249"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p19267138249"></a>Value with specified digits</p>
</td>
</tr>
<tr id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_rd6c7766b2b6c4256a5f7c41857969c2e"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_ad1e030e105a041f9be29b32b9880926b"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_ad1e030e105a041f9be29b32b9880926b"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_ad1e030e105a041f9be29b32b9880926b"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_aedbc391c58984d7ea79e88323c899cba"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_aedbc391c58984d7ea79e88323c899cba"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_aedbc391c58984d7ea79e88323c899cba"></a>Values with leading zeros</p>
</td>
</tr>
<tr id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_r0ec636a0189549a5a9ec28f7d07442fa"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p226712381420"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p226712381420"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p226712381420"></a>Period (.)</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p826718381548"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p826718381548"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p826718381548"></a>Decimal point</p>
</td>
</tr>
<tr id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_r41f917a4d30a42f49dfee21c616238c6"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p226720381415"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p226720381415"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p226720381415"></a>Comma (,)</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p19267238744"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p19267238744"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p19267238744"></a>Group (thousand) separator</p>
</td>
</tr>
<tr id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_r40680a627e0747de969940c96e4becb0"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p122679382048"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p122679382048"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p122679382048"></a>PR</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p5267538048"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p5267538048"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p5267538048"></a>Negative values in angle brackets</p>
</td>
</tr>
<tr id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_r980dc458836d4a47bb6d317860300ee7"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_a45caeb08b0264dc4a2ff529d6874f0e0"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_a45caeb08b0264dc4a2ff529d6874f0e0"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_a45caeb08b0264dc4a2ff529d6874f0e0"></a>S</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p126717381641"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p126717381641"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p126717381641"></a>Sign anchored to number (uses locale)</p>
</td>
</tr>
<tr id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_rc2a588c196874114a198e171bc60efb3"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_a620e5b93899f4be49edbb42d28a5b7ed"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_a620e5b93899f4be49edbb42d28a5b7ed"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_a620e5b93899f4be49edbb42d28a5b7ed"></a>L</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_a606fb171c87b41f7b14729ca2452eb79"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_a606fb171c87b41f7b14729ca2452eb79"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_a606fb171c87b41f7b14729ca2452eb79"></a>Currency symbol (uses locale)</p>
</td>
</tr>
<tr id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_r67802f70db2c47d6826d2f3058670e02"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p82686383413"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p82686383413"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p82686383413"></a>D</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p142684382414"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p142684382414"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p142684382414"></a>Decimal point (uses locale)</p>
</td>
</tr>
<tr id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_r8e5228e208524ae79219dad8bc0cb9f6"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p152688381649"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p152688381649"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p152688381649"></a>G</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p52684389411"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p52684389411"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p52684389411"></a>Group separator (uses locale)</p>
</td>
</tr>
<tr id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_r93be073968b145a99a7cd6cec84767fd"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p182681238546"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p182681238546"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p182681238546"></a>MI</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_aa773dde81ab84b8f99b4b4cc7c6e8106"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_aa773dde81ab84b8f99b4b4cc7c6e8106"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_aa773dde81ab84b8f99b4b4cc7c6e8106"></a>Minus sign in the specified position (if the number is less than 0)</p>
</td>
</tr>
<tr id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_rf29e9449a7af4ca98cbc4d9c49f81c13"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_ae1dd06afe04b42d0bd52a8586fdac92c"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_ae1dd06afe04b42d0bd52a8586fdac92c"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_ae1dd06afe04b42d0bd52a8586fdac92c"></a>PL</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p426814387413"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p426814387413"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p426814387413"></a>Plus sign in the specified position (if the number is greater than 0)</p>
</td>
</tr>
<tr id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_rfd44d9c8be5d41b7b6a65884d8cdb125"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p102684385411"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p102684385411"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p102684385411"></a>SG</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_a49bcb7bb23d643439471051b81fd1702"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_a49bcb7bb23d643439471051b81fd1702"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_a49bcb7bb23d643439471051b81fd1702"></a>Plus or minus sign in the specified position</p>
</td>
</tr>
<tr id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_r855442c6df294909af07f69b6bbd56eb"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p626910381647"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p626910381647"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p626910381647"></a>RN</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_aeea1784f00d94ef8a9cc55abe562c252"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_aeea1784f00d94ef8a9cc55abe562c252"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_aeea1784f00d94ef8a9cc55abe562c252"></a>Roman numerals (the input values are between 1 and 3999)</p>
</td>
</tr>
<tr id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_re53a4c10b2f14c6e965cb84d797e7c7c"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_aad0288db5cd24746ab7960d9bbf3b7ac"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_aad0288db5cd24746ab7960d9bbf3b7ac"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_aad0288db5cd24746ab7960d9bbf3b7ac"></a>TH or th</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_a9ba0a6b1de56488398018c14b93422ed"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_a9ba0a6b1de56488398018c14b93422ed"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_a9ba0a6b1de56488398018c14b93422ed"></a>Ordinal number suffix</p>
</td>
</tr>
<tr id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_rd055aecafa1d4d40ade943b2332801fd"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p172691038441"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p172691038441"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p172691038441"></a>V</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p72691938743"><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p72691938743"></a><a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p72691938743"></a>Shifts specified number of digits (decimal)</p>
</td>
</tr>
</tbody>
</table>

-   abstime\_text

    Description: Converts abstime to text.

    Parameter: abstime

    Return type: text


-   abstime\_to\_smalldatetime

    Description: Converts abstime to smalldatatime.

    Parameter: abstime

    Return type: smalldatetime


-   bigint\_tid

    Description: Converts bigint to tid.

    Parameter: bigint

    Return type: tid


-   bool\_int1

    Description: Converts bool to int1.

    Parameter: Boolean

    Return type: tinyint


-   bool\_int2

    Description: Converts bool to int2.

    Parameter: Boolean

    Return type: smallint


-   bool\_int8

    Description: Converts bool to int8.

    Parameter: Boolean

    Return type: bigint


-   bpchar\_date

    Description: Converts a string to a date.

    Parameter: character

    Return type: date


-   bpchar\_float4

    Description: Converts a string to float4.

    Parameter: character

    Return type: real


-   bpchar\_float8

    Description: Converts a string to float8.

    Parameter: character

    Return type: double precision


-   bpchar\_int4

    Description: Converts a string to int4.

    Parameter: character

    Return type: integer


-   bpchar\_int8

    Description: Converts a string to int8.

    Parameter: character

    Return type: bigint


-   bpchar\_numeric

    Description: Converts a string to numeric.

    Parameter: character

    Return type: numeric


-   bpchar\_timestamp

    Description: Converts a string to a timestamp.

    Parameter: character

    Return type: timestamp without time zone


-   bpchar\_to\_smalldatetime

    Description: Converts a string to smalldatetime.

    Parameter: character

    Return type: smalldatetime

-   cupointer\_bigint

    Description: Converts the column-store CU pointer type to the bigint type.

    Parameter: text

    Return type: bigint

-   date\_bpchar

    Description: Converts the date type to bpchar.

    Parameter: date

    Return type: character

-   date\_text

    Description: Converts date to text.

    Parameter: date

    Return type: text

-   date\_varchar

    Description: Converts date to varchar.

    Parameter: date

    Return type: character varying

-   f4toi1

    Description: Forcibly converts float4 to uint8.

    Parameter: real

    Return type: tinyint

-   f8toi1

    Description: Forcibly converts float8 to uint8.

    Parameter: double precision

    Return type: tinyint

-   float4\_bpchar

    Description: Converts float4 to bpchar.

    Parameter: real

    Return type: character

-   float4\_text

    Description: Converts float4 to text.

    Parameter: real

    Return type: text

-   float4\_varchar

    Description: Converts float4 to varchar.

    Parameter: real

    Return type: character varying


-   float8\_bpchar

    Description: Converts float8 to bpchar.

    Parameter: double precision

    Return type: character


-   float8\_interval

    Description: Converts float8 to interval.

    Parameter: double precision

    Return type: interval


-   float8\_text

    Description: Converts float8 to text.

    Parameter: double precision

    Return type: text

-   float8\_varchar

    Description: Converts float8 to varchar.

    Parameter: double precision

    Return type: character varying

-   i1tof4

    Description: Converts uint8 to float4.

    Parameter: tinyint

    Return type: real

-   i1tof8

    Description: Converts uint8 to float8.

    Parameter: tinyint

    Return type: double precision

-   i1toi2

    Description: Converts uint8 to int16.

    Parameter: tinyint

    Return type: smallint


-   i1toi4

    Description: Converts uint8 to int32.

    Parameter: tinyint

    Return type: integer


-   i1toi8

    Description: Converts uint8 to int64.

    Parameter: tinyint

    Return type: bigint

-   i2toi1

    Description: Converts int16 to uint8.

    Parameter: smallint

    Return type: tinyint

-   i4toi1

    Description: Converts int32 to uint8.

    Parameter: integer

    Return type: tinyint

-   i8toi1

    Description: Converts int64 to uint8.

    Parameter: bigint

    Return type: tinyint

-   int1\_avg\_accum

    Description: Adds the second parameter of the uint8 type to the first parameter. The first parameter is an array of the bigint type.

    Parameter: bigint\[\], tinyint

    Return type: bigint\[\]

-   int1\_bool

    Description: Converts uint8 to bool.

    Parameter: tinyint

    Return type: Boolean

-   int1\_bpchar

    Description: Converts uint8 to bpchar.

    Parameter: tinyint

    Return type: character

-   int1\_mul\_cash

    Description: Returns the product of a parameter of the int8 type and a parameter of the cash type. The return type is cash.

    Parameter: tinyint, money

    Return type: money

-   int1\_numeric

    Description: Converts uint8 to numeric.

    Parameter: tinyint

    Return type: numeric

-   int1\_nvarchar2

    Description: Converts uint8 to nvarchar2.

    Parameter: tinyint

    Return type: nvarchar2


-   int1\_text

    Description: Converts uint8 to text.

    Parameter: tinyint

    Return type: text


-   int1\_varchar

    Description: Converts uint8 to varchar.

    Parameter: tinyint

    Return type: character varying


-   int1in

    Description: Converts a string into an unsigned 1-byte integer.

    Parameter: cstring

    Return type: tinyint

-   int1out

    Description: Converts an unsigned 1-byte integer into a string.

    Parameter: tinyint

    Return type: cstring

-   int1up

    Description: Converts an input integer to an unsigned 1-byte integer.

    Parameter: tinyint

    Return type: tinyint

-   int2\_bool

    Description: Converts a signed two-byte integer to the bool type.

    Parameter: smallint

    Return type: Boolean

-   int2\_bpchar

    Description: Converts a signed two-byte integer to the bpchar type.

    Parameter: smallint

    Return type: character

-   int2\_text

    Description: Converts a signed two-byte integer to the text type.

    Parameter: smallint

    Return type: text

-   int2\_varchar

    Description: Converts a signed two-byte integer to the varchar type.

    Parameter: smallint

    Return type: character varying


-   int8\_text

    Description: Converts an eight-byte signed integer to the text type.

    Parameter: bigint

    Return type: text

-   int8\_varchar

    Description: Converts an eight-byte signed integer to varchar.

    Parameter: bigint

    Return type: character varying

-   intervaltonum

    Description: Converts the internal dats type date to numeric.

    Parameter: interval

    Return type: numeric

-   numeric\_bpchar

    Description: Converts numeric to bpchar.

    Parameter: numeric

    Return type: character

-   numeric\_int1

    Description: Converts numeric to a signed one-byte integer.

    Parameter: numeric

    Return type: tinyint

-   numeric\_text

    Description: Converts numeric to text.

    Parameter: numeric

    Return type: text

-   numeric\_varchar

    Description: Converts numeric to varchar.

    Parameter: numeric

    Return type: character varying

-   nvarchar2in

    Description: Converts c string to varchar.

    Parameter: cstring, oid, integer

    Return type: nvarchar2

-   nvarchar2out

    Description: Converts text into a c string.

    Parameter: nvarchar2

    Return type: cstring

-   nvarchar2send

    Description: Converts varchar to binary.

    Parameter: nvarchar2

    Return type: bytea


-   oidvectorin\_extend

    Description: Converts a string to oidvector.

    Parameter: cstring

    Return type: oidvector\_extend

-   oidvectorout\_extend

    Description: Converts oidvector to a string.

    Parameter: oidvector\_extend

    Return type: cstring

-   oidvectorsend\_extend

    Description: Converts oidvector to a string.

    Parameter: oidvector\_extend

    Return type: bytea

-   reltime\_text

    Description: Converts reltime to text.

    Parameter: reltime

    Return type: text

-   text\_date

    Description: Converts the text type to the date type.

    Parameter: text

    Return type: date

-   text\_float4

    Description: Converts text to float4.

    Parameter: text

    Return type: real

-   text\_float8

    Description: Converts the text type to float8.

    Parameter: text

    Return type: double precision

-   text\_int1

    Description: Converts the text type to int1.

    Parameter: text

    Return type: tinyint

-   text\_int2

    Description: Converts the text type to the int2 type.

    Parameter: text

    Return type: smallint

-   text\_int4

    Description: Converts the text type to int4.

    Parameter: text

    Return type: integer

-   text\_int8

    Description: Converts the text type to the int8 type.

    Parameter: text

    Return type: bigint

-   text\_numeric

    Description: Converts the text type to the numeric type.

    Parameter: text

    Return type: numeric

-   text\_timestamp

    Description: Converts the text type to the timestamp type.

    Parameter: text

    Return type: timestamp without time zone

-   time\_text

    Description: Converts the time type to the text type.

    Parameter: time without time zone

    Return type: text

-   timestamp\_text

    Description: Converts the timestamp type to the text type.

    Parameter: timestamp without time zone

    Return type: text

-   timestamp\_to\_smalldatetime

    Description: Converts the timestamp type to the smalldatetime type.

    Parameter: timestamp without time zone

    Return type: smalldatetime

-   timestamp\_varchar

    Description: Converts the timestamp type to varchar.

    Parameter: timestamp without time zone

    Return type: character varying

-   timestamptz\_to\_smalldatetime

    Description: Converts timestamptz to smalldatetime.

    Parameter: timestamp with time zone

    Return type: smalldatetime

-   timestampzone\_text

    Description: Converts the timestampzone type to the text type.

    Parameter: timestamp with time zone

    Return type: text

-   timetz\_text

    Description: Converts the timetz type to the text type.

    Parameter: time with time zone

    Return type: text

-   to\_integer

    Description: Converts data to the integer type.

    Parameter: character varying

    Return type: integer

-   to\_interval

    Description: Converts to the interval type.

    Parameter: character varying

    Return type: interval

-   to\_numeric

    Description: Converts to the numeric type.

    Parameter: character varying

    Return type: numeric

-   to\_nvarchar2

    Description: Converts to the nvarchar2 type.

    Parameter: numeric

    Return type: nvarchar2

-   to\_text

    Description: Converts to the text type.

    Parameter: smallint

    Return type: text

-   to\_ts

    Description: Converts to the ts type.

    Parameter: character varying

    Return type: timestamp without time zone

-   to\_varchar2

    Description: Converts to the varchar2 type.

    Parameter: timestamp without time zone

    Return type: character varying

-   varchar\_date

    Description: Converts varchar to date.

    Parameter: character varying

    Return type: date

-   varchar\_float4

    Description: Converts varchar to float4.

    Parameter: character varying

    Return type: real

-   varchar\_float8

    Description: Converts the varchar type to the float8 type.

    Parameter: character varying

    Return type: double precision

-   varchar\_int4

    Description: Converts the type from varchar to int4.

    Parameter: character varying

    Return type: integer

-   varchar\_int8

    Description: Converts the varchar type to the int8 type.

    Parameter: character varying

    Return type: bigint

-   varchar\_numeric

    Description: Converts varchar to numeric.

    Parameter: character varying

    Return type: numeric

-   varchar\_timestamp

    Description: Converts varchar to timestamp.

    Parameter: character varying

    Return type: timestamp without time zone


-   varchar2\_to\_smlldatetime

    Description: Converts varchar2 to smlldatetime.

    Parameter: character varying

    Return type: smalldatetime


-   xidout4

    Description: The xid output is a four-byte number.

    Parameter: xid32

    Return type: cstring


-   xidsend4

    Description: Converts xid to the binary format.

    Parameter: xid32

    Return type: bytea


## Encoding Type Conversion<a name="en-us_topic_0283137417_section1073313502270"></a>

-   convert\_to\_nocase\(text, text\)

    Description: Converts a string into a specified encoding type.

    Return type: bytea

    Example:

    ```
    openGauss=# SELECT convert_to_nocase('12345', 'GBK');
     convert_to_nocase 
    -------------------
     \x3132333435
    (1 row)
    ```
