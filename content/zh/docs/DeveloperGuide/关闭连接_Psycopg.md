# 关闭连接<a name="ZH-CN_TOPIC_0000001079921692"></a>

在使用数据库连接完成相应的数据操作后，需要关闭数据库连接。关闭数据库连接可以直接调用其close方法，如connection.close\(\)。

>![](public_sys-resources/icon-caution.gif) **注意：** 
>此方法关闭数据库连接，并不自动调用commit\(\)。如果只是关闭数据库连接而不调用commit\(\)方法，那么所有更改将会丢失。

