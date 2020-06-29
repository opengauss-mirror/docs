# Support for Functions and Stored Procedures<a name="EN-US_CONCEPT_0252569323"></a>

Functions and stored procedures are important database objects. They encapsulate SQL statement sets used for certain functions so that the statements can be easily invoked.

A stored procedure is a combination of SQL and PL/SQL. Stored procedures can move the code that executes business rules from the application to the database. Therefore, the code storage can be used by multiple programs at a time.

1.  Allowing customers to modularize program design and encapsulate SQL statement sets, easy to invoke.
2.  Caching the compilation results of stored procedures to accelerate SQL statement set execution.
3.  Allowing system administrators to restrict the permission for executing a specific stored procedure and control access to the corresponding type of data. This prevents access from unauthorized users and ensures data security.
4.  To process SQL statements, the stored procedure process assigns a memory segment to store context association. Cursors are handles or pointers pointing to context regions. With cursors, stored procedures can control alterations in context regions.
5.  Six levels of exception information are supported to facilitate the debugging of stored procedures.

openGauss supports functions and stored procedures in the SQL standard, improving the usability of stored procedures.

For details about how to use the stored procedure, see the  _openGauss Developer Guide_.

