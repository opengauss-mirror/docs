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

        MySQL Server/MariaDB侦听的端口号。
        
    
    postgres_fdw支持的options同libpq支持的连接参数一致，可参考 **[链接字符](链接字符.md)** 。需要注意的是，以下几个options不支持修改：
    
    -   **user** 和 **password**
    
        用户名和密码将在创建user mapping时指定
    
    -   **client_encoding**
    
        将自动获取本地server的编码方式并设置该值
    
    -   **application_name**
    
        总是设置成`postgres_fdw`

    除了libpq支持的连接参数外，还额外提供3个options：
    
    -  **use_remote_estimate**
    
       控制`postgres_fdw`是否发出`EXPLAIN`命令以获取运行消耗估算。默认值为`false`。
    
    -  **fdw_startup_cost**
    
      执行一个外表扫描时的启动耗时估算。这个值通常包含建立连接、远端对请求的分析和生成计划的耗时。默认值为`100`。
    
    -  **fdw_typle_cost**

      在远端服务器上对每一个元组进行扫描时的额外消耗。这个值通常表示数据在server间传输的额外消耗。默认值为`0.01`。


-   **new\_name**

    修改后server的新名称。


## 相关链接

[CREATE SERVER](CREATE-SERVER.md) [DROP SERVER](DROP-SERVER.md)

