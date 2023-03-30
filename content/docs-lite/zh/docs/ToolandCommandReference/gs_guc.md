# gs\_guc<a name="ZH-CN_TOPIC_0294749028"></a>

## 背景信息<a name="zh-cn_topic_0059778019_s59e576e934094b3c9a54d6ed555b5671"></a>

目前openGauss配置文件（“postgresql.conf”、“pg\_hba.conf”）中的参数默认值都是单机的配置模式。应用程序可以通过调用gs\_guc来设置适合自己的参数。

-   “gs\_guc-current.log”

    这个文件记录gs\_guc产生的日志。

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
    >-   “datasource.key.cipher”和“datasource.key.rand”是创建Data Source对象时调用的密钥文件。gs\_guc生成时即有读权限。使用前需将这两个文件放入各节点目录$GAUSSHOME/bin，且确保具有读权限。gs\_ssh工具可以协助您快速将文件放入数据库实例各节点对应目录下。
    >-   此外，使用gs\_guc generate命令也可以生成这两个文件，可以选择以下两种方式中的任一种，并根据提示输入密码。
    >    方式1：gs\_guc encrypt -M source  -D ./
    >    方式2：gs\_guc generate -o datasource  -D ./

-   “obsserver.key.cipher”，“obsserver.key.rand”

    使用gs\_guc generate命令加密输入的密码时，则会生成这两个文件。其中“obsserver.key.cipher”存储输入密码的密文，“obsserver.key.rand”存储的是加密因子。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >“obsserver.key.cipher”和“obsserver.key.rand”是创建OBS服务对象时调用的密钥文件。


## 语法<a name="zh-cn_topic_0059778019_se02e295596714317bc63dc8508898bdd"></a>

-   -Z为datanode
    -   检查配置文件中参数（仅支持DN）

        ```
        gs_guc check {-Z datanode} [-D DATADIR] -c "parameter"
        ```

    -   检查逻辑数据库的配置文件中参数（逻辑数据库仅支持DN）

        ```
        gs_guc check {-Z datanode} [-D DATADIR] -c "parameter" --lcname=LCNAME
        ```

    -   修改配置文件中参数

        ```
        gs_guc set {-Z datanode} [-D DATADIR] -c "parameter = value"
        ```

    -   修改逻辑数据库的配置文件中参数（逻辑数据库仅支持DN）

        ```
        gs_guc set {-Z datanode} [-D DATADIR] -c "parameter = value" --lcname=LCNAME
        ```

    -   将已设置的参数值修改为内核默认值

        ```
        gs_guc [ set | reload ] {-Z datanode} [-D DATADIR] -c "parameter"
        ```

    -   将逻辑数据库中已设置的参数值修改为数据库启动时参数默认值

        ```
        gs_guc [ set | reload ] {-Z datanode} [-D DATADIR] -c "parameter" --lcname=LCNAME
        ```

    -   修改配置文件中参数，同时发送信号量到postgresql.conf

        ```
        gs_guc reload {-Z datanode} [-D DATADIR] -c parameter=value
        ```

    -   修改客户端认证策略。若选择reload会同时发送信号量到pg\_hba.conf，即无需重启即可生效。

        ```
        gs_guc {set | reload} {-Z NODE-TYPE} -D DATADIR -h "HOSTTYPE DATABASE USERNAME IPADDR IPMASK AUTHMEHOD authentication-options"
        gs_guc {set | reload} {-Z NODE-TYPE} -D DATADIR -h "HOSTTYPE DATABASE USERNAME IPADDR-WITH-IPMASK AUTHMEHOD authentication-options"
        gs_guc {set | reload} {-Z NODE-TYPE} -D DATADIR -h "HOSTTYPE DATABASE USERNAME HOSTNAME AUTHMEHOD authentication-options"
        ```

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >-   AUTHMEHOD后的authentication-options为可选参数，AUTHMEHOD支持以下选项：
        >    -   trust：不验密，禁止远程主机使用trust方式访问数据库。
        >    -   reject：拒绝访问。
        >    -   md5：md5认证，默认不支持（MD5加密算法安全性低，存在安全风险，不建议使用）。
        >    -   sha256：sha256认证（推荐使用）。
        >    -   sm3：sm3认证（国密SM3）。
        >    -   cert：客户端证书认证。
        >-   pg\_hba.conf中的认证策略越靠前优先级越高，使用gs\_guc工具配置时会按一定规则排序将新策略插入到原有认证策略中。配置字段比较顺序为：IPADDR/HOSTNAME \> HOSTTYPE \> DATABASE \> USERNAME，即优先比较IPADDR或HOSTNAME，如果无法区分优先级则继续比较HOSTTYPE，以此类推。对于每个配置字段，通常越严格的配置参数优先级越高、排序越靠前，越宽松的配置参数优先级越低、排序越靠后，具体如下：
        >    -   IPADDR：当配置为全0时表示不限制IP，会放在指定具体某个IP地址的策略后面。
        >    -   DATABASE：当配置为all时表示不限制数据库，会放在指定具体某个数据库的策略后面；当数据库配置为replication时会放在其他策略后面。
        >    -   USERNAME：当配置为all时表示不限制用户，会放在指定具体某个用户的策略后面。
        >    -   HOSTTYPE：local \> hostssl \> hostnossl \> host。

    -   注释已经设置的客户端认证策略。 若选择reload会同时发送信号量到pg\_hba.conf，即无需重启即可生效。

        ```
        gs_guc {set | reload} {-Z NODE-TYPE} -D DATADIR -h "HOSTTYPE DATABASE USERNAME IPADDR IPMASK"
        gs_guc {set | reload} {-Z NODE-TYPE} -D DATADIR -h "HOSTTYPE DATABASE USERNAME IPADDR-WITH-IPMASK"
        gs_guc {set | reload} {-Z NODE-TYPE} -D DATADIR -h "HOSTTYPE DATABASE USERNAME HOSTNAME"
        ```

    -   显示帮助信息

        ```
        gs_guc -? | --help
        ```

    -   显示版本号信息

        ```
        gs_guc -V | --version
        ```


