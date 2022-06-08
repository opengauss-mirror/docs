# ALTER TABLE Statement<a name="EN-US_TOPIC_0000001255221831"></a>

The ALTER TABLE statement modifies tables, including modifying table definitions, renaming tables, renaming specified columns in tables, renaming table constraints, setting table schemas,  enabling or disabling row-level security policies, and adding or updating multiple columns.

## Syntax<a name="section6112121974310"></a>

-   Add a column to an existing table.

    ```
    ALTER TABLE  table_name
        ADD column_name data_type;
    ```

-   Delete a column from an existing table.

    ```
    ALTER TABLE table_name DROP COLUMN column_name;
    ```

-   Change the column type of a table.

    ```
    ALTER TABLE  table_name
     MODIFY column_name data_type;
    ```

-   Add or delete a NOT NULL constraint to or from a column of an existing table.

    ```
    ALTER TABLE  table_name
       ALTER column_name { SET | DROP } NOT NULL
    ```


-   Rename a specified column in a table.

    ```
    ALTER TABLE table_name RENAME  column_name TO new_column_name;
    ```


-   Update columns.

    ```
    ALTER TABLE  table_name 
        MODIFY ( { column_name data_type | column_name [ CONSTRAINT constraint_name ] NOT NULL [ ENABLE ] | column_name [ CONSTRAINT constraint_name ] NULL } [, ...] );
    ```

-   Rename a table,which does not affect stored data.

    ```
    ALTER TABLE table_name 
        RENAME TO new_table_name;
    ```


## Parameter Description<a name="section10742894719"></a>

-   **table\_name**

    Specifies the name of the table to be modified.

    If  **ONLY**  is specified, only the table is modified. If  **ONLY**  is not specified, the table and all subtables are modified. You can add the asterisk \(\*\) option following the table name to specify that all subtables are scanned, which is the default operation.

-   **column\_name**

    Specifies the name of a new or an existing column.

-   **data\_type**

    Specifies the type of a new column or a new type of an existing column.

-   **new\_table\_name**

    Specifies the new table name.

-   **new\_column\_name**

    Specifies the new name of a specific column in a table.

-   **constraint\_name**

    Specifies the name of a constraint.


## Examples<a name="section258851613475"></a>

The data in the  **customer\_t1**  table is as follows:

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

-   Add a column.

    Add a new column to the preceding table.

    ```
    openGauss=# ALTER TABLE customer_t1 ADD date time;
    ```

    The following shows the structure of the  **customer\_t1**  table. The  **date**  column is added successfully.

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

-   Change the data type of a column.

    Change the data type of the  **c**  column from character\(8\) to character\(12\).

    ```
    openGauss=# ALTER TABLE customer_t1 MODIFY c_last_name character(12);
    ```

    Query the structure of the  **customer\_t1**  table. The data type of the  **c\_last\_name**  column is changed successfully.

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

-   Add a column constraint.

    Delete the rows where the  **c\_customer\_sk**  column is empty.

    ```
    openGauss=# DELETE FROM customer_t1 WHERE c_customer_sk is NULL;
    ```

    Add a not-null constraint to the  **c\_customer\_sk**  column.

    ```
    openGauss=# ALTER TABLE customer_t1 ALTER c_customer_sk SET NOT NULL;
    ```

    Query the structure of the  **customer\_t1**  table. The constraint is successfully added to the  **c\_customer\_sk**  column.

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

-   Change a column name.

    Change the column name from  **date**  to  **purchase date**.

    ```
    openGauss=# ALTER TABLE customer_t1  RENAME  date TO purchase_date;
    ```

    Query the structure of the  **customer\_t1**  table. The name of the  **date**  column is changed successfully.

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

-   Delete a column.

    Delete the  **purchase\_date**  column.

    ```
    openGauss=# ALTER TABLE customer_t1 DROP purchase_date;
    ```

    After deletion, the data in the  **customer\_t1**  table is as follows:

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


