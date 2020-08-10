# CREATE SERVER
## 功能描述
定义一个新的外部服务器。
## 语法格式
```
CREATE SERVER server_name
    FOREIGN DATA WRAPPER fdw_name
    OPTIONS ( { option_name ' value ' } [, ...] ) ;
```

## 参数说明

-   **server\_name**

    server的名称。

    取值范围：长度必须小于等于63。

-   **fdw\_name**

    指定外部数据封装器的名称。

    取值范围：oracle_fdw，mysql_fdw，mot_fdw。

-   **OPTIONS \(  \{ option\_name ' value '  \}  \[, ...\] \)**

    这个子句为服务器指定选项。这些选项通常定义该服务器的连接细节， 但是实际的名称和值取决于该服务器的外部数据包装器。

    oracle_fdw支持的options包括：

    -   **dbserver**

        远端Oracle数据库的连接字符串。

    - **isolation_level** （默认值为`serializable`）
    
        oracle数据库的事务隔离级别。
    
        取值范围：`serializable`, `read_committed` , `read_only`

    mysql_fdw支持的options包括：
    
    -   **host** （默认值为 `127.0.0.1`）

        MySQL Server/MariaDB的地址。

    -   **port** （默认值为 `3306`）

        MySQL Server/MariaDB监听的端口号。

相关链接

[ALTER SERVER](ALTER-SERVER.md)，  [DROP SERVER](DROP-SERVER.md)

