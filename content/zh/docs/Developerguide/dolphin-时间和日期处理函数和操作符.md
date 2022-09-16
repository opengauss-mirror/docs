# 时间和日期处理函数和操作符<a name="ZH-CN_TOPIC_0289900496"></a>

## 时间/日期函数<a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_sd0d47140cdd048c1964ed53f9858f436"></a>

相比于原始的openGauss，dolphin对于时间/日期函数的修改主要为:
1. 新增```dayofmonth/dayofweek/dayofyear/hour/microsecond/minute/quarter/second/weekday/weekofyear/year/current_date```函数。
2. 新增```curdate/current_time/curtime/current_timestamp/localtime/localtimestamp/now/sysdate```函数。
3. 新增```makedate/maketime/period_add/period_diff/sec_to_time/subdate```函数。
4. 新增```subtime/timediff/time/time_format/timestamp/timestamppadd```函数。
4. 新增`to_days/to_seconds/unix_timestamp/utc_date/utc_time/utc_timestamp`函数。
5. 新增```date_bool/time_bool```函数。

- curdate\(\)

  描述：返回语句开始执行的日期。

  返回值类型：date

  示例：

    ```
    openGauss=# select curdate();
    curdate
    ------------
    2022-07-21
    (1 row)
    ```

- current_time

  描述：返回语句开始执行的时间。

  返回值类型：time

  示例：

    ```
    openGauss=# select current_time;
    current_time
    --------------
    16:56:02
    (1 row)
    ```

- current_time\(n\)

  描述：返回语句开始执行的时间，n为精度，最大值取6。

  返回值类型：time

  示例：

    ```
    openGauss=# select current_time(3);
     current_time(3)
    -----------------
    16:57:23.255
    (1 row)

    openGauss=# select current_time();
     current_time()
    ----------------
    17:05:01
    (1 row)
    ```

- curtime\(n\)

  描述：返回语句开始执行的时间，n为精度，最大值取6。

  返回值类型：time

  示例：

    ```
    openGauss=# select curtime(3);
    curtime(3)
    --------------
    17:45:33.844
    (1 row)

    openGauss=# select curtime();
    curtime()
    -----------
    17:45:54
    (1 row)
    ```

- current_timestamp

  描述：返回语句开始执行的时间戳。

  返回值类型：datetime

  示例：

    ```
    openGauss=# select current_timestamp;
      current_timestamp
    ---------------------
    2022-07-21 16:59:38
    (1 row)
    ```

- current_timestamp\(n\)

  描述：返回语句开始执行的时间戳，n为精度，最大值取6。

  返回值类型：datetime

  示例：

    ```
    openGauss=# select current_timestamp(3);
      current_timestamp(3)
    -------------------------
    2022-07-21 17:00:41.251
    (1 row)

    openGauss=# select current_timestamp();
     current_timestamp()
    ---------------------
    2022-07-21 17:06:06
    (1 row)
    ```

- dayofmonth\(timestamp\)

    描述：获取日期/时间值中天数的值。

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT dayofmonth(timestamp '2001-02-16 20:38:40');
     date_part
    -----------
            16
    (1 row)
    ```

- dayofweek\(timestamp\)

    描述：获取日期/时间值中星期的标号（1代表星期日，2代表星期一，以此类推，7代表星期六）。

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT dayofweek(timestamp '2001-02-16 20:38:40');
     ?column?
    ----------
            6
    (1 row)
    ```

- dayofyear\(timestamp\)

    描述：获取日期/时间值中一年的第几天。

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT dayofyear(timestamp '2001-02-16 20:38:40');
     date_part
    -----------
            47
    (1 row)
    ```

- hour\(timestamp\)

    描述：获取日期/时间值中小时的值。

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT hour(timestamp '2001-02-16 20:38:40');
     date_part
    -----------
            20
    (1 row)
    ```

