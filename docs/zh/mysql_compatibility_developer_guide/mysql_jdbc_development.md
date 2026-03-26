# MySQL JDBC 连接示例

openGauss 完成 MySQL 协议兼容配置后，即可支持通过 MySQL JDBC 连接 openGauss B 兼容模式数据库。

## 准备工作

### 准备业务表结构

1. 通过 openGauss 命令行工具 gsql 连接 openGauss 数据库

   ```bash
   gsql -d postgres -p 5432 -r
   ```

2. 切换至 MySQL 协议兼容配置的 B 库下

   ```sql
   \c proto_test_db
   ```

3. 创建 MySQL JDBC url 连接串中指定的 database。在B库下，openGauss 的 schema 等价于 MySQL 的 database

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
# 其中 mysql_test_db 为数据库用户名，此处远程连接禁止使用“omm”用户（即数据库初始化用户）

gs_om -t restart
```

更多详细内容请参考，[配置客户端接入认证](https://docs.opengauss.org/zh/docs/latest/database_administration_guide/configuring_client_access_authentication.html)。

## JDBC 操作示例

### 创建 Maven 项目

使用 IDE 工具创建 Maven quickstart 项目，Java 版本指定为 1.8 及以上，项目可以命名为 jdbc-connect-opengauss-b 。如果没有 Maven/Java，请先完成安装。

### 添加数据库驱动

在 Maven 项目 pom.xml 文件中，添加 MySQL JDBC 依赖：

```xml
<!-- MySQL 驱动 -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.28</version>
</dependency>
```

### 操作示例代码

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class MysqlJdbcConnectDemo {
    public static void main(String[] args) {
        String ip = "127.0.0.1";
        int port = 3308;
        String database = "mysql_test_db";
        String user = "mysql_test_db";
        String password = "******";

        try (Connection connection = getConnection(ip, port, database, user, password)) {
            selectUserTable(connection);

            insertUserTable(connection, "zhaoliu", 18);
            selectUserTable(connection);

            int id = getUserIdByName(connection, "zhaoliu");
            updateUserTable(connection, id, "zhaoliuliuliu", 28);
            selectUserTable(connection);

            deleteUserTable(connection, id);
            selectUserTable(connection);
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }

    /**
     * 获取数据库连接
     *
     * @param ip 数据库IP地址
     * @param port 数据库端口号
     * @param database 数据库名称
     * @param username MySQL连接用户名
     * @param password MySQL连接用户密码
     * @return JDBC connection对象
     * @throws ClassNotFoundException 类未找到异常
     * @throws SQLException SQL异常
     */
    public static Connection getConnection(String ip, int port, String database, String username, String password)
            throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.cj.jdbc.Driver");
        String url = String.format("jdbc:mysql://%s:%d/%s", ip, port, database);
        return DriverManager.getConnection(url, username, password);
    }

    /**
     * 插入用户信息
     *
     * @param connection JDBC connection
     * @param name 用户姓名
     * @param age 用户年龄
     * @throws SQLException SQL异常
     */
    public static void insertUserTable(Connection connection, String name, int age) throws SQLException {
        String insertSql = "INSERT INTO user (name, age) VALUES (?, ?);";
        try (PreparedStatement preparedStatement = connection.prepareStatement(insertSql)) {
            preparedStatement.setString(1, name);
            preparedStatement.setInt(2, age);

            int rows = preparedStatement.executeUpdate();
            System.out.println("插入了" + rows + "行数据");
        }
    }

    /**
     * 更新user表中指定id的用户信息
     *
     * @param connection JDBC connection
     * @param id 用户id
     * @param name 用户姓名
     * @param age 用户年龄
     * @throws SQLException SQL异常
     */
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

    /**
     * 删除user表中指定id的用户信息
     *
     * @param connection JDBC connection
     * @param id 用户id
     * @throws SQLException SQL异常
     */
    public static void deleteUserTable(Connection connection, int id) throws SQLException {
        String deleteSql = "DELETE FROM user WHERE id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(deleteSql)) {
            preparedStatement.setInt(1, id);

            int rows = preparedStatement.executeUpdate();
            System.out.println("删除了" + rows + "行数据");
        }
    }

    /**
     * 查询user表中所有数据
     * 
     * @param connection JDBC connection
     * @throws SQLException SQL异常
     */
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

    /**
     * 根据姓名查询用户id
     *
     * @param connection JDBC connection
     * @param name 用户姓名
     * @return 用户id，如果未找到则返回-1
     * @throws SQLException SQL异常
     */
    public static int getUserIdByName(Connection connection, String name) throws SQLException {
        String selectSql = "SELECT id FROM user WHERE name LIKE ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(selectSql)) {
            preparedStatement.setString(1, "%" + name + "%");

            ResultSet resultSet = preparedStatement.executeQuery();
            if (resultSet.next()) {
                return resultSet.getInt("id");
            }
        }
        return -1;
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
```

## 注意事项

1. 对于连接用户的权限管理，可参考 [GRANT](https://docs.opengauss.org/zh/docs/latest/sql_reference/grant.html) 使用教程。初次调试时建议赋予连接用户 SYSADMIN 权限，避免因权限问题频繁报错。
2. 对于JDBC连接串中连接参数的支持情况，请参考 [JDBC常用连接参数的兼容表现](https://docs.opengauss.org/zh/docs/latest-lite/extension_reference/dolphin_mysql_protocol_compatibility.html#jdbc%E5%B8%B8%E7%94%A8%E8%BF%9E%E6%8E%A5%E5%8F%82%E6%95%B0%E7%9A%84%E5%85%BC%E5%AE%B9%E8%A1%A8%E7%8E%B0)。
