# 关于COPY FROM STDIN导入数据

用户可以使用以下方式通过COPY FROM STDIN语句直接向openGauss写入数据。

-   通过键盘输入向openGauss数据库写入数据。详细请参见[COPY](../SQLReference/COPY.md)。
-   通过JDBC驱动的CopyManager接口从文件或者数据库向openGauss写入数据。此方法支持COPY语法中copy option的所有参数。

