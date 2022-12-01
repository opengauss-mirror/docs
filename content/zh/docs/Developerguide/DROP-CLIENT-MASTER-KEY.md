# DROP CLIENT MASTER KEY<a name="ZH-CN_TOPIC_0294528090"></a>

## 功能描述<a name="zh-cn_topic_0059778607_s8dcd69edcfca47eb88ddb451a360b362"></a>

删除一个客户端加密主密钥（CMK）。

## 注意事项<a name="section7595101213507"></a>

-   只有客户端加密主密钥所有者或者被授予了DROP权限的用户有权限执行命令，系统管理员默认拥有此权限。
-   该命令不仅删除数据库中的密钥对象，还会同时删除客户端指定路径下该密钥对象对应的密钥文件。

## 语法格式<a name="zh-cn_topic_0059778607_seefd39b3ef1942df9e333846afd3a56c"></a>

```
DROP CLIENT MASTER KEY [ IF EXISTS ] client_master_key_name [CASCADE];
```

## 参数说明<a name="zh-cn_topic_0059778607_sad5ef99cc3a043838c29c5bdde9caab3"></a>

-   **IF EXISTS**

    如果指定的客户端加密主密钥不存在，则发出一个notice而不是抛出一个错误。

-   **client\_master\_key\_name**

    要删除的客户端加密主密钥名称。

    取值范围：字符串，已存在的客户端加密主密钥对象的名称。

-   **CASCADE**
    -   **CASCADE**：表示允许级联删除依赖于客户端加密主密钥的对象。

        >![](public_sys-resources/icon-notice.png) **须知：**
        >在执行本语法的生命周期中，同时需要客户端和服务端更改状态，发生异常时可能存在服务端已删除密钥信息，但客户端未删除密钥文件的情况。
        >此时，客户端并不会在执行下一条语法的生命周期中，检查是否有期望被删除但却因发生异常而未被删除的密钥文件，而是需要用户定期检查密钥文件夹，对未被使用的密钥文件进行确认并处理。



## **示例**<a name="section162746130164"></a>

```
--删除客户端加密主密钥对象。
openGauss=> DROP CLIENT MASTER KEY ImgCMK CASCADE;
NOTICE:  drop cascades to column setting: imgcek
DROP CLIENT MASTER KEY
```
