# Routinely Recreating an Index<a name="EN-US_TOPIC_0289897018"></a>

## Background<a name="en-us_topic_0283140542_en-us_topic_0237088811_en-us_topic_0059779198_sb20e9236c2ee4359bd71385a42b73ce8"></a>

When data deletion is repeatedly performed in the database, index keys will be deleted from the index pages, resulting in index bloat. Recreating an index routinely improves query efficiency.

The database supports B-tree indexes. Recreating a B-tree index routinely helps improve query efficiency.

-   If a large amount of data is deleted, index keys on the index pages will be deleted. As a result, the number of index pages reduces and index bloat occurs. Recreating an index helps reclaim wasted space.
-   In a newly created index, pages with adjacent logical structures tend to have adjacent physical structures. Therefore, a new index achieves a higher access speed than an index that has been updated for multiple times.

## Methods<a name="en-us_topic_0283140542_en-us_topic_0237088811_section1483310439110"></a>

Use either of the following two methods to recreate an index:

-   Run the  **DROP INDEX**  statement to delete the index, and then run the  **CREATE INDEX**  statement to create an index.

    When you delete an index, a temporary exclusive lock is added in the parent table to block related read/write operations. During index creation, the write operation is locked, whereas the read operation is not locked and can use only sequential scans.

-   Run  **REINDEX**  to recreate an index.
    -   When you run the  **REINDEX TABLE**  statement to recreate an index, an exclusive lock is added to block related read/write operations.
    -   When you run the  **REINDEX INTERNAL TABLE**  statement to recreate an index for a  **desc**  table \(such as column-store  **cudesc**  table\), an exclusive lock is added to block related read/write operations on the table.


## Procedure<a name="en-us_topic_0283140542_en-us_topic_0237088811_en-us_topic_0059779198_s5066efbb8c0d462694edc169c57822b0"></a>

Assume the ordinary index  **areaS\_idx**  exists in the  **area\_id**  column of the imported table  **areaS**. Use either of the following two methods to recreate an index:

-   Run the  **DROP INDEX**  statement to delete the index and run the  **CREATE INDEX**  statement to create an index.
    1.  Delete the index.

        ```
        openGauss=# DROP INDEX areaS_idx;
        DROP INDEX
        ```

    2.  Create an index

        ```
        openGauss=# CREATE INDEX areaS_idx ON areaS (area_id);
        CREATE INDEX
        ```


-   Run  **REINDEX**  to recreate an index.
    -   Run  **REINDEX TABLE**  to recreate an index.

        ```
        openGauss=# REINDEX TABLE areaS;
        REINDEX
        ```

    -   Run  **REINDEX INTERNAL TABLE**  to recreate an index for a  **desc**  table \(such as column-store  **cudesc**  table\).

        ```
        openGauss=# REINDEX INTERNAL TABLE areaS;
        REINDEX
        ```



>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Before you recreate an index, you can increase the values of  **maintenance\_work\_mem**  and  **psort\_work\_mem**  to accelerate the index recreation.

