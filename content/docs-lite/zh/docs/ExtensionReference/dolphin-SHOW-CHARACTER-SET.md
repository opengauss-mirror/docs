# SHOW CHARACTER SET

## 注意事项

N/A

## 功能描述

显示所有支持的字符集。

## 语法格式

```
SHOW {CHARACTER SET | CHARSET} [LIKE 'pattern' | WHERE expr]
```

## 参数说明

- **WHERE expr**

  筛选表达式。

- **LIKE 'pattern'**

  pattern正则表达式匹配字符集的名称。

## 返回结果集

| 字段          | 说明                         | 备注       |
| ----------------- | ---------------------------- | ----------- |
| charset           | 字符集名称       |  |
| Description       | 字符集的描述 |  |
| default collation | 字符集的默认排序规则         | 该字段内容为空 |
| maxlen            | 存储一个字符所需的最大字节数 |    | 

## 示例

```sql
openGauss=# SHOW CHARACTER SET LIKE 'a%';
 charset |    Description    | default collation | maxlen
---------+-------------------+-------------------+--------
 abc     | alias for WIN1258 |                   |      1
 alt     | alias for WIN866  |                   |      1
(2 rows)
```