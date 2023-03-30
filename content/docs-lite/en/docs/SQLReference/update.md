# UPDATE<a name="EN-US_TOPIC_0289900207"></a>

## Function<a name="en-us_topic_0283137651_en-us_topic_0237122194_en-us_topic_0059778969_s85747c5f88e64562a8ff9ddacda19929"></a>

**UPDATE**  updates data in a table.  **UPDATE**  changes the values of the specified columns in all rows that satisfy the condition. The  **WHERE**  clause clarifies conditions. The columns to be modified need to be mentioned in the  **SET**  clause; columns not explicitly modified retain their previous values.

## Precautions<a name="en-us_topic_0283137651_en-us_topic_0237122194_en-us_topic_0059778969_s7e9e912f472543cbb190edb83e5f22d2"></a>

-   The owner of a table, users granted with the  **UPDATE**  permission on the table, or users granted with the  **UPDATE ANY TABLE**  permission can update data in the table. The system administrator has the permission to update data in the table by default.
-   You must have the  **SELECT**  permission on all tables involved in the expressions or conditions.
-   For column-store tables, the  **RETURNING**  clause is currently not supported.
-   Column-store tables do not support non-deterministic update. If you update data in one row with multiple rows of data in a column-store table, an error will be reported.
-   Memory space that records update operations in column-store tables is not recycled. You need to clean it by executing  **VACUUM FULL table\_name**.
-   Currently,  **UPDATE**  cannot be used in column-store replication tables.
-   The syntax for updating multiple tables takes effect only when **sql\_compatibility** is set to **B**. Column-store tables, views, and tables containing RULE cannot be updated.

## Syntax<a name="en-us_topic_0283137651_en-us_topic_0237122194_en-us_topic_0059778969_sd8d9ff15ff6c45c9aebd16c861936c06"></a>

```
Update a single table:
[ WITH [ RECURSIVE ] with_query [, ...] ]
UPDATE [/*+ plan_hint */] [ ONLY ] table_name [ partition_clause ] [ * ] [ [ AS ] alias ]
SET {column_name = { expression | DEFAULT } 
    |( column_name [, ...] ) = {( { expression | DEFAULT } [, ...] ) |sub_query }}[, ...]
    [ FROM from_list] [ WHERE condition ]
    [ ORDER BY {expression [ [ ASC | DESC | USING operator ]
    [ LIMIT { count } ]
    [ RETURNING {* 
                | {output_expression [ [ AS ] output_name ]} [, ...] }];

Update multiple tables:
[ WITH [ RECURSIVE ] with_query [, ...] ]
UPDATE [/*+ plan_hint */] table_list
SET {column_name = { expression | DEFAULT } 
    |( column_name [, ...] ) = {( { expression | DEFAULT } [, ...] ) |sub_query }}[, ...]
    [ FROM from_list] [ WHERE condition ];

where sub_query can be:
SELECT [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
{ * | {expression [ [ AS ] output_name ]} [, ...] }
[ FROM from_item [, ...] ]
[ WHERE condition ]
[ GROUP BY grouping_element [, ...] ]
[ HAVING condition [, ...] ]
[ ORDER BY {expression [ [ ASC | DESC | USING operator ] | nlssort_expression_clause ] [ NULLS { FIRST | LAST } ]} [, ...] ]
[ LIMIT { [offset,] count | ALL } ]
```

## Parameter Description<a name="en-us_topic_0283137651_en-us_topic_0237122194_en-us_topic_0059778969_sf3e3262b89854b3d829a94054116838c"></a>

-   **plan\_hint**  clause

    Follows the  **UPDATE**  keyword in the  **/\*+ \*/**  format. It is used to optimize the plan of an  **UPDATE**  statement block. For details, see  [Hint-based Tuning](hint-based-tuning.md). In each statement, only the first  **/\*+** *plan\*hint _**\*/**  comment block takes effect as a hint. Multiple hints can be written.

-   **table\_name**

    Specifies the name \(optionally schema-qualified\) of the table to be updated.

    Value range: an existing table name

-   **partition\_clause**

    Updates a specified partition.

    PARTITION \{ \( partition\_name \) | FOR \( partition\_value \[, ...\] \) \} |

    SUBPARTITION \{ \( subpartition\_name \) | FOR \( subpartition\_value \[, ...\] \) \}

    For details about the keywords, see  [SELECT](select.md).

    For details, see  [CREATE TABLE SUBPARTITION](create-table-subpartition.md).

-   **alias**

    Specifies a substitute name for the target table.

    Value range: a string. It must comply with the identifier naming convention.

-   **table\_list**

    Expression list of a table, which is similar to from\_list. However, the target table and associated table can be declared at the same time. This parameter takes effect only when **sql\_compatibility** is set to **B**.

-   **column\_name**

    Specifies the name of the column to be modified.

    You can refer to this column by specifying the target table alias and the column name. Example:

    UPDATE foo AS f SET f.col\_name = 'namecol';

    Value range: an existing column

-   **expression**

    Specifies a value assigned to a column or an expression that assigns the value.

-   **DEFAULT**

    Specifies the default value of a column.

    The value is  **NULL**  if no specified default value has been assigned to it.

-   **sub\_query**

    Specifies a subquery.

    This statement can be executed to update a table with information for other tables in the same database. For details about clauses in the  **SELECT**  statement, see  [SELECT](select.md).

    When a single column is updated, the ORDER BY and LIMIT clauses can be used. When multiple columns are updated, the ORDER BY and LIMIT clauses cannot be used.

-   **from\_list**

    Specifies a list of table expressions, allowing columns from other tables to appear in the  **WHERE**  condition and the update expressions. This is similar to the list of tables that can be specified in the  **FROM**  clause of a  **SELECT**  statement.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >Note that the target table must not appear in the  **from\_list**, unless you intend a self-join \(in which case it must appear with an alias in the  **from\_list**\).

-   **condition**

    Specifies an expression that returns a value of type Boolean. Only rows for which this expression returns  **true**  are updated. You are not advised to use numeric types such as int for  **condition**, because such types can be implicitly converted to bool values \(non-zero values are implicitly converted to  **true**  and  **0**  is implicitly converted to  **false**\), which may cause unexpected results.

-   **ORDER BY**

    For details about the keywords, see [SELECT](select.md).

-   **LIMIT**

    For details about the keywords, see [SELECT](select.md).

-   **output\_expression**

    Specifies an expression to be computed and returned by the  **UPDATE**  statement after each row is updated.

    Value range: The expression can use any column names of the table named by  **table\_name**  or tables listed in  **FROM**. Write \* to return all columns.

-   **output\_name**

    Specifies a name to use for a returned column.


## Examples<a name="en-us_topic_0283137651_en-us_topic_0237122194_en-us_topic_0059778969_s23d933f56bc745e1bd819083b4e50155"></a>

```
-- Create the student1 table.
openGauss=# CREATE TABLE student1
(
   stuno     int,
   classno   int 
);

-- Insert data.
openGauss=# INSERT INTO student1 VALUES(1,1);
openGauss=# INSERT INTO student1 VALUES(2,2);
openGauss=# INSERT INTO student1 VALUES(3,3);

-- View data.
openGauss=# SELECT * FROM student1;

-- Update the values of all records.
openGauss=# UPDATE student1 SET classno = classno*2;

-- View data.
openGauss=# SELECT * FROM student1;

-- Delete the table.
openGauss=# DROP TABLE student1;
```
