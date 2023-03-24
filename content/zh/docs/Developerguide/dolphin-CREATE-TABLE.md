# CREATE TABLE<a name="ZH-CN_TOPIC_0289900279"></a>

## 功能描述<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_s0867185fef0f4a228532d432b598cb26"></a>

在当前数据库中创建一个新的空白表，该表由命令执行者所有。

## 注意事项<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_sb04dbf08cbd848649163edbff21254a1"></a>

-   本章节只包含dolphin新增的语法，原openGauss的语法未做删除和修改。

## 语法格式<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_sc7a49d08f8ac43189f0e7b1c74f877eb"></a>


通过无括号like创建表。
```
CREATE [ [ GLOBAL | LOCAL ] [ TEMPORARY | TEMP ] | UNLOGGED ] TABLE [ IF NOT EXISTS ] table_name LIKE source_table [ like_option [...] ]
```

- like后不能添加普通建表的额外可选语句。
- table前不能添加foreign选项，包括外表、mot表的创建。
- 默认复制源表的索引，若不希望复制索引，需要手动指定EXCLUDING INDEXES。
- 默认复制源分区表的分区，若不希望复制分区，需要手动指定EXCLUDING PARTITION。
- 对于含索引的分区表，若只指定EXCLUDING PARTITION，由于默认复制分区，将会报错，因为普通表不支持分区索引。
- 只支持复制range分区表的分区，对于hash、list分区表，由于默认复制分区，会直接报错，需要手动指定EXCLUING PARTITION。二级分区只支持复制range-range分区，处理方法同上。

创建表。

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

其中create_option为：

        [ WITH ( {storage_parameter = value} [, ... ] ) ]
        [ ON COMMIT { PRESERVE ROWS | DELETE ROWS | DROP } ]
        [ COMPRESS | NOCOMPRESS ]
        [ TABLESPACE tablespace_name ]
        [ COMPRESSION [=] compression_arg ]
        [ ENGINE [=] engine_name ]
        [ COLLATE [=] collation_name ]
        [ [DEFAULT] { CHARSET | CHARACTER SET } [=] charset_name ]
        [ ROW_FORMAT [=] row_format_name ]
        [ AUTOEXTEND_SIZE [=] value ]
        [ AVG_ROW_LENGTH [=] value ]
        [ CHECKSUM [=] value ]
        [ CONNECTION [=] 'connect_string' ]
        [ {DATA | INDEX} DIRECTORY [=] 'absolute path to directory' ]
        [ DELAY_KEY_WRITE [=] value ]
        [ ENCRYPTION [=] 'encryption_string' ]
        [ ENGINE_ATTRIBUTE [=] 'string' ]
        [ INSERT_METHOD [=] { NO | FIRST | LAST } ]
        [ KEY_BLOCK_SIZE [=] value ]
        [ MAX_ROWS [=] value ]
        [ MIN_ROWS [=] value ]
        [ PACK_KEYS [=] value ]
        [ PASSWORD [=] 'password' ]
        [ START TRANSACTION ]
        [ SECONDARY_ENGINE_ATTRIBUTE [=] 'string' ]
        [ STATS_AUTO_RECALC [=] value ]
        [ STATS_PERSISTENT [=] value ]
        [ STATS_SAMPLE_PAGES [=] value ]
        [ UNION [=] (tbl_name[,tbl_name]...) ]
        [ TABLESPACE tablespace_name STORAGE DISK ]
        [ [TABLESPACE tablespace_name] STORAGE MEMORY ]

    除了WITH选项外允许输入多次同一种create_option，以最后一次的输入为准。
