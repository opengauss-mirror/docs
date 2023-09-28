# 时间和日期处理函数和操作符

-   months_between(date1 date, date2 date)

    描述：按date1 - date2 的方式返回两个日期之间相差的月数。

    返回值类型：numeric

    示例：

    ```
    openGauss=# select months_between(date'2023-01-01', date'2022-01-01');
    months_between
    ----------------
                12
    (1 row)
    ```

-   round(_date timestamp with time zone [, fmt text])

    描述：返回一个四舍五入到格式模型**fmt**指定的单位的日期。

    参数说明：
    - _date：输入的日期。
    - fmt：为可选参数，表示输出的格式，缺省值为'DDD'，取值如下：
    **可以指定的格式日期如下所示**
    |格式模型|单位|
    |:---|:---|
    |Y,YY,YYY,YYYY, <br> SYYYY,YEAR,SYEAR|Year|
    |I,IY,IYY,IYYY|Year (values including calendar weeks, in compliance with the ISO standard)|
    |Q|Quarter|
    |WW|Week (first day of the year)|
    |IW|Week (Monday of that week)|
    |W|Week (first weekday on which the first day of the month falls)|
    |DAY,DY,D|Week (Sunday of that week)|
    |MONTH,MON,MM,RM|Month|
    |CC,SCC|Century|
    |DDD,DD,J|Day|
    |HH,HH12,HH24|Hour|
    |MI|Minute|

    返回值类型：text

    示例：

    ```
    openGauss=# select round(date'2022-08-19', 'MM');
            round
    ---------------------
    2022-09-01 00:00:00
    (1 row)

    openGauss=# select round(date'2022-08-19', 'YYYY');
            round
    ---------------------
    2023-01-01 00:00:00
    (1 row)

    ```

-   round(date timestamp with time zone)

    描述：返回一个四舍五入的日期。日期格式为**DDD**。

    返回值类型：text

    示例：

    ```
    openGauss=# select round(timestamp'2022-08-19 15:00:00');
            round
    ---------------------
    2022-08-20 00:00:00
    (1 row)

    openGauss=# select round(timestamp'2022-08-19 11:00:00');
            round
    ---------------------
    2022-08-19 00:00:00
    (1 row)

    ```

-   trunc(value timestamp without time zone)

    描述：返回一个被截断的日期。日期格式为**DDD**。

    返回值类型：text

    示例：

    ```
    openGauss=# -- 这里默认的格式为DDD，即将日之前的所有时间相关数据全部清空，只保留日期及之后的月、年等部分。
    openGauss=# select trunc(TIMESTAMP WITHOUT TIME ZONE '2004-10-19 10:23:54')  = '2004-10-19 00:00';
    ?column?
    ----------
    t
    (1 row)

    ```

-   orafce.months_between(TIMESTAMP WITH TIME ZONE,TIMESTAMP WITH TIME ZONE)

    描述：返回两个日期之间的月数（TIMESTAMP WITH TIME ZONE版本）。

    返回值类型：text

    示例：

    ```
    openGauss=# select orafce.months_between('2023-01-01 00:00:00'::timestamptz, '2022-01-01 00:00:00'::timestamptz);
    months_between
    ----------------
                12
    (1 row)


    ```

-   orafce.months_between(TIMESTAMP WITHOUT TIME ZONE,TIMESTAMP WITHOUT TIME ZONE)

    描述：返回两个日期之间的月数（TIMESTAMP WITHOUT TIME ZONE版本）。

    返回值类型：text

    示例：

    ```
    openGauss=# select orafce.months_between('2023-01-01 00:00:00'::timestamp, '2022-01-01 00:00:00'::timestamp);
    months_between
    ----------------
                12
    (1 row)


    ```

-   orafce.to_char(_date timestamp)

    描述：将时间戳转换为字符串。

    参数说明：
    - _date：要转换为字符串的时间戳。

    返回值类型：text

    示例：
    ```
    openGauss=# select orafce.to_char('2022-01-01 15:00:00'::timestamp);
        to_char
    ---------------------
    2022-01-01 15:00:00
    (1 row)

    ```

