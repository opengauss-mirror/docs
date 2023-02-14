# USE db_name

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

The USE db\_name statement uses the db\_name database as the default (current) database for subsequent statements. The database remains the default database until the end of the paragraph, or until a different USE statement is published.

## Precautions <a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

N/A

## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
USE db_name
```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **db_name**

  ​    Database name

## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--Switch to the db1 database.
openGauss=# USE db1;
SET
openGauss=# CREATE TABLE test(a text);
CREATE TABLE
openGauss=# INSERT INTO test VALUES('db1');
INSERT 0 1

--Switch to the db2 database.
openGauss=# USE db2;
SET
openGauss=# CREATE TABLE test(a text);
CREATE TABLE
openGauss=# INSERT INTO test VALUES('db2');
INSERT 0 1
openGauss=# select a from db1.test;
  a  
-----
 db1
(1 row)

openGauss=# select a from db2.test;
  a  
-----
 db2
(1 row)

openGauss=# select a from test;
  a  
-----
 db2
(1 row)

--Switch to the db1 database.
openGauss=# USE db1;
SET
openGauss=# select a from test;
  a  
-----
 db1
(1 row)
```

## Helpful Links<a name="section156744489391"></a>

N/A
