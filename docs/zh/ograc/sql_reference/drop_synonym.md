# DROP SYNONYM 使用文档

## 功能概述

`DROP SYNONYM` 语句用于从数据库中删除一个或多个同义词。同义词是数据库对象的别名，删除同义词不会影响其指向的原始对象。

## 语法格式

### 删除私有同义词

```sql
DROP SYNONYM [IF EXISTS] synonym_name [FORCE];
```

### 删除公共同义词

```sql
DROP PUBLIC SYNONYM [IF EXISTS] synonym_name [FORCE];
```

## 参数说明

| 参数 | 描述 |
|------|------|
| `IF EXISTS` | 可选。如果指定的同义词不存在，不抛出错误，而是返回一个通知。 |
| `synonym_name` | 必需。要删除的同义词名称。 |
| `FORCE` | 可选。强制删除同义词，即使有依赖对象存在。 |
| `PUBLIC` | 可选。指定要删除的是公共同义词。 |

## 使用示例

### 删除私有同义词

```sql
-- 删除同义词 emp_syn
DROP SYNONYM emp_syn;

```

### 删除公共同义词

```sql
-- 删除公共同义词 public_emp
DROP PUBLIC SYNONYM public_emp;
```

### 使用 IF EXISTS 选项

```sql
-- 如果同义词存在则删除，不存在则不报错
DROP SYNONYM IF EXISTS non_existent_syn;
```

### 使用 FORCE 选项

```sql
-- 强制删除同义词，即使有依赖对象
DROP SYNONYM emp_syn FORCE;

-- 强制删除公共同义词
DROP PUBLIC SYNONYM public_emp FORCE;
```
