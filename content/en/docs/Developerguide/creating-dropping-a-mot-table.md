# Creating/Dropping a MOT Table<a name="EN-US_TOPIC_0260488075"></a>

Creating a Memory Optimized Table \(MOT\) is very simple. Only the create and drop table statements in MOT differ from the statements for disk-based tables in openGauss. The syntax of  **all other **commands for SELECT, DML and DDL are the same for MOT tables as for openGauss disk-based tables.

-   To create a MOT table

    ```
    create FOREIGN table test(x int) [server mot_server];
    ```

-   Always use the FOREIGN keyword to refer to MOT tables.
-   The \[server mot\_server\] part is optional when creating a MOT table because MOT is an integrated engine, not a separate server.
-   The above is an extremely simple example creating a table named  **test**  with a single integer column named  **x**. In the next section \(**Creating an Index**\) a more realistic example is provided.
-   To drop a MOT table named test

    ```
    drop FOREIGN table test;
    ```


For a description of the limitations of supported features for MOT tables, such as data types, see the  [SQL Coverage and Limitations](sql-coverage-and-limitations.md)  section.

