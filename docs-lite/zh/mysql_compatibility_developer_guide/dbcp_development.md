# DBCP连接池示例

openGauss完成MySQL协议兼容配置后，可以使用Spring Boot、Apache Commons DBCP2连接池和MySQL Connector/J连接openGauss B兼容模式数据库。

本文以JDK 8、Spring Boot 2.5.6、DBCP2 2.9.0和MySQL Connector/J 8.0.28为例。

## 准备工作

### 前置条件：完成 MySQL 协议兼容配置

在`postgresql.conf`中配置Dolphin插件和MySQL协议端口：

```ini
shared_preload_libraries = 'dolphin'
enable_dolphin_proto = on
dolphin_server_port = 3308
dolphin.default_database_name = 'proto_test_db'
```

重启数据库，并确认`3308`端口已经监听：

```bash
gs_ctl restart -D "$PGDATA"
ss -tlnp | grep 3308
```

### 准备业务表结构

1. 使用数据库初始化用户连接openGauss：

   ```bash
   gsql -d postgres -p 5432 -r
   ```

2. 创建B兼容模式数据库，并切换到该数据库：

   ```sql
   CREATE DATABASE proto_test_db WITH DBCOMPATIBILITY = 'B';
   \c proto_test_db
   ```

3. 创建schema、业务表和初始数据：

   ```sql
   CREATE SCHEMA mysql_test_db;
   SET current_schema TO mysql_test_db;

   CREATE TABLE `user` (
       `id`   INT AUTO_INCREMENT PRIMARY KEY,
       `name` VARCHAR(50) NOT NULL COMMENT '用户名',
       `age`  INT COMMENT '年龄'
   ) DEFAULT CHARSET=utf8mb4;

   INSERT INTO `user` (`name`, `age`) VALUES
       ('张三', 18),
       ('李四', 19),
       ('王五', 20);
   ```

### 准备连接用户

1. 重新连接`postgres`数据库并创建业务用户。将`<DBCP_PASSWORD>`替换为实际密码：

   ```sql
   \c postgres
   CREATE USER mysql_test_db WITH PASSWORD '<DBCP_PASSWORD>';
   ```

   > [!NOTE]说明
   > 不要在已存在同名schema的B兼容模式数据库中创建该用户。

2. 切换至B兼容模式数据库，设置MySQL native密码并授予业务对象权限：

   ```sql
   \c proto_test_db
   SELECT set_native_password('mysql_test_db', '<DBCP_PASSWORD>', '');
   ALTER SCHEMA mysql_test_db OWNER TO mysql_test_db;
   GRANT ALL ON ALL TABLES IN SCHEMA mysql_test_db TO mysql_test_db;
   GRANT ALL ON ALL SEQUENCES IN SCHEMA mysql_test_db TO mysql_test_db;
   \q
   ```

### 配置客户端接入认证

以下示例只允许本机业务用户访问。远程部署时，应将`127.0.0.1/32`替换为应用服务器的明确IP地址或最小必要网段。

```bash
gs_guc set -D "$PGDATA" -h "host all mysql_test_db 127.0.0.1/32 sha256"
gs_ctl reload -D "$PGDATA"
```

更多信息请参见[配置客户端接入认证](../database_administration_guide/configuring_client_access_authentication.md)。

## Spring Boot项目搭建

### 创建Maven项目

创建Maven项目`dbcp-connect-opengauss-b`，使用JDK 8或更高版本。

### 项目目录参考

项目目录如下：

```text
dbcp-connect-opengauss-b
├── pom.xml
└── src
    └── main
        ├── java
        │   └── org
        │       └── opengauss
        │           ├── DbcpConnectApplication.java       # 启动类
        │           ├── entity
        │           │   └── User.java                     # 实体类
        │           ├── repository
        │           │   └── UserRepository.java            # 数据访问层
        │           ├── service
        │           │   └── UserService.java               # 业务与事务层
        │           └── runner
        │               └── DbcpDemoRunner.java             # 示例启动任务
        └── resources
            └── application.properties
```

### 添加依赖

在`pom.xml`中添加Spring Boot JDBC、DBCP2和MySQL Connector/J依赖。Spring Boot JDBC默认引入HikariCP，使用DBCP2时需要排除HikariCP。

```xml
<properties>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
</properties>

<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-jdbc</artifactId>
        <version>2.5.6</version>
        <exclusions>
            <exclusion>
                <groupId>com.zaxxer</groupId>
                <artifactId>HikariCP</artifactId>
            </exclusion>
        </exclusions>
    </dependency>
    <dependency>
        <groupId>org.apache.commons</groupId>
        <artifactId>commons-dbcp2</artifactId>
        <version>2.9.0</version>
    </dependency>
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>8.0.28</version>
    </dependency>
</dependencies>

<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
            <version>2.5.6</version>
        </plugin>
    </plugins>
</build>
```

## DBCP连接池配置

在`src/main/resources/application.properties`中配置DBCP数据源。密码通过环境变量传入，不要将真实密码写入配置文件。

```properties
spring.datasource.type=org.apache.commons.dbcp2.BasicDataSource
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://127.0.0.1:3308/mysql_test_db?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC&characterEncoding=utf-8
spring.datasource.username=mysql_test_db
spring.datasource.password=${DBCP_PASSWORD}

spring.datasource.dbcp2.initial-size=2
spring.datasource.dbcp2.max-total=8
spring.datasource.dbcp2.max-idle=8
spring.datasource.dbcp2.min-idle=2
spring.datasource.dbcp2.max-wait-millis=5000
spring.datasource.dbcp2.validation-query=SELECT 1
spring.datasource.dbcp2.test-on-borrow=true
spring.datasource.dbcp2.test-while-idle=true
```