- localtime

  描述：返回语句开始执行的时间戳。

  返回值类型：datetime

  示例：

    ```
    openGauss=# select localtime;
        localtime
    ---------------------
    2022-07-21 17:02:04
    (1 row)
    ```

- localtime\(n\)

  描述：返回语句开始执行的时间戳，n为精度，最大值取6。

  返回值类型：datetime

  示例：

    ```
    openGauss=# select localtime(3);
        localtime
    ---------------------
    2022-07-21 17:02:04
    (1 row)

    openGauss=# select localtime();
        localtime()
    ---------------------
    2022-07-21 17:14:22
    (1 row)
    ```

- localtimestamp

  描述：返回语句开始执行的时间戳。

  返回值类型：datetime

  示例：

    ```
    openGauss=# select localtimestamp;
    localtimestamp
    ---------------------
    2022-07-21 17:17:20
    (1 row)
    ```

- localtimestamp\(n\)

  描述：返回语句开始执行的时间戳，n为精度，最大值取6。

  返回值类型：datetime

  示例：

    ```
    openGauss=# select localtimestamp(3);
        localtimestamp(3)
    -------------------------
    2022-07-21 17:28:02.013
    (1 row)

    openGauss=# select localtimestamp();
    localtimestamp()
    ---------------------
    2022-07-21 17:28:49
    (1 row)
    ```

- MAKEDATE()
  
  函数原型:

  `DATE MAKEDATE(int64 year, int64 dayofyear)`
  功能描述：

  给定年份和天数，返回该年份在此年份天数下日期值。

  备注:
    - 任一为NULL，函数返回NULL。
    - `dayofyear`必须大于0否则返回NULL。
    - 0 <= year < 70时：将year视作20XX年处理。 70 <= year < 100时：将year视作19XX年处理。
    - 返回结果限制在[0, 9999-12-31],超出范围返回NULL。

  示例:

```sql
 openGauss=# SELECT MAKEDATE(2022,31), MAKEDATE(2022,32);
   makedate  |  makedate  
------------+------------
 2022-01-31 | 2022-02-01
(1 row)

-- 0<= year < 70 以及 70 <= year < 100
 openGauss=# SELECT MAKEDATE(0,31), MAKEDATE(70,32);
  makedate  |  makedate  
------------+------------
 2000-01-31 | 1970-02-01
(1 row)

-- dayofyear <= 0 以及 超出范围 的情况
 openGauss=# SELECT MAKEDATE(2022,0), MAKEDATE(9999,366);
  makedate | makedate 
----------+----------
          | 
(1 row)
```

- MAKETIME()

  函数原型:

  `TIME MAKETIME(int64 hour, int64 minue, Numeric second)`
  
  功能描述：

  给定小时、分钟和秒参数，返回TIME类型值。

  备注:

    - 当参数满足如下任一条件时，函数返回NULL:
        1. minue < 0 or minue >= 60
        2. second < 0 or second >= 60
        3. 任一参数为NULL
    - 返回的Time结果保留6位小数，若second超出六位小数，则按照四舍五入进位。
    - 返回TIME类型值要求在[-838:59:59, 838:59:59]中。若超出范围，则根据hour的正负类型，来返回指定的边界值。
  
  示例:
```sql
 openGauss=# SELECT MAKETIME(15, 15, 15.5);
  maketime  
------------
 15:15:15.5
(1 row)

-- 四舍五入进位
 openGauss=# SELECT MAKETIME(10, 15, 20.5000005);
    maketime     
-----------------
 10:15:20.500001
(1 row)

-- 四舍五入进位
 openGauss=# SELECT MAKETIME(839,0,0);
 maketime  
-----------
 838:59:59
(1 row)
```

- microsecond\(timestamp\)

    描述：获取日期/时间值中微秒的值。

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT microsecond(timestamp '2001-02-16 20:38:40.123');
     date_part
    -----------
        123000
    (1 row)
    ```

- minute\(timestamp\)

    描述：获取日期/时间值中分钟的值。

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT minute(timestamp '2001-02-16 20:38:40.123');
     date_part
    -----------
            38
    (1 row)
    ```

