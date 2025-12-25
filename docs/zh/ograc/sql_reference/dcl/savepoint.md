# SAVEPOINT

## 功能说明

SAVEPOINT是数据库事务管理中的关键功能，允许在事务内部设置多个回滚标记点，实现事务的部分回滚能力。其核心价值在于提升事务的灵活性和容错性。

## 使用须知

回滚到保存点时，数据库会丢弃从该保存点之后的所有操作，但会保留该保留点之前已执行的修改。

## 语法结构

SAVEPOINT savepoint_name

### 参数解释

savepoint_name：保存点名。

## 样例

回滚事务到保存点

--删除表reward_2025

DROP TABLE IF EXISTS reward_2025;

--创建表reward_2025

CREATE TABLE reward_2025(employee_id INT NOT NULL, employee_name CHAR(50), money_award NUMBER);

--写入数据1

INSERT INTO reward_2025(employee_id, employee_name, money_award) VALUES(1, 'zhangsan', 1200);

--设置保存点1

SAVEPOINT sn1;

--写入数据2

INSERT INTO reward_2025(employee_id, employee_name, money_award) VALUES(2, 'lisi', 2200);

--设置保存点2

SAVEPOINT sn2;

--查询表reward_2025的数据

SELECT * FROM reward_2025;

--回滚到保存点1

ROLLBACK TO SAVEPOINT sn1;

--查询表reward_2025的数据

SELECT * FROM reward_2025;

预期只能查到保存点1之前写入的数据1：

EMPLOYEE_ID  EMPLOYEE_NAME                                      MONEY_AWARD                             
------------ -------------------------------------------------- ----------------------------------------
1            zhangsan                                           1200                                    

1 rows fetched.