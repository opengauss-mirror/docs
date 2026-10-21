---
description: This document describes MySQL JDBC Connection Sample in openGauss, covering topics such as Prerequisites, JDBC Operation Example.
keywords: [openGauss, MySQL JDBC Connection Sample, MySQL compatibility, Prerequisites, JDBC Operation Example]
---

# MySQL JDBC Connection Sample

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-14T06:38:53.211Z pushedAt=2026-07-17T06:42:53.910Z -->

After openGauss enables MySQL protocol compatibility, you can connect to openGauss in B-compatible mode using the MySQL JDBC driver.

## Prerequisites

### Preparing the Database Schema

1. Connect to openGauss using the openGauss command-line tool `gsql`.

   ```bash
   gsql -d postgres -p 5432 -r
   ```

2. Switch to the B-compatible database.

   ```sql
   \c proto_test_db
   ```

3. Create the database specified in the MySQL JDBC URL. In B-compatible mode, an openGauss schema is equivalent to a MySQL database.

   ```sql
   CREATE SCHEMA mysql_test_db;
   ```

4. Switch to that schema and create the table.

   ```sql
   SET current_schema to mysql_test_db;
   
   CREATE TABLE `user` (
       `id`      INT AUTO_INCREMENT PRIMARY KEY,
       `name`    VARCHAR(50)  NOT NULL COMMENT 'Username',
       `age`     INT COMMENT 'Age'
   ) DEFAULT CHARSET=utf8mb4;
   
   INSERT INTO `user` (`name`, `age`) VALUES
       ('John',  18),
       ('Sam',  19),
       ('Lily',  20);
   ```

5. Exit `gsql`.

   ```sql
   \q
   ```

### Preparing the Database User

1. Reconnect to openGauss via `gsql`.

   ```bash
   gsql -d postgres -p 5432 -r
   ```

2. Create a user with the same name as the schema.

   ```sql
   CREATE USER mysql_test_db WITH PASSWORD '******';
   ```

   > [!TIP] Notice
   > Do not create this user inside the B-compatible database, as this will fail.

3. Switch to the B-compatible database.

   ```sql
   \c proto_test_db
   ```

4. Set a MySQL native password for the new user.

   ```sql
   SELECT set_native_password('mysql_test_db', '******', '');
   ```

5. Change the schema owner to this user.

   ```sql
   alter schema mysql_test_db owner to mysql_test_db;
   ```

6. Grant all privileges on existing tables and sequences in the schema.

   ```sql
   GRANT ALL ON ALL TABLES IN SCHEMA mysql_test_db to mysql_test_db;
   GRANT ALL ON ALL SEQUENCES IN SCHEMA mysql_test_db to mysql_test_db;
   ```

   > [!TIP] Notice
   > For new tables, you don't need to grant privileges again. Because the schema owner is already set, new tables will belong to that user automatically.

7. Exit `gsql`.

   ```sql
   \q
   ```

### Configuring Client Access Authentication

openGauss requires client authentication before it accepts remote connections. Without this, you'll get connection errors. To set it up:

```bash
gs_guc set -N all -I all -h "host all mysql_test_db 0.0.0.0/0 sha256"
# mysql_test_db is the database username. Do not use 'omm' (the initial user) for remote connections.

gs_om -t restart
```

