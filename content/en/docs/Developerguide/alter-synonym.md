# ALTER SYNONYM<a name="EN-US_TOPIC_0289900326"></a>

## Function<a name="en-us_topic_0283137325_en-us_topic_0237122074_en-us_topic_0059778392_sc84e6980912549c4bbd6895f97ac39f1"></a>

**ALTER SYNONYM**  modifies the attributes of the  **SYNONYM**  object.

## Precautions<a name="en-us_topic_0283137325_en-us_topic_0237122074_en-us_topic_0059778392_sb3569429c1304678895bcf79fb6304cf"></a>

-   Currently, only the owner of the  **SYNONYM**  object can be changed.
-   Only the system administrator has the permission to modify the owner of the  **SYNONYM**  object.
-   The new owner must have the  **CREATE**  permission on the schema where the  **SYNONYM**  object resides.

## Syntax<a name="en-us_topic_0283137325_en-us_topic_0237122074_section185432369210"></a>

```
ALTER SYNONYM synonym_name
    OWNER TO new_owner;
```

## Parameter Description<a name="en-us_topic_0283137325_en-us_topic_0237122074_section37023591411"></a>

-   **synonym**

    Specifies the name of the synonym to be modified, which can contain the schema name.

    Value range: a string. It must comply with the identifier naming convention.


-   **new\_owner**

    Specifies the new owner of the  **SYNONYM**  object.

    Value range: a string. It must be a valid username.


## Examples<a name="en-us_topic_0283137325_en-us_topic_0237122074_section162752045154311"></a>

```
-- Create synonym t1.
openGauss=#  CREATE OR REPLACE SYNONYM t1 FOR ot.t1;

-- Create user u1.
openGauss=# CREATE USER u1 PASSWORD 'user@111';

-- Change the owner of synonym t1 to u1.
openGauss=# ALTER SYNONYM t1 OWNER TO u1;

-- Delete synonym t1.
openGauss=# DROP SYNONYM t1;

-- Delete user u1.
openGauss=# DROP USER u1;
```

## Helpful Links<a name="en-us_topic_0283137325_en-us_topic_0237122074_section613212620440"></a>

[CREATE SYNONYM](create-synonym.md)  and  [DROP SYNONYM](drop-synonym.md)

