# UNION子句<a name="ZH-CN_TOPIC_0000001209981912"></a>

UNION计算多个SELECT语句返回行集合的并集。UNION内部的SELECT语句必须拥有相同数量的列，列也必须拥有相似的数据类型。同时，每条SELECT语句中的列的顺序必须相同。

## 语法格式<a name="section1458317131312"></a>

-   UNION：结果中如果出现相同的值，仅保留一个。

    ```
    SELECT column_name(s) FROM table_name1
    UNION
    SELECT column_name(s) FROM table_name2;
    ```

-   UNION ALL：显示所有结果，包括重复的值。

    ```
    SELECT column_name(s) FROM table_name1
    UNION ALL
    SELECT column_name(s) FROM table_name2;
    ```


## 示例<a name="section7792919716"></a>

以表table1和表table2为例，表数据如下。

```
openGauss=# SELECT * FROM table1;
 name  | city
-------+------
 Joes  | BJ
 Lily  | BJ
 James | SH
 Grace | SZ
(4 rows)

openGauss=# SELECT * FROM table2;
 id | name  | dept
----+-------+-------
  1 | Tommy | IT
  2 | Lily  | IT
  3 | Li    | sales
  4 | Grace | IT
(4 rows)
```

-   UNION

    列出两张表中所有雇员的姓名，重复值仅保留一个。

    ```
    openGauss=# SELECT name FROM table1 UNION SELECT name FROM table2;
     name
    -------
     Li
     Lily
     James
     Grace
     Joes
     Tommy
    (6 rows)
    ```

-   UNION ALL

    列出两张表中所有雇员的姓名，包括重复值。

    ```
    openGauss=# SELECT name FROM table1 UNION ALL SELECT name FROM table2;
     name
    -------
     Joes
     Lily
     James
     Grace
     Tommy
     Lily
     Li
     Grace
    (8 rows)
    ```


