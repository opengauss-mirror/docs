# Date and Time Processing Functions and Operators<a name="EN-US_TOPIC_0289900496"></a>

## Time/Date Functions<a name="en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_sd0d47140cdd048c1964ed53f9858f436"></a>

Compared with the original openGauss, Dolphin modifies the time/date function as follows:
1. The dayofmonth, dayofweek, dayofyear, hour, microsecond, minute, quarter, second, weekday, weekofyear, year, and current_date functions are added.
2. The curdate, current_time, curtime, current_timestamp, localtime, localtimestamp, now, and sysdate functions are added.
3. The makedate, maketime, period_add, period_diff, sec_to_time, and subdate functions are added.
4. The subtime, timediff, time, time_format, timestamp, and timestamppadd functions are added.
5. The to_days, to_seconds, unix_timestamp, utc_date, utc_time, and utc_timestamp functions are added.
6. The date\_bool and time\_bool functions are added.
7. The dayname, monthname, time\_to\_sec, month, day, date, week, yearweek functions are added and the last_day function is modified.
8. The datediff, from\_days, convert\_tz, date\_add, date\_sub, adddate, addtime functions are added and the timestampdiff function is modified.

- curdate\(\)

  Description: Returns the date when the statement started to be executed.

  Return type: date

  Example:

    ```
    openGauss=# select curdate();
    curdate
    ------------
    2022-07-21
    (1 row)
    ```

- current_time

  Description: Returns the time when a statement starts to be executed.

  Return type: time

  Example:

    ```
    openGauss=# select current_time;
    current_time
    --------------
    16:56:02
    (1 row)
    ```

- current_time\(n\)

  Description: Returns the time when a statement starts to be executed. **n** indicates the precision. The maximum value is 6.

  Return type: time

  Example:

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

  Description: Returns the time when a statement starts to be executed. **n** indicates the precision. The maximum value is 6.

  Return type: time

  Example:

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

  Description: Returns the timestamp when a statement starts to be executed.

  Return type: datetime

  Example:

    ```
    openGauss=# select current_timestamp;
      current_timestamp
    ---------------------
    2022-07-21 16:59:38
    (1 row)
    ```

- current_timestamp\(n\)

  Description: Returns the timestamp when the statement starts to be executed. **n** indicates the precision. The maximum value is 6.

  Return type: datetime

  Example:

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

    Description: Obtains the value of date in the date or time value.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT dayofmonth(timestamp '2001-02-16 20:38:40');
     date_part
    -----------
            16
    (1 row)
    ```

- dayofweek\(timestamp\)

    Description: Obtains the week number in the date/time value. The value **1** indicates Sunday, the value **2** indicates Monday, and the value **7** indicates Saturday.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT dayofweek(timestamp '2001-02-16 20:38:40');
     ?column?
    ----------
            6
    (1 row)
    ```

- dayofyear\(timestamp\)

    Description: Obtains the day of a year in a date/time value.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT dayofyear(timestamp '2001-02-16 20:38:40');
     date_part
    -----------
            47
    (1 row)
    ```

- hour\(timestamp\)

    Description: Obtains the value of hour in the date or time value.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT hour(timestamp '2001-02-16 20:38:40');
     date_part
    -----------
            20
    (1 row)
    ```

- localtime

  Description: Returns the timestamp when a statement starts to be executed.

  Return type: datetime

  Example:

    ```
    openGauss=# select localtime;
        localtime
    ---------------------
    2022-07-21 17:02:04
    (1 row)
    ```

- localtime\(n\)

  Description: Returns the timestamp when the statement starts to be executed. **n** indicates the precision. The maximum value is 6.

  Return type: datetime

  Example:

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

  Description: Returns the timestamp when a statement starts to be executed.

  Return type: datetime

  Example:

    ```
    openGauss=# select localtimestamp;
    localtimestamp
    ---------------------
    2022-07-21 17:17:20
    (1 row)
    ```

- localtimestamp\(n\)

  Description: Returns the timestamp when the statement starts to be executed. **n** indicates the precision. The maximum value is 6.

  Return type: datetime

  Example:

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
  
  Function prototype:

  `DATE MAKEDATE(int64 year, int64 dayofyear)`
  Function description:

  Returns the date value of a year when the year and the number of days are given.

  Remarks:
    - If any of them is NULL, the function returns NULL.
    - The value of **dayofyear** must be greater than 0. Otherwise, NULL is returned.
    - 0 <= year < 70: **year** is regarded as 20XX. 70 <= year < 100: **year** is regarded as 19XX.
    - The return value ranges from 0 to 9999-12-31. If the return value is out of the range, NULL is returned.

  Example:

