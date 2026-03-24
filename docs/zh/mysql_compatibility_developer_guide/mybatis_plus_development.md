# Mybatis-plus 连接示例

openGauss 完成 MySQL 协议兼容配置后，即可使用 Mybatis-plus 框架配合 MySQL JDBC 连接 openGauss B 兼容模式数据库。

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

使用 IDE 工具创建 Maven quickstart 项目，Java 版本指定为 1.8 及以上，项目可以命名为 mybatis-plus-connect-opengauss-b。如果没有 Maven/Java，请先完成安装。

### 添加依赖

在 Maven 项目 pom.xml 文件中，添加 MySQL JDBC 和 Mybatis-plus 相关依赖：

```xml
<!-- MyBatis-Plus核心依赖，使用高版本JDK时，请根据需要调整版本 -->
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

## Mybatis-plus 项目搭建

### 项目目录参考

```tex
mybatis-plus-connect-opengauss-b
├── pom.xml
└── src
    └── main
        ├── java
        │   └── org
        │       └── opengauss
        │           ├── MybatisPlusConnectDemo.java      # 主启动类/测试类
        │           ├── entity
        │           │   └── User.java                    # 实体类
        │           ├── mapper
        │           │   └── UserMapper.java              # MyBatis-plus Mapper接口
        │           └── utils
        │               └── MybatisPlusUtils.java        # MyBatis-plus 工具类（加载配置）
        └── resources
            ├── mapper
            │   └── UserMapper.xml                       # SQL映射文件（对应UserMapper接口）
            └── mybatis-config.xml                       # MyBatis-plus 主配置文件
```

### 准备 Mybatis-plus 配置文件

在 src/main/resources 目录下创建 mybatis-config.xml：

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <settings>
        <!-- 启用驼峰命名自动映射 -->
        <setting name="mapUnderscoreToCamelCase" value="true"/>
        <!-- 标准日志 -->
<!--        <setting name="logImpl" value="STDOUT_LOGGING"/>-->
        <!-- 禁用日志，此处禁用是为了避免干扰测试日志，实际调试时建议开启 -->
        <setting name="logImpl" value="NO_LOGGING"/>
    </settings>

    <!-- 配置环境，可以有多个环境（如开发、测试） -->
    <environments default="development">
        <environment id="development">
            <!-- 事务管理器：JDBC（手动提交/回滚） -->
            <transactionManager type="JDBC"/>

            <!-- 数据源：使用MyBatis内置的未池化数据源 -->
            <dataSource type="UNPOOLED">
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

### 创建 Mybatis-plus 配置类/工具类

创建 MybatisPlusUtils.java 工具类，通过代码方式构建 Mybatis-plus 的 SqlSessionFactory：

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
     * 创建分页拦截器
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
     * 通过 SqlSessionFactory 对象获取 SqlSession 实例
     */
    public static SqlSession getSqlSession(boolean autoCommit) {
        return sqlSessionFactory.openSession(autoCommit);
    }
}
```

### 创建实体类

创建与数据库表对应的实体类 User.java ：

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

### 创建 Mapper 接口

创建 UserMapper.java 接口：

```java
package org.opengauss.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import org.opengauss.entity.User;

public interface UserMapper extends BaseMapper<User> {

}
```

### 创建 XML 映射文件

在 src/main/resources/mapper 目录下创建 UserMapper.xml：

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="org.opengauss.mapper.UserMapper">

