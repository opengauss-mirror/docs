# PLPython Fenced模式<a name="ZH-CN_TOPIC_0000001149506467"></a>

在fenced模式中添加plpython非安全语言。在数据库编译时需要将python集成进数据库中，在configure阶段加入--with-python选项。同时也可指定安装plpython的python路径，添加选项--with-includes='/python-dir=path'。

在启动数据库之前配置GUC参数unix\_socket\_directory ，指定unix\_socket进程间通讯的文件地址。用户需要提前在user-set-dir-path下创建文件夹，并将文件夹权限修改为可读可写可执行状态。

```
unix_socket_directory = '/user-set-dir-path'
```

配置完成，启动数据库。

将plpython加入数据库编译，并设置好GUC参数unix\_socket\_directory后，在启动数据库的过程中，自动创建fenced-Master进程。在数据库不进行python编译的情况下，fenced模式需要手动拉起master进程，在GUC参数设置完成后，输入创建master进程命令。

启动fenced-Master进程，命令为：

```
gaussdb --fenced -k /user-set-dir-path -D /user-set-dir-path &
```

完成fence模式配置，针对plpython-fenced UDF数据库将在fenced-worker进程中执行UDF计算。

## 使用指导<a name="section823619213143"></a>

-   创建Extension

    -   当编译的plpython为python2时：

        ```
        openGauss=# create Extension plpythonu;
        CREATE Extension
        ```

    -   当编译的plpython为python3时：

        ```
        openGauss=# create Extension plpython3u;
        CREATE Extension
        ```

    下面示例是以python2为例。


-   创建plpython-fenced UDF

    ```
    openGauss=# create or replace function pymax(a int, b int)
    openGauss-# returns INT
    openGauss-# language plpythonu fenced
    openGauss-# as $$
    openGauss$# import numpy
    openGauss$# if a > b:
    openGauss$#     return a;
    openGauss$# else:
    openGauss$#     return b;
    openGauss$# $$;
    CREATE FUNCTION
    ```

-   查看UDF信息

    ```
    openGauss=# select * from pg_proc where proname='pymax';
    -[ RECORD 1 ]----+--------------
    proname          | pymax
    pronamespace     | 2200
    proowner         | 10
    prolang          | 16388
    procost          | 100
    prorows          | 0
    provariadic      | 0
    protransform     | -
    proisagg         | f
    proiswindow      | f
    prosecdef        | f
    proleakproof     | f
    proisstrict      | f
    proretset        | f
    provolatile      | v
    pronargs         | 2
    pronargdefaults  | 0
    prorettype       | 23
    proargtypes      | 23 23
    proallargtypes   |
    proargmodes      |
    proargnames      | {a,b}
    proargdefaults   |
    prosrc           |
                     | import numpy
                     | if a > b:
                     |     return a;
                     | else:
                     |     return b;
                     |
    probin           |
    proconfig        |
    proacl           |
    prodefaultargpos |
    fencedmode       | t
    proshippable     | f
    propackage       | f
    prokind          | f
    proargsrc        |
    ```

-   运行UDF
    -   创建一个数据表：

        ```
        openGauss=# create table temp (a int ,b int) ;
        CREATE TABLE
        openGauss=# insert into temp values (1,2),(2,3),(3,4),(4,5),(5,6);
        INSERT 0 5
        ```

    -   运行UDF：

        ```
        openGauss=# select pymax(a,b) from temp;
         pymax
        -------
             2
             3
             4
             5
             6
        (5 rows)
        ```



