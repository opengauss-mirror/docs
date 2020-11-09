# CREATE USER MAPPING<a name="EN-US_TOPIC_0272283421"></a>

## Function<a name="section55185111610"></a>

**CREATE USER MAPPING**  defines a new mapping from a user to a foreign server.

## Syntax<a name="section109016567611"></a>

```
CREATE USER MAPPING FOR { user_name | USER | CURRENT_USER | PUBLIC }
    SERVER server_name
    [ OPTIONS ( option 'value' [ , ... ] ) ]
```

## Parameter Description<a name="section92521051372"></a>

-   **user\_name**

    Specifies the name of an existing user to map to a foreign server.

    CURRENT\_USER and USER match the name of the current user. When PUBLIC is specified, a public mapping is created and used when no mapping for a particular user is available.

-   **server\_name**

    Specifies the name of the existing server for which a user mapping will be created.

-   **OPTIONS \(  \{ option\_name ' value '  \}  \[, ...\] \)**

    Specifies options for user mapping. These options typically define the actual user name and password for this mapping. The option name must be unique. The allowed option names and values are related to the foreign data wrapper of the server.

    -   Options supported by oracle\_fdw are as follows:
        -   user

            Oracle server user name.

        -   password

            Password of the Oracle user.

    -   Options supported by mysql\_fdw are as follows:
        -   username

            User name of the MySQL server or MariaDB.

        -   password

            User password of the MySQL server or MariaDB.

    -   Options supported by postgres\_fdw are as follows:
        -   user

            User name of the remote openGauss database.

        -   password

            User password of the remote openGauss database.




## Helpful Links<a name="section1513111133713"></a>

[ALTER USER MAPPING](alter-user-mapping.md)  and  [DROP USER MAPPING](drop-user-mapping.md)

