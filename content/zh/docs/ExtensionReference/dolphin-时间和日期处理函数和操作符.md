# 时间和日期处理函数和操作符

## 时间/日期函数<a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_sd0d47140cdd048c1964ed53f9858f436"></a>

相比于原始的openGauss，dolphin对于时间/日期函数的修改主要为:

1. 新增```dayofmonth/dayofweek/dayofyear/hour/microsecond/minute/quarter/second/weekday/weekofyear/year/current_date```函数。
2. 新增```curdate/current_time/curtime/current_timestamp/localtime/localtimestamp/now/sysdate```函数。
3. 新增```makedate/maketime/period_add/period_diff/sec_to_time/subdate```函数。
4. 新增```subtime/timediff/time/time_format/timestamp/timestamppadd```函数。
5. 新增`to_days/to_seconds/unix_timestamp/utc_date/utc_time/utc_timestamp`函数。
6. 新增```date_bool/time_bool```函数。
7. 新增```dayname/monthname/time_to_sec/month/day/date/week/yearweek```函数，修改了```last_day```函数。
8. 新增```datediff/from_days/convert_tz/date_add/date_sub/adddate/addtime```函数，修改了```timestampdiff```函数。
9. 新增```get_format/date_format/from_unixtime/str_to_date```函数，修改了```extract```函数。

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

  `DATE MAKEDATE(int8 year, int8 dayofyear)`
  
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

  `TIME MAKETIME(int8 hour, int8 minue, Numeric second)`
  
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

-- 超出边界值
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

  `int8 PERIOD_ADD(int8 P, int8 N)`
  
  功能描述：

  返回时期`P`(格式为YYYYMM或YYMM)加上`N`个月后的时期值，格式为YYYYMM。

  备注:

    - 当任一参数为NULL时，函数返回NULL。
    - `P` = 0时，返回0。
    - 参数的时期`P`与返回结果的时期中的年份小于100时，会以70为边界，将年份转为20XX年或19XX年。
    - 若入参为小数格式的**字符串**时，本函数会按照四舍五入进位转为整数后进行处理，而在mysql中，会将参数的小数部分舍去。例如: `period_add('202101.4', '10.5')`在opengauss中结果与`period_add(202101, 11)`相同，而在mysql中，则视为`period_add(202101, 10)`
  
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

  `int8 PERIOD_DIFF(int8 P1, int8 P2)`
  
  功能描述：

  返回两个时期参数`P1`与`P2`的月份数差值。

  备注:

    - 当任一参数为NULL时，函数返回NULL。
    - 时期参数`P1`和`P2`中的年份小于100时，会以70为边界，将年份转为20XX年或19XX年。
    - 若入参为小数格式的**字符串**时，本函数会按照四舍五入进位转为整数后进行处理，而在mysql中，会将参数的小数部分舍去。例如: `period_diff('202101.4', '202102.5')`在opengauss中结果与`period_diff(202101, 202103)`相同，而在mysql中，则被视为`period_diff(202101, 202102)`。

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

  `Text SUBDATE(text date, INTERVAL expr unit)`

  `Text SUBDATE(text date, int8 days)`

  功能描述：

  该函数执行日期运算。参数`date`指定开始`DATE`或`DATETIME`类型值。指定要从开始日期减去的INTERVAL值，返回相减后的结果日期值。若第二参数为整数，则将其视为减去的天数值。

  备注:

    - 函数返回格式为`DATE`或`DATETIME`。一般情况下，返回类型与第一参数的类型相同。当第一参数的类型为`DATE`时且INTERVAL的单位包含HOUR、MINUTE、SECOND部分，则返回结果为`DATETIME`。
    - 本函数所支持的interval单位与openguass支持的interval单位保持一致，包括YEAR，MONTH，DAY，HOUR，MINUTE，SECOND，DAY TO HOUR，DAY TO MINUTE，DAY TO SECOND，HOUR TO MINUTE，HOUR TO SECOND，MINUTE TO SECOND。
    - 任一参数为NULL，函数返回NULL。
    - 在下列情况中，函数报错（该特性兼容此函数在`mysql`的`insert`语句中的行为）：
        - 参数`date`的日期超出范围[0000-1-1, 9999-12-31]
        - 当interval单位为仅与年或月相关时，返回结果的日期超出范围[0000-1-1, 9999-12-31]
        - 其他interval单位，返回结果的日期超出范围[0001-1-1, 9999-12-31]
  
  
  示例:

```sql
 openGauss=# SELECT SUBDATE('2022-01-01', INTERVAL 31 DAY), SUBDATE('2022-01-01', 31);
  subdate   |  subdate   
------------+------------
 2021-12-01 | 2021-12-01
(1 row)

-- 第一参数为DATE
 openGauss=# SELECT SUBDATE('2022-01-01', INTERVAL 1 YEAR);
  subdate   
------------
 2021-01-01
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

  `TIME SUBDATE(TIME time, int8 days)`

  功能描述：

  该函数是为兼容MySql中subdate函数的第一参数类型可以为TIME的情况。该情况下，第一参数的输入必须为原始的TIME数据，而非由字符串的隐式转换而来。
  参数`time`指定开始TIME类型的时间值，第二参数指定要从开始时间减去的`INTERVAL`值，返回相减后的结果日期值。若第二参数为整数，则将其视为减去的天数值。

  备注:

    - 第一参数必须为原始的TIME类型，而非由字符串的隐式转换而来。如`SUBDATE('1:1:1', 1)`并不会进入此函数。需改为`SUBDATE(time'1:1:1', 1)`。
    - 在如下情况下，函数报错（该特性兼容此函数在`mysql`的`insert`语句中的行为）：
      - 第二参数的INTERVAL单位包含年或月部分
      - 函数返回`TIME`值超出[-838:59:59, 838:59:59]
  
  
  示例:

```sql
 openGauss=# SELECT SUBDATE(time'10:15:20', INTERVAL '1' DAY), SUBDATE(time'10:15:20', 1);
   subdate  |  subdate  
