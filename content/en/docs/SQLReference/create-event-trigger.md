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
--Create an event trigger function (for ddl_command_start and ddl_command_end events).
openGauss=# create function test_event_trigger() returns event_trigger as $$
BEGIN
    RAISE NOTICE 'test_event_trigger: % %', tg_event, tg_tag;
END
$$ language plpgsql;

--Create an event trigger function (for the sql_drop event).
openGauss=# CREATE OR REPLACE FUNCTION drop_sql_command()
RETURNS event_trigger AS $$
BEGIN
RAISE NOTICE '% - sql_drop', tg_tag;
END;
$$ LANGUAGE plpgsql;

--Create an event trigger function (for the table_rewrite event).
openGauss=# CREATE OR REPLACE FUNCTION test_evtrig_no_rewrite() RETURNS event_trigger
LANGUAGE plpgsql AS $$
BEGIN
  RAISE EXCEPTION 'rewrites not allowed';
END;
$$;

--Create an event trigger whose event type is ddl_command_start.
openGauss=# create event trigger regress_event_trigger on ddl_command_start
   execute procedure test_event_trigger();

--Create an event trigger whose event type is ddl_command_end.
openGauss=# create event trigger regress_event_trigger_end on ddl_command_end
   execute procedure test_event_trigger();

--Create an event trigger whose event type is sql_drop.
openGauss=# CREATE EVENT TRIGGER sql_drop_command ON sql_drop
    EXECUTE PROCEDURE drop_sql_command();

--Create an event trigger whose event type is table_rewrite.
openGauss=# create event trigger no_rewrite_allowed on table_rewrite
  when tag in ('alter table') execute procedure test_evtrig_no_rewrite();

--Modify an event trigger.
openGauss=# create role regress_evt_user WITH ENCRYPTED PASSWORD 'EvtUser123';
openGauss=# ALTER EVENT TRIGGER regress_event_trigger RENAME TO regress_event_trigger_start;
--This operation should fail. The owner of the event trigger can only be the super user.
openGauss=# ALTER EVENT TRIGGER regress_event_trigger_start owner to regress_evt_user;
openGauss=# ALTER EVENT TRIGGER regress_event_trigger_start disable;
openGauss=# ALTER EVENT TRIGGER regress_event_trigger_start enable always;

--Delete an event trigger.
openGauss=# DROP EVENT TRIGGER regress_event_trigger_start;
openGauss=# DROP EVENT TRIGGER regress_event_trigger_end;
openGauss=# DROP EVENT TRIGGER sql_drop_command;
openGauss=# DROP EVENT TRIGGER no_rewrite_allowed;
```


## Helpful Links<a name="en-us_topic_0283137014_en-us_topic_0237212081_en-us_topic_0059777895_see210f0a4a346d4c8e1c34bd85b3ec05"></a>

[ALTER EVENT TRIGGER](alter-event-trigger.md) and [DROP EVENT TRIGGER](drop-event-trigger.md)
