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