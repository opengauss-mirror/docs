# Hibernate 连接示例

openGauss 完成 MySQL 协议兼容配置后，即可使用 Hibernate 框架配合 MySQL JDBC 连接 openGauss B 兼容模式数据库。

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

### Dolphin 参数配置

由于 Hibernate 框架连接数据库时需要查询一些系统表，已获取表结构等信息，因此 openGauss 数据库需要做一些额外配置，已支持 Hibernate 的相关操作。

1. 通过 gsql 命令，重新连接 openGauss 数据库

   ```bash
   gsql -d postgres -p 5432 -r
   ```

2. 切换至 MySQL 协议兼容配置的 B 库下

   ```sql
   \c proto_test_db
   ```

3. 去除 dolphin.sql_mode 中的 sql_mode_full_group 选项

   ```sql
   alter user mysql_test_db set dolphin.sql_mode = 'sql_mode_strict,no_zero_date,block_return_multi_results,error_for_division_by_zero,escape_quotes,disable_escape_bytea';
   ```

   参考资料：[dolphin.sql_mode参数说明](https://docs.opengauss.org/zh/docs/latest/extension_reference/dolphin_guc_parameters.html#dolphinsql_mode)

4. 配置大小写敏感参数为不敏感

   ```sql
   alter user mysql_test_db set dolphin.lower_case_table_names = 1;
   ```

   参考资料：[dolphin.lower_case_table_names参数说明](https://docs.opengauss.org/zh/docs/latest/extension_reference/dolphin_guc_parameters.html#dolphinlower_case_table_names)

> [!TIP]须知
> 上述配置均为用户级别修改，如果使用其他用户连接时，需要重新配置。如果需要全局进行配置，请参考上述官网资料。

## Hibernate 项目搭建

### 创建 Maven 项目

使用 IDE 工具创建 Maven quickstart 项目，Java 版本指定为 1.8 及以上，项目可以命名为 hibernate-connect-opengauss-b。如果没有 Maven/Java，请先完成安装。

### 添加依赖

在 Maven 项目 pom.xml 文件中，添加 MySQL JDBC 和 Hibernate 相关依赖：

```xml
<!-- Hibernate核心依赖，使用高版本JDK时，请根据需要调整版本 -->
<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-core</artifactId>
    <version>5.6.15.Final</version>
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

### 项目目录参考

```tex
hibernate-connect-opengauss-b
├── pom.xml
└── src
    └── main
        ├── java
        │   └── org
        │       └── opengauss
        │           ├── HibernateConnectDemo.java        # 主启动类/测试类
        │           ├── entity
        │           │   └── User.java                    # 实体类
        │           └── utils
        │               └── HibernateUtils.java          # Hibernate 工具类（加载配置）
        └── resources
            ├── org
            │   └── opengauss
            │       └── entity
            │           └── User.hbm.xml                 # XML 映射文件
            └── hibernate.cfg.xml                        # Hibernate 主配置文件
```

### 准备 Hibernate 配置文件

在 src/main/resources 目录下创建 hibernate.cfg.xml：

```xml
<?xml version='1.0' encoding='utf-8'?>
<!DOCTYPE hibernate-configuration PUBLIC
        "-//Hibernate/Hibernate Configuration DTD 3.0//EN"
        "http://www.hibernate.org/dtd/hibernate-configuration-3.0.dtd">

<hibernate-configuration>
    <session-factory>
        <!-- 数据库连接配置 -->
        <property name="connection.driver_class">com.mysql.cj.jdbc.Driver</property>
        <property name="connection.url">jdbc:mysql://127.0.0.1:3308/mysql_test_db?useSSL=false&amp;serverTimezone=UTC&amp;characterEncoding=utf-8</property>
        <property name="connection.username">mysql_test_db</property>
        <property name="connection.password">******</property>

        <!-- Hibernate方言 -->
        <property name="dialect">org.hibernate.dialect.MySQL57Dialect</property>

        <!-- 是否在控制台显示SQL语句（调试时建议开启） -->
        <property name="show_sql">false</property>
        <property name="format_sql">true</property>

        <!-- 自动建表策略 -->
        <property name="hbm2ddl.auto">validate</property>

        <!-- 指定当前会话上下文（线程绑定Session） -->
        <property name="current_session_context_class">thread</property>

        <!-- 注册实体类（通过XML映射文件） -->
        <mapping resource="org/opengauss/entity/User.hbm.xml"/>
    </session-factory>
</hibernate-configuration>
```

### 创建实体类

创建与数据库表对应的实体类 User.java：

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

### 创建映射文件

在 src/main/resources/org/opengauss/entity 目录下创建 User.hbm.xml：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE hibernate-mapping PUBLIC
        "-//Hibernate/Hibernate Mapping DTD 3.0//EN"
        "http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd">

<hibernate-mapping package="org.opengauss.entity">
    <!-- class元素：定义实体类与数据库表的映射 -->
    <!-- name: 实体类全限定名（package已定义，只需写类名） -->
    <!-- table: 对应的数据库表名 -->
    <class name="User" table="user">

        <!-- id元素：主键映射 -->
        <!-- name: 实体类中的属性名 -->
        <!-- column: 表中的字段名（省略时默认与属性名相同） -->
        <id name="id" column="id">
            <!-- 主键生成策略，identity: 使用数据库自增 -->
            <generator class="identity"/>
        </id>

        <!-- property元素：普通属性映射 -->
        <property name="name">
            <!-- column元素：映射到数据库表中的字段 -->
            <!-- name: 表中的字段名 -->
            <!-- sql-type: 数据库字段类型，openGauss 7.0.0-RC3开始，B库中的varchar类型被表示为character varying -->
            <column name="name" sql-type="character varying(50)"/>
        </property>
        <property name="age" column="age"/>
    </class>
</hibernate-mapping>
```

### 创建 Hibernate 配置类/工具类

创建 HibernateUtils.java 工具类，通过代码方式构建 Hibernate 的 SessionFactory：

```java
package org.opengauss.utils;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtils {
    private static final SessionFactory sessionFactory;

    static {
        try {
            // 加载hibernate.cfg.xml配置文件
            Configuration configuration = new Configuration().configure("hibernate.cfg.xml");

            // 构建SessionFactory
            sessionFactory = configuration.buildSessionFactory();
        } catch (HibernateException e) {
            throw new RuntimeException(e);
        }
    }

    public static Session openSession() {
        return sessionFactory.openSession();
    }

    public static Session getCurrentSession() {
        return sessionFactory.getCurrentSession();
    }
}
```

## Hibernate 数据库操作示例

### 示例代码

```java
package org.opengauss;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.opengauss.entity.User;
import org.opengauss.utils.HibernateUtils;

import java.util.List;

public class HibernateConnectDemo {
    public static void main(String[] args) {
        queryAllUsers();

        User user = new User("zhaoliu", 18);
        insertUser(user);
        queryUserById(user.getId());

        user.setName("zhaoliuliuliu");
        user.setAge(28);
        updateUser(user);
        queryUserByCondition("zhaoliu", 28);
        queryAllUsers();

        deleteUser(user.getId());
        queryAllUsers();
    }

    /**
     * 查询所有用户
     */
    public static void queryAllUsers() {
        System.out.println("=== 查询所有用户 ===");
        Session session = HibernateUtils.getCurrentSession();
        Transaction transaction = session.beginTransaction();
        try {
            String hql = "FROM User";
            List<User> users = session.createQuery(hql, User.class).list();
            users.forEach(System.out::println);
            System.out.println();
            transaction.commit();
        } catch (Exception e) {
            transaction.rollback();
            e.printStackTrace();
        }
    }

    /**
     * 根据用户ID查询用户
     *
     * @param id 用户ID
     */
    public static void queryUserById(Integer id) {
        System.out.println("=== 查询用户ID为：" + id + "的用户 ===");
        Session session = HibernateUtils.getCurrentSession();
        Transaction transaction = session.beginTransaction();
        try {
            User user = session.get(User.class, id);
            System.out.println(user);
            System.out.println();
            transaction.commit();
        } catch (Exception e) {
            transaction.rollback();
            e.printStackTrace();
        }
    }

    /**
     * 条件查询用户
     *
     * @param name 用户名，模糊查询条件
     * @param age 年龄，精确查询条件
     */
    public static void queryUserByCondition(String name, Integer age) {
        System.out.println("=== 条件查询，姓名：" + name + "，年龄：" + age + " ===");
        Session session = HibernateUtils.getCurrentSession();
        Transaction transaction = session.beginTransaction();
        try {
            String hql = "FROM User WHERE name LIKE :name AND age = :age";
            List<User> users = session.createQuery(hql, User.class)
                    .setParameter("name", "%" + name + "%")
                    .setParameter("age", age)
                    .list();
            users.forEach(System.out::println);
            System.out.println();
            transaction.commit();
        } catch (Exception e) {
            transaction.rollback();
            e.printStackTrace();
        }
    }

    /**
     * 新增用户
     *
     * @param user 用户对象
     */
    public static void insertUser(User user) {
        System.out.println("=== 新增用户 ===");
        Session session = HibernateUtils.getCurrentSession();
        Transaction transaction = session.beginTransaction();
        try {
            session.save(user);
            transaction.commit();
            System.out.println("新增用户，用户ID为：" + user.getId());
        } catch (Exception e) {
            transaction.rollback();
            e.printStackTrace();
        }
        System.out.println();
    }

    /**
     * 更新用户信息
     *
     * @param user 用户对象
     */
    public static void updateUser(User user) {
        System.out.println("=== 更新用户 ===");
        Session session = HibernateUtils.getCurrentSession();
        Transaction transaction = session.beginTransaction();
        try {
            session.update(user);
            transaction.commit();
        } catch (Exception e) {
            transaction.rollback();
            e.printStackTrace();
        }
        System.out.println();
    }

    /**
     * 删除用户
     *
     * @param id 用户ID
     */
    public static void deleteUser(Integer id) {
        System.out.println("=== 删除用户ID为：" + id + "的用户 ===");
        Session session = HibernateUtils.getCurrentSession();
        Transaction transaction = session.beginTransaction();
        try {
            User user = session.get(User.class, id);
            if (user != null) {
                session.delete(user);
            }
            transaction.commit();
        } catch (Exception e) {
            transaction.rollback();
            e.printStackTrace();
        }
        System.out.println();
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
新增用户，用户ID为：4

=== 查询用户ID为：4的用户 ===
User{id=4, username='zhaoliu', age=18}

=== 更新用户 ===

=== 条件查询，姓名：zhaoliu，年龄：28 ===
User{id=4, username='zhaoliuliuliu', age=28}

=== 查询所有用户 ===
User{id=1, username='张三', age=18}
User{id=2, username='李四', age=19}
User{id=3, username='王五', age=20}
User{id=4, username='zhaoliuliuliu', age=28}

=== 删除用户ID为：4的用户 ===

=== 查询所有用户 ===
User{id=1, username='张三', age=18}
User{id=2, username='李四', age=19}
User{id=3, username='王五', age=20}
```
