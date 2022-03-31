# Triggers<a name="EN-US_TOPIC_0000001209981916"></a>

A trigger automatically executes functions when an event occurs in a specified database.

## Syntax<a name="en-us_topic_0283136646_en-us_topic_0237122110_en-us_topic_0059778640_sbee45c05d759429e9b8cb27ddd67bd30"></a>

-   Create a trigger.

    ```
    CREATE TRIGGER trigger_name { BEFORE | AFTER | INSTEAD OF } { event [ OR ... ] }
        ON table_name
        [ FOR [ EACH ] { ROW | STATEMENT } ]
        [ WHEN ( condition ) ]
        EXECUTE PROCEDURE function_name ( arguments );
    ```


-   Modify a trigger.

    ```
    ALTER TRIGGER trigger_name ON table_name RENAME TO new_trigger_name;
    ```


-   Delete a trigger.

    ```
    DROP TRIGGER trigger_name ON table_name [ CASCADE | RESTRICT ];
    ```


## Parameter Description<a name="en-us_topic_0283137165_en-us_topic_0237122123_en-us_topic_0059778166_s65dbaae3763942599852d585997c77dd"></a>

-   **trigger\_name**

    Specifies the trigger name.

-   **BEFORE**

    Specifies that a trigger function is executed before the trigger event.

-   **AFTER**

    Specifies that a trigger function is executed after the trigger event.

-   **INSTEAD OF**

    Specifies that a trigger function directly replaces the trigger event.

-   **event**

    Specifies the event that will fire the trigger. Values are  **INSERT**,  **UPDATE**,  **DELETE**, and  **TRUNCATE**. Multiple events can be specified using  **OR**.

-   **table\_name**

    Specifies the name of the table corresponding to the trigger.

-   **FOR EACH ROW | FOR EACH STATEMENT**

    Specifies the frequency of firing the trigger.

    -   **FOR EACH ROW**  indicates that the trigger should be fired once for every row affected by the trigger event.
    -   **FOR EACH STATEMENT**  indicates that the trigger should be fired just once per SQL statement.

    If neither is specified, the default value is  **FOR EACH STATEMENT**. Constraint triggers can only be marked as  **FOR EACH ROW**.

-   **function\_name**

    Specifies a user-defined function, which must be declared as taking no parameters and returning data of trigger type. This function is executed when a trigger fires.

-   **arguments**

    Specifies an optional comma-separated list of parameters to be provided for the function when the trigger is executed.

-   **new\_trigger\_name**

    Specifies the new trigger name.


## Examples<a name="en-us_topic_0283137165_en-us_topic_0237122123_en-us_topic_0059778166_sfbca773f5bcd4799b3ea668b3eb074fa"></a>

```
-- Create a source table and a target table.
openGauss=# CREATE TABLE test_trigger_src_tbl(id1 INT, id2 INT, id3 INT);
openGauss=# CREATE TABLE test_trigger_des_tbl(id1 INT, id2 INT, id3 INT);

-- Create a trigger function.
openGauss=# CREATE OR REPLACE FUNCTION tri_insert_func() RETURNS TRIGGER AS
           $$
           DECLARE
           BEGIN
                   INSERT INTO test_trigger_des_tbl VALUES(NEW.id1, NEW.id2, NEW.id3);
                   RETURN NEW;
           END
           $$ LANGUAGE PLPGSQL;

openGauss=# CREATE OR REPLACE FUNCTION tri_update_func() RETURNS TRIGGER AS
           $$
           DECLARE
           BEGIN
                   UPDATE test_trigger_des_tbl SET id3 = NEW.id3 WHERE id1=OLD.id1;
                   RETURN OLD;
           END
           $$ LANGUAGE PLPGSQL;

openGauss=# CREATE OR REPLACE FUNCTION TRI_DELETE_FUNC() RETURNS TRIGGER AS
           $$
           DECLARE
           BEGIN
                   DELETE FROM test_trigger_des_tbl WHERE id1=OLD.id1;
                   RETURN OLD;
           END
           $$ LANGUAGE PLPGSQL;

-- Create an INSERT trigger.
openGauss=# CREATE TRIGGER insert_trigger
           BEFORE INSERT ON test_trigger_src_tbl
           FOR EACH ROW
           EXECUTE PROCEDURE tri_insert_func();

-- Create an UPDATE trigger.
openGauss=# CREATE TRIGGER update_trigger
           AFTER UPDATE ON test_trigger_src_tbl  
           FOR EACH ROW
           EXECUTE PROCEDURE tri_update_func();

-- Create a DELETE trigger.
openGauss=# CREATE TRIGGER delete_trigger
           BEFORE DELETE ON test_trigger_src_tbl
           FOR EACH ROW
           EXECUTE PROCEDURE tri_delete_func();

-- Execute the INSERT event and check the trigger results.
openGauss=# INSERT INTO test_trigger_src_tbl VALUES(100,200,300);
openGauss=# SELECT * FROM test_trigger_src_tbl;
openGauss=# SELECT * FROM test_trigger_des_tbl;  // Check whether the trigger operation takes effect.

-- Execute the UPDATE event and check the trigger results.
openGauss=# UPDATE test_trigger_src_tbl SET id3=400 WHERE id1=100;
openGauss=# SELECT * FROM test_trigger_src_tbl;
openGauss=# SELECT * FROM test_trigger_des_tbl;  // Check whether the trigger operation takes effect.

-- Execute the DELETE event and check the trigger results.
openGauss=# DELETE FROM test_trigger_src_tbl WHERE id1=100;
openGauss=# SELECT * FROM test_trigger_src_tbl;
openGauss=# SELECT * FROM test_trigger_des_tbl;  // Check whether the trigger operation takes effect.

-- Modify a trigger.
openGauss=# ALTER TRIGGER delete_trigger ON test_trigger_src_tbl RENAME TO delete_trigger_renamed;

-- Delete a trigger.
openGauss=# DROP TRIGGER insert_trigger ON test_trigger_src_tbl;
openGauss=# DROP TRIGGER update_trigger ON test_trigger_src_tbl;
openGauss=# DROP TRIGGER delete_trigger_renamed ON test_trigger_src_tbl;
```

