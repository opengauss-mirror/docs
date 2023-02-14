# EXPORT-SET 

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

EXPORT_SET(bits,on,off[, separator[, number_of_bits]]).

A character string is returned. The rule for generating the character string is as follows: For each binary bit in **bits**, if the value is 1, concatenate **on** to the result string. Otherwise, concatenate **off** to the result string. They are separated by separators. The length of the character string is determined by number\_of\_bits.

## Precautions <a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

- The first three parameters must be specified. The first parameter (bits) must be a number, and the second parameter (on) and the third parameter (off) must be a character string.


## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
EXPORT_SET(bits,on,off[, separator[, number_of_bits]])
```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **bits**

    - The value must be a number. You can enter a number of any length. The function checks the binary bits from right to left (from the least significant bit to the most significant bit), and the string is added to the result from left to right.
    - If the input number is greater than 2^64 or less than -2^63, the input number is processed based on PG\_INT64\_MAX and PG\_INT64\_MIN.

- **on&&off**

   The value is a character string. Example: 'YYYY'
- **separator**

    The result string is separated by the separator. The default separator is a comma (,). The value is a character string. For example, ','.

- **number_of_bits**

    The number of bits to be checked is specified by number\_of\_bits. If this parameter is not specified, the default value 64 is used. If the input is not in the range [0,64], the value 64 is used.

## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
openGauss=# SELECT EXPORT_SET(5,'Y','N',',',5);
 export_set 
------------
 Y,N,Y,N,N
(1 row)

openGauss=# SELECT EXPORT_SET(5,'Y','N',',');
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,N,Y,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N
(1 row)

openGauss=# SELECT EXPORT_SET(5,'Y','N');
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,N,Y,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N
(1 row)

-- Test the upper bound.
openGauss=# SELECT EXPORT_SET(18446744073709551615,'Y','N',',',64);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y
(1 row)

openGauss=# SELECT EXPORT_SET(18446744073709551616,'Y','N',',',64);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,N
(1 row)

openGauss=# SELECT EXPORT_SET(18446744073709551617,'Y','N',',',64);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,N
(1 row)

-- Test the lower bound.
openGauss=# SELECT EXPORT_SET(-9223372036854775807,'Y','N',',',64);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,Y
(1 row)

openGauss=# SELECT EXPORT_SET(-9223372036854775808,'Y','N',',',64);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,Y
(1 row)

openGauss=# SELECT EXPORT_SET(-9223372036854775809,'Y','N',',',64);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,Y
(1 row)

-- Test the overlong parameter.
openGauss=# SELECT EXPORT_SET(-111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111,'Y','N',',',64);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,Y
(1 row)

openGauss=# SELECT EXPORT_SET(111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111,'Y','N',',',64);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,N
(1 row)

-- Test the length parameter.
openGauss=# SELECT EXPORT_SET(5,'Y','N',',',64);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,N,Y,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N
(1 row)

openGauss=# SELECT EXPORT_SET(5,'Y','N',',',65);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,N,Y,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N
(1 row)

openGauss=# SELECT EXPORT_SET(5,'Y','N',',',-1);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,N,Y,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N
(1 row)

openGauss=# SELECT EXPORT_SET(5,'Y','N',',',111111111111111111111111111111111111111111111111111111111111111111111111111111111);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,N,Y,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N
(1 row)

openGauss=# SELECT EXPORT_SET(5,'Y','N',',',-111111111111111111111111111111111111111111111111111111111111111111111111111111111);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,N,Y,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N
(1 row)

-- Test the string.
openGauss=# SELECT EXPORT_SET(5,'YYYYYYYYYYYYYYYY','N',',',5);
               export_set                
-----------------------------------------
 YYYYYYYYYYYYYYYY,N,YYYYYYYYYYYYYYYY,N,N
(1 row)

openGauss=# SELECT EXPORT_SET(5,'Y','NNNNNNNNNNNNNNN',',',5);
                     export_set                      
-----------------------------------------------------
 Y,NNNNNNNNNNNNNNN,Y,NNNNNNNNNNNNNNN,NNNNNNNNNNNNNNN
(1 row)

openGauss=# SELECT EXPORT_SET(5,'Y','N',',,,,,,,,,,,,',5);
                      export_set                       
-------------------------------------------------------
 Y,,,,,,,,,,,,N,,,,,,,,,,,,Y,,,,,,,,,,,,N,,,,,,,,,,,,N
(1 row)
```
