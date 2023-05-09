# dblink

dblink是一个可以在一个openGauss数据库会话中连接到其它openGauss数据库的工具，同libpq支持的连接参数一致，可参考**[链接参数](../DeveloperGuide/链接参数.md)**。openGauss默认不编译dblink，下面依次介绍如何编译和使用dblink。

## 编译dblink<a name="section968819125285"></a>

当前dblink的源码放在[contrib/dblink](https://gitee.com/opengauss/openGauss-server/tree/master/contrib/dblink)目录中。在编译安装完openGauss数据库之后，如果用户需要使用dblink，只需要进入上述目录执行如下即可完成dblink的编译安装。

```
make
make install
```

## 常用的dblink函数<a name="section1440011715283"></a>

-   加载dblink扩展

    ```
    CREATE Extension dblink;
    ```

-   打开一个到远程数据库的持久连接

    ```
    SELECT dblink_connect(text connstr);
    ```

-   关闭一个到远程数据库的持久连接

    ```
    SELECT dblink_disconnect();
    ```

-   在远程数据库执行查询

    ```
    SELECT * FROM dblink(text connstr, text sql);
    ```

-   在远程数据库执行命令

    ```
    SELECT dblink_exec(text connstr, text sql);
    ```

-   返回所有打开的命名dblink连接的名称

    ```
    SELECT dblink_get_connections();
    ```

-   发送一个异步查询到远程数据库

    ```
    SELECT dblink_send_query(text connname, text sql);
    ```

-   检查连接是否正在忙于一个异步查询

    ```
    SELECT dblink_is_busy(text connname);
    ```

-   删除扩展

    ```
    DROP Extension dblink;
    ```


## 注意事项<a name="section1910642310280"></a>

目前dblink仅支持openGauss数据库访问另一个openGauss数据库，不支持openGauss数据库访问PostgreSQL数据库。

