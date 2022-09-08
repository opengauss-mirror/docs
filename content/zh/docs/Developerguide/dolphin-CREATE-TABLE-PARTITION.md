# CREATE TABLE PARTITION<a name="ZH-CN_TOPIC_0289900346"></a>

## 功能描述<a name="zh-cn_topic_0283136653_zh-cn_topic_0237122119_section1163224811518"></a>

创建分区表。分区表是把逻辑上的一张表根据某种方案分成几张物理块进行存储，这张逻辑上的表称之为分区表，物理块称之为分区。分区表是一张逻辑表，不存储数据，数据实际是存储在分区上的。

常见的分区方案有范围分区（Range Partitioning）、间隔分区（Interval Partitioning）、哈希分区（Hash Partitioning）、列表分区（List Partitioning）、数值分区（Value Partition）等。目前行存表支持范围分区、间隔分区、哈希分区、列表分区，列存表仅支持范围分区。

范围分区是根据表的一列或者多列，将要插入表的记录分为若干个范围，这些范围在不同的分区里没有重叠。为每个范围创建一个分区，用来存储相应的数据。

范围分区的分区策略是指记录插入分区的方式。目前范围分区仅支持范围分区策略。

范围分区策略：根据分区键值将记录映射到已创建的某个分区上，如果可以映射到已创建的某一分区上，则把记录插入到对应的分区上，否则给出报错和提示信息。这是最常用的分区策略。

间隔分区是一种特殊的范围分区，相比范围分区，新增间隔值定义，当插入记录找不到匹配的分区时，可以根据间隔值自动创建分区。

间隔分区只支持基于表的一列分区，并且该列只支持TIMESTAMP\[\(p\)\] \[WITHOUT TIME ZONE\]、TIMESTAMP\[\(p\)\] \[WITH TIME ZONE\]、DATE数据类型。

间隔分区策略：根据分区键值将记录映射到已创建的某个分区上，如果可以映射到已创建的某一分区上，则把记录插入到对应的分区上，否则根据分区键值和表定义信息自动创建一个分区，然后将记录插入新分区中，新创建的分区数据范围等于间隔值。

哈希分区是根据表的一列，为每个分区指定模数和余数，将要插入表的记录划分到对应的分区中，每个分区所持有的行都需要满足条件：分区键的值除以为其指定的模数将产生为其指定的余数。

哈希分区策略：根据分区键值将记录映射到已创建的某个分区上，如果可以映射到已创建的某一分区上，则把记录插入到对应的分区上，否则返回报错和提示信息。

列表分区是根据表的一列，将要插入表的记录通过每一个分区中出现的键值划分到对应的分区中，这些键值在不同的分区里没有重叠。为每组键值创建一个分区，用来存储相应的数据。

列表分区策略：根据分区键值将记录映射到已创建的某个分区上，如果可以映射到已创建的某一分区上，则把记录插入到对应的分区上，否则给出报错和提示信息。

分区可以提供若干好处：

-   某些类型的查询性能可以得到极大提升。特别是表中访问率较高的行位于一个单独分区或少数几个分区上的情况下。分区可以减少数据的搜索空间，提高数据访问效率。
-   当查询或更新一个分区的大部分记录时，连续扫描那个分区而不是访问整个表可以获得巨大的性能提升。
-   如果需要大量加载或者删除的记录位于单独的分区上，则可以通过直接读取或删除那个分区以获得巨大的性能提升，同时还可以避免由于大量DELETE导致的VACUUM超载（哈希分区不支持删除分区）。

## 注意事项<a name="zh-cn_topic_0283136653_zh-cn_topic_0237122119_zh-cn_topic_0059777586_s0bb17f15d73a4d978ef028b2686e0f7a"></a>

-   本章节只包含dolphin新增的语法，原openGauss的语法未做删除和修改。

-   使用table_indexclause创建分区表上的索引为LOCAL索引，不支持选择GLOBAL索引。


## 语法格式<a name="zh-cn_topic_0283136653_zh-cn_topic_0237122119_zh-cn_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

