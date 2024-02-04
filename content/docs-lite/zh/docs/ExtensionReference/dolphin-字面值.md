# dolphin-字面值

## 字符串文本

相比于原始的openGauss，dolphin对于字符串文本的修改主要为：

- 相邻放置的带引号的字符串连接为一个字符串。

示例：
```sql
openGauss=# select 'a string' as col;
   col
----------
 a string
(1 row)

openGauss=# select 'a' ' ' 'string' as col;
   col
----------
 a string
(1 row)
```
