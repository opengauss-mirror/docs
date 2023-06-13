# Event Trigger<a name="EN-US_TOPIC_0000001209983516"></a>

A trigger automatically executes functions when the specified DDL event occurs. Currently, event triggers are available only in PG-compatible mode.

## Syntax<a name="en-us_topic_0283136626_en-us_topic_0237122110_en-us_topic_0059778640_sbee45c05d75942939b8cb27ddd67bd30"></a>

-   Create an event trigger.

    ```
    CREATE EVENT TRIGGER name
        ON event
        [ WHEN filter_variable IN (filter_value [, ... ]) [ AND ... ] ]
        EXECUTE PROCEDURE function_name()
    ```


-   Modify an event trigger.

    ```
    ALTER EVENT TRIGGER name DISABLE
    ALTER EVENT TRIGGER name ENABLE [ REPLICA | ALWAYS ]
    ALTER EVENT TRIGGER name OWNER TO { new_owner | CURRENT_USER | SESSION_USER }
    ALTER EVENT TRIGGER name RENAME TO new_name
    ```


-   Delete an event trigger.

    ```
    DROP EVENT TRIGGER [ IF EXISTS ] name [ CASCADE | RESTRICT ];
    ```
## Parameter Description<a name="en-us_topic_0283165137_en-us_topic_0237122231_en-us_topic_0059778166_s65ae376394dba2599852d585997c77dd"></a>

-   **name**

    Specifies the event trigger name.

-   **filter\_variable**

    Specifies the variable used by the event trigger for filtering. Currently, only TAG is supported.

-   **event**

    Specifies the events supported by the event trigger. Currently, ddl\_command\_start, ddl\_command\_end, sql\_drop and table\_rewrite are supported.

-   **function\_name**

    Specifies a user-defined function, which must be declared as taking no parameters and returning data of event\_trigger type. This function is executed when an event trigger fires.

-   **new\_name**

    Specifies the new event trigger name.

-   **disable**

    Disables the event trigger.

-   **ENABLE [ REPLICA | ALWAYS ]**

    This event trigger is available when **session\_replication\_role** is set to **REPLICA** or any value.   
## Examples<a name="en-us_topic_0283731165_en-us_topic_0237122123_en-us_topic_0059778166_sfbca773f5bc99b3ead47668b3eb074fa"></a>

```
--Create database for testing
openGauss=# create database test_event_trigger dbcompatibility='PG';
openGauss=# \c test_event_trigger
--Create an event trigger function (for ddl_command_start and ddl_command_end events).
test_event_trigger=# create function test_event_trigger() returns event_trigger as $$
BEGIN
    RAISE NOTICE 'test_event_trigger: % %', tg_event, tg_tag;
END
$$ language plpgsql;

--Create an event trigger function (for the sql_drop event).
test_event_trigger=# CREATE OR REPLACE FUNCTION drop_sql_command()
RETURNS event_trigger AS $$
BEGIN
RAISE NOTICE '% - sql_drop', tg_tag;
END;
$$ LANGUAGE plpgsql;

--Create an event trigger function (for the table_rewrite event).
test_event_trigger=# CREATE OR REPLACE FUNCTION test_evtrig_no_rewrite() RETURNS event_trigger
LANGUAGE plpgsql AS $$
BEGIN
  RAISE EXCEPTION 'rewrites not allowed';
END;
$$;

--Create an event trigger whose event type is ddl_command_start.
test_event_trigger=# create event trigger regress_event_trigger on ddl_command_start
   execute procedure test_event_trigger();

--Create an event trigger whose event type is ddl_command_end.
test_event_trigger=# create event trigger regress_event_trigger_end on ddl_command_end
   execute procedure test_event_trigger();

--Create an event trigger whose event type is sql_drop.
test_event_trigger=# CREATE EVENT TRIGGER sql_drop_command ON sql_drop
    EXECUTE PROCEDURE drop_sql_command();

--Create an event trigger whose event type is table_rewrite.
test_event_trigger=# create event trigger no_rewrite_allowed on table_rewrite
  when tag in ('alter table') execute procedure test_evtrig_no_rewrite();

--Run the DDL statement to check the event trigger effect (ddl_command_start and ddl_command_end are triggered).
test_event_trigger=# create table event_trigger_table (a int);

--Run the alter table statement to check the event trigger effect. ddl_command_start and table_rewrite,ddl_command_end are not triggered because rewrite is disabled.
test_event_trigger=# alter table event_trigger_table alter column a type numeric;

--Run the drop statement to check the event trigger effect (ddl_command_start, sql_drop, and ddl_command_end are triggered).
test_event_trigger=# drop table event_trigger_table;

--Modify an event trigger.
test_event_trigger=# create role regress_evt_user WITH ENCRYPTED PASSWORD 'EvtUser123';
test_event_trigger=# ALTER EVENT TRIGGER regress_event_trigger RENAME TO regress_event_trigger_start;
--This operation should fail. The owner of the event trigger can only be the super user.
test_event_trigger=# ALTER EVENT TRIGGER regress_event_trigger_start owner to regress_evt_user;
test_event_trigger=# ALTER EVENT TRIGGER regress_event_trigger_start disable;
test_event_trigger=# ALTER EVENT TRIGGER regress_event_trigger_start enable always;

--Delete an event trigger.
test_event_trigger=# DROP EVENT TRIGGER regress_event_trigger_start;
test_event_trigger=# DROP EVENT TRIGGER regress_event_trigger_end;
test_event_trigger=# DROP EVENT TRIGGER sql_drop_command;
test_event_trigger=# DROP EVENT TRIGGER no_rewrite_allowed;
```
