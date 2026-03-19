# 字符类型

相比于原始的openGauss，shark对于字符类型的修改主要为：

1. n\N前缀修饰的字符串，其类型为nvarchar2，原始openGauss为bpchar类型。


示例：
```
openGauss=# select n'abc';
 nvarchar2
-----------
 abc
(1 row)

```