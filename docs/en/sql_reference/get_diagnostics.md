---
description: This document describes GET DIAGNOSTICS Statement in openGauss, covering topics such as GET DIAGNOSTICS Statement.
keywords: [openGauss, GET DIAGNOSTICS Statement, SQL]
---

# GET DIAGNOSTICS Statement<a name="ZH-CN_TOPIC_0245374637"></a>

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:21:47.271Z -->

## GET DIAGNOSTICS Statement<a name="zh-cn_topic_0245374637_zh-cn_topic_0245374637_zh-cn_topic_0245374637_scd87586ffb304dfca616ff3dff504b81"></a>

```sql
GET [CURRENT | STACKED] DIAGNOSTICS {
    statement_information_item
    [, statement_information_item] ...
  | CONDITION condition_number
    condition_information_item
    [, condition_information_item] ...
}

statement_information_item:
    target = statement_information_item_name

condition_information_item:
    target = condition_information_item_name

statement_information_item_name: {
    NUMBER
  | ROW_COUNT
}

condition_information_item_name: {
    CLASS_ORIGIN
  | SUBCLASS_ORIGIN
  | RETURNED_SQLSTATE
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

condition_number, target:
    (see following discussion)

```

SQL statements generate diagnostic information that populates the diagnostics area. The GET DIAGNOSTICS statement enables an app to inspect this information. (You can also use SHOW WARNINGS or SHOW ERRORS to view conditions or errors.)

No privilege is required to execute GET DIAGNOSTICS.

The GET DIAGNOSTICS statement is typically used in handlers within stored programs. It is a MySQL extension that allows GET [CURRENT] DIAGNOSTICS to inspect the execution of any SQL statement outside the handler context.

GET DIAGNOSTICS can obtain either statement information or condition information, but not both in the same statement:

● To obtain statement information, retrieve the desired statement items into target variables. This instance of GET DIAGNOSTICS assigns the number of available conditions and the number of affected rows to the user variables @p1 and @p2:

```
GET DIAGNOSTICS @p1 = NUMBER, @p2 = ROW_COUNT;
```

● To obtain condition information, specify the condition number and retrieve the desired condition items into target variables. This instance of GET DIAGNOSTICS assigns the SQLSTATE value and the error message to the user variables @p3 and @p4:

```
GET DIAGNOSTICS CONDITION 1 @p3 = RETURNED_SQLSTATE, @p4 = MESSAGE_TEXT;
```

>[!NOTE]Note
>
>1. The keyword CURRENT indicates retrieving information from the current diagnostics area. The keyword STACKED indicates retrieving information from the second diagnostics area, which is available only when the current context is a condition handler. If neither keyword is given, the current diagnostics area is used by default.
>2. A valid ***target*** indicator for storing item information can be a stored procedure or function parameter, a stored program local variable declared with DECLARE, or a user-defined variable.
>3. A valid *condition_number* indicator can be a stored procedure or function parameter, a stored program local variable declared with DECLARE, a user-defined variable, or a literal. If the condition number is not within the range from 1 to the number of condition areas that contain information, a warning occurs. In this case, the warning is added to the diagnostics area without clearing it.

When a condition occurs, MySQL does not populate all condition items recognized by GET DIAGNOSTICS. For example:

```
GET DIAGNOSTICS CONDITION 1
         @p5 = SCHEMA_NAME, @p6 = TABLE_NAME;
SELECT @p5, @p6;
+------+------+
| @p5  | @p6  |
+------+------+
|      |      |
+------+------+
```

Example:

