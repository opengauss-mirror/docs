# Mybatis Connection Sample

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-14T06:38:54.320Z pushedAt=2026-07-17T06:42:53.913Z -->

After openGauss enables MySQL protocol compatibility, you can use MyBatis with the MySQL JDBC driver to connect to openGauss in B-compatible mode.

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
       ('Zhang San',  18),
       ('Li Si',  19),
       ('Wang Wu',  20);
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

## Mybatis Project Setup

### Creating a Maven Project

Use your IDE to create a Maven quickstart project. Set Java to 1.8 or higher. Name it `mybatis-connect-opengauss-b`. If you don't have Maven or Java, install them first.

### Adding Dependencies

Add the MySQL JDBC driver and MyBatis dependencies to `pom.xml`:

```xml
<!-- MyBatis core. Adjust version if you use a newer JDK. -->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.5.13</version>
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
mybatis-connect-opengauss-b
├── pom.xml
└── src
    └── main
        ├── java
        │   └── org
        │       └── opengauss
        │           ├── MybatisConnectDemo.java          # Main class / Test class
        │           ├── entity
        │           │   └── User.java                    # Entity class
        │           └── mapper
        │               └── UserMapper.java              # MyBatis Mapper interface
        └── resources
            ├── mapper
            │   └── UserMapper.xml                       # SQL mapping file (corresponding to UserMapper interface)
            └── mybatis-config.xml                       # MyBatis main config file
```

### Creating the MyBatis Config File

Create `mybatis-config.xml` under `src/main/resources`:

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "https://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <settings>
        <!-- Standard logging -->
<!--        <setting name="logImpl" value="STDOUT_LOGGING"/>-->
        <!-- Disable logging to keep test output clean. Turn it on for debugging or production if needed. -->
        <setting name="logImpl" value="NO_LOGGING"/>
    </settings>

    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"/>

            <!-- Data source: pool settings -->
            <dataSource type="POOLED">
                <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql://127.0.0.1:3308/mysql_test_db?useSSL=false&amp;serverTimezone=UTC&amp;characterEncoding=utf-8"/>
                <property name="username" value="mysql_test_db"/>
                <property name="password" value="******"/>
            </dataSource>
        </environment>
    </environments>

    <!-- Register the mapper (specify the location of the SQL mapping file) -->
    <mappers>
        <mapper resource="mapper/UserMapper.xml"/>
    </mappers>
</configuration>
```

### Creatinh the Entity Class

Create `User.java` corresponding to the database table:

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

### Creating the Mapper Interface

Create the `UserMapper.java` interface:

```java
package org.opengauss.mapper;

import org.opengauss.entity.User;

import java.util.List;

public interface UserMapper {
    /**
     * Query user by ID
     *
     * @param id User ID
     * @return User object
     */
    User selectById(Integer id);

    /**
     * Query all users
     *
     * @return List of all users
     */
    List<User> selectAll();

    /**
     * Fuzzy query by username
     *
     * @param name Username pattern
     * @return List of matching users
     */
    List<User> selectByName(String name);

    /**
     * Add user
     *
     * @param user User object to add
     * @return Number of rows to add
     */
    int insert(User user);

    /**
     * Update user information
     *
     * @param user User object to update
     * @return Number of rows updated
     */
    int update(User user);

