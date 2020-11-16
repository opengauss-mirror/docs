# Viewing Data<a name="EN-US_TOPIC_0242370188"></a>

-   Run the following command to query information about all tables in a database in the system catalog  **pg\_tables**:

    ```
    SELECT * FROM pg_tables;
    ```

-   Run the  **\\d+**  command of the  **gsql**  tool to query table attributes:

    ```
    \d+ customer_t1;
    ```

-   Run the following command to query the data volume of table  **customer\_t1**:

    ```
    SELECT count(*) FROM customer_t1;
    ```

-   Run the following command to query all data in the table  **customer\_t1**:

    ```
    SELECT * FROM customer_t1;
    ```

-   Run the following command to query only the data in the column  **c\_customer\_sk**:

    ```
    SELECT c_customer_sk FROM customer_t1;
    ```

-   Run the following command to filter repeated data in the column  **c\_customer\_sk**:

    ```
    SELECT DISTINCT( c_customer_sk ) FROM customer_t1;
    ```

-   Run the following command to query all data whose column  **c\_customer\_sk**  is  **3869**:

    ```
    SELECT * FROM customer_t1 WHERE c_customer_sk = 3869;
    ```

-   Run the following command to collate data based on the column  **c\_customer\_sk**:

    ```
    SELECT * FROM customer_t1 ORDER BY c_customer_sk;
    ```


