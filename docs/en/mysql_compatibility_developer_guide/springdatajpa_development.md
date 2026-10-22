---
url: /en/docs/latest/mysql_compatibility_developer_guide/springdatajpa_development.md
---
# SpringDataJPA Connection Example

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-10-13T02:02:33.660Z pushedAt=2026-10-19T10:19:10.331Z -->

The dolphin plugin of openGauss implements MySQL protocol compatibility. After you enable `enable_dolphin_proto` on the database server, you can directly use the MySQL JDBC driver in a Spring Data JPA application to connect to a B-compatible database of openGauss.

This document describes how to use Spring Boot 3.x + Spring Data JPA (Hibernate 6) with the MySQL JDBC driver to connect to an openGauss B-compatible database, including environment preparation, project setup, sample code for entity mapping, pagination, and transactions, as well as precautions and known limitations.

## Environment Preparation

The environment preparation (business tables, connection users, and client access authentication) is the same as that in [Spring Boot connection example](springboot_development.html), so it is not repeated here. Key points recap:

- In a B-compatible database, a schema of openGauss is equivalent to a database of MySQL. The database in the JDBC URL is the schema name.
- The connection user must run `set_native_password` or `set_caching_sha2_password` to set the MySQL protocol authentication password. The server handshake always negotiates with `caching_sha2_password`, and MySQL 5.7 clients automatically fall back to native.
- The MySQL protocol port is `dolphin_server_port` (default: 3308).

## Project Setup

### Creating a Maven Project

Create a standard Maven project (Spring Boot 3.x requires JDK 17+). The directory structure is as follows:

```
springdatajpa-connect-opengauss-b
├── pom.xml
└── src
    ├── main
    │   ├── java/org/opengauss/smoke
    │   │   ├── SmokeApplication.java        # Startup class
    │   │   ├── User.java                    # Entity class
    │   │   ├── UserRepository.java          # Repository interface
    │   │   └── OpenGaussBMySQLDialect.java  # Custom dialect (adaptation point)
    │   └── resources
    │       └── application.yml              # Data source + JPA configuration
    └── test
        └── java/org/opengauss/smoke/jpacases/  # Test cases (see the examples repository)
```

### Adding Dependencies

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.5.16</version>
</parent>

<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>com.mysql</groupId>
        <artifactId>mysql-connector-j</artifactId>
    </dependency>
</dependencies>
```

> [!NOTE]Note
> MySQL driver 8.0.28 and earlier use the legacy coordinates `mysql:mysql-connector-java`; starting from 8.0.31, the new coordinates `com.mysql:mysql-connector-j` are used. The Spring Boot 3.x BOM automatically manages the new coordinate version. In practice, **versions 8.0.28 to 26.7.0 behave consistently in JPA type mapping, primary key backfill, pagination, batch, and transaction scenarios**.

### Preparing the Configuration File

The following is an example of the `application.yml` configuration. Note that **in B mode, it is recommended to create tables manually and keep `ddl-auto: none`** (see the notes and known limitations below for the reason):

```yaml
spring:
  datasource:
    url: jdbc:mysql://127.0.0.1:3308/mysql_test_db?useSSL=false&serverTimezone=UTC&characterEncoding=utf-8
    username: mysql_test_db
    password: '******'
    driver-class-name: com.mysql.cj.jdbc.Driver
  jpa:
    hibernate:
      # In B mode, it is recommended to create tables manually and use none (ddl-auto=update fails silently; see the notes for details).
      ddl-auto: none
    database-platform: org.opengauss.smoke.OpenGaussBMySQLDialect
    show-sql: true
```

Custom dialect (inherits the MySQL dialect and is retained as the adaptation point for B mode):

```java
package org.opengauss.smoke;

import org.hibernate.dialect.MySQLDialect;

/**
 * openGauss B-compatible mode dialect.
 * B mode does not support the backslash as an escape character ('\\' is treated as 2 characters according to standard SQL),
 * so this semantic is declared here as a future adaptation point.
 */
public class OpenGaussBMySQLDialect extends MySQLDialect {
    @Override
    public boolean isNoBackslashEscapesEnabled() {
        return true;
    }
}
```

## Sample Code

### Entity Class (Note: Import jakarta.persistence, Not javax)

```java
package org.opengauss.smoke;

import jakarta.persistence.*;

