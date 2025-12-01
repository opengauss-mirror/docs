# @variable变量

## 功能描述

openGauss在MySQL兼容模式下，支持用户变量`@variable`的以下两种使用形式：

- 支持使用SET命令声明`@variable`，形如：`set @variable = value`或`set @variable := value`。

- 支持使用SELECT命令为`@variable`变量赋值，形如`select @variable := value`。
  
    
利用`@variable`特性能够实现SQL中的递归查询，详见[示例3](#示例3)。递归查询是一种特殊的查询技术，它通过循环调用一个单独的查询来遍历整个数据集。递归查询通常用于查询树形结构或图形结构数据。这些数据结构通常有父节点和子节点之间的关系。

## 注意事项

- 使用此功能需开启参数enable_set_variable_b_format，表示允许数据库在MySQL兼容模式下使用自定义用户变量的功能。

- 用户变量是针对当前登录openGauss的用户的私有变量，声明过的`@variable`变量在客户端连接到数据库实例的整个过程中都是有效的。

- SET命令支持的赋值符号可以是`:=`或`=`，而select赋值时仅支持使用`:=`。

- 若使用prepare from为SQL语句命名时，用户自定义变量存储的字符串仅支持select、insert、update、delete、merge语法，且必须是单条语句。

- 无论SET或是SELECT都可以同时对多个变量进行赋值。

- 带变量赋值的查询无法使用smp并行特性。

## 示例

**示例1：** 使用SET命令为变量赋值。

1、设置参数enable_set_variable_b_format为on。


```sql
SET enable_set_variable_b_format=on;
```

2、使用SET定义变量。

```sql
set @VAR1_1102053=123;
set @var2_1102053:=1111::int4;
set @var3_1102053 := @var6_1102053 := @$var7_1102053:=12345678::int8;
```

3、直接查看变量的值。

```sql
select @VAR1_1102053,@VAR2_1102053,@VAR3_1102053;
```

返回结果如下：

```sql
 @var1_1102053 | @var2_1102053 | @var3_1102053
---------------+---------------+---------------
           123 |          1111 |      12345678
(1 row)
```

4、创建测试表。

```sql
create table table_1102053 (id int,name text);
```

5、向测试表中插入数据时使用声明过的变量。

```sql
insert into table_1102053 values(@VAR1_1102053,'test');
```

6、查看测试表数据。

```sql
select * from table_1102053;
```

返回结果如下，变量`@VAR1_1102053`的值被插入到了表中对应位置：

```sql
 id  | name
-----+------
 123 | test
(1 row)
```

**示例2：** SELECT直接为变量赋值并查看。


1、设置参数enable_set_variable_b_format为on。


```sql
SET enable_set_variable_b_format=on;
```

2、执行如下SELECT语句。


```sql
select @var:=1 as col1,@va:=3;
```

返回结果如下：

```sql
 col1 | ?column?
------+----------
    1 |        3
(1 row)
```

**示例3：**<a name="示例3"></a> 使用@变量实现递归查询。

1、设置参数enable_set_variable_b_format为on。


```sql
SET enable_set_variable_b_format=on;
```

2、创建测试表并插入数据。

```sql
CREATE TABLE my_table_1162203 (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
parent_id INT,
CONSTRAINT uc_name UNIQUE (name),
CONSTRAINT fk_parent FOREIGN KEY (parent_id) REFERENCES my_table_1162203(id)
);
-- 插入数据
INSERT INTO my_table_1162203 (name, parent_id) VALUES
('a1', 1),
('a2', 2),
('a3', 1),
('a4', 2),
('a5', 1),
('a6', 2);
```

3、查看测试表数据。

```sql
select * from my_table_1162203;
```

返回结果如下，三个字段的含义分别记为每条记录的ID，名称，父节点ID。

```sql
 id | name | parent_id
----+------+-----------
  1 | a1   |         1
  2 | a2   |         2
  3 | a3   |         1
  4 | a4   |         2
  5 | a5   |         1
  6 | a6   |         2
(6 rows)
```

4、使用SET命令为变量赋值，指定`@parent_id`为1。

```sql
SET @parent_id := 1;
```

5、检索给定节点的所有兄弟节点，返回所有父节点ID为1的记录。

```sql
SELECT id, name
FROM my_table_1162203
WHERE parent_id = (
SELECT parent_id
FROM my_table_1162203
WHERE id = @parent_id
);
```

返回结果如下：

```sql
 id | name
----+------
  1 | a1
  3 | a3
  5 | a5
(3 rows)
```

6、以下语句等效于步骤4（定义变量）和步骤5（查询）的结合，在一个语句里实现了同样的递归查询效果：

```sql
SELECT id, name
FROM my_table_1162203
WHERE parent_id = (
SELECT parent_id
FROM my_table_1162203
WHERE id =(select @parent_id:= 1)
);
```

返回结果如下：

```sql
 id | name
----+------
  1 | a1
  3 | a3
  5 | a5
(3 rows)
```


**示例4：** 使用set语法创建prepare语句。

1、设置参数enable_set_variable_b_format为on。


```sql
SET enable_set_variable_b_format=on;
```

2、创建测试表。

```sql
create table tb1(id int);
```

3、使用set语法将两个自定义变量赋值为字符串，内容为SQL语句。

```sql
set @sql1:='insert into tb1 values(5)';  --语句1
set @sql2:='select * from tb1';          --语句2
```

4、为步骤3中的两条SQL语句命名。

```sql
PREPARE stmt1 from @sql1;
PREPARE stmt2 from @sql2;
```

5、执行语句1，执行插入动作。

```sql
EXECUTE stmt1;
```

6、执行语句2，查看测试表数据。

```sql
EXECUTE stmt2;
```

返回结果为：

```sql
 id             
----
  5
(1 row)
```