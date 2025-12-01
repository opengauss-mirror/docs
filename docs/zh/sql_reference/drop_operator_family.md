# DROP OPERATOR FAMILY

## 功能描述

此语法仅在开启 `support_extended_features` 参数时可用。

删除一个运算符族。

## 语法格式

```txt
DROP OPERATOR FAMILY [ IF EXISTS ] name USING index_method
```

## 参数说明

- `name`

    要删除的运算符族名称，可使用模式修饰。

- `index_method`

    该运算符族适用的索引方法。

## 示例

```sql
DROP OPERATOR FAMILY family_name USING btree;
```
