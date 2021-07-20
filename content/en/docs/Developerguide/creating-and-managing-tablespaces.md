# Creating and Managing Tablespaces<a name="EN-US_TOPIC_0242370183"></a>

## Background<a name="en-us_topic_0237120297_en-us_topic_0059778849_saaab96d21e01450bb4a62113d37a03c7"></a>

The administrator can use tablespaces to control the layout of disks where a database is installed. This has the following advantages:

-   If the initial disk partition or volume allocated to the database is full and the space cannot be logically increased, you can create and use tablespaces in other partitions until the space is reconfigured.

-   Tablespaces allow the administrator to distribute data based on the schema of database objects, improving system performance.
    -   A frequently used index can be placed in a disk having stable performance and high computing speed, such as a solid device.
    -   A table that stores archived data and is rarely used or has low performance requirements can be placed in a disk with a slow computing speed.


-   The administrator can use tablespaces to set the maximum available disk space. In this way, when a partition is shared with other data, tablespaces will not occupy excessive space in the partition.
-   Each tablespace corresponds to a file system directory. Assume that  _Database node data directory_**/pg\_location/mount1/path1**  is an empty directory for which users have read and write permissions.

    If the tablespace quota management is used, the performance may deteriorate by about 30%.  **MAXSIZE**  specifies the maximum quota for each database node. The deviation must be within 500 MB. Determine whether to set a tablespace to its maximum size as required.


## Procedure<a name="en-us_topic_0237120297_en-us_topic_0059778849_se40504a685a14d718e41d4f669a4ddca"></a>

-   Create a tablespace.
    1.  Run the following command to create user  **jack**:

        ```
        CREATE USER jack IDENTIFIED BY 'xxxxxxxxx';
        ```

        If the following information is displayed, the user has been created:

        ```
        CREATE ROLE
        ```

    2.  Run the following command to create a tablespace:

        ```
        CREATE TABLESPACE fastspace RELATIVE LOCATION 'tablespace/tablespace_1';
        ```

        If the following information is displayed, the tablespace has been created:

        ```
        CREATE TABLESPACE
        ```

        **fastspace**  is the new tablespace, and  _Database node data directory_**/pg\_location/tablespace/tablespace\_1**  is an empty directory for which users have read and write permissions.

    3.  A database system administrator can run the following command to grant the permission of accessing the  **fastspace**  tablespace to user  **jack**:

        ```
        GRANT CREATE ON TABLESPACE fastspace TO jack;
        ```

        If the following information is displayed, the permission has been assigned:

        ```
        GRANT
        ```



-   Create an object in a tablespace.

    If you have the  **CREATE**  permission for the tablespace, you can create database objects in the tablespace, such as tables and indexes.

    Take creating a table as an example:

    -   Method 1: Run the following command to create a table in a specified tablespace:

        ```
        CREATE TABLE foo(i int) TABLESPACE fastspace;
        ```

        If the following information is displayed, the table has been created:

        ```
        CREATE TABLE
        ```

    -   Method 2: Use  **set default\_tablespace**  to set the default tablespace and then create a table:

        ```
        postgres=# SET default_tablespace = 'fastspace';
        SET
        postgres=# CREATE TABLE foo2(i int);
        CREATE TABLE
        ```

        In this example,  **fastspace**  is the default tablespace, and  **foo2**  is the created table.


-   Use one of the following methods to query a tablespace:
    -   Method 1: Check the  **pg\_tablespace**  system catalog. Run the following command to view all the tablespaces defined by the system and users:

        ```
        SELECT spcname FROM pg_tablespace;
        ```

    -   Method 2: Run the following meta-command of the  **gsql**  program to query the tablespaces:

        ```
        \db
        ```


-   Query the tablespace usage.
    1.  Query the current usage of the tablespace.

        ```
        SELECT PG_TABLESPACE_SIZE('example');
        ```

        Information similar to the following is displayed:

        ```
         pg_tablespace_size 
        --------------------
                    2146304
        (1 row)
        ```

        **2146304**  is the size of the tablespace, and its unit is byte.

    2.  Calculate the tablespace usage.

        Tablespace usage rate =  **PG\_TABLESPACE\_SIZE**/Size of the disk where the tablespace resides


-   Modify a tablespace.

    Run the following command to rename tablespace  **fastspace**  to  **fspace**:

    ```
    postgres=# ALTER TABLESPACE fastspace RENAME TO fspace;
    ALTER TABLESPACE
    ```

-   Delete a tablespace and related data.
    -   Run the following command to delete user  **jack**:

        ```
        postgres=# DROP USER jack CASCADE;
        DROP ROLE
        ```

    -   Run the following commands to delete tables  **foo**  and  **foo2**:

        ```
        postgres=# DROP TABLE foo;
        postgres=# DROP TABLE foo2;
        ```

        If the following information is displayed, the tables have been deleted:

        ```
        DROP TABLE
        ```

    -   Run the following command to delete tablespace  **fspace**:

        ```
        postgres=# DROP TABLESPACE fspace;
        DROP TABLESPACE
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:**   
        >Only the tablespace owner or system administrator can delete a tablespace.  



