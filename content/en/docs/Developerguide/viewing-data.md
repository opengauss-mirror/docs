# Viewing Data<a name="EN-US_TOPIC_0242370188"></a>

-   Run the following command to query information about all tables in a database in the system catalog  **pg\_tables**:

    ```
    postgres=# SELECT * FROM pg_tables;
    ```

-   Run the  **\\d+**  command of the  **gsql**  tool to query table attributes:

    ```
    postgres=# \d+ customer_t1;
    ```

-   Run the following command to query the data volume of table  **customer\_t1**:

    ```
    postgres=# SELECT count(*) FROM customer_t1;
    ```

-   Run the following command to query all data in the table  **customer\_t1**:

    ```
    postgres=# SELECT * FROM customer_t1;
    ```

-   Run the following command to query only the data in the column  **c\_customer\_sk**:

    ```
    postgres=# SELECT c_customer_sk FROM customer_t1;
    ```

-   Run the following command to filter repeated data in the column  **c\_customer\_sk**:

    ```
    postgres=# SELECT DISTINCT( c_customer_sk ) FROM customer_t1;
    ```

-   Run the following command to query all data whose column  **c\_customer\_sk**  is  **3869**:

    ```
    postgres=# SELECT * FROM customer_t1 WHERE c_customer_sk = 3869;
    ```

-   Run the following command to collate data based on the column  **c\_customer\_sk**:

    ```
    postgres=# SELECT * FROM customer_t1 ORDER BY c_customer_sk;
    ```


