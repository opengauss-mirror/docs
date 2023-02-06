# CREATE TABLE<a name="ZH-CN_TOPIC_0289900279"></a>

## Function<a name="en-us_topic_0283137629_en-us_topic_0237122117_en-us_topic_0059778169_s0867185fef0f4a228532d432b598cb26"></a>

Creates an empty table in the current database. The table will be owned by the creator.

## Precautions<a name="en-us_topic_0283137629_en-us_topic_0237122117_en-us_topic_0059778169_sb04dbf08cbd848649163edbff21254a1"></a>

-   This section describes only the new syntax of Dolphin. The original syntax of openGauss is not deleted or modified.

## Syntax<a name="en-us_topic_0283137629_en-us_topic_0237122117_en-us_topic_0059778169_sc7a49d08f8ac43189f0e7b1c74f877eb"></a>


Create a table using LIKE without parentheses.
```
CREATE [ [ GLOBAL | LOCAL ] [ TEMPORARY | TEMP ] | UNLOGGED ] TABLE [ IF NOT EXISTS ] table_name LIKE source_table [ like_option [...] ]
```

- Additional optional statements for common table creation cannot be added after LIKE.
- Do not add the FOREIGN option before TABLE, including creating foreign tables and MOTs.
- By default, the index of the source table is copied. If you do not want to copy the index, manually specify EXCLUDING INDEXES.
- By default, the partitions of the source table are copied. If you do not want to copy partitions, manually specify EXCLUDING PARTITION.
- Only range partitions of the tables can be copied. For hash and list partitions, an error is reported because partitions are copied by default. In this case, you need to manually specify EXCLUING PARTITION. Only range-range partitions can be copied for level-2 partitions. The processing method is the same as the preceding method.

Create a table.

```
CREATE [ [ GLOBAL | LOCAL ] [ TEMPORARY | TEMP ] | UNLOGGED ] TABLE [ IF NOT EXISTS ] table_name 
    ({ column_name data_type [ compress_mode ] [ COLLATE collation ] [ column_constraint [ ... ] ]
        | table_constraint
        | table_indexclause
        | LIKE source_table [ like_option [...] ] }
        [, ... ])
    [ AUTO_INCREMENT [ = ] value ]
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
    [ ON COMMIT { PRESERVE ROWS | DELETE ROWS | DROP } ]
    [ COMPRESS | NOCOMPRESS ]
    [ TABLESPACE tablespace_name ]
    [ COMMENT {=| } 'text' ];
    [ create_option ]

Where create\_option is:

        [ WITH ( {storage_parameter = value} [, ... ] ) ]
        [ ON COMMIT { PRESERVE ROWS | DELETE ROWS | DROP } ]
        [ COMPRESS | NOCOMPRESS ]
        [ TABLESPACE tablespace_name ]
        [ COMPRESSION [=] compression_arg ]
        [ ENGINE [=] engine_name ]
        [ COLLATE [=] collation_name ]
        [ [DEFAULT] { CHARSET | CHARACTER SET } [=] charset_name ]
        [ ROW_FORMAT [=] row_format_name ]

    In addition to the WITH option, you can enter the same create\_option for multiple times. The latest input prevails.
```

-   table_indexclause:

    ```
    {INDEX | KEY} [index_name] [index_type] (key_part,...)[index_option]...
    ```
    
    This syntax does not support CREATE FOREIGN TABLE (such as MOT).


-   Values of index\_type are as follows:

    ```
    USING {BTREE | HASH | GIN | GIST | PSORT | UBTREE}
    ```

-   Values of key\_part are as follows:

    ```
    {col_name[(length)] | (expr)} [ASC | DESC]
    ```
    
    **length** indicates the prefix index.

- The index\_option parameter is as follows:

  ```
  index_option:{
  	  COMMENT 'string'
  	| index_type
  }
  ```

  The sequence and quantity of COMMENT and index\_type can be random, but only the last value of the same column takes effect.

-   The like\_option is as follows:

    ```
    { INCLUDING | EXCLUDING } { DEFAULTS | GENERATED | CONSTRAINTS | INDEXES | STORAGE | COMMENTS | PARTITION | RELOPTIONS | ALL }
    ```

## Parameter Description<a name="en-us_topic_0283137629_en-us_topic_0237122117_en-us_topic_0059778169_s99cf2ac11c79436c93385e4efd7c4428"></a>

-   **data\_type**

    Specifies the data type of the column.

    For the enumeration type ENUM and character types such as CHAR, CHARACTER, VARCHAR, TEXT, you can use the keyword CHARSET or CHARACTER SET to specify the column character set when creating a table. Currently, it is used only for syntax and has no actual purpose.

