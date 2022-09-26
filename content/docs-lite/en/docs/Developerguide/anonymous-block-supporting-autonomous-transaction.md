# Anonymous Block Supporting Autonomous Transaction<a name="EN-US_TOPIC_0289900151"></a>

An autonomous transaction can be defined in an anonymous block. The identifier of an autonomous transaction is  **PRAGMA AUTONOMOUS\_TRANSACTION**. The syntax of an autonomous transaction is the same as that of creating an anonymous block. The following is an example.

```
create table t1(a int ,b text);

START TRANSACTION;
DECLARE 
	PRAGMA AUTONOMOUS_TRANSACTION;
BEGIN
	insert into t1 values(1,'you are so cute,will commit!');
END;
/
insert into t1 values(1,'you will rollback!');
rollback;

select * from t1;
```

In the preceding example, an anonymous block containing an autonomous transaction is finally executed before a transaction block to be rolled back, which directly illustrates a characteristic of the autonomous transaction, that is, rollback of the primary transaction does not affect content that has been committed by the autonomous transaction.

