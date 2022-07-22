# CREATE SERVER<a name="EN-US_TOPIC_0289899991"></a>

## Function<a name="en-us_topic_0283137586_section1087614114391"></a>

**CREATE SERVER**  defines a new foreign server.

## Syntax<a name="en-us_topic_0283137586_section14553175913395"></a>

```
CREATE SERVER server_name
    FOREIGN DATA WRAPPER fdw_name
    OPTIONS ( { option_name ' value ' } [, ...] ) ;
```

## Parameter Description<a name="en-us_topic_0283137586_section183121377402"></a>

-   **server\_name**

    Specifies the server name.

    Value range: a string containing no more than 63 characters

-   **fdw\_name**

    Specifies the name of the foreign data wrapper.

    Value range: **dist\_fdw**, **hdfs\_fdw**, **log\_fdw**, **file\_fdw**, **mot\_fdw**, **oracle\_fdw**, **mysql\_fdw**, and **postgres\_fdw**

-   **OPTIONS \(  \{ option\_name ' value '  \}  \[, ...\] \)**

    Specifies options for the server. These options typically define the connection details of the server, but the actual names and values depend on the foreign data wrapper of the server.

    -   Options supported by  **oracle\_fdw**  are as follows:
        -   **dbserver**

            Connection string of the remote Oracle database.

        -   **isolation\_level**  \(default value:  **serializable**\)

            Oracle database transaction isolation level.

            Value range: serializable, read\_committed, and read\_only

    -   Options supported by mysql\_fdw are as follows:
        -   **host**  \(default value:  **127.0.0.1**\)

            IP address of the MySQL server or MariaDB.

        -   **port**  \(default value:  **3306**\)

            Listening port number of the MySQL server or MariaDB.

    -   The options supported by postgres\_fdw are the same as those supported by libpq. For details, see  _Connection Character Strings_. Note that the following options cannot be set:
        -   **user**  and  **password**

            The username and password are specified when the user mapping is created.

        -   **client\_encoding**

            The encoding mode of the local server is automatically obtained and set.

        -   **application\_name**

            This option is always set to  **postgres\_fdw**.

    -   Specifies the parameters for the foreign server. The detailed parameter description is as follows:

        -   encrypt

            Specifies whether data is encrypted. This parameter is available only when  **type**  is  **OBS**. The default value is  **on**.

            Value range:

            -   **on**  indicates that data is encrypted and HTTPS is used for communication.
            -   **off**  indicates that data is not encrypted and HTTP is used for communication.

        -   access\_key

            Specifies the access key \(AK\) \(obtained by users from the OBS console\) used for the OBS access protocol. When you create a foreign table, the AK value is encrypted and saved to the metadata table of the database. This parameter is available only when  **type**  is set to  **OBS**.

        -   secret\_access\_key

            Specifies the secret key \(SK\) value \(obtained by users from the OBS console\) used for the OBS access protocol. When you create a foreign table, the SK value is encrypted and saved to the metadata table of the database. This parameter is available only when  **type**  is set to  **OBS**.

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >In the Lite scenario, openGauss does not support the change of  **obs\_server**  contained in the  **CREATE SERVER**  syntax.



In addition to the connection parameters supported by libpq, the following options are provided:

-   **use\_remote\_estimate**

    Controls whether  **postgres\_fdw**  issues the EXPLAIN command to obtain the estimated run time. The default value is  **false**.

-   **fdw\_startup\_cost**

    Estimates the startup time required for a foreign table scan, including the time to establish a connection, analyzes the request at the remote server, and generates a plan. The default value is  **100**.

-   **fdw\_typle\_cost**

    Specifies the additional consumption when each tuple is scanned on a remote server. The value specifies the extra consumption of data transmission between servers. The default value is  **0.01**.


## Examples<a name="section6372437377"></a>

Create a server.

```
openGauss=* create server my_server foreign data wrapper log_fdw;
CREATE SERVER
```

## Helpful Links<a name="en-us_topic_0283137586_section3901738174011"></a>

[ALTER SERVER](alter-server.md)  and  [DROP SERVER](drop-server.md)

