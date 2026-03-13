# 数值类型

**表 1**  整数类型

| 名称  | 描述  | 存储空间  | 范围  |
| :------------ | :------------ | :------------ | :------------ |
| BINARY_INTEGER  | 存储32位有符号整数  |  4字节   |  -2^31 ~ 2^31 - 1   |
| BINARY_UINT32  | 存储32位无符号整数  |  4字节   |  0 ~ 2^32 - 1   |
| BINARY_BIGINT  | 存储64位有符号整数  | 8字节   |  -2^63 ~ 2^63 - 1   |

示例：

```
--创建具有BINARY_INTEGER,BINARY_UINT32,BINARY_BIGINT类型数据的表。
SQL> CREATE TABLE int_type_t2 
(
    a BINARY_INTEGER, 
    b BINARY_UINT32,
    c BINARY_BIGINT
);

--插入数据。
SQL> INSERT INTO int_type_t2 VALUES(100, 10, 1000);

--查看数据。
SQL> SELECT * FROM int_type_t2;

A            B                                        C
------------ ---------------------------------------- --------------------
100          10                                       1000

1 rows fetched.

--删除表。
SQL> DROP TABLE int_type_t2;
```

**表 2** 浮点类型

| 名称  | 描述  | 存储空间  | 范围  |
| :------------ | :------------ | :------------ | :------------ |
| BINARY_DOUBLE  | 存储64位双精度浮点数  |  8字节   |  [-1.79E+308, +1.79E+308]   |

>[!NOTE]说明
>
>- 该数据类型是不精确的，意味着一些数值不能精确地转换成内部格式并且是以近似值存储的，因此存储后再把数据打印出来可能有一些差异。如果想用不精确的类型做任何重要的复杂计算，尤其是那些对范围情况（无穷/下溢）严重依赖的事情，应该仔细评诂SQL和应用实现，直接拿两个浮点数值进行比较，不一定总是能得到预期的结果。 

示例：

```
--创建浮点类型数据的表。
SQL> CREATE TABLE float_type_t2 
(
    a BINARY_DOUBLE
);

--插入数据。
SQL> INSERT INTO float_type_t2 VALUES(1234567.89);

--查看数据。
SQL> SELECT * FROM float_type_t2;

A
--------------------
1234567.89

1 rows fetched.

--删除表。
SQL> DROP TABLE float_type_t2;
```

**表 3** 高精度数值类型

| 名称  | 描述  | 存储空间  | 范围  |
| :------------ | :------------ | :------------ | :------------ |
| NUMBER/DECIMAL/NUMERIC[(p[,s])]  | 存储高精度浮点数<br>1. p取值范围[1,38]，表示能存储的最大精度<br>2. s取值范围[-84,127]，表示小数点后面有效数字个数，若为负数，则将小数点左边对应个数的数字约掉<br>3. 若不指定p和s，表示不对小数点后面的数值做限制，最大能存储40位有效数字<br>4. 若制定了p且未指定s或指定s=0，表示number类型没有小数部分  |  4~24字节   |  (-1.0E128, 1.0E128)   |

示例：

```
--创建不同精度、小数位类型数据的表。
SQL> CREATE TABLE number_type_t2 
(
    a NUMBER, 
    b NUMBER(12),
    c NUMBER(12, 3),
    d NUMBER(12, -2)
);

--插入数据。
SQL> INSERT INTO number_type_t2 VALUES(1234567.89, 1234567.89, 1234567.89, 1234567.89);

--查看数据。
SQL> SELECT * FROM number_type_t2;

A                                        B                                        C                                        D                                  
---------------------------------------- ---------------------------------------- ---------------------------------------- ----------------------------------------
1234567.89                               1234568                                  1234567.89                               1234600                            

1 rows fetched.

--删除表。
SQL> DROP TABLE number_type_t2;
```

>[!NOTE]说明
>
>- 表4列出了在USE_NATIVE_DATATYPE参数控制下，数据类型关键字实际映射的数据类型。该参数为布尔类型，用于解决不同数据库间的兼容性，区分数值类型的关键字，默认值为TRUE。
>
>- 部分关键字不受USE_NATIVE_DATATYPE参数影响，包括：BINARY_INTEGER、BINARY_BIGINT、BINARY_DOUBLE。

**表 4**  数据类型关键字映射表

| 关键字  | USE_NATIVE_DATATYPE=FALSE时映射的数据类型  | USE_NATIVE_DATATYPE=TRUE时映射的数据类型  |
| :------------ | :------------ | :------------ |
| BIGINT  | NUMBER(38)  | BINARY_BIGINT   |
| DOUBLE  | NUMBER  |  BINARY_DOUBLE   |
| FLOAT  | NUMBER  |  BINARY_DOUBLE   |
| INT/INTEGER  | NUMBER(38)  |  BINARY_INTEGER   |
| UINT/INTEGER UNSIGNED  | NUMBER(38)  |  BINARY_UINT32   |
| REAL  | NUMBER  |  BINARY_DOUBLE   |
| SMALLINT  | NUMBER(38)  |  BINARY_INTEGER   |
| TINYINT  | NUMBER(38)  |  BINARY_INTEGER   |
