# 布尔类型

**表 1**  布尔类型

| 名称  | 描述  | 存储空间  | 范围  |
| :------------ | :------------ | :------------ | :------------ |
| BOOLEAN/BOOL  | 存储布尔类型数据  |  4字节   |  TRUE，FALSE   |

- “真”值的有效文本值是：

    TRUE、true、'T'、't'、'TRUE'、'true'、'1'、任意非零整数。

- “假”值的有效文本值是：

    FALSE、false、'F'、'f'、'FALSE'、'false'、'0'、0。

示例：

```
--创建表。
SQL> CREATE TABLE bool_type_t1  
(
    BT_COL1 BOOLEAN,
    BT_COL2 TEXT
);

--插入数据。
SQL> INSERT INTO bool_type_t1 VALUES (TRUE, 'sic est');

SQL> INSERT INTO bool_type_t1 VALUES (FALSE, 'non est');

--查看数据。
SQL> SELECT * FROM bool_type_t1;

BT_COL1 BT_COL2
------- ----------------------------------------------------------------
TRUE    sic est
FALSE   non est

2 rows fetched.

SQL> SELECT * FROM bool_type_t1 WHERE bt_col1 = 't';

BT_COL1 BT_COL2
------- ----------------------------------------------------------------
TRUE    sic est

1 rows fetched.

--删除表。
SQL> DROP TABLE bool_type_t1;

```
