# NULL Statements<a name="EN-US_TOPIC_0245374626"></a>

In PL/SQL programs,  **NULL**  statements are used to indicate "nothing should be done", equal to placeholders. They grant meanings to some statements and improve program readability.

## Syntax<a name="en-us_topic_0237122236_en-us_topic_0059777781_sf998aa99b3fb490182c9c9edcea2d988"></a>

The following shows example use of  **NULL**  statements.

```
DECLARE
    ...
BEGIN
    ...
    IF v_num IS NULL THEN
        NULL; --No data needs to be processed.
    END IF;
END;
/
```

