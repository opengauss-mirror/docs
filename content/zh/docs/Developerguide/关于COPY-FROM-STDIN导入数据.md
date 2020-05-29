# 关于COPY FROM STDIN导入数据<a name="ZH-CN_TOPIC_0242370282"></a>

这种方式适合数据写入量不太大， 并发度不太高的场景。

用户可以使用以下方式通过COPY FROM STDIN语句直接向openGauss写入数据。

-   通过键盘输入向openGauss写入数据。详细请参见[COPY](COPY.md)。
-   通过JDBC驱动的CopyManager接口从文件或者数据库向openGauss写入数据。此方法支持COPY语法中copy option的所有参数。