```sql
 openGauss=# SELECT MAKEDATE(2022,31), MAKEDATE(2022,32);
   makedate  |  makedate  
------------+------------
 2022-01-31 | 2022-02-01
(1 row)

-- 0<= year < 70 and 70 <= year < 100
 openGauss=# SELECT MAKEDATE(0,31), MAKEDATE(70,32);
  makedate  |  makedate  
------------+------------
 2000-01-31 | 1970-02-01
(1 row)

-- dayofyear <= 0 and out of range
 openGauss=# SELECT MAKEDATE(2022,0), MAKEDATE(9999,366);
  makedate | makedate 
----------+----------
          | 
(1 row)
```

- MAKETIME()

  Function prototype:

  `TIME MAKETIME(int64 hour, int64 minue, Numeric second)`
  
  Function description:

  Returns a TIME type value when the hour, minute, and second parameters are given.

  Remarks:

    - The function returns NULL if any of the following conditions is met:
        1. minue < 0 or minue >= 60
        2. second < 0 or second >= 60
        3. Any parameter is NULL.
    - The returned value of the TIME type contains six decimal places. If the value of **second** contains more than six decimal places, the value is rounded off.
    - The returned value of the TIME type must be in the range [-838:59:59, 838:59:59]. If the value is out of the range, the specified boundary value is returned based on the positive and negative types of hour.
  
  Example:
```sql
 openGauss=# SELECT MAKETIME(15, 15, 15.5);
  maketime  
------------
 15:15:15.5
(1 row)

-- Round off.
 openGauss=# SELECT MAKETIME(10, 15, 20.5000005);
    maketime     
-----------------
 10:15:20.500001
(1 row)

-- Round off.
 openGauss=# SELECT MAKETIME(839,0,0);
 maketime  
-----------
 838:59:59
(1 row)
```

- microsecond\(timestamp\)

    Description: Obtains the value of microsecond in the date or time value.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT microsecond(timestamp '2001-02-16 20:38:40.123');
     date_part
    -----------
        123000
    (1 row)
    ```

- minute\(timestamp\)

    Description: Obtains the value of minute in the date or time value.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT minute(timestamp '2001-02-16 20:38:40.123');
     date_part
    -----------
            38
    (1 row)
    ```

- now\(n\)

  Description: Returns the timestamp when the statement starts to be executed. **n** indicates the precision. The maximum value is 6.

  Return type: datetime

  Example:

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
  
  Function prototype:

  `int64 PERIOD_ADD(int64 P, int64 N)`
  
  Function description:

  Return the period **P** (in YYYYMM or YYMM format) plus **N** months. The format is YYYYMM.

  Remarks:

    - If any parameter is NULL, the function returns NULL.
    - If **P = 0**, 0 is returned.
    - If the value of **P** and the year in the returned result is less than 100, 70 is used as the boundary to convert the year to 20XX or 19XX.
  
  Example:
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

 -- The year of the period is within the range of [0, 70) or [70, 100).
 openGauss=# SELECT PERIOD_ADD(0101, 2), PERIOD_ADD(7001, 2);
 period_add | period_add 
------------+------------
     200103 |     197003
(1 row)
```

- PERIOD_DIFF()
  
  Function prototype:

  `int64 PERIOD_DIFF(int64 P1, int64 P2)`
  
  Function description:

  Returns the month difference between P1 and P2.

  Remarks:

    - If any parameter is NULL, the function returns NULL.
    - If the year in P1 and P2 is less than 100, 70 is used as the boundary to convert the year to 20XX or 19XX.
 
  Example:
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

    Description: Gets the number of quarters in a date/time value, from 1 to 4.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT quarter(timestamp '2001-02-16 20:38:40.123');
     date_part
    -----------
            1
    (1 row)
    ```

- second\(timestamp\)

    Description: Obtains the value of second in the date or time value.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT second(timestamp '2001-02-16 20:38:40.123');
     date_part
    -----------
           40
    (1 row)
    ```

- SEC_TO_TIME()
  
  Function prototype:

  `TIME SEC_TO_TIME(Numeric second)`
  
  Function description:

  Converts a given number of seconds to hours, minutes, and seconds. This function returns a value of the TIME type.

  Remarks:

    - If any parameter is NULL, the function returns NULL.
    - The returned value of the TIME type contains only six decimal places. The excess part is rounded off.
    - The returned value of the TIME type must be in the range [-838:59:59, 838:59:59]. If the value is out of the range, the specified boundary value is returned based on the positive and negative types of second.
  
  Example:
```sql
 openGauss=# SELECT SEC_TO_TIME(4396);
 sec_to_time 