-   orafce.sessiontimezone()

    描述：获取会话的时间区域。

    返回值类型：text

    示例：
    ```
    openGauss=# select orafce.sessiontimezone();
    sessiontimezone
    -----------------
    PRC
    (1 row)

    ```

-   orafce.dbtimezone()

    描述：获取服务器的时间区域。

    返回值类型：text

    示例：
    ```
    dbtimezone
    ------------
    GMT
    (1 row)

    ```

-   orafce.add_days_to_timestamp(t orafce.date, d smallint/integer/bigint/numeric)

    描述：为一个时间戳添加指定的天数。

    参数描述：

    - t：时间戳，本质是timestamp(0)。

    - d：要增加的天数。可以是smallint、integer、bigint或numeric类型的其中任意一种。

    返回值类型：timestamp

    示例：

    ```
    openGauss=# select orafce.add_days_to_timestamp(timestamp '2020-01-01', 1);
    add_days_to_timestamp
    -----------------------
    2020-01-02 00:00:00
    (1 row)

    openGauss=# select orafce.add_days_to_timestamp(timestamp '2020-01-01', 100);
    add_days_to_timestamp
    -----------------------
    2020-04-10 00:00:00
    (1 row)

    openGauss=# select orafce.add_days_to_timestamp(timestamp '2020-01-01', 365);
    add_days_to_timestamp
    -----------------------
    2020-12-31 00:00:00
    (1 row)

    openGauss=# select orafce.add_days_to_timestamp(timestamp '2020-01-01', 366);
    add_days_to_timestamp
    -----------------------
    2021-01-01 00:00:00
    (1 row)

    openGauss=# select orafce.add_days_to_timestamp(timestamp '2020-01-01', -1);
    add_days_to_timestamp
    -----------------------
    2019-12-31 00:00:00
    (1 row)

    ```

-   orafce.subtract(t orafce.date, d smallint/integer/bigint/numeric)

    描述：为一个时间戳减去指定的天数。

    参数描述：

    - t：时间戳，本质是timestamp(0)。

    - d：要减去的天数。可以是smallint、integer、bigint或numeric类型的其中任意一种。

    返回值类型：timestamp

    示例：

    ```
    openGauss=# select orafce.subtract(timestamp '2020-01-01', 1);
        subtract
    ---------------------
    2019-12-31 00:00:00
    (1 row)

    openGauss=# select orafce.subtract(timestamp '2020-01-01', 100);
        subtract
    ---------------------
    2019-09-23 00:00:00
    (1 row)

    openGauss=# select orafce.subtract(timestamp '2020-01-01', 365);
        subtract
    ---------------------
    2019-01-01 00:00:00
    (1 row)

    openGauss=# select orafce.subtract(timestamp '2020-01-01', 366);
        subtract
    ---------------------
    2018-12-31 00:00:00
    (1 row)

    openGauss=# select orafce.subtract(timestamp '2020-01-01', -1);
        subtract
    ---------------------
    2020-01-02 00:00:00
    (1 row)

    ```

-   orafce.subtract(left orafce.date, right orafce.date)

    描述：两个时间戳相减，返回相差的天数。

    返回值类型：double

    示例：

    ```
    openGauss=# select orafce.subtract(timestamp '2020-01-01', timestamp '2022-03-03');
    subtract
    ----------
        -792
    (1 row)

    openGauss=# select orafce.subtract(timestamp '2020-01-01', timestamp '2021-01-01');
    subtract
    ----------
        -366
    (1 row)

    openGauss=# select orafce.subtract(timestamp '2021-01-01', timestamp '2020-01-01');
    subtract
    ----------
        366
    (1 row)

    openGauss=# select orafce.subtract(timestamp '2022-09-01', timestamp '2022-08-01');
    subtract
    ----------
        31
    (1 row)

    ```

