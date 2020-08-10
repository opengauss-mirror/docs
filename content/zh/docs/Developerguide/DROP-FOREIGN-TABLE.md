# DROP FOREIGN TABLE

## 功能描述

删除指定的外表。

## 注意事项

DROP FOREIGN TABLE会强制删除指定的表，删除表后，依赖该表的索引会被删除，而使用到该表的函数和存储过程将无法执行。

## 语法格式

```
DROP FOREIGN TABLE [ IF EXISTS ] 
    table_name [, ...] [ CASCADE | RESTRICT ];
```

## 参数说明

-   **IF EXISTS**

    如果指定的表不存在，则发出一个notice而不是抛出一个错误。

-   **table\_name**

    表名称。

    取值范围：已存在的表名。

-   **CASCADE | RESTRICT**
    -   CASCADE：级联删除依赖于表的对象（比如视图）。
    -   RESTRICT：如果存在依赖对象，则拒绝删除该表。这个是缺省。

## 相关链接

[ALTER FOREIGN TABLE](ALTER-FOREIGN-TABLE.md)，[CREATE FOREIGN TABLE](CREATE-FOREIGN-TABLE.md)

