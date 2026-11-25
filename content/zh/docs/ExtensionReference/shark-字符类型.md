---
description: 相比于原始的openGauss，shark对于字符类型的修改主要为：.
keywords: [openGauss, 字符类型]
---

# 字符类型

相比于原始的openGauss，shark对于字符类型的修改主要为：

1. n\N前缀修饰的字符串，其类型为nvarchar2，原始openGauss为bpchar类型。


示例：
```sql
openGauss=# create database testd dbcompatibility = 'D';
CREATE DATABASE
openGauss=# \c testd
Non-SSL connection (SSL connection is recommended when requiring high-security)
You are now connected to database "testd" as user "omm".
testd=# create extension shark;
CREATE EXTENSION
testd=# show d_format_behavior_compat_options;
 d_format_behavior_compat_options
----------------------------------

(1 row)

testd=# set d_format_behavior_compat_options = '';
SET
testd=# select n'abc';
 nvarchar2
-----------
 abc
(1 row)

```
