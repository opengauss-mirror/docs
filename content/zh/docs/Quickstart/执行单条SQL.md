# 执行单条SQL<a name="ZH-CN_TOPIC_0241704267"></a>

使用客户端工具连接到openGauss执行单条SQL。

## 前提条件<a name="zh-cn_topic_0241234243_zh-cn_topic_0085434673_zh-cn_topic_0059782025_section47789530115226"></a>

已通过客户端工具连接到openGauss，连接方法请参见[zh-cn\_topic\_0241704253.md](zh-cn_topic_0241704253.md)和[使用gsql本地连接](使用gsql本地连接.md)。

## 操作步骤<a name="zh-cn_topic_0241234243_section69631937151618"></a>

方法一：

1.  以操作系统用户omm登录数据库主节点。
2.  使用gsql连接到openGauss服务器。

    ```
    gsql -h 10.180.123.163 -d postgres -U jack -p 8000 -r
    ```

    -d参数指定目标数据库名、-U参数指定数据库用户名、-h参数指定主机名、-p参数指定端口号信息。

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >若未指定数据库名称，则使用初始化时默认生成的数据库名称；若未指定数据库用户名，则默认使用当前操作系统用户作为数据库用户名；当某个值没有前面的参数（-d、-U等）时，若连接的命令中没有指定数据库名（-d）则该参数会被解释成数据库名；如果已经指定数据库名（-d）而没有指定数据库用户名（-U）时，该参数则会被解释成数据库用户名。  

3.  执行SQL语句。

    以创建数据库human\_staff为例。

    ```
    CREATE DATABASE human_staff;
    CREATE DATABASE
    ```

    通常，输入的命令行在遇到分号的时候结束。如果输入的命令行没有错误，结果就会输出到屏幕上。


方法二：

1.  以操作系统用户omm登录数据库主节点。
2.  执行如下命令中的SQL语句。

    ```
    gsql -d postgres -h 10.29.103.168 -U jack -p 8000 -W Gauss@123 -c 'CREATE DATABASE human_staff'
    ```

    gsql工具使用-d参数指定目标数据库名、-U参数指定数据库用户名、-h参数指定主机名、-p参数指定端口号信息，-c参数指定需要执行的SQL。使用该语句时，该用户需要具有相应的权限。


