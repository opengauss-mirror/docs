# SHOW CREATE DATABASE

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

显示CREATE DATABASE创建命名数据库的语句。

如果该SHOW语句包含一个IF NOT EXISTS子句，则输出也包含这样的子句。SHOW CREATE SCHEMA是的同义词SHOW CREATE DATABASE。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

在b数据库中database和schema是等价的，所以在opengauss中进行语句拼装时都按create schema拼装。

在opengauss中,创建schema支持with blockchain子句，所以在拼装时也会根据schema在系统表中的信息判断是否拼接该子句。

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW CREATE {DATABASE | SCHEMA} [IF NOT EXISTS] db_name
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **db_name**

  目标实例名。

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--查询数据库创建语句
openGauss=# show create database test_get_database;
     Database      |                  Create Database                   
-------------------+----------------------------------------------------
 test_get_database | CREATE SCHEMA test_get_database AUTHORIZATION omm 
(1 row)
```

