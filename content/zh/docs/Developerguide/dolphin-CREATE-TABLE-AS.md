# CREATE TABLE AS<a name="ZH-CN_TOPIC_0289900336"></a>

## 功能描述<a name="zh-cn_topic_0283136662_zh-cn_topic_0237122118_zh-cn_topic_0059777601_sf40d8ce0a2af4856a44d883e623632b9"></a>

根据查询结果创建表。

CREATE TABLE AS创建一个表并且用来自SELECT命令的结果填充该表。该表的字段和SELECT输出字段的名称及数据类型相关。不过用户可以通过明确地给出一个字段名称列表来覆盖SELECT输出字段的名称。

CREATE TABLE AS对源表进行一次查询，然后将数据写入新表中，而查询视图结果会根据源表的变化而有所改变。相比之下，每次做查询的时候，视图都重新计算定义它的SELECT语句。

## 注意事项<a name="zh-cn_topic_0283136662_zh-cn_topic_0237122118_zh-cn_topic_0059777601_s0379750211b249b5a2831f6cdf27d110"></a>

- 本章节只包含dolphin新增的语法，原openGauss的语法未做删除和修改。

## 语法格式<a name="zh-cn_topic_0283136662_zh-cn_topic_0237122118_zh-cn_topic_0059777601_s58148dd6e63843eebaa64756e4b093c9"></a>

```
CREATE [ [ GLOBAL | LOCAL ] [ TEMPORARY | TEMP ] | UNLOGGED ] TABLE table_name
    [ (column_name [, ...] ) ]
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
    [ ON COMMIT { PRESERVE ROWS | DELETE ROWS | DROP } ]
    [ COMPRESS | NOCOMPRESS ]
    [ TABLESPACE tablespace_name ]
    [ AS ] query
    [ WITH [ NO ] DATA ];
```

## 参数说明<a name="zh-cn_topic_0283136662_zh-cn_topic_0237122118_zh-cn_topic_0059777601_sb8ea2c52307445c9934740862f4ecc85"></a>

- **\[ AS \] query**

    一个SELECT VALUES命令或者一个运行预备好的SELECT或VALUES查询的EXECUTE命令。

    AS关键字可选，但若query中带有WITH语句，则必须使用括号将query包围，参考语句：

    ```
    CREATE TABLE t_new (WITH temp_t(a, b) AS (SELECT a, b FROM t_old) SELECT * FROM temp_t);
    ```


## 示例<a name="zh-cn_topic_0283136662_zh-cn_topic_0237122118_zh-cn_topic_0059777601_sa7f2698f298f4001b3a283cb912f1f4d"></a>

```
--创建一个表tpcds.store_returns表。
openGauss=# CREATE TABLE tpcds.store_returns
(
    W_WAREHOUSE_SK            INTEGER               NOT NULL,
    W_WAREHOUSE_ID            CHAR(16)              NOT NULL,
    sr_item_sk                VARCHAR(20)                   ,
    W_WAREHOUSE_SQ_FT         INTEGER
);
--创建一个表tpcds.store_returns_t1并插入tpcds.store_returns表中sr_item_sk字段中大于16的数值。
openGauss=# CREATE TABLE tpcds.store_returns_t1 AS SELECT * FROM tpcds.store_returns WHERE sr_item_sk > '4795';

--使用tpcds.store_returns拷贝一个新表tpcds.store_returns_t2。
openGauss=# CREATE TABLE tpcds.store_returns_t2 AS table tpcds.store_returns;

--删除表。
openGauss=# DROP TABLE tpcds.store_returns_t1 ;
openGauss=# DROP TABLE tpcds.store_returns_t2 ;
openGauss=# DROP TABLE tpcds.store_returns;
```

## 相关链接<a name="zh-cn_topic_0283136662_zh-cn_topic_0237122118_zh-cn_topic_0059777601_sa0d9dc1ba4fb4ce58ecdfe391f0561d3"></a>

[CREATE TABLE](CREATE-TABLE.md)，[SELECT](SELECT.md)
