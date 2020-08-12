# oracle_fdw
oracle_fdw是一款开源插件，github地址： https://github.com/laurenz/oracle_fdw 。openGauss基于开源的 oracle_fdw Release 2.2.0 版本（https://github.com/laurenz/oracle_fdw/archive/ORACLE_FDW_2_2_0.tar.gz ）进行开发适配。

编译和使用oracle_fdw需要环境上包含Oracle的开发包，所以openGauss默认不编译oracle_fdw，下面依次介绍如何编译和使用oracle_fdw。

## 编译oracle_fdw
编译oracle_fdw需要安装Oracle的开发库和头文件，相关文件可以在Oracle的官方网站上下载： https://www.oracle.com/database/technologies/instant-client/downloads.html

选择合适的运行环境和版本，下载**Basic Package**和**SDK Package**并安装。另外**SQLPlus Package**是Oracle的客户端工具，也可以根据需要安装，用于连接Oracle Server进行测试。

安装好开发包后，就可以开始编译oracle_fdw了。编译时需要在执行**configure**时，加入 **--enable-oracle-fdw** 选项。后续按照正常的openGauss编译方式编译即可。（openGauss的编译参考 **[软件安装编译](../Compilationguide/软件安装编译.md)** ）

编译完成后，编译产物为 **oracle_fdw.so**，位于安装目录的 **lib/postgresql/** 下。oracle_fdw相关的sql文件和control文件，位于安装目录的 **share/postgresql/extension/** 下。

如果编译安装时，没有加入 **--enable-oracle-fdw** 选项，可以在openGauss安装完成后，再次编译oracle_fdw，然后手动将编译产物 **oracle_fdw.so** 放到对应的安装目录 **lib/postgresql/** ，将 **oracle_fdw--1.0--1.1.sql，oracle_fdw--1.1.sql，oracle_fdw.control** 放到对应的安装目录 **share/postgresql/extension/** 即可。

## 使用oracle_fdw
使用oracle_fdw需要连接Oracle，Oracle server请自行安装。
-    加载oracle_fdw扩展：**CREATE EXTENSION oracle_fdw;**
-    创建服务器对象：**[CREATE SEVER](CREATE-SERVER.md)**
-    创建用户映射：**[CREATE USER MAPPING](CREATE-USER-MAPPING.md)**
-    创建外表：**[CREATE FOREIGN TABLE](CREATE-FOREIGN-TABLE.md)** 外表的表结构需要与Oracle侧的表结构保持一致。注意Oracle server侧的表的第一个字段必须具有唯一性约束（如PRIMARY KEY、UNIQUE等）。
-    对外表做正常的操作，如 **[INSERT](INSERT.md)** 、 **[UPDATE](UPDATE.md)** 、 **[DELETE](DELETE.md)** 、 **[SELECT](SELECT.md)** 、 **[EXPLAIN](EXPLAIN.md)** 、 **[ANALYZE](ANALYZE-ANALYSE.md)** 、 **[COPY](COPY.md)** 等。
-    删除外表：**[DROP FOREIGN TABLE](DROP-FOREIGN-TABLE.md)**
-    删除用户映射：**[DROP USER MAPPING](DROP-USER-MAPPING.md)**
-    删除服务器对象：**[DROP SERVER](DROP-SERVER.md)**
-    删除扩展：**DROP EXTENSION oracle_fdw;**
## 常见问题
-   在openGauss上建立外表时，不会同步在Oracle上建表，需要自己利用Oracle的客户端连接Oracle建表。
-   执行**CREATE USER MAPPING**时使用的Oracle用户需要有远程连接Oracle及对表相关操作的权限。使用外表前，可以在openGauss server所在的机器上，使用Oracle的客户端，使用对应的用户名密码确认能否成功连接Oracle并进行操作。
-   执行 **CREATE EXTENSION oracle_fdw;** 时，出现 **libclntsh.so: cannot open shared object file: No such file or directory** 。原因是Oracle的开发库libclntsh.so不在系统的相关路径中，可以先找到libclntsh.so的具体路径，然后将该so文件所在的文件夹加到 **/etc/ld.so.conf** 中。比如libclntsh.so的路径为  **/usr/lib/oracle/11.2/client64/lib/libclntsh.so.11.1** ，那么就将该文件的路径 **/usr/lib/oracle/11.2/client64/lib/** 加到 **/etc/ld.so.conf** 文件末尾。然后执行 **ldconfig** 使修改生效即可。注意此操作需要 **root** 权限。

## 已知问题
-   两个oracle外表间的**SELECT JOIN**不支持下推到Oracle server执行，会被分成两条SQL语句传递到Oracle执行，然后在openGauss处汇总处理结果。
-   不支持**IMPORT FOREIGN SCHEMA**语法。
-   不支持对外表进行**CREATE TRIGGER**操作。