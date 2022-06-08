# 用于Oracle的外部数据包装器<a name="ZH-CN_TOPIC_0289899897"></a>

oracle\_fdw（foreign data wrapper for oracle）用于Oracle的外部数据包装器，是一款[开源插件](https://github.com/laurenz/oracle_fdw)。openGauss基于开源的[oracle\_fdw Release 2.2.0 版本](https://github.com/laurenz/oracle_fdw/archive/ORACLE_FDW_2_2_0.tar.gz)进行开发适配。

编译和使用oracle\_fdw需要环境上包含Oracle的开发包，所以openGauss默认不编译oracle\_fdw，下面依次介绍如何编译和使用oracle\_fdw。

## 编译oracle\_fdw<a name="zh-cn_topic_0283137635_section195674224432"></a>

编译oracle\_fdw需要安装Oracle的开发库和头文件。

选择合适的运行环境和版本，下载**Basic Package**和**SDK Package**并安装。另外**SQLPlus Package**是Oracle的客户端工具，也可以根据需要安装，用于连接Oracle Server进行测试。

安装好开发包后，就可以开始编译oracle\_fdw了。编译时需要在执行**configure**时，加入  **--enable-oracle-fdw**  选项。后续按照正常的openGauss编译方式编译即可。（openGauss的编译参考  **软件安装编译**  ）

编译完成后，编译产物为  **oracle\_fdw.so**，位于安装目录的  **lib/postgresql/**下。oracle\_fdw相关的sql文件和control文件，位于安装目录的  **share/postgresql/extension/**下。

如果编译安装时，没有加入  **--enable-oracle-fdw**  选项，可以在openGauss安装完成后，再次编译oracle\_fdw，然后手动将编译产物  **oracle\_fdw.so**放到对应的安装目录  **lib/postgresql/**  ，将  **oracle\_fdw--1.0--1.1.sql，oracle\_fdw--1.1.sql，oracle\_fdw.control**放到对应的安装目录  **share/postgresql/extension/**即可。

## 使用oracle\_fdw<a name="zh-cn_topic_0283137635_section15777182920432"></a>

-   使用oracle\_fdw需要连接Oracle，Oracle server请自行安装。

-   加载oracle\_fdw扩展：**CREATE EXTENSION oracle\_fdw;**

-   创建服务器对象：**CREATE SERVER**

-   创建用户映射：**CREATE USER MAPPING**

-   创建外表：**CREATE FOREIGN TABLE**  外表的表结构需要与Oracle数据库中的表结构保持一致。注意Oracle server侧的表的第一个字段必须具有唯一性约束（如PRIMARY KEY、UNIQUE等）。

-   对外表做正常的操作，如  **INSERT**  、  **UPDATE**  、  **DELETE**  、  **SELECT**  、  **EXPLAIN**  、  **ANALYZE**  、  **COPY**  等。

-   删除外表：**DROP FOREIGN TABLE**

-   删除用户映射：**DROP USER MAPPING**

-   删除服务器对象：**DROP SERVER**

-   删除扩展：**DROP EXTENSION oracle\_fdw；**


## 常见问题<a name="zh-cn_topic_0283137635_section41707373437"></a>

-   在openGauss上建立外表时，不会在Oracle数据库中同步建表，需要自行在Oracle数据库中建表。

-   执行**CREATE USER MAPPING**时使用的Oracle用户需要有远程连接Oracle数据库及对表相关操作的权限。使用外表前，可以在openGauss server所在的机器上，使用Oracle的客户端，使用对应的用户名密码确认能否成功连接Oracle并进行操作。

-   执行**CREATE EXTENSION oracle\_fdw;**时，出现  **libclntsh.so: cannot open shared object file: No such file or directory**。原因是Oracle的开发库libclntsh.so不在系统的相关路径中，可以先找到libclntsh.so的具体路径，然后将该so文件所在的文件夹加到  **/etc/ld.so.conf**  中。比如libclntsh.so的路径为   **/usr/lib/oracle/11.2/client64/lib/libclntsh.so.11.1**  ，那么就将该文件的路径  **/usr/lib/oracle/11.2/client64/lib/**  加到  **/etc/ld.so.conf**  文件末尾。然后执行  **ldconfig**使修改生效即可。注意此操作需要**root**权限。


## 注意事项<a name="zh-cn_topic_0283137635_section12951245164312"></a>

-   两个Oracle外表间的**SELECT JOIN**不支持下推到Oracle server执行，会被分成两条SQL语句传递到Oracle执行，然后在openGauss处汇总处理结果。

-   不支持**IMPORT FOREIGN SCHEMA**语法。

-   不支持对外表进行**CREATE TRIGGER**操作。


