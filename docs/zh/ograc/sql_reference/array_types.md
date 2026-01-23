# 数组类型

数组元素可以是本章节中介绍的基础数据类型。声明语法如下。

## 数组常量表达式

声明语法如下：

```
ARRAY [ param ]
```

或

```
'{ param }'
```

其中：

- param：数组包含的值，允许出现零个或多个，多个值之间用逗号分隔，成员没有值可写成NULL。
- 以第一个元素的数据类型作为数组的数据类型，因此要求所有元素的类型相同，或者能够相互转换。

>[!NOTE]说明
>
>- 不支持BINARY、VARBINARY、CLOB、BLOB、CURSOR、RAW、IMAGE数据类型的数组。
>- 不支持多维数组。
>- 不支持在数组类型的字段上创建索引、主键、外键和唯一键约束。

## 字段类型

建表时支持将字段类型设置为数组类型，语法如下：

```
data_type [(n)]
```

其中：

- data_type：基础数据类型
- n：数组长度

>[!NOTE]说明
>
>- 给定的数组长度n并没有实际作用，数组会自动增长，访问越界会返回一个NULL，不会报错。长度最大可达2^31 - 1。数组字段中的元素值实际存储于LOB段中，最大支持4GB - 1，因此能够存储的元素个数取决于元素的数据类型。
>- 支持使用中括号来访问数组元素，下标从1开始。

示例：

```
SQL> create table array_t1 (a int[2]);

SQL> insert into array_t1 values (array[1,2]);

1 rows affected.

SQL> select a[3] from array_t1;

A
----------------------------------------


1 rows fetched.

SQL> select a[2] from array_t1;

A
----------------------------------------
2

1 rows fetched.

-- 批量更新数组元素
SQL> update array_t1 set a[2:4] = '{3,4,5}';

SQL> select a from array_t1;

A
----------------------------------------------------------------
{1,3,4,5}

1 rows fetched.

SQL> drop table array_t1;
```
