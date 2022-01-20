# Transactions<a name="EN-US_TOPIC_0000001180258712"></a>

A transaction is a user-defined sequence of database operations, which form an integral unit of work. In openGauss, you can start, set, commit, and roll back transactions. openGauss supports the  **READ COMMITTED**  and  **REPEATABLE READ**  transaction isolation levels.

-   **READ COMMITTED**: At this level, a transaction can access only committed data. This is the default level.

    The SELECT statement accesses the snapshot of the database taken when the query begins. It can also access the data updates in its transaction, regardless of whether they have been committed. Note that different database snapshots may be available to two consecutive SELECT statements for the same transaction, because data may be committed for other transactions while the first SELECT statement is executed.

    At the  **READ COMMITTED**  level, the execution of each statement begins with a new snapshot, which contains all the transactions that have been committed at the execution time. Therefore, during a transaction, a statement can access the result of other committed transactions. Note whether a single statement always accesses absolutely consistent data in a database.

    Transaction isolation at this level meets the requirements of many applications, and is fast and easy to use. However, applications performing complicated queries and updates may require data that is more consistent than this level can provide.

-   **REPEATABLE READ**: A transaction can only read data committed before it starts. Uncommitted data or data committed in other concurrent transactions cannot be read. However, a query can read earlier data updates in its transaction, regardless of whether they have been committed.  **READ UNCOMMITTED**  differs from this level in that a transaction reads the snapshot taken at the start of the transaction, not at the beginning of the current query within the transaction. Therefore, the SELECT statement within a transaction always reads the same data, and cannot read data committed by other concurrent transactions after the transaction starts. Applications at this level must be able to retry transactions, because serialization failures may occur.

## Syntax<a name="section1632155118333"></a>

-   Start a transaction.

    Execute the BEGIN statement to start a transaction.

    ```
    BEGIN [ WORK | TRANSACTION ]
      [ 
        { 
           ISOLATION LEVEL { READ COMMITTED | SERIALIZABLE | REPEATABLE READ }
           | { READ WRITE | READ ONLY }
          } [, ...] 
      ];
    ```

    Execute the START TRANSACTION statement to start a transaction.

    ```
    START TRANSACTION
      [ 
        { 
           ISOLATION LEVEL { READ COMMITTED | SERIALIZABLE | REPEATABLE READ }
           | { READ WRITE | READ ONLY }
         } [, ...] 
      ];
    ```

-   Set transaction features.

    Use the SET TRANSACTION statement or the syntax to set the isolation level and read/write mode of a transaction.

    ```
    { SET [ LOCAL ] TRANSACTION|SET SESSION CHARACTERISTICS AS TRANSACTION }
      { ISOLATION LEVEL { READ COMMITTED | SERIALIZABLE | REPEATABLE READ }
      | { READ WRITE | READ ONLY } } [, ...];
    ```

-   Commit a transaction.

    Execute the COMMIT or END statement to commit all operations of a transaction.

    ```
    { COMMIT | END } [ WORK | TRANSACTION ] ;
    ```

-   Roll back a transaction.

    If a fault occurs during a transaction and the transaction cannot proceed, the system performs rollback to cancel all the completed database operations related to the transaction.

    ```
    ROLLBACK [ WORK | TRANSACTION ];
    ```


## Parameter Description<a name="section6973139183420"></a>

-   **WORK | TRANSACTION**

    Specifies the optional keyword in BEGIN format without functions.

-   **ISOLATION LEVEL**

    Specifies the transaction isolation level that determines the data that a transaction can view if other concurrent transactions exist.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >The isolation level of a transaction cannot be reset after the first clause \(**SELECT**,  **INSERT**,  **DELETE**,  **UPDATE**,  **FETCH**, or  **COPY**\) for modifying data is executed in the transaction.

    Value range:

    -   **READ COMMITTED**: Only committed data is read. This is the default.
    -   **REPEATABLE READ**: Only the data committed before transaction start is read. Uncommitted data or data committed in other concurrent transactions cannot be read.
    -   **SERIALIZABLE**: Currently, this isolation level is not supported in functions. It is equivalent to  **REPEATABLE READ**.

-   **READ WRITE | READ ONLY**

    Specifies the transaction access mode \(read/write or read only\).

-   **LOCAL**

    Specifies that the specified statement takes effect only for the current transaction.

-   **SESSION**

    Specifies that the specified statement takes effect for the current session.

    Value range: a string. It must comply with the identifier naming convention.

-   **COMMIT | END**

    Commits the current transaction and makes all changes made by the transaction become visible to others.


## Examples<a name="section138212173345"></a>

Assume that the  **customer\_t1**  table exists and contains the following data:

```
openGauss=# SELECT * FROM customer_t1;
 c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
---------------+---------------+--------------+-------------+--------
          3769 | hello         | Grace        |             |   1000
          3769 |               | Grace        |             |
          3769 | hello         |              |             |
          6885 | maps          | Joes         |             |   2200
          4321 | tpcds         | Lily         |             |   3000
          9527 | world         | James        |             |   5000
(6 rows)
```

Start a transaction, delete the row where  **amount**  is set to  **1000**  from the table, and execute the ROLLBACK statement to undo all changes.

```
openGauss=# START TRANSACTION;
openGauss=# DELETE FROM customer_t1 WHERE amount = 1000;
openGauss=# ROLLBACK;
```

In the  **customer\_t1**  table, the row where  **amount**  is set to  **1000**  still exists.

```
openGauss=# select * from customer_t1;
 c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
---------------+---------------+--------------+-------------+--------
          3769 | hello         | Grace        |             |   1000
          3769 |               | Grace        |             |
          3769 | hello         |              |             |
          6885 | maps          | Joes         |             |   2200
          4321 | tpcds         | Lily         |             |   3000
          9527 | world         | James        |             |   5000
(6 rows)
```

Start another transaction, delete the record whose  **amount**  is set to  **1000**  from the table, and execute the COMMIT command to commit all changes.

```
-- Start a transaction and set its isolation level to READ COMMITTED and access mode to READ ONLY.
openGauss=# BEGIN;
openGauss=# DELETE FROM customer_t1 WHERE amount = 1000;
openGauss=# COMMIT;
```

The record whose  **amount**  is set to  **1000**  has been deleted from the  **customer\_t1**  table.

```
openGauss=# select * from customer_t1;
 c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
---------------+---------------+--------------+-------------+--------
          3769 |               | Grace        |             |
          3769 | hello         |              |             |
          6885 | maps          | Joes         |             |   2200
          4321 | tpcds         | Lily         |             |   3000
          9527 | world         | James        |             |   5000
(5 rows)
```

