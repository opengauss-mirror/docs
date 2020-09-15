# CREATE SYNONYM<a name="EN-US_TOPIC_0251556711"></a>

## Function<a name="en-us_topic_0237122116_en-us_topic_0059778169_s0867185fef0f4a228532d432b598cb26"></a>

**CREATE SYNONYM**  creates a synonym object. A synonym is an alias of a database object and is used to record the mapping between database object names. You can use synonyms to access associated database objects.

## Precautions<a name="en-us_topic_0237122116_section93413620440"></a>

-   The user of a synonym should be its owner.
-   If the schema name is specified, create a synonym in the specified schema. Otherwise create a synonym in the current schema.
-   Database objects that can be accessed using synonyms include tables, views, functions, and stored procedures.
-   To use synonyms, you must have the required permissions on associated objects.
-   The following DML statements support synonyms:  **SELECT**,  **INSERT**,  **UPDATE**,  **DELETE**,  **EXPLAIN**, and  **CALL**.

## Syntax<a name="en-us_topic_0237122116_en-us_topic_0059777835_sebcad83e099e46b0ba586829e634d144"></a>

```
CREATE [ OR REPLACE ] SYNONYM synonym_name 
    FOR object_name;
```

## Parameter Description<a name="en-us_topic_0237122116_section1549681213574"></a>

-   **synonym**

    Specifies the name of the synonym to be created, which can contain the schema name.

    Value range: a string. It must comply with the naming convention.

-   **object\_name**

    Specifies the name of an object that is associated \(optionally with schema names\).

    Value range: a string. It must comply with the naming convention.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >**object\_name**  can be the name of an object that does not exist.  


## Example<a name="en-us_topic_0237122116_section1853433744413"></a>

```
-- Create schema ot.
postgres=# CREATE SCHEMA ot;

-- Create table ot.t1 and its synonym t1.
postgres=# CREATE TABLE ot.t1(id int, name varchar2(10));
postgres=# CREATE OR REPLACE SYNONYM t1 FOR ot.t1;

-- Use synonym t1.
postgres=# SELECT * FROM t1;
postgres=# INSERT INTO t1 VALUES (1, 'ada'), (2, 'bob');
postgres=# UPDATE t1 SET t1.name = 'cici' WHERE t1.id = 2;

-- Create synonym v1 and its associated view ot.v_t1.
postgres=# CREATE SYNONYM v1 FOR ot.v_t1;
postgres=# CREATE VIEW ot.v_t1 AS SELECT * FROM ot.t1;

-- Use synonym v1.
postgres=# SELECT * FROM v1;

-- Create overloaded function ot.add and its synonym add.
postgres=# CREATE OR REPLACE FUNCTION ot.add(a integer, b integer) RETURNS integer AS
$$
SELECT $1 + $2
$$
LANGUAGE sql;

postgres=# CREATE OR REPLACE FUNCTION ot.add(a decimal(5,2), b decimal(5,2)) RETURNS decimal(5,2) AS
$$
SELECT $1 + $2
$$
LANGUAGE sql;

postgres=# CREATE OR REPLACE SYNONYM add FOR ot.add;

-- Use synonym add.
postgres=# SELECT add(1,2);
postgres=# SELECT add(1.2,2.3);

-- Create stored procedure ot.register and its synonym register.
postgres=# CREATE PROCEDURE ot.register(n_id integer, n_name varchar2(10))
SECURITY INVOKER
AS
BEGIN
    INSERT INTO ot.t1 VALUES(n_id, n_name);
END;
/

postgres=# CREATE OR REPLACE SYNONYM register FOR ot.register;

-- Use synonym register to invoke the stored procedure.
postgres=# CALL register(3,'mia');

-- Delete the synonym.
postgres=# DROP SYNONYM t1;
postgres=# DROP SYNONYM IF EXISTS v1;
postgres=# DROP SYNONYM IF EXISTS add;
postgres=# DROP SYNONYM register;
postgres=# DROP SCHEMA ot CASCADE;
```

## Helpful Links<a name="en-us_topic_0237122116_en-us_topic_0059778825_section184942174514"></a>

[ALTER SYNONYM](alter-synonym.md)  and  [DROP SYNONYM](drop-synonym.md)

