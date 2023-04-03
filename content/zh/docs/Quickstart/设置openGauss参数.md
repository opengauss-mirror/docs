# 设置openGauss参数<a name="ZH-CN_TOPIC_0241704229"></a>

<!-- TOC -->

- [设置客户端认证策略](#设置客户端认证策略)
- [设置配置文件参数](#设置配置文件参数)

<!-- /TOC -->

## 设置客户端认证策略

目前openGauss配置文件“pg\_hba.conf”中的参数默认值都是单机的配置模式。应用程序可以通过调用gs\_guc来设置适合自己的参数。更多配置请参见[《开发者指南》](https://docs.opengauss.org/zh/docs/2.1.0/docs/Developerguide/Developerguide.html)。

### 语法

设置客户端认证策略，同时发送信号量到数据库进程。

```
gs_guc [ set | reload ] [-N NODE-NAME] [-I INSTANCE-NAME | -D DATADIR] -h "HOSTTYPE DATABASE USERNAME IPADDR-WITH-IPMASK AUTHMEHOD authentication-options" 
```

![](public_sys-resources/icon-note.gif) **说明：** 

authentication-options支持以下选项：

-   trust：不验密，禁止远程主机使用trust方式访问openGauss

-   reject：拒绝访问

-   md5、sha256、cert：客户端证书认证

-   gss：kerberos认证

### 命令参考

-   set

    表示只修改配置文件中的参数。

-   reload

    表示修改配置文件中的参数，同时发送信号量给数据库进程，使其重新加载配置文件。

-   -N

    需要设置的主机名称。

    取值范围：已有主机名称。

    当参数取值为ALL时，表示设置openGauss中所有的主机。

-   -I INSTANCE-NAME

    需要设置的实例名称。

    取值范围：已有实例名称。

    当参数取值为ALL时，表示设置主机中所有的实例。

- -D

    需要执行命令的openGauss实例路径。使用encrypt命令时，此参数表示指定的密码文件生成的路径。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >-D与-I不能一块使用。

-   -h host-auth-policy

    指定需要在“pg\_hba.conf”增加的客户端认证策略。

    取值范围：

    -   HOSTTYPE DATABASE USERNAME IPADDR IPMASK \[authentication-options\]
    -   HOSTTYPE DATABASE USERNAME IPADDR-WITH-IPMASK \[authentication-options\]
    -   HOSTTYPE DATABASE USERNAME HOSTNAME \[authentication-options \]

    HOSTTYPE是必输参数，取值范围如下：

    -   local
    -   host
    -   hostssl
    -   hostnossl

    其中“local”是一个Unix域套接字，“host”是普通或SSL加密的TCP / IP套接字，“hostssl”是SSL加密的TCP / IP套接字，“hostnossl”是一个纯TCP / IP套接字。

    authentication-options是可选输入，取值范围如下：

    -   trust
    -   reject
    -   md5
    -   sha256
    -   cert
    -   gss

    详细的参数说明请参见“pg\_hba.conf”配置文件中的描述。


### 示例

设置客户端认证策略

```
gs_guc set -N all -I all -h "host replication testuser 10.252.95.191/32 sha256"

Total instances: 2. Failed instances: 0.
Success to perform gs_guc!
```

## 设置配置文件参数

目前openGauss配置文件“postgresql.conf”中的参数默认值都是单机的配置模式。应用程序可以通过调用gs\_guc来设置适合自己的参数。

### 语法

-   同时修改配置文件中参数（postgresql.conf）

    ```
    gs_guc set [-N NODE-NAME] [-I INSTANCE-NAME | -D DATADIR] -c "parameter = value"
    ```

-   将已设置的参数值修改为默认值

    ```
    gs_guc [ set | reload ] [-N NODE-NAME] [-I INSTANCE-NAME | -D DATADIR] -c "parameter"
    ```


### 命令参考

-   set

    表示只修改配置文件中的参数。

-   reload

    表示修改配置文件中的参数，同时发送信号量给数据库进程，使其重新加载配置文件。

-   -N

    需要设置的主机名称。

    取值范围：已有主机名称。

    当参数取值为ALL时，表示设置openGauss中所有的主机。

-   -I INSTANCE-NAME

    需要设置的实例名称。

    取值范围：已有实例名称。

    当参数取值为ALL时，表示设置主机中所有的实例。

- -D

    需要执行命令的openGauss实例路径。使用encrypt命令时，此参数表示指定的密码文件生成的路径。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >-D 与-I不能一块使用。

-   -c parameter=value

    要设定的openGauss配置参数的名称和参数值。

    >![](public_sys-resources/icon-note.gif) **说明：**    
    >-   如果参数是一个字符串变量，则使用-c parameter="'value'"或者使用-c "parameter = 'value'"。   
    >-   当使用gs\_guc set/reload为"log\_directory" 恢复默认值时，其默认值会被置为具体的data目录。

    取值范围：postgresql.conf中的所有参数。

-   -U, --keyuser=USER

### 示例

示例1：同时修改数据库节点的参数，例如修改数据库允许的最大连接数为800。修改后需要重启数据库才能生效。

```
gs_guc set -N all -I all -c "max_connections = 800"

Total instances: 2. Failed instances: 0.
Success to perform gs_guc!
```
