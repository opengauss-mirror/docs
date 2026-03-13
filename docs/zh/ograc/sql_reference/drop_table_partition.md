# DROP TABLE PARTITION

## 功能描述

删除分区表。如需要删除特定分区使用ALTER TABLE DROP PARTITION PartitionName。

## 注意事项

- 删除其他用户的表需要DROP ANY TABLE权限，SYS用户表只能有SYS用户删除。
- 开启回收站功能后删除表并不会立即删除，可以通过闪回命令恢复数据,system/nologging/sysaux/临时表空间下的表不支持闪回。
- oGRAC重启回滚期间不支持删除表。

## 语法格式

**stmt**

```
DROP TABLE
[IF EXISTS] [schema_name.]table_name
[CASCADE CONSTRAINTS]
[PURGE]
```

## 参数说明

- CASCADE CONSTRAINTS: 删除表时删除外键引用。
- PURGE: 删除表时不放入回收站。

## 示例

```SQL
-- 删除单个表
DROP TABLE employees;

-- 删除指定模式下的表
DROP TABLE sys.session_cache;

-- 删除表并级联删除外键约束
DROP TABLE departments CASCADE CONSTRAINTS;

-- 彻底删除表，不进回收站
DROP TABLE temporary_data PURGE;

```
