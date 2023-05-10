# postgres\_fdw

postgres\_fdw是一款开源插件，其代码随PostgreSQL源码一同发布。openGauss基于开源的PostgreSQL 9.4.26版本中的postgres\_fdw源码（[https://ftp.postgresql.org/pub/source/v9.4.26/postgresql-9.4.26.tar.gz](https://ftp.postgresql.org/pub/source/v9.4.26/postgresql-9.4.26.tar.gz)  ）进行开发适配。

postgres\_fdw插件默认参与编译，使用安装包安装好openGauss后，可直接使用postgres\_fdw，无须其他操作。

>![](public_sys-resources/icon-note.png) **说明：** 
>
>当前postgres\_fdw仅支持openGauss连接openGauss，不支持openGauss连接PostgreSQL。

## 使用postgres\_fdw<a name="section862733411474"></a>

-   加载postgres\_fdw扩展：**CREATE Extension postgres\_fdw;**

-   创建服务器对象：**CREATE SERVER**

-   创建用户映射：**CREATE USER MAPPING**

-   创建外表：**CREATE FOREIGN TABLE**  外表的表结构需要与远端openGauss侧的表结构保持一致。

-   对外表做正常的操作，如  **INSERT**、**UPDATE**、**DELETE**、**SELECT**、**EXPLAIN**、**ANALYZE**、**COPY**  等。

-   删除外表：**DROP FOREIGN TABLE**

-   删除用户映射：**DROP USER MAPPING**

-   删除服务器对象：**DROP SERVER**

-   删除扩展：**DROP Extension postgres\_fdw;**

-   查看REMOTE SQL PLAN：开启GUC参数show_fdw_remote_plan，可以在explain时追加打印remote sql的计划，对remote sql的explain会继承explain语句的verbose、costs选项。

## postgres_fdw下推主要成分

支持的下推成分：

-   稳定表达式：如常量、表的非系统列、内置的稳定级别的函数与操作符、等稳定元素组成的表达式。

-   扫描：支持单表查询，直接查询非系统列，带有简单且稳定的where表达式的查询成分的下推。

-   连接：当两个外表均在一个外表服务器，且其访问权限以及连接条件、过滤条件均满足一定的要求时，可以下推到远端执行。

-   分组与聚集：当聚集函数、group by、having三个部分，满足表达式检查以及其它一些条件时，可以下推到远端执行。

-   排序：当排序键满足一定的条件时，可下推到远端执行。

-   LIMIT：当LIMIT表达式满足下推条件时，可以下推到远端执行。

-   ROWMARK：rowmark一般都可下推。

不支持的下推成分：

-   WINDOWS FUNCTION、DISTINCT、GROUPING SETS

-   UNION、EXCEPT、INTERSECT

-   当join存在与update、delete、rowmark内时，可能触发EPQ机制的recheck行为，此时暂时不支持下推。

-   其他不满足上述下推要求的成分，如系统列等。

## 常见问题<a name="section16239134819476"></a>

-   在openGauss上建立外表时，不会同步在远端的openGauss上建表，需要自己利用客户端连接远端openGauss建表。

-   外表并不会区分远端表的具体表类型，不会检查表结构等是否对应，甚至连是否存在都不会检查。需要用户自己维护与保证这些属性关系。

-   执行**CREATE USER MAPPING**时使用的openGauss用户需要有远程连接openGauss及对表相关操作的权限。使用外表前，可以在本地机器上，使用gsql的客户端，使用对应的用户名密码确认能否成功连接远端openGauss并进行操作。


## 注意事项<a name="section121691157134716"></a>

-   SQL各类算子的执行具有一定的顺序，当某个算子不能下推后，上层所有后续的算子也都无法下推。

-   不支持**IMPORT FOREIGN SCHEMA**语法。

-   不支持对外表进行**CREATE TRIGGER**操作。

-   外表不支持以分区表的形式创建，不支持映射到某一个具体的分区。

