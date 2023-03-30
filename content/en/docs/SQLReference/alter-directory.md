# ALTER DIRECTORY<a name="EN-US_TOPIC_0289899981"></a>

## Function<a name="en-us_topic_0283137159_en-us_topic_0237122058_en-us_topic_0059778392_sc84e6980912549c4bbd6895f97ac39f1"></a>

**ALTER DIRECTORY**  modifies a directory.

## Precautions<a name="en-us_topic_0283137159_en-us_topic_0237122058_en-us_topic_0059778392_sb3569429c1304678895bcf79fb6304cf"></a>

-   Currently, only the directory owner can be changed.
-   When enable_access_server_directory=off, only the initial user is allowed to modify the owner of the directory; when enable_access_server_directory=on, users with SYSADMIN authority and the owner of the directory object can modify the directory, and the user is required to be a member of the new owner.

## Syntax<a name="en-us_topic_0283137159_en-us_topic_0237122058_section185432369210"></a>

```
ALTER DIRECTORY directory_name
    OWNER TO new_owner;
```

## Parameter Description<a name="en-us_topic_0283137159_en-us_topic_0237122058_section37023591411"></a>

**directory\_name**

Specifies the name of a directory to be modified. The value must be an existing directory name.

## Examples<a name="en-us_topic_0283137159_en-us_topic_0237122058_section162752045154311"></a>

```
-- Create a directory.
openGauss=# CREATE OR REPLACE DIRECTORY  dir  as '/tmp/';

-- Change the owner of the directory.
openGauss=# ALTER DIRECTORY dir OWNER TO system;

-- Delete a directory.
openGauss=# DROP DIRECTORY dir;
```

## Helpful Links<a name="en-us_topic_0283137159_en-us_topic_0237122058_section613212620440"></a>

[CREATE DIRECTORY](create-directory.md)  and  [DROP DIRECTORY](drop-directory.md)

