# Event Trigger<a name="EN-US_TOPIC_0000001562654497"></a>

## Availability<a name="section15414320604715"></a>

This feature is available since openGauss 5.0.0.


## Introduction<a name="section740615433477"></a>

An event trigger is used to capture and process DDL operations.

## Benefits<a name="section1067215172372"></a>

A typical application scenario is as follows: An event trigger is used to capture DDL operations and target objects to implement data synchronization.

## Description<a name="section1017916314374"></a>

The event trigger can capture DDL operations in the current database and target objects of DDL operations. It cannot capture operations on shared objects, such as databases, roles, and tablespaces.
The event trigger can capture four types of events: ddl\_command\_start, ddl\_command\_end, sql\_drop, and table\_rewrite.
1. The ddl\_command\_start event occurs before the CREATE, ALTER, DROP, SECURITY LABEL, COMMENT, GRANT, or REVOKE statement is executed. The existence of the affected object is not checked before the event trigger is used.
2. The ddl\_command\_end event captures DDL operations and occurs after DDL execution.
3. The sql\_drop event captures any operation of deleting database objects and is executed before ddl\_command\_end.
4. The table\_rewrite event occurs only before the table is overwritten by some actions of the ALTER TABLE and ALTER TYPE statements.
   

## Constraints<a name="section1694165712371"></a>

- This feature is available only in PG-compatible mode.
- Only the system administrator can add, delete, and modify the event trigger.
- Built-in functions related to the event trigger can be used only for event trigger functions (the return type is event\_trigger).

## Dependencies

None.