-------------
 01:13:16
(1 row)

-- Round off.
 openGauss=# SELECT SEC_TO_TIME(2378.2222225);
   sec_to_time   
-----------------
 00:39:38.222223
(1 row)

-- The returned result is out of range.
 openGauss=# SELECT SEC_TO_TIME(3888888);
 sec_to_time 
-------------
 838:59:59
(1 row)
```

- SUBDATE(expr, interval)
  
  Function prototype:

  `CString SUBDATE(text date, INTERVAL expr unit)`

  `CString SUBDATE(text date, int64 days)`

  Function description:

  Performs date calculation. The **date** parameter specifies the start DATE or DATETIME type value. Specifies the INTERVAL value to be subtracted from the start date. The result date value after subtraction is returned. If the second parameter is an integer, it is considered as a subtracted day value.

  Remarks:

    - The return format of the function is DATE or DATETIME. Generally, the return type is the same as the type of the first parameter. When the type of the first parameter is DATE and the unit of INTERVAL contains HOUR, MINUTE, and SECOND, the return result is DATETIME.
    - The function returns NULL if any of the following conditions is met:

        1. The value of date is out of range [0, 9999-12-31].
        2. Any parameter is NULL.
    - The date of the returned result must be within the range [0001-1-1, 9999-12-31]. If the value is out of range, NULL is returned.
  
  Example:

```sql
 openGauss=# SELECT SUBDATE('2022-01-01', INTERVAL 31 DAY), SUBDATE('2022-01-01', 31);
  subdate   |  subdate   
------------+------------
 2021-12-01 | 2021-12-01
(1 row)

-- The first parameter is DATE.
 openGauss=# SELECT SUBDATE('2022-01-01 01:01:01', INTERVAL 1 YEAR);
       subdate       
---------------------
 2021-01-01 01:01:01
(1 row)

-- The first parameter is DATETIME.
 openGauss=# SELECT SUBDATE('2022-01-01 01:01:01', INTERVAL 1 YEAR);
       subdate       
---------------------
 2021-01-01 01:01:01
(1 row)

-- The first parameter is DATE, but the unit of INTERVAL contains TIME.
 openGauss=# SELECT SUBDATE('2022-01-01', INTERVAL 1 SECOND);
       subdate       
---------------------
 2021-12-31 23:59:59
(1 row)
```

- SUBDATE(TIME, interval)
  
  Function prototype:

  `TIME SUBDATE(TIME time, INTERVAL expr unit)`

  `TIME SUBDATE(TIME time, int64 days)`

  Function description:

  This function is used to be compatible with the scenario where the first parameter type of the subdate function in MySQL can be TIME. In this case, the input of the first parameter must be the original TIME data, not the implicit conversion of the character string.
  The **time** parameter specifies the start time of the TIME type. The **second** parameter specifies the INTERVAL value to be subtracted from the start time. The result date after subtraction is returned. If the second parameter is an integer, it is considered as a subtracted day value.

  Remarks:

    - The first parameter must be of the original TIME type, not implicitly converted from a string. For example, SUBDATE('1:1:1', 1) does not enter this function. Change it to SUBDATE(time'1:1:1', 1).
    - The INTERVAL unit of the second parameter cannot contain the year or month part. Otherwise, NULL is returned.
    - The return value must be within [-838:59:59, 838:59:59]. Otherwise, NULL is returned.

  Example:

```sql
 openGauss=# SELECT SUBDATE(time'10:15:20', INTERVAL '1' DAY), SUBDATE(time'10:15:20', 1);
   subdate  |  subdate  
-----------+-----------
 -13:44:40 | -13:44:40
(1 row)

-- The INTERVAL unit of the second parameter cannot contain the year or month part.
 openGauss=# SELECT SUBDATE(time'838:00:00', INTERVAL '1' MONTH);
 subdate 
---------
 
(1 row)

-- The result is out of range.
 openGauss=# SELECT SUBDATE(time'838:59:59', INTERVAL '-1' SECOND);
 subdate 
---------
 
