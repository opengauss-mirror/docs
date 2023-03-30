# 列名标识符<a name="ZH-CN_TOPIC_0245374853"></a>

## 注意事项

相比于原始的openGauss，dolphin对于列名标识符的修改为：
-   列名及别名信息敏感存储、显示，不考虑是否使用双引号包围列名标识符。
-   列名及别名信息不敏感的比较，即列名 "aAa" 和 "AAa" 标识相同列。

示例：

```
openGauss=#  create database col_name dbcompatibility 'B';
CREATE DATABASE

openGauss=#  \c col_name

col_name=# create table t1(aAa int);
CREATE TABLE

col_name=# insert into t1 values(1);
INSERT 0 1

col_name=# select * from t1;
 aAa
-----
   1
(1 row)

col_name=# select "AAa" from t1;
 AAa
-----
   1
(1 row)

col_name=# select aaa AS AaA  from t1;
 AaA
-----
   1
(1 row)
```