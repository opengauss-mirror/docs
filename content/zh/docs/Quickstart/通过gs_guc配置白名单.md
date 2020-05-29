# 通过gs\_guc配置白名单<a name="ZH-CN_TOPIC_0241704256"></a>

## 操作步骤<a name="zh-cn_topic_0241234232_section428894161117"></a>

1.  以操作系统用户omm登录数据库主节点。
2.  配置客户端认证方式，允许客户端以“jack”用户连接到本机，此处远程连接禁止使用“omm”用户。

    例如，下面示例中配置允许IP地址为10.10.0.30的客户端访问本机。

    ```
    gs_guc set  -N all -I all -h "host all jack 10.10.0.30/32 sha256"
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >-   使用“jack”用户前，请先使用本地连接数据库，详细请参见[gsql客户端连接openGauss](gsql客户端连接openGauss.md)，并在数据库中使用如下语句建立“jack”用户。  
    >    ```  
    >    postgres=#  CREATE USER jack PASSWORD 'Bigdata@123';  
    >    ```  
    >-   -N all表示openGauss的所有主机。  
    >-   -I all表示主机中的所有实例。  
    >-   -h表示指定需要在“pg\_hba.conf”增加的语句。  
    >-   all表示允许客户端连接到任意的数据库。  
    >-   jack表示数据库中已存在的用户。  
    >-   10.10.0.30_/32_表示只允许IP地址为10.10.0.30的主机连接。在使用过程中，请根据用户的网络进行配置修改。  
    >-   sha256表示连接时jack用户的密码使用sha256算法加密。  


