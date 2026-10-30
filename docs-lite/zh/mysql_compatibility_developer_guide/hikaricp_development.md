# HikariCP 连接池示例

openGauss 完成 MySQL 协议兼容配置后，即可使用 HikariCP 连接池配合 MySQL JDBC 连接 openGauss B 兼容模式数据库。

HikariCP 是一款高性能的 JDBC 连接池，也是 Spring Boot 等主流框架默认使用的连接池。在 openGauss B 兼容库（dolphin 插件开启 MySQL 协议）之上使用 HikariCP，可以复用 MySQL 生态成熟的连接池管理能力（连接复用、限流、保活、监控等），提升应用访问 openGauss 的稳定性与吞吐量。

本文介绍如何通过 HikariCP 配合 MySQL JDBC Driver 连接 openGauss B 库，并完成建表、增删改查、事务等常见操作。

## 准备工作

> ### 前置条件：已完成 MySQL 协议兼容配置
> 本文示例使用 HikariCP 连接 openGauss，依赖服务端已开启 MySQL 协议兼容（dolphin 插件）。请先参考《[配置 MySQL 协议兼容](mysql_protocol_compatibility_config.md)》完成以下准备，再继续本文后续步骤：
> 1. 设置 GUC 参数 `enable_dolphin_proto=on` 并重启生效；
> 2. 创建 B 兼容类型数据库（本文示例库名为 `proto_test_db`，见下文 `\c proto_test_db`）；
> 3. 设置 MySQL 协议监听端口 `dolphin_server_port`，本文示例统一使用 `3306`。《配置 MySQL 协议兼容》第 6 步示例写的是 `3308`，请按本文示例改填 `3306`，使其与本文示例连接串端口一致，即可原样运行。
>
> 完成上述前置条件后，再按本文「准备业务表结构 / 准备连接用户 / 配置客户端接入认证」继续。

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
       `id`      INT AUTO_INCREMENT PRIMARY KEY,
       `name`    VARCHAR(50)  NOT NULL COMMENT '用户名',
       `age`     INT COMMENT '年龄'
   ) DEFAULT CHARSET=utf8mb4;
   
   INSERT INTO `user` (`name`, `age`) VALUES
       ('张三',  18),
       ('李四',  19),
       ('王五',  20);
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
   > 不要在 schema 所在 B 库下创建同名用户，会创建失败。

3. 切换至 MySQL 协议兼容配置的 B 库下

   ```sql
   \c proto_test_db
   ```

4. 新用户设置 MySQL native 密码

   ```sql
   SELECT set_native_password('mysql_test_db', '******', '');
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
# mysql_test_db 为数据库用户名。远程连接禁止使用 `omm` 用户，该用户为数据库初始化用户。

gs_om -t restart
```

