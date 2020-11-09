# UPDATE<a name="EN-US_TOPIC_0242370658"></a>

## Function<a name="en-us_topic_0237122194_en-us_topic_0059778969_s85747c5f88e64562a8ff9ddacda19929"></a>

**UPDATE**  updates data in a table.  **UPDATE**  changes the values of the specified columns in all rows that satisfy the condition. The  **WHERE**  clause clarifies conditions. The columns to be modified need to be mentioned in the  **SET**  clause; columns not explicitly modified retain their previous values.

## Precautions<a name="en-us_topic_0237122194_en-us_topic_0059778969_s7e9e912f472543cbb190edb83e5f22d2"></a>

-   You must have the  **UPDATE**  permission on a table to be updated.
-   You must have the  **SELECT**  permission on all tables involved in the expressions or conditions.
-   For column-store tables, the  **RETURNING**  clause is currently not supported.
-   Column-store tables do not support non-deterministic update. If you update data in one row with multiple rows of data in a column-store table, an error will be reported.
-   Memory space that records update operations in column-store tables is not reclaimed. You need to clean it by executing  **VACUUM FULL table\_name**.
-   Currently,  **UPDATE**  cannot be used in column-store replication tables.

## Syntax<a name="en-us_topic_0237122194_en-us_topic_0059778969_sd8d9ff15ff6c45c9aebd16c861936c06"></a>

```
UPDATE [ ONLY ] table_name [ * ] [ [ AS ] alias ]
SET {column_name = { expression | DEFAULT } 
    |( column_name [, ...] ) = {( { expression | DEFAULT } [, ...] ) |sub_query }}[, ...]
    [ FROM from_list] [ WHERE condition ]
    [ RETURNING {* 
                | {output_expression [ [ AS ] output_name ]} [, ...] }];

where sub_query can be:
SELECT [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
{ * | {expression [ [ AS ] output_name ]} [, ...] }
[ FROM from_item [, ...] ]
[ WHERE condition ]
[ GROUP BY grouping_element [, ...] ]
[ HAVING condition [, ...] ]
```

## Parameter Description<a name="en-us_topic_0237122194_en-us_topic_0059778969_sf3e3262b89854b3d829a94054116838c"></a>

-   **table\_name**

    Specifies the name \(optionally schema-qualified\) of the table to be updated.

    Value range: an existing table name

-   **alias**

    Specifies a substitute name for the target table.

    Value range: a string. It must comply with the naming convention rule.

-   **column\_name**

    Specifies the name of the column to be modified.

    You can refer to this column by specifying the target table alias and the column name. For example:

    UPDATE foo AS f SET f.col\_name = 'postgres';

    Value range: an existing column

-   **expression**

    Specifies a value assigned to a column or an expression that assigns the value.

-   **DEFAULT**

    Specifies the default value of a column.

    The value is  **NULL**  if no specified default value has been assigned to it.

-   **sub\_query**

    Specifies a subquery.

    This statement can be executed to update a table with information for other tables in the same database. For details about clauses in the  **SELECT**  statement, see  [SELECT](select.md).

-   **from\_list**

    Specifies a list of table expressions, allowing columns from other tables to appear in the  **WHERE**  condition and the update expressions. This is similar to the list of tables that can be specified in the  **FROM**  clause of a  **SELECT**  statement.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**   
    >Note that the target table must not appear in the  **from\_list**, unless you intend a self-join \(in which case it must appear with an alias in the  **from\_list**\).  

-   **condition**

    Specifies an expression that returns a value of type Boolean. Only rows for which this expression returns  **true**  are updated.

-   **output\_expression**

    Specifies an expression to be computed and returned by the  **UPDATE**  statement after each row is updated.

    Value range: The expression can use any column names of the table named by  **table\_name**  or table\(s\) listed in  **FROM**. Write \* to return all columns.

-   **output\_name**

    Specifies a name to use for a returned column.


## Examples<a name="en-us_topic_0237122194_en-us_topic_0059778969_s23d933f56bc745e1bd819083b4e50155"></a>

```
-- Create a table student1.
postgres=# CREATE TABLE student1
(
   stuno     int,
   classno   int 
);

-- Insert data.
postgres=# INSERT INTO student1 VALUES(1,1);
postgres=# INSERT INTO student1 VALUES(2,2);
postgres=# INSERT INTO student1 VALUES(3,3);

-- View data.
postgres=# SELECT * FROM student1;

-- Update the values of all records.
postgres=# UPDATE student1 SET classno = classno*2;

-- View data.
postgres=# SELECT * FROM student1;

-- Delete the table.
postgres=# DROP TABLE student1;
```

