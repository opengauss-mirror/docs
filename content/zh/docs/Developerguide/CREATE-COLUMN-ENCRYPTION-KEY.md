# CREATE COLUMN ENCRYPTION KEY<a name="ZH-CN_TOPIC_0294528089"></a>

## 功能描述<a name="section1020475817135"></a>

创建一个列加密密钥，该密钥可用于加密表中指定列。

## 注意事项<a name="section1120413582134"></a>

本语法属于全密态数据库特有语法。

当使用gsql连接数据库服务器时，需使用‘-C’参数，打开全密态数据库的开关，才能使用本语法。

由该语法创建CEK对象可用于列级加密。在定义表中列字段时，可指定一个CEK对象，用于加密该列。

## 语法格式<a name="section182042586132"></a>

```
CREATE COLUMN ENCRYPTION KEY column_encryption_key_name WITH(CLIENT_MASTER_KEY = client_master_key_name, ALGORITHM = algorithm_type, ENCRYPTED_VALUE = encrypted_value);
```

## 参数说明<a name="section32041258181311"></a>

-   **column\_encryption\_key\_name**

    该参数作为密钥对象名，在同一命名空间下，需满足命名唯一性约束。

    取值范围：字符串，要符合标识符的命名规范。

-   **CLIENT\_MASTER\_KEY**

    指定用于加密本CEK的CMK，取值为：CMK对象名，该CMK对象由CREATE CLIENT MASTER KEY语法创建。

-   **ALGORITHM**

    指定该CEK将用于何种加密算法，取值范围为：AEAD\_AES\_256\_CBC\_HMAC\_SHA256、AEAD\_AES\_128\_CBC\_HMAC\_SHA256和SM4\_SM3；

-   **ENCRYPTED\_VALUE（可选项）**

    该值为用户指定的密钥口令，密钥口令长度范围为28 \~ 256位，28位派生出来的密钥安全强度满足AES128，若用户需要用AES256，密钥口令的长度需要39位，如果不指定，则会自动生成256字符的密钥。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >国密算法约束：由于SM2、SM3、SM4等算法属于中国国家密码标准算法，为规避法律风险，需配套使用。即如果将CEK用于SM4\_SM3算法，则仅能使用SM2算法来对该CEK进行加密。


## 示例<a name="section18204185851316"></a>

```
--创建列加密密钥(CEK)
openGauss=> CREATE COLUMN ENCRYPTION KEY a_cek WITH VALUES (CLIENT_MASTER_KEY = a_cmk, ALGORITHM  = AEAD_AES_256_CBC_HMAC_SHA256);
CREATE COLUMN ENCRYPTION KEY
openGauss=> CREATE COLUMN ENCRYPTION KEY another_cek WITH VALUES (CLIENT_MASTER_KEY = a_cmk, ALGORITHM  = SM4_SM3);
CREATE COLUMN ENCRYPTION KEY
```