(1 row)
```

- SUBTIME()
  
  Function prototype:

  `TEXT SUBTIME(TIME time1, TIME time2)`

  `TEXT SUBTIME(DATETIME time1, TIME time2)`

  Function description:

  This function performs date calculation and returns the result of DATETIME or TIME expression time1 minus TIME expression time2. The return parameter type is the same as the input type of time1.

  Remarks:

    - The value of time1 must be in TIME or DATETIME format. Otherwise, an error is reported.
    - The value of time2 must be in the correct and valid TIME format. Otherwise, an error is reported.
    - If the return value is greater than [-838:59:59, 838:59:59], the extreme value is returned based on the symbol.

  Example:

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

  Description: Returns the real-time timestamp of the system. **n** indicates the precision. The maximum value is 6.

  Return type: datetime

  Example:

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
  
  Function prototype:

  `Text TIME(TEXT expr)`

  Function description:

  The time() function of MySQL is compatible. The parameter specifies a TIME or DATETIME expression from which the time expression is extracted and returned as a string.

  Remarks:

    - The returned time expression can contain a maximum of six decimal places. The excess part is rounded off.
    - For an abnormal date or time format or a date or time with domain overflow (for example, 1:60:60 and 2022-12-32), this function is compatible with the insert statement in MySQL, that is, an error is reported.
    - An error is reported for a character string in the date format, and 00:00:00 is returned for a parameter of the date type.

  Example:
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

  Function prototype:

  `TIME TIMEDIFF(TIME time1, TIME time2)`

  `DATETIME TIMEDIFF(DATETIME  time1, DATETIME time2)`

  Function description:

  This function performs date calculation and returns the result of subtracting time2 from time1. The type of the returned parameter is the same as the input type.

  Remarks:

    - The types of time1 and time2 must be the same and valid. Otherwise, NULL is returned.
    - For example, if time1 and time2 are of the TIME type and the return value is beyond [-838:59:59, 838:59:59], the function reports an error.

  Example:

  ```sql
  openGauss=# select TIMEDIFF(time'23:59:59',time'01:01:01'), TIMEDIFF(datetime'2008-12-31 23:59:59',datetime'2008-12-30 01:01:01');
   timediff | timediff
  ----------+----------
   22:58:58 | 46:58:58
  (1 row)
  
  -- If the value is out of range, the extreme value is returned.
  openGauss=# SELECT TIMEDIFF(time'-830:00:00', time'10:20:30'), TIMEDIFF(time'830:00:00', time'-10:20:30');
    timediff  | timediff
  ------------+-----------
   -838:59:59 | 838:59:59
  (1 row)
  ```

- TIMESTAMP()

  Function prototype:

  `DATETIME TIMESTAMP(TEXT expr)`

  `DATETIME TIMESTAMP(TEXT expr, TIME time)`

  Function description:

  If there is only one parameter, the function converts the DATE or DATETIME expression expr to the DATETIME value and returns the value.

  If there are two parameters, the function calculates the result of the DATE or DATETIME expression expr plus time of the TIME type and returns the result.

  Remarks:

    - expr is a date or datetime expression that does not exist. For example, '2000-12-32' and '2000-1-1 24:00:00'. The function reports an error.
    - When the value contains two parameters and the value of the second parameter time is not a character string in TIME format, the function reports an error.

  Example:

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

- timestamp_add()

  Function prototype:

  `TEXT TIMESTAMP_ADD(text unit, interval span, text datetime)`

  Function description:

  Adds a period of time to a known time point. The first parameter **unit** indicates the time unit, the second parameter **span** indicates a specific value, and the third parameter **datetime** indicates a known time point.

  Remarks:

    * The supported units are as follows:

      | Unit| Input|
      | ---- | ---------- |
      | Year  | year       |
      | Quarter| qtr        |
      | Month  | month      |
      | Week  | week       |
      | Date  | day        |
      | Hour  | hour       |
      | Minute  | minute     |
      | Second  | second     |
      | Microsecond| microsecon |

    * The span supports decimals. If the unit is second, the span is rounded off to six decimal places based on the seventh decimal place. Otherwise, the span is rounded off to an integer.

    * The input type of datetime can be character string, date, datetime, or time.

    * The input range of datetime and the calculation result of the function must be within the range [0001-01-01 00:00:00.000000, 9999-12-31 23:59:59.999999]. Otherwise, an error is reported. (This function is compatible with the insert statement in MySQL.)

    * For an abnormal date or time format or a date or time with domain overflow (for example, 1:60:60 and 2022-12-32), this function is compatible with the insert statement in MySQL, that is, an error is reported.

  Example:

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
  
  Function prototype:

  TEXT TIME_FORMAT(text time, text format).

  Function description:

  The first parameter **time** is a time or datetime expression. The function formats the time value based on the second parameter **format** and returns the value as a string.

  Remarks:
    - The following formats are supported:
      | Format| Description                                        |
      | ---- | -------------------------------------------- |
      | %f | Microsecond (000000 to 999999)                      |
      | %H | Hour (00 to 23)                              |
      | %h | Hour (00 to 12)                              |
      | %I | Hour (00 to 12)                              |
      | %i | Minute (00 to 59)                              |
      | %p | AM or PM                                     |
      | %r | The time is in 12-hour AM or PM format (hh:mm:ss AM/PM).|
      | %S | Second (00 to 59)                                |
      | %s | Second (00 to 59)                                |
      | %T | Time in 24-hour format (hh:mm:ss)              |
      | %k   | Hours                                      |
    - For formats that are not related to hour, minute, and second, 0 or NULL is returned, including:

| Format                                              | Return Result|
| -------------------------------------------------- | -------- |
| %a, %b, %D, %j, %M, %U, %u, %V, %v, %W, %w, %X, %x| NULL     |
| %c , %e                                           | 0        |
| %d, %m, %y                                        | 00       |
| %Y                                                 | 0000     |

  The extracted time value can contain a maximum of six decimal places. The excess part is rounded off.

  Example:
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

    Description: Obtains the day of a week in the date/time value. The value **0** indicates Monday, the value **1** indicates Tuesday, and the value **6** indicates Sunday.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT weekday(timestamp '2001-02-16 20:38:40.123');
     ?column?
    ----------
            4
    (1 row)
    ```