更多详细内容请参考，[配置客户端接入认证](https://docs.opengauss.org/zh/docs/7.0.0-lite/database_administration_guide/configuring_client_access_authentication.html)。

## HikariCP 项目搭建

### 创建 Maven 项目

使用 IDE 工具创建 Maven quickstart 项目，Java 版本指定为 11 及以上（HikariCP 5.x 编译目标为 Java 11，需 JDK 11+ 运行环境），项目可以命名为 hikaricp-connect-opengauss-b。若项目必须运行在 JDK 8 环境，请将 HikariCP 版本改为 4.0.3（详见「JDK 与 HikariCP 版本兼容」）。如果没有 Maven/Java，请先完成安装。

### 添加依赖

在 Maven 项目 pom.xml 文件中，添加 HikariCP 连接池与 MySQL JDBC 相关依赖：

```xml
<!-- HikariCP 连接池 -->
<dependency>
    <groupId>com.zaxxer</groupId>
    <artifactId>HikariCP</artifactId>
    <version>5.1.0</version>
</dependency>

<!-- MySQL JDBC 驱动 -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.20</version>
</dependency>

<!-- 日志（可选，便于观察连接池行为） -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-simple</artifactId>
    <version>1.7.36</version>
</dependency>
```

> [!TIP]须知
> - HikariCP 5.x（本文示例 5.1.0，Java 11 字节码）编译目标为 JDK 11，需 JDK 11 及以上运行环境；若使用 JDK 17，同样推荐 HikariCP 5.x。
> - 若项目必须运行在 JDK 8 环境，请改用 HikariCP 4.0.3（maintenance 版本，Java 8 字节码，API 用法一致），实测可在 Temurin 1.8.0_472 上正常加载。
> - MySQL JDBC 驱动需使用 `com.mysql.cj.jdbc.Driver`（Connector/J 8.x）。
> - 版本与 JDK 兼容矩阵、实测明细见「JDK 与 HikariCP 版本兼容」。

### 项目目录参考

```tex
hikaricp-connect-opengauss-b
├── pom.xml
└── src
    └── main
        ├── java
        │   └── org
        │       └── opengauss
        │           ├── HikariCpConnectDemo.java          # 主启动类/示例类
        │           └── entity
        │               └── User.java                     # 实体类
        └── resources
            └── hikari.properties                         # 连接池配置文件（可选）
```

### 创建实体类

创建与数据库表对应的实体类 User.java ：

```java
package org.opengauss.entity;

public class User {
    private Integer id;
    private String name;
    private Integer age;

    public User() {
    }

    public User(String name, Integer age) {
        this.name = name;
        this.age = age;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
```

### HikariCP 连接池配置

通过 `HikariConfig` 配置连接池，核心参数说明如下：

| 参数 | 说明 | 建议值 |
|------|------|--------|
| `jdbcUrl` | MySQL 协议连接串 | `jdbc:mysql://<ip>:<port>/<db>?useSSL=false&serverTimezone=UTC&characterEncoding=utf-8` |
| `username` / `password` | 连接用户与 MySQL native 密码 | 通过 `set_native_password` 设置 |
| `driverClassName` | JDBC 驱动类 | `com.mysql.cj.jdbc.Driver` |
| `maximumPoolSize` | 连接池最大连接数 | 根据并发量设置，默认 10 |
| `minimumIdle` | 最小空闲连接数 | 与 maximumPoolSize 一致可避免频繁创建 |
| `connectionTimeout` | 获取连接超时（毫秒） | 30000 |
| `idleTimeout` | 空闲连接回收时间（毫秒） | 600000 |
| `maxLifetime` | 连接最大存活时间（毫秒） | 必须小于 openGauss `session_timeout`（默认 600000ms/10 分钟），建议 ≤ 540000（9 分钟）留足余量；若需要更大 maxLifetime，请先将服务端 `session_timeout` 调大（或关闭超时）再放宽此值 |
| `keepaliveTime` | 连接保活间隔（毫秒） | 0 表示关闭；建议 300000（5 分钟）。前提：`keepaliveTime` 必须小于 `maxLifetime`，且必须小于服务端 `session_timeout`（否则保活探测连接自身会被服务端超时断开）；仅在连接可能长期空闲、且中间无连接空闲回收时才启用 |

> [!TIP]须知
> - `maxLifetime` 必须小于 openGauss 服务端的会话/连接超时时间（openGauss 默认 `session_timeout` 为 600000ms/10 分钟），否则连接池持有的连接可能被服务端主动断开，导致取到失效连接。HikariCP 官方 README 同样要求连接生命周期短于数据库或基础设施限制。如确需大于 10 分钟，请先调大（或关闭）服务端 `session_timeout`。
> - `keepaliveTime` 仅在连接空闲超过该间隔时由连接池主动发送保活探测，其取值同样受 `maxLifetime` 与服务端 `session_timeout` 约束，不可越过二者。
> - 如使用或触发 `caching_sha2_password` 的全认证（full authentication）场景，可能需要追加 `allowPublicKeyRetrieval=true`（用于从服务端检索 RSA 公钥完成密码交换）；若走 `mysql_native_password` 路径则通常无需该参数。
> - HikariCP 默认使用 JDBC4 的 `Connection.isValid()` 做连接校验，通常无需配置 `connectionTestQuery`。

### 操作示例代码

下面是使用 HikariCP 连接池连接 openGauss B 库，并完成增删改查与事务的完整示例：

```java
package org.opengauss;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.opengauss.entity.User;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class HikariCpConnectDemo {

    private static final HikariDataSource DATA_SOURCE;

    static {
        HikariConfig config = new HikariConfig();
        // MySQL 协议连接串，端口为 dolphin_server_port 配置值（本文示例为 3306）
        config.setJdbcUrl("jdbc:mysql://127.0.0.1:3306/mysql_test_db"
                + "?useSSL=false&serverTimezone=UTC&characterEncoding=utf-8&allowPublicKeyRetrieval=true");
        config.setDriverClassName("com.mysql.cj.jdbc.Driver");
        config.setUsername("mysql_test_db");
        config.setPassword("******");

        // 连接池参数
        config.setMaximumPoolSize(10);
        config.setMinimumIdle(10);
        config.setConnectionTimeout(30000);
        config.setIdleTimeout(600000);
        config.setMaxLifetime(540000);
        config.setKeepaliveTime(300000);

        DATA_SOURCE = new HikariDataSource(config);
    }

    public static void main(String[] args) {
        // 从连接池获取连接，try-with-resources 自动归还连接到池
        try (Connection connection = DATA_SOURCE.getConnection()) {
            selectUserTable(connection);

            insertUserTable(connection, "zhaoliu", 18);
            selectUserTable(connection);

            int id = getUserIdByName(connection, "zhaoliu");
            updateUserTable(connection, id, "zhaoliuliuliu", 28);
            selectUserTable(connection);

            deleteUserTable(connection, id);
            selectUserTable(connection);

            // 事务示例：批量插入并在异常时回滚（需先关闭 autoCommit）
            transactionDemo(connection);
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            // 应用退出前关闭连接池，释放所有连接
            DATA_SOURCE.close();
        }
    }

    public static void insertUserTable(Connection connection, String name, int age) throws SQLException {
        String insertSql = "INSERT INTO user (name, age) VALUES (?, ?);";
        try (PreparedStatement preparedStatement = connection.prepareStatement(insertSql)) {
            preparedStatement.setString(1, name);
            preparedStatement.setInt(2, age);
            int rows = preparedStatement.executeUpdate();
            System.out.println("插入了" + rows + "行数据");
        }
    }

    public static void updateUserTable(Connection connection, int id, String name, int age) throws SQLException {
        String updateSql = "UPDATE user SET name = ?, age = ? WHERE id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(updateSql)) {
            preparedStatement.setString(1, name);
            preparedStatement.setInt(2, age);
            preparedStatement.setInt(3, id);
            int rows = preparedStatement.executeUpdate();
            System.out.println("更新了" + rows + "行数据");
        }
    }

    public static void deleteUserTable(Connection connection, int id) throws SQLException {
        String deleteSql = "DELETE FROM user WHERE id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(deleteSql)) {
            preparedStatement.setInt(1, id);
            int rows = preparedStatement.executeUpdate();
            System.out.println("删除了" + rows + "行数据");
        }
    }

    public static void selectUserTable(Connection connection) throws SQLException {
        String selectSql = "SELECT * FROM user;";
        try (Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(selectSql)) {
            System.out.println("查询user表中所有数据:");
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                int age = resultSet.getInt("age");
                System.out.println("id: " + id + ", name: " + name + ", age: " + age);
            }
        }
    }

    public static int getUserIdByName(Connection connection, String name) throws SQLException {
        String selectSql = "SELECT id FROM user WHERE name LIKE ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(selectSql)) {
            preparedStatement.setString(1, "%" + name + "%");
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                if (resultSet.next()) {
                    return resultSet.getInt("id");
                }
            }
        }
        return -1;
    }

    /**
     * 事务示例：批量插入并在异常时回滚。
     * 注意：HikariCP 返回的连接默认 autoCommit=true，
     * 需要事务时需先 setAutoCommit(false)，结束后再恢复。
     */
    public static void transactionDemo(Connection connection) throws SQLException {
        connection.setAutoCommit(false);
        try {
            insertUserTable(connection, "tom", 22);
            insertUserTable(connection, "jerry", 23);
            connection.commit();
            System.out.println("事务提交成功");
        } catch (SQLException e) {
            connection.rollback();
            System.out.println("事务回滚");
            throw e;
        } finally {
            connection.setAutoCommit(true);
        }
    }
}
```

### 示例运行日志

```tex
查询user表中所有数据:
id: 1, name: 张三, age: 18
id: 2, name: 李四, age: 19
id: 3, name: 王五, age: 20
插入了1行数据
查询user表中所有数据:
id: 1, name: 张三, age: 18
id: 2, name: 李四, age: 19
id: 3, name: 王五, age: 20
id: 4, name: zhaoliu, age: 18
更新了1行数据
查询user表中所有数据:
id: 1, name: 张三, age: 18
id: 2, name: 李四, age: 19
id: 3, name: 王五, age: 20
id: 4, name: zhaoliuliuliu, age: 28
删除了1行数据
查询user表中所有数据:
id: 1, name: 张三, age: 18
id: 2, name: 李四, age: 19
id: 3, name: 王五, age: 20
事务提交成功
查询user表中所有数据:
id: 1, name: 张三, age: 18
id: 2, name: 李四, age: 19
id: 3, name: 王五, age: 20
id: 5, name: tom, age: 22
id: 6, name: jerry, age: 23
```

## 五类标准 SQL 操作示例

以下按 DDL / DML / DQL / DCL / TCL 五类分类，给出通过 HikariCP + MySQL Connector/J 经 dolphin MySQL 协议操作 openGauss B 兼容库的完整示例。每类包含核心关键字、典型语句与 Java 代码片段。

### 操作分类速查

| 缩写 | 全称 | 核心关键字 | 作用 |
|------|------|-----------|------|
| DDL | Data Definition Language | CREATE, ALTER, DROP, TRUNCATE | 定义或修改库表结构 |
| DML | Data Manipulation Language | INSERT, UPDATE, DELETE | 增删改数据 |
| DQL | Data Query Language | SELECT | 查询数据 |
| DCL | Data Control Language | GRANT, REVOKE | 权限与安全管理 |
| TCL | Transaction Control Language | COMMIT, ROLLBACK | 事务控制 |

### DDL：数据定义

核心操作包括建表（CREATE TABLE）、建索引（CREATE INDEX）、修改表结构（ALTER TABLE）、清空数据（TRUNCATE）、删除表（DROP TABLE）以及从查询结果创建表（CREATE TABLE AS SELECT）。

```java
// 建表（含 SERIAL 自增主键、VARCHAR、INT、DECIMAL、TIMESTAMP 字段）
String createSql = "CREATE TABLE sql_category_test ("
        + "id SERIAL PRIMARY KEY, "
        + "name VARCHAR(64) NOT NULL, "
        + "age INT DEFAULT 0, "
        + "score DECIMAL(5,2), "
        + "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
        + ")";
stmt.executeUpdate(createSql);

// 建索引
stmt.executeUpdate("CREATE INDEX idx_sql_category_test_name ON sql_category_test (name)");

// ALTER TABLE 增加列
stmt.executeUpdate("ALTER TABLE sql_category_test ADD COLUMN remark TEXT");

// ALTER TABLE 重命名列
stmt.executeUpdate("ALTER TABLE sql_category_test RENAME COLUMN remark TO description");

// TRUNCATE 清空表数据（保留结构）
stmt.executeUpdate("TRUNCATE TABLE sql_category_test");

// DROP TABLE 删除表
stmt.executeUpdate("DROP TABLE sql_category_test_2");

// CREATE TABLE AS SELECT 从查询结果创建新表
stmt.executeUpdate("CREATE TABLE sql_category_test_2 AS SELECT name, age FROM sql_category_test WHERE age > 20");
```

### DML：数据操纵

核心操作包括单行插入、批量写入（addBatch）、条件更新、条件删除以及获取自增主键返回值。

```java
// 单行 INSERT（使用 PreparedStatement 防注入）
try (PreparedStatement ps = conn.prepareStatement(
        "INSERT INTO sql_category_test (name, age, score) VALUES (?, ?, ?)")) {
    ps.setString(1, "Alice");
    ps.setInt(2, 28);
    ps.setDouble(3, 95.50);
    int rows = ps.executeUpdate(); // 返回影响行数
}

// 批量 INSERT（addBatch + executeBatch）
try (PreparedStatement ps = conn.prepareStatement(
        "INSERT INTO sql_category_test (name, age, score) VALUES (?, ?, ?)")) {
    for (int i = 0; i < 3; i++) {
        ps.setString(1, "BatchUser" + i);
        ps.setInt(2, 20 + i);
        ps.setDouble(3, 80.0 + i * 5);
        ps.addBatch();
    }
    int[] results = ps.executeBatch(); // 每条的影响行数数组
}

// UPDATE 条件更新
try (PreparedStatement ps = conn.prepareStatement(
        "UPDATE sql_category_test SET age = ?, score = ? WHERE name = ?")) {
    ps.setInt(1, 29);
    ps.setDouble(2, 96.00);
    ps.setString(3, "Alice");
    int rows = ps.executeUpdate();
}

// DELETE 条件删除
try (PreparedStatement ps = conn.prepareStatement(
        "DELETE FROM sql_category_test WHERE name LIKE 'BatchUser%'")) {
    int rows = ps.executeUpdate();
}

// INSERT 获取自增主键（RETURN_GENERATED_KEYS）
try (PreparedStatement ps = conn.prepareStatement(
        "INSERT INTO sql_category_test (name, age, score) VALUES ('Bob', 35, 87.25)",
        PreparedStatement.RETURN_GENERATED_KEYS)) {
    ps.executeUpdate();
    ResultSet keys = ps.getGeneratedKeys();
    if (keys.next()) long genId = keys.getLong(1); // 获取到 id
}
```

### DQL：数据查询

核心操作包括全量查询、条件过滤（WHERE）、排序分页（ORDER BY + LIMIT）、聚合函数（COUNT/SUM/AVG/MIN/MAX）、分组聚合（GROUP BY + HAVING）、去重（DISTINCT）和子查询。

```java
// 基础 SELECT *
ResultSet rs = stmt.executeQuery("SELECT id, name, age, score FROM sql_category_test ORDER BY id");
while (rs.next()) { /* 遍历结果集 */ }

// WHERE 条件过滤
rs = stmt.executeQuery("SELECT name, age FROM sql_category_test WHERE age >= 28 ORDER BY age");

// ORDER BY + LIMIT 排序与分页
rs = stmt.executeQuery("SELECT name, score FROM sql_category_test ORDER BY score DESC LIMIT 3");

// 聚合函数 COUNT/SUM/AVG/MIN/MAX
rs = stmt.executeQuery("SELECT COUNT(*) AS cnt, SUM(age) AS sum_age, AVG(score) AS avg_score, "
        + "MIN(age) AS min_age, MAX(age) AS max_age FROM sql_category_test");

// GROUP BY + HAVING 分组聚合与过滤
rs = stmt.executeQuery("SELECT CASE WHEN age < 25 THEN 'young' ELSE 'senior' END AS group_name, "
        + "COUNT(*) AS cnt, AVG(score) AS avg_s "
        + "FROM sql_category_test GROUP BY CASE WHEN age < 25 THEN 'young' ELSE 'senior' END "
        + "HAVING COUNT(*) >= 1");

// DISTINCT 去重
rs = stmt.executeQuery("SELECT DISTINCT name FROM sql_category_test ORDER BY name");

// 子查询
rs = stmt.executeQuery("SELECT name, age FROM sql_category_test "
        + "WHERE age > (SELECT AVG(age) FROM sql_category_test) ORDER BY age");
```

### DCL：数据控制

核心操作包括授予权限（GRANT）、收回权限（REVOKE）和查询当前用户权限信息。DCL 操作需要当前用户具备相应权限（如超级用户或对象属主），部分场景下可能因权限不足返回 WARN，属正常行为。

```java
// 授予表级 SELECT 权限
stmt.executeUpdate("GRANT SELECT ON TABLE sql_category_test TO mysqluser");

// 授予多权限
stmt.executeUpdate("GRANT INSERT, UPDATE, DELETE ON TABLE sql_category_test TO mysqluser");

// 收回权限
stmt.executeUpdate("REVOKE INSERT, UPDATE, DELETE ON TABLE sql_category_test FROM mysqluser");

// 查询当前用户权限信息
ResultSet rs = stmt.executeQuery(
        "SELECT privilege_type, is_grantable FROM information_schema.table_privileges "
        + "WHERE table_name = 'sql_category_test' AND grantee = CURRENT_USER");
while (rs.next()) { String type = rs.getString("privilege_type"); }
```

> [!NOTE]
> DCL 的 GRANT/REVOKE 在 dolphin MySQL 协议下映射为 openGauss 内部权限管理。普通用户对自身创建的表通常已有默认权限，重复授权可能返回 INFO 级提示；若当前用户非超级用户且无 GRANT OPTION，则 REVOKE 可能被拒绝并返回 WARN。这些行为不影响业务正常使用。

### TCL：事务控制

核心操作包括显式提交（COMMIT）、回滚（ROLLBACK）、保存点部分回滚（SAVEPOINT + ROLLBACK TO SAVEPOINT）以及事务隔离级别确认。

```java
// 显式 COMMIT
conn.setAutoCommit(false);
try (Statement s = conn.createStatement()) {
    s.executeUpdate("INSERT INTO sql_category_test (name, age, score) VALUES ('commit_test', 40, 77.00)");
}
conn.commit(); // 提交后数据可见

// ROLLBACK 回滚
conn.setAutoCommit(false);
try (Statement s = conn.createStatement()) {
    s.executeUpdate("INSERT INTO sql_category_test (name, age, score) VALUES ('rollback_test', 41, 66.00)");
}
conn.rollback(); // 回滚后数据不可见

// SAVEPOINT + ROLLBACK TO SAVEPOINT 部分回滚
conn.setAutoCommit(false);
try (Statement s = conn.createStatement()) {
    s.executeUpdate("INSERT INTO sql_category_test (name, age, score) VALUES ('sp_keep', 42, 55.00)");
    s.executeUpdate("SAVEPOINT sp1");
    s.executeUpdate("INSERT INTO sql_category_test (name, age, score) VALUES ('sp_discard', 43, 44.00)");
    s.executeUpdate("ROLLBACK TO SAVEPOINT sp1"); // sp_discard 被撤销，sp_keep 保留
}
conn.commit();

// 查询当前事务隔离级别
ResultSet rs = conn.createStatement().executeQuery("SELECT @@session.transaction_isolation AS iso");
if (rs.next()) String isolation = rs.getString("iso"); // 如 READ-COMMITTED
conn.setAutoCommit(true);
```

### 并发连接测试

启动多个线程同时从 HikariCP 连接池获取连接并执行完整的增删改查事务，验证并发场景下连接不泄漏、SQL 正确执行。

```java
int threadCount = 10;
ExecutorService executor = Executors.newFixedThreadPool(threadCount);
CountDownLatch startGate = new CountDownLatch(1);
AtomicInteger passed = new AtomicInteger(0);

for (int i = 0; i < threadCount; i++) {
    final int idx = i;
    executor.submit(() -> {
        try (Connection conn = dataSource.getConnection()) {
            conn.setAutoCommit(false);
            // 每个 worker: INSERT → SELECT 验证 → UPDATE → DELETE → commit
            // ...（完整代码见 SqlCategoryVerificationRunner.java）
            passed.incrementAndGet();
        }
    });
}
startGate.countDown(); // 所有线程同时开始
executor.awaitTermination(30, TimeUnit.SECONDS);
// passed.get() == threadCount 即全部通过
```

## JDK 与 HikariCP 版本兼容

> 结论依据 HikariCP 官方 README（HikariCP-5.1.0，Artifacts 章节）与本地实测。

| 目标 Java 版本 | HikariCP artifact | 状态 | 本地实测 |
| --- | --- | --- | --- |
| Java 11+ | `com.zaxxer:HikariCP:5.x`（5.0.1 / 5.1.0） | 主线 | ✅ JDK 17 加载 5.1.0 成功 |
| Java 8 | `com.zaxxer:HikariCP:4.0.3` | maintenance | ✅ JDK 1.8.0_472 加载 4.0.3 成功 |
| Java 8 + 5.x | — | 不支持 | ❌ `UnsupportedClassVersionError: class file version 55.0, should be 52.0` |

官方依据：5.x 主线面向 Java 11+；Java 8 仅能使用维护模式的 4.0.3。详见 <https://github.com/brettwooldridge/HikariCP/blob/HikariCP-5.1.0/README.md#artifacts>。

实测明细（Windows：Temurin 1.8.0_472 / Microsoft 17.0.19）：

- 字节码版本（`javap -v`）：`HikariCP 5.1.0` → major version 55（Java 11）；`HikariCP 4.0.3` → major version 52（Java 8）。
- 运行时加载（最小程序 `new HikariConfig()`）：
  - JDK 8 + HikariCP 5.1.0 → ❌ `UnsupportedClassVersionError`（类文件版本 55.0，本运行时仅支持到 52.0）；
  - JDK 8 + HikariCP 4.0.3 → ✅ `OK: HikariCP loaded on Java 1.8.0_472`；
  - JDK 17 + HikariCP 5.1.0 → ✅ `OK: HikariCP loaded on Java 17.0.19`。

结论：

- HikariCP 5.x 编译目标为 Java 11，仅能在 JDK 11+ 编译/运行；JDK 8 连编译引用 5.x 的代码都会报 `class file version 55.0, should be 52.0`。
- JDK 8 环境应使用 HikariCP 4.0.3（维护版本，Java 8 字节码），其 API（`HikariConfig` / `HikariDataSource` / `setMaximumPoolSize` 等）与 5.x 基本一致，示例工程可平滑切换。
- 本验证工程（`examples` 仓 `OpengaussCompatibility2hikari`）使用 JDK 11 + HikariCP 5.1.0 + MySQL Connector/J 8.0.20，已于 openGauss 7.0.0-RC3 + dolphin MySQL 协议实跑通过（详见其 `README.md` 与 `spring端-通过清单.txt`）。JDK 8 用户需自行将 HikariCP 替换为 4.0.3 并调整编译目标（不在本工程范围内；4.0.3 加载验证见上方实测）。

## 连接链路与协议转换

使用 HikariCP 连接池配合 MySQL JDBC 连接 openGauss B 兼容库时，一次业务 SQL 的链路可以分为应用侧、驱动侧与服务端侧三段。

### 连接链路流程（分层示意）

Spring Boot 应用
    ↓ ① 配置 HikariCP 数据源
HikariCP 连接池 (v5.0.1)
    ↓ ② 调用 Driver 创建物理连接
MySQL Connector/J (v8.0.20)
    ↓ ③ 发起 MySQL 协议握手（端口 3306）
dolphin 插件 (openGauss 7.0.0-RC3)
    ↓ ④ 协议转换 + SQL 执行
openGauss 内核 (B 兼容库 mysql_db)

逐层触发节点：

| 层级 | 触发组件 | 关键动作 |
| --- | --- | --- |
| 应用层 | Spring Boot DataSourceAutoConfiguration | 读取配置，创建 HikariDataSource Bean |
| 连接池层 | HikariPool.getConnection() | 池中无空闲连接时，调用驱动创建新连接 |
| 驱动层 | com.mysql.cj.jdbc.Driver.connect() | 解析 JDBC URL，发起 TCP 连接和 MySQL 协议握手 |
| 协议层 | dolphin 插件协议处理器 | 接收 MySQL 握手包，验证 mysql_native_password，返回 OK 包 |
| 数据库层 | openGauss 内核 | 执行 SQL 并返回结果 |

### 应用侧：连接池借还

Spring Boot 引入 spring-boot-starter-jdbc 后，DataSourceAutoConfiguration 在类路径存在 HikariCP 时自动装配 HikariDataSource。业务通过 DataSource.getConnection() 获取连接，实际进入 HikariPool.getConnection()。HikariPool 内部用 ConcurrentBag 管理物理连接，存在空闲连接时复用，未达到 maximumPoolSize 时新建，达到上限后按 connectionTimeout 阻塞等待。新建物理连接时，HikariCP 调用 JDBC 驱动的 connect 方法。

### 驱动侧：MySQL 协议建连

MySQL Connector/J 的 `com.mysql.cj.jdbc.Driver` 在建立连接时，由 `NonRegisteringDriver.connect()` 创建 `ConnectionImpl`，其构造函数触发 `createNewIO()` 发起到 `host:3306` 的 TCP 连接，并按 MySQL 客户端服务端协议完成握手与认证。认证使用 B 库用户的 MySQL 原生密码，该密码通过 `set_native_password` 设置，因此连接串需要 `allowPublicKeyRetrieval=true` 以支持公钥检索。连接建立后，HikariCP 会执行连接初始化探测，其中一项是查询事务隔离级别，例如执行 `SELECT @@session.transaction_isolation`。

### 服务端侧：dolphin 协议转换

openGauss 在 B 兼容库开启 dolphin 后，由 dolphin 插件在 `dolphin_server_port` 指定的端口监听 MySQL 协议。本文示例设为 3306，该端口需与 openGauss 自身 `port` 不同。该监听的前置条件是 GUC 参数 `enable_dolphin_proto` 设为 on，且修改后需重启数据库生效。dolphin 通过抽象协议层接口，由协议处理模块（如 `mysql_proto` 相关实现）解析收到的 MySQL 协议报文，转换为 openGauss 可识别的逻辑执行，再把结果按 MySQL 协议格式封装返回。业务 SQL（SELECT 1、CRUD、事务提交）都经由同一条链路。

### 兼容性边界

连接池只管理物理连接生命周期，真正的兼容边界在 MySQL 协议与 dolphin 的翻译层。只要 Connector/J 能与 dolphin 正常完成协议握手与系统变量探测，连接池层不会引入额外兼容问题。连接初始化阶段的隔离级别探测曾因早期 dolphin 返回 default 导致 HikariCP 建连失败，该问题在 openGauss 7.0.0-RC3（dolphin 5.2）已修复。

## 验证覆盖

配套验证工程（`examples` 仓 `OpengaussCompatibility2hikari`，包名 `com.linyu.ospp`，主类 `HikariVerificationRunner`）在 openGauss 7.0.0-RC3 + dolphin MySQL 协议上实跑，共覆盖 13 项验证。其中关键的两项连接池专项验证如下：

- 连接池上限等待（不突破上限）：先借满 `maximumPoolSize`（10）条连接，再申请第 11 条；验证第 11 条不会突破上限，而是阻塞等待空闲连接，释放 1 条后第 11 条恢复并成功执行 SQL。
- 真实并发数据库操作（非仅建连）：启动 10 个 worker，每个 worker 持有自己的连接并真实执行 `insert / select / update / select / delete / commit`，证明并发验证端到端完成数据库读写，而非只拿到连接。

完整用例与连接池参数配置见 `examples` 仓该工程的 `README.md`。

## 与 Spring Boot 集成

Spring Boot 2.x 及以上默认使用 HikariCP 作为连接池，只需在 `application.yml` 中配置数据源即可，无需显式引入 HikariCP 依赖：

```yaml
spring:
  datasource:
    url: jdbc:mysql://127.0.0.1:3306/mysql_test_db?useSSL=false&serverTimezone=UTC&characterEncoding=utf-8&allowPublicKeyRetrieval=true
    username: mysql_test_db
    password: "******"
    driver-class-name: com.mysql.cj.jdbc.Driver
    hikari:
      maximum-pool-size: 10
      minimum-idle: 10
      connection-timeout: 30000
      idle-timeout: 600000
      max-lifetime: 540000
      keep-alive-time: 300000
```

## 注意事项

1. 对于连接用户的权限管理，可参考 [GRANT](https://docs.opengauss.org/zh/docs/7.0.0-lite/sql_reference/grant.html) 使用教程。初次调试时建议赋予连接用户 SYSADMIN 权限，避免因权限问题频繁报错。
2. 连接串中 `maxLifetime` 必须小于 openGauss 服务端的连接/会话超时（openGauss 默认 `session_timeout` 为 600000ms/10 分钟），否则可能取到被服务端关闭的失效连接。
3. 使用 MySQL native 密码且服务端启用 `caching_sha2_password` 时，建议在连接串追加 `allowPublicKeyRetrieval=true`。
4. 对于 JDBC 连接串中连接参数的支持情况，请参考 [JDBC 常用连接参数的兼容表现](https://docs.opengauss.org/zh/docs/7.0.0-lite/extension_reference/extension_reference/plugin/dolphin_mysql_protocol_compatibility.html#jdbc%E5%B8%B8%E7%94%A8%E8%BF%9E%E6%8E%A5%E5%8F%82%E6%95%B0%E7%9A%84%E5%85%BC%E5%AE%B9%E8%A1%A8%E7%8E%B0)。
5. 应用关闭时应调用 `HikariDataSource.close()` 释放连接池资源，避免连接泄漏。
6. 历史兼容性提示：事务隔离级别探测。早期 dolphin 版本 6.0.0-RC1 及更早，在 MySQL JDBC 驱动经 HikariCP 连接时，因对 MySQL 系统变量 `@@session.transaction_isolation` 返回无法映射的隔离级别字面量 `'default'`，会导致 HikariCP 抛出 `Default transaction isolation level detection failed` 而建连失败。该问题属于 dolphin 插件（`opengauss/Plugin` 仓）对 MySQL 系统变量兼容实现的演进，已在 openGauss 7.0.0-RC3 中修复，对应 dolphin 5.2 版本。若使用更早版本，可在连接串追加 `sessionVariables=transaction_isolation='READ-COMMITTED'` 规避。详细根因与 dolphin 修复定位参见 `examples` 仓 `OpengaussCompatibility2hikari/README.md`。
