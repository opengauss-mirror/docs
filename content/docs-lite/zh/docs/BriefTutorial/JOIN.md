# JOIN<a name="ZH-CN_TOPIC_0000001255221823"></a>

JOIN子句用于把来自两个或多个表的行结合起来，基于这些表之间的共同字段。

在openGauss中，JOIN有五种连接类型：

-   CROSS JOIN ：交叉连接
-   INNER JOIN：内连接
-   LEFT OUTER JOIN：左外连接
-   RIGHT OUTER JOIN：右外连接
-   FULL OUTER JOIN：全外连接

以表table1和表table2为例说明不同连接类型，表数据如下：

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

## 交叉连接<a name="section273517016141"></a>

交叉连接即笛卡儿乘积，是指两个关系中所有元组的任意组合。

示例：将表table1和表table2进行交叉连接，结果如下。

```
openGauss=# SELECT * FROM table1 CROSS JOIN table2;
 name  | city | id | name  | dept
-------+------+----+-------+-------
 Joes  | BJ   |  1 | Tommy | IT
 Joes  | BJ   |  2 | Lily  | IT
 Joes  | BJ   |  3 | Li    | sales
 Joes  | BJ   |  4 | Grace | IT
 Lily  | BJ   |  1 | Tommy | IT
 Lily  | BJ   |  2 | Lily  | IT
 Lily  | BJ   |  3 | Li    | sales
 Lily  | BJ   |  4 | Grace | IT
 James | SH   |  1 | Tommy | IT
 James | SH   |  2 | Lily  | IT
 James | SH   |  3 | Li    | sales
 James | SH   |  4 | Grace | IT
 Grace | SZ   |  1 | Tommy | IT
 Grace | SZ   |  2 | Lily  | IT
 Grace | SZ   |  3 | Li    | sales
 Grace | SZ   |  4 | Grace | IT
(16 rows)
```

## 内连接<a name="section16248851415"></a>

使用内连接时，如果两个表的相关字段满足连接条件，就从这两个表中提取数据并组合成新的记录，创建一个新的结果表。也就是在内连接查询中，只有满足条件的元组才能出现在结果关系中。

内连接是一种最常用的连接类型，也是默认的连接类型。

示例：查询表table1和表table2中字段name相同的列。

```
openGauss=# SELECT * FROM table1 a INNER JOIN table2 b ON a.name = b.name;
 name  | city | id | name  | dept
-------+------+----+-------+------
 Lily  | BJ   |  2 | Lily  | IT
 Grace | SZ   |  4 | Grace | IT
(2 rows)
```

## 左外连接<a name="section9773191361416"></a>

左外连接是指在连接查询中，将关键字左端表中所有的元组都列出来，如果能在右端的表中找到匹配的元组，显示匹配元组内容。如果在右端的表中，不能找到匹配的元组，那么对应的元组是空值（NULL）。

左外连接查询语句使用的关键字为LEFT OUTER JOIN，也就是说，左外连接的含义是限制连接关键字右端的表中的数据必须满足连接条件，而左端的表中的数据无论是否满足连接条件，均输出左端表中的内容。

示例：

```
openGauss=# SELECT * FROM table1 a LEFT OUTER JOIN table2 b ON a.name = b.name;
 name  | city | id | name  | dept
-------+------+----+-------+------
 Joes  | BJ   |    |       |
 Lily  | BJ   |  2 | Lily  | IT
 James | SH   |    |       |
 Grace | SZ   |  4 | Grace | IT
(4 rows)
```

## 右外连接<a name="section5250122061415"></a>

右外连接与左外连接类似，只是关键字右端表中的所有元组都列出，限制左端表的数据必须满足连接条件，而右端表中的数据无论是否满足连接条件，均输出表中的内容。

右外连接查询语句的关键字为RIGHT OUTER JOIN。

示例：

```
openGauss=# SELECT * FROM table1 a RIGHT OUTER JOIN table2 b ON a.name = b.name;
 name  | city | id | name  | dept
-------+------+----+-------+-------
 Lily  | BJ   |  2 | Lily  | IT
 Grace | SZ   |  4 | Grace | IT
       |      |  3 | Li    | sales
       |      |  1 | Tommy | IT
(4 rows)
```

## 全外连接<a name="section8954153161410"></a>

全外连接查询的特点是左、右两端表中的元组都输出，如果没能找到匹配的元组，就使用NULL来代替。

示例：

```
openGauss=# SELECT * FROM table1 a FULL OUTER JOIN table2 b ON a.name = b.name;
 name  | city | id | name  | dept
-------+------+----+-------+-------
 Joes  | BJ   |    |       |
 Lily  | BJ   |  2 | Lily  | IT
 James | SH   |    |       |
 Grace | SZ   |  4 | Grace | IT
       |      |  3 | Li    | sales
       |      |  1 | Tommy | IT
(6 rows)
```