- now\(n\)

  描述：返回语句开始执行的时间戳，n为精度，最大值取6。

  返回值类型：datetime

  示例：

    ```
    openGauss=# select now(3);
            now(3)
    -------------------------
    2022-07-21 17:30:18.037
    (1 row)

    openGauss=# select now();
            now()
    ---------------------
    2022-07-21 17:30:51
    (1 row)
    ```

- PERIOD_ADD()
  
  函数原型:

  `int64 PERIOD_ADD(int64 P, int64 N)`
  
  功能描述：

  返回时期`P`(格式为YYYYMM或YYMM)加上`N`个月后的时期值，格式为YYYYMM。

  备注:

    - 当任一参数为NULL时，函数返回NULL。
    - `P` = 0时，返回0。
    - 参数的时期`P`与返回结果的时期中的年份小于100时，会以70为边界，将年份转为20XX年或19XX年。
  
  示例:
```sql
 openGauss=# SELECT PERIOD_ADD(202201, 2);
  period_add 
------------
     202203
(1 row)
 
 -- p = 0
 openGauss=# SELECT PERIOD_ADD(0, 2);
 period_add 
------------
          0
(1 row)

 -- 时期的年份处于[0,70) 或 [70, 100)范围内
 openGauss=# SELECT PERIOD_ADD(0101, 2), PERIOD_ADD(7001, 2);
 period_add | period_add 
------------+------------
     200103 |     197003
(1 row)
```

- PERIOD_DIFF()
  
  函数原型:

  `int64 PERIOD_DIFF(int64 P1, int64 P2)`
  
  功能描述：

  返回两个时期参数`P1`与`P2`的月份数差值。

  备注:

    - 当任一参数为NULL时，函数返回NULL。
    - 时期参数`P1`和`P2`中的年份小于100时，会以70为边界，将年份转为20XX年或19XX年。

  示例:
```sql
 openGauss=# SELECT PERIOD_DIFF(202201,202003);
  period_diff 
-------------
          22
(1 row)

 openGauss=# SELECT PERIOD_DIFF(0101,7001);
 period_diff 
-------------
         372
(1 row)
```

- quarter\(timestamp\)

    描述：获取日期/时间值中的季度数，从1到4。

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT quarter(timestamp '2001-02-16 20:38:40.123');
     date_part
    -----------
            1
    (1 row)
    ```

- second\(timestamp\)

    描述：获取日期/时间值中的秒数。

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT second(timestamp '2001-02-16 20:38:40.123');
     date_part
    -----------
           40
    (1 row)
    ```

- SEC_TO_TIME()
  
  函数原型:

  `TIME SEC_TO_TIME(Numeric second)`
  
  功能描述：

  给定秒数，将其转为小时、分钟与秒，返回TIME类型值。

  备注:

    - 当任一参数为NULL，函数返回NULL。
    - 返回TIME类型值只保留小数点后6位，超出部分按照四舍五入规则进位。
    - 返回TIME类型值要求在[-838:59:59, 838:59:59]中。若超出范围，则根据second的正负类型，来返回指定的边界值。
  
  示例:
```sql
 openGauss=# SELECT SEC_TO_TIME(4396);
 sec_to_time 
-------------
 01:13:16
(1 row)

-- 四舍五入进位
 openGauss=# SELECT SEC_TO_TIME(2378.2222225);
   sec_to_time   
-----------------
 00:39:38.222223
(1 row)

-- 返回结果超出范围
 openGauss=# SELECT SEC_TO_TIME(3888888);
 sec_to_time 
-------------
 838:59:59
(1 row)
```

