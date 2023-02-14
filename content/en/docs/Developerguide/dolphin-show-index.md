# SHOW INDEX

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

Displays the index information of a table.

## Precautions<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

- If schema\_name is not specified, tables in the current schema are queried.
- If the specified table is in schema\_name.table\_name format and schema\_name is specified, the schema of schema\_name is used.

## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW { INDEX | INDEXES | KEYS }
   { FROM | IN } table_name
   [{FROM | IN} schema_name ]
   [ WHERE expr ]
```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **table_name**

       Table name. You can specify a table name or **schema\_name.table\_name**.

- **schema_name**

       Schema name. This parameter is optional. If this parameter is not specified, the current schema is queried.

## Output Column Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

| Column         | Description                                                          |
| ------------- | ------------------------------------------------------------ |
| Table         | Name of the table to which the index belongs                                                |
| Non_unique    | Whether the index is a non-unique index                                            |
| Key_name      | Index name                                                      |
| Seq_in_index  | Sequence number of the index column in the index                                        |
| Column_name   | Column name of the index column                                                |
| Collation     | The value can be **A** (ascending order by default), **D** (descending order), or **NULL** (indexes cannot be sorted).    |
| Cardinality   | Calculated based on pg\_statistic.stadistinct and pg\_class.reltuples:<br>stadistinct > 0: stadistinct<br>stadistinct = 0: NULL<br>stadistinct < 0: reltuples * stadistinct * -1 |
| Sub_part      | Index prefix If the column is only partially indexed, the value is the number of index characters. If the entire column is indexed, the value is NULL. Currently, the prefix index is not supported. The value is NULL.                                        |
| Packed        | How to pack the key value. Specify pack_keys when creating a table. Otherwise, NULL is returned. Not supported currently. The value is NULL.|
| Null          | If the value may contain NULL, the value is **YES**. Otherwise, the value is **''**.                             |
| Index_type    | Index method, such as Btree and HASH.                |
| Comment       | If the value of **indisusable** in the pg\_index table is **true**, **disabled** is displayed. If the value of **indisusable** in the pg\_index table is **false**, **''** is displayed.              |
| Index_comment | Comment specified by COMMENT when an index is created                             |

## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--Create an index and a table.
openGauss=# CREATE SCHEMA tst_schema;
openGauss=# SET SEARCH_PATH TO tst_schema;

openGauss=# CREATE TABLE tst_t1
openGauss-# (
openGauss(# id int primary key,
openGauss(# name varchar(20) NOT NULL
openGauss(# );
openGauss=# CREATE INDEX tst_t1_name_ind on tst_t1(name);

--View the index of a table.
openGauss=# show index from tst_t1 ;
 table  | non_unique |    key_name     | seq_in_index | column_name | collation | cardinality | sub_part | packed | null | index_type | comment | index_comment 
--------+------------+-----------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------
 tst_t1 | t          | tst_t1_name_ind |            1 | name        | A         |             |          |        |      | btree      |         | 
 tst_t1 | f          | tst_t1_pkey     |            1 | id          | A         |             |          |        |      | btree      |         | 
(2 rows)
```

## Helpful Links<a name="section156744489391"></a>

N/A
