# ALTER SYNONYM<a name="EN-US_TOPIC_0251888992"></a>

## Function<a name="en-us_topic_0237122074_en-us_topic_0059778392_sc84e6980912549c4bbd6895f97ac39f1"></a>

**ALTER SYNONYM**  modifies the attributes of the  **SYNONYM**  object.

## Precautions<a name="en-us_topic_0237122074_en-us_topic_0059778392_sb3569429c1304678895bcf79fb6304cf"></a>

-   Currently, only the owner of the  **SYNONYM**  object can be changed.
-   Only the system administrator has the permission to modify the owner of the  **SYNONYM**  object.
-   The new owner must have the  **CREATE**  permission on the schema where the  **SYNONYM**  object resides.

## Syntax<a name="en-us_topic_0237122074_section185432369210"></a>

```
ALTER SYNONYM synonym_name
    OWNER TO new_owner;
```

## Parameter Description<a name="en-us_topic_0237122074_section37023591411"></a>

-   **synonym**

    Specifies the name of the synonym to be modified, which can contain the schema name.

    Value range: a string. It must comply with the naming convention rule.


-   **new\_owner**

    Specifies the new owner of the  **SYNONYM**  object.

    Value range: a string. It must be a valid username.


## Examples<a name="en-us_topic_0237122074_section162752045154311"></a>

```
-- Create synonym t1.
postgres=#  CREATE OR REPLACE SYNONYM t1 FOR ot.t1;

-- Create a user u1.
postgres=# CREATE USER u1 PASSWORD 'user@111';

-- Change the owner of synonym t1 to u1.
postgres=# ALTER SYNONYM t1 OWNER TO u1;

-- Delete synonym t1.
postgres=# DROP SYNONYM t1;

-- Delete user u1.
postgres=# DROP USER u1;
```

## Helpful Links<a name="en-us_topic_0237122074_section613212620440"></a>

[CREATE DATA SOURCE](create-data-source.md)  and  [DROP DATA SOURCE](drop-data-source.md)