- SUBDATE(expr, interval)
  
  函数原型:

  `CString SUBDATE(text date, INTERVAL expr unit)`

  `CString SUBDATE(text date, int64 days)`

  功能描述：

  该函数执行日期运算。参数`date`指定开始DATE或DATETIME类型值。指定要从开始日期减去的INTERVAL值，返回相减后的结果日期值。若第二参数为整数，则将其视为减去的天数值。

  备注:

    - 函数返回格式为DATE或DATETIME。一般情况下，返回类型与第一参数的类型相同。当第一参数的类型为DATE时且INTERVAL的单位包含HOUR、MINUTE、SECOND部分，则返回结果为DATETIME。
    - 参数满足如下任一条件时，函数返回NULL：

        1. 参数date的日期超出范围[0, 9999-12-31]
        2. 任一参数为NULL。
    - 返回结果的日期必须在范围[0001-1-1, 9999-12-31]内。若越界，则返回NULL。
  
  示例:

```sql
 openGauss=# SELECT SUBDATE('2022-01-01', INTERVAL 31 DAY), SUBDATE('2022-01-01', 31);
  subdate   |  subdate   
------------+------------
 2021-12-01 | 2021-12-01
(1 row)

-- 第一参数为DATE
 openGauss=# SELECT SUBDATE('2022-01-01 01:01:01', INTERVAL 1 YEAR);
       subdate       
---------------------
 2021-01-01 01:01:01
(1 row)

-- 第一参数为DATETIME
 openGauss=# SELECT SUBDATE('2022-01-01 01:01:01', INTERVAL 1 YEAR);
       subdate       
---------------------
 2021-01-01 01:01:01
(1 row)

-- 第一参数为DATE但是INTERVAL的单位包含TIME部分
 openGauss=# SELECT SUBDATE('2022-01-01', INTERVAL 1 SECOND);
       subdate       
---------------------
 2021-12-31 23:59:59
(1 row)
```

- SUBDATE(TIME, interval)
  
  函数原型:

  `TIME SUBDATE(TIME time, INTERVAL expr unit)`

  `TIME SUBDATE(TIME time, int64 days)`

  功能描述：

  该函数是为兼容MySql中subdate函数的第一参数类型可以为TIME的情况。该情况下，第一参数的输入必须为原始的TIME数据，而非由字符串的隐式转换而来。
  参数`time`指定开始TIME类型的时间值，第二参数指定要从开始时间减去的`INTERVAL`值，返回相减后的结果日期值。若第二参数为整数，则将其视为减去的天数值。

  备注:

    - 第一参数必须为原始的TIME类型，而非由字符串的隐式转换而来。如SUBDATE('1:1:1', 1)并不会进入此函数。需改为SUBDATE(time'1:1:1', 1)。
    - 第二参数的INTERVAL单位不能包含年或月部分，否则返回NULL。
    - 返回值必须在[-838:59:59, 838:59:59]内，否则返回NULL。

  示例:

```sql
 openGauss=# SELECT SUBDATE(time'10:15:20', INTERVAL '1' DAY), SUBDATE(time'10:15:20', 1);
   subdate  |  subdate  
-----------+-----------
 -13:44:40 | -13:44:40
(1 row)

-- 第二参数的INTERVAL单位不能包含年或月部分
 openGauss=# SELECT SUBDATE(time'838:00:00', INTERVAL '1' MONTH);
 subdate 
---------
 
(1 row)

-- 结果超出范围
 openGauss=# SELECT SUBDATE(time'838:59:59', INTERVAL '-1' SECOND);
 subdate 
---------
 
(1 row)
```

- SUBTIME()
  
  函数原型:

  `TIME SUBDATE(TIME time1, TIME time2)`

  `TIME SUBDATE(DATETIME time1, TIME time2)`

  功能描述：

  该函数执行日期运算，返回`time1`减去`time2`的结果。返回参数类型与`time1`传入类型保持一致。

  备注:

    - `time1`需要是正确合法的TIME格式或者DATETIME格式，否则报错。
    - `time2`需要是正确合法的TIME格式，否则报错。
    - 如返回值超出[-838:59:59, 838:59:59]，则会根据符号返回极值。

  示例:

    ```sql
  openGauss=# select subtime('11:22:33','10:20:30');
  subtime  
  ----------
  01:02:03
  (1 row)
  
  openGauss=# select SUBTIME('2020-03-04 11:22:33', '-10:20:30');
        subtime       
  ---------------------
  2020-03-04 21:43:03
  (1 row)
    ```

