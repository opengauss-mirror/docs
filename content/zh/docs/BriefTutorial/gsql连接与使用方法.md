# gsql连接与使用方法<a name="ZH-CN_TOPIC_0000001178307592"></a>

openGauss提供了在命令行下运行的数据库连接工具gsql。此工具除了具备操作数据库的基本功能，还提供了若干高级特性，便于用户使用。本节主要介绍如何使用gsql本地连接数据库。您需要提供数据库的名称以及数据库主节点的端口号。

1.  以操作系统用户omm登录数据库主节点。
2.  连接数据库。

    数据库安装完成后，默认生成名称为postgres的数据库。第一次连接数据库时可以连接到此数据库。

    执行如下命令连接数据库。

    ```
    gsql -d postgres -p 8000
    ```

    其中postgres为需要连接的数据库名称，8000为数据库主节点的端口号。请根据实际情况替换。

    连接成功后，系统显示类似如下信息：

    ```
    gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    openGauss=# 
    ```

    omm用户是管理员用户，因此系统显示“DBNAME=\#”。若使用普通用户身份登录和连接数据库，系统显示“DBNAME=\>”。提示符告诉您可以在此输入SQL语句。

    “Non-SSL connection”表示未使用SSL方式连接数据库。

3.  首次登录建议修改密码以提高安全性。命令如下。

    ```
    openGauss=# ALTER ROLE omm IDENTIFIED BY 'XXXXXXXX' REPLACE 'XXXXXXXX';
    ```

4.  gsql提供了高级功能方便您使用数据库。

    gsql程序有一些不属于SQL命令的内部命令。它们以反斜线开头，“\\”。例如：

    -   您可以用下面的命令查询openGauss的版本和版权信息。

        ```
        openGauss=# \copyright
        ```

    -   您可以用下面的命令获取各种openGauss的SQL命令的帮助语法。

        ```
        openGauss=# \h
        ```

    -   您可以用下面的命令查询openGauss中所有的数据和描述信息。

        ```
        openGauss=# \l
        ```

5.  退出数据库。

    ```
    openGauss=# \q
    ```

    缺省情况下，客户端连接数据库后处于空闲状态时间超过参数session\_timeout的默认值（10min）时会自动断开连接。


