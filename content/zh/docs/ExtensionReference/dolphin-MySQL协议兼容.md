# MySQL协议兼容

-   openGauss通过抽象协议层接口，在dolphin插件中实现了MySQL协议兼容，用户在设置相关参数后，可通过MySQL的JDBC driver或者MySQL命令行客户端，直接连接openGauss。

## 当前支持的MySQL客户端版本

-   MySQL JDBC driver： 5.1.47~5.1.49
-   MySQL 命令行客户端： 5.7.38~5.7.42

## 约束

-   不支持游标（指在JDBC中通过useCursorFetch、setFetchSize的方式获取数据）。
-   不支持执行存储过程。

## 使用方式

1. 创建B类型数据库，创建用户并设置MySQL native密码（可根据需要通过GRANT命令给新用户赋权）：
```SQL
CREATE DATABASE proto_test_db DBCOMPATIBILITY 'B';
\c proto_test_db
CREATE USER proto_test WITH PASSWORD 'Proto_test123';
SELECT set_native_password('proto_test', 'Proto_test123');
```
2. 设置GUC参数 [enable_dolphin_proto](../DatabaseReference/连接设置.md#enable_dolphin_proto) 为 on。
3. 设置MySQL协议监听端口号， [dolphin_server_port](../DatabaseReference/连接设置.md#dolphin_server_port)，注意端口号需要与openGauss本身监听的端口号 port 不同。
4. 如果数据库中存在多个B兼容性数据库，需要通过[dolphin.default_database_name](./dolphin-GUC参数说明.md#dolphindefault_database_name)设置默认连接的数据库实例名。
5. 设置完成后，即可通过MySQL客户端，使用对应的用户名和密码连接openGauss。

>![](public_sys-resources/icon-notice.png) **须知：** 
>
>-   enable_dolphin_proto和dolphin_server_port为POSTMASTER类型参数，修改需要重启才生效。
>-   使用MySQL客户端连接openGauss前，请确认listen_addresses配置正确，pg_hba允许MySQL客户端所在机器IP连接。可参考 [配置客户端接入认证](../DatabaseAdministrationGuide/配置客户端接入认证.md)。
>-   使用MySQL客户端连接时，可通过形如 mysql -u [user_name] -p --port [dolphin_server_port] -h [opengauss_listen_address] 的方式连接。