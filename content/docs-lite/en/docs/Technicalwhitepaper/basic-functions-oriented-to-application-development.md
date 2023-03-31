# Basic Functions Oriented to Application Development<a name="EN-US_CONCEPT_0289895597"></a>

-   Standard SQL

    openGauss supports standard SQL statements. The SQL standard is an international standard and is updated periodically. SQL standards are classified into core features and optional features. Most databases do not fully support SQL standards. SQL features are built by database vendors to maintain customers and push up application migration costs. New SQL features are increasingly different among vendors. Currently, there is no authoritative SQL standard test.

    openGauss supports most of the SQL:2011 core features and some optional features. For details about the feature list, see [SQL Syntax](../SQLReference/sql-syntax.md).

    The introduction of standard SQL provides a unified SQL interface for all database vendors, reducing the learning costs of users and openGauss application migration costs.

-   Standard Development API

    Standard JDBC API is provided to ensure quick migration of user services to openGauss.

    Currently, the standard JDBC 4.0 API is supported. The JDBC API supports all platforms.

-   Multiple Storage Engines

    openGauss is based on the unified transaction mechanism, log system, concurrency control system, metadata information, and cache management, provides Table Access Method API, and supports different storage engines. Currently, the Astore and Ustore storage engines are supported.

-   Transaction Support

    Transaction support refers to the system capability to ensure the atomicity, consistency, isolation, and durability \(ACID\) features of global transactions.

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

    Set transaction \(used for setting the isolation level, read/write mode, and delay mode\). For details about the syntax, see the  _Developer Guide_.

-   Support for Functions and Stored Procedures

    Functions are important database objects. They encapsulate SQL statement sets used for certain functions so that the statements can be easily invoked.

    A stored procedure is a combination of SQL and PL/SQL. Stored procedures can move the code that executes business rules from the application to the database. Therefore, the code storage can be used by multiple programs at a time.

    1.  Allows customers to modularize program design and encapsulate SQL statement sets, easy to invoke.
    2.  Caches the compilation results of stored procedures to accelerate SQL statement set execution.
    3.  Allows system administrators to restrict the permission for executing a specific stored procedure and controls access to the corresponding type of data. This prevents access from unauthorized users and ensures data security.
    4.  To process SQL statements, the stored procedure process assigns a memory fragment to store context association. Cursors are handles or pointers to context areas. With cursors, stored procedures can control alterations in context areas.
    5.  Six levels of exception information are supported to facilitate the debugging of stored procedures. Stored procedure debugging is a debugging method. During the development of a stored procedure, you can trace the process executed by the stored procedure step by step and find the error cause or program bug based on the variable value to improve the fault locating efficiency. You can set breakpoints and perform independent debugging.

    openGauss supports functions and stored procedures in the SQL standard, which enhances the usability of stored procedures. For details about how to use the stored procedures, see the  _Developer Guide_.

-   PG Interface Compatibility

    Compatible with PostgreSQL clients and interfaces.

-   SQL Hints

    SQL hints are supported, which can override any execution plan and thus improve SQL query performance.

    In plan hints, you can specify a join order; join, stream, and scan operations; and the number of rows in a result to tune an execution plan, improving query performance.

-   Copy Interface for Error Tolerance

    openGauss provides the encapsulated copy error tables for creating functions and allows users to specify error tolerance options when using the  **Copy From**  statement. In this way, errors related to parsing, data format, and character set during the execution of the  **Copy From**  statement are recorded in the error table instead of being reported and interrupted. Even if a small amount of data in the target file of  **Copy From**  is incorrect, the data can be imported to the database. You can locate and rectify the fault in the error table later.


