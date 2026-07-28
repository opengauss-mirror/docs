# TRUNCATE<a name="EN-US_TOPIC_0289900169"></a>

## Function<a name="en-us_topic_0283137291_en-us_topic_0237122193_en-us_topic_0059777694_sf3e0cbc4893c4042ac208fca35e705e8"></a>

**TRUNCATE**  quickly removes all rows from a database table.

It has the same effect as an unqualified  **DELETE**  on each table, but it is faster since it does not actually scan the tables. This is most useful on large tables.

## Precautions<a name="en-us_topic_0283137291_en-us_topic_0237122193_section5258164117111"></a>

- **TRUNCATE TABLE**  has the same function as a  **DELETE**  statement with no  **WHERE**  clause, emptying a table.
- **TRUNCATE TABLE**  uses less system and transaction log resources as compared with  **DELETE**.
    - **DELETE**  deletes a row each time, and records the deletion of each row in the transaction log.
    - **TRUNCATE TABLE**  deletes all rows in a table by releasing the data page storing the table data, and records the releasing of the data page only in the transaction log.

- The differences between  **TRUNCATE**,  **DELETE**, and  **DROP**  are as follows:
    - **TRUNCATE TABLE**  deletes content, releases space, but does not delete definitions.
    - **DELETE TABLE**  deletes content, but does not delete definitions nor release space.
    - **DROP TABLE**  deletes content and definitions, and releases space.

## Syntax<a name="en-us_topic_0283137291_en-us_topic_0237122193_en-us_topic_0059777694_s8446a9bd83d843dfa13302117908ed38"></a>

- Delete data from a table.

```
TRUNCATE [ TABLE ] [ ONLY ] {table_name [ * ]} [, ... ]
    [ CONTINUE IDENTITY | RESTART IDENTITY ] [ CASCADE | RESTRICT] [ PURGE ]};
```

- Truncate the data in a partition.

```
ALTER TABLE [ IF EXISTS  ] { [ ONLY  ] table_name  
                           | table_name *  
                           | ONLY ( table_name )  } 
    TRUNCATE PARTITION { partition_name  
                       | FOR (  partition_value  [, ...] )  } [ UPDATE GLOBAL INDEX ];
```

## Parameter Description<a name="en-us_topic_0283137291_en-us_topic_0237122193_en-us_topic_0059777694_sdbad1b573aae49f5aeba613b6fc3130d"></a>

- **ONLY**

    If  **ONLY**  is specified, only the specified table is cleared. Otherwise, the table and all its subtables \(if any\) are cleared.

- **table\_name**

    Specifies the name \(optionally schema-qualified\) of the target table.

    Value range: an existing table name

- **CONTINUE IDENTITY**

    Does not change the values of sequences. This is the default action.

- **RESTART IDENTITY**

    Restart all sequences owned by the truncated table.

- **CASCADE | RESTRICT**
    - **CASCADE**: Clears all tables that are added to a group.
    - **RESTRICT**  \(default value\): Clears all data.

- **PURGE**: Purges table data in the recycle bin by default.
- **partition\_name**

    Specifies the partition in the target partitioned table.

    Value range: an existing table name

- **partition\_value**

    Specifies the value of the specified partition key.

    The value specified by  **PARTITION FOR**  can uniquely identify a partition.

    Value range: value range of the partition key for the partition to be renamed

    >[!TIP]NOTICE 
    >When the  **PARTITION FOR**  clause is used, the entire partition where  **partition\_value**  is located is cleared.

- **UPDATE GLOBAL INDEX**

    If this parameter is used, all global indexes in the partitioned table are updated to ensure that data can be queried correctly using global indexes. If this parameter is not used, all global indexes in the partitioned table will become invalid.

## Examples<a name="en-us_topic_0283137291_en-us_topic_0237122193_en-us_topic_0059777694_sfa74039cf5ab429abe7b4980088b2c5e"></a>

```
-- Create a table.
openGauss=# CREATE TABLE tpcds.reason_t1 AS TABLE tpcds.reason;

-- Truncate the tpcds.reason_t1 table.
openGauss=# TRUNCATE TABLE tpcds.reason_t1;

-- Delete the table.
openGauss=# DROP TABLE tpcds.reason_t1;
```

```
-- Create a partitioned table.
openGauss=# CREATE TABLE tpcds.reason_p
(
  r_reason_sk integer,
  r_reason_id character(16),
  r_reason_desc character(100)
)PARTITION BY RANGE (r_reason_sk)
(
  partition p_05_before values less than (05),
  partition p_15 values less than (15),
  partition p_25 values less than (25),
  partition p_35 values less than (35),
  partition p_45_after values less than (MAXVALUE)
);

-- Insert data.
openGauss=# INSERT INTO tpcds.reason_p SELECT * FROM tpcds.reason;

-- Clear the p_05_before partition.
openGauss=# ALTER TABLE tpcds.reason_p TRUNCATE PARTITION p_05_before;

-- Clear the p_15 partition.
openGauss=# ALTER TABLE tpcds.reason_p TRUNCATE PARTITION for (13);

-- Clear the partitioned table.
openGauss=# TRUNCATE TABLE tpcds.reason_p;

-- Delete the table.
openGauss=# DROP TABLE tpcds.reason_p;
```

```sql
-- Create a sequence that will be owned by the table to be created.
openGauss=# CREATE SEQUENCE seq_own;
CREATE SEQUENCE
-- Create a sequence that will not be owned by the table to be created.
openGauss=# CREATE SEQUENCE seq_not_own;
CREATE SEQUENCE
-- Create a table whose columns' default values are from sequences.
openGauss=# CREATE TABLE truncate_a (
    id1 serial,
    id2 int default nextval('seq_own'),
    id3 int default nextval('seq_not_own')
);
NOTICE:  CREATE TABLE will create implicit sequence "truncate_a_id1_seq" for serial column "truncate_a.id1"
CREATE TABLE
-- Make sequence seq_own owned by truncate_a.id2.
openGauss=# ALTER SEQUENCE seq_own OWNED BY truncate_a.id2;
ALTER SEQUENCE
-- Insert default values.
openGauss=# INSERT INTO truncate_a DEFAULT VALUES;
INSERT 0 1
openGauss=# INSERT INTO truncate_a DEFAULT VALUES;
INSERT 0 1
-- Query the table.
openGauss=# SELECT * FROM truncate_a;
 id1 | id2 | id3 
-----+-----+-----
   1 |   1 |   1
   2 |   2 |   2
(2 rows)

-- Clear the table, and restart the sequence seq_own and truncate_a_id1_seq that are owned by table truncate_a.
openGauss=# TRUNCATE TABLE truncate_a RESTART IDENTITY;
TRUNCATE TABLE
-- Insert default values again.
openGauss=# INSERT INTO truncate_a DEFAULT VALUES;
INSERT 0 1
openGauss=# INSERT INTO truncate_a DEFAULT VALUES;
INSERT 0 1
-- Query the table again, values of column id1 and id2 starts from the beginning, while values of id3 are not.
openGauss=# SELECT * FROM truncate_a;
 id1 | id2 | id3 
-----+-----+-----
   1 |   1 |   3
   2 |   2 |   4
(2 rows)

-- Delete the table.
openGauss=# DROP TABLE truncate_a;
DROP TABLE
```
