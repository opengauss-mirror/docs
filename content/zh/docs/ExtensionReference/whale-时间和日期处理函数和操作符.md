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