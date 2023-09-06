# GMS_OUTPUT包函数

-   gms_output.enable([buffer_size int4])

    描述：启用gms_output软件包功能。

    参数说明：
    - buffer_size：用于指定缓冲区的大小，单位是字节，最大值为1000000字节。

    返回值类型：void

    示例：

    ```
    openGauss=# select gms_output.enable();
    enable
    --------

    (1 row)

    openGauss=# select gms_output.enable(1500000);
    WARNING:  Limit decreased to 1000000 bytes.
    CONTEXT:  referenced column: enable
    enable
    --------

    (1 row)

    openGauss=# select gms_output.enable(1000000);
    enable
    --------

    (1 row)

    ```

-   gms_output.disable()

    描述：关闭gms_output软件包功能。

    返回值类型：void

    示例：

    ```
    openGauss=# select gms_output.disable();
    disable
    ---------

    (1 row)

    ```

-   gms_output.put(msg text)

    描述：置入一个字符串，但不置入结束符。

    参数说明：
    - msg：要置入的字符串。

    示例：

    ```
    openGauss=# select gms_output.put('aaa');
    put
    -----

    (1 row)

    ```

-   gms_output.put_line(msg text)

    描述：向缓冲区中置入一行数据。

    参数说明：
    - msg：要置入的字符串。

    返回值类型：void

    示例：

    ```
    openGauss=# select gms_output.put_line('aaa');
    put_line
    ----------

    (1 row)

    ```

-   gms_output.serveroutput(sendMsgs bool)

    描述：SERVEROUTPUT控制是否发送消息。

    参数说明：
    - sendMsgs：如果指定了TRUE，则在执行PUT、PUT_LINE或NEW_LINE时，消息将发送到客户端（如gsql），而不存储在缓冲区中。如果指定了FALSE，则在执行PUT、PUT_LINE或NEW_LINE时，消息将存储在缓冲区中，而不会发送到客户端（如gsql）。

    返回值类型：void

    示例：

    ```
    openGauss=# select gms_output.serveroutput(false);
    serveroutput
    --------------

    (1 row)

    openGauss=# select gms_output.put_line('aaa');
    put_line
    ----------

    (1 row)

    openGauss=# select gms_output.serveroutput(true);
    serveroutput
    --------------

    (1 row)

    openGauss=# select gms_output.put_line('aaa');
    aaa
    aaa
    put_line
    ----------

    (1 row)

    ```

-   gms_output.get_line(OUT line text, OUT status int4)

    描述：从输出缓冲区中获取一行数据。

    参数说明：
    - line：用于接收获得的行。
    - status：为0表示获取成功，为1表示获取失败。

    返回值类型：text

    示例：

    ```
    openGauss=# -- 该用例需要与PUT或者PUT_LINE配合使用
    openGauss=# CREATE TABLE gms_output_test (buff VARCHAR(20), status INTEGER);
    openGauss=# CREATE FUNCTION gms_output_test() RETURNS VOID AS $$
    DECLARE
        buff    VARCHAR(20);
        stts    INTEGER;
    BEGIN
        PERFORM GMS_OUTPUT.DISABLE();
        PERFORM GMS_OUTPUT.ENABLE();
        PERFORM GMS_OUTPUT.SERVEROUTPUT ('f');
        PERFORM GMS_OUTPUT.PUT_LINE ('ORAFCE TEST 1');
        PERFORM GMS_OUTPUT.ENABLE();
        SELECT INTO buff,stts line,status FROM GMS_OUTPUT.GET_LINE();
        INSERT INTO gms_output_test VALUES (buff, stts);
        PERFORM GMS_OUTPUT.DISABLE();
        PERFORM GMS_OUTPUT.ENABLE();
    END;
    $$ LANGUAGE plpgsql;
    openGauss=# SELECT gms_output_test();
    gms_output_test
    -----------------

    (1 row)

    openGauss=# SELECT * FROM gms_output_test;
        buff      | status
    ---------------+--------
    ORAFCE TEST 1 |      0
    (1 row)

    ```

