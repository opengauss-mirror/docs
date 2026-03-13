# LOCK TABLE

## 功能说明

本语句用于对数据库表执行锁定操作。

## 使用须知

-- 执行本语句的用户需具备LOCK ANY TABLE系统权限，sys用户、表的属主用户除外

-- LOCK TABLE命令仅可在事务内执行，事务执行commit或rollback时，锁定的表会自动解锁

## 语法结构

LOCK TABLE { [ schema_name. ]table_name } [ , ... ] IN lockmode MODE

其中lockmode子句取值为：{ SHARE | EXCLUSIVE }

### 参数解释

-- [ schema_name. ]：即模式所属用户名，未显式指定时，默认取值为当前登录用户。

-- table_name：待锁定的表名称，可携带模式名前缀；语法中声明的表顺序即为加锁顺序，取值范围为已存在的表名。

-- SHARE：共享锁，允许并发执行查询、增删改等 DML 操作，但禁止对表结构执行修改（即 DDL 操作）；除显式加锁外，DML 语句会自动申请该类型锁。

-- EXCLUSIVE：排他锁，仅允许对目标表执行并发查询，禁止其他所有操作；该锁模式除显式添加外，修改表结构的 DDL 命令会自动在用户表上申请，部分操作也会在系统表上申请。

## 样例

锁定表salary_2025

--删除表salary_2025

DROP TABLE IF EXISTS salary_2025;

--创建表salary_2025

CREATE TABLE salary_2025(id INT NOT NULL, name CHAR(50), job VARCHAR(30), salary NUMBER);

--锁定表salary_2025

LOCK TABLE salary_2025 IN SHARE MODE;

--向表salary_2025中插入数据

INSERT INTO salary_2025(id, name, job, salary) VALUES(23,'liubei','manager',10000);

--向表salary_2025中插入数据

INSERT INTO salary_2025(id, name, job, salary) VALUES(24,'guanyu','tester',8000);

--向表salary_2025中插入数据

INSERT INTO salary_2025(id, name, job, salary) VALUES(25,'zhangfei','developer',8000);

--提交

COMMIT;
