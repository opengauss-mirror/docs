# RELEASE SAVEPOINT<a name="EN-US_TOPIC_0242370641"></a>

## Function<a name="en-us_topic_0237122177_en-us_topic_0059778044_section16730316162219"></a>

**RELEASE SAVEPOINT**  destroys a savepoint previously defined in the current transaction.

Destroying a savepoint makes it unavailable as a rollback point, but it has no other user visible behavior. It does not undo the effects of statements executed after the savepoint was established. To do that, use  **ROLLBACK TO SAVEPOINT**. Destroying a savepoint when it is no longer needed allows the system to reclaim some resources earlier than transaction end.

**RELEASE SAVEPOINT**  also destroys all savepoints that were established after the named savepoint was established.

## Precautions<a name="en-us_topic_0237122177_en-us_topic_0059778044_section3731161611223"></a>

-   Specifying a savepoint name that was not previously defined causes an error.
-   It is not possible to release a savepoint when the transaction is in an aborted state.
-   If multiple savepoints have the same name, only the one that was most recently defined is released.

## Syntax<a name="en-us_topic_0237122177_en-us_topic_0059778044_section1173201615228"></a>

```
RELEASE [ SAVEPOINT ] savepoint_name;
```

## Parameter Description<a name="en-us_topic_0237122177_en-us_topic_0059778044_section1073417167224"></a>

**savepoint\_name**

Specifies the name of the savepoint you want to destroy.

## Examples<a name="en-us_topic_0237122177_en-us_topic_0059778044_section147341160228"></a>

```
-- Create a table.
postgres=# CREATE TABLE tpcds.table1(a int);

-- Start a transaction.
postgres=# START TRANSACTION;

-- Insert data.
postgres=# INSERT INTO tpcds.table1 VALUES (3);

-- Establish a savepoint.
postgres=# SAVEPOINT my_savepoint;

-- Insert data.
postgres=# INSERT INTO tpcds.table1 VALUES (4);

-- Delete the savepoint.
postgres=# RELEASE SAVEPOINT my_savepoint;

-- Commit the transaction.
postgres=# COMMIT;

-- Query the table content, which should contain both 3 and 4.
postgres=# SELECT * FROM tpcds.table1;

-- Delete the table.
postgres=# DROP TABLE tpcds.table1;
```

## Helpful Links<a name="en-us_topic_0237122177_en-us_topic_0059778044_section1873501692219"></a>

[SAVEPOINT](savepoint.md)  and  [ROLLBACK TO SAVEPOINT](rollback-to-savepoint.md)

