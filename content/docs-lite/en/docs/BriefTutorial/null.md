# NULL<a name="EN-US_TOPIC_0000001210141892"></a>

**NULL**  indicates unknown data.  **NULL**  and  **0**  cannot be compared because they are not equivalent to each other.

When creating a table, you can specify whether  **NULL**  can be stored in a column. For details, see  [NOT NULL](constraints.md#section74155314398). This section describes the IS NULL and IS NOT NULL operators.

Create the  **customer\_t1**  table. The data in the table is as follows:

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

In the  **WHERE**  clause, locate the column whose value is  **NULL**.

For example, list the column whose  **c\_customer\_id**  is not set to a null value in the  **customer\_t1**  table.

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

In the  **WHERE**  clause, locate the column whose value is  **NULL**.

For example, list the column whose  **c\_customer\_id**  is set to a null value in the  **customer\_t1**  table.

```
openGauss=# SELECT * FROM customer_t1 WHERE c_customer_id IS NULL;
 c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
---------------+---------------+--------------+-------------+--------
          3869 |               | Grace        |             |
(1 row)
```

