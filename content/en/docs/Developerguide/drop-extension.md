# DROP EXTENSION<a name="EN-US_TOPIC_0000001127565047"></a>

## Function<a name="section173831846163116"></a>

**DROP EXTENSION**  deletes an extension.

## Precautions<a name="section786041713618"></a>

-   **DROP EXTENSION**  deletes an extension from the database. When you delete an extension, the components that make up the extension are also deleted.
-   The  **DROP EXTENSION**  command can be used only by the owner of the extension.

## Syntax<a name="section1374719912321"></a>

```
DROP EXTENSION [ IF EXISTS ] name [, ...] [ CASCADE | RESTRICT ]
```

## Parameter Description<a name="section62781959163314"></a>

-   **IF EXISTS**

    If the  **IF EXISTS**  parameter is used and the extension does not exist, no error is reported. Instead, a  **NOTICE**  is generated.

-   **name**

    Name of an installed extension.

-   **CASCADE**

    Automatically deletes objects that depend on the extension.

-   **RESTRICT**

    If any object depends on an extension, the extension cannot be deleted \(unless all its member objects and other extension objects are deleted at a time using the  **DROP**  command\). This is a default processing.


## Examples<a name="section14411351193419"></a>

Delete extension  **hstore**  from the current database.

```
DROP EXTENSION hstore;
```

In the current database, if an object that uses  **hstore**  exists, this command will fail. For example, a column in any table is of the  **hstore**  type. Adding the  **CASCADE**  option can forcibly delete the extension and objects that depend on it.

