# Creating and Managing Partitioned Tables<a name="EN-US_TOPIC_0289899817"></a>

## Background<a name="en-us_topic_0283136996_en-us_topic_0237120307_en-us_topic_0059777517_s028115c5360a4b5794e150c3a648560e"></a>

openGauss supports range partitioned tables, interval partitioned tables, list partitioned tables, and hash partitioned tables.

-   Range partitioned table: Data within a certain range is mapped to each partition. The range is determined by the partition key specified when the partitioned table is created. This partitioning mode is most commonly used. The partition key is usually a date. For example, sales data is partitioned by month.
-   Interval partitioned table: A special type of range partitioned tables. Compared with range partitioned tables, interval value definition is added. When no matching partition can be found for an inserted record, a partition can be automatically created based on the interval value.
-   List partitioned table: Key values contained in the data are stored in different partitions, and the data is mapped to each partition in sequence. The key values contained in the partitions are specified when the partitioned table is created.
-   Hash partitioned table: Data is mapped to each partition based on the internal hash algorithm. The number of partitions is specified when the partitioned table is created.

A partitioned table has the following advantages over an ordinary table:

-   High query performance: You can specify partitions when querying partitioned tables, improving query efficiency.
-   High availability: If a certain partition in a partitioned table is faulty, data in the other partitions is still available.
-   Easy maintenance: To fix a partitioned table having a faulty partition, you only need to fix the partition.
-   Balanced I/O: Partitions can be mapped to different disks to balance I/O and improve the overall system performance.

To convert an ordinary table to a partitioned table, you need to create a partitioned table and import data to it from the ordinary table. When you design tables, plan whether to use partitioned tables based on service requirements.

## Procedure<a name="en-us_topic_0283136996_en-us_topic_0237120307_en-us_topic_0059777517_s4be38594665b41d58e8aa02b1aa1f4e2"></a>

Example 1: using the default tablespace

