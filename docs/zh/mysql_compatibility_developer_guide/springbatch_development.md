---
url: /zh/docs/latest/mysql_compatibility_developer_guide/springbatch_development.md
---
# Spring Batch 连接示例

openGauss 的 dolphin 插件实现了 MySQL 协议兼容。用户在数据库服务端开启 `enable_dolphin_proto` 后，可以在 Spring Batch 应用中直接使用 MySQL 的 JDBC 驱动连接 openGauss 的 B 兼容模式数据库，获得接近原生 MySQL 的开发体验。

本文介绍使用 Spring Batch 5.2（基于 Spring Boot 3.x）配合 MySQL JDBC 驱动（mysql-connector-j）连接 openGauss B 库构建批处理作业的方法，包括环境准备、项目搭建，作业与分块处理/容错/监听器/多步骤/失败重启/分页读/条件流/晚绑定/元数据查询示例代码，以及注意事项与已知限制。

## 环境准备

> 本节的 openGauss 环境配置命令与 Spring Boot 连接示例 一致，若按该文档完成环境配置，可跳过本节。

### 准备业务表结构

1. 通过 openGauss 命令行工具 gsql 连接 openGauss 数据库

   ```bash
   gsql -d postgres -p 5432 -r
   ```

2. 切换至 MySQL 协议兼容配置的 B 库下

   ```sql
   \c mysql_test_db
   ```

3. 创建 MySQL JDBC url 连接串中指定的 database。在 B 库下，openGauss 的 schema 等价于 MySQL 的 database

   ```sql
   CREATE SCHEMA mysql_test_db;
   ```

4. 切换 schema，并创建业务表结构

   ```sql
   SET current_schema to mysql_test_db;

   CREATE TABLE `user` (
       `id`   INT AUTO_INCREMENT PRIMARY KEY,
       `name` VARCHAR(50) COMMENT '用户名',
       `age`  INT COMMENT '年龄'
   ) DEFAULT CHARSET=utf8mb4;

   INSERT INTO `user` (`name`, `age`) VALUES
       ('张三', 20),
       ('李四', 30),
       ('王五', 40);
   ```

   批处理作业的元数据表（BATCH_* 共 9 张）由 Spring Batch 框架在应用启动时依据 `schema-mysql.sql` 自动创建，无需手工准备。

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

3. 切换至 MySQL 协议兼容配置的 B 库下

   ```sql
   \c mysql_test_db
   ```

4. 新用户设置 MySQL 协议认证密码

   dolphin 插件提供两种认证密码：`set_native_password` 对应 MySQL 5.7 的 mysql_native_password（对密码做双重 SHA-1），`set_caching_sha2_password` 对应 MySQL 8.0 默认的 caching_sha2_password（SHA-256，salt 由服务端自动生成）。客户端握手时，服务端与 MySQL 8.0 一样始终以 `caching_sha2_password` 作为认证插件进行协商，MySQL 5.7 客户端会通过认证切换回退到 mysql_native_password。两种密码写入同一个字段，后执行者覆盖先执行者，客户端按握手协商结果使用对应密码即可。

   ```sql
   SELECT set_native_password('mysql_test_db', '******', '');
   -- MySQL 8.0 客户端建议使用（三参：用户、新密码、旧密码）：
   SELECT set_caching_sha2_password('mysql_test_db', '******', '');
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

另外需放行 MySQL 协议端口（默认 `dolphin_server_port = 3308`）的防火墙访问：

```bash
firewall-cmd --zone=public --add-port=3308/tcp --permanent
firewall-cmd --reload
```

更多详细内容请参考，[配置客户端接入认证](https://docs.opengauss.org/zh/docs/latest/database_administration_guide/configuring_client_access_authentication.html)。

## 项目搭建

### 创建 Maven 项目

创建标准 Maven 工程（Spring Boot 3.x 要求 JDK 17+），目录参考如下：

```
springbatch-connect-opengauss-b
├── pom.xml
└── src
    ├── main
    │   ├── java/org/opengauss/batch
    │   │   ├── BatchApplication.java      # 启动类
    │   │   ├── DataInitRunner.java        # 启动时重建输出表
    │   │   ├── CopyUserJobConfig.java     # 示例作业（分块拷贝转换）
    │   │   ├── ExtraJobsConfig.java       # 容错/监听器/多步骤作业
    │   │   ├── GapJobsConfig.java         # 补测作业（重启恢复/分页读/监听器族/条件流/晚绑定）
    │   │   └── OpenGaussPagingItemReader.java  # 分页读适配子类（规避 B 库 maxRows 限制）
    │   └── resources
    │       └── application.yml            # 数据源与批处理配置
    └── test
        └── java/org/opengauss/batch/      # 测试用例（详见 examples 仓）
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
        <artifactId>spring-boot-starter-batch</artifactId>
    </dependency>
    <dependency>
        <groupId>com.mysql</groupId>
        <artifactId>mysql-connector-j</artifactId>
    </dependency>
