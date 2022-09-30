# ALTER RESOURCE LABEL<a name="EN-US_TOPIC_0306525301"></a>

## Function<a name="en-us_topic_0059778839_s878bf4f1569c4d2f87e056f26372448e"></a>

**ALTER RESOURCE LABEL**  modifies resource labels.

## Precautions<a name="en-us_topic_0059778839_s63ad21f92ad74c9e8d6bf18bb7218c4f"></a>

Only users with the  **poladmin**  or  **sysadmin**  permission, or the initial user can perform this operation.

## Syntax<a name="en-us_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

```
ALTER RESOURCE LABEL label_name (ADD|REMOVE) 
  label_item_list[, ...]*;
```

-   label\_item\_list

    ```
    resource_type(resource_path[, ...]*)
    ```

-   resource\_type

    ```
    TABLE | COLUMN | SCHEMA | VIEW | FUNCTION
    ```


## Parameter Description<a name="section2852173114389"></a>

-   **label\_name**

    Specifies the resource label name.

    Value range: a string. It must comply with the naming convention.

-   **resource\_type**

    Specifies the type of database resources to be labeled.

-   **resource\_path**

    Specifies the path of database resources.


## Examples<a name="section873151912198"></a>

```
-- Create basic table table_for_label.
openGauss=# CREATE TABLE table_for_label(col1 int, col2 text);

-- Create resource label table_label.
openGauss=# CREATE RESOURCE LABEL table_label ADD COLUMN(table_for_label.col1);

-- Attach resource label table_label to col2.
openGauss=# ALTER RESOURCE LABEL table_label ADD COLUMN(table_for_label.col2)

-- Remove table_label from an item.
openGauss=# ALTER RESOURCE LABEL table_label REMOVE COLUMN(table_for_label.col1);
```

## Helpful Links<a name="section156744489391"></a>

[CREATE RESOURCE LABEL](create-resource-label.md)  and  [DROP RESOURCE LABEL](drop-resource-label.md)