@Entity
@Table(name = "user") // user is a MySQL reserved word. Hibernate 6 automatically adds backticks to it, so no manual handling is required.
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // AUTO_INCREMENT backfill has been verified to work.
    private Integer id;

    private String name;

    private Integer age;

    // getter / setter omitted
}
```

### Repository Interface and Queries

```java
package org.opengauss.smoke;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Integer> {

    /** Derived LIKE query: Hibernate 6.6 renders escape '\\' (two backslashes) by default, which causes an invalid escape string error in B mode (see Note 1). */
    Page<User> findByNameLike(String name, Pageable pageable);

    /**
     * LIKE fuzzy query: escape '!' must be specified explicitly.
     * B mode does not recognize single-character backslash escaping. The escape '\\' (two backslashes) rendered by Hibernate 6 by default
     * Causes an invalid escape string error (see Note 1 for details).
     */
    @Query("select u from User u where u.name like ?1 escape '!'")
    Page<User> searchByName(String pattern, Pageable pageable);
}
```

### Saving and Primary Key Backfill

```java
User u = new User();
u.setName("Zhao Liu");
u.setAge(28);
userRepository.save(u);
System.out.println(u.getId()); // IDENTITY primary key has been backfilled, and the getGeneratedKeys path is available
```

### Pagination Query

```java
Page<User> page = userRepository.searchByName("张%",
        PageRequest.of(0, 2, Sort.by("id")));
System.out.println("total=" + page.getTotalElements() + ", rows=" + page.getContent());
```

### Transaction Rollback

```java
@Transactional
public void batchInsert(boolean rollback) {
    userRepository.save(new User("tx_a", 1));
    userRepository.save(new User("tx_b", 2));
    if (rollback) {
        throw new RuntimeException("force rollback"); // Both rows are rolled back together.
    }
}
```

## Run Log Example

```
[INFO] Tests run: 10, Failures: 0, Errors: 0, Skipped: 0
[INFO] BUILD SUCCESS
[CASE] M1 five-type mapping round trip + IDENTITY primary key backfill ok
[CASE] P1 pagination traversal of 3 rows of data ok
[CASE] K2 searchByName(escape '!') fuzzy query ok
```

## Notes and Known Limitations

1. **Escape handling in LIKE fuzzy queries.** By default, Hibernate 6.6 appends `escape '\\'` (two backslashes) to all LIKE predicates. In MySQL, `'\\'` represents one character, whereas in openGauss B mode, `'\\'` is treated as two characters according to standard SQL, which results in `invalid escape string`. This issue is triggered by derived queries (such as `findByNameLike`) and by JPQL queries that do not explicitly specify an escape character. The root cause of this difference is that B mode does not support the backslash as a string escape character. This is the same known difference documented in the community (see issue #504 in the Plugin repository). **Workaround: explicitly specify `escape '!'` in the JPQL query** (as in `searchByName` above). This issue is independent of the driver version (the behavior is the same with 8.0.28 and 9.7.0).
2. **ddl-auto=update fails silently**. When Hibernate starts, querying `information_schema.KEYWORDS` (uppercase) fails (only a warning HHH000339 is issued). Under the default configuration (`dolphin.lower_case_table_names=0`), the database is case-sensitive, and uppercase KEYWORDS reports `relation "information_schema.KEYWORDS" does not exist` (the view exists and lowercase keywords can be queried), which prevents schema comparison: the container starts successfully but missing tables are not created, and `relation does not exist` is reported only at runtime. **After setting `dolphin.lower_case_table_names` to 1 and persisting it** (append `dolphin.lower_case_table_names = 1` to postgresql.conf and restart), uppercase KEYWORDS can be queried normally (verified), `DatabaseMetaData.getTables` is verified to work, and Hibernate metadata detection is no longer blocked by the case issue. When this parameter is not set, it is recommended to create tables manually in B mode with `ddl-auto: none`. Although ddl-auto=validate does not report an error, the validation depth is also affected by this issue;
3. **Database object naming**: In entity mapping, Hibernate 6 automatically adds backticks to reserved words (such as `user`), so no manual handling is required. When writing SQL manually, use backticks `` ` `` for table names and column names;
4. **Type mapping**: TINYINT(1)/BIT(1) maps to Boolean by default, and BigDecimal/LocalDate/LocalDateTime/String all round-trip correctly. DATETIME maps to LocalDateTime, and TIMESTAMP maps to Timestamp;
5. **Limited JDBC metadata APIs**: Under the default configuration (`dolphin.lower_case_table_names=0`), APIs such as `getTables` that depend on information_schema.TABLES/PARAMETERS report `relation "information_schema.TABLES" does not exist` (the views themselves all exist and can be queried in lowercase), affecting ORM features that rely on metadata detection. **After setting `dolphin.lower_case_table_names=1` and persisting it, `DatabaseMetaData.getTables` is verified to work normally** (see item 2 for the configuration method);
6. **Zero dates and isolation levels**: Storage of zero dates (`0000-00-00`) is controlled by `no_zero_date` in `dolphin.sql_mode` (enabled by default to reject them; they can be stored after removing it). The three `zeroDateTimeBehavior` read behaviors are verified to take effect (convertToNull reads as null, exception throws Zero date value prohibited, and round reads as 0001-01-01). SERIALIZABLE is mapped to REPEATABLE_READ;
7. **Version range**: Through matrix testing across 7 driver versions (8.0.28 to 26.7.0), the behaviors described above are consistent item by item and are all independent of the driver version.

## Related Resources

- For the non-ORM JDBC usage, see [Spring Boot connection example](springboot_development.md);
- For the MyBatis usage, see [Mybatis connection example](mybatis_development.md).
