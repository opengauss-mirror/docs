# 操作符运算兼容

在将参数开关dolphin.b_compatibility_mode设置为on时，表示启用四则运算的MySQL兼容。相比于原始的openGauss，dolphin对于四则运算的修改主要为:

1. 支持更多类型参与四则运算，具体如下：

   - 数字类型：tinyint(**unsigned**)、smallint(**unsigned**)、integer(**unsigned**)、bigint(**unsigned**)、float4、float8、decimal/numeric以及bit。
   - 字符串类型：char、varchar、binary、varbinary、tinyblob、blob、mediumblob、longblob、enum、set、json以及text（**目前openGauss没有实际上的tinytext、mediumtext和longtext，因此不考虑**）。
   - 时间日期类型：date、datetime、timestamp、time、year、INTERVAL表达式。

2. 一些原操作符返回值兼容MySQL，具体的兼容规则如下：

   - 整型 X 整型：针对"+"、"-"、"*"这三个操作符，如果两个都是有符号的整型，则返回结果也是有符号的整型，否则返回无符号整型；针对"/"，其返回值为定点型(numeric类型)。
   - 整型 X 定点型：针对"+"、"-"、"*"、"/"四则运算，返回定点型。**注：openGauss定点数未实现无符号，所以无符号整型参与运算返回的结果均为有符号的。**
   - 整型 X 浮点型：针对"+"、"-"、"*"、"/"四则运算，返回浮点型。**注：openGauss浮点数未实现无符号，所以无符号整型参与运算返回的结果均为有符号的。**
   - 定点型 X 定点型：针对"+"、"-"、"*"、"/"四则运算，返回定点型。
   - 定点型 X 浮点型：针对"+"、"-"、"*"、"/"四则运算，返回浮点型。
   - 浮点型 X 浮点型：针对"+"、"-"、"*"、"/"四则运算，返回浮点型。
   - 数字类型/字符串类型/时间日期类型 X INTERVAL表达式：针对"+"、"-"这两个运算符，返回TEXT类型。

   基于上述规则，只需要运用字符串类型、时间类型等的类型转换规则，就可以推算出这些类型进行混合运算时的返回值，类型转换规则如下：

   - 字符串类型：在进行四则运算是统一转换为浮点类型
   - 时间日期类型：
       - date + INTERVAL expr unit或date - INTERVAL expr unit分别是函数DATE_ADD(date, INTERVAL expr unit)或DATE_SUB(date, INTERVAL expr unit)的同义词。此外date + INTERVAL expr unit允许左右两边操作数交换而date - INTERVAL expr unit不允许交换。
       - 当操作数中没有INTERVAL表达式时，date固定转换为有符号整型，year固定转换为无符号整型；针对datetime、timestamp、time三个类型，如果没有指定typmod(表示毫秒和微秒)的话，就转换为有符号整型，否则会转换为一个定点数，其小数位数与指定的typmod相同。

   具体的一些表达式返回值可以参考下面的表格：
   
   | **表达式**        | **参数为on时**       | **参数为off时**      |
   | ------------- | ---------------- | ---------------- |
   | int1+int1     | integer          | tinyint          |
   | int1-int1     | integer          | tinyint          |
   | int1*int1     | integer          | tinyint          |
   | int1/int1     | numeric          | double precision |
   | int1+uint1    | uint4            | uint1            |
   | int1-uint1    | uint4            | uint1            |
   | int1*uint1    | uint4            | uint1            |
   | int1/uint1    | numeric          | double precision |
   | int1+int2     | integer          | bigint           |
   | int1-int2     | integer          | bigint           |
   | int1*int2     | integer          | bigint           |
   | int1/int2     | numeric          | double precision |
   | int1+uint2    | uint4            | uint2            |
   | int1-uint2    | uint4            | uint2            |
   | int1*uint2    | uint4            | uint2            |
   | int1/uint2    | numeric          | double precision |
   | int1/int4     | numeric          | double precision |
   | int1+uint4    | uint8            | uint4            |
   | int1-uint4    | uint8            | uint4            |
   | int1*uint4    | uint8            | uint4            |
   | int1/uint4    | numeric          | double precision |
   | int1/int8     | numeric          | double precision |
   | int1/uint8    | numeric          | double precision |
   | int1+bit1     | uint4            | double precision |
   | int1-bit1     | uint4            | double precision |
   | int1*bit1     | uint4            | double precision |
   | int1/bit1     | numeric          | double precision |
   | int1+bit64    | uint8            | double precision |
   | int1-bit64    | uint8            | double precision |
   | int1*bit64    | uint8            | double precision |
   | int1/bit64    | numeric          | double precision |
   | uint1+int1    | uint4            | uint1            |
   | uint1-int1    | uint4            | uint1            |
   | uint1*int1    | uint4            | uint1            |
   | uint1/int1    | numeric          | double precision |
   | uint1+uint1   | uint4            | uint1            |
   | uint1-uint1   | uint4            | uint1            |
   | uint1*uint1   | uint4            | uint1            |
   | uint1/uint1   | numeric          | double precision |
   | uint1+int2    | uint4            | uint2            |
   | uint1-int2    | uint4            | uint2            |
   | uint1*int2    | uint4            | uint2            |
   | uint1/int2    | numeric          | double precision |
   | uint1+uint2   | uint4            | uint2            |
   | uint1-uint2   | uint4            | uint2            |
   | uint1*uint2   | uint4            | uint2            |
   | uint1/uint2   | numeric          | double precision |
   | uint1+int4    | uint8            | uint4            |
   | uint1-int4    | uint8            | uint4            |
   | uint1*int4    | uint8            | uint4            |
   | uint1/int4    | numeric          | double precision |
   | uint1+uint4   | uint8            | uint4            |
   | uint1-uint4   | uint8            | uint4            |
   | uint1*uint4   | uint8            | uint4            |
   | uint1/uint4   | numeric          | double precision |
   | uint1/int8    | numeric          | double precision |
   | uint1/uint8   | numeric          | double precision |
   | uint1+bit1    | uint4            | uint8            |
   | uint1-bit1    | uint4            | uint8            |
   | uint1*bit1    | uint4            | uint8            |
   | uint1/bit1    | numeric          | double precision |
   | uint1/bit64   | numeric          | double precision |
   | int2+int1     | integer          | bigint           |
   | int2-int1     | integer          | bigint           |
   | int2*int1     | integer          | bigint           |
   | int2/int1     | numeric          | double precision |
   | int2+uint1    | uint4            | uint2            |
   | int2-uint1    | uint4            | uint2            |
   | int2*uint1    | uint4            | uint2            |
   | int2/uint1    | numeric          | double precision |
   | int2+int2     | integer          | smallint         |
   | int2-int2     | integer          | smallint         |
   | int2*int2     | bigint           | smallint         |
   | int2/int2     | numeric          | double precision |
   | int2+uint2    | uint4            | uint2            |
   | int2-uint2    | uint4            | uint2            |
   | int2*uint2    | uint8            | uint2            |
   | int2/uint2    | numeric          | double precision |
   | int2+int4     | bigint           | integer          |
   | int2-int4     | bigint           | integer          |
   | int2*int4     | bigint           | integer          |
   | int2/int4     | numeric          | double precision |
   | int2+uint4    | uint8            | uint4            |
   | int2-uint4    | uint8            | uint4            |
   | int2*uint4    | uint8            | uint4            |
   | int2/uint4    | numeric          | double precision |
   | int2/int8     | numeric          | double precision |
   | int2/uint8    | numeric          | double precision |
   | int2+bit1     | uint4            | double precision |
   | int2-bit1     | uint4            | double precision |
   | int2*bit1     | uint4            | double precision |
   | int2/bit1     | numeric          | double precision |
   | int2+bit64    | uint8            | double precision |
   | int2-bit64    | uint8            | double precision |
   | int2*bit64    | uint8            | double precision |
   | int2/bit64    | numeric          | double precision |
   | uint2+int1    | uint4            | uint2            |
   | uint2-int1    | uint4            | uint2            |
   | uint2*int1    | uint4            | uint2            |
   | uint2/int1    | numeric          | double precision |
   | uint2+uint1   | uint4            | uint2            |
   | uint2-uint1   | uint4            | uint2            |
   | uint2*uint1   | uint4            | uint2            |
   | uint2/uint1   | numeric          | double precision |
   | uint2+int2    | uint4            | uint2            |
   | uint2-int2    | uint4            | uint2            |
   | uint2*int2    | uint8            | uint2            |
   | uint2/int2    | numeric          | double precision |
   | uint2+uint2   | uint4            | uint2            |
   | uint2-uint2   | uint4            | uint2            |
   | uint2*uint2   | uint8            | uint2            |
   | uint2/uint2   | numeric          | double precision |
   | uint2+int4    | uint8            | uint4            |
   | uint2-int4    | uint8            | uint4            |
   | uint2*int4    | uint8            | uint4            |
   | uint2/int4    | numeric          | double precision |
   | uint2+uint4   | uint8            | uint4            |
   | uint2-uint4   | uint8            | uint4            |
   | uint2*uint4   | uint8            | uint4            |
   | uint2/uint4   | numeric          | double precision |
   | uint2/int8    | numeric          | double precision |
   | uint2/uint8   | numeric          | double precision |
   | uint2+bit1    | uint4            | uint8            |
   | uint2-bit1    | uint4            | uint8            |
   | uint2*bit1    | uint4            | uint8            |
   | uint2/bit1    | numeric          | double precision |
   | uint2/bit64   | numeric          | double precision |
   | int4/int1     | numeric          | double precision |
   | int4+uint1    | uint8            | uint4            |
   | int4-uint1    | uint8            | uint4            |
   | int4*uint1    | uint8            | uint4            |
   | int4/uint1    | numeric          | double precision |
   | int4+int2     | bigint           | integer          |
   | int4-int2     | bigint           | integer          |
   | int4*int2     | bigint           | integer          |
   | int4/int2     | numeric          | double precision |
   | int4+uint2    | uint8            | uint4            |
   | int4-uint2    | uint8            | uint4            |
   | int4*uint2    | uint8            | uint4            |
   | int4/uint2    | numeric          | double precision |
   | int4+int4     | bigint           | integer          |
   | int4-int4     | bigint           | integer          |
   | int4*int4     | bigint           | integer          |
   | int4/int4     | numeric          | double precision |
   | int4+uint4    | uint8            | uint4            |
   | int4-uint4    | uint8            | uint4            |
   | int4*uint4    | uint8            | uint4            |
   | int4/uint4    | numeric          | double precision |
   | int4/int8     | numeric          | double precision |
   | int4/uint8    | numeric          | double precision |
   | int4+bit1     | uint8            | uint4            |
   | int4-bit1     | uint8            | uint4            |
   | int4*bit1     | uint8            | uint4            |
   | int4/bit1     | numeric          | double precision |
   | int4+bit64    | uint8            | uint4            |
   | int4-bit64    | uint8            | uint4            |
   | int4*bit64    | uint8            | uint4            |
   | int4/bit64    | numeric          | double precision |
   | uint4+int1    | uint8            | uint4            |
   | uint4-int1    | uint8            | uint4            |
   | uint4*int1    | uint8            | uint4            |
   | uint4/int1    | numeric          | double precision |
   | uint4+uint1   | uint8            | uint4            |
   | uint4-uint1   | uint8            | uint4            |
   | uint4*uint1   | uint8            | uint4            |
   | uint4/uint1   | numeric          | double precision |
   | uint4+int2    | uint8            | uint4            |
   | uint4-int2    | uint8            | uint4            |
   | uint4*int2    | uint8            | uint4            |
   | uint4/int2    | numeric          | double precision |
   | uint4+uint2   | uint8            | uint4            |
   | uint4-uint2   | uint8            | uint4            |
   | uint4*uint2   | uint8            | uint4            |
   | uint4/uint2   | numeric          | double precision |
   | uint4+int4    | uint8            | uint4            |
   | uint4-int4    | uint8            | uint4            |
   | uint4*int4    | uint8            | uint4            |
   | uint4/int4    | numeric          | double precision |
   | uint4+uint4   | uint8            | uint4            |
   | uint4-uint4   | uint8            | uint4            |
   | uint4*uint4   | uint8            | uint4            |
   | uint4/uint4   | numeric          | double precision |
   | uint4/int8    | numeric          | double precision |
   | uint4/uint8   | numeric          | double precision |
   | uint4+bit1    | uint8            | uint4            |
   | uint4-bit1    | uint8            | uint4            |
   | uint4*bit1    | uint8            | uint4            |
   | uint4/bit1    | numeric          | double precision |
   | uint4+bit64   | uint8            | uint4            |
   | uint4-bit64   | uint8            | uint4            |
   | uint4*bit64   | uint8            | uint4            |
   | uint4/bit64   | numeric          | double precision |
   | int8/int1     | numeric          | double precision |
   | int8/uint1    | numeric          | double precision |
   | int8/int2     | numeric          | double precision |
   | int8/uint2    | numeric          | double precision |
   | int8/int4     | numeric          | double precision |
   | int8/uint4    | numeric          | double precision |
   | int8/int8     | numeric          | double precision |
   | int8/uint8    | numeric          | double precision |
   | int8/bit1     | numeric          | double precision |
   | int8/bit64    | numeric          | double precision |
   | uint8/int1    | numeric          | double precision |
   | uint8/uint1   | numeric          | double precision |
   | uint8/int2    | numeric          | double precision |
   | uint8/uint2   | numeric          | double precision |
   | uint8/int4    | numeric          | double precision |
   | uint8/uint4   | numeric          | double precision |
   | uint8/int8    | numeric          | double precision |
   | uint8/uint8   | numeric          | double precision |
   | uint8/bit1    | numeric          | double precision |
   | uint8/bit64   | numeric          | double precision |
   | float4+float4 | double precision | real             |
   | float4-float4 | double precision | real             |
   | float4*float4 | double precision | real             |
   | float4/float4 | double precision | real             |
   | bit1+int1     | uint4            | double precision |
   | bit1-int1     | uint4            | double precision |
   | bit1*int1     | uint4            | double precision |
   | bit1/int1     | numeric          | double precision |
   | bit1+uint1    | uint4            | uint8            |
   | bit1-uint1    | uint4            | uint8            |
   | bit1*uint1    | uint4            | uint8            |
   | bit1/uint1    | numeric          | double precision |
   | bit1+int2     | uint4            | double precision |
   | bit1-int2     | uint4            | double precision |
   | bit1*int2     | uint4            | double precision |
   | bit1/int2     | numeric          | double precision |
   | bit1+uint2    | uint4            | uint8            |
   | bit1-uint2    | uint4            | uint8            |
   | bit1*uint2    | uint4            | uint8            |
   | bit1/uint2    | numeric          | double precision |
   | bit1+int4     | uint8            | uint4            |
   | bit1-int4     | uint8            | uint4            |
   | bit1*int4     | uint8            | uint4            |
   | bit1/int4     | numeric          | double precision |
   | bit1+uint4    | uint8            | uint4            |
   | bit1-uint4    | uint8            | uint4            |
   | bit1*uint4    | uint8            | uint4            |
   | bit1/uint4    | numeric          | double precision |
   | bit1/int8     | numeric          | double precision |
   | bit1/uint8    | numeric          | double precision |
   | bit1+bit1     | uint4            | numeric          |
   | bit1-bit1     | uint4            | numeric          |
   | bit1*bit1     | uint4            | numeric          |
   | bit1+bit64    | uint8            | numeric          |
   | bit1-bit64    | uint8            | numeric          |
   | bit1*bit64    | uint8            | numeric          |
   | bit64+int1    | uint8            | double precision |
   | bit64-int1    | uint8            | double precision |
   | bit64*int1    | uint8            | double precision |
   | bit64/int1    | numeric          | double precision |
   | bit64/uint1   | numeric          | double precision |
   | bit64+int2    | uint8            | double precision |
   | bit64-int2    | uint8            | double precision |
   | bit64*int2    | uint8            | double precision |
   | bit64/int2    | numeric          | double precision |
   | bit64/uint2   | numeric          | double precision |
   | bit64+int4    | uint8            | uint4            |
   | bit64-int4    | uint8            | uint4            |
   | bit64*int4    | uint8            | uint4            |
   | bit64/int4    | numeric          | double precision |
   | bit64+uint4   | uint8            | uint4            |
   | bit64-uint4   | uint8            | uint4            |
   | bit64*uint4   | uint8            | uint4            |
   | bit64/uint4   | numeric          | double precision |
   | bit64/int8    | numeric          | double precision |
   | bit64/uint8   | numeric          | double precision |
   | bit64+bit64   | uint8            | numeric          |
   | bit64-bit64   | uint8            | numeric          |
   | bit64*bit64   | uint8            | numeric          |



