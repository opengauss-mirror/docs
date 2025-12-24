# 删除数据 DELETE
DELETE 语句用于从数据库表中删除符合指定条件的行。

```sql
DELETE FROM [schema.]table_name [WHERE condition];
```
- DELETE FROM ···: 关键字，指示要执行删除操作。
- [schema.]table_name: 要删除数据的目标表的名称。
- [WHERE condition]: (可选) 指定删除哪些行的条件。如果省略，将删除表中的所有行。

示例1: 删除所有符合条件的行
```sql
DELETE FROM employees WHERE id = 10;
DELETE FROM employees WHERE id IN (SELECT id FROM temp_employees WHERE processed = 'Y');
```

示例2: 删除所有行 (谨慎使用)
```sql
DELETE FROM employees;
```