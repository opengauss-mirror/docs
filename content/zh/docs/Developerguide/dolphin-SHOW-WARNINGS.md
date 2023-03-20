# SHOW WARNINGS/ERRORS

## 功能描述

显示有关存储函数的信息。

## 注意事项

N/A

## 语法格式

```sql
SHOW WARNINGS [LIMIT [offset,] row_count]
SHOW COUNT(*) WARNINGS

SHOW ERRORS [LIMIT [offset,] row_count]
SHOW COUNT(*) ERRORS
```

## 参数说明

- **row_count**

  输出上条sql，生成的warnings/errors信息的行数限制。

- **offset**

  从第几行信息开始显示。

- **添加系统参数**

  max_error_count            设置show warnings/errors最大可显示的信息数量，默认64。
  sql_note                   设置show warnings是否显示Note级别的信息开关，默认On。

## 返回结果集

| 字段名               | 类型                     | 说明                             |
| -------------------- | ----------------------- | -------------------------------- |
| Level                | 字符类型                 | 信息的级别(Note/Warning/Error)    |
| Code                 | 整数类型                 | 信息状态对应的代码号               |
| Message              | 字符类型                 | 信息内容                          |

## 实例

```sql
openGauss=# show max_error_count;
 max_error_count
-----------------
 64
(1 row)

openGauss=# show sql_note;
 sql_note
----------
 on
(1 row)

openGauss=# create table test(id int, name varchar default 11);
CREATE TABLE
openGauss=# create table test(id int, name varchar default 11);
ERROR:  relation "test" already exists in schema "public"
DETAIL:  creating new table with existing name in the same schema
openGauss=# show warnings limit 1;
 level |   code    |                      message
-------+-----------+---------------------------------------------------
 Error | 117571716 | relation "test" already exists in schema "public"
(1 row)

openGauss=# show count(*) warnings;
 count
-------
     1
(1 row)

openGauss=# CREATE OR REPLACE FUNCTION TEST_FUNC(tempdata char) RETURNS VOID AS $$
openGauss$# BEGIN
openGauss$# raise info'TEST CHAR VALUE IS %',tempdata;
openGauss$# END;
openGauss$# $$ LANGUAGE plpgsql;
CREATE FUNCTION
openGauss=# select TEST_FUNC('abc'::clob);
INFO:  TEST CHAR VALUE IS abc
CONTEXT:  referenced column: test_func
 test_func
-----------

(1 row)

openGauss=# show warnings;
 level | code |        message
-------+------+------------------------
 Note  |    0 | TEST CHAR VALUE IS abc
(1 row)

openGauss=# set sql_note=false;
SET
openGauss=# select TEST_FUNC('abc'::clob);
INFO:  TEST CHAR VALUE IS abc
CONTEXT:  referenced column: test_func
 test_func
-----------

(1 row)

openGauss=# show warnings;
 level | code | message
-------+------+---------
(0 rows)

openGauss=# SELECT pg_advisory_unlock(1), pg_advisory_unlock_shared(2), pg_advisory_unlock(1, 1), pg_advisory_unlock_shared(2, 2);
WARNING:  you don't own a lock of type ExclusiveLock
CONTEXT:  referenced column: pg_advisory_unlock
WARNING:  you don't own a lock of type ShareLock
CONTEXT:  referenced column: pg_advisory_unlock_shared
WARNING:  you don't own a lock of type ExclusiveLock
CONTEXT:  referenced column: pg_advisory_unlock
WARNING:  you don't own a lock of type ShareLock
CONTEXT:  referenced column: pg_advisory_unlock_shared
 pg_advisory_unlock | pg_advisory_unlock_shared | pg_advisory_unlock | pg_advisory_unlock_shared
--------------------+---------------------------+--------------------+---------------------------
 f                  | f                         | f                  | f
(1 row)

openGauss=# show warnings;
  level  | code |                  message
---------+------+--------------------------------------------
 Warning |   64 | you don't own a lock of type ExclusiveLock
 Warning |   64 | you don't own a lock of type ShareLock
 Warning |   64 | you don't own a lock of type ExclusiveLock
 Warning |   64 | you don't own a lock of type ShareLock
(4 rows)

openGauss=# show warnings limit 2, 4;
  level  | code |                  message
---------+------+--------------------------------------------
 Warning |   64 | you don't own a lock of type ExclusiveLock
 Warning |   64 | you don't own a lock of type ShareLock
(2 rows)

```