---
description: This document describes SIGNAL and RESIGNAL Statement in openGauss, covering topics such as SIGNAL Statement, RESIGNAL Statement.
keywords: [openGauss, SIGNAL and RESIGNAL Statement, SQL, SIGNAL Statement, RESIGNAL Statement]
---

# SIGNAL and RESIGNAL Statement<a name="ZH-CN_TOPIC_0245374637"></a>

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:28:06.036Z -->

Describes the SIGNAL and RESIGNAL statements for modifying and throwing errors in PL/SQL.

## SIGNAL Statement<a name="zh-cn_topic_0245374637_zh-cn_topic_0245374637_zh-cn_topic_0245374637_scd87586ffb304dfca616ff3dff504b81"></a>

The SIGNAL statement can return an error or warning condition to the caller in a stored procedure. The syntax is as follows:

```sql
SIGNAL condition_value
    [SET signal_information_item
    [, signal_information_item] ...]

condition_value: {
      SQLSTATE [VALUE] sqlstate_value
    | condition_name
}

signal_information_item:
    condition_information_item_name = simple_value_specification

condition_information_item_name: {
      CLASS_ORIGIN
    | SUBCLASS_ORIGIN
    | MESSAGE_TEXT
    | MYSQL_ERRNO
    | CONSTRAINT_CATALOG
    | CONSTRAINT_SCHEMA
    | CONSTRAINT_NAME
    | CATALOG_NAME
    | SCHEMA_NAME
    | TABLE_NAME
    | COLUMN_NAME
    | CURSOR_NAME
}
```

SIGNAL can throw an error condition with an SQLSTATE value (SQLSTATE [VALUE] sqlstate_value) or a named condition (condition_name). The SET clause can set different information items, and the information set in the SET clause can be obtained through the GET DIAGNOSTICS statement.

>[!NOTE]Note
>
>1. condition_value indicates the error value to be returned. This value can be an SQLSTATE value or a condition_name (a condition declared using the DECLARE ... CONDITION syntax; see [DECLARE Statement](error_trapping_statements.md)).
>2. The SQLSTATE value in a SIGNAL statement should not start with '00', including both SQLSTATE values directly defined and those implicitly represented by condition_name.
>3. signal_information_item: Each condition_information_item_name can be specified only once in the SET clause. Otherwise, a duplicate condition information item error occurs. Valid simple_value_specification can use parameters of stored procedures or functions, local variables declared by DECLARE, user-defined variables, system variables, or functions that can be converted to the corresponding data type.
>4. See Table 1 for the SQLSTATE error category breakdown.
>5. See Table 2 for the condition_information_item_name parameters.

**Table 1** SQLSTATE error categories

|     Type     |           |                 MESSAGE_TEXT                 | MYSQL_ERRNO |
| :----------: | :-------: | :------------------------------------------: | :---------: |
| class = '00' |  success  |                                              |             |
| class = '01' |  warning  |  'Unhandled user-defined warning condition'  |    01000    |
| class = '02' | not found | 'Unhandled user-defined not found condition' |    02000    |
| class > '02' | exception | 'Unhandled user-defined exception condition' |    03000    |

**Table 2**  condition_information_item_name parameter list

|        Name        |                             Description                              |
| :----------------: | :----------------------------------------------------------: |
|    CLASS_ORIGIN    | String containing the class of the RETURNED_SQLSTATE value. Defaults to empty.     |
|  SUBCLASS_ORIGIN   | String containing the subclass of the RETURNED_SQLSTATE value. Defaults to empty.     |
|    MESSAGE_TEXT    |                   String. Error message of the condition.                   |
|    MYSQL_ERRNO     |                String. MySQL error code of the condition.                 |
| CONSTRAINT_CATALOG |            String. Catalog of the constraint violation. Defaults to empty.             |
| CONSTRAINT_SCHEMA  |             String. Schema of the constraint violation. Defaults to empty.              |
|  CONSTRAINT_NAME   |              String. Name of the constraint violation. Defaults to empty.              |
|    CATALOG_NAME    |           String. Catalog associated with the condition. Defaults to empty.            |
|    SCHEMA_NAME     |            String. Schema associated with the condition. Defaults to empty.             |
|     TABLE_NAME     |            String. Table associated with the condition. Defaults to empty.             |
|    COLUMN_NAME     |            String. Column associated with the condition. Defaults to empty.            |
|    CURSOR_NAME     |               String. Name of the cursor. Defaults to empty.               |

## RESIGNAL Statement<a name="zh-cn_topic_0245374637_zh-cn_topic_0245374637_zh-cn_topic_0245374637_scd87586ffb304dfca616ff3dff504b82"></a>

Like the SIGNAL statement, the RESIGNAL statement can also throw an error, but RESIGNAL can change some or all of the error condition information before throwing it. The syntax is as follows:

```sql
RESIGNAL [condition_value]
    [SET signal_information_item
    [, signal_information_item] ...]

```