</mapper>
```

## MyBatis-plus 数据库操作示例

### 示例代码

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
     * 测试查询所有用户
     *
     * @param userMapper 用户映射器对象
     */
    public static void testSelectAll(UserMapper userMapper) {
        System.out.println("=== 查询所有用户 ===");
        List<User> users = userMapper.selectList(null);
        users.forEach(System.out::println);
        System.out.println();
    }

    /**
     * 测试根据ID查询用户
     *
     * @param userMapper 用户映射器对象
     * @param id 用户ID
     */
    public static void testSelectById(UserMapper userMapper, Integer id) {
        System.out.println("=== 查询用户ID为：" + id + " 的用户 ===");
        User user = userMapper.selectById(id);
        System.out.println(user);
        System.out.println();
    }

    /**
     * 测试条件查询用户
     *
     * @param userMapper 用户映射器对象
     * @param name 姓名查询条件，模糊查询
     * @param age 年龄查询条件，精确查询
     */
    public static void testSelectByCondition(UserMapper userMapper, String name, Integer age) {
        System.out.println("=== 条件查询，姓名：" + name + "，年龄：" + age + " ===");
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
     * 测试分页查询用户
     *
     * @param userMapper 用户映射器对象
     */
    public static void testSelectByPage(UserMapper userMapper) {
        System.out.println("=== 分页查询，第2页，每页2条数据 ===");
        Page<User> page = userMapper.selectPage(new Page<>(2, 2), null);
        page.getRecords().forEach(System.out::println);
        System.out.println();
    }

    /**
     * 测试新增用户
     *
     * @param userMapper 用户映射器对象
     * @param user 用户对象
     */
    public static void testInsert(UserMapper userMapper, User user) {
        System.out.println("=== 新增用户 ===");
        int result = userMapper.insert(user);
        System.out.println("新增行数：" + result);
        System.out.println("新增用户ID：" + user.getId());
        System.out.println();
    }

    /**
     * 测试更新用户
     *
     * @param userMapper 用户映射器对象
     * @param user 用户对象
     */
    public static void testUpdate(UserMapper userMapper, User user) {
        System.out.println("=== 更新用户 ===");
        int result = userMapper.updateById(user);
        System.out.println("更新行数：" + result);
        System.out.println();
    }

    /**
     * 测试删除用户
     *
     * @param userMapper 用户映射器对象
     * @param id 用户ID
     */
    public static void testDelete(UserMapper userMapper, Integer id) {
        System.out.println("=== 删除用户ID为：" + id + " 的用户 ===");
        int result = userMapper.deleteById(id);
        System.out.println("删除行数：" + result);
        System.out.println();
    }

    /**
     * 测试事务操作
     */
    public static void testTransaction() {
        System.out.println("=== 事务操作 ===");
        try (SqlSession sqlSession = MybatisPlusUtils.getSqlSession(false)) {
            UserMapper mapper = sqlSession.getMapper(UserMapper.class);

            User user1 = new User();
            user1.setName("事务用户1");
            user1.setAge(30);
            mapper.insert(user1);

            User user2 = new User();
            user2.setName("事务用户2");
            user2.setAge(31);
            mapper.insert(user2);

            if (true) {
                throw new RuntimeException("模拟异常，测试回滚");
            }
            sqlSession.commit();
        } catch (Exception e) {
            System.out.println("事务失败：" + e.getMessage());
        }

        try (SqlSession sqlSession = MybatisPlusUtils.getSqlSession(true)) {
            UserMapper mapper = sqlSession.getMapper(UserMapper.class);
            System.out.println("事务回滚后查询所有用户");
            testSelectAll(mapper);
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
新增用户ID：4

=== 查询用户ID为：4 的用户 ===
User{id=4, username='zhaoliu', age=18}

=== 更新用户 ===
更新行数：1

=== 条件查询，姓名：zhao，年龄：28 ===
User{id=4, username='zhaoliuliuliu', age=28}

=== 分页查询，第2页，每页2条数据 ===
User{id=3, username='王五', age=20}
User{id=4, username='zhaoliuliuliu', age=28}

=== 删除用户ID为：4 的用户 ===
删除行数：1

=== 查询所有用户 ===
User{id=1, username='张三', age=18}
User{id=2, username='李四', age=19}
User{id=3, username='王五', age=20}

=== 事务操作 ===
事务失败：模拟异常，测试回滚
事务回滚后查询所有用户
=== 查询所有用户 ===
User{id=1, username='张三', age=18}
User{id=2, username='李四', age=19}
User{id=3, username='王五', age=20}
```

## 注意事项

1. Mybatis-plus 高版本需要引入 springframework 相关依赖，请根据需要自行添加。