- sysdate\(n\)

  描述：返回系统实时时间戳，n为精度，最大值取6。

  返回值类型：datetime

  示例：

    ```
    openGauss=# select sysdate(3);
        sysdate(3)
    -------------------------
    2022-07-21 17:38:23.442
    (1 row)

    openGauss=# select sysdate();
        sysdate()
    ---------------------
    2022-07-21 17:39:02
    (1 row)
    ```

- time()
  
  函数原型:

  `Cstring TIME(TEXT expr)`

  功能描述：

  兼容mysql的time()函数。参数指定一个TIME或DATETIME表达式，提取其中的time表达式并返回为字符串。

  备注:

    - 返回的时间表达式中最多保留六位小数，超出部分按照四舍五入进位。
    - 对于异常的日期或时间格式或是域溢出的日期或时间(如1:60:60、2022-12-32 等)，本函数兼容mysql中该函数于insert语句中的表现，即报错。
    - date格式字符串将会报错，而date类型参数将会返回"00:00:00"。

  示例:
  ```sql
  openGauss=# select time('2022-1-1 1:1:1.1111116'), time('25:25:25');
        time       |   time   
  -----------------+----------
  01:01:01.111112 | 25:25:25
  (1 row)
  
  openGauss=# select time(date'2022-1-1');
    time   
  ----------
  00:00:00
  (1 row)
  ```


- TIMEDIFF()

  函数原型:

  `TIME TIMEDIFF(TIME time1, TIME time2)`

  `DATETIME TIMEDIFF(DATETIME  time1, DATETIME time2)`

  功能描述：

  该函数执行日期运算，返回`time1`减去`time2`的结果。返回参数类型与传入类型保持一致。

  备注:

    - `time1, time2`类型需要一致且均合法，否则返回NULL。
    - 如`time1, time2`均为`TIME`类型且返回值超出[-838:59:59, 838:59:59]，函数将会报错。

  示例:

  ```sql
  openGauss=# select TIMEDIFF(time'23:59:59',time'01:01:01'), TIMEDIFF(datetime'2008-12-31 23:59:59',datetime'2008-12-30 01:01:01');
   timediff | timediff
  ----------+----------
   22:58:58 | 46:58:58
  (1 row)
  
  -- 超出范围时返回极值。
  openGauss=# SELECT TIMEDIFF(time'-830:00:00', time'10:20:30'), TIMEDIFF(time'830:00:00', time'-10:20:30');
    timediff  | timediff
  ------------+-----------
   -838:59:59 | 838:59:59
  (1 row)
  ```

- TIMESTAMP()

  函数原型:

  `DATETIME TIMESTAMP(TEXT expr)`

  `DATETIME TIMEDIFF(TEXT expr, TIME time)`

  功能描述：

  只有一个参数时，函数将DATE或DATETIME表达式`expr`转为DATETIME值返回。

  有两个参数时，函数计算DATE或DATETIME表达式`expr`加上TIME类型`time`的结果并返回。

  备注:

    - `expr`为不存在的date或datetime表达式时。如'2000-12-32'，'2000-1-1 24:00:00'等，函数报错。
    - 包含两个参数且第二参数`time`为非TIME格式字符串时，函数报错。

  示例:

  ```sql
  openGauss=# select TIMESTAMP('2003-12-31'), TIMESTAMP('20031231');
       timestamp      |     timestamp
  ---------------------+---------------------
   2003-12-31 00:00:00 | 2003-12-31 00:00:00
  (1 row)
  
  openGauss=# select TIMESTAMP('2003-12-31 12:00:00.123456'), TIMESTAMP('20000229120000.1234567');
           timestamp         |         timestamp
  ----------------------------+----------------------------
   2003-12-31 12:00:00.123456 | 2000-02-29 12:00:00.123457
  (1 row)
  
  openGauss=# select TIMESTAMP('2003-12-31','12:00:00.123456'), TIMESTAMP('2003-12-31 12:00:00','-32:00:00');
           timestamp         |     timestamp
  ----------------------------+---------------------
   2003-12-31 12:00:00.123456 | 2003-12-30 04:00:00
  (1 row)
  
  openGauss=# select TIMESTAMP('20000229','100:00:00'), TIMESTAMP('20000229120000.123','100:00:00');
       timestamp      |       timestamp
  ---------------------+-------------------------
   2000-03-04 04:00:00 | 2000-03-04 16:00:00.123
  (1 row)
  ```

