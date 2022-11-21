# WHERE子句<a name="ZH-CN_TOPIC_0000001225663811"></a>

当我们需要根据指定条件从表中查询数据时，就可以在SELECT语句中添加WHERE子句，从而过滤掉我们不需要数据。WHERE子句构成一个行选择表达式，用于指定条件而获取的数据，如果给定的条件满足，才返回从表中的具体数值。

## 语法格式<a name="zh-cn_topic_0000001225258419_section4955330113019"></a>

```
SELECT
{ * | [column, ...] }
[ FROM from_item [, ...] ]
[ WHERE condition ];
```

## 参数说明<a name="zh-cn_topic_0000001225258419_section11566195673011"></a>

-   **WHERE子句**

    WHERE子句构成一个行选择表达式，用来缩小SELECT查询的范围。在WHERE子句中可以使用比较运算符或逻辑运算符，例如 \>, <, =, LIKE, NOT 等等。


-   **condition**

    condition是返回值为布尔型的任意表达式，任何不满足该条件的行都不会被检索。


## 示例<a name="zh-cn_topic_0000001225258419_section36861642133019"></a>

使用逻辑运算符读取表customer\_t1。

-   **AND**

    找到c\_customer\_id为hello且c\_customer\_sk为3869的行。

    ```
    openGauss=# SELECT * FROM customer_t1 WHERE  c_customer_sk = 3869 AND c_customer_id = 'hello';
     c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
    ---------------+---------------+--------------+-------------+--------
              3869 | hello         | Grace        |             |   1000
              3869 | hello         | Grace        |             |   1000
              3869 | hello         |              |             |
              3869 | hello         |              |             |
    (4 rows)
    ```

-   **OR**

    找到c\_customer\_sk大于6985或者c\_customer\_id为hello的行。

    ```
    openGauss=# SELECT * FROM customer_t1 WHERE  c_customer_sk > 6985 OR c_customer_id = 'hello';
    c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
    ---------------+---------------+--------------+-------------+--------
              3869 | hello         | Grace        |             |   1000
              3869 | hello         | Grace        |             |   1000
              3869 | hello         |              |             |
              3869 | hello         |              |             |
              9976 | world         | James        |             |   5000
    (5 rows)
    ```

-   **NOT NULL**

    找到customer\_t1中c\_last\_name字段不为空的行。

    ```
    openGauss=# SELECT * FROM customer_t1 WHERE  c_last_name IS NOT NULL;
     c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
    ---------------+---------------+--------------+-------------+--------
    (0 rows)
    ```

-   **BETWEEN**

    找到c\_customer\_sk在4000和9000之间的行。

    ```
    openGauss=# SELECT * FROM customer_t1 WHERE  c_customer_sk  BETWEEN 4000 AND 9000;
     c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
    ---------------+---------------+--------------+-------------+--------
              6985 | maps          | Joes         |             |   2200
              4421 | Admin         | Local        |             |   3000
    (2 rows)
    ```