```

- 创建表上索引table_indexclause：

  ```
  {INDEX | KEY} [index_name] [index_type] (key_part,...)[index_option]...
  ```

  该语法不支持CREATE FOREIGN TABLE (MOT表等) 创建。

-   其中参数index_type为：

    ```
    USING {BTREE | HASH | GIN | GIST | PSORT | UBTREE}
    ```

-   其中参数key_part为：

    ```
    {col_name[(length)] | (expr)} [ASC | DESC]
    ```
    
    length为前缀索引。

- 其中参数index_option为：

  ```
  index_option:{
  	  COMMENT 'string'
  	| index_type
    | [ VISIBLE | INVISIBLE ]
  }
  ```

  COMMENT、index_type、[ VISIBLE | INVISIBLE ] 的顺序和数量任意，但相同字段仅最后一个值生效。

-   其中like选项like\_option为：

    ```
    { INCLUDING | EXCLUDING } { DEFAULTS | GENERATED | CONSTRAINTS | INDEXES | STORAGE | COMMENTS | PARTITION | RELOPTIONS | ALL }
    ```

其中table_indexclause中包含：
    ```sql
    FULLTEXT [INDEX | KEY] [index_name] (column_name [, ...]) [WITH PARSER NGRAM]
    ```
column_name为多列时，列名用逗号分隔。

## 参数说明<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_s99cf2ac11c79436c93385e4efd7c4428"></a>

-   **data\_type**

    字段的数据类型。

    对枚举类型ENUM，以及CHAR, CHARACTER, VARCHAR, TEXT等字符类型，创建表格时可使用关键字CHARSET或CHARACTER SET声明列字符集。目前该特性仅做语法支持，不实现功能。

-   **column\_constraint**

    字段的类型约束中，添加了mysql的ON UPDATE特性，归类于字段类型约束。与DEFAULT属性属于同类约束。该ON UPDATE属性用于，执行UPDATE操作timestamp字段为缺省时，则自动更新timestamp字段的时间截。

    ```sql
    CREATE TABLE table_name(column_name timestamp ON UPDATE CURRENT_TIMESTAMP);
    ```

-   **COLLATE collation**

    COLLATE子句指定列的排序规则（该列必须是可排列的数据类型）。如果没有指定，则使用默认的排序规则。排序规则可以使用“select \* from pg\_collation;”命令从pg\_collation系统表中查询，默认的排序规则为查询结果中以default开始的行。

    对未被支持的排序规则，数据库将发出警告，并将该列设置为默认的排序规则。

-   **{ [DEFAULT] CHARSET | CHARACTER SET } \[=\] charset_name**

    用于选择表所使用的字符集；目前该特性仅有语法支持，不实现功能。

-   **COLLATE \[=\] collation_name**

    用于选择表所使用的排序规则；目前该特性仅有语法支持，不实现功能。

-   **ROW_FORMAT \[=\] row_format_name**

    用于选择表所使用的行存储格式；目前该特性仅有语法支持，不实现功能。

-   **AUTO\_INCREMENT**

    该关键字将字段指定为自动增长列。自动增长列必须是某个索引的第一个字段。
    自动增长列数据类型不能为BOOL类型。

-   **AUTOEXTEND\_SIZE \[=\] value**
    
    用于指定在表空间变满时扩展表空间大小；目前该特性仅有语法支持，不实现功能。参数的取值范围包括非负整数，小数，标识符，非负整数+标识符，小数+标识符。

-   **AVG\_ROW\_LENGTH \[=\] value**

    用于指定表的平均行长度；目前该特性仅有语法支持，不实现功能。参数的取值范围包括非负整数，小数。

-   **CHECKSUM \[=\] value**
    
    用于指定是否维护所有行的实时校验和；目前该特性仅有语法支持，不实现功能。参数的取值范围为非负整数，小数，十六进制数。

-   **CONNECTION \[=\] 'connect_string'**
  
    用于指定联合表的连接字符串；目前该特性仅有语法支持，不实现功能。参数的取值范围为任意字符串。

-   **{DATA | INDEX} DIRECTORY \[=\] 'absolute path to directory'**

    用于指定表数据数据和索引的存储目录；目前该特性仅有语法支持，不实现功能。参数的取值范围为任意字符串。

-   **DELAY\_KEY\_WRITE \[=\] value**
    
    用于指定是否延迟表的索引更新直到表关闭；目前该特性仅有语法支持，不实现功能。参数的取值范围为非负整数，小数，十六进制数。

-   **ENCRYPTION \[=\] 'encryption_string'**

    用于指定表启用或禁用页面级数据加密；目前该特性仅有语法支持，不实现功能。参数的取值范围为任意字符串。

-   **ENGINE\_ATTRIBUTE \[=\] 'string'**

    用于指定主存储引擎的表属性；目前该特性仅有语法支持，不实现功能。参数的取值范围为任意字符串。

-   **INSERT\_METHOD \[=\] { NO | FIRST | LAST }**

    用于指定应将行插入到的表；目前该特性仅有语法支持，不实现功能。参数的取值范围为NO，FIRST，LAST。

-   **KEY\_BLOCK\_SIZE \[=\] value**

    用于指定索引键块的字节大小；目前该特性仅有语法支持，不实现功能。参数的取值范围为非负整数，小数。

-   **MAX\_ROWS [\=\] value**

    用于指定计划在表中存储的最大行数；目前该特性仅有语法支持，不实现功能。参数的取值范围为非负整数，小数。

-   **MIN\_ROWS \[=\] value**
    
    用于指定计划在表中存储的最小行数；目前该特性仅有语法支持，不实现功能。参数的取值范围为非负整数，小数。

-   **PACK\_KEYS \[=\] value**

    用于指定控制压缩索引的方式；目前该特性仅有语法支持，不实现功能。参数的取值范围为非负整数，小数，十六进制数，DEFAULT。

-   **PASSWORD \[=\] 'password'**
    
    此选项未使用；目前该特性仅有语法支持，不实现功能。参数的取值范围为任意字符串。

-   **SECONDARY\_ENGINE\_ATTRIBUTE \[=\] 'string'**

    用于指定辅助存储引擎的表属性；目前该特性仅有语法支持，不实现功能。参数的取值范围为任意字符串。

-   **START TRANSACTION**

    用于开启事务模式；目前该特性仅有语法支持，不实现功能。

-   **STATS\_AUTO\_RECALC \[=\] value**

    用于指定是否自动重新计算表的持久统计信息；目前该特性仅有语法支持，不实现功能。参数的取值范围为非负整数，小数，十六进制数，DEFAULT。

-   **STATS\_PERSISTENT \[=\] value**

    用于指定是否为表启用持久统计信息；目前该特性仅有语法支持，不实现功能。参数的取值范围为非负整数，小数，十六进制数，DEFAULT。

-   **STATS\_SAMPLE\_PAGES \[=\] value**

    用于指定估计索引列的基数和其他统计信息时要采样的索引页数；目前该特性仅有语法支持，不实现功能。参数的取值范围为非负整数，小数，十六进制数。

-   **UNION \[=\] (tbl\_name\[,tbl\_name\]...)**

    用于访问一组相同的表作为一个表；目前该特性仅有语法支持，不实现功能。

-   **TABLESPACE tablespace\_name STORAGE DISK**

    用于指定表存储在磁盘；目前该特性仅有语法支持，不实现功能。

-   **\[TABLESPACE tablespace\_name\] STORAGE MEMORY**

    用于指定表存储在内存；目前该特性仅有语法支持，不实现功能。

## 示例<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_s86758dcf05d442d2a9ebd272e76ed1b8"></a>

```
--创建表上索引
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

