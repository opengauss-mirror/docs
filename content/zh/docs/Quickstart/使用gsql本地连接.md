# 使用gsql本地连接<a name="ZH-CN_TOPIC_0241704254"></a>

gsql是openGauss提供的在命令行下运行的数据库连接工具。此工具除了具备操作数据库的基本功能，还提供了若干高级特性，便于用户使用。本节只介绍如何使用gsql连接数据库，关于gsql使用方法的更多信息请参考gsql。

## 注意事项<a name="zh-cn_topic_0241234230_zh-cn_topic_0085434651_zh-cn_topic_0059781996_zh-cn_topic_0062050379_s8dfe50d001084ac9ad79a79a8f471e8a"></a>

缺省情况下，客户端连接数据库后处于空闲状态时会根据参数session\_timeout的默认值自动断开连接。如果要关闭超时设置，设置参数session\_timeout为0即可。

## 前提条件<a name="zh-cn_topic_0241234230_zh-cn_topic_0085434651_zh-cn_topic_0059781996_zh-cn_topic_0062050379_section2863008216400"></a>

已确认连接信息。

## 本地连接数据库<a name="zh-cn_topic_0241234230_zh-cn_topic_0085434651_zh-cn_topic_0059781996_zh-cn_topic_0062050379_sedb32189b5a4410a9a8ac8586f1766a0"></a>

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
    gsql ((openGauss 1.0.0 build 290d125f) compiled at 2020-05-08 02:59:43 commit 2143 last mr 131
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    postgres=# 
    ```

    omm用户是管理员用户，因此系统显示“DBNAME=\#”。若使用普通用户身份登录和连接数据库，系统显示“DBNAME=\>”。

    “Non-SSL connection”表示未使用SSL方式连接数据库。如果需要高安全性时，请使用SSL连接。

3.  首次登录需要修改密码。原始密码为安装openGauss数据库手动输入的密码，具体请参见《安装指南》中“安装openGauss \> 执行安装”章节，此处需将原始密码修改为自定义的密码，例如Mypwd123，命令如下：

    ```
    postgres=# ALTER ROLE omm IDENTIFIED BY 'Mypwd123' REPLACE 'XuanYuan@2012';
    ```

4.  退出数据库。

    ```
    postgres=# \q
    ```


