# SHOW TABLE STATUS<a name="ZH-CN_TOPIC_0289900448"></a>

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

查看当前库（或schema）的表状态。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

若不指定db_name，查询的是当前库（或schema）下的表状态。

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW TABLE STATUS
    [{FROM | IN} db_name]
    [LIKE 'pattern' | WHERE expr]
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **db_name**

       库名（或schema），可选项，若不指定，则查询的是当前库或schema。

- **LIKE 'pattern'**

       pattern匹配显示结果第一列（列名为'Name [`pattern`]'）。

## 输出字段说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

| 字段           | 含义                                                         |
| -------------- | ------------------------------------------------------------ |
| Name           | 表名                                                         |
| Engine         | 存储引擎类型。取值范围：USTORE，表示表支持Inplace-Update存储引擎。ASTORE，表示表支持Append-Only存储引擎。|
| Version        | 默认值NULL                                                   |
| Row_format     | 存储方式。取值范围：ROW，表示表的数据将以行式存储。COLUMN，表示表的数据将以列式存储。|
| Rows           | 行数                                                         |
| Avg_row_length | 默认值NULL                                                   |
| Data_length    | 数据大小，由pg_relation_size(oid)获得                        |
| Max_data_length| 默认值NULL                                                   |
| Index_length   | 索引大小，由pg_indexes_size(oid)获得                         |
| Data_free      | 默认值NULL                                                   |
| Auto_increment | 当primary key为sequence时获取其last值                        |
| Create_time    | 创建时间                                                     |
| Update_time    | 更新时间                                                     |
| Check_time     | 默认值NULL                                                   |
| Collation      | 排序集                                                       |
| Checksum       | 默认值NULL                                                   |
| Create_options | 建表选项                                                     |
| Comment        | 注释                                                         |

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
opengauss=# CREATE SCHEMA tst_schema;
opengauss=#
opengauss=# SET SEARCH_PATH TO tst_schema;
opengauss=#
opengauss=# CREATE TABLE tst_t1
opengauss-# (
opengauss(# id serial primary key,
opengauss(# name varchar(20),
opengauss(# phone text
opengauss(# )WITH(ORIENTATION=ROW, STORAGE_TYPE=USTORE);
opengauss=#
opengauss=# COMMENT ON TABLE tst_t1 IS 'this is comment';
opengauss=#
opengauss=# CREATE VIEW tst_v1 AS SELECT * FROM tst_t1;
opengauss=#
opengauss=# CREATE TABLE tst_t2
opengauss-# (
opengauss(# id serial primary key,
opengauss(# name varchar(20),
opengauss(# phone text
opengauss(# )WITH(ORIENTATION=COLUMN);
opengauss=#

--查看表状态
opengauss=# show table status;
  Name  | Engine | Version | Row_format | Rows | Avg_row_length | Data_length | Max_data_length | Index_length | Data_free | Auto_increment |     Create_time     |     Update_time     | Check_time |  Collation  | Checksum |                    Create_options                    |     Comment
--------+--------+---------+------------+------+----------------+-------------+-----------------+--------------+-----------+----------------+---------------------+---------------------+------------+-------------+----------+------------------------------------------------------+-----------------
 tst_t1 | USTORE |         | ROW        |    0 |              0 |           0 |               0 |        57344 |         0 |              1 | 2022-10-18 09:04:24 | 2022-10-18 09:04:24 |            | en_US.UTF-8 |          | {orientation=row,storage_type=ustore,compression=no} | this is comment
 tst_t2 | ASTORE |         | COLUMN     |    0 |              0 |       24576 |               0 |         8192 |         0 |              1 | 2022-10-18 09:04:24 | 2022-10-18 09:04:24 |            | en_US.UTF-8 |          | {orientation=column,compression=low}                 |
 tst_v1 |        |         |            |    0 |              0 |           0 |               0 |            0 |         0 |                | 2022-10-18 09:04:24 | 2022-10-18 09:04:24 |            | en_US.UTF-8 |          |                                                      |
(3 rows)

--like 模糊匹配
opengauss=# show table status in tst_schema like '%tst_t%';
  Name  | Engine | Version | Row_format | Rows | Avg_row_length | Data_length | Max_data_length | Index_length | Data_free | Auto_increment |     Create_time     |     Update_time     | Check_time |  Collation  | Checksum |                    Create_options                    |     Comment
--------+--------+---------+------------+------+----------------+-------------+-----------------+--------------+-----------+----------------+---------------------+---------------------+------------+-------------+----------+------------------------------------------------------+-----------------
 tst_t1 | USTORE |         | ROW        |    0 |              0 |           0 |               0 |        57344 |         0 |              1 | 2022-10-18 09:04:24 | 2022-10-18 09:04:24 |            | en_US.UTF-8 |          | {orientation=row,storage_type=ustore,compression=no} | this is comment
 tst_t2 | ASTORE |         | COLUMN     |    0 |              0 |       24576 |               0 |         8192 |         0 |              1 | 2022-10-18 09:04:24 | 2022-10-18 09:04:24 |            | en_US.UTF-8 |          | {orientation=column,compression=low}                 |
(2 rows)

--where 条件筛选
opengauss=# show table status from tst_schema where Engine='ASTORE';
  Name  | Engine | Version | Row_format | Rows | Avg_row_length | Data_length | Max_data_length | Index_length | Data_free | Auto_increment |     Create_time     |     Update_time     | Check_time |  Collation  | Checksum |            Create_options            | Comment
--------+--------+---------+------------+------+----------------+-------------+-----------------+--------------+-----------+----------------+---------------------+---------------------+------------+-------------+----------+--------------------------------------+---------
 tst_t2 | ASTORE |         | COLUMN     |    0 |              0 |       24576 |               0 |         8192 |         0 |              1 | 2022-10-18 09:04:24 | 2022-10-18 09:04:24 |            | en_US.UTF-8 |          | {orientation=column,compression=low} |
(1 row)
 
```