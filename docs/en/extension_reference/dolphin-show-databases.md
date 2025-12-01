# SHOW DATABASES <a name="ZH-CN_TOPIC_0289900448"></a>

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

Lists all schemas or queries schemas by condition.

## Precautions<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-   The B-compatible SHOW DATABASES command is used to query databases, and the openGauss SHOW DATABASES command is used to query schemas.
-   Schemas are displayed by name.

## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW {DATABASES | SCHEMAS} [LIKE 'pattern' | WHERE expr]

```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **{DATABASES | SCHEMAS}**

       The two are equivalent.

- **[LIKE 'pattern' | WHERE expr]**

       The **pattern** supports the LIKE syntax, which can be the full name or part of schema\_name for fuzzy query. The expr supports any expression. The common usage is **show database where database = 'name'**.

## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--View all schemas in the current database.
openGauss=# create schema a1;
CREATE SCHEMA

openGauss=# show databases;
      Database
--------------------
 a1
 blockchain
 cstore
 db4ai
 dbe_perf
 dbe_pldebugger
 dbe_pldeveloper
 information_schema
 pg_catalog
 pg_toast
 pkg_service
 public
 snapshot
 sqladvisor
(14 rows)

--Query schemas by condition.
openGauss=# create schema abb1;
CREATE SCHEMA
openGauss=# create schema abb2;
CREATE SCHEMA
openGauss=# create schema abb3;
CREATE SCHEMA
openGauss=# show databases like '%bb%';
 Database
----------
 abb1
 abb2
 abb3
(3 rows)

openGauss=# show databases like 'a%';
 Database
----------
 a1
 abb1
 abb2
 abb3
(4 rows)

openGauss=# show schemas where database = 'a1';
 Database
----------
 a1
(1 row)
```
