# Performing a Deep Copy by Using the CREATE TABLE LIKE Statement<a name="EN-US_TOPIC_0242370293"></a>

Run the  **CREATE TABLE LIKE**  statement to create a copy of the original table, batch insert data of the original table into the copy, and rename the copy to the name of the original table. This method does not inherit the primary key attributes of the original table. You can use the  **ALTER TABLE**  statement to add them.

## Procedure<a name="en-us_topic_0237121143_en-us_topic_0165787115_section1349410417334"></a>

1.  Run the  **CREATE TABLE LIKE**  statement to create the copy  **customer\_t\_copy**  of the  **customer\_t**  table.

    ```
    CREATE TABLE customer_t_copy (LIKE customer_t);
    ```

2.  Run the  **INSERT INTO...SELECT**  statement to batch insert data of the original table into the copy.

    ```
    INSERT INTO customer_t_copy (SELECT * FROM customer_t);
    ```

3.  Delete the original table.

    ```
    DROP TABLE customer_t;
    ```

4.  Run the  **ALTER TABLE**  statement to rename the copy to the name of the original table.

    ```
    ALTER TABLE customer_t_copy RENAME TO customer_t;
    ```


