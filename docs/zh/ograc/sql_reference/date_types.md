# 日期类型

**表 1**  日期类型

| 名称  | 描述  | 存储空间  | 范围  |
| :------------ | :------------ | :------------ | :------------ |
| DATETIME/DATE  | 存储不带时区的日期类型数据。<br>1. 保存年、月、日、时、分、秒  |  8字节   |  [0001-01-01 00:00:00, 9999-12-31 23:59:59]   |
| TIMESTAMP[(n)]  | 存储不带时区的时间戳类型数据。<br>1. 保存年、月、日、时、分、秒、微妙<br>2. n取值范围[0,6]，表示秒后面的精度。TIMESTAMP(n)也可以不带参数，即写为TIMESTAMP，这时秒后面小数位数的精度默认为6。  |  8字节   |  [0001-01-01 00:00:00.000000, 9999-12-31 23:59:59.999999]   |
| TIMESTAMP[(n)] WITH TIME ZONE  | 存储带时区的时间戳类型数据。<br>1. 保存年、月、日、时、分、秒、微妙、时区<br>2. n取值范围[0,6]，表示秒后面的精度。TIMESTAMP(n)也可以不带参数，即写为TIMESTAMP，这时秒后面小数位数的精度默认为6。  |  12字节   |  [0001-01-01 00:00:00.000000, 9999-12-31 23:59:59.999999]   |
| TIMESTAMP[(n)] WITH LOCAL TIME ZONE  | 存储带时区的时间戳类型数据。不存储时区，存储时转换为数据库时区的TIMESTAMP，用户查看时转换为当前会话所在时区的TIMESTAMP。<br>1. 保存年、月、日、时、分、秒、微妙<br>2. n取值范围[0,6]，表示秒后面的精度。TIMESTAMP(n)也可以不带参数，即写为TIMESTAMP，这时秒后面小数位数的精度默认为6。  |  8字节   |  [0001-01-01 00:00:00.000000, 9999-12-31 23:59:59.999999]   |

**表2**显示了可以用于格式化日期和时间值的模板

**表 2** 用于日期/时间格式化的模式

<table>
<tr>
<td>类别</td>
<td>模式</td>
<td>描述</td>
</tr>
<tr>
<td rowspan="4">小时</td>
<td>HH</td>
<td>一天的小时数（01-12）</td>
</tr>
<tr>
<td>HH12</td>
<td>一天的小时数（01-12）</td>
</tr>
<tr>
<td>HH24</td>
<td>一天的小时数（00-23）</td>
</tr>
<tr>
<td>TZH</td>
<td>时区信息的小时数</td>
</tr>
<tr>
<td rowspan="2">分钟</td>
<td>MI</td>
<td>分钟（00-59）</td>
</tr>
<tr>
<td>TZM</td>
<td>时区信息的分钟数</td>
</tr>
<tr>
<td rowspan="5">秒</td>
<td>FF</td>
<td>微妙（000000-999999）</td>
</tr>
<tr>
<td>FF3</td>
<td>微妙（000-999）</td>
</tr>
<tr>
<td>FF6</td>
<td>微妙（000000-999999）</td>
</tr>
<tr>
<td>SS</td>
<td>秒（00-59）</td>
</tr>
<tr>
<td>SSSSS</td>
<td>午夜后的秒（0-86399）</td>
</tr>
<tr>
<td rowspan="2">上午、下午</td>
<td>AM或A.M.</td>
<td>上午标识</td>
</tr>
<tr>
<td>PM或P.M.</td>
<td>下午标识</td>
</tr>
<tr>
<td rowspan="4">年</td>
<td>YYYY</td>
<td>年（4位）</td>
</tr>
<tr>
<td>YYY</td>
<td>年的后三位</td>
</tr>
<tr>
<td>YY</td>
<td>年的后两位</td>
</tr>
<tr>
<td>Y</td>
<td>年的最后一位</td>
</tr>
<tr>
<td rowspan="3">月</td>
<td>MONTH</td>
<td>全长大写月份名</td>
</tr>
<tr>
<td>MON</td>
<td>大写缩写月份名</td>
</tr>
<tr>
<td>MM</td>
<td>月份数（01-12）</td>
</tr>
<tr>
<td rowspan="5">天</td>
<td>DAY</td>
<td>全长大写日期名</td>
</tr>
<tr>
<td>DY</td>
<td>缩写大写日期名</td>
</tr>
<tr>
<td>DDD</td>
<td>一年里的日（001-366）</td>
</tr>
<tr>
<td>DD</td>
<td>一个月里的日（01-31）</td>
</tr>
<tr>
<td>D</td>
<td>一周里的日（1-7 ；周日是 1）</td>
</tr>
<tr>
<td rowspan="2">周</td>
<td>W</td>
<td>一个月里的周数（1-5）（第一周从该月第一天开始）</td>
</tr>
<tr>
<td>WW</td>
<td>一年里的周数（1-53）（第一周从该年的第一天开始）</td>
</tr>
<tr>
<td rowspan="1">世纪</td>
<td>CC</td>
<td>世纪（2位）</td>
</tr>
<tr>
<td rowspan="1">季度</td>
<td>Q</td>
<td>季度</td>
</tr>
</table>

示例：

```
SQL> select to_char(systimestamp, 'YYYY-MM-DD HH:MI:SS A.M.');

TO_CHAR(SYSTIMESTAMP, 'YYYY-MM-DD HH:MI:SS A.M.')
-------------------------------------------------
2025-11-12 09:37:31 AM

1 rows fetched.

SQL> select to_char(systimestamp, 'YYYY-MM-DD HH:MI:SSXFF4');

TO_CHAR(SYSTIMESTAMP, 'YYYY-MM-DD HH:MI:SSXFF4')
------------------------------------------------
2025-11-12 09:27:23.6485

1 rows fetched.

--创建表。
SQL> CREATE TABLE date_t1 (a datetime,b timestamp(6), c timestamp(4) with time zone, d TIMESTAMP(2) WITH LOCAL TIME ZONE); 

--插入数据。
SQL> INSERT INTO date_t1 VALUES ('2025-11-12 09:37:31', systimestamp, systimestamp, systimestamp);

--查看数据。
SQL> SELECT * FROM date_t1;

A                      B                                C                                        D
---------------------- -------------------------------- ---------------------------------------- --------------------------------
2025-11-12 09:37:31    2025-11-20 17:35:31.740367       2025-11-20 17:35:31.7404 +08:00          2025-11-20 17:35:31.74

1 rows fetched.

SQL> DROP TABLE date_t1;
```
