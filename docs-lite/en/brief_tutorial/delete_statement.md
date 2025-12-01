# DELETE Statement<a name="EN-US_TOPIC_0000001210461838"></a>

The DELETE statement can be executed to delete rows that satisfy the  **WHERE**  clause from a specified table. If the  **WHERE**  clause does not exist, all rows in the table will be deleted and only the table structure is retained.

## Syntax<a name="en-us_topic_0283136795_en-us_topic_0237122131_en-us_topic_0059778379_s84baecef89484d5f87f57b0545b46203"></a>

```
DELETE FROM table_name 
       [WHERE condition];
```

## Parameter Description<a name="en-us_topic_0283136795_en-us_topic_0237122131_en-us_topic_0059778379_s6df87c0dd87c49e29a034e0ff3385ca6"></a>

-   **table\_name**

    Specifies the name \(optionally schema-qualified\) of the target table.

    Value range: an existing table name

-   **condition**

    Specifies an expression that returns a Boolean value. Only rows for which this expression returns  **true**  will be deleted.


## Examples<a name="en-us_topic_0283136795_en-us_topic_0237122131_en-us_topic_0059778379_s90a3978214f644269ab932c29df31137"></a>

Create the  **customer\_t1\_bak**  table whose structure and data are the same as those of the  **customer\_t1**  table.

```
openGauss=# CREATE TABLE customer_t1_bak AS TABLE customer_t1;
INSERT 0 9
```

The  **customer\_t1\_bak**  table is created, and the data in the table is as follows:

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

Run the following statement to delete the employee whose  **c\_customer\_sk**  is set to  **3869**  from the  **customer\_t1\_bak**  table:

```
openGauss=# DELETE FROM customer_t1_bak WHERE c_customer_sk = 3869;
DELETE 5
```

The following information is displayed, indicating that the row where  **c\_customer\_sk**  is set to  **3869**  has been deleted.

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

If the WHERE statement is not specified, the data of the entire table is deleted by default, and only the table structure is retained.

```
openGauss=# DELETE FROM customer_t1_bak;
DELETE 4
```

The result is as follows:

```
openGauss=# SELECT * FROM customer_t1_bak;
 c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
---------------+---------------+--------------+-------------+--------
(0 rows)
```

