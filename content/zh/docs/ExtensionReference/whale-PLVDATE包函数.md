# PLVDATE包函数

-   plvdate.add_bizdays(date_value date, days int)

    描述：将给定日期加上指定数量的工作日，并返回经过这些工作日之后的结果日期。

    参数说明：

    - date_value：要添加的日期。

    - days：工作日天数。

    返回值类型：date

    示例：
    ```
    openGauss=# -- 2022-01-07是周五，三个工作日之后就是下周三，即2022-01-12
    openGauss=# select plvdate.add_bizdays('2022-01-07', 3);
    add_bizdays
    -------------
    2022-01-12
    (1 row)

    openGauss=# -- 2022-01-03是周一，三个工作日之后就是周四，即2022-01-06
    openGauss=# select plvdate.add_bizdays('2022-01-03', 3);
    add_bizdays
    -------------
    2022-01-06
    (1 row)

    ```

-   plvdate.nearest_bizday(d date)

    描述：返回一个离指定日期最近的工作日的日期（两个工作日之间向下取）。

    参数说明：

    - d：作为起点的日期。

    返回值类型：date

    示例：
    ```
    openGauss=# -- 2022-01-13是周四，夹在两个工作日之间，向下取取2022-01-12
    openGauss=# select plvdate.nearest_bizday('2022-01-13');
    nearest_bizday
    ----------------
    2022-01-12
    (1 row)

    openGauss=# -- 2022-01-16是周日，最近的工作日是下周一，即2022-01-17
    openGauss=# select plvdate.nearest_bizday('2022-01-16');
    nearest_bizday
    ----------------
    2022-01-17
    (1 row)

    ```

-   plvdate.next_bizday(d date)

    描述：返回当前日期的下一个工作日。

    参数说明：

    - d：作为起点的日期。

    返回值类型：date

    示例：
    ```
    openGauss=# -- 2022-01-13是周四，下一个工作日是周五
    openGauss=# select plvdate.next_bizday('2022-01-13');
    next_bizday
    -------------
    2022-01-14
    (1 row)

    openGauss=# -- 2022-01-15是周六，下一个工作日是下周一
    openGauss=# select plvdate.next_bizday('2022-01-15');
    next_bizday
    -------------
    2022-01-17
    (1 row)

    ```

-   plvdate.include_start([is_include_start bool])

    描述：当查询两个日期的工作日时，是否包含起始的日期。

    参数描述：

    - is_include_start：可选参数，表示当查询两个日期的工作日时是否包含起始的日期，true表示是，false表示不是，缺省时为true。

    返回值类型：void

    示例：
    ```
    openGauss=# select plvdate.include_start();
    include_start
    ---------------

    (1 row)

    openGauss=# select plvdate.include_start(true);
    include_start
    ---------------

    (1 row)

    openGauss=# select plvdate.include_start(false);
    include_start
    ---------------

    (1 row)

    ```

-   plvdate.bizdays_between(d1 date, d2 date)

    描述：返回两个日期之间的工作日天数。右边界是闭区间，左边界是否为闭区间由include_start决定。

    参数说明：

    - d1：日期边界。

    - d2：日期边界。

    返回值类型：int

    示例：
    ```
    openGauss=# select plvdate.include_start(true);
    include_start
    ---------------

    (1 row)

    openGauss=# -- 周一到周五有5个工作日
    openGauss=# select plvdate.bizdays_between('2022-01-03', '2022-01-07');
    bizdays_between
    -----------------
                5
    (1 row)

    openGauss=# -- 周六到周日有0个工作日
    openGauss=# select plvdate.bizdays_between('2022-01-08', '2022-01-09');
    bizdays_between
    -----------------
                0
    (1 row)

    openGauss=# -- 周一到下下周一有11个工作日
    openGauss=# select plvdate.bizdays_between('2022-01-03', '2022-01-17');
    bizdays_between
    -----------------
                11
    (1 row)

    openGauss=# select plvdate.include_start(false);
    include_start
    ---------------

    (1 row)

    openGauss=# -- 周一到周五有5个工作日，但现在不包含起始日期，所以为4
    openGauss=# select plvdate.bizdays_between('2022-01-03', '2022-01-07');
    bizdays_between
    -----------------
                4
    (1 row)

    openGauss=# select plvdate.bizdays_between('2022-01-08', '2022-01-09');
    bizdays_between
    -----------------
                0
    (1 row)

    openGauss=# -- 周一到下下周一有11个工作日，但现在不包含起始日期，所以为10
    openGauss=# select plvdate.bizdays_between('2022-01-03', '2022-01-17');
    bizdays_between
    -----------------
                10
    (1 row)

    ```

