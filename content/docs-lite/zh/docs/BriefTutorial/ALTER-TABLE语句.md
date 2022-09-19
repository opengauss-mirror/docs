# ALTER TABLE语句<a name="ZH-CN_TOPIC_0000001255221831"></a>

修改表，包括修改表的定义、重命名表、重命名表中指定的列、重命名表的约束、设置表的所属模式、添加/更新多个列、打开/关闭行访问控制开关。

## 语法格式<a name="section6112121974310"></a>

-   在一张已经存在的表上添加列。

    ```
    ALTER TABLE  table_name
        ADD column_name data_type;
    ```

-   在一张已经存在的表上删除列。

    ```
    ALTER TABLE table_name DROP COLUMN column_name;
    ```

-   修改表的字段类型。

    ```
    ALTER TABLE  table_name
     MODIFY column_name data_type;
    ```

-   为一张已经存在的表的列增加/删除非空约束（NOT NULL）。

    ```
    ALTER TABLE  table_name
       ALTER column_name { SET | DROP } NOT NULL
    ```


-   重命名表中指定的列。

    ```
    ALTER TABLE table_name RENAME  column_name TO new_column_name;
    ```


-   更新多个列。

    ```
    ALTER TABLE  table_name 
        MODIFY ( { column_name data_type | column_name [ CONSTRAINT constraint_name ] NOT NULL [ ENABLE ] | column_name [ CONSTRAINT constraint_name ] NULL } [, ...] );
    ```

-   对名称的修改不会影响所存储的数据。

    ```
    ALTER TABLE table_name 
        RENAME TO new_table_name;
    ```


## 参数说明<a name="section10742894719"></a>

-   **table\_name**

    table\_name是需要修改的表名。

    若声明了ONLY选项，则只有那个表被更改。若未声明ONLY，该表及其所有子表都将会被更改。另外，可以在表名称后面显示地增加\*选项来指定包括子表，即表示所有后代表都被扫描，这是默认行为。

-   **column\_name**

    现存的或新字段的名称。

-   **data\_type**

    新字段的类型，或者现存字段的新类型。

-   **new\_table\_name**

    修改后新的表名称。

-   **new\_column\_name**

    表中指定列修改后新的列名称。

-   **constraint\_name**

    约束的名称。


## 示例<a name="section258851613475"></a>

表customer\_t1的数据如下。

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
          6881 | maps          | Lily         |             |   1000
          4320 | tpcds         | Lily         |             |   2000
(11 rows)
```

-   新增列

    在上面的表中添加新的列。

    ```
    openGauss=# ALTER TABLE customer_t1 ADD date time;
    ```

    查询表customer\_t1的结构如下，新增列date成功。

    ```
    openGauss=# \d customer_t1
                 Table "public.customer_t1"
        Column     |          Type          | Modifiers
    ---------------+------------------------+-----------
     c_customer_sk | integer                |
     c_customer_id | character(5)           |
     c_first_name  | character(6)           |
     c_last_name   | character(8)           |
     amount        | integer                |
     date          | time without time zone |
    ```

-   修改列数据类型

    修改列c_last_name的数据类型character\(8\) 为character\(12\)。

    ```
    openGauss=# ALTER TABLE customer_t1 MODIFY c_last_name character(12);
    ```

    查询表customer\_t1结构，列c\_last\_name修改数据类型成功。

    ```
    openGauss=# \d customer_t1
                 Table "public.customer_t1"
        Column     |          Type          | Modifiers
    ---------------+------------------------+-----------
     c_customer_sk | integer                |
     c_customer_id | character(5)           |
     c_first_name  | character(6)           |
     c_last_name   | character(12)          |
     amount        | integer                |
     date          | time without time zone |
    ```

-   新增列约束

    删除列c\_customer\_sk为空的行。

    ```
    openGauss=# DELETE FROM customer_t1 WHERE c_customer_sk is NULL;
    ```

    为列c\_customer\_sk增加非空约束。

    ```
    openGauss=# ALTER TABLE customer_t1 ALTER c_customer_sk SET NOT NULL;
    ```

    查询表customer\_t1结构，列c\_customer\_sk新增约束成功。

    ```
    openGauss=# \d customer_t1
                 Table "public.customer_t1"
        Column     |          Type          | Modifiers
    ---------------+------------------------+-----------
     c_customer_sk | integer                | not null
     c_customer_id | character(5)           |
     c_first_name  | character(6)           |
     c_last_name   | character(12)          |
     amount        | integer                |
     date          | time without time zone |
    ```

-   修改列名称

    修改列date名称为purchase_date。

    ```
    openGauss=# ALTER TABLE customer_t1  RENAME  date TO purchase_date;
    ```

    查询表customer\_t1结构，列date名称修改成功。

    ```
    openGauss=# \d customer_t1
                 Table "public.customer_t1"
        Column     |          Type          | Modifiers
    ---------------+------------------------+-----------
     c_customer_sk | integer                | not null
     c_customer_id | character(5)           |
     c_first_name  | character(6)           |
     c_last_name   | character(12)          |
     amount        | integer                |
     purchase_date | time without time zone |
    ```

-   删除列

    删除列purchase\_date。

    ```
    openGauss=# ALTER TABLE customer_t1 DROP purchase_date;
    ```

    删除后，表customer\_t1的数据如下。

    ```
    openGauss=# SELECT * FROM customer_t1;
     c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
    ---------------+---------------+--------------+-------------+--------
              3869 | hello         | Grace        |             |   1000
              3869 | hello         | Grace        |             |   1000
              3869 |               | Grace        |             |
              3869 | hello         |              |             |
              3869 | hello         |              |             |
              6985 | maps          | Joes         |             |   2200
              9976 | world         | James        |             |   5000
              4421 | Admin         | Local        |             |   3000
              6881 | maps          | Lily         |             |   1000
              4320 | tpcds         | Lily         |             |   2000
    (10 rows)
    ```


