# GET DIAGNOSTICS语句<a name="ZH-CN_TOPIC_0245374637"></a>

## **GET DIAGNOSTICS**语句<a name="zh-cn_topic_0245374637_zh-cn_topic_0245374637_zh-cn_topic_0245374637_scd87586ffb304dfca616ff3dff504b81"></a>


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

SQL 语句生成填充到诊断区域的诊断信息。GET DIAGNOSTICS 语句使应用程序能够检查此信息。（也可以使用 SHOW WARNINGS 或 SHOW ERRORS 查看条件或错误。）

执行 GET DIAGNOSTICS 不需要任何权限。

GET DIAGNOSTICS 语句通常用于存储程序中的句柄中。它是一个 MySQL 扩展，允许 GET [CURRENT] DIAGNOSTICS 在句柄上下文之外检查任何 SQL 语句的执行。

GET DIAGNOSTICS 可以获取语句或条件信息，但不能在同一语句中同时获取这两种信息：

● 要获取语句信息，请将所需的语句项检索到目标变量中。GET DIAGNOSTICS 的这个实例将可用条件的号码和受影响的行数分配给用户变量 @p1 和 @p2：

```
GET DIAGNOSTICS @p1 = NUMBER, @p2 = ROW_COUNT;
```

● 要获取条件信息，请指定条件编号并将所需的条件项检索到目标变量中。GET DIAGNOSTICS 的这个实例将 SQLSTATE 值和错误消息分配给用户变量 @p3 和 @p4：

```
GET DIAGNOSTICS CONDITION 1 @p3 = RETURNED_SQLSTATE, @p4 = MESSAGE_TEXT;
```

>![](public_sys-resources/icon-note.gif) **参数说明：**   
>
>1. 关键字 CURRENT 表示从当前诊断区域检索信息。关键字 STACKED 意味着从第二个诊断区域检索信息，该区域仅在当前上下文是条件句柄时可用。如果两个关键字都未给定，则默认为使用当前诊断区域。
>1. 用于存储项信息的有效 ***target\*** 指示符可以是存储过程或函数参数、用 DECLARE 声明的存储程序局部变量或用户定义的变量。
>1. 有效 *condition_number* 指示符可以是存储过程或函数参数、用 DECLARE 声明的存储程序局部变量、用户定义变量或字面量。如果条件编号不在从 1 到包含信息的条件区域数量的范围内，则会出现警告。在这种情况下，警告将添加到诊断区域而不清除它。

当一个条件发生时，MySQL 不会填充 GET DIAGNOSTICS 识别的所有条件项。例如：

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

示例 ：

```sql
-- 在标准SQL中使用GET DIAGNOSTICS语法
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

--在存储过程中使用GET DIAGNOSTICS语法

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
