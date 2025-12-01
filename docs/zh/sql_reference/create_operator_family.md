# CREATE OPERATOR FAMILY

## 功能描述

定义一个新的运算符族。

## 语法格式

```txt
CREATE OPERATOR FAMILY name USING index_method
```

## 参数说明

- `name`

    要创建的运算符族名称，可使用模式修饰。

- `index_method`

    该运算符族适用的索引方法。

## 示例

```sql
CREATE OPERATOR FAMILY family_name USING btree;
```
