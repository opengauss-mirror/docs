# Autonomous Transaction<a name="EN-US_TOPIC_0289900677"></a>

An autonomous transaction is an independent transaction that is started during the execution of a primary transaction. Committing and rolling back an autonomous transaction does not affect the data that has been committed by the primary transaction. In addition, an autonomous transaction is not affected by the primary transaction.

Autonomous transactions are defined in stored procedures, functions, and anonymous blocks, and are declared using the  **PRAGMA AUTONOMOUS\_TRANSACTION**  keyword.

-   **[Stored Procedure Supporting Autonomous Transaction](stored-procedure-supporting-autonomous-transaction.md)**  

-   **[Anonymous Block Supporting Autonomous Transaction](anonymous-block-supporting-autonomous-transaction.md)**  

-   **[Function Supporting Autonomous Transaction](function-supporting-autonomous-transaction.md)**  

-   **[Restrictions](restrictions.md)**  


