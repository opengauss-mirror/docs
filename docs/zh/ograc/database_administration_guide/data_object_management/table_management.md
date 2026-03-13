# 表管理

表（`TABLE`）是数据库中最基本的数据存储逻辑单元，以行和列的形式组织并存储结构化数据，用户增删改查（[INSERT](../../sql_reference/dml/insert.md)、[DELETE](../../sql_reference/dml/delete.md)、[UPDATE](../../sql_reference/dml/update.md)、[SELECT](../../sql_reference/select.md)）直接操作的对象就是表，创建表时必须存在`TABLE_NAME`、`COLUMN_NAME`以及对应的`COLUMN_TYPE`，此外，每一列属性可以指定额外的列约束（如`DEFAULT`、`NOT NULL`、 `UNIQUE`等）。

## 普通表创建

在表空间`OPENGAUSSSPACE`上创建普通表`EMPLOYEES`。

```sql

CREATE TABLE [Schema.]TABLE_NAME
(
    COLUMN_NAME1 COLUMN_TYPE [DEFAULT DEFAULT_VALUE] [{NOT | DEFAULT} NULL],
    COLUMN_NAME2 COLUMN_TYPE ...
) [TABLESPACE TABLESPACE_NAME];

-- 示例
CREATE TABLE EMPLOYEES
(
    ID INT NOT NULL,
    NAME VARCHAR(10) DEFAULT NULL,
    SALARY DECIMAL(10,2),
    HIRE_DATE DATE
) TABLESPACE OPENGAUSSSPACE;
```

## 更改表结构

### 表重命名

```sql
ALTER TABLE TABLE_NAME RENAME TO TABLE_NAME_NEW;
```

### 添加、删除、更改列

```sql
-- 增加列
ALTER TABLE TABLE_NAME ADD COLUMN_NAME COLUME_TYPE;
-- 删除列
ALTER TABLE TABLE_NAME DROP COLUMN_NAME;
-- 修改列类型
ALTER TABLE TABLE_NAME MODIFY COLUMN_NAME COLUMN_TYPE;
```

### 添加、删除、更改列约束

```sql
-- 向表EMPLOYEES的ID列添加主键约束
ALTER TABLE EMPLOYEES ADD CONSTRAINT PRIMARY_KEY1 PRIMARY KEY (ID);
-- 向表EMPLOYEES的NAME列添加唯一约束
ALTER TABLE EMPLOYEES ADD CONSTRAINT UNIQUE_NAME1 UNIQUE (NAME);
-- 向表EMPLOYEES的SALARY列添加范围CHECK约束
ALTER TABLE EMPLOYEES ADD CONSTRAINT SALARY_MIN_CHECK CHECK (SALARY > 12345);

-- 约束重命名
ALTER TABLE EMPLOYEES RENAME CONSTRAINT UNIQUE_NAME1 TO UNIQUE_NAME2;
ALTER TABLE EMPLOYEES RENAME CONSTRAINT PRIMARY_KEY1 TO PRIMARY_KEY2;

-- 删除主键约束
ALTER TABLE EMPLOYEES DROP CONSTRAINT PRIMARY_KEY2;
-- 删除SALARY_MIN_CHECK约束
ALTER TABLE EMPLOYEES DROP CONSTRAINT SALARY_MIN_CHECK;
```

### 约束开启与禁用

用户可以使用`ALTER TABLE ... DISABLE|ENABLE CHECK_NAME`对表属性列添加的约束可以选择开启或关闭

```sql
ALTER TABLE EMPLOYEES DISABLE CONSTRAINT UNIQUE_NAME1;
ALTER TABLE EMPLOYEES ENABLE CONSTRAINT UNIQUE_NAME1;
```

### 外键信息

外键（`Foreign Key`）是一张表中的一个字段（或一组字段），它引用了另一张表的主键（`Primary Key`）或唯一键（`Unique Key`），用于建立两个表之间的链接。

```sql
-- 创建表
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS students;

-- students表中的dept_id是departments的主键 dept_id可作为students表的外键
CREATE TABLE departments (
    dept_id   INT PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name       VARCHAR(50) NOT NULL,
    dept_id    INT NOT NULL
);

-- 为表teachers与students创建外键 其父表为departments
ALTER TABLE students ADD CONSTRAINT FOR_KEY_1 FOREIGN KEY (dept_id) REFERENCES departments(dept_id);

-- 修改外键名称
ALTER TABLE students RENAME CONSTRAINT FOR_KEY_1 TO FOR_KEY_ST;

-- 删除外键
ALTER TABLE students DROP CONSTRAINT FOR_KEY_ST;
```

### 外键信息查看

```sql
-- 用户可使用DESC查看表列信息 
-- DESC TABLE_NAME
-- 示例
SQL> DESC STUDENTS

Name                                Null?    Type                                
----------------------------------- -------- ------------------------------------
STUDENT_ID                          NOT NULL BINARY_BIGINT                       
NAME                                NOT NULL VARCHAR(50 BYTE)                    
DEPT_ID                             NOT NULL BINARY_INTEGER                      

-- 用户可通过 SHOW CREATE 命令查看表的详细信息
-- SHOW CREATE TABLE TABLE_NAME
-- 示例
SQL> SHOW CREATE TABLE STUDENTS

CREATE TABLE "STUDENTS"
(
  "STUDENT_ID" BINARY_BIGINT NOT NULL,
  "NAME" VARCHAR(50 BYTE) NOT NULL,
  "DEPT_ID" BINARY_INTEGER NOT NULL
)
TABLESPACE "SYSTEM"
INITRANS 2
MAXTRANS 255
PCTFREE 8
FORMAT ASF;
ALTER TABLE "STUDENTS" MODIFY "STUDENT_ID" AUTO_INCREMENT;
ALTER TABLE "STUDENTS" AUTO_INCREMENT = 0;
ALTER TABLE "STUDENTS" ADD PRIMARY KEY("STUDENT_ID");
ALTER TABLE "STUDENTS" ADD CONSTRAINT "FOR_KEY_ST" FOREIGN KEY("DEPT_ID") REFERENCES "DEPARTMENTS"("DEPT_ID");
```

## 表数据清空与表删除

表数据清空即删除该表中所有的行数据，仅保留表定义的结构信息，用户可通过`TRUNCATE`或者`DELETE`清空表数据：

```sql
DETETE FROM TABLE STUDENTS;
DETETE FROM TABLE STUDENTS WHERE STUDENT_ID  = 1234;
COMMIT; -- 可通过ROLLBACK回滚

TRUNCATE TABLE STUDENTS;
```

两者的区别在于，`DELETE`可以通过`WHERE`条件删除符合过滤条件的行，并且受事务管辖，可通过`ROLLBACK`回滚；`TRUNCATE`命令不能使用`WHERE`条件，并且无法回滚，谨慎使用。

用户可通过`DROP TABLE`命令删除表，删除表后表数据一同被删除，不支持`ROLLBACK`。

```sql
DROP TABLE STUDENTS;
DROP TABLE IF EXISTS STUDENTS;
```
