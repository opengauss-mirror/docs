# SELECT语句<a name="ZH-CN_TOPIC_0000001255141779"></a>

SELECT语句用于从表或视图中取出数据，结果被存储在一个结果表中，称为结果集。

SELECT语句就像叠加在数据库表上的过滤器，利用SQL关键字从数据表中过滤出用户需要的数据。

## 语法格式<a name="zh-cn_topic_0000001224664065_section1318010144817"></a>

```
SELECT 
{ * | [column, ...] }
[ FROM from_item [, ...] ];
```

## 参数说明<a name="zh-cn_topic_0000001224664065_section10349175314912"></a>

-   **SELECT列表**

    指定查询表中列名，可以是部分列或者是全部，通配符\*表示全部列。

    列名可以用下面两种形式表达：

    -   手动输入列名，多个列之间用英文逗号（,）分隔。
    -   可以是FROM子句里面计算出来的字段。

-   **FROM子句**

    为SELECT声明一个或者多个源表。FROM子句涉及多个元素，常见元素如下。

    -   table\_name

        表名或视图名，名称前可加上模式名，如：schema\_name.table\_name。表名为最常见的元素。

    -   subquery

        FROM子句中可以出现子查询，创建一个临时表保存子查询的输出。详细请参见[子查询](子查询.md)。

    -   alias

        给表或复杂的表引用起一个临时的表别名，以便被其余的查询引用。详情请参见[别名](别名.md)。

    -   join\_type

        有5种类型，详情请参见[JOIN](JOIN.md)。



## 示例<a name="section1477911223411"></a>

-   读取表customer\_t1中所有的数据。

    ```
    openGauss=# SELECT * FROM customer_t1;
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

-   读取表customer\_t1中指定字段c\_customer\_sk、c\_customer\_id。

    ```
    openGauss=# SELECT c_customer_sk,c_customer_id FROM customer_t1;
    c_customer_sk | c_customer_id
    ---------------+---------------
              3869 | hello
              3869 | hello
              3869 |
              3869 | hello
              3869 | hello
                   |
              6985 | maps
              9976 | world
              4421 | Admin
    (9 rows)
    ```


