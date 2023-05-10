# CREATE SERVER

## 功能描述<a name="zh-cn_topic_0283137586_section1087614114391"></a>

定义一个新的外部服务器。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-   本章节只包含dolphin新增的语法，原openGauss的语法未做删除和修改。
-   相比于原始的openGauss，dolphin对于```CREATE SERVER```语法的修改主要为：
    1. 新增fdw_name可选值mysql，其功能与mysql_fdw一致。
    2. 对于fdw_name为mysql_fdw时，增加可选OPTIONS：DATABASE, USER, PASSWORD, SOCKET, OWNER。

## 语法格式<a name="zh-cn_topic_0283137586_section14553175913395"></a>

```
CREATE SERVER server_name
    FOREIGN DATA WRAPPER fdw_name
    OPTIONS ( { option_name ' value ' } [, ...] ) ;
```

## 参数说明<a name="zh-cn_topic_0283137586_section183121377402"></a>

-   **fdw\_name**

    指定外部数据封装器的名称。

    取值范围：dist\_fdw，hdfs\_fdw，log\_fdw，file\_fdw，mot\_fdw，oracle\_fdw，mysql\_fdw，mysql, postgres\_fdw。

-   **OPTIONS \(  \{ option\_name ' value '  \}  \[, ...\] \)**

    这个子句为服务器指定选项。这些选项通常定义该服务器的连接细节，但是实际的名称和值取决于该服务器的外部数据包装器。

    -   mysql\_fdw支持的options包括：
        -   **host**  （默认值为 127.0.0.1）

            MySQL Server/MariaDB的地址。

        -   **port**  （默认值为 3306）

            MySQL Server/MariaDB侦听的端口号。

        -   **user**  （默认为空）

            MySQL Server/MariaDB用于连接的用户名。若OPTIONS指定此选项，openGauss将自动创建当前用户到新建server的用户映射。

        -   **password**  （默认为空）

            MySQL Server/MariaDB用于连接的用户密码。若OPTIONS指定此选项，openGauss将自动创建当前用户到新建server的用户映射。

        -   **database**  （默认为空）

            无实际意义，仅做语法兼容。指定MySQL Server/MariaDB连接的数据库请在[CREATE FOREIGN TABLE](../SQLReference/CREATE-FOREIGN-TABLE.md)或[ALTER FOREIGN TABLE](ALTER-FOREIGN-TABLE.md)中完成。

        -   **owner**  （默认为空）

            无实际意义，仅做语法兼容。

        -   **socket**  （默认为空）

            无实际意义，仅做语法兼容。

## 示例<a name="section6372437377"></a>

创建server。

```
openGauss=# create server server_test foreign data wrapper mysql options(host '192.108.0.1', port '3306', user 'foreign_server_test',
password 'password@123', database 'my_db', owner 'test_user');
WARNING:  Option database will be deprecated for CREATE SERVER.
WARNING:  Option owner will be deprecated for CREATE SERVER.
WARNING:  USER MAPPING for current user to server server_test created.
CREATE SERVER
```

## 相关链接<a name="zh-cn_topic_0283137586_section3901738174011"></a>

[ALTER SERVER](dolphin-ALTER-SERVER.md)，[DROP SERVER](DROP-SERVER.md)

