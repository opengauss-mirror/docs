# SHOW CREATE DATABASE<a name="ZH-CN_TOPIC_0289900448"></a>

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

Displays the named database created by CREATE DATABASE.

If the SHOW statement contains an IF NOT EXISTS clause, the output also contains such a clause. SHOW CREATE SCHEMA is a synonym for SHOW CREATE DATABASE.

## Precautions <a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

In B-compatible database, the database is equivalent to the schema. Therefore, statements are assembled based on the create schema in the openGauss.

In openGauss, the WITH BLOCKCHAIN clause is supported when a schema is created. Therefore, the system determines whether to concatenate the clause based on the schema information in the system catalog.

## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW CREATE {DATABASE | SCHEMA} [IF NOT EXISTS] db_name
```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **db_name**

  Name of the target instance.

## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--Query the database creation statement.
openGauss=# show create database test_get_database;
     Database      |                  Create Database                   
-------------------+----------------------------------------------------
 test_get_database | CREATE SCHEMA test_get_database AUTHORIZATION omm 
(1 row)
```
