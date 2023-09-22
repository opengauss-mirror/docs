# CREATE EVENT TRIGGER<a name="EN-US_TOPIC_0289900727"></a>

## Function<a name="en-us_topic_0283137165_en-us_topic_0237122123_en-us_topic_0059778166_s08b0f056b5f14492970a9037c63fa70c"></a>

CREATE EVENT TRIGGER creates an event trigger to execute a specified event trigger function when a specified event occurs.

## Precautions<a name="en-us_topic_0283137165_en-us_topic_0237122123_en-us_topic_0059778166_sd48f2980b9464b1abca65a4747930552"></a>

-   Only the super user or system administrator has the permission to create event triggers.
-   If multiple event triggers of the same kind are defined for the same event, they will be fired in alphabetical order by name.
-   Event triggers may affect the performance of DDL operations, depending on the number of event triggers and the complexity of executing the function.

## Syntax<a name="en-us_topic_0283137165_en-us_topic_0237122123_en-us_topic_0059778166_s93c6eaefe7c447408b7d42ff86e6035f"></a>

    CREATE EVENT TRIGGER name
        ON event
        [ WHEN filter_variable IN (filter_value [, ... ]) [ AND ... ] ]
        EXECUTE PROCEDURE function_name()

## Parameter Description<a name="en-us_topic_0283731165_en-us_topic_0237112223_en-us_topic_0059778166_s65dbaae3763942599852d585997c77dd"></a>

-   **name**

    Specifies the event trigger name.

-   **filter\_variable**

    Specifies the variable used by the event trigger for filtering. Currently, only TAG is supported.

-   **event**

    Specifies the events supported by the event trigger. Currently, ddl_command_start, ddl_command_end, sql_drop and table_rewrite are supported.

-   **function\_name**

    Specifies a user-defined function, which must be declared as taking no parameters and returning data of event_trigger type. This function is executed when an event trigger fires.

## Examples<a name="en-us_topic_0283137014_en-us_topic_0237122081_en-us_topic_0059777895_s7f55076bb56940b7920a431c0c344669"></a>
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


## Helpful Links<a name="en-us_topic_0283137014_en-us_topic_0237212081_en-us_topic_0059777895_see210f0a4a346d4c8e1c34bd85b3ec05"></a>

[ALTER EVENT TRIGGER](alter-event-trigger.md) and [DROP EVENT TRIGGER](drop-event-trigger.md)