```
CREATE TABLE [ IF NOT EXISTS ] partition_table_name
( [ 
    { column_name data_type [ COLLATE collation ] [ column_constraint [ ... ] ]
    | table_constraint
    | table_indexclause
    | LIKE source_table [ like_option [...] ] }[, ... ]
] )
    [ AUTO_INCREMENT [ = ] value ]
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
    [ COMPRESS | NOCOMPRESS ]
    [ TABLESPACE tablespace_name ]
    [ COMMENT {=| } 'text' ]
     PARTITION BY { 
        {RANGE (partition_key) [ INTERVAL ('interval_expr') [ STORE IN (tablespace_name [, ... ] ) ] ] ( partition_less_than_item [, ... ] )} |
        {RANGE (partition_key) [ INTERVAL ('interval_expr') [ STORE IN (tablespace_name [, ... ] ) ] ] ( partition_start_end_item [, ... ] )} |
         {LIST (partition_key) ( PARTITION partition_name VALUES (list_values) [TABLESPACE tablespace_name][, ... ]）} |
        {HASH (partition_key) ( PARTITION partition_name [TABLESPACE tablespace_name][, ... ]）}
        {RANGE (partition_key) [ INTERVAL ('interval_expr') [ STORE IN (tablespace_name [, ... ] ) ] ] ( partition_less_than_item [COMMENT {=| } 'text'][...][, ... ] )} |
        {RANGE (partition_key) [ INTERVAL ('interval_expr') [ STORE IN (tablespace_name [, ... ] ) ] ] ( partition_start_end_item [COMMENT {=| } 'text'][...][, ... ] )} |
        {LIST | HASH (partition_key) (PARTITION partition_name [VALUES (list_values_clause)] opt_table_space [COMMENT {=| } 'text'][...])}
    } [ { ENABLE | DISABLE } ROW MOVEMENT ]; 
```

-   创建表上索引table_indexclause：

    ```
    {INDEX | KEY} [index_name] [index_type] (key_part,...)
    ```

-   其中参数index_type为：

    ```
    USING {BTREE | HASH | GIN | GIST | PSORT | UBTREE}
    ```

-   其中参数key_part为：

    ```
    {col_name | (expr)} [ASC | DESC]
    ```

## 示例<a name="zh-cn_topic_0283136653_zh-cn_topic_0237122119_zh-cn_topic_0059777586_s43dd49de892344bf89e6f56f17404842"></a>

    -- 分区表建索引，在create table 中index默认为local,不支持指定global/local
    CREATE TABLE test_partition_btree
    (
        f1  INTEGER,
        f2  INTEGER,
        f3  INTEGER,
        key part_btree_idx using btree(f1)	
    )
    PARTITION BY RANGE(f1)
    (
            PARTITION P1 VALUES LESS THAN(2450815),
            PARTITION P2 VALUES LESS THAN(2451179),
            PARTITION P3 VALUES LESS THAN(2451544),
            PARTITION P4 VALUES LESS THAN(MAXVALUE)
    );
    
    -- 分区表建组合索引
    CREATE TABLE test_partition_index
    (
        f1  INTEGER,
        f2  INTEGER,
        f3  INTEGER,
        key part_btree_idx2 using btree(f1 desc, f2 asc)
    )
    PARTITION BY RANGE(f1)
    (
            PARTITION P1 VALUES LESS THAN(2450815),
            PARTITION P2 VALUES LESS THAN(2451179),
            PARTITION P3 VALUES LESS THAN(2451544),
            PARTITION P4 VALUES LESS THAN(MAXVALUE)
    );
    
    -- 分区表列存创建索引
    CREATE TABLE test_partition_column
    (
        f1  INTEGER,
        f2  INTEGER,
        f3  INTEGER,
        key part_column(f1)
    ) with (ORIENTATION = COLUMN)
    PARTITION BY RANGE(f1)
    (
            PARTITION P1 VALUES LESS THAN(2450815),
            PARTITION P2 VALUES LESS THAN(2451179),
            PARTITION P3 VALUES LESS THAN(2451544),
            PARTITION P4 VALUES LESS THAN(MAXVALUE)
    );
    
    -- 分区表创建表达式索引
    CREATE TABLE test_partition_expr
    (
        f1  INTEGER,
        f2  INTEGER,
        f3  INTEGER,
        key part_expr_idx using btree((abs(f1)+1))
    )
    PARTITION BY RANGE(f1)
    (
            PARTITION P1 VALUES LESS THAN(2450815),
            PARTITION P2 VALUES LESS THAN(2451179),
            PARTITION P3 VALUES LESS THAN(2451544),
            PARTITION P4 VALUES LESS THAN(MAXVALUE)
    );
