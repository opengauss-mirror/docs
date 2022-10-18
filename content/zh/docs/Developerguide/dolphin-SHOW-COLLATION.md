# SHOW COLLATION

## 注意事项

N/A

## 功能描述

显示所有支持的服务器的字符序。

## 语法格式

```
SHOW COLLATION [LIKE 'pattern' | WHERE expr]
```

## 参数说明

- **WHERE expr**

  筛选表达式。

- **LIKE 'pattern'**

  pattern正则表达式匹配排序的名称。

## 返回结果集

|  字段  | 说明                          | 备注       | 
| --------- | ---------------------------- | :---------- |
| collation | 排序集名字                   |    |
| charset   | 排序集关联的字符集           |     |
| id        | 字符集的描述               | 该字段对应pg_collation表中的行对应行的OID       |
| default   | 是否是字符集对应的排序集     | openGauss无默认排序，此字段内容为空       |
| compiled  | 排序集是否已编译             | 该字段内容为Yes   |
| sortlen   | 排序字符集时需要的内存大小   | 该字段内容为空 |
## 示例

```sql
openGauss=# SHOW COLLATION LIKE 'aa%';
    collation     | charset |  id   | default | compiled | sortlen
------------------+---------+-------+---------+----------+----------
 aa_DJ            | utf8    | 13450 |         | Yes      |
 aa_DJ            | latin1  | 13451 |         | Yes      |
 aa_DJ.iso88591   | latin1  | 13452 |         | Yes      |
 aa_DJ.utf8       | utf8    | 13453 |         | Yes      |
 aa_ER            | utf8    | 13454 |         | Yes      |
 aa_ER.utf8       | utf8    | 13455 |         | Yes      |
 aa_ER.utf8@saaho | utf8    | 13456 |         | Yes      |
 aa_ER@saaho      | utf8    | 13457 |         | Yes      |
 aa_ET            | utf8    | 13458 |         | Yes      |
 aa_ET.utf8       | utf8    | 13459 |         | Yes      |
(10 rows)
```