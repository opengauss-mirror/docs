# Type Conversion Functions<a name="EN-US_TOPIC_0242370437"></a>

## Type Conversion Functions<a name="en-us_topic_0237121973_en-us_topic_0059778246_sd1817f56ca2d4be7a4ad606e0e597c55"></a>

-   cast\(x as y\)

    Description: Converts x into the type specified by y.

    For example:

    ```
    postgres=# SELECT cast('22-oct-1997' as timestamp);
          timestamp      
    ---------------------
     1997-10-22 00:00:00
    (1 row)
    ```

-   hextoraw\(string\)

    Description: Converts a string in hexadecimal format into binary format.

    Return type: raw

    For example:

    ```
    postgres=# SELECT hextoraw('7D');
     hextoraw 
    ----------
     7D
    (1 row)
    ```

-   numtoday\(numeric\)

    Description: Converts values of the number type into the timestamp of the specified type.

    Return type: timestamp

    For example:

    ```
    postgres=# SELECT numtoday(2);
     numtoday
    ----------
     2 days
    (1 row)
    ```

-   pg\_systimestamp\(\)

    Description: Obtains the system timestamp.

    Return type: timestamp with time zone

    For example:

    ```
    postgres=# SELECT pg_systimestamp();
            pg_systimestamp
    -------------------------------
     2015-10-14 11:21:28.317367+08
    (1 row)
    ```

-   rawtohex\(string\)

    Description: Converts a string in binary format into hexadecimal format.

    The result is the ACSII code of the input characters in hexadecimal format.

    Return type: varchar

    For example:

    ```
    postgres=# SELECT rawtohex('1234567');
        rawtohex    
    ----------------
     31323334353637
    (1 row)
    ```

-   to\_char \(datetime/interval \[, fmt\]\)

    Description: Converts a DATETIME or INTERVAL value of the DATE/TIMESTAMP/TIMESTAMP WITH TIME ZONE/TIMESTAMP WITH LOCAL TIME ZONE type into the VARCHAR type according to the format specified by  **fmt**. 

    -   The optional parameter  **fmt**  allows for the following types: date, time, week, quarter, and century. Each type has a unique template. The templates can be combined together. Common templates include: HH, MM, SS, YYYY, MM, and DD.
    -   A template may have a modification word. FM is a common modification word and is used to suppress the preceding zero or the following blank spaces.

    Return type: varchar

    For example:

    ```
    postgres=# SELECT to_char(current_timestamp,'HH12:MI:SS');
     to_char  
    ----------
     10:19:26
    (1 row)
    ```

    ```
    postgres=# SELECT to_char(current_timestamp,'FMHH12:FMMI:FMSS');
     to_char  
    ----------
     10:19:46
    (1 row)
    ```

-   to\_char\(double precision, text\)

    Description: Converts the values of the double-precision type into the strings in the specified format.

    Return type: text

    For example:

    ```
    postgres=# SELECT to_char(125.8::real, '999D99');
     to_char 
    ---------
      125.80
    (1 row)
    ```

-   to\_char \(integer/number\[, fmt\]\)

    Descriptions: Converts an integer or a value in floating point format into a string in specified format.

    -   The optional parameter  **fmt**  allows for the following types: decimal characters, grouping characters, positive/negative sign and currency sign. Each type has a unique template. The templates can be combined together. Common templates include: 9, 0, millesimal sign \(,\), and decimal point \(.\).
    -   A template can have a modification word, similar to FM. However, FM does not suppress 0 which is output according to the template.
    -   Use the template X or x to convert an integer value into a string in hexadecimal format.

    Return type: varchar

    For example:

    ```
    postgres=# SELECT to_char(1485,'9,999');
     to_char 
    ---------
      1,485
    (1 row)
    ```

    ```
    postgres=# SELECT to_char( 1148.5,'9,999.999');
      to_char   
    ------------
      1,148.500
    (1 row)
    ```

    ```
    postgres=# SELECT to_char(148.5,'990999.909');
       to_char   
    -------------
        0148.500
    (1 row)
    ```

    ```
    postgres=# SELECT to_char(123,'XXX');
     to_char 
    ---------
       7B
    (1 row)
    ```

