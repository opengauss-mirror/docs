# DROP INDEX

## 功能描述

删除索引

## 注意事项

- 删除当前用户的索引不需要额外的权限，删除其他用户的索引需要DROP ANY INDEX权限。sys索引权限只允许sys用户删除
- 数据库重启回滚期间不允许删除索引

## 语法格式

**stmt:**

```
DROP INDEX [IF EXISTS] [schema_name.]index_name
ON
[schema_name.]table_name
```

## 参数说明

- [schema_name.]table_name: 待删除索引的表名

## 示例

```SQL
--  删除索引并指定表名
DROP INDEX idx_test1_name ON test_table1;

-- 带schema的删除
DROP INDEX sys.idx_test1_email ON sys.test_table1;
```
