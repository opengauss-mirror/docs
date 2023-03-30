# CREATE VIEW<a name="EN-US_TOPIC_0289900307"></a>

## Function<a name="en-us_topic_0283137480_en-us_topic_0237122126_en-us_topic_0059779377_sc0d0ea7296f7418d8e0b1a8878cf72ba"></a>

Creates a view. The view is a virtual table, not a base table. A database only stores the definition of a view and does not store its data. The data is still stored in the original basic table. If data in the base table changes, the data queried from the view changes accordingly. In this sense, a view is like a window through which users can know their interested data and data changes in the database.

## Precautions<a name="en-us_topic_0283137480_en-us_topic_0237122126_en-us_topic_0059779377_sae4035e7748641d3bca61cd89db0e80e"></a>

A user granted with the **CREATE ANY TABLE** permission can create views in the public and user schemas.

## Syntax<a name="en-us_topic_0283137480_en-us_topic_0237122126_en-us_topic_0059779377_s3e7f4ca520974d6984e85b855c05a489"></a>

```
CREATE [ OR REPLACE ] [ TEMP | TEMPORARY ] VIEW view_name [ ( column_name [, ...] ) ]
    [ WITH ( {view_option_name [= view_option_value]} [, ... ] ) ]
    AS query
    [ WITH [ CASCADED | LOCAL ] CHECK OPTION ];
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>
>You can use **WITH\(security\_barrier\)** to create a relatively secure view. This prevents attackers from printing hidden base table data by using the **RAISE** statement of low-cost functions.

## Parameter Description<a name="en-us_topic_0283137480_en-us_topic_0237122126_en-us_topic_0059779377_s09c14680fd2e44bcb52cb2f114096621"></a>

-   **OR REPLACE**

    Redefines the view if it already exists.

-   **TEMP | TEMPORARY**

    Creates a temporary view.

-   **view\_name**

    Specifies the name of the view to be created. It is optionally schema-qualified.

    Value range: a string. It must comply with the identifier naming convention.

-   **column\_name**

    Specifies an optional list of names to be used for columns of the view. If not given, the column names are deduced from the query.

    Value range: a string. It must comply with the identifier naming convention.

-   **view\_option\_name \[= view\_option\_value\]**

    Specifies an optional parameter for a view.

    -   **security\_barrier**

        This parameter is used when the view attempts to provide row-level security.
        
        Value range: Boolean type, **TRUE**, and **FALSE**.
    
    -   **check\_option**

        Specifies the check options of the view.

        Value range: **LOCAL** or **CASCADED**.

-   **query**

    Specifies a **SELECT** or **VALUES** statement that will provide the columns and rows of the view.

-   **WITH [ CASCADED | LOCAL ] CHECK OPTION**

    Controls the behavior of automatically updatable views. INSERT and UPDATE on the view will be checked to ensure that new rows meet the view-defining condition, that is, the new rows are visible through the view. If the check fails, the modification is rejected. If this option is not added, INSERT and UPDATE on the view are allowed to create rows that are not visible through the view. The following check options are supported:

    -   **LOCAL**

        New rows are only checked against the conditions defined directly on the view itself. Any conditions defined on underlying views are not checked (unless they also specify the CHECK OPTION).

    -   **CASCADED**

        New rows are checked against the conditions of the view and all underlying views. If the CHECK OPTION is specified, and neither LOCAL nor CASCADED is specified, then CASCADED is used by default.
    
    Note:
    1. CHECK OPTION is supported only on views that are automatically updatable, and do not have INSTEAD OF triggers or INSTEAD rules. If an automatically updatable view is defined on top of a view that has INSTEAD OF triggers, then the CHECK OPTION may be used to check the conditions on the automatically updatable view, but the conditions on the view with INSTEAD OF triggers will not be checked. If the view or any of its underlying relationships has an INSTEAD rule that causes the INSERT or UPDATE command to be rewritten, then all check options will be ignored in the rewritten query, including any checks from automatically updatable views defined on top of the relationship with the INSTEAD rule.
    2. Views based on MySQL foreign tables do not support CHECK OPTION.

## Automatically Updatable View<a name="en-us_topic_0283137480_en-us_topic_0237122126_en-us_topic_0059779377_s09c14680fd2e44bcb52cb2f114096621"></a>

Simple views are automatically updatable. The system allows INSERT, UPDATE, and DELETE statements to be executed on these views. A view is automatically updatable if it meets the following conditions:

* The view must have exactly one entry in its FROM list, which must be a table or another automatically updatable view.
* The view definition must not contain WITH, DISTINCT, GROUP BY, HAVING, LIMIT, or OFFSET clauses at the top level.
* The view definition must not contain set operations (UNION, INTERSECT or EXCEPT) at the top level.
* The view's target list must not contain any aggregates, window functions or set-returning functions.

An automatically updatable view may contain a mix of updatable and non-updatable columns. A column is updatable if it is a simple reference to an updatable column of the underlying relationship. Otherwise, the column is read-only, and an error will be raised if an INSERT or UPDATE statement attempts to assign a value to it.

If the view is automatically updatable, the system will convert any INSERT, UPDATE or DELETE statement on the view into the corresponding statement on the underlying relationship.

If an automatically updatable view contains a WHERE condition, the condition restricts which rows of the underlying relationship can be modified by UPDATE and DELETE statements on the view. However, a row that can be modified by UPDATE may no longer meet the WHERE condition and thus is no longer visible through the view. Similarly, an INSERT command may insert rows that do not meet the WHERE condition, so the rows are not visible through the view. CHECK OPTION can be used to prevent INSERT and UPDATE commands from creating such rows that are not visible through the view.

A more complex view that does not meet the preceding conditions is read-only by default. The system does not allow INSERT, UPDATE, or DELETE statements to be executed on this view. You can get the effect of an updatable view by creating INSTEAD OF triggers on the view, which must convert attempted insert operations on the view into appropriate actions on other tables. For more information, see [CREATE TRIGGER](create-trigger.md). Another way is to create a rule (see [CREATE RULE](create-rule.md)).

Note that the user who performs insert, update, or delete operations on a view must have the corresponding insert, update, or delete permissions on that view. In addition, the owner of the view must have the corresponding permissions on the underlying relationship, but the user who executes the view does not need any permissions on the underlying relationship.

## Examples<a name="en-us_topic_0283137480_en-us_topic_0237122126_en-us_topic_0059779377_s66a0b4a6a1df4ba4a116c6c565a0fe9d"></a>

```
--Create a view consisting of columns whose spcname is pg_default.
openGauss=# CREATE VIEW myView AS
    SELECT * FROM pg_tablespace WHERE spcname = 'pg_default';

--Query a view.
openGauss=# SELECT * FROM myView ;

--Delete the myView view.
openGauss=# DROP VIEW myView;
```

## Helpful Links<a name="en-us_topic_0283137480_en-us_topic_0237122126_en-us_topic_0059779377_sfc32bec2a548470ebab19d6ca7d6abe2"></a>

[ALTER VIEW](alter-view.md) and [DROP VIEW](drop-view.md)
