# postgres\_fdw<a name="ZH-CN_TOPIC_0272283428"></a>

postgres\_fdw是一款开源插件，其代码随PostgreSQL源码一同发布。openGauss基于开源的PostgreSQL 9.4.26版本中的postgres\_fdw源码（[https://ftp.postgresql.org/pub/source/v9.4.26/postgresql-9.4.26.tar.gz](https://ftp.postgresql.org/pub/source/v9.4.26/postgresql-9.4.26.tar.gz)  ）进行开发适配。

postgres\_fdw插件默认参与编译，使用安装包安装好openGauss后，可直接使用postgres\_fdw，无须其他操作。

>![](public_sys-resources/icon-note.png) **说明：**
>当前postgres\_fdw仅支持openGauss连接openGauss，不支持openGauss连接PostgreSQL。

## 使用postgres\_fdw<a name="section862733411474"></a>

-   加载postgres\_fdw扩展：**CREATE EXTENSION postgres\_fdw;**

-   创建服务器对象：**CREATE SERVER**

-   创建用户映射：**CREATE USER MAPPING**

-   创建外表：**CREATE FOREIGN TABLE**  外表的表结构需要与远端openGauss侧的表结构保持一致。

-   对外表做正常的操作，如  **INSERT**、**UPDATE**、**DELETE**、**SELECT**、**EXPLAIN**、**ANALYZE**、**COPY**  等。

-   删除外表：**DROP FOREIGN TABLE**

-   删除用户映射：**DROP USER MAPPING**

-   删除服务器对象：**DROP SERVER**

-   删除扩展：**DROP EXTENSION postgres\_fdw;**


## 常见问题<a name="section16239134819476"></a>

-   在openGauss上建立外表时，不会同步在远端的openGauss上建表，需要自己利用客户端连接远端openGauss建表。

-   执行**CREATE USER MAPPING**时使用的openGauss用户需要有远程连接openGauss及对表相关操作的权限。使用外表前，可以在本地机器上，使用gsql的客户端，使用对应的用户名密码确认能否成功连接远端openGauss并进行操作。


## 注意事项<a name="section121691157134716"></a>

-   两个postgres\_fdw外表间的**SELECT JOIN**不支持下推到远端openGauss执行，会被分成两条SQL语句传递到远端openGauss执行，然后在本地汇总处理结果。

-   不支持**IMPORT FOREIGN SCHEMA**语法。

-   不支持对外表进行**CREATE TRIGGER**操作。
