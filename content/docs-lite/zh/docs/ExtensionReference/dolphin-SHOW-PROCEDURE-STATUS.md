# SHOW PROCEDURE STATUS

## 注意事项

N/A

## 功能描述

显示有关存储过程的信息。

## 语法格式

```
SHOW PROCEDURE STATUS [LIKE 'pattern' | WHERE expr]
```

## 参数说明

参考<a href="dolphin-SHOW-FUNCTION-STATUS.md">SHOW FUNCTION STATUS</a>

## 展示内容

参考<a href="dolphin-SHOW-FUNCTION-STATUS.md">SHOW FUNCTION STATUS</a>

## 示例

```sql
opengauss=# -- 创建存储过程
opengauss=# create or replace procedure proc1() as declare genre_rec record; --声明记录类型
opengauss$# begin
opengauss$# for genre_rec in (select e1.ename from public.emp1 e1 join public.emp1mot e1m on e1.mgr = e1m.mgr)
opengauss$# loop
opengauss$# raise notice '%', genre_rec."ename"; --打印
opengauss$# end loop;
opengauss$# end;
opengauss$# /
CREATE PROCEDURE
    opengauss=# -- 查看信息
opengauss=# show procedure status like 'proc%';
   Db   | Name  |   Type    | Definer |           Modified            |            Created            | Security_type | Comment | character_set_client | collation_connection |Database Collation
--------+-------+-----------+---------+-------------------------------+-------------------------------+---------------+---------+----------------------+----------------------+--------------------
 public | proc1 | PROCEDURE | wyc     | 2022-09-24 14:46:40.868293+08 | 2022-09-24 14:46:40.868293+08 | INVOKER       |         |                      |                      |en_US.UTF-8
(1 row)
```