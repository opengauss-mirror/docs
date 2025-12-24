# 更新数据 UPDATE
UPDATE 语句用于修改数据库表中已存在的行数据。

```sql
UPDATE [schema.]table_name SET column1 = value1, column2 = value2, ... [WHERE condition];
```
- UPDATE: 关键字，指示要执行更新操作。
- [schema.]table_name: 要更新数据的目标表的名称。
- SET column1 = value1, column2 = value2, ...: 指定要更新的列及其新值。指定更新的新值可以是常量（包括`DEFAULT`）、表达式、函数调用等。
- [WHERE condition]: (可选) 指定更新哪些行的条件。如果省略，将更新表中的所有行。

示例1: 更新符合条件的行
```sql
UPDATE employees SET salary = salary * 1.1 WHERE department_id = 10;
UPDATE employees SET salary = DEFAULT WHERE department_id = 10;
```

示例2: 更新所有行 (谨慎使用)
```sql
UPDATE employees SET name = 'Marketing';
```