-   plvdate.including_start()

    描述：查询include_start的状态。

    返回值类型：bool

    示例：
    ```
    openGauss=# select plvdate.include_start(true);
    include_start
    ---------------

    (1 row)

    openGauss=# select plvdate.including_start();
    including_start
    -----------------
    t
    (1 row)

    openGauss=# select plvdate.include_start(false);
    include_start
    ---------------

    (1 row)

    openGauss=# select plvdate.including_start();
    including_start
    -----------------
    f
    (1 row)

    ```

-   plvdate.noinclude_start()

    描述：相当于plvdate.include_start(false)的效果，表示取消include_start。

    返回值类型：void

    示例：
    ```
    openGauss=# select plvdate.include_start(true);
    include_start
    ---------------

    (1 row)

    openGauss=# select plvdate.including_start();
    including_start
    -----------------
    t
    (1 row)

    openGauss=# select plvdate.noinclude_start();
    noinclude_start
    -----------------

    (1 row)

    openGauss=# select plvdate.including_start();
    including_start
    -----------------
    f
    (1 row)

    ```

-   plvdate.prev_bizday(d date)

    描述：返回当前日期的上一个工作日。

    参数说明：

    - d：作为起点的日期。

    返回值类型：date

    示例：
    ```
    openGauss=# select plvdate.prev_bizday('2022-01-08');
    prev_bizday
    -------------
    2022-01-07
    (1 row)

    openGauss=# select plvdate.prev_bizday('2022-01-09');
    prev_bizday
    -------------
    2022-01-07
    (1 row)

    openGauss=# select plvdate.prev_bizday('2022-01-07');
    prev_bizday
    -------------
    2022-01-06
    (1 row)

    ```

-   plvdate.isbizday(d date)

    描述：判断指定日期是否为工作日。

    参数说明：

    - d：指定的日期。

    返回值类型：bool

    示例：
    ```
    openGauss=# select plvdate.isbizday('2022-01-07');
    isbizday
    ----------
    t
    (1 row)

    openGauss=# select plvdate.isbizday('2022-01-08');
    isbizday
    ----------
    f
    (1 row)

    openGauss=# select plvdate.isbizday('2022-01-09');
    isbizday
    ----------
    f
    (1 row)

    ```

-   plvdate.set_nonbizday(day text)

    描述：将指定的星期设置为非工作日。

    参数说明：

    day：指定星期几。取值范围为["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", NULL]。

    返回值类型：void

    示例：
    ```
    openGauss=# select plvdate.isbizday('2023-10-02');
    isbizday
    ----------
    t
    (1 row)

    openGauss=# select plvdate.set_nonbizday('Monday');
    set_nonbizday
    ---------------

    (1 row)

    openGauss=# select plvdate.isbizday('2023-10-02');
    isbizday
    ----------
    f
    (1 row)

    ```

-   plvdate.unset_nonbizday(day text)

    描述：将指定的星期从非工作日中剔除。

    参数说明：

    - day：指定星期几。取值范围为["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", NULL]。

    返回值类型：void

    示例：
    ```
    openGauss=# -- 上一个用例已经将Monday设置为非工作日了
    openGauss=# select plvdate.unset_nonbizday('Monday');
    unset_nonbizday
    -----------------

    (1 row)

    openGauss=# select plvdate.isbizday('2023-10-02');
    isbizday
    ----------
    t
    (1 row)

    ```