- timestamp_add()

  函数原型：

  `TEXT TIMESTAMP_ADD(text unit, interval span, text datetime)`

  功能描述：

  将一段时间加到已知的时间点上。其中第一个参数`unit`是时间单位，第二个参数`span`是具体数值，第三个参数`datetime`是已知时间点。

  备注：

    * `unit`支持的单位如下：

      | 单位 | 对应的输入 |
      | ---- | ---------- |
      | 年   | year       |
      | 季度 | qtr        |
      | 月   | month      |
      | 周   | week       |
      | 日   | day        |
      | 时   | hour       |
      | 分   | minute     |
      | 秒   | second     |
      | 微秒 | microsecon |

    * `span`支持小数。当`unit`为秒时，`span`根据第七位小数，四舍五入到六位小数；否则`span`四舍五入到整数。

    * `datetime`的输入类型可以是字符串、date、datetime、time。

    * `datetime`的输入范围和函数的计算结果均需落在区间`[0001-01-01 00:00:00.000000, 9999-12-31 23:59:59.999999]`内，否则报错(兼容mysql中该函数于insert语句的表现)。

    * 对于异常的日期或时间格式或是域溢出的日期或时间(如1:60:60、2022-12-32 等)，本函数兼容mysql中该函数于insert语句中的表现，即报错。

  示例：

  ```sql
  openGauss=# select timestampadd(day, 1, '2022-09-01');
   timestampadd 
  --------------
   2022-09-02
  (1 row)
  
  openGauss=# select timestampadd(hour, 1, '2022-09-01 08:00:00');
      timestampadd     
  ---------------------
   2022-09-01 09:00:00
  (1 row)
  ```

- time_format()
  
  函数原型:

  `CSTRING TIME_FORMAT(text time, text format)。`

  功能描述：

  第一参数`time`为time或datetime表达式，函数基于第二参数`format`格式化`time`值并返回为字符串。

  备注:
    - `format`支持的格式如下:
      | 格式 | 描述                                         |
      | ---- | -------------------------------------------- |
      | ％f  | 微秒（000000至999999）                       |
      | ％H  | 小时（00到23）                               |
      | ％h  | 小时（00到12）                               |
      | ％I  | 小时（00到12）                               |
      | ％i  | 分钟（00至59）                               |
      | ％p  | AM or PM                                     |
      | ％r  | 时间为12小时AM或PM格式（hh：mm：ss AM / PM） |
      | ％S  | 秒（00到59）                                 |
      | ％s  | 秒（00到59）                                 |
      | ％T  | 24小时格式的时间（hh：mm：ss）               |
      | %k   | 小时数                                       |
    - 对于非时分秒相关的格式，会返回0或NULL，包括：

