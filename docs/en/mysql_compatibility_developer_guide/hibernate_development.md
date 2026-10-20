---
description: This document describes Hibernate Connection Sample in openGauss, covering topics such as Prerequisites, Hibernate Project Setup.
keywords: [openGauss, Hibernate Connection Sample, MySQL compatibility, Prerequisites, Hibernate Project Setup]
---

# Hibernate Connection Sample

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-14T06:38:58.258Z pushedAt=2026-07-17T06:42:53.918Z -->

After openGauss enables MySQL protocol compatibility, you can use Hibernate with the MySQL JDBC driver to connect to openGauss in B-compatible mode.

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

4. Set the MySQL native password for the new user.

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
# mysql_test_db is the database username. Do not use "omm" (the initial user) for remote connections.

gs_om -t restart
```

For more details, see [Configuring Client Access Authentication](https://docs.opengauss.org/en/docs/latest/database_administration_guide/configuring_client_access_authentication.html).

### Dolphin Parameter Settings

Hibernate queries system tables to get schema and table metadata. So openGauss needs a few extra settings to support that.

1. Reconnect to openGauss via `gsql`.

   ```bash
   gsql -d postgres -p 5432 -r
   ```

2. Switch to the B-compatible database.

   ```sql
   \c proto_test_db
   ```

3. Remove `sql_mode_full_group` from `dolphin.sql_mode`.

   ```sql
   alter user mysql_test_db set dolphin.sql_mode = 'sql_mode_strict,no_zero_date,block_return_multi_results,error_for_division_by_zero,escape_quotes,disable_escape_bytea';
   ```

   Reference: [dolphin.sql_mode parameters](https://docs.opengauss.org/en/docs/latest/extension_reference/dolphin_guc_parameters.html#dolphinsql_mode)

4. Set case-insensitive name matching.

   ```sql
   alter user mysql_test_db set dolphin.lower_case_table_names = 1;
   ```

   Reference: [dolphin.lower_case_table_names parameters](https://docs.opengauss.org/en/docs/latest/extension_reference/dolphin_guc_parameters.html#dolphinlower_case_table_names)

> [!TIP] Notice
> These are per-user settings. If you connect as a different user, you'll need to set them again. For global settings, see the official docs linked above.

## Hibernate Project Setup

### Creating a Maven Project

Use your IDE to create a Maven quickstart project. Set Java to 1.8 or higher. Name it `hibernate-connect-opengauss-b`. If you don't have Maven or Java, install them first.

### Adding Dependencies

Add the MySQL JDBC driver and Hibernate dependencies to `pom.xml`:

```xml
<!-- Hibernate core. Adjust version if you use a newer JDK. -->
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

### Project Structure Reference

```tex
hibernate-connect-opengauss-b
├── pom.xml
└── src
    └── main
        ├── java
        │   └── org
        │       └── opengauss
        │           ├── HibernateConnectDemo.java        # Main class / Test class
        │           ├── entity
        │           │   └── User.java                    # Entity class
        │           └── utils
        │               └── HibernateUtils.java          # Hibernate utility class (which loads config)
        └── resources
            ├── org
            │   └── opengauss
            │       └── entity
            │           └── User.hbm.xml                 # XML mapping file
            └── hibernate.cfg.xml                        # Hibernate main config file
```

### Preparing the Hibernate Config File

Create `hibernate.cfg.xml` under `src/main/resources`:

```xml
<?xml version='1.0' encoding='utf-8'?>
<!DOCTYPE hibernate-configuration PUBLIC
        "-//Hibernate/Hibernate Configuration DTD 3.0//EN"
        "http://www.hibernate.org/dtd/hibernate-configuration-3.0.dtd">

<hibernate-configuration>
    <session-factory>
        <!-- Database connection settings -->
        <property name="connection.driver_class">com.mysql.cj.jdbc.Driver</property>
        <property name="connection.url">jdbc:mysql://127.0.0.1:3308/mysql_test_db?useSSL=false&amp;serverTimezone=UTC&amp;characterEncoding=utf-8</property>
        <property name="connection.username">mysql_test_db</property>
        <property name="connection.password">******</property>

        <!-- Hibernate dialect -->
        <property name="dialect">org.hibernate.dialect.MySQL57Dialect</property>

        <!-- Show SQL in console (turn on for debugging) -->
        <property name="show_sql">false</property>
        <property name="format_sql">true</property>

        <!-- Schema auto-generation strategy -->
        <property name="hbm2ddl.auto">validate</property>

        <!-- Bind session to the current thread -->
        <property name="current_session_context_class">thread</property>

        <!-- Register entity class (via XML mapping file) -->
        <mapping resource="org/opengauss/entity/User.hbm.xml"/>
    </session-factory>
</hibernate-configuration>
```

