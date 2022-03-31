# ALTER VIEW<a name="EN-US_TOPIC_0289900061"></a>

## Function<a name="en-us_topic_0283137021_en-us_topic_0237122084_en-us_topic_0059778428_section1274412112511"></a>

**ALTER VIEW**  modifies all auxiliary attributes of a view. \(To modify the query definition of a view, use  **CREATE OR REPLACE VIEW**.\)

## Precautions<a name="en-us_topic_0283137021_en-us_topic_0237122084_en-us_topic_0059778428_s5a554e8d15974449b7ffffee772b46f2"></a>

Only the view owner or a user granted with the ALTER permission can run the  **ALTER VIEW**  command. The system administrator has this permission by default. The following is permission constraints depending on attributes to be modified:

-   To modify the schema of a view, you must be the owner of the view or system administrator and have the CREATE permission on the new schema.
-   To modify the owner of a view, you must be the owner of the view or system administrator and a member of the new owner role, with the CREATE permission on the schema of the view.

## Syntax<a name="en-us_topic_0283137021_en-us_topic_0237122084_en-us_topic_0059778428_s7a58ab6578844d1d826f43cf0be946f9"></a>

-   Set the default value of a view column.

    ```
    ALTER VIEW [ IF EXISTS ] view_name
        ALTER [ COLUMN ] column_name SET DEFAULT expression;
    ```

-   Remove the default value of a view column.

    ```
    ALTER VIEW [ IF EXISTS ] view_name
        ALTER [ COLUMN ] column_name DROP DEFAULT;
    ```

-   Change the owner of a view.

    ```
    ALTER VIEW [ IF EXISTS ] view_name 
        OWNER TO new_owner;
    ```

-   Rename a view.

    ```
    ALTER VIEW [ IF EXISTS ] view_name 
        RENAME TO new_name;
    ```

-   Set the schema of a view.

    ```
    ALTER VIEW [ IF EXISTS ] view_name 
        SET SCHEMA new_schema;
    ```

-   Set the options of a view.

    ```
    ALTER VIEW [ IF EXISTS ] view_name
        SET ( { view_option_name [ = view_option_value ] } [, ... ] );
    ```

-   Reset the options of a view.

    ```
    ALTER VIEW [ IF EXISTS ] view_name
        RESET ( view_option_name [, ... ] );
    ```


## Parameter Description<a name="en-us_topic_0283137021_en-us_topic_0237122084_en-us_topic_0059778428_sf6542f9e45da4efcad90878c3159a286"></a>

-   **IF EXISTS**

    If this option is used, no error is generated when the view does not exist, and only a message is displayed.

-   **view\_name**

    Specifies the view name, which can be schema-qualified.

    Value range: a string. It must comply with the naming convention rule.

-   **column\_name**

    Specifies an optional list of names to be used for columns of the view. If not given, the column names are deduced from the query.

    Value range: a string. It must comply with the naming convention.

-   **SET/DROP DEFAULT**

    Sets or deletes the default value of a column. This parameter does not take effect.

-   **new\_owner**

    Specifies the new owner of a view.

-   **new\_name**

    Specifies the new view name.

-   **new\_schema**

    Specifies the new schema of the view.

-   **view\_option\_name \[ = view\_option\_value \]**

    Specifies an optional parameter for a view.

    Currently,  **view\_option\_name**  supports only the  **security\_barrier**  parameter. This parameter is used when the view attempts to provide row-level security.

    Value range: Boolean type,  **TRUE**, and  **FALSE**.


## Examples<a name="en-us_topic_0283137021_en-us_topic_0237122084_en-us_topic_0059778428_s3d5088f2366242cf9ef14a91c2081248"></a>

```
-- Create a view consisting of rows with c_customer_sk less than 150.
openGauss=# CREATE VIEW tpcds.customer_details_view_v1 AS
    SELECT * FROM tpcds.customer
    WHERE c_customer_sk < 150;

-- Rename a view.
openGauss=# ALTER VIEW tpcds.customer_details_view_v1 RENAME TO customer_details_view_v2;

-- Change the schema of a view.
openGauss=# ALTER VIEW tpcds.customer_details_view_v2 SET schema public;

-- Delete a view.
openGauss=# DROP VIEW public.customer_details_view_v2;
```

## Helpful Links<a name="en-us_topic_0283137021_en-us_topic_0237122084_en-us_topic_0059778428_s0c3f488fdb90433797e7d1561d9a074d"></a>

[CREATE VIEW](create-view.md)  and  [DROP VIEW](drop-view.md)

