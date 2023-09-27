# PLUNIT包函数

-   plunit.assert_true(condition boolean [, message varchar])

    描述：断言condition为真，否则报错。

    参数说明：

    - condition：断言的条件。

    - message：可选参数，条件为真时打印的信息。缺省时打印'plunit.assert_true exception'

    返回值类型：void

    示例：
    ```
    openGauss=# select plunit.assert_true(true);
    assert_true
    -------------

    (1 row)

    openGauss=# select plunit.assert_true(false);
    ERROR:  plunit.assert_true exception
    DETAIL:  Plunit.assertation fails (assert_true).
    CONTEXT:  referenced column: assert_true
    openGauss=# select plunit.assert_true(false, 'this is a message');
    ERROR:  this is a message
    DETAIL:  Plunit.assertation fails (assert_true).
    CONTEXT:  referenced column: assert_true
    ```

-   plunit.assert_false(condition boolean [, message varchar])

    描述：断言condition为假，否则报错。

    参数说明：

    - condition：断言的条件。

    - message：可选参数，条件为真时打印的信息。缺省时打印'plunit.assert_false exception'

    返回值类型：void

    示例：
    ```
    openGauss=# select plunit.assert_false(false);
    assert_false
    --------------

    (1 row)

    openGauss=# select plunit.assert_false(true);
    ERROR:  plunit.assert_false exception
    DETAIL:  Plunit.assertation fails (assert_false).
    CONTEXT:  referenced column: assert_false
    openGauss=# select plunit.assert_false(true, 'this is message');
    ERROR:  this is message
    DETAIL:  Plunit.assertation fails (assert_false).
    CONTEXT:  referenced column: assert_false
    ```

-   plunit.assert_null(actual anyelement [, message varchar])

    描述：断言actual为NULL，否则报错。

    参数说明：

    - actual：断言的条件。

    - message：可选参数，条件为NULL时打印的信息。缺省时打印'plunit.assert_null exception'

    返回值类型：void

    示例：
    ```
    openGauss=# select plunit.assert_null(NVL(null, null));
    assert_null
    -------------

    (1 row)

    openGauss=# select plunit.assert_null(NVL('test', null));
    ERROR:  plunit.assert_null exception
    DETAIL:  Plunit.assertation fails (assert_null).
    CONTEXT:  referenced column: assert_null
    openGauss=# select plunit.assert_null(NVL('test', null), 'this is the message');
    ERROR:  this is the message
    DETAIL:  Plunit.assertation fails (assert_null).
    CONTEXT:  referenced column: assert_null
    ```

-   plunit.assert_not_null(actual anyelement [, message varchar])

    描述：断言actual为非空，否则报错。

    参数说明：

    - actual：断言的条件。

    - message：可选参数，条件不为NULL时打印的信息。缺省时打印'plunit.assert_not_null exception'

    返回值类型：void

    示例：
    ```
    openGauss=# select plunit.assert_not_null(NVL('test', null));
    assert_not_null
    -----------------

    (1 row)

    openGauss=# select plunit.assert_not_null(NVL(null, null));
    ERROR:  plunit.assert_not_null exception
    DETAIL:  Plunit.assertation fails (assert_not_null).
    CONTEXT:  referenced column: assert_not_null
    openGauss=# select plunit.assert_not_null(NVL(null, null), 'this is te message');
    ERROR:  this is te message
    DETAIL:  Plunit.assertation fails (assert_not_null).
    CONTEXT:  referenced column: assert_not_null
    ```

-   plunit.assert_equals(expected anyelement, actual anyelement [, message varchar])

    描述：判断expected和actual是否相同，如果不同则报错。

    参数说明：

    - expected：期望值。

    - actual：输入的值。

    - message：可选参数，expected和actual不同时打印的信息。缺省时打印'plunit.assert_equals exception'

    示例：
    ```
    openGauss=# select plunit.assert_equals('test'::text, 'test'::text);
    assert_equals
    ---------------

    (1 row)

    openGauss=# select plunit.assert_equals('test'::text, 'xxxx'::text);
    ERROR:  plunit.assert_equal exception
    DETAIL:  Plunit.assertation fails (assert_equals).
    CONTEXT:  referenced column: assert_equals
    openGauss=# select plunit.assert_equals('test'::text, 'xxxx'::text, 'this is the message');
    ERROR:  this is the message
    DETAIL:  Plunit.assertation fails (assert_equals).
    CONTEXT:  referenced column: assert_equals
    ```

