# ALTER EVENT TRIGGER<a name="EN-US_TOPIC_0289900323"></a>

## Function<a name="en-us_topic_0283137014_en-us_topic_0271320281_en-us_topic_0059777936_sb9efc89be09141c3b332116dd8c2b35d"></a>

ALTER EVENT TRIGGER modifies an event trigger.


## Precautions<a name="en-us_topic_0283137014_en-us_topic_0237122081_en-us_topic_0059777936_s1cdad938760340bbbbd8251750b59176"></a>

Only the system administrator or super user has the permission to modify event triggers.
## Syntax<a name="en-us_topic_0283130714_en-us_topic_0237122081_en-us_topic_0059777936_sf623225ad89841f9a3d73338aa22a6ed"></a>

```
ALTER EVENT TRIGGER name DISABLE
ALTER EVENT TRIGGER name ENABLE [ REPLICA | ALWAYS ]
ALTER EVENT TRIGGER name OWNER TO { new_owner | CURRENT_USER | SESSION_USER }
ALTER EVENT TRIGGER name RENAME TO new_name
```

## Parameter Description<a name="en-us_topic_0283137014_en-us_topic_0237122081_en-us_topic_0059777895_se717dd5fd464489bb0235495c62d3a9e"></a>

-   **name**

    Specifies the name of the event trigger to be modified.

    Value range: all existing event triggers.

-   **new\_name**

    Specifies the new name after modification.

    Value range: strings that comply with the identifier naming convention. A value contains a maximum of 63 characters and cannot be the same as other event triggers on the same table.


## Examples<a name="en-us_topic_0283137014_en-us_topic_0237122081_en-us_topic_0059777895_s7f55076bb56940b7920a431c0c344669"></a>

For details, see [Examples](create-event-trigger.md#en-us_topic_0283137014_en-us_topic_0237122081_en-us_topic_0059777895_s7f55076bb56940b7920a431c0c344669) in [CREATE EVENT TRIGGER](create-event-trigger.md).

## Helpful Links<a name="en-us_topic_0283137014_en-us_topic_0237212081_en-us_topic_0059777895_see210f0a4a346d4c8e1c34bd85b3ec05"></a>

[CREATE EVENT TRIGGER](create-event-trigger.md) and [DROP EVENT TRIGGER](drop-event-trigger.md)
