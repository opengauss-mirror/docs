# Compatible Operators and Operations<a name="EN-US_TOPIC_0289900469"></a>

If **dolphin.b\_compatibility\_mode** is set to **on**, MySQL-compatible four arithmetic operations are enabled. Compared with the original openGauss, Dolphin modifies the four arithmetic operations as follows:

1. The following types of arithmetic operations are supported:

   - Numeric types: tinyint (**unsigned**), smallint (**unsigned**), integer (**unsigned**), bigint (**unsigned**), float4, float8, decimal/numeric, and bit.
   - Character string types: char, varchar, binary, varbinary, tinyblob, blob, mediumblob, longblob, enum, set, json, and text (Currently, openGauss does not have tinytext, mediumtext, and longtext. Therefore, they are not considered.)
   - Date and time types: date, datetime, timestamp, time, and year.

2. The return values of some original operators are compatible with MySQL. The compatibility rules are as follows:

   - Integer x integer: For the +, -, and * operators, if both operators are signed integers, the returned result is also signed integers. Otherwise, the returned result is unsigned integers. For the / operator, the returned value is of the fixed-point type (numeric type).
   - Integer x fixed-point type: For the +, -, *, and / arithmetic operations, the fixed-point type is returned. Note: The openGauss fixed-point numbers are not unsigned. Therefore, the returned results are signed.
   - Integer x floating-point type: For the +, -, *, and / arithmetic operations, the floating-point type is returned. Note: The openGauss floating-point numbers are not unsigned. Therefore, the returned results are signed.
   - Fixed-point type x fixed-point type: For the +, -, *, and / arithmetic operations, the fixed-point type is returned.
   - Fixed-point type x floating-point type: For the +, -, *, and / arithmetic operations, the floating-point type is returned.
   - Floating-point type x floating-point type: For the +, -, *, and / arithmetic operations, the floating-point type is returned.

   Based on the preceding rules, you only need to use the type conversion rules of the character string type and time type to calculate the return values of these types during hybrid calculation. The type conversion rules are as follows:

   - The character string type is converted to the floating-point type in four arithmetic operations.
   - Date and time types: The date type is converted to a signed integer, and the year type is converted to an unsigned integer. If typmod (indicating millisecond and microsecond) is not specified, the datetime, timestamp, and time types are converted to signed integers; otherwise, they are converted to fixed-point numbers with the same number of decimal places as the specified typmod.



## Example:

Test case:

```
create database test_db dbcompatibility 'B';
\c test_db 
set dolphin.b_compatibility_mode to on;
-- Integer x integer
select 1::int4 + 1::int4;
select 1::int4 - 1::int4;
select 1::int4 * 1::int4;
select 1::int4 / 1::int4;

-- Integer x unsigned integer
select 1::int4 + 1::uint4;
select 1::int4 - 1::uint4;
select 1::int4 * 1::uint4;
select 1::int4 / 1::uint4;

-- Integer x fixed-point type
select 1::int4 + 1::numeric;
select 1::int4 - 1::numeric;
select 1::int4 * 1::numeric;
select 1::int4 / 1::numeric;

-- Integer x floating-point type
select 1::int4 + 1::float8;
select 1::int4 - 1::float8;
select 1::int4 * 1::float8;
select 1::int4 / 1::float8;

-- Fixed-point type x floating-point type
select 1::numeric + 1::float8;
select 1::numeric - 1::float8;
select 1::numeric * 1::float8;
select 1::numeric / 1::float8;

-- Integer x character string
select 1::int4 + '1.23'::text;
select 1::int4 - '1.23'::text;
select 1::int4 * '1.23'::text;
select 1::int4 / '1.23'::text;

-- Integer x date
select 1::int4 + '2022-01-01'::date;
select 1::int4 - '2022-01-01'::date;
select 1::int4 * '2022-01-01'::date;
select 1::int4 / '2022-01-01'::date;

-- Integer x time (without microseconds)
select 1::int4 + '12:12:12'::time;
select 1::int4 - '12:12:12'::time;
select 1::int4 * '12:12:12'::time;
select 1::int4 / '12:12:12'::time;

-- Integer x time (with microseconds)
select 1::int4 + '12:12:12.36'::time(3);
select 1::int4 - '12:12:12.36'::time(3);
select 1::int4 * '12:12:12.36'::time(3);
select 1::int4 / '12:12:12.36'::time(3);

```

Results:

```
openGauss=# create database test_db dbcompatibility 'B';
CREATE DATABASE
openGauss=# \c test_db 
test_db=# set dolphin.b_compatibility_mode to on;
SET
test_db=# -- Integer x integer
test_db=# select 1::int4 + 1::int4;
 ?column? 
----------
        2
(1 row)

test_db=# select 1::int4 - 1::int4;
 ?column? 
----------
        0
(1 row)

test_db=# select 1::int4 * 1::int4;
 ?column? 
----------
        1
(1 row)

test_db=# select 1::int4 / 1::int4;
        ?column?        
------------------------
 1.00000000000000000000
(1 row)

test_db=# -- Integer x unsigned integer
test_db=# select 1::int4 + 1::uint4;
 ?column? 
----------
 2
(1 row)

test_db=# select 1::int4 - 1::uint4;
 ?column? 
----------
 0
(1 row)

test_db=# select 1::int4 * 1::uint4;
 ?column? 
----------
 1
(1 row)

test_db=# select 1::int4 / 1::uint4;
        ?column?        
------------------------
 1.00000000000000000000
(1 row)

test_db=# -- Integer x fixed-point type
test_db=# select 1::int4 + 1::numeric;
 ?column? 
----------
        2
(1 row)

test_db=# select 1::int4 - 1::numeric;
 ?column? 
----------
        0
(1 row)

test_db=# select 1::int4 * 1::numeric;
 ?column? 
----------
        1
(1 row)

test_db=# select 1::int4 / 1::numeric;
        ?column?        
------------------------
 1.00000000000000000000
(1 row)

test_db=# -- Integer x floating-point type
test_db=# select 1::int4 + 1::float8;
 ?column? 
----------
        2
(1 row)

test_db=# select 1::int4 - 1::float8;
 ?column? 
----------
        0
(1 row)

test_db=# select 1::int4 * 1::float8;
 ?column? 
----------
        1
(1 row)

test_db=# select 1::int4 / 1::float8;
 ?column? 
----------
        1
(1 row)

test_db=# -- Fixed-point type x floating-point type
test_db=# select 1::numeric + 1::float8;
 ?column? 
----------
        2
(1 row)

test_db=# select 1::numeric - 1::float8;
 ?column? 
----------
        0
(1 row)

test_db=# select 1::numeric * 1::float8;
 ?column? 
----------
        1
(1 row)

test_db=# select 1::numeric / 1::float8;
 ?column? 
----------
        1
(1 row)

test_db=# -- Integer x character string
test_db=# select 1::int4 + '1.23'::text;
 ?column? 
----------
     2.23
(1 row)

test_db=# select 1::int4 - '1.23'::text;
 ?column? 
----------
    -0.23
(1 row)

test_db=# select 1::int4 * '1.23'::text;
 ?column? 
----------
     1.23
(1 row)

test_db=# select 1::int4 / '1.23'::text;
     ?column?      
-------------------
 0.813008130081301
(1 row)

test_db=# -- Integer x date
test_db=# select 1::int4 + '2022-01-01'::date;
 ?column? 
----------
 20220102
(1 row)

test_db=# select 1::int4 - '2022-01-01'::date;
 ?column?  
-----------
 -20220100
(1 row)

test_db=# select 1::int4 * '2022-01-01'::date;
 ?column? 
----------
 20220101
(1 row)

test_db=# select 1::int4 / '2022-01-01'::date;
          ?column?          
----------------------------
 0.000000049455737139987580
(1 row)

test_db=# -- Integer x time (without microseconds)
test_db=# select 1::int4 + '12:12:12'::time;
 ?column? 
----------
   121213
(1 row)

test_db=# select 1::int4 - '12:12:12'::time;
 ?column? 
----------
  -121211
(1 row)

test_db=# select 1::int4 * '12:12:12'::time;
 ?column? 
----------
   121212
(1 row)

test_db=# select 1::int4 / '12:12:12'::time;
          ?column?          
----------------------------
 0.000008250008250008250008
(1 row)

test_db=# -- Integer x time (with microseconds)
test_db=# select 1::int4 + '12:12:12.36'::time(3);
   ?column?    
---------------
 121213.360000
(1 row)

test_db=# select 1::int4 - '12:12:12.36'::time(3);
    ?column?    
----------------
 -121211.360000
(1 row)

test_db=# select 1::int4 * '12:12:12.36'::time(3);
   ?column?    
---------------
 121212.360000
(1 row)

test_db=# select 1::int4 / '12:12:12.36'::time(3);
          ?column?          
----------------------------
 0.000008249983747532017362
(1 row)

```