-   **column\_constraint**

    The ON UPDATE feature of MySQL is added to the column type constraint. The constraint is of the same type as the DEFAULT attribute. The ON UPDATE attribute is used to automatically update the timestamp column when the timestamp column of the UPDATE operation is set to the default value.

    ```sql
    CREATE TABLE table_name(column_name timestamp ON UPDATE CURRENT_TIMESTAMP);
    ```

-   **COLLATE collation**

    Assigns a collation to the column (which must be of a collatable data type). If no collation is specified, the default collation is used. You can run the **select \* from pg\_collation** command to query collation rules from the **pg\_collation** system catalog. The default collation rule is the row starting with **default** in the query result.

    If a collation is not supported, the database issues a warning and sets the column as the default collation.

-   **{ [DEFAULT] CHARSET | CHARACTER SET } \[=\] charset_name**

    Selects the character set used by the table. Currently, it is used only for syntax and has no actual purpose.

-   **COLLATE \[=\] collation_name**

    Selects the collation used by a table. Currently, it is used only for syntax and has no actual purpose.

-   **ROW_FORMAT \[=\] row_format_name**

    Selects the row-store format used by a table. Currently, it is used only for syntax and has no actual purpose.

## Examples<a name="en-us_topic_0283137629_en-us_topic_0237122117_en-us_topic_0059778169_s86758dcf05d442d2a9ebd272e76ed1b8"></a>

```
--Create an index on a table.
openGauss=# CREATE TABLE tpcds.warehouse_t24
(
    W_WAREHOUSE_SK            INTEGER               NOT NULL,
    W_WAREHOUSE_ID            CHAR(16)              NOT NULL,
    W_WAREHOUSE_NAME          VARCHAR(20)                   ,
    W_WAREHOUSE_SQ_FT         INTEGER                       ,
    W_STREET_NUMBER           CHAR(10)                      ,
    W_STREET_NAME             VARCHAR(60)                   ,
    W_STREET_TYPE             CHAR(15)                      ,
    W_SUITE_NUMBER            CHAR(10)                      ,
    W_CITY                    VARCHAR(60)                   ,
    W_COUNTY                  VARCHAR(30)                   ,
    W_STATE                   CHAR(2)                       ,
    W_ZIP                     CHAR(10)                      ,
    W_COUNTRY                 VARCHAR(20)                   ,
    W_GMT_OFFSET              DECIMAL(5,2)                  ,
    key (W_WAREHOUSE_SK)                                    ,
    index idx_ID using btree (W_WAREHOUSE_ID)
);

--Create composite indexes, expression indexes, and function indexes on tables.
openGauss=# CREATE TABLE tpcds.warehouse_t25
(
    W_WAREHOUSE_SK            INTEGER               NOT NULL,
    W_WAREHOUSE_ID            CHAR(16)              NOT NULL,
    W_WAREHOUSE_NAME          VARCHAR(20)                   ,
    W_WAREHOUSE_SQ_FT         INTEGER                       ,
    W_STREET_NUMBER           CHAR(10)                      ,
    W_STREET_NAME             VARCHAR(60)                   ,
    W_STREET_TYPE             CHAR(15)                      ,
    W_SUITE_NUMBER            CHAR(10)                      ,
    W_CITY                    VARCHAR(60)                   ,
    W_COUNTY                  VARCHAR(30)                   ,
    W_STATE                   CHAR(2)                       ,
    W_ZIP                     CHAR(10)                      ,
    W_COUNTRY                 VARCHAR(20)                   ,
    W_GMT_OFFSET              DECIMAL(5,2)                  ,
    key using btree (W_WAREHOUSE_SK, W_WAREHOUSE_ID desc)   ,
    index idx_SQ_FT using btree ((abs(W_WAREHOUSE_SQ_FT)))  ,
    key idx_SK using btree ((abs(W_WAREHOUSE_SK)+1))
);

--The index\_option column is included.
openGauss=# create table test_option(a int, index idx_op using btree(a) comment 'idx comment');
```

```
--Specify the character set for the column when creating a table.
openGauss=# CREATE TABLE t_column_charset(c text CHARSET test_charset);
WARNING:  character set "test_charset" for type text is not supported yet. default value set
CREATE TABLE

--Specify the character order for the table when creating the table.
openGauss=# CREATE TABLE t_table_collate(c text) COLLATE test_collation;
WARNING:  COLLATE for TABLE is not supported for current version. skipped
CREATE TABLE

--Specify the character set for the table when creating the table.
openGauss=# CREATE TABLE t_table_charset(c text) CHARSET test_charset;
WARNING:  CHARSET for TABLE is not supported for current version. skipped
CREATE TABLE

--Specify the row record format for the table when creating the table.
openGauss=# CREATE TABLE t_row_format(c text) ROW_FORMAT test_row_format;
WARNING:  ROW_FORMAT for TABLE is not supported for current version. skipped
CREATE TABLE
```