-   to\_char\(interval, text\)

    Description: Converts the values of the time interval type into the strings in the specified format.

    Return type: text

    For example:

    ```
    postgres=# SELECT to_char(interval '15h 2m 12s', 'HH24:MI:SS');
     to_char
    ----------
     15:02:12
    (1 row)
    ```

-   to\_char\(int, text\)

    Description: Converts the values of the integer type into the strings in the specified format.

    Return type: text

    For example:

    ```
    postgres=# SELECT to_char(125, '999');
     to_char
    ---------
      125
    (1 row)
    ```

-   to\_char\(numeric, text\)

    Description: Converts the values of the numeric type into the strings in the specified format.

    Return type: text

    For example:

    ```
    postgres=# SELECT to_char(-125.8, '999D99S');
     to_char
    ---------
     125.80-
    (1 row)
    ```

-   to\_char \(string\)

    Description: Converts the CHAR/VARCHAR/VARCHAR2/CLOB type into the VARCHAR type.

    If this function is used to convert data of the CLOB type, and the value to be converted exceeds the value range of the target type, an error is returned.

    Return type: varchar

    For example:

    ```
    postgres=# SELECT to_char('01110');
     to_char
    ---------
     01110
    (1 row)
    ```

-   to\_char\(timestamp, text\)

    Description: Converts the values of the timestamp type into the strings in the specified format. 

    Return type: text

    For example:

    ```
    postgres=# SELECT to_char(current_timestamp, 'HH12:MI:SS');
     to_char
    ----------
     10:55:59
    (1 row)
    ```

-   to\_clob\(char/nchar/varchar/varchar2/nvarchar2/text/raw\)

    Description: Convert the RAW type or text character set type CHAR/NCHAR/VARCHAR/VARCHAR2/NVARCHAR2/TEXT into the CLOB type.

    Return type: clob

    For example:

    ```
    postgres=# SELECT to_clob('ABCDEF'::RAW(10));
     to_clob 
    ---------
     ABCDEF
    (1 row)
    ```

    ```
    postgres=# SELECT to_clob('hello111'::CHAR(15));
     to_clob  
    ----------
     hello111
    (1 row)
    ```

    ```
    postgres=# SELECT to_clob('gauss123'::NCHAR(10));
     to_clob  
    ----------
     gauss123
    (1 row)
    ```

    ```
    postgres=# SELECT to_clob('gauss234'::VARCHAR(10));
     to_clob  
    ----------
     gauss234
    (1 row)
    ```

    ```
    postgres=# SELECT to_clob('gauss345'::VARCHAR2(10));
     to_clob  
    ----------
     gauss345
    (1 row)
    ```

    ```
    postgres=# SELECT to_clob('gauss456'::NVARCHAR2(10));
     to_clob  
    ----------
     gauss456
    (1 row)
    ```

    ```
    postgres=# SELECT to_clob('World222!'::TEXT);
      to_clob  
    -----------
     World222!
    (1 row)
    ```

-   to\_date\(text\)

    Description: Converts values of the text type into the timestamp in the specified format.

    Return type: timestamp

    For example:

    ```
    postgres=# SELECT to_date('2015-08-14');
           to_date
    ---------------------
     2015-08-14 00:00:00
    (1 row)
    ```

-   to\_date\(text, text\)

    Description: Converts the values of the string type into the dates in the specified format.

    Return type: timestamp

    For example:

    ```
    postgres=# SELECT to_date('05 Dec 2000', 'DD Mon YYYY');
           to_date
    ---------------------
     2000-12-05 00:00:00
    (1 row)
    ```

-   to\_date\(string, fmt\)

    Description:

    Converts a string into a value of the DATE type according to the format specified by  **fmt**.

    This function cannot support the CLOB type directly. However, a parameter of the CLOB type can be converted using implicit conversion.

    Return type: date

    For example:

    ```
    postgres=# SELECT TO_DATE('05 Dec 2010','DD Mon YYYY');
           to_date       
    ---------------------
     2010-12-05 00:00:00
    (1 row)
    ```

