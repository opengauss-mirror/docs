# 从这里开始

本节描述使用数据库的基本操作。通过此节您可以完成创建数据库、创建表及向表中插入数据和查询表中数据等操作。

## 前提条件<a name="zh-cn_topic_0283136717_zh-cn_topic_0237120268_zh-cn_topic_0065727379_section41248418165624"></a>

openGauss正常运行。

## 操作步骤<a name="zh-cn_topic_0283136717_zh-cn_topic_0237120268_zh-cn_topic_0065727379_section62139327164538"></a>

1.  以操作系统用户omm登录数据库主节点。

    若不确定数据库主节点部署在哪台服务器，请参考[确认连接信息](确认连接信息.md)。

2.  连接数据库。

    数据库安装完成后，默认生成名称为postgres的数据库。第一次连接数据库时可以连接到此数据库。

    执行如下命令连接数据库。

    ```
    gsql -d postgres -p 8000
    ```

    其中postgres为需要连接的数据库名称，8000为数据库主节点的端口号。请根据实际情况替换。另外，也可以使用如下任一命令连接数据库。

    ```
    gsql postgres://omm:Gauss_234@127.0.0.1:8000/postgres -r
    gsql -d "host=127.0.0.1 port=8000 dbname=postgres user=omm password=Gauss_234"
    ```

    连接成功后，系统显示类似如下信息：

    ```
    gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    openGauss=# 
    ```

    omm用户是管理员用户，因此系统显示“DBNAME=\#”。若使用普通用户身份登录和连接数据库，系统显示“DBNAME=\>”。

    “Non-SSL connection”表示未使用SSL方式连接数据库。如果需要高安全性时，请使用SSL连接。

    >![](public_sys-resources/icon-note.png) **说明：** 
    >gsql是本产品提供的命令行方式的数据库连接工具。更多的数据库连接办法可参考[连接数据库](连接数据库.md)。

3. 创建数据库用户。

    默认只有openGauss安装时创建的管理员用户可以访问初始数据库，您还可以创建其他数据库用户帐号。如果使用如下命令创建用户，请记得修改密码，openGauss的默认密码规则为：至少包含英文大小写、数字、特殊符号中的3类不同的字符组合。

    ```
   openGauss=# CREATE USER joe WITH PASSWORD "xxxxxxxxx";
   ```

    当结果显示为如下信息，则表示创建成功。

   ```
   CREATE ROLE
   ```

    如上创建了一个用户名为joe，密码为xxxxxxxxx的用户。

    如下命令为设置joe用户为系统管理员。

    ```sql
    openGauss=# GRANT ALL PRIVILEGES TO joe;
    ```

    使用GRANT命令进行相关权限设置，具体操作请参考[GRANT](../SQLReference/GRANT.md)。

    **引申信息：** 关于数据库用户的更多信息请参考[管理用户及权限](../DatabaseAdministrationGuide/管理用户及权限.md)。


4.  创建数据库。

    ```
    openGauss=#  CREATE DATABASE db_tpcc OWNER joe;
    ```

    当结果显示为如下信息，则表示创建成功。

    ```
    CREATE DATABASE
    ```

    db\_tpcc数据库创建完成后，就可以按如下方法退出postgres数据库，使用新用户连接到db\_tpcc数据库执行创建表等操作。您也可以选择继续在默认的postgres数据库下进行后续的体验。

    ```
    openGauss=#  \q
    gsql -d db_tpcc -p 8000 -U joe
    Password for user joe:
    gsql ((openGauss x.x.x build 50dc16a6) compiled at 2020-11-29 05:49:21 commit 1071 last mr 1373)
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
     
    db_tpcc=> 
    ```

    创建SCHEMA。

    ```
    db_tpcc=> CREATE SCHEMA joe AUTHORIZATION joe;
    ```

    当结果显示为如下信息，则表示创建SCHEMA成功。

    ```
    CREATE SCHEMA
    ```

    **引申信息：**

    数据库默认创建在pg\_default表空间下。若要指定表空间，可以使用如下语句：

    ```
    openGauss=#  CREATE DATABASE db_tpcc WITH TABLESPACE = hr_local;
    CREATE DATABASE
    ```

    其中hr\_local为表空间名称，关于如何创建表空间，请参考[创建和管理表空间](../DatabaseAdministrationGuide/创建和管理表空间.md)。

5. 创建表。

   - 创建一个名称为mytable，只有一列的表。字段名为firstcol，字段类型为integer。

     ```
     db_tpcc=>  CREATE TABLE mytable (firstcol int);
     ```

     ```
     CREATE TABLE
     ```

   - 向表中插入数据：

     ```
     db_tpcc=> INSERT INTO mytable values (100);
     ```

        当结果显示为如下信息，则表示插入数据成功。

     ```
     INSERT 0 1
     ```

   - 查看表中数据：

     ```
     db_tpcc=> SELECT * from mytable;
      firstcol 
     ----------
           100
     (1 row)
     ```

   **引申信息：**

   -   默认情况下，新的数据库对象是创建在“$user”模式下的，例如刚刚新建的表。关于模式的更多信息请参考[创建和管理schema](../DatabaseAdministrationGuide/创建和管理schema.md)。
   -   关于创建表的更多信息请参见[创建和管理表](../DatabaseAdministrationGuide/创建和管理普通表.md)。
   -   除了创建的表以外，数据库还包含很多系统表。这些系统表包含openGauss安装信息以及openGauss上运行的各种查询和进程的信息。可以通过查询系统表来收集有关数据库的信息。请参见[查看系统表](../DatabaseReference/查看系统表.md)。

       openGauss支持行列混合存储，为各种复杂场景下的交互分析提供较高的查询性能，关于存储模型的选择，请参考[规划存储模型](../DeveloperGuide/规划存储模型.md)。

   




