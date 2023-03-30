# DROP VIEW<a name="EN-US_TOPIC_0289900219"></a>

## Function<a name="en-us_topic_0283137706_en-us_topic_0237122159_en-us_topic_0059777895_sed6f06f3d4d94b38b10c7592f98bacdb"></a>

**DROP VIEW**  forcibly deletes a view from the database.

## Precautions<a name="en-us_topic_0283137706_en-us_topic_0237122159_en-us_topic_0059777895_s115556a9029e407ca47ff01fea8de0cb"></a>

The owner of a view, users granted with the  **DROP**  permission on the view, or users granted with the  **DROP ANY TABLE**  permission can run the  **DROP VIEW**  command. The system administrator has the permission to run the command by default.

## Syntax<a name="en-us_topic_0283137706_en-us_topic_0237122159_en-us_topic_0059777895_sf4510c6bdb8443de98b3b31a1fed9107"></a>

```
DROP VIEW [ IF EXISTS ] view_name [, ...] [ CASCADE | RESTRICT ];
```

## Parameter Description<a name="en-us_topic_0283137706_en-us_topic_0237122159_en-us_topic_0059777895_se717dd5fd464489bb0235495c62d3a9e"></a>

-   **IF EXISTS**

    Reports a notice instead of an error if the specified view does not exist.

-   **view\_name**

    Specifies the name of the view to be deleted.

    Value range: an existing view name

-   **CASCADE | RESTRICT**
    -   **CASCADE**: automatically deletes the objects \(such as other views\) that depend on the view.
    -   **RESTRICT**: refuses to delete the view if any objects depend on it. This is the default action.


## Examples<a name="en-us_topic_0283137706_en-us_topic_0237122159_en-us_topic_0059777895_s7f55076bb56940b7920a431c0c344669"></a>

See  [Examples](create-view.md#en-us_topic_0283137480_en-us_topic_0237122126_en-us_topic_0059779377_s66a0b4a6a1df4ba4a116c6c565a0fe9d)  in  **CREATE VIEW**.

## Helpful Links<a name="en-us_topic_0283137706_en-us_topic_0237122159_en-us_topic_0059777895_see210f0a4a344c6d8e1bc34d85b3ec05"></a>

[ALTER VIEW](alter-view.md)  and  [CREATE VIEW](create-view.md)

