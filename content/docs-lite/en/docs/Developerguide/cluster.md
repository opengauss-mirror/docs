# CLUSTER<a name="EN-US_TOPIC_0289899899"></a>

## Function<a name="en-us_topic_0283137352_en-us_topic_0237122092_en-us_topic_0059778981_s0e572999489a4677bdb5354183b3efbf"></a>

**CLUSTER**  is used to cluster a table based on an index.

**CLUSTER**  instructs openGauss to cluster the table specified by  **table\_name**  based on the index specified by  **index\_name**. The index must have been defined by  **table\_name**.

When a table is clustered, it is physically reordered based on the index information. Clustering is a one-time operation. When the table is subsequently updated, the changes are not clustered. That is, no attempt is made to store new or updated rows according to their index order.

When a table is clustered, openGauss records which index the table was clustered by. The form  **CLUSTER table\_name**  reclusters the table using the same index as before. You can also use the  **CLUSTER**  or  **SET WITHOUT CLUSTER**  form of  **ALTER TABLE**  to set the index to be used for future cluster operations, or to clear any previous settings.

**CLUSTER**  without any parameter reclusters all the previously-clustered tables in the current database that the calling user owns, or all such tables if called by an administrator.

When a table is being clustered, an  **ACCESS EXCLUSIVE**  lock is acquired on it. This prevents any other database operations \(both read and write\) from being performed on the table until the  **CLUSTER**  is finished.

## Precautions<a name="en-us_topic_0283137352_en-us_topic_0237122092_en-us_topic_0059778981_s4e7b14ca57a84f719386c5788cc36e67"></a>

-   Only row-store B-tree indexes support  **CLUSTER**.
-   In the case where you are accessing single rows randomly within a table, the actual order of the data in the table is unimportant. However, if you tend to access some data more than others, and there is an index that groups them together, it is helpful by using  **CLUSTER**. If you are requesting a range of indexed values from a table, or a single indexed value that has multiple rows that match,  **CLUSTER**  will help because once the index identifies the table page for the first row that matches, all other rows that match are probably already on the same table page, and so you save disk accesses and speed up the query.
-   When an index scan is used, a temporary copy of the table is created that contains the table data in the index order. Temporary copies of each index on the table are created as well. Therefore, you need free space on disk at least equal to the sum of the table size and the total index size. 
-   Because  **CLUSTER**  remembers which indexes are clustered, one can cluster the tables manually the first time, then set up a time like  **VACUUM**  without any parameters, so that the desired tables are periodically reclustered.
-   Because the optimizer records statistics about the ordering of tables, it is advisable to run  **ANALYZE**  on the newly clustered table. Otherwise, the optimizer might make poor choices of query plans. 
-   **CLUSTER**  cannot be executed in transactions.
-   If the  **xc\_maintenance\_mode**  parameter is not enabled, the CLUSTER operation will skip all system catalogs.

## Syntax<a name="en-us_topic_0283137352_en-us_topic_0237122092_en-us_topic_0059778981_s893ab8c9210b4276b975b47546c2f17e"></a>

-   Cluster a table.

    ```
    CLUSTER [ VERBOSE ] table_name [ USING index_name ];
    ```

-   Cluster a partition.

    ```
    CLUSTER [ VERBOSE ] table_name PARTITION ( partition_name ) [ USING index_name ];
    ```

-   Recluster a table.

    ```
    CLUSTER [ VERBOSE ];
    ```


## Parameter Description<a name="en-us_topic_0283137352_en-us_topic_0237122092_en-us_topic_0059778981_s28dde0419d7548e78e12c7de2cb64fa8"></a>

-   **VERBOSE**

    Enables the display of progress messages.

-   **table\_name**

    Specifies the table name.

    Value range: an existing table name

-   **index\_name**

    Specifies the index name.

    Value range: an existing index name

-   **partition\_name**

    Specifies the partition name.

    Value range: an existing partition name


## Examples<a name="en-us_topic_0283137352_en-us_topic_0237122092_en-us_topic_0059778981_sdb050484e7b9488899733d8718cd9dad"></a>

```
-- Create a partitioned table.
openGauss=# CREATE TABLE tpcds.inventory_p1
(
    INV_DATE_SK               INTEGER               NOT NULL,
    INV_ITEM_SK               INTEGER               NOT NULL,
    INV_WAREHOUSE_SK          INTEGER               NOT NULL,
    INV_QUANTITY_ON_HAND      INTEGER
)
PARTITION BY RANGE(INV_DATE_SK)
(
        PARTITION P1 VALUES LESS THAN(2451179),
        PARTITION P2 VALUES LESS THAN(2451544),
        PARTITION P3 VALUES LESS THAN(2451910),
        PARTITION P4 VALUES LESS THAN(2452275),
        PARTITION P5 VALUES LESS THAN(2452640),
        PARTITION P6 VALUES LESS THAN(2453005),
        PARTITION P7 VALUES LESS THAN(MAXVALUE)
);

-- Create an index named ds_inventory_p1_index1.
openGauss=# CREATE INDEX ds_inventory_p1_index1 ON tpcds.inventory_p1 (INV_ITEM_SK) LOCAL;

-- Cluster the tpcds.inventory_p1 table.
openGauss=# CLUSTER tpcds.inventory_p1 USING ds_inventory_p1_index1;

-- Cluster the p3 partition.
openGauss=# CLUSTER tpcds.inventory_p1 PARTITION (p3) USING ds_inventory_p1_index1;

-- Cluster the tables that can be clustered in the database.
openGauss=# CLUSTER;

-- Delete the index.
openGauss=# DROP INDEX tpcds.ds_inventory_p1_index1;

-- Delete the partitioned table.
openGauss=# DROP TABLE tpcds.inventory_p1;
```

## Suggestions<a name="en-us_topic_0283137352_en-us_topic_0237122092_en-us_topic_0059778981_section8558510163121"></a>

-   cluster
    -   It is recommended that you run  **ANALYZE**  on a newly clustered table. Otherwise, the optimizer might make poor choices of query plans. 
    -   **CLUSTER**  cannot be executed in transactions.


