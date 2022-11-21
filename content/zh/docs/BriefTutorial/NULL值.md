# NULL值<a name="ZH-CN_TOPIC_0000001180098774"></a>

NULL值代表未知数据。无法比较NULL和0，因为它们是不等价的。

创建表时，可以指定列可以存放或者不能存放NULL值，详情请参见[NOT NULL约束](约束.md#section74155314398)。本节介绍IS NULL和IS NOT NULL操作符。

创建表customer\_t1，数据如下：

```
openGauss=# SELECT * FROM customer_t1;
 c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
---------------+---------------+--------------+-------------+--------
          3869 | hello         | Grace        |             |   1000
          3869 |               | Grace        |             |
          3869 | hello         |              |             |
          6985 | maps          | Joes         |             |   2200
          9976 | world         | James        |             |   5000
          4421 | Admin         | Local        |             |   3000
(6 rows)
```

## IS NOT NULL<a name="section829464952512"></a>

在WHERE子句中查找为NULL值的字段。

例如，列出表customer\_t1中c\_customer\_id不为空值的字段。

```
openGauss=# SELECT * FROM customer_t1 WHERE c_customer_id IS NOT NULL;
 c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
---------------+---------------+--------------+-------------+--------
          3869 | hello         | Grace        |             |   1000
          3869 | hello         |              |             |
          6985 | maps          | Joes         |             |   2200
          9976 | world         | James        |             |   5000
          4421 | Admin         | Local        |             |   3000
(5 rows)
```

## IS NULL<a name="section842917114268"></a>

在WHERE子句中查找为NULL值的字段。

例如，列出表customer\_t1中c\_customer\_id为空值的字段。

```
openGauss=# SELECT * FROM customer_t1 WHERE c_customer_id IS NULL;
 c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
---------------+---------------+--------------+-------------+--------
          3869 |               | Grace        |             |
(1 row)
```
