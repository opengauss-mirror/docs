# ENUM类型<a name="ZH-CN_TOPIC_0289900754"></a>

ENUM类型是一个字符串对象，其值是从创建表时在列定义时指定的枚值列表中选择的。要使用mysql兼容的enum类型，首先保证数据库是'B'类型：`CREATE DATABASE test_db with dbcompatibility='B';`

### 创建和使用ENUM列

* 枚举值必须是字符串。例如，以创建一个包含一个类型是ENUM的列的表，如下所示：
  
  ```sql
  CREATE TABLE staff (
    name VARCHAR(40),
    gender ENUM('male', 'female')
  );
  INSERT INO staff (name, gender) VALUES ('Tom','male'), ('Jenny','female')
  SELECT name, gender FROM staff WHERE gender = 'male';
    name   | gender  
  ---------+--------
    Tom    |  male
  (1 row)
  
* 枚举值字符串中不能包含`'anonymous_enum'`，同时不能将一个已有的类型重命名为包含`'anonymous_enum'`的名称，如果包含，会报错：

  ```sql
  CREATE TYPE country_anonymous_enum_1 AS enum('CHINA','USA');
  ERROR: enum type name "country_anonymous_enum_1" can't contain "anonymous_enum" 

  ```

### 枚举值的索引

* 根据列定义中的枚举值的的顺序，每个枚举值都会被分配一个索引值，从1开始。

* `NULL`值的索引是0。

* 这里的“索引”指的是枚举值在创建时位于列表中的位置，与table中的位置无关。
例如，指定为`ENUM('male', 'female')`的列具有以下枚举值及索引：

| Value    | Index |
|:-------- |:----- |
| NULL     | 0     |
| 'male'   | 1     |
| 'female' | 2     |

* 可以使用索引号在ENUM中插入枚举值，也可以在WHERE子句中使用索引号筛选枚举值，如下所示：

```sql
INSERT INTO staff (name, size) VALUES ('Jone',1);
SELECT name, gender FROM staff WHERE gender = 1;
   name    | gender  
------------+-------
   Tom     | male
   Jone    | male
(2 rows)
```

* 如果使用的索引值超过了枚举值的个数或者为负值，则会出现错误。
  
  ```sql
  INSERT INTO staff (name, gender) VALUES ('Lara',4);
  ERROR:  enum order 4 out of the enum value size: 2
  LINE 1: INSERT INTO staff (name, gender) VALUES ('Lara',4);
                                                           ^
  CONTEXT:  referenced column: size

  ```

### 空值和空字符串

* 枚举值可以是`NULL`，同时空字符串`''`也是会被当作是`NULL`值。
* 如果在ENUM的列中插入无效的值（即枚举列表中不存在的字符串），则会导致错误。

### 枚举限制

* 数字不能作为枚举值。如果要将数字作为为枚举值，需要将其包含在括在引号中，即变成字符串。如果没有引号，该数字将被当作索引。
* ENUM的定义中的不能包含重复的枚举值。
* ENUM的值支持的字符串最大长度为63。
* ENUM的枚举值没有最大元素个数的限制。
