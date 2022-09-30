# ENUM类型<a name="ZH-CN_TOPIC_0289900754"></a>

ENUM是一个字符串对象，其值是从创建表时在列定义中显式枚举的允许值列表中选择的。要实现兼容的enum类型，首先保证数据库是'B'类型：`CREATE DATABASE test_db with dbcompatibility='B';`

### 创建和使用ENUM列

* 枚举值必须是字符串。例如，您可以创建一个具有ENUM列的表，如下所示：
  
  ```sql
  CREATE TABLE shirts (
    name VARCHAR(40),
    size ENUM('small', 'medium', 'large')
  );
  INSERT INO shirts (name, size) VALUES ('dress shirt','large'), ('t-shirt','medium'),
  ('polo shirt','small');
  SELECT name, size FROM shirts WHERE size = 'medium';
    name   |  size  
  ---------+--------
   t-shirt | medium
  (1 row)
  
* 枚举值不能包含`'anonymous_enum'`，同时不能将一个已有的类型重命名为包含`'anonymous_enum'`的名称，如果包含，会报错：

  ```
  CREATE TYPE country_anonymous_enum_1 AS enum('CHINA','USA');
  ERROR: enum type name "country_anonymous_enum_1" can't contain "anonymous_enum" 

  ```

### 枚举值的索引

* 按照列定义中的顺序，每个枚举值都被分配一个索引号，从1开始。

* `NULL`值的索引是0。

* 这里的“索引”一词指的是枚举值列表中的位置，与表格索引无关。
例如，指定为`ENUM('small', 'medium', 'large')`的列具有以下枚举值及索引：

| Value    | Index |
|:-------- |:----- |
| NULL     | 0     |
| 'small'  | 1     |
| 'medium' | 2     |
| 'large'  | 3     |

* 您可以使用索引号在ENUM中插入枚举值，也可以在WHERE子句中使用索引号筛选枚举值，如下所示：

```sql
INSERT INTO shirts (name, size) VALUES ('t-shirt',1);
SELECT name, size FROM shirts WHERE size = 1;
   name    | size  
------------+-------
polo shirt | small
t-shirt    | small
(2 rows)
```

* 如果您使用越界的索引号，则会导致错误。
  
  ```
  INSERT INTO shirts (name, size) VALUES ('t-shirt',4);
  ERROR:  enum order 4 out of the enum value size: 3
  LINE 1: INSERT INTO shirts (name, size) VALUES ('t-shirt',4);
                                                            ^
  CONTEXT:  referenced column: size

  ```

### 空值和空字符串

* 枚举值可以是`NULL`，同时空字符串`''`也是会被认为是`NULL`值。
* 如果您在ENUM列中插入无效值（即枚举值列表中不存在的字符串），则会导致错误。

### 枚举限制

* 不能数字作为枚举值。如果您确实使用数字作为枚举值，请始终将其括在引号中。如果省略引号，该数字将被视为索引。
* ENUM定义中的重复枚举值会导致错误。
* ENUM支持的字符串最大长度为63。
* ENUM列可以有超过65,535个不同的元素。
