# B-Compatible Database Lock<a name="EN-US_TOPIC_0000001225179937"></a>

To ensure database data consistency, you can execute the LOCK TABLES statement to prevent other users from modifying tables.

For example, an application needs to ensure that data in a table is not modified during transaction running. For this purpose, table usage can be locked. This prevents data from being concurrently modified.

After LOCK TABLES is used, the subsequent SQL statements are in the transaction state. Therefore, you need to run UNLOCK TABLES to manually release the lock and end the transaction.

In addition, if you want to make the current session read-only, you can use FLUSH TABLES WITH READ LOCK to implement this function. Then, you need to use UNLOCK TABLES to manually disable this function.



## Syntax<a name="section1632155118333"></a>

-   Lock.
    ```
    LOCK TABLES namelist READ/WRITE
    ```

-   Make the current session read-only.
    ```
    FLUSH TABLES WITH READ LOCK
    ```

-   Unlock.
    ```
    UNLOCK TABLES
    ```

## Parameter Description<a name="section6973139183420"></a>

-   **namelist**

    Name of the table to be locked. Multiple tables are allowed.

-   **READ/WRITE**

    Lock mode. Values:

    -   **READ**

        Tables can be read only.

    -   **WRITE**

        The holder is the only transaction accessing the table in any way.



## Examples<a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_s9884bdbe455b460a9a2dde267283b75b"></a>

Obtains a **WRITE** lock on a table when going to perform a delete operation.

```
--Create an example table.
openGauss=# CREATE TABLE graderecord  
             (  
             number INTEGER,  
             name CHAR(20),  
             class CHAR(20),  
             grade INTEGER
             );
--Insert data.
openGauss=# insert into graderecord values('210101','Alan','21.01',92);  

--Provide the example table.
openGauss=# LOCK TABLES graderecord WRITE;

--Delete the example table.
openGauss=# DELETE FROM graderecord WHERE name ='Alan';

openGauss=# UNLOCK TABLES;
```
