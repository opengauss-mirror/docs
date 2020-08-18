# gs\_guc<a name="ZH-CN_TOPIC_0249632248"></a>

## 背景信息<a name="zh-cn_topic_0237152338_zh-cn_topic_0059778019_s59e576e934094b3c9a54d6ed555b5671"></a>

目前openGauss配置文件（“postgresql.conf”、“pg\_hba.conf”）中的参数默认值都是单机的配置模式。应用程序可以通过调用gs\_guc来设置适合自己的参数。

gs\_guc工具由操作系统用户omm执行。

-   “gs\_guc-current.log”

    这个文件记录gs\_guc产生的日志。

    默认路径：$GAUSSLOG/bin/gs\_guc。

-   “gs\_guc-年-月-日\_HHMMSS.log”

    当“gs\_guc-current.log”文件大小满16M后，会根据当前时刻生成一个备份文件。

-   “server.key.cipher”，“server.key.rand”

    使用gs\_guc encrypt命令加密用户密码时，如果指定的-M的值为server，则会生成这两个文件。其中“server.key.cipher”存储用户密码的密文，“server.key.rand”存储的是加密因子。

-   “client.key.cipher”，“client.key.rand”

    使用gs\_guc encrypt命令加密用户密码时，如果指定的-M的值为client，则会生成这两个文件。其中“client.key.cipher”存储用户密码的密文，“client.key.rand”存储的是加密因子。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >“client.key.cipher”和“client.key.rand”是不指定-U选项时生成的密文文件和加密因子文件。如果通过-U指定了用户名，则会生成以用户名开头的文件。以指定-U test为例，生成的文件名为:“test.key.cipher、test.key.rand”。


-   “datasource.key.cipher”，“datasource.key.rand”

    使用gs\_guc encrypt命令加密用户密码时，如果指定的-M的值为source，则会生成这两个文件。其中“datasource.key.cipher”存储用户密码的密文，“datasource.key.rand”存储的是加密因子。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >“datasource.key.cipher”和“datasource.key.rand”是创建Data Source对象时调用的密钥文件。gs\_guc生成时即有读权限。使用前需将这两个文件放入各节点目录$GAUSSHOME/bin，且确保具有读权限。


## 语法<a name="zh-cn_topic_0237152338_zh-cn_topic_0059778019_se02e295596714317bc63dc8508898bdd"></a>

-   检查配置文件中参数

    ```
    gs_guc check [-N NODE-NAME] [-I INSTANCE-NAME | -D DATADIR] -c "parameter"
    ```

-   修改配置文件中参数

    ```
    gs_guc set [-N NODE-NAME] [-I INSTANCE-NAME | -D DATADIR] -c "parameter = value"
    ```

-   将已设置的参数值修改为默认值

    ```
    gs_guc [ set | reload ] [-N NODE-NAME] [-I INSTANCE-NAME | -D DATADIR] -c "parameter"
    ```

-   修改配置文件中参数，同时发送信号量到postgresql.conf

    ```
    gs_guc reload [-N NODE-NAME] [-I INSTANCE-NAME | -D DATADIR] -c parameter=value
    ```

-   修改客户端认证策略，同时发送信号量到pg\_hba.conf

    ```
    gs_guc [ set | reload ]  [-N NODE-NAME] [-I INSTANCE-NAME | -D DATADIR] -h "HOSTTYPE DATABASE USERNAME IPADDR-WITH-IPMASK AUTHMEHOD authentication-options option" 
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >authmehod-options支持以下选项：
    >-   trust：不验密，禁止远程主机使用trust方式访问openGauss
    >-   reject：拒绝访问
    >-   md5：md5认证，默认不支持
    >-   sha256：sha256认证（推荐使用）
    >-   cert：客户端证书认证
    >-   gss：kerberos认证

-   注释已经设置的客户端认证策略， 同时发送信号量到pg\_hba.conf

    ```
    gs_guc [ set | reload ] [-N NODE-NAME] [-I INSTANCE-NAME | -D DATADIR] -h "HOSTTYPE DATABASE USERNAME IPADDR-WITH-IPMASK AUTHMEHOD" 
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >如果需要注释已经设置的认证策略，请使用-h "HOSTTYPE DATABASE USERNAME IPADDR-WITH-IPMASK AUTHMEHOD"，不需要指定authmehod-options。

