# 配置 MySQL 协议兼容

## MySQL 协议兼容简介

openGauss 通过抽象协议层，在 dolphin 插件中实现了 MySQL 协议兼容，用户在设置相关参数后，可以通过 MySQL 的 JDBC 驱动直接连接 openGauss B 兼容模式的数据库。

更多详情信息，请参考：[MySQL 协议兼容](https://docs.opengauss.org/zh/docs/latest/extension_reference/dolphin_mysql_protocol_compatibility.html)

## MySQL 协议兼容配置

openGauss 兼容 MySQL 协议，支持配置 mysql_native_password 和 caching_sha2_password 两种认证方式。以下以 mysql_native_password 为例，详细介绍其配置方法。

### mysql_native_password 认证方式配置

1. 通过 openGauss 命令行工具 gsql 连接 openGauss 数据库

   ```bash
   gsql -d postgres -p 5432 -r
   ```

2. 创建 B 兼容类型数据库

   ```sql
   CREATE DATABASE proto_test_db WITH DBCOMPATIBILITY 'B' ENCODING 'UTF8';
   ```

3. 切换至新创建的 B 库下

   ```sql
   \c proto_test_db
   ```

4. 创建用户，并设置 MySQL native 密码（可根据需要通过 [GRANT](https://docs.opengauss.org/zh/docs/latest/sql_reference/grant.html) 命令给新用户赋权）

   ```sql
   CREATE USER proto_test WITH PASSWORD '******';
   
   SELECT set_native_password('proto_test', '******', '');
   -- 其中
   -- 	第一个参数为用户名；
   -- 	第二个参数为 MySQL 连接密码；
   -- 	第三个参数为用户的原 MySQL 连接密码，第一次设置 MySQL 连接密码时原密码可以为空或者任意值，后续更改 MySQL 连接密码或更改认证方式时，需要填写原密码用于验证。
   ```

5. 设置 openGauss GUC 参数  [enable_dolphin_proto](https://docs.opengauss.org/zh/docs/latest/database_reference/connection_settings.html#enable_dolphin_proto) 为 on，设置后需要重启 openGauss 数据库，此处等待后续配置完成后一起重启

   ```sql
   ALTER SYSTEM SET enable_dolphin_proto TO on;
   ```

6. 设置MySQL协议监听端口号  [dolphin_server_port](https://docs.opengauss.org/zh/docs/latest/database_reference/connection_settings.html#dolphin_server_port)，注意端口号需要与 openGauss 本身监听的端口号不同，设置后需要重启 openGauss 数据库，此处等待后续配置完成后一起重启

   ```sql
   ALTER SYSTEM SET dolphin_server_port TO 3308;
   ```

7. 退出 gsql 连接

   ```sql
   \q
   ```

8. 重启数据库使配置生效，此处以企业版重启命令为例

   ```bash
   gs_om -t restart
   ```

9. 重新使用 gsql 连接 openGauss，并切换到新创建的 B 库下

   ```sql
   gsql -d postgres -p 5432 -r
   
   \c proto_test_db
   ```

10. 设置默认连接的数据库实例名为新创建的 B 库名，[dolphin.default_database_name](https://docs.opengauss.org/zh/docs/latest/extension_reference/dolphin_guc_parameters.html#dolphindefault_database_name)。

    ```sql
    ALTER SYSTEM SET dolphin.default_database_name TO proto_test_db;
    ```

11. 设置成功后，MySQL 协议兼容配置完成，可通过 MySQL 客户端，使用对应的用户名和密码连接 openGauss B 库。

## 其他

### dolphin.sql_mode

openGauss GUC 参数 [dolphin.sql_mode](https://docs.opengauss.org/zh/docs/latest/extension_reference/dolphin_guc_parameters.html#dolphinsql_mode)，对于 MySQL sql_mode 中的参数选项，openGauss dolphin.sql_mode 有等价功能的参数进行平替。

### dolphin.lower_case_table_names

openGauss GUC 参数 [dolphin.lower_case_table_names](https://docs.opengauss.org/zh/docs/latest/extension_reference/dolphin_guc_parameters.html#dolphinlower_case_table_names)，用于控制用户名、表名、视图名、模式名的大小写敏感。
