# 操作符运算兼容<a name="ZH-CN_TOPIC_0289900469"></a>

在将参数开关dolphin.b_compatibility_mode设置为on时，表示启用四则运算的MySQL兼容。相比于原始的openGauss，dolphin对于四则运算的修改主要为:

1. 支持更多类型参与四则运算，具体如下：

   - 数字类型：tinyint(**unsigned**)、smallint(**unsigned**)、integer(**unsigned**)、bigint(**unsigned**)、float4、float8、decimal/numeric以及bit。
   - 字符串类型：char、varchar、binary、varbinary、tinyblob、blob、mediumblob、longblob、enum、set、json以及text（**目前openGauss没有实际上的tinytext、mediumtext和longtext，因此不考虑**）。
   - 时间日期类型：date、datetime、timestamp、time、year。

2. 一些原操作符返回值兼容MySQL，具体的兼容规则如下：

   - 整型 X 整型：针对"+"、"-"、"*"这三个操作符，如果两个都是有符号的整型，则返回结果也是有符号的整型，否则返回无符号整型；针对"/"，其返回值为定点型(numeric类型)。
   - 整型 X 定点型：针对"+"、"-"、"*"、"/"四则运算，返回定点型。**注：openGauss定点数未实现无符号，所以无符号整型参与运算返回的结果均为有符号的。**
   - 整型 X 浮点型：针对"+"、"-"、"*"、"/"四则运算，返回浮点型。**注：openGauss浮点数未实现无符号，所以无符号整型参与运算返回的结果均为有符号的。**
   - 定点型 X 定点型：针对"+"、"-"、"*"、"/"四则运算，返回定点型。
   - 定点型 X 浮点型：针对"+"、"-"、"*"、"/"四则运算，返回浮点型。
   - 浮点型 X 浮点型：针对"+"、"-"、"*"、"/"四则运算，返回定点型。

   基于上述规则，只需要运用字符串类型、时间类型等的类型转换规则，就可以推算出这些类型进行混合运算时的返回值，类型转换规则如下：

   - 字符串类型：在进行四则运算是统一转换为浮点类型
   - 时间日期类型：date固定转换为有符号整型，year固定转换为无符号整型；针对datetime、timestamp、time三个类型，如果没有指定typmod(表示毫秒和微秒)的话，就转换为有符号整型，否则会转换为一个定点数，其小数位数与指定的typmod相同。



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

```
