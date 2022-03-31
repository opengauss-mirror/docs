# WHERE Clause<a name="EN-US_TOPIC_0000001210141890"></a>

When you need to query data from a table based on specified conditions, you can add a  **WHERE**  clause to the SELECT statement to filter out unnecessary data. The  **WHERE**  clause forms an expression for row selection and is used to obtain data based on specified conditions. Values in the table are returned only when the specified conditions are met.

## Syntax<a name="en-us_topic_0000001225258419_section4955330113019"></a>

```
SELECT 
{ * | [column, ...] }
[ FROM from_item [, ...] ]
[ WHERE condition ];
```

## Parameter Description<a name="en-us_topic_0000001225258419_section11566195673011"></a>

-   **WHERE clause**

    The  **WHERE**  clause forms an expression for row selection to narrow down the query range of the SELECT statement. Comparison operators or logical operators, such as \>, <, =, LIKE, or NOT, can be used in the  **WHERE**  clause.


-   **condition**

    **condition**  indicates any expression that returns a value of Boolean type. Rows that do not meet this condition will not be retrieved.


## Examples<a name="en-us_topic_0000001225258419_section36861642133019"></a>

Use logical operators to read data from the  **customer\_t1**  table.

-   **AND**

    Locate the row where the value of  **c\_customer\_id**  is  **hello**  and that of  **c\_customer\_sk**  is  **3869**.

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

    Locate the row where the value of  **c\_customer\_sk**  is greater than  **6985**  or that of  **c\_customer\_id**  is  **hello**.

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

    Locate the row where the value of  **c\_last\_name**  is not empty in the  **customer\_t1**  table.

    ```
    openGauss=# SELECT * FROM customer_t1 WHERE  c_last_name IS NOT NULL;
     c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
    ---------------+---------------+--------------+-------------+--------
    (0 rows)
    ```

-   **BETWEEN**

    Locate the row where the value of  **c\_customer\_sk**  is between  **4000**  and** 9000**.

    ```
    openGauss=# SELECT * FROM customer_t1 WHERE  c_customer_sk  BETWEEN 4000 AND 9000;
     c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
    ---------------+---------------+--------------+-------------+--------
              6985 | maps          | Joes         |             |   2200
              4421 | Admin         | Local        |             |   3000
    (2 rows)
    ```


