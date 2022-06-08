# Row-Level Access Control<a name="EN-US_TOPIC_0000001135403991"></a>

## Availability<a name="section17746747"></a>

This feature is available as of openGauss 1.1.0.

## Introduction<a name="section25503003"></a>

The row-level access control feature enables database access control to be accurate to each row of data tables. When different users perform the same SQL query operation, the read results may be different.

## Benefits<a name="section28200442"></a>

When different users perform the same SQL query operation, the read results may be different.

## Description<a name="section52477394"></a>

You can create a row-level access control policy for a data table. The policy defines an expression that takes effect only for specific database users and SQL operations. When a database user accesses the data table, if a SQL statement meets the specified row-level access control policy of the data table, the expressions that meet the specified condition will be combined by using  **AND**  or  **OR**  based on the attribute type \(**PERMISSIVE**  or  **RESTRICTIVE**\) and applied to the execution plan in the query optimization phase.

Row-level access control is used to control the visibility of row-level data in tables. By predefining filters for data tables, the expressions that meet the specified condition can be applied to execution plans in the query optimization phase, which will affect the final execution result. Currently, the SQL statements that can be affected include  **SELECT**,  **UPDATE**, and  **DELETE**.

## Enhancements<a name="section2534498"></a>

None

## Constraints<a name="section06531946143616"></a>

-   Row-level access control policies can be applied only to  **SELECT**,  **UPDATE**, and  **DELETE**  operations and cannot be applied to  **INSERT**  and  **MERGE**  operations.
-   Row-level access control policies can be defined for row-store tables, row-store partitioned tables, column-store tables, column-store partitioned tables, replication tables, unlogged tables, and hash tables. Row-level access control policies cannot be defined for HDFS tables, foreign tables, and temporary tables.
-   Row-level access control policies cannot be defined for views.
-   A maximum of 100 row-level access control policies can be defined for a table.
-   Initial users and system administrators are not affected by row-level access control policies.
-   If a dynamic data anonymization policy is configured for a table that has the row-level access control policies defined, grant the trigger permission of the table to other users with caution to prevent other users from using the trigger to bypass the anonymization policy.

## Dependencies<a name="section22810484"></a>

None

