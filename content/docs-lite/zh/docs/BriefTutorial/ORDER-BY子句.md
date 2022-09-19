# ORDER BY子句<a name="ZH-CN_TOPIC_0000001255021833"></a>

ORDER BY对SELECT语句检索得到的一列或者多列数据进行升序（ASC）或者降序（DESC）排列。

## 语法格式<a name="zh-cn_topic_0000001224939983_section4955330113019"></a>

```
SELECT 
{ * | [column, ...] }
[ FROM from_item [, ...] ]
[ ORDER BY {expression [ ASC | DESC ] }];
```

## 参数说明<a name="zh-cn_topic_0000001224939983_section1740863211186"></a>

-   **ORDER BY子句**

    对SELECT语句检索得到的数据进行升序或降序排序。对于ORDER BY表达式中包含多列的情况：

    -   首先根据最左边的列进行排序，如果这一列的值相同，则根据下一个表达式进行比较，依此类推。
    -   如果对于所有声明的表达式都相同，则按随机顺序返回。


## 示例<a name="zh-cn_topic_0000001224939983_section1629154131916"></a>

-   对结果根据c\_customer\_sk字段值进行升序排列。

    ```
    openGauss=# SELECT * FROM customer_t1 ORDER BY c_customer_sk ASC;
     c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
    ---------------+---------------+--------------+-------------+--------
              3869 | hello         | Grace        |             |   1000
              3869 | hello         | Grace        |             |   1000
              3869 |               | Grace        |             |
              3869 | hello         |              |             |
              3869 | hello         |              |             |
              4421 | Admin         | Local        |             |   3000
              6985 | maps          | Joes         |             |   2200
              9976 | world         | James        |             |   5000
                   |               |              |             |
    (9 rows)
    ```

-   对结果根据c\_customer\_sk字段值进行降序排列。

    ```
    openGauss=# SELECT * FROM customer_t1 ORDER BY c_customer_sk DESC;
     c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
    ---------------+---------------+--------------+-------------+--------
                   |               |              |             |
              9976 | world         | James        |             |   5000
              6985 | maps          | Joes         |             |   2200
              4421 | Admin         | Local        |             |   3000
              3869 | hello         | Grace        |             |   1000
              3869 | hello         |              |             |
              3869 | hello         | Grace        |             |   1000
              3869 |               | Grace        |             |
              3869 | hello         |              |             |
    (9 rows)
    ```


