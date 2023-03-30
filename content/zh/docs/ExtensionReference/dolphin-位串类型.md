# 位串类型<a name="ZH-CN_TOPIC_0289900674"></a>

相比于原始的openGauss，dolphin对于位串类型的修改主要为：

1. bit类型的数据是最长为n的变长类型，超过n的类型会被拒绝。bit varying类型的数据是最长为n的变长类型，超过n的类型会被拒绝。
2. 如果用户明确地把一个位串值转换成bit\(n\)，则此位串右边的内容将被截断或者在左边补齐零，直到刚好n位，而不会抛出任何错误。

```
--创建表。
openGauss=# CREATE TABLE bit_type_t1 
(
    BT_COL1 INTEGER,
    BT_COL2 BIT(3),
    BT_COL3 BIT VARYING(5)
) ;

--将不符合类型长度的数据进行转换。
openGauss=# INSERT INTO bit_type_t1 VALUES(2, B'1000'::bit(3), B'101');

--查看数据。
openGauss=# SELECT * FROM bit_type_t1;
 bt_col1 | bt_col2 | bt_col3 
---------+---------+---------
       2 | 100     | 101
(2 rows)

--对长度不足的未串转换为bit(n)，会在最左侧补齐零。
openGauss=# SELECT B'10'::bit(4);
  bit   
--------
 000010
(1 row)

--删除表。
openGauss=# DROP TABLE bit_type_t1;
```