# 使用gsql本地连接<a name="ZH-CN_TOPIC_0241704254"></a>

gsql是openGaussopenGauss提供的在命令行下运行的数据库连接工具。此工具除了具备操作数据库的基本功能，还提供了若干高级特性，便于用户使用。本节只介绍如何使用gsql连接数据库，关于gsql使用方法的更多信息请参考gsql。

## 注意事项<a name="zh-cn_topic_0241234230_zh-cn_topic_0085434651_zh-cn_topic_0059781996_zh-cn_topic_0062050379_s8dfe50d001084ac9ad79a79a8f471e8a"></a>

缺省情况下，客户端连接数据库后长期处于空闲状态，不会自动断开连接。

如果要开启自动断开功能，设置参数session\_timeout非0即可。

## 前提条件<a name="zh-cn_topic_0241234230_zh-cn_topic_0085434651_zh-cn_topic_0059781996_zh-cn_topic_0062050379_section2863008216400"></a>

已[确认连接信息](确认连接信息.md)。

## 本地连接数据库<a name="zh-cn_topic_0241234230_zh-cn_topic_0085434651_zh-cn_topic_0059781996_zh-cn_topic_0062050379_sedb32189b5a4410a9a8ac8586f1766a0"></a>

1.  以操作系统用户omm登录数据库主节点。
2.  连接数据库。

    数据库安装完成后，默认生成名称为postgres的数据库。第一次连接数据库时可以连接到此数据库。

    执行如下命令连接数据库。

    ```
    gsql -d postgres -p 8000 -r
    ```

    其中，postgres为需要连接的数据库名称，8000为数据库主节点的端口号。请根据实际情况做替换。

    连接成功后，系统显示如下信息：

    ```
    gsql ((openGauss V300R002C00 build 50dc16a6) compiled at 2019-01-29 05:49:21 commit 1071 last mr 1373)
    Type "help" for help.
    
    postgres=# 
    ```

    omm用户是管理员用户，因此系统显示“DBNAME=\#”。若使用普通用户身份登录和连接数据库，系统显示“DBNAME=\>”。

    如果显示如下信息，表示未使用SSL方式连接数据库。如果需要高安全性时，建议使用SSL连接。SSL连接配置过程详见产品文档。

    ```
    gsql ((openGauss V300R002C00 build 50dc16a6) compiled at 2019-01-29 05:49:21 commit 1071 last mr 1373)
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    postgres=# 
    ```

3.  退出数据库。

    ```
    postgres=# \q
    ```


