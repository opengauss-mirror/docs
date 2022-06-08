# CREATE RESOURCE LABEL<a name="EN-US_TOPIC_0306525304"></a>

## Function<a name="section1163224811518"></a>

**CREATE RESOURCE LABEL**  creates a resource label.

## Precautions<a name="en-us_topic_0059777586_s0bb17f15d73a4d978ef028b2686e0f7a"></a>

Only users with the  **poladmin**  or  **sysadmin**  permission, or the initial user can perform this operation.

## Syntax<a name="en-us_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

```
CREATE RESOURCE LABEL [IF NOT EXISTS] label_name ADD label_item_list[, ...]*;
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

    Specifies the resource label name, which must be unique.

    Value range: a string. It must comply with the naming convention.

-   **resource\_type**

    Specifies the type of database resources to be labeled.

-   **resource\_path**

    Specifies the path of database resources.


## Examples<a name="section7854941155112"></a>

```
-- Create table tb_for_label.
openGauss=# CREATE TABLE tb_for_label(col1 text, col2 text, col3 text);

-- Create schema schema_for_label.
openGauss=# CREATE SCHEMA schema_for_label;

-- Create view view_for_label.
openGauss=# CREATE VIEW view_for_label AS SELECT 1;

-- Create function func_for_label.
openGauss=# CREATE FUNCTION func_for_label RETURNS TEXT AS $$ SELECT col1 FROM tb_for_label; $$ LANGUAGE SQL;

-- Create a resource label based on the table.
openGauss=# CREATE RESOURCE LABEL IF NOT EXISTS table_label add TABLE(public.tb_for_label);

-- Create a resource label based on the columns.
openGauss=# CREATE RESOURCE LABEL IF NOT EXISTS column_label add COLUMN(public.tb_for_label.col1);

-- Create a resource label based on the schema.
openGauss=# CREATE RESOURCE LABEL IF NOT EXISTS schema_label add SCHEMA(schema_for_label);

-- Create a resource label based on the view.
openGauss=# CREATE RESOURCE LABEL IF NOT EXISTS view_label add VIEW(view_for_label);

-- Create a resource label based on the function.
openGauss=# CREATE RESOURCE LABEL IF NOT EXISTS func_label add FUNCTION(func_for_label);

```

## Helpful Links<a name="en-us_topic_0059778277_s4693856e1f6240dc98de7d6faf52f136"></a>

[ALTER RESOURCE LABEL](alter-resource-label.md)  and  [DROP RESOURCE LABEL](drop-resource-label.md)

