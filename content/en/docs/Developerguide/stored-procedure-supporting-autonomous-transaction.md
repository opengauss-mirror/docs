# Stored Procedure Supporting Autonomous Transaction<a name="EN-US_TOPIC_0274616606"></a>

The stored procedure supports an autonomous transaction. The identifier is  **PRAGMA AUTONOMOUS\_TRANSACTION**. The function block to be executed uses SQL statements that contain  **START TRANSACTION**  and  **COMMIT**/**ROLLBACK**. Other syntax is similar to that of  [CREATE PROCEDURE](create-procedure.md). A simple example is as follows:

```
-- Create a table.
CREATE TABLE test1 (a int, b text);
-- Create a stored procedure that contains an autonomous transaction.
CREATE OR REPLACE PROCEDURE autonomous_easy_1(i int)
AS
DECLARE
    PRAGMA AUTONOMOUS_TRANSACTION;
BEGIN
    START TRANSACTION;
    INSERT INTO test1 VALUES (2, 'a');
    IF i % 2 = 0 THEN
        COMMIT;
    ELSE
        ROLLBACK;
    END IF;
END;
/
-- Run a stored procedure.
select autonomous_easy_1(1);
-- View table data.
select * from test1;
-- Execution result:
 a | b
---+---
(0 rows)

-- Run a stored procedure.
select autonomous_easy_1(2);
-- View table data.
select * from test1;
-- Execution result:
 a | b
---+---
 2 | a
(1 row)

-- Truncate table data.
truncate table test1;
-- Execute a stored procedure that contains an autonomous transaction in a transaction block that is rolled back.
begin;
insert into test1 values(1,'b');
select autonomous_easy_2(2);
rollback;

-- View table data.
select * from test1;
-- Execution result:
 a | b
---+---
 2 | a
(1 row)
```

In the preceding example, a stored procedure containing an autonomous transaction is finally executed in a transaction block to be rolled back, which directly illustrates a characteristic of the autonomous transaction, that is, rollback of the primary transaction does not affect content that has been committed by the autonomous transaction.

