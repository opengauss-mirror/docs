# ALTER MATERIALIZED VIEW<a name="EN-US_TOPIC_0289900865"></a>

## Function<a name="en-us_topic_0283137307_en-us_topic_0237122084_en-us_topic_0059778428_section1274412112511"></a>

**ALTER MATERIALIZED VIEW**  changes multiple auxiliary attributes of an existing materialized view.

Statements and actions that can be used for  **ALTER MATERIALIZED VIEW**  are a subset of  **ALTER TABLE**  and have the same meaning when used for materialized views. For details, see  [ALTER TABLE](alter-table.md).

## Precautions<a name="en-us_topic_0283137307_en-us_topic_0237122084_en-us_topic_0059778428_s5a554e8d15974449b7ffffee772b46f2"></a>

-   Only the owner of a materialized view or a system administrator has the  **ALTER TMATERIALIZED VIEW**  permission.
-   The materialized view structure cannot be modified.

## Syntax<a name="en-us_topic_0283137307_en-us_topic_0237122084_en-us_topic_0059778428_s7a58ab6578844d1d826f43cf0be946f9"></a>

-   Change the owner of the materialized view.

    ```
    ALTER MATERIALIZED VIEW [ IF EXISTS ] mv_name
        OWNER TO new_owner;
    ```

-   Modify the column of a materialized view.

    ```
    ALTER MATERIALIZED VIEW [ IF EXISTS ] mv_name
        RENAME [ COLUMN ] column_name TO new_column_name;
    ```

-   Rename a materialized view.

    ```
    ALTER MATERIALIZED VIEW [ IF EXISTS ] mv_name
     
        RENAME TO new_name;
    ```


## Parameter Description<a name="en-us_topic_0283137307_en-us_topic_0237122084_en-us_topic_0059778428_sf6542f9e45da4efcad90878c3159a286"></a>

-   **mv\_name**

    Specifies the name of an existing materialized view, which can be schema-qualified.

    Value range: a string. It must comply with the naming convention.

-   **column\_name**

    Specifies the name of a new or existing column.

    Value range: a string. It must comply with the naming convention.

-   **new\_column\_name**

    Specifies the new name of an existing column.

-   **new\_owner**

    Specifies the user name of the new owner of a materialized view.

-   **new\_name**

    Specifies the new name of a materialized view.


## Examples<a name="en-us_topic_0283137307_en-us_topic_0237122084_en-us_topic_0059778428_s3d5088f2366242cf9ef14a91c2081248"></a>

```
-- Rename the materialized view foo to bar.
openGauss=# ALTER MATERIALIZED VIEW foo RENAME TO bar;
```

## Helpful Links<a name="en-us_topic_0283137307_en-us_topic_0237122084_en-us_topic_0059778428_s0c3f488fdb90433797e7d1561d9a074d"></a>

[CREATE MATERIALIZED VIEW](create-materialized-view.md),  [CREATE INCREMENTAL MATERIALIZED VIEW](create-incremental-materialized-view.md),  [DROP MATERIALIZED VIEW](drop-materialized-view.md),  [REFRESH INCREMENTAL MATERIALIZED VIEW](refresh-incremental-materialized-view.md), and  [REFRESH MATERIALIZED VIEW](refresh-materialized-view.md)

