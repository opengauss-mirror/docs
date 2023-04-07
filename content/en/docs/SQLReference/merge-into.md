# MERGE INTO<a name="EN-US_TOPIC_0289900297"></a>

## Function<a name="en-us_topic_0283137308_en-us_topic_0237122170_section11462163155618"></a>

**MERGE INTO**  conditionally matches data in a target table with that in a source table. If data matches,  **UPDATE**  is executed on the target table; if data does not match,  **INSERT**  is executed. You can use this syntax to run  **UPDATE**  and  **INSERT**  at a time for convenience

## Precautions<a name="en-us_topic_0283137308_en-us_topic_0237122170_section166351045574"></a>

You have the  **INSERT**  and  **UPDATE**  permissions for the target table and the  **SELECT**  permission for the source table.

## Syntax<a name="en-us_topic_0283137308_en-us_topic_0237122170_section10551749579"></a>

```
MERGE [/*+ plan_hint */] INTO table_name [ partition_clause ] [ [ AS ] alias ]
USING { { table_name | view_name } | subquery } [ [ AS ] alias ]
ON ( condition )
[
  WHEN MATCHED THEN
  UPDATE SET { column_name = { expression | subquery | DEFAULT } |
          ( column_name [, ...] ) = ( { expression | subquery | DEFAULT } [, ...] ) } [, ...]
  [ WHERE condition ]
]
[
  WHEN NOT MATCHED THEN
  INSERT { DEFAULT VALUES |
  [ ( column_name [, ...] ) ] VALUES ( { expression | subquery | DEFAULT } [, ...] ) [, ...] [ WHERE condition ] }
];
NOTICE: 'subquery' in the UPDATE and INSERT clauses are only avaliable in CENTRALIZED mode!
```

## Parameter Description<a name="en-us_topic_0283137308_en-us_topic_0237122170_section1315653475"></a>

-   **plan\_hint**  clause

    Follows the  **MERGE**  keyword in the  **/\*+ \*/**  format. It is used to optimize the plan of a  **MERGE**  statement block. For details, see  [Hint-based Tuning](../PerformanceTuningGuide/hint-based-tuning.md). In each statement, only the first  **/\*+** _plan\_hint _**\*/**  comment block takes effect as a hint. Multiple hints can be written.

-   **INTO**  clause

    Specifies the target table that is being updated or has data being inserted.

-   **talbe\_name**

    Specifies the name of the target table.

-   **partition\_clause**

    Performs MERGE operations on a specified partition.

    ```
    PARTITION { ( partition_name ) | FOR ( partition_value [, ...] ) } |
    SUBPARTITION { ( subpartition_name ) | FOR ( subpartition_value [, ...] ) }
    ```

    For details about the keywords, see  [SELECT](select.md).

    If the value of the  **value**  clause is inconsistent with the specified partition, an error is reported.

    For details, see  [CREATE TABLE SUBPARTITION](create-table-subpartition.md).

-   **alias**

    Specifies the alias of the target table.

    Value range: a string. It must comply with the identifier naming convention.

-   **USING**  clause

    Specifies the source table, which can be a table, view, or subquery.

-   **ON**  clause

    Specifies the condition used to match data between the source and target tables. Columns in the condition cannot be updated.

-   **WHEN MATCHED**  clause

    Performs  **UPDATE**  if data in the source table matches that in the target table based on the condition.

    System catalogs and system columns cannot be updated.

-   **WHEN NOT MATCHED**  clause

    Performs  **INSERT**  if data in the source table does not match that in the target table based on the condition.

    An  **INSERT**  clause can contain only one  **VALUES**.

    The order of  **WHEN MATCHED**  and  **WHEN NOT MATCHED**  clauses can be reversed. One of them can be used by default, but they cannot be both used at one time. Two  **WHEN MATCHED**  or  **WHEN NOT MATCHED**  clauses cannot be specified at the same time.

-   **DEFAULT**

    Specifies the default value of a column.

    The value is  **NULL**  if no default value is assigned to it.

-   **WHERE condition**

    Specifies the conditions for the  **UPDATE**  and  **INSERT**  clauses. The two clauses will be executed only when the conditions are met. The default value can be used. System columns cannot be referenced in  **WHERE condition**. You are not advised to use numeric types such as int for  **condition**, because such types can be implicitly converted to bool values \(non-zero values are implicitly converted to  **true**  and  **0**  is implicitly converted to  **false**\), which may cause unexpected results.


## Examples<a name="en-us_topic_0283137308_en-us_topic_0237122170_section3650125620712"></a>

```
-- Create the target table products and source table newproducts, and insert data to them.
openGauss=# CREATE TABLE products
(
product_id INTEGER,
product_name VARCHAR2(60),
category VARCHAR2(60)
);

openGauss=# INSERT INTO products VALUES (1501, 'vivitar 35mm', 'electrncs');
openGauss=# INSERT INTO products VALUES (1502, 'olympus is50', 'electrncs');
openGauss=# INSERT INTO products VALUES (1600, 'play gym', 'toys');
openGauss=# INSERT INTO products VALUES (1601, 'lamaze', 'toys');
openGauss=# INSERT INTO products VALUES (1666, 'harry potter', 'dvd');

openGauss=# CREATE TABLE newproducts
(
product_id INTEGER,
product_name VARCHAR2(60),
category VARCHAR2(60)
);

openGauss=# INSERT INTO newproducts VALUES (1502, 'olympus camera', 'electrncs');
openGauss=# INSERT INTO newproducts VALUES (1601, 'lamaze', 'toys');
openGauss=# INSERT INTO newproducts VALUES (1666, 'harry potter', 'toys');
openGauss=# INSERT INTO newproducts VALUES (1700, 'wait interface', 'books');

-- Run MERGE INTO.
openGauss=# MERGE INTO products p   
USING newproducts np   
ON (p.product_id = np.product_id)   
WHEN MATCHED THEN  
  UPDATE SET p.product_name = np.product_name, p.category = np.category WHERE p.product_name != 'play gym'  
WHEN NOT MATCHED THEN  
  INSERT VALUES (np.product_id, np.product_name, np.category) WHERE np.category = 'books';
MERGE 4

-- Query updates.
openGauss=# SELECT * FROM products ORDER BY product_id;
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
openGauss=# DROP TABLE products;
openGauss=# DROP TABLE newproducts;
```

