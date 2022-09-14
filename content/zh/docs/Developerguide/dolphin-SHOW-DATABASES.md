# SHOW DATABASES <a name="ZH-CN_TOPIC_0289900448"></a>

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

列出所有或按条件查询相关schema。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-   b数据库的show databases是查查询据库操作，openGauss的show databases是查询schema操作。
-   schema会按名称顺序展示。

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW {DATABASES | SCHEMAS} [LIKE 'pattern' | WHERE expr]

```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **{DATABASES | SCHEMAS}**

       两者是等价的。

- **[LIKE 'pattern' | WHERE expr]**

       pattern支持like语法，可以是schema_name的全称或者一部分，用于模糊查询；expr支持任意表达式，通常的用法是：show database where database = 'name'

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--查看当前数据库下所有schema
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

--按条件查询schema
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
