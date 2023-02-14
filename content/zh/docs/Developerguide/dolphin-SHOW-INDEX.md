# SHOW INDEX

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

查看表的索引信息。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

- 若不指定schema_name，查询的是当前schema下的表。
- 若指定的表是schema_name.table_name格式，且显示指定了schema_name，则实际上取后者的schema。

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW { INDEX | INDEXES | KEYS }
   { FROM | IN } table_name
   [{FROM | IN} schema_name ]
   [ WHERE expr ]
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **table_name**

       表名，可指定表名，也可以指定schema_name.table_name

- **schema_name**

       schema名，可选项，若不指定，则查询的是当前schema

## 输出字段说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

| 字段          | 含义                                                           |
| ------------- | ------------------------------------------------------------ |
| Table         | 索引所属表名                                                 |
| Non_unique    | 是否是非唯一索引                                             |
| Key_name      | 索引名                                                       |
| Seq_in_index  | 索引列在索引中的序号                                         |
| Column_name   | 索引列的列名                                                 |
| Collation     | 取值有A（默认，升序），D（降序）、NULL（索引不支持排序）     |
| Cardinality   | 根据pg_statistic.stadistinct和pg_class.reltuples计算得到：<br>stadistinct > 0: stadistinct<br>stadistinct = 0: NULL<br>stadistinct < 0: reltuples * stadistinct * -1 |
| Sub_part      | 索引前缀。如果该列仅被部分索引，则是索引字符的数量；如果整个列都被索引，则是NULL。当前不支持前缀索引，NULL                                         |
| Packed        | 如何打包key值，create table时指定pack_keys；否则返回NULL。当前不支持，为NULL |
| Null          | 可能包含NULL值则是YES，否则为''                              |
| Index_type    | 使用的索引方法：BTREE、HASH等                 |
| Comment       | pg_index表中记录的indisusable为true则显示disabled，false则显示''               |
| Index_comment | 创建索引时COMMENT指定的注释信息                              |

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--创建表和索引
openGauss=# CREATE SCHEMA tst_schema;
openGauss=# SET SEARCH_PATH TO tst_schema;

openGauss=# CREATE TABLE tst_t1
openGauss-# (
openGauss(# id int primary key,
openGauss(# name varchar(20) NOT NULL
openGauss(# );
openGauss=# CREATE INDEX tst_t1_name_ind on tst_t1(name);

--查看表的索引
openGauss=# show index from tst_t1 ;
 table  | non_unique |    key_name     | seq_in_index | column_name | collation | cardinality | sub_part | packed | null | index_type | comment | index_comment 
--------+------------+-----------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------
 tst_t1 | t          | tst_t1_name_ind |            1 | name        | A         |             |          |        |      | btree      |         | 
 tst_t1 | f          | tst_t1_pkey     |            1 | id          | A         |             |          |        |      | btree      |         | 
(2 rows)
```

## 相关链接<a name="section156744489391"></a>

N/A
