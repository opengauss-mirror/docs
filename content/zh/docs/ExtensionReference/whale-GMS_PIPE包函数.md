# GMS_PIPE包函数

-   gms_pipe.pack_message(msg)

    描述：在本地缓冲区中设置指定的消息。

    参数说明：
    - msg：指定要在本地缓冲区中设置的数据。可以使用以下数据类型：
        - Character 类型
        - Integer 类型
        - NUMERIC 类型
        - DATE 类型
        - TIMESTAMP 类型
        - BYTEA 类型
        - RECORD 类型

    返回值类型：void

    示例：

    ```
    openGauss=# select gms_pipe.pack_message('this is the message!');
    pack_message
    --------------

    (1 row)

    ```

-   gms_pipe.send_message(pipename text [, endtime int [, limit int]])

    描述：将存储在本地缓冲区中的数据发送到指定的管道。如果消息发送成功，返回0；如果发送超时，则返回1。

    参数说明：
    - pipename：管道名，大小写敏感。
    - endtime：最大等待时间，单位为秒（s）。如果缺省，默认值为1年（31536000秒）。
    - limit：指定可以发送或接收的最大消息数，取值范围为[1, 32767]。如果省略，则使用GMS_PIPE.CREATE_PPIPE中设置的最大消息数。如果在隐式管道中省略，消息的数量将是无限的。如果没有缺省，且在GMS_PIPE.CREATE_PPIPE中也设置了limit值，就去两者中较大的值作为基准。

    返回值类型：int

    示例：

    ```
    openGauss=# select gms_pipe.send_message('PipeTest');
    send_message
    --------------
                0
    (1 row)

    ```

-   gms_pipe.receive_message(pipename text [, endtime int])

    描述：接收指定管道中存在的消息，并在本地缓冲区中设置这些消息。如果消息接收成功，返回0；如果发生超时，则返回1。

    参数说明：
    - pipename：管道名，大小写敏感。
    - endtime：最大等待时间，单位为秒（s）。如果缺省，默认值为1年（31536000秒）。

    返回值类型：int

    示例：

    ```
    openGauss=# select gms_pipe.receive_message('PipeTest');
    receive_message
    -----------------
                0
    (1 row)

    ```

-   gms_pipe.unpack_message_text()

    描述：在本地缓冲区中接收TEXT类型的消息。

    返回值类型：text

    示例：

    ```
    openGauss=# select gms_pipe.unpack_message_text();
    unpack_message_text
    ----------------------
    this is the message!
    (1 row)

    ```

-   gms_pipe.unpack_message_date()

    描述：在本地缓冲区中接收date类型的消息。

    返回值类型：date

    示例：

    ```
    openGauss=# select gms_pipe.unpack_message_date();
    unpack_message_date
    ---------------------
    2021-12-31 16:00:00
    (1 row)

    ```

-   gms_pipe.unpack_message_timestamp()

    描述：在本地缓冲区中接收date类型的消息。

    返回值类型：date

    示例：

    ```
    openGauss=# select gms_pipe.unpack_message_timestamp();
    unpack_message_timestamp
    --------------------------
    2022-01-01 00:00:00+08
    (1 row)

    ```

-   gms_pipe.unpack_message_number()

    描述：在本地缓冲区中接收numeric类型的消息。

    返回值类型：numeric

    示例：

    ```
    openGauss=# select gms_pipe.unpack_message_number();
    unpack_message_number
    -----------------------
                    115.2
    (1 row)

    ```

-   gms_pipe.unpack_message_bytea()

    描述：在本地缓冲区中接收bytea类型的消息。

    返回值类型：bytea

    示例：

    ```
    openGauss=# select gms_pipe.unpack_message_bytea();
    unpack_message_bytea
    ----------------------
    \x616263
    (1 row)

    ```

-   gms_pipe.unpack_message_record()

    描述：在本地缓冲区中接收record类型的消息。

    返回值类型：record

    示例：

    ```
    openGauss=# DECLARE
    row DUAL%ROWTYPE;
    BEGIN
    SELECT * INTO row FROM DUAL;
    PERFORM gms_pipe.pack_message(row);
    PERFORM gms_pipe.send_message('CreatePipeTest');
    PERFORM gms_pipe.receive_message('CreatePipeTest', 3);
    RAISE NOTICE 'RECEIVE %', gms_pipe.unpack_message_record();
    END;
    /
    NOTICE:  RECEIVE (X)
    ANONYMOUS BLOCK EXECUTE

    ```