-   生成加密密文文件和加密因子文件
    -   gs\_guc encrypt生成加密密码和加密因子文件

        ```
        gs_guc encrypt [-M keymode] [-K password] [-U username] -D DATADIR
        或
        gs_guc encrypt [-M keymode] [-K password] [-U username] -C [cipher_dir] -R [rand_dir]
        ```

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >-   -K是用户指定的密码，gs\_guc会对该密码进行长度（8<=len<16）和密码复杂度要求，如果不满足，将会报错。如果不带-K参数则会提示交互式输入密码。为了系统安全，推荐使用交互式输入密码方式。此密码用于保证生成密码文件的安全性和唯一性，用户无需保存或记忆。
        >-   -M是加密类型，当前仅支持server、client和source。默认值为server。

    -   gs\_guc generate生成obsserver或其他前缀的加密密码和加密因子文件

        ```
        gs_guc generate [-o prefix] [-S cipherkey] -D DATADIR
        ```

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >-   -o是输出cipher和rand文件前缀名称，默认输出文件名前缀为obsserver。其内容仅支持数字、字母和下划线。
        >-   -S是用户指定的密码，密码需要满足长度要求（8<=len<16）和复杂度要求，如不满足将会报错。当其值为default时，会随机生成一段字符串作为密码，该密码长度为13。如果不带-S参数则会提示交互式输入密码。为了系统安全，推荐使用交互式输入密码方式。此密码用于保证生成密码文件的安全性和唯一性，用户无需保存或记忆。
        >-   使用gs\_guc encrypt或generate命令生成加密密码和加密因子文件时只是参数不同，本质上是一样的。生成过程中会使用随机数作为加密密钥材料和盐值，因此是每次生成的文件都是不同的。每次生成的加密密码和加密因子文件需要成对使用，不能更换或交替使用，加密和解密时需要使用相同的加密密码和加密因子文件。



