# Transaction Support<a name="EN-US_CONCEPT_0252569322"></a>

Transaction support refers to the system capability to ensure the atomicity, consistency, isolation, and durability \(ACID\) features of transactions.

Transaction support and data consistency assurance are the basic functions of most databases and the prerequisites for a database to satisfy transaction-based application requirements.

-   Atomicity

    A transaction is comprised of an indivisible unit of work. Operations performed in a transaction must be all finished or have not been performed.


-   Consistency

    Transactions must be consistent within a system no matter when or how many concurrent transactions are ongoing.


-   Isolation

    Transactions are isolated for execution, as if each of them is the only operation performed during the specified period planned by the system. If there are two transactions that are executed within the same period of time and performing the same function, the transaction isolation makes each of them regard itself as the only transaction using the system.


-   Durability

    After a transaction is complete, the changes made by the transaction to the database are permanently stored in the database and will not be rolled back.


The default transaction isolation level is READ COMMITTED, ensuring no dirty data will be read.

Transactions are categorized into single-statement transactions and transaction blocks. Their basic interfaces are as follows:

-   Start transaction;
-   Commit;
-   Rollback;

Set transaction \(used for setting the isolation level, read/write mode, and delay mode\). For details about the syntax, see the  _openGauss Developer Guide_.

