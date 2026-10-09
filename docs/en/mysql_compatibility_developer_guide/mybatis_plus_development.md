# Mybatis-plus Connection Sample

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-14T06:38:57.215Z pushedAt=2026-07-17T06:42:53.915Z -->

After openGauss enables MySQL protocol compatibility, you can use MyBatis-Plus with the MySQL JDBC driver to connect to openGauss in B-compatible mode.

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

## Mybatis-plus Project Setup

### Creating a Maven Project

Use your IDE to create a Maven quickstart project. Set Java to 1.8 or higher. Name it `mybatis-plus-connect-opengauss-b`. If you don't have Maven or Java, install them first.

### Adding Dependencies

Add the MySQL JDBC driver and MyBatis-Plus dependencies to `pom.xml`:

```xml
<!--MyBatis-Plus core. Adjust version if you use a newer JDK.-->
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus</artifactId>
    <version>3.4.3</version>
</dependency>

<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.28</version>
</dependency>

<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-simple</artifactId>
    <version>1.7.36</version>
</dependency>
```

### Project Structure Reference

```tex
mybatis-plus-connect-opengauss-b
├── pom.xml
└── src
    └── main
        ├── java
        │   └── org
        │       └── opengauss
        │           ├── MybatisPlusConnectDemo.java      # Main class / Test class
        │           ├── entity
        │           │   └── User.java                    # Entity class
        │           ├── mapper
        │           │   └── UserMapper.java              # MyBatis-plus mapper interface
        │           └── utils
        │               └── MybatisPlusUtils.java        # MyBatis-plus utility class (which loads config)
        └── resources
            ├── mapper
            │   └── UserMapper.xml                       # SQL mapping file (corresponding to the UserMapper interface)
            └── mybatis-config.xml                       # MyBatis-plus main config file
```

### Creating the MyBatis-Plus Config File

Create `mybatis-config.xml` under `src/main/resources`:

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <settings>
        <!-- Enable automatic camelCase mapping -->
        <setting name="mapUnderscoreToCamelCase" value="true"/>
        <!-- Standard logging -->
<!--        <setting name="logImpl" value="STDOUT_LOGGING"/>-->
        <!-- Disable logging to keep test output clean. Turn it on for debugging if needed. -->
        <setting name="logImpl" value="NO_LOGGING"/>
    </settings>

    <!-- Environment config (dev, test, etc.) -->
    <environments default="development">
        <environment id="development">
            <!-- Transaction manager: JDBC (manual commit/rollback) -->
            <transactionManager type="JDBC"/>

            <!-- Data source: MyBatis built-in unpooled data -->
            <dataSource type="UNPOOLED">
                <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql://127.0.0.1:3308/mysql_test_db?useSSL=false&amp;serverTimezone=UTC&amp;characterEncoding=utf-8"/>
                <property name="username" value="mysql_test_db"/>
                <property name="password" value="******"/>
            </dataSource>
        </environment>
    </environments>

    <!-- Register mappers (specifying SQL mapping file locations) -->
    <mappers>
        <mapper resource="mapper/UserMapper.xml"/>
    </mappers>
</configuration>
```

### Creating the MyBatis-Plus Utility Class

Create `MybatisPlusUtils.java` to build the SqlSessionFactory programmatically:

```java
package org.opengauss.utils;

import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.core.MybatisConfiguration;
import com.baomidou.mybatisplus.core.MybatisSqlSessionFactoryBuilder;
import com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor;
import com.baomidou.mybatisplus.extension.plugins.pagination.dialects.MySqlDialect;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import java.io.IOException;
import java.io.InputStream;

public class MybatisPlusUtils {
    private static final SqlSessionFactory sqlSessionFactory;

