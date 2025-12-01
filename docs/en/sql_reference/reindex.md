# REINDEX<a name="EN-US_TOPIC_0289899863"></a>

## Function<a name="en-us_topic_0283137442_en-us_topic_0237122174_en-us_topic_0059777511_sf1cc0970ae31445a9e063cf504569e6e"></a>

**REINDEX**  rebuilds an index using the data stored in the index's table, replacing the old copy of the index.

There are several scenarios in which  **REINDEX**  can be used:

-   An index has become corrupted, and no longer contains valid data.
-   An index has become "bloated", that is, it contains many empty or nearly-empty pages.
-   You have altered a storage parameter \(such as a fill factor\) for an index, and wish that the change takes full effect.
-   An index build with the  **CONCURRENTLY**  option failed, leaving an "invalid" index.

## Precautions<a name="en-us_topic_0283137442_en-us_topic_0237122174_en-us_topic_0059777511_s871de483556241f0a3180925ed04ded3"></a>

**REINDEX DATABASE**  and  **REINDEX SYSTEM**  type cannot be performed in transaction blocks.

**REINDEX CONCURRENTLY** cannot be performed in transaction blocks.

## Syntax<a name="en-us_topic_0283137442_en-us_topic_0237122174_en-us_topic_0059777511_s2ba0db3344cd44189859fbd0cefdd97f"></a>

-   Rebuild a general index.

    ```
    REINDEX { INDEX | [INTERNAL] TABLE | DATABASE | SYSTEM } [CONCURRENTLY] name [ FORCE ];
    ```


-   Rebuild an index partition.

    ```
    REINDEX  { INDEX|  [INTERNAL] TABLE} [CONCURRENTLY] name
        PARTITION partition_name [ FORCE  ];
    ```


## Parameter Description<a name="en-us_topic_0283137442_en-us_topic_0237122174_en-us_topic_0059777511_s68dcdc2270944092a61b8e6fb6f09a48"></a>

-   **INDEX**

    Recreates the specified index.

-   **INTERNAL TABLE**

    Recreates the Desc table index of a column-store table. The TOAST table \(if any\) of the table is reindexed as well.
    
    Indexes cannot be recreated in CONCURRENTLY mode. REINDEX INTERNAL TABLE CONCURRENTLY is equivalent to REINDEX INTERNAL TABLE.

-   **TABLE**

    Recreates all indexes of a specified table. If a table has a TOAST table, the table will also be reindexed. If an index in the table has been invalidated by running  **alter unusable**, the index cannot be recreated.

-   **DATABASE**

    Recreates all indexes within the current database.

-   **SYSTEM**

    Recreates all indexes on system catalogs within the current database. Indexes on user tables are not processed.

-   **CONCURRENTLY**

    Recreates indexes \(with ShareUpdateExclusiveLock\) in non-blocking DML mode. A normal  **REAINDEX**  acquires exclusive lock on the table on which the index depends, blocking other accesses until the index drop can be completed. If this keyword is specified, DML is not blocked during the creation.

    -   The  **REINDEX**  statement can be run within a transaction, but  **REINDEX CONCURRENTLY**  cannot.
    -   Column-store tables, ustore tables, GLOBAL partitioned index, and temporary tables do not support  **REINDEX CONCURRENTLY**.
    -   **REINDEX SYSTEM CONCURRENTLY** will no do anything, because system catalogs do not support **REINDEX CONCURRENTLY**. 
    -   When REINDEX DATABASE CONCURRENTLY is executed, system catalogs, column-store tables, ustore tables, and temporary tables are skipped.
    -   When an ordinary table is recreated online, invalid and unusable ordinary indexes are skipped.
    -   When an ordinary table is recreated online, invalid indexes are changed to valid, and unusable indexes are changed to usable, except for invalid indexes in a toast table.
    -   When a partitioned table is recreated online, unusable partitioned table indexes and partitioned table indexes containing unusable partitioned indexes are skipped.
    -   When a specific partition of a partitioned table is recreated online, unusable partitioned indexes and partitioned indexes containing unusable partitioned indexes are skipped.
    -   When a partitioned table index is recreated online, unusable partitioned table indexes are changed to usable, and unusable partitioned table indexes in the partitioned table index are changed to usable.
    -   When a specific partition index of a partitioned table index is recreated online, unusable partitioned indexes are changed to usable.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   This keyword is specified when an index is recreated. The entire table needs to be scanned twice and built. When the table is scanned for the first time, an index is created and the read and write operations are not blocked. During the second scan, changes that have occurred since the first scan are merged and updated.
    >-   The table needs to be scanned and built twice, and all existing transactions that may modify the table must be completed. This means that the recreation of the index takes a longer time than normal. In addition, the CPU and I/O consumption also affects other services.
    >-   If index recreating fails, it leaves an "invalid" index. This index is ignored by the query, but it still consumes the update overhead. In this case, you are advised to delete the index and try **CONCURRENTLY** again to recreate the index.
    >-   After the second scan, index recreating must wait for any transaction that holds a snapshot earlier than the snapshot taken by the second scan to terminate. In addition, the ShareUpdateExclusiveLock (level 4) added during index recreating conflicts with a lock whose level is greater than or equal to 4. Therefore, when such an index is recreated, the system is prone to hang or deadlock. For example:
    >    -   If two sessions reindex concurrently for the same table, a deadlock occurs.
    >    -   If a session reindex concurrently for a table and another session drops a table, a deadlock occurs.
    >    -   If there are three sessions, session 1 starts a transaction to lock table **a** and does not commit the transaction, session 2 writes data to table **a**, and session 3 recreates a CONCURRENTLY index for table **b**, then session 3 is blocked before the transaction of session 1 is committed.
    >    -   The transaction isolation level is set to repeatable read \(read committed by default\). Two sessions are started. Session 1 writes data to table  **a**  and does not commit it. Session 2 reindex concurrently for table  **b**. Before the transaction of session 1 is committed, session 2 is blocked.

