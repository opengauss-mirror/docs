# CREATE CLIENT MASTER KEY<a name="ZH-CN_TOPIC_0294528088"></a>

## 功能描述<a name="section1163224811518"></a>

创建一个客户端加密主密钥\(cmk\)。

## 注意事项<a name="zh-cn_topic_0059777586_s0bb17f15d73a4d978ef028b2686e0f7a"></a>

需要在使用gsql连接数据库的时候添加-C参数，开启密态数据库开关，才可以生效。

在创建客户端加密主密钥\(cmk\)之前，需要使用KeyTool工具生成密钥。

## 语法格式<a name="zh-cn_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

```
CREATE CLIENT MASTER KEY client_master_key_name WITH '(' master_key_params ')';
```

master\_key\_params：

```
KEY_STORE '=' key_store_value ',' KEY_PATH '=' key_path_value ',' ALGORITHM '=' algorithm_value
```

## 参数说明<a name="section2852173114389"></a>

-   **client\_master\_key\_name**

    同一命名空间下，客户端加密主密钥\(cmk\)名称，需要唯一，不可重复。

    取值范围：字符串，要符合标识符的命名规范。

-   **mater\_key\_params**

    指的是创建客户端加密主密钥时所涉及的参数信息，具体包括：

    -   KEY\_STORE：指定密钥管理工具或组件的类型。
    -   KEY\_STORE：指定管理CMK的密钥工具或组件；取值：目前仅支持localkms
    -   KEY\_PATH：指定KEY\_STORE中由KEY\_PATH唯一标识的密钥。
    -   KEY\_PATH：KEY\_STORE负责管理多个CMK密钥，KEY\_PATH选项用于在KEY\_STORE中唯一标识CMK。取值类似：“key\_path\_value”。
    -   ALGORITHM：指定CLIENT MASTER KEY用于何种加密算法，目前仅支持AES\_256\_CBC。
    -   ALGORITHM：cmk用于加密COLUMN ENCRYPTION KEY，该参数用于指定加密算法的类型。取值：目前仅支持RSA\_2048。

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >**密钥存储路径：**默认情况下，localkms将在$LOCALKMS\_FILE\_PATH路径下生成/读取/删除密钥文件，用户可手动配置该环境变量。但是，用户也可以不用单独配置该环境变量，在尝试获取$LOCALKMS\_FILE\_PATH失败时，localkms会尝试获取$GAUSSHOME/etc/localkms/路径，如果该路径存在，则将其作为密钥存储路径。
        >**密钥相关文件名：**使用CREATE CMK语法时，localkms将会创建四个与存储密钥相关的文件。示例：当KEY\_PATH = "key\_path\_value", 四个文件的名称分别为key\_path\_value.pub，key\_path\_value.pub.rand， key\_path\_value.priv， key\_path\_value.priv.rand。
        >所以，为了能够成功创建密钥相关文件，在密钥存储路径下，应该保证没有已存在的与密钥相关文件名同名的文件。



## 示例<a name="section7854941155112"></a>

```
--创建dev_ce用户。
postgres=# CREATE USER dev_ce PASSWORD 'dev@1234';
--连接密态数据库
gsql -p 57101 postgres -U dev_ce -r -C
gsql ((GaussDB Kernel VxxxRxxxCxxopenGauss x.x.x build 50dc16a6) compiled at 2020-11-29 05:49:21 commit 1071 last mr 1373)
Non-SSL connection (SSL connection is recommended when requiring high-security)
Type "help" for help.

--创建客户端加密主密钥(CMK)
postgres=> CREATE CLIENT MASTER KEY ImgCMK WITH ( KEY_STORE = gs_ktool , KEY_PATH = "gs_ktool/1" , ALGORITHM = AES_256_CBC);
postgres=> CREATE CLIENT MASTER KEY ImgCMK WITH (KEY_STORE = localkms, KEY_PATH = "key_path_value", ALGORITHM = RSA_2048);
```

