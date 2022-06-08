# Autonomous Transaction<a name="EN-US_TOPIC_0000001152075193"></a>

## Availability<a name="section1578164915345"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section453910524112"></a>

An autonomous transaction is a type of transaction in which the commit of a sub-transaction is not affected by the commit or rollback of the main transaction.

## Benefits<a name="section19542151111419"></a>

This feature meets diversified application scenarios.

## Description<a name="section1432812196411"></a>

In an autonomous transaction, a specified type of SQL statements are executed in an independent transaction context during the execution of the main transaction. The commit and rollback operations of an autonomous transaction are not affected by the commit and rollback operations of the main transaction.

User-defined functions and stored procedures support autonomous transactions.

A typical application scenario is as follows: A table is used to record the operation information during the main transaction execution. When the main transaction fails to be rolled back, the operation information recorded in the table cannot be rolled back.

## Enhancements<a name="section8921173620415"></a>

None.

## Constraints<a name="section879914581414"></a>

-   A trigger function does not support autonomous transactions.
-   In the autonomous transaction block of a function or stored procedure, static SQL statements do not support variable transfer.
-   Autonomous transactions do not support nesting.
-   A function containing an autonomous transaction does not support the return value of parameter transfer.
-   A stored procedure or function that contains an autonomous transaction does not support exception handling.

## Dependencies<a name="section1863816308477"></a>

None.

