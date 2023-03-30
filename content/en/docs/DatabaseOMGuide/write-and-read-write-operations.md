# Write and Read/Write Operations<a name="EN-US_TOPIC_0242370300"></a>

Statements for write-only and read/write operations are as follows:

-   **INSERT**, used to insert one or more rows of data into a table
-   **UPDATE**, used to modify existing data in a table
-   **DELETE**, used to delete existing data from a table
-   **COPY**, used to import data

INSERT and COPY are write-only operations. Only one of them can be performed at a time. If INSERT or COPY of transaction T1 locks a table, INSERT or COPY of transaction T2 needs to wait until T1 unlocks the table.

UPDATE and DELETE operations are read/write operations. They need to query for the target rows before modifying data. Concurrent transactions cannot see changes made by each other, and UPDATE and DELETE operations read snapshots of data committed before their transactions start. Write operations use row-level locks. If T2 starts after T1 and is to update the same row as T1 does, T2 waits for T1 to finish update. If T1 is not complete within the specified timeout duration, T2 will time out. If T1 and T2 update different rows in a table, they can be concurrently executed.

