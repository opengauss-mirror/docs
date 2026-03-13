# CREATE SYNONYM 使用文档

## 功能概述

`CREATE SYNONYM` 语句用于创建数据库对象的别名，简化SQL语句的编写和使用。同义词可以指向表等数据库对象，提供了一种抽象层来隐藏对象的真实名称和所有者。

## 语法格式

### 创建私有同义词

```sql
CREATE [OR REPLACE] SYNONYM synonym_name FOR object_name;
```

### 创建公共同义词

```sql
CREATE [OR REPLACE] PUBLIC SYNONYM synonym_name FOR object_name;
```

## 参数说明

| 参数名 | 说明                                            |
|--------|-----------------------------------------------|
| OR REPLACE | 可选参数。如果同义词已存在，则替换它而不是报错。                      |
| PUBLIC | 可选参数。创建公共同义词，所有用户都可以访问。如果不指定，则创建私有同义词，仅创建者可见。 |
| synonym_name | 要创建的同义词名称。                                    |
| object_name | 同义词指向的对象名称。                                   |

## 使用示例

### 示例 1：创建私有同义词

```sql
CREATE SYNONYM emp FOR employees;
```

### 示例 2：替换私有同义词

```sql
CREATE OR REPLACE SYNONYM emp FOR employees;
```

### 示例 3：创建公共同义词

```sql
CREATE PUBLIC SYNONYM dept FOR departments;
```

### 示例 4：替换公共同义词

```sql
CREATE OR REPLACE PUBLIC SYNONYM dept FOR departments;
```

### 示例 5：创建同义词后查询

```sql
-- 创建同义词
CREATE SYNONYM emp FOR employees;

-- 使用同义词查询
SELECT * FROM emp WHERE department_id = 10;
```
