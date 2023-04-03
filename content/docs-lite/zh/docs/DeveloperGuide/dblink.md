# dblink

dblink是一个可以在openGauss数据库会话中连接到其它数据库的工具，同libpq支持的连接参数一致，可参考[链接参数](链接参数.md)，也可以在通过在连接串中增加drivername字段连接异构数据库。openGauss默认不编译dblink，下面依次介绍如何编译和使用dblink。

## 编译dblink
当前dblink的源码放在[contrib/dblink](https://gitee.com/opengauss/openGauss-server/tree/master/contrib/dblink)目录中。在编译安装完openGauss数据库之后，如果用户需要使用dblink，只需要进入上述目录执行如下即可完成dblink的编译安装。
请在编译安装dblink之前提前安装好ODBC驱动程序

```
make
make install
```

## 常用的dblink函数


参数

-   conname         要使用的连接名。忽略这个参数将使用未命名连接。

-   connstr         如之前为dblink_connect所描述的一个连接信息字符串。

-   sql             在远程数据库中执行的SQL查询，例如select * from foo。

-   fail_on_error   如果为真（忽略时的默认值），那么在连接的远端抛出的一个错误也会导致本地抛出一个错误。如果为假，远程错误只在本地被报告为一个 NOTICE，并且该函数不返回行。（只在通过libpq连接时候生效）

函数

-   加载dblink扩展

    ```
    CREATE EXTENSION dblink;
    ```

-   dblink_connect

    描述：打开一个到远程数据库的持久连接

    返回值类型：text

    ```
    dblink_connect(text connstr)                        
    dblink_connect(text connname, text connstr)  

    SELECT dblink_connect('hostaddr=192.168.0.243 port=9876 dbname=postgres user=odbc password=abcdefg drivername=openGauss2');
    dblink_connect
    ----------------
    OK
    (1 row)   
    ```



-   dblink_disconnect

    描述：关闭一个到远程数据库的持久连接

    返回值类型：text
    ```
    SELECT dblink_disconnect();                         
    SELECT dblink_disconnect(text connname);  

    SELECT dblink_disconnect('test1');
    dblink_disconnect
    -------------------
    OK
    (1 row)
    ```

-   dblink

    描述：在远程数据库执行select语句

    返回值类型 ：record集合

    该函数返回查询产生的行。因为dblink能与任何查询一起使用，它被声明为返回record，而不是指定任意特定的列集合。这意味着你必须指定在调用的查询中所期望的列集合。

    ```
    dblink(text connname, text sql [, bool fail_on_error])  
    dblink(text connstr, text sql [, bool fail_on_error])   
    dblink(text sql [, bool fail_on_error])       

    SELECT * FROM dblink('hostaddr=192.168.0.243 port=9876 dbname=postgres user=odbc password=abcdefg drivername=openGauss2',
        'select proname, prosrc from pg_proc') AS t1(proname name, prosrc text) WHERE proname LIKE 'bytea%';
    proname   |   prosrc
    ------------+------------
    byteacat   | byteacat
    byteaeq    | byteaeq
    bytealt    | bytealt
    byteale    | byteale
    byteagt    | byteagt
    byteage    | byteage
    byteane    | byteane
    byteacmp   | byteacmp
    bytealike  | bytealike
    byteanlike | byteanlike
    byteain    | byteain
    byteaout   | byteaout
    (12 rows)          
    ```

-   dblink_exec

    描述：在远程数据库执行非select语句

    返回值类型：text

    ```
    SELECT dblink_exec(text connname, text sql [, bool fail_on_error]) 
    SELECT dblink_exec(text connstr, text sql [, bool fail_on_error]) 
    SELECT dblink_exec(text sql [, bool fail_on_error])

    SELECT dblink_exec('myconn', 'insert into foo values(21,''z'',''{"a0","b0","c0"}'');');
    dblink_exec
    ----------------
    OK
    (1 row)
    ```

-   dblink_open
    
    描述：在一个远程数据库中打开一个游标

    返回值类型：text
    ```
    SELECT dblink_open(text cursorname, text sql [, bool fail_on_error])
    SELECT dblink_open(text connname, text cursorname, text sql [, bool fail_on_error])

    SELECT dblink_open('foo', 'select proname, prosrc from pg_proc');
    dblink_open
    -------------
    OK
    (1 row)
    ```
-   dblink_fetch

    描述：从一个远程数据库中的打开的游标返回行

    返回值类型：record集合

    ```
    SELECT dblink_fetch(text cursorname, int howmany [, bool fail_on_error])
    SELECT dblink_fetch(text connname, text cursorname, int howmany [, bool fail_on_error])

    SELECT * FROM dblink_fetch('foo', 5) AS (funcname name, source text);
    funcname |  source
    ----------+----------
    byteacat | byteacat
    byteacmp | byteacmp
    byteaeq  | byteaeq
    byteage  | byteage
    byteagt  | byteagt
    (5 rows)
    ```
-   dblink_close

    描述：关闭一个远程数据库中的游标

    返回值类型：text
    ```
    SELECT dblink_close(text cursorname [, bool fail_on_error])
    SELECT dblink_close(text connname, text cursorname [, bool fail_on_error])

    SELECT dblink_close('foo');
    dblink_close
    --------------
    OK
    (1 row)
    ```
      
-   dblink_get_connections()

    描述：返回所有打开的命名dblink连接的名称

    返回值类型：text 返回一个数组，其中是所有打开的命名dblink连接的名称。

    ```
    SELECT dblink_get_connections()

     dblink_get_connections 
    ------------------------
    {b,a,pq}
    (1 row)
    ```
-   dblink_error_message

    描述：得到在命名连接上的最后一个错误消息

    返回值类型：text

    ```
    SELECT dblink_error_message(text connname)
    ```

-   dblink_send_query

    描述：发送一个异步查询到远程数据库

    返回值类型：int  成功返回1，失败返回0

    ```
    SELECT dblink_send_query(text connname, text sql)
    SELECT dblink_send_query('dtest1', 'SELECT * FROM foo WHERE f1 < 3');
    ```

-   dblink_is_busy

    描述：检查连接是否正在忙于一个异步查询

    返回值类型：int 连接正忙返回1，不忙返回0

    ```
    SELECT dblink_is_busy(text connname)
    ```
-   dblink_get_notify

    描述：在一个连接上检索异步通知

    dblink_get_notify在一个未命名连接或者一个指定的命名连接上检索通知。要通过 dblink 接收通知，首先必须使用dblink_exec发出LISTEN

    返回值类型：集合
    ```
    SELECT dblink_get_notify()
    SELECT dblink_get_notify(text connname)

    SELECT dblink_exec('LISTEN virtual');
    dblink_exec
    -------------
    LISTEN
    (1 row)

    SELECT * FROM dblink_get_notify();
    notify_name | be_pid | extra
    -------------+--------+-------
    (0 rows)

    NOTIFY virtual;
    NOTIFY

    SELECT * FROM dblink_get_notify();
    notify_name | be_pid | extra
    -------------+--------+-------
    virtual     |   1229 |
    (1 row)
    ```
-   dblink_get_result

    描述：收集之前dblink_send_query发送的一个异步查询的结果。如果该查询还没有完成，dblink_get_result将等待直到它完成。

    返回值类型：record集合

    ```
    SELECT dblink_get_result(text connname [, bool fail_on_error])

    contrib_regression=# SELECT * FROM
    contrib_regression-# dblink_send_query('dtest1', 'select * from foo where f1 < 3; select * from foo where f1 > 6') AS t1;
    t1
    ----
    1
    (1 row)

    contrib_regression=# SELECT * FROM dblink_get_result('dtest1') AS t1(f1 int, f2 text, f3 text[]);
    f1 | f2 |     f3
    ----+----+------------
    0 | a  | {a0,b0,c0}
    1 | b  | {a1,b1,c1}
    2 | c  | {a2,b2,c2}
    (3 rows)
    ```
-   dblink_cancel_query

    描述：在命名连接上取消任何活动查询

    返回值类型：text

    ```
    SELECT dblink_cancel_query(text connname)
    ```
-   dblink_get_drivername

    描述：从odbc.ini中找到已配置的驱动名称

    返回值类型：text

    ```
    SELECT dblink_get_drivername

    SELECT dblink_get_drivername;
    dblink_get_drivername
    ----------------
    openGsuss，openGauss2
    (1 row)
    ```

-   删除扩展

    ```
    DROP EXTENSION dblink;
    ```


## 注意事项

-   目前dblink支持通过odbc连接所有支持odbc的异构数据库，以及通过libpq连接opengauss数据库。
-   判断odbc或者libpq的条件为connstr中的drivername字段，存在drivername通过odbc连接，不存在drivername通过libpq连接，通过odbc连接只需指定用户名，密码，驱动名称三个参数即可，其他参数不生效。
-   目前dblink暂时不支持线程池模式。
-   dblink_open,dblink_fetch,dblink_close 三个关于游标使用的函数，本质上为提前组装SQL语句，然后通过exec执行，因不同数据库语法有差异，不兼容的情况下，请通过dblink_exec来手动执行SQL控制游标。在通过odbc连接openGauss时，请自行通过dblink_exec打开/关闭事务。
-   dblink异步执行系列函数请务必执行正确的SQL语句，否则可能会导致异步执行函数异常。
-   因openGauss与postgressql依赖冲突，暂时无法连接至postgresql数据库。