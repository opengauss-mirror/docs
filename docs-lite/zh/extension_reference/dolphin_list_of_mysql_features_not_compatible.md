# 未兼容MySQL特性列表

dolphin插件的目标是兼容MySQL数据库的语法、功能等。但是在实际使用对比MySQL的过程中，发现部分MySQL的表现并不符合使用习惯，在此列出。

## 隐式转换规则不同导致的索引失效问题

众所周知，隐式转换是导致索引失效的一个常见原因。如果在整数列上创建索引，并将整数列和浮点数类型进行比较，openGauss会由于需要将整数类型转换为浮点数，从而导致索引失效，而MySQL不会。测试SQL如下：

```
create table t_int(a int);   -- 建表，数据类型为 int
insert into t_int values(57); -- 插入数据

select * from t_int where a=57.2;  -- 使用浮点数作为过滤条件，MySQL和openGauss结果均为0行
select * from t_int where a=degrees(1); -- 使用返回值为浮点数的函数作为过滤条件，MySQL和openGauss结果均为0行（degrees(1)的结果为57.295779513082）

create index i_int on t_int(a); -- 在整数列上创建索引
select * from t_int where a=57.2; -- 使用浮点数作为过滤条件，openGauss结果为0行，无法使用索引。 MySQL 5.7结果为 1 行，可以使用索引；MySQL 8.0结果为 0 行，直接优化过滤条件为恒false
select * from t_int where a=degrees(1); -- 使用返回值为浮点数的函数作为过滤条件，openGauss结果为0行，无法使用索引。MySQL 5.7/8.0 结果均为 1 行，可以使用索引
```

通过上述的例子可知，在整数列有索引，使用浮点数作为过滤条件的情况下，MySQL倾向于将浮点数强转为整数，再进行过滤，从而使得索引能正常使用，但是实际上这样的结果是有问题，会导致出现 57 = 57.2 的情况出现。MySQL 8.0对这种情况做了一定的优化，但是在使用函数作为过滤条件的情况下仍然有问题。

openGauss当前仍保持现状，在整数列有索引，使用浮点数作为过滤条件的情况下。将整数列转为浮点数再进行比较。即使这样过滤出来的结果和MySQL并不一致。

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
