# JDBC包与驱动类<a name="ZH-CN_TOPIC_0241704270"></a>

## JDBC包<a name="zh-cn_topic_0241234246_zh-cn_topic_0059778950_s9694406852de4db0afcc99b19079f446"></a>

从发布包中获取。包名为openGauss-x.x-操作系统版本号-64bit-Jdbc.tar.gz。

解压后有两个JDBC的驱动jar包：

-   gsjdbc4.jar：与PostgreSQL保持兼容的驱动包，其中类名、类结构与PostgreSQL驱动完全一致，曾经运行于PostgreSQL的应用程序可以直接移植到当前系统使用。
-   gsjdbc200.jar：如果同一JVM进程内需要同时访问PostgreSQL及openGauss请使用此驱动包，它的主类名为“com.huawei.gauss200.jdbc.Driver”（即将“org.postgresql”替换为“com.huawei.gauss200.jdbc”），数据库连接的URL前缀为“jdbc:gaussdb”，其余与gsjdbc4.jar相同。

## 驱动类<a name="zh-cn_topic_0241234246_zh-cn_topic_0059778950_s103697559c8d4cb68f396e18e3ae65a9"></a>

在创建数据库连接之前，需要加载数据库驱动类“org.postgresql.Driver”（对应包gsjdbc4.jar）或者“com.huawei.gauss200.jdbc.Driver”（对应gsjdbc200.jar）。

>![](public_sys-resources/icon-note.gif) **说明：**   
>由于openGauss在JDBC的使用上与PG的使用方法保持兼容，所以同时在同一进程内使用两个JDBC的驱动的时候，可能会类名冲突。  

