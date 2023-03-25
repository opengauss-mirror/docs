# Creating and Managing Databases<a name="EN-US_TOPIC_0289900988"></a>

## Prerequisites<a name="en-us_topic_0283136807_en-us_topic_0237120295_en-us_topic_0059779126_s82a10b03aef44f24a8b835912c58dd5b"></a>

Only the database system administrator or users granted with database creation permissions can create a database. For details about how to grant database creation permissions to a user, see  [Managing Users and Their Permissions](managing-users-and-their-permissions.md).

## Background<a name="en-us_topic_0283136807_en-us_topic_0237120295_en-us_topic_0059779126_s4b8e4eb214404dc8a2dfd174a7245290"></a>

-   openGauss has two default template databases  **template0**  and  **template1**  and a default user database  **postgres**. The default compatible database type of Postgres is O \(that is,  **DBCOMPATIBILITY**  is set to  **A**\). In this compatible type, empty strings are processed as null values.
-   **CREATE DATABASE**  creates a database by copying a template database \(**template0**  by default\). Do not use a client or any other tools to connect to or to perform operations on the template databases.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   The template database does not contain any user table. You can view the attributes of the template database in the  **PG\_DATABASE**  system catalog.
    >-   The  **template0**  template does not allow user connections. Only the initial user of the database and the system administrator can connect to  **template1**.

-   A database system consists of multiple databases. A client can connect to only one database at a time. Users cannot query data across databases. If one openGauss contains multiple databases, set the  **-d**  parameter to specify the database instance to be connected.

## Precautions<a name="en-us_topic_0283136807_en-us_topic_0237120295_en-us_topic_0059779126_section19939134010190"></a>

Assume that the database encoding is SQL\_ASCII. \(You can run the  **show server\_encoding;**  command to query the encoding used for storing data in the current database.\) If the database object name contains multi-byte characters \(such as Chinese\) or if the object name length exceeds the allowed maximum \(63 bytes\), the database truncates the last byte \(not the last character\) of the object name. In this case, half characters may appear.

To resolve this problem, you need to:

-   Ensure that the name of the data object does not exceed the maximum length.
-   Change the default database storage code set \(**server\_encoding**\) to UTF-8.
-   Exclude multi-byte characters from object names.
-   Ensure that no more than 128 databases are created \(recommended\).
-   If you fail to delete an object by specifying its name after truncation, specify its original name to delete it, or manually delete it from the system catalogs on each node.

## Procedure<a name="en-us_topic_0283136807_en-us_topic_0237120295_en-us_topic_0059779126_s2c34996198bd4ad8b9eb15de09d68bcb"></a>

1.  Run the following command to create a database named  **db\_tpcc**:

    ```
    openGauss=# CREATE DATABASE db_tpcc;
    CREATE DATABASE
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   Database names must comply with the general naming convention rules of SQL identifiers. The current role automatically becomes the owner of this new database.
    >-   If a database system is used to support independent users and projects, store them in different databases.
    >-   If the projects or users are associated with each other and share resources, store them in one database. However, you can divide them into different schemas. A schema is a logical structure, and the access permission for a schema is controlled by the permission system module.
    >-   A database name contains a maximum of 63 bytes and the excessive bytes at the end of the name will be truncated by the server. You are advised to specify a database name no longer than 63 bytes when you create a database.

2.  View databases.
    -   Run the  **\\l**  meta-command to view the database list of the database system.

        ```
        openGauss=# \l
        ```

    -   Run the following command to query the database list in the  **pg\_database**  system catalog:

        ```
        openGauss=# SELECT datname FROM pg_database;
        ```

3.  Modify the database.

    You can modify database configuration such as the database owner, name, and default settings.

    -   Run the following command to set the default search path for the database:

        ```
        openGauss=# ALTER DATABASE db_tpcc SET search_path TO pa_catalog,public;
        ALTER DATABASE
        ```

    -   Run the following command to rename the database:

        ```
        openGauss=# ALTER DATABASE db_tpcc RENAME TO human_tpcds;
        ALTER DATABASE
        ```

4.  Delete the database.

    You can run the  **[DROP DATABASE](drop-database.md)**  command to delete a database. This command deletes the system catalog of the database and the database directory on the disk. Only the database owner or system administrator can delete a database. A database accessed by users cannot be deleted. You need to connect to another database before deleting this database.

    Run the following command to delete the database:

    ```
    openGauss=# DROP DATABASE human_tpcds;
    DROP DATABASE
    ```


