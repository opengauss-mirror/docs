# Usage Guide<a name="EN-US_TOPIC_0249632287"></a>

## Background<a name="en-us_topic_0237152413_en-us_topic_0059777429_s6837c9e0a8604641a9462dd6f720f91d"></a>

During installation, you are advised to use the  **-D**  parameter to invoke  **gs\_initdb**  to initialize a database. If a database needs to be initialized to rectify a fault, run  **gs\_initdb**.

-   Although  **gs\_initdb**  attempts to create the corresponding data directory, it may not have the permission to do so. Because in most cases, the parent directory is owned by user  **root**. To create a data directory, create an empty data directory as user  **root**  first and deliver the ownership of this directory to the database user using  **chown**.
-   **gs\_initdb**  is used to set the template1 database and the setting becomes the default setting of other databases.
-   **gs\_initdb**  initializes the default locale and character set encoding of a database. The character set encoding, character encoding sequence \(LC\_COLLATE\), and character set class \(LC\_CTYPE, such as uppercase letters, lowercase letters, and digits\) can be separately set for databases when you create them.

## Procedure<a name="en-us_topic_0237152413_en-us_topic_0059777429_s393327da49844162934e6d4e4a38e432"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Plan the database directory.
    1.  Switch to user  **root**.

        ```
        su - root
        ```

    2.  Enter the username and password as prompted.

3.  Go to the  **/opt/gaussdb**  directory and create the  **data1**  directory.

    ```
    cd /opt/gaussdb
    mkdir data1
    ```

    1.  Allocate the ownership of the  **data1**  directory to the database user omm. dbgrp is the user group that the omm belongs to.

        ```
        chown omm:dbgrp data1
        ```

    2.  Exit user  **root**.

        ```
        exit
        ```

4.  Run the  **gs\_initdb**  command to initialize the database.

    ```
    gs_initdb /opt/gaussdb/data1 -w "Gauss@123"
    ```

    **gs\_initdb**  syntax:

    ```
    gs_initdb [OPTION]... [DATADIR]
    ```

    For parameters about OPTION, see  [Command Reference](command-reference-1.md).


