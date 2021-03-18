# CREATE COLUMN ENCRYPTION KEY<a name="ZH-CN_TOPIC_0294528089"></a>

## 功能描述<a name="section1163224811518"></a>

创建一个列加密密钥\(cek\)。

## 注意事项<a name="zh-cn_topic_0059777586_s0bb17f15d73a4d978ef028b2686e0f7a"></a>

需要在使用gsql连接数据库的时候添加-C参数，开启密态数据库开关，才可以生效。

## 语法格式<a name="zh-cn_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

```
CREATE COLUMN ENCRYPTION KEY column_encryption_key_name WITH '(' column_key_params ')';
```

column\_key\_params：

```
{CLIENT_MASTER_KEY '=' client_master_key_name ',' ALGORITHM '=' algorithm_value | [',' ENCRYPTED_VALUE '=' Sconst]}
```

## 参数说明<a name="section2852173114389"></a>

-   **column\_encryption\_key\_name**

    同一命名空间下，列加密密钥\(cek\)名称，需要唯一，不可重复。

    取值范围：字符串，要符合标识符的命名规范。

-   **column\_key\_params**

    指的是创建列加密密钥时所涉及的参数信息，具体包括：

    -   CLIENT\_MASTER\_KEY，值为客户端加密主密钥\(cmk\)名称。
    -   ALGORITHM为加密列加密密钥使用的算法，目前支持AEAD\_AES\_256\_CBC\_HMAC\_SHA256和AEAD\_AES\_128\_CBC\_HMAC\_SHA256。
    -   ENCRYPTED\_VALUE为可选项，该值为用户指定的密钥，密钥长度范围为28 \~ 256位，28位密钥派生出来的密钥安全轻度满足AES128，如果用户需要使用AES256，密钥口令的长度需要39位，如果不指定，则会自动生成256比特的密钥。


## 示例<a name="section7854941155112"></a>

```
--创建列加密密钥(CEK)
postgres=> CREATE COLUMN ENCRYPTION KEY ImgCEK WITH VALUES (CLIENT_MASTER_KEY = ImgCMK, ALGORITHM  = AEAD_AES_256_CBC_HMAC_SHA256);
CREATE COLUMN ENCRYPTION KEY
```

