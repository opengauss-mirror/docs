# ALTER SERVER<a name="EN-US_TOPIC_0289900400"></a>

## Function<a name="en-us_topic_0283136932_section7100616165720"></a>

Adds, modifies, or deletes parameters of an existing server. You can query existing servers from the **pg\_foreign\_server** system catalog.

## Precautions<a name="en-us_topic_0283136932_section1175222145715"></a>

-   This section describes only the new syntax of Dolphin. The original syntax of openGauss is not deleted or modified.
-   Compared with the original openGauss, Dolphin modifies the `ALTER SERVER` syntax as follows:
    1. If **fdw\_name** of the modified server is set to **mysql\_fdw**, the following **option** values are added: DATABASE, USER, PASSWORD, SOCKET, and OWNER.
    2. If **fdw\_name** of the modified server is set to **mysql\_fdw**, no operation is specified, and the **option** value of the server already exists, then the operation is set to **SET**.

## Syntax<a name="en-us_topic_0283136932_section19393201035713"></a>

-   Change the parameters for a foreign server.

```
 ALTER SERVER server_name [ VERSION 'new_version' ]   
      [ OPTIONS ( {[ ADD | SET | DROP ] option ['value']} [, ... ] ) ];
```

-   Change the name of a foreign server.

    ```
    ALTER SERVER server_name     
       RENAME TO new_name;
    ```


## Parameter Description<a name="en-us_topic_0283136932_section284720213578"></a>

-   **OPTIONS**

    Specifies options for the server. **ADD**, **SET**, and **DROP** are operations to be performed. If the operation is not set explicitly, **ADD** is used. The option name must be unique, and the name and value are also validated with the foreign data wrapper library of the server.

    -   The options supported by mysql\_fdw are as follows:
        -   **host** \(default value: **127.0.0.1**\)

            IP address of the MySQL server or MariaDB.

        -   **port** \(default value: **3306**\)

            Listening port number of the MySQL server or MariaDB.

        -   **user** \(default value: empty\)

            User name for connecting to MySQL Server or MariaDB. If this option is specified and the user mapping from the current user to the specified server does not exist, openGauss automatically creates the user mapping from the current user to the new server. If this option is specified and the user mapping from the current user to the specified server already exists, openGauss modifies the **option** value of the user mapping.

        -   **password** \(default value: empty\)

            Password for connecting to MySQL Server or MariaDB. If this option is specified and the user mapping from the current user to the specified server does not exist, openGauss automatically creates the user mapping from the current user to the new server. If this option is specified and the user mapping from the current user to the specified server already exists, openGauss modifies the **option** value of the user mapping.

        -   **database** \(default value: empty\)

            This option has no actual meaning and is used only for syntax compatibility. You can specify the database to be connected to MySQL Server or MariaDB by referring to [CREATE FOREIGN TABLE](../SQLReference/create-foreign-table.md) and [ALTER FOREIGN TABLE](../SQLReference/alter-foreign-table.md).

        -   **owner** \(default value: empty\)

            This option has no actual meaning and is used only for syntax compatibility.

        -   **socket** \(default value: empty\)

            This option has no actual meaning and is used only for syntax compatibility.

## Examples<a name="section6372437377"></a>

Modify a server.

```
-- The user mapping from the current user to the specified server does not exist.
openGauss=# alter server server_test options(user 'my_user', password 'mypassword');
WARNING:  USER MAPPING for current user to server server_test created.
ALTER SERVER

-- The user mapping from the current user to the specified server already exists.
openGauss=# alter server server_test options(port '3308', user 'my_user');
WARNING:  USER MAPPING for current user to server server_test altered.
ALTER SERVER
```


## Helpful Links<a name="en-us_topic_0283136932_section13898752175613"></a>

[CREATE SERVER](dolphin-create-server.md) and [DROP SERVER](../SQLReference/drop-server.md)
