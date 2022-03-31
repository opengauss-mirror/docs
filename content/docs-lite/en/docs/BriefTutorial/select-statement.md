# SELECT Statement<a name="EN-US_TOPIC_0000001255141779"></a>

The SELECT statement can be executed to retrieve data from a table or view. The result is stored in a result table, which is called a result set.

Serving as an overlaid filter for a database table, the SELECT statement filters required data from the table using SQL keywords.

## Syntax<a name="en-us_topic_0000001224664065_section1318010144817"></a>

```
SELECT 
{ * | [column, ...] }
[ FROM from_item [, ...] ];
```

## Parameter Description<a name="en-us_topic_0000001224664065_section10349175314912"></a>

-   **SELECT list**

    Specifies the name of a column in the table to be queried. The value can be a part of the column name or all of the column names. The wildcard \(\*\) is used to represent all column names.

    Column names can be expressed in the following formats:

    -   Manually input column names which are separated by commas \(,\)
    -   Columns computed in the  **FROM**  clause

-   **FROM clause**

    Specifies one or more source tables for the SELECT statement. The  **FROM**  clause involves multiple elements. The common elements are as follows:

    -   table\_name

        Specifies the name of a table or view. The schema name can be added before the table name or view name, for example,  _schema\_name.table\_name_. The table name is the most common element.

    -   subquery

        Performs a subquery in the  **FROM**  clause. A temporary table is created to save subquery results. For details, see  [Subqueries](subqueries.md).

    -   alias

        Gives a temporary alias to a table to facilitate the reference by other queries. For details, see  [Aliases](aliases.md).

    -   join\_type

        There are five types. For details, see  [JOIN](join.md).



## Examples<a name="section1477911223411"></a>

-   Read all data from the  **customer\_t1**  table.

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

-   Read the  **c\_customer\_sk**  and  **c\_customer\_id**  columns from the  **customer\_t1**  table.

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


