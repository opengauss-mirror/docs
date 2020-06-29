# Trigger Functions<a name="EN-US_TOPIC_0242370463"></a>

-   pg\_get\_triggerdef\(oid\)

    Description: Obtains the definition information of a trigger.

    Parameter: OID of the trigger to be queried

    Return type: text

    Example:

    ```
    postgres=# SELECT pg_get_triggerdef(oid) FROM pg_trigger;
                                                      pg_get_triggerdef
    ----------------------------------------------------------------------------------------------------------------------
    (0 rows)
    ```

-   pg\_get\_triggerdef\(oid, boolean\)

    Description: Obtains the definition information of a trigger.

    Parameter: OID of the trigger to be queried and whether it is displayed in pretty mode

    Return type: text

    Example:

    ```
    postgres=# SELECT pg_get_triggerdef(oid, true) FROM pg_trigger;
                                                      pg_get_triggerdef
    ----------------------------------------------------------------------------------------------------------------------
    (0 rows)
    ```


