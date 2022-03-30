# DISTINCT<a name="ZH-CN_TOPIC_0000001209981904"></a>

DISTINCT关键字与SELECT语句一起使用，用于去除重复记录，只获取唯一的记录。

当一个表中有多个重复记录，当提取这样的记录时，DISTINCT关键字就显得特别有意义，它只获取唯一一次记录，而不是获取重复记录。

## 语法格式<a name="zh-cn_topic_0000001180098772_section1693783720369"></a>

```
SELECT  DISTINCT [ ON ( expression [, ...] ) ] ]
{ * | [column, ...] }
[ FROM from_item [, ...] ];
```

## 参数说明<a name="zh-cn_topic_0000001180098772_section15362151918382"></a>

-   **DISTINCT \[ ON \( expression \[, ...\] \) \]**

从SELECT的结果集中删除所有重复的行，使结果集中的每行都是唯一的。

ON \( expression \[, ...\] \) 只保留那些在给出的表达式上运算出相同结果的行集合中的第一行。

## 示例<a name="section471751183616"></a>

在表customer\_t1中插入两条数据：

```
openGauss=# INSERT INTO customer_t1 (c_customer_sk, c_customer_id, c_first_name,Amount) VALUES 
    (6881, 'maps', 'Lily',1000),
    (4320, 'tpcds', 'Lily',2000);
```

现在数据如下：

```
openGauss=# SELECT * FROM customer_t1 ;
 c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
---------------+---------------+--------------+-------------+--------
          3869 | hello         | Grace        |             |   1000
          3869 | hello         | Grace        |             |   1000
          3869 |               | Grace        |             |
          3869 | hello         |              |             |
          3869 | hello         |              |             |
               |               |              |             |
          6985 | maps          | Joes         |             |   2200
          9976 | world         | James        |             |   5000
          4421 | Admin         | Local        |             |   3000
          6881 | maps          | Lily         |             |   1000
          4320 | tpcds         | Lily         |             |   2000
(11 rows)
```

查询customer\_t1表中所有的c\_first\_name。其中存在两个Lily和三个Grace。

```
openGauss=# SELECT c_first_name  FROM customer_t1 ;
 c_first_name
--------------
 Grace
 Grace
 Grace



 Joes
 James
 Local
 Lily
 Lily
(11 rows)
```

在SELECT语句中使用DISTINCT关键字。从结果中可以发现，重复数据已经被删除。

```
openGauss=# SELECT DISTINCT c_first_name  FROM customer_t1 ;
 c_first_name
--------------
 James
 Grace
 Local

 Joes
 Lily
(6 rows)
```