-   plvdate.set_nonbizday(date_value date [, is_repeat bool])

    描述：将指定的日期设置为非工作日。

    参数说明：

    - date_value：要设置为非工作日的日期。

    - is_repeat：可选参数，如果为true，则每年的同一个日期都会被设置为非工作日，缺省时为false。

    返回值类型：void

    示例：
    ```
    openGauss=# select plvdate.set_nonbizday("date" '2020-05-05', false);
    set_nonbizday
    ---------------

    (1 row)

    openGauss=# select plvdate.isbizday('2020-05-05');
    isbizday
    ----------
    f
    (1 row)

    openGauss=# select plvdate.isbizday('2021-05-05');
    isbizday
    ----------
    t
    (1 row)

    openGauss=# select plvdate.set_nonbizday("date" '2020-05-05', true);
    set_nonbizday
    ---------------

    (1 row)

    openGauss=# select plvdate.isbizday('2021-05-05');
    isbizday
    ----------
    f
    (1 row)

    ```

-   plvdate.unset_nonbizday(date_value text， [, is_repeat bool])

    描述：将指定的日期从非工作日中剔除。

    参数说明：

    - date_value：指定日期。

    - is_repeat：可选参数，为true则取消往后每年同日期的非工作日。缺省值为false。

    返回值类型：void

    示例：
    ```
    openGauss=# select plvdate.set_nonbizday("date" '2020-05-05', true);
    set_nonbizday
    ---------------

    (1 row)

    openGauss=# select plvdate.isbizday('2020-05-05');
    isbizday
    ----------
    f
    (1 row)

    openGauss=# select plvdate.unset_nonbizday("date" '2020-05-05', true);
    unset_nonbizday
    -----------------

    (1 row)

    openGauss=# select plvdate.isbizday('2020-05-05');
    isbizday
    ----------
    t
    (1 row)

    openGauss=# select plvdate.isbizday('2021-05-05');
    isbizday
    ----------
    t
    (1 row)

    ```

-   plvdate.use_easter([used_easter bool])

    描述：表示是否将复活节周日和复活节周一视为非工作日。

    参数说明：

    - used_easter：可选参数，为true表示复活节周日和复活节周一视为非工作日，为false表示为工作日，缺省时为true。

    返回值类型：void

    示例：
    ```
    openGauss=# -- 2022-04-18是一个复活节星期一，所以为非工作日
    openGauss=# select plvdate.isbizday('2022-04-18');
    isbizday
    ----------
    f
    (1 row)

    openGauss=# select plvdate.use_easter(false);
    use_easter
    ------------

    (1 row)

    openGauss=# select plvdate.isbizday('2022-04-18');
    isbizday
    ----------
    t
    (1 row)

    openGauss=# select plvdate.use_easter(true);
    use_easter
    ------------

    (1 row)

    openGauss=# select plvdate.isbizday('2022-04-18');
    isbizday
    ----------
    f
    (1 row)

    ```

-   plvdate.unuse_easter()

    描述：表示取消复活节周日和复活节周一为非工作日。

    返回值类型：void

    示例：
    ```
    openGauss=# -- 2022-04-18是一个复活节星期一，所以为非工作日
    openGauss=# select plvdate.isbizday('2022-04-18');
    isbizday
    ----------
    f
    (1 row)

    openGauss=# select plvdate.unuse_easter();
    unuse_easter
    --------------

    (1 row)

    openGauss=# select plvdate.isbizday('2022-04-18');
    isbizday
    ----------
    t
    (1 row)

    ```

-   plvdate.using_easter()

    描述：返回是否正在使用复活节周日和复活节周一为非工作日。

    返回值类型：bool

    示例：
    ```
    openGauss=# select plvdate.using_easter();
    using_easter
    --------------
    f
    (1 row)

    openGauss=# select plvdate.use_easter();
    use_easter
    ------------

    (1 row)

    openGauss=# select plvdate.using_easter();
    using_easter
    --------------
    t
    (1 row)

    ```

-   plvdate.use_great_friday([used_great_friday bool])

    描述：表示是否把受难日作为非工作日.

    参数说明：

    - used_great_friday：可选参数，为true表示受难日作为非工作日，为false表示受难日作为工作日，缺省时为true。

    返回值类型：void

    示例：
    ```
    openGauss=# -- 2022-04-15是一个受难日，所以为非工作日
    openGauss=# select plvdate.isbizday('2022-04-15');
    isbizday
    ----------
    f
    (1 row)

    openGauss=# select plvdate.use_great_friday(false);
    use_great_friday
    ------------------

    (1 row)

    openGauss=# select plvdate.isbizday('2022-04-15');
    isbizday
    ----------
    t
    (1 row)

    openGauss=# select plvdate.use_great_friday(true);
    use_great_friday
    ------------------

    (1 row)

    openGauss=# select plvdate.isbizday('2022-04-15');
    isbizday
    ----------
    f
    (1 row)

    ```