-   **name**

    Specifies the name of the index, table, or database whose index needs to be recreated. Tables and indexes can be schema-qualified.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >**REINDEX DATABASE**  and  **SYSTEM**  can create indexes for only the current database. Therefore,  **name**  must be the same as the current database name.

-   **FORCE**

    Specifies an invalid option, which will be ignored.

-   **partition\_name**

    Specifies the name of the partition or index partition to be recreated.

    Value range:

    -   If  **REINDEX INDEX**  is used, specify the name of an index partition.
    -   If it is  **REINDEX TABLE**, specify the name of a partition.
    -   If it is  **REINDEX INTERNAL TABLE**, specify the name of a partition in a column-store partitioned table.


>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>**REINDEX DATABASE**  and  **REINDEX SYSTEM**  type cannot be performed in transaction blocks.

## Examples<a name="en-us_topic_0283137442_en-us_topic_0237122174_en-us_topic_0059777511_saeb969f6c052407e98c22893941c9440"></a>

```
-- Create a row-store table tpcds.customer_t1 and create an index on the c_customer_sk column in the table.
openGauss=# CREATE TABLE tpcds.customer_t1
(
    c_customer_sk             integer               not null,
    c_customer_id             char(16)              not null,
    c_current_cdemo_sk        integer                       ,
    c_current_hdemo_sk        integer                       ,
    c_current_addr_sk         integer                       ,
    c_first_shipto_date_sk    integer                       ,
    c_first_sales_date_sk     integer                       ,
    c_salutation              char(10)                      ,
    c_first_name              char(20)                      ,
    c_last_name               char(30)                      ,
    c_preferred_cust_flag     char(1)                       ,
    c_birth_day               integer                       ,
    c_birth_month             integer                       ,
    c_birth_year              integer                       ,
    c_birth_country           varchar(20)                   ,
    c_login                   char(13)                      ,
    c_email_address           char(50)                      ,
    c_last_review_date        char(10)
)
WITH (orientation = row);

openGauss=# CREATE INDEX tpcds_customer_index1 ON tpcds.customer_t1 (c_customer_sk);

openGauss=# INSERT INTO tpcds.customer_t1 SELECT * FROM tpcds.customer WHERE c_customer_sk < 10;

-- Rebuild a single index.
openGauss=# REINDEX INDEX tpcds.tpcds_customer_index1;

-- Rebuild a single index concurrently.
openGauss=# REINDEX INDEX CONCURRENTLY tpcds.tpcds_customer_index1;

-- Rebuild all indexes in the tpcds.customer_t1 table:
openGauss=# REINDEX TABLE tpcds.customer_t1;

-- Rebuild all indexes in the tpcds.customer_t1 table concurrently:
openGauss=# REINDEX TABLE CONCURRENTLY tpcds.customer_t1;

-- Delete the tpcds.customer_t1 table.
openGauss=# DROP TABLE tpcds.customer_t1;
```

## Suggestions<a name="en-us_topic_0283137442_en-us_topic_0237122174_en-us_topic_0059777511_section21815038152246"></a>

-   INTERNAL TABLE

    This scenario is used for fault recovery. You are not advised to perform concurrent operations.

-   DATABASE

    You are not allowed to re-index a database in a transaction.

-   SYSTEM

    You are not allowed to re-index system catalogs in transactions.
