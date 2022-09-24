# ALTER TRIGGER<a name="EN-US_TOPIC_0289900315"></a>

## Function<a name="en-us_topic_0283137014_en-us_topic_0237122081_en-us_topic_0059777936_sb9efc89be09141c3b113326dd8c2b35d"></a>

**ALTER TRIGGER**  modifies the name of a trigger.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>
>Only the name modification is currently supported.

## Precautions<a name="en-us_topic_0283137014_en-us_topic_0237122081_en-us_topic_0059777936_s1cdad938760340bbbbd8251750b59176"></a>

The owner of the table where a trigger resides or a user granted the ALTER ANY SEQUENCE permission can perform the ALTER TRIGGER operation. A system administrator has this permission by default.

## Syntax<a name="en-us_topic_0283137014_en-us_topic_0237122081_en-us_topic_0059777936_sf623225ad89841f9a333d738aa22a6ed"></a>

```
ALTER TRIGGER trigger_name ON table_name RENAME TO new_name;
```

## Parameter Description<a name="en-us_topic_0283137014_en-us_topic_0237122081_en-us_topic_0059777895_se717dd5fd464489bb0235495c62d3a9e"></a>

-   **trigger\_name**

    Specifies the name of the trigger to be modified.

    Value range: an existing trigger

-   **table\_name**

    Specifies the name of the table where the trigger to be modified is located.

    Value range: an existing table having a trigger

-   **new\_name**

    Specifies the new name after modification.

    Value range: a string, which complies with the identifier naming convention. A value contains a maximum of 63 characters and cannot be the same as other triggers on the same table.


## Examples<a name="en-us_topic_0283137014_en-us_topic_0237122081_en-us_topic_0059777895_s7f55076bb56940b7920a431c0c344669"></a>

See examples in  [CREATE TRIGGER](create-trigger.md).

## Helpful Links<a name="en-us_topic_0283137014_en-us_topic_0237122081_en-us_topic_0059777895_see210f0a4a344c6d8e1bc34d85b3ec05"></a>

[CREATE TRIGGER](create-trigger.md),  [DROP TRIGGER](drop-trigger.md), and  [ALTER TABLE](alter-table.md)
