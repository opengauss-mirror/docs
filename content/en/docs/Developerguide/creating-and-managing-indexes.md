# Creating and Managing Indexes<a name="EN-US_TOPIC_0242370194"></a>

## Background<a name="en-us_topic_0237120308_en-us_topic_0059777978_s2db1c8bff92b4157a59abc27b435d8c2"></a>

Indexes accelerate data access but increase the processing time of insertion, update, and deletion operations. Therefore, before creating an index, consider whether it is necessary and determine the columns where the index will be created. You can determine whether to add an index for a table by analyzing the service processing and data use of applications, as well as columns that are frequently used as search criteria or need to be collated.

Indexes are created based on columns in database tables. Therefore, you must correctly identify which columns require indexes. You are advised to create indexes for any of the following columns:

-   Columns that are often searched and queried. This speeds up searches.
-   Columns that function as primary keys. This enforces the uniqueness of the columns and the data collation structures in organized tables.
-   Columns that are often searched by range. The index helps collate data, and therefore the specified ranges are contiguous.
-   Columns that often need to be collated. The index helps collate data, reducing the time for a collation query.
-   Columns where the  **WHERE**  clause is executed frequently. This speeds up condition judgment.
-   Columns that often appear after the keywords  **ORDER BY**,  **GROUP BY**, and  **DISTINCT**.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   After an index is created, the system automatically determines when to reference it. If the system determines that indexing is faster than sequenced scanning, the index will be used.  
    >-   After an index is successfully created, it must be synchronized with the associated table to ensure new data can be accurately located, which increases the data operation load. Therefore, delete unnecessary indexes periodically.  
    >-   Partitioned table indexes are classified into LOCAL indexes and GLOBAL indexes. A LOCAL index corresponds to a specific partition, and a GLOBAL index corresponds to the entire partitioned table.  
-   When logical replication is enabled, if you need to create a primary key index that contains system columns, you must set the **REPLICA IDENTITY** attribute of the table to **FULL** or use USING INDEX to specify a unique, non-local, non-deferrable index that does not contain system columns and contains only columns marked **NOT NULL**.


## Procedure<a name="en-us_topic_0237120308_en-us_topic_0059777978_scba43baf1cd54d06a22160699ec2c658"></a>

For details about how to create a partitioned table, see  [Creating and Managing Partitioned Tables](en-us_topic_0242370193.md).

-   Creating an index
    -   Create the LOCAL index  **tpcds\_web\_returns\_p2\_index1**  without specifying the partition name for a partitioned table.

        ```
        postgres=# CREATE INDEX tpcds_web_returns_p2_index1 ON tpcds.web_returns_p2 (ca_address_id) LOCAL;
        ```

        If the following information is displayed, the table has been created:

        ```
        CREATE INDEX
        ```

    -   Create the LOCAL index  **tpcds\_web\_returns\_p2\_index2**  with the partition name specified for a partitioned table.

        ```
        postgres=# CREATE INDEX tpcds_web_returns_p2_index2 ON tpcds.web_returns_p2 (ca_address_sk) LOCAL
        (
            PARTITION web_returns_p2_P1_index,
            PARTITION web_returns_p2_P2_index TABLESPACE example3,
            PARTITION web_returns_p2_P3_index TABLESPACE example4,
            PARTITION web_returns_p2_P4_index,
            PARTITION web_returns_p2_P5_index,
            PARTITION web_returns_p2_P6_index,
            PARTITION web_returns_p2_P7_index,
            PARTITION web_returns_p2_P8_index
        ) TABLESPACE example2;
        ```

        If the following information is displayed, the table has been created:

        ```
        CREATE INDEX
        ```

    -   Create the GLOBAL index  **tpcds\_web\_returns\_p2\_global\_index**  for a partitioned table.

        ```
        CREATE INDEX tpcds_web_returns_p2_global_index ON tpcds.web_returns_p2 (ca_street_number) GLOBAL;
        ```


-   Modifying the tablespace of an index partition
    -   Change the tablespace of index partition  **web\_returns\_p2\_P2\_index**  to  **example1**.

        ```
        postgres=# ALTER INDEX tpcds.tpcds_web_returns_p2_index2 MOVE PARTITION web_returns_p2_P2_index TABLESPACE example1;
        ```

        If the following information is displayed, the tablespace of the index partition has been modified:

        ```
        ALTER INDEX
        ```

    -   Change the tablespace of index partition  **web\_returns\_p2\_P3\_index**  to  **example2**.

        ```
        postgres=# ALTER INDEX tpcds.tpcds_web_returns_p2_index2 MOVE PARTITION web_returns_p2_P3_index TABLESPACE example2;
        ```

        If the following information is displayed, the tablespace of the index partition has been modified:

        ```
        ALTER INDEX
        ```


-   Renaming an index partition

    Rename the name of index partition  **web\_returns\_p2\_P8\_index**  to  **web\_returns\_p2\_P8\_index\_new**.

    ```
    postgres=# ALTER INDEX tpcds.tpcds_web_returns_p2_index2 RENAME PARTITION web_returns_p2_P8_index TO web_returns_p2_P8_index_new;
    ```

    If the following information is displayed, the index partition has been renamed:

    ```
    ALTER INDEX
    ```