    static {
        String resource = "mybatis-config.xml";
        try {
            InputStream inputStream = Resources.getResourceAsStream(resource);
            SqlSessionFactory factory = new MybatisSqlSessionFactoryBuilder().build(inputStream);
            MybatisConfiguration configuration = (MybatisConfiguration) factory.getConfiguration();
            configuration.addInterceptor(createPaginationInterceptor());
            sqlSessionFactory = factory;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * Create pagination interceptor
     */
    public static MybatisPlusInterceptor createPaginationInterceptor() {
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();

        PaginationInnerInterceptor paginationInterceptor = new PaginationInnerInterceptor();
        paginationInterceptor.setDbType(DbType.MYSQL);
        paginationInterceptor.setDialect(new MySqlDialect());
        paginationInterceptor.setOverflow(true);
        paginationInterceptor.setMaxLimit(500L);

        interceptor.addInnerInterceptor(paginationInterceptor);
        return interceptor;
    }

    /**
     * Get SqlSession instance through SqlSessionFactory object
     */
    public static SqlSession getSqlSession(boolean autoCommit) {
        return sqlSessionFactory.openSession(autoCommit);
    }
}
```

### Creating the Entity Class

Create `User.java`:

```java
package org.opengauss.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

public class User {
    @TableId(type = IdType.AUTO)
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

### Creating the Mapper Interface

Create the `UserMapper.java` interface:

```java
package org.opengauss.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import org.opengauss.entity.User;

public interface UserMapper extends BaseMapper<User> {

}
```

### Creating the XML Mapping File

Create `UserMapper.xml` under `src/main/resources/mapper`:

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="org.opengauss.mapper.UserMapper">

</mapper>
```

## MyBatis-plus Database Operation Example

### Sample code

```java
package org.opengauss;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import org.apache.ibatis.session.SqlSession;
import org.opengauss.entity.User;
import org.opengauss.mapper.UserMapper;
import org.opengauss.utils.MybatisPlusUtils;

import java.util.List;

public class MybatisPlusConnectDemo {
    public static void main(String[] args) {
        try (SqlSession sqlSession = MybatisPlusUtils.getSqlSession(true)) {
            UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
            testSelectAll(userMapper);

            User user = new User("zhaoliu", 18);
            testInsert(userMapper, user);
            testSelectById(userMapper, user.getId());

            user.setName("zhaoliuliuliu");
            user.setAge(28);
            testUpdate(userMapper, user);
            testSelectByCondition(userMapper, "zhao", 28);
            testSelectByPage(userMapper);

            testDelete(userMapper, user.getId());
            testSelectAll(userMapper);

            testTransaction();
        }
    }

    /**
     * Test querying all users
     *
     * @param userMapper User mapper object
     */
    public static void testSelectAll(UserMapper userMapper) {
        System.out.println("=== Query all users ===");
        List<User> users = userMapper.selectList(null);
        users.forEach(System.out::println);
        System.out.println();
    }

    /**
     * Test querying a user by ID
     *
     * @param userMapper User mapper object
     * @param id User ID
     */
    public static void testSelectById(UserMapper userMapper, Integer id) {
        System.out.println("=== Query user with ID: " + id + " ===");
        User user = userMapper.selectById(id);
        System.out.println(user);
        System.out.println();
    }

    /**
     * Test conditional query of users
     *
     * @param userMapper User mapper object
     * @param name Name query condition. Fuzzy match.
     * @param age Age query condition. Exact match.
     */
    public static void testSelectByCondition(UserMapper userMapper, String name, Integer age) {
        System.out.println("=== Conditional query, name: " + name + ", age: " + age + " ===");
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        if (name != null) {
            queryWrapper.like("name", "%" + name + "%");
        }
        if (age != null) {
            queryWrapper.eq("age", age);
        }
        List<User> users = userMapper.selectList(queryWrapper);
        users.forEach(System.out::println);
        System.out.println();
    }

    /**
     * Test paginated user query
     *
     * @param userMapper User mapper object
     */
    public static void testSelectByPage(UserMapper userMapper) {
        System.out.println("=== Paginated query: page 2, 2 records per page ===");
        Page<User> page = userMapper.selectPage(new Page<>(2, 2), null);
        page.getRecords().forEach(System.out::println);
        System.out.println();
    }

    /**
     * Test adding a new user
     *
     * @param userMapper User mapper object
     * @param user User object
     */
    public static void testInsert(UserMapper userMapper, User user) {
        System.out.println("=== Add user ===");
        int result = userMapper.insert(user);
        System.out.println("Rows added:" + result);
        System.out.println("ID of added user:" + user.getId());
        System.out.println();
    }

    /**
     * Test updating a user
     *
     * @param userMapper user mapper object
     * @param user user object
     */
    public static void testUpdate(UserMapper userMapper, User user) {
        System.out.println("=== Update user ===");
        int result = userMapper.updateById(user);
        System.out.println("Rows updated: " + result);
        System.out.println();
    }

    /**
     * Test deleting a user
     *
     * @param userMapper User mapper object
     * @param id User ID
     */
    public static void testDelete(UserMapper userMapper, Integer id) {
        System.out.println("=== Delete user with ID: " + id + " ===");
        int result = userMapper.deleteById(id);
        System.out.println("Rows deleted: " + result);
        System.out.println();
    }

    /**
     * Test transaction
     */
    public static void testTransaction() {
        System.out.println("=== Transaction test ===");
        try (SqlSession sqlSession = MybatisPlusUtils.getSqlSession(false)) {
            UserMapper mapper = sqlSession.getMapper(UserMapper.class);

            User user1 = new User();
            user1.setName("Transaction user 1");
            user1.setAge(30);
            mapper.insert(user1);

            User user2 = new User();
            user2.setName("Transaction user 2");
            user2.setAge(31);
            mapper.insert(user2);

            if (true) {
                throw new RuntimeException("Simulate an exception to test rollback");
            }
            sqlSession.commit();
        } catch (Exception e) {
            System.out.println("Transaction failed: " + e.getMessage());
        }

        try (SqlSession sqlSession = MybatisPlusUtils.getSqlSession(true)) {
            UserMapper mapper = sqlSession.getMapper(UserMapper.class);
            System.out.println("Query all users after transaction rollback");
            testSelectAll(mapper);
        }
    }
}
```

### Example Run Log

```tex
=== Query all users ===
User{id=1, username='John', age=18}
User{id=2, username='Sam', age=19}
User{id=3, username='Lily', age=20}

=== Add user ===
Rows added: 1
ID of new user: 4

=== Query users with ID 4 ===
User{id=4, username='zhaoliu', age=18}

=== Update user ===
Rows updated: 1

=== Conditional query: name: zhao, age: 28 ===
User{id=4, username='zhaoliuliuliu', age=28}

=== Paginated query: page 2, 2 records per page ===
User{id=3, username='Lily', age=20}
User{id=4, username='zhaoliuliuliu', age=28}

=== Delete user with ID 4 ===
Rows deleted: 1

=== Query all users ===
User{id=1, username='John', age=18}
User{id=2, username='Sam', age=19}
User{id=3, username='Lily', age=20}

=== Transaction test ===
Transaction failed: Simulate an exception to test rollback.
Query all users after rollback.
=== Query all users ===
User{id=1, username='John', age=18}
User{id=2, username='Sam', age=19}
User{id=3, username='Lily', age=20}
```

## Notes

Newer MyBatis-Plus versions require Spring Framework dependencies. Add them as needed.