# JDBC配置<a name="ZH-CN_TOPIC_0000001149627971"></a>

目前，openGauss相关的第三方工具都是通过JDBC进行连接的，此部分将介绍工具配置时的注意事项。

## 连接参数<a name="section51233666102514"></a>

-   【关注】第三方工具通过JDBC连接openGauss时，JDBC向openGauss发起连接请求，会默认添加以下配置参数，详见JDBC代码ConnectionFactoryImpl类的实现。

    ```
    params = {
    { "user", user },
    { "database", database },
    { "client_encoding", "UTF8" },
    { "DateStyle", "ISO" },
    { "extra_float_digits", "3" },
    { "TimeZone",  createPostgresTimeZone() },
    };
    ```

    这些参数可能会导致JDBC客户端的行为与gsql客户端的行为不一致，例如，Date数据显示方式、浮点数精度表示、timezone显示。

    如果实际期望和这些配置不符，建议在java连接设置代码中显式设定这些参数。

-   【建议】通过JDBC连接数据库时，会设置extra_float_digits=3，gsql中设置为extra_float_digits=0，可能会使同一条数据在JDBC显示和gsql显示的精度不同。

-   【建议】对于精度敏感的场景，建议使用numeric类型。

-   【建议】通过JDBC连接数据库时，应该保证下面三个时区设置一致：
    -   JDBC客户端所在主机的时区。
    -   openGauss数据库实例所在主机的时区。
    -   openGauss数据库实例配置过程中时区。

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >时区设置相关的操作，请参考《安装指南》中“初始配置 \> 同步系统时间”章节内容。



## fetchsize<a name="section2864318010275"></a>

【关注】在应用程序中，如果需要使用fetchsize，必须关闭autocommit。开启autocommit，会令fetchsize配置失效。

## autocommit<a name="section1636443510276"></a>

【建议】在JDBC向openGauss申请连接的代码中，建议显式打开autocommit开关。如果基于性能或者其它方面考虑，需要关闭autocommit时，需要应用程序自己来保证事务的提交。例如，在指定的业务SQL执行完之后做显式提交，特别是客户端退出之前务必保证所有的事务已经提交。

## 释放连接<a name="section1577694110277"></a>

【建议】推荐使用连接池限制应用程序的连接数。每执行一条SQL就连接一次数据库，是一种不好SQL的编写习惯。

【建议】在应用程序完成作业任务之后，应当及时断开和openGauss的连接，释放资源。建议在任务中设置session超时时间参数。

【建议】使用JDBC连接池，在将连接释放给连接池前，需要执行以下操作，重置会话环境。否则，可能会因为历史会话信息导致的对象冲突。

-   如果在连接中设置了GUC参数，那么在将连接归还连接池之前，必须使用“SET SESSION AUTHORIZATION DEFAULT;RESET ALL;”将连接的状态清空。
-   如果使用了临时表，那么在将连接归还连接池之前，必须将临时表删除。

## CopyManager<a name="section1624965810277"></a>

【建议】在不使用ETL工具，数据入库实时性要求又比较高的情况下，建议在开发应用程序时，使用openGauss JDBC驱动的copyManger接口进行微批导入。

