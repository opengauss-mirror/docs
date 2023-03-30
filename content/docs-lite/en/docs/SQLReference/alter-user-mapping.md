# ALTER USER MAPPING<a name="EN-US_TOPIC_0289900415"></a>

## Function<a name="en-us_topic_0283137333_section38351127909"></a>

**ALTER USER MAPPING**  changes the definition of a user mapping.

## Precautions<a name="section1017451134717"></a>

If the  **password**  option is displayed, ensure that the  **usermapping.key.cipher**  and  **usermapping.key.rand**  files exist in the  *\\$GAUSSHOME***/bin**  directory of each node in openGauss. If the two files do not exist, use the  **gs_guc**  tool to generate them and use the  **gs_ssh**  tool to release them to the  *$GAUSSHOME***/bin**  directory on each node.

## Syntax<a name="en-us_topic_0283137333_section191931133103"></a>

```
ALTER USER MAPPING FOR { user_name | USER | CURRENT_USER | PUBLIC }
    SERVER server_name
    OPTIONS ( [ ADD | SET | DROP ] option ['value'] [, ... ] )
```

In  **OPTIONS**,  **ADD**,  **SET**, and  **DROP**  are operations to be performed. If these operations are not specified,  **ADD**  operations will be performed by default.  **option**  and  **value**  are the parameters and values of the corresponding operation.

## Parameter Description<a name="en-us_topic_0283137333_section116361638401"></a>

-   **user\_name**

    Specifies the username of the mapping.

    CURRENT\_USER and USER match the name of the current user. PUBLIC is used to match all current and future user names in the system.

-   **server\_name**

    Specifies name of the server to which the user is mapped.

-   **OPTIONS**

    Changes an option for the user mapping. The new option overwrites any previously specified option.  **ADD**,  **SET**, and  **DROP**  are operations to be performed. If the operation is not set explicitly,  **ADD**  is used. The option name must be unique and will be validated with the foreign data wrapper of the server.

    -   Options supported by  **oracle\_fdw**  are as follows:
        -   **user**

            Oracle server username.

        -   **password**

            Password of the Oracle user.

    -   Options supported by  **mysql\_fdw**  are as follows:
        -   **username**

            Username of the MySQL server or MariaDB.

        -   **password**

            User password of the MySQL server or MariaDB.

    -   Options supported by  **postgres\_fdw**  are as follows:
        -   **user**

            Username of the remote openGauss database.

        -   **password**

            User password of the remote openGauss database.




## Helpful Links<a name="en-us_topic_0283137333_section9697148408"></a>

[CREATE USER MAPPING](create-user-mapping.md)  and  [DROP USER MAPPING](drop-user-mapping.md)

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>In the Lite scenario, openGauss provides this syntax, but the USER MAPPING functions are unavailable.
