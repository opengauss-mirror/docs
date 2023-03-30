# DESCRIBE<a name="ZH-CN_TOPIC_0289900448"></a>

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

DESCRIBE 和 [EXPLAIN](dolphin-EXPLAIN.md) 互为同义词，可以用于查看指定表结构，或查看指定 SQL 的执行计划。

查看执行计划部分内容详见 [EXPLAIN](dolphin-EXPLAIN.md)。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

- 临时表需要指定临时表对应的schema查询。
- 复合主键索引所有参与列都会在Key字段中显示为PRI。
- 复合唯一索引所有参与列都会在Key字段中显示为UNI。
- 如果一个列参与了多个索引的创建，将按 PRI、UNI、MUL 的优先级顺序显示。
- 生成列会在Default中显示生成式。
- 不支持表同义词。

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
{DESCRIBE | DESC | EXPLAIN} tbl_name
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **{DESCRIBE | DESC | EXPLAIN}**

       使用 DESCRIBE、DESC 和 EXPLAIN 效果是等价的。

- **tbl_name**
  
       表名，可指定表名。也可以指定schema_name.table_name。


## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--创建test表
openGauss=# CREATE TABLE test2
openGauss-# (
openGauss(# id int PRIMARY KEY
openGauss(# );
NOTICE:  CREATE TABLE / PRIMARY KEY will create implicit index "test2_pkey" for table "test2"
CREATE TABLE
openGauss=# create table test
openGauss-# (
openGauss(# a SERIAL,
openGauss(# b varchar(10),
openGauss(# c varchar(10),
openGauss(# d varchar(10),
openGauss(# e varchar(10),
openGauss(# f varchar(10),
openGauss(# g varchar(10) DEFAULT 'g',
openGauss(# h varchar(10) NOT NULL,
openGauss(# i int DEFAULT 0,
openGauss(# j int DEFAULT 0,
openGauss(# k int GENERATED ALWAYS AS (i + j) STORED,
openGauss(# l int DEFAULT 0,
openGauss(# m int CHECK (m < 50),
openGauss(# PRIMARY KEY (a, b),
openGauss(# FOREIGN KEY(l) REFERENCES test2(id)
openGauss(# );
NOTICE:  CREATE TABLE will create implicit sequence "test_a_seq" for serial column "test.a"
NOTICE:  CREATE TABLE / PRIMARY KEY will create implicit index "test_pkey" for table "test"
CREATE TABLE
openGauss=# CREATE UNIQUE INDEX idx_c on test (c);
CREATE INDEX
openGauss=# CREATE UNIQUE INDEX idx_d_e on test (d, e);
CREATE INDEX
openGauss=# CREATE INDEX idx_f on test (f);
CREATE INDEX

--查看test表结构
openGauss=# desc test;
 Field |         Type          | Null | Key |             Default             | Extra
-------+-----------------------+------+-----+---------------------------------+-------
 a     | integer               | NO   | PRI | nextval('test_a_seq'::regclass) |
 b     | character varying(10) | NO   | PRI | NULL                            |
 c     | character varying(10) | YES  | UNI | NULL                            |
 d     | character varying(10) | YES  | UNI | NULL                            |
 e     | character varying(10) | YES  | UNI | NULL                            |
 f     | character varying(10) | YES  | MUL | NULL                            |
 g     | character varying(10) | YES  |     | 'g'::character varying          |
 h     | character varying(10) | NO   |     | NULL                            |
 i     | integer               | YES  |     | 0                               |
 j     | integer               | YES  |     | 0                               |
 k     | integer               | YES  |     | (i + j)                         |
 l     | integer               | YES  | MUL | 0                               |
 m     | integer               | YES  |     | NULL                            |
(13 rows)

openGauss=# desc public.test;
 Field |         Type          | Null | Key |             Default             | Extra
-------+-----------------------+------+-----+---------------------------------+-------
 a     | integer               | NO   | PRI | nextval('test_a_seq'::regclass) |
 b     | character varying(10) | NO   | PRI | NULL                            |
 c     | character varying(10) | YES  | UNI | NULL                            |
 d     | character varying(10) | YES  | UNI | NULL                            |
 e     | character varying(10) | YES  | UNI | NULL                            |
 f     | character varying(10) | YES  | MUL | NULL                            |
 g     | character varying(10) | YES  |     | 'g'::character varying          |
 h     | character varying(10) | NO   |     | NULL                            |
 i     | integer               | YES  |     | 0                               |
 j     | integer               | YES  |     | 0                               |
 k     | integer               | YES  |     | (i + j)                         |
 l     | integer               | YES  | MUL | 0                               |
 m     | integer               | YES  |     | NULL                            |
(13 rows)

openGauss=# describe public.test;
 Field |         Type          | Null | Key |             Default             | Extra
-------+-----------------------+------+-----+---------------------------------+-------
 a     | integer               | NO   | PRI | nextval('test_a_seq'::regclass) |
 b     | character varying(10) | NO   | PRI | NULL                            |
 c     | character varying(10) | YES  | UNI | NULL                            |
 d     | character varying(10) | YES  | UNI | NULL                            |
 e     | character varying(10) | YES  | UNI | NULL                            |
 f     | character varying(10) | YES  | MUL | NULL                            |
 g     | character varying(10) | YES  |     | 'g'::character varying          |
 h     | character varying(10) | NO   |     | NULL                            |
 i     | integer               | YES  |     | 0                               |
 j     | integer               | YES  |     | 0                               |
 k     | integer               | YES  |     | (i + j)                         |
 l     | integer               | YES  | MUL | 0                               |
 m     | integer               | YES  |     | NULL                            |
(13 rows)
```

## 相关链接<a name="section156744489391"></a>

[EXPLAIN](dolphin-EXPLAIN.md)

