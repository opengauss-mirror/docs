# 数字操作函数和操作符

-   sinh(float8)

    描述：双曲正弦函数。

    示例：

    ```
    openGauss=# select sinh(1);
        sinh
    -----------------
    1.1752011936438
    (1 row)

    openGauss=# select sinh(0);
    sinh
    ------
        0
    (1 row)

    ```

-   cosh(float8)

    描述：双曲余弦函数。

    示例：

    ```
    openGauss=# select cosh(1);
        cosh
    ------------------
    1.54308063481524
    (1 row)

    openGauss=# select cosh(0);
    cosh
    ------
        1
    (1 row)

    ```

-   tanh(float8)

    描述：双曲正切函数。

    示例：

    ```
    openGauss=# select tanh(1);
        tanh
    ------------------
    .761594155955765
    (1 row)

    openGauss=# select tanh(0);
    tanh
    ------
        0
    (1 row)


    ```

-   nanvl(f1 float4, f2 float4)

    描述：如果f1是nan，返回f2，否则返回f1。

    返回值类型：float4

    示例：

    ```
    openGauss=# select nanvl('nan'::float4, 1::float4);
    nanvl
    -------
        1
    (1 row)

    openGauss=# select nanvl('nan'::float4, 'nan'::float4);
    nanvl
    -------
    NaN
    (1 row)

    openGauss=# select nanvl(2::float4, 1::float4);
    nanvl
    -------
        2
    (1 row)

    ```

-   nanvl(f1 float8, f2 float8)

    描述：如果f1是nan，返回f2，否则返回f1。

    返回值类型：float8

    示例：

    ```
    openGauss=# select nanvl('nan'::float8, 1::float8);
    nanvl
    -------
        1
    (1 row)

    openGauss=# select nanvl('nan'::float8, 'nan'::float8);
    nanvl
    -------
    NaN
    (1 row)

    openGauss=# select nanvl(2::float8, 1::float8);
    nanvl
    -------
        2
    (1 row)

    ```

-   nanvl(n1 numeric, n2 numeric)

    描述：如果n1是nan，返回n2，否则返回n1。

    返回值类型：numeric

    示例：

    ```
    openGauss=# select nanvl('nan'::numeric, 1::numeric);
    nanvl
    -------
        1
    (1 row)

    openGauss=# select nanvl('nan'::numeric, 'nan'::numeric);
    nanvl
    -------
    NaN
    (1 row)

    openGauss=# select nanvl(2::numeric, 1::numeric);
    nanvl
    -------
        2
    (1 row)

    ```

-   orafce.trunc(num float4/float8, precision int)

    描述：对一个数进行截断。

    参数说明：

    - num：表示要被截断的数字。

    - precision：表示保留的小数位，precision后面的小数会全部清空。

    返回值类型：numeric

    示例：

    ```
    openGauss=# select orafce.trunc(1.264::float4, 1);
    trunc
    -------
    1.2
    (1 row)

    openGauss=# select orafce.trunc(1.264::float4, 2);
    trunc
    -------
    1.26
    (1 row)

    openGauss=# select orafce.trunc(1.264::float4, 4);
    trunc
    --------
    1.2640
    (1 row)

    openGauss=# select orafce.trunc(1.264::float8, 1);
    trunc
    -------
    1.2
    (1 row)

    openGauss=# select orafce.trunc(1.264::float8, 2);
    trunc
    -------
    1.26
    (1 row)

    openGauss=# select orafce.trunc(1.264::float8, 4);
    trunc
    --------
    1.2640
    (1 row)

    ```

-   orafce.round(num float4/float8, precision int)

    描述：对一个数num进行四舍五入。

    参数说明：

    - num：表示要被修改的数字。

    - precision：表示保留的小数位，precision后面的小数会全部清空。

    返回值类型：numeric

    示例：

    ```
    openGauss=# select orafce.round(1.264::float4, 1);
    round
    -------
    1.3
    (1 row)

    openGauss=# select orafce.round(1.264::float4, 2);
    round
    -------
    1.26
    (1 row)

    openGauss=# select orafce.round(1.264::float4, 4);
    round
    --------
    1.2640
    (1 row)

    openGauss=# select orafce.round(1.264::float8, 1);
    round
    -------
    1.3
    (1 row)

    openGauss=# select orafce.round(1.264::float8, 2);
    round
    -------
    1.26
    (1 row)

    openGauss=# select orafce.round(1.264::float8, 4);
    round
    --------
    1.2640
    (1 row)


    ```

-   orafce.numtodsinterval(precision double, unit text)

    描述：将数值类型转换为间隔类型。

    参数说明：

    - precision：要被转换为间隔类型的数字。

    - unit：间隔单位，比如'SECOND', 'DAY', 'MONTH', 'YEAR'等。

    返回值类型：interval

    示例：

    ```
    openGauss=# select orafce.numtodsinterval(1.2, 'YEAR');
        numtodsinterval
    -----------------------
    1 year 2 mons 12 days
    (1 row)

    openGauss=# select orafce.numtodsinterval(1.2, 'MONTH');
    numtodsinterval
    -----------------
    1 mon 6 days
    (1 row)

    openGauss=# select orafce.numtodsinterval(1.2, 'DAY');
    numtodsinterval
    -----------------
    1 day 04:48:00
    (1 row)

    openGauss=# select orafce.numtodsinterval(1.2, 'WEEK');
    numtodsinterval
    -----------------
    8 days 09:36:00
    (1 row)

    openGauss=# select orafce.numtodsinterval(1.2, 'HOUR');
    numtodsinterval
    -----------------
    01:12:00
    (1 row)

    openGauss=# select orafce.numtodsinterval(1.2, 'MIN');
    numtodsinterval
    -----------------
    00:01:12
    (1 row)

    openGauss=# select orafce.numtodsinterval(1.2, 'SECOND');
    numtodsinterval
    -----------------
    00:00:01.2
    (1 row)

    ```

-   bitand(l bigint, r bigint)

    描述：计算两个数字与运算\(&\)的结果。

    返回值类型：bigint。

    示例：

    ```
    openGauss=# SELECT bitand(127::int8, 63::int8);
    bitand
    --------
        63
    (1 row)

    ```

-   to_number(num numeric [, fmt numeric])

    描述：将num转化为指定格式的numeric类型。

    参数说明：

    - num：待转化的数字。

    - fmt：可选参数，表示格式，该参数会决定返回的numeric的格式。

    - 返回值类型：numeric

    示例：
    ```
    openGauss=# SELECT to_number(1210.73::numeric, 9999.99::numeric);
    to_number
    -----------
    1210.73
    (1 row)

    openGauss=# SELECT to_number(1210.73::numeric);
    to_number
    -----------
    1210.73
    (1 row)

    ```

    
