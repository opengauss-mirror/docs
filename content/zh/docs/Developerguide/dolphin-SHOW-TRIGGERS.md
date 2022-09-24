# SHOW TRIGGERS

## 功能描述

显示有关存储函数的信息。

## 注意事项

N/A

## 语法格式

```
SHOW TRIIGERS {FROM | IN} db_name [LIKE 'pattern' | WHERE expr]
```

## 参数说明

- **db_name**

  库名（或schema）。

- **WHERE expr**

  筛选表达式。

- **LIKE 'pattern'**

  pattern正则表达式匹配触发器名字。

## 返回结果集

| 字段名               | 类型                                 | 说明                      |
| -------------------- | ------------------------------------ | ------------------------- |
| Trigger              | 触发器名称                           |                           |
| Event                | 触发器事件（Insert、delete、update、truncate） |                           |
| Table                | 触发器定义的表                       |                           |
| Statement            | 触发器内容                           |                           |
| Timing               | 触发器时机（触发器之前或之后）       |                           |
| Created              | 触发器创建时间                       | 此处为空 |
| sql_mode             | 触发器创建时的sql mode               | 此处为空 |
| Definer              | 创建者                               |                           |
| character_set_client | 创建时客户端的字符集                 | 此处为空 |
| collation_connection | 创建时客户端的排序规则               | 此处为空 |
| Database Collation   | 数据库的排序集                       |                           |

## 实例

```sql
opengauss=# -- 创建触发器表和触发器函数
opengauss=# CREATE TABLE test_trigger_src_tbl(id1 INT, id2 INT, id3 INT);
CREATE OR REPLACE FUNCTION tri_insert_func() RETURNS TRIGGER AS $$ DECLARE BEGIN INSERT INTO test_trigger_des_tbl VALUES(NEW.id1, NEW.id2, NEW.id3); RETURN NEW; END $$ LANGUAGE PLPGSQL;
-- 创建触发器
CREATE TRIGGER insert_trigger BEFORE INSERT ON test_trigger_src_tbl FOR EACH ROW EXECUTE PROCEDURE tri_insert_func();
-- 查看信息
show triggers;
CREATE TABLE
opengauss=# CREATE TABLE test_trigger_des_tbl(id1 INT, id2 INT, id3 INT);
CREATE TABLE
opengauss=# CREATE OR REPLACE FUNCTION tri_insert_func() RETURNS TRIGGER AS $$ DECLARE BEGIN INSERT INTO test_trigger_des_tbl VALUES(NEW.id1, NEW.id2, NEW.id3); RETURN NEW; END $$ LANGUAGE PLPGSQL;
CREATE FUNCTION
opengauss=# -- 创建触发器
opengauss=# CREATE TRIGGER insert_trigger BEFORE INSERT ON test_trigger_src_tbl FOR EACH ROW EXECUTE PROCEDURE tri_insert_func();
CREATE TRIGGER
opengauss=# -- 查看信息
opengauss=# show triggers;
    Trigger     | Event  |        Table         |              Statement              | Timing | Created | sql_mode | Definer | character_set_client | collation_connection | Database Collation
----------------+--------+----------------------+-------------------------------------+--------+---------+----------+---------+----------------------+----------------------+--------------------
 insert_trigger | INSERT | test_trigger_src_tbl | EXECUTE PROCEDURE tri_insert_func() | BEFORE |         |          | wyc     |                      |                      | en_US.UTF-8
(1 row)
```