-   Create a partitioned table \(assuming that the  **tpcds**  schema has been created\).

    ```
    openGauss=# CREATE TABLE tpcds.customer_address
    (
        ca_address_sk       integer                  NOT NULL   ,
        ca_address_id       character(16)            NOT NULL   ,
        ca_street_number    character(10)                       ,
        ca_street_name      character varying(60)               ,
        ca_street_type      character(15)                       ,
        ca_suite_number     character(10)                       ,
        ca_city             character varying(60)               ,
        ca_county           character varying(30)               ,
        ca_state            character(2)                        ,
        ca_zip              character(10)                       ,
        ca_country           character varying(20)               ,
        ca_gmt_offset       numeric(5,2)                        ,
        ca_location_type    character(20)
    )
    
    PARTITION BY RANGE (ca_address_sk)
    (
            PARTITION P1 VALUES LESS THAN(5000),
            PARTITION P2 VALUES LESS THAN(10000),
            PARTITION P3 VALUES LESS THAN(15000),
            PARTITION P4 VALUES LESS THAN(20000),
            PARTITION P5 VALUES LESS THAN(25000),
            PARTITION P6 VALUES LESS THAN(30000),
            PARTITION P7 VALUES LESS THAN(40000),
            PARTITION P8 VALUES LESS THAN(MAXVALUE)
    )
    ENABLE ROW MOVEMENT;
    ```

    If the following information is displayed, the partitioned table has been created:

    ```
    CREATE TABLE
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >You are advised to create a maximum of 1000 column-store partitioned tables.

-   Insert data.

    Insert data from the  **tpcds.customer\_address**  table to the  **tpcds.web\_returns\_p2**  table.

    Suppose the backup table  **tpcds.web\_returns\_p2**  of the  **tpcds.customer\_address**  table has been created in the database. You can run the following command to insert the data of the  **tpcds.customer\_address**  table into the backup table  **tpcds.web\_returns\_p2**:

    ```
    openGauss=# CREATE TABLE tpcds.web_returns_p2
    (
        ca_address_sk       integer                  NOT NULL   ,
        ca_address_id       character(16)            NOT NULL   ,
        ca_street_number    character(10)                       ,
        ca_street_name      character varying(60)               ,
        ca_street_type      character(15)                       ,
        ca_suite_number     character(10)                       ,
        ca_city             character varying(60)               ,
        ca_county           character varying(30)               ,
        ca_state            character(2)                        ,
        ca_zip              character(10)                       ,
        ca_country           character varying(20)               ,
        ca_gmt_offset       numeric(5,2)                        ,
        ca_location_type    character(20)
    )
    
    PARTITION BY RANGE (ca_address_sk)
    (
            PARTITION P1 VALUES LESS THAN(5000),
            PARTITION P2 VALUES LESS THAN(10000),
            PARTITION P3 VALUES LESS THAN(15000),
            PARTITION P4 VALUES LESS THAN(20000),
            PARTITION P5 VALUES LESS THAN(25000),
            PARTITION P6 VALUES LESS THAN(30000),
            PARTITION P7 VALUES LESS THAN(40000),
            PARTITION P8 VALUES LESS THAN(MAXVALUE)
    )
    ENABLE ROW MOVEMENT;
    CREATE TABLE
    openGauss=# INSERT INTO tpcds.web_returns_p2 SELECT * FROM tpcds.customer_address;
    INSERT 0 0
    ```

-   Modify the row movement attributes of the partitioned table.

    ```
    openGauss=# ALTER TABLE tpcds.web_returns_p2 DISABLE ROW MOVEMENT;
    ALTER TABLE
    ```

-   Delete a partition.

    Delete partition  **P8**.

    ```
    openGauss=# ALTER TABLE tpcds.web_returns_p2 DROP PARTITION P8;
    ALTER TABLE
    ```

-   Add a partition.

    Add partition  **P8**  and set its range to \[40000,MAXVALUE\].

    ```
    openGauss=# ALTER TABLE tpcds.web_returns_p2 ADD PARTITION P8 VALUES LESS THAN (MAXVALUE);
    ALTER TABLE
    ```

-   Rename a partition.
    -   Rename partition  **P8**  to  **P\_9**.

        ```
        openGauss=# ALTER TABLE tpcds.web_returns_p2 RENAME PARTITION P8 TO P_9;
        ALTER TABLE
        ```

    -   Rename partition  **P\_9**  to  **P8**.

        ```
        openGauss=# ALTER TABLE tpcds.web_returns_p2 RENAME PARTITION FOR (40000) TO P8;
        ALTER TABLE
        ```


-   Query a partition.

    Query partition  **P6**.

    ```
    openGauss=# SELECT * FROM tpcds.web_returns_p2 PARTITION (P6);
    openGauss=# SELECT * FROM tpcds.web_returns_p2 PARTITION FOR (35888);
    ```

-   Delete a partitioned table and its tablespaces.

    ```
    openGauss=# DROP TABLE tpcds.customer_address;
    DROP TABLE
    openGauss=# DROP TABLE tpcds.web_returns_p2;
    DROP TABLE
    ```


Example 2: using a user-defined tablespace

Perform the following operations on range partitioned tables.

-   Create a tablespace.

    ```
    openGauss=# CREATE TABLESPACE example1 RELATIVE LOCATION 'tablespace1/tablespace_1';
    openGauss=# CREATE TABLESPACE example2 RELATIVE LOCATION 'tablespace2/tablespace_2';
    openGauss=# CREATE TABLESPACE example3 RELATIVE LOCATION 'tablespace3/tablespace_3';
    openGauss=# CREATE TABLESPACE example4 RELATIVE LOCATION 'tablespace4/tablespace_4';
    ```

    If the following information is displayed, the tablespace has been created:

    ```
    CREATE TABLESPACE
    ```

-   Create a partitioned table.

    ```
    openGauss=# CREATE TABLE tpcds.customer_address
    (
        ca_address_sk       integer                  NOT NULL   ,
        ca_address_id       character(16)            NOT NULL   ,
        ca_street_number    character(10)                       ,
        ca_street_name      character varying(60)               ,
        ca_street_type      character(15)                       ,
        ca_suite_number     character(10)                       ,
        ca_city             character varying(60)               ,
        ca_county           character varying(30)               ,
        ca_state            character(2)                        ,
        ca_zip              character(10)                       ,
        ca_country           character varying(20)               ,
        ca_gmt_offset       numeric(5,2)                        ,
        ca_location_type    character(20)
    )
    TABLESPACE example1
    
    PARTITION BY RANGE (ca_address_sk)
    (
            PARTITION P1 VALUES LESS THAN(5000),
            PARTITION P2 VALUES LESS THAN(10000),
            PARTITION P3 VALUES LESS THAN(15000),
            PARTITION P4 VALUES LESS THAN(20000),
            PARTITION P5 VALUES LESS THAN(25000),
            PARTITION P6 VALUES LESS THAN(30000),
            PARTITION P7 VALUES LESS THAN(40000),
            PARTITION P8 VALUES LESS THAN(MAXVALUE) TABLESPACE example2
    )
    ENABLE ROW MOVEMENT;
    ```

    If the following information is displayed, the partitioned table has been created:

    ```
    CREATE TABLE
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >You are advised to create a maximum of 1000 column-store partitioned tables.