</dependencies>
```

> [!NOTE]说明
> MySQL 驱动 8.0.28 及以下使用旧坐标 `mysql:mysql-connector-java`；8.0.31 起使用新坐标 `com.mysql:mysql-connector-j`。Spring Boot 3.x 的 BOM 自动管理新坐标版本（Boot 3.5.16 默认解析 9.7.0），无需显式指定版本号。`spring-boot-starter-batch` 已传递引入 `spring-boot-starter-jdbc`，无需重复声明。经实测，**8.0.28 ~ 26.7.0 各版本在 openGauss B 模式下的批处理全链路（元数据表、分块读写、容错、重启恢复、分页读、上下文持久化）均可正常工作**。

### 准备配置文件

`application.yml` 数据源与批处理配置示例。注意 **端口是 dolphin 协议端口（dolphin_server_port，默认 3308），不是 openGauss 原生端口 5432**：

```yaml
spring:
  datasource:
    url: jdbc:mysql://127.0.0.1:3308/mysql_test_db?useSSL=false&serverTimezone=UTC&characterEncoding=utf-8
    username: mysql_test_db
    password: '******'
    driver-class-name: com.mysql.cj.jdbc.Driver
    hikari:
      maximum-pool-size: 10
  batch:
    job:
      enabled: false           # 应用启动时不自动执行作业（测试内用 JobLauncher 手动启动）
    jdbc:
      initialize-schema: always  # 启动时自动创建/重建 BATCH_* 元数据表
      platform: mysql            # 使用框架自带的 MySQL 版建表脚本 schema-mysql.sql
```

## 示例代码

### 作业与分块处理

定义一个 chunk 分块作业：从 `` `user` `` 表逐行读取，名字转大写、年龄加一，批量写入 `user_batch_out` 表，每 2 行一个事务提交：

```java
@Configuration
public class CopyUserJobConfig {

    public record UserRow(int id, String name, int age) {}

    @Bean
    public Job copyUserJob(JobRepository jobRepository, Step copyUserStep) {
        return new JobBuilder("copyUserJob", jobRepository)
                .incrementer(new RunIdIncrementer())   // 每次运行携带不同 run.id，避免实例冲突
                .start(copyUserStep)
                .build();
    }

    @Bean
    public Step copyUserStep(JobRepository jobRepository, PlatformTransactionManager tx) {
        return new StepBuilder("copyUserStep", jobRepository)
                .<UserRow, UserRow>chunk(2, tx)        // 每 2 行一个事务
                .reader((ItemReader<UserRow>) new JdbcCursorItemReaderBuilder<UserRow>()
                        .name("userReader")
                        .dataSource(dataSource)
                        .sql("SELECT id, name, age FROM `user` ORDER BY id")
                        .rowMapper((rs, i) -> new UserRow(rs.getInt("id"), rs.getString("name"), rs.getInt("age")))
                        .build())
                .processor(row -> new UserRow(row.id(), row.name().toUpperCase(), row.age() + 1))
                .writer(new JdbcBatchItemWriterBuilder<UserRow>()
                        .dataSource(dataSource)
                        .sql("INSERT INTO user_batch_out (id, name, age) VALUES (?, ?, ?)")
                        .itemPreparedStatementSetter((row, ps) -> {
                            ps.setInt(1, row.id());
                            ps.setString(2, row.name());
                            ps.setInt(3, row.age());
                        })
                        .build())
                .build();
    }
}
```

启动作业：

```java
@Autowired
private JobLauncher jobLauncher;
@Autowired
@Qualifier("copyUserJob")
private Job copyUserJob;

