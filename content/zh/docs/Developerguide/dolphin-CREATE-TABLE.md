# CREATE TABLE

## 功能描述<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_s0867185fef0f4a228532d432b598cb26"></a>

在当前数据库中创建一个新的空白表，该表由命令执行者所有。

## 注意事项<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_sb04dbf08cbd848649163edbff21254a1"></a>

-   本章节只包含dolphin新增的语法，原openGauss的语法未做删除和修改。

## 语法格式<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_sc7a49d08f8ac43189f0e7b1c74f877eb"></a>


通过like创建表。
```
CREATE [ [ GLOBAL | LOCAL ] [ TEMPORARY | TEMP ] | UNLOGGED ] TABLE [ IF NOT EXISTS ] table_name LIKE source_table [ like_option [...] ]
```

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
  }
  ```

  COMMENT、index_type 的顺序和数量任意，但相同字段仅最后一个值生效。

-   其中like选项like\_option为：

    ```
    { INCLUDING | EXCLUDING } { DEFAULTS | GENERATED | CONSTRAINTS | INDEXES | STORAGE | COMMENTS | PARTITION | RELOPTIONS | ALL }
    ```

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
```
