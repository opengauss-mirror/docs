# Creating/Deleting an MOT<a name="EN-US_TOPIC_0289900751"></a>

It is easy to create an MOT. Only the statements for creating and deleting MOTs are different from those for creating and deleting disk-based tables in openGauss. The syntax of all other SELECT, DML, and DDL commands is the same for MOTs and openGauss disk-based tables.

-   Create an MOT.

    ```
    create FOREIGN table test(x int) [server mot_server];
    ```

-   In the preceding statement:
    -   Always use the FOREIGN keyword to reference the MOT.
    -   When creating a MOT,  **\[server mot\_server\]**  is optional because the MOT is an integrated engine, not a standalone server.
    -   In the preceding example, a memory table named  **test**  \(containing an integer column named  **x**\) is created. Another example is provided in the next section "Creating an Index for an MOT."
    -   If incremental checkpoints are enabled in  **postgresql.conf**, MOTs cannot be created. Therefore, set  **enable\_incremental\_checkpoint**  to  **off**  before creating an MOT.

-   Remove the MOT named  **test**.

    ```
    drop FOREIGN table test;
    ```


For details about the functional limitations \(such as data types\) of MOT, see  [MOT SQL Coverage and Limitations](mot-sql-coverage-and-limitations.md).