-   Insert data.

    Insert data from the  **tpcds.customer\_address**  table to the  **tpcds.web\_returns\_p2**  table.

    Suppose the backup table  **tpcds.web\_returns\_p2**  of the  **tpcds.customer\_address**  table has been created in the database. You can run the following command to insert the data of the  **tpcds.customer\_address**  table into the backup table  **tpcds.web\_returns\_p2**:

    ```
    openGauss=# CREATE TABLE tpcds.web_returns_p2
    (
        ca_address_sk       integer                  NOT NULL   ,
        ca_address_id       character(16)            NOT NULL   ,
        ca_street_number    character(10)                       ,
        ca_street_name      character varying(60)               ,
        ca_street_type      character(15)                       ,
        ca_suite_number     character(10)                       ,
        ca_city             character varying(60)               ,
        ca_county           character varying(30)               ,
        ca_state            character(2)                        ,
        ca_zip              character(10)                       ,
        ca_country           character varying(20)               ,
        ca_gmt_offset       numeric(5,2)                        ,
        ca_location_type    character(20)
    )
    TABLESPACE example1
    PARTITION BY RANGE (ca_address_sk)
    (
            PARTITION P1 VALUES LESS THAN(5000),
            PARTITION P2 VALUES LESS THAN(10000),
            PARTITION P3 VALUES LESS THAN(15000),
            PARTITION P4 VALUES LESS THAN(20000),
            PARTITION P5 VALUES LESS THAN(25000),
            PARTITION P6 VALUES LESS THAN(30000),
            PARTITION P7 VALUES LESS THAN(40000),
            PARTITION P8 VALUES LESS THAN(MAXVALUE) TABLESPACE example2
    )
    ENABLE ROW MOVEMENT;
    CREATE TABLE
    openGauss=# INSERT INTO tpcds.web_returns_p2 SELECT * FROM tpcds.customer_address;
    INSERT 0 0
    ```

-   Modify the row movement attributes of the partitioned table.

    ```
    openGauss=# ALTER TABLE tpcds.web_returns_p2 DISABLE ROW MOVEMENT;
    ALTER TABLE
    ```

-   Delete a partition.

    Delete partition  **P8**.

    ```
    openGauss=# ALTER TABLE tpcds.web_returns_p2 DROP PARTITION P8;
    ALTER TABLE
    ```

-   Add a partition.

    Add partition  **P8**  and set its range to \[40000,MAXVALUE\].

    ```
    openGauss=# ALTER TABLE tpcds.web_returns_p2 ADD PARTITION P8 VALUES LESS THAN (MAXVALUE);
    ALTER TABLE
    ```

-   Rename a partition.
    -   Rename partition  **P8**  to  **P\_9**.

        ```
        openGauss=# ALTER TABLE tpcds.web_returns_p2 RENAME PARTITION P8 TO P_9;
        ALTER TABLE
        ```

    -   Rename partition  **P\_9**  to  **P8**.

        ```
        openGauss=# ALTER TABLE tpcds.web_returns_p2 RENAME PARTITION FOR (40000) TO P8;
        ALTER TABLE
        ```


-   Modify the tablespace of a partition.
    -   Change the tablespace of partition  **P6**  to  **example3**.

        ```
        openGauss=#  ALTER TABLE tpcds.web_returns_p2 MOVE PARTITION P6 TABLESPACE example3;
        ALTER TABLE
        ```

    -   Change the tablespace of partition  **P4**  to  **example4**:

        ```
        openGauss=#  ALTER TABLE tpcds.web_returns_p2 MOVE PARTITION P4 TABLESPACE example4;
        ALTER TABLE
        ```


-   Query a partition.

    Query partition  **P6**.

    ```
    openGauss=# SELECT * FROM tpcds.web_returns_p2 PARTITION (P6);
    openGauss=# SELECT * FROM tpcds.web_returns_p2 PARTITION FOR (35888);
    ```

-   Delete a partitioned table and its tablespaces.

    ```
    openGauss=# DROP TABLE tpcds.web_returns_p2;
    DROP TABLE
    openGauss=# DROP TABLESPACE example1;
    openGauss=# DROP TABLESPACE example2;
    openGauss=# DROP TABLESPACE example3;
    openGauss=# DROP TABLESPACE example4;
    DROP TABLESPACE
    ```


