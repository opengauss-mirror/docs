# CREATE EXTENSION<a name="EN-US_TOPIC_0000001080534638"></a>

## Function<a name="section173831846163116"></a>

**CREATE EXTENSION**  installs an extension.

## Precautions<a name="section786041713618"></a>

-   The  **CREATE EXTENSION**  command installs a new extension to a database. Ensure that no extension with the same name has been installed.
-   Installing an extension means executing an extended script file that creates a SQL entity, such as a function, data type, operator, and index-supported method.
-   Installing an extension requires the same permissions as creating its component objects. For most extensions, this means that the superuser or database owner's permissions are required. For subsequent permission checks and entities created by the extension script, the role that runs the  **CREATE EXTENSION**  command becomes the owner of the extension.

## Syntax<a name="section1374719912321"></a>

```
CREATE EXTENSION [ IF NOT EXISTS ] extension_name
[ WITH ] [ SCHEMA schema_name ]
[ VERSION version ]
[ FROM old_version ]
```

## Parameter Description<a name="section62781959163314"></a>

-   **IF NOT EXISTS**

    If an extension with the same name exists in the system, no error is reported. However, a message is displayed. Note that this parameter does not ensure that the existing extensions of the system are the same as those created by the script.


-   **extension\_name**

    Name of the extension to be installed.


-   **schema\_name**

    The extension instance is installed in this schema, and the extended content can be reinstalled. The specified schema must exist. If it is not specified, the extended control file does not specify a schema either. In this case, the default schema is used.

    >![](public_sys-resources/icon-caution.gif) **CAUTION:** 
    >
    >Extensions are not considered to be in any schema \(no restriction is posed on the name of extensions within the scope of a database\), but an extension instance belongs to a schema.


-   **version**

    Version of the extension to be installed, which can be written as an identifier or a string. The default version is specified in the extended control file.


-   **old\_version**

    If you want to upgrade the content that is not contained in the  **old style**  module, you must specify  **FROM old\_version**. This option makes  **CREATE EXTENSION**  run an installation script to install new content into the extension instead of creating an entity. Note that  **SCHEMA**  specifies the schema that includes these existing entities.


## Examples<a name="section14411351193419"></a>

Install the  **hstore**  extension in the current database.

```
CREATE EXTENSION hstore;
```
