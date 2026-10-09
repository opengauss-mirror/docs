---
url: /zh/docs/latest/mysql_compatibility_developer_guide/springdatajpa_development.md
---
# SpringDataJPA 连接示例

openGauss 的 dolphin 插件实现了 MySQL 协议兼容。用户在数据库服务端开启 `enable_dolphin_proto` 后，可以在 Spring Data JPA 应用中直接使用 MySQL 的 JDBC 驱动连接 openGauss 的 B 兼容模式数据库。

本文介绍使用 Spring Boot 3.x + Spring Data JPA（Hibernate 6）配合 MySQL JDBC 驱动连接 openGauss B 库的方法，包括环境准备、项目搭建、实体映射/分页/事务示例代码，以及注意事项与已知限制。

## 环境准备

环境准备（业务表、连接用户、客户端接入认证）与 [Spring Boot 连接示例](springboot_development.html) 一致，此处不再赘述。要点回顾：

- B 库下 openGauss 的 schema 等价于 MySQL 的 database，JDBC url 中的 database 即 schema 名；
- 连接用户需执行 `set_native_password` 或 `set_caching_sha2_password` 设置 MySQL 协议认证密码（服务端握手始终以 `caching_sha2_password` 协商，MySQL 5.7 客户端自动回退 native）；
- MySQL 协议端口为 `dolphin_server_port`（默认 3308）。

## 项目搭建

### 创建 Maven 项目

创建标准 Maven 工程（Spring Boot 3.x 要求 JDK 17+），目录参考如下：

```
springdatajpa-connect-opengauss-b
├── pom.xml
└── src
    ├── main
    │   ├── java/org/opengauss/smoke
    │   │   ├── SmokeApplication.java        # 启动类
    │   │   ├── User.java                    # 实体类
    │   │   ├── UserRepository.java          # 仓储接口
    │   │   └── OpenGaussBMySQLDialect.java  # 自定义方言（适配点）
    │   └── resources
    │       └── application.yml              # 数据源 + JPA 配置
    └── test
        └── java/org/opengauss/smoke/jpacases/  # 测试用例（详见 examples 仓）
```

### 添加依赖

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

> [!NOTE]说明
> MySQL 驱动 8.0.28 及以下使用旧坐标 `mysql:mysql-connector-java`；8.0.31 起使用新坐标 `com.mysql:mysql-connector-j`。Spring Boot 3.x 的 BOM 自动管理新坐标版本。经实测，**8.0.28 ~ 26.7.0 各版本在 JPA 类型映射、主键回填、分页、批量、事务场景行为一致**。

### 准备配置文件

`application.yml` 配置示例。注意 **B 模式下建议手工建表并保持 `ddl-auto: none`**（原因见下文注意事项与已知限制）：

```yaml
spring:
  datasource:
    url: jdbc:mysql://127.0.0.1:3308/mysql_test_db?useSSL=false&serverTimezone=UTC&characterEncoding=utf-8
    username: mysql_test_db
    password: '******'
    driver-class-name: com.mysql.cj.jdbc.Driver
  jpa:
    hibernate:
      # B 模式建议手工建表 + none（ddl-auto=update 会静默失效，详见注意事项）
      ddl-auto: none
    database-platform: org.opengauss.smoke.OpenGaussBMySQLDialect
    show-sql: true
```

自定义方言（继承 MySQL 方言，作为 B 模式适配点保留）：

```java
package org.opengauss.smoke;

import org.hibernate.dialect.MySQLDialect;

/**
 * openGauss B 兼容模式方言。
 * B 模式不支持反斜杠作为转义字符（'\\' 按标准 SQL 视为 2 个字符），
 * 在此声明该语义，作为将来的适配点。
 */
public class OpenGaussBMySQLDialect extends MySQLDialect {
    @Override
    public boolean isNoBackslashEscapesEnabled() {
        return true;
    }
}
```

## 示例代码

### 实体类（注意 import jakarta.persistence，不是 javax）

```java
package org.opengauss.smoke;

import jakarta.persistence.*;

@Entity
@Table(name = "user") // user 是 MySQL 保留字，Hibernate 6 自动为其加反引号，无需手写
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // AUTO_INCREMENT 回填已验证可用
    private Integer id;

    private String name;

    private Integer age;

    // getter / setter 省略
}
```

### 仓储接口与查询

```java
package org.opengauss.smoke;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Integer> {

    /** 派生 LIKE 查询：Hibernate 6.6 默认渲染 escape '\\'（两个反斜杠），B 模式下报 invalid escape string（见注意事项第 1 条）。 */
    Page<User> findByNameLike(String name, Pageable pageable);

    /**
     * LIKE 模糊查询：必须显式 escape '!'。
     * B 模式不认反斜杠单字符转义，Hibernate 6 默认渲染的 escape '\\'（两个反斜杠）
     * 会报 invalid escape string（详见注意事项第 1 条）。
     */
    @Query("select u from User u where u.name like ?1 escape '!'")
    Page<User> searchByName(String pattern, Pageable pageable);
}
```