>![](public_sys-resources/icon-note.gif) **说明：** 
>-   gs\_guc工具不支持参数值中包含'\#'的设置。可以使用vi工具通过手工修改配置文件来设置。
>-   如果已经在环境变量中设置PGDATA，则可以省略-D参数。否则提示设置参数失败。
>-   环境变量PGDATA设置方法：先将参数PGDATA设置为_/gaussdb/data_，然后在执行“export PGDATA”使设置生效。
>-   authpolicy包含一串认证参数：HOSTTYPE DATABASE USERNAME IPADDR IPMASK，或者HOSTTYPE DATABASE USERNAME IPADDR-WITH-IPMASK，或者HOSTTYPE DATABASE USERNAME HOSTNAME。
>-   如果设置GUC参数时使用-c "parameter"，则会将已设置的GUC参数值设置成该参数的数据库启动时参数默认值（系统视图PG\_SETTINGS中boot\_val字段值）。注意log\_directory和audit\_directory不会被设置为数据库启动时参数默认值，而是设为$GAUSSLOG/pg\_audit/instance\_name。因GUC参数间存在依赖关系，因此请慎用该功能。
>-   设置-c参数时，，参数都可以省略双引号。
>-   如果value中含有特殊字符（如$），请转义后使用。
>-   如果同一个配置参数在配置文件里面出现多行，且有两行或多于两行同时生效（即没有用"\#"注释掉），那么只有最后一个配置参数会被设置，而前面的都会被忽略。
>-   通过reload模式设置或修改数据库节点配置文件（postgresql.conf）的参数，生效存在短暂延迟，有可能导致配置后数据库各实例参数极短时间不一致。
>-   gs\_guc设置浮点类型的参数时，由于浮点数在计算机中不能精确表示，所以参数值在误差范围1e-9内都可以设置成功。
>-   gs\_guc设置整型类型的参数时，可以接受十进制、十六进制、八进制的数据，以0x开始表示十六进制，以0开始表示八进制，其他情况表示十进制。

## 命令参考<a name="zh-cn_topic_0059778019_s9f42fc33773a49829076e2e0121d9a5f"></a>

-   set

    表示只修改配置文件中的参数。

-   check

    表示只检查配置文件中的参数。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >check结果中出现_parameter_=NULL，表示配置文件中没有配置此参数。

-   reload

    表示修改配置文件中的参数，同时发送信号量给数据库进程，使其重新加载配置文件。

-   encrypt/generate

    生成加密密码文件。

-   -D

    需要执行命令的数据库实例路径。使用encrypt命令时，此参数表示指定的密码文件生成的路径。

-   -C

    使用encrypt命令时，明文秘钥文件生成路径。

-   -R

    使用encrypt命令时，随机数秘钥文件生成路径。

-   -c  _parameter_=_value_

    要设定的数据库配置参数的名称和参数值。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   如果参数是一个字符串变量，则使用-c  _parameter_="'_value_'"或者使用-c "_parameter_  = '_value_'"。
    >-   当使用gs\_guc set/reload为"log\_directory" 恢复默认值时，其默认值会被置为具体的data目录。

    取值范围：postgresql.conf中的所有参数。

-   --lcname=LCNAME

    要设定的逻辑数据库名称。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   该参数必需同-Z datanode一起使用。即gs\_guc只允许作用于逻辑数据库的DN实例。
    >-   逻辑数据库允许操作的参数同完整数据库不同。具体差异可参见$GAUSSHOME/bin/cluster\_guc.conf。

    取值范围：已经创建的逻辑数据库名称。

-   --ignore-node=NODES

    需要忽略的主机名称。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   该参数必须与set/reload一起使用，且-Z只支持datanode/coordinator。
    >-   该参数不支持与-D一起使用。
    >-   在与reload一起使用时，如果--ignore-node没有指定主节点，则集群中所有节点的参数依然会全部同步修改。

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

    其中“local”是一个Unix域套接字，“host”是普通或SSL加密的TCP/IP套接字，“hostssl”是SSL加密的TCP/IP套接字，“hostnossl”是一个纯TCP/IP套接字。

    authmehod-options是可选输入，取值：

    -   trust
    -   reject
    -   md5（MD5加密算法安全性低，存在安全风险，不建议使用。）
    -   sha256
    -   cert

    详细的参数说明请参见“pg\_hba.conf”配置文件中的描述。

-   -?, --help

    显示帮助信息。

-   -V, --version

    显示版本信息。

-   -Z NODE\_TYPE

    实例类型。

    取值范围：

    -   datanode

-   -M, --keymode=MODE

    设定该密码在数据库运行过程中，用于服务端\(server\)、客户端\(client\)还是创建Data Source对象时调用。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >在使用ssl功能时，会涉及到服务端证书和私钥文件的加密密码和客户端证书和私钥文件的加密密码，在加密存储加密密码时，需要指定模式，否则默认是生成服务端的密码文件。

    取值范围：

    -   server（缺省）
    -   client
    -   source

