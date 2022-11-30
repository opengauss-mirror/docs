# 位串操作函数和操作符<a name="ZH-CN_TOPIC_0289900469"></a>

相比于原始的openGauss，dolphin对于位串函数的修改主要为:

1. 新增```bit_bool```函数。

- bit_bool(bit)

  描述：根据位串中的数据返回布尔型（全部为零时返回false，否则返回true）。

  返回值类型：boolean

  示例：
  ~~~
  openGauss=# select bit_bool('11111');
   bit_bool
  ----------
   t
  (1 row)
  ~~~

  ~~~
  openGauss=# select bit_bool('00001');
   bit_bool
  ----------
   t
  (1 row)
  ~~~

  ~~~
  openGauss=# select bit_bool('00000');
   bit_bool
  ----------
   f
  (1 row)
  ~~~
