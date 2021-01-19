# 使用gsql连接<a name="ZH-CN_TOPIC_0289900019"></a>

gsql是openGauss提供的在命令行下运行的数据库连接工具。此工具除了具备操作数据库的基本功能，还提供了若干高级特性，便于用户使用。本节只介绍如何使用gsql连接数据库，关于gsql使用方法的更多信息请参考《工具参考》中“客户端工具 \> gsql”章节。

## 注意事项<a name="zh-cn_topic_0283137029_zh-cn_topic_0237120292_zh-cn_topic_0062050379_s8dfe50d001084ac9ad79a79a8f471e8a"></a>

缺省情况下，客户端连接数据库后处于空闲状态时会根据参数[session\_timeout](zh-cn_topic_0289899967.md#zh-cn_topic_0283137371_zh-cn_topic_0237124696_zh-cn_topic_0059778664_see4820fb6c024e0aa4c56882aeae204a)的默认值自动断开连接。如果要关闭超时设置，设置参数[session\_timeout](zh-cn_topic_0289899967.md#zh-cn_topic_0283137371_zh-cn_topic_0237124696_zh-cn_topic_0059778664_see4820fb6c024e0aa4c56882aeae204a)为0即可。

## 前提条件<a name="zh-cn_topic_0283137029_zh-cn_topic_0237120292_zh-cn_topic_0062050379_section2863008216400"></a>

已[确认连接信息](zh-cn_topic_0289899830.md)。

## 本地连接数据库

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
    gsql ((openGauss x.x.x build 50dc16a6) compiled at 2020-11-29 05:49:21 commit 1071 last mr 1373)
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    postgres=# 
    ```

    omm用户是管理员用户，因此系统显示“DBNAME=\#”。若使用普通用户身份登录和连接数据库，系统显示“DBNAME=\>”。

    “Non-SSL connection”表示未使用SSL方式连接数据库。如果需要高安全性时，请[使用SSL连接](zh-cn_topic_0289900924.md)。

3.  首次登录需要修改密码。原始密码为安装openGauss数据库手动输入的密码，具体请参见《安装指南》中“安装openGauss \> 执行安装”章节，此处需将原始密码修改为自定义的密码，例如Mypwd123，命令如下：

    ```
    postgres=# ALTER ROLE omm IDENTIFIED BY 'Mypwd123' REPLACE 'XuanYuan@2012';
    ```

4.  退出数据库。

    ```
    postgres=# \q
    ```

## 密态数据库连接操作

1.  以操作系统用户omm登录数据库主节点。

2.  连接数据库。

    数据库安装完成后，默认生成名称为postgres的数据库。第一次连接数据库时可以连接到此数据库。

    执行如下命令连接数据库。

    ```
    gsql -d postgres -p 8000 -C
    ```

    -C表示密态数据库开启，可以创建密钥和加密表。其它参数请参见[本地连接数据库](#本地连接数据库)。

    连接成功后，系统显示类似如下信息：

    ```
    gsql ((GaussDB Kernel VxxxRxxxCxxopenGauss x.x.x build 50dc16a6) compiled at 2020-11-24 20:03:57 commit 1093 last mr 1793 debug)
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    postgres=#
    ```

3.  退出数据库。

    ```
    postgres=# \q
    ```

## 远程连接数据库

1.  完成远程连接配置，操作步骤参见[配置服务端远程连接](zh-cn_topic_0289899869.md)。
2.  在客户端机器（10.10.0.30）上，上传客户端工具包并配置gsql的执行环境变量。此处以openEuler环境为例。
    1.  以root用户登录客户端机器。
    2.  创建“/tmp/tools”目录。

        ```
        mkdir /tmp/tools
        ```

    3.  获取软件安装包中的“openGauss-x.x.x-openEuler-64bit-Libpq.tar.gz”上传到“/tmp/tools”路径下。

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >-   软件包相对位置为安装时所放位置，根据实际情况填写。
        >-   不同的操作系统，工具包文件名称会有差异。请根据实际的操作系统类型选择对应的工具包。

    4.  解压文件。

        ```
        cd /tmp/tools
        tar -zxvf openGauss-x.x.x-openEuler-64bit-Libpq.tar.gz
        ```

    5.  登录数据库主节点所在的服务器，拷贝数据库安装目录下的bin目录到客户端主机的“/tmp/tools”路径下。

        ```
        scp -r /opt/huawei/install/app/bin root@10.10.0.30:/tmp/tools
        ```

        其中，/opt/huawei/install/app为clusterconfig.xml文件中配置的\{gaussdbAppPath\}路径，10.10.0.30为客户端主机ip。

    6.  登录客户端所在主机，设置环境变量。

        打开“\~/.bashrc”文件。

        ```
        vi ~/.bashrc
        ```

        在其中输入如下内容后，使用“:wq!”命令保存并退出。

        ```
        export PATH=/tmp/tools/bin:$PATH
        export LD_LIBRARY_PATH=/tmp/tools/lib:$LD_LIBRARY_PATH
        ```

    7.  使环境变量配置生效。

        ```
        source ~/.bashrc
        ```

3.  连接数据库。

    数据库安装完成后，默认生成名称为postgres的数据库。第一次连接数据库时可以连接到此数据库。

    ```
    gsql -d postgres -h 10.10.0.11 -U jack -p 8000 -W Test@123
    ```

    postgres为需要连接的数据库名称，10.10.0.11为数据库主节点所在的服务器IP地址，jack为连接数据库的用户，8000为数据库主节点的端口号，Test@123为连接数据库用户jack的密码。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   连接openGauss的机器与openGauss不在同一网段时，-h指定的IP地址应为Manager界面上所设的coo.cooListenIp2（应用访问IP）的取值。
    >-   禁止使用omm用户进行远程连接数据库。