-   gms_pipe.unique_session_name()

    描述：获取一个唯一的会话名。

    返回值类型：text

    示例：

    ```
    openGauss=# select gms_pipe.unique_session_name();
        unique_session_name
    ---------------------------
    PG$PIPE$1$281466296834128
    (1 row)

    ```

-   gms_pipe.__list_pipes()

    描述：从输出缓冲区中获取一行数据。

    返回值类型：setof record

    示例：

    ```
    openGauss=# select gms_pipe.__list_pipes();
            __list_pipes
    ------------------------------
    (CreateTestPipe,0,0,1500,f,)
    (1 row)

    ```

-   gms_pipe.next_item_type()

    描述：返回本地缓冲区中的下一个数据类型。返回值含义如下：
    |返回值|数据类型|
    |:---|:---|
    |9|数字类型|
    |11|文本类型|
    |12|日期类型|
    |13|时间戳类型|
    |23|二进制字符串类型|
    |24|元组类型|
    |0|缓冲区中没有数据|

    返回值类型：int

    示例：
    ```
    openGauss=# select gms_pipe.receive_message('PipeTest');
    receive_message
    -----------------
                0
    (1 row)

    openGauss=# select gms_pipe.next_item_type();
    next_item_type
    ----------------
                11
    (1 row)

    openGauss=# select gms_pipe.unpack_message_text();
    unpack_message_text
    -----------------------
    this is the message2!
    (1 row)

    ```

-   gms_pipe.create_pipe(pipename text [, limit int [, private bool]])

    描述：创建一个管道。

    参数说明：
    - pipename：管道名。
    - limit：指定可以发送或接收的最大消息数，取值范围为[1, 32767]。如果省略，则使用GMS_PIPE.CREATE_PPIPE中设置的最大消息数。如果在隐式管道中省略，消息的数量将是无限的。如果没有缺省，且在GMS_PIPE.CREATE_PPIPE中也设置了limit值，就去两者中较大的值作为基准。
    - private：表示管道是否私有，可缺省，缺省时为false。

    返回值类型：void

    示例：
    ```
    openGauss=# select gms_pipe.create_pipe('CreateTestPipe', 1500, false);
    create_pipe
    -------------

    (1 row)

    openGauss=# select gms_pipe.__list_pipes();
            __list_pipes
    ------------------------------
    (CreateTestPipe,0,0,1500,f,)
    (1 row)

    ```

-   gms_pipe.reset_buffer()

    描述：清空缓冲区。

    返回值类型：void

    示例：
    ```
    openGauss=# select gms_pipe.pack_message('this is the message2!');
    pack_message
    --------------

    (1 row)

    openGauss=# select gms_pipe.send_message('PipeTest');
    send_message
    --------------
                0
    (1 row)

    openGauss=# select gms_pipe.receive_message('PipeTest');
    receive_message
    -----------------
                0
    (1 row)

    openGauss=# select gms_pipe.receive_message('PipeTest');
    receive_message
    -----------------
                0
    (1 row)

    openGauss=# select gms_pipe.next_item_type();
    next_item_type
    ----------------
                11
    (1 row)

    openGauss=# select gms_pipe.reset_buffer();
    reset_buffer
    --------------

    (1 row)

    openGauss=# select gms_pipe.next_item_type();
    next_item_type
    ----------------
                0
    (1 row)

    ```

-   gms_pipe.purge(pipename text)

    描述：清空指定的管道。

    返回值类型：void

    示例：
    ```
    openGauss=# select gms_pipe.pack_message('this is the message4!');
    pack_message
    --------------

    (1 row)

    openGauss=# select gms_pipe.send_message('CreatePipeTest');
    send_message
    --------------
                0
    (1 row)

    openGauss=# select gms_pipe.purge('CreatePipeTest');
    purge
    -------

    (1 row)

    openGauss=# select gms_pipe.receive_message('CreatePipeTest', 3); -- 管道清空，无法接收到消息，3s后超时报错。
    receive_message
    -----------------
                1
    (1 row)


    ```

-   gms_pipe.remove_pipe(pipename text)

    描述：移除指定管道。

    返回值类型：void

    示例：
    ```
    openGauss=# select gms_pipe.__list_pipes();
            __list_pipes
    ------------------------------
    (CreateTestPipe,0,0,1500,f,)
    (1 row)

    openGauss=# select gms_pipe.remove_pipe('CreateTestPipe');
    remove_pipe
    -------------

    (1 row)

    openGauss=# select gms_pipe.__list_pipes();
    __list_pipes
    --------------
    (0 rows)

    ```