其中，JDBC URL中的`3308`必须与`dolphin_server_port`一致，`mysql_test_db`对应B兼容模式数据库中的同名schema。

## DBCP数据库操作示例

下面示例按启动类、实体类、数据访问层、业务层和启动任务分层组织。将代码分别保存到项目目录中对应的文件。

### 创建启动类

`src/main/java/org/opengauss/DbcpConnectApplication.java`：

```java
package org.opengauss;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DbcpConnectApplication {

    public static void main(String[] args) {
        SpringApplication.run(DbcpConnectApplication.class, args);
    }
}
```

### 创建实体类

`src/main/java/org/opengauss/entity/User.java`：

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
        return "User{id=" + id + ", name='" + name + "', age=" + age + "}";
    }
}
```

### 创建数据访问层

`src/main/java/org/opengauss/repository/UserRepository.java`：

```java
package org.opengauss.repository;

import org.opengauss.entity.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepository {
    private final JdbcTemplate jdbcTemplate;

    public UserRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<User> findAll() {
        return jdbcTemplate.query(
                "SELECT id, name, age FROM `user` ORDER BY id",
                (rs, rowNum) -> {
                    User user = new User();
                    user.setId(rs.getInt("id"));
                    user.setName(rs.getString("name"));
                    user.setAge(rs.getInt("age"));
                    return user;
                });
    }

    public int countByName(String name) {
        return jdbcTemplate.queryForObject(
                "SELECT COUNT(*) FROM `user` WHERE `name` = ?", Integer.class, name);
    }

    public int findAgeByName(String name) {
        return jdbcTemplate.queryForObject(
                "SELECT `age` FROM `user` WHERE `name` = ?", Integer.class, name);
    }

    public int insert(String name, int age) {
        return jdbcTemplate.update(
                "INSERT INTO `user` (`name`, `age`) VALUES (?, ?)", name, age);
    }

    public int updateAge(String name, int age) {
        return jdbcTemplate.update(
                "UPDATE `user` SET `age` = ? WHERE `name` = ?", age, name);
    }

    public int deleteByName(String name) {
        return jdbcTemplate.update("DELETE FROM `user` WHERE `name` = ?", name);
    }
}
```

### 创建业务与事务层

`src/main/java/org/opengauss/service/UserService.java`：

```java
package org.opengauss.service;

import org.opengauss.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional
    public void commitTransaction(String name) {
        userRepository.insert(name, 30);
    }

    @Transactional
    public void rollbackTransaction(String name) {
        userRepository.insert(name, 31);
        throw new IllegalStateException("模拟业务异常，触发事务回滚");
    }
}
```

### 操作示例代码

`src/main/java/org/opengauss/runner/DbcpDemoRunner.java`：

```java
package org.opengauss.runner;

import org.apache.commons.dbcp2.BasicDataSource;
import org.opengauss.repository.UserRepository;
import org.opengauss.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;

@Component
public class DbcpDemoRunner implements CommandLineRunner {
    private final DataSource dataSource;
    private final UserRepository userRepository;
    private final UserService userService;

    public DbcpDemoRunner(DataSource dataSource, UserRepository userRepository,
                          UserService userService) {
        this.dataSource = dataSource;
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @Override
    public void run(String... args) {
        if (!(dataSource instanceof BasicDataSource)) {
            throw new IllegalStateException("实际数据源不是 DBCP BasicDataSource");
        }
        System.out.println("数据源：" + dataSource.getClass().getName());
        System.out.println("初始记录数：" + userRepository.findAll().size());

        String name = "dbcp-demo-user";
        try {
            userRepository.insert(name, 20);
            userRepository.updateAge(name, 21);
            System.out.println("更新后年龄：" + userRepository.findAgeByName(name));

            userService.commitTransaction(name + "-commit");
            System.out.println("提交后记录数："
                    + userRepository.countByName(name + "-commit"));

            try {
                userService.rollbackTransaction(name + "-rollback");
            } catch (IllegalStateException expected) {
                System.out.println("回滚事务：" + expected.getMessage());
            }
            System.out.println("回滚后记录数："
                    + userRepository.countByName(name + "-rollback"));
        } finally {
            userRepository.deleteByName(name);
            userRepository.deleteByName(name + "-commit");
            userRepository.deleteByName(name + "-rollback");
        }
    }
}
```

`JdbcTemplate`由Spring Boot注入Repository，Repository只负责数据访问，Service负责事务边界，Runner只负责组织演示流程。`BasicDataSource`由Spring Boot自动装配，DBCP2通过MySQL Connector/J连接Dolphin MySQL协议端口，Dolphin将SQL交给openGauss B兼容模式数据库执行。操作完成后，连接会归还DBCP连接池。

调用链如下：

```text
Spring Boot启动类 -> Runner -> Service -> Repository -> JdbcTemplate
  -> BasicDataSource（DBCP2） -> MySQL Connector/J
  -> Dolphin MySQL协议 -> openGauss B兼容模式数据库
```

### 示例运行日志

在项目根目录执行：

```bash
export DBCP_PASSWORD='<DBCP_PASSWORD>'
mvn spring-boot:run
```

预期输出如下：

```text
数据源：org.apache.commons.dbcp2.BasicDataSource
初始记录数：3
更新后年龄：21
提交后记录数：1
回滚事务：模拟业务异常，触发事务回滚
回滚后记录数：0
```

`max-total=8`表示连接池最多同时借出8条连接。连接池已满时，后续请求最多等待`max-wait-millis`指定的时间；有连接归还后，请求继续执行，等待超时则抛出`SQLException`。
