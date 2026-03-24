# Mybatis 连接示例

openGauss 完成 MySQL 协议兼容配置后，即可使用 Mybatis 框架配合 MySQL JDBC 连接 openGauss B 兼容模式数据库。

## 准备工作

### 配置客户端接入认证

openGauss 需配置客户端接入认证后，才允许通过远程连接数据库，否则连接会报错。配置方式如下：

```bash
gs_guc set -N all -I all -h "host all proto_test 0.0.0.0/0 sha256"
# 其中 proto_test 为数据库用户名，此处远程连接禁止使用“omm”用户（即数据库初始化用户）

gs_om -t restart
```

更多详细内容请参考，[配置客户端接入认证](https://docs.opengauss.org/zh/docs/latest/database_administration_guide/configuring_client_access_authentication.html)。

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

5. 赋予 MySQL 连接用户所有业务表的权限

   ```sql
   GRANT ALL ON SCHEMA mysql_test_db to proto_test;
   GRANT ALL ON ALL TABLES IN SCHEMA mysql_test_db to proto_test;
   GRANT ALL ON ALL SEQUENCES IN SCHEMA mysql_test_db to proto_test;
   ```

   **注意**：如果有新创建的表，需要对新创建的表重新赋权。

6. 退出 gsql 连接

   ```sql
   \q
   ```

### 创建 Maven 项目

使用 IDE 工具创建 Maven quickstart 项目，Java 版本指定为 1.8 及以上，项目可以命名为 mybatis-connect-opengauss-b。如果没有 Maven/Java，请先完成安装。

### 添加依赖

在 Maven 项目 pom.xml 文件中，添加 MySQL JDBC 和 Mybatis 相关依赖：

```xml
<!-- Mybatis依赖，使用高版本JDK时，请根据需要调整版本 -->
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

## Mybatis 项目搭建

### 项目目录参考

```tex
mybatis-connect-opengauss-b
├── pom.xml
└── src
    └── main
        ├── java
        │   └── org
        │       └── opengauss
        │           ├── MybatisConnectDemo.java          # 主启动类/测试类
        │           ├── entity
        │           │   └── User.java                    # 实体类
        │           └── mapper
        │               └── UserMapper.java              # MyBatis Mapper接口
        └── resources
            ├── mapper
            │   └── UserMapper.xml                       # SQL映射文件（对应UserMapper接口）
            └── mybatis-config.xml                       # MyBatis 主配置文件
```

### 准备 Mybatis 配置文件

在 src/main/resources 目录下创建 mybatis-config.xml：

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "https://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <settings>
        <!-- 标准日志 -->
<!--        <setting name="logImpl" value="STDOUT_LOGGING"/>-->
        <!-- 禁用日志，此处禁用是为了避免干扰测试日志，实际调试时或生产环境建议开启 -->
        <setting name="logImpl" value="NO_LOGGING"/>
    </settings>

    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"/>

            <!-- 数据源：连接池配置 -->
            <dataSource type="POOLED">
                <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql://127.0.0.1:3308/mysql_test_db?useSSL=false&amp;serverTimezone=UTC&amp;characterEncoding=utf-8"/>
                <property name="username" value="proto_test"/>
                <property name="password" value="******"/>
            </dataSource>
        </environment>
    </environments>

    <!-- 注册映射器（指定SQL映射文件的位置） -->
    <mappers>
        <mapper resource="mapper/UserMapper.xml"/>
    </mappers>
</configuration>
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

### 创建 Mapper 接口

创建 UserMapper.java 接口：

```java
package org.opengauss.mapper;

import org.opengauss.entity.User;

import java.util.List;

public interface UserMapper {
    /**
     * 根据ID查询用户
     *
     * @param id 用户ID
     * @return 用户对象
     */
    User selectById(Integer id);

    /**
     * 查询所有用户
     *
     * @return 所有用户列表
     */
    List<User> selectAll();

    /**
     * 根据用户名模糊查询
     *
     * @param name 用户名模糊查询参数
     * @return 符合用户名模糊查询的用户列表
     */
    List<User> selectByName(String name);

    /**
     * 新增用户
     *
     * @param user 新增用户对象
     * @return 新增的行数
     */
    int insert(User user);

    /**
     * 更新用户信息
     *
     * @param user 更新用户对象
     * @return 更新的行数
     */
    int update(User user);

    /**
     * 根据ID删除用户
     *
     * @param id 用户ID
     * @return 删除的行数
     */
    int deleteById(Integer id);
}
```

### 创建 XML 映射文件

在 src/main/resources/mapper 目录下创建 UserMapper.xml：

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "https://mybatis.org/dtd/mybatis-3-mapper.dtd">

<!-- namespace指向对应的Mapper接口，注意实际使用时需要根据实际情况修改 -->
<mapper namespace="org.opengauss.mapper.UserMapper">

    <!-- 结果映射，type指定映射的目标Java对象，注意实际使用时需要根据实际情况修改 -->
    <resultMap id="userResultMap" type="org.opengauss.entity.User">
        <id property="id" column="id"/>
        <result property="name" column="name"/>
        <result property="age" column="age"/>
    </resultMap>

    <!-- 公共SQL片段 -->
    <sql id="baseColumns">
        id, name, age
    </sql>

    <!-- 根据ID查询用户 -->
    <select id="selectById" resultMap="userResultMap" parameterType="int">
        SELECT <include refid="baseColumns"/>
        FROM user
        WHERE id = #{id}
    </select>

    <!-- 查询所有用户 -->
    <select id="selectAll" resultMap="userResultMap">
        SELECT <include refid="baseColumns"/>
        FROM user
    </select>

    <!-- 根据用户名模糊查询 -->
    <select id="selectByName" resultMap="userResultMap" parameterType="string">
        SELECT <include refid="baseColumns"/>
        FROM user
        WHERE name LIKE CONCAT('%', #{name}, '%')
    </select>

    <!-- 新增用户，parameterType注意实际使用时需要根据实际情况修改 -->
    <insert id="insert" parameterType="org.opengauss.entity.User" keyProperty="id">
        INSERT INTO user (name, age)
        VALUES (#{name}, #{age})
    </insert>

    <!-- 更新用户，parameterType注意实际使用时需要根据实际情况修改 -->
    <update id="update" parameterType="org.opengauss.entity.User">
        UPDATE user
        SET name = #{name},
        age = #{age}
        WHERE id = #{id}
    </update>

    <!-- 删除用户 -->
    <delete id="deleteById" parameterType="int">
        DELETE FROM user WHERE id = #{id}
    </delete>
</mapper>
```

## MyBatis 数据库操作示例

### 示例代码

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

            System.out.println("=== 查询所有用户 ===");
            List<User> users = userMapper.selectAll();
            for (User user : users) {
                System.out.println(user);
            }

            System.out.println("=== 新增用户 ===");
            User insertUser = new User("zhaoliu", 18);
            int insertCount = userMapper.insert(insertUser);
            sqlSession.commit();
            System.out.println("新增行数：" + insertCount);

            System.out.println("=== 模糊查询用户名包含zhao的用户 ===");
            List<User> zhaoUsers = userMapper.selectByName("zhao");
            for (User user : zhaoUsers) {
                System.out.println(user);
            }

            if (!zhaoUsers.isEmpty()) {
                User zhaoUser = zhaoUsers.get(0);
                zhaoUser.setName("zhaoliuliuliu");
                zhaoUser.setAge(28);

                System.out.println("=== 更新用户信息 ===");
                int updateCount = userMapper.update(zhaoUser);
                sqlSession.commit();
                System.out.println("更新行数：" + updateCount);

                System.out.println("=== 根据ID查询用户 ===");
                User userById = userMapper.selectById(zhaoUser.getId());
                System.out.println(userById);

                System.out.println("=== 删除用户 ===");
                int deleteCount = userMapper.deleteById(zhaoUser.getId());
                System.out.println("删除行数：" + deleteCount);
                sqlSession.commit();
            }

            System.out.println("=== 查询所有用户 ===");
            users = userMapper.selectAll();
            for (User user : users) {
                System.out.println(user);
            }
        }
    }
}
```

### 示例运行日志

```tex
=== 查询所有用户 ===
User{id=1, username='张三', age=18}
User{id=2, username='李四', age=19}
User{id=3, username='王五', age=20}
=== 新增用户 ===
新增行数：1
=== 模糊查询用户名包含zhao的用户 ===
User{id=4, username='zhaoliu', age=18}
=== 更新用户信息 ===
更新行数：1
=== 根据ID查询用户 ===
User{id=4, username='zhaoliuliuliu', age=28}
=== 删除用户 ===
删除行数：1
=== 查询所有用户 ===
User{id=1, username='张三', age=18}
User{id=2, username='李四', age=19}
User{id=3, username='王五', age=20}
```
