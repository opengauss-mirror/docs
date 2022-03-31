# INSERT INTO Statement<a name="EN-US_TOPIC_0000001255341793"></a>

A new table contains no data. You need to insert data to the table before using it. You can execute the INSERT INTO statement to insert data into the table. This statement can be used to insert a row of data or multiple rows of data at the same time.

## Syntax<a name="section935114915543"></a>

```
INSERT INTO table_name [ ( column_name [, ...] ) ]
    { DEFAULT VALUES
    | VALUES {( { expression | DEFAULT } [, ...] ) }[, ...] };
```

## Parameter Description<a name="section932010594419"></a>

-   **table\_name**

    Specifies the name of the target table where data will be inserted.

    Value range: an existing table name

-   **column\_name**

    Specifies the name of a column in the target table.

    -   The column name can be qualified with a subcolumn name or an array subscript, if needed.
    -   Each column not present in the column list will be filled with a default value, either its declared default value or  **NULL**  if there is none. Inserting data into only some columns of a composite type leaves the other columns  **NULL**.
    -   The target column names \(specified by  **column\_name**\) can be listed in any order. If no list of column names is given at all, the default is all the columns of the table in their declared order.
    -   The target columns are the first  _N_  column names, if there are only  _N_  columns provided by the  **value**  clause.
    -   The values provided by the  **value**  clause are associated with the corresponding columns from left to right in the table.

    Value range: an existing column

-   **expression**

    Specifies an expression or a value to assign to the corresponding column.

    -   If single-quotation marks are inserted in a column, the single-quotation marks need to be used for escape.
    -   If the expression for any column is not of the correct data type, automatic type conversion will be attempted. If the attempt fails, data insertion fails, and the system returns an error message.

-   **DEFAULT**

    Specifies the default value of a column. The value is  **NULL**  if no specified default value has been assigned to it.


## Examples<a name="section16704153143"></a>

-   Insert a row of data into the  **customer\_t1**  table.

    Data values are arranged in the same order as the columns in the table and are separated by commas \(,\). Generally, column values are text values \(constants\), but they can also be scalar expressions.

    ```
    openGauss=# INSERT INTO customer_t1(c_customer_sk, c_customer_id, c_first_name,Amount) VALUES (3769, 'hello', 'Grace', 1000);
    INSERT 0 1
    ```

    If you know the sequence of the columns in the table, you can obtain the same result without listing these columns. For example, the following command generates the same result as the preceding command:

    ```
    openGauss=# INSERT INTO customer_t1 VALUES (3769, 'hello', 'Grace',DEFAULT,1000);
    INSERT 0 1
    ```

    If you do not know some of the column values, you can omit them. If no value is specified for a column, the column is set to the default value. Example:

    ```
    openGauss=# INSERT INTO customer_t1 (c_customer_sk, c_first_name) VALUES (3769, 'Grace');
    INSERT 0 1
    Equivalent to
    openGauss=# INSERT INTO customer_t1 VALUES (3769, 'hello');
    INSERT 0 1
    ```

    You can also specify the default value of a column or row.

    ```
    openGauss=# INSERT INTO customer_t1 (c_customer_sk, c_customer_id, c_first_name) VALUES (3769, 'hello', DEFAULT);  
    INSERT 0 1
    openGauss=# INSERT INTO customer_t1 DEFAULT VALUES;
    INSERT 0 1
    ```

-   To insert multiple rows of data into a table, run the following command:

    ```
    openGauss=# INSERT INTO customer_t1 (c_customer_sk, c_customer_id, c_first_name,Amount) VALUES 
        (6885, 'maps', 'Joes',2200),
        (4321, 'tpcds', 'Lily',3000),
        (9527, 'world', 'James',5000);
    INSERT 0 3
    ```

    You can also insert multiple rows of data by running the command for inserting one row of data for multiple times. However, you are advised to run this command to improve efficiency.


