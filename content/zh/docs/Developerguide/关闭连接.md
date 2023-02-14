# 关闭连接

在使用数据库连接完成相应的数据操作后，需要关闭数据库连接。

关闭数据库连接可以直接调用其close方法。例如：

```
Connection conn = DriverManager.getConnection("url","user","password") ;
conn.close()；
```
