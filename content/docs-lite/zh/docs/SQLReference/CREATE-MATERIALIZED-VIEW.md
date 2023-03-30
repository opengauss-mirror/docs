# CREATE MATERIALIZED VIEW<a name="ZH-CN_TOPIC_0289899973"></a>

CREATE MATERIALIZED VIEW会创建一个全量物化视图，并且后续可以使用REFRESH MATERIALIZED VIEW（全量刷新）刷新物化视图的数据。

CREATE MATERIALIZED VIEW类似于CREATE TABLE AS，不过它会记住被用来初始化该视图的查询， 因此它可以在后续中进行数据刷新。一个物化视图有很多和表相同的属性，但是不支持临时物化视图。

## 注意事项<a name="zh-cn_topic_0283136593_zh-cn_topic_0237122118_zh-cn_topic_0059777601_s0379750211b249b5a2831f6cdf27d110"></a>

-   全量物化视图不可以在临时表或全局临时表上创建。
-   全量物化视图不支持nodegroup。
-   创建全量物化视图后，基表中的绝大多数DDL操作不再支持。
-   不支持对全量物化视图进行IUD操作。
-   全量物化视图创建后，当基表数据发生变化时，需要使用刷新（REFRESH）命令保持物化视图与基表同步。
-   Ustore引擎不支持物化视图的创建和使用。

## 语法格式<a name="zh-cn_topic_0283136593_zh-cn_topic_0237122118_zh-cn_topic_0059777601_s58148dd6e63843eebaa64756e4b093c9"></a>

```
CREATE MATERIALIZED VIEW mv_name
    [ (column_name [, ...] ) ]
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
      [ TABLESPACE tablespace_name ]
    AS query
    [ WITH [ NO ] DATA ];
```

## 参数说明<a name="zh-cn_topic_0283136593_zh-cn_topic_0237122118_zh-cn_topic_0059777601_sb8ea2c52307445c9934740862f4ecc85"></a>

-   **mv\_name**

    要创建的物化视图的名称（可以被模式限定）。

    取值范围：字符串，要符合标识符的命名规范。

-   **column\_name**

    新物化视图中的一个列名。物化视图支持指定列，指定列需要和后面的查询语句结果的列数量保持一致；如果没有提供列名，会从查询的输出列名中获取列名。

    取值范围：字符串，要符合标识符的命名规范。

-   **WITH \( storage\_parameter \[= value\] \[, ... \] \)**

    这个子句为表或索引指定一个可选的存储参数。详见[CREATE TABLE](CREATE-TABLE.md)。

-   **TABLESPACE tablespace\_name**

    指定新建物化视图所属表空间。如果没有声明，将使用默认表空间。

-   **AS query**

    一个SELECT、TABLE 或者VALUES命令。这个查询将在一个安全受限的操作中运行。


## 示例<a name="zh-cn_topic_0283136593_zh-cn_topic_0237122118_zh-cn_topic_0059777601_sa7f2698f298f4001b3a283cb912f1f4d"></a>

```
--创建一个普通表
openGauss=# CREATE TABLE my_table (c1 int, c2 int);
--创建全量物化视图
openGauss=# CREATE MATERIALIZED VIEW my_mv AS SELECT * FROM my_table;
--基表写入数据
openGauss=# INSERT INTO my_table VALUES(1,1),(2,2);
--对全量物化视图my_mv进行全量刷新
openGauss=# REFRESH MATERIALIZED VIEW my_mv;
```

## 相关链接<a name="zh-cn_topic_0283136593_zh-cn_topic_0237122118_zh-cn_topic_0059777601_sa0d9dc1ba4fb4ce58ecdfe391f0561d3"></a>

[ALTER MATERIALIZED VIEW](ALTER-MATERIALIZED-VIEW.md)，  [CREATE INCREMENTAL MATERIALIZED VIEW](CREATE-INCREMENTAL-MATERIALIZED-VIEW.md)，[CREATE TABLE](CREATE-TABLE.md)，[DROP MATERIALIZED VIEW](DROP-MATERIALIZED-VIEW.md)，[REFRESH INCREMENTAL MATERIALIZED VIEW](REFRESH-INCREMENTAL-MATERIALIZED-VIEW.md)，[REFRESH MATERIALIZED VIEW](REFRESH-MATERIALIZED-VIEW.md)