-   Querying indexes
    -   Run the following command to query all indexes defined by the system and users:

        ```
        postgres=# SELECT RELNAME FROM PG_CLASS WHERE RELKIND='i' or RELKIND='I';
        ```

    -   Run the following command to query information about a specified index:

        ```
        postgres=# \di+ tpcds.tpcds_web_returns_p2_index2 
        ```


-   Dropping an index

    ```
    postgres=# DROP INDEX tpcds.tpcds_web_returns_p2_index1;
    postgres=# DROP INDEX tpcds.tpcds_web_returns_p2_index2;
    ```

    If the following information is displayed, the tables have been deleted:

    ```
    DROP INDEX
    ```


openGauss supports four methods for creating indexes. For details, see  [Table 1](#en-us_topic_0237120308_en-us_topic_0059777978_tf6189b97ccf4474e871a7a982b53c2e4).

![](public_sys-resources/icon-note.gif) **NOTE:**   
-   After an index is created, the system automatically determines when to reference it. If the system determines that indexing is faster than sequenced scanning, the index will be used.  
-   After an index is successfully created, it must be synchronized with the associated table to ensure new data can be accurately located, which increases the data operation load. Therefore, delete unnecessary indexes periodically.  

**Table  1**  Indexing methods

<a name="en-us_topic_0237120308_en-us_topic_0059777978_tf6189b97ccf4474e871a7a982b53c2e4"></a>
<table><thead align="left"><tr id="en-us_topic_0237120308_en-us_topic_0059777978_rebab01bc3f8940d3acb43e868e388561"><th class="cellrowborder" valign="top" width="19.52%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237120308_en-us_topic_0059777978_a56b868c9f73048879fcf1f2165ba1b76"><a name="en-us_topic_0237120308_en-us_topic_0059777978_a56b868c9f73048879fcf1f2165ba1b76"></a><a name="en-us_topic_0237120308_en-us_topic_0059777978_a56b868c9f73048879fcf1f2165ba1b76"></a>Indexing Method</p>
</th>
<th class="cellrowborder" valign="top" width="80.47999999999999%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237120308_en-us_topic_0059777978_aaabff349fa4c4fe4bca91993d1f8b4fa"><a name="en-us_topic_0237120308_en-us_topic_0059777978_aaabff349fa4c4fe4bca91993d1f8b4fa"></a><a name="en-us_topic_0237120308_en-us_topic_0059777978_aaabff349fa4c4fe4bca91993d1f8b4fa"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237120308_en-us_topic_0059777978_r832639b30dd3426b89ac4ccac4871abe"><td class="cellrowborder" valign="top" width="19.52%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120308_en-us_topic_0059777978_a9c1300a832014ef1b8ecb920f597fe78"><a name="en-us_topic_0237120308_en-us_topic_0059777978_a9c1300a832014ef1b8ecb920f597fe78"></a><a name="en-us_topic_0237120308_en-us_topic_0059777978_a9c1300a832014ef1b8ecb920f597fe78"></a>Unique index</p>
</td>
<td class="cellrowborder" valign="top" width="80.47999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120308_en-us_topic_0059777978_a7feed685a5f04264b19913ac341dfccb"><a name="en-us_topic_0237120308_en-us_topic_0059777978_a7feed685a5f04264b19913ac341dfccb"></a><a name="en-us_topic_0237120308_en-us_topic_0059777978_a7feed685a5f04264b19913ac341dfccb"></a>An index that requires the uniqueness of an index attribute or an attribute group. If a table declares unique constraints or primary keys, openGauss automatically creates unique indexes (or composite indexes) for columns that form the primary keys or unique constraints. Currently, unique indexes can be created only for B-tree in openGauss.</p>
</td>
</tr>
<tr id="en-us_topic_0237120308_en-us_topic_0059777978_rd743d13fd78842ceb10ba8ba7f5f5997"><td class="cellrowborder" valign="top" width="19.52%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120308_en-us_topic_0059777978_a64b26ba61c8a45c888258ae1637aa08e"><a name="en-us_topic_0237120308_en-us_topic_0059777978_a64b26ba61c8a45c888258ae1637aa08e"></a><a name="en-us_topic_0237120308_en-us_topic_0059777978_a64b26ba61c8a45c888258ae1637aa08e"></a>Composite index</p>
</td>
<td class="cellrowborder" valign="top" width="80.47999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120308_en-us_topic_0059777978_a13dc1c1c87a441bf88365417a4852776"><a name="en-us_topic_0237120308_en-us_topic_0059777978_a13dc1c1c87a441bf88365417a4852776"></a><a name="en-us_topic_0237120308_en-us_topic_0059777978_a13dc1c1c87a441bf88365417a4852776"></a>An index that can be defined for multiple attributes of a table. Currently, composite indexes can be created only for B-tree in openGauss and up to 32 columns (Global partition index supports up to 31 columns) can share a composite index.</p>
</td>
</tr>
<tr id="en-us_topic_0237120308_en-us_topic_0059777978_r4c1723383e374739becba4b96da7300c"><td class="cellrowborder" valign="top" width="19.52%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120308_en-us_topic_0059777978_en-us_topic_0058967637_p233802017719"><a name="en-us_topic_0237120308_en-us_topic_0059777978_en-us_topic_0058967637_p233802017719"></a><a name="en-us_topic_0237120308_en-us_topic_0059777978_en-us_topic_0058967637_p233802017719"></a>Partial index</p>
</td>
<td class="cellrowborder" valign="top" width="80.47999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120308_en-us_topic_0059777978_a15f35ba6d0444f539fa3132ea0828de3"><a name="en-us_topic_0237120308_en-us_topic_0059777978_a15f35ba6d0444f539fa3132ea0828de3"></a><a name="en-us_topic_0237120308_en-us_topic_0059777978_a15f35ba6d0444f539fa3132ea0828de3"></a>An index that can be created for subsets of a table. This indexing method contains only tuples that meet condition expressions.</p>
</td>
</tr>
<tr id="en-us_topic_0237120308_en-us_topic_0059777978_rdc2e15feee224ab7b11d71829a3f983d"><td class="cellrowborder" valign="top" width="19.52%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120308_en-us_topic_0059777978_a5679b141059546759a31e1993a6f93ea"><a name="en-us_topic_0237120308_en-us_topic_0059777978_a5679b141059546759a31e1993a6f93ea"></a><a name="en-us_topic_0237120308_en-us_topic_0059777978_a5679b141059546759a31e1993a6f93ea"></a>Expression index</p>
</td>
<td class="cellrowborder" valign="top" width="80.47999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120308_en-us_topic_0059777978_a6d7b805e100c4a67a19e32836db06060"><a name="en-us_topic_0237120308_en-us_topic_0059777978_a6d7b805e100c4a67a19e32836db06060"></a><a name="en-us_topic_0237120308_en-us_topic_0059777978_a6d7b805e100c4a67a19e32836db06060"></a>An index that is built on a function or expression calculated based on one or more attributes of a table. An expression index works only when the queried expression is the same as the created expression.</p>
</td>
</tr>
</tbody>
</table>


-   Create an ordinary table.

    ```
    postgres=# CREATE TABLE tpcds.customer_address_bak AS TABLE tpcds.customer_address;
    INSERT 0 0
    ```


-   Create an ordinary index.

    For the  **tpcds.customer\_address\_bak**  table, you need to perform the following operations frequently:

    ```
    postgres=# SELECT ca_address_sk FROM tpcds.customer_address_bak WHERE ca_address_sk=14888;
    ```

    Generally, the database system needs to scan the  **tpcds.customer\_address\_bak**  table row by row to find all matched tuples. If the size of the  **tpcds.customer\_address\_bak**  table is large but only a few \(possibly zero or one\) of the  **WHERE**  conditions are met, the performance of this sequential scan is low. If the database system uses an index to maintain the  **ca\_address\_sk**  attribute, the database system only needs to search a few tree layers for the matched tuples. This greatly improves data query performance. Furthermore, indexes can improve the update and deletion operation performance in the database.

    Run the following command to create an index:

    ```
    postgres=# CREATE INDEX index_wr_returned_date_sk ON tpcds.customer_address_bak (ca_address_sk);
    CREATE INDEX
    ```

-   Create a multi-column index.

    Assume you need to frequently query records with  **ca\_address\_sk**  being  **5050**  and  **ca\_street\_number**  smaller than  **1000**  in the  **tpcds.customer\_address\_bak**  table. Run the following commands:

    ```
    postgres=# SELECT ca_address_sk,ca_address_id FROM tpcds.customer_address_bak WHERE ca_address_sk = 5050 AND ca_street_number < 1000;
    ```

    Run the following command to define a composite index on  **ca\_address\_sk**  and  **ca\_street\_number**  columns:

    ```
    postgres=# CREATE INDEX more_column_index ON tpcds.customer_address_bak(ca_address_sk ,ca_street_number );
    CREATE INDEX
    ```

-   Create a partial index.

    If you only want to find records whose  **ca\_address\_sk**  is  **5050**, you can create a partial index to facilitate your query.

    ```
    postgres=# CREATE INDEX part_index ON tpcds.customer_address_bak(ca_address_sk) WHERE ca_address_sk = 5050;
    CREATE INDEX
    ```

-   Create an expression index.

    Assume that you need to frequently query records with  **ca\_street\_number**  smaller than  **1000**, run the following command:

    ```
    postgres=# SELECT * FROM tpcds.customer_address_bak WHERE trunc(ca_street_number) < 1000;
    ```

    The following expression index can be created for this query task:

    ```
    postgres=# CREATE INDEX para_index ON tpcds.customer_address_bak (trunc(ca_street_number));
    CREATE INDEX
    ```

-   Delete the  **tpcds.customer\_address\_bak**  table.

    ```
    postgres=# DROP TABLE tpcds.customer_address_bak;
    DROP TABLE
    ```


