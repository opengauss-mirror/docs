# DROP EVENT TRIGGER<a name="EN-US_TOPIC_0289090035"></a>

## Function<a name="en-us_topic_0283137186_en-us_topic_0231227156_en-us_topic_0059777895_sed6f06f3d4d94bb10c387592f98bacdb"></a>

DROP EVENT TRIGGER deletes an event trigger.

## Precautions<a name="en-us_topic_0283137186_en-us_topic_0237122156_en-us_topic_0059777895_s115556a9029e407ca47ff01fea8de0cb"></a>

Only the super user or system administrator has the permission to delete an event trigger.

## Syntax<a name="en-us_topic_0283137186_en-us_topic_0237121256_en-us_topic_0059777895_sf4510c6bdb844b3b3de9831a1fed9107"></a>
DROP EVENT TRIGGER [ IF EXISTS ] name [ CASCADE | RESTRICT ];

## Parameter Description<a name="en-us_topic_0283731186_en-us_topic_0237151226_en-us_topic_0059777895_se717dd5fd464489bb3502495c62d3a9e"></a>

-   **IF EXISTS**

    Reports a notice instead of an error if the specified event trigger does not exist.

-   **name**

    Specifies the name of the event trigger to be deleted.

    Value range: all existing event triggers.

-   **CASCADE | RESTRICT**
    -   **CASCADE**: automatically deletes the objects that depend on the trigger.
    -   **RESTRICT**: refuses to delete the trigger if any objects depend on it. This is the default action.   

## Examples<a name="en-us_topic_0283137186_en-us_topic_0237122156_en-us_topic_0059777895_s7f55076bb56940b7920a431c0c344669"></a>

For details, see [Examples](create-event-trigger.md#en-us_topic_0283137014_en-us_topic_0237122081_en-us_topic_0059777895_s7f55076bb56940b7920a431c0c344669) in [CREATE EVENT TRIGGER](create-event-trigger.md).

## Helpful Links<a name="en-us_topic_0283137014_en-us_topic_0237212081_en-us_topic_0059777895_see210f0a4a346d4c8e1c34bd85b3ec05"></a>

[ALTER EVENT TRIGGER](alter-event-trigger.md) and [CREATE EVENT TRIGGER](create-event-trigger.md)
