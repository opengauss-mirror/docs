# HikariCP Connection Pool Example

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-10-13T01:59:53.441Z pushedAt=2026-10-16T09:02:29.929Z -->

After openGauss completes the MySQL protocol compatibility configuration, you can use the HikariCP connection pool together with the MySQL JDBC driver to connect to an openGauss B-compatible database.

HikariCP is a high-performance JDBC connection pool and is also the default connection pool used by mainstream frameworks such as Spring Boot. Using HikariCP on top of an openGauss B-compatible database (with the dolphin plugin enabling the MySQL protocol) allows you to reuse the mature connection pool management capabilities of the MySQL ecosystem (connection reuse, rate limiting, keep-alive, monitoring, and so on), thereby improving the stability and throughput of applications accessing openGauss.

This document describes how to use HikariCP together with the MySQL JDBC driver to connect to an openGauss B-compatible database and perform common operations such as table creation, CRUD operations, and transactions.

## Preparation

> ### Prerequisite: MySQL Protocol Compatibility Configuration Completed
> The example in this document uses HikariCP to connect to openGauss, which requires the server to have MySQL protocol compatibility (the dolphin plugin) enabled. First, refer to [Configuring MySQL Protocol Compatibility](mysql_protocol_compatibility_config.md) to complete the following preparations before continuing with the subsequent steps in this document:
> 1. Set the GUC parameter `enable_dolphin_proto=on` and restart the server for it to take effect.
> 2. Create a B-compatible database (the database name in the example in this document is `proto_test_db`, see below `\c proto_test_db`).
> 3. Set the MySQL protocol listening port `dolphin_server_port`. The example in this document uses `3306` uniformly. The example in step 6 of Configuring MySQL Protocol Compatibility uses `3308`; change it to `3306` as in the example in this document so that it matches the port in the connection string of the example in this document, and the example can then run as-is.
>
> After completing the prerequisites above, continue with "Preparing the Business Table Structure / Preparing the User for Connection / Configuring Client Endpoint Access Authentication" in this document.

### Preparing the Business Table Structure

1. Connect to the openGauss database via the openGauss command-line tool gsql.

   ```bash
   gsql -d postgres -p 5432 -r
   ```

2. Switch to the B database under the MySQL protocol compatibility configuration.

   ```sql
   \c proto_test_db
   ```

3. Create the database specified in the MySQL JDBC URL connection string. Under the B database, an openGauss schema is equivalent to a MySQL database.

   ```sql
   CREATE SCHEMA mysql_test_db;
   ```

4. Switch the schema and create the business table structure.

   ```sql
   SET current_schema to mysql_test_db;
   
   CREATE TABLE `user` (
       `id`      INT AUTO_INCREMENT PRIMARY KEY,
       `name`    VARCHAR(50)  NOT NULL COMMENT 'username',
       `age`     INT COMMENT 'age'
   ) DEFAULT CHARSET=utf8mb4;
   
   INSERT INTO `user` (`name`, `age`) VALUES
       ('Zhang San',  18),
       ('Li Si',  19),
       ('Wang Wu',  20);
   ```

5. Exit the gsql connection.

   ```sql
   \q
   ```

### Preparing the User for Connection

1. Reconnect to the openGauss database via the gsql command.

   ```bash
   gsql -d postgres -p 5432 -r
   ```

2. Create a user with the same name as the schema where the business tables reside.

   ```sql
   CREATE USER mysql_test_db WITH PASSWORD '******';
   ```

   > [!TIP]Tip
   > Do not create a user with the same name under the B-compatible database where the schema resides; the creation will fail.

3. Switch to the B-compatible database configured with MySQL protocol compatibility.

   ```sql
   \c proto_test_db
   ```

4. Set a MySQL native password for the new user.

   ```sql
   SELECT set_native_password('mysql_test_db', '******', '');
   ```

5. Change the owner of the schema where the business tables reside.

   ```sql
   alter schema mysql_test_db owner to mysql_test_db;
   ```

6. Grant the user operation privileges on all historical tables.

   ```sql
   GRANT ALL ON ALL TABLES IN SCHEMA mysql_test_db to mysql_test_db;
   GRANT ALL ON ALL SEQUENCES IN SCHEMA mysql_test_db to mysql_test_db;
   ```

   > [!TIP]Tip
   > If new tables are created, there is no need to grant privileges on them again, because the schema owner has been changed and the owner of newly created tables is the same as the schema owner.

