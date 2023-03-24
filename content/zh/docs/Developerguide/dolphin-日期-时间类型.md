## 兼容MySQL时间类型

相比于原始的openGauss，dolphin对于日期/时间类型的修改主要为: 

1. 修改```date/time/datetime/timestamp```类型的表现。
2. 新增```year```数据类型。

> 注意：由于 openGauss 固有的特性导致无法完全兼容MySQL时间数据类型的所有特性，因此需要根据本文档的要求进行特性的使用，避免使用文档描述外的特性，同时兼容后的特性已经覆盖了绝大部分场合的使用需求。


| 类型         | 描述                                                         | 存储空间 | 取值范围(用户可输入范围)             | 精度范围                                             | 备注                                                         |
| ------------ | ------------------------------------------------------------ | -------- | ------------------------------------ | ---------------------------------------------------- | ------------------------------------------------------------ |
| date         | 日期                                                         | 4 字节   | 4713 BC ~ 5874897 AD                 | -                                                    | (1)输入必须为有效日期，不支持月份或者天数为零值；(2)若年份大于等于10000，必须以'YYYY-MM-DD'的形式进行输入；(3)若输入数据没有指定是BC还是AD，则默认为AD； |
| time(p)      | 可以用于表示一天中的时间或者一段时间(时分秒)，p 表示精度     | 8 字节   | -838:59:59[.frac] ~ 838:59:59[.frac] | p表示小数点后的精度，取值范围为0~6，如不指定默认为 0 | -                                                            |
| datetime(p)  | 日期和时间，不带时区信息，p 表示精度                         | 8字节    | 0 AD ~ 294276 AD                     | p表示小数点后的精度，取值范围为0~6，如不指定默认为 0 | (1)输入必须为有效日期，不支持月份或者天数为零值；(2)当输入的年份大于等于10000时，必须使用'YYYY-MM-DD'的格式进行输入； |
| timestamp(p) | 日期和时间，带时区信息，p 表示精度                           | 8字节    | 0 AD ~ 294276 AD                     | p表示小数点后的精度，取值范围为0~6，如不指定默认为 0 | (1)输入必须为有效日期，不支持月份或者天数为零值；(2)注意，timestamp 类型在原来 openGauss 数据库中表示不带时区的时间戳，兼容后的 timestamp 类型往 MySQL 数据库靠拢，表示带时区信息的时间戳，因此存在兼容性问题；(3)当输入的年份大于等于10000时，必须使用'YYYY-MM-DD'的格式进行输入； |
| year(w)      | 年份，w 表示 "display width"，year(4)、year 形式输出为 'YYYY' 形式，year(2) 形式输出为 'YY' | 2字节    | 1901 ~ 2155                          | -                                                    | -                                                            |

备注

- 注意，对于MySQL，在使用 CREATE TABLE 或者 ALTER TABLE 语句中，如果定义时间类型(例如 timestamp、datetime、time)列属性时不指定精度，则默认为 0。同时，使用 cast(expr as typename) 语法进行类型转换时，如果目标类型没有指定精度，那么默认精度也为 0。因此，如果用户需要保留数据的输入精度，则需要显式使用 typmod。
- 同时，兼容后的时间类型，使用 :: 进行类型转换，如果目标类型没有指定精度，那么默认精度也为 0。

### date 类型输入

支持如下格式：

| 格式                      | 含义   |
| ------------------------- | ------ |
| 'YYYY-MM-DD' , 'YY-MM-DD' | 年月日 |
| 'YYYYMMDD' 、'YYMMDD'     | 年月日 |
| YYYYMMDD、YYMMDD          | 年月日 |

备注：

- 输入必须为有效日期，不支持月份或者日期为零值
- 由于 MySQL 原本的年份取值范围在 10000 以内，因此由于 MySQL 原本的年份取值范围在 10000 以内，因此如果想要输入大于等于 10000 年份的日期，请使用 'YYYY-MM-DD' 这种格式，例如 '10100-12-12'
- 允许输入 0000 年，同时在 openGauss 中，认为 0000 年为闰年，可以输入 0000-2-29 (MySQL不允许)

示例(注意下方 openGauss 数据库兼容性为 b)