-   显示帮助信息

    ```
    gs_guc -? | --help
    ```

-   显示版本号信息

    ```
    gs_guc -V | --version
    ```

-   生成加密密码文件

    ```
    gs_guc encrypt [-M keymode] -K password [-U username] -D DATADIR
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-K是用户指定的密码，gs\_guc会对该密码进行长度（8<=len<=16）和密码复杂度要求，如果不满足，将会报错。
    >-M是加密类型，当前仅支持server、client和source。默认值为server。


>![](public_sys-resources/icon-note.gif) **说明：** 
>-   gs\_guc工具不支持参数值中包含'\#'的设置。可以使用vi工具通过手工修改配置文件来设置。
>-   如果已经在环境变量中设置PGDATA，则可以省略-D参数。否则提示设置参数失败。
>-   环境变量PGDATA设置方法：先将参数PGDATA设置为_/gaussdb/data_，然后在执行“export PGDATA”使设置生效。
>-   authpolicy包含一串认证参数：HOSTTYPE DATABASE USERNAME IPADDR IPMASK，或者HOSTTYPE DATABASE USERNAME IPADDR-WITH-IPMASK，或者HOSTTYPE DATABASE USERNAME HOSTNAME。
>-   如果设置GUC参数时使用-c "parameter"，则会将已设置的GUC参数值设置成该参数的内核默认值（注意log\_directory和audit\_directory不会被设置为内核参数默认值，而是设为$GAUSSLOG/pg\_audit/instance\_name）。因GUC参数间存在依赖关系，因此请慎用该功能。
>-   设置-c参数时，参数都可以省略双引号。
>-   如果value中含有特殊字符（如$），请转义后使用。
>-   如果同一个配置参数在配置文件里面出现多行，且有两行或多于两行同时生效（即没有用"\#"注释掉），那么只有最后一个配置参数会被设置，而前面的都会被忽略。
>-   通过reload模式设置或修改openGauss节点配置文件（postgresql.conf）的参数，生效存在短暂延迟，有可能导致配置后openGauss各实例参数极短时间不一致。

## 命令参考<a name="zh-cn_topic_0237152338_zh-cn_topic_0059778019_s9f42fc33773a49829076e2e0121d9a5f"></a>

-   set

    表示只修改配置文件中的参数。

-   check

    表示只检查配置文件中的参数。

-   reload

    表示修改配置文件中的参数，同时发送信号量给数据库进程，使其重新加载配置文件。

-   encrypt/generate

    生成加密密码文件。

-   -N

    需要设置的主机名称。

    取值范围：已有主机名称。

    当参数取值为ALL时，表示设置openGauss中所有的主机。

-   -I INSTANCE-NAME

    需要设置的实例名称。

    取值范围：已有实例名称。

    当参数取值为ALL时，表示设置主机中所有的实例。

-   -D

    需要执行命令的openGauss实例路径。使用encrypt命令时，此参数表示指定的密码文件生成的路径。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   与"-I" 不能一块使用

-   -c parameter=value

    要设定的openGauss配置参数的名称和参数值。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   如果参数是一个字符串变量，则使用-c parameter="'value'"或者使用-c "parameter = 'value'"。
    >-   当使用gs\_guc set/reload为"log\_directory" 恢复默认值时，其默认值会被置为具体的data目录。
    >-   当使用gs\_guc reload进行参数设定，并指定-N参数时，当指定的节点为主节点时，主备节点的参数值都会被修改；当指定节点为备节点时，只会修改备节点的参数值，不会修改主节点的参数值。
    >-   当使用gs\_guc reload进行参数设定，未指定-N参数时，当在主节点上执行时，主备节点的参数值都会被修改；当在备节点上执行时，只会修改备节点的参数值，不会修改主节点的参数值。

    取值范围：postgresql.conf中的所有参数。

-   -c parameter

    当进行check操作时，表示需要检查的参数名称；当进行set/reload操作时，表示需要恢复为数据库默认值的参数名称。

-   -h host-auth-policy

    指定需要在“pg\_hba.conf”增加的客户端认证策略。

    取值范围：

    -   HOSTTYPE DATABASE USERNAME IPADDR IPMASK \[authmehod-options\]
    -   HOSTTYPE DATABASE USERNAME IPADDR-WITH-IPMASK \[authmehod-options \]
    -   HOSTTYPE DATABASE USERNAME HOSTNAME \[authmehod-options \]

    HOSTTYPE是必输参数，取值：

    -   local
    -   host
    -   hostssl
    -   hostnossl

    其中“local”是一个Unix域套接字，“host”是普通或SSL加密的TCP / IP套接字，“hostssl”是SSL加密的TCP / IP套接字，“hostnossl”是一个纯TCP / IP套接字。

    authmehod-options是可选输入，取值：

    -   trust
    -   reject
    -   md5
    -   sha256
    -   cert
    -   gss

    详细的参数说明请参见“pg\_hba.conf”配置文件中的描述。

-   -?, --help

    显示帮助信息。

-   -V, --version

    显示版本信息。

-   -M, --keymode=MODE

    设定该密码在数据库运行过程中，用于服务端\(server\)、客户端\(client\)还是创建Data Source对象时调用。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >在使用ssl功能时，会涉及到服务端证书和私钥文件的加密密码和客户端证书和私钥文件的加密密码，在加密存储加密密码时，需要指定模式，否则默认是生成服务端的密码文件。

    取值范围：

    -   server（缺省）
    -   client
    -   source

-   -K PASSWORD

    指定需要加密的密码。

    取值范围：字符串，符合密码复杂度的要求。

-   -U, --keyuser=USER

    指定要加密的用户，隶属于OS用户。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >比如，openGauss可以为每个用户配置不同的ssl证书和私钥文件，指定该选项，可以生成按用户名区分的密码文件。

-   -S CIPHERKEY

    指定需要加密的字符串。

    取值范围：字符串。


## 示例<a name="zh-cn_topic_0237152338_zh-cn_topic_0059778019_s4c5ae191cfdd47a0af220bf67849535e"></a>

示例1：修改数据库允许的最大连接数为800。修改后需要重启数据库才能生效。

```
gs_guc set -D /gaussdb/data/dbnode -c "max_connections = 800" -N plat1

