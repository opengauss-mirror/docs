# ROLLBACK

## 功能说明

该语句用于撤销当前事务中的所有操作，并终止该事务。

## 使用须知

建议用户在退出程序时，优先使用COMMIT（提交）或ROLLBACK（回滚）命令显示确认事务状态。若未主动执行提交操作且程序非正常关闭，
数据库将自动撤销所有未保存的修改，保证数据一致性。

对于DML的事务操作，需要显式commit/rollback，事务才会提交/回滚；有一种特例：若有DDL操作，当执行一个DDL语句时，
在此之前的所有未提交的DML操作都会被自动提交。同时若DML操作时，中间有失败，不影响后面DML的继续执行和事务回滚操作。

在一个DDL语句后，不能对之前的DML操作进行回滚。同时对于DDL操作，成功会自动提交，失败会自动回滚，
无需用户显式commit/rollback，成功执行后不能回滚。

不支持CREATE TABLESPACE和ALTER TABLESPACE两种DDL语句的回滚。

## 语法结构

ROLLBACK [ TRANSACTION | TO SAVEPOINT savepoint_name ]

### 参数解释

TRANSACTION：显示回滚事务
TO SAVEPOINT：回滚至保存点
savepoint_name：保存点名称

## 样例

创建表topics，写入数据后，撤销所有操作并终止该事务。

--删除表topics

DROP TABLE IF EXISTS topics;

--创建表topics

CREATE TABLE topics(topic_id CHAR(2) NOT NULL, topic_name CHAR(16) NOT NULL, attendees INT);

--往表topics中写入数据1

INSERT INTO topics(topic_id, topic_name, attendees) VALUES('0A', 'peace', 100);

--往表topics中写入数据2

INSERT INTO topics(topic_id, topic_name, attendees) VALUES('0B', 'develop', 200);

--回退事务

ROLLBACK;