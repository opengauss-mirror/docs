# 数字操作函数和操作符<a name="ZH-CN_TOPIC_0289900469"></a>

相比于原始的openGauss，dolphin对于时间/日期函数的修改主要为:

1. 新增```DIV/MOD/XOR/^```操作符。
2. 新增```truncate/rand/crc32/conv/float8_bool/oct/float4_bool```函数。

-   DIV

    描述：除（取整）

    示例：

    ```
    openGauss=# SELECT 8 DIV 3 AS RESULT;
     result 
    --------
          2
    (1 row)
    ```

-   MOD

    描述：模（求余）

    示例：

    ```
    openGauss=# SELECT 4 MOD 3 AS RESULT;
     result 
    --------
          1
    (1 row)
    ```

-   XOR

    描述：二进制XOR

    示例：

    ```
    openGauss=# SELECT 4 XOR 3 AS RESULT;
     result 
    --------
          0
    (1 row)
    ```

-   truncate\(v numeric, s int\)

    描述：截断为s位小数。等价于trunc

    返回值类型：numeric

    示例：

    ```
    openGauss=# SELECT truncate(42.4382, 2);
     truncate
    ----------
        42.43
    (1 row)
    ```

-   rand\(\)

    描述：0.0到1.0之间的随机数。等价于random

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT rand();
           rand
    -------------------
     0.254671605769545
    (1 row)
    ```

-   crc32\(string\)

    描述：计算string的crc32数值

    返回值类型：int

    示例：

    ```
    openGauss=# SELECT crc32('abc');
       crc32
    -----------
     891568578
    (1 row)
    ```

-   conv\(input in, current_base int, new_base int\)

    描述：将数字或字符串从一个数字基本系统转换为另一个数字基本系统。in支持数字和字符串两种类型

    返回值类型：text

    示例：

    ```
    openGauss=# SELECT conv(20, 10, 2);
     conv
    -------
     10100
    (1 row)
    
    openGauss=# SELECT conv('8D', 16, 10);
     conv
    ------
     141
    (1 row)
    ```

- ^

  描述：实现两个整数之间的按位异或。

  注意：

  - 异或操作符不支持非0/1的bool类型，也不支持raw类型。
  - 在dolphin插件中，^操作符不再支持对两个整数之间的幂运算。如需要使用两个整数之间的幂运算操作，可以使用power函数。

  返回值类型：INT

  示例：

  ```
  openGauss=# SELECT 1^1;
  ?column?
  ----------
         0
  （1 row）
  
  openGauss=# SELECT 2 ^ 3;
   ?column? 
  ----------
          1
  (1 row)
  
  openGauss=# SELECT power(2,3);
   power 
  -------
       8
  (1 row)
  ```

  描述：当```set dolphin.b_compatibility_mode=0```后，可以实现对float数据的幂运算。当```set dolphin.b_compatibility_mode=1```后，可以实现对float数据的按位异或，对float数据四舍五入后异或。

  返回值类型：DOUBLE

  示例：

  ```
  openGauss=# select 0.5678::float^1.1234::float;
   ?column? 
  ----------
          0
  (1 row)
  ```

- float8_bool(float)

  描述：根据浮点数的取值返回布尔型（为零时返回false，否则返回true）。

  返回值类型：boolean

  示例：

  ```
  openGauss=# select float8_bool(0.1);
   float8_bool 
  -------------
   t
  (1 row)
  ```

  ```
  openGauss=# select float8_bool(0.0);
   float8_bool 
  -------------
   f
  (1 row)
  ```

-   oct\(input N)

    描述：将数字或字符串从一个十进制数字转换为八进制数字。

    返回值类型：text

    示例：

    ```
    openGauss=# SELECT OCT(10);
     oct 
    -----
    12
    (1 row)
    
    openGauss=# SELECT OCT('10');
     oct 
    -----
    12
    (1 row)
    ```

- float4_bool(float)

  描述：根据浮点数的取值返回布尔型（为零时返回false，否则返回true）。

  返回值类型：boolean

  示例：

  ~~~
  openGauss=# select float4_bool(0.1);
   float4_bool 
  -------------
   t
  (1 row)
  ~~~

  ~~~
  openGauss=# select float4_bool(0.0);
   float4_bool 
  -------------
   f
  (1 row)
  ~~~

  