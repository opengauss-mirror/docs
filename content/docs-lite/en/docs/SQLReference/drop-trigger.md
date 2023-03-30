# DROP TRIGGER<a name="EN-US_TOPIC_0289900035"></a>

## Function<a name="en-us_topic_0283137186_en-us_topic_0237122156_en-us_topic_0059777895_sed6f06f3d4d94b38b10c7592f98bacdb"></a>

**DROP TRIGGER**  deletes a trigger.

## Precautions<a name="en-us_topic_0283137186_en-us_topic_0237122156_en-us_topic_0059777895_s115556a9029e407ca47ff01fea8de0cb"></a>

The owner of the table where a trigger resides or a user granted the DROP ANY TRIGGER permission can perform the DROP TRIGGER operation. The system administrator has this permission by default.

## Syntax<a name="en-us_topic_0283137186_en-us_topic_0237122156_en-us_topic_0059777895_sf4510c6bdb8443de98b3b31a1fed9107"></a>

```
DROP TRIGGER [ IF EXISTS ] trigger_name ON table_name [ CASCADE | RESTRICT ];
```

## Parameter Description<a name="en-us_topic_0283137186_en-us_topic_0237122156_en-us_topic_0059777895_se717dd5fd464489bb0235495c62d3a9e"></a>

-   **IF EXISTS**

    Reports a notice instead of an error if the specified trigger does not exist.

-   **trigger\_name**

    Specifies the name of the trigger to be deleted.

    Value range: an existing trigger name

-   **table\_name**

    Specifies the name of the table containing the trigger.

    Value range: name of the table containing the trigger

-   **CASCADE | RESTRICT**
    -   **CASCADE**: automatically deletes the objects that depend on the trigger.
    -   **RESTRICT**: refuses to delete the trigger if any objects depend on it. This is the default action.


## Examples<a name="en-us_topic_0283137186_en-us_topic_0237122156_en-us_topic_0059777895_s7f55076bb56940b7920a431c0c344669"></a>

For details, see  [Examples](create-trigger.md#en-us_topic_0283137165_en-us_topic_0237122123_en-us_topic_0059778166_sfbca773f5bcd4799b3ea668b3eb074fa)  in  [CREATE TRIGGER](create-trigger.md).

## Helpful Links<a name="en-us_topic_0283137186_en-us_topic_0237122156_en-us_topic_0059777895_see210f0a4a344c6d8e1bc34d85b3ec05"></a>

[CREATE TRIGGER](create-trigger.md),  [ALTER TRIGGER](alter-trigger.md), and  [ALTER TABLE](alter-table.md)
