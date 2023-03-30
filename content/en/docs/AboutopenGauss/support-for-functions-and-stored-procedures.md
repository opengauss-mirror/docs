# Support for Functions and Stored Procedures<a name="EN-US_TOPIC_0000001135665705"></a>

## Availability<a name="section56086982"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section35020791"></a>

Functions and stored procedures are important database objects. They encapsulate SQL statement sets used for certain functions so that the statements can be easily invoked.

## Benefits<a name="section46751668"></a>

1.  Allows customers to modularize program design and encapsulate SQL statement sets, easy to invoke.
2.  Caches the compilation results of stored procedures to accelerate SQL statement set execution.
3.  Allows system administrators to restrict the permission for executing a specific stored procedure and controls access to the corresponding type of data. This prevents access from unauthorized users and ensures data security.

## Description<a name="section18111828"></a>

openGauss  supports functions and stored procedures compliant with the SQL standard. The stored procedures are compatible with certain mainstream stored procedure syntax, improving their usability.

## Enhancements<a name="section28788730"></a>

None

## Constraints<a name="section06531946143616"></a>

None

## Dependencies<a name="section57771982"></a>

None

