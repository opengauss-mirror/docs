# 系统信息函数

-   orafce.get_major_version()

    描述：返回当前版本，即openGauss的PACKAGE_STRING：Postgres-XC 1.1。

    返回值：text

    示例：

    ```
    openGauss=# select orafce.get_major_version();
    get_major_version
    -------------------
    Postgres-XC 1.1
    (1 row)

    ```

-   orafce.get_major_version_num()

    描述：返回当前版本号，即openGauss的PG_MAJORVERSION：9.2。

    返回值：text

    示例：

    ```
    openGauss=# select orafce.get_major_version_num();
    get_major_version_num
    -----------------------
    9.2
    (1 row)

    ```

-   orafce.get_full_version_num()

    描述：返回当前版本号（包括修订号），即openGauss的PG_VERSION：9.2.4。

    返回值：text

    示例：

    ```
    openGauss=# select orafce.get_full_version_num();
    get_full_version_num
    ----------------------
    9.2.4
    (1 row)

    ```

-   orafce.get_platform()

    描述：获取当前系统平台，根据平台返回'32bit'或'64bit'。

    返回值：text

    示例：

    ```
    openGauss=# select orafce.get_platform();
    get_platform
    --------------
    64bit
    (1 row)

    ```

-   orafce.get_status()

    描述：获取当前数据库的版本，如果是debug版本就返回'Debug'，否则返回'Production'。

    返回值：text

    示例：

    ```
    openGauss=# -- 此处是debug版本的openGauss
    openGauss=# select orafce.get_status();
    get_status
    ------------
    Debug
    (1 row)

    openGauss=# -- 此处是release版本的openGauss
    openGauss=# select orafce.get_status();
    get_status 
    ------------
    Production
    (1 row)

    ```