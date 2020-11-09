# Transaction Management<a name="EN-US_TOPIC_0273696759"></a>

The  **COMMIT**  and  **ROLLBACK**  commands can be used to end a transaction when a stored procedure or anonymous block is called. After these commands are executed in a transaction, a new transaction is automatically started. You do not need to run the  **START TRANSACTION**  command separately. \(Note that BEGIN and END have different meanings in PL/SQL.\) In addition, stored procedures or anonymous blocks with transaction commands cannot be called in the transaction blocks that are explicitly started by users.

**Example**

```
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

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>When a new transaction starts, it has the default transaction features, such as the transaction isolation level.
>The function call does not support transaction control. If you attempt to use transaction control in the function, an error is reported. In addition, for the nested use such as proc1\(\)-\>func2\(\)-\>proc3\(\), the last stored procedure cannot be used for transaction control because functions are called during the process.

There are special considerations for cursor loops. The following is an example:

```
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

Typically, cursors are automatically closed when transactions are committed. However, a cursor that is created as part of a loop is automatically made a holdable cursor by the first COMMIT or ROLLBACK. This means that the cursor is fully computed at the first COMMIT or ROLLBACK, rather than being computed line by row. The cursor is still deleted automatically after the loop, so it is usually invisible to users.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>A cursor loop driven by non-read-only commands \(UPDATE... RETURNING\) is not allowed to have transaction commands.

Transactional operations are also supported in a block with an exception handling section, as shown in the following example:

```
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

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>After the preceding stored procedure is executed, an exception is captured, but the first insert operation is completed normally.

