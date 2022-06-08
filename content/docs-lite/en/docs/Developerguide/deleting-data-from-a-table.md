# Deleting Data from a Table<a name="EN-US_TOPIC_0289900119"></a>

Outdated data may need to be deleted when tables are used. Data can be deleted from tables only by row.

SQL statements can only access and delete an independent row by declaring conditions that match the row. If a table has a primary key, you can use it to specify a row. You can delete several rows that match the specified condition or delete all the rows from a table.

For example, to delete all the rows whose  **c\_customer\_sk**  column is  **3869**  from the table  **customer\_t1**, run the following command:

```
openGauss=# DELETE FROM customer_t1 WHERE c_customer_sk = 3869;
```

To delete all rows from the table, run either of the following commands:

```
openGauss=# DELETE FROM customer_t1;
```

Or

```
openGauss=# TRUNCATE TABLE customer_t1;
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>If you need to delete an entire table, you are advised to use the  **TRUNCATE**  statement rather than  **DELETE**.

To delete a table, run the following command:

```
openGauss=# DROP TABLE customer_t1;
```

