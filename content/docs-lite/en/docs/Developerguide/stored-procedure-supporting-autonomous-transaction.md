# Stored Procedure Supporting Autonomous Transaction<a name="EN-US_TOPIC_0289899889"></a>

An autonomous transaction can be defined in a stored procedure. The identifier of an autonomous transaction is  **PRAGMA AUTONOMOUS\_TRANSACTION**. The syntax of an autonomous transaction is the same as that of creating a stored procedure. The following is an example.

```
-- Create a table.
create table t2(a int, b int);
insert into t2 values(1,2);
select * from t2;

-- Create a stored procedure that contains an autonomous transaction.
CREATE OR REPLACE PROCEDURE autonomous_4(a int, b int)  AS 
DECLARE 
	num3 int := a;
	num4 int := b;
	PRAGMA AUTONOMOUS_TRANSACTION;
BEGIN
	insert into t2 values(num3, num4); 
END;
/
-- Create a common stored procedure that invokes an autonomous transaction stored procedure.
CREATE OR REPLACE PROCEDURE autonomous_5(a int, b int)  AS 
DECLARE 
BEGIN
	insert into t2 values(666, 666);
	autonomous_4(a,b);
	rollback;
END;
/
-- Invoke a common stored procedure.
select autonomous_5(11,22);
-- View the table result.
select * from t2 order by a;
```

In the preceding example, a stored procedure containing an autonomous transaction is finally executed in a transaction block to be rolled back, which directly illustrates a characteristic of the autonomous transaction, that is, rollback of the primary transaction does not affect content that has been committed by the autonomous transaction.

