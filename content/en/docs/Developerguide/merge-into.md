# MERGE INTO<a name="EN-US_TOPIC_0242370634"></a>

## Function<a name="en-us_topic_0237122170_section11462163155618"></a>

**MERGE INTO**  conditionally matches data in a target table with that in a source table. If data matches,  **UPDATE**  is executed on the target table; if data does not match,  **INSERT**  is executed. You can use this syntax to run  **UPDATE**  and  **INSERT**  at a time for convenience

## Precautions<a name="en-us_topic_0237122170_section166351045574"></a>

-   You have the  **INSERT**  and  **UPDATE**  permissions for the target table and the  **SELECT**  permission for the source table.
-   **MERGE INTO**  cannot be executed during redistribution.

## Syntax<a name="en-us_topic_0237122170_section10551749579"></a>

```
MERGE INTO table_name [ [ AS ] alias ]
USING { { table_name | view_name } | subquery } [ [ AS ] alias ]
ON ( condition )
[
  WHEN MATCHED THEN
  UPDATE SET { column_name = { expression | DEFAULT } |
          ( column_name [, ...] ) = ( { expression | DEFAULT } [, ...] ) } [, ...]
  [ WHERE condition ]
]
[
  WHEN NOT MATCHED THEN
  INSERT { DEFAULT VALUES |
  [ ( column_name [, ...] ) ] VALUES ( { expression | DEFAULT } [, ...] ) [, ...] [ WHERE condition ] }
];
```

## Parameter Description<a name="en-us_topic_0237122170_section1315653475"></a>

-   **INTO**  clause

    Specifies the target table that is being updated or has data being inserted. If the target table is a replication table, the default value of a column \(such as auto-increment column\) in the target table cannot be the  **volatile**  function. If  **enable\_stream\_operator**  is set to  **off**, the target table must contain a primary key or  **UNIQUE**  and  **NOT NULL**  constraints.

    -   **talbe\_name**

        Specifies the name of the target table.

    -   **alias**

        Specifies the alias of the target table.

        Value range: a string. It must comply with the naming convention rule.


-   **USING**  clause

    Specifies the source table, which can be a table, view, or subquery. If the target table is a replication table, the  **USING**  clause cannot contain non-replication tables.

-   **ON**  clause

    Specifies the condition used to match data between the source and target tables. Columns in the condition cannot be updated.

-   **WHEN MATCHED**  clause

    Performs  **UPDATE**  if data in the source table matches that in the target table based on the condition.

    Distribution keys cannot be updated. System catalogs and system columns cannot be updated.

-   **WHEN NOT MATCHED**  clause

    Performs  **INSERT**  if data in the source table does not match that in the target table based on the condition.

    An  **INSERT**  clause can contain only one  **VALUES**.

    The order of  **WHEN MATCHED**  and  **WHEN NOT MATCHED**  clauses can be reversed. One of them can be used by default, but they cannot be both used at one time. Two  **WHEN MATCHED**  or  **WHEN NOT MATCHED**  clauses cannot be specified at the same time.

-   **DEFAULT**

    Specifies the default value of a column.

    The value is  **NULL**  if no default value is assigned to it.

-   **WHERE condition**

    Specifies the conditions for the  **UPDATE**  and  **INSERT**  clauses. The two clauses will be executed only when the conditions are met. The default value can be used. System columns cannot be referenced in  **WHERE condition**.


## Examples<a name="en-us_topic_0237122170_section3650125620712"></a>

```
-- Create the target table products and source table newproducts, and insert data to them.
postgres=# CREATE TABLE products
(
product_id INTEGER,
product_name VARCHAR2(60),
category VARCHAR2(60)
);

postgres=# INSERT INTO products VALUES (1501, 'vivitar 35mm', 'electrncs');
postgres=# INSERT INTO products VALUES (1502, 'olympus is50', 'electrncs');
postgres=# INSERT INTO products VALUES (1600, 'play gym', 'toys');
postgres=# INSERT INTO products VALUES (1601, 'lamaze', 'toys');
postgres=# INSERT INTO products VALUES (1666, 'harry potter', 'dvd');

postgres=# CREATE TABLE newproducts
(
product_id INTEGER,
product_name VARCHAR2(60),
category VARCHAR2(60)
);

postgres=# INSERT INTO newproducts VALUES (1502, 'olympus camera', 'electrncs');
postgres=# INSERT INTO newproducts VALUES (1601, 'lamaze', 'toys');
postgres=# INSERT INTO newproducts VALUES (1666, 'harry potter', 'toys');
postgres=# INSERT INTO newproducts VALUES (1700, 'wait interface', 'books');

-- Run MERGE INTO.
postgres=# MERGE INTO products p   
USING newproducts np   
ON (p.product_id = np.product_id)   
WHEN MATCHED THEN  
  UPDATE SET p.product_name = np.product_name, p.category = np.category WHERE p.product_name != 'play gym'  
WHEN NOT MATCHED THEN  
  INSERT VALUES (np.product_id, np.product_name, np.category) WHERE np.category = 'books';
MERGE 4

-- Query updates.
postgres=# SELECT * FROM products ORDER BY product_id;
 product_id |  product_name  | category  
------------+----------------+-----------
       1501 | vivitar 35mm   | electrncs
       1502 | olympus camera | electrncs
       1600 | play gym       | toys
       1601 | lamaze         | toys
       1666 | harry potter   | toys
       1700 | wait interface | books
(6 rows)

-- Delete the table.
postgres=# DROP TABLE products;
postgres=# DROP TABLE newproducts;
```

