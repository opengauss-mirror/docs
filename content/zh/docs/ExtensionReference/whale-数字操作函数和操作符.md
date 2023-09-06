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
