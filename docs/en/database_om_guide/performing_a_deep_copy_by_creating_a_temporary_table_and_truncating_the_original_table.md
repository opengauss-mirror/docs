# Performing a Deep Copy by Creating a Temporary Table and Truncating the Original Table<a name="EN-US_TOPIC_0242370294"></a>

Run the  **CREATE TABLE ....** **AS**  statement to create a temporary table for the original table, truncate the original table, and batch insert data of the temporary data into the original table.

When creating the temporary table, retain the primary key attributes of the original table. This method is recommended if the original table has dependency items.

## Procedure<a name="en-us_topic_0237121144_en-us_topic_0165787116_section1098017411363"></a>

1.  Run the  **CREATE TABLE AS**  statement to create a temporary table  **customer\_t\_temp**  for the  **customer\_t**  table.

    ```
    CREATE TEMP TABLE customer_t_temp AS SELECT * FROM customer_t;
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >Compared with the use of permanent tables, the use of temporary tables can improve performance but may incur data loss. A temporary table is automatically deleted at the end of the session where it is located. If data loss is unacceptable, use a permanent table.  

2.  Truncate the original table  **customer\_t**.

    ```
    TRUNCATE customer_t;
    ```

3.  Run the  **INSERT INTO...SELECT**  statement to batch insert data of the temporary table into the original table.

    ```
    INSERT INTO customer_t (SELECT * FROM customer_t_temp);
    ```

4.  Delete the temporary table  **customer\_t\_temp**.

    ```
    DROP TABLE customer_t_temp;
    ```