    /**
     * Delete user by ID
     *
     * @param id User ID
     * @return Number of deleted rows
     */
    int deleteById(Integer id);
}
```

### Creating the XML Mapping File

Create `UserMapper.xml` under `src/main/resources/mapper`:

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "https://mybatis.org/dtd/mybatis-3-mapper.dtd">

<!-- namespace points to the corresponding Mapper interface. Change to the actual one in use -->
<mapper namespace="org.opengauss.mapper.UserMapper">

    <!-- Result mapping. type specifies the target Java object. Change to the actual one in use -->
    <resultMap id="userResultMap" type="org.opengauss.entity.User">
        <id property="id" column="id"/>
        <result property="name" column="name"/>
        <result property="age" column="age"/>
    </resultMap>

    <!-- Common SQL fragment -->
    <sql id="baseColumns">
        id, name, age
    </sql>

    <!-- Query user by ID -->
    <select id="selectById" resultMap="userResultMap" parameterType="int">
        SELECT <include refid="baseColumns"/>
        FROM user
        WHERE id = #{id}
    </select>

    <!-- Query all users -->
    <select id="selectAll" resultMap="userResultMap">
        SELECT <include refid="baseColumns"/>
        FROM user
    </select>

    <!-- Fuzzy query by username -->
    <select id="selectByName" resultMap="userResultMap" parameterType="string">
        SELECT <include refid="baseColumns"/>
        FROM user
        WHERE name LIKE CONCAT('%', #{name}, '%')
    </select>

    <!-- Add user. Change parameterType to the actual value in use. -->
    <insert id="insert" parameterType="org.opengauss.entity.User" keyProperty="id">
        INSERT INTO user (name, age)
        VALUES (#{name}, #{age})
    </insert>

    <!-- Update user info. Change parameterType to the actual value in use. -->
    <update id="update" parameterType="org.opengauss.entity.User">
        UPDATE user
        SET name = #{name},
        age = #{age}
        WHERE id = #{id}
    </update>

    <!-- Delete user -->
    <delete id="deleteById" parameterType="int">
        DELETE FROM user WHERE id = #{id}
    </delete>
</mapper>
```

## MyBatis Database Operation Example

### Sample code

```java
package org.opengauss;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.opengauss.entity.User;
import org.opengauss.mapper.UserMapper;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

public class MybatisConnectDemo {
    private static final SqlSessionFactory sqlSessionFactory;

    static {
        try {
            InputStream inputStream = Resources.getResourceAsStream("mybatis-config.xml");
            sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static void main(String[] args) {
        try (SqlSession sqlSession = sqlSessionFactory.openSession()) {
            UserMapper userMapper = sqlSession.getMapper(UserMapper.class);

            System.out.println("=== Query all users ===");
            List<User> users = userMapper.selectAll();
            for (User user : users) {
                System.out.println(user);
            }

            System.out.println("=== Add user ===");
            User insertUser = new User("zhaoliu", 18);
            int insertCount = userMapper.insert(insertUser);
            sqlSession.commit();
            System.out.println("Rows added: " + insertCount);

            System.out.println("=== Fuzzy query for users with 'zhao' in name ===");
            List<User> zhaoUsers = userMapper.selectByName("zhao");
            for (User user : zhaoUsers) {
                System.out.println(user);
            }

            if (!zhaoUsers.isEmpty()) {
                User zhaoUser = zhaoUsers.get(0);
                zhaoUser.setName("zhaoliuliuliu");
                zhaoUser.setAge(28);

                System.out.println("=== Update user info ===");
                int updateCount = userMapper.update(zhaoUser);
                sqlSession.commit();
                System.out.println("Rows updated: " + updateCount);

                System.out.println("=== Query user by ID ===");
                User userById = userMapper.selectById(zhaoUser.getId());
                System.out.println(userById);

                System.out.println("=== Delete user ===");
                int deleteCount = userMapper.deleteById(zhaoUser.getId());
                System.out.println("Deleted rows: " + deleteCount);
                sqlSession.commit();
            }

            System.out.println("=== Query all users ===");
            users = userMapper.selectAll();
            for (User user : users) {
                System.out.println(user);
            }
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
=== Fuzzy query: users with 'zhao' in name ===
User{id=4, username='zhaoliu', age=18}
=== Update user ===
Rows updated: 1
=== Query user by ID ===
User{id=4, username='zhaoliuliuliu', age=28}
=== Delete user ===
Rows deleted: 1
=== Query all users ===
User{id=1, username='John', age=18}
User{id=2, username='Sam', age=19}
User{id=3, username='Lily', age=20}
```