# CREATE INDEX<a name="ZH-CN_TOPIC_0289900160"></a>

## Function<a name="en-us_topic_0283137126_en-us_topic_0237122076_en-us_topic_0059779051_s2baab5c876044795a12b5949f22d2144"></a>

**CREATE INDEX** creates an index in a specified table.

Indexes are primarily used to enhance database performance (though inappropriate use can result in slower database performance). You are advised to create indexes on:

-   Columns that are often queried
-   Join conditions. For a query on joined columns, you are advised to create a composite index on the columns. For example, select \* from t1 join t2 on t1. a=t2. a and t1. b=t2.b. You can create a composite index on the a and b columns of table t1.
-   Columns having filter criteria (especially scope criteria) of a **where** clause
-   Columns that appear after **order by**, **group by**, and **distinct**

The partitioned table does not support concurrent index creation and partial index creation.

## Precautions<a name="en-us_topic_0283136578_en-us_topic_0237122106_en-us_topic_0059777455_s31780559299b4f62bec935a2c4679b84"></a>

-   This section describes only the new syntax of Dolphin. The original syntax of openGauss is not deleted or modified.
    Options can be sorted in random order.

## Syntax<a name="en-us_topic_0283136578_en-us_topic_0237122106_en-us_topic_0059777455_sa24c1a88574742bcb5427f58f5abb732"></a>

-   Create an index on a table.

    ```
    CREATE [ UNIQUE ] INDEX [ CONCURRENTLY ] [ [schema_name.]index_name ]
        { ON table_name [ USING method ] | [ USING method ] ON table_name }
        ({ { column_name | ( expression ) } [ COLLATE collation ] [ opclass ] [ ASC | DESC ] [ NULLS { FIRST | LAST } ] }[, ...] )
        [ index_option ]
        [ WHERE predicate ];
    ```

-   Create an index on a partitioned table.

    ```
    CREATE [ UNIQUE ] INDEX [ [schema_name.]index_name ]
        { ON table_name [ USING method ] | [ USING method ] ON table_name }
        ( {{ column_name | ( expression ) } [ COLLATE collation ] [ opclass ] [ ASC | DESC ] [ NULLS LAST ] }[, ...] )
        [ LOCAL [ ( { PARTITION index_partition_name [ TABLESPACE index_partition_tablespace ] } [, ...] ) ] | GLOBAL ]
        [ index_option ]
    ```

## Parameter Description<a name="en-us_topic_0283136578_en-us_topic_0237122106_en-us_topic_0059777455_s82e47e35c54c477094dcafdc90e5d85a"></a>

-   **column\_name ( length )**

    Creates a prefix key index based on a column in the table. **column\_name** indicates the column name of the prefix key, and **length** indicates the prefix length.

    The prefix key uses the prefix of the specified column data as the index key value, which reduces the storage space occupied by the index. Indexes can be used for filter and join conditions that contain prefix key columns.

    >![](public_sys-resources/icon-note.gif) **NOTE:**
    >-  The prefix key supports the following index methods: btree and ubtree.
    >-  The data type of the prefix key column must be binary or character (excluding special characters).
    >-  The prefix length must be a positive integer that does not exceed 2676 and cannot exceed the maximum length of the column. For the binary type, the prefix length is measured in bytes. For non-binary character types, the prefix length is measured in characters. The actual length of the key value is restricted by the internal page. If a column contains multi-byte characters or an index has multiple keys, the length of the index line may exceed the upper limit. As a result, an error is reported. Consider this situation when setting a long prefix length.
    >-  In the CREATE INDEX syntax, the following keywords cannot be used as prefix keys for column names: COALESCE, CONVERT, DAYOFMONTH, DAYOFWEEK, DAYOFYEAR, DB_B_FORMAT, EXTRACT, GREATEST, HOUR_P, IFNULL, LEAST, LOCATE, MICROSECOND_P, MID, MINUTE_P, NULLIF, NVARCHAR, NVL, OVERLAY, POSITION, QUARTER, SECOND_P, SUBSTR, SUBSTRING, TEXT_P, TIME, TIMESTAMP, TIMESTAMPDIFF, TREAT, TRIM, WEEKDAY, WEEKOFYEAR, XMLCONCAT, XMLELEMENT, XMLEXISTS, XMLFOREST, XMLPARSE, XMLPI, XMLROOT, and XMLSERIALIZE. If the index where the prefix key containing the preceding keywords resides is created using the ALTER TABLE or CREATE TABLE syntax, the exported CREATE INDEX statement may fail to be executed. Therefore, do not use the preceding keywords as the column names of the prefix keys.

