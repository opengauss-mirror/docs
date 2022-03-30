# 通过INSERT语句直接写入数据<a name="ZH-CN_TOPIC_0289900427"></a>

用户可以通过以下方式执行[INSERT](INSERT.md)语句直接向openGauss数据库写入数据：

-   使用openGauss数据库提供的客户端工具向openGauss数据库写入数据。

    请参见[向表中插入数据](向表中插入数据.md)。

-   通过JDBC驱动连接数据库执行INSERT语句向openGauss数据库写入数据。

    详细内容请参见[连接数据库](连接数据库.md)。


openGauss数据库支持完整的数据库事务级别的增删改操作。INSERT是最简单的一种数据写入方式，这种方式适合数据写入量不大，并发度不高的场景。

