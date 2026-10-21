---
description: 本文介绍使用 Spring Boot 3.x 通过 MySQL JDBC 驱动连接 openGauss B 模式数据库的开发示例，涵盖项目构建、CRUD、事务与安全等操作。
keywords: [openGauss, Spring Boot, MySQL兼容, JDBC, 开发示例]
url: /zh/docs/latest/mysql_compatibility_developer_guide/springboot_development.md
---
# Spring Boot 连接示例

openGauss 的 dolphin 插件实现了 MySQL 协议兼容。用户在数据库服务端开启 `enable_dolphin_proto` 后，可以在 Spring Boot 应用中直接使用 MySQL 的 JDBC 驱动连接 openGauss 的 B 兼容模式数据库，获得接近原生 MySQL 的开发体验。

本文介绍使用 Spring Boot 3.x 配合 MySQL JDBC 驱动（mysql-connector-j）连接 openGauss B 库的方法，包括环境准备、项目搭建、连接/CRUD/事务/批量示例代码，以及注意事项与已知限制。

## 环境准备

> 本节的 openGauss 环境配置命令与 [Mybatis 连接示例](mybatis_development.html) 一致，若按该文档完成环境配置，可跳过本节。

### 准备业务表结构

1. 通过 openGauss 命令行工具 gsql 连接 openGauss 数据库

   ```bash
   gsql -d postgres -p 5432 -r
   ```

2. 切换至 MySQL 协议兼容配置的 B 库下

   ```sql
   \c proto_test_db
   ```

3. 创建 MySQL JDBC url 连接串中指定的 database。在 B 库下，openGauss 的 schema 等价于 MySQL 的 database

   ```sql
   CREATE SCHEMA mysql_test_db;
   ```

4. 切换 schema，并创建业务表结构

   ```sql
   SET current_schema to mysql_test_db;

   CREATE TABLE `user` (
       `id`   INT AUTO_INCREMENT PRIMARY KEY,
       `name` VARCHAR(50) COMMENT '用户名',
       `age`  INT COMMENT '年龄'
   ) DEFAULT CHARSET=utf8mb4;

   INSERT INTO `user` (`name`, `age`) VALUES
       ('张三', 20),
       ('李四', 30),
       ('王五', 40);
   ```

5. 退出 gsql 连接

   ```sql
   \q
   ```

### 准备连接用户

1. 通过 gsql 命令，重新连接 openGauss 数据库

   ```bash
   gsql -d postgres -p 5432 -r
   ```

2. 创建与业务表所在 schema 同名的用户

   ```sql
   CREATE USER mysql_test_db WITH PASSWORD '******';
   ```

   > [!TIP]须知
   > 不要在 schema 已存在的 B 库下创建同名用户，会创建失败：实测报错 `ERROR: schema "t1" already exists`。先建用户、再建同名 B 库的顺序不受影响（MySQL 中用户与库命名空间独立、任意顺序均可，B 模式存在此顺序差异）。

3. 切换至 MySQL 协议兼容配置的 B 库下

   ```sql
   \c proto_test_db
   ```

4. 新用户设置 MySQL 协议认证密码

   dolphin 插件提供两种认证密码：`set_native_password` 对应 MySQL 5.7 的 mysql_native_password（对密码做双重 SHA-1），`set_caching_sha2_password` 对应 MySQL 8.0 默认的 caching_sha2_password（SHA-256，salt 由服务端自动生成）。客户端握手时，服务端与 MySQL 8.0 一样始终以 `caching_sha2_password` 作为认证插件进行协商，MySQL 5.7 客户端会通过认证切换回退到 mysql_native_password。两种密码写入同一个字段，后执行者覆盖先执行者，客户端按握手协商结果使用对应密码即可。

   ```sql
   SELECT set_native_password('mysql_test_db', '******', '');
   -- MySQL 8.0 客户端建议使用（三参：用户、新密码、旧密码）：
   SELECT set_caching_sha2_password('mysql_test_db', '******', '');
   ```

5. 修改业务表所在 schema 的所属用户

   ```sql
   alter schema mysql_test_db owner to mysql_test_db;
   ```

6. 赋予用户所有历史表的操作权限

   ```sql
   GRANT ALL ON ALL TABLES IN SCHEMA mysql_test_db to mysql_test_db;
   GRANT ALL ON ALL SEQUENCES IN SCHEMA mysql_test_db to mysql_test_db;
   ```

   > [!TIP]须知
   > 如果有新创建的表，不需要对新表重新赋权，因为 schema 所属用户已修改，新创建的表所属用户与 schema 所属用户一致。

