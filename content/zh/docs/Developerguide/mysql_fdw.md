# mysql_fdw
mysql_fdw是一款开源插件，github地址： https://github.com/EnterpriseDB/mysql_fdw 。openGauss基于开源的 mysql_fdw Release 2.5.3 版本（https://github.com/EnterpriseDB/mysql_fdw/archive/REL-2_5_3.tar.gz ）进行开发适配。

编译和使用mysql_fdw需要环境上包含MariaDB的开发包，所以openGauss默认不编译mysql_fdw，下面依次介绍如何编译和使用mysql_fdw。

## 编译mysql_fdw
编译mysql_fdw需要安装MariaDB的开发库和头文件，推荐使用MariaDB的官方源进行安装，源选择参考： http://downloads.mariadb.org/mariadb/repositories/

配置好源后，使用 **yum install MariaDB-devel MariaDB-shared** 安装相关开发库。另外**MariaDB-client**是MariaDB的客户端工具，也可以根据需要安装，用于连接MariaDB进行测试。

安装好开发包后，就可以开始编译mysql_fdw了。编译时需要在执行**configure**时，加入 **--enable-mysql-fdw** 选项。后续按照正常的openGauss编译方式编译即可。（openGauss的编译参考 **[软件安装编译](../Compilationguide/软件安装编译.md)** ）

编译完成后，编译产物为 **mysql_fdw.so** ，位于安装目录的 **lib/postgresql/** 下。mysql_fdw相关的sql文件和control文件，位于安装目录的 **share/postgresql/extension/** 下。

如果编译安装时，没有加入 **--enable-mysql-fdw** 选项，可以在openGauss安装完成后，再次编译mysql_fdw，然后手动将编译产物 **mysql_fdw.so** 放到对应的安装目录 **lib/postgresql/** ，将 **mysql_fdw--1.0--1.1.sql，mysql_fdw--1.1.sql，mysql_fdw--1.0.sql，mysql_fdw.control** 放到对应的安装目录 **share/postgresql/extension/** 即可。

## 使用mysql_fdw
-    使用mysql_fdw需要连接MariaDB或者MySQL Server，MariaDB或MySQL Server请自行安装。
-    加载mysql_fdw扩展：**CREATE EXTENSION mysql_fdw;**
-    创建服务器对象：**[CREATE SEVER](CREATE-SERVER.md)**
-    创建用户映射：**[CREATE USER MAPPING](CREATE-USER-MAPPING.md)**
-    创建外表：**[CREATE FOREIGN TABLE](CREATE-FOREIGN-TABLE.md)** 外表的表结构需要与MySQL/MariaDB侧的表结构保持一致。注意MySQL/MariaDB侧的表的第一个字段必须具有唯一性约束（如PRIMARY KEY、UNIQUE等）。
-    对外表做正常的操作，如 **[INSERT](INSERT.md)** 、 **[UPDATE](UPDATE.md)** 、 **[DELETE](DELETE.md)** 、 **[SELECT](SELECT.md)** 、 **[EXPLAIN](EXPLAIN.md)** 、 **[ANALYZE](ANALYZE-ANALYSE.md)** 、 **[COPY](COPY.md)** 等。
-    删除外表：**[DROP FOREIGN TABLE](DROP-FOREIGN-TABLE.md)**
-    删除用户映射：**[DROP USER MAPPING](DROP-USER-MAPPING.md)**
-    删除服务器对象：**[DROP SERVER](DROP-SERVER.md)**
-    删除扩展：**DROP EXTENSION mysql_fdw;**
## 常见问题
-    在openGauss上建立外表时，不会同步在MariaDB/MySQL Server上建表，需要自己利用MariaDB/MySQL Server的客户端连接MariaDB/MySQL Server建表。
-    创建USER MAPPING时使用的MariaDB/MySQL Server用户需要有远程连接MariaDB/MySQL Server及对表相关操作的权限。使用外表前，可以在openGauss server所在的机器上，使用MariaDB/MySQL Server的客户端，使用对应的用户名密码确认能否成功连接MariaDB/MySQL Server并进行操作。
-    对外表执行DML操作时，出现 **Can't initialize character set SQL_ASCII (path: compiled_in)** 错误。由于MariaDB不支持**SQL_ASCII**编码格式，目前只能通过修改openGauss database的编码格式解决该问题。修改database编码格式的方式为 **update pg_database set encoding = pg_char_to_encoding('UTF-8') where datname = 'postgres';** datname根据实际情况填写。注意修改完编码格式后，需要重新开启一个gsql会话，才能使mysql_fdw使用更新后的参数。也可以通过在执行 **gs_initdb** 时，使用 **--locale=LOCALE** ，指定默认的编码格式为 **非SQL_ASCII** 编码。
## 已知问题
-   两个mysql外表间的**SELECT JOIN**不支持下推到MariaDB/MySQL Server执行，会被分成两条SQL语句传递到MariaDB/MySQL Server执行，然后在openGauss处汇总处理结果。
-   不支持**IMPORT FOREIGN SCHEMA**语法。
-   不支持对外表进行**CREATE TRIGGER**操作。
