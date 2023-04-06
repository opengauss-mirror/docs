# SHOW PLUGINS<a name="ZH-CN_TOPIC_0289900448"></a>

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

查看当前数据库中插件清单。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

N/A

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW PLUGINS
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

N/A

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--查看插件清单
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

--插件状态的更新显示
openGauss=# drop Extension hstore;
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

openGauss=# CREATE Extension hstore;
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