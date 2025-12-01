# GROUP BY Clause<a name="EN-US_TOPIC_0000001210301876"></a>

The  **GROUP BY**  clause is used together with the SELECT statement to group the same data. You can group one or more columns, but the columns to be grouped must exist.

## Syntax<a name="section1483055819415"></a>

```
SELECT 
{ * | [column, ...] }
[ FROM from_item [, ...] ]
[ WHERE condition ]
[ GROUP BY grouping_element [, ...] ]
[ ORDER BY {expression [ ASC | DESC ] }];
```

## Parameter Description<a name="section36303203424"></a>

-   **GROUP BY clause**

    Groups the query results based on the values of one or more columns. The query results with the same value are in the same group.

    The  **GROUP BY**  clause is placed after the  **WHRER**  clause and before the  **ORDER BY**  clause in the SELECT statement.


## Examples<a name="section1172527518"></a>

The  **customer\_t1**  table contains duplicate values of  **c\_first\_name**. The duplicate values of  **c\_first\_name**  are in the same group, and the sum of the values of  **Amount**  is calculated.

```
openGauss=# SELECT c_first_name, sum(Amount)  FROM customer_t1 GROUP BY c_first_name;
 c_first_name | sum
--------------+------
 James        | 5000
 Grace        | 1000
 Local        | 3000
              |
 Joes         | 2200
 Lily         | 3000
(6 rows)
```

