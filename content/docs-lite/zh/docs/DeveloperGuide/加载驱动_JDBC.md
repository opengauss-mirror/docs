# 加载驱动<a name="ZH-CN_TOPIC_0289900851"></a>

在创建数据库连接之前，需要先加载数据库驱动程序。

加载驱动有两种方法：

-   在JVM启动时参数传递：java -Djdbc.drivers=org.postgresql.Driver jdbctest

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >上述jdbctest为测试用例程序的名称。