| 格式                                               | 返回结果 |
| -------------------------------------------------- | -------- |
| %a、%b、%D、%j、%M、%U、%u、%V、%v、%W、%w、%X、%x | NULL     |
| %c 、%e                                            | 0        |
| %d、%m、%y                                         | 00       |
| %Y                                                 | 0000     |

  提取的时间值最多保留六位小数，超出部分按照四舍五入进位。

  示例:
  ```sql
  openGauss=# select TIME_FORMAT('83:59:59.0000009', '%T|%r|%H|%h|%I|%i|%S|%f|%p|%k');
                    time_format                    
  --------------------------------------------------
  83:59:59|11:59:59 AM|83|11|11|59|59|000001|AM|83
  (1 row)
  
  openGauss=# select TIME_FORMAT('2022-1-1 23:59:59.0000009', '%T|%r|%H|%h|%I|%i|%S|%f|%p|%k');
                    time_format                    
  --------------------------------------------------
  23:59:59|11:59:59 PM|23|11|11|59|59|000001|PM|23
  ```

-   weekday\(timestamp\)

    描述：获取日期/时间值中是一周中的星期几（0代表星期一，1代表星期二，以此类推，6代表星期日）。

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT weekday(timestamp '2001-02-16 20:38:40.123');
     ?column?
    ----------
            4
    (1 row)
    ```

-   weekofyear\(timestamp\)

    描述：获取日期/时间值中是一年的第几周。

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT weekofyear(timestamp '2001-02-16 20:38:40.123');
     date_part
    -----------
            7
    (1 row)
    ```

