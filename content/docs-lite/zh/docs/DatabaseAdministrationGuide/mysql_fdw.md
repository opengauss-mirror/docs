# mysql\_fdw<a name="ZH-CN_TOPIC_0289900468"></a>

mysql\_fdw是一款[开源插件](https://github.com/EnterpriseDB/mysql_fdw)。openGauss基于开源的[mysql\_fdw Release 2.5.3 版本](https://github.com/EnterpriseDB/mysql_fdw/archive/REL-2_5_3.tar.gz)进行开发适配。

编译和使用mysql\_fdw需要环境上包含MariaDB的开发包，所以openGauss默认不编译mysql\_fdw，下面依次介绍如何编译和使用mysql\_fdw。

## 编译mysql\_fdw<a name="zh-cn_topic_0283137373_section206261540193912"></a>

编译mysql\_fdw需要安装MariaDB的开发库和头文件，推荐使用MariaDB的[官方源](http://downloads.mariadb.org/mariadb/repositories)进行安装。

配置好源后，使用**yum install MariaDB-devel MariaDB-shared**安装相关开发库。另外**MariaDB-client**是MariaDB的客户端工具，也可以根据需要安装，用于连接MariaDB进行测试。

示例版本如下:

操作系统: CentOS 7.6 x86

yum安装的mysql开发库版本:

```makefile
[root@kwemhisprc10431 peilq_package]# yum list installed | grep mariadb
MariaDB-common.x86_64                   10.5.6-1.el7.centos            @mariadb
MariaDB-compat.x86_64                   10.5.6-1.el7.centos            @mariadb
MariaDB-devel.x86_64                    10.5.6-1.el7.centos            @mariadb
MariaDB-shared.x86_64                   10.5.6-1.el7.centos            @mariadb
galera-4.x86_64                         26.4.5-1.el7.centos            @mariadb
```



安装好开发包后，就可以开始编译mysql\_fdw了。编译时需要在执行**configure**时，加入 **--enable-mysql-fdw** 选项。后续按照正常的openGauss编译方式编译即可。（openGauss的编译参考  **软件安装编译**  ）

编译完成后，编译产物为**mysql\_fdw.so**  ，位于安装目录的**lib/postgresql/**  下。mysql\_fdw相关的sql文件和control文件，位于安装目录的  **share/postgresql/extension/** 下。

如果编译安装时，没有加入 **--enable-mysql-fdw** 选项，可以在openGauss安装完成后，再次编译mysql\_fdw，然后手动将编译产物**mysql\_fdw.so**放到对应的安装目录  **lib/postgresql/**，将  **mysql\_fdw--1.0--1.1.sql、mysql\_fdw--1.1.sql，mysql\_fdw--1.0.sql，mysql\_fdw.control**  放到对应的安装目录  **share/postgresql/extension/**  即可。

## 使用mysql\_fdw<a name="zh-cn_topic_0283137373_section1776874817393"></a>

-   使用mysql\_fdw需要连接MariaDB或者MySQL Server，MariaDB或MySQL Server请自行安装。

-   加载mysql\_fdw扩展：**CREATE EXTENSION mysql\_fdw;**

-   创建服务器对象：**CREATE SERVER**

-   创建用户映射：**CREATE USER MAPPING**

-   创建外表：**CREATE FOREIGN TABLE**  外表的表结构需要与MySQL/MariaDB侧的表结构保持一致。注意MySQL/MariaDB侧的表的第一个字段必须具有唯一性约束（如PRIMARY KEY、UNIQUE等）。

-   对外表做正常的操作，如  **INSERT**  、  **UPDATE**  、  **DELETE**  、  **SELECT**  、  **EXPLAIN**  、  **ANALYZE**  、  **COPY**  等。

-   删除外表：**DROP FOREIGN TABLE**

-   删除用户映射：**DROP USER MAPPING**

-   删除服务器对象：**DROP SERVER**

-   删除扩展：**DROP EXTENSION mysql\_fdw;**


## 常见问题<a name="zh-cn_topic_0283137373_section7506175533915"></a>

-   在openGauss上建立外表时，不会同步在MariaDB/MySQL Server上建表，需要自己利用MariaDB/MySQL Server的客户端连接MariaDB/MySQL Server建表。

-   创建USER MAPPING时使用的MariaDB/MySQL Server用户需要有远程连接MariaDB/MySQL Server及对表相关操作的权限。使用外表前，可以在openGauss server所在的机器上，使用MariaDB/MySQL Server的客户端，使用对应的用户名密码确认能否成功连接MariaDB/MySQL Server并进行操作。

-   对外表执行DML操作时，出现**Can't initialize character set SQL\_ASCII \(path: compiled\_in\)**  错误。由于MariaDB不支持**SQL\_ASCII**编码格式，目前只能通过修改openGauss database的编码格式解决该问题。修改database编码格式的方式为**update pg\_database set encoding = pg\_char\_to\_encoding\('UTF-8'\) where datname = 'postgres';**  datname根据实际情况填写。注意修改完编码格式后，需要重新开启一个gsql会话，才能使mysql\_fdw使用更新后的参数。也可以通过在执行  **gs\_initdb**  时，使用 **--locale=LOCALE**  ，指定默认的编码格式为  **非SQL\_ASCII**  编码。


## 注意事项<a name="zh-cn_topic_0283137373_section17197204403"></a>

-   两个mysql外表间的**SELECT JOIN**不支持下推到MariaDB/MySQL Server执行，会被分成两条SQL语句传递到MariaDB/MySQL Server执行，然后在openGauss处汇总处理结果。

-   不支持**IMPORT FOREIGN SCHEMA**语法。

-   不支持对外表进行**CREATE TRIGGER**操作。


