# Updating Data in a Table<a name="EN-US_TOPIC_0242370187"></a>

Existing data in a database can be updated. You can update one row, all rows, or specified rows of data, or update data in a column without affecting the data in the other columns.

The following types of information are required when the  **UPDATE**  statement is used to update a row:

-   Table name and column name of the data to be updated
-   New column value
-   Rows of the data to be updated

Generally, the SQL language does not provide a unique ID for a row of data. Therefore, it is impossible to directly specify the rows of the data to be updated. However, you can specify the rows by declaring the conditions that must be met by the updated row. If a table contains primary keys, you can specify a row using the primary keys.

For details about how to create a table and insert data to it, see  [Creating Tables](creating-tables.md)  and  [Inserting Data to Tables](inserting-data-to-tables.md).

**c\_customer\_sk**  in the table  **customer\_t1**  must be changed from  **9527**  to  **9876**:

```
UPDATE customer_t1 SET c_customer_sk = 9876 WHERE c_customer_sk = 9527;
```

You can use a schema to modify the table name. If no such modifier is specified, the table is located based on the default schema path. In the statement,  **SET**  is followed by the target column and the new column value. The new value can be a constant or an expression.

For example, run the following statement to increase all the values in the  **c\_customer\_sk**  column by 100:

```
UPDATE customer_t1 SET c_customer_sk = c_customer_sk + 100;
```

This statement does not include the  **WHERE**  clause, so all rows are updated. If the statement includes the  **WHERE**  clause, only the rows matching the clause are updated.

In the  **SET**  clause, the equal sign \(=\) indicates value setting. In the  **WHERE**  clause, the equal sign indicates comparison.  **WHERE**  may not represent an equation and can be replaced by other operators.

You can run an  **UPDATE**  statement to update multiple columns by specifying multiple values in the  **SET**  clause. For example:

```
UPDATE customer_t1 SET  c_customer_id = 'Admin', c_first_name = 'Local' WHERE c_customer_sk = 4421; 
```

After data has been updated or deleted in batches, a large number of deletion markers are generated in the data file. During query, data with these deletion markers needs to be scanned as well. In this case, a large amount of data with deletion marks can greatly affect the query performance after batch updates or deletions. If data needs to be updated or deleted in batches frequently, you are advised to periodically run the  **VACUUM FULL**  statement to maintain the query performance.
