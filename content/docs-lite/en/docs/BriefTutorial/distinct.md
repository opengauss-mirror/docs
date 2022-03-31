# DISTINCT<a name="EN-US_TOPIC_0000001209981904"></a>

The  **DISTINCT**  keyword is used together with the SELECT statement to remove duplicate records and obtain only unique records.

When there are multiple duplicate records in a table, the  **DISTINCT**  keyword is used to obtain only unique records instead of duplicate records.

## Syntax<a name="en-us_topic_0000001180098772_section1693783720369"></a>

```
SELECT  DISTINCT [ ON ( expression [, ...] ) ] ]
{ * | [column, ...] }
[ FROM from_item [, ...] ];
```

## Parameter Description<a name="en-us_topic_0000001180098772_section15362151918382"></a>

-   **DISTINCT \[ ON \( expression \[, ...\] \) \]**

Removes all duplicate rows from the result set of the SELECT statement so that each row in the result set is unique.

Retains only the first row in the set of rows that have the same result computed on the given expression.

## Examples<a name="section471751183616"></a>

Insert the following data into the  **customer\_t1**  table:

```
openGauss=# INSERT INTO customer_t1 (c_customer_sk, c_customer_id, c_first_name,Amount) VALUES 
    (6881, 'maps', 'Lily',1000),
    (4320, 'tpcds', 'Lily',2000);
```

The current data is as follows:

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

Query all values of  **c\_first\_name**  in the  **customer\_t1**  table. There are two  **Lily**  and three  **Grace**.

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

Use the  **DISTINCT**  keyword in the SELECT statement. The result shows that duplicate data has been deleted.

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

