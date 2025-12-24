# CREATE SEQUENCE
序列（Sequence）是数据库中一种特殊对象，用于生成唯一、递增或递减的数值序列。
CREATE SEQUENCE用于向当前数据库中增加一个新的序列生成器。序列的Owner为创建此序列的用户。

## 语法格式 

```sql
CREATE SEQUENCE [Schema.]sequence_name
[INCREMENT BY INCREMENT_VALUE] | 
[ START WITH START_VALUE ] | 
[{MINVALUE MIN_VALUE} | {NOMINVALUE}]
[{MAXVALUE MAX_VALUE} | {NOMAXVALUE}]
[{CYCLE} | {NOCYCLE}]
[{CACHE CACHE_SIZE} | {NOCACHE}]
[{ORDER} | {NOORDER}];
```

## 参数说明 

- [Schema.]sequence_name : 将要创建的序列名称。如果指定了模式名，则序列将在该模式中创建，否则将在当前模式中创建。
- INCREMENT BY INCREMENT_VALUE : 指定序列的步长。一个正数将生成一个递增的序列，一个负数将生成一个递减的序列。缺省值默认为1。
- START WITH START_VALUE : 指定序列的起始值。缺省值：对于递增序列为MIN_VALUE，递减序列为MAX_VALUE。
- [{MINVALUE MIN_VALUE} | {NOMINVALUE}] : 执行序列的最小值。
    - 如果没有声明MINVALUE或者声明了NOMINVALUE，则递增序列的缺省值为1，递减序列的缺省值为-2^63+1。
- [{MAXVALUE MAX_VALUE} | {NOMAXVALUE}] : 执行序列的最大值。
    - 如果没有声明MAXVALUE或者声明了NOMAXVALUE，则递增序列的缺省值为2^63-1，递减序列的缺省值为-1。
- [{CYCLE} | {NOCYCLE}] : 用于使序列达到MAX_VALUE或者MIN_VALUE后可循环并继续下去。
    - 如果声明了CYCLE，则在序列达到其最大值后任何对NEXTVAL的调用都会返回一个错误。
    - 若定义序列为CYCLE，则不能保证序列的唯一性。
    - 缺省值为NOCYCLE。
- [{CACHE CACHE_SIZE} | {NOCACHE}] : 为了快速访问，而在内存中预先存储序列号的个数。
    - 如果声明了CACHE，则在内存中缓存CACHE_SIZE个序列号，每次调用nextval()函数时，会从缓存中返回一个序列号。如果缓存为空，则会从数据库中读取序列号。
    - 如果声明了CACHE，CACHE_SIZE的默认值为20，最小为2。
    - 如果声明了NOCACHE，则每次调用nextval()函数时，都会从数据库中读取序列号。
- [{ORDER} | {NOORDER}] : 用于指定序列是否按顺序生成。
    - 如果声明了ORDER，则保证序列号按照请求顺序生成。
    - 如果声明了NOORDER，则序列不按顺序生成。
    - 缺省值为NOORDER。

## 示例 ​
```sql
-- 最基础的序列创建示例
-- 序列名称 MY_SEQUENCE MIN_VALUE 1 MAX_VALUE 2^63-1 INCREMENT_BY 1 CYCLE_FLAG 0 ORDER_FLAG 0 CACHE_SIZE 20
SQL> CREATE SEQUENCE my_sequence;

Succeed.

SQL> select * from ADM_SEQUENCES where SEQUENCE_NAME = 'MY_SEQUENCE';

SEQUENCE_OWNER                                                   SEQUENCE_NAME                                                    MIN_VALUE            MAX_VALUE            INCREMENT_BY         CYCLE_FLAG   ORDER_FLAG   CACHE_SIZE           LAST_NUMBER         
---------------------------------------------------------------- ---------------------------------------------------------------- -------------------- -------------------- -------------------- ------------ ------------ -------------------- --------------------
SYS                                                              MY_SEQUENCE                                                      1                    9223372036854775807  1                    0            0            20                   1                   

1 rows fetched.

-- 递增序列创建 序列名称 MY_SEQUENCE 
-- 最小值 10 最大值 1000 
-- 递增步长 5 是否循环 TRUE 是否有序 TRUE 
-- 缓存数量 50
SQL> CREATE SEQUENCE my_sequence
  2 INCREMENT BY 5
  3 START WITH 100
  4 MINVALUE 10
  5 MAXVALUE 1000
  6 CYCLE
  7 CACHE 50
  8 ORDER;

Succeed.

SQL> select * from ADM_SEQUENCES where SEQUENCE_NAME = 'MY_SEQUENCE';

SEQUENCE_OWNER                                                   SEQUENCE_NAME                                                    MIN_VALUE            MAX_VALUE            INCREMENT_BY         CYCLE_FLAG   ORDER_FLAG   CACHE_SIZE           LAST_NUMBER         
---------------------------------------------------------------- ---------------------------------------------------------------- -------------------- -------------------- -------------------- ------------ ------------ -------------------- --------------------
SYS                                                              MY_SEQUENCE                                                      10                   1000                 5                    1            1            50                   100                 

1 rows fetched.

-- 创建递减序列 序列名称 MY_SEQUENCE 
-- 最小值 -2^63+1 最大值 10000 
-- 递减步长 -10 是否循环 FALSE 是否有序 FALSE 
-- 缓存数量 50
SQL> CREATE SEQUENCE my_sequence
  2 INCREMENT BY -10
  3 START WITH 10000
  4 NOMINVALUE
  5 MAXVALUE 10000
  6 NOCYCLE
  7 CACHE 50
  8 NOORDER;

Succeed.

SQL> select * from ADM_SEQUENCES where SEQUENCE_NAME = 'MY_SEQUENCE';

SEQUENCE_OWNER                                                   SEQUENCE_NAME                                                    MIN_VALUE            MAX_VALUE            INCREMENT_BY         CYCLE_FLAG   ORDER_FLAG   CACHE_SIZE           LAST_NUMBER         
---------------------------------------------------------------- ---------------------------------------------------------------- -------------------- -------------------- -------------------- ------------ ------------ -------------------- --------------------
SYS                                                              MY_SEQUENCE                                                      -9223372036854775808 10000                -10                  0            0            50                   10000               

1 rows fetched.

```