# Autonomous Transaction<a name="EN-US_TOPIC_0274616444"></a>

An autonomous transaction divides a main transaction into several sub-transactions. The main transaction is executed only after the sub-transactions are executed. Sub-transactions are independent of the main transaction. The  **ROLLBACK**  and  **COMMIT**  operations in a sub-transaction affect only the DML operations in the sub-transaction. Similarly, the  **ROLLBACK**  and  **COMMIT**  operations in the main transaction affect only the DML operations in the main transaction, and do not affect the DML operations in the sub-transactions. A  **COMMIT**  operation in a sub-transaction will not be undone by the  **ROLLBACK**  operation in the main transaction.

An autonomous transaction is defined in a function or stored procedure and specified by the  **PRAGMA AUTONOMOUS\_TRANSACTION**  keyword.

-   **[User-defined Function Supporting Autonomous Transaction](user-defined-function-supporting-autonomous-transaction.md)**  

-   **[Stored Procedure Supporting Autonomous Transaction](stored-procedure-supporting-autonomous-transaction.md)**  

-   **[Restrictions](restrictions.md)**  


