# ROLLBACK TO SAVEPOINT<a name="EN-US_TOPIC_0289900687"></a>

## Function<a name="en-us_topic_0283137625_en-us_topic_0237122182_en-us_topic_0059778869_section2860121201518"></a>

**ROLLBACK TO SAVEPOINT**  rolls back to a savepoint. It implicitly destroys all savepoints that were established after the named savepoint.

Rolls back all statements that were executed after the savepoint was established. The savepoint remains valid and can be rolled back to again later, if needed.

## Precautions<a name="en-us_topic_0283137625_en-us_topic_0237122182_en-us_topic_0059778869_section586112113153"></a>

-   Specifying a savepoint name that has not been established is an error.
-   Cursors have somewhat non-transactional behavior with respect to savepoints. Any cursor that is opened inside a savepoint will be closed when the savepoint is rolled back. If a previously opened cursor is affected by a  **FETCH**  or  **MOVE**  statement inside a savepoint that is later rolled back, the cursor remains at the position that  **FETCH**  left it pointing to \(that is, the cursor motion caused by  **FETCH**  is not rolled back\). Closing a cursor is not undone by rolling back, either. A cursor whose execution causes a transaction to abort is put in a cannot-execute state, so while the transaction can be restored using  **ROLLBACK TO SAVEPOINT**, the cursor can no longer be used.
-   Use  **ROLLBACK TO SAVEPOINT**  to roll back to a savepoint. Use  **RELEASE SAVEPOINT**  to destroy a savepoint but keep the effects of the statements executed after the savepoint was established.

## Syntax<a name="en-us_topic_0283137625_en-us_topic_0237122182_en-us_topic_0059778869_section18861202111512"></a>

```
ROLLBACK [ WORK | TRANSACTION ] TO [ SAVEPOINT ] savepoint_name;
```

## Parameter Description<a name="en-us_topic_0283137625_en-us_topic_0237122182_en-us_topic_0059778869_section68626218158"></a>

savepoint\_name

Rolls back to a savepoint.

## Examples<a name="en-us_topic_0283137625_en-us_topic_0237122182_en-us_topic_0059778869_section18863621121517"></a>

```
-- Undo the effects of the statements executed after my_savepoint was established:
openGauss=# START TRANSACTION;
openGauss=# SAVEPOINT my_savepoint;
openGauss=# ROLLBACK TO SAVEPOINT my_savepoint;
-- Cursor positions are not affected by savepoint rollback.
openGauss=# DECLARE foo CURSOR FOR SELECT 1 UNION SELECT 2;
openGauss=# SAVEPOINT foo;
openGauss=# FETCH 1 FROM foo;
 ?column? 
----------
        1
openGauss=# ROLLBACK TO SAVEPOINT foo;
openGauss=# FETCH 1 FROM foo;
 ?column? 
----------
        2
openGauss=# RELEASE SAVEPOINT my_savepoint;
openGauss=# COMMIT;
```

## Helpful Links<a name="en-us_topic_0283137625_en-us_topic_0237122182_en-us_topic_0059778869_section3863621131515"></a>

[SAVEPOINT](savepoint.md)  and  [RELEASE SAVEPOINT](release-savepoint.md)

