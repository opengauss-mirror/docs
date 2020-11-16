# CREATE SERVER<a name="EN-US_TOPIC_0272283420"></a>

## Function<a name="section1087614114391"></a>

**CREATE SERVER**  defines a new foreign server.

## Syntax<a name="section14553175913395"></a>

```
CREATE SERVER server_name
    FOREIGN DATA WRAPPER fdw_name
    OPTIONS ( { option_name ' value ' } [, ...] ) ;
```

## Parameter Description<a name="section183121377402"></a>

-   **server\_name**

    Specifies the server name.

    Value range: a string containing no more than 63 characters

-   **fdw\_name**

    Specifies the name of the foreign data wrapper.

    Value range: oracle\_fdw, mysql\_fdw, postgres\_fdw, mot\_fdw

-   **OPTIONS \(  \{ option\_name ' value '  \}  \[, ...\] \)**

    Specifies options for the server. These options typically define the connection details of the server, but the actual names and values depend on the foreign data wrapper of the server.

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

    -   The options supported by postgres\_fdw are the same as those supported by libpq. For details, see  _Connection Character Strings_. Note that the following options cannot be set:
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


## Helpful Links<a name="section3901738174011"></a>

[ALTER SERVER](alter-server.md)  and  [DROP SERVER](drop-server.md)

