# Performing a Deep Copy by Using the CREATE TABLE Statement<a name="EN-US_TOPIC_0289900646"></a>

Run the  **CREATE TABLE**  statement to create a copy of the original table, batch insert data of the original table into the copy, and rename the copy to the name of the original table.

When creating the copy, you can specify table and column attributes, such as the primary key.

## Procedure<a name="en-us_topic_0283136747_en-us_topic_0237121142_en-us_topic_0165787114_section827316454146"></a>

Perform the following operations to carry out a deep copy for the  **customer\_t**  table:

1.  Run the  **CREATE TABLE**  statement to create the copy  **customer\_t\_copy**  of the  **customer\_t**  table.

    ```
    openGauss=# CREATE TABLE customer_t_copy
    ( c_customer_sk             integer,   
      c_customer_id             char(5),    
      c_first_name              char(6),    
      c_last_name               char(8) 
    ) ;
    ```

2.  Run the  **INSERT INTO...SELECT**  statement to batch insert data of the original table into the copy.

    ```
    openGauss=# INSERT INTO customer_t_copy (SELECT * FROM customer_t);
    ```

3.  Delete the original table.

    ```
    openGauss=# DROP TABLE customer_t;
    ```

4.  Run the  **ALTER TABLE**  statement to rename the copy to the name of the original table.

    ```
    openGauss=# ALTER TABLE customer_t_copy RENAME TO customer_t;
    ```


