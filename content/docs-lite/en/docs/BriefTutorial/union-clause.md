# UNION Clause<a name="EN-US_TOPIC_0000001209981912"></a>

The  **UNION**  clause computes the set union of the rows returned by the involved SELECT statements. The SELECT statement inside the  **UNION**  clause must have the same number of columns, and the values of the columns must have similar data types. In addition, the sequence of columns in each SELECT statement must be the same.

## Syntax<a name="section1458317131312"></a>

-   **UNION**: retains only one value if duplicate values exist in the results.

    ```
    SELECT column_name(s) FROM table_name1
    UNION
    SELECT column_name(s) FROM table_name2;
    ```

-   **UNION ALL**: displays all results, including duplicate values.

    ```
    SELECT column_name(s) FROM table_name1
    UNION ALL
    SELECT column_name(s) FROM table_name2;
    ```


## Examples<a name="section7792919716"></a>

Take  **table1**  and  **table2**  as an example. The table data is as follows:

```
openGauss=# SELECT * FROM table1;
 name  | city
-------+------
 Joes  | BJ
 Lily  | BJ
 James | SH
 Grace | SZ
(4 rows)

openGauss=# SELECT * FROM table2;
 id | name  | dept
----+-------+-------
  1 | Tommy | IT
  2 | Lily  | IT
  3 | Li    | sales
  4 | Grace | IT
(4 rows)
```

-   UNION

    Lists the names of all employees in two tables and retains only one duplicate value.

    ```
    openGauss=# SELECT name FROM table1 UNION SELECT name FROM table2;
     name
    -------
     Li
     Lily
     James
     Grace
     Joes
     Tommy
    (6 rows)
    ```

-   UNION ALL

    Lists the names of all employees in two tables, including duplicate values.

    ```
    openGauss=# SELECT name FROM table1 UNION ALL SELECT name FROM table2;
     name
    -------
     Joes
     Lily
     James
     Grace
     Tommy
     Lily
     Li
     Grace
    (8 rows)
    ```


