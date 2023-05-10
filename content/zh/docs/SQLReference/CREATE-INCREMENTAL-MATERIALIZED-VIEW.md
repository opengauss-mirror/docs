# CREATE INCREMENTAL MATERIALIZED VIEW

## 功能描述<a name="zh-cn_topic_0283136612_zh-cn_topic_0237122161_zh-cn_topic_0059777447_s984b3ec2b84d48bb843629462288417b"></a>

CREATE INCREMENTAL MATERIALIZED VIEW会创建一个增量物化视图，并且后续可以使用REFRESH MATERIALIZED VIEW（全量刷新）和REFRESH INCREMENTAL MATERIALIZED VIEW（增量刷新）刷新物化视图的数据。

CREATE INCREMENTAL MATERIALIZED VIEW类似于CREATE TABLE AS，不过它会记住被用来初始化该视图的查询， 因此它可以在后续中进行数据刷新。一个物化视图有很多和表相同的属性，但是不支持临时物化视图。

## 注意事项<a name="zh-cn_topic_0283136612_zh-cn_topic_0237122161_zh-cn_topic_0059777447_s3a6fd145e83b4e61a22dabdcf32ac282"></a>

-   增量物化视图不可以在临时表或全局临时表上创建。
-   增量物化视图仅支持简单过滤查询和基表UNION ALL查询。
-   创建增量物化视图不可指定分布列。
-   创建增量物化视图后，基表中的绝大多数DDL操作不再支持。
-   不支持对增量物化视图进行IUD操作。
-   增量物化视图创建后，当基表数据发生变化时，需要使用刷新（REFRESH）命令保持物化视图与基表同步。

## 语法格式<a name="zh-cn_topic_0283136612_zh-cn_topic_0237122161_zh-cn_topic_0059777447_sbe280a5c331e4b75969129444d341882"></a>

```
CREATE INCREMENTAL MATERIALIZED VIEW mv_name
    [ (column_name [, ...] ) ]
    [ TABLESPACE tablespace_name ]
    AS query;
```

## 参数说明<a name="zh-cn_topic_0283136612_zh-cn_topic_0237122161_zh-cn_topic_0059777447_sf2fd7956e26c49a8ae566c80a0e8e1c0"></a>

-   **mv\_name**

    要创建的物化视图的名称（可以被模式限定）。

    取值范围：字符串，要符合标识符的命名规范。

-   **column\_name**

    新物化视图中的一个列名。物化视图支持指定列，指定列需要和后面的查询语句结果的列数量保持一致；如果没有提供列名，会从查询的输出列名中获取列名。

    取值范围：字符串，要符合标识符的命名规范。

-   **TABLESPACE tablespace\_name**

    指定新建物化视图所属表空间。如果没有声明，将使用默认表空间。

-   **AS query**

    一个SELECT或者TABLE命令。这个查询将在一个安全受限的操作中运行。


## 示例<a name="zh-cn_topic_0283136612_zh-cn_topic_0237122161_zh-cn_topic_0059777447_s8a46083a59d940c3aaa2535b2f783645"></a>

```
--创建一个普通表
openGauss=# CREATE TABLE my_table (c1 int, c2 int);
--创建增量物化视图
openGauss=# CREATE INCREMENTAL MATERIALIZED VIEW my_imv AS SELECT * FROM my_table;
--基表写入数据
openGauss=# INSERT INTO my_table VALUES(1,1),(2,2);
--对增量物化视图my_imv进行增量刷新
openGauss=# REFRESH INCREMENTAL MATERIALIZED VIEW my_imv;
```

## 相关链接<a name="zh-cn_topic_0283136612_section1922813315464"></a>

[ALTER MATERIALIZED VIEW](ALTER-MATERIALIZED-VIEW.md)，  [CREATE MATERIALIZED VIEW](CREATE-MATERIALIZED-VIEW.md)，[CREATE TABLE](CREATE-TABLE.md)，  [DROP MATERIALIZED VIEW](DROP-MATERIALIZED-VIEW.md)，[REFRESH INCREMENTAL MATERIALIZED VIEW](REFRESH-INCREMENTAL-MATERIALIZED-VIEW.md)  ，[REFRESH MATERIALIZED VIEW](REFRESH-MATERIALIZED-VIEW.md)