7. Exit the gsql connection.

   ```sql
   \q
   ```

### Configuring Client Endpoint Access Authentication

openGauss requires client endpoint access authentication to be configured before a specified user can remotely connect to the database; otherwise, the connection fails. The configuration method is as follows:

```bash
gs_guc set -N all -I all -h "host all mysql_test_db 0.0.0.0/0 sha256"
# mysql_test_db is the database username. Remote connections must not use the `omm` user, which is the database initialization user.

gs_om -t restart
```

For more details, see [Configuring Client Endpoint Access Authentication](https://docs.opengauss.org/en/docs/latest/database_administration_guide/configuring_client_access_authentication.html).

## HikariCP Project Setup

### Creating a Maven Project

Use an IDE tool to create a Maven quickstart project, with the Java version set to 11 or later (HikariCP 5.x has a compilation target of Java 11 and requires a JDK 11+ runtime environment). The project can be named `hikaricp-connect-opengauss-b`. If the project must run in a JDK 8 environment, change the HikariCP version to 4.0.3 (for details, see "JDK and HikariCP Version Compatibility"). If Maven/Java is not installed, complete the installation first.

### Adding Dependencies

In the `pom.xml` file of the Maven project, add the dependencies related to the HikariCP connection pool and the MySQL JDBC driver:

```xml
<!-- HikariCP connection pool -->
<dependency>
    <groupId>com.zaxxer</groupId>
    <artifactId>HikariCP</artifactId>
    <version>5.1.0</version>
</dependency>

<!-- MySQL JDBC driver -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.20</version>
</dependency>

<!-- Logging (optional, for observing connection pool behavior) -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-simple</artifactId>
    <version>1.7.36</version>
</dependency>
```

> [!TIP]Tip
> - HikariCP 5.x (5.1.0 in the example in this document, Java 11 bytecode) has a compilation target of JDK 11 and requires JDK 11 or later as the runtime environment. If JDK 17 is used, HikariCP 5.x is also recommended.
> - If the project must run in a JDK 8 environment, use HikariCP 4.0.3 instead (a maintenance version with Java 8 bytecode and the same API usage). It has been verified to load properly on Temurin 1.8.0_472.
> - The MySQL JDBC driver must use `com.mysql.cj.jdbc.Driver` (Connector/J 8.x).
> - For the version and JDK compatibility matrix and the detailed verification results, see "JDK and HikariCP Version Compatibility".

### Project Directory Reference

```tex
hikaricp-connect-opengauss-b
├── pom.xml
└── src
    └── main
        ├── java
        │   └── org
        │       └── opengauss
        │           ├── HikariCpConnectDemo.java          # main startup class/example class
        │           └── entity
        │               └── User.java                     # entity class
        └── resources
            └── hikari.properties                         # connection pool configuration file (optional)
```

### Creating an Entity Class

Create the entity class User.java corresponding to the database table:

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

### HikariCP Connection Pool Configuration

Configure the connection pool via `HikariConfig`. The core parameters are described as follows:

| Parameter | Description | Recommended Value |
|------|------|--------|
| `jdbcUrl` | MySQL protocol connection string | `jdbc:mysql://<ip>:<port>/<db>?useSSL=false&serverTimezone=UTC&characterEncoding=utf-8` |
| `username` / `password` | Connection user and MySQL native password | Set via `set_native_password` |
| `driverClassName` | JDBC driver class | `com.mysql.cj.jdbc.Driver` |
| `maximumPoolSize` | Maximum number of connections in the pool | Set according to the concurrency level; default is 10 |
| `minimumIdle` | Minimum number of idle connections | Keeping it consistent with maximumPoolSize avoids frequent creation |
| `connectionTimeout` | Timeout for obtaining a connection (milliseconds) | 30000 |
| `idleTimeout` | Idle connection reclamation time (milliseconds) | 600000 |
| `maxLifetime` | Maximum connection lifetime (milliseconds) | Must be less than the openGauss `session_timeout` (default 600000ms/10 minutes); a value of ≤ 540000 (9 minutes) is recommended to leave sufficient margin. If a larger maxLifetime is required, first increase (or disable) the server-side `session_timeout` before relaxing this value |
| `keepaliveTime` | Connection keepalive interval (milliseconds) | 0 means disabled; 300000 (5 minutes) is recommended. Prerequisite: `keepaliveTime` must be less than `maxLifetime` and must be less than the server-side `session_timeout` (otherwise the keepalive probe connection itself will be disconnected by the server timeout). Enable it only when connections may remain idle for a long time and no idle connection reclamation occurs in between |

> [!TIP]Tip
> - `maxLifetime` must be less than the session/connection timeout of the openGauss server (the openGauss default `session_timeout` is 600000ms/10 minutes). Otherwise, connections held by the pool may be actively disconnected by the server, resulting in invalid connections being obtained. The official HikariCP README also requires the connection lifetime to be shorter than the database or infrastructure limits. If a value greater than 10 minutes is truly required, first increase (or disable) the server-side `session_timeout`.
> - `keepaliveTime` causes the pool to actively send keepalive probes only when a connection has been idle for longer than this interval. Its value is also constrained by `maxLifetime` and the server-side `session_timeout`, and must not exceed either of them.
> - If the full authentication scenario of `caching_sha2_password` is used or triggered, you may need to append `allowPublicKeyRetrieval=true` (used to retrieve the RSA public key from the server to complete the password exchange). If the `mysql_native_password` path is used, this parameter is usually not required.
> - HikariCP uses the JDBC4 `Connection.isValid()` for connection validation by default, so `connectionTestQuery` usually does not need to be configured.

### Operation Example Code

The following is a complete example of using the HikariCP connection pool to connect to an openGauss B-compatible database and performing CRUD operations and transactions:

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
        // MySQL protocol connection string. The port is the configured value of dolphin_server_port (3306 in this example).
        config.setJdbcUrl("jdbc:mysql://127.0.0.1:3306/mysql_test_db"
                + "?useSSL=false&serverTimezone=UTC&characterEncoding=utf-8&allowPublicKeyRetrieval=true");
        config.setDriverClassName("com.mysql.cj.jdbc.Driver");
        config.setUsername("mysql_test_db");
        config.setPassword("******");

        // Connection pool parameters.
        config.setMaximumPoolSize(10);
        config.setMinimumIdle(10);
        config.setConnectionTimeout(30000);
        config.setIdleTimeout(600000);
        config.setMaxLifetime(540000);
        config.setKeepaliveTime(300000);

        DATA_SOURCE = new HikariDataSource(config);
    }

    public static void main(String[] args) {
        // Obtain a connection from the connection pool. try-with-resources automatically returns the connection to the pool.
        try (Connection connection = DATA_SOURCE.getConnection()) {
            selectUserTable(connection);

            insertUserTable(connection, "zhaoliu", 18);
            selectUserTable(connection);

            int id = getUserIdByName(connection, "zhaoliu");
            updateUserTable(connection, id, "zhaoliuliuliu", 28);
            selectUserTable(connection);

            deleteUserTable(connection, id);
            selectUserTable(connection);

            // Transaction example: batch insert and roll back on exception (autoCommit must be disabled first).
            transactionDemo(connection);
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            // Close the connection pool before the application exits to release all connections.
            DATA_SOURCE.close();
        }
    }

    public static void insertUserTable(Connection connection, String name, int age) throws SQLException {
        String insertSql = "INSERT INTO user (name, age) VALUES (?, ?);";
        try (PreparedStatement preparedStatement = connection.prepareStatement(insertSql)) {
            preparedStatement.setString(1, name);
            preparedStatement.setInt(2, age);
            int rows = preparedStatement.executeUpdate();
            System.out.println("Inserted " + rows + " rows");
        }
    }

    public static void updateUserTable(Connection connection, int id, String name, int age) throws SQLException {
        String updateSql = "UPDATE user SET name = ?, age = ? WHERE id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(updateSql)) {
            preparedStatement.setString(1, name);
            preparedStatement.setInt(2, age);
            preparedStatement.setInt(3, id);
            int rows = preparedStatement.executeUpdate();
            System.out.println("Updated " + rows + " rows");
        }
    }

    public static void deleteUserTable(Connection connection, int id) throws SQLException {
        String deleteSql = "DELETE FROM user WHERE id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(deleteSql)) {
            preparedStatement.setInt(1, id);
            int rows = preparedStatement.executeUpdate();
            System.out.println("Deleted " + rows + " rows");
        }
    }

    public static void selectUserTable(Connection connection) throws SQLException {
        String selectSql = "SELECT * FROM user;";
        try (Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(selectSql)) {
            System.out.println("Query all data in the user table:");
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
     * Transaction example: batch insert and roll back on exception.
     * Note: The connection returned by HikariCP has autoCommit=true by default,
     * so call setAutoCommit(false) before a transaction and restore it afterward.
     */
    public static void transactionDemo(Connection connection) throws SQLException {
        connection.setAutoCommit(false);
        try {
            insertUserTable(connection, "tom", 22);
            insertUserTable(connection, "jerry", 23);
            connection.commit();
            System.out.println("Transaction committed successfully");
        } catch (SQLException e) {
            connection.rollback();
            System.out.println("Transaction rolled back");
            throw e;
        } finally {
            connection.setAutoCommit(true);
        }
    }
}
```

### Example Run Log

```tex
Query all data in the user table:
id: 1, name: Zhang San, age: 18
id: 2, name: Li Si, age: 19
id: 3, name: Wang Wu, age: 20
1 row inserted
Query all data in the user table:
id: 1, name: Zhang San, age: 18
id: 2, name: Li Si, age: 19
id: 3, name: Wang Wu, age: 20
id: 4, name: zhaoliu, age: 18
Updated 1 row of data
Query all data in the user table:
id: 1, name: Zhang San, age: 18
id: 2, name: Li Si, age: 19
id: 3, name: Wang Wu, age: 20
id: 4, name: zhaoliuliuliu, age: 28
Deleted 1 row of data
Query all data in the user table:
id: 1, name: Zhang San, age: 18
id: 2, name: Li Si, age: 19
id: 3, name: Wang Wu, age: 20
Transaction committed successfully
Query all data in the user table:
id: 1, name: Zhang San, age: 18
id: 2, name: Li Si, age: 19
id: 3, name: Wang Wu, age: 20
id: 5, name: tom, age: 22
id: 6, name: jerry, age: 23
```

## Five Types of Standard SQL Operation Examples

The following provides complete examples, classified into the five categories of DDL / DML / DQL / DCL / TCL, for operating an openGauss B-compatible database via HikariCP + MySQL Connector/J through the dolphin MySQL protocol. Each category includes the core keyword, typical statements, and Java code snippets.

### Quick Reference of Operation Classification

| Abbreviation | Full Name | Core Keyword | Purpose |
|------|------|-----------|------|
| DDL | Data Definition Language | CREATE, ALTER, DROP, TRUNCATE | Defines or modifies the table/database structure|
| DML | Data Manipulation Language | INSERT, UPDATE, DELETE | Inserts, modifies, and deletes data |
| DQL | Data Query Language | SELECT | Queries data |
| DCL | Data Control Language | GRANT, REVOKE | Manages permissions and security |
| TCL | Transaction Control Language | COMMIT, ROLLBACK | Controls transactions |

### DDL: Data Definition

Core operations include creating a table (CREATE TABLE), creating an index (CREATE INDEX), modifying the table structure (ALTER TABLE), clearing data (TRUNCATE), dropping a table (DROP TABLE), and creating a table from query results (CREATE TABLE AS SELECT).

```java
// Create a table (including a SERIAL auto-increment primary key and VARCHAR, INT, DECIMAL, and TIMESTAMP fields).
String createSql = "CREATE TABLE sql_category_test ("
        + "id SERIAL PRIMARY KEY, "
        + "name VARCHAR(64) NOT NULL, "
        + "age INT DEFAULT 0, "
        + "score DECIMAL(5,2), "
        + "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
        + ")";
stmt.executeUpdate(createSql);

// Create an index.
stmt.executeUpdate("CREATE INDEX idx_sql_category_test_name ON sql_category_test (name)");

// Add a column using ALTER TABLE.
stmt.executeUpdate("ALTER TABLE sql_category_test ADD COLUMN remark TEXT");

// Rename a column using ALTER TABLE.
stmt.executeUpdate("ALTER TABLE sql_category_test RENAME COLUMN remark TO description");

// Clear table data using TRUNCATE (the structure is retained).
stmt.executeUpdate("TRUNCATE TABLE sql_category_test");

// Drop a table using DROP TABLE.
stmt.executeUpdate("DROP TABLE sql_category_test_2");

// Create a new table from query results using CREATE TABLE AS SELECT.
stmt.executeUpdate("CREATE TABLE sql_category_test_2 AS SELECT name, age FROM sql_category_test WHERE age > 20");
```

### DML: Data Manipulation

The core operations include single-row insertion, batch write (addBatch), conditional update, conditional delete, and obtaining the auto-increment primary key return value.

```java
// Single-row INSERT (use PreparedStatement to prevent injection)
try (PreparedStatement ps = conn.prepareStatement(
        "INSERT INTO sql_category_test (name, age, score) VALUES (?, ?, ?)")) {
    ps.setString(1, "Alice");
    ps.setInt(2, 28);
    ps.setDouble(3, 95.50);
    int rows = ps.executeUpdate(); // Return the number of affected rows.
}

// Batch INSERT (addBatch + executeBatch)
try (PreparedStatement ps = conn.prepareStatement(
        "INSERT INTO sql_category_test (name, age, score) VALUES (?, ?, ?)")) {
    for (int i = 0; i < 3; i++) {
        ps.setString(1, "BatchUser" + i);
        ps.setInt(2, 20 + i);
        ps.setDouble(3, 80.0 + i * 5);
        ps.addBatch();
    }
    int[] results = ps.executeBatch(); // Array of affected row counts for each statement.
}

// Conditional UPDATE
try (PreparedStatement ps = conn.prepareStatement(
        "UPDATE sql_category_test SET age = ?, score = ? WHERE name = ?")) {
    ps.setInt(1, 29);
    ps.setDouble(2, 96.00);
    ps.setString(3, "Alice");
    int rows = ps.executeUpdate();
}

// Conditional DELETE
try (PreparedStatement ps = conn.prepareStatement(
        "DELETE FROM sql_category_test WHERE name LIKE 'BatchUser%'")) {
    int rows = ps.executeUpdate();
}

// INSERT with auto-generated primary key retrieval (RETURN_GENERATED_KEYS)
try (PreparedStatement ps = conn.prepareStatement(
        "INSERT INTO sql_category_test (name, age, score) VALUES ('Bob', 35, 87.25)",
        PreparedStatement.RETURN_GENERATED_KEYS)) {
    ps.executeUpdate();
    ResultSet keys = ps.getGeneratedKeys();
    if (keys.next()) long genId = keys.getLong(1); // Obtain the ID
}
```

### DQL: Data Query

The core operations include full query, conditional filtering (WHERE), sorting and pagination (ORDER BY + LIMIT), aggregate functions (COUNT/SUM/AVG/MIN/MAX), grouped aggregation (GROUP BY + HAVING), deduplication (DISTINCT), and subqueries.

```java
// Basic SELECT *
ResultSet rs = stmt.executeQuery("SELECT id, name, age, score FROM sql_category_test ORDER BY id");
while (rs.next()) { /* Iterate over the result set. */ }

// Filter by WHERE condition
rs = stmt.executeQuery("SELECT name, age FROM sql_category_test WHERE age >= 28 ORDER BY age");

// Sort and paginate with ORDER BY + LIMIT
rs = stmt.executeQuery("SELECT name, score FROM sql_category_test ORDER BY score DESC LIMIT 3");

// Aggregate functions COUNT/SUM/AVG/MIN/MAX
rs = stmt.executeQuery("SELECT COUNT(*) AS cnt, SUM(age) AS sum_age, AVG(score) AS avg_score, "
        + "MIN(age) AS min_age, MAX(age) AS max_age FROM sql_category_test");

// Group and filter with GROUP BY + HAVING
rs = stmt.executeQuery("SELECT CASE WHEN age < 25 THEN 'young' ELSE 'senior' END AS group_name, "
        + "COUNT(*) AS cnt, AVG(score) AS avg_s "
        + "FROM sql_category_test GROUP BY CASE WHEN age < 25 THEN 'young' ELSE 'senior' END "
        + "HAVING COUNT(*) >= 1");

// Deduplicate with DISTINCT
rs = stmt.executeQuery("SELECT DISTINCT name FROM sql_category_test ORDER BY name");

// Subquery
rs = stmt.executeQuery("SELECT name, age FROM sql_category_test "
        + "WHERE age > (SELECT AVG(age) FROM sql_category_test) ORDER BY age");
```

### DCL: Data Control

The core operations include granting privileges (GRANT), revoking privileges (REVOKE), and querying the current user's privilege information. DCL operations require the current user to have the corresponding privileges (such as a superuser or the object owner). In some scenarios, a WARN may be returned due to insufficient privileges, which is normal.

```java
// Grant the table-level SELECT privilege.
stmt.executeUpdate("GRANT SELECT ON TABLE sql_category_test TO mysqluser");

// Grant multiple privileges.
stmt.executeUpdate("GRANT INSERT, UPDATE, DELETE ON TABLE sql_category_test TO mysqluser");

// Revoke privileges.
stmt.executeUpdate("REVOKE INSERT, UPDATE, DELETE ON TABLE sql_category_test FROM mysqluser");

// Query the current user's privilege information.
ResultSet rs = stmt.executeQuery(
        "SELECT privilege_type, is_grantable FROM information_schema.table_privileges "
        + "WHERE table_name = 'sql_category_test' AND grantee = CURRENT_USER");
while (rs.next()) { String type = rs.getString("privilege_type"); }
```

> [!NOTE]
> Under the dolphin MySQL protocol, DCL GRANT/REVOKE operations are mapped to openGauss internal privilege management. Ordinary users typically already have default privileges on tables they create, so repeated grants may return an INFO-level message. If the current user is not a superuser and does not have the GRANT OPTION, REVOKE may be rejected and return a WARN. These behaviors do not affect normal business usage.

### TCL: Transaction Control

The core operations include explicit commit (COMMIT), rollback (ROLLBACK), partial rollback to a savepoint (SAVEPOINT + ROLLBACK TO SAVEPOINT), and transaction isolation level confirmation.

```java
// Explicit COMMIT
conn.setAutoCommit(false);
try (Statement s = conn.createStatement()) {
    s.executeUpdate("INSERT INTO sql_category_test (name, age, score) VALUES ('commit_test', 40, 77.00)");
}
conn.commit(); // Data is visible after commit

// Rollback via ROLLBACK
conn.setAutoCommit(false);
try (Statement s = conn.createStatement()) {
    s.executeUpdate("INSERT INTO sql_category_test (name, age, score) VALUES ('rollback_test', 41, 66.00)");
}
conn.rollback(); // Data is invisible after rollback

// Partial rollback via SAVEPOINT + ROLLBACK TO SAVEPOINT
conn.setAutoCommit(false);
try (Statement s = conn.createStatement()) {
    s.executeUpdate("INSERT INTO sql_category_test (name, age, score) VALUES ('sp_keep', 42, 55.00)");
    s.executeUpdate("SAVEPOINT sp1");
    s.executeUpdate("INSERT INTO sql_category_test (name, age, score) VALUES ('sp_discard', 43, 44.00)");
    s.executeUpdate("ROLLBACK TO SAVEPOINT sp1"); // sp_discard is undone, sp_keep is retained
}
conn.commit();

// Query the current transaction isolation level
ResultSet rs = conn.createStatement().executeQuery("SELECT @@session.transaction_isolation AS iso");
if (rs.next()) String isolation = rs.getString("iso"); // For example, READ-COMMITTED
conn.setAutoCommit(true);
```

### Concurrent Connection Test

Start multiple threads to simultaneously obtain connections from the HikariCP connection pool and execute complete insert, query, update, and delete transactions, verifying that connections do not leak and SQL executes correctly under concurrent scenarios.

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
            // Each worker: INSERT → SELECT verification → UPDATE → DELETE → commit
            // ... (For the complete code, see SqlCategoryVerificationRunner.java)
            passed.incrementAndGet();
        }
    });
}
startGate.countDown(); // All threads start simultaneously
executor.awaitTermination(30, TimeUnit.SECONDS);
// passed.get() == threadCount means all passed
```

## JDK and HikariCP Version Compatibility

> The conclusion is based on the official HikariCP README (HikariCP-5.1.0, Artifacts section) and local testing.

| Target Java Version | HikariCP Artifact | Status | Local Test |
| --- | --- | --- | --- |
| Java 11+ | `com.zaxxer:HikariCP:5.x` (5.0.1 / 5.1.0) | Mainline | ✅ JDK 17 loads 5.1.0 successfully |
| Java 8 | `com.zaxxer:HikariCP:4.0.3` | Maintenance | ✅ JDK 1.8.0_472 loads 4.0.3 successfully |
| Java 8 + 5.x | — | Not supported | ❌ `UnsupportedClassVersionError: class file version 55.0, should be 52.0` |

Official basis: the 5.x mainline targets Java 11+; Java 8 can only use the maintenance-mode 4.0.3. For details, see <https://github.com/brettwooldridge/HikariCP/blob/HikariCP-5.1.0/README.md#artifacts>.

Test details (Windows: Temurin 1.8.0_472 / Microsoft 17.0.19):

- Bytecode version (`javap -v`): `HikariCP 5.1.0` → major version 55 (Java 11); `HikariCP 4.0.3` → major version 52 (Java 8).
- Runtime loading (minimal program `new HikariConfig()`):
  - JDK 8 + HikariCP 5.1.0 → ❌ `UnsupportedClassVersionError` (class file version 55.0, this runtime supports only up to 52.0);
  - JDK 8 + HikariCP 4.0.3 → ✅ `OK: HikariCP loaded on Java 1.8.0_472`;
  - JDK 17 + HikariCP 5.1.0 → ✅ `OK: HikariCP loaded on Java 17.0.19`.

Conclusion:

- The compilation target of HikariCP 5.x is Java 11, so it can only be compiled/run on JDK 11 or later. Even compiling code that references 5.x on JDK 8 reports `class file version 55.0, should be 52.0`.
- In a JDK 8 environment, use HikariCP 4.0.3 (a maintenance version with Java 8 bytecode). Its API (`HikariConfig` / `HikariDataSource` / `setMaximumPoolSize`, etc.) is basically the same as 5.x, so the example project can be switched smoothly.
- This verification project (`OpengaussCompatibility2hikari` in the `examples` repository) uses JDK 11 + HikariCP 5.1.0 + MySQL Connector/J 8.0.20, and has been verified to run on openGauss 7.0.0-RC3 with the dolphin MySQL protocol (see its `README.md` and `spring-side-pass-checklist.txt` for details). JDK 8 users need to replace HikariCP with 4.0.3 and adjust the compilation target themselves (this is outside the scope of this project; see the actual test above for 4.0.3 loading verification).

## Connection Link and Protocol Conversion

When HikariCP connection pool is used with the MySQL JDBC driver to connect to an openGauss B-compatible database, the link of a business SQL statement can be divided into three segments: the application side, the driver side, and the server side.

### Connection Link Flow (Layered Diagram)

Spring Boot application
    ↓ ① Configure the HikariCP data source
HikariCP connection pool (v5.0.1)
    ↓ ② Call the Driver to create a physical connection
MySQL Connector/J (v8.0.20)
    ↓ ③ Initiate the MySQL protocol handshake (port 3306)
dolphin plugin (openGauss 7.0.0-RC3)
    ↓ ④ Protocol conversion + SQL execution
openGauss kernel (B-compatible database mysql_db)

Layer-by-layer trigger nodes:

| Hierarchy | Trigger Component | Key Action |
| --- | --- | --- |
| Application layer | Spring Boot DataSourceAutoConfiguration | Reads the configuration and creates the HikariDataSource Bean |
| Connection pool layer | HikariPool.getConnection() | When no idle connection is available in the pool, calls the driver to create a new connection |
| Driver layer | com.mysql.cj.jdbc.Driver.connect() | Parses the JDBC URL, initiates the TCP connection and MySQL protocol handshake |
| Protocol layer | dolphin plugin protocol handler | Receives the MySQL handshake packet, verifies mysql_native_password, and returns an OK packet |
| Database layer | openGauss kernel | Executes SQL and returns the result |

### Application Side: Connection Pool Borrowing and Returning

After Spring Boot introduces `spring-boot-starter-jdbc`, `DataSourceAutoConfiguration` automatically assembles `HikariDataSource` when HikariCP is present on the classpath. The application obtains a connection via `DataSource.getConnection()`, which actually enters `HikariPool.getConnection()`. Internally, `HikariPool` uses `ConcurrentBag` to manage physical connections: it reuses an idle connection when one is available, creates a new connection when `maximumPoolSize` is not reached, and blocks and waits according to `connectionTimeout` after the upper limit is reached. When creating a new physical connection, HikariCP invokes the `connect` method of the JDBC driver.

### Driver Side: MySQL Protocol Connection Establishment

When establishing a connection, `com.mysql.cj.jdbc.Driver` of MySQL Connector/J creates `ConnectionImpl` through `NonRegisteringDriver.connect()`. Its constructor triggers `createNewIO()` to initiate a TCP connection to `host:3306` and completes the handshake and authentication according to the MySQL client-server protocol. Authentication uses the MySQL native password of the B-compatible database user, which is set through `set_native_password`; therefore, the connection string requires `allowPublicKeyRetrieval=true` to support public key retrieval. After the connection is established, HikariCP performs a connection initialization probe, one item of which is querying the transaction isolation level, for example, executing `SELECT @@session.transaction_isolation`.

### Server Side: Dolphin Protocol Conversion

After dolphin is enabled in the B-compatible database of openGauss, the dolphin plugin listens for the MySQL protocol on the port specified by `dolphin_server_port`. In the example in this document, this port is set to 3306, which must be different from openGauss's own `port`. The prerequisite for this listening is that the GUC parameter `enable_dolphin_proto` is set to on, and the database must be restarted for the modification to take effect. Via the abstract protocol layer interface, dolphin uses the protocol processing module (such as the `mysql_proto`-related implementation) to parse the received MySQL protocol packets, convert them into logical execution that openGauss can recognize, and then encapsulate and return the results in the MySQL protocol format. All business SQL statements (SELECT 1, CRUD, and transaction commits) go through the same link.

### Compatibility Boundary

The connection pool only manages the physical connection lifecycle. The actual compatibility boundary lies in the translation layer between the MySQL protocol and dolphin. As long as Connector/J can complete the protocol handshake and system variable detection with dolphin normally, the connection pool layer does not introduce additional compatibility issues. The isolation level detection during connection initialization once caused HikariCP connection establishment failures because early dolphin returned default. This issue has been fixed in openGauss 7.0.0-RC3 (dolphin 5.2).

## Verification Coverage

The companion verification project (`OpengaussCompatibility2hikari` in the `examples` repository, package name `com.linyu.ospp`, main class `HikariVerificationRunner`) was actually run on openGauss 7.0.0-RC3 with the dolphin MySQL protocol, covering a total of 13 verification items. The two key connection-pool-specific verifications are as follows:

- Connection pool upper-limit waiting (without exceeding the limit): First borrow all `maximumPoolSize` (10) connections, then request the 11th connection; verify that the 11th connection does not exceed the limit but blocks waiting for an idle connection, and after 1 connection is released, the 11th connection resumes and successfully executes SQL.
- Real concurrent database operations (not just establishing connections): Start 10 workers, each holding its own connection and actually executing `insert / select / update / select / delete / commit`, proving that the concurrency verification completes end-to-end database reads and writes rather than merely obtaining connections.

For the complete test cases and connection pool parameter configuration, see the `README.md` of this project in the `examples` repository.

## Integrating With Spring Boot

Spring Boot 2.x and later use HikariCP as the default connection pool. You only need to configure the data source in `application.yml`; there is no need to explicitly add the HikariCP dependency:

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

## Notes

1. For permission management of the connection user, see the [GRANT](https://docs.opengauss.org/en/docs/latest/sql_reference/grant.html) tutorial. During initial debugging, it is recommended to grant the connection user the SYSADMIN permission to avoid frequent errors caused by permission issues.
2. In the connection string, `maxLifetime` must be less than the connection/session timeout on the openGauss server (the default `session_timeout` of openGauss is 600000 ms/10 minutes). Otherwise, invalid connections closed by the server may be obtained.
3. When the MySQL native password is used and `caching_sha2_password` is enabled on the server, it is recommended to append `allowPublicKeyRetrieval=true` to the connection string.
4. For the support status of connection parameters in the JDBC connection string, see [Compatibility of Common JDBC Connection Parameters](https://docs.opengauss.org/en/docs/latest-lite/extension_reference/dolphin_mysql_protocol_compatibility.html#jdbc%E5%B8%B8%E7%94%A8%E8%BF%9E%E6%8E%A5%E5%8F%82%E6%95%B0%E7%9A%84%E5%85%BC%E5%AE%B9%E8%A1%A8%E7%8E%B0).
5. When the application is closed, call `HikariDataSource.close()` to release connection pool resources and avoid connection leaks.
6. Historical compatibility notice: Transaction isolation level detection. In early dolphin versions 6.0.0-RC1 and earlier, when the MySQL JDBC driver connected via HikariCP, because the MySQL system variable `@@session.transaction_isolation` returned the unmappable isolation level literal `'default'`, HikariCP threw `Default transaction isolation level detection failed` and the connection failed. This issue is part of the evolution of the dolphin plugin (the `opengauss/Plugin` repository) in implementing compatibility for MySQL system variables, and it has been fixed in openGauss 7.0.0-RC3, corresponding to dolphin 5.2. If an earlier version is used, append `sessionVariables=transaction_isolation='READ-COMMITTED'` to the connection string to work around it. For the detailed root cause and the dolphin fix location, see `OpengaussCompatibility2hikari/README.md` in the `examples` repository.
