# DROP DATABASE

## 功能描述<a name="zh-cn_topic_0283137424_zh-cn_topic_0237122133_zh-cn_topic_0059778607_s8dcd69edcfca47eb88ddb451a360b362"></a>

删除一个数据库。

## 注意事项<a name="zh-cn_topic_0283137424_zh-cn_topic_0237122133_zh-cn_topic_0059778607_sbc821d407f41462a8b14952774c4287f"></a>

-   只有数据库所有者或者被授予了数据库DROP权限的用户有权限执行DROP DATABASE命令，系统管理员默认拥有此权限。
-   不能对系统默认安装的三个数据库（POSTGRES、TEMPLATE0和TEMPLATE1）执行删除操作，系统做了保护。如果想查看当前服务中有哪几个数据库，可以用gsql的\\l命令查看。
-   如果有用户正在与要删除的数据库连接，则删除操作失败。
-   不能在事务块中执行DROP DATABASE命令。
-   如果执行DROP DATABASE失败，事务回滚，需要再次执行一次DROP DATABASE IF EXISTS。

>![](public_sys-resources/icon-notice.png) **须知：**
>DROP DATABASE一旦执行将无法撤销，请谨慎使用。

## 语法格式<a name="zh-cn_topic_0283137424_zh-cn_topic_0237122133_zh-cn_topic_0059778607_seefd39b3ef1942df9e333846afd3a56c"></a>

```
DROP DATABASE [ IF EXISTS ] database_name ;
```

## 参数说明<a name="zh-cn_topic_0283137424_zh-cn_topic_0237122133_zh-cn_topic_0059778607_sad5ef99cc3a043838c29c5bdde9caab3"></a>

-   **IF EXISTS**

    如果指定的数据库不存在，则发出一个notice而不是抛出一个错误。

-   **database\_name**

    要删除的数据库名称。

    取值范围：字符串，已存在的数据库名称。


## 示例<a name="zh-cn_topic_0283137424_zh-cn_topic_0237122133_zh-cn_topic_0059778607_sabd40dc25b604e1b8c213e7e9f6b5200"></a>

请参见CREATE DATABASE的[示例](CREATE-DATABASE.md#zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s6be7b8abbb4b4aceb9dae686434d672c)。

## 相关链接<a name="zh-cn_topic_0283137424_zh-cn_topic_0237122133_zh-cn_topic_0059778607_s5f331542a3f84ab58b896c25bfff41db"></a>

[CREATE DATABASE](CREATE-DATABASE.md)

## 优化建议<a name="zh-cn_topic_0283137424_zh-cn_topic_0237122133_zh-cn_topic_0059778607_section29255108114255"></a>

-   drop database

    不支持在事务中删除database。
