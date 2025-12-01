# 返回集合的函数<a name="ZH-CN_TOPIC_0289900562"></a>

## 序列号生成函数<a name="zh-cn_topic_0283137117_zh-cn_topic_0237121985_zh-cn_topic_0059779332_sfde916b05a3b4024b5cddf1ccf83a8f2"></a>

-   generate\_series\(start, stop\)

    描述：生成一个数值序列，从start到stop，步长为1。

    参数类型：int、bigint、numeric

    返回值类型：setof int、setof bigint、setof numeric（与参数类型相同）

-   generate\_series\(start, stop, step\)

    描述：生成一个数值序列，从start到stop，步长为step。

    参数类型：int、bigint、numeric

    返回值类型：setof int、setof bigint、setof numeric（与参数类型相同）

-   generate\_series\(start, stop, step interval\)

    描述：生成一个数值序列，从start到stop，步长为step。

    参数类型：timestamp或timestamp with time zone

    返回值类型：setof timestamp或setof timestamp with time zone（与参数类型相同）


如果step是正数且start大于stop，则返回零行。相反，如果step是负数且start小于stop，则也返回零行。如果输入是NULL，同样产生零行。如果step为零则是一个错误。

示例：

```
openGauss=# SELECT * FROM generate_series(2,4);
 generate_series
-----------------
               2
               3
               4
(3 rows)

openGauss=# SELECT * FROM generate_series(5,1,-2);
 generate_series
-----------------
               5
               3
               1
(3 rows)

openGauss=# SELECT * FROM generate_series(4,3);
 generate_series
-----------------
(0 rows)

--这个示例应用于date-plus-integer操作符。
openGauss=# SELECT current_date + s.a AS dates FROM generate_series(0,14,7) AS s(a);
   dates
------------
 2017-06-02
 2017-06-09
 2017-06-16
(3 rows)

openGauss=# SELECT * FROM generate_series('2008-03-01 00:00'::timestamp, '2008-03-04 12:00', '10 hours');
   generate_series   
---------------------
 2008-03-01 00:00:00
 2008-03-01 10:00:00
 2008-03-01 20:00:00
 2008-03-02 06:00:00
 2008-03-02 16:00:00
 2008-03-03 02:00:00
 2008-03-03 12:00:00
 2008-03-03 22:00:00
 2008-03-04 08:00:00
(9 rows)
```

## 下标生成函数<a name="zh-cn_topic_0283137117_zh-cn_topic_0237121985_zh-cn_topic_0059779332_s25da07a4e3f84281af7e30b081b29a88"></a>

-   generate\_subscripts\(array anyarray, dim int\)

    描述：生成一系列包括给定数组的下标。

    返回值类型：setof int

-   generate\_subscripts\(array anyarray, dim int, reverse boolean\)

    描述：生成一系列包括给定数组的下标。当reverse为真时，该系列则以相反的顺序返回。

    返回值类型：setof int


generate\_subscripts是一个为给定数组中的指定维度生成有效下标集的函数。如果数组中没有所请求的维度或者NULL数组，返回零行（但是会给数组元素为空的返回有效下标）。示例：

```
--基本用法。
openGauss=# SELECT generate_subscripts('{NULL,1,NULL,2}'::int[], 1) AS s;
 s 
---
 1
 2
 3
 4
(4 rows)
```

```
--unnest一个2D数组。
openGauss=# CREATE OR REPLACE FUNCTION unnest2(anyarray)
RETURNS SETOF anyelement AS $$
SELECT $1[i][j]
   FROM generate_subscripts($1,1) g1(i),
        generate_subscripts($1,2) g2(j);
$$ LANGUAGE sql IMMUTABLE;

openGauss=# SELECT * FROM unnest2(ARRAY[[1,2],[3,4]]);
 unnest2 
---------
       1
       2
       3
       4
(4 rows)

--删除函数。
openGauss=# DROP FUNCTION unnest2;
```

