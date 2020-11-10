# ALTER MATERIALIZED VIEW<a name="EN-US_TOPIC_0273480003"></a>

## Function<a name="en-us_topic_0237122084_en-us_topic_0059778428_section1274412112511"></a>

**ALTER MATERIALIZED VIEW**  changes multiple auxiliary attributes of an existing materialized view.

Statements and actions that can be used for ALTER MATERIALIZED VIEW are a subset of ALTER TABLE and have the same meaning when used for materialized views. For details, see  [ALTER TABLE](alter-table.md).

## Precautions<a name="en-us_topic_0237122084_en-us_topic_0059778428_s5a554e8d15974449b7ffffee772b46f2"></a>

-   Only the owner of a materialized view or a system administrator has the  **ALTER TMATERIALIZED VIEW**  permission.
-   The materialized view structure cannot be modified.

## Syntax<a name="en-us_topic_0237122084_en-us_topic_0059778428_s7a58ab6578844d1d826f43cf0be946f9"></a>

-   Modify the definition of the materialized view.

    ```
    ALTER 
    MATERIALIZED VIEW 
    [ IF EXISTS ] mv_name
        action [, ... ];
    ;
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

-   Set the schema of a materialized view.

    ```
    ALTER MATERIALIZED VIEW [ IF EXISTS ] mv_name 
        SET SCHEMA new_schema;
    ```

-   Set the tablespace of a materialized view.

    ```
    ALTER MATERIALIZED VIEW [ IF EXISTS ] mv_name
        SET TABLESPACE new_tablespace;
    ```

-   There are several clauses of  **action**:

    ```
    ALTER [ COLUMN ] column_name
        
    SET STATISTICS integer
    ALTER [ COLUMN ] column_name 
        RESET ( attribute_option [, ... ] )
    ALTER [ COLUMN ] column_name 
        SET ( attribute_option = value [, ... ] )
    ALTER [ COLUMN ] column_name 
        SET STORAGE { PLAIN | EXTERNAL | EXTENDED | MAIN }
    CLUSTER ON index_name
    SET WITHOUT CLUSTER
    SET ( storage_parameter = value [, ... ] )
    RESET ( storage_parameter [, ... ] )
    ```


## Parameter Description<a name="en-us_topic_0237122084_en-us_topic_0059778428_sf6542f9e45da4efcad90878c3159a286"></a>

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

-   **new\_schema**

    Specifies the new schema of a materialized view.


## Examples<a name="en-us_topic_0237122084_en-us_topic_0059778428_s3d5088f2366242cf9ef14a91c2081248"></a>

```
-- Rename the materialized view foo to bar.
postgres=# ALTER MATERIALIZED VIEW foo RENAME TO bar;
```

## Helpful Links<a name="en-us_topic_0237122084_en-us_topic_0059778428_s0c3f488fdb90433797e7d1561d9a074d"></a>

 [CREATE MATERIALIZED VIEW](create-materialized-view.md),  [DROP MATERIALIZED VIEW](drop-materialized-view.md),  [REFRESH MATERIALIZED VIEW](refresh-materialized-view.md), and  [ALTER TABLE](alter-table.md)

