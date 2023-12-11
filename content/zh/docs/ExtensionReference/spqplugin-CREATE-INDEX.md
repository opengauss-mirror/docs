# CREATE INDEX

## 功能描述

在指定的表上创建索引。

索引可以用来提高数据库查询性能，但是不恰当的使用将导致数据库性能下降。建议在以下场景创建索引：

-   经常执行查询的字段。
-   在连接条件上创建索引，对于存在多字段连接的查询，建议在这些字段上建立组合索引。例如，select \* from t1 join t2 on t1.a=t2.a and t1.b=t2.b，可以在t1表上的a、b字段上建立组合索引。
-   where子句的过滤条件字段上（尤其是范围条件）。
-   在经常出现在order by、group by和distinct后的字段。

在分区表上创建索引与在普通表上创建索引的语法不太一样，使用时请注意，如不支持创建部分表索引。

## 注意事项

-   本章节只包含spqplugin新增的多机并行功能，原openGauss的语法未做删除和修改。

## 示例
```sql
--创建表t1。
openGauss=# create table t1(c1 int, c2 char);
CREATE TABLE
openGauss=# insert into t1 values(1, 'a');
INSERT 0 1

--在表t1上的c1字段上创建默认B-tree索引。
openGauss=# set spqplugin.spq_enable_btbuild = on;
SET
openGauss=# create index idx1 on t1 (c1) with (spq_build=on);
CREATE INDEX
openGauss=# \d+ t1
                             Table "public.t1"
 Column |     Type     | Modifiers | Storage  | Stats target | Description
--------+--------------+-----------+----------+--------------+-------------
 c1     | integer      |           | plain    |              |
 c2     | character(1) |           | extended |              |
Indexes:
    "idx1" btree (c1) WITH (spq_build=finish) TABLESPACE pg_default
Has OIDs: no
Options: orientation=row, compression=no

--删除索引。
openGauss=# drop index idx1;

--在表t1上的c1字段上创建在线B-tree索引。
openGauss=# set spqplugin.spq_enable_btbuild = on;
openGauss=# set spqplugin.spq_enable_btbuild_cic = on;
SET
SET
openGauss=# create index concurrently idx1 on t1 (c1) with (spq_build=on);
CREATE INDEX
openGauss=# \d+ t1
                             Table "public.t1"
 Column |     Type     | Modifiers | Storage  | Stats target | Description
--------+--------------+-----------+----------+--------------+-------------
 c1     | integer      |           | plain    |              |
 c2     | character(1) |           | extended |              |
Indexes:
    "idx1" btree (c1) WITH (spq_build=finish) TABLESPACE pg_default
Has OIDs: no
Options: orientation=row, compression=no

--删除索引、表。
openGauss=# drop index idx1;
openGauss=# drop table t1;
```

目前仅支持btree索引多机并行。

## 相关链接

[CREATE INDEX](../SQLReference/CREATE-INDEX.md)