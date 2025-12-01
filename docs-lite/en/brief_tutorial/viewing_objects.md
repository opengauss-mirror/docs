# Viewing Objects<a name="EN-US_TOPIC_0000001255221829"></a>

gsql provides several advanced features to facilitate user operations. The common usage is as follows:

-   Query the command help information.

    ```
    \h [NAME]
    ```

    For example, query all syntaxes of the ABORT statement.

    ```
    openGauss=# \h ABORT
    Command:     ABORT
    Description: abort the current transaction
    Syntax:
    ABORT [ WORK | TRANSACTION ] ;
    ```

-   Switch databases.

    ```
    \c dbname
    ```

    For example, switch the  **postgres**  database to the  **dp\_tpcc**  database.

    ```
    openGauss=# \c db_tpcc
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    You are now connected to database "db_tpcc" as user "omm".
    db_tpcc=# 
    ```

-   Query all databases.

    ```
    \l
    ```

    The following is an example:

    ```
    openGauss=# \l
                              List of databases
       Name    | Owner | Encoding  | Collate | Ctype | Access privileges
    -----------+-------+-----------+---------+-------+-------------------
     mydb      | omm   | GBK       | C       | C     |
     postgres  | omm   | SQL_ASCII | C       | C     |
     template0 | omm   | SQL_ASCII | C       | C     | =c/omm           +
               |       |           |         |       | omm=CTc/omm
     template1 | omm   | SQL_ASCII | C       | C     | =c/omm           +
               |       |           |         |       | omm=CTc/omm
    (4 rows)
    ```


-   Query all tables in the current database.

    ```
    \dt
    ```

    The following is an example:

    ```
    openGauss=# \dt
                                  List of relations
     Schema |      Name       | Type  | Owner |             Storage
    --------+-----------------+-------+-------+----------------------------------
     public | customer_t1     | table | omm   | {orientation=row,compression=no}
     public | customer_t1_bak | table | omm   | {orientation=row,compression=no}
    (2 rows)
    ```


-   View a table structure.

    ```
    \d tablename
    ```

    For example, view the structure of the  **customer\_t1**  table.

    ```
    openGauss=# \d customer_t1
            Table "public.customer_t1"
        Column     |     Type     | Modifiers
    ---------------+--------------+-----------
     c_customer_sk | integer      |
     c_customer_id | character(5) |
     c_first_name  | character(6) |
     c_last_name   | character(8) |
     amount        | integer      |
    ```


