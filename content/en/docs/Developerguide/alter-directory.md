# ALTER DIRECTORY<a name="EN-US_TOPIC_0242370522"></a>

## Function<a name="en-us_topic_0237122058_en-us_topic_0059778392_sc84e6980912549c4bbd6895f97ac39f1"></a>

**ALTER DIRECTORY**  modifies a directory.

## Precautions<a name="en-us_topic_0237122058_en-us_topic_0059778392_sb3569429c1304678895bcf79fb6304cf"></a>

-   Currently, only the directory owner can be changed.
-   The owner can only be a user with the  **sysadmin**  permission.

## Syntax<a name="en-us_topic_0237122058_section185432369210"></a>

```
ALTER DIRECTORY directory_name
    OWNER TO new_owner;
```

## Parameter Description<a name="en-us_topic_0237122058_section37023591411"></a>

**directory\_name**

Specifies the name of a directory to be modified. The value must be an existing directory name.

## Examples<a name="en-us_topic_0237122058_section162752045154311"></a>

```
-- Create a directory.
postgres=# CREATE OR REPLACE DIRECTORY  dir  as '/tmp/';

-- Change the owner of the directory.
postgres=# ALTER DIRECTORY dir OWNER TO system;

-- Delete the directory.
postgres=# DROP DIRECTORY dir;
```

## Helpful Links<a name="en-us_topic_0237122058_section613212620440"></a>

[CREATE DIRECTORY](create-directory.md)  and  [DROP DIRECTORY](drop-directory.md)

