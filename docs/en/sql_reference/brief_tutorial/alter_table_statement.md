---
description: This document describes ALTER TABLE in openGauss, covering topics such as Syntax, Parameter Description.
keywords: [openGauss, ALTER TABLE, SQL, Syntax, Parameter Description]
---

# ALTER TABLE

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-28T03:10:59.970Z pushedAt=2026-07-28T03:24:55.841Z -->

Alters a table, including modifying the table definition, renaming a table, renaming specified columns in a table, renaming table constraints, setting the schema to which the table belongs, adding/updating multiple columns, and enabling/disabling row-level access control.

## Syntax<a name="section6112121974310"></a>

- Adding a column to an existing table.

    ```
    ALTER TABLE  table_name
        ADD column_name data_type;
    ```

- Dropping a column from an existing table.

    ```
    ALTER TABLE table_name DROP [ COLUMN ] column_name;
    ```

- Modifying the data type of a column in a table.

    ```
    ALTER TABLE  table_name
     MODIFY column_name data_type;
    ```

- Adding or dropping a NOT NULL constraint for a column in an existing table.

    ```
    ALTER TABLE  table_name
       ALTER column_name { SET | DROP } NOT NULL;
    ```

- Renaming a specified column in the table.

    ```
    ALTER TABLE table_name RENAME  column_name TO new_column_name;
    ```

- Updating multiple columns.

    ```
    ALTER TABLE  table_name 
        MODIFY ( { column_name data_type | column_name [ CONSTRAINT constraint_name ] NOT NULL [ ENABLE ] | column_name [ CONSTRAINT constraint_name ] NULL } [, ...] );
    ```

- Renaming does not affect the stored data.

    ```
    ALTER TABLE table_name 
        RENAME TO new_table_name;
    ```

## Parameter Description<a name="section10742894719"></a>

- **table_name**

    `table_name` is the name of the table to be altered.

    If the `ONLY` option is specified, only that table is altered. If `ONLY` is not specified, the table and all its sub-tables are altered. In addition, you can explicitly add the `*` option after the table name to specify that sub-tables are included, meaning all descendant tables are scanned. This is the default behavior.

- **column_name**

    Name of an existing or new column.

- **data\_type**

    Data type of the new column, or new data type of an existing column.

- **new\_table\_name**

    New table name after modification.

- **new\_column\_name**

    New name of the specified column in the table after modification.

- **constraint\_name**

    Name of the constraint.

## Examples<a name="section258851613475"></a>

The data in table `customer_t1` is as follows.

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

- Adding a column

    Add a new column to the table above.

    ```
    openGauss=# ALTER TABLE customer_t1 ADD date time;
    ```

    Query the structure of table `customer_t1`. The column `date` has been added successfully.

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

- Modifying a column data type

    Modify the data type of column `c_last_name` from `character(8)` to `character(12)`.

    ```
    openGauss=# ALTER TABLE customer_t1 MODIFY c_last_name character(12);
    ```

    Query the structure of table `customer_t1`. The data type of column `c_last_name` has been modified successfully.

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

- Adding a column constraint

    Delete rows where column `c_customer_sk` is NULL.

    ```
    openGauss=# DELETE FROM customer_t1 WHERE c_customer_sk is NULL;
    ```

    Add a NOT NULL constraint to column `c_customer_sk`.

    ```
    openGauss=# ALTER TABLE customer_t1 ALTER c_customer_sk SET NOT NULL;
    ```

    Query the structure of table `customer_t1`. The constraint has been added to column `c_customer_sk` successfully.

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

- Renaming a column

    Rename column `date` to `purchase date`.

    ```
    openGauss=# ALTER TABLE customer_t1  RENAME  date TO purchase_date;
    ```

    Query the structure of table `customer_t1`. Column `date` has been renamed successfully.

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

- Dropping a column

    Drop the column `purchase_date`.

    ```
    openGauss=# ALTER TABLE customer_t1 DROP purchase_date;
    ```

    After the deletion, the data in table `customer_t1` is as follows.

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
