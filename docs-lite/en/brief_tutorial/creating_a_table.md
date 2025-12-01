# Creating a Table<a name="EN-US_TOPIC_0000001255141783"></a>

Create an empty table in the current database. The table will be owned by the creator. The same table can be stored in different databases. You can execute the CREATE TABLE statement to create a table.

## Syntax<a name="section145481618144118"></a>

```
CREATE TABLE table_name 
    (column_name data_type [, ... ]);
```

## Parameter Description<a name="section932010594419"></a>

-   **table\_name**

    Specifies the name of the table to be created.

-   **column\_name**

    Specifies the name of the column to be created in the new table.

-   **data\_type**

    Specifies the data type of the column.


## Examples<a name="section199331334134317"></a>

Run the following commands to create a table named  **customer\_t1**. The table columns are  **c\_customer\_sk**,  **c\_customer\_id**,  **c\_first\_name**, **c\_last\_name**, and **Amount**. The data types of the table columns are integer, char \(5\), char \(6\), char \(8\), and integer, respectively.

```
openGauss=# CREATE TABLE customer_t1
(
    c_customer_sk             integer,
    c_customer_id             char(5),
    c_first_name              char(6),
    c_last_name               char(8),
    Amount                    integer
);
```

If the following information is displayed, the table has been created:

```
 CREATE TABLE
```

