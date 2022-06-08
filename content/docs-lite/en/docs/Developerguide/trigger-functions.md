# Trigger Functions<a name="EN-US_TOPIC_0289900144"></a>

-   pg\_get\_triggerdef\(oid\)

    Description: Obtains the definition information of a trigger.

    Parameter: OID of the trigger to be queried

    Return type: text

    Example:

    ```
    openGauss=# select pg_get_triggerdef(oid) from pg_trigger;
                                                                                         pg_get_triggerdef
    --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     CREATE TRIGGER tg1 BEFORE INSERT ON gtest26 FOR EACH STATEMENT EXECUTE PROCEDURE gtest_trigger_func()
     CREATE TRIGGER tg03 AFTER INSERT ON gtest26 FOR EACH ROW WHEN ((new.a IS NOT NULL)) EXECUTE PROCEDURE gtest_trigger_func()
    (2 rows)
    ```

-   pg\_get\_triggerdef\(oid, boolean\)

    Description: Obtains the definition information of a trigger.

    Parameter: OID of the trigger to be queried and whether it is displayed in pretty mode

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >Boolean parameters take effect only when the WHEN condition is specified during trigger creation.

    Return type: text

    Example:

    ```
    openGauss=# select pg_get_triggerdef(oid,true) from pg_trigger;
                                                                                         pg_get_triggerdef
    --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     CREATE TRIGGER tg1 BEFORE INSERT ON gtest26 FOR EACH STATEMENT EXECUTE PROCEDURE gtest_trigger_func()
     CREATE TRIGGER tg03 AFTER INSERT ON gtest26 FOR EACH ROW WHEN (new.a IS NOT NULL) EXECUTE PROCEDURE gtest_trigger_func()
    (2 rows)
    
    openGauss=# select pg_get_triggerdef(oid,false) from pg_trigger;
                                                                                         pg_get_triggerdef
    --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     CREATE TRIGGER tg1 BEFORE INSERT ON gtest26 FOR EACH STATEMENT EXECUTE PROCEDURE gtest_trigger_func()
     CREATE TRIGGER tg03 AFTER INSERT ON gtest26 FOR EACH ROW WHEN ((new.a IS NOT NULL)) EXECUTE PROCEDURE gtest_trigger_func()
    (2 rows)
    ```


