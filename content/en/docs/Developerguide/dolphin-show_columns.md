# SHOW COLUMNS<a name="ZH-CN_TOPIC_0289900448"></a>

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

Views the column meta information of a specified table.

## Precautions<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

- You need to specify the schema corresponding to the temporary table for query.
- All participating columns of a composite primary key index are displayed as PRI in the Key column.
- All participating columns of the composite unique index are displayed as UNI in the Key column.
- If a column is involved in the creation of multiple indexes, the Key column is displayed based on the first index created in the column.
- The generated column is displayed in Default.
- If a table name contains schemaname or dbname and dbname is specified, only the specified dbname is matched.
- The result displays only the columns on which the current query user has the SELECT permission.

## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW [FULL] {COLUMNS | FIELDS}
   {FROM | IN} tbl_name
   [{FROM | IN} db_name]
   [LIKE 'pattern' | WHERE expr]
```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **{COLUMNS | FIELDS}**

   The effect of using COLUMNS is equivalent to that of using FIELDS.

- **tbl_name**
  
   Table name. You can specify a table name or **schema\_name.table\_name**.

- **db_name**

   Database name (or schema name). This option is preferred when the database name (or schema name) is also specified in tbl\_name.

- **LIKE 'pattern'**

   The pattern matches the Field column of the displayed result.

## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--Create a simple table:
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

--View the column meta information of a table.
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
 
--Fuzzy match and filtering
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

--Display permission filtering
openGauss=# CREATE USER tst_u1 PASSWORD 'tst_u1@123';
openGauss=# SET ROLE tst_u1 PASSWORD 'tst_u1@123';
opengauss=> SET SEARCH_PATH TO tst_schema1;

openGauss=> show full columns from tst_t1;
 Field | Type | Collation | Null | Key | Default | Extra | Privileges | Comment 
-------+------+-----------+------+-----+---------+-------+------------+---------
(0 rows)

openGauss=# RESET ROLE;
opengauss=# GRANT SELECT (addr, phone) on tst_t1 to tst_u1;
openGauss=# SET ROLE tst_u1 PASSWORD 'tst_u1@123';

opengauss=> SET SEARCH_PATH TO tst_schema1;
openGauss=> show full columns from tst_t1;
  Field   | Type | Collation | Null | Key | Default | Extra | Privileges  | Comment 
-----------+------+-----------+------+-----+---------+-------+------------------+---------
 addr      | text | de_DE     | YES  |     | NULL    |       | SELECT     | 
 phone     | text | es_ES     | YES  |     | NULL    |       | SELECT     | 
 
```
