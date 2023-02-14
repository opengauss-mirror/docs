# SHOW CREATE TABLE

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

Displays the created tbl\_name table.

Displays the named table created by CREATE TABLE. This syntax can also be used to query the statement for creating a view.

## Precautions <a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

N/A

## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
show create table tbl_name;
```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **tbl_name**

    ​ Table name.

## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
openGauss=# CREATE TABLE t1 (c1 INT PRIMARY KEY);
NOTICE:  CREATE TABLE / PRIMARY KEY will create implicit index "t1_pkey" for table "t1"
CREATE TABLE
openGauss=# show create table t1;
 Table |                      Create Table                       
-------+---------------------------------------------------------
 t1    | SET search_path = public;                              +
       | CREATE TABLE t1 (                                      +
       |     c1 integer NOT NULL                                +
       | )                                                      +
       | WITH (orientation=row, compression=no);                +
       | ALTER TABLE t1 ADD CONSTRAINT t1_pkey PRIMARY KEY (c1);
(1 row)
```
