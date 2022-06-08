# DROP MATERIALIZED VIEW<a name="EN-US_TOPIC_0289899894"></a>

## Function<a name="en-us_topic_0283137529_en-us_topic_0237122159_en-us_topic_0059777895_sed6f06f3d4d94b38b10c7592f98bacdb"></a>

**DROP MATERIALIZED VIEW**  forcibly deletes an existing materialized view from the database.

## Precautions<a name="en-us_topic_0283137529_en-us_topic_0237122159_en-us_topic_0059777895_s115556a9029e407ca47ff01fea8de0cb"></a>

Only the owner of a materialized view or a system administrator has the  **DROP MATERIALIZED VIEW**  permission.

## Syntax<a name="en-us_topic_0283137529_en-us_topic_0237122159_en-us_topic_0059777895_sf4510c6bdb8443de98b3b31a1fed9107"></a>

```
DROP MATERIALIZED VIEW [ IF EXISTS ] mv_name [, ...] [ CASCADE | RESTRICT ];
```

## Parameter Description<a name="en-us_topic_0283137529_en-us_topic_0237122159_en-us_topic_0059777895_se717dd5fd464489bb0235495c62d3a9e"></a>

-   **IF EXISTS**

    Reports a notice instead of an error if the specified materialized view does not exist.

-   **mv\_name**

    Name of the materialized view to be deleted.

-   **CASCADE | RESTRICT**
    -   **CASCADE**: automatically deletes the objects that depend on the materialized view.
    -   **RESTRICT**: refuses to delete the materialized view if any objects depend on it. This is the default action.


## Examples<a name="en-us_topic_0283137529_en-us_topic_0237122159_en-us_topic_0059777895_s7f55076bb56940b7920a431c0c344669"></a>

```
-- Delete the materialized view named my_mv.
openGauss=# DROP MATERIALIZED VIEW my_mv;
```

## Helpful Links<a name="en-us_topic_0283137529_en-us_topic_0237122159_en-us_topic_0059777895_see210f0a4a344c6d8e1bc34d85b3ec05"></a>

[ALTER MATERIALIZED VIEW](alter-materialized-view.md),  [CREATE INCREMENTAL MATERIALIZED VIEW](create-incremental-materialized-view.md),  [CREATE MATERIALIZED VIEW](create-materialized-view.md),  [CREATE TABLE](create-table.md),  [REFRESH INCREMENTAL MATERIALIZED VIEW](refresh-incremental-materialized-view.md), and  [REFRESH MATERIALIZED VIEW](refresh-materialized-view.md)

