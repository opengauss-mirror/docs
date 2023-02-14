# OPTIMIZE TABLE 

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

Recreates the physical space of tables and indexes, releases recyclable space to the operating system, and updates statistics in related tables.

## Precautions<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-   The vacuum/owner or superuser permission on the table is required.
-   The B-compatible optimize operation supports multiple tables, and the openGauss optimize operation supports only a single table.
-   The B-compatible optimize operation is an online DDL operation. The main phase of the processing does not affect the read and write of the table. However, the openGauss optimize operation blocks the read and write of the table. If the table contains a large amount of data, the table may be locked for a long time. Therefore, exercise caution when performing this operation.
-   The optimize operation is also blocked by other transactions or two-phase transactions.
-   Do not optimize multiple tables concurrently. If you need to optimize multiple tables concurrently, reduce the number of concurrent tables. Generally, the number of concurrent tables is less than 3.
-   Before running the optimize command, ensure that the remaining space of the data directory is greater than the space occupied by the table. Otherwise, the operation may fail.
-   After a large amount of data is deleted from a table within a short period of time, do not perform optimize immediately. Wait for several seconds or perform other transactions before performing optimize. Otherwise, tuples may be in the HEAPTUPLE_RECENTLY_DEAD state and cannot be reclaimed.

## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
OPTIMIZE [VERBOSE] [NO_WRITE_TO_BINLOG | LOCAL] TABLE tbl_name

```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **[VERBOSE]**

       View the optimization processing details. You can retain the default value.

- **[NO_WRITE_TO_BINLOG | LOCAL]**

       This parameter is compatible only with the syntax and has no actual effect. You can use the default value.

- **tbl_name**

       Table name. You can specify a table name or **schema\_name.table\_name**.

## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--Create a doc table.
openGauss=# create table doc(id serial primary key, content varchar(255));
NOTICE:  CREATE TABLE will create implicit sequence "doc_id_seq" for serial column "doc.id"
NOTICE:  CREATE TABLE / PRIMARY KEY will create implicit index "doc_pkey" for table "doc"
CREATE TABLE

--Insert 10,000 data records.
openGauss=# insert into doc(content) select 'abcd1234' from generate_series(1,10000) as content;
INSERT 0 100000

--Delete 9000 data records.
openGauss=# delete from doc where id <= 9000;
DELETE 9000

--Optimize table.
openGauss=# optimize table doc;
VACUUM

--Optimize table (view processing details).
openGauss=# optimize verbose table doc;
INFO:  vacuuming "public.doc"(primary pid=24692)
INFO:  "doc": found 9000 removable, 1000 nonremovable row versions in 55 pages(primary pid=24692)
DETAIL:  0 dead row versions cannot be removed yet.
CPU 0.00s/0.04u sec elapsed 0.04 sec.
INFO:  analyzing "public.doc"(primary pid=24692)
INFO:  ANALYZE INFO : "doc": scanned 6 of 6 pages, containing 1000 live rows and 0 dead rows; 1000 rows in sample, 1000 estimated total rows(primary pid=24692)
VACUUM
```
