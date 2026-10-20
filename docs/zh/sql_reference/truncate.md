---
description: 本文介绍 openGauss TRUNCATE 的相关内容，涵盖 功能描述、注意事项 等内容。
keywords: [openGauss, TRUNCATE, SQL参考, 功能描述, 注意事项]
---

# TRUNCATE

## 功能描述<a name="zh-cn_topic_0283137291_zh-cn_topic_0237122193_zh-cn_topic_0059777694_sf3e0cbc4893c4042ac208fca35e705e8"></a>

清理表数据，TRUNCATE快速地从表中删除所有行。

它和在目标表上进行无条件的DELETE有同样的效果，但由于TRUNCATE不做表扫描，因而快得多。在大表上操作效果更明显。

## 注意事项<a name="zh-cn_topic_0283137291_zh-cn_topic_0237122193_section5258164117111"></a>

- TRUNCATE TABLE在功能上与不带WHERE子句DELETE语句相同：二者均删除表中的全部行。
- TRUNCATE TABLE比DELETE速度快且使用系统和事务日志资源少：
    - DELETE语句每次删除一行，并在事务日志中为所删除每行记录一项。
    - TRUNCATE TABLE通过释放存储表数据所用数据页来删除数据，并且只在事务日志中记录页的释放。

- TRUNCATE、DELETE、DROP三者的差异如下：
    - TRUNCATE TABLE，删除内容，释放空间，但不删除定义。
    - DELETE TABLE，删除内容，不删除定义，不释放空间。
    - DROP TABLE，删除内容和定义，释放空间。

## 语法格式<a name="zh-cn_topic_0283137291_zh-cn_topic_0237122193_zh-cn_topic_0059777694_s8446a9bd83d843dfa13302117908ed38"></a>

- 清理表数据。

```
TRUNCATE [ TABLE ] [ ONLY ] {table_name [ * ]} [, ... ]
    [ CONTINUE IDENTITY | RESTART IDENTITY ] [ CASCADE | RESTRICT][PURGE]};
```

- 清理表分区的数据。

```
ALTER TABLE [ IF EXISTS  ] { [ ONLY  ] table_name  
                           | table_name *  
                           | ONLY ( table_name )  } 
    TRUNCATE PARTITION { partition_name  
                       | FOR (  partition_value  [, ...] )  } [ UPDATE GLOBAL INDEX ];
```

## 参数说明<a name="zh-cn_topic_0283137291_zh-cn_topic_0237122193_zh-cn_topic_0059777694_sdbad1b573aae49f5aeba613b6fc3130d"></a>

- **ONLY**

    如果声明ONLY，只有指定的表会被清空。如果没有声明ONLY，这个表以及其所有子表（若有）会被清空。

- **table\_name**

    目标表的名称（可以有模式修饰）。

    取值范围：已存在的表名。

- **CONTINUE IDENTITY**

    不改变序列的值。这是缺省值。

- **RESTART IDENTITY**

    令属于指定表的序列回归初始状态，重新开始产生值。

- **CASCADE | RESTRICT**
    - CASCADE：级联清空所有由于CASCADE而被添加到组中的表。
    - RESTRICT（缺省值）：完全清空。

- **PURGE**：默认将表数据放入回收站中，PURGE直接清理。
- **partition\_name**

    目标分区表的分区名。

    取值范围：已存在的分区名。

- **partition\_value**

    指定的分区键值。

    通过PARTITION FOR子句指定的这一组值，可以唯一确定一个分区。

    取值范围：需要进行删除数据分区的分区键的取值范围。

    >[!TIP]须知
    >使用PARTITION FOR子句时，partition\_value所在的整个分区会被清空。

- **UPDATE GLOBAL INDEX**

    如果使用该参数，则会更新分区表上的所有全局索引，以确保使用全局索引可以查询出正确的数据；如果不使用该参数，则分区表上的所有全局索引将会失效。

## 示例<a name="zh-cn_topic_0283137291_zh-cn_topic_0237122193_zh-cn_topic_0059777694_sfa74039cf5ab429abe7b4980088b2c5e"></a>

```
--创建表。
openGauss=# CREATE TABLE tpcds.reason_t1 AS TABLE tpcds.reason;

--清空表tpcds.reason_t1。
openGauss=# TRUNCATE TABLE tpcds.reason_t1;

--删除表。
openGauss=# DROP TABLE tpcds.reason_t1;
```

```
--创建分区表。
openGauss=# CREATE TABLE tpcds.reason_p
(
  r_reason_sk integer,
  r_reason_id character(16),
  r_reason_desc character(100)
)PARTITION BY RANGE (r_reason_sk)
(
  partition p_05_before values less than (05),
  partition p_15 values less than (15),
  partition p_25 values less than (25),
  partition p_35 values less than (35),
  partition p_45_after values less than (MAXVALUE)
);

--插入数据。
openGauss=# INSERT INTO tpcds.reason_p SELECT * FROM tpcds.reason;

--清空分区p_05_before。
openGauss=# ALTER TABLE tpcds.reason_p TRUNCATE PARTITION p_05_before;

--清空分区p_15。
openGauss=# ALTER TABLE tpcds.reason_p TRUNCATE PARTITION for (13);

--清空分区表。
openGauss=# TRUNCATE TABLE tpcds.reason_p;

--删除表。
openGauss=# DROP TABLE tpcds.reason_p;
```

```sql
-- 创建将要归属于表的序列。
openGauss=# CREATE SEQUENCE seq_own;
CREATE SEQUENCE
-- 创建不归属于表的序列。
openGauss=# CREATE SEQUENCE seq_not_own;
CREATE SEQUENCE
-- 创建表，且表的列的默认值来自序列。
openGauss=# CREATE TABLE truncate_a (
    id1 serial,
    id2 int default nextval('seq_own'),
    id3 int default nextval('seq_not_own')
);
NOTICE:  CREATE TABLE will create implicit sequence "truncate_a_id1_seq" for serial column "truncate_a.id1"
CREATE TABLE
-- 将序列seq_own的属主更改为表truncate_a的id2列。
openGauss=# ALTER SEQUENCE seq_own OWNED BY truncate_a.id2;
ALTER SEQUENCE
-- 向表中插入默认值。
openGauss=# INSERT INTO truncate_a DEFAULT VALUES;
INSERT 0 1
openGauss=# INSERT INTO truncate_a DEFAULT VALUES;
INSERT 0 1
-- 查看表中的值。
openGauss=# SELECT * FROM truncate_a;
 id1 | id2 | id3 
-----+-----+-----
   1 |   1 |   1
   2 |   2 |   2
(2 rows)

-- 清空表，同时令表拥有的序列seq_own和truncate_a_id1_seq重新开始。
openGauss=# TRUNCATE TABLE truncate_a RESTART IDENTITY;
TRUNCATE TABLE
-- 再次向表中插入默认值。
openGauss=# INSERT INTO truncate_a DEFAULT VALUES;
INSERT 0 1
openGauss=# INSERT INTO truncate_a DEFAULT VALUES;
INSERT 0 1
-- 再次查看表中的值，id1和id2列值从头开始，id3列的值没有从头开始。
openGauss=# SELECT * FROM truncate_a;
 id1 | id2 | id3 
-----+-----+-----
   1 |   1 |   3
   2 |   2 |   4
(2 rows)

-- 删除表。
openGauss=# DROP TABLE truncate_a;
DROP TABLE
```