## 示例：

测试用例：

```
create database test_db dbcompatibility 'B';
\c test_db 
set dolphin.b_compatibility_mode to on;
-- 整型 X 整型
select 1::int4 + 1::int4;
select 1::int4 - 1::int4;
select 1::int4 * 1::int4;
select 1::int4 / 1::int4;

-- 整型 X 整型(带无符号)
select 1::int4 + 1::uint4;
select 1::int4 - 1::uint4;
select 1::int4 * 1::uint4;
select 1::int4 / 1::uint4;

-- 整型 X 定点型
select 1::int4 + 1::numeric;
select 1::int4 - 1::numeric;
select 1::int4 * 1::numeric;
select 1::int4 / 1::numeric;

-- 整型 X 浮点型
select 1::int4 + 1::float8;
select 1::int4 - 1::float8;
select 1::int4 * 1::float8;
select 1::int4 / 1::float8;

-- 定点型 X 浮点型
select 1::numeric + 1::float8;
select 1::numeric - 1::float8;
select 1::numeric * 1::float8;
select 1::numeric / 1::float8;

-- 整型 X 字符串
select 1::int4 + '1.23'::text;
select 1::int4 - '1.23'::text;
select 1::int4 * '1.23'::text;
select 1::int4 / '1.23'::text;

-- 整型 X 日期
select 1::int4 + '2022-01-01'::date;
select 1::int4 - '2022-01-01'::date;
select 1::int4 * '2022-01-01'::date;
select 1::int4 / '2022-01-01'::date;

-- 整型 X 时间(不带微秒)
select 1::int4 + '12:12:12'::time;
select 1::int4 - '12:12:12'::time;
select 1::int4 * '12:12:12'::time;
select 1::int4 / '12:12:12'::time;

-- 整型 X 时间(带微秒)
select 1::int4 + '12:12:12.36'::time(3);
select 1::int4 - '12:12:12.36'::time(3);
select 1::int4 * '12:12:12.36'::time(3);
select 1::int4 / '12:12:12.36'::time(3);

-- 数字类型/字符串类型/时间日期类型 X INTERVAL表达式
select '2020-01-01'::text + interval 1 day;
select interval 1 hour + '2020-01-01'::date;
select 20200101::int4 - interval 1 minute;

```

结果：

```
openGauss=# create database test_db dbcompatibility 'B';
CREATE DATABASE
openGauss=# \c test_db 
test_db=# set dolphin.b_compatibility_mode to on;
SET
test_db=# -- 整型 X 整型
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

test_db=# -- 整型 X 整型(带无符号)
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

test_db=# -- 整型 X 定点型
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

test_db=# -- 整型 X 浮点型
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

test_db=# -- 定点型 X 浮点型
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

test_db=# -- 整型 X 字符串
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

test_db=# -- 整型 X 日期
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

test_db=# -- 整型 X 时间(不带微秒)
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

test_db=# -- 整型 X 时间(带微秒)
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

test_db=# -- 数字类型/字符串类型/时间日期类型 X INTERVAL表达式
test_db=# select '2020-01-01'::text + interval 1 day;
  ?column?  
------------
 2020-01-02
(1 row)

test_db=# select interval 1 hour + '2020-01-01'::date;
      ?column?       
---------------------
 2020-01-01 01:00:00
(1 row)

test_db=# select 20200101::int4 - interval 1 minute;
      ?column?       
---------------------
 2019-12-31 23:59:00
(1 row)

```
