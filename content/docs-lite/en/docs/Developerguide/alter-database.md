# ALTER DATABASE<a name="EN-US_TOPIC_0289900461"></a>

## Function<a name="en-us_topic_0283136981_en-us_topic_0237122055_en-us_topic_0059779247_sbb9c79973fbf4b4b8f8e8355b0f67f63"></a>

**ALTER DATABASE**  modifies a database, including its name, owner, connection limitation, and  object isolation.

## Precautions<a name="en-us_topic_0283136981_en-us_topic_0237122055_en-us_topic_0059779247_sb8bbb55d049b42e688a2e152d2f6c737"></a>

-   Only the database owner or a user granted with the ALTER permission can run the  **ALTER DATABASE**  command. The system administrator has this permission by default. The following is permission constraints depending on attributes to be modified:
    -   To modify the database name, you must have the  **CREATEDB**  permission.
    -   To modify a database owner, you must be a database owner or system administrator and a member of the new owner role, with the  **CREATEDB**  permission.
    -   To modify the default tablespace of a database, a user must have the permission to create a tablespace. This statement physically migrates tables and indexes in a default tablespace to a new tablespace. Note that tables and indexes outside the default tablespace are not affected.

-   You are not allowed to rename a database in use. To rename it, connect to another database.

## Syntax<a name="en-us_topic_0283136981_en-us_topic_0237122055_en-us_topic_0059779247_s2eca2e2a5fc04ac798bbdf1dce3e7303"></a>

-   Modify the maximum number of connections to the database.

    ```
    ALTER DATABASE database_name 
        [ [ WITH ] CONNECTION LIMIT connlimit ];
    ```

-   Rename the database.

    ```
    ALTER DATABASE database_name 
        RENAME TO new_name;
    ```

-   Change the database owner.

    ```
    ALTER DATABASE database_name 
        OWNER TO new_owner;
    ```

-   Change the default tablespace of the database.

    ```
    ALTER DATABASE database_name 
        SET TABLESPACE new_tablespace;
    ```

-   Modify the session parameter value of the database.

    ```
    ALTER DATABASE database_name 
        SET configuration_parameter { { TO | = } { value | DEFAULT } | FROM CURRENT };
    ```

-   Reset the database configuration parameter.

    ```
    ALTER DATABASE database_name RESET 
        { configuration_parameter | ALL };
    ```


-   Modify the object isolation attribute of the database.

    ```
    ALTER DATABASE database_name [ WITH ] { ENABLE | DISABLE } PRIVATE OBJECT;
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   To modify the object isolation attribute of a database, the database must be connected. Otherwise, the modification will fail.
    >-   For a new database, the object isolation attribute is disabled by default. After this attribute is enabled, common users can view only the objects \(such as tables, functions, views, and columns\) that they have the permission to access. This attribute does not take effect for administrators. After this attribute is enabled, administrators can still view all database objects.


## Parameter Description<a name="en-us_topic_0283136981_en-us_topic_0237122055_en-us_topic_0059779247_s4d6b72484e3b43969af25757fda7ad81"></a>

-   **database\_name**

    Specifies the name of the database whose attributes are to be modified.

    Value range: a string. It must comply with the naming convention rule.

-   **connlimit**

    Specifies the maximum number of concurrent connections that can be made to this database \(excluding administrators' connections\).

    Value range: The value must be an integer, preferably from 1 to 50. The default value  **-1**  indicates that there is no restriction on the number of concurrent connections.

-   **new\_name**

    Specifies the new name of a database.

    Value range: a string. It must comply with the naming convention rule.

-   **new\_owner**

    Specifies the new owner of a database.

    Value range: a string. It must be a valid username.

-   **new\_tablespace**

    Specifies the new default tablespace of a database. The tablespace exists in the database. The default tablespace is  **pg\_default**.

    Value range: a string. It must be a valid tablespace name.

-   **configuration\_parameter**

    **value**

    Sets a specified database session parameter to a specified value. If the value is  **DEFAULT**  or  **RESET**, the default setting is used in the new session.  **OFF**  closes the setting.

    Value range: a string

    -   DEFAULT
    -   OFF
    -   RESET

-   **FROM CURRENT**

    Sets the value of the database based on the current connected session.

-   **RESET configuration\_parameter**

    Resets the specified database session parameter.

-   **RESET ALL**

    Resets all database session parameters.


>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   Modify the default tablespace of a database by moving the table or index in the old tablespace into the new tablespace. This operation does not affect the tables or indexes in other non-default tablespaces.
>-   The modified database session parameter values will take effect in the next session.

## Examples<a name="en-us_topic_0283136981_en-us_topic_0237122055_en-us_topic_0059779247_sb089bcdb51bd4932a2967c246217d29e"></a>

See  [Examples](create-database.md#en-us_topic_0283137050_en-us_topic_0237122099_en-us_topic_0059778277_s6be7b8abbb4b4aceb9dae686434d672c)  in  **CREATE DATABASE**.

## Helpful Links<a name="en-us_topic_0283136981_en-us_topic_0237122055_en-us_topic_0059779247_saa1e5193215b4927989f304541d2ecbd"></a>

[CREATE DATABASE](create-database.md)  and  [DROP DATABASE](drop-database.md)

