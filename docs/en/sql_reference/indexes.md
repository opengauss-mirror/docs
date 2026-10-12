# Index

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:22:49.669Z -->

An index is a pointer to data in a table. An index in a database is very similar to an index in a book.

Indexes can be used to improve database query performance, but improper use will lead to database performance degradation. It is recommended that an index be created only when one of the following principles is met:

- Fields that are frequently queried.
- Create indexes on join conditions. For queries involving multi-field joins, it is recommended that a composite index be created on these fields. For example, for `SELECT * FROM t1 JOIN t2 ON t1.a=t2.a AND t1.b=t2.b`, a composite index can be created on columns `a` and `b` of table `t1`.
- Columns used in filter conditions of the WHERE clause (especially range conditions).
- Columns that frequently appear after ORDER BY, GROUP BY, and DISTINCT.

## Syntax<a name="zh-cn_topic_0283136578_zh-cn_topic_0237122106_zh-cn_topic_0059777455_sa24c1a88574742bcb5427f58f5abb732"></a>

- Single-column index

    A single-column index is an index created on only one column of a table.

    ```
    CREATE INDEX [ [schema_name.]index_name ] ON table_name  (column_name);
    ```

- Composite index

    A composite index is an index created on multiple columns of a table.

    ```
    CREATE INDEX [ [schema_name.]index_name ] ON table_name  (column1_name,column2_name,...);
    ```

- Unique index

    Duplicate values are not allowed in the fields of a unique index.

    ```
    CREATE  UNIQUE INDEX [ [schema_name.]index_name ] ON table_name  (column_name);
    ```

- Expression index

    An index built on a subset of a table, where the subset is defined by a conditional expression.

    ```
    CREATE INDEX [ [schema_name.]index_name ] ON table_name  (expression);
    ```

- Partial index

  A partial index is an index that contains only a portion of the table's records, typically the portion that is more useful than other parts of the table.

    ```
    CREATE INDEX [ [schema_name.]index_name ] ON table_name  (column_name) 
       [ WHERE predicate ]
    ```

- Dropping an Index

    ```
    DROP INDEX index_name;
    ```

## Parameter Description<a name="section9316102894620"></a>

- **UNIQUE**

  Creates a unique index. Each time data is added, the table is checked for duplicate values. If an inserted or updated value would cause duplicate records, an error occurs.

  Currently, only B-tree and UBTree indexes support unique indexes.

- **schema\_name**

  Name of the schema.

  Value range: An existing schema name.

- **index_name**

  Name of the index to be created. The schema of the index is the same as that of the table.

  Value range: A string that conforms to the identifier naming conventions.

- **table\_name**

    Name of the table for which the index is to be created. It can be schema-qualified.

    Value range: An existing table name.

- **column\_name**

    Name of the column (field name) in the table for which the index is to be created.

    If the index method supports multi-column indexes, multiple columns can be declared. A global index can declare up to 31 columns, and other indexes can declare up to 32 columns.

- **expression**

    Creates an expression index based on one or more columns of the table, which must generally be written in parentheses. If the expression takes the form of a function call, the parentheses can be omitted.

    An expression index can be used to obtain fast access to data based on some transformation of the basic data. For example, a function-based index on `upper(col)` would allow the clause `WHERE upper(col) = 'JIM'` to use an index.

    When creating an expression index, if the expression contains an IS NULL clause, the index is invalid. In this case, it is recommended that you try creating a partial index instead.

- **WHERE predicate**

    Creates a partial index. A partial index is an index that contains only a portion of the records in a table, typically the portion that is more useful than the rest of the data. For example, if a table contains both billed and unbilled orders, where unbilled orders account for only a small portion of the table and are the most frequently used portion, performance can be improved by creating an index only on the unbilled portion. Another possible use is to enforce uniqueness on a subset of a table by using WHERE with UNIQUE.

    Value range: The predicate expression can only reference columns of the table, and it can use all columns, not just the indexed columns. Currently, subqueries and aggregate expressions cannot appear in the WHERE clause.

## Example<a name="section1037364913493"></a>

Create the table `tpcds.ship_mode_t1`.

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

Create a single-column index on the `SM_SHIP_MODE_ID` column of the `tpcds.ship_mode_t1` table.

```
openGauss=# CREATE INDEX ds_ship_mode_t1_index0 ON tpcds.ship_mode_t1(SM_SHIP_MODE_ID);
```

Create an ordinary unique index on the `SM_SHIP_MODE_SK` column of the `tpcds.ship_mode_t1` table.

```
openGauss=# CREATE UNIQUE INDEX ds_ship_mode_t1_index1 ON tpcds.ship_mode_t1(SM_SHIP_MODE_SK);
```

Create an expression index on the `SM_CODE` column of the `tpcds.ship_mode_t1` table.

```
openGauss=# CREATE INDEX ds_ship_mode_t1_index2 ON tpcds.ship_mode_t1(SUBSTR(SM_CODE,1 ,4));
```

A partial index is created on the `SM_SHIP_MODE_SK` column of table `tpcds.ship_mode_t1` for rows where `SM_SHIP_MODE_SK` is greater than 10.

```
openGauss=# CREATE UNIQUE INDEX ds_ship_mode_t1_index3 ON tpcds.ship_mode_t1(SM_SHIP_MODE_SK) WHERE SM_SHIP_MODE_SK>10;
```

The created index is dropped.

```
openGauss=# DROP INDEX tpcds.ds_ship_mode_t1_index2;
```
