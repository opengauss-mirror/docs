# ALTER SERVER<a name="EN-US_TOPIC_0289900400"></a>

## Function<a name="en-us_topic_0283136932_section7100616165720"></a>

**ALTER SERVER**  adds, modifies, or deletes the parameters of an existing server. You can query existing servers from the  **pg\_foreign\_server**  system catalog.

## Precautions<a name="en-us_topic_0283136932_section1175222145715"></a>

Only the server owner or a user granted with the ALTER permission can run the  **ALTER SERVER**  command. The system administrator has this permission by default. To modify a server owner, you must be the server owner or system administrator and a member of the new owner role.

## Syntax<a name="en-us_topic_0283136932_section19393201035713"></a>

-   Change the parameters for a foreign server.

```
 ALTER SERVER server_name [ VERSION 'new_version' ]   
      [ OPTIONS ( {[ ADD | SET | DROP ] option ['value']} [, ... ] ) ];
```

    In  **OPTIONS**,  **ADD**,  **SET**, and  **DROP**  are operations to be performed. If these operations are not specified,  **ADD**  operations will be performed by default.  **option**  and  **value**  are the parameters of the corresponding operation.


-   Change the name of a foreign server.

    ```
    ALTER SERVER server_name     
       RENAME TO new_name;
    ```


## Parameter Description<a name="en-us_topic_0283136932_section284720213578"></a>

-   **server\_name**

    Specifies the name of the server to be modified.

-   **new\_version**

    Specifies the new version of the server.

-   **OPTIONS**

    Change options of the server.  **ADD**,  **SET**, and  **DROP**  are operations to be performed. If the operation is not set explicitly,  **ADD**  is used. The option name must be unique, and the name and value are also validated with the foreign data wrapper library of the server.

    -   Options supported by oracle\_fdw are as follows:
        -   **dbserver**

            Connection string of the remote Oracle database.

        -   **isolation\_level**  \(default value:  **serializable**\)

            Oracle database transaction isolation level.

            Value range: serializable, read\_committed, read\_only

    -   Options supported by mysql\_fdw are as follows:
        -   **host**  \(default value:  **127.0.0.1**\)

            IP address of the MySQL server or MariaDB.

        -   **port**  \(default value:  **3306**\)

            Listening port number of the MySQL server or MariaDB.

    -   The options supported by postgres\_fdw are the same as those supported by libpq. For details, see  [Connection Characters](../DeveloperGuide/link-parameters-libpq.md). Note that the following options cannot be modified:
        -   **user**  and  **password**

            The user name and password are specified when the user mapping is created.

        -   **client\_encoding**

            The encoding mode of the local server is automatically obtained and set.

        -   **application\_name**

            This option is always set to  **postgres\_fdw**.


    In addition to the connection parameters supported by libpq, the following options are provided:

    -   **use\_remote\_estimate**

        Controls whether postgres\_fdw issues the EXPLAIN command to obtain the estimated run time. The default value is  **false**.

    -   **fdw\_startup\_cost**

        Estimates the startup time required for a foreign table scan, including the time to establish a connection, analyze the request at the remote server, and generate a plan. The default value is  **100**.

    -   **fdw\_typle\_cost**

        Specifies the additional consumption when each tuple is scanned on a remote server. The value specifies the extra consumption of data transmission between servers. The default value is  **0.01**.



-   **new\_name**

    Specifies the new name of the server.


## Helpful Links<a name="en-us_topic_0283136932_section13898752175613"></a>

[CREATE SERVER ](create-server.md)  and  [DROP SERVER](drop-server.md)