JobExecution ex = jobLauncher.run(copyUserJob,
        new JobParametersBuilder().addString("run.id", "run-" + System.currentTimeMillis())
                .toJobParameters());
System.out.println(ex.getStatus());   // COMPLETED
```

> [!NOTE]说明
> Spring Boot 3.x 下 `spring-boot-starter-batch` 通过 `BatchAutoConfiguration` 自动装配 `JobRepository` / `JobLauncher` / `PlatformTransactionManager`，无需 `@EnableBatchProcessing`（该注解自 Spring Batch 5 起改为显式配置模式，Boot 自动装配场景无需添加）。

### 容错：跳过与重试

chunk 步骤开启容错后，坏行可被跳过或重试，作业继续完成：

```java
// 跳过指定异常的行（写入侧对好行照常提交）
step = new StepBuilder("skipStep", jobRepository)
        .<UserRow, UserRow>chunk(2, tx)
        .reader(reader)
        .processor(row -> {
            if ("SKIP_ME".equals(row.name())) throw new IllegalArgumentException("bad row");
            return row;
        })
        .writer(writer)
        .faultTolerant()
        .skip(IllegalArgumentException.class)
        .skipLimit(100)
        .build();

// 临时性异常按行重试（retryLimit 为总尝试次数，含首次）
step = new StepBuilder("retryStep", jobRepository)
        .<UserRow, UserRow>chunk(2, tx)
        .reader(reader)
        .processor(row -> {
            if ("RETRY_ME".equals(row.name()) && firstAttempt) {
                firstAttempt = false;
                throw new IllegalStateException("transient error");
            }
            return row;
        })
        .writer(writer)
        .faultTolerant()
        .retry(IllegalStateException.class)
        .retryLimit(2)
        .build();
```

### 监听器与执行上下文

`JobExecutionListener` 可在作业开始前写入执行上下文、结束后读回；执行上下文随作业结束持久化到 `BATCH_JOB_EXECUTION_CONTEXT` / `BATCH_STEP_EXECUTION_CONTEXT` 表：

```java
@Bean
public Job listenerJob(JobRepository jobRepository, Step step, AtomicReference<String> seen) {
    return new JobBuilder("listenerJob", jobRepository)
            .listener(new JobExecutionListener() {
                @Override
                public void beforeJob(JobExecution jobExecution) {
                    jobExecution.getExecutionContext().putString("listener.marker", "hello-batch");
                }

                @Override
                public void afterJob(JobExecution jobExecution) {
                    seen.set(jobExecution.getExecutionContext().getString("listener.marker"));
                }
            })
            .start(step)
            .build();
}
```

### 多步骤作业

多个 Step 按 `next()` 声明的顺序依次执行，后续步骤可读取前序步骤的产物：

```java
@Bean
public Job twoStepJob(JobRepository jobRepository, Step step1Copy, Step step2CountTasklet) {
    return new JobBuilder("twoStepJob", jobRepository)
            .incrementer(new RunIdIncrementer())
            .start(step1Copy)
            .next(step2CountTasklet)   // step2 内部校验 step1 的输出表非空
            .build();
}
```

### 失败重启与断点恢复

作业中途失败后，可用 `JobOperator.restart` 复用原参数从断点继续执行，已提交的 chunk 不会重复处理：

```java
// 作业定义不要加 RunIdIncrementer：重启必须复用首轮的 JobParameters
@Bean
public Job restartJob(JobRepository jobRepository, Step restartStep) {
    return new JobBuilder("restartJob", jobRepository).start(restartStep).build();
}

// 首轮运行（处理器在第 4 行抛错模拟中途失败）：
JobExecution first = jobLauncher.run(restartJob,
        new JobParametersBuilder().addString("run.id", "restart-" + System.currentTimeMillis())
                .toJobParameters());
System.out.println(first.getStatus());   // FAILED（JobLauncher.run 对业务失败不抛异常，需按返回状态判断）

