# Usage Guidelines<a name="EN-US_TOPIC_0294749037"></a>

## Background<a name="en-us_topic_0059777429_s6837c9e0a8604641a9462dd6f720f91d"></a>

During installation, you are advised to use the  **-D**  parameter to invoke  **gs\_initdb**  to initialize a database. If a database needs to be initialized to rectify a fault, run  **gs\_initdb**.

-   Although  **gs\_initdb**  attempts to create the corresponding data directory, it may not have the permission to do so. Because in most cases, the parent directory is owned by user  **root**. To create a data directory, create an empty data directory as user  **root**  first and transfer the ownership of this directory to the database user using  **chown**.
-   **gs\_initdb**  is used to set the  **template1**  database and the settings become the default settings of other databases.
-   **gs\_initdb**  initializes the default locale and character set encoding of a database. The character set encoding, character encoding order \(**LC\_COLLATE**\), and character set classes \(**LC\_CTYPE**, for example, uppercase letter, lowercase letter, or digit\) can be set separately for a database when it is created.

## Procedure<a name="en-us_topic_0059777429_s393327da49844162934e6d4e4a38e432"></a>

1.  Log in to any host of the openGauss database as the OS user  **omm**.
2.  Plan the database directory.
    1.  Switch to the  **root**  user.

        ```
        su - root
        ```

    2.  Enter your username and password as prompted.

3.  Go to the  **/opt/gaussdb**  directory and create the  **data1**  directory where the DN resides.

    ```
    cd /opt/gaussdb
    mkdir data1
    ```

    1.  Allocate the ownership of the  **data1**  directory to user  **omm**, and  **dbgrp**  is the user group to whom user  **omm**  belongs to.

        ```
        chown omm:dbgrp data1
        ```

    2.  Log out as user  **root**.

        ```
        exit
        ```

4.  Run the  **gs\_initdb**  command to initialize the database and set password as prompted.

    ```
    gs_initdb /opt/gaussdb/data1 --nodename dn1
    Enter new system admin password:[PASSWORD]
    Enter it again:[PASSWORD]
    ```

    **gs\_initdb**  syntax:

    ```
    gs_initdb [OPTION]... [DATADIR]
    ```

    For parameters about  **OPTION**, see  [Command Reference](command-reference-2.md).


