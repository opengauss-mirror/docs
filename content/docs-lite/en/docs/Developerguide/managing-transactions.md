# Managing Transactions<a name="EN-US_TOPIC_0289900231"></a>

A transaction is a customized sequence of database operations, which form an integral unit of work. In openGauss, you can start, set, commit, and roll back transactions. The openGauss database supports the following transaction isolation levels: READ COMMITTED, READ UNCOMMITTED (not recommended), REPEATABLE READ, and SERIALIZABLE. SERIALIZABLE is equivalent to REPEATABLE READ.

## Controlling Transactions<a name="en-us_topic_0283137356_en-us_topic_0237120247_en-us_topic_0059778859_sd9dd464abaa740aa8af27a7929d2b431"></a>

The following describes transaction operations supported by the database:

-   Starting transactions

    You can start transactions using  [START TRANSACTION](start-transaction.md)  and  [BEGIN](begin.md).

-   Setting transactions

    You can use the  **SET TRANSACTION**  or  **SET LOCAL TRANSACTION**  syntax to set transactions. For details, see  [SET TRANSACTION](set-transaction.md).

-   Committing transactions

    You can commit all operations of a transaction using  **COMMIT**  or  **END**. For details, see  [COMMIT | END](commit-end.md).

-   Rolling back transactions

    Rollback indicates that the system cancels all changes that a transaction has made to a database if the transaction fails to be executed due to a fault. For details, see  [ROLLBACK](rollback.md).


## Transaction Isolation Levels<a name="en-us_topic_0283137356_en-us_topic_0237120247_en-us_topic_0059778859_sdb809512ed2b47c98637a5d7bcd6deb1"></a>

A transaction isolation level specifies how concurrent transactions process the same object.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The isolation level cannot be changed after data is modified using  **SELECT**,  **INSERT**,  **DELETE**,  **UPDATE**,  **FETCH**, or  **COPY**  in the transaction.

-   **READ COMMITTED**: At this level, a transaction can access only committed data. This is the default level.

    The  **SELECT**  statement accesses the snapshot of the database taken when the query begins. The  **SELECT**  statement can also access the data updates in its session, regardless of whether they have been committed. Note that different database snapshots may be available to two consecutive  **SELECT**  statements for the same transaction, because data may be committed for other transactions while the first  **SELECT**  statement is executed.

    At the  **READ COMMITTED**  level, the execution of each statement begins with a new snapshot, which contains all the transactions that have been committed by the execution time. Therefore, during a transaction, a statement can access the result of other committed transactions. Note whether a single statement always accesses absolutely consistent data in a database.

    Transaction isolation at this level meets the requirements of many applications, and is fast and easy to use. However, applications performing complicated queries and updates may require data that is more consistent than this level can provide.

-   **REPEATABLE READ**: A transaction can only read data committed before it starts. Uncommitted data or data committed in other concurrent transactions cannot be read. However, a query can read earlier data updates in its transaction, regardless of whether they have been committed.  **READ UNCOMMITTED**  differs from this level in that a transaction reads the snapshot taken at the start of the transaction, not at the beginning of the current query within the transaction. Therefore, the  **SELECT**  statement within a transaction always reads the same data, and cannot read data submitted by other concurrent transactions after the transaction starts. Applications at this level must be able to retry transactions, because serialization failures may occur.
