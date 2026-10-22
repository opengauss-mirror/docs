---
description: 本文介绍 openGauss DROP OPERATOR 的相关内容，涵盖 功能描述、语法格式 等内容。
keywords: [openGauss, DROP OPERATOR, SQL参考, 功能描述, 语法格式]
---

# DROP OPERATOR

## 功能描述

此语法仅在开启 `support_extended_features` 参数时可用。

删除一个运算符。

## 语法格式

```txt
DROP OPERATOR [ IF EXISTS ] name ( left_type , right_type )
```

## 参数说明

- `name`

    要删除的运算符名称，可使用模式修饰。

- `left_type`

    运算符左边的参数数据类型。

- `right_type`

    运算符右边的参数数据类型。

## 示例

```sql
CREATE OPERATOR === (
    PROCEDURE = int8eq,
    LEFTARG = bigint,
    RIGHTARG = bigint
);

DROP OPERATOR ===(bigint, bigint);
```
