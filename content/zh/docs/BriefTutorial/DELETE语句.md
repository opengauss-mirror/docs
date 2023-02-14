# DELETE语句

DELETE语句可以从指定的表里删除满足WHERE子句的行。如果WHERE子句不存在，将删除表中所有行，结果只保留表结构。

## 语法格式<a name="zh-cn_topic_0283136795_zh-cn_topic_0237122131_zh-cn_topic_0059778379_s84baecef89484d5f87f57b0545b46203"></a>

```
DELETE FROM table_name
       [WHERE condition];
```

## 参数说明<a name="zh-cn_topic_0283136795_zh-cn_topic_0237122131_zh-cn_topic_0059778379_s6df87c0dd87c49e29a034e0ff3385ca6"></a>

-   **table\_name**

    目标表的名称（可以有模式修饰）。

    取值范围：已存在的表名。

-   **condition**

    一个返回Boolean值的表达式，用于判断哪些行需要被删除。


## 示例<a name="zh-cn_topic_0283136795_zh-cn_topic_0237122131_zh-cn_topic_0059778379_s90a3978214f644269ab932c29df31137"></a>

创建表customer\_t1\_bak，表的结构、数据与customer\_t1一致。

```
openGauss=# CREATE TABLE customer_t1_bak AS TABLE customer_t1;
INSERT 0 9
```

创建的表customer\_t1\_bak，数据如下：

```
openGauss=# SELECT * FROM customer_t1_bak;
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
(9 rows)
```

执行如下语句删除customer\_t1\_bak中c\_customer\_sk等于3869的职员。

```
openGauss=# DELETE FROM customer_t1_bak WHERE c_customer_sk = 3869;
DELETE 5
```

得到的结果如下，可以看到c\_customer\_sk = 3869的行已经被删除。

```
openGauss=# SELECT * FROM customer_t1_bak;
 c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
---------------+---------------+--------------+-------------+--------
               |               |              |             |
          6985 | maps          | Joes         |             |   2200
          9976 | world         | James        |             |   5000
          4421 | Admin         | Local        |             |   3000
(4 rows)
```

不指定WHERE语句时，默认删除整张表的数据，仅保留表结构。

```
openGauss=# DELETE FROM customer_t1_bak;
DELETE 4
```

得到结果如下。

```
openGauss=# SELECT * FROM customer_t1_bak;
 c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
---------------+---------------+--------------+-------------+--------
(0 rows)
```
