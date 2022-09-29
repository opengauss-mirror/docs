# Restrictions<a name="EN-US_TOPIC_0274781306"></a>

-   A trigger function does not support autonomous transactions.
-   In the autonomous transaction block of a function or stored procedure, static SQL statements do not support variable transfer.

    ```
    -- Autonomous transactions do not support the execution of the following functions. The SQL statement contains the variable i.
    CREATE OR REPLACE FUNCTION autonomous_easy_2(i int) RETURNS integer
    LANGUAGE plpgsql
    AS $$
    DECLARE
    PRAGMA AUTONOMOUS_TRANSACTION;
    BEGIN
    START TRANSACTION;
    INSERT INTO test1 VALUES (i, 'test');
    COMMIT;
    RETURN 42;
    END;
    $$;
    -- To use the parameter transfer, use the dynamic statement EXECUTE to replace variables. The following is an example:
    CREATE OR REPLACE FUNCTION autonomous_easy(i int) RETURNS integer
    LANGUAGE plpgsql
    AS $$
    DECLARE
    PRAGMA AUTONOMOUS_TRANSACTION;
    BEGIN
    START TRANSACTION;
    EXECUTE 'INSERT INTO test1 VALUES (' || i::integer || ', ''test'')';
    COMMIT;
    RETURN 42;
    END;
    $$;
    ```

-   Autonomous transactions do not support nesting.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >In a function that contains an autonomous transaction, it is not allowed to explicitly execute another function or stored procedure that contains an autonomous transaction through  **PERFORM**,  **SELECT**, or  **CALL**. However, another function or stored procedure that contains an autonomous transaction can be explicitly called in the last  **RETURN**.

-   A function containing an autonomous transaction does not support the return value of parameter transfer.

    ```
    -- In the following example, the return value ret is not transferred and only null is returned.
    create or replace function at_test2(i int) returns text
    LANGUAGE plpgsql
    as $$
    declare
    ret text;
    pragma autonomous_transaction;
    begin
    START TRANSACTION;
    insert into at_tb2 values(1, 'before s1');
    if i > 10 then
    rollback;
    else
    commit;
    end if;
    select val into ret from at_tb2 where id=1;
    return ret;
    end;
    $$;
    ```

-   A stored procedure or function that contains an autonomous transaction does not support exception handling.
-   A trigger function does not support autonomous transactions.
