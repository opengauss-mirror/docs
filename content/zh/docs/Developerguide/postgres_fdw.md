# postgres_fdw
postgres_fdw是一款开源插件，其代码随PostgreSQL源码一同发布。openGauss基于开源的 PostgreSQL 9.4.26 版本中的postgres_fdw源码（https://ftp.postgresql.org/pub/source/v9.4.26/postgresql-9.4.26.tar.gz ）进行开发适配。

postgres_fdw插件默认参与编译，使用安装包安装好openGauss后，可直接使用postgres_fdw，无须其他操作。

-    
    >![](public_sys-resources/icon-note.gif) **说明：** 
    >当前postgres_fdw仅支持openGauss连接openGauss，不支持openGauss连接PostgreSQL。

## 使用postgres_fdw
-    加载postgres_fdw扩展：**CREATE EXTENSION postgres_fdw;**
-    创建服务器对象：**[CREATE SEVER](CREATE-SERVER.md)**
-    创建用户映射：**[CREATE USER MAPPING](CREATE-USER-MAPPING.md)**
-    创建外表：**[CREATE FOREIGN TABLE](CREATE-FOREIGN-TABLE.md)** 外表的表结构需要与远端openGauss侧的表结构保持一致。
-    对外表做正常的操作，如 **[INSERT](INSERT.md)** 、 **[UPDATE](UPDATE.md)** 、 **[DELETE](DELETE.md)** 、 **[SELECT](SELECT.md)** 、 **[EXPLAIN](EXPLAIN.md)** 、 **[ANALYZE](ANALYZE-ANALYSE.md)** 、 **[COPY](COPY.md)** 等。
-    删除外表：**[DROP FOREIGN TABLE](DROP-FOREIGN-TABLE.md)**
-    删除用户映射：**[DROP USER MAPPING](DROP-USER-MAPPING.md)**
-    删除服务器对象：**[DROP SERVER](DROP-SERVER.md)**
-    删除扩展：**DROP EXTENSION postgres_fdw;**

## 常见问题
-   在openGauss上建立外表时，不会同步在远端的openGauss上建表，需要自己利用客户端连接远端openGauss建表。
-   执行**CREATE USER MAPPING**时使用的openGauss用户需要有远程连接openGauss及对表相关操作的权限。使用外表前，可以在本地机器上，使用gsql的客户端，使用对应的用户名密码确认能否成功连接远端openGauss并进行操作。

## 已知问题
-   两个postgres_fdw外表间的**SELECT JOIN**不支持下推到远端openGauss执行，会被分成两条SQL语句传递到远端openGauss执行，然后在本地汇总处理结果。
-   不支持**IMPORT FOREIGN SCHEMA**语法。
-   不支持对外表进行**CREATE TRIGGER**操作。