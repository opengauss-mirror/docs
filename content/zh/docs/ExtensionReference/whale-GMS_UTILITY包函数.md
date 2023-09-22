# GMS_UTILITY包函数

-   gms_utility.format_call_stack([fmt text])

    描述：返回函数调用栈。

    参数说明：
    - fmt：为可选参数，表示输出的格式，取值如下：

    |取值|效果|
    |:---:|:---|
    |'o'|标准格式输出调用堆栈（包含头部）|
    |'s'|标准格式输出调用堆栈（不包含头部）|
    |'p'|逗号分隔的调用堆栈显示（不包含头部）|

    返回值类型：text

    示例：

    ```
    openGauss=# CREATE OR REPLACE FUNCTION checkHexCallStack() returns text  as $$
            DECLARE
                stack text;
            BEGIN
                select * INTO stack from gms_utility.format_call_stack('o');
                return stack;
            END;
    $$ LANGUAGE plpgsql;
    openGauss=# CREATE OR REPLACE FUNCTION checkIntCallStack() returns text  as $$
            DECLARE
                stack text;
            BEGIN
                select * INTO stack from gms_utility.format_call_stack('p');
                return stack;
            END;
    $$ LANGUAGE plpgsql;
    openGauss=# CREATE OR REPLACE FUNCTION checkIntUnpaddedCallStack() returns text  as $$
            DECLARE
                stack text;
            BEGIN
                select * INTO stack from gms_utility.format_call_stack('s');
                return stack;
            END;
    $$ LANGUAGE plpgsql;
    openGauss=# select * from checkHexCallStack();
                    checkhexcallstack
    -------------------------------------------------
    ----- PL/pgSQL Call Stack -----                +
    object     line  object                      +
    handle   number  name                        +
            0           function anonymous object   +
        4286        5  function checkhexcallstack()
    (1 row)

    openGauss=# select * from checkIntCallStack();
                    checkintcallstack
    -------------------------------------------------
            0           function anonymous object   +
        17031        5  function checkintcallstack()
    (1 row)

    openGauss=# select * from checkIntUnpaddedCallStack();
        checkintunpaddedcallstack
    -------------------------------------
    0,,anonymous object                +
    17032,5,checkintunpaddedcallstack()
    (1 row)

    ```

-   gms_utility.get_time()

    描述：返回自时间点以来经过的时间，单位是百分之一秒。

    返回值类型：int

    示例：

    ```
    openGauss=# DO $$
    DECLARE
        start_time integer;
        end_time integer;
    BEGIN
        start_time := GMS_UTILITY.GET_TIME();
        PERFORM pg_sleep(2);
        end_time := GMS_UTILITY.GET_TIME();
        -- sleep两秒，模拟慢速存储过程
        IF end_time BETWEEN start_time + 300 AND start_time + 1000 THEN end_time := start_time + 250; END IF;
        -- 由于单位是百分之一秒，所以直接要除以100
        RAISE NOTICE 'Execution time: % seconds', trunc((end_time - start_time)::numeric/100);
    END
    $$;
    NOTICE:  Execution time: 2 seconds
    ANONYMOUS BLOCK EXECUTE

    ```