### 保存与主键回填

```java
User u = new User();
u.setName("赵六");
u.setAge(28);
userRepository.save(u);
System.out.println(u.getId()); // IDENTITY 主键已回填，getGeneratedKeys 链路可用
```

### 分页查询

```java
Page<User> page = userRepository.searchByName("张%",
        PageRequest.of(0, 2, Sort.by("id")));
System.out.println("total=" + page.getTotalElements() + ", rows=" + page.getContent());
```

### 事务回滚

```java
@Transactional
public void batchInsert(boolean rollback) {
    userRepository.save(new User("tx_a", 1));
    userRepository.save(new User("tx_b", 2));
    if (rollback) {
        throw new RuntimeException("force rollback"); // 两条一并回滚
    }
}
```

## 示例运行日志

```
[INFO] Tests run: 10, Failures: 0, Errors: 0, Skipped: 0
[INFO] BUILD SUCCESS
[CASE] M1 五种类型映射往返 + IDENTITY 主键回填 ok
[CASE] P1 分页遍历 3 行数据 ok
[CASE] K2 searchByName(escape '!') 模糊查询 ok
```

## 注意事项与已知限制

1. **LIKE 模糊查询的 escape**。Hibernate 6.6 默认在所有 LIKE 谓词后追加 `escape '\\'`（两个反斜杠）；MySQL 中 `'\\'` 是 1 个字符，而 openGauss B 模式按标准 SQL 把 `'\\'` 视为 2 个字符，导致 `invalid escape string`。派生查询（`findByNameLike`）与未显式指定 escape 的 JPQL 均会触发。该差异的根源是 B 模式不支持反斜杠作为字符串转义字符（与社区已记录的已知差异同源，参见 Plugin 仓 issue #504）。**规避：JPQL 显式 `escape '!'`**（如上文 searchByName）。该问题与驱动版本无关（8.0.28 与 9.7.0 行为一致）；
2. **ddl-auto=update 静默失效**。Hibernate 启动时查询 `information_schema.KEYWORDS`（大写）失败（仅警告 HHH000339）——默认配置（`dolphin.lower_case_table_names=0`）下大小写敏感，大写 KEYWORDS 报 `relation "information_schema.KEYWORDS" does not exist`（视图存在、小写 keywords 可查），导致 schema 对比无法进行：容器启动成功但缺失的表不会被创建，运行时才报 `relation does not exist`。**将 `dolphin.lower_case_table_names` 设为 1 并持久化**（postgresql.conf 追加 `dolphin.lower_case_table_names = 1` 后重启）后，大写 KEYWORDS 可正常查询（实测）、`DatabaseMetaData.getTables` 实测可用，Hibernate 的元数据探测不再受大小写问题阻断；未设置该参数时建议 B 模式手工建表 + `ddl-auto: none`。ddl-auto=validate 虽未报错，但校验深度同样受该问题影响；
3. **数据库对象命名**：实体映射中 Hibernate 6 会自动为保留字（如 `user`）加反引号，无需手写；手写 SQL 时表名/列名使用反引号 `` ` ``；
4. **类型映射**：TINYINT(1)/BIT(1) 默认映射 Boolean，BigDecimal/LocalDate/LocalDateTime/String 均可正常往返；DATETIME 映射 LocalDateTime，TIMESTAMP 映射 Timestamp；
5. **JDBC 元数据 API 受限**：默认配置（`dolphin.lower_case_table_names=0`）下，`getTables` 等依赖 information_schema.TABLES/PARAMETERS 的 API 报 `relation "information_schema.TABLES" does not exist`（视图本身均存在、小写可查），依赖元数据探测的 ORM 功能受影响。**设置 `dolphin.lower_case_table_names=1` 并持久化后，实测 `DatabaseMetaData.getTables` 恢复正常**（设置方法见第 2 条）；
6. **零日期与隔离级别**：零日期（`0000-00-00`）存储由 `dolphin.sql_mode` 的 `no_zero_date` 控制（默认开启拒绝，去掉后可存储）；`zeroDateTimeBehavior` 三档读取行为实测生效（convertToNull 读为 null、exception 抛 Zero date value prohibited、round 读为 0001-01-01）；SERIALIZABLE 被映射为 REPEATABLE_READ；
7. **版本范围**：经 7 档驱动（8.0.28 ~ 26.7.0）矩阵实测，上述行为逐项一致，均与驱动版本无关。

## 相关资源

- 非 ORM 的 JDBC 使用方式见 [Spring Boot 连接示例](springboot_development.md)；
- MyBatis 使用方式见 [Mybatis 连接示例](mybatis_development.md)。
