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

  返回值类型：text

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

  描述：返回表中所有列的值异或为无符号64位整数时的结果

  输入类型：expr

  返回值类型：unsigned int

  注意: 当表中的值的数字或字符串数值为负数时，会自动转换成无符号的数字.

  示例：
  ```sql
  openGauss=# INSERT INTO bit_xor_int4(a) values(-1.11);
  INSERT 0 1
  openGauss=# SELECT BIT_XOR(a) from bit_xor_int4;
  bit_xor 
  ---------
  1
  (1 row)

  openGauss=# INSERT INTO bit_xor_int4(a) values(1.11);
  INSERT 0 1
  openGauss=# SELECT BIT_XOR(a) from bit_xor_int4;
  bit_xor 
  ---------
  0
  (1 row)
  ```
