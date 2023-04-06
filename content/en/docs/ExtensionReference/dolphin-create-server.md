# CREATE SERVER<a name="ZH-CN_TOPIC_0289899991"></a>

## Function<a name="en-us_topic_0283137586_section1087614114391"></a>

Defines a new foreign server.

## Precautions<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-   This section describes only the new syntax of Dolphin. The original syntax of openGauss is not deleted or modified.
-   Compared with the original openGauss, Dolphin modifies the `CREATE SERVER` syntax as follows:
    1. The optional value **mysql** of fdw\_name is added. Its function is the same as that of mysql\_fdw.
    2. If **fdw\_name** is set to **mysql\_fdw**, the following **OPTIONS** values are added: DATABASE, USER, PASSWORD, SOCKET, and OWNER.

## Syntax<a name="en-us_topic_0283137586_section14553175913395"></a>

```
CREATE SERVER server_name
    FOREIGN DATA WRAPPER fdw_name
    OPTIONS ( { option_name ' value ' } [, ...] ) ;
```

## Parameter Description<a name="en-us_topic_0283137586_section183121377402"></a>

-   **fdw\_name**

    Specifies the name of the foreign data wrapper.

    Value range: dist\_fdw, hdfs\_fdw, log\_fdw, file\_fdw, mot\_fdw, oracle\_fdw, mysql\_fdw, mysql, postgres\_fdw.

-   **OPTIONS \(  \{ option\_name ' value '  \}  \[, ...\] \)**

    Specifies options for the server. These options typically define the connection details of the server, but the actual names and values depend on the foreign data wrapper of the server.

    -   The options supported by **mysql\_fdw** are as follows:
        -   **host** \(default value: **127.0.0.1**\)

            IP address of the MySQL server or MariaDB.

        -   **port** \(default value: **3306**\)

            Listening port number of the MySQL server or MariaDB.

        -   **user** \(default value: empty\)

            User name for connecting to MySQL Server or MariaDB. If this option is specified, openGauss automatically creates a user mapping from the current user to the new server.

        -   **password** \(default value: empty\)

            Password for connecting to MySQL Server or MariaDB. If this option is specified, openGauss automatically creates a user mapping from the current user to the new server.

        -   **database** \(default value: empty\)

            This option has no actual meaning and is used only for syntax compatibility. You can specify the database to be connected to MySQL Server or MariaDB by referring to [CREATE FOREIGN TABLE](create-foreign-table.md) and [ALTER FOREIGN TABLE](alter-foreign-table.md).

        -   **owner** \(default value: empty\)

            This option has no actual meaning and is used only for syntax compatibility.

        -   **socket** \(default value: empty\)

            This option has no actual meaning and is used only for syntax compatibility.

## Examples<a name="section6372437377"></a>

Create a server.

```
openGauss=# create server server_test foreign data wrapper mysql options(host '192.108.0.1', port '3306', user 'foreign_server_test',
password 'password@123', database 'my_db', owner 'test_user');
WARNING:  Option database will be deprecated for CREATE SERVER.
WARNING:  Option owner will be deprecated for CREATE SERVER.
WARNING:  USER MAPPING for current user to server server_test created.
CREATE SERVER
```

## Helpful Links<a name="en-us_topic_0283137586_section3901738174011"></a>

[ALTER SERVER](dolphin-alter-server.md), [DROP SERVER](drop-server.md)
