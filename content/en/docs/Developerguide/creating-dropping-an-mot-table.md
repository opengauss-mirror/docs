# Creating/Dropping an MOT Table<a name="EN-US_TOPIC_0270171478"></a>

Creating a Memory Optimized Table \(MOT\) is very simple. Only the create and drop table statements in MOT differ from the statements for disk-based tables in openGauss. The syntax of  **all other**  commands for SELECT, DML and DDL are the same for MOT tables as for openGauss disk-based tables.

-   To create an MOT table –

    ```
    create FOREIGN table test(x int) [server mot_server];
    ```

-   Always use the FOREIGN keyword to refer to MOT tables.
-   The \[server mot\_server\] part is optional when creating an MOT table because MOT is an integrated engine, not a separate server.
-   The above is an extremely simple example creating a table named  **test**  with a single integer column named  **x**. In the next section \(**Creating an Index**\) a more realistic example is provided.
-   MOT tables cannot be created if incremental checkpoint is enabled in postgresql.conf. So please set enable_incremental_checkpoint to off before creating the MOT.
-   To drop an MOT table named test –

    ```
    drop FOREIGN table test;
    ```

-   ALTER TABLE – 

    support includes Add column, Drop column and Rename column.  

For a description of the limitations of supported features for MOT tables, such as data types, see the  [MOT SQL Coverage and Limitations](mot-sql-coverage-and-limitations.md)  section.

