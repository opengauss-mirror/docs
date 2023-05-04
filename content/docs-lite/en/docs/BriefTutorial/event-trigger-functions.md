# Event Trigger Functions<a name="EN-US_TOPIC_0289014904"></a>

-   pg\_event\_trigger\_ddl\_commands

    Description: Reports running DDL commands in the ddl_command_end event trigger.

    Parameter: null
    >![](public_sys-resources/icon-note.gif) **NOTE:**
    >This function is used only in event triggers.

    Return type: oid,oid,int4,text,text,text,text,bool,pg_ddl_command.

    Example:

    ```
    openGauss=# CREATE OR REPLACE FUNCTION ddl_command_test()
    RETURNS event_trigger
    AS $$
    DECLARE
        obj record;
    BEGIN
        FOR obj IN SELECT * FROM pg_event_trigger_ddl_commands()
            LOOP
            RAISE NOTICE 'command: %',
                    obj.command_tag;

                RAISE NOTICE 'triggered';
            END LOOP;
    END; $$ LANGUAGE plpgsql;
    ```

-   pg\_event\_trigger\_dropped\_objects

    Description: Makes the list of deleted objects visible to users in the sql\_drop event trigger.

    Parameter: null

    >![](public_sys-resources/icon-note.gif) **NOTE:**
    >This function is used only in event triggers.

    Return types: oid,oid,int4,bool,bool,booloid,text,text,text,text,TEXTARRAY,TEXTARRAY

    Example:

    ```
    openGauss=# CREATE OR REPLACE FUNCTION test_evtrig_dropped_objects() RETURNS event_trigger
    LANGUAGE plpgsql AS $$
    DECLARE
        obj record;
    BEGIN
        FOR obj IN SELECT * FROM pg_event_trigger_dropped_objects()
        LOOP
            IF obj.object_type = 'table' THEN
                    EXECUTE format('DROP TABLE IF EXISTS audit_tbls.%I',
                        format('%s_%s', obj.schema_name, obj.object_name));
            END IF;

        INSERT INTO dropped_objects
            (type, schema, object) VALUES
            (obj.object_type, obj.schema_name, obj.object_identity);
        END LOOP;
    END
    $$;
    ```

-   pg\_event\_trigger\_table\_rewrite\_oid

    Description: Makes the overwritten object OIDs visible to users in the table\_rewrite event trigger.

    Parameter: null

    >![](public_sys-resources/icon-note.gif) **NOTE:**
    >This function is used only in event triggers.

    Return type: oid

    Example:

    ```
    openGauss=# CREATE OR REPLACE FUNCTION test_evtrig_no_rewrite() RETURNS event_trigger
    LANGUAGE plpgsql AS $$
    BEGIN
    RAISE NOTICE 'Table ''%'' is being rewritten (reason = %)',
                pg_event_trigger_table_rewrite_oid()::regclass,
                pg_event_trigger_table_rewrite_reason();
    END;
    $$;
    ```

-   pg\_event\_trigger\_table\_rewrite\_reason

    Description: Makes reasons for rewriting objects visible to users in the table\_rewrite event trigger.

    Parameter: null

    >![](public_sys-resources/icon-note.gif) **NOTE:**
    >This function is used only in event triggers.

    Return type: int4

    Example:

    ```
    openGauss=# CREATE OR REPLACE FUNCTION test_evtrig_no_rewrite() RETURNS event_trigger
    LANGUAGE plpgsql AS $$
    BEGIN
    RAISE NOTICE 'Table ''%'' is being rewritten (reason = %)',
                pg_event_trigger_table_rewrite_oid()::regclass,
                pg_event_trigger_table_rewrite_reason();
    END;
    $$;
    ```
