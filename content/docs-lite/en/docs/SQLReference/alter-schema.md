# ALTER SCHEMA<a name="EN-US_TOPIC_0289900025"></a>

## Function<a name="en-us_topic_0283136607_en-us_topic_0237122070_en-us_topic_0059779037_s806d414edb004fa89cd50a1166d1136e"></a>

**ALTER SCHEMA**  alters the attributes of a schema.

## Precautions<a name="en-us_topic_0283136607_en-us_topic_0237122070_en-us_topic_0059779037_sfccb497f01564edb804ecee58fe2698c"></a>

-   Only the owner of a schema or users granted with the ALTER permission on the schema can run the **ALTER SCHEMA** command. The system administrator has this permission by default. To change the owner of a schema, you must be the owner of the schema or system administrator and a member of the new owner role.
-   Only the initial user is allowed to change the owner of the **pg\_catalog** system schema.

## Syntax<a name="en-us_topic_0283136607_en-us_topic_0237122070_en-us_topic_0059779037_s794bdb8d97844eb7aa7d1d6cdf896ac9"></a>

-   Alter the tamper-proof attribute of a schema.

    ```
    ALTER SCHEMA schema_name { WITH | WITHOUT } BLOCKCHAIN
    ```


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

    Value range: an existing schema name.

-   **RENAME TO new\_name**

    Rename a schema. If a non-administrator user wants to change the schema name, the user must have the  **CREATE**  permission on the database.

    **new\_name**: new name of the schema.

    Value range: a string. It must comply with the identifier naming convention.

-   **OWNER TO new\_owner**

    Change the owner of a schema. To do this as a non-administrator, you must be a direct or indirect member of the new owner role, and that role must have the  **CREATE**  permission on the database.

    **new\_owner**: new owner of the schema.

    Value range: an existing username or role name.

-   **\{ WITH | WITHOUT \} BLOCKCHAIN**

    Alters the tamper-proof attribute of a schema. Common row-store tables with the tamper-proof attribute are tamper-proof history tables, excluding foreign tables, temporary tables, and system catalogs. The tamper-proof attribute can be altered only when no table is contained in the schema. In addition, the tamper-proof attribute of the temporary table schema, **toast table** schema, **dbe\_perf** schema, and **blockchain** schema cannot be modified.


## Examples<a name="en-us_topic_0283136607_en-us_topic_0237122070_en-us_topic_0059779037_sd7a0dca78f6844d79a0ec70fb4213769"></a>

```
--Create the ds schema.
openGauss=# CREATE SCHEMA ds;

--Rename the current schema ds to ds_new.
openGauss=# ALTER SCHEMA ds RENAME TO ds_new;

--Create user jack.
openGauss=# CREATE USER jack PASSWORD 'xxxxxxxxx';

--Change the owner of ds_new to jack.
openGauss=# ALTER SCHEMA ds_new OWNER TO jack;

--Delete user jack and schema ds_new.
openGauss=# DROP SCHEMA ds_new;
openGauss=# DROP USER jack;
```

## Helpful Links<a name="en-us_topic_0283136607_en-us_topic_0237122070_en-us_topic_0059779037_seadab16e00ee41c383d8cba1759ed7c8"></a>

[CREATE SCHEMA](create-schema.md)  and  [DROP SCHEMA](drop-schema.md)
