# SET TRANSACTION

## 功能说明

本语句用于配置事务的隔离级别。事务隔离级别定义了当前事务的行为对其他并发执行事务的可见性。用户可通过调整隔离级别，提高对其他未提交事务的可见性，从而提升数据库的并发处理能力。

## 使用须知

会话级事务隔离级别仅可在事务启动前配置，事务执行过程中不允许修改隔离级别。

## 语法结构

-- 会话级
SET TRANSACTION ISOLATION LEVEL { SERIALIZABLE | READ COMMITTED | CURRENT COMMITTED }

-- 全局
ALTER SYSTEM SET DB_ISOLEVEL={ RC | CC }
SHOW PARAMETER DB_ISOLEVEL

### 参数解释

-- 会话级

 SERIALIZABLE
 事务隔离的最高级别，可实现事务之间的完全隔离。

 READ COMMITTED
 默认隔离级别，可确保不会读取到脏数据；单个 SQL 语句内读取的数据为同一版本的快照数据。

 CURRENT COMMITTED
 单个 SQL 语句内读取的数据中，每一行均为读取时刻最新的已提交数据，读取结果不再是快照数据。

-- 全局级

 DB_ISOLEVEL
 配置事务隔离级别，确保不会读取到未提交的脏数据。

 RC
 Read Committed，即读已提交，单个 SQL 语句内读取的数据为同一版本的快照数据，该级别为默认隔离级别。

 CC
 Current Committed，即当前已提交，单个 SQL 语句内读取的每一行数据均为读取时刻最新的已提交数据，读取结果不再是快照数据。

## 样例

### 配置会话级事务隔离级别

--删除表

DROP TABLE IF EXISTS salary_2025;

--创建表

CREATE TABLE salary_2025(id INT NOT NULL, name CHAR(50), job VARCHAR(30), salary NUMBER);

--在事务未开始执行前设置隔离级别为READ COMMITED

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

--在事务中执行语句1

INSERT INTO salary_2025(id, name, job, salary) VALUES(23,'liubei','manager',10000);

--在事务中执行语句2

INSERT INTO salary_2025(id, name, job, salary) VALUES(24,'guanyu','tester',8000);

--在事务中执行语句3

INSERT INTO salary_2025(id, name, job, salary) VALUES(25,'zhangfei','developer',8000);

--提交整个事务

COMMIT;

### 配置全局事务隔离级别

--查询事务中的全局隔离级别

SHOW PARAMETER DB_ISOLEVEL;

--设置事务的全局隔离级别为READ COMMITED;

ALTER SYSTEM SET DB_ISOLEVEL= RC;

--在事务中执行语句1

DROP TABLE IF EXISTS salary_2025;

--在事务中执行语句2

CREATE TABLE salary_2025(id INT NOT NULL, name CHAR(50), job VARCHAR(30), salary NUMBER);

--在事务中执行语句3

INSERT INTO salary_2025(id, name, job, salary) VALUES(23,'liubei','manager',10000);

--提交整个事务

COMMIT;