--创建表上组合索引、表达式索引、函数索引
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

--创建带INVISIBLE普通索引的表
openGauss=# CREATE TABLE tpcds.warehouse_t26
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
    index idx_ID using btree (W_WAREHOUSE_ID) INVISIBLE
);

--包含index_option字段
openGauss=# create table test_option(a int, index idx_op using btree(a) comment 'idx comment');
```

```
--创建表格时对列指定字符集。
openGauss=# CREATE TABLE t_column_charset(c text CHARSET test_charset);
WARNING:  character set "test_charset" for type text is not supported yet. default value set
CREATE TABLE

--创建表格时对表格指定字符序。
openGauss=# CREATE TABLE t_table_collate(c text) COLLATE test_collation;
WARNING:  COLLATE for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表格时对表格指定字符集。
openGauss=# CREATE TABLE t_table_charset(c text) CHARSET test_charset;
WARNING:  CHARSET for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表格时对表格指定行记录格式。
openGauss=# CREATE TABLE t_row_format(c text) ROW_FORMAT test_row_format;
WARNING:  ROW_FORMAT for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表时对表指定在表空间变满时扩展表空间大小。
openGauss=# CREATE TABLE t_autoextend_size(c text) AUTOEXTEND_SIZE 4M;
WARNING:  AUTOEXTEND_SIZE for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表时对表指定表的平均行长度。
openGauss=# CREATE TABLE t_avg_row_length(c text) AVG_ROW_LENGTH 10;
WARNING:  AVG_ROW_LENGTH for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表时对表指定是否维护所有行的实时校验和。
openGauss=#	CREATE TABLE t_checksum(c text) CHECKSUM 0;
WARNING:  CHECKSUM for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表时对表指定联合表的连接字符串。
openGauss=# CREATE TABLE t_connection(c text) CONNECTION 'connect_string';
WARNING:  CONNECTION for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表时对表指定表数据数据和索引的存储目录。
openGauss=# CREATE TABLE t_data_directory(c text) DATA DIRECTORY 'data_directory';
WARNING:  DIRECTORY for TABLE is not supported for current version. skipped
CREATE TABLE
openGauss=# CREATE TABLE t_index_directory(c text) INDEX DIRECTORY 'index_directory';
WARNING:  DIRECTORY for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表时对表指定是否延迟表的索引更新直到表关闭。
openGauss=# CREATE TABLE t_delay_key_write(c text) DELAY_KEY_WRITE 1;
WARNING:  DELAY_KEY_WRITE for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表时对表指定表启用或禁用页面级数据加密。
openGauss=# CREATE TABLE t_encryption(c text) ENCRYPTION 'Y';
WARNING:  ENCRYPTION for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表时对表指定主存储引擎的表属性。
openGauss=# CREATE TABLE t_engine_attribute(c text) ENGINE_ATTRIBUTE 'engine_attribute';
WARNING:  ENGINE_ATTRIBUTE for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表时对表指定应将行插入到的表。
openGauss=# CREATE TABLE t_insert_method(c text) INSERT_METHOD NO;
WARNING:  INSERT_METHOD for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表时对表指定索引键块的字节大小。
openGauss=# CREATE TABLE t_key_block_size(c text) KEY_BLOCK_SIZE 10;
WARNING:  KEY_BLOCK_SIZE for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表时对表指定计划在表中存储的最大行数。
openGauss=# CREATE TABLE t_max_rows(c text) MAX_ROWS 20;
WARNING:  MAX_ROWS for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表时对表指定计划在表中存储的最小行数。
openGauss=# CREATE TABLE t_min_rows(c text) MIN_ROWS 5;
WARNING:  MIN_ROWS for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表时对表指定控制压缩索引的方式。
openGauss=# CREATE TABLE t_pack_keys(c text) PACK_KEYS DEFAULT;
WARNING:  PACK_KEYS for TABLE is not supported for current version. skipped
CREATE TABLE

