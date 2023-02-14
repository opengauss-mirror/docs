# CHECKSUM TABLE

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

Calculates the table data checksum.

## Precautions <a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

- The QUICK schema is not supported (NULL is returned).
- NULL is returned for non-ordinary tables (such as views) and tables that do not exist.
- Comparability with table checksums of heterogeneous databases is not supported.
(For example, if the number of records is the same, the query results in OpenGauss and MySQL cannot be compared.)

## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
CHECKSUM TABLE tbl_name [, tbl_name] ... [QUICK | EXTENDED]
```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **tbl_name**
  
   Table name. You can specify a table name or **schema\_name.table\_name**.
   
- **[QUICK | EXTENDED]**
   Verification mode. Only EXTENDED (default value) is supported.

## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--Create a simple table.
openGauss=# CREATE SCHEMA tst_schema1;
openGauss=# SET SEARCH_PATH TO tst_schema1;
opengauss=# CREATE TABLE tst_t1
(
id int,
name VARCHAR(20),
addr text,
phone text,
addr_code text
);
opengauss=# CREATE TABLE tst_t2 AS SELECT * FROM tst_t1;
INSERT 0 0

--Verify different insertion sequences.
opengauss=# INSERT INTO tst_t1 values(2022001, 'tst_name1', 'tst_addr1', '15600000001', '000001');
INSERT INTO tst_t1 values(2022002, 'tst_name2', 'tst_addr2', '15600000002', '000002');
INSERT INTO tst_t1 values(2022003, 'tst_name3', 'tst_addr3', '15600000003', '000003');
INSERT INTO tst_t1 values(2022004, 'tst_name4', 'tst_addr4', '15600000004', '000004');

INSERT INTO tst_t2 (SELECT * FROM tst_t1 ORDER BY id DESC);

opengauss=# checksum table tst_t1,tst_t2,xxx;
       Table        |  Checksum  
--------------------+------------
 tst_schema1.tst_t1 | 1579899754
 tst_schema1.tst_t2 | 1579899754
 tst_schema1.xxx    | NULL
 
 --Test a table containing large columns.
 opengauss=# CREATE TABLE blog
(
id int,
title text,
content text
);
opengauss=# CREATE TABLE blog_v2 AS SELECT * FROM blog;
opengauss=# INSERT INTO blog values(1, 'title1', '01234567890'), (2, 'title2', '0987654321');
opengauss=# CREATE OR REPLACE FUNCTION loop_insert_result_toast(n integer)
RETURNS integer AS $$
DECLARE
    count integer := 0;
BEGIN
    LOOP
        EXIT WHEN count = n;
        UPDATE blog SET content=content||content where id = 2;
        count := count + 1;
    END LOOP;
    RETURN count;
END; $$
LANGUAGE PLPGSQL;
opengauss=# select loop_insert_result_toast(16);
 loop_insert_result_toast 
--------------------------
                       16
opengauss=# INSERT INTO blog_v2 (SELECT * FROM blog);
opengauss=# checksum table blog,blog_v2;
        Table        |  Checksum  
---------------------+------------
 tst_schema1.blog    | 6249493220
 tst_schema1.blog_v2 | 6249493220

--Test a segment-page table.
opengauss=# CREATE TABLE tst_seg_t1(id int, name VARCHAR(20)) WITH (segment=on);
opengauss=# CREATE TABLE tst_seg_t2(id int, name VARCHAR(20)) WITH (segment=on);
opengauss=# INSERT INTO tst_seg_t1 values(2022001, 'name_example_1');
INSERT INTO tst_seg_t1 values(2022002, 'name_example_2');
INSERT INTO tst_seg_t1 values(2022003, 'name_example_3');
opengauss=# INSERT INTO tst_seg_t2 (SELECT * FROM tst_seg_t1);
opengauss=# checksum table tst_seg_t1,tst_seg_t2;
         Table          |  Checksum  
------------------------+------------
 tst_schema1.tst_seg_t1 | 5620410817
 tst_schema1.tst_seg_t2 | 5620410817
```
