# JDBC包与驱动类<a name="ZH-CN_TOPIC_0241704270"></a>

## JDBC包<a name="zh-cn_topic_0241234246_zh-cn_topic_0059778950_s9694406852de4db0afcc99b19079f446"></a>

在linux服务器端源代码目录下执行build.sh，获得驱动jar包postgresql.jar，包位置在源代码目录下。从发布包中获取, 包名为openGauss-x.x.x-操作系统版本号-64bit-Jdbc.tar.gz。

驱动包与PostgreSQL保持兼容，其中类名、类结构与PostgreSQL驱动完全一致，曾经运行于PostgreSQL的应用程序可以直接移植到当前系统使用。

## 驱动类<a name="zh-cn_topic_0241234246_zh-cn_topic_0059778950_s103697559c8d4cb68f396e18e3ae65a9"></a>

在创建数据库连接之前，需要加载数据库驱动类“org.postgresql.Driver”。

>![](public_sys-resources/icon-note.gif) **说明：**   
>由于openGauss在JDBC的使用上与PG的使用方法保持兼容，所以同时在同一进程内使用两个JDBC驱动的时候，可能会类名冲突。  

