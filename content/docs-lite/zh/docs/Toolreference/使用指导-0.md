# 使用指导<a name="ZH-CN_TOPIC_0294749037"></a>

## 背景信息<a name="zh-cn_topic_0059777429_s6837c9e0a8604641a9462dd6f720f91d"></a>

在安装时，推荐使用-D参数调用gs\_initdb初始化数据库。如果由于故障恢复等原因，需要重新初始化一个数据库，可以通过执行gs\_initdb来完成。

-   尽管gs\_initdb会尝试创建相应的数据目录，但可能没有权限执行此操作，因为要创建目录的父目录通常被root所拥有。如果要创建数据目录，首先用root用户创建一个空数据目录，然后用chown把该目录的所有权交给数据库用户。
-   gs\_initdb决定template1数据库的设置，而该设置将会成为其他数据库的默认设置。
-   gs\_initdb初始化数据库的缺省区域和字符集编码。字符集编码、字符编码排序（LC\_COLLATE）和字符集类（LC\_CTYPE，如大写、小写数字等）可以在创建数据库时独立设置。

## 操作步骤<a name="zh-cn_topic_0059777429_s393327da49844162934e6d4e4a38e432"></a>

1.  以操作系统用户omm登录openGauss数据库任一主机。
2.  规划数据库目录。
    1.  切换到root用户。

        ```
        su - root
        ```

    2.  根据提示输入用户名和密码。

3.  进入“/opt/gaussdb”目录，并创建“data1”目录，即DN实例路径。

    ```
    cd /opt/gaussdb
    mkdir data1
    ```

    1.  将data1目录的所有权分配给数据库用户omm，dbgrp是omm所属的用户组。

        ```
        chown omm:dbgrp data1
        ```

    2.  退出root用户。

        ```
        exit
        ```

4.  执行gs\_initdb命令初始化数据库，并根据提示设定密码。

    ```
    gs_initdb /opt/gaussdb/data1 --nodename dn1
    Enter new system admin password:[PASSWORD]
    Enter it again:[PASSWORD]
    ```

    gs\_initdb的语法：

    ```
    gs_initdb [OPTION]... [DATADIR]
    ```

    OPTION参数请参见[命令参考](命令参考-1.md)。


