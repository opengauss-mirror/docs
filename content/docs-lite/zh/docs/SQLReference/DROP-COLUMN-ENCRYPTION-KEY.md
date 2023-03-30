# DROP COLUMN ENCRYPTION KEY<a name="ZH-CN_TOPIC_0294528091"></a>

## 功能描述<a name="section77761618077"></a>

删除一个列加密密钥\(cek\)。

## 注意事项<a name="section7776101818719"></a>

只有列加密密钥所有者或者被授予了DROP权限的用户有权限执行命令，系统管理员默认拥有此权限。

>![](public_sys-resources/icon-note.gif) **说明：** 
>
>轻量版场景下，openGauss提供此语法，但密态数据库相关功能不可用。

## 语法格式<a name="zh-cn_topic_0059778607_seefd39b3ef1942df9e333846afd3a56c"></a>

```
DROP COLUMN ENCRYPTION KEY [ IF EXISTS ] column_encryption_key_name [CASCADE];
```

## 参数说明<a name="zh-cn_topic_0059778607_sad5ef99cc3a043838c29c5bdde9caab3"></a>

-   **IF EXISTS**

    如果指定的列加密密钥不存在，则发出一个notice而不是抛出一个错误。

-   **column\_encryption\_key\_name**

    要删除的列加密密钥名称。

    取值范围：字符串，已存在的列加密密钥名称。


## 示例<a name="section162746130164"></a>

```
--删除列加密密钥。
openGauss=# DROP COLUMN ENCRYPTION KEY ImgCEK CASCADE;
ERROR:  cannot drop column setting: imgcek cascadely because encrypted column depend on it.
HINT:  we have to drop encrypted column: name, ... before drop column setting: imgcek cascadely.
```