7. 退出 gsql 连接

   ```sql
   \q
   ```

### 配置客户端接入认证

openGauss 需配置客户端接入认证后，才允许通过指定用户远程连接数据库，否则连接会报错。配置方式如下：

```bash
gs_guc set -N all -I all -h "host all mysql_test_db 0.0.0.0/0 sha256"
# 其中 mysql_test_db 为数据库用户名，此处远程连接禁止使用“omm”用户（即数据库初始化用户）

gs_om -t restart
```

另外需放行 MySQL 协议端口（默认 `dolphin_server_port = 3308`）的防火墙访问：

```bash
firewall-cmd --zone=public --add-port=3308/tcp --permanent
firewall-cmd --reload
```

更多详细内容请参考，[配置客户端接入认证](https://docs.opengauss.org/zh/docs/latest/database_administration_guide/configuring_client_access_authentication.html)。

## 项目搭建

### 创建 Maven 项目

创建标准 Maven 工程（Spring Boot 3.x 要求 JDK 17+），目录参考如下：

```
springboot-connect-opengauss-b
├── pom.xml
└── src
    ├── main
    │   ├── java/org/opengauss/smoke
    │   │   └── SmokeApplication.java   # 启动类
    │   └── resources
    │       └── application.yml         # 数据源配置
    └── test
        └── java/org/opengauss/cases/   # 测试用例（详见 examples 仓）
```

### 添加依赖

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.5.16</version>
</parent>

<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-jdbc</artifactId>
    </dependency>
    <dependency>
        <groupId>com.mysql</groupId>
        <artifactId>mysql-connector-j</artifactId>
    </dependency>
</dependencies>
```

> [!NOTE]说明
> MySQL 驱动 8.0.28 及以下使用旧坐标 `mysql:mysql-connector-java`；8.0.31 起使用新坐标 `com.mysql:mysql-connector-j`。Spring Boot 3.x 的 BOM 自动管理新坐标版本（Boot 3.5.16 默认解析 9.7.0），无需显式指定版本号。经实测，**8.0.28 ~ 26.7.0 各版本在 openGauss B 模式下的基础 CRUD、事务、批量、类型映射场景均可正常工作**。

### 准备配置文件

`application.yml` 数据源配置示例。注意 **端口是 dolphin 协议端口（dolphin_server_port，默认 3308），不是 openGauss 原生端口 5432**：

```yaml
spring:
  datasource:
    url: jdbc:mysql://127.0.0.1:3308/mysql_test_db?useSSL=false&serverTimezone=UTC&characterEncoding=utf-8
    username: mysql_test_db
    password: '******'
    driver-class-name: com.mysql.cj.jdbc.Driver
    hikari:
      maximum-pool-size: 10
```

## 示例代码

### 连接与查询

```java
// Spring 容器内直接注入 JdbcTemplate
@Autowired
private JdbcTemplate jdbcTemplate;

// 查询：url 中的 mysql_test_db 即 B 库下的 schema
List<Map<String, Object>> users = jdbcTemplate.queryForList("SELECT * FROM `user`");

// 元数据：productName = MySQL，productVersion = 8.0.28-dophin-server
try (Connection c = jdbcTemplate.getDataSource().getConnection()) {
    DatabaseMetaData md = c.getMetaData();
    System.out.println(md.getDatabaseProductName() + " / " + md.getDatabaseProductVersion());
}
```

### 增删改

```java
jdbcTemplate.update("INSERT INTO `user` (name, age) VALUES (?, ?)", "赵六", 28);
jdbcTemplate.update("UPDATE `user` SET age = ? WHERE name = ?", 29, "赵六");
jdbcTemplate.update("DELETE FROM `user` WHERE name = ?", "赵六");
```

### 事务

```java
// 编程式事务（TransactionTemplate）
@Autowired
private TransactionTemplate txTemplate;

txTemplate.execute(status -> {
    jdbcTemplate.update("INSERT INTO `user` (name, age) VALUES (?, ?)", "tx_a", 1);
    jdbcTemplate.update("INSERT INTO `user` (name, age) VALUES (?, ?)", "tx_b", 2);
    if (rollback) {
        status.setRollbackOnly(); // 两条一并回滚
    }
    return null;
});
```

### 批量写入

批量写入建议开启 `rewriteBatchedStatements=true`，实测 500 行批量写入耗时由约 1020ms 降至约 59ms（约 17 倍提速）。两种方式：

```java
// 方式一：JdbcTemplate.batchUpdate
jdbcTemplate.batchUpdate("INSERT INTO `user` (name, age) VALUES (?, ?)", batchArgs);

// 方式二：连接参数开启批量重写后使用 PreparedStatement
String url = "jdbc:mysql://127.0.0.1:3308/mysql_test_db?useSSL=false"
        + "&serverTimezone=UTC&rewriteBatchedStatements=true";
try (Connection c = DriverManager.getConnection(url, "mysql_test_db", "******")) {
    try (PreparedStatement ps = c.prepareStatement("INSERT INTO `user` (name, age) VALUES (?, ?)")) {
        for (int i = 0; i < 1000; i++) {
            ps.setString(1, "batch_" + i);
            ps.setInt(2, i);
            ps.addBatch();
        }
        int[] counts = ps.executeBatch();
    }
}
```

## 示例运行日志

```
[INFO] Tests run: 28, Failures: 0, Errors: 0, Skipped: 0
[INFO] BUILD SUCCESS
[CASE] 1.1 正常连接 ok: productName=MySQL, productVersion=8.0.28-dophin-server
[CASE] 3.2 rewriteBatchedStatements=true 500 行耗时 59ms（对比默认 1020ms）
```

## 注意事项与已知限制

1. **数据库对象命名**：表名/列名使用反引号 `` ` ``（MySQL 习惯写法；`user` 是 MySQL 保留字，必须加反引号）；
2. **端口**：MySQL 协议使用 `dolphin_server_port`（默认 3308），连 5432 原生口会报 `Communications link failure`；
3. **驱动版本范围**：经 8 档驱动（8.0.28 ~ 26.7.0）矩阵实测，基础场景行为一致；8.0.28 及以下使用旧 Maven 坐标 `mysql:mysql-connector-java`；
4. **零日期**：零日期（`0000-00-00`）存储由 `dolphin.sql_mode` 中的 `no_zero_date` 控制：默认开启，插入报 `date/time field value out of range`；从 sql_mode 中去掉后可正常存储。表中有零日期时，`zeroDateTimeBehavior` 三档实测均生效：`convertToNull` 读为 null、`exception` 读时抛 `Zero date value prohibited`、`round` 读为 `0001-01-01`，与 MySQL 语义一致；
5. **隔离级别**：设置 SERIALIZABLE 会被服务端映射为 REPEATABLE_READ（`getTransactionIsolation` 读回 4）；
6. **JDBC 元数据 API 与表名大小写**：`information_schema` 下 TABLES/PARAMETERS/KEYWORDS 等视图均存在（小写可查），但默认配置（`dolphin.lower_case_table_names=0`）下大小写敏感，驱动按 MySQL 惯例发大写 TABLES 报 `relation "information_schema.TABLES" does not exist`，`DatabaseMetaData.getTables` 等 API 与 ORM 框架的元数据探测因此失败。**解决：将 `dolphin.lower_case_table_names` 设为 1**——在 postgresql.conf 追加 `dolphin.lower_case_table_names = 1` 并重启后全局生效（会话级 `SET` 仅对当前会话有效，应用/驱动场景须持久化配置）；设置后实测大写 TABLES 可查、`DatabaseMetaData.getTables` 恢复正常；
7. **游标与存储过程**：此前记录的存储过程调用报错 `information_schema.PARAMETERS does not exist` 实为默认配置下大小写敏感所致——PARAMETERS 视图存在、小写可查，设置 `dolphin.lower_case_table_names=1` 后大写可查（见第 6 条）；协议层对游标与存储过程功能支持有限，相关场景请改写为普通 SQL / 批处理；
8. **类型映射与 JDBC 参数**：TINYINT(1)/BIT(1) 默认映射为 Boolean；DATETIME 映射为 LocalDateTime，TIMESTAMP 映射为 Timestamp。官方协议兼容文档列出的 6 个 JDBC 参数经实测：`tinyInt1isBit`、`useOldAliasMetadataBehavior`、`allowMultiQueries` 生效；`transformedBitIsBoolean`（两种设置 Java 侧均映射 Boolean）、`useaffectedrows`（恒返回找到的行数）、`zeroDateTimeBehavior`（三档均生效，见第 4 条）行为与文档声明一致。

## 相关资源

- MyBatis 使用方式见 [Mybatis 连接示例](mybatis_development.md)。
---
