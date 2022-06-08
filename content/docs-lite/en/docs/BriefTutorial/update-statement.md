# UPDATE Statement<a name="EN-US_TOPIC_0000001209981902"></a>

Existing data in a database can be updated. You can update one row, all rows, or specified rows of data, or update data in a single column without affecting the data in the other columns. The UPDATE statement changes the values of the specified columns in all rows that satisfy the condition. The  **WHERE**  clause clarifies conditions. The columns to be modified need to be mentioned in the  **SET**  clause; columns not explicitly modified retain their previous values.

## Syntax<a name="section169339391182"></a>

```
UPDATE table_name 
SET column_name = { expression | DEFAULT } 
[WHERE condition ];
```

## Parameter Description<a name="section24508283118"></a>

-   **table\_name**

    Specifies the name \(optionally schema-qualified\) of the table to be updated. For example,  **myshcema.table**.

    Value range: an existing table name

-   **expression**

    Specifies the expression or value to be assigned to a column.

-   **column\_name**

    Specifies the name of the column to be modified.

    Value range: an existing column name

-   **condition**

    Specifies an expression that returns a value of Boolean type. Only rows for which this expression returns  **true**  are updated.


## Examples<a name="section1401745151110"></a>

Run the following command to change the value of  **c\_customer\_sk**  in the  **customer\_t1**  table from  **9527**  to  **9876**:

```
openGauss=# UPDATE customer_t1 SET c_customer_sk = 9876 WHERE c_customer_sk = 9527;
UPDATE 1
```

You can use a schema to modify the table name. If no such modifier is specified, the table is located based on the default schema path. In the statement,  **SET**  is followed by the target column and the new column value. The new column value can be a constant or an expression.

For example, run the following statement to increase all the values in the  **c\_customer\_sk**  column by 100:

```
openGauss=# UPDATE customer_t1 SET c_customer_sk = c_customer_sk + 100;
UPDATE 9
```

This statement does not include the  **WHERE**  clause, so all rows are updated. If the statement includes the  **WHERE**  clause, only the rows matching the clause are updated.

In the  **SET**  clause, the equal sign \(=\) indicates value setting. In the  **WHERE**  clause, the equal sign indicates comparison.  **WHERE**  may not represent an equation and can be replaced by other operators.

You can run an UPDATE statement to update multiple columns by specifying multiple values in the  **SET**  clause. For example:

```
openGauss=# UPDATE customer_t1 SET c_customer_id = 'Admin', c_first_name = 'Local' WHERE c_customer_sk = 4421; 
UPDATE 1
```

