# DROP SERVER

## 功能描述<a name="zh-cn_topic_0283136745_section18987145713527"></a>

删除现有的一个数据服务器。

## 注意事项<a name="zh-cn_topic_0283136745_section1195003135320"></a>

只有server的所有者或者被授予了server的DROP权限的用户才可以删除，系统管理员默认拥有该权限。

## 语法格式<a name="zh-cn_topic_0283136745_section51061559145316"></a>

```
DROP SERVER [ IF EXISTS ] server_name [ {CASCADE | RESTRICT} ] ;
```

## 参数描述<a name="zh-cn_topic_0283136745_section08321910175316"></a>

-   **IF EXISTS**

    如果指定的数据服务器不存在，则发出一个notice而不是抛出一个错误。

-   **server\_name**

    服务器名称。

-   **CASCADE | RESTRICT**

    -   CASCADE：级联删除依赖于server的对象 。

    -   RESTRICT（缺省值）：如果存在依赖对象，则拒绝删除该server。



## 相关链接<a name="zh-cn_topic_0283136745_section620331805317"></a>

[ALTER SERVER](ALTER-SERVER.md)，[CREATE SERVER](CREATE-SERVER.md)
