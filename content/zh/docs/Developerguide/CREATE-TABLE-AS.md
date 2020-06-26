# CREATE TABLE AS<a name="ZH-CN_TOPIC_0242370582"></a>

## 功能描述<a name="zh-cn_topic_0237122118_zh-cn_topic_0059777601_sf40d8ce0a2af4856a44d883e623632b9"></a>

根据查询结果创建表。

CREATE TABLE AS创建一个表并且用来自SELECT命令的结果填充该表。该表的字段和SELECT输出字段的名称及数据类型相关。不过用户可以通过明确地给出一个字段名称列表来覆盖SELECT输出字段的名称。

CREATE TABLE AS对源表进行一次查询，然后将数据写入新表中，而查询视图结果会根据源表的变化而有所改变。相比之下，每次做查询的时候，视图都重新计算定义它的SELECT语句。

## 注意事项<a name="zh-cn_topic_0237122118_zh-cn_topic_0059777601_s0379750211b249b5a2831f6cdf27d110"></a>

-   分区表不能采用此方式进行创建。
-   如果在建表过程中数据库系统发生故障，系统恢复后可能无法自动清除之前已创建的、大小非0的磁盘文件。此种情况出现概率小，不影响数据库系统的正常运行。

## 语法格式<a name="zh-cn_topic_0237122118_zh-cn_topic_0059777601_s58148dd6e63843eebaa64756e4b093c9"></a>

```
CREATE [ UNLOGGED ] TABLE table_name
    [ (column_name [, ...] ) ]
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
    [ COMPRESS | NOCOMPRESS ]
    [ TABLESPACE tablespace_name ]
    AS query
    [ WITH [ NO ] DATA ];
```

## 参数说明<a name="zh-cn_topic_0237122118_zh-cn_topic_0059777601_sb8ea2c52307445c9934740862f4ecc85"></a>

-   **UNLOGGED**

    指定表为非日志表。在非日志表中写入的数据不会被写入到预写日志中，这样就会比普通表快很多。但是，它也是不安全的，非日志表在冲突或异常关机后会被自动删截。非日志表中的内容也不会被复制到备用服务器中。在该类表中创建的索引也不会被自动记录。

    -   使用场景：非日志表不能保证数据的安全性，用户应该在确保数据已经做好备份的前提下使用，例如系统升级时进行数据的备份。
    -   故障处理：当异常关机等操作导致非日志表上的索引发生数据丢失时，用户应该对发生错误的索引进行重建。

-   **table\_name**

    要创建的表名。

    取值范围：字符串，要符合标识符的命名规范。

-   **column\_name**

    新表中要创建的字段名。

    取值范围：字符串，要符合标识符的命名规范。

-   **WITH \( storage\_parameter \[= value\] \[, ... \] \)**

    这个子句为表或索引指定一个可选的存储参数。参数的详细说明如下所示。

    -   FILLFACTOR

        一个表的填充因子（fillfactor）是一个介于10和100之间的百分数。100（完全填充）是默认值。如果指定了较小的填充因子，INSERT操作仅按照填充因子指定的百分率填充表页。每个页上的剩余空间将用于在该页上更新行，这就使得UPDATE有机会在同一页上放置同一条记录的新版本，这比把新版本放置在其他页上更有效。对于一个从不更新的表将填充因子设为100是最佳选择，但是对于频繁更新的表，选择较小的填充因子则更加合适。该参数只对行存表有效。

        取值范围：10\~100

    -   ORIENTATION

        取值范围：

        COLUMN：表的数据将以列式存储。

        ROW（缺省值）：表的数据将以行式存储。

    -   COMPRESSION

        指定表数据的压缩级别，它决定了表数据的压缩比以及压缩时间。一般来讲，压缩级别越高，压缩比也越大，压缩时间也越长；反之亦然。实际压缩比取决于加载的表数据的分布特征。

        取值范围：

        列存表的有效值为YES/NO/LOW/MIDDLE/HIGH，默认值为LOW。

        行存表的有效值为YES/NO，默认值为NO。

    -   MAX\_BATCHROW

        指定了在数据加载过程中一个存储单元可以容纳记录的最大数目。该参数只对列存表有效。

        取值范围：10000\~60000


-   **COMPRESS / NOCOMPRESS**

    创建一个新表时，需要在创建表语句中指定关键字COMPRESS，这样，当对该表进行批量插入时就会触发压缩特性。该特性会在页范围内扫描所有元组数据，生成字典、压缩元组数据并进行存储。指定关键字NOCOMPRESS则不对表进行压缩。

    缺省值：NOCOMPRESS，即不对元组数据进行压缩。

-   **TABLESPACE tablespace\_name**

    指定新表将要在tablespace\_name表空间内创建。如果没有声明，将使用默认表空间。

-   **AS query**

    一个SELECT VALUES命令或者一个运行预备好的SELECT或VALUES查询的EXECUTE命令。

-   **\[ WITH \[ NO \] DATA \]**

    创建表时，是否也插入查询到的数据。默认是要数据，选择“NO”参数时，则不要数据。


## 示例<a name="zh-cn_topic_0237122118_zh-cn_topic_0059777601_sa7f2698f298f4001b3a283cb912f1f4d"></a>

```
--创建一个表tpcds.store_returns表。
postgres=# CREATE TABLE tpcds.store_returns
(
    W_WAREHOUSE_SK            INTEGER               NOT NULL,
    W_WAREHOUSE_ID            CHAR(16)              NOT NULL,
    sr_item_sk                VARCHAR(20)                   ,
    W_WAREHOUSE_SQ_FT         INTEGER                       
);
--创建一个表tpcds.store_returns_t1并插入tpcds.store_returns表中sr_item_sk字段中大于16的数值。
postgres=# CREATE TABLE tpcds.store_returns_t1 AS SELECT * FROM tpcds.store_returns WHERE sr_item_sk > '4795';

--使用tpcds.store_returns拷贝一个新表tpcds.store_returns_t2。
postgres=# CREATE TABLE tpcds.store_returns_t2 AS table tpcds.store_returns;

--删除表。
postgres=# DROP TABLE tpcds.store_returns_t1 ;
postgres=# DROP TABLE tpcds.store_returns_t2 ;
postgres=# DROP TABLE tpcds.store_returns;
```

## 相关链接<a name="zh-cn_topic_0237122118_zh-cn_topic_0059777601_sa0d9dc1ba4fb4ce58ecdfe391f0561d3"></a>

[CREATE TABLE](CREATE-TABLE.md)，[SELECT](SELECT.md)

