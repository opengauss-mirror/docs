# 未兼容MySQL特性列表

dolphin插件的目标是兼容MySQL数据库的语法、功能等。但是在实际使用对比MySQL的过程中，发现部分MySQL的表现并不符合使用习惯，在此列出。

## `TIME` 类型与字符串的比较运算符

对于 `TIME` 类型与字符串类型的 `<`、`>`、`BETWEEN` 等比较运算，MySQL 的行为在不同场景下具有不同逻辑：

1. 常量比较场景下，MySQL 会直接使用字符串的字典序
2. `TIME` 类型为字段的场景下，MySQL 先尝试将字符串转换为 `TIME` 类型进行比较，如果转换失败则依据字典序比较。
3. `TIME` 类型为索引的场景下，MySQL 先尝试转换为 `TIME` 类型进行索引过滤，若转换失败则仍使用失败的转换结果进行过滤。

测试 SQL 如下:

```sql
mysql> select * from t where v < '2018-01-01';
+----------+
| v        |
+----------+
| 19:18:00 |
| 00:18:00 |
+----------+
2 rows in set, 1 warning (0.00 sec)

mysql> create index idx_t on t (v);
Query OK, 0 rows affected (0.03 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> select * from t where v < '2018-01-01';
+----------+
| v        |
+----------+
| 00:18:00 |
+----------+
1 row in set, 2 warnings (0.00 sec)

```

该例子描述的是场景 3，其中 `2018-01-01` 会被 MySQL 尝试转换为 `TIME` 类型。
虽然转换失败，但 MySQL 仍然会使用异常的转换结果 `00:20:18` 进行索引过滤。
于是就出现了使用索引前后查询结果不一致的情况。

而 openGauss 在对 `TIME` 与字符串类型进行比较时，会始终尝试将字符串转换为 `TIME` 类型（与 MySQL 使用索引的场景相同）。
因此 openGauss 在不同场景下比较运算的行为都是一致的，并且能够支持索引。
