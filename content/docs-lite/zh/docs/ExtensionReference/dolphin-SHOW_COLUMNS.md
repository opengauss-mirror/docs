# SHOW COLUMNS

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

查看指定表的列元信息。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

- 临时表需要指定临时表对应的schema查询。
- 复合主键索引所有参与列都会在Key字段中显示为PRI。
- 复合唯一索引所有参与列都会在Key字段中显示为UNI。
- 如果一个列参与了多个索引的创建，以该列第一个创建的索引为准显示Key字段。
- 生成列会在Default中显示生成式。
- 表名中含schemaname/dbname并且同时指定dbname时，仅匹配指定的dbname。
- 结果仅显示当前查询用户具有SELECT权限的列信息。

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW [FULL] {COLUMNS | FIELDS}
   {FROM | IN} tbl_name
   [{FROM | IN} db_name]
   [LIKE 'pattern' | WHERE expr]
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **{COLUMNS | FIELDS}**

   使用COLUMNS和FIELDS效果是等价的。

- **tbl_name**
  
   表名，可指定表名。也可以指定schema_name.table_name。

- **db_name**

   库名（或schema），当tbl_name中也指定库名（或schema名）时，优先选择本选项。

- **LIKE 'pattern'**

   pattern匹配显示结果的Field列。

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--创建简单表
openGauss=# CREATE SCHEMA tst_schema1;

openGauss=# SET SEARCH_PATH TO tst_schema1;

openGauss=# CREATE TABLE tst_t1
openGauss-# (
openGauss(# id int primary key,
openGauss(# name varchar(20) NOT NULL,
openGauss(# addr text COLLATE "de_DE",
openGauss(# phone text COLLATE "es_ES",
openGauss(# addr_code text
openGauss(# );
openGauss=# COMMENT ON COLUMN tst_t1.id IS 'identity';

--查看表的列元信息
openGauss=# SHOW COLUMNS FROM tst_t1;
   Field   |         Type          | Null | Key | Default | Extra 
-----------+-----------------------+------+-----+---------+-------
 id        | integer               | NO   | PRI | NULL    | 
 name      | character varying(20) | NO   |     | NULL    | 
 addr      | text                  | YES  |     | NULL    | 
 phone     | text                  | YES  |     | NULL    | 
 addr_code | text                  | YES  |     | NULL    | 

openGauss=# show FULL COLUMNS FROM tst_t1;
   Field   |         Type          | Collation | Null | Key | Default | Extra |               Privileges                | Comment  
-----------+-----------------------+-----------+------+-----+---------+-------+-----------------------------------------+----------
 id        | integer               | NULL      | NO   | PRI | NULL    |       | UPDATE,SELECT,REFERENCES,INSERT,COMMENT | identity
 name      | character varying(20) | NULL      | NO   |     | NULL    |       | UPDATE,SELECT,REFERENCES,INSERT,COMMENT | 
 addr      | text                  | de_DE     | YES  |     | NULL    |       | UPDATE,SELECT,REFERENCES,INSERT,COMMENT | 
 phone     | text                  | es_ES     | YES  |     | NULL    |       | UPDATE,SELECT,REFERENCES,INSERT,COMMENT | 
 addr_code | text                  | NULL      | YES  |     | NULL    |       | UPDATE,SELECT,REFERENCES,INSERT,COMMENT | 
 
 openGauss=# show FULL COLUMNS FROM tst_schema1.tst_t1;
   Field   |         Type          | Collation | Null | Key | Default | Extra |               Privileges                | Comment  
-----------+-----------------------+-----------+------+-----+---------+-------+-----------------------------------------+----------
 id        | integer               | NULL      | NO   | PRI | NULL    |       | UPDATE,SELECT,REFERENCES,INSERT,COMMENT | identity
 name      | character varying(20) | NULL      | NO   |     | NULL    |       | UPDATE,SELECT,REFERENCES,INSERT,COMMENT | 
 addr      | text                  | de_DE     | YES  |     | NULL    |       | UPDATE,SELECT,REFERENCES,INSERT,COMMENT | 
 phone     | text                  | es_ES     | YES  |     | NULL    |       | UPDATE,SELECT,REFERENCES,INSERT,COMMENT | 
 addr_code | text                  | NULL      | YES  |     | NULL    |       | UPDATE,SELECT,REFERENCES,INSERT,COMMENT | 
 
--模糊匹配、过滤
openGauss=# show full columns from tst_t1 like '%addr%';
   Field   | Type | Collation | Null | Key | Default | Extra |               Privileges                | Comment 
-----------+------+-----------+------+-----+---------+-------+-----------------------------------------+---------
 addr      | text | de_DE     | YES  |     | NULL    |       | UPDATE,SELECT,REFERENCES,INSERT,COMMENT | 
 addr_code | text | NULL      | YES  |     | NULL    |       | UPDATE,SELECT,REFERENCES,INSERT,COMMENT | 
 
openGauss=# show full columns from tst_t1 where Type='text';
   Field   | Type | Collation | Null | Key | Default | Extra |               Privileges                | Comment 
-----------+------+-----------+------+-----+---------+-------+-----------------------------------------+---------
 addr      | text | de_DE     | YES  |     | NULL    |       | UPDATE,SELECT,REFERENCES,INSERT,COMMENT | 
 phone     | text | es_ES     | YES  |     | NULL    |       | UPDATE,SELECT,REFERENCES,INSERT,COMMENT | 
 addr_code | text | NULL      | YES  |     | NULL    |       | UPDATE,SELECT,REFERENCES,INSERT,COMMENT | 

--显示权限过滤
openGauss=# CREATE USER tst_u1 PASSWORD 'XXXXXXXX';
openGauss=# SET ROLE tst_u1 PASSWORD 'XXXXXXXX';
opengauss=> SET SEARCH_PATH TO tst_schema1;

openGauss=> show full columns from tst_t1;
 Field | Type | Collation | Null | Key | Default | Extra | Privileges | Comment 
-------+------+-----------+------+-----+---------+-------+------------+---------
(0 rows)

openGauss=# RESET ROLE;
opengauss=# GRANT SELECT (addr, phone) on tst_t1 to tst_u1;
openGauss=# SET ROLE tst_u1 PASSWORD 'XXXXXXXX';

opengauss=> SET SEARCH_PATH TO tst_schema1;
openGauss=> show full columns from tst_t1;
  Field   | Type | Collation | Null | Key | Default | Extra | Privileges  | Comment 
-----------+------+-----------+------+-----+---------+-------+------------------+---------
 addr      | text | de_DE     | YES  |     | NULL    |       | SELECT     | 
 phone     | text | es_ES     | YES  |     | NULL    |       | SELECT     | 
 
```