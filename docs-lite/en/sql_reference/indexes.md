# Indexes<a name="EN-US_TOPIC_0000001225179935"></a>

An index is a pointer to data in a table. The index in a database is very similar to the index directory in a book.

Indexes are primarily used to enhance database performance \(though inappropriate use can result in database performance deterioration\). You are advised to create indexes on:

-   Columns that are often queried
-   Join conditions. For a query on joined columns, you are advised to create a composite index on the columns. For example, select \* from t1 join t2 on t1. a=t2. a and t1. b=t2.b. You can create a composite index on the a and b columns of table t1.
-   Columns having filter criteria \(especially scope criteria\) of a  **WHERE**  clause
-   Columns that are frequently used after **ORDER BY**, **GROUP BY**, and **DISTINCT**

## Syntax<a name="en-us_topic_0283136578_en-us_topic_0237122106_en-us_topic_0059777455_sa24c1a88574742bcb5427f58f5abb732"></a>

-   Single-column index

    A single-column index is created based on only one column in a table.

    ```
    CREATE INDEX [ [schema_name.]index_name ] ON table_name  (column_name);
    ```

-   Composite index

    A composite index is created based on multiple columns in a table.

    ```
    CREATE INDEX [ [schema_name.]index_name ] ON table_name  (column1_name,column2_name,...);
    ```

-   Unique index

    Duplicate values cannot be inserted into a column with a unique index.

    ```
    CREATE  UNIQUE INDEX [ [schema_name.]index_name ] ON table_name  (column_name);
    ```

-   Local index

    A Local index is created on a subset of a table. The subset is defined by a condition expression.

    ```
    CREATE INDEX [ [schema_name.]index_name ] ON table_name  (expression);
    ```

-   Partial index

    A partial index contains entries for only a portion of a table, usually a portion that is more useful for indexing than the rest of the table.

    ```
    CREATE INDEX [ [schema_name.]index_name ] ON table_name  (column_name) 
       [ WHERE predicate ]
    ```

-   Index deletion

    ```
    DROP INDEX index_name;
    ```


## Parameter Description<a name="section9316102894620"></a>

-   **UNIQUE**

    Creates a unique index. In this way, the system checks whether new values are unique in the index column. Attempts to insert or update data which would result in duplicate entries will generate an error.

    Currently, only the B-tree index supports unique indexes.

-   **schema\_name**

    Specifies the schema name.

    Value range: an existing schema name

-   **index\_name**

    Specifies the name of the index to be created. The schema of the index is the same as that of the table.

    Value range: a string.

-   **table\_name**

    Specifies the name of the table for which an index is to be created \(optionally schema-qualified\).

    Value range: an existing table name

-   **column\_name**

    Specifies the name of the column for which an index is to be created.

    Multiple columns can be specified if the index method supports multi-column indexes. A global index supports a maximum of 31 columns, and other indexes support a maximum of 32 columns.

-   **expression**

    Specifies an expression index constraint based on one or more columns of the table. It must be written in parentheses. However, the parentheses can be omitted if the expression has the form of a function call.

    The expression index can be used to obtain fast access to data based on some transformation of the basic data. For example, an index computed on  **upper\(col\)**  would allow the  **WHERE upper\(col\) = 'JIM'**  clause to use an index.

    If an expression contains the  **IS NULL**  clause, the index for this expression is invalid. In this case, you are advised to create a partial index.

-   **WHERE predicate**

    Creates a partial index. A partial index contains entries for only a portion of a table, usually a portion that is more useful for indexing than the rest of the table. For example, if you have a table that contains both billed and unbilled orders where the unbilled orders take up a small portion of the total table and yet that is an often used portion, you can improve performance by creating an index on just that portion. In addition, the  **WHERE**  clause with a UNIQUE constraint can be used to enforce uniqueness over a subset of a table.

    Value range: The predicate expression can only refer to columns of the underlying table, but it can use all columns, not just the ones being indexed. Currently, subqueries and aggregate expressions are forbidden in the  **WHERE**  clause.


## Examples<a name="section1037364913493"></a>

Create the  **tpcds.ship\_mode\_t1**  table.

```
openGauss=# CREATE SCHEMA tpcds;
openGauss=# CREATE TABLE tpcds.ship_mode_t1
(
    SM_SHIP_MODE_SK           INTEGER               NOT NULL,
    SM_SHIP_MODE_ID           CHAR(16)              NOT NULL,
    SM_TYPE                   CHAR(30)                      ,
    SM_CODE                   CHAR(10)                      ,
    SM_CARRIER                CHAR(20)                      ,
    SM_CONTRACT               CHAR(20)
) ;
```

Create a single-column index on the  **SM\_SHIP\_MODE\_ID**  column in the  **tpcds.ship\_mode\_t1**  table.

```
openGauss=# CREATE UNIQUE INDEX ds_ship_mode_t1_index0 ON tpcds.ship_mode_t1(SM_SHIP_MODE_ID);
```

Create a common unique index on the  **SM\_SHIP\_MODE\_SK**  column in the  **tpcds.ship\_mode\_t1**  table.

```
openGauss=# CREATE UNIQUE INDEX ds_ship_mode_t1_index1 ON tpcds.ship_mode_t1(SM_SHIP_MODE_SK);
```

Create an expression index on the  **SM\_CODE**  column in the  **tpcds.ship\_mode\_t1**  table.

```
openGauss=# CREATE INDEX ds_ship_mode_t1_index2 ON tpcds.ship_mode_t1(SUBSTR(SM_CODE,1 ,4));
```

Create a partial index on the  **SM\_SHIP\_MODE\_SK**  column where  **SM\_SHIP\_MODE\_SK**  is greater than  **10**  in the  **tpcds.ship\_mode\_t1**  table.

```
openGauss=# CREATE UNIQUE INDEX ds_ship_mode_t1_index3 ON tpcds.ship_mode_t1(SM_SHIP_MODE_SK) WHERE SM_SHIP_MODE_SK>10;
```

Delete the created index.

```
openGauss=# DROP INDEX tpcds.ds_ship_mode_t1_index2;
```