```sql
--创建表。
openGauss=# CREATE TABLE test_date(
openGauss(# dt date);
CREATE TABLE
    
--插入数据。
openGauss=# INSERT INTO test_date VALUES ('2020-12-21');
INSERT 0 1
openGauss=# INSERT INTO test_date VALUES ('141221');
INSERT 0 1
openGauss=# INSERT INTO test_date VALUES (20151022);
INSERT 0 1

--查看数据。
openGauss=# SELECT * FROM test_date;
     dt     
------------
 2020-12-21
 2014-12-21
 2015-10-22
(3 rows)
```



### time 类型输入

支持如下格式：

| 格式                           | 含义                                                   |
| ------------------------------ | ------------------------------------------------------ |
| '\[-\]\[D\] hh:mm:ss\[.frac\]' | 时分秒，前方可以指定为负，D 表示天数，取值范围为[0-34] |
| '\[-\]hhmmss\[.frac\]'         | 时分秒                                                 |
| \[-\]hhmmss\[.frac\]           | 时分秒                                                 |

备注：

- 对于格式 'hh:mm:ss' ，还支持宽松的类型 'hh:mm' 和 'ss' 的输入格式
- 当输入整数 0 时，代表的值为 '00:00:00'，也是 time 类型的零值
- 由于 time 类型兼容后范围可大于 24 小时，并非仅能表示一天中的时间，请勿将 time 类型转型为 timetz 类型

示例(注意下方 openGauss 数据库兼容性为 b)

```sql
--创建表。
openGauss=# CREATE TABLE test_time(
openGauss(# ti time(2));
CREATE TABLE
    
--插入数据。
openGauss=# INSERT INTO test_time VALUES ('2 9:12:24.1234');
INSERT 0 1
openGauss=# INSERT INTO test_time VALUES ('-34:56:59.1234');
INSERT 0 1
openGauss=# INSERT INTO test_time VALUES (561234);
INSERT 0 1

--查看数据。
openGauss=# SELECT * FROM test_time;
      ti      
--------------
 57:12:24.12
 -34:56:59.12
 56:12:34
(3 rows)
```

### datetime 类型输入

支持如下格式：

| 格式                                                         | 含义   |
| ------------------------------------------------------------ | ------ |
| 'YYYY-MM-DD hh:mm:ss\[.frac\]'，'YY-MM-DD hh:mm:ss\[.frac\]' | 时间戳 |
| 'YYYYMMDDhhmmss'， 'YYMMDDhhmmss'                            | 时间戳 |
| YYYYMMDDhhmmss，YYMMDDhhmmss                                 | 时间戳 |

备注：

- 输入必须为有效日期，不支持月份或者日期为零值
- 对于'YYYYMMDDhhmmss' 和 'YYMMDDhhmmss' 格式，只有当字符串长度刚好为 8 或者 14 的时候，才会将字符串前4位字母识别为年的部分，其余都只会将前2位字母识别为年的部分
- 对于输入为 YYYYMMDDhhmmss 或 YYMMDDhhmmss 格式，输入的整数长度应该为 6/8/12/14 其中之一，如果长度不满足这个要求，则相当于往整数前方添加零，直到长度符合 6/8/12/14 其中之一(长度为6对应为YYMMDD格式，长度为8对应为YYYYMMDD格式，长度为12对应为YYMMDDhhmmss格式，长度为14对应为YYYYMMDDhhmmss格式)
- 类似兼容后的 date 类型，如果要想输入年份大于等于 10000 的时间戳，请使用 'YYYY-MM-DD hh:mm:ss\[.frac\]' 这种格式

示例(注意下方 openGauss 数据库兼容性为 b)

```sql
--创建表。
openGauss=# CREATE TABLE test_datetime(
openGauss(# dt datetime(2));
CREATE TABLE
    
--插入数据。
openGauss=# INSERT INTO test_datetime VALUES ('2020-11-08 02:31:25.961');
INSERT 0 1
openGauss=# INSERT INTO test_datetime VALUES (201112234512);
INSERT 0 1

--查看数据。
openGauss=# SELECT * FROM test_datetime;
           dt           
------------------------
 2020-11-08 02:31:25.96
 2020-11-12 23:45:12
(3 rows)
```

### timestamp 类型输入

支持如下格式：

