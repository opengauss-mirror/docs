# CREATE CLIENT MASTER KEY<a name="ZH-CN_TOPIC_0294528088"></a>

## 功能描述<a name="section1163224811518"></a>

创建一个客户端主密钥对象，该对象可用于加密Column Encryption Key对象。

## 注意事项<a name="zh-cn_topic_0059777586_s0bb17f15d73a4d978ef028b2686e0f7a"></a>

本语法属于全密态数据库特有语法。

当使用gsql连接数据库服务器时，需使用‘-C’参数，打开全密态数据库的开关，才能使用本语法。

由本语法创建的CMK对象中，仅存储从独立的密钥管理工具/服务/组件中读取密钥的方法，而不存储密钥本身。

## 语法格式<a name="zh-cn_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

```
CREATE CLIENT MASTER KEY client_master_key_name WITH （KEY_STORE = key_store_name, KEY_PATH = "key_path_value", ALGORITHM = algorithm_type）
```

## 参数说明<a name="section2852173114389"></a>

-   **client\_master\_key\_name**

    该参数作为密钥对象名，在同一命名空间下，需满足命名唯一性约束。

    取值范围：字符串，需符合标识符的命名规范。

-   **KEY\_STORE**

    指定管理CMK的密钥工具或组件；取值：目前仅支持localkms。

-   **KEY\_PATH**

    KEY\_STORE负责管理多个CMK密钥，KEY\_PATH选项用于在KEY\_STORE中唯一标识CMK。取值类似：“key\_path\_value”。

-   **ALGORITHM**

    由本语法创建的用于加密COLUMN ENCRYPTION KEY，该参数用于指定加密算法的类型。取值范围：RSA\_2048、RSA_3072和SM2。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >**密钥存储路径：**默认情况下，localkms将在$LOCALKMS\_FILE\_PATH路径下生成/读取/删除密钥文件，用户可手动配置该环境变量。但是，用户也可以不用单独配置该环境变量，在尝试获取$LOCALKMS\_FILE\_PATH失败时，localkms会尝试获取$GAUSSHOME/etc/localkms/路径，如果该路径存在，则将其作为密钥存储路径。
    >
    >**密钥相关文件名：**使用CREATE CMK语法时，localkms将会创建四个与存储密钥相关的文件。示例：当KEY\_PATH = "key\_path\_value", 四个文件的名称分别为key\_path\_value.pub、key\_path\_value.pub.rand、 key\_path\_value.priv、 key\_path\_value.priv.rand。
    >所以，为了能够成功创建密钥相关文件，在密钥存储路径下，应该保证没有已存在的与密钥相关文件名同名的文件。


## 示例<a name="section7854941155112"></a>

```
-- （1）使用普通账户alice，连接全密态数据库，
[cmd] gsql -U alice -h $host -p $port -d $database -C -r

-- （2）使用本语法创建客户端加密主密钥(CMK)对象
openGauss=> CREATE CLIENT MASTER KEY a_cmk WITH (KEY_STORE = localkms, KEY_PATH = "key_path_value", ALGORITHM = RSA_2048);
openGauss=> CREATE CLIENT MASTER KEY another_cmk WITH (KEY_STORE = localkms, KEY_PATH = "another_path_value", ALGORITHM = SM2);
```

