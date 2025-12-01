# Creating and Managing Tablespaces<a name="EN-US_TOPIC_0289900987"></a>

## Background<a name="en-us_topic_0283137616_en-us_topic_0237120297_en-us_topic_0059778849_saaab96d21e01450bb4a62113d37a03c7"></a>

The administrator can use tablespaces to control the layout of disks where a database is installed. This has the following advantages:

-   If the initial disk partition or volume allocated to the database is full and the space cannot be logically increased, you can create and use tablespaces in other partitions until the space is reconfigured.

-   Tablespaces allow the administrator to distribute data based on the schema of database objects, improving system performance.
    -   A frequently used index can be placed in a disk having stable performance and high computing speed, such as a solid device.
    -   A table that stores archived data and is rarely used or has low performance requirements can be placed in a disk with a slow computing speed.


-   The administrator can use tablespaces to set the maximum available disk space. In this way, when a partition is shared with other data, tablespaces will not occupy excessive space in the partition.
-   Each tablespace corresponds to a file system directory. Assume that  _Database node data directory_**/pg\_location/mount1/path1**  is an empty directory for which users have read and write permissions.

    If the tablespace quota management is used, the performance may deteriorate by about 30%.  **MAXSIZE**  specifies the maximum quota for each database node. The deviation must be within 500 MB. Determine whether to set a tablespace to its maximum size as required.


openGauss provides two tablespaces:  **pg\_default**  and  **pg\_global**.

-   Default tablespace  **pg\_default**: stores non-shared system tables, user tables, user table indexes, temporary tables, temporary table indexes, and internal temporary tables. The corresponding storage directory is the base directory in the instance data directory.
-   Shared tablespace  **pg\_global**: stores shared system tables. The corresponding storage directory is the base directory in the global data directory.

## Precautions<a name="section03301347122915"></a>

In scenarios such as HCS, you are not advised to use user-defined tablespaces. This is because user-defined tablespaces are usually used with storage media other than the main storage \(storage device where the default tablespace is located, such as a disk\) to isolate I/O resources that can be used by different services. In HCS scenarios, storage devices use standard configurations and do not have other available storage media. If the customized tablespace is not properly used, the system cannot run stably for a long time and the overall performance is affected. Therefore, you are advised to use the default tablespace.

## Procedure<a name="en-us_topic_0283137616_en-us_topic_0237120297_en-us_topic_0059778849_se40504a685a14d718e41d4f669a4ddca"></a>

-   Create a tablespace.
    1.  Run the following command to create user  **jack**:

        ```
        openGauss=# CREATE USER jack IDENTIFIED BY 'xxxxxxxxx';
        ```

        If the following information is displayed, the user has been created:

        ```
        CREATE ROLE
        ```

    2.  Run the following command to create a tablespace:

        ```
        openGauss=# CREATE TABLESPACE fastspace RELATIVE LOCATION 'tablespace/tablespace_1';
        ```

        If the following information is displayed, the tablespace has been created:

        ```
        CREATE TABLESPACE
        ```

        **fastspace**  is the new tablespace, and  _Database node data directory_**/pg\_location/tablespace/tablespace\_1**  is an empty directory for which users have read and write permissions.

    3.  A database system administrator can run the following command to grant the permission of accessing the  **fastspace**  tablespace to user  **jack**:

        ```
        openGauss=# GRANT CREATE ON TABLESPACE fastspace TO jack;
        ```

        If the following information is displayed, the permission has been assigned:

        ```
        GRANT
        ```



-   Create an object in a tablespace.

    If you have the CREATE permission on the tablespace, you can create database objects in the tablespace, such as tables and indexes.

    Take creating a table as an example:

    -   Method 1: Run the following command to create a table in a specified tablespace:

        ```
        openGauss=# CREATE TABLE foo(i int) TABLESPACE fastspace;
        ```

        If the following information is displayed, the table has been created:

        ```
        CREATE TABLE
        ```

    -   Method 2: Use  **set default\_tablespace**  to set the default tablespace and then create a table:

        ```
        openGauss=# SET default_tablespace = 'fastspace';
        SET
        openGauss=# CREATE TABLE foo2(i int);
        CREATE TABLE
        ```

        In this example,  **fastspace**  is the default tablespace, and  **foo2**  is the created table.


-   Use one of the following methods to query a tablespace:
    -   Method 1: Check the  **pg\_tablespace**  system catalog. Run the following command to view all the tablespaces defined by the system and users:

        ```
        openGauss=# SELECT spcname FROM pg_tablespace;
        ```

    -   Method 2: Run the following meta-command of the  **gsql**  program to query the tablespaces:

        ```
        openGauss=# \db
        ```


-   Query the tablespace usage.
    1.  Query the current usage of the tablespace.

        ```
        openGauss=# SELECT PG_TABLESPACE_SIZE('example');
        ```

        The following information is displayed:

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
    openGauss=# ALTER TABLESPACE fastspace RENAME TO fspace;
    ALTER TABLESPACE
    ```

-   Delete a tablespace and related data.
    -   Run the following command to delete user  **jack**:

        ```
        openGauss=# DROP USER jack CASCADE;
        DROP ROLE
        ```

    -   Run the following commands to delete tables  **foo**  and  **foo2**:

        ```
        openGauss=# DROP TABLE foo;
        openGauss=# DROP TABLE foo2;
        ```

        If the following information is displayed, the tables have been deleted:

        ```
        DROP TABLE
        ```

    -   Run the following command to delete tablespace  **fspace**:

        ```
        openGauss=# DROP TABLESPACE fspace;
        DROP TABLESPACE
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >Only the tablespace owner or system administrator can delete a tablespace.



