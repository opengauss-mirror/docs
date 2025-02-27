# CREATE MATERIALIZED VIEW LOG

CREATE MATERIALIZED VIEW LOG会创建一个物化视图日志，物化视图日志和表是一一对应的关系。

物化视图日志是用于增量刷新物化视图的，创建增量物化视图的时候如果相关的表还没有物化视图日志，会自动创建；如果已有，则直接使用已有的物化视图日志。

## 注意事项

-   由于物化视图日志只用于增量物化视图的增量刷新，所以在所属表没有被增量物化视图引用的情况下，物化视图日志不会被维护。
-   当某张表的最后一个增量物化视图被删除的时候，这张表对应的物化视图日志也会被自动删除。
-   为了保证数据的完整性，新创建的物化视图日志不能直接用于增量刷新，在创建物化视图日志之后必须先经过一次增量物化视图的全量刷新，之后才能进行增量刷新。

## 语法格式

```
CREATE MATERIALIZED VIEW LOG ON table_name;
```

## 参数说明

-   **table\_name**

    要创建的物化视图日志所属的表名。

## 示例

```
--创建一个普通表
openGauss=# CREATE TABLE my_table (c1 int, c2 int);
--创建物化视图日志
openGauss=# CREATE MATERIALIZED VIEW LOG ON my_table;
--创建增量物化视图
openGauss=# CREATE INCREMENTAL MATERIALIZED VIEW my_mv AS SELECT * FROM my_table;
```

## 相关链接

[CREATE INCREMENTAL MATERIALIZED VIEW](CREATE-INCREMENTAL-MATERIALIZED-VIEW.md)，[DROP MATERIALIZED VIEW](DROP-MATERIALIZED-VIEW.md)，[DROP MATERIALIZED VIEW LOG](DROP-MATERIALIZED-VIEW-LOG.md)，[REFRESH INCREMENTAL MATERIALIZED VIEW](REFRESH-INCREMENTAL-MATERIALIZED-VIEW.md)
