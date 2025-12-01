# Batch Processing Mode<a name="EN-US_TOPIC_0000001255021831"></a>

openGauss supports the execution of SQL statements from text files and provides the gsql tool to process SQL statements in batches.

Batch processing is recommended in the following scenarios:

-   If you run a query repeatedly \(for example, daily or weekly\), you can set it as a script to avoid repeated input.
-   You can generate a new query from an existing similar query by copying and editing the script file.
-   For multi-line statements or multi-statement sequences, if an error occurs, you do not need to input all the content again. You only need to edit the script to correct the error, and then execute it again.
-   You can distribute the script to others so that they can also execute the statements.
-   When interactive use is not allowed in some cases, you must use the batch processing mode.

## Syntax<a name="section3644161111459"></a>

```
gsql -d dbname -p port -f filename
```

## Parameter Description<a name="section3770135115014"></a>

-   **dbname**

    Specifies the name of the database to connect to.

-   **port**

    Specifies the port number of the database server.

-   **-f filename**

    Specifies that files are used as the command source instead of interactively-entered commands. This parameter specifies the path and name of the text file to be read.


## Examples<a name="section231191615452"></a>

1.  Create the  **sql.txt**  file locally. The file content is as follows:

    ```
    CREATE TABLE customer
    (
        c_customer_sk             integer,
        c_customer_id             char(5),
        c_first_name              char(6),
        c_last_name               char(8),
        Amount                    integer
    );
    
    INSERT INTO customer(c_customer_sk, c_customer_id, c_first_name,Amount) VALUES (3769, 'hello', 'Grace', 1000);
    INSERT INTO customer (c_customer_sk, c_first_name) VALUES (3769, 'Grace');
    INSERT INTO customer (c_customer_sk, c_customer_id, c_first_name) VALUES (3769, 'hello', DEFAULT);
    INSERT INTO customer (c_customer_sk, c_customer_id, c_first_name,Amount) VALUES 
        (6885, 'maps', 'Joes',2200),
        (4321, 'tpcds', 'Lily',3000),
        (9527, 'world', 'James',5000);
    ```

2.  Execute the SQL statements in the  **sql.txt**  file.

    ```
    gsql -d postgres -p 21013 -f /home/user/sql.txt
    ```

    The result is as follows:

    ```
    CREATE TABLE
    INSERT 0 1
    INSERT 0 1
    INSERT 0 1
    INSERT 0 3
    ```


