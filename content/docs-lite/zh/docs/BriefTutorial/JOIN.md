# JOIN<a name="ZH-CN_TOPIC_0000001255221823"></a>

JOIN子句用于把来自两个或多个表的行结合起来，基于这些表之间的共同字段。

在openGauss中，JOIN有五种连接类型：

-   CROSS JOIN ：交叉连接
-   INNER JOIN：内连接
-   LEFT OUTER JOIN：左外连接
-   RIGHT OUTER JOIN：右外连接
-   FULL OUTER JOIN：全外连接
-   ASOF JOIN：时间连接

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

## 时间连接<a name="section8954153161666"></a>

ASOF JOIN 是在列存储中针对时间序列数据而新增的一种连接方式，可以提高数据分析场景中大量时间序列数据的连接性能。

时间连接的特点是对于给定左表中的时间戳，以最接近的时间戳返回右表中的相应记录。

示例：

```
openGauss=# select * from holdings ;
   ticker   | pa |         wh          | shares
------------+----+---------------------+--------
 APPL       |  1 | 2000-12-31 23:59:30 |   5.16
 APPL       |  2 | 2001-01-01 00:00:30 |   2.94
 APPL       |  1 | 2001-01-01 00:01:30 |  24.13
 MSFT       |  1 | 2000-12-31 23:59:30 |   9.33
 MSFT       |  2 | 2001-01-01 00:00:30 |  23.45
 MSFT       |  1 | 2001-01-01 00:01:30 |  10.58
 DATA       |  1 | 2000-12-31 23:59:30 |   6.65
 DATA       |  1 | 2001-01-01 00:00:30 |  17.95
 DATA       |  1 | 2001-01-01 00:01:30 |  18.37
(9 rows)

openGauss=# select * from prices;
   ticker   | pa |         wh          | price
------------+----+---------------------+-------
 APPL       |  1 | 2001-01-01 00:00:00 |  1.00
 APPL       |  1 | 2001-01-01 00:01:00 |  2.00
 APPL       |  1 | 2001-01-01 00:02:00 |  3.00
 MSFT       |  2 | 2001-01-01 00:00:00 |  1.00
 MSFT       |  2 | 2001-01-01 00:01:00 |  2.00
 MSFT       |  2 | 2001-01-01 00:02:00 |  3.00
 GOOG       |  1 | 2001-01-01 00:00:00 |  1.00
 GOOG       |  1 | 2001-01-01 00:01:00 |  2.00
 GOOG       |  1 | 2001-01-01 00:02:00 |  3.00
(9 rows)

openGauss=# SELECT h.ticker, h.wh, price * shares AS total  FROM holdings h  
ASOF JOIN prices p ON h.ticker = p.ticker AND h.wh >= p.wh order by h.ticker;
   ticker   |         wh          |  total
------------+---------------------+---------
 APPL       | 2001-01-01 00:00:30 |  2.9400
 APPL       | 2001-01-01 00:01:30 | 48.2600
 MSFT       | 2001-01-01 00:00:30 | 23.4500
 MSFT       | 2001-01-01 00:01:30 | 21.1600
(4 rows)

```
