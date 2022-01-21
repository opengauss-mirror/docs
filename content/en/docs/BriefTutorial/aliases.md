# Aliases<a name="EN-US_TOPIC_0000001225378501"></a>

SQL can rename a table or a column. The name is the alias of the table or the column. Aliases are created to improve the readability of table names or column names. In SQL,  **AS**  is used to create an alias.

## Syntax<a name="section119531510131916"></a>

-   Column alias syntax

    ```
    SELECT 
    { * | [column [ AS ] output_name, ...] }
    [ FROM from_item [, ...] ]
    [ WHERE condition ];
    ```

-   Table alias syntax

    ```
    SELECT column1, column2.... 
    FROM table_name AS output_name 
    WHERE [condition];
    ```


## Parameter Description<a name="section012816161027"></a>

-   **output\_name**

    You may use the  **AS output\_name**  clause to give an alias for an output column. The alias is used for displaying the output column. The  **name**,  **value**, and  **type**  keywords can be used as column aliases.


## Examples<a name="section73551858131418"></a>

Use  **C**  to indicate the alias of the  **customer\_t1**  table to query data in the table.

```
openGauss=# SELECT c.c_first_name,c.amount FROM customer_t1 AS c;
 c_first_name | amount
--------------+--------
 Grace        |   1000
 Grace        |
              |
 Joes         |   2200
 James        |   5000
 Local        |   3000
 Lily         |   1000
 Lily         |   2000
(8 rows)
```

