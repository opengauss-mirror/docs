# CREATE USER MAPPING<a name="EN-US_TOPIC_0289899891"></a>

## Function<a name="en-us_topic_0283136906_section55185111610"></a>

**CREATE USER MAPPING**  defines a new mapping from a user to a foreign server.

## Precautions<a name="section720610212575"></a>

If the  **password**  option is displayed, ensure that the  **usermapping.key.cipher**  and  **usermapping.key.rand**  files exist in the  _$GAUSSHOME_**/bin**  directory of each node in openGauss. If the two files do not exist, use the  **gs\\\_guc**  tool to generate them and use the  **gs\\\_ssh**  tool to release them to the  _$GAUSSHOME_**/bin**  directory on each node in openGauss.

## Syntax<a name="en-us_topic_0283136906_section109016567611"></a>

```
CREATE USER MAPPING FOR { user_name | USER | CURRENT_USER | PUBLIC }
    SERVER server_name
    [ OPTIONS ( option 'value' [ , ... ] ) ]
```

## Parameter Description<a name="en-us_topic_0283136906_section92521051372"></a>

-   **user\_name**

    Specifies the name of an existing user to map to a foreign server.

    CURRENT\_USER and USER match the name of the current user. When PUBLIC is specified, a public mapping is created and used when no mapping for a particular user is available.

-   **server\_name**

    Specifies the name of the existing server for which a user mapping will be created.

-   **OPTIONS \(  \{ option\_name ' value '  \}  \[, ...\] \)**

    Specifies options for user mapping. These options typically define the actual user name and password for this mapping. The option name must be unique. The allowed option names and values are related to the foreign data wrapper of the server.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   User passwords are encrypted and stored in the system catalog  [PG\_USER\_MAPPING](../DatabaseReference/pg_user_mapping.md). During the encryption,  **usermapping.key.cipher**  and  **usermapping.key.rand**  are used as the encryption password file and encryption factor. Before using the tool for the first time, run the following command to create the two files, save the files to the  _$GAUSSHOME_**/bin**  directory on each node, and ensure that you have the read permission on the files.  **gs\_ssh**  helps you quickly place files in the specified directory of each node.
    >    ```
    >    gs_ssh -c "gs_guc generate -o usermapping -S default -D $GAUSSHOME/bin"
    >    ```
    >-   If the  **-S**  parameter is set to default, a password is randomly generated. You can also specify a password for the  **-S**  parameter to ensure the security and uniqueness of the generated password file. You do not need to save or memorize the password. For details about other parameters, see the description of the  **gs\_guc**  tool in the "Tool Reference".

    -   Options supported by oracle\_fdw are as follows:
        -   user

            Oracle server username.

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

            >![](public_sys-resources/icon-note.gif) **NOTE:** 
            >The password entered by the user is encrypted in the openGauss background to ensure security. The key file required for encryption must be generated using the  **gs\_guc**  tool and released to the  _$GAUSSHOME_**/bin**  directory of each node in openGauss using the  **gs\_ssh**  tool. The password cannot contain the prefix 'encryptOpt'. Otherwise, it is considered as encrypted ciphertext.




## Helpful Links<a name="en-us_topic_0283136906_section1513111133713"></a>

[ALTER USER MAPPING](alter-user-mapping.md)  and  [DROP USER MAPPING](drop-user-mapping.md)

