# ALTER SERVER

## 功能描述

增加、修改和删除一个现有server的参数。现有server可以从pg\_foreign\_server系统表查询。

## 注意事项

除系统管理员外，只有server的owner才可以进行Alter操作。

## 语法格式

-   修改外部服务的参数。

```
ALTER SERVER server_name [ VERSION 'new_version' ]
    [ OPTIONS ( {[ ADD | SET | DROP ] option ['value']} [, ... ] ) ];
```

在OPTIONS选项里，`ADD`、`SET`和`DROP`指定要执行的操作，未指定时默认为`ADD`操作。option和value为对应操作的参数。

-   修改外部服务的名称。

```
ALTER SERVER server_name 
    RENAME TO new_name;
```

## 参数说明

修改server的参数如下所示：

-   **server\_name**

    所修改的server的名称。

-   **new\_version**

    修改后server的新版本名称。

-   修改server所支持的**OPTIONS**如下所示：
    更改该服务器的选项。`ADD`、`SET`和 `DROP`指定要执行的动作。如果没有显式地指定操作， 将会假定为`ADD`。选项名称必须唯一，名称和值也会使用该服务器的外部数据包装器库进行验证。

    oracle_fdw支持的options包括：

    -   **dbserver**

        远端oracle数据库的连接字符串。

    - **isolation_level** （默认值为`serializable`）
    
        oracle数据库的事务隔离级别。
    
        取值范围：`serializable`, `read_committed` , `read_only`

    mysql_fdw支持的options包括：
    
    -   **host** （默认值为 `127.0.0.1`）

        MySQL Server/MariaDB的地址。

    -   **port** （默认值为 `3306`）

        MySQL Server/MariaDB监听的端口号。


-   **new\_name**

    修改后server的新名称。


## 相关链接

[CREATE SERVER](CREATE-SERVER.md) [DROP SERVER](DROP-SERVER.md)