Total instances: 1. Failed instances: 0.
Success to perform gs_guc!
```

示例2：将已设置的数据库允许的最大连接数值修改为默认值。修改后需要重启数据库才能生效。

```
gs_guc set -D /gaussdb/data/dbnode -c "max_connections" -N plat1

Total instances: 1. Failed instances: 0.
Success to perform gs_guc!
```

示例3：设置客户端认证策略

```
gs_guc set -N all -I all -h "host replication testuser 10.252.95.191/32 sha256"

Total instances: 2. Failed instances: 0.
Success to perform gs_guc!
```

示例4：注释清理已经设置的客户端认证策略

```
gs_guc set -N all -I all -h "host replication testuser 10.252.95.191/32"

Total instances: 2. Failed instances: 0.
Success to perform gs_guc!
```

示例5：加密服务器端存储用户密码的明文，避免密码泄露。

```
gs_guc encrypt -K Gauss@123 -D /data/xzg/wisequery/gaussdb
gs_guc encrypt -K ***
```

示例6：检查openGauss中各个实例的参数配置情况。

```
gs_guc check -D /gaussdb/data/dbnode -c "max_connections" -N plat1

Total GUC values: 1. Failed GUC values: 0.
The value of parameter max_connections is same on all instances.
    max_connections=800
```

示例7：修改archive\_command归档命令，由用户自己保证归档路径的有效性。修改后需要重启数据库才能生效。推荐使用此方法。

```
gs_guc set -N all -D /data/datanode  -c "archive_command= 'cp %p /data/datanode/pg_xlog/archive_status/%f'"
Total instances: 3. Failed instances: 0.
Success to perform gs_guc!
```

示例8：通过用户输入的明文密码，生自定义的test.key.cipher和test.key.rand文件。

```
gs_guc generate -S Mppdb@123 -D data/xzg/wisequery/gaussdb -o test
gs_guc encrypt -S ***
```

