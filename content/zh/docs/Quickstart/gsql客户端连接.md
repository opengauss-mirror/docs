# gsql客户端连接<a name="ZH-CN_TOPIC_0241704252"></a>

<!-- TOC -->

- [gsql客户端连接<a name="ZH-CN_TOPIC_0241704252"></a>](#gsql客户端连接a-namezh-cn_topic_0241704252a)
    - [确认连接信息<a name="ZH-CN_TOPIC_0254911667"></a>](#确认连接信息a-namezh-cn_topic_0254911667a)
        - [操作步骤<a name="zh-cn_topic_0242370176_zh-cn_topic_0237120290_zh-cn_topic_0062129725_section3641787792727"></a>](#操作步骤a-namezh-cn_topic_0242370176_zh-cn_topic_0237120290_zh-cn_topic_0062129725_section3641787792727a)
    - [使用gsql本地连接<a name="ZH-CN_TOPIC_0241704254"></a>](#使用gsql本地连接a-namezh-cn_topic_0241704254a)
        - [注意事项<a name="zh-cn_topic_0241234230_zh-cn_topic_0085434651_zh-cn_topic_0059781996_zh-cn_topic_0062050379_s8dfe50d001084ac9ad79a79a8f471e8a"></a>](#注意事项a-namezh-cn_topic_0241234230_zh-cn_topic_0085434651_zh-cn_topic_0059781996_zh-cn_topic_0062050379_s8dfe50d001084ac9ad79a79a8f471e8aa)
        - [前提条件<a name="zh-cn_topic_0241234230_zh-cn_topic_0085434651_zh-cn_topic_0059781996_zh-cn_topic_0062050379_section2863008216400"></a>](#前提条件a-namezh-cn_topic_0241234230_zh-cn_topic_0085434651_zh-cn_topic_0059781996_zh-cn_topic_0062050379_section2863008216400a)
        - [本地连接数据库<a name="zh-cn_topic_0241234230_zh-cn_topic_0085434651_zh-cn_topic_0059781996_zh-cn_topic_0062050379_sedb32189b5a4410a9a8ac8586f1766a0"></a>](#本地连接数据库a-namezh-cn_topic_0241234230_zh-cn_topic_0085434651_zh-cn_topic_0059781996_zh-cn_topic_0062050379_sedb32189b5a4410a9a8ac8586f1766a0a)
    - [使用gsql远程连接<a name="ZH-CN_TOPIC_0241704255"></a>](#使用gsql远程连接a-namezh-cn_topic_0241704255a)
        - [前提条件<a name="zh-cn_topic_0241234230_zh-cn_topic_0085434651_zh-cn_topic_0059781996_zh-cn_topic_0062050379_section2863008216400"></a>](#前提条件a-namezh-cn_topic_0241234230_zh-cn_topic_0085434651_zh-cn_topic_0059781996_zh-cn_topic_0062050379_section2863008216400a-1)
        - [通过gs\_guc配置白名单<a name="section6704147193817"></a>](#通过gs\_guc配置白名单a-namesection6704147193817a)
        - [安装gsql客户端并连接数据库<a name="section1535892915382"></a>](#安装gsql客户端并连接数据库a-namesection1535892915382a)

<!-- /TOC -->
-   **[使用gsql远程连接](使用gsql远程连接.md)**  


## 确认连接信息<a name="ZH-CN_TOPIC_0254911667"></a>

客户端工具通过数据库主节点连接数据库。因此连接前，需获取数据库主节点所在服务器的IP地址及数据库主节点的端口号信息。

### 操作步骤<a name="zh-cn_topic_0242370176_zh-cn_topic_0237120290_zh-cn_topic_0062129725_section3641787792727"></a>

1.  以操作系统用户omm登录数据库主节点。
2.  <a name="zh-cn_topic_0242370176_zh-cn_topic_0237120290_zh-cn_topic_0062129725_li736435692628"></a>使用“gs\_om -t status --detail”命令查询openGauss各实例情况。

    ```
    gs_om -t status --detail
    ```

    ```
    [ DBnode State ]
    
    node        node_ip         instance                                  state
    -----------------------------------------------------------------------------
    1  plat1 192.168.0.11  5001 /srv/BigData/gaussdb/data1/dbnode Normal
    ```
    
    如上部署了数据库主节点实例的服务器IP地址分别为192.168.10.11。数据库主节点数据路径为“/srv/BigData/gaussdb/data1/dbnode”。

3.  确认数据库主节点的端口号。

    在[2](#zh-cn_topic_0242370176_zh-cn_topic_0237120290_zh-cn_topic_0062129725_li736435692628)查到的数据库主节点数据路径下的postgresql.conf文件中查看端口号信息。示例如下：

    ```
    cat /srv/BigData/gaussdb/data1/dbnode/postgresql.conf | grep port
    ```

    ```
    port = 8000    # (change requires restart)
    #comm_sctp_port = 1024   # Assigned by installation (change requires restart)
    #comm_control_port = 10001  # Assigned by installation (change requires restart)
          # supported by the operating system:
          # e.g. 'localhost=10.145.130.2 localport=12211 remotehost=10.145.130.3 remoteport=12212, localhost=10.145.133.2 localport=12213 remotehost=10.145.133.3 remoteport=12214'
          # e.g. 'localhost=10.145.130.2 localport=12311 remotehost=10.145.130.4 remoteport=12312, localhost=10.145.133.2 localport=12313 remotehost=10.145.133.4 remoteport=12314'
          #   %r = remote host and port
    alarm_report_interval = 10
    support_extended_features=true
    ```

    8000为数据库主节点的端口号。


## 使用gsql本地连接<a name="ZH-CN_TOPIC_0241704254"></a>

gsql是openGauss提供的在命令行下运行的数据库连接工具。此工具除了具备操作数据库的基本功能，还提供了若干高级特性，便于用户使用。本节只介绍如何使用gsql连接数据库，关于gsql使用方法的更多信息请参考gsql。

### 注意事项<a name="zh-cn_topic_0241234230_zh-cn_topic_0085434651_zh-cn_topic_0059781996_zh-cn_topic_0062050379_s8dfe50d001084ac9ad79a79a8f471e8a"></a>

缺省情况下，客户端连接数据库后处于空闲状态时会根据参数session\_timeout的默认值自动断开连接。如果要关闭超时设置，设置参数session\_timeout为0即可。

### 前提条件<a name="zh-cn_topic_0241234230_zh-cn_topic_0085434651_zh-cn_topic_0059781996_zh-cn_topic_0062050379_section2863008216400"></a>

已确认连接信息。

### 本地连接数据库<a name="zh-cn_topic_0241234230_zh-cn_topic_0085434651_zh-cn_topic_0059781996_zh-cn_topic_0062050379_sedb32189b5a4410a9a8ac8586f1766a0"></a>

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


## 使用gsql远程连接<a name="ZH-CN_TOPIC_0241704255"></a>

gsql是openGauss提供的在命令行下运行的数据库连接工具。此工具除了具备操作数据库的基本功能，还提供了若干高级特性，便于用户使用。本节只介绍如何安装gsql客户端，使用gsql客户端连接数据库，更多配置请参见openGauss产品文档。

### 前提条件<a name="zh-cn_topic_0241234230_zh-cn_topic_0085434651_zh-cn_topic_0059781996_zh-cn_topic_0062050379_section2863008216400"></a>

已确认连接信息。

### 通过gs\_guc配置白名单<a name="section6704147193817"></a>

1.  以操作系统用户omm登录数据库主节点。
2.  配置客户端认证方式，允许客户端以“jack”用户连接到本机，此处远程连接禁止使用“omm”用户（即数据库初始化用户）。

    例如，下面示例中配置允许IP地址为10.10.0.30的客户端访问本机。

    ```
    gs_guc set -N all -I all -h "host all jack 10.10.0.30/32 sha256"
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   使用“jack”用户前，需先本地连接数据库，并在数据库中使用如下语句建立“jack”用户：
    >    ```
    >    postgres=# CREATE USER jack PASSWORD 'Test@123';
    >    ```
    >-   -N all表示openGauss的所有主机。
    >-   -I all表示主机的所有实例。
    >-   -h表示指定需要在“pg\_hba.conf”增加的语句。
    >-   all表示允许客户端连接到任意的数据库。
    >-   jack表示连接数据库的用户。
    >-   10.10.0.30/32表示只允许IP地址为10.10.0.30的主机连接。此处的IP地址不能为openGauss内的IP，在使用过程中，请根据用户的网络进行配置修改。32表示子网掩码为1的位数，即255.255.255.255
    >-   sha256表示连接时jack用户的密码使用sha256算法加密。

    这条命令在数据库主节点实例对应的“pg\_hba.conf”文件中添加了一条规则，用于对连接数据库主节点的客户端进行鉴定。

    “pg\_hba.conf”文件中的每条记录可以是下面四种格式之一，四种格式的参数说明请参见《开发者指南》中“管理数据库安全>客户端接入认证>配置文件参考“章节。

    ```
    local     DATABASE USER METHOD [OPTIONS]
    host      DATABASE USER ADDRESS METHOD [OPTIONS]
    hostssl   DATABASE USER ADDRESS METHOD [OPTIONS]
    hostnossl DATABASE USER ADDRESS METHOD [OPTIONS]
    ```

    因为认证时系统是为每个连接请求顺序检查“pg\_hba.conf”里的记录的，所以这些记录的顺序是非常关键的。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >在配置“pg\_hba.conf”文件时，请依据通讯需求按照格式内容从上至下配置记录，优先级高的需求需要配置在前面。openGauss和扩容配置的IP优先级最高，用户手动配置的IP请放在这二者之后，如果已经进行的客户配置和扩容节点的IP在同一网段，请在扩容前删除，扩容成功后再进行配置。

    因此对于认证规则的配置建议如下：

    -   靠前的记录有比较严格的连接参数和比较弱的认证方法。
    -   靠后的记录有比较宽松的连接参数和比较强的认证方法。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   一个用户要想成功连接到特定的数据库，不仅需要通过pg\_hba.conf中的规则检查，还必须要有该数据库上的CONNECT权限。如果希望控制某些用户只能连接到指定数据库，赋予/撤销CONNECT权限通常比在pg\_hba.conf中设置规则更为简单。
    >-   对应openGauss外部客户端连接，trust为不安全的认证方式，请将认证方式设置为sha256。


### 安装gsql客户端并连接数据库<a name="section1535892915382"></a>

在客户端机器上，上传客户端工具包并配置gsql的执行环境变量。

1.  以root用户登录客户端机器。
2.  创建“/tmp/tools”目录。

    ```
    mkdir /tmp/tools
    ```

3.  获取软件安装包中的“openGauss-1.0.0-openEuler-64bit-Libpq.tar.gz”上传到“/tmp/tools”路径下。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   软件包相对位置为安装时所放位置，根据实际情况填写。
    >-   不同的操作系统，工具包文件名称会有差异。请根据实际的操作系统类型选择对应的工具包。

4.  解压文件。

    ```
    cd /tmp/tools
    tar -zxvf openGauss-1.0.0-openEuler-64bit-Libpq.tar.gz
    ```

5.  登录数据库主节点所在的服务器，拷贝数据库安装目录下的bin目录到客户端主机的“/tmp/tools”路径下，随后继续登录客户端主机执行步骤6操作。

    ```
    scp -r /opt/huawei/install/app/bin root@10.10.0.30:/tmp/tools
    ```

    其中，/opt/huawei/install/app为clusterconfig.xml文件中配置的\{gaussdbAppPath\}路径，10.10.0.30为客户端主机ip。

6.  设置环境变量。

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

8.  连接数据库。

    数据库安装完成后，默认生成名称为postgres的数据库。第一次连接数据库时可以连接到此数据库。

    ```
    gsql -d postgres -h 10.10.0.11 -U jack -p 8000 -W Test@123
    ```

    postgres为需要连接的数据库名称，10.10.0.11为数据库主节点所在的服务器IP地址，jack为连接数据库的用户，8000为数据库主节点的端口号，Test@123为连接数据库用户jack的密码。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   连接openGauss的机器与openGauss不在同一网段时，-h指定的IP地址应为Manager界面上所设的coo.cooListenIp2（应用访问IP）的取值。
    >-   禁止使用omm用户进行远程连接数据库。