-   to\_number \( expr \[, fmt\]\)

    Description: Converts  **expr**  into a value of the NUMBER type according to the specified format.

    For details about the type conversion formats, see  [Table 1](#en-us_topic_0237121973_en-us_topic_0059778246_t3987a5bb00154b0f9e55863b4ababd3d).

    If a hexadecimal string is converted into a decimal number, the hexadecimal string can include a maximum of 16 bytes if it is to be converted into a sign-free number.

    During the conversion from a hexadecimal string to a decimal digit, the format string cannot have a character other than x or X. Otherwise, an error is reported.

    Return type: number

    For example:

    ```
    postgres=# SELECT to_number('12,454.8-', '99G999D9S');
     to_number 
    -----------
      -12454.8
    (1 row)
    ```

-   to\_number\(text, text\)

    Description: Converts the values of the string type into the numbers in the specified format.

    Return type: numeric

    For example:

    ```
    postgres=# SELECT to_number('12,454.8-', '99G999D9S');
     to_number
    -----------
      -12454.8
    (1 row)
    ```

-   to\_timestamp\(double precision\)

    Description: Converts a UNIX century into a timestamp.

    Return type: timestamp with time zone

    For example:

    ```
    postgres=# SELECT to_timestamp(1284352323);
          to_timestamp      
    ------------------------
     2010-09-13 12:32:03+08
    (1 row)
    ```

-   to\_timestamp\(string \[,fmt\]\)

    Description: Converts a string into a value of the timestamp type according to the format specified by  **fmt**. When  **fmt**  is not specified, perform the conversion according to the format specified by  **nls\_timestamp\_format**.

    In  **to\_timestamp**  in openGauss,

    -   If the input year  _YYYY_  is 0, an error will be reported.
    -   If the input year  _YYYY_  is less than 0, specify  _SYYYY_  in  **fmt**. The year with the value of n \(an absolute value\) BC will be output correctly.

    Characters in the  **fmt**  must match the schema for formatting the data and time. Otherwise, an error is reported.

    Return type: timestamp without time zone

    For example:

    ```
    postgres=# SHOW nls_timestamp_format;
        nls_timestamp_format    
    ----------------------------
     DD-Mon-YYYY HH:MI:SS.FF AM
    (1 row)
    
    postgres=# SELECT to_timestamp('12-sep-2014');
        to_timestamp     
    ---------------------
     2014-09-12 00:00:00
    (1 row)
    ```

    ```
    postgres=# SELECT to_timestamp('12-Sep-10 14:10:10.123000','DD-Mon-YY HH24:MI:SS.FF');
          to_timestamp       
    -------------------------
     2010-09-12 14:10:10.123
    (1 row)
    ```

    ```
    postgres=# SELECT to_timestamp('-1','SYYYY');
          to_timestamp      
    ------------------------
     0001-01-01 00:00:00 BC
    (1 row)
    ```

    ```
    postgres=# SELECT to_timestamp('98','RR');
        to_timestamp     
    ---------------------
     1998-01-01 00:00:00
    (1 row)
    ```

    ```
    postgres=# SELECT to_timestamp('01','RR');
        to_timestamp     
    ---------------------
     2001-01-01 00:00:00
    (1 row)
    ```

-   to\_timestamp\(text, text\)

    Description: Converts values of the string type into the timestamp of the specified type.

    Return type: timestamp

    For example:

    ```
    postgres=# SELECT to_timestamp('05 Dec 2000', 'DD Mon YYYY');
        to_timestamp
    ---------------------
     2000-12-05 00:00:00
    (1 row)
    ```


**Table  1**  Template patterns for numeric formatting

<a name="en-us_topic_0237121973_en-us_topic_0059778246_t3987a5bb00154b0f9e55863b4ababd3d"></a>
<table><thead align="left"><tr id="en-us_topic_0237121973_en-us_topic_0059778246_r69f9bd4666d94b829aa792ae99d7cf23"><th class="cellrowborder" valign="top" width="30.64%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p626603815414"><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p626603815414"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p626603815414"></a>Schema</p>
</th>
<th class="cellrowborder" valign="top" width="69.36%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237121973_en-us_topic_0059778246_a74d38a94a3fe4541a0cefacceb68421c"><a name="en-us_topic_0237121973_en-us_topic_0059778246_a74d38a94a3fe4541a0cefacceb68421c"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_a74d38a94a3fe4541a0cefacceb68421c"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237121973_en-us_topic_0059778246_re3c8f9ca94614519b3dc7f6684b67a8a"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_a85e6c7355dba429d89743d33ddb6fe9f"><a name="en-us_topic_0237121973_en-us_topic_0059778246_a85e6c7355dba429d89743d33ddb6fe9f"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_a85e6c7355dba429d89743d33ddb6fe9f"></a>9</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p19267138249"><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p19267138249"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p19267138249"></a>Value with specified digits</p>
</td>
</tr>
<tr id="en-us_topic_0237121973_en-us_topic_0059778246_rd6c7766b2b6c4256a5f7c41857969c2e"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_ad1e030e105a041f9be29b32b9880926b"><a name="en-us_topic_0237121973_en-us_topic_0059778246_ad1e030e105a041f9be29b32b9880926b"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_ad1e030e105a041f9be29b32b9880926b"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_aedbc391c58984d7ea79e88323c899cba"><a name="en-us_topic_0237121973_en-us_topic_0059778246_aedbc391c58984d7ea79e88323c899cba"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_aedbc391c58984d7ea79e88323c899cba"></a>Values with leading zeros</p>
</td>
</tr>
<tr id="en-us_topic_0237121973_en-us_topic_0059778246_r0ec636a0189549a5a9ec28f7d07442fa"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p226712381420"><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p226712381420"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p226712381420"></a>Period (.)</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p826718381548"><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p826718381548"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p826718381548"></a>Decimal point</p>
</td>
</tr>
<tr id="en-us_topic_0237121973_en-us_topic_0059778246_r41f917a4d30a42f49dfee21c616238c6"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p226720381415"><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p226720381415"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p226720381415"></a>Comma (,)</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p19267238744"><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p19267238744"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p19267238744"></a>Group (thousand) separator</p>
</td>
</tr>
<tr id="en-us_topic_0237121973_en-us_topic_0059778246_r40680a627e0747de969940c96e4becb0"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p122679382048"><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p122679382048"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p122679382048"></a>PR</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p5267538048"><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p5267538048"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p5267538048"></a>Negative values in angle brackets</p>
</td>
</tr>
<tr id="en-us_topic_0237121973_en-us_topic_0059778246_r980dc458836d4a47bb6d317860300ee7"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_a45caeb08b0264dc4a2ff529d6874f0e0"><a name="en-us_topic_0237121973_en-us_topic_0059778246_a45caeb08b0264dc4a2ff529d6874f0e0"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_a45caeb08b0264dc4a2ff529d6874f0e0"></a>S</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p126717381641"><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p126717381641"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p126717381641"></a>Sign anchored to number (uses locale)</p>
</td>
</tr>
<tr id="en-us_topic_0237121973_en-us_topic_0059778246_rc2a588c196874114a198e171bc60efb3"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_a620e5b93899f4be49edbb42d28a5b7ed"><a name="en-us_topic_0237121973_en-us_topic_0059778246_a620e5b93899f4be49edbb42d28a5b7ed"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_a620e5b93899f4be49edbb42d28a5b7ed"></a>L</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_a606fb171c87b41f7b14729ca2452eb79"><a name="en-us_topic_0237121973_en-us_topic_0059778246_a606fb171c87b41f7b14729ca2452eb79"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_a606fb171c87b41f7b14729ca2452eb79"></a>Currency symbol (uses locale)</p>
</td>
</tr>
<tr id="en-us_topic_0237121973_en-us_topic_0059778246_r67802f70db2c47d6826d2f3058670e02"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p82686383413"><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p82686383413"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p82686383413"></a>D</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p142684382414"><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p142684382414"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p142684382414"></a>Decimal point (uses locale)</p>
</td>
</tr>
<tr id="en-us_topic_0237121973_en-us_topic_0059778246_r8e5228e208524ae79219dad8bc0cb9f6"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p152688381649"><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p152688381649"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p152688381649"></a>G</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p52684389411"><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p52684389411"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p52684389411"></a>Group separator (uses locale)</p>
</td>
</tr>
<tr id="en-us_topic_0237121973_en-us_topic_0059778246_r93be073968b145a99a7cd6cec84767fd"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p182681238546"><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p182681238546"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p182681238546"></a>MI</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_aa773dde81ab84b8f99b4b4cc7c6e8106"><a name="en-us_topic_0237121973_en-us_topic_0059778246_aa773dde81ab84b8f99b4b4cc7c6e8106"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_aa773dde81ab84b8f99b4b4cc7c6e8106"></a>Minus sign in the specified position (if the number is less than 0)</p>
</td>
</tr>
<tr id="en-us_topic_0237121973_en-us_topic_0059778246_rf29e9449a7af4ca98cbc4d9c49f81c13"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_ae1dd06afe04b42d0bd52a8586fdac92c"><a name="en-us_topic_0237121973_en-us_topic_0059778246_ae1dd06afe04b42d0bd52a8586fdac92c"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_ae1dd06afe04b42d0bd52a8586fdac92c"></a>PL</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p426814387413"><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p426814387413"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p426814387413"></a>Plus sign in the specified position (if the number is greater than 0)</p>
</td>
</tr>
<tr id="en-us_topic_0237121973_en-us_topic_0059778246_rfd44d9c8be5d41b7b6a65884d8cdb125"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p102684385411"><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p102684385411"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p102684385411"></a>SG</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_a49bcb7bb23d643439471051b81fd1702"><a name="en-us_topic_0237121973_en-us_topic_0059778246_a49bcb7bb23d643439471051b81fd1702"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_a49bcb7bb23d643439471051b81fd1702"></a>Plus or minus sign in the specified position</p>
</td>
</tr>
<tr id="en-us_topic_0237121973_en-us_topic_0059778246_r855442c6df294909af07f69b6bbd56eb"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p626910381647"><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p626910381647"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p626910381647"></a>RN</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_aeea1784f00d94ef8a9cc55abe562c252"><a name="en-us_topic_0237121973_en-us_topic_0059778246_aeea1784f00d94ef8a9cc55abe562c252"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_aeea1784f00d94ef8a9cc55abe562c252"></a>Roman numerals (the input values are between 1 and 3999)</p>
</td>
</tr>
<tr id="en-us_topic_0237121973_en-us_topic_0059778246_re53a4c10b2f14c6e965cb84d797e7c7c"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_aad0288db5cd24746ab7960d9bbf3b7ac"><a name="en-us_topic_0237121973_en-us_topic_0059778246_aad0288db5cd24746ab7960d9bbf3b7ac"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_aad0288db5cd24746ab7960d9bbf3b7ac"></a>TH or th</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_a9ba0a6b1de56488398018c14b93422ed"><a name="en-us_topic_0237121973_en-us_topic_0059778246_a9ba0a6b1de56488398018c14b93422ed"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_a9ba0a6b1de56488398018c14b93422ed"></a>Ordinal number suffix</p>
</td>
</tr>
<tr id="en-us_topic_0237121973_en-us_topic_0059778246_rd055aecafa1d4d40ade943b2332801fd"><td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p172691038441"><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p172691038441"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p172691038441"></a>V</p>
</td>
<td class="cellrowborder" valign="top" width="69.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p72691938743"><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p72691938743"></a><a name="en-us_topic_0237121973_en-us_topic_0059778246_en-us_topic_0058966040_p72691938743"></a>Shifts specified number of digits (decimal)</p>
</td>
</tr>
</tbody>
</table>