-   plvdate.unuse_great_friday()

    描述：表示是否使用复活节周日和复活节周一，如果使用则复活节周日和复活节周一为非工作日.

    返回值类型：void

    示例：
    ```
    openGauss=# -- 2022-04-15是一个受难日，所以为非工作日
    openGauss=# select plvdate.isbizday('2022-04-15');
    isbizday
    ----------
    f
    (1 row)

    openGauss=# select plvdate.unuse_great_friday();
    unuse_great_friday
    --------------------

    (1 row)

    openGauss=# select plvdate.isbizday('2022-04-15');
    isbizday
    ----------
    t
    (1 row)

    openGauss=# select plvdate.use_great_friday(true);
    use_great_friday
    ------------------

    (1 row)

    openGauss=# select plvdate.isbizday('2022-04-15');
    isbizday
    ----------
    f
    (1 row)

    ```

-   plvdate.using_great_friday()

    描述：返回是否正在使用受难日为非工作日。

    返回值类型：bool

    示例：
    ```
    openGauss=# select plvdate.using_great_friday();
    using_great_friday
    --------------------
    t
    (1 row)

    openGauss=# select plvdate.unuse_great_friday();
    unuse_great_friday
    --------------------

    (1 row)

    openGauss=# select plvdate.using_great_friday();
    using_great_friday
    --------------------
    f
    (1 row)

    ```

-   plvdate.version()

    描述：返回plvdate包的版本。

    返回值类型：cstring

    示例：
    ```
    openGauss=# select plvdate.version();
                        version
    -----------------------------------------------
    PostgreSQL PLVdate, version 3.7, October 2018
    (1 row)

    ```

-   plvdate.default_holidays(contry text)

    描述：设置默认法定假日为指定国家的法定假日。

    参数说明：

    contry：指定的国家，取值范围为["Czech", "Germany", "Poland", "Austria", "Slovakia", "Russia", "Gb", "Usa"]。

    返回值类型：void

    示例：
    ```
    openGauss=# select plvdate.isbizday('2023-05-09');
    isbizday
    ----------
    t
    (1 row)

    openGauss=# select plvdate.default_holidays('Russia');
    default_holidays
    ------------------

    (1 row)

    openGauss=# -- 俄罗斯每年的5月9日为胜利日，是俄罗斯的法定假日
    openGauss=# select plvdate.isbizday('2023-05-09');
    isbizday
    ----------
    f
    (1 row)

    ```

-   plvdate.days_inmonth(d date)

    描述：返回指定日期所在月有多少天。

    参数描述
    - d：指定日期。

    返回值类型：integer

    示例：
    ```
    openGauss=# select plvdate.days_inmonth('2023-02-01');
    days_inmonth
    --------------
            28
    (1 row)

    openGauss=# select plvdate.days_inmonth('2020-02-01');
    days_inmonth
    --------------
            29
    (1 row)

    openGauss=# select plvdate.days_inmonth('2020-08-01');
    days_inmonth
    --------------
            31
    (1 row)

    openGauss=# select plvdate.days_inmonth('2020-09-01');
    days_inmonth
    --------------
            30
    (1 row)

    openGauss=# select plvdate.days_inmonth('2020-07-01');
    days_inmonth
    --------------
            31
    (1 row)

    ```

-   plvdate.isleapyear(d date)

    描述：返回指定日期所在的年是否为闰年。

    参数描述
    - d：指定日期。

    返回值类型：bool

    示例：
    ```
    openGauss=# select plvdate.isleapyear('2023-02-01');
    isleapyear
    ------------
    f
    (1 row)

    openGauss=# select plvdate.isleapyear('2020-02-01');
    isleapyear
    ------------
    t
    (1 row)

    ```