// 修复数据、关闭故障开关后重启：复用原参数，从最后提交的 chunk 后断点续跑
long reId = jobOperator.restart(first.getId());
```

实测（6 行源、chunk=2、第 4 行失败）：重启后 READ=WRITE=4（跳过首轮已提交的 2 行续读）、COMMIT=3，输出 6 行齐；同一 JobInstance 下产生 2 个执行记录（首败 + 重启成功）。

> [!NOTE]说明
> 失败作业的重启恢复依赖失败路径的元数据正常落库（状态 FAILED、EXIT_MESSAGE 可写）。EXIT_MESSAGE 列声明为 VARCHAR(2500)，失败栈超长时会被严格校验拒绝（与 MySQL 严格模式一致，见注意事项第 2 条）；如需完整记录失败信息，请先按该条放大该列再启用失败重启场景。

### 分页读：JdbcPagingItemReader

`JdbcPagingItemReader` 按 MySQL 方言生成 `SELECT ... ORDER BY id LIMIT ? OFFSET ?` 分页 SQL，B 库解析正常。但其初始化时调用 `jdbcTemplate.setMaxRows(pageSize)`，MySQL Connector/J 用会话变量 `SET sql_select_limit` 实现该语义，而 B 库不识别该变量（error 28804），导致分页读取失败。规避方式：继承 `JdbcPagingItemReader`，初始化完成后经反射把 JDBC 层 maxRows 归零——每页行数已由 SQL 自身的 `LIMIT` 限定，归零不影响分页语义：

```java
public class OpenGaussPagingItemReader<T> extends JdbcPagingItemReader<T> {
    @Override
    public void afterPropertiesSet() throws Exception {
        super.afterPropertiesSet();
        Field f = JdbcPagingItemReader.class.getDeclaredField("namedParameterJdbcTemplate");
        f.setAccessible(true);
        NamedParameterJdbcTemplate tpl = (NamedParameterJdbcTemplate) f.get(this);
        ((JdbcTemplate) tpl.getJdbcOperations()).setMaxRows(0);
    }
}
```

使用方式：

```java
MySqlPagingQueryProvider provider = new MySqlPagingQueryProvider();
provider.setSelectClause("id, name, age");
provider.setFromClause("src_page");
provider.setSortKeys(Map.of("id", Order.ASCENDING));

OpenGaussPagingItemReader<UserRow> reader = new OpenGaussPagingItemReader<>();
reader.setDataSource(dataSource);
reader.setQueryProvider(provider);
reader.setPageSize(20);
reader.setRowMapper((rs, n) -> new UserRow(rs.getInt("id"), rs.getString("name"), rs.getInt("age")));
reader.afterPropertiesSet();   // 工厂内 new 的 reader 非 bean，无生命周期回调，需手动初始化
```

实测（100 行源、pageSize=20、chunk=20）：按 5 页读全，READ=WRITE=100、COMMIT_COUNT=6（5 满页 + 末次空读 1 次空提交）。如无需分页语义，也可直接用 `JdbcCursorItemReader` 逐行游标读取规避此问题。

### 监听器族

Step 上可同时挂载步骤级、chunk 级、条目级监听器；配合容错时，监听器回调遵循框架的重试语义：

```java
step = new StepBuilder("moreListenersStep", jobRepository)
        .<UserRow, UserRow>chunk(2, txManager)
        .reader(reader).processor(processor).writer(writer)
        .listener(stepExecutionListener)   // beforeStep / afterStep：每个 step 执行各一次
        .listener(chunkListener)           // beforeChunk / afterChunk：按 chunk 事务回调
        .listener(itemProcessListener)     // beforeProcess / afterProcess / onProcessError：按条目
        .faultTolerant()
        .skip(IllegalArgumentException.class)
        .listener(skipListener)            // onSkipInRead / onSkipInProcess / onSkipInWrite
        .build();
