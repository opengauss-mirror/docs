# 时间间隔类型

**表 1**  时间间隔类型

| 名称  | 描述  | 存储空间  | 范围  |
| :------------ | :------------ | :------------ | :------------ |
| INTERVAL YEAR[(n)] TO MONTH  | 存储一个若干年若干月的时间间隔<br>1. n的取值范围是[0,4]，表示年的精度，默认值为2。  |  4字节   |  [-9999-11, +9999-11]  |
| INTERVAL DAY[(n1)] TO SECOND[(n2)]  | 存储一个若干天（包括天、时、分、秒、微妙）的时间间隔<br>1. n1的取值范围是[0,7]，表示天的精度，默认值为2。<br>2. n2取值范围是[0,6]，表示秒后面的精度，不指定时默认为6  |  8字节   |  [-9999999 23:59:59.999999, +9999999 23:59:59.999999]  |

示例

```
--创建表。
SQL> CREATE TABLE day_type_tab (a int,b INTERVAL DAY(3) TO SECOND (4), c INTERVAL YEAR(4) TO MONTH); 

--插入数据。
SQL> INSERT INTO day_type_tab VALUES (1, INTERVAL '3' DAY, INTERVAL '4' MONTH);

--查看数据。
SQL> SELECT * FROM day_type_tab;

A                                        B                        C
---------------------------------------- ------------------------ ----------
1                                        +003 00:00:00.0000       +0000-04

1 rows fetched.

--右操作符为字符串，在比较前，系统会将该字符串转换为INTERVAL DAY TO SECOND类型
SQL>  SELECT * FROM day_type_tab where b = '003 00:00:00.0000';

A                                        B
---------------------------------------- ------------------------
1                                        +003 00:00:00.0000

1 rows fetched.

SQL> SELECT * FROM day_type_tab WHERE b = '002 00:00:00.0000';

A                                        B
---------------------------------------- ------------------------

0 rows fetched.

--删除表。
SQL> DROP TABLE day_type_tab;
```
