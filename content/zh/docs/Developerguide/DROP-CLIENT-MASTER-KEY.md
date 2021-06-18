# DROP CLIENT MASTER KEY<a name="ZH-CN_TOPIC_0294528090"></a>

## 功能描述<a name="zh-cn_topic_0059778607_s8dcd69edcfca47eb88ddb451a360b362"></a>

删除一个客户端加密主密钥\(cmk\)。

## 注意事项<a name="section7595101213507"></a>

-   只有客户端加密主密钥所有者或者被授予了DROP权限的用户有权限执行命令，系统管理员默认拥有此权限。
-   该命令只能删除数据库中系统表记录的元数据信息，不能真正删除CMK密钥文件，需要通过KeyTool工具才能删除CMK密钥文件。

## 语法格式<a name="zh-cn_topic_0059778607_seefd39b3ef1942df9e333846afd3a56c"></a>

```
DROP CLIENT MASTER KEY [ IF EXISTS ] client_master_key_name [CASCADE];
```

## 参数说明<a name="zh-cn_topic_0059778607_sad5ef99cc3a043838c29c5bdde9caab3"></a>

-   **IF EXISTS**

    如果指定的客户端加密主密钥不存在，则发出一个notice而不是抛出一个错误。

-   **client\_master\_key\_name**

    要删除的客户端加密主密钥名称。

    取值范围：字符串，已存在的客户端加密主密钥名称。

-   **CASCADE**
    
    -   **CASCADE**：表示允许级联删除依赖于客户端加密主密钥的对象。


## **示例**<a name="section162746130164"></a>

```
--删除客户端加密主密钥对象。
openGauss=> DROP CLIENT MASTER KEY ImgCMK CASCADE;
NOTICE:  drop cascades to column setting: imgcek
DROP GLOBAL SETTING
```

