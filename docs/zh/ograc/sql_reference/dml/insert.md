# 插入数据INSERT
INSERT主要用于再数据库表中插入新的数据行。

## 基本语法
最基本的 INSERT 语句形式如下：
```SQL
INSERT INTO [schema.]table_name [(column1, column2, ..., columnN)] 
VALUES (value1, value2, ..., valueN)[, (value1, value2, ..., valueN)];
```
- INSERT INTO ··· VALUES: 关键字，指示要执行插入操作。
- table_name: 要插入数据的目标表的名称。
- [schema.]: (可选) 指定表所属Schema。如果省略，默认为当前用户的Schema。
- (column1, column2, ..., columnN): (可选) 指定要插入值的列的列表。SQL语句中明确指定列时可提高语句可读性和健壮性。即使表结构发生变化，只要不涉及这些指定的列，此 INSERT 语句仍然有效。列的顺序不必与表定义中的物理顺序一致，但提供的 VALUES 必须与这里的列顺序一一对应。
- (value1, value2, ..., valueN): 提供要插入到指定列中的具体值，值的数量和顺序必须与 column_list 中指定的列相匹配。
- [, (value1, value2, ..., valueN)]: (可选) 可以同时插入多行数据，每个值列表对应一行数据，中间用逗号分隔。

values 子句中提供的值需要注意以下格式：
- 字符串和日期值需要用单引号 ' ' 引起来，数字值不需要引号。
- 可以使用 NULL 关键字显式插入空值。
- 可以使用各种数据库兼容的函数或表达式计算得出的值。

针对表 `employees (id NUMBER, name VARCHAR2(50), salary NUMBER, hire_date DATE)`

示例 1: 插入完整行 (指定所有列)
```Sql
INSERT INTO employees (id, name, salary, hire_date) VALUES (101, 'John Doe', 50000, TO_DATE('2023-01-15', 'YYYY-MM-DD'));
```

示例 2: 插入部分行 (指定部分列)
```Sql
INSERT INTO employees (id, name) VALUES (102, 'Jane Smith');
```

示例 3: 不指定列名 (按表定义顺序)
```Sql
-- 必须为表中每一列提供值，顺序严格按照建表时的列顺序
INSERT INTO employees VALUES (103, 'Bob Johnson', 55000, SYSDATE);
```

示例 4: 同时插入多行 不指定列名 (按表定义顺序)
```Sql
-- 必须为表中每一列提供值，顺序严格按照建表时的列顺序
INSERT INTO employees VALUES (103, 'Bob Johnson', 55000, SYSDATE),
                             (104, 'Alice Brown', 60000, SYSDATE),
                             (105, 'Charlie Davis', 70000, SYSDATE);
```

## 批量插入
当需要将一个查询的结果插入到另一个表中时，可以使用 INSERT ... SELECT 语句。适用于批量插入或数据迁移。

```sql
INSERT INTO [schema.]target_table [(column1, column2, ..., columnN)] SELECT {subquery | (subquery)};
```
- [schema.]target_table: 目标表。
- (column1, column2, ..., columnN): (可选) 目标表中接收数据的列。
- SELECT {subquery | (subquery)}: 提供源数据的 SELECT 查询。
- 注意：subquery 返回的列数必须与目标列数（或目标表总列数，如果不指定列）匹配。数据类型需要兼容。

示例: 从一个表复制数据(可经过计算)到另一个表
```sql
-- 假设表 temp_employees 与 employees 结构相同
INSERT INTO employees (id, name, salary, hire_date)
SELECT id, name, salary, hire_date FROM temp_employees
WHERE processed = 'Y';

INSERT INTO bonus_log (emp_id, bonus_amount, bonus_date)
SELECT id, salary * 0.1, SYSDATE
FROM employees
WHERE department_id = 10;
```