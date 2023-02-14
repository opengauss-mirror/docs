# EXPORT-SET 

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

EXPORT_SET(bits,on,off[, separator[, number_of_bits]])。

返回一个字符串，该字符串生成规则如下：对于bits中每个二进制位，若是1，则拼接on到结果字符串。否则，拼接off到结果字符串。其间用separator隔开，字符串的长度由number_of_bits决定。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

- 必须输入前三个参数。第一个参数（bits）需要输入数字，第二个参数（on）和第三个参数（off）需要输入字符串。


## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
EXPORT_SET(bits,on,off[, separator[, number_of_bits]])
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **bits**

    - 输入格式为数字。可以输入任意长度的数字。函数会从右到左（从低位到高位）检查二进制位，字符串从左到右添加到结果中。
    - 当输入数字超过2^ 64或者小于-2^ 63时，输入数字按照PG_INT64_MAX和PG_INT64_MIN处理。

- **on&&off**

   输入格式为字符串即可。如：'YYYY'。
- **separator**

    结果字符串由separator字符串分隔（默认为逗号字符,）。输入格式为字符串。如：','。

- **number_of_bits**

    检查的位数由number_of_bits指定，如果未指定，则默认为64。事实上，除0-64外，负数乃至正无穷，均默认为64。

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
openGauss=# SELECT EXPORT_SET(5,'Y','N',',',5);
 export_set 
------------
 Y,N,Y,N,N
(1 row)

openGauss=# SELECT EXPORT_SET(5,'Y','N',',');
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,N,Y,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N
(1 row)

openGauss=# SELECT EXPORT_SET(5,'Y','N');
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,N,Y,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N
(1 row)

-- 测试上界
openGauss=# SELECT EXPORT_SET(18446744073709551615,'Y','N',',',64);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y
(1 row)

openGauss=# SELECT EXPORT_SET(18446744073709551616,'Y','N',',',64);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,N
(1 row)

openGauss=# SELECT EXPORT_SET(18446744073709551617,'Y','N',',',64);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,N
(1 row)

-- 测试下界
openGauss=# SELECT EXPORT_SET(-9223372036854775807,'Y','N',',',64);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,Y
(1 row)

openGauss=# SELECT EXPORT_SET(-9223372036854775808,'Y','N',',',64);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,Y
(1 row)

openGauss=# SELECT EXPORT_SET(-9223372036854775809,'Y','N',',',64);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,Y
(1 row)

-- 测试超长参数
openGauss=# SELECT EXPORT_SET(-111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111,'Y','N',',',64);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,Y
(1 row)

openGauss=# SELECT EXPORT_SET(111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111,'Y','N',',',64);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,N
(1 row)

-- 测试长度参数
openGauss=# SELECT EXPORT_SET(5,'Y','N',',',64);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,N,Y,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N
(1 row)

openGauss=# SELECT EXPORT_SET(5,'Y','N',',',65);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,N,Y,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N
(1 row)

openGauss=# SELECT EXPORT_SET(5,'Y','N',',',-1);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,N,Y,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N
(1 row)

openGauss=# SELECT EXPORT_SET(5,'Y','N',',',111111111111111111111111111111111111111111111111111111111111111111111111111111111);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,N,Y,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N
(1 row)

openGauss=# SELECT EXPORT_SET(5,'Y','N',',',-111111111111111111111111111111111111111111111111111111111111111111111111111111111);
                                                           export_set                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Y,N,Y,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N
(1 row)

-- 测试字符串
openGauss=# SELECT EXPORT_SET(5,'YYYYYYYYYYYYYYYY','N',',',5);
               export_set                
-----------------------------------------
 YYYYYYYYYYYYYYYY,N,YYYYYYYYYYYYYYYY,N,N
(1 row)

openGauss=# SELECT EXPORT_SET(5,'Y','NNNNNNNNNNNNNNN',',',5);
                     export_set                      
-----------------------------------------------------
 Y,NNNNNNNNNNNNNNN,Y,NNNNNNNNNNNNNNN,NNNNNNNNNNNNNNN
(1 row)

openGauss=# SELECT EXPORT_SET(5,'Y','N',',,,,,,,,,,,,',5);
                      export_set                       
-------------------------------------------------------
 Y,,,,,,,,,,,,N,,,,,,,,,,,,Y,,,,,,,,,,,,N,,,,,,,,,,,,N
(1 row)
```