openGauss=# CREATE TABLE t_password(c text) PASSWORD 'password';
WARNING:  PASSWORD for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表时对表指定开启事务模式。
openGauss=# CREATE TABLE t_start_transaction(c text) START TRANSACTION;
WARNING:  START TRANSACTION for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表时对表指定辅助存储引擎的表属性。
openGauss=# CREATE TABLE t_secondary_engine_attribute(c text) SECONDARY_ENGINE_ATTRIBUTE 'secondary_engine_attribute';
WARNING:  SECONDARY_ENGINE_ATTRIBUTE for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表时对表指定是否自动重新计算表的持久统计信息。
openGauss=# CREATE TABLE t_stats_auto_recalc(c text) STATS_AUTO_RECALC DEFAULT;
WARNING:  STATS_AUTO_RECALC for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表时对表指定是否为表启用持久统计信息。
openGauss=# CREATE TABLE t_stats_persistent(c text) STATS_PERSISTENT DEFAULT;
WARNING:  STATS_PERSISTENT for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表时对表指定估计索引列的基数和其他统计信息时要采样的索引页数。
openGauss=# CREATE TABLE t_stats_sample_pages(c text) STATS_SAMPLE_PAGES 1;
WARNING:  STATS_SAMPLE_PAGES for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表时访问一组相同的表作为一个表。
openGauss=# CREATE TABLE t_union(c text) UNION(a, b);
WARNING:  UNION for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表时对表格指定表存储在磁盘。
openGauss=# CREATE TABLESPACE test ADD DATAFILE 'data.ibd';
WARNING:  Suffix ".ibd" of datafile path detected. The actual path will be renamed as "data_ibd"
CREATE TABLESPACE
openGauss=# CREATE TABLE t_tablespace_storage_disk(c text) TABLESPACE test STORAGE DISK;
WARNING:  TABLESPACE_OPTION for TABLE is not supported for current version. skipped
CREATE TABLE