-   weekofyear\(timestamp\)

    Description: Obtains the week of a year in a date/time value.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT weekofyear(timestamp '2001-02-16 20:38:40.123');
     date_part
    -----------
            7
    (1 row)
    ```

-   year\(timestamp\)

    Description: Obtains the value of year in the date or time value.

    Return type: double precision

    Example:

    ```
    openGauss=# SELECT year(timestamp '2001-02-16 20:38:40.123');
     year
    ------
     2001
    (1 row)
    ```

-   current\_date\(\)

    Description: Specifies the current date.

    Return type: date

    Example:

    ```
    openGauss=# SELECT current_date;
        date    
    ------------
     2017-09-01
    (1 row)
    ```

- to_days()

  Function prototype: `int8 TO_DAYS(DATETIME date)`

  Function description: Receives a date or datetime expression as a parameter and returns the number of days from the date specified by the parameter to the year 0000.

  Remarks:

  * If the input parameter type is time, the date used for calculation is the current date plus the time specified by time.
  * If the entered date is out of the range [0000-01-01, 9999-12-31] or the input parameter is an invalid date or datetime expression, the function reports an error.

  Example:

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
  
  -- The current date is 2022-09-05.
  opengauss=# select to_days(time'25:00:00');
   to_days 
  ---------
    738769
  (1 row)
  ```