- **index\_option**

    You can specify options when creating an index. The syntax is as follows:

    ```
    INCLUDE ( column_name [, ...] )
    | WITH ( { storage_parameter = value } [, ...] )
    | TABLESPACE tablespace_name
    ```

    The TABLESPACE option can be entered multiple times. The latest input prevails.

## Examples<a name="en-us_topic_0283136578_en-us_topic_0237122106_en-us_topic_0059777455_s985289833081489e9d77c485755bd362"></a>

```
--Create a table named tpcds.ship_mode_t1.
openGauss=# create schema tpcds;
openGauss=# CREATE TABLE tpcds.ship_mode_t1
(
    SM_SHIP_MODE_SK           INTEGER               NOT NULL,
    SM_SHIP_MODE_ID           CHAR(16)              NOT NULL,
    SM_TYPE                   CHAR(30)                      ,
    SM_CODE                   CHAR(10)                      ,
    SM_CARRIER                CHAR(20)                      ,
    SM_CONTRACT               CHAR(20)
) 
;

--Create a common unique index on the SM_SHIP_MODE_SK column in the tpcds.ship_mode_t1 table.
openGauss=# CREATE UNIQUE INDEX ds_ship_mode_t1_index1 ON tpcds.ship_mode_t1(SM_SHIP_MODE_SK);

--Create a B-tree index on the SM_SHIP_MODE_SK column in the tpcds.ship_mode_t1 table.
openGauss=# CREATE INDEX ds_ship_mode_t1_index4 ON tpcds.ship_mode_t1 USING btree(SM_SHIP_MODE_SK);

--Create an expression index on the SM_CODE column in the table tpcds.ship_mode_t1 table.
openGauss=# CREATE INDEX ds_ship_mode_t1_index2 ON tpcds.ship_mode_t1(SUBSTR(SM_CODE,1 ,4));

--Create a partial index on the SM_SHIP_MODE_SK column where SM_SHIP_MODE_SK is greater than 10 in the tpcds.ship_mode_t1 table.
openGauss=# CREATE UNIQUE INDEX ds_ship_mode_t1_index3 ON tpcds.ship_mode_t1(SM_SHIP_MODE_SK) WHERE SM_SHIP_MODE_SK>10;

--Rename an existing index.
openGauss=# ALTER INDEX tpcds.ds_ship_mode_t1_index1 RENAME TO ds_ship_mode_t1_index5;

--Set the index to be unavailable.
openGauss=# ALTER INDEX tpcds.ds_ship_mode_t1_index2 UNUSABLE;

--Recreate an index.
openGauss=# ALTER INDEX tpcds.ds_ship_mode_t1_index2 REBUILD;

--Delete an existing index.
openGauss=# DROP INDEX tpcds.ds_ship_mode_t1_index2;

--Delete a table.
openGauss=# DROP TABLE tpcds.ship_mode_t1;

--Create a tablespace.
openGauss=# CREATE TABLESPACE example1 RELATIVE LOCATION 'tablespace1/tablespace_1';
openGauss=# CREATE TABLESPACE example2 RELATIVE LOCATION 'tablespace2/tablespace_2';
openGauss=# CREATE TABLESPACE example3 RELATIVE LOCATION 'tablespace3/tablespace_3';
openGauss=# CREATE TABLESPACE example4 RELATIVE LOCATION 'tablespace4/tablespace_4';
--Create a table named tpcds.customer_address_p1.
openGauss=# CREATE TABLE tpcds.customer_address_p1
(
    CA_ADDRESS_SK             INTEGER               NOT NULL,
    CA_ADDRESS_ID             CHAR(16)              NOT NULL,
    CA_STREET_NUMBER          CHAR(10)                      ,
    CA_STREET_NAME            VARCHAR(60)                   ,
    CA_STREET_TYPE            CHAR(15)                      ,
    CA_SUITE_NUMBER           CHAR(10)                      ,
    CA_CITY                   VARCHAR(60)                   ,
    CA_COUNTY                 VARCHAR(30)                   ,
    CA_STATE                  CHAR(2)                       ,
    CA_ZIP                    CHAR(10)                      ,
    CA_COUNTRY                VARCHAR(20)                   ,
    CA_GMT_OFFSET             DECIMAL(5,2)                  ,
    CA_LOCATION_TYPE          CHAR(20)
)
TABLESPACE example1
PARTITION BY RANGE(CA_ADDRESS_SK)
( 
   PARTITION p1 VALUES LESS THAN (3000),
   PARTITION p2 VALUES LESS THAN (5000) TABLESPACE example1,
   PARTITION p3 VALUES LESS THAN (MAXVALUE) TABLESPACE example2
)
ENABLE ROW MOVEMENT;
--Create the partitioned table index ds_customer_address_p1_index1 without specifying the index partition name.
openGauss=# CREATE INDEX ds_customer_address_p1_index1 ON tpcds.customer_address_p1(CA_ADDRESS_SK) LOCAL; 
--Create the partitioned table index ds_customer_address_p1_index2 with the name of the index partition specified.
openGauss=# CREATE INDEX ds_customer_address_p1_index2 ON tpcds.customer_address_p1(CA_ADDRESS_SK) LOCAL
(
    PARTITION CA_ADDRESS_SK_index1,
    PARTITION CA_ADDRESS_SK_index2 TABLESPACE example3,
    PARTITION CA_ADDRESS_SK_index3 TABLESPACE example4
) 
TABLESPACE example2;

--Create a global partitioned index.
openGauss=CREATE INDEX ds_customer_address_p1_index3 ON tpcds.customer_address_p1(CA_ADDRESS_ID) GLOBAL;

--If no keyword is specified, a global partitioned index is created by default.
openGauss=CREATE INDEX ds_customer_address_p1_index4 ON tpcds.customer_address_p1(CA_ADDRESS_ID);

--Change the tablespace of the partitioned table index CA_ADDRESS_SK_index2 to example1.
openGauss=# ALTER INDEX tpcds.ds_customer_address_p1_index2 MOVE PARTITION CA_ADDRESS_SK_index2 TABLESPACE example1;

--Change the tablespace of the partitioned table index CA_ADDRESS_SK_index3 to example2.
openGauss=# ALTER INDEX tpcds.ds_customer_address_p1_index2 MOVE PARTITION CA_ADDRESS_SK_index3 TABLESPACE example2;

--Rename a partitioned table index.
openGauss=# ALTER INDEX tpcds.ds_customer_address_p1_index2 RENAME PARTITION CA_ADDRESS_SK_index1 TO CA_ADDRESS_SK_index4;

--Delete the created indexes and the partition table.
openGauss=# DROP INDEX tpcds.ds_customer_address_p1_index1;
openGauss=# DROP INDEX tpcds.ds_customer_address_p1_index2;
openGauss=# DROP TABLE tpcds.customer_address_p1;
--Delete a tablespace.
openGauss=# DROP TABLESPACE example1;
openGauss=# DROP TABLESPACE example2;
openGauss=# DROP TABLESPACE example3;
openGauss=# DROP TABLESPACE example4;

--Create a column-store table and its GIN index.
openGauss=# create table cgin_create_test(a int, b text) with (orientation = column);
CREATE TABLE
openGauss=# create index cgin_test on cgin_create_test using gin(to_tsvector('ngram', b));
CREATE INDEX
```

## Helpful Links<a name="section156744489391"></a>

[CREATE INDEX](CREATE-INDEX.md)