-   plunit.assert_equals(expected double, actual double, range double [, message varchar])

    描述：判断expected和actual是否相同(误差允许小于)，如果不同则报错。

    参数说明：

    - expected：期望值。

    - actual：输入的值。

    - range：误差范围。

    - message：可选参数，expected和actual不同时打印的信息。缺省时打印'plunit.assert_equal exception'

    返回值类型：void

    示例：
    ```
    openGauss=# select plunit.assert_equals(1.234, 1.235, 0.01);
    assert_equals
    ---------------

    (1 row)

    openGauss=# select plunit.assert_equals(1.234, 1.235, 0.001);
    ERROR:  plunit.assert_equal exception
    DETAIL:  Plunit.assertation fails (assert_equals).
    CONTEXT:  referenced column: assert_equals
    openGauss=# select plunit.assert_equals(1.234, 1.235, 0.001, 'this is the message');
    ERROR:  this is the message
    DETAIL:  Plunit.assertation fails (assert_equals).
    CONTEXT:  referenced column: assert_equals
    ```

-   plunit.assert_not_equals(expected anyelement, actual anyelement [, message varchar])

    描述：判断expected和actual是否相同，如果相同则报错。

    参数说明：

    - expected：期望值。

    - actual：输入的值。

    - message：可选参数，expected和actual相同时打印的信息。缺省时打印'plunit.assert_not_equal exception'

    示例：
    ```
    openGauss=# select plunit.assert_not_equals('test'::text, 'xxxx'::text);
    assert_not_equals
    -------------------

    (1 row)

    openGauss=# select plunit.assert_not_equals('test'::text, 'test'::text);
    ERROR:  plunit.assert_not_equal exception
    DETAIL:  Plunit.assertation fails (assert_not_equals).
    CONTEXT:  referenced column: assert_not_equals
    openGauss=# select plunit.assert_not_equals('test'::text, 'test'::text, 'this is the message');
    ERROR:  this is the message
    DETAIL:  Plunit.assertation fails (assert_not_equals).
    CONTEXT:  referenced column: assert_not_equals
    ```

-   plunit.assert_not_equals(expected double, actual double, range double [, message varchar])

    描述：判断expected和actual是否相同(误差允许小于)，如果相同则报错。

    参数说明：

    - expected：期望值。

    - actual：输入的值。

    - range：误差范围。

    - message：可选参数，expected和actual相同时打印的信息。缺省时打印'plunit.assert_equal exception'

    返回值类型：void

    示例：
    ```
    openGauss=# select plunit.assert_not_equals(1.234, 1.235, 0.001);
    assert_not_equals
    -------------------

    (1 row)

    openGauss=# select plunit.assert_not_equals(1.234, 1.235, 0.01);
    ERROR:  plunit.assert_not_equal exception
    DETAIL:  Plunit.assertation fails (assert_not_equals).
    CONTEXT:  referenced column: assert_not_equals
    openGauss=# select plunit.assert_not_equals(1.234, 1.235, 0.01, 'this is the message');
    ERROR:  this is the message
    DETAIL:  Plunit.assertation fails (assert_not_equals).
    CONTEXT:  referenced column: assert_not_equals
    ```

-   plunit.fail([message varchar])

    描述：用于报错并打印错误信息。

    参数说明：

    - message：可选参数，需要打印的报错信息，缺省时打印''。

    返回值类型：void

    示例：
    ```
    openGauss=# select plunit.fail();
    ERROR:  plunit.assert_fail exception
    DETAIL:  Plunit.assertation (assert_fail).
    CONTEXT:  referenced column: fail
    openGauss=# select plunit.fail('this is the message');
    ERROR:  this is the message
    DETAIL:  Plunit.assertation (assert_fail).
    CONTEXT:  referenced column: fail
    ```
