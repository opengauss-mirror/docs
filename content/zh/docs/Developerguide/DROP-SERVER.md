# DROP SERVER

## 功能描述

删除现有的一个数据服务器。

## 注意事项

只有server的owner才可以删除。

## 语法格式

```
DROP SERVER [ IF EXISTS ] server_name [ {CASCADE | RESTRICT} ] ;
```

## 参数描述

-   **IF EXISTS**

    如果指定的数据服务器不存在，则发出一个notice而不是抛出一个错误。

-   **server\_name**

    服务器名称。

-   **CASCADE | RESTRICT**
    -   CASCADE：级联删除依赖于server的对象 。
    -   RESTRICT（缺省值）：如果存在依赖对象，则拒绝删除该server。


## 相关链接

[ALTER SERVER](ALTER-SERVER.md)，[CREATE SERVER](CREATE-SERVER.md)

