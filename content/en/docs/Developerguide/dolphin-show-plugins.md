# SHOW PLUGINS

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

View the plug-in list in the current database.

## Precautions<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

N/A

## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW PLUGINS
```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

N/A

## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--View the plug-in list.
openGauss=# SHOW PLUGINS;
      Name       |  Status  | Type | Library | License |                      Comment                       
-----------------+----------+------+---------+---------+----------------------------------------------------
 roach_api_stub  | DISABLED |      | NULL    |         | roach api stub
 file_fdw        | ACTIVE   |      | NULL    |         | foreign-data wrapper for flat file access
 security_plugin | ACTIVE   |      | NULL    |         | provides security functionality
 hdfs_fdw        | ACTIVE   |      | NULL    |         | foreign-data wrapper for flat file access
 plpgsql         | ACTIVE   |      | NULL    |         | PL/pgSQL procedural language
 dolphin         | ACTIVE   |      | NULL    |         | sql engine
 dist_fdw        | ACTIVE   |      | NULL    |         | foreign-data wrapper for distfs access
 postgres_fdw    | DISABLED |      | NULL    |         | foreign-data wrapper for remote PostgreSQL servers
 hstore          | ACTIVE   |      | NULL    |         | data type for storing sets of (key, value) pairs
 log_fdw         | ACTIVE   |      | NULL    |         | Foreign Data Wrapper for accessing logging data

--Update the plug-in status.
openGauss=# drop extension hstore;
openGauss=# SHOW PLUGINS;
      Name       |  Status  | Type | Library | License |                      Comment                       
-----------------+----------+------+---------+---------+----------------------------------------------------
 roach_api_stub  | DISABLED |      | NULL    |         | roach api stub
 file_fdw        | ACTIVE   |      | NULL    |         | foreign-data wrapper for flat file access
 security_plugin | ACTIVE   |      | NULL    |         | provides security functionality
 hdfs_fdw        | ACTIVE   |      | NULL    |         | foreign-data wrapper for flat file access
 plpgsql         | ACTIVE   |      | NULL    |         | PL/pgSQL procedural language
 dolphin         | ACTIVE   |      | NULL    |         | sql engine
 dist_fdw        | ACTIVE   |      | NULL    |         | foreign-data wrapper for distfs access
 postgres_fdw    | DISABLED |      | NULL    |         | foreign-data wrapper for remote PostgreSQL servers
 hstore          | DISABLED |      | NULL    |         | data type for storing sets of (key, value) pairs
 log_fdw         | ACTIVE   |      | NULL    |         | Foreign Data Wrapper for accessing logging data

openGauss=# CREATE extension hstore;
openGauss=# show plugins;
      Name       |  Status  | Type | Library | License |                      Comment                       
-----------------+----------+------+---------+---------+----------------------------------------------------
 roach_api_stub  | DISABLED |      | NULL    |         | roach api stub
 file_fdw        | ACTIVE   |      | NULL    |         | foreign-data wrapper for flat file access
 security_plugin | ACTIVE   |      | NULL    |         | provides security functionality
 hdfs_fdw        | ACTIVE   |      | NULL    |         | foreign-data wrapper for flat file access
 plpgsql         | ACTIVE   |      | NULL    |         | PL/pgSQL procedural language
 dolphin         | ACTIVE   |      | NULL    |         | sql engine
 dist_fdw        | ACTIVE   |      | NULL    |         | foreign-data wrapper for distfs access
 postgres_fdw    | DISABLED |      | NULL    |         | foreign-data wrapper for remote PostgreSQL servers
 hstore          | ACTIVE   |      | NULL    |         | data type for storing sets of (key, value) pairs
 log_fdw         | ACTIVE   |      | NULL    |         | Foreign Data Wrapper for accessing logging data


```
