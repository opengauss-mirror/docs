# shark-系统信息函数

本章节只包含shark插件新增的系统信息函数。

## 会话信息函数

- @@FETCH_STATUS

    描述：返回最后一条游标FETCH语句的状态，该语句可以是针对连接当前打开的任何游标发出的。0表示FETCH成功，-1表示FETCH失败。

    返回值类型：int

    示例：

    ```
    select @@FETCH_STATUS;
    ```

- @@ROWCOUNT

    描述：返回受上一句影响的行数。如果行数大于20亿，请使用ROWCOUNT_BIG()。

    返回值类型：int

    示例：

    ```
    select @@ROWCOUNT;
    ```

- ROWCOUNT_BIG()

    描述：返回受上一句影响的行数。该函数的功能与@@ROWCOUNT类似，区别在于ROWCOUNT_BIG()的返回类型为bigint。

    返回值类型：bigint

    示例：

    ```
    select ROWCOUNT_BIG();
    ```

- @@SPID

    描述：返回当前用户进程的会话ID。

    返回值类型：bigint

    示例：

    ```
    select @@SPID;
    ```
