# 时间和日期处理函数和操作符<a name="ZH-CN_TOPIC_0289900496"></a>

## 时间/日期函数<a name="zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_sd0d47140cdd048c1964ed53f9858f436"></a>

相比于原始的openGauss，dolphin对于时间/日期函数的修改主要为:
1. 新增```dayofmonth/dayofweek/dayofyear/hour/microsecond/minute/quarter/second/weekday/weekofyear/year/current_date```函数。

-   dayofmonth\(timestamp\)

    描述：获取日期/时间值中天数的值

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT dayofmonth(timestamp '2001-02-16 20:38:40');
     date_part
    -----------
            16
    (1 row)
    ```

-   dayofweek\(timestamp\)

    描述：获取日期/时间值中星期的标号（1代表星期日，2代表星期一，以此类推，7代表星期六）

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT dayofweek(timestamp '2001-02-16 20:38:40');
     ?column?
    ----------
            6
    (1 row)
    ```

-   dayofyear\(timestamp\)

    描述：获取日期/时间值中一年的第几天

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT dayofyear(timestamp '2001-02-16 20:38:40');
     date_part
    -----------
            47
    (1 row)
    ```

-   hour\(timestamp\)

    描述：获取日期/时间值中小时的值

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT hour(timestamp '2001-02-16 20:38:40');
     date_part
    -----------
            20
    (1 row)
    ```

-   microsecond\(timestamp\)

    描述：获取日期/时间值中微秒的值

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT microsecond(timestamp '2001-02-16 20:38:40.123');
     date_part
    -----------
        123000
    (1 row)
    ```

-   minute\(timestamp\)

    描述：获取日期/时间值中分钟的值

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT minute(timestamp '2001-02-16 20:38:40.123');
     date_part
    -----------
            38
    (1 row)
    ```

-   quarter\(timestamp\)

    描述：获取日期/时间值中的季度数，从1到4

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT quarter(timestamp '2001-02-16 20:38:40.123');
     date_part
    -----------
            1
    (1 row)
    ```

-   second\(timestamp\)

    描述：获取日期/时间值中的秒数

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT second(timestamp '2001-02-16 20:38:40.123');
     date_part
    -----------
           40
    (1 row)
    ```

-   weekday\(timestamp\)

    描述：获取日期/时间值中是一周中的星期几（0代表星期一，1代表星期二，以此类推，6代表星期日）

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

    描述：获取日期/时间值中是一年的第几周

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

    描述：获取日期/时间值中的年数

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
