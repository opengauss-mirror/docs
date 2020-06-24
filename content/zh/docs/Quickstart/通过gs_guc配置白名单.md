# 通过gs\_guc配置白名单<a name="ZH-CN_TOPIC_0241704256"></a>

## 操作步骤<a name="zh-cn_topic_0241234232_section428894161117"></a>

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
    >-   10.10.0.30_/32_表示只允许IP地址为10.10.0.30的主机连接。此处的IP地址不能为openGauss内的IP，在使用过程中，请根据用户的网络进行配置修改。32表示子网掩码为1的位数，即255.255.255.255  
    >-   sha256表示连接时jack用户的密码使用sha256算法加密。  

    这条命令在数据库主节点实例对应的“pg\_hba.conf”文件中添加了一条规则，用于对连接数据库主节点的客户端进行鉴定。

    “pg\_hba.conf”文件中的每条记录可以是下面四种格式之一，四种格式的参数说明请参见[配置文件参考](zh-cn_topic_0246507950.md)。

    ```
    local     DATABASE USER METHOD [OPTIONS]
    host      DATABASE USER ADDRESS METHOD [OPTIONS]
    hostssl   DATABASE USER ADDRESS METHOD [OPTIONS]
    hostnossl DATABASE USER ADDRESS METHOD [OPTIONS]
    ```

    因为认证时系统是为每个连接请求顺序检查“pg\_hba.conf”里的记录的，所以这些记录的顺序是非常关键的。

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >在配置“pg\_hba.conf”文件时，请依据通讯需求按照格式内容从上至下配置记录，优先级高的需求需要配置在前面。openGaussopenGauss和扩容配置的IP优先级最高，用户手动配置的IP请放在这二者之后，如果已经进行的客户配置和扩容节点的IP在同一网段，请在扩容前删除，扩容成功后再进行配置。  

    因此对于认证规则的配置建议如下：

    -   靠前的记录有比较严格的连接参数和比较弱的认证方法。
    -   靠后的记录有比较宽松的连接参数和比较强的认证方法。

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >-   一个用户要想成功连接到特定的数据库，不仅需要通过pg\_hba.conf中的规则检查，还必须要有该数据库上的CONNECT权限。如果希望控制某些用户只能连接到指定数据库，赋予/撤销CONNECT权限通常比在pg\_hba.conf中设置规则更为简单。  
    >-   对应openGauss外部客户端连接，trust为不安全的认证方式，请将认证方式设置为sha256。  


