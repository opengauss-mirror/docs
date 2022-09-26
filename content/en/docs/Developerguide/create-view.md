# CREATE VIEW<a name="EN-US_TOPIC_0289900307"></a>

## Function<a name="en-us_topic_0283137480_en-us_topic_0237122126_en-us_topic_0059779377_sc0d0ea7296f7418d8e0b1a8878cf72ba"></a>

**CREATE VIEW**  creates a view. A view is a virtual table, not a base table. Only view definition is stored in the database and view data is not. The data is stored in a base table. If data in the base table changes, the data in the view changes accordingly. In this sense, a view is like a window through which users can know their interested data and data changes in the database.

## Precautions<a name="en-us_topic_0283137480_en-us_topic_0237122126_en-us_topic_0059779377_sae4035e7748641d3bca61cd89db0e80e"></a>

A user granted with the  **CREATE ANY TABLE**  permission can create views in the public and user schemas.

## Syntax<a name="en-us_topic_0283137480_en-us_topic_0237122126_en-us_topic_0059779377_s3e7f4ca520974d6984e85b855c05a489"></a>

```
CREATE [ OR REPLACE ] [DEFINER = user] [ TEMP | TEMPORARY ] VIEW view_name [ ( column_name [, ...] ) ]
    [ WITH ( {view_option_name [= view_option_value]} [, ... ] ) ]
    AS query;
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>You can use  **WITH\(security\_barrier\)**  to create a relatively secure view. This prevents attackers from printing hidden base table data by using the  **RAISE**  statement of low-cost functions.

## Parameter Description<a name="en-us_topic_0283137480_en-us_topic_0237122126_en-us_topic_0059779377_s09c14680fd2e44bcb52cb2f114096621"></a>

-   **OR REPLACE**

    Redefines the view if it already exists.

- **DEFINER = user**

  Specify user as the owner of the view. This option is used in B-compatible mode.

-   **TEMP | TEMPORARY**

    Creates a temporary view.

-   **view\_name**

    Specifies the name \(optionally schema-qualified\) of the view to be created.

    Value range: a string. It must comply with the identifier naming convention.

-   **column\_name**

    Specifies an optional list of names to be used for columns of the view. If not given, the column names are deduced from the query.

    Value range: a string. It must comply with the identifier naming convention.

-   **view\_option\_name \[= view\_option\_value\]**

    Specifies an optional parameter for a view.

    Currently,  **view\_option\_name**  supports only the  **security\_barrier**  parameter. This parameter is used when the view attempts to provide row-level security.

    Value range: Boolean type,  **TRUE**, and  **FALSE**.

-   **query**

    Specifies a  **SELECT**  or  **VALUES**  statement that will provide the columns and rows of the view.


## Examples<a name="en-us_topic_0283137480_en-us_topic_0237122126_en-us_topic_0059779377_s66a0b4a6a1df4ba4a116c6c565a0fe9d"></a>

```
-- Create a view consisting of columns whose spcname is pg_default.
openGauss=# CREATE VIEW myView AS
    SELECT * FROM pg_tablespace WHERE spcname = 'pg_default';

-- Query a view.
openGauss=# SELECT * FROM myView ;

-- Delete the myView view.
openGauss=# DROP VIEW myView;
```

## Helpful Links<a name="en-us_topic_0283137480_en-us_topic_0237122126_en-us_topic_0059779377_sfc32bec2a548470ebab19d6ca7d6abe2"></a>

[ALTER VIEW](alter-view.md)  and  [DROP VIEW](drop-view.md)