-   -K PASSWORD

    gs\_guc encrypt指定需要加密的密码。如果不加此参数则会提示交互式输入，为了系统安全，推荐使用交互式输入密码方式。

    取值范围：字符串，符合密码长度（8\~16）和复杂度的要求。当其值为default时，会随机生成一段字符串作为密码，该密码长度为13。

-   -U, --keyuser=USER

    指定要加密的用户，隶属于OS用户。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >比如，openGauss可以为每个用户配置不同的ssl证书和私钥文件，指定该选项，可以生成按用户名区分的密码文件。

-   -S CIPHERKEY

    gs\_guc generate指定需要加密的字符串。如果不加此参数则会提示交互式输入，为了系统安全，推荐使用交互式输入密码方式。

    取值范围：字符串，符合密码长度（8\~16）和复杂度的要求。

-   -o PREFIX

    指定需要输出的OBS类型的cipher和rand文件前缀名称字符串，默认输出文件名前缀为obsserver。

    取值范围：仅支持数字、字母和下划线


## 示例<a name="zh-cn_topic_0059778019_s4c5ae191cfdd47a0af220bf67849535e"></a>

示例1：修改数据库允许的最大连接数为800。修改后需要重启数据库才能生效。

```
gs_guc set -Z datanode -D /gaussdb/data/datanode -c "max_connections = 800" 

Total instances: 1. Failed instances: 0.
Success to perform gs_guc!
```

示例2：将已设置的数据库允许的最大连接数值修改为默认值。修改后需要重启数据库才能生效。

```
gs_guc set -Z datanode -D /gaussdb/data/datanode -c "max_connections"

Total instances: 1. Failed instances: 0.
Success to perform gs_guc!
```

示例3：设置客户端认证策略

```
gs_guc set -Z datanode -D /gaussdb/data/datanode -h "host replication testuser 10.252.95.191/32 sha256"

Total instances: 2. Failed instances: 0.
Success to perform gs_guc!
```

示例4：注释清理已经设置的客户端认证策略

```
gs_guc set -Z datanode -D /gaussdb/data/datanode -h "host replication testuser 10.252.95.191/32"

Total instances: 2. Failed instances: 0.
Success to perform gs_guc!
```

示例5：加密服务器端存储用户密码的明文，避免密码泄露。

```
gs_guc encrypt -K XXXXXXXXX -D /data/xzg/wisequery/gaussdb
gs_guc encrypt -K ***
```

示例6：检查中各个实例的参数配置情况。

```
gs_guc check -Z datanode -D /gaussdb/data/datanode -c "max_connections"

Total GUC values: 1. Failed GUC values: 0.
The value of parameter max_connections is same on all instances.
    max_connections=800
```

示例7：修改DN的参数，例如修改数据库允许的最大连接数为800。修改后需要重启数据库才能生效。

```
gs_guc set -Z datanode -D /gaussdb/data/datanode -c "max_connections = 800"
Begin to perform gs_guc for all coordinators.

Total instances: 3. Failed instances: 0.
Success to perform gs_guc!

Begin to perform gs_guc for all datanodes.

Total instances: 9. Failed instances: 0.
Success to perform gs_guc!
```

示例8：修改DN的参数，修改archive\_command归档命令，由用户自己保证归档路径的有效性。修改后需要重启数据库才能生效。推荐使用此方法。

```
gs_guc set -Z datanode -D /data/datanode  -c "archive_command= 'cp %p /data/datanode/pg_xlog/archive_status/%f'"
Total instances: 3. Failed instances: 0.
Success to perform gs_guc!
```

示例9：修改DN的参数，修改archive\_command归档命令，由用户自己保证归档路径的有效性。修改后需要重启数据库才能生效。不推荐使用此方法。

```
gs_guc set -Z datanode -D /gaussdb/data/datanode -c "archive_command= 'cp %p pg_xlog/archive_status/%f'"
Total instances: 3. Failed instances: 0.
Success to perform gs_guc!
```

示例10：通过用户输入的明文密码，生自定义的test.key.cipher和test.key.rand文件。

```
gs_guc generate -S Mppdb@123 -D /data/xzg/wisequery/gaussdb -o test
gs_guc encrypt -S ***
```

