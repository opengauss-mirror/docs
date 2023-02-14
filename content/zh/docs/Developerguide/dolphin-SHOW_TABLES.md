# SHOW TABLES

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

查看当前库（或schema)的表清单。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

- 若不指定db_name，查询的是当前库(或schema)下的表清单。

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW [FULL] TABLES
   [{FROM | IN} db_name]
   [LIKE 'pattern' | WHERE expr]
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **db_name**

   库名（或schema）,可选项，若不指定，则查询的是当前库或schema。

- **LIKE 'pattern'**

   patternp匹配显示结果第一列(列名为'Tables_in_dbname [`pattern`]'）。

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--创建简单表
openGauss=# CREATE SCHEMA tst_schema;
openGauss=# SET SEARCH_PATH TO tst_schema;

openGauss=# CREATE TABLE tst_t1
openGauss-# (
openGauss(# id int primary key,
openGauss(# name varchar(20) NOT NULL,
openGauss(# addr text COLLATE "de_DE",
openGauss(# phone text COLLATE "es_ES",
openGauss(# addr_code text
openGauss(# );
openGauss=# CREATE VIEW tst_v1 AS SELECT * FROM tst_t1;
openGauss=# CREATE TABLE t_t2(id int);

--查看库（或SCHEMA）下表清单信息
openGauss=# show tables;
 Tables_in_tst_schema 
----------------------
 tst_t1
 tst_v1
 t_t2

openGauss=# show full tables;
 Tables_in_tst_schema | Table_type 
----------------------+------------
 tst_t1               | BASE TABLE
 tst_v1               | VIEW
 t_t2                 | BASE TABLE

openGauss=# show full tables in tst_schema;
 Tables_in_tst_schema | Table_type 
----------------------+------------
 tst_t1               | BASE TABLE
 tst_v1               | VIEW
 t_t2                 | BASE TABLE
 
--模糊匹配、过滤
openGauss=# show full tables like '%tst%';
 Tables_in_tst_schema (%tst%) | Table_type 
------------------------------+------------
 tst_t1                       | BASE TABLE
 tst_v1                       | VIEW

openGauss=# show full tables where Table_type='VIEW';
 Tables_in_tst_schema | Table_type 
----------------------+------------
 tst_v1               | VIEW
 
```