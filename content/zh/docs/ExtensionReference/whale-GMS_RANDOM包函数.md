# GMS_RANDOM包函数

-   gms_random.initialize(seed int)

    描述：使用指定的种子值初始化随机数的生成。

    参数说明：
    - seed：要初始化的随机数种子。

    返回值类型：void

    示例：

    ```
    openGauss=# select gms_random.initialize(100);
    initialize
    ------------

    (1 row)

    ```

-   gms_random.normal()

    描述：返回标准正态分布中的随机数。

    返回值类型：float8

    示例：

    ```
    openGauss=# select gms_random.normal();
        normal
    -------------------
    -.903881233319738
    (1 row)

    ```

-   gms_random.random()

    描述：生成随机数值。

    返回值类型：int

    示例：

    ```
    openGauss=# select gms_random.random();
    random
    -------------
    -1361379260
    (1 row)

    ```

-   gms_random.seed(seed integer/text)

    描述：用于重置随机种子，种子可以是一个interger类型的数值，也可以是一个text类型的字符串。

    参数说明：
    - seed：要初始化的随机种子；可以是整数或者字符串。

    返回值类型：void

    示例：

    ```
    openGauss=# select gms_random.seed(101);
    seed
    ------

    (1 row)

    openGauss=# select gms_random.seed('test');
    seed
    ------

    (1 row)

    ```

-   gms_random.string(opt text, len int)

    描述：返回指定模式和指定长度的随机字符串。

    参数说明：
    - opt：指定随机字符串的模式，含义如下表所示：
        |opt的值|生成的字符串|
        |:---|:---|
        |'u', 'U'|只有大写字母|
        |'l', 'L'|只有小写字母|
        |'a', 'A'|大小写字母混合|
        |'x', 'X'|大写字母和数字混合|
        |'p', 'P'|所有可显示的字符|
    - len：指定随机字符串的长度。

    返回值类型：text

    示例：

    ```
    openGauss=# select gms_random.string('u', 8);
    string
    ----------
    MEKYFBWF
    (1 row)

    openGauss=# select gms_random.string('l', 8);
    string
    ----------
    mekyfbwf
    (1 row)

    openGauss=# select gms_random.string('a', 8);
    string
    ----------
    zjvXkcSl
    (1 row)

    openGauss=# select gms_random.string('x', 8);
    string
    ----------
    H6EX71U8
    (1 row)

    openGauss=# select gms_random.string('p', 8);
    string
    ----------
    /tcNu4:o
    (1 row)

    ```

-   gms_random.terminate()

    描述：结束gms_random包的使用。该函数只是适配用，没有任何实际的作用。

    返回值类型：void

    示例：

    ```
    openGauss=# select gms_random.terminate();
    terminate
    -----------

    (1 row)

    ```

-   gms_random.value([low double precision, high double precision])

    描述：获取在[low, high)范围内的随机数,可以省略范围，此时会获取[0, 1)之间的随机数。

    参数说明：
    - low：随机数的下限，可取。
    - high：随机数的上限，不可取。

    返回值类型：bool

    示例：

    ```
    openGauss=# select gms_random.seed(100);
    seed
    ------

    (1 row)

    openGauss=# select gms_random.value(1.41, 1.42);
        value
    ------------------
    1.41183029190171
    (1 row)

    openGauss=# select gms_random.value();
        value
    -----------------
    .18302919017151
    (1 row)

    ```