For more details, refer to [Configuring Client Access Authentication](https://docs.opengauss.org/en/docs/latest/database_administration_guide/configuring_client_access_authentication.html).

## JDBC Operation Example

### Creating a Maven project

Use your IDE to create a Maven quickstart project. Set Java to 1.8 or higher. Name it `jdbc-connect-opengauss-b`. If you don't have Maven or Java, install them first.

### Adding the JDBC Driver

Add the MySQL JDBC driver to `pom.xml`:


```xml
<!-- MySQL driver -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.28</version>
</dependency>
```

### Sample Operation Code

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
     * Get database connection
     *
     * @param ip Database IP address
     * @param port Database port number
     * @param database Database name
     * @param username MySQL username
     * @param password MySQL password
     * @return JDBC connection object
     * @throws ClassNotFoundException Class not found
     * @throws SQLException SQL exception
     */
    public static Connection getConnection(String ip, int port, String database, String username, String password)
            throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.cj.jdbc.Driver");
        String url = String.format("jdbc:mysql://%s:%d/%s", ip, port, database);
        return DriverManager.getConnection(url, username, password);
    }

    /**
     * Insert user information
     *
     * @param connection JDBC connection
     * @param name Username
     * @param age User age
     * @throws SQLException SQL exception
     */
    public static void insertUserTable(Connection connection, String name, int age) throws SQLException {
        String insertSql = "INSERT INTO user (name, age) VALUES (?, ?);";
        try (PreparedStatement preparedStatement = connection.prepareStatement(insertSql)) {
            preparedStatement.setString(1, name);
            preparedStatement.setInt(2, age);

            int rows = preparedStatement.executeUpdate();
            System.out.println("Inserted " + rows + " row(s) of data");
        }
    }

    /**
     * Update user information by ID
     *
     * @param connection JDBC connection
     * @param id User ID
     * @param name Username
     * @param age User age
     * @throws SQLException SQL exception
     */
    public static void updateUserTable(Connection connection, int id, String name, int age) throws SQLException {
        String updateSql = "UPDATE user SET name = ?, age = ? WHERE id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(updateSql)) {
            preparedStatement.setString(1, name);
            preparedStatement.setInt(2, age);
            preparedStatement.setInt(3, id);

            int rows = preparedStatement.executeUpdate();
            System.out.println("Updated " + rows + " row(s) of data");
        }
    }

    /**
     * Delete user information by ID
     *
     * @param connection JDBC connection
     * @param id User ID
     * @throws SQLException SQL exception
     */
    public static void deleteUserTable(Connection connection, int id) throws SQLException {
        String deleteSql = "DELETE FROM user WHERE id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(deleteSql)) {
            preparedStatement.setInt(1, id);

            int rows = preparedStatement.executeUpdate();
            System.out.println("Deleted" + rows + "row(s) of data");
        }
    }

    /**
     * Query all data in the user table
     * 
     * @param connection JDBC connection
     * @throws SQLException SQL exception
     */
    public static void selectUserTable(Connection connection) throws SQLException {
        String selectSql = "SELECT * FROM user;";
        try (Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(selectSql)) {
            System.out.println("Query all data from the user table:");
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                int age = resultSet.getInt("age");
                System.out.println("id: " + id + ", name: " + name + ", age: " + age);
            }
        }
    }

    /**
     * Query user ID by name
     *
     * @param connection JDBC connection
     * @param name Username
     * @return User ID, or -1 if not found
     * @throws SQLException SQL exception
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

### Example Run Log

```tex
Query all data in the user table:
id: 1, name: John, age: 18
id: 2, name: Sam, age: 19
id: 3, name: Lily, age: 20
Insert 1 row
Query all data in the user table:
id: 1, name: John, age: 18
id: 2, name: Sam, age: 19
id: 3, name: Lily, age: 20
id: 4, name: zhaoliu, age: 18
Update 1 row
Query all data in the user table:
id: 1, name: John, age: 18
id: 2, name: Sam, age: 19
id: 3, name: Lily, age: 20
id: 4, name: zhaoliuliuliu, age: 28
Delete 1 row
Query all data in the user table:
id: 1, name: John, age: 18
id: 2, name: Sam, age: 19
id: 3, name: Lily, age: 20
```

## Notes

1. For user privilege management, refer to the [GRANT](https://docs.opengauss.org/en/docs/latest/sql_reference/grant.html) guide. For initial testing, consider granting the connecting user the `SYSADMIN` privilege to avoid permission errors.

2. For supported JDBC connection parameters, refer to [Common JDBC Connection Parameter Compatibility](https://docs.opengauss.org/en/docs/latest-lite/extension_reference/dolphin_mysql_protocol_compatibility.html#jdbc-common-connection-parameters-compatibility).