- to_seconds()

  Function prototype: `NUMERIC TO_SECONDS(text datetime)`

  Function description: After you enter a time point **datetime**, the number of seconds from 0000-01-01 00:00:00 to the time point is returned.

  Remarks:
  - The **datetime** parameter supports the following types: character string, number, date, datetime, and time. If the input parameter is of the time type, the date is automatically set to the current date.
  - The returned result contains only the integer number of seconds and the decimal part is discarded.

  Example:
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

  Function prototype:
  `NUMERIC UNIX_TIMESTAMP()`

  `NUMERIC UNIX_TIMESTAMP(text datetime)`

  Function description:
  - If you run the function without entering any parameter, the number of seconds from 1970-01-01 00:00:00 UTC to the current time is returned.
  - If you enter a time point **datetime**, the number of seconds from 1970-01-01 00:00:00 UTC to datetime is returned.

  Remarks:
  - The **datetime** parameter supports the following types: character string, number, date, datetime, and time. If the input parameter is of the time type, the date is automatically set to the current date.
  - The valid range of the **datetime** parameter is [1970-01-01 00:00:00.000000 UTC, 2038-01-19 03:14:07.999999 UTC].
  - The value range of this parameter is affected by the time zone, but the final calculation result is not affected by the time zone.
  - The calculation result can contain a maximum of six decimal places.

  Example:
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

  Function prototype: `DATE UTC_DATE()`

  This function is used to return the current UTC date of the DATE type.

  Remarks:
  - UTC\_DATE can be identified as a keyword. In this case, parentheses are not required.

  Example:
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

  Function prototype:
  	`TIME UTC_TIME()`
  
  ​	`TIME UTC_TIME(int fsp)`
  
  This function is used to return the current UTC time of the TIME type. If an integer parameter is specified as the precision, the number of decimals to be retained in the result can be specified. The supported precision range is [0-6].
  
  Remarks:
  - UTC\_TIME can be identified by keywords. In this case, parentheses are not required. The effect is the same as that of the UTC\_TIME() function without parameters.
  
  Example:
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

  Function prototype:

  - `DATETIME UTC_TIMESTAMP()`
  - `DATETIME UTC_TIMESTAMP(int fsp)`
  
  Function description: This function is used to return the current UTC date and time. The type is DATETIME. If an integer parameter is specified as the precision, the number of decimals to be retained in the result can be specified. The supported precision range is [0-6].

  Remarks:
  
  - UTC\_TIMESTAMP can be identified by keywords. In this case, parentheses are not required. The effect is the same as that of the UTC\_TIMESTAMP() function without parameters.
  
  Example:
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

  Description: Returns a Boolean value based on the number of years in a date value. If the value is **0**, **false** is returned. Otherwise, **true** is returned.

  Return type: Boolean

  Example: 

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

  Description: Returns a Boolean value based on the number of hours in a time value. If the value is **0**, **false** is returned. Otherwise, **true** is returned.

  Return type: Boolean

  Example: 

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

    Description: Returns the workday corresponding to the date. The language set of the returned content is controlled by the GUC parameter [lc_time_names](dolphin-guc-parameters.md#lctimenamesa-namesection203671436824a).

    Return type: text

    Note: This function is compatible with MySQL table insertion parameters and result constraints.

    Example: 

    ```
    openGauss=# select dayname('2000-1-1');
    dayname
    ----------
    Saturday
    (1 row)

    openGauss=# alter system set lc_time_names = 'zh_CN';
    ALTER SYSTEM SET

    openGauss=# select dayname('2000-1-1');
    dayname
    ---------
    Saturday
    (1 row)
    ```

- monthname\(date\)

    Description: Returns the full name of the month corresponding to the date. The language set of the returned content is controlled by the GUC parameter [lc_time_names](dolphin-guc-parameters.md#lctimenamesa-namesection203671436824a).

    Return type: text

    Note: This function is compatible with MySQL table insertion parameters and result constraints.

    Example: 

    ```
    openGauss=# select monthname('2000-1-1');
    monthname
    -----------
    January
    (1 row)

    openGauss=# alter system set lc_time_names = 'zh_CN';
    ALTER SYSTEM SET

    openGauss=# select monthname('2000-1-1');
    monthname
    -----------
    January
    (1 row)
    ```

- time_to_sec\(time\)

    Description: Converts time to seconds.

    Return type: integer

    Note: This function is compatible with MySQL table insertion parameters and result constraints.

    Example: 

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

    Description: Returns the month of a date.

    Return type: integer

    Note: This function is compatible with MySQL table insertion parameters and result constraints.

    Example: 

    ```
    openGauss=# select month('2021-11-12');
    month
    -------
        11
    (1 row)

    openGauss=# select month('2021-11-0');
    month
    -------
        11
    (1 row)
    ```

- day\(date\)

    Description: Returns the day of a date.

    Return type: integer
  
    Note: This function is compatible with MySQL table insertion parameters and result constraints.

    Example: 

    ```
    openGauss=# select day('2021-11-12');
    day
    -----
    12
    (1 row)

    openGauss=# select day('2021-0-0');
    day
    -----
    0
    (1 row)
    ```

- date\(expr\)

    Description: Extracts the date part from expr when expr is recognized as a date or datetime expression.

    Return type: text

    Note: This function is compatible with MySQL table insertion parameters and result constraints.

    Example: 

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

    openGauss=# select date('2021-11-0');
        date
    ------------
    2021-11-00
    (1 row)

    openGauss=# select date('2021-0-3');
        date
    ------------
    2021-00-03
    (1 row)
    ```

- last_day\(expr\)

    Description: Returns the date of the last day of a month when expr is identified as date or datetime.

    Return type: date

    Note: This function is compatible with MySQL table insertion parameters and result constraints. In B-compatible databases, when the GUC parameter **b\_compatibility\_mode** is set to **true**, this function replaces the original last\_day function of openGauss.

    Example: 

    ```
    openGauss=# set b_compatibility_mode = true;
    SET

    openGauss=# select last_day('2021-1-30');
    last_day
    ------------
    2021-01-31
    (1 row)

    openGauss=# select last_day('2021-1-0');
    last_day
    ------------
    2021-01-31
    (1 row)
    ```

- week\(date\[,mode\]\)

    Description: Returns the week of the date represented by the date parameter in a year. The mode parameter is optional. The value range is [0,7]. The mode parameter specifies whether a week starts on Monday or Sunday and whether the return value ranges from 0 to 53 or from 1 to 53. If no mode parameter is transferred, the GUC variable default\_week\_format is used as the default mode parameter.

    The following table lists the values and meanings of the mode parameter.
    | mode | First day of week | range | Week 1 is the first week ...|
    | -----|----------------------- | -------------------------------- | ------ |
    |0|Sunday|0-53|with a Sunday in this year|
    |1|Monday|0-53|with 4 or more days this year|
    |2|Sunday|1-53|with a Sunday in this year|
    |3|Monday|1-53|with 4 or more days this year|
    |4|Sunday|0-53|with 4 or more days this year|
    |5|Monday|0-53|with a Monday in this year|
    |6|Sunday|1-53|with 4 or more days this year|
    |7|Monday|1-53|with a Monday in this year|

    Explanation of "with 4 or more days this year":
    - If the first week of a year contains January and four or more days of the year, the week is the first week of the year.
    - Otherwise, this week is the last week of the previous year, and the next week is the first week of the current year.

    If the date is in the last week of the previous year, the function returns 0 when 0, 1, or 5 is used as the value of **mode**. The meaning is that the current date is in week 0 of the year to which the date belongs.
    ```
    openGauss=# select week('2000-1-1', 0);
    week
    ------
        0
    (1 row)
    ```
    The reason why 0 is returned instead of the 52nd week of 1999 is that this allows the returned value to be within the year given by the parameter, so that the week function can work better with other functions that extract the date part.

    If you want to use the first day of a week as the first week of a year, you can use 0, 2, 5, or 7 as the value of **mode**.

    Return type: integer

    Note: This function is compatible with MySQL table insertion parameters and result constraints.

    Example: 

    ```
    openGauss=# show default_week_format;
    default_week_format
    ---------------------
    0
    (1 row)

    openGauss=# select week('2000-1-1');
    week
    ------
        0
    (1 row)

    openGauss=# alter system set default_week_format = 2;
    ALTER SYSTEM SET

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

    Description: Returns the year and week of the date represented by the date parameter. If the week of the date is the first or last week of a year, the returned year may be different from the year in the date parameter. The mode parameter is optional and works in the same way as the mode parameter of the WEEK function. The value range is [0,7]. If no mode parameter is specified, 0 is used as the default mode parameter. The GUC parameter default\_week\_format does not affect the yearweek function.

    The number of weeks returned by the yearweek function is different from that returned by the week function when the optional mode parameter is 0 or 1. The week function returns 0 weeks in the year of the date parameter, but the yearweek function does not return 0 weeks in the year of the date parameter.

    Return type: bigint

    Note: This function is compatible with MySQL table insertion parameters and result constraints.

    Example: 

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

  Description: expr1 and expr2 can be date or datetime. Calculate the number of days represented by expr1-expr2. Only the date part of expr1 and expr2 is involved in the calculation. If an input parameter is invalid, the function returns NULL.

  Return type: integer (indicating the date difference, in days)

  Example: 
  ```
  openGauss=# select datediff('2001-01-01','321-02-02');
  datediff 
  ----------
   613576
  (1 row)
  ```

- from\_days\(N\)

  Description: Returns the date corresponding to the number of days represented by N.

  Return type: date

  Example: 
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

  Description: The function returns the values of two date parameters expr2 - expr1. Both parameters may be datetime or date. If the parameter is date, the time part is considered as 0. After the difference is calculated, the calculation result is converted into a specified unit for display. The value of **unit** can be MICROSECOND, SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, QUARTER, or YEAR. If an input parameter is invalid, the function returns NULL.

  Return type: bigint (indicating the difference displayed in a specified unit)

  Note: In B-compatible databases, this function replaces the original timestampdiff function of openGauss when the GUC parameter **b\_compatibility\_mode** is set to **true**.

  Example: 
  ```
  openGauss=# set b_compatibility_mode = true;
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

  Description: Converts datetime from the time zone specified by from\_tz to the time zone specified by to\_tz. If the range of datetime converted from from\_tz to the UTC time zone exceeds [1970-01-01 00:00:01.000000, 2038-01-19 03:14:07.999999], the conversion is not performed. If the parameter is invalid, the function returns NULL.

  Return value: datetime

  Example: 
  ```
  openGauss=# SELECT CONVERT_TZ('2004-01-01 12:00:00','GMT','MET');
        convert_tz
  ---------------------
    2004-01-01 13:00:00
  (1 row)
  ```

- DATE\_ADD\(date/datetime/time, interval expr unit\)
    
  Function prototype:
  ```
  text DATE_ADD(text expr1, INTERVAL expr2 unit)
  time DATE_ADD(time expr1, INTERVAL expr2 unit)
  ```

  Description: This function performs the date and time addition operation and returns the result of expr1 plus expr2. expr1 can be data of the date, datetime, or time type, and expr2 indicates the interval value. If expr1 is of the time type, time can be added only when expr1 is of the time type.
  
  Return value type: same as the type of the first parameter.
  
  Remarks:
  
  - Generally, the return type is the same as the type of the first parameter. When the type of the first parameter is DATE and the unit of INTERVAL contains HOUR, MINUTE, and SECOND, the return result is DATETIME.
  - Parameter restrictions during MySQL table insertion.
      - If expr1 is in the date or datetime format and the value exceeds [0000-1-1 00:00:00.000000, 9999-12-31 23:59:59.999999], an error is reported.
      - If expr1 is of the time type, time can be added only when expr1 is of the time type. If date_add('1:1:1',interval 1 second) does not enter this function, change it to date_add(time'1:1:1', interval 1 second).
  - Result restriction during MySQL table insertion.
      - When expr1 is in the date or datetime format, if the result exceeds [0000-1-1 00:00:00.000000, 9999-12-31 23:59:59.999999], an error is reported. If the result is within this range but less than '0001-1-1 00:00:00.000000', MySQL defines the result as 0000-00-00 or 0000-00-00 xx:xx:xx. The time depends on the calculation result. Because such a result is meaningless, an error is reported in openGauss.
      - For data whose first parameter is of the time type, if the calculation result exceeds the time type range [-838:59:59, 838:59:59], an error is reported.
  
  Example: 
  
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
  
  Function prototype:
  ```
    text DATE_SUB(text expr1, INTERVAL expr2 unit)
    time DATE_SUB(time expr1, INTERVAL expr2 unit)
  ```

  Description: This function performs the date and time subtractive operation and returns the result of expr1 minus expr2. expr1 can be data of the date, datetime, or time type, and expr2 indicates the interval value. If expr1 is of the time type, time can be subtracted only when expr1 is of the time type.
  
  Return value type: same as the type of the first parameter.
  
  Remarks:
  
  - Generally, the return type is the same as the type of the first parameter. When the type of the first parameter is DATE and the unit of INTERVAL contains HOUR, MINUTE, and SECOND, the return result is DATETIME.
  - Parameter restrictions during MySQL table insertion.
      - If expr1 is in the date or datetime format and the value exceeds [0000-1-1 00:00:00.000000, 9999-12-31 23:59:59.999999], an error is reported.
      - If expr1 is of the time type, time can be subtracted only when expr1 is of the time type. If date_sub('1:1:1',interval 1 second) does not enter this function, change it to date_sub(time'1:1:1', interval 1 second).
  - Result restriction during MySQL table insertion.
      - When expr1 is in the date or datetime format, if the result exceeds [0000-1-1 00:00:00.000000, 9999-12-31 23:59:59.999999], an error is reported. If the result is within this range but less than '0001-1-1 00:00:00.000000', MySQL defines the result as 0000-00-00 or 0000-00-00 xx:xx:xx. The time depends on the calculation result. Because such a result is meaningless, an error is reported in openGauss.
      - For data whose first parameter is of the time type, if the calculation result exceeds the time type range [-838:59:59, 838:59:59], an error is reported.
  
  Example: 
  
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
  Description: Performs a date or time addition operation. When the second parameter is interval, the function is the same as the DATE\_ADD function. For details, see DATE\_ADD. When the second parameter is an integer, the integer is added to the first parameter as a number of days.

  Example: 
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

  Function prototype:
  ``` 
  time ADDTIME(text expr1, time expr2)
  ```

  Description: This function performs the time addition operation and returns the result of expr1 plus expr2. The expr1 can be in datetime or time format, and expr2 can only be in time format.
  
  Return value type: same as the type of the first parameter.
  
  Remarks:
  
  - Parameter restrictions during MySQL table insertion.
      - If the value of the first parameter is in the datetime format and the value exceeds [0000-1-1 00:00:00.000000, 9999-12-31 23:59:59.999999], an error is reported.
      - If the value of the first parameter is in the time format and exceeds the time range, an error is reported.
      - The value of the second parameter must be in the time format.
  
  - Result restriction during MySQL table insertion.
      - If the result is in datetime format and exceeds [0000-1-1 00:00:00.000000, 9999-12-31 23:59:59.999999], an error is reported. If the result is within this range but is less than '0001-1-1 00:00:00.000000', null is returned.
      - If the result is in the time format and the value exceeds [-838:59:59, 838:59:59], an error is reported.
  
  Example: 
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
