# SHOW CREATE TABLE<a name="ZH-CN_TOPIC_0289900448"></a>

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

显示创建表 tbl_name

显示CREATE TABLE创建命名表的语句。 此语法也可用于查询视图(view)的创建语句。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

- 此语法不支持查询临时表。
- 字段字符集和字符序将从表上继承，字段和表的字符集、字符序在SHOW CREATE TABLE中均会全部显示。若表的默认字符集或字符序不存在，当b_format_behavior_compat_options = 'default_collation'时，字符集和字符序将继承当前数据库的字符集及其对应的默认字符序，未设置b_format_behavior_compat_options时，无字符集和字符序显示。

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
show create table tbl_name;
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **tbl_name**

    ​ 表名。

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

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
