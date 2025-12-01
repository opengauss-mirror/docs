# SHOW TABLE STATUS<a name="ZH-CN_TOPIC_0289900448"></a>

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

Views the table status of the current database (or schema).

## Precautions <a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

If db\_name is not specified, the status of tables in the current database (or schema) is queried.

## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW TABLE STATUS
    [{FROM | IN} db_name]
    [LIKE 'pattern' | WHERE expr]
```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **db_name**

       Specifies the database name (or schema). This parameter is optional. If it is not specified, the current database or schema is queried.

- **LIKE 'pattern'**

       Indicates that the pattern matches the first column (column name: 'Name [`pattern`]') in the displayed result.

## Output Column Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

| Column          | Description                                                        |
| -------------- | ------------------------------------------------------------ |
| Name           | Specifies a table name.                                                        |
| Engine         | Specifies a storage engine type. Value range: <strong>USTORE</strong>, indicating that the table supports the Inplace-Update storage engine. **ASTORE** indicates that tables support the append-only storage engine.|
| Version        | Default value: <strong>NULL</strong>.                                                  |
| Row_format     | Specifies a storage mode. Value range: <strong>ROW</strong>, indicating that table data will be stored in rows. **COLUMN** indicates that the data is stored in columns.|
| Rows           | Specifies the number of rows.                                                        |
| Avg_row_length | Default value: <strong>NULL</strong>.                                                  |
| Data_length    | Specifies a data size, which is obtained from pg_relation_size(oid).                       |
| Max_data_length| Default value: <strong>NULL</strong>.                                                  |
| Index_length   | Specifies an index size, which is obtained from pg_indexes_size(oid).                        |
| Data_free      | Default value: <strong>NULL</strong>.                                                  |
| Auto_increment | Obtains the last value when the primary key is a sequence.                       |
| Create_time    | Specifies the creation time.                                                    |
| Update_time    | Specifies the update time.                                                    |
| Check_time     | Default value: <strong>NULL</strong>.                                                  |
| Collation      | Specifies a collocation set.                                                      |
| Checksum       | Default value: <strong>NULL</strong>.                                                  |
| Create_options | Specifies table creation options.                                                    |
| Comment        | Specifies comments.                                                        |

## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

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

--Check the table status.
opengauss=# show table status;
  Name  | Engine | Version | Row_format | Rows | Avg_row_length | Data_length | Max_data_length | Index_length | Data_free | Auto_increment |     Create_time     |     Update_time     | Check_time |  Collation  | Checksum |                    Create_options                    |     Comment
--------+--------+---------+------------+------+----------------+-------------+-----------------+--------------+-----------+----------------+---------------------+---------------------+------------+-------------+----------+------------------------------------------------------+-----------------
 tst_t1 | USTORE |         | ROW        |    0 |              0 |           0 |               0 |        57344 |         0 |              1 | 2022-10-18 09:04:24 | 2022-10-18 09:04:24 |            | en_US.UTF-8 |          | {orientation=row,storage_type=ustore,compression=no} | this is comment
 tst_t2 | ASTORE |         | COLUMN     |    0 |              0 |       24576 |               0 |         8192 |         0 |              1 | 2022-10-18 09:04:24 | 2022-10-18 09:04:24 |            | en_US.UTF-8 |          | {orientation=column,compression=low}                 |
 tst_v1 |        |         |            |    0 |              0 |           0 |               0 |            0 |         0 |                | 2022-10-18 09:04:24 | 2022-10-18 09:04:24 |            | en_US.UTF-8 |          |                                                      |
(3 rows)

--Use the like fuzzy match.
opengauss=# show table status in tst_schema like '%tst_t%';
  Name  | Engine | Version | Row_format | Rows | Avg_row_length | Data_length | Max_data_length | Index_length | Data_free | Auto_increment |     Create_time     |     Update_time     | Check_time |  Collation  | Checksum |                    Create_options                    |     Comment
--------+--------+---------+------------+------+----------------+-------------+-----------------+--------------+-----------+----------------+---------------------+---------------------+------------+-------------+----------+------------------------------------------------------+-----------------
 tst_t1 | USTORE |         | ROW        |    0 |              0 |           0 |               0 |        57344 |         0 |              1 | 2022-10-18 09:04:24 | 2022-10-18 09:04:24 |            | en_US.UTF-8 |          | {orientation=row,storage_type=ustore,compression=no} | this is comment
 tst_t2 | ASTORE |         | COLUMN     |    0 |              0 |       24576 |               0 |         8192 |         0 |              1 | 2022-10-18 09:04:24 | 2022-10-18 09:04:24 |            | en_US.UTF-8 |          | {orientation=column,compression=low}                 |
(2 rows)

--Filter by the where condition.
opengauss=# show table status from tst_schema where Engine='ASTORE';
  Name  | Engine | Version | Row_format | Rows | Avg_row_length | Data_length | Max_data_length | Index_length | Data_free | Auto_increment |     Create_time     |     Update_time     | Check_time |  Collation  | Checksum |            Create_options            | Comment
--------+--------+---------+------------+------+----------------+-------------+-----------------+--------------+-----------+----------------+---------------------+---------------------+------------+-------------+----------+--------------------------------------+---------
 tst_t2 | ASTORE |         | COLUMN     |    0 |              0 |       24576 |               0 |         8192 |         0 |              1 | 2022-10-18 09:04:24 | 2022-10-18 09:04:24 |            | en_US.UTF-8 |          | {orientation=column,compression=low} |
(1 row)
 
```