### Creating the Entity Class

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

### Creating the Mapping File

Create `User.hbm.xml` under `src/main/resources/org/opengauss/entity`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE hibernate-mapping PUBLIC
        "-//Hibernate/Hibernate Mapping DTD 3.0//EN"
        "http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd">

<hibernate-mapping package="org.opengauss.entity">
    <!-- class element: defines the mapping between the entity class and the database table -->
    <!-- name: fully qualified name of the entity class (the package is already defined, so only the class name is required) -->
    <!-- table: corresponding database table name -->
    <class name="User" table="user">

        <!-- id element: primary key mapping -->
        <!-- name: attribute name in the entity class -->
        <!-- column: field name in the table (defaults to the attribute name if omitted) -->
        <id name="id" column="id">
            <!-- primary key generation strategy, identity: use database auto-increment -->
            <generator class="identity"/>
        </id>

        <!-- property element: common attribute mapping -->
        <property name="name">
            <!-- column element: maps to a field in the database table -->
            <!-- name: field name in the table -->
            <!-- sql-type: database field type. Starting from openGauss 7.0.0-RC3, the varchar type in the B-compatible database is represented as character varying -->
            <column name="name" sql-type="character varying(50)"/>
        </property>
        <property name="age" column="age"/>
    </class>
</hibernate-mapping>
```

### Creating the Hibernate Utility Class

Create the `HibernateUtils.java` utility class to build Hibernate's SessionFactory programmatically:

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
            // Load the hibernate.cfg.xml config file
            Configuration configuration = new Configuration().configure("hibernate.cfg.xml");

            // Build SessionFactory
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

## Hibernate Database Operation Example

### Sample Code

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
     * Query all users
     */
    public static void queryAllUsers() {
        System.out.println("=== Query all users ===");
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
     * Query user by user ID
     *
     * @param id User ID
     */
    public static void queryUserById(Integer id) {
        System.out.println("=== Query user with ID: " + id + " ===");
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
     * Query users with conditions
     *
     * @param name Username, fuzzy match
     * @param age Age, exact match
     */
    public static void queryUserByCondition(String name, Integer age) {
        System.out.println("=== Conditional query, name: " + name + ", age: " + age + " ===");
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
     * Add a user
     *
     * @param user User object
     */
    public static void insertUser(User user) {
        System.out.println("=== Add user ===");
        Session session = HibernateUtils.getCurrentSession();
        Transaction transaction = session.beginTransaction();
        try {
            session.save(user);
            transaction.commit();
            System.out.println("New user added, user ID: " + user.getId());
        } catch (Exception e) {
            transaction.rollback();
            e.printStackTrace();
        }
        System.out.println();
    }

    /**
     * Update user information
     *
     * @param user User object
     */
    public static void updateUser(User user) {
        System.out.println("=== Update user ===");
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
     * Delete a user
     *
     * @param id User ID
     */
    public static void deleteUser(Integer id) {
        System.out.println("=== Delete user with ID: " + id + " ===");
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

### Example Run Log

```tex
=== Query all users ===
User{id=1, username='John', age=18}
User{id=2, username='Sam', age=19}
User{id=3, username='Lily', age=20}

=== Add a user ===
User ID: 4

=== Query users with ID 4 ===
User{id=4, username='zhaoliu', age=18}

=== Update user ===

=== Conditional query: name: zhaoliu, age: 28 ===
User{id=4, username='zhaoliuliuliu', age=28}

=== Query all users ===
User{id=1, username='John', age=18}
User{id=2, username='Sam', age=19}
User{id=3, username='Lily', age=20}
User{id=4, username='zhaoliuliuliu', age=28}

=== Delete users with ID 4 ===

=== Query all users ===
User{id=1, username='John', age=18}
User{id=2, username='Sam', age=19}
User{id=3, username='Lily', age=20}
```