--创建表时对表格指定表存储在内存。
openGauss=# CREATE TABLESPACE test ADD DATAFILE 'data.ibd';
WARNING:  Suffix ".ibd" of datafile path detected. The actual path will be renamed as "data_ibd"
CREATE TABLESPACE
openGauss=# CREATE TABLE t_tablespace_storage_memory(c text) TABLESPACE test STORAGE MEMORY;
WARNING:  TABLESPACE_OPTION for TABLE is not supported for current version. skipped
CREATE TABLE
```

--创建兼容MySQL全文索引语法的表。前提是兼容模式为B的数据库。
```sql
openGauss=# CREATE TABLE test (
openGauss(# id int unsigned auto_increment not null primary key,
openGauss(# title varchar,
openGauss(# boby text,
openGauss(# name name,
openGauss(# FULLTEXT (title, boby) WITH PARSER ngram
openGauss(# );
NOTICE:  CREATE TABLE will create implicit sequence "test_id_seq" for serial column "test.id"
NOTICE:  CREATE TABLE / PRIMARY KEY will create implicit index "test_pkey" for table "test"
CREATE TABLE
openGauss=# drop table if exists articles;
NOTICE:  table "articles" does not exist, skipping
DROP TABLE
openGauss=# CREATE TABLE articles (
openGauss(# ID int,
openGauss(# title VARCHAR(100),
openGauss(# FULLTEXT INDEX ngram_idx(title)WITH PARSER ngram
openGauss(# );
CREATE TABLE
openGauss=# \d articles
       Table "fulltext_test.articles"
 Column |          Type          | Modifiers
--------+------------------------+-----------
 ID     | integer                |
 title  | character varying(100) |
Indexes:
    "ngram_idx" gin (to_tsvector('ngram'::regconfig, title::text)) TABLESPACE pg_default

openGauss=# drop table if exists articles;
DROP TABLE
openGauss=# CREATE TABLE articles (
openGauss(# ID int,
openGauss(# title VARCHAR(100),
openGauss(# FULLTEXT INDEX (title)WITH PARSER ngram
openGauss(# );
CREATE TABLE
openGauss=# \d articles
       Table "fulltext_test.articles"
 Column |          Type          | Modifiers
--------+------------------------+-----------
 ID     | integer                |
 title  | character varying(100) |
Indexes:
    "articles_to_tsvector_idx" gin (to_tsvector('ngram'::regconfig, title::text)) TABLESPACE pg_default

openGauss=# drop table if exists articles;
DROP TABLE
openGauss=# CREATE TABLE articles (
openGauss(# ID int,
openGauss(# title VARCHAR(100),
openGauss(# FULLTEXT KEY keyngram_idx(title)WITH PARSER ngram
openGauss(# );
CREATE TABLE
openGauss=# \d articles
       Table "fulltext_test.articles"
 Column |          Type          | Modifiers
--------+------------------------+-----------
 ID     | integer                |
 title  | character varying(100) |
Indexes:
    "keyngram_idx" gin (to_tsvector('ngram'::regconfig, title::text)) TABLESPACE pg_default

openGauss=# drop table if exists articles;
DROP TABLE
openGauss=# CREATE TABLE articles (
openGauss(# ID int,
openGauss(# title VARCHAR(100),
openGauss(# FULLTEXT KEY (title)WITH PARSER ngram
openGauss(# );
CREATE TABLE
openGauss=# \d articles
       Table "fulltext_test.articles"
 Column |          Type          | Modifiers
--------+------------------------+-----------
 ID     | integer                |
 title  | character varying(100) |
Indexes:
    "articles_to_tsvector_idx" gin (to_tsvector('ngram'::regconfig, title::text)) TABLESPACE pg_default

openGauss=# create table table_ddl_0154(col1 int,col2 varchar(64), FULLTEXT idx_ddl_0154(col2));
CREATE TABLE
```
