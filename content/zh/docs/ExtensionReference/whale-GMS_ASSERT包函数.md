# GMS_ASSERT包函数

-   gms_assert.enquote_literal(str varchar)

    描述：添加前导和尾随引号，验证所有单引号是否与相邻的单引号成对出现。

    参数说明：
    - str：输入字符串。

    返回值类型：varchar

    示例：

    ```
    openGauss=# select 'test' as src, gms_assert.enquote_literal('test');
    src  | enquote_literal
    ------+-----------------
    test | 'test'
    (1 row)

    openGauss=# select E'\'test' as src, gms_assert.enquote_literal(E'\'test');
    src  | enquote_literal
    -------+-----------------
    'test | '''test'
    (1 row)

    ```

-   gms_assert.enquote_name(str varchar [, loweralize boolean])

    描述：将名称用双引号括起来。

    参数说明：
    - str：输入字符串。
    - loweralize：是否转化为全小写，可缺省，缺省时为true。

    返回值类型：varchar

    示例：

    ```
    openGauss=# select gms_assert.enquote_name('Test');
    enquote_name
    --------------
    "test"
    (1 row)

    openGauss=# select gms_assert.enquote_name('Test', false);
    enquote_name
    --------------
    "Test"
    (1 row)

    ```

-   gms_assert.noop(str varchar)

    描述：直接返回字符串而不进行任何检查。

    参数说明：
    - str：输入字符串。

    返回值类型：varchar

    示例：

    ```
    openGauss=# select gms_assert.noop('Test');
    noop
    ------
    Test
    (1 row)

    ```

-   gms_assert.schema_name(str varchar)

    描述：验证输入字符串是否为现有schema名称。如果是，则正常执行，如果不是，则会报错。

    参数说明：
    - str：输入字符串。

    返回值类型：varchar

    示例：

    ```
    openGauss=# select gms_assert.schema_name('Test');
    ERROR:  invalid schema name
    CONTEXT:  referenced column: schema_name
    openGauss=# select gms_assert.schema_name('pg_catalog');
    schema_name
    -------------
    pg_catalog
    (1 row)

    ```

-   gms_assert.object_name(str varchar)

    描述：验证输入字符串是否为现有表对象名称。如果是，则正常执行，如果不是，则会报错。

    参数说明：
    - str：输入字符串。

    返回值类型：varchar

    示例：

    ```
    openGauss=# select gms_assert.object_name('text');
    ERROR:  invalid object name
    CONTEXT:  referenced column: object_name
    openGauss=# select gms_assert.object_name('pg_catalog.pg_class');
        object_name
    ---------------------
    pg_catalog.pg_class
    (1 row)

    ```

-   gms_assert.simple_sql_name(str varchar)

    描述：验证指定的字符串作为单个标识符的格式是否合适。如果是，则正常执行，如果不是，则会报错。

    参数说明：
    - str：输入字符串。

    返回值类型：record

    示例：

    ```
    openGauss=# select gms_assert.simple_sql_name('"Aaa dghh shsh"');
    simple_sql_name
    -----------------
    "Aaa dghh shsh"
    (1 row)

    openGauss=# select gms_assert.simple_sql_name('ajajaj -- ajaj');
    ERROR:  string is not simple SQL name
    CONTEXT:  referenced column: simple_sql_name

    ```

-   gms_assert.qualified_sql_name(str varchar)

    描述：验证指定的字符串作为标识符的格式是否合适。如果是，则正常执行，如果不是，则会报错。

    参数说明：
    - str：输入字符串。

    返回值类型：void

    示例：
    ```
    openGauss=# select gms_assert.qualified_sql_name('aaa.bbb.ccc."aaaa""aaa"');
    qualified_sql_name
    -------------------------
    aaa.bbb.ccc."aaaa""aaa"
    (1 row)

    openGauss=# select gms_assert.qualified_sql_name('aaa.bbb.cc%c."aaaa""aaa"');
    ERROR:  string is not qualified SQL name
    CONTEXT:  referenced column: qualified_sql_name

    ```
