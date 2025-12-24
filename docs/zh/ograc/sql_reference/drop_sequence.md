# DROP SEQUENCE

## 功能描述

DROP SEQUENCE用于删除数据库中的序列生成器。

## 语法格式

```sql
DROP SEQUENCE [IF EXISTS] [Schema.]sequence_name;
```

## 示例
```sql
-- 删除序列 MY_SEQUENCE
SQL> DROP SEQUENCE my_sequence;

Succeed.

SQL> DROP SEQUENCE IF EXISTS my_sequence;

Succeed.
```