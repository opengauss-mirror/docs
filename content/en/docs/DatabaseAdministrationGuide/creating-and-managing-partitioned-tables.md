# Creating and Managing Partitioned Tables<a name="EN-US_TOPIC_0289899817"></a>

## Background<a name="en-us_topic_0283136996_en-us_topic_0237120307_en-us_topic_0059777517_s028115c5360a4b5794e150c3a648560e"></a>

openGauss supports range partitioned tables.

In a range partitioned table, data within a certain range is mapped to each partition. The range is determined by the partition key specified when the partitioned table is created. This partitioning mode is most commonly used. The partition key is usually a date. For example, sales data is partitioned by month.

A partitioned table has the following advantages over an ordinary table:

-   High query performance: You can specify partitions when querying partitioned tables, improving query efficiency.
-   High availability: If a certain partition in a partitioned table is faulty, data in the other partitions is still available.
-   Easy maintenance: To fix a partitioned table having a faulty partition, you only need to fix the partition.
-   Balanced I/O: Partitions can be mapped to different disks to balance I/O and improve the overall system performance.

To convert an ordinary table to a partitioned table, you need to create a partitioned table and import data to it from the ordinary table. When you design tables, plan whether to use partitioned tables based on service requirements.

## Procedure<a name="en-us_topic_0283136996_en-us_topic_0237120307_en-us_topic_0059777517_s4be38594665b41d58e8aa02b1aa1f4e2"></a>

Perform the following operations on range partitioned tables.

-   Creating a tablespace

    ```
    postgres=# CREATE TABLESPACE example1 RELATIVE LOCATION 'tablespace1/tablespace_1';
    postgres=# CREATE TABLESPACE example2 RELATIVE LOCATION 'tablespace2/tablespace_2';
    postgres=# CREATE TABLESPACE example3 RELATIVE LOCATION 'tablespace3/tablespace_3';
    postgres=# CREATE TABLESPACE example4 RELATIVE LOCATION 'tablespace4/tablespace_4';
    ```

    If the following information is displayed, the tablespace has been created:

    ```
    CREATE TABLESPACE
    ```

-   Creating a partitioned table

    ```
    postgres=# CREATE TABLE tpcds.customer_address
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

-   Inserting data

    Insert data from the  **tpcds.customer\_address**  table to the  **tpcds.web\_returns\_p2**  table.

    Suppose a backup table  **tpcds.web\_returns\_p2**  of the  **tpcds.customer\_address**  table has been created in the database. You can run the following command to insert the data of the  **tpcds.customer\_address**  table into the backup table  **tpcds.web\_returns\_p2**:

    ```
    postgres=# CREATE TABLE tpcds.web_returns_p2
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
    postgres=# INSERT INTO tpcds.web_returns_p2 SELECT * FROM tpcds.customer_address;
    INSERT 0 0
    ```

-   Modifying the row movement attributes of the partitioned table

    ```
    postgres=# ALTER TABLE tpcds.web_returns_p2 DISABLE ROW MOVEMENT;
    ALTER TABLE
    ```

-   Deleting a partition

    Run the following command to delete partition  **P8**:

    ```
    postgres=# ALTER TABLE tpcds.web_returns_p2 DROP PARTITION P8;
    ALTER TABLE
    ```

-   Adding a partition

    Run the following command to add partition  **P8**  and set its range to \[40000, MAXVALUE\]:

    ```
    postgres=# ALTER TABLE tpcds.web_returns_p2 ADD PARTITION P8 VALUES LESS THAN (MAXVALUE);
    ALTER TABLE
    ```

-   Renaming a partition
    -   Run the following command to rename partition  **P8**  to  **P\_9**:

        ```
        postgres=# ALTER TABLE tpcds.web_returns_p2 RENAME PARTITION P8 TO P_9;
        ALTER TABLE
        ```

    -   Run the following command to rename partition  **P\_9**  to  **P8**:

        ```
        postgres=# ALTER TABLE tpcds.web_returns_p2 RENAME PARTITION FOR (40000) TO P8;
        ALTER TABLE
        ```


-   Modifying the tablespace of a partition
    -   Run the following command to change the tablespace of partition  **P6**  to  **example3**:

        ```
        postgres=#  ALTER TABLE tpcds.web_returns_p2 MOVE PARTITION P6 TABLESPACE example3;
        ALTER TABLE
        ```

    -   Run the following command to change the tablespace of partition  **P4**  to  **example4**:

        ```
        postgres=#  ALTER TABLE tpcds.web_returns_p2 MOVE PARTITION P4 TABLESPACE example4;
        ALTER TABLE
        ```


-   Querying a partition

    Run the following command to query partition  **P6**:

    ```
    postgres=# SELECT * FROM tpcds.web_returns_p2 PARTITION (P6);
    postgres=# SELECT * FROM tpcds.web_returns_p2 PARTITION FOR (35888);
    ```

-   Deleting a partitioned table and its tablespaces

    ```
    postgres=# DROP TABLE tpcds.web_returns_p2;
    DROP TABLE
    postgres=# DROP TABLESPACE example1;
    postgres=# DROP TABLESPACE example2;
    postgres=# DROP TABLESPACE example3;
    postgres=# DROP TABLESPACE example4;
    DROP TABLESPACE
    ```


