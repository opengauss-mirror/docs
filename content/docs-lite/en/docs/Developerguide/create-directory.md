# CREATE DIRECTORY<a name="EN-US_TOPIC_0289900765"></a>

## Function<a name="en-us_topic_0283136620_en-us_topic_0237122101_en-us_topic_0059778310_section50807000114421"></a>

**CREATE DIRECTORY**  creates a directory. The directory defines an alias for a path in the server file system and is used to store data files used by users.

## Precautions<a name="en-us_topic_0283136620_en-us_topic_0237122101_en-us_topic_0059778310_section25762026103427"></a>

-   When  **enable\_access\_server\_directory**  is set to  **off**, only the initial user is allowed to create directory objects. When  **enable\_access\_server\_directory**  is set to  **on**, the user with the SYSADMIN permission and the user who inherits the  **gs\_role\_directory\_create**  permission of the built-in role can create directory objects.
-   By default, the user who creates a directory has the read and write permissions on the directory.
-   The default owner of a directory is the user who creates the directory.
-   A directory cannot be created for the following paths:
    -   The path contains special characters.
    -   The path is a relative path.
    -   The path is a symbolic link.

-   The following validity check is performed during directory creation:
    -   Check whether the path exists in the OS. If it does not exist, a message is displayed, indicating the potential risks.
    -   Check whether the database initial user  **omm**  has the R/W/X permissions for the OS path. If the user does not have all the permissions, a message is displayed, indicating the potential risks.

-   In openGauss, ensure that the path is the same on all the nodes. Otherwise, the path may fail to be found on some nodes when the directory is used.

## Syntax<a name="en-us_topic_0283136620_en-us_topic_0237122101_en-us_topic_0059778310_section30531647103427"></a>

```
CREATE [OR REPLACE] DIRECTORY directory_name
AS 'path_name';
```

## Parameter Description<a name="en-us_topic_0283136620_en-us_topic_0237122101_section687510282437"></a>

-   **directory\_name**

    Specifies the name of a directory.

    Value range: a string. It must comply with the identifier naming convention.

-   **path\_name**

    Specifies the OS path for which a directory is to be created.

    Value range: a valid OS path


## Examples<a name="en-us_topic_0283136620_en-us_topic_0237122101_section1853433744413"></a>

```
-- Create a directory.
openGauss=# CREATE OR REPLACE DIRECTORY  dir  as '/tmp/';
```

## Helpful Links<a name="en-us_topic_0283136620_en-us_topic_0237122101_section1767373224414"></a>

[ALTER DIRECTORY](alter-directory.md)  and  [DROP DIRECTORY](drop-directory.md)

