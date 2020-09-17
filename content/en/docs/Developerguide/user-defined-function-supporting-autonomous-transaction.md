# User-defined Function Supporting Autonomous Transaction<a name="EN-US_TOPIC_0274616605"></a>

An autonomous transaction can be defined in a function. The identifier is  **PRAGMA AUTONOMOUS\_TRANSACTION**. The function block to be executed uses SQL statements that contain  **START TRANSACTION**  and  **COMMIT**/**ROLLBACK**. Other syntax is similar to that of  [CREATE FUNCTION](en-us_topic_0242370568.md). A simple example is as follows:

```
-- Create a table.
CREATE TABLE test1 (a int, b text);
-- Create a function that contains an autonomous transaction.
CREATE OR REPLACE FUNCTION autonomous_easy_2(i int) RETURNS integer
LANGUAGE plpgsql
AS $$
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
  RETURN i % 2 = 0;
END;
$$;
-- Run the following command:
select autonomous_easy_2(1);
-- Execution result:
 autonomous_easy_2
-------------------
                 0
(1 row)
-- Run the following command to query table data:
select * from test1;
-- Execution result:
 a | b
---+---
(0 rows)
-- Run the following command:
select autonomous_easy_2(2);
-- Execution result:
 autonomous_easy_2
-------------------
                 1
(1 row)
-- Run the following command to query table data:
select * from test1;
-- Execution result:
 a | b
---+---
 2 | a
(1 row)
-- Truncate table data.
truncate table test1;
-- Execute a function that contains an autonomous transaction in a transaction block that is rolled back.
begin;
insert into test1 values(1,'b');
select autonomous_easy_2(2);
rollback;
-- Check table data.
select * from test1;
-- Execution result:
 a | b
---+---
 2 | a
(1 row)
```

In the preceding example, a function containing an autonomous transaction is finally executed in a transaction block to be rolled back, which directly illustrates a characteristic of the autonomous transaction, that is, rollback of the primary transaction does not affect content that has been committed by the autonomous transaction.

