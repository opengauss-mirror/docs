# CREATE USER MAPPING<a name="ZH-CN_TOPIC_0289899891"></a>

## 功能描述<a name="zh-cn_topic_0283136906_section55185111610"></a>

定义一个用户到一个外部服务器的新映射。

## 注意事项<a name="section720610212575"></a>

当在OPTIONS中出现password选项时，需要保证openGauss每个节点的$GAUSSHOME/bin目录下存在usermapping.key.cipher和usermapping.key.rand文件，如果不存在这两个文件，请使用gs\\\_guc工具生成并使用gs\\\_ssh工具发布到openGauss每个节点的$GAUSSHOME/bin目录下。

## 语法格式<a name="zh-cn_topic_0283136906_section109016567611"></a>

```
CREATE USER MAPPING FOR { user_name | USER | CURRENT_USER | PUBLIC }
    SERVER server_name
    [ OPTIONS ( option 'value' [ , ... ] ) ]
```

## 参数说明<a name="zh-cn_topic_0283136906_section92521051372"></a>

-   **user\_name**

    要映射到外部服务器的一个现有用户的名称。

    CURRENT\_USER和USER匹配当前用户的名称。 当PUBLIC被指定时，一个公共映射会被创建，当没有特定用户的映射可用时将会使用它。

-   **server\_name**

    将为其创建用户映射的现有服务器的名称。

-   **OPTIONS \(  \{ option\_name ' value '  \}  \[, ...\] \)**

    这个子句指定用户映射的选项。这些选项通常定义该映射实际的用户名和口令。选项名必须唯一。允许的选项名和值与该服务器的外部数据包装器有关。

    >![](public_sys-resources/icon-note.png) **说明：** 
    >-   用户的口令会加密后保存到系统表[PG\_USER\_MAPPING](../DatabaseReference/PG_USER_MAPPING.md)中，加密时需要使用usermapping.key.cipher和usermapping.key.rand作为加密密码文件和加密因子。首次使用前需要通过如下命令创建这两个文件，并将这两个文件放入各节点目录$GAUSSHOME/bin，且确保具有读权限。gs\_ssh工具可以协助您快速将文件放入各节点对应目录下。
    >    ```
    >    gs_ssh -c "gs_guc generate -o usermapping -S default -D $GAUSSHOME/bin"
    >    ```
    >-   其中-S参数指定default时会随机生成密码，用户也可为-S参数指定密码，此密码用于保证生成密码文件的安全性和唯一性，用户无需保存或记忆。其他参数详见《工具与命令参考》中“服务端工具 \> gs\_guc工具说明。

    -   oracle\_fdw支持的options包括：
        -   user

            oracle server的用户名。

        -   password

            oracle用户对应的密码。

    -   mysql\_fdw支持的options包括：
        -   username

            MySQL Server/MariaDB的用户名。

        -   password

            MySQL Server/MariaDB用户对应的密码。

    -   postgres\_fdw支持的options包括：
        -   user

            远端openGauss的用户名。

        -   password

            远端openGauss用户对应的密码。

            >![](public_sys-resources/icon-note.png) **说明：** 
            >openGauss在后台会对用户输入的password加密以保证安全性。该加密所需密钥文件需要使用gs\_guc工具生成并使用gs\_ssh工具发布到openGauss每个节点的$GAUSSHOME/bin目录下。password不应当包含'encryptOpt'前缀，否则会被认为是加密后的密文。




## 相关链接<a name="zh-cn_topic_0283136906_section1513111133713"></a>

[ALTER USER MAPPING](ALTER-USER-MAPPING.md)，[DROP USER MAPPING](DROP-USER-MAPPING.md)

