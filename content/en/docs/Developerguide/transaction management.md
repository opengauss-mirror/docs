# Transaction Management<a name="EN-US_TOPIC_0242370592"></a>

In procedures as well as in anonymous code blocks, it is possible to end transactions using the commands COMMIT and ROLLBACK. A new transaction is started automatically after a transaction is ended using these commands, so there is no separated START TRANACTION command(Note that BEGIN and END have different meanings in PL/SQL). What’s more, we don’t support COMMIT and ROLLBACK command within procedures or anonymous code blocks in an transaction block through an START TRANACTION or BEGIN command.

Here is a simple example:

```sql
CREATE TABLE test1 (a int);
CREATE PROCEDURE transaction_test1()
AS
BEGIN
    FOR i IN 0..9 LOOP
        INSERT INTO test1 (a) VALUES (i);
        IF i % 2 = 0 THEN
            COMMIT;
        ELSE
            ROLLBACK;
        END IF;
    END LOOP;
END;
/

CALL transaction_test1();
```

A new transaction starts out with default transaction characteristics such as isolation level.

Within function, it’s not support transaction control.  If you do it, the function will return an error immediately. Also, if the call stack is proc1()->proc2()->proc3(), then the last procedure cannot do transaction control, because of the function in between.

Special considerations apply to cursor loops. Consider this example:

```sql
CREATE PROCEDURE transaction_test2()
AS
DECLARE
    r RECORD;
BEGIN
    FOR r IN SELECT * FROM test2 ORDER BY x LOOP
        INSERT INTO test1 (a) VALUES (r.x);
        COMMIT;
    END LOOP;
END;
/

CALL transaction_test2();
```

Normally, cursors are automatically closed at transaction commit. However, a cursor created as part of a loop like this is automatically converted to a holdable cursor by the first COMMIT or ROLLBACK. That means that the cursor is fully evaluated at the first COMMIT or ROLLBACK rather than row by row. The cursor is still removed automatically after the loop, so this is mostly invisible to the user.

Transaction commands are not allowed in cursor loops driven by commands that are not read-only(for example UPDATE … RETURNING).

A transaction also can be ended inside a block with exception handlers. For example,

```sql
CREATE PROCEDURE transaction_test3()
AS
BEGIN
	INSERT INTO test1 (a) VALUES (1);
    COMMIT;
    INSERT INTO test1 (a) VALUES (1/0);
    COMMIT;
EXCEPTION
    WHEN division_by_zero THEN
    	RAISE NOTICE 'caught division_by_zero';
END;
/

CALL transaction_test3();
```

After executing the transaction procedure, we will get the exception, but the first insert SQL in the procedure will execute successfully.