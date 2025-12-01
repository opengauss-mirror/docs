# SHOW TRIGGERS

## Function

Displays information about storage functions.

## Precautions

N/A

## Syntax

```
SHOW TRIIGERS {FROM | IN} db_name [LIKE 'pattern' | WHERE expr]
```

## Parameter Description

- **db_name**

  Database name (or schema).

- **WHERE expr**

  Filters expressions.

- **LIKE 'pattern'**

  The pattern regular expression matches the trigger name.

## Return Result Set

| Column              | Type                                | Description                     |
| -------------------- | ------------------------------------ | ------------------------- |
| Trigger              | Trigger name.                          |                           |
| Event                | Trigger events (Insert, delete, update, and truncate).|                           |
| Table                | Trigger definition table.                      |                           |
| Statement            | Trigger content.                          |                           |
| Timing               | Trigger timing (before or after the trigger).      |                           |
| Created              | Time when the trigger was created.                      | This parameter is left blank.|
| sql_mode             | SQL mode when a trigger is created.              | This parameter is left blank.|
| Definer              | Definer.                              |                           |
| character_set_client | Character set of the client during creation.                | This parameter is left blank.|
| collation_connection | Sorting rule of the client during creation.              | This parameter is left blank.|
| Database Collation   | Database collocation.                      |                           |

## Instance.

```sql
opengauss=# --Create a trigger table and trigger function.
opengauss=# CREATE TABLE test_trigger_src_tbl(id1 INT, id2 INT, id3 INT);
CREATE OR REPLACE FUNCTION tri_insert_func() RETURNS TRIGGER AS $$ DECLARE BEGIN INSERT INTO test_trigger_des_tbl VALUES(NEW.id1, NEW.id2, NEW.id3); RETURN NEW; END $$ LANGUAGE PLPGSQL;
-- Create a trigger.
CREATE TRIGGER insert_trigger BEFORE INSERT ON test_trigger_src_tbl FOR EACH ROW EXECUTE PROCEDURE tri_insert_func();
-- View information.
show triggers;
CREATE TABLE
opengauss=# CREATE TABLE test_trigger_des_tbl(id1 INT, id2 INT, id3 INT);
CREATE TABLE
opengauss=# CREATE OR REPLACE FUNCTION tri_insert_func() RETURNS TRIGGER AS $$ DECLARE BEGIN INSERT INTO test_trigger_des_tbl VALUES(NEW.id1, NEW.id2, NEW.id3); RETURN NEW; END $$ LANGUAGE PLPGSQL;
CREATE FUNCTION
opengauss=# --Create a trigger.
opengauss=# CREATE TRIGGER insert_trigger BEFORE INSERT ON test_trigger_src_tbl FOR EACH ROW EXECUTE PROCEDURE tri_insert_func();
CREATE TRIGGER
opengauss=# --View information.
opengauss=# show triggers;
    Trigger     | Event  |        Table         |              Statement              | Timing | Created | sql_mode | Definer | character_set_client | collation_connection | Database Collation
----------------+--------+----------------------+-------------------------------------+--------+---------+----------+---------+----------------------+----------------------+--------------------
 insert_trigger | INSERT | test_trigger_src_tbl | EXECUTE PROCEDURE tri_insert_func() | BEFORE |         |          | wyc     |                      |                      | en_US.UTF-8
(1 row)
```