-   year\(timestamp\)

    描述：获取日期/时间值中的年数。

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT year(timestamp '2001-02-16 20:38:40.123');
     year
    ------
     2001
    (1 row)
    ```

-   current\_date\(\)

    描述：当前日期。

    返回值类型：date

    示例：

    ```
    openGauss=# SELECT current_date;
        date    
    ------------
     2017-09-01
    (1 row)
    ```

- to_days()

  函数原型：`int8 TO_DAYS(DATETIME date)`

  功能描述：接受一个date或datetime表达式作为参数，返回参数所指定的日期到0000年所经过的天数

  备注: 

  * 若入参类型为time类型，将用于计算的日期将为当前日期加上time指定时间后得到的日期。
  * 若输入日期超出[0000-01-01, 9999-12-31]的范围或入参为非法的date或datetime表达式，函数报错。

  示例：

  ```sql
  opengauss=# select to_days('0000-01-01');
   to_days 
  ---------
         1
  (1 row)
  
  opengauss=# select to_days('2022-09-05 23:59:59.5');
   to_days 
  ---------
    738768
  (1 row)
  
  -- 当前日期为: 2022-09-05
  opengauss=# select to_days(time'25:00:00');
   to_days 
  ---------
    738769
  (1 row)
  ```

- to_seconds()

  函数原型：`NUMERIC TO_SECONDS(text datetime)`

  功能描述：输入一个时间点`datetime`，返回`0000-01-01 00:00:00`到该时间点所经过的秒数

  备注：
  - 参数`datetime`支持的类型有：字符串、数值、date、datetime、time等。当输入参数为time类型时，日期会被自动设置为当前日期。
  - 返回的结果只保留整秒数，小数部分直接舍弃。

  示例：
  ```sql
  opengauss=# select to_seconds('2022-09-01');
   to_seconds  
  -------------
   63829209600
  (1 row)
  
  opengauss=# select to_seconds('2022-09-01 12:30:30.888');
   to_seconds  
  -------------
   63829254630
  (1 row)
  
  opengauss=# select to_seconds(20220901123030);
   to_seconds  
  -------------
   63829254630
  (1 row)
  ```
  
- unix_timestamp()

  函数原型：
  `NUMERIC UNIX_TIMESTAMP()`

  `NUMERIC UNIX_TIMESTAMP(text datetime)`

  功能描述：
  - 不输入任何参数，直接执行该函数，返回`1970-01-01 00:00:00 UTC`到当前时间点所经过的秒数
  - 输入一个时间点`datetime`，返回`1970-01-01 00:00:00 UTC`到`datetime`所经过的秒数

  备注：
  - 参数`datetime`支持的类型有：字符串、数值、date、datetime、time等。当输入参数为time类型时，日期会被自动设置为当前日期。
  - 参数`datetime`的有效范围为`[1970-01-01 00:00:00.000000 UTC, 2038-01-19 03:14:07.999999 UTC]`。
  - 参数的输入范围会受到时区的影响，但最终计算结果不受时区影响。
  - 计算结果最多只保留六位小数。

  示例：
  ```sql
  opengauss=# select unix_timestamp('2022-09-01');
   unix_timestamp 
  ----------------
       1661961600
  (1 row)
  
  opengauss=# select unix_timestamp('2022-09-01 12:30:30.888');
   unix_timestamp 
  ----------------
   1662006630.888
  (1 row)
  
  opengauss=# select unix_timestamp(20220901123030.6);
   unix_timestamp 
  ----------------
     1662006630.6
  (1 row)
  ```
  
- utc_date()

  函数原型：`DATE UTC_DATE()`

  功能描述：返回当前的UTC日期，类型为DATE。

  备注：
  - UTC_DATE能够以关键词的形式识别，此时无需包含括号。

  示例：
  ```sql
  opengauss=# select UTC_DATE();
    utc_date  
  ------------
   2022-09-06
  (1 row)
  
  opengauss=# select UTC_DATE;
    utc_date  
  ------------
   2022-09-06
  (1 row)
  ```
  
- utc_time()

  函数原型：
  	`TIME UTC_TIME()`
  
  ​	`TIME UTC_TIME(int fsp)`
  
  功能描述：返回当前的UTC时间，类型为TIME。若给定一个整数参数作为精度，则能够指定结果保留的小数数量，支持精度范围为[0-6]
  
  备注：
  - UTC_TIME能够以关键词的形式识别，此时无需包含括号。效果等同于无参数的UTC_TIME()函数。
  
  示例：
  ```sql
  opengauss=# select UTC_TIME();
   utc_time 
  ----------
   15:13:54
  (1 row)
  
  opengauss=# select UTC_TIME(6);
      utc_time    
  ----------------
   15:13:56.59698
  (1 row)
  
  opengauss=# select UTC_TIME;
   utc_time 
  ----------
   15:14:01
  (1 row)
  ```
  
- utc_timestamp()

  函数原型：

  - `DATETIME UTC_TIMESTAMP()`
  - `DATETIME UTC_TIMESTAMP(int fsp)`
  
  功能描述：返回当前的UTC日期时间值，类型为DATETIME。若给定一个整数参数作为精度，则能够指定结果保留的小数数量，支持精度范围为[0-6]。

  备注:
  
  - UTC_TIMESTAMP能够以关键词的形式识别，此时无需包含括号。效果等同于无参数的UTC_TIMESTAMP()函数。
  
  示例：
  ```sql
  opengauss=# select UTC_TIMESTAMP();
      utc_timestamp    
  ---------------------
   2022-09-06 15:16:28
  (1 row)
  
  opengauss=# select UTC_TIMESTAMP(6);
         utc_timestamp        
  ----------------------------
   2022-09-06 15:16:34.691118
  (1 row)
  
  opengauss=# select UTC_TIMESTAMP;
      utc_timestamp    
  ---------------------
   2022-09-06 15:16:39
  ```

- date_bool(date)

  描述：根据日期值中的年数返回布尔型（为零时返回false，否则返回true）。

  返回值类型：boolean

  示例：

  ```
  openGauss=# select time_bool('18:50:00');
   time_bool 
  -----------
   t
  (1 row)
  ```

  ```
  openGauss=# select time_bool('00:50:00');
   time_bool 
  -----------
   f
  (1 row)
  ```

- time_bool(time)

  描述：根据时间值中的小时数返回布尔型（为零时返回false，否则返回true）。

  返回值类型：boolean

  示例：

  ```
  openGauss=# select date_bool('2022-08-20');
   date_bool 
  -----------
   t
  (1 row)
  ```

  ```
  openGauss=# select date_bool('0000-08-20');
   date_bool 
  -----------
   f
  (1 row)
  ```
