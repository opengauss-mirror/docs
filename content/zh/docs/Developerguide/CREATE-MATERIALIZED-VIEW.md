# CREATE MATERIALIZED VIEW<a name="ZH-CN_TOPIC_0242370582"></a>

## 功能描述<a name="zh-cn_topic_0237122118_zh-cn_topic_0059777601_sf40d8ce0a2af4856a44d883e623632b9"></a>

CREATE MATERIALIZED VIEW 定义一个查询的物化视图。 在该命令被发出时，查询会被执行并且被用来填充该视图（除非使用了 WITH NO DATA），并且后来可能会用 REFRESH MATERIALIZED VIEW进行刷新；CREATE MATERIALIZED VIEW类似于 CREATE TABLE AS，不过它还会记住被用来初始化该视图的查询， 这样它可以在后来被命令刷新。一个物化视图有很多和表相同的属性，但是不支持临时物化视图。

## 注意事项<a name="zh-cn_topic_0237122118_zh-cn_topic_0059777601_s0379750211b249b5a2831f6cdf27d110"></a>

-   物化视图不可以在临时表或全局临时表上创建。
-   物化视图创建后，当基表数据发生变化时，需要使用刷新（REFRESH）命令保持物化视图与基表同步。

## 语法格式<a name="zh-cn_topic_0237122118_zh-cn_topic_0059777601_s58148dd6e63843eebaa64756e4b093c9"></a>

```
CREATE MATERIALIZED VIEW mv_name
    [ (column_name [, ...] ) ]
    [ WITH (storage_parameter [= value][, ...] ) ]
    [ TABLESPACE tablespace_name ]
    AS query
    [ WITH [ NO ] DATA ];
```

## 参数说明<a name="zh-cn_topic_0237122118_zh-cn_topic_0059777601_sb8ea2c52307445c9934740862f4ecc85"></a>

-   **mv\_name**

    要创建的物化视图的名称（可以被模式限定）。

    取值范围：字符串，要符合标识符的命名规范。

- **column\_name**

    新物化视图中的一个列名。物化视图支持指定列，需要和后面的查询语句结果的列数量保持一致；如果没有提供列名，会从查询的输出列名来得到。

    取值范围：字符串，要符合标识符的命名规范。

- **WITH \( storage\_parameter \[= value\] \[, ... \] \)**

    这个子句为表或索引指定一个可选的存储参数。所有CREATE TABLE支持的参数CREATE MATERIALIZED VIEW也支持，不过OIDS除外。详见[CREATE TABLE](CREATE-TABLE.md)。

-   **TABLESPACE tablespace\_name**

    指定新物化视图将要在tablespace\_name表空间内创建。如果没有声明，将使用默认表空间。

-   **AS query**

    一个SELECT、TABLE 或者VALUES命令。这个查询将在一个安全受限的操作中运行。

-   **\[ WITH \[ NO \] DATA \]**

    创建物化视图时，是否也插入查询到的数据。默认是要数据，选择“NO”参数时，则不要数据。


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
--以tpcds.store_returns表为基表创建一个物化视图tpcds.store_returns_mv。
postgres=# CREATE MATERIALIZED VIEW tpcds.store_returns_mv AS SELECT * FROM tpcds.store_returns';

--使用tpcds.store_returns拷贝一个新表tpcds.store_returns_mv2作为一个物化视图。
postgres=# CREATE MATERIALIZED VIEW tpcds.store_returns_mv2 AS table tpcds.store_returns;

--删除物化视图。
postgres=# DROP MATERIALIZED VIEW tpcds.store_returns_mv cascade;
```

## 相关链接<a name="zh-cn_topic_0237122118_zh-cn_topic_0059777601_sa0d9dc1ba4fb4ce58ecdfe391f0561d3"></a>

[CREATE TABLE](CREATE-TABLE.md)，[DROP MATERIALIZED VIEW](content/zh/docs/Developerguide/DROP-MATERIALIZED-VIEW.md)，[ALTER MATERIALIZED VIEW](content/zh/docs/Developerguide/ALTER-MATERIALIZED-VIEW.md)，[REFRESH MATERIALIZED VIEW](content/zh/docs/Developerguide/REFRESH-MATERIALIZED-VIEW.md)