```

> [!NOTE]说明
> 带坏行的 chunk 首轮会整体失败回滚，TaskletStep 重试该 chunk 时好行会重新处理、坏行被跳过：实测 3 好行 + 2 坏行，`afterProcess` 触发 5 次（good1/good2 各 2 次、good3 1 次，坏行跳过不触发）、`beforeChunk` 5 次（每次 chunk 尝试各一次）、`afterChunk` 3 次（仅成功提交的尝试触发）；元数据为 ROLLBACK=2 / COMMIT=3 / PROCESS_SKIP=2 / READ=5 / WRITE=3。若需对每次成功的处理恰好回调一次，请为坏行安排专属 chunk 或改用记录级容错策略。

### 条件流

按 Step 的退出状态（ExitStatus）声明分支，`on("FAILED")` 走回退分支、`on("*")` 兜底其余状态：

```java
job = new JobBuilder("conditionalFlowJob", jobRepository)
        .start(flowStepA)
        .on("FAILED").to(flowFallbackStep)              // stepA 置 ExitStatus.FAILED 时走回退分支
        .from(flowStepA).on("*").to(flowSuccessStep)    // 其余状态走成功分支
        .end()
        .build();

// step 内可通过 contribution.setExitStatus(ExitStatus.FAILED) 显式指定退出状态，
// 分支依据该状态判定，并与 BATCH_STEP_EXECUTION.EXIT_CODE 落库值一致
```

实测两种分支下作业最终状态均为 COMPLETED（fallback/success 步骤本身正常完成），BATCH_STEP_EXECUTION 按 [flowStepA, 分支步骤] 顺序落两行。

### 晚绑定：@StepScope / @JobScope

用 `@JobScope` / `@StepScope` 把作业参数、步骤作用域对象延迟到运行期再解析，可动态指定 chunk 大小等运行参数：

```java
@Bean
@JobScope   // job 启动时才创建，chunk size 由作业参数晚绑定（缺省 2）
public Step lbStep(JobRepository jobRepository, PlatformTransactionManager txManager,
                   DataSource dataSource, JdbcCursorItemReader<UserRow> lbReader,
                   @Value("#{jobParameters['chunkSize']}") Integer chunkSize) {
    return new StepBuilder("lbStep", jobRepository)
            .<UserRow, UserRow>chunk(chunkSize == null ? 2 : chunkSize, txManager)
            .reader(lbReader).writer(writer)
            .build();
}

@Bean
@StepScope   // 每个 step 执行时创建（游标每次打开）
public JdbcCursorItemReader<UserRow> lbReader(DataSource dataSource) { /* ... */ }
```

晚绑定代理直到作业运行才解析，应用启动期不会触发 "Scope 'step' is not active" 异常。实测以 `chunkSize=3` 启动时 9 行源切 3 个满 chunk、COMMIT_COUNT=4（3 满 + 末次空读 1 次空提交）。

### 元数据查询：JobExplorer / JobOperator

`JobExplorer` / `JobOperator` 提供对 BATCH_* 元数据表的读路径，无需直接写 SQL：

```java
List<JobInstance> instances = jobExplorer.getJobInstances("copyUserJob", 0, 10);  // 最新在前
JobInstance latest = instances.get(0);
List<JobExecution> executions = jobExplorer.getJobExecutions(latest);   // 含各步骤执行