Although both SIGNAL and RESIGNAL can throw errors, there are still some differences between them:

- RESIGNAL must be used in an error or warning handler; otherwise, the following error message is returned: RESIGNAL when handler is not active. However, the SIGNAL statement can be used anywhere in a stored procedure.
- In the RESIGNAL syntax, all attributes of the RESIGNAL statement can be omitted, and even the SQLSTATE value can be omitted. However, the SIGNAL statement must have a SQLSTATE value.

>[!NOTE]Note
>
>1. RESIGNAL alone, that is, RESIGNAL;. This form of the RESIGNAL statement directly restores the stack of the previous diagnostics area and sets it as the current diagnostics area, which is equivalent to throwing the error directly without modifying the error information.
>2. RESIGNAL with signal_information_item, that is, RESIGNAL SET signal_information_item [, signal_information_item] ... . This is consistent with the RESIGNAL-alone scenario, but the popped error information is modified based on the signal_information_item.
>3. RESIGNAL with condition_value and signal_information_item, that is, RESIGNAL condition_value [SET signal_information_item [, signal_information_item] ...]. In this scenario, the error information is changed based on condition_value and signal_information_item, and the modified error information is added to the diagnostics area.
>[!NOTE]Note
>
>1. The SIGNAL/RESIGNAL syntax takes effect only in B compatibility mode, that is, when sql_compatibility = 'B'.
>2. RESIGNAL can only be called within a DECLARE ... HANDLER statement.
>3. In a SIGNAL/RESIGNAL statement, assigning NULL to condition_information_item_name causes an execution error.
>4. Warnings in openGauss do not trigger the DECLARE ... HANDLER exception handling mechanism, but warning alerts triggered by SIGNAL and RESIGNAL do trigger the DECLARE ... HANDLER exception handling mechanism.

Example:

```sql
-- Scenario of calling SIGNAL in a non-DECLARE ... HANDLER statement
CREATE OR REPLACE PROCEDURE p() IS
BEGIN
 SIGNAL SQLSTATE '22012' SET MESSAGE_TEXT = 'this is error';
END;
/

call p();
ERROR:  this is error
CONTEXT:  PL/pgSQL function p() line 2 at SIGNAL

show warnings;
 level | code  |    message    
-------+-------+---------------
 Error | 03000 | this is error
(1 row)


-- Scenario of calling SIGNAL in a DECLARE ... HANDLER statement
DROP TABLE IF EXISTS t1;
CREATE OR REPLACE PROCEDURE p() IS
BEGIN
 DECLARE EXIT HANDLER FOR SQLSTATE '42P01'
 BEGIN
  SIGNAL SQLSTATE '22012' SET MESSAGE_TEXT = 'this is error', MYSQL_ERRNO = 100;
 END;
 DROP TABLE t1;
END;
/

call p();
ERROR:  this is error
CONTEXT:  PL/pgSQL function p() line 4 at SIGNAL

show warnings;
 level | code |    message
-------+------+---------------
 Error |  100 | this is error
(1 row)


-- Scenario with only RESIGNAL
DROP TABLE IF EXISTS t1;
CREATE OR REPLACE PROCEDURE p() IS
BEGIN
 DECLARE EXIT HANDLER FOR SQLSTATE '42P01'
 BEGIN
  RESIGNAL;
 END;
 DROP TABLE t1;
END;
/

call p();
ERROR:  table "t1" does not exist
CONTEXT:  PL/pgSQL function p() line 4 at RESIGNAL

show warnings;
 level | code  |          message          
-------+-------+---------------------------
 Error | 42P01 | table "t1" does not exist
(1 row)


-- Scenario with RESIGNAL SET signal_information_item
DROP TABLE IF EXISTS t1;
CREATE OR REPLACE PROCEDURE p() IS
BEGIN
 DECLARE EXIT HANDLER FOR SQLSTATE '42P01'
 BEGIN
  RESIGNAL SET MESSAGE_TEXT = 'this is error', MYSQL_ERRNO = 100;
 END;
 DROP TABLE t1;
END;
/

call p();
ERROR:  this is error
CONTEXT:  PL/pgSQL function p() line 4 at RESIGNAL

show warnings;
 level | code |    message
-------+------+---------------
 Error |  100 | this is error
(1 row)


-- RESIGNAL condition_value SET signal_information_item
DROP TABLE IF EXISTS t1;
CREATE OR REPLACE PROCEDURE p() IS
BEGIN
 DECLARE EXIT HANDLER FOR SQLSTATE '42P01'
 BEGIN
  RESIGNAL SQLSTATE '22012' SET MESSAGE_TEXT = 'this is error', MYSQL_ERRNO = 100;
 END;
 DROP TABLE t1;
END;
/

call p();
ERROR:  this is error
CONTEXT:  PL/pgSQL function p() line 4 at RESIGNAL

show warnings;
 level | code  |          message          
-------+-------+---------------------------
 Error | 42P01 | table "t1" does not exist
 Error | 100   | this is error
(2 rows)
```
