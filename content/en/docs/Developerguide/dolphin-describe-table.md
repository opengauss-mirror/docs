# DESCRIBE<a name="ZH-CN_TOPIC_0289900448"></a>

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

DESCRIBE and [EXPLAIN](dolphin-EXPLAIN.md) are synonyms of each other. They can be used to view the structure of a specified table or the execution plan of a specified SQL statement.

For details about how to view an execution plan, see [EXPLAIN](dolphin-explain.md).

## Precautions<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

- You need to specify the schema corresponding to the temporary table for query.
- All participating columns of a composite primary key index are displayed as PRI in the Key column.
- All participating columns of the composite unique index are displayed as UNI in the Key column.
- If a column is involved in the creation of multiple indexes, the Key column is displayed based on the first index created in the column.
- The generated column is displayed in Default.
- Table synonyms are not supported.

## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
{DESCRIBE | DESC | EXPLAIN} tbl_name
```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **{DESCRIBE | DESC | EXPLAIN}**

       DESCRIBE, DESC, and EXPLAIN have the same effect.

- **tbl_name**
  
       Table name. You can specify a table name or **schema\_name.table\_name**.


## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--Create a test table.
openGauss=# CREATE TABLE test2
openGauss-# (
openGauss(# id int PRIMARY KEY
openGauss(# );
NOTICE:  CREATE TABLE / PRIMARY KEY will create implicit index "test2_pkey" for table "test2"
CREATE TABLE
openGauss=# create table test
openGauss-# (
openGauss(# a SERIAL,
openGauss(# b varchar(10),
openGauss(# c varchar(10),
openGauss(# d varchar(10),
openGauss(# e varchar(10),
openGauss(# f varchar(10),
openGauss(# g varchar(10) DEFAULT 'g',
openGauss(# h varchar(10) NOT NULL,
openGauss(# i int DEFAULT 0,
openGauss(# j int DEFAULT 0,
openGauss(# k int GENERATED ALWAYS AS (i + j) STORED,
openGauss(# l int DEFAULT 0,
openGauss(# m int CHECK (m < 50),
openGauss(# PRIMARY KEY (a, b),
openGauss(# FOREIGN KEY(l) REFERENCES test2(id)
openGauss(# );
NOTICE:  CREATE TABLE will create implicit sequence "test_a_seq" for serial column "test.a"
NOTICE:  CREATE TABLE / PRIMARY KEY will create implicit index "test_pkey" for table "test"
CREATE TABLE
openGauss=# CREATE UNIQUE INDEX idx_c on test (c);
CREATE INDEX
openGauss=# CREATE UNIQUE INDEX idx_d_e on test (d, e);
CREATE INDEX
openGauss=# CREATE INDEX idx_f on test (f);
CREATE INDEX

--View the structure of the test table.
openGauss=# desc test;
 Field |         Type          | Null | Key |             Default             | Extra
-------+-----------------------+------+-----+---------------------------------+-------
 a     | integer               | NO   | PRI | nextval('test_a_seq'::regclass) |
 b     | character varying(10) | NO   | PRI | NULL                            |
 c     | character varying(10) | YES  | UNI | NULL                            |
 d     | character varying(10) | YES  | UNI | NULL                            |
 e     | character varying(10) | YES  | UNI | NULL                            |
 f     | character varying(10) | YES  | MUL | NULL                            |
 g     | character varying(10) | YES  |     | 'g'::character varying          |
 h     | character varying(10) | NO   |     | NULL                            |
 i     | integer               | YES  |     | 0                               |
 j     | integer               | YES  |     | 0                               |
 k     | integer               | YES  |     | (i + j)                         |
 l     | integer               | YES  | MUL | 0                               |
 m     | integer               | YES  |     | NULL                            |
(13 rows)

openGauss=# desc public.test;
 Field |         Type          | Null | Key |             Default             | Extra
-------+-----------------------+------+-----+---------------------------------+-------
 a     | integer               | NO   | PRI | nextval('test_a_seq'::regclass) |
 b     | character varying(10) | NO   | PRI | NULL                            |
 c     | character varying(10) | YES  | UNI | NULL                            |
 d     | character varying(10) | YES  | UNI | NULL                            |
 e     | character varying(10) | YES  | UNI | NULL                            |
 f     | character varying(10) | YES  | MUL | NULL                            |
 g     | character varying(10) | YES  |     | 'g'::character varying          |
 h     | character varying(10) | NO   |     | NULL                            |
 i     | integer               | YES  |     | 0                               |
 j     | integer               | YES  |     | 0                               |
 k     | integer               | YES  |     | (i + j)                         |
 l     | integer               | YES  | MUL | 0                               |
 m     | integer               | YES  |     | NULL                            |
(13 rows)

openGauss=# describe public.test;
 Field |         Type          | Null | Key |             Default             | Extra
-------+-----------------------+------+-----+---------------------------------+-------
 a     | integer               | NO   | PRI | nextval('test_a_seq'::regclass) |
 b     | character varying(10) | NO   | PRI | NULL                            |
 c     | character varying(10) | YES  | UNI | NULL                            |
 d     | character varying(10) | YES  | UNI | NULL                            |
 e     | character varying(10) | YES  | UNI | NULL                            |
 f     | character varying(10) | YES  | MUL | NULL                            |
 g     | character varying(10) | YES  |     | 'g'::character varying          |
 h     | character varying(10) | NO   |     | NULL                            |
 i     | integer               | YES  |     | 0                               |
 j     | integer               | YES  |     | 0                               |
 k     | integer               | YES  |     | (i + j)                         |
 l     | integer               | YES  | MUL | 0                               |
 m     | integer               | YES  |     | NULL                            |
(13 rows)
```

## Helpful Links<a name="section156744489391"></a>

[EXPLAIN](dolphin-explain.md)