-   gms_output.new_line()

    描述：向缓冲区中置入新的行。该函数一般与put配合使用，用于结束一次put的输入。

    返回值类型：void

    示例：
    ```
    openGauss=# CREATE TABLE gms_output_test (buff VARCHAR(20), status INTEGER);
    CREATE TABLE
    openGauss=# CREATE FUNCTION gms_output_test() RETURNS VOID AS $$
        PERFORM GMS_OUTPUT.ENABLE();
    DECLARE
        buff1    VARCHAR(20);
        stts    INTEGER := 10;
    BEGIN
        PERFORM GMS_OUTPUT.DISABLE();
        PERFORM GMS_OUTPUT.ENABLE();
        PERFORM GMS_OUTPUT.SERVEROUTPUT ('f');
        PERFORM GMS_OUTPUT.ENABLE(2000);
        -- PUT执行10次
        FOR j IN 1..10 LOOP
            PERFORM GMS_OUTPUT.PUT ('A');
        END LOOP;
        -- 将PUT的内容放在同一个新的行里面，并结束put的输入
        PERFORM GMS_OUTPUT.NEW_LINE();
        SELECT INTO buff1,stts lines[1],numlines FROM GMS_OUTPUT.GET_LINES(stts);
        INSERT INTO gms_output_test VALUES (buff1, stts);
        PERFORM GMS_OUTPUT.DISABLE();
        PERFORM GMS_OUTPUT.ENABLE();
    openGauss$# END;
    openGauss$# $$ LANGUAGE plpgsql;
    CREATE FUNCTION
    openGauss=# select gms_output_test();
    gms_output_test
    -----------------

    (1 row)

    openGauss=# select * from gms_output_test;
        buff    | status
    ------------+--------
    AAAAAAAAAA |      1
    (1 row)

    ```

-   gms_output.get_lines(OUT lines text[], INOUT numlines int4)

    描述：从输出缓冲区中获取多行。

    参数说明：
    - lines：一个字符串数组，用于接收获得的行。
    - numlines：表示要获取的最大行数。

    返回值类型：text

    示例：
    ```
    openGauss=# CREATE TABLE gms_output_test (buff VARCHAR(20), status INTEGER);
    CREATE TABLE
    openGauss=# CREATE FUNCTION gms_output_test() RETURNS VOID AS $$
    DECLARE
        buff1    VARCHAR(20);
        buff2    VARCHAR(20);
        stts    INTEGER := 2;
    BEGIN
        PERFORM GMS_OUTPUT.DISABLE();
        PERFORM GMS_OUTPUT.ENABLE();
        PERFORM GMS_OUTPUT.SERVEROUTPUT ('f');
        PERFORM GMS_OUTPUT.ENABLE(2000);
        FOR j IN 1..10 LOOP
            PERFORM GMS_OUTPUT.PUT ('A');
        END LOOP;
        PERFORM GMS_OUTPUT.NEW_LINE();
        FOR j IN 1..10 LOOP
            PERFORM GMS_OUTPUT.PUT ('B');
        END LOOP;
        PERFORM GMS_OUTPUT.NEW_LINE();
        SELECT INTO buff1,buff2,stts lines[1],lines[2],numlines FROM GMS_OUTPUT.GET_LINES(stts);
        INSERT INTO gms_output_test VALUES (buff1, stts);
        INSERT INTO gms_output_test VALUES (buff2, stts);
        PERFORM GMS_OUTPUT.DISABLE();
        PERFORM GMS_OUTPUT.ENABLE();
    END;
    $$ LANGUAGE plpgsql;
    CREATE FUNCTION
    openGauss=# select gms_output_test();
    gms_output_test
    -----------------

    (1 row)

    openGauss=# select * from gms_output_test;
        buff    | status
    ------------+--------
    AAAAAAAAAA |      2
    BBBBBBBBBB |      2
    (2 rows)

    ```
