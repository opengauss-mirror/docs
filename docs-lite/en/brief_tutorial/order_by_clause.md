# ORDER BY Clause<a name="EN-US_TOPIC_0000001255021833"></a>

The  **ORDER BY**  clause sorts the data in one or more columns retrieved by the SELECT statement in ascending \(**ASC**\) or descending \(**DESC**\) order.

## Syntax<a name="en-us_topic_0000001224939983_section4955330113019"></a>

```
SELECT 
{ * | [column, ...] }
[ FROM from_item [, ...] ]
[ ORDER BY {expression [ ASC | DESC ] }];
```

## Parameter Description<a name="en-us_topic_0000001224939983_section1740863211186"></a>

-   **ORDER BY clause**

    Sorts data retrieved by the SELECT statement in descending or ascending order. If the  **ORDER BY**  expression contains multiple columns:

    -   If two columns are equal according to the leftmost expression, they are compared according to the next expression and so on.
    -   If they are equal according to all specified expressions, they are returned in an implementation-dependent order.


## Examples<a name="en-us_topic_0000001224939983_section1629154131916"></a>

-   Sort the result in ascending order based on the value of  **c\_customer\_sk**.

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

-   Sort the result in descending order based on the value of  **c\_customer\_sk**.

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


