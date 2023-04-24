# Updating a Table by Using DML Statements<a name="EN-US_TOPIC_0289900189"></a>

In openGauss, you can update a table by running DML statements.

## Procedure<a name="en-us_topic_0283136592_en-us_topic_0237121139_en-us_topic_0165787111_section6970183123711"></a>

There is a table named  **customer\_t**  and the table structure is as follows:

```
openGauss=# CREATE TABLE customer_t
( c_customer_sk             integer,   
  c_customer_id             char(5),    
  c_first_name              char(6),    
  c_last_name               char(8) 
) ;
```

You can run the following DML statements to update data in the table.

-   Run the  **INSERT**  statement to insert data into the table.
    -   Insert a row to the  **customer\_t**  table.

        ```
        openGauss=# INSERT INTO customer_t (c_customer_sk, c_customer_id, c_first_name,c_last_name) VALUES (3769, 5, 'Grace','White');
        ```

    -   Insert multiple rows to the  **customer\_t**  table.

        ```
        openGauss=# INSERT INTO customer_t (c_customer_sk, c_customer_id, c_first_name,c_last_name) VALUES    
        (6885, 1, 'Joes', 'Hunter'),    
        (4321, 2, 'Lily','Carter'),    
        (9527, 3, 'James', 'Cook'),
        (9500, 4, 'Lucy', 'Baker');
        ```

        For details on how to use  **INSERT**, see  [Inserting Data to Tables](../DatabaseAdministrationGuide/inserting-data-to-tables.md).


-   Run the  **UPDATE**  statement to update data in the table. Change the value of the  **c\_customer\_id**  column to  **0**.

    ```
    openGauss=# UPDATE customer_t SET c_customer_id = 0;
    ```

    For details on how to use  **UPDATE**, see  [UPDATE](../SQLReference/update.md).

-   Run the  **DELETE**  statement to delete rows from the table.

    You can use the  **WHERE**  clause to specify the rows whose data is to delete. If you do not specify it, all rows in the table are deleted and only the data structure is retained.

    ```
    openGauss=# DELETE FROM customer_t WHERE c_last_name = 'Baker';
    ```

    For details on how to use  **DELETE**, see  [DELETE](../SQLReference/delete.md).

-   Run the  **TRUNCATE**  statement to delete all rows from the table.

    ```
    openGauss=# TRUNCATE TABLE customer_t;
    ```

    For details on how to use  **TRUNCATE**, see  [TRUNCATE](../SQLReference/truncate.md).

    The  **DELETE**  statement deletes a row of data each time whereas the  **TRUNCATE**  statement deletes data by releasing the data page stored in the table. Therefore, data can be deleted more quickly by using  **TRUNCATE**  than using  **DELETE**.

    **DELETE**  deletes table data but does not release table storage space.  **TRUNCATE**  deletes table data and releases table storage space.


