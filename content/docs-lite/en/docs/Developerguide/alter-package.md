# ALTER PACKAGE<a name="EN-US_TOPIC_0000001242228489"></a>

## Function<a name="en-us_topic_0283136989_en-us_topic_0237122061_en-us_topic_0059778614_sa364f8cdcfd24ba1a68426488e7852d4"></a>

**ALTER PACKAGE**  alters the attributes of a package.

## Precautions<a name="en-us_topic_0283136989_en-us_topic_0237122061_en-us_topic_0059778614_sf701318086b54f2fad9457e8e0b38f19"></a>

Currently, only users with the  **ALTER PACKAGE OWNER**  permission can run this command. The system administrator has this permission by default. The restrictions are as follows:

-   The current user must be the owner of the package or the system administrator and a member of the new owner role.

## Syntax<a name="section20611644205015"></a>

-   Change the owner of a package.

    ```
    ALTER PACKAGE package_name OWNER TO new_owner;
    ```


## Parameter Description<a name="section379118333433"></a>

-   **package\_name**

    Specifies the name of the package to be modified.

    Value range: an existing package name. Only one package can be modified at a time.

-   **new\_owner**

    Specifies the new owner of a package. To change the owner of a package, the new owner must have the  **CREATE**  permission on the schema to which the package belongs.

    Value range: an existing user role.


## Examples<a name="en-us_topic_0283136989_en-us_topic_0237122061_en-us_topic_0059778614_sfe220a2da49d4ca5928fe714ca12e949"></a>

For details, see  [CREATE PACKAGE](create-package.md).

## Helpful Links<a name="en-us_topic_0283136989_en-us_topic_0237122061_en-us_topic_0059778614_sacb869eb702a48fdbb64acb219ced069"></a>

[CREATE PACKAGE](create-package.md)  and  [DROP PACKAGE](drop-package.md)

