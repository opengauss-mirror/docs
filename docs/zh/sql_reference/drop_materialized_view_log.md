# DROP MATERIALIZED VIEW LOG

## 功能描述

删除数据库中指定表的物化视图日志。

## 注意事项

删除物化视图日志之后，相关增量物化视图无法进行增量刷新。

## 语法格式

```
DROP MATERIALIZED VIEW LOG ON table_name;
```

## 参数说明

- **table\_name**

    要删除的物化视图日志所属表的名称。

## 示例

```
--删除my_table表所对应的物化视图日志。
openGauss=# DROP MATERIALIZED VIEW LOG ON my_table;
```

## 相关链接

[CREATE INCREMENTAL MATERIALIZED VIEW](create_incremental_materialized_view.md)，[CREATE MATERIALIZED VIEW LOG](create_materialized_view_log.md)，[DROP MATERIALIZED VIEW](drop_materialized_view.md)，[REFRESH INCREMENTAL MATERIALIZED VIEW](refresh_incremental_materialized_view.md)
