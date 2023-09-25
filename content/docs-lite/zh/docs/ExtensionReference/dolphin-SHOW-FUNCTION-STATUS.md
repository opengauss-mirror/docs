# SHOW FUNCTION STATUS

## 注意事项

N/A

## 功能描述

显示有关存储函数的信息。

## 语法格式

```
SHOW FUNCTION STATUS [LIKE 'pattern' | WHERE expr]
```

## 参数说明

- **WHERE expr**

  筛选表达式。

- **LIKE 'pattern'**

  pattern正则表达式匹配函数名。

## 返回结果集

| 字段                   | 说明                   | 备注                          |
| -------------------- | ---------------------- | ----------------------------- |
| Db                   | schema名字              | 按照schema展示 |
| Name                 | 函数名称                 |                               |
| TYPE                 | 类型                    | FUNCTION/PROCEDURE            |
| Deinfer              | 用户                   |                       |
| Modified             | 修改时间               |              |
| Created              | 创建时间               |              |
| Security_type        | 安全类型               |                  |
| Comment              | 注释                   |         |
| character_set_client | 创建时客户端的字符集   | 显示为空                      |
| collation_connection | 创建时客户端的排序规则 | 显示为空                      |
| Database Collation   | 数据库的排序集         |            |

## 示例

```sql
-- 创建函数
opengauss=# CREATE FUNCTION func_add_sql(integer, integer) RETURNS integer AS 'select $1 + $2;' LANGUAGE SQL IMMUTABLE RETURNS NULL ON NULL INPUT;
CREATE FUNCTION
opengauss=# show function status like 'func_add_s%';
   Db   |     Name     |   Type   | Definer |           Modified            |            Created            | Security_type | Comment | character_set_client | collation_connection | Database Collation
--------+--------------+----------+---------+-------------------------------+-------------------------------+---------------+---------+----------------------+----------------------+--------------------
 public | func_add_sql | FUNCTION | wyc     | 2022-09-24 14:42:29.427382+08 | 2022-09-24 14:42:29.427382+08 | INVOKER       |         |                      |                      | en_US.UTF-8
(1 row)

```