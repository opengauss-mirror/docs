# ALTER SCHEMA<a name="EN-US_TOPIC_0289900025"></a>

## Function<a name="en-us_topic_0283136607_en-us_topic_0237122070_en-us_topic_0059779037_s806d414edb004fa89cd50a1166d1136e"></a>

**ALTER SCHEMA**  modifies schema properties.

## Precautions<a name="en-us_topic_0283136607_en-us_topic_0237122070_en-us_topic_0059779037_sfccb497f01564edb804ecee58fe2698c"></a>

Only the schema owner or a user granted with the ALTER permission can run the  **ALTER SCHEMA**  command. The system administrator has this permission by default. To modify a schema owner, you must be the schema owner or system administrator and a member of the new owner role.

## Syntax<a name="en-us_topic_0283136607_en-us_topic_0237122070_en-us_topic_0059779037_s794bdb8d97844eb7aa7d1d6cdf896ac9"></a>

-   Rename a schema.

    ```
    ALTER SCHEMA schema_name 
        RENAME TO new_name;
    ```

-   Change the owner of a schema.

    ```
    ALTER SCHEMA schema_name 
        OWNER TO new_owner;
    ```


## Parameter Description<a name="en-us_topic_0283136607_en-us_topic_0237122070_en-us_topic_0059779037_s8277cc73aecc4f20845d2ddf456a20e7"></a>

-   **schema\_name**

    Specifies the name of an existing schema.

    Value range: an existing schema name

-   **RENAME TO new\_name**

    Renames a schema.

    **new\_name**: new name of the schema. To do this as a non-administrator, you must be a direct or indirect member of the new owning role, and that role must have  **CREATE**  permission in the database.

    Value range: a string. It must comply with the naming convention rule.

-   **OWNER TO new\_owner**

    Changes the owner of a schema. To do this as a non-administrator, you must be a direct or indirect member of the new owning role, and that role must have  **CREATE**  permission in the database.

    **new\_owner**: new owner of the schema.

    Value range: an existing username or role name


## Examples<a name="en-us_topic_0283136607_en-us_topic_0237122070_en-us_topic_0059779037_sd7a0dca78f6844d79a0ec70fb4213769"></a>

```
-- Create the ds schema.
postgres=# CREATE SCHEMA ds;

-- Rename the current schema ds to ds_new.
postgres=# ALTER SCHEMA ds RENAME TO ds_new;

-- Create user jack.
postgres=# CREATE USER jack PASSWORD 'Bigdata@123';

-- Change the owner of ds_new to jack.
postgres=# ALTER SCHEMA ds_new OWNER TO jack;

-- Delete user jack and schema ds_new.
postgres=# DROP SCHEMA ds_new;
postgres=# DROP USER jack;
```

## Helpful Links<a name="en-us_topic_0283136607_en-us_topic_0237122070_en-us_topic_0059779037_seadab16e00ee41c383d8cba1759ed7c8"></a>

[CREATE SCHEMA](en-us_topic_0283137491.md)  and  [DROP SCHEMA](en-us_topic_0283137271.md)