-   orafce.add_months(t TIMESTAMP WITH TIME ZONE,m INTEGER)

    描述：为一个时间戳增加指定的月数。

    参数说明：
    - t：时间戳。
    - m：要增加的月数。

    返回值类型：timestamp

    示例：

    ```
    openGauss=# select orafce.add_months(timestamp '2022-09-01', 3);
        add_months
    ---------------------
    2022-12-01 00:00:00
    (1 row)

    openGauss=# select orafce.add_months(timestamp '2022-09-01', -3);
        add_months
    ---------------------
    2022-06-01 00:00:00
    (1 row)

    openGauss=# select orafce.add_months(timestamp '2022-09-01', 12);
        add_months
    ---------------------
    2023-09-01 00:00:00
    (1 row)

    openGauss=# select orafce.add_months(timestamp '2022-09-01', 100);
        add_months
    ---------------------
    2031-01-01 00:00:00
    (1 row)

    ```

-   orafce.last_day(t TIMESTAMPTZ)

    描述：返回指定时间戳中指定月的最后一天的日期。

    参数说明：
    - t：书剑戳

    返回值类型：timestamp

    示例：

    ```
    openGauss=# select orafce.last_day(timestamp '2022-09-01');
        last_day
    ---------------------
    2022-09-30 00:00:00
    (1 row)

    openGauss=# select orafce.last_day(timestamp '2020-02-01');
        last_day
    ---------------------
    2020-02-29 00:00:00
    (1 row)

    openGauss=# select orafce.last_day(timestamp '2020-08-15');
        last_day
    ---------------------
    2020-08-31 00:00:00
    (1 row)

    ```

-   orafce.next_day(ct TIMESTAMP WITH TIME ZONE, day INTEGER)

    描述：返回一个时间戳，这个时间戳表示从ct开始算起，下一个星期几的日期。

    参数说明：

    - ct：起始时间戳。

    - day：表示星期数，取值范围为[1, 7]，其中1表示周日，2表示周一，以此类推。

    返回值类型：TIMESTAMP WITH TIME ZONE

    示例：
    ```
    openGauss=# -- 2022-08-01是星期一，day表示星期天，所以对于2022-08-01来说，下一个星期天就是本周的星期天，即2022-08-07
    openGauss=# select orafce.next_day(timestamp with time zone'2022-08-01', 1);
        next_day
    ---------------------
    2022-08-07 00:00:00
    (1 row)

    openGauss=# -- 2表示周一，所以下一次周一的时间点是2022-08-08
    openGauss=# select orafce.next_day(timestamp with time zone'2022-08-01', 2);
        next_day
    ---------------------
    2022-08-08 00:00:00
    (1 row)

    openGauss=# -- 3表示周二，所以下一次周二的时间点是2022-08-02
    openGauss=# select orafce.next_day(timestamp with time zone'2022-08-01', 3);
        next_day
    ---------------------
    2022-08-02 00:00:00
    (1 row)

    ```

-   orafce.next_day(ct TIMESTAMP WITH TIME ZONE, day TEXT)

    描述：返回一个时间戳，这个时间戳表示从ct开始算起，下一个星期几的日期。

    参数说明：

    - ct：起始时间戳。

    - day：表示星期几。取值范围为：[SUNDAY, SUN, MONDAY, MON, TUESDAY, TUE, WEDNESDAY, WED, THURSDAY, THU, FRIDAY, FRI, SATURDAY, SAT]，大小写可忽略。

    返回值类型：TIMESTAMP WITH TIME ZONE

    示例：
    ```
    openGauss=# select orafce.next_day(timestamp with time zone'2022-08-01', 'Sun');
        next_day
    ---------------------
    2022-08-07 00:00:00
    (1 row)

    openGauss=# select orafce.next_day(timestamp with time zone'2022-08-01', 'Mon');
        next_day
    ---------------------
    2022-08-08 00:00:00
    (1 row)

    openGauss=# select orafce.next_day(timestamp with time zone'2022-08-01', 'Tue');
        next_day
    ---------------------
    2022-08-02 00:00:00
    (1 row)

    ```
