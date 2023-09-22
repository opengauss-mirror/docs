# 位串操作函数和操作符

相比于原始的openGauss，dolphin对于位串函数的修改主要为:

1. 新增```bit_bool```函数。
2. 新增```^```操作符。
3. 新增```bit_count```函数。
4. 新增```bit_xor```函数。

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

- ^

  描述：实现bit类型数据的按位异或。

  返回值类型：bit

  示例：

  ```
  openGauss=# select b'1001'^b'1100';
   ?column? 
  ----------
   0101
  (1 row)
  ```

- bit_count(N)

  描述：返回输入数据转为无符号64位整数时二进制字符串中位为1的数目

  输入类型：numeric text bit

  返回值类型：整数

  注意: 当输入的数字或字符串数值超过无符号64位整数范围，返回结果统一为64；当输入的bit超过64个1时，返回结果为1.

  示例：
  ~~~
  openGauss=# SELECT bit_count(29);
   bit_count 
  ----------
   4
  (1 row)
  ~~~

  ~~~
  openGauss=# SELECT bit_count(b'101010');
   bit_count 
  ----------
   3
  (1 row)
  ~~~

- bit_xor(expr)

  描述：返回表中所有列的值的异或，并返回按位转换成为无符号64位整数。

  输入类型：expr

  返回值类型：uint64

  注意: 
  1. 该函数为聚合函数，如果最终结果为负数，会当作64位无符号数字返回。例如，-1，按位转换成64位无符号数字为18446744073709551615（2^64-1）。
  2. 单独调用该函数而不是从table中取数据（例如`select bit_xor(1)`），函数的边界值是64位有符号整数（-9223372036854775808 ~ 9223372036854775807），与MySQL不同。
  3. 对列类型是字符串类型的数据进行聚合（例如，text），会转换成数字再进行聚合，小数部分直接舍去（1.6 -> 1），如数字超过64位有符号整数范围，不会报错，同时，将数字截断至64位整数的上下界（-9223372036854775808 ~ 9223372036854775807）。
  4. 函数表现与mysql侧 `select bit_xor(col) from table` 相同，与直接`select bit_xor()`不同。
  
  示例：
  ```sql
  openGauss=# INSERT INTO bit_xor_int4(a) values(-1.11);
  INSERT 0 1
  openGauss=# SELECT BIT_XOR(a) from bit_xor_int4;
  bit_xor 
  ---------
  18446744073709551615
  (1 row)

  openGauss=# INSERT INTO bit_xor_int4(a) values(1.11);
  INSERT 0 1
  openGauss=# SELECT BIT_XOR(a) from bit_xor_int4;
  bit_xor 
  ---------
  18446744073709551614
  (1 row)
  ```