-----------+-----------
 -13:44:40 | -13:44:40
(1 row)

-- 第二参数的INTERVAL单位不能包含年或月部分
 openGauss=# SELECT SUBDATE(time'838:00:00', INTERVAL '1' MONTH);
ERROR:  time field value out of range
CONTEXT:  referenced column: subdate

-- 结果超出范围
 openGauss=# SELECT SUBDATE(time'838:59:59', INTERVAL '-1' SECOND);
ERROR:  time field value out of range
CONTEXT:  referenced column: subdate
```

- SUBTIME()
  
  函数原型:

  `TEXT SUBTIME(TIME time1, TIME time2)`

  `TEXT SUBTIME(DATETIME time1, TIME time2)`

  功能描述：

  该函数执行日期运算，返回`DATETIME`或`TIME`表达式`time1`减去TIME表达式`time2`的结果。返回结果类型与`time1`传入类型保持一致。

  备注:

  - 在如下情况下，函数报错：
    - `time1`为不为合法的TIME格式或者DATETIME格式
    - `time2`为不为合法的TIME格式
    - 返回`DATETIME`值时，结果超过[0000-01-01 00:00:00.000000, 9999-12-31 23:59:59.999999]
    - 返回`TIME`值时，结果超过[-838:59:59, 838:59:59]

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

- time(expr)

  功能描述：

  参数指定一个TIME或DATETIME表达式`expr`，提取其中的time表达式并返回为字符串。

  备注:

    - 返回的时间表达式中最多保留六位小数，并且不显示小数部分尾部的0
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

  `TIME TIMEDIFF(DATETIME datetime1, DATETIME datetime2)`

  功能描述：

  该函数执行`DATETIME`或`TIME `类型值间的减法运算，计算`DATETIME`或`TIME `间的时间差值，运算结果以`TIME`类型值返回。

  备注:

    - `time1, time2`所对应类型需要一致，否则返回NULL。
    - 若出现下列情况，函数报错（该特性兼容此函数在`mysql`的`insert`语句中的行为）：
      - `TIME`类型入参超出[-838:59:59, 838:59:59]范围或格式不合法
      - `DATETIME`类型入参超出[0000-01-01 00:00:00.000000, 9999-12-31 23:59:59.999999]范围或格式不合法
      - 对于`DATETIME`格式的字符串入参，本函数支持0值日期，如'2000-0-1 1:1:1'
      - 返回值超出[-838:59:59, 838:59:59]范围


  示例:

  ```sql
  openGauss=# select TIMEDIFF(time'23:59:59',time'01:01:01'), TIMEDIFF(datetime'2008-12-31 23:59:59',datetime'2008-12-30 01:01:01');
   timediff | timediff
  ----------+----------
   22:58:58 | 46:58:58
  (1 row)
  
  -- 两参数对应类型不一致
  opengauss=# select timediff('2000-1-1 0:0:0', '0:0:0'), timediff(time'0:0:0', datetime'2000-1-1 0:0:0');
   timediff | timediff 
  ----------+----------
            | 
  (1 row)
  
  -- 返回值超出范围时报错。
  openGauss=# select timediff(time'-830:00:00', time'10:20:30');
  ERROR:  time field value out of range
  CONTEXT:  referenced column: timediff
  ```

- TIMESTAMP()

  函数原型:

  `DATETIME TIMESTAMP(TEXT expr)`

  `DATETIME TIMESTAMP(TEXT expr, TIME time)`

  功能描述：

  只有一个参数时，函数将DATE或DATETIME表达式`expr`转为DATETIME值返回。

  有两个参数时，函数计算DATE或DATETIME表达式`expr`加上TIME类型值`time`的结果并以DATETIME值返回。

  备注:

    - `expr`为不存在的date或datetime表达式时。如'2000-12-32'，'2000-1-1 24:00:00'等，函数报错。
    - 入参或返回值超出指定时间范围，函数报错
    - 包含两个参数且第二参数`time`为非TIME格式字符串时，函数报错。

  示例:

  ```sql
  openGauss=# select TIMESTAMP('2022-01-01'), TIMESTAMP('20220101');
        timestamp      |      timestamp      
  ---------------------+---------------------
  2022-01-01 00:00:00 | 2022-01-01 00:00:00
  (1 row)
  
  openGauss=# select TIMESTAMP('2022-01-31 12:00:00.123456'), TIMESTAMP('20000229120000.1234567');
          timestamp          |         timestamp          
  ----------------------------+----------------------------
  2022-01-31 12:00:00.123456 | 2000-02-29 12:00:00.123457
  (1 row)
  
  openGauss=# select TIMESTAMP('2022-01-31','12:00:00.123456'), TIMESTAMP('2022-01-31 12:00:00','-32:00:00');
          timestamp          |      timestamp      
  ----------------------------+---------------------
  2022-01-31 12:00:00.123456 | 2022-01-30 04:00:00
  (1 row)
  
  openGauss=# select TIMESTAMP('20000229','100:00:00'), TIMESTAMP('20000229120000.123','100:00:00');
       timestamp      |       timestamp
  ---------------------+-------------------------
   2000-03-04 04:00:00 | 2000-03-04 16:00:00.123
  (1 row)
  ```

- timestampadd(unit, span, expr)

  函数原型：

  `TEXT TIMESTAMPADD(text unit, interval span, text datetime)`

  功能描述：

  将一段时间加到已知的时间点上。其中第一个参数`unit`是时间单位，第二个参数`span`是具体数值，第三个参数`datetime`是已知时间点。

  备注：

    * `unit`支持的单位如下：

      | 单位 | 对应的输入                                                  |
      | ---- | ----------------------------------------------------------- |
      | 年   | year, years, y, yr, yrs, yyyy                               |
      | 季度 | quarter, qtr, q                                             |
      | 月   | month, months, mm, mon, mons                                |
      | 周   | week, weeks, w                                              |
      | 日   | day, days, d, dd, ddd, j                                    |
      | 时   | hour, hours, h, hh, hr, hrs                                 |
      | 分   | minute, minutes, m, mi, min, mins                           |
      | 秒   | second, seconds, s, sec, secs                               |
      | 微秒 | microsecond, microsecon, us, usec, usecond, useconds, usecs |

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

  `TEXT TIME_FORMAT(text time, text format)。`

  功能描述：

  第一参数`time`为time或datetime表达式，函数基于第二参数`format`格式化`time`部分的值并返回为字符串。

  备注:

    - `format`支持的格式如下:
      | 格式 | 描述                                         |
      | ---- | -------------------------------------------- |
      | ％f  | 微秒（000000至999999）                       |
      | ％H  | 小时（00,24小时格式，但能超出23）              |
      | ％h  | 小时（00到12）                               |
      | ％I  | 小时（00到12）                               |
      | ％i  | 分钟（00至59）                               |
      | ％p  | AM or PM                                     |
      | ％r  | 时间为12小时AM或PM格式（hh：mm：ss AM / PM） |
      | ％S  | 秒（00到59）                                 |
      | ％s  | 秒（00到59）                                 |
      | ％T  | 24小时格式的时间(hh：mm：ss)，小时数能超出23  |
      | %k   | 小时数 (0,24小时格式，但能超出23)            |
    - 当第一参数`time`的hour部分超出[0, 23]的范围时, ％H, %k和%T能够产生超出该范围的值，其余包含小时的format将转为取模12后的小时数。例如:
    ```sql
    opengauss=# select time_format('100:59:59', '%H|%k|%T|%I');
        time_format      
    ----------------------
    100|100|100:59:59|04
    (1 row)
    ```
    - 对于非时分秒相关的格式，会返回0或NULL，包括：
  
  | 格式                                               | 返回结果 |
  | -------------------------------------------------- | -------- |
  | %a、%b、%D、%j、%M、%U、%u、%V、%v、%W、%w、%X、%x | NULL     |
  | %c 、%e                                            | 0        |
  | %d、%m、%y                                         | 00       |
  | %Y                                                 | 0000     |
  
    - 提取的时间值最多保留六位小数

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

- to_days(expr)

  功能描述：接受一个date或datetime表达式作为参数，返回参数所指定的日期到0000年所经过的天数

  返回类型：64位整数`int8`

  备注: 

  * 若入参类型为time类型，将用于计算的日期将为当前日期加上time指定时间后得到的日期。
  * 若输入日期超出[0000-01-01, 9999-12-31]的范围或入参为非法的date或datetime表达式，函数报错（兼容mysql中该函数于insert语句中的表现）。

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

- to_seconds(expr)

  功能描述：参数输入一个`date`或`datetime`表达式`expr`用以指定时间点，返回`0000-01-01 00:00:00`到该时间点所经过的秒数

  返回类型：64位整数`int8`

  备注：

  - 参数`datetime`支持的类型有：字符串、数值、date、datetime、time等。当输入参数为time类型时，日期会被自动设置为当前日期。
  - 返回的结果只保留整秒数，小数部分直接舍弃。
  - 若输入日期超出[0000-01-01, 9999-12-31]的范围或入参为非法的date或datetime表达式，函数报错（兼容mysql中该函数于insert语句中的表现）。

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
  - 计算结果最多只保留六位小数且不显示小数部分尾部的0。

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
  
	`TIME UTC_TIME(int fsp)`
  
  功能描述：返回当前的UTC时间，类型为TIME。若给定一个整数参数作为精度，则能够指定结果保留的小数数量，支持精度范围为[0-6]
  
  备注：

  - UTC_TIME能够以关键词的形式识别，此时无需包含括号。效果等同于无参数的UTC_TIME()函数。
  - 返回的`TIME`结果不显示小数部分尾部的0
  
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
  - 返回的`DATETIME`结果不显示小数部分尾部的0

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

- dayname\(date\)

  描述：返回日期对应的工作日，返回内容所在语言集受GUC参数[dolphin.lc_time_names](dolphin-GUC参数说明.md#lctimenamesa-namesection203671436824a)控制。

  返回值类型：text

  备注：此函数兼容MySQL插表时的严格模式和非严格模式表现。

  示例：

  ```
  openGauss=# select dayname('2000-1-1');
  dayname
  ----------
  Saturday
  (1 row)

  openGauss=# alter system set dolphin.lc_time_names = 'zh_CN';
  ALTER SYSTEM SET

  openGauss=# select dayname('2000-1-1');
  dayname
  ---------
  星期六
  (1 row)
  ```

- monthname\(date\)

  描述：返回日期对应月份的全称，返回内容所在语言集受GUC参数[dolphin.lc_time_names](dolphin-GUC参数说明.md#lctimenamesa-namesection203671436824a)控制。

  返回值类型：text

  备注：此函数兼容MySQL插表时的严格模式和非严格模式表现。

  示例：

  ```
  openGauss=# select monthname('2000-1-1');
  monthname
  -----------
  January
  (1 row)

  openGauss=# alter system set dolphin.lc_time_names = 'zh_CN';
  ALTER SYSTEM SET

  openGauss=# select monthname('2000-1-1');
  monthname
  -----------
  一月
  (1 row)
  ```

- time_to_sec\(time\)

  描述：将时间转换为秒数。

  返回值类型：integer

  备注：
  
  - 此函数兼容MySQL插表时的严格模式和非严格模式表现。

  - 函数参数被当做time类型解析时，其参数约束范围为[-838:59:59, 838:59:59]，与openGauss中time类型插表约束相同。

  示例：

  ```
  openGauss=# select time_to_sec('838:59:59');
  time_to_sec
  -------------
      3020399
  (1 row)

  openGauss=# select time_to_sec('-838:59:59');
  time_to_sec
  -------------
      -3020399
  (1 row)
  ```

- month\(date\)

  描述：返回日期中的月份。

  返回值类型：integer

  备注：此函数兼容MySQL插表时的严格模式和非严格模式表现。

  示例：

  ```
  openGauss=# select month('2021-11-12');
  month
  -------
      11
  (1 row)
  ```

- day\(date\)

  描述：返回日期中的天数。

  返回值类型：integer

  备注：此函数兼容MySQL插表时的严格模式和非严格模式表现。

  示例：

  ```
  openGauss=# select day('2021-11-12');
  day
  -----
  12
  (1 row)
  ```

- date\(expr\)

  描述：expr识别为date或者datetime表达式，从expr中提取出日期部分。

  返回值类型：date

  备注：

  - 此函数兼容MySQL插表时的严格模式和非严格模式表现。
  
  - 只有当dolphin.sql_mode中不含'no_zero_date'时，DATE函数才能接收'0000-00-00'输入，并且返回日期'0000-00-00'。

  示例：

  ```
  openGauss=# select date('2021-11-12');
      date
  ------------
  2021-11-12
  (1 row)

  openGauss=# select date('2021-11-12 23:59:59.9999999');
      date
  ------------
  2021-11-13
  (1 row)
  ```

- last_day\(expr\)

  描述：expr识别为date或者datetime，返回该月对应的最后一天的日期。

  返回值类型：date

  备注：

  - 此函数兼容MySQL插表时的严格模式和非严格模式表现。

  - 在B模式数据库中，当GUC参数dolphin.b_compatibility_mode为true时，此函数代替openGauss原有last_day函数。

  示例：

  ```
  openGauss=# set dolphin.b_compatibility_mode = true;
  SET

  openGauss=# select last_day('2021-1-30');
  last_day
  ------------
  2021-01-31
  (1 row)
  ```

- week\(date\[,mode\]\)

  描述：返回date参数代表的日期在一年中的第几周。mode参数为可选整型参数，范围为[0,7]。无mode参数传入时，GUC参数default_week_format会作为默认mode参数。

  mode参数的各种取值及其意义如下：

  | mode | 意义 |
  | --------|----------------------- |
  |0|Sunday为一周的第一天；week的取值范围为[0-53]；一年的第一周必须包含Sunday|
  |1|Monday为一周的第一天；week的取值范围为[0-53]；一年的第一周必须有大于等于4天在此年内|
  |2|Sunday为一周的第一天；week的取值范围为[1-53]；一年的第一周必须包含Sunday|
  |3|Monday为一周的第一天；week的取值范围为[1-53]；一年的第一周必须有大于等于4天在此年内|
  |4|Sunday为一周的第一天；week的取值范围为[0-53]；一年的第一周必须有大于等于4天在此年内|
  |5|Monday为一周的第一天；week的取值范围为[0-53]；一年的第一周必须包含Monday|
  |6|Sunday为一周的第一天；week的取值范围为[1-53]；一年的第一周必须有大于等于4天在此年内|
  |7|Monday为一周的第一天；week的取值范围为[1-53]；一年的第一周必须包含Monday|

  对于**一周的第一天**，**week取值范围**，**判定一年第一周的条件**的说明：

  - **一周的第一天**指一周开始的那一天，Monday或者Sunday可能为一周的第一天。
  - **week取值范围**指WEEK函数返回值的取值范围，有[0-53]和[1-53]两种取值范围。其中[0-53]中的0代表给定日期实际位于其所在年份上一年的最后一周内，但为了将返回结果与给定日期所在年份联系起来，故认为给定日期位于其所在年份的第零周（也即还未开始第一周）。若希望给定日期所在周数与其所在年份关系更紧密，则应该使用0、1、4或者5作为mode值，这样，当给定日期位于其所在年份上一年的最后一周时，WEEK函数会返回0。
  - **判定一年第一周的条件**指判定所给日期位于当前年的第一周的条件，一般而言只有日期位于年份的边界才会进行判定。此判定有两种方式，由mode参数决定使用哪种方式。
    - 方式一：若Monday或者Sunday是一周的第一天，并且Monday或者Sunday在给定日期所在年内，则此周为日期所在年份的第一周。对应mode取值为0、2、5和7。
    - 方式二：若给定日期所在的周有大于等于4天位于日期所在年内，则此周为日期所在年份的第一周；否则此周为上一年的最后一周。对应mode取值为1、3、4和6。

  返回值类型：integer

  备注：此函数兼容MySQL插表时的严格模式和非严格模式表现。

  示例：

  ```
  openGauss=# show dolphin.default_week_format;
  dolphin.default_week_format
  ---------------------
  0
  (1 row)

  -- 给定日期位于前一年的最后一周内，mode为0
  openGauss=# select week('2000-1-1');
  week
  ------
      0
  (1 row)

  openGauss=# alter system set dolphin.default_week_format = 2;
  ALTER SYSTEM SET

  -- 给定日期位于前一年的最后一周内，mode为2
  openGauss=# select week('2000-1-1');
  week
  ------
  52
  (1 row)

  openGauss=# select week('2000-1-1', 2);
  week
  ------
  52
  (1 row)
  ```

- yearweek\(date\[,mode\]\) 

  描述：返回date参数代表的日期所在的年份和周。mode为可选整型参数，取值范围为[0,7]。无mode参数传入时，0会作为默认mode参数，GUC参数default_week_format不会影响yearweek函数。mode参数详细意义参见week函数。

  yearweek函数不会返回0周，即**week取值范围**始终为[1-53]，不受mode参数影响。

  返回值类型：bigint

  备注：此函数兼容MySQL插表时的严格模式和非严格模式表现。

  示例：

  ```
  openGauss=# select week('1987-01-01', 0);
  week
  ------
      0
  (1 row)

  openGauss=# select yearweek('1987-01-01', 0);
  yearweek
  ----------
  198652
  (1 row)
  ```

- datediff\(expr1,expr2\)

  描述：expr1和expr2可以是date或者datetime，计算expr1-expr2代表的天数，只有expr1和expr2的日期部分参与计算。当输入参数不合法时，该函数返回NULL。

  返回值类型：integer（代表日期差值，单位是天)

  备注：此函数兼容MySQL插表时的严格模式和非严格模式表现。

  示例：
  ```
  openGauss=# select datediff('2001-01-01','321-02-02');
    datediff 
  ----------
    613576
  (1 row)
  ```

- from\_days\(N\)

  描述：返回数值N代表的天数对应日期。

  返回值类型：date

  示例：

  ```
  openGauss=# select from_days(365);
  from_days  
  ------------
  0000-00-00
  (1 row)
  
  openGauss=# select from_days(366);
  from_days  
  ------------
  0001-01-01
  (1 row)
  ```

- timestampdiff\(unit,datetime expr1,datetime expr2\)

  描述：函数返回两个日期参数expr2 - expr1的值，这两个参数都有可能是datetime或者是date，如果参数是date，则认为时间部分为0。计算差值之后，将计算结果转换成指定单位显示。unit有以下值：MICROSECOND , SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, QUARTER, 或者是 YEAR。当输入参数不合法时，此函数返回NULL。

  返回值类型：bigint（代表以指定单位显示的差值）

  备注：

  - 此函数兼容MySQL插表时的严格模式和非严格模式表现。

  - 在B模式数据库中，此函数在GUC参数dolphin.b_compatibility_mode为true时代替openGauss原有timestampdiff函数。

  示例：

  ```
  openGauss=# set dolphin.b_compatibility_mode = true;
  SET
  
  openGauss=# select timestampdiff(SECOND,'2001-01-01 12:12:12','2001-01-01 12:12:11');
  timestampdiff
  ---------------
              -1
  (1 row)
  
  openGauss=# select timestampdiff(MONTH,'2001-01-01 12:12:12','2001-02-01 12:12:12');
  timestampdiff
  ---------------
              1
  (1 row)
  ```

- convert_tz\(datetime, from\_tz, to\_tz\)

  描述：将datetime从from_tz指定的时区转换到to_tz指定的时区。如果datetime从from_tz转换到UTC时区时范围超过[1970-01-01 00:00:01.000000, 2038-01-19 03:14:07.999999],则不进行转换。参数无效时，函数返回NULL。

  返回值：datetime

  备注：此函数兼容MySQL插表时的严格模式和非严格模式表现。

  示例：

  ```
  openGauss=# SELECT CONVERT_TZ('2004-01-01 12:00:00','GMT','MET');
        convert_tz
  ---------------------
    2004-01-01 13:00:00
  (1 row)
  ```

- DATE\_ADD\(date/datetime/time, interval expr unit\)

  描述：该函数执行日期时间加法运算，返回exrp1加expr2的结果。expr1可以为date/datetime/time类型的数据，expr2代表interval值。expr1为time类型的数据时，只能在显示声明参数类型为time时才能实现对time的加法。
  
  返回值类型：
  
  - 该函数返回值类型为text，以便可以得到date或datetime等多种类型的结果格式。

  - 若有函数结果参与计算需求，可以使用cast语句将函数结果转换为合适数据数据类型而后再参与计算，如：SELECT CAST(DATE_ADD('2021-11-12', INTERVAL 1 SECOND) AS DATETIME) + 1;
  
  备注：

  - openGauss目前INTERVAL后不支持运算表达式。
  
  - 兼容MySQL插表时的严格模式和非严格模式表现。

  - 一般情况下，返回结果格式与第一参数的类型相同。当第一参数的类型为DATE时且INTERVAL的单位包含HOUR、MINUTE、SECOND部分，则返回结果为DATETIME格式。

  - 若计算结果为datetime并且在[0000-1-1 00:00:00.000000, 9999-12-31 23:59:59.999999]范围内，但小于'0001-1-1 00:00:00.000000'，openGauss表现与MySQL一致：将日期部分置为'0000-00-00'，时间部分结果视具体计算结果而定。

  示例：
  
  ```
  openGauss=# SELECT DATE_ADD('2022-01-01', INTERVAL 31 DAY);
    date_add
  ------------
  2022-02-01
  (1 row)
    
  openGauss=# SELECT DATE_ADD('2022-01-01 01:01:01', INTERVAL 1 YEAR);
      date_add       
  ---------------------
  2023-01-01 01:01:01
  (1 row)
    
  openGauss=# SELECT DATE_ADD('2022-01-01', INTERVAL 1 SECOND);
      date_add       
  ---------------------
  2022-01-01 00:00:01
  (1 row)
  ```
  
- DATE\_SUB\(date/datetime/time, interval expr unit\)

  描述：该函数执行日期时间减法运算，返回exrp1减expr2的结果。expr1可以为date/datetime/time类型的数据，expr2代表interval值。expr1为time类型的数据时，只能在显示声明参数类型为time时才能实现对time的减法。
  
  返回值类型：
  
  - 该函数返回值类型为text，以便可以得到date或datetime等多种类型的结果格式。

  - 若有函数结果参与计算需求，可以使用cast语句将函数结果转换为合适数据数据类型而后再参与计算，如：SELECT CAST(DATE_SUB('2021-11-12', INTERVAL 1 SECOND) AS DATETIME) + 1;
  
  备注：

  - openGauss目前INTERVAL后不支持运算表达式。
  
  - 兼容MySQL插表时的严格模式和非严格模式表现。

  - 一般情况下，返回结果格式与第一参数的类型相同。当第一参数的类型为DATE时且INTERVAL的单位包含HOUR、MINUTE、SECOND部分，则返回结果为DATETIME格式。

  - 若计算结果为datetime并且在[0000-1-1 00:00:00.000000, 9999-12-31 23:59:59.999999]范围内，但小于'0001-1-1 00:00:00.000000'，openGauss表现与MySQL一致：将日期部分置为'0000-00-00'，时间部分结果视具体计算结果而定。
  
  示例：
  
  ```
  openGauss=# SELECT DATE_SUB('2022-01-01', INTERVAL 31 DAY);
    date_sub
  ------------
  2021-12-01
  (1 row)
    
  openGauss=# SELECT DATE_SUB('2022-01-01 01:01:01', INTERVAL 1 YEAR);
      date_sub       
  ---------------------
  2021-01-01 01:01:01
  (1 row)
    
  openGauss=# SELECT DATE_SUB('2022-01-01', INTERVAL 1 SECOND);
      date_sub       
  ---------------------
  2021-12-31 23:59:59
  (1 row)
  ```
  
- ADDDATE\(date/datetime/time, interval/days\)

  描述：该函数执行日期或时间加法运算。当第二参数为interval时，该函数表现与DATE_ADD函数相同，详细描述参见DATE_ADD。当第二参数为整数时，此整数会被当作天数加在第一参数上。
  
  备注：openGauss目前INTERVAL后不支持运算表达式。

  示例：

  ```
  openGauss=# SELECT ADDDATE('2021-11-12', INTERVAL 1 SECOND);
        adddate
  ---------------------
  2021-11-12 00:00:01
  (1 row)

  openGauss=# SELECT ADDDATE(time'12:12:12', INTERVAL 1 DAY);
  adddate
  ----------
  36:12:12
  (1 row)

  openGauss=# SELECT ADDDATE('2021-11-12', 1);
    adddate
  ------------
  2021-11-13
  (1 row)

  openGauss=# SELECT ADDDATE(time'12:12:12', 1);
  adddate
  ----------
  36:12:12
  (1 row)
  ```

- ADDTIME\(datetime/time,time\)

  描述：该函数执行时间加法运算，返回expr1加上expr2的结果。expr1可以为datetime或者time格式，expr2只能为time格式。
  
  返回值类型：
  
  - 该函数返回值类型为text，以便可以得到time或datetime的结果格式。

  - 若有函数结果参与计算需求，可以使用cast语句将函数结果转换为合适数据数据类型而后再参与计算，如：SELECT CAST(ADDTIME('2021-11-12 11:11:11', '10:10:10') AS DATETIME) + 1;
  
  备注：此函数兼容MySQL插表时的严格模式和非严格模式表现。
  
  示例：
  
  ```
  openGauss=# SELECT ADDTIME('11:22:33','10:20:30');
  addtime  
  ----------
  21:43:03
  (1 row)
  
  openGauss=# SELECT ADDTIME('2020-03-04 11:22:33', '-10:20:30');
  addtime       
  ---------------------
  2020-03-04 01:02:03
  (1 row)
  ```

- get\_format\(expr1, expr2\)

  描述：expr1可接收date、datetime、timestamp、time四种类型名字，expr2可接收五种规格字符串：'EUR'|'USA'|'JIS'|'ISO'|'INTERNAL'。函数根据expr1和expr2返回对应类型的对应规格的字符串。

  该函数返回值情况如下表所示：
  |类型|规格|返回值|
  |---|---|---|
  |DATE|'USA'|'%m.%d.%Y'|
  |DATE|'JIS'|'%Y-%m-%d'|
  |DATE|'ISO'|'%Y-%m-%d'|
  |DATE|'EUR'|'%d.%m.%Y'|
  |DATE|'INTERNAL'|'%Y%m%d'|
  |DATETIME|'USA'|'%Y-%m-%d %H.%i.%s'|
  |DATETIME|'JIS'|'%Y-%m-%d %H:%i:%s'|
  |DATETIME|'ISO'|'%Y-%m-%d %H:%i:%s'|
  |DATETIME|'EUR'|'%Y-%m-%d %H.%i.%s'|
  |DATETIME|'INTERNAL'|'%Y%m%d%H%i%s'|
  |TIMESTAMP|'USA'|'%Y-%m-%d %H.%i.%s'|
  |TIMESTAMP|'JIS'|'%Y-%m-%d %H:%i:%s'|
  |TIMESTAMP|'ISO'|'%Y-%m-%d %H:%i:%s'|
  |TIMESTAMP|'EUR'|'%Y-%m-%d %H.%i.%s'|
  |TIMESTAMP|'INTERNAL'|'%Y%m%d%H%i%s'|
  |TIME|'USA'|'%h:%i:%s %p'|
  |TIME|'JIS'|'%H:%i:%s'|
  |TIME|'ISO'|'%H:%i:%s'|
  |TIME|'EUR'|'%H.%i.%s'|
  |TIME|'INTERNAL'|'%H%i%s'|

  返回值类型：text

  示例：
  
  ```
  openGauss=# select get_format(datetime, 'iso');
      get_format
  -------------------
  %Y-%m-%d %H:%i:%s
  (1 row)
  ```

- extract\(unit from expr\)

  描述：从expr参数中提取由unit参数指定的部分。

  返回值：bigint

  备注：

  - 此函数兼容MySQL插表时的严格模式和非严格模式表现。

  - 在B模式数据库中，当dolphin.b_compatibility_mode为true时才会替代openGauss原有extract函数。

  - 函数参数被当做time类型解析时，其参数约束范围为[-838:59:59, 838:59:59]，与openGauss中time类型插表约束相同。

  - expr参数在解析时按照unit参数解析。当unit涉及`YEAR、WEEK、QUARTER、MONTH、DAY`时，expr参数被解析为date或者datetime；当unit只涉及`HOUR、MINUTE、SECOND、MICRESECOND`时，expr参数被解析为time。

  - extract函数可以提取复合unit。
    - 复合unit有：`DAY_HOUR，DAY_MINUTE，DAY_SECOND，DAY_MICROSECOND，HOUR_MINUTE，HOUR_SECOND，HOUR_MICROSECOND，MINUTE_SECOND，MINUTE_MICROSECOND，SECOND_MICROSECOND`。
    - 对于复合unit：`DAY_HOUR，DAY_MINUTE，DAY_SECOND，DAY_MICROSECOND`，由于这些unit中包含`DAY`部分，所以openGauss将expr当作datetime来解析。

  示例：
  
  ```
  openGauss=# set dolphin.b_compatibility_mode = true;
  SET

  openGauss=# select extract(year from '2021-11-12 12:12:12.000123');
  extract
  ---------
      2021
  (1 row)

  openGauss=# select extract(day_microsecond from '2021-11-12 12:12:12.000123');
      extract
  ----------------
  12121212000123
  (1 row)

  openGauss=# select extract(hour_microsecond from '2021-11-12 12:12:12.000123');
    extract
  --------------
  121212000123
  (1 row)

  openGauss=# set dolphin.b_compatibility_mode = false;
  SET
  ```

- date\_format\(expr, format\)

  描述：expr参数为输入的date或者datetime格式内容，该函数根据format参数格式化expr参数对应部分，format参数取值如下表：
  | 提取标志 | 意义 |取值范围|
  | ------- |----- |-------|
  |%a|简写工作日名称|Sun...Sat|
  |%b|简写月份名称|Jan...Dec|
  |%c|数字形式的月份|0...12|
  |%D|有后缀的月份中的天数|0th, 1st, 2nd, 3rd, ...|
  |%d|数字形式的月份中的天数|00...31|
  |%e|数字形式的月份中的天数|0...31|
  |%f|微秒|000000...999999|
  |%H|小时|00...23|
  |%h|小时|01...12|
  |%I|小时|01...12|
  |%i|分钟|00...59|
  |%j|一年中的天数|001...366|
  |%k|小时|0...23|
  |%l|小时|1...12|
  |%M|月份全称|January...December|
  |%m|数字形式的月份|00...12|
  |%p|上午或者下午|AM 或者 PM|
  |%r|范围为12小时的时间|%r返回的时间格式为'hh:mm:ss AM'或者'hh:mm:ss PM'|
  |%S|秒|00...59|
  |%s|秒|00...59|
  |%T|范围为24小时的时间|%T返回的时间格式为'hh:mm:ss'|
  |%U|日期在一年中对应的周数（对应WEEK函数mode为0的情况）|00...53|
  |%u|日期在一年中对应的周数（对应WEEK函数mode为1的情况）|00...53|
  |%V|日期在一年中对应的周数（对应WEEK函数mode为2的情况）此标志应和'%X'一起使用|01...53|
  |%v|日期在一年中对应的周数（对应WEEK函数mode为3的情况）此标志应和'%X'一起使用|01...53|
  |%W|工作日全称|Sunday...Saturday|
  |%w|工作日索引|0=Sunday...6=Saturday|
  |%X|日期所在周数对应的四位数字年份（计算方式为Sunday是一周的第一天），此标志应和'%V'一起使用|...|
  |%x|日期所在周数对应的四位数字年份（计算方式为Monday是一周的第一天），此标志应和'%v'一起使用|...|
  |%Y|四位数字年份|...|
  |%y|两位数字年份|...|
  |%%|'%'字面量|...|
  |%x|未列出的字符x|...|

  返回值：text

  备注：此函数兼容MySQL插表时的严格模式和非严格模式表现。

  示例：

  ```
  -- 将日期格式化为指定内容
  openGauss=# select date_format('2001-01-01 12:12:12','%Y %M %H');
  date_format   
  -----------------
  2001 January 12
  (1 row)

  -- 将日期格式化为所在周数或者工作日
  openGauss=# select date_format('2001-01-01 12:12:12','%V %v %U %u %W %w');
      date_format
  ----------------------
  53 01 00 01 Monday 1
  (1 row)
  ```

- from\_unixtime\(unix\_timestamp\[,format\]\)

  描述：第一个参数为数值格式的时间戳,代表距离'1970-01-01 00:00:00'UTC的秒数；第二个参数为可选字符串参数。第二参数不传入时，函数返回'1970-01-01 00:00:00' UTC + unix_timestamp + 当前时区偏移对应的datetime；当第二个参数给出时，函数会将datetime根据第二个参数进行格式化，格式化的方法与date_format函数相同。当unix_timestamp超过最大时间戳范围后，函数返回NULL。

  返回值类型：

  - 仅传入第一个参数时：datetime

  - 传入两个参数时：text

  示例：

  ```
  openGauss=# select from_unixtime(1);
      from_unixtime
  ---------------------
  1970-01-01 08:00:01
  (1 row)

  openGauss=# select from_unixtime(1,'%Y');
  from_unixtime 
  ---------------
  1970
  (1 row)

  openGauss=# select from_unixtime(2147483647);
      from_unixtime
  ---------------------
  2038-01-19 11:14:07
  (1 row)

  openGauss=# select from_unixtime(2147483648);
  from_unixtime
  ---------------

  (1 row)
  ```

- str\_to\_date\(str, format\)

  描述：该函数是date_format函数的逆函数。函数会尝试将字符串str与字符串format匹配，并根据format中包含的标志来构造对应date格式、datetime格式或者time格式的内容。

  返回值类型：

  - 该函数返回值类型为text，以便可以得到time、date或datetime的结果格式。
  
  - 当format中标志仅包含时间相关字符串`'fHISThiklrs'`中的字符时：time格式内容

  - 当format中标志仅包含日期相关字符串`'MVUXYWabcjmvuxyw'`中的字符时：date格式内容

  - 当format中标志为上述两种情况混合时：datetime格式内容

  - 若有函数结果参与计算需求，可以使用cast语句将函数结果转换为合适数据数据类型而后再参与计算，如：SELECT CAST(STR_TO_DATE('2021-11-12 12:12:12', '%Y-%m-%d %T') AS DATETIME) + 1;


  备注：

  - 此函数兼容MySQL插表时的严格模式和非严格模式表现。

  - 只有当dolphin.sql_mode中不含'no_zero_date'时，才能构造出日期'0000-00-00'。

  - 只有当dolphin.sql_mode中不含'no_zero_date'时，才能构造出单独的时间，如select str_to_date('10', '%h');

  示例：

  ```
  -- 普通构造日期
  openGauss=# select str_to_date('01,5,2013','%d,%m,%Y');
  str_to_date
  -------------
  2013-05-01
  (1 row)

  -- 使用年份，周数，工作日构造日期
  openGauss=# select str_to_date('200442 Monday', '%X%V %W');
  str_to_date
  -------------
  2004-10-18
  (1 row)

  -- 使用年份，天数构造日期
  openGauss=# select str_to_date('2004 100', '%Y %j');
  str_to_date
  -------------
  2004-04-09
  (1 row)

  -- 构造时间
  openGauss=# set dolphin.sql_mode = 'sql_mode_strict,sql_mode_full_group,pipes_as_concat,ansi_quotes';
  SET
  openGauss=# select str_to_date('1:12:12 pm', '%r');
  str_to_date
  -------------
  13:12:12
  (1 row)
  ```
- sleep\(duration \)

  描述：睡眠 duration 秒， 然后返回0

  返回值：int

  备注：此函数和mysql略有不同，函数睡眠达到给定时间，则返回0，如果中间发生中断，则返回NULL。

  示例：

  ```sql
  openGauss=# SELECT sleep(1);
  sleep 
  -------
      0
  (1 row)
  ```