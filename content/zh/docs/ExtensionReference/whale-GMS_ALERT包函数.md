# GMS_ALERT包函数

-   gms_alert.register(name text)

    描述：将会话注册为警报名称的收件人。

    参数说明：
    - name：警报名称。

    返回值类型：void

    示例：

    ```
    openGauss=# SELECT gms_alert.register('b1');
    register
    ----------

    (1 row)

    ```

-   gms_alert.remove(name text)

    描述：删除会话作为通知名称的收件人。

    参数说明：
    - name：警报名称。

    返回值类型：void

    示例：

    ```
    openGauss=# SELECT gms_alert.remove('b1');
    remove
    --------

    (1 row)

    ```

-   gms_alert.removeall()

    描述：删除所有警报的注册。

    返回值类型：void

    示例：

    ```
    openGauss=# SELECT gms_alert.removeall();
    removeall
    -----------

    (1 row)

    ```

-   gms_alert.signal(name text, message text)

    描述：向所有收件人发出信号。

    参数说明：
    - name：警报名称。
    - message：发送的消息。

    示例：

    ```
    openGauss=# select gms_output.put('aaa');
    put
    -----

    (1 row)

    ```

-   gms_alert.waitany(OUT name text, OUT message text, OUT status integer, timeout float8)

    描述：等待接收任意信号。

    参数说明：
    - timeout：等待超时的时间。单位为秒。

    返回值类型：record

    示例：

    ```
    openGauss=# SELECT gms_alert.register('c1');
    register
    ----------

    (1 row)

    openGauss=# select * from gms_alert.waitany(10); -- 在另一个会话中使用signal函数向c1发送了消息。
    name |     message     | status
    ------+-----------------+--------
    c1   | this is message |      0
    (1 row)

    ```

-   gms_alert.waitone(name text, OUT message text, OUT status integer, timeout float8)

    描述：等待接收指定信号。

    参数说明：
    - name：警报名称。
    - timeout：等待超时的时间。单位为秒。

    返回值类型：record

    示例：

    ```
    openGauss=# select * from gms_alert.waitone('c1', 10);
        message     | status
    -----------------+--------
    this is message |      0
    (1 row)

    ```

-   gms_alert.set_defaults(sensitivity float8)

    描述：用于设置GMS_ALERT包使用的会话可配置设置。目前，轮询循环间隔睡眠时间是唯一可以使用此过程修改的会话设置。该函数暂时不可用，调用时会直接报错。

    参数说明：
    - sensitivity：轮询间隔，单位为s。

    返回值类型：void

    示例：
    ```
    openGauss=# select gms_alert.set_defaults(100);
    ERROR:  feature not supported
    DETAIL:  Sensitivity isn't supported.
    CONTEXT:  referenced column: set_defaults

    ```