| 格式                                                         | 含义             |
| ------------------------------------------------------------ | ---------------- |
| 'YYYY-MM-DD hh:mm:ss\[.frac\]\[+/-hh:mm:ss\]'， 'YY-MM-DD hh:mm:ss\[.frac\]\[+/-hh:mm:ss\]' | 带时区信息时间戳 |
| 'YYYYMMDDhhmmss\[.frac\]'， 'YYMMDDhhmmss\[.frac]'           | 带时区信息时间戳 |
| YYYYMMDDhhmmss\[.frac\]，YYMMDDhhmmss\[.frac\]               | 带时区信息时间戳 |

备注：

- 输入必须为有效日期，不支持月份或者日期为零值
- 兼容的 timestamp 类型允许在格式'YYYY-MM-DD hh:mm:ss\[.frac\]'后面带上时区的偏移信息\[+/-hh:mm:ss\]
- 类似兼容后的 date 类型，如果要想输入年份大于等于 10000 的时间戳，请使用 'YYYY-MM-DD hh:mm:ss\[.frac\]' 这种格式
- 注意，timestamp 类型在 MySQL 一端为不带时区的时间戳，而在 openGauss 一端为带时区的时间戳，实际上兼容后 timestamp 类型在内部会使用 timestamptz 类型存储，请用户在使用前注意这种区别，如想使用不带时区的时间戳，可以使用 datetime 类型。
- 注意：由于 MySQL 一端没有 timestamp with\[out\] time zone 这种语法，但是我们仍然在 openGauss 保留这种语法。timestamp with time zone 等价于直接原来 openGauss timestamptz 类型，timestamp without time zone 等价于直接使用原来 openGauss 中的 timestamp 类型(并非兼容后的 timestamp 类型，是指 openGauss 原有的不带时区属性的 timestamp 类型)

示例(注意下方 openGauss 数据库兼容性为 b)

```sql
--创建表。
openGauss=# CREATE TABLE test_timestamp(
openGauss(# ts timestamp(2));
CREATE TABLE
    
--插入数据。
openGauss=# INSERT INTO test_timestamp VALUES ('2012-10-21 23:55:23-12:12');
INSERT 0 1
openGauss=# INSERT INTO test_timestamp VALUES (201112234512);
INSERT 0 1

--查看数据。
openGauss=# SELECT * FROM test_timestamp;
           ts           
------------------------
 2012-10-22 20:07:23
 2020-11-12 23:45:12
(3 rows)
    
--变更时区。
openGauss=# SET TIME ZONE UTC;
SET
--查看数据。
openGauss=# SELECT * FROM test_timestamp;
           ts           
------------------------
 2012-10-22 12:07:23
 2020-11-12 15:45:12
(3 rows)
```

### year/year(4)，year(2)类型输入

支持如下格式：

| 格式          | 含义                                                         |
| ------------- | ------------------------------------------------------------ |
| 'YYYY'， 'YY' | 年，当输入两位数年份时，若值小于70，则实际年份需要加上2000，例如'69'表示2069年；若值大于等于70，则实际年份需要加上1900，例如'70'表示1970年 |
| YYYY， YY     | 年                                                           |

备注

- 三种类型都接受相同的输入格式和范围，区别仅在于 year(2) 类型输出格式只为 2 位数
- 如果输入'0'，openGuass 会解析成为 2000 年；但是当输入的是整数0，openGauss 会解析成为 0，表示 year类型的 0 值

示例(注意下方 openGauss 数据库兼容性为 b)

```sql
--创建表。
openGauss=# CREATE TABLE test_year(
openGauss(#  y year,
openGauss(#  y2 year(2));
CREATE TABLE
    
--插入数据。
openGauss=# INSERT INTO test_year VALUES ('70', '70');
INSERT 0 1
openGauss=# INSERT INTO test_year VALUES ('69', '69');
INSERT 0 1
openGauss=# INSERT INTO test_year VALUES ('2069', '2069');
INSERT 0 1
openGauss=# INSERT INTO test_year VALUES ('1970', '1970');
INSERT 0 1

--查看数据。
openGauss=# SELECT * FROM test_year;
  y   | y2 
------+----
 1970 | 70
 2069 | 69
 2069 | 69
 1970 | 70
(4 rows)
```