Set<String> jobNames = jobOperator.getJobNames();               // 经 JobRegistry 解析
Map<Long, String> summaries = jobOperator.getStepExecutionSummaries(ex.getId());
```

## 示例运行日志

```
[INFO] Tests run: 18, Failures: 0, Errors: 0, Skipped: 0
[INFO] BUILD SUCCESS
[CASE] user_batch_out 表已重建
[CASE] copyUserJob 完成: 输出 3 行 = 源 3 行, status=COMPLETED
[CASE] BATCH_JOB_INSTANCE/EXECUTION/STEP_EXECUTION/PARAMS 各 +1
[CASE] skip 作业完成: READ=5, WRITE=3, PROCESS_SKIP=2
[CASE] 2500 字符纯 ASCII 插入 VARCHAR(2500) 成功
[CASE] 重启恢复: 首轮 FAILED(EXIT_MESSAGE 2550 字符落库), restart 后 COMPLETED, READ=WRITE=4, COMMIT=3
[CASE] 分页读: 100 行 pageSize=20, READ=WRITE=100, COMMIT_COUNT=6
[CASE] 监听器族: afterProcess=5 [good1,good1,good2,good2,good3], beforeChunk=5, afterChunk=3
[CASE] 条件流: FAILED→fallback / *→success 均 COMPLETED
[CASE] 晚绑定: chunkSize=3 晚绑定, COMMIT_COUNT=4, mark=lb-ok
[CASE] JobExplorer/JobOperator 实例、执行、步骤摘要查询正常
```

## 注意事项与已知限制

1. **元数据表自动初始化**：`spring.batch.jdbc.initialize-schema=always` + `platform=mysql` 会在启动时依据框架自带 `schema-mysql.sql` 自动创建 9 张 BATCH_* 元数据表。实测该脚本中 MySQL 特有的 `ENGINE=InnoDB` 子句、`TIMESTAMP DEFAULT '0000-00-00 00:00:00'` 零日期默认值在 DDL 层均被 B 模式接受，建表正常（Spring Batch 对 BATCH_* 表均显式列名写入，不依赖该默认值；零日期数据的实际存储由 `dolphin.sql_mode` 的 `no_zero_date` 控制，默认拒绝，详见 Spring Boot 连接示例的注意事项）；
2. **失败作业的元数据记录**：EXIT_MESSAGE 列声明为 VARCHAR(2500)，作业失败时框架写入的异常栈超过该长度即被拒绝（`value too long for type character varying(2500)`，error 130），与 MySQL 严格模式（STRICT_TRANS_TABLES）行为一致，此时 job/step 状态会停留 STARTED。如需完整保留失败信息，可放大该列（`ALTER TABLE BATCH_JOB_EXECUTION MODIFY EXIT_MESSAGE VARCHAR(10000)`，BATCH_STEP_EXECUTION 同理），或在 `afterJob` 中截断 exitDescription；
3. **分页读的 maxRows 机制（error 28804）**：`JdbcPagingItemReader` 初始化时调用 `jdbcTemplate.setMaxRows(pageSize)`，MySQL Connector/J 用会话变量 `SET sql_select_limit = n` 实现该语义，而 B 库不识别该变量（`unrecognized configuration parameter "sql_select_limit"`），导致分页读取失败（MySQL 上正常）。规避：继承 `JdbcPagingItemReader` 在初始化后把 JDBC 层 maxRows 归零（每页行数已由分页 SQL 自身的 `LIMIT` 限定，不影响分页语义），见"分页读"示例；或改用 `JdbcCursorItemReader` 逐行游标读取；
4. **执行上下文的存储格式**：Spring Batch 5.2 将执行上下文以 base64(Java 序列化) 存于 SHORT_CONTEXT 列，SERIALIZED_CONTEXT 列为 NULL（框架版本行为）。如需在 SQL 侧读取上下文中的业务键，请先对 SHORT_CONTEXT 做 base64 解码，或通过 `JobExplorer` / `StepExecution` API 读取；
5. **框架语义须知**：`retryLimit(n)` 为总尝试次数（含首次），如需"重试 n 次"请设 `retryLimit(n+1)`；chunk 读到末次空结果时框架会额外提交一次空事务（COMMIT_COUNT 比满 chunk 数多 1）；带坏行的 chunk 首轮整体回滚后重试时好行会重新处理（监听器按每次尝试回调），属框架正常行为；
6. **VARCHAR 长度语义**：B 模式 VARCHAR(n) 按字符计（与 MySQL 一致），中文等多字节字符不额外占用列容量；
7. **端口与对象命名**：MySQL 协议使用 `dolphin_server_port`（默认 3308），连 5432 原生口会报 `Communications link failure`；表名/列名使用反引号 `` ` ``（`user` 是 MySQL 保留字，必须加反引号）；
8. **驱动版本范围**：经 8 档驱动（8.0.28 ~ 26.7.0）矩阵实测，批处理链路行为一致；8.0.28 及以下使用旧 Maven 坐标 `mysql:mysql-connector-java`；
9. **更多基础场景限制**：零日期、隔离级别映射、`information_schema` 表名大小写（`dolphin.lower_case_table_names`）、JDBC 参数行为等说明见 Spring Boot 连接示例 的注意事项与已知限制。

## 相关资源

- 基础连接/CRUD/事务/批量使用方式见 Spring Boot 连接示例；
- MyBatis 使用方式见 [Mybatis 连接示例](mybatis_development.md)。