```sql
-- Use GET DIAGNOSTICS syntax in standard SQL.
set enable_set_variable_b_format = on;
set b_format_behavior_compat_options = 'diagnostics';
set @class_origin='',@subclass_origin='',@returned_sqlstate='',@message_text= '',@mysql_errno='',@constraint_catalog='',@constraint_schema='',@constraint_name='',@catalog_name='',@schema_name='',@table_name='',@column_name='',@cursor_name='';
drop table xx;
ERROR:  table "xx" does not exist
GET diagnostics @num = NUMBER, @row = ROW_COUNT;
GET diagnostics condition @num @class_origin=CLASS_ORIGIN,@subclass_origin=SUBCLASS_ORIGIN,@returned_sqlstate=RETURNED_SQLSTATE,@message_text= MESSAGE_TEXT,@mysql_errno=MYSQL_ERRNO,@constraint_catalog=CONSTRAINT_CATALOG,@constraint_schema=CONSTRAINT_SCHEMA,@constraint_name=CONSTRAINT_NAME,@catalog_name=CATALOG_NAME,@schema_name=SCHEMA_NAME,@table_name=TABLE_NAME,@column_name=COLUMN_NAME,@cursor_name=CURSOR_NAME;
GET diagnostics condition 2 @class_origin=CLASS_ORIGIN;
show errors;
 level | code  |          message          
-------+-------+---------------------------
 Error | 42P01 | table "xx" does not exist
 Error | 35000 | Invalid condition number
(2 rows)

select @num, @row;
 @num | @row 
------+------
    1 |   -1
(1 row)

select @class_origin,@subclass_origin,@returned_sqlstate,@message_text,@mysql_errno,@constraint_catalog,@constraint_schema,@constraint_name,@catalog_name,@schema_name,@table_name,@column_name,@cursor_name;
 @class_origin | @subclass_origin | @returned_sqlstate |       @message_text       | @mysql_errno | @constraint_catalog | @constraint_schema | @constraint_name | @catalog_name | @schema_name | @table_name | @column_name | @cursor_name 
---------------+------------------+--------------------+---------------------------+--------------+---------------------+--------------------+------------------+---------------+--------------+-------------+--------------+--------------
 ISO 9075      | ISO 9075         | 42P01              | table "xx" does not exist | 42P01        | (null)              | (null)             | (null)           | (null)        | (null)       | (null)      | (null)       | (null)
(1 row)

GET stacked diagnostics @num = NUMBER, @row = ROW_COUNT;
ERROR:  GET STACKED DIAGNOSTICS when handler not active.

--Use GET DIAGNOSTICS syntax in a stored procedure.

DROP TABLE IF EXISTS t1 ; 
NOTICE:  table "t1" does not exist, skipping
CREATE TABLE t1(c1 TEXT NOT NULL); 
CREATE OR REPLACE PROCEDURE prc() 
AS
DECLARE num INT;  
DECLARE errcount INT; 
DECLARE errno INT; 
DECLARE msg TEXT; 
BEGIN 
    DECLARE CONTINUE HANDLER FOR 23502
    BEGIN 
        -- Here the current DA is nonempty because no prior statements 
        -- executing within the handler have cleared it 
        GET CURRENT DIAGNOSTICS CONDITION 1 errno = MYSQL_ERRNO, msg = MESSAGE_TEXT; 
        RAISE NOTICE 'current DA before mapped insert , error = % , msg = %', errno, msg; 
        GET STACKED DIAGNOSTICS CONDITION 1 errno = MYSQL_ERRNO, msg = MESSAGE_TEXT; 
        RAISE NOTICE 'stacked DA before mapped insert , error = % , msg = %', errno, msg; 

        INSERT INTO t1 (c1) VALUES(0),(1),(2);

        GET CURRENT DIAGNOSTICS num=NUMBER,errcount = ROW_COUNT;
        RAISE NOTICE 'current DA before mapped insert , num = % , errcount  = %', num, errcount ;
        GET STACKED DIAGNOSTICS CONDITION 1 errno = MYSQL_ERRNO, msg = MESSAGE_TEXT;
        RAISE NOTICE 'stacked DA before mapped insert , error = % , msg = %', errno, msg;
    END;
  
    GET CURRENT DIAGNOSTICS num=NUMBER,errcount = ROW_COUNT;
    RAISE NOTICE 'current DA before mapped insert , num = % , errcount  = %', num, errcount ;

    INSERT INTO t1 (c1) VALUES(NULL);

    GET CURRENT DIAGNOSTICS num=NUMBER,errcount = ROW_COUNT;
    RAISE NOTICE 'current DA before mapped insert , num = % , errcount  = %', num, errcount ;
    GET STACKED DIAGNOSTICS num=NUMBER,errcount = ROW_COUNT;

END; 
/ 
call prc();
NOTICE:  current DA before mapped insert , num = 0 , errcount  = -1
NOTICE:  current DA before mapped insert , error = 23502 , msg = null value in column "c1" violates not-null constraint
NOTICE:  stacked DA before mapped insert , error = 23502 , msg = null value in column "c1" violates not-null constraint
NOTICE:  current DA before mapped insert , num = 0 , errcount  = 3
NOTICE:  stacked DA before mapped insert , error = 23502 , msg = null value in column "c1" violates not-null constraint
NOTICE:  current DA before mapped insert , num = 2 , errcount  = 3
ERROR:  GET STACKED DIAGNOSTICS cannot be used outside an exception handler
CONTEXT:  PL/pgSQL function prc() line 30 at GET DIAGNOSTICS
show errors;
 level | code | message 
-------+------+---------
(0 rows)
-- condition number
set @retSqlstate = '', @msg = '';
drop table xx;
ERROR:  table "xx" does not exist
GET diagnostics condition 1.1 @retSqlstate = RETURNED_SQLSTATE, @msg = MESSAGE_TEXT;
select @retSqlstate, @msg;
 @retsqlstate |           @msg            
--------------+---------------------------
 42P01        | table "xx" does not exist
(1 row)

set @retSqlstate = '', @msg = '';
drop table xx;
ERROR:  table "xx" does not exist
GET diagnostics condition 2 @retSqlstate = RETURNED_SQLSTATE, @msg = MESSAGE_TEXT;
show errors;
 level | code  |          message          
-------+-------+---------------------------
 Error | 42P01 | table "xx" does not exist
 Error | 35000 | Invalid condition number
(2 rows)

select @retSqlstate, @msg;
 @retsqlstate | @msg 
--------------+------
              | 
(1 row)

set @retSqlstate = '', @msg = '';
drop table xx;
ERROR:  table "xx" does not exist
GET diagnostics condition 1.8 @retSqlstate = RETURNED_SQLSTATE, @msg = MESSAGE_TEXT;
show errors;
 level | code  |          message          
-------+-------+---------------------------
 Error | 42P01 | table "xx" does not exist
 Error | 35000 | Invalid condition number
(2 rows)

select @retSqlstate, @msg;
 @retsqlstate | @msg 
--------------+------
              | 
(1 row)

set @retSqlstate = '', @msg = '';
drop table xx;
ERROR:  table "xx" does not exist
GET diagnostics condition '1' @retSqlstate = RETURNED_SQLSTATE, @msg = MESSAGE_TEXT;
select @retSqlstate, @msg;
 @retsqlstate |           @msg            
--------------+---------------------------
 42P01        | table "xx" does not exist
(1 row)

set @retSqlstate = '', @msg = '';
drop table xx;
ERROR:  table "xx" does not exist
GET diagnostics condition "1" @retSqlstate = RETURNED_SQLSTATE, @msg = MESSAGE_TEXT;
select @retSqlstate, @msg;
 @retsqlstate |           @msg            
--------------+---------------------------
 42P01        | table "xx" does not exist
(1 row)

set @retSqlstate = '', @msg = '';
drop table xx;
ERROR:  table "xx" does not exist
GET diagnostics condition B'1' @retSqlstate = RETURNED_SQLSTATE, @msg = MESSAGE_TEXT;
select @retSqlstate, @msg;
 @retsqlstate |           @msg            
--------------+---------------------------
 42P01        | table "xx" does not exist
(1 row)

set @retSqlstate = '', @msg = '';
drop table xx;
ERROR:  table "xx" does not exist
GET diagnostics condition B'10' @retSqlstate = RETURNED_SQLSTATE, @msg = MESSAGE_TEXT;
show warnings;
 level | code  |          message          
-------+-------+---------------------------
 Error | 42P01 | table "xx" does not exist
 Error | 35000 | Invalid condition number
(2 rows)

select @retSqlstate, @msg;
 @retsqlstate | @msg 
--------------+------
              | 
(1 row)

set @retSqlstate = '', @msg = '';
set @con=1;
drop table xx;
ERROR:  table "xx" does not exist
GET diagnostics condition @con @retSqlstate = RETURNED_SQLSTATE, @msg = MESSAGE_TEXT;
select @retSqlstate, @msg;
 @retsqlstate |           @msg            
--------------+---------------------------
 42P01        | table "xx" does not exist
(1 row)

set @retSqlstate = '', @msg = '';
set @con=1.1;
drop table xx;
ERROR:  table "xx" does not exist
GET diagnostics condition @con @retSqlstate = RETURNED_SQLSTATE, @msg = MESSAGE_TEXT;
select @retSqlstate, @msg;
 @retsqlstate |           @msg            
--------------+---------------------------
 42P01        | table "xx" does not exist
(1 row)

set @retSqlstate = '', @msg = '';
set @con='1';
drop table xx;
ERROR:  table "xx" does not exist
GET diagnostics condition @con @retSqlstate = RETURNED_SQLSTATE, @msg = MESSAGE_TEXT;
select @retSqlstate, @msg;
 @retsqlstate |           @msg            
--------------+---------------------------
 42P01        | table "xx" does not exist
(1 